"use client"

import React, { useRef } from 'react';
import SectionHeading from './section-header';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'motion/react';
import Project from './project';

export default function Projects() {

  const {ref} = useSectionInView("Solution", 0.3);
  
  return (
    <section 
      ref={ref}
      id="projects" 
      className='scroll-mt-28 mb-28'
    >
      <SectionHeading>Our Solutions</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
    
  );
}