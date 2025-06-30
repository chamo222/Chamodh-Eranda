import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Chamodh Eranda</h2>
          <p className="text-base leading-6 ">
           I’m a web designer and full-stack developer based in Sri Lanka with rich 
           experience in building and designing modern, responsive websites. Skilled 
           in both WordPress and React, I craft seamless, user-centered digital experiences
            that stand out. I’m passionate about collaborating to bring your ideas to life 
            in a unique and engaging way.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            17
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Sri Lanka
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Gonahena,Kadawatha
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
