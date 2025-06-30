import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Building responsive and dynamic websites that deliver seamless user experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Creating visually stunning and user-friendly website designs that engage and inspire."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Developing smooth, high-performance mobile apps for Android and iOS platforms."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Improving your site’s search presence to attract more targeted organic traffic."
      />
    </div>
  );
};

export default MyServices;
