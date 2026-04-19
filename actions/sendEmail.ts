"use server";

// import { Resend } from "resels
import { validateString, getErrorMessage } from "../lib/utils";
// import ContactFormEmail from "@/lib/email-template";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { MdSubject } from "react-icons/md";

const firebaseConfig = {
  // FIREBASE_CONFIGURATION
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// const resend = new Resend(process.env.RESEND_API_KEY);

// turnstile response type
type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
};

// Verify turnstile token
const verifyTurnstileToken = async (
  token: string,
  secretKey: string,
): Promise<TurnstileResponse> => {
  const SECRET_KEY = secretKey;
  const response = await fetch(
    `https://challenges.cloudflare.com/turnstile/v0/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
      }),
    },
  );
  return (await response.json()) as TurnstileResponse;
};

export const sendEmail = async (form: FormData) => {
  const turnstileToken = form.get("cf-turnstile-response") as string;

  if (!turnstileToken) {
    return {
      success: false,
      error: "Turnstile token is required",
    };
  }

  // Verify turnstile token
  const verification = await verifyTurnstileToken(
    turnstileToken,
    (process.env.TURNSTILE_SECRET_KEY as string) || "",
  );

  if (!verification.success) {
    return {
      success: false,
      error: "Turnstile verification failed",
      errors: verification["error-codes"],
    };
  }

  // Get all form fields
  const name = form.get("name");
  const companyName = form.get("companyName");
  const industry = form.get("industry") || "Not provided";
  const email = form.get("email");
  const country = form.get("country") || "Not provided";
  const countryCode = form.get("countryCode");
  const phoneNumber = form.get("phoneNumber");
  const comments = form.get("comments") || "No comments provided";

  // Get all interests (multiple values)
  const interests = form.getAll("interests");

  // Validate required fields
  if (!validateString(name as string, 100)) {
    return {
      error: "Invalid name",
    };
  }
  if (!validateString(companyName as string, 100)) {
    return {
      error: "Invalid company name",
    };
  }
  // if (!validateString(industry as string, 100)) {
  //   return {
  //     error: "Invalid industry",
  //   };
  // }
  if (!validateString(email as string, 100)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(countryCode as string, 10)) {
    return {
      error: "Invalid country code",
    };
  }
  if (!validateString(phoneNumber as string, 20)) {
    return {
      error: "Invalid phone number",
    };
  }
  if (!interests || interests.length === 0) {
    return {
      error: "Please select at least one area of interest",
    };
  }

  let data;
  const hostmail = "info@timothywiliusa.com";
  // const recipientEmail = "zb@forumpainting.com";
  try {
    // Format interests for display
    const interestsString = Array.isArray(interests)
      ? interests.join(", ")
      : "None selected";

    // Create HTML content for the email
    const htmlContent = `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Country Code:</strong> ${countryCode}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Interests:</strong> ${interestsString}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      </div>
    `;

    // Plain text version
    const textContent = `
      New Contact Form Submission
      
      Name: ${name}
      Company Name: ${companyName}
      Industry: ${industry}
      Email: ${email}
      Country: ${country}
      Country Code: ${countryCode}
      Phone Number: ${phoneNumber}
      Interests: ${interestsString}
      Comments: ${comments}
    `;

    // Get primary interest for subject line (first one selected)
    const primaryInterest =
      Array.isArray(interests) && interests.length > 0
        ? interests[0]
        : "General Inquiry";

    // Send to admin
    data = await addDoc(collection(db, "mail"), {
      from: [hostmail],
      to: hostmail,
      replyTo: email,
      message: {
        subject: `New Contact Form: ${primaryInterest} - ${companyName}`,
        text: textContent,
        html: htmlContent,
      },
    });

    // Send confirmation to user
    //   data = await addDoc(collection(db, "mail"), {
    //     from: [hostmail],
    //     to: email,
    //     replyTo: hostmail,
    //     message: {
    //       subject: "Thank you for contacting MobiCopX Solutions",
    //       text: `Thank you for your interest in MobiCopX Solutions. We have received your inquiry and will get back to you shortly.`,
    //       html: `
    //         <div>
    //           <h2>Thank you for contacting MobiCopX Solutions</h2>
    //           <p>We have received your inquiry about the following areas: ${interestsString}.</p>
    //           <p>Our team will review your message and get back to you as soon as possible.</p>
    //           <p>This is an automated confirmation.</p>
    //         </div>
    //       `,
    //     },
    //   });
    // } catch (error: unknown) {
    //   console.log("errors have happened");
    //   return {
    //     //data: null,
    //     error: getErrorMessage(error),
    //   };
    // }

    console.log("Document written with ID: ", data.id);
    console.log("returning");

    return {
      data: data.id,
    };
  } catch (error: unknown) {
    console.log("errors have happened");
    return {
      //data: null,
      error: getErrorMessage(error),
    };
  }
};
