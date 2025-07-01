import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Full Stack Development"
          des="Dedicated web developer with expertise in designing and implementing responsive, scalable websites that deliver seamless user experiences and business value."
        />
        <ResumeCard
          badge="2024 - 2025"
          title="Front-end Developer"
          subTitle="Interactive Interfaces"
          des="Skilled in building responsive, user-friendly interfaces using modern frameworks to create seamless and engaging web experiences."
        />
        <ResumeCard
          badge="2024 - 2025"
          title="Senior Developer"
          subTitle="Team & Architecture"
          des="Experienced in leading development teams, designing scalable and efficient software solutions, mentoring junior developers, and ensuring alignment with business objectives."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4" >
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023 - 2025"
          title="ECU Sri Lanka & ESOF Metro Campus"
          subTitle="Rajagiriya & Colombo"
          des="Completed an 8-unit Computing Foundation at ECU Sri Lanka,
           Rajagiriya, and currently pursuing a three-year HND in Computing 
           at ESOF Metro Campus to advance my skills."
        />
        <ResumeCard
          badge="2023 - 2025"
          title="Programming Course"
          subTitle="Software Fundamentals"
          des="Completed programming coursework focused on foundational coding skills, algorithms, and practical application development using modern technologies."
        />
        <ResumeCard
          badge="2024 - 2025"
          title="MERN Stack Developer"
          subTitle="JavaScript Full Stack"
          des="Specialized in developing full-stack web applications using MongoDB, Express.js, React, and Node.js to deliver robust, scalable, and dynamic solutions."
        />
      </div>
    </div>
  );
};

export default Education;
