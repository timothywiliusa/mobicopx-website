"use client";

import { useRef, useState, useEffect } from "react";
import SectionHeading from "./section-header";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast, { Toaster } from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import LoadingPulseDot from "./loading-pulse-dot";
import { priorityCountryCodes, otherCountryCodes } from "@/lib/data";

// Define interest options
const interestOptions = [
  "General Enquiry",
  "License Plate Recognition",
  "Traffic Management",
  "Crowd Monitoring",
  "Wildlife Monitoring",
  "SOP Monitoring",
  "Document AI",
  "Job Opportunities",
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle checkbox changes
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedInterests((prev) => {
      if (e.target.checked) {
        return [...prev, value];
      } else {
        return prev.filter((item) => item !== value);
      }
    });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Us</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={formRef}
        action={async (formData) => {
          // Validate that at least one interest is selected
          if (selectedInterests.length === 0) {
            toast.error("Please select at least one area of interest");
            return;
          }

          setIsLoading(true);
          try {
            // Add selected interests to the form data
            selectedInterests.forEach((interest) => {
              formData.append("interests", interest);
            });

            let { data, error } = await sendEmail(formData);
            if (error) {
              console.log(error);
              toast.error(error);
              return;
            }
            toast.success("Message sent successfully!");
            formRef.current?.reset();
            setSelectedInterests([]);
          } finally {
            setIsLoading(false);
          }
        }}
      >
        {/* Name */}
        <input
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Name *"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
        />
        {/* Email */}
        <input
          name="email"
          type="email"
          required
          maxLength={100}
          placeholder="Email *"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
        />

        {/* Company Name */}
        <input
          name="companyName"
          type="text"
          required
          maxLength={100}
          placeholder="Company *"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
        />

        {/* Industry */}
        <input
          name="industry"
          type="text"
          // optional={true}
          maxLength={100}
          placeholder="Industry (optional)"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
        />

        {/* Country (optional) */}
        <input
          name="country"
          type="text"
          maxLength={100}
          placeholder="Country (optional)"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-3"
        />

        {/* Country Code + Phone Number */}
        <div className="flex gap-2 mb-3">
          <select
            name="countryCode"
            required
            defaultValue="+1"
            aria-label="Country code"
            className="h-14 px-3 rounded-lg borderBlack bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none text-gray-900 w-[8.5rem] shrink-0 cursor-pointer"
          >
            <optgroup label="Recent">
              {priorityCountryCodes.map(({ country, iso, code }) => (
                <option
                  key={`priority-${iso}-${code}`}
                  value={code}
                  title={country}
                >
                  {iso} {code}
                </option>
              ))}
            </optgroup>
            <optgroup label="All countries">
              {otherCountryCodes.map(({ country, iso, code }) => (
                <option
                  key={`other-${iso}-${code}`}
                  value={code}
                  title={country}
                >
                  {iso} {code}
                </option>
              ))}
            </optgroup>
          </select>

          <input
            name="phoneNumber"
            type="tel"
            required
            maxLength={20}
            placeholder="Phone Number *"
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none flex-1 min-w-0"
          />
        </div>

        {/* Interest Checkboxes */}
        <div className="mb-4">
          <p className="text-left mb-2 font-medium text-gray-700 dark:text-white/80">
            I am interested in * (select at least one)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
            {interestOptions.map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.replace(/\s+/g, "-").toLowerCase()}
                  value={option}
                  checked={selectedInterests.includes(option)}
                  onChange={handleInterestChange}
                  className="mr-2 h-4 w-4 cursor-pointer"
                />
                <label
                  htmlFor={option.replace(/\s+/g, "-").toLowerCase()}
                  className="text-gray-700 dark:text-white/80 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Comments (optional) */}
        <textarea
          name="comments"
          maxLength={1000}
          placeholder="Comments (optional)"
          className="h-40 px-4 py-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-6"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 mx-auto"
        >
          {isLoading ? (
            <LoadingPulseDot />
          ) : (
            <>
              Send{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
      <Toaster />
    </motion.section>
  );
}
