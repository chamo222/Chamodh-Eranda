import React from "react";
import { Link } from "react-router-dom"; // ✅ import added
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>

      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>

      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2025</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">
          Designer Conference at Florida, Sri Lanka 2025
        </li>
      </ul>

      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+94 770182402</li>
        <li className="sidenavLi">Chamodheranda51@gmail.com</li>
      </ul>

      {/* ✅ New Payment Section */}
      <SidenavTitle title="P" subTitle="ayment" />
      <ul>
        <li className="sidenavLi">
          <Link to="/payment" className="hover:text-designColor transition duration-300">
            💳 Pay Me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;