import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Chamodh_resume.pdf";
import { bannerImg } from "../../assets/index";
import { FaCreditCard } from "react-icons/fa";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer", "CEO of LogicForge.lk"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="eager"
          alt="Banner of Chamodh Eranda"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Chamodh Eranda</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking={false} cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a
              href="https://github.com/chamo222"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/chamodh-eranda-ab0161227"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/watch?v=gGgk-pXTrkY&list=RDgGgk-pXTrkY&start_radio=1&t=23s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube video player"
              className="hover:text-designColor duration-300 text-xl"
            >
              <SiYoutubemusic />
            </a>
            <a
              href="https://facebook.com/H.D.ChamodhEranda"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-designColor duration-300 text-xl"
            >
              <BsFacebook />
            </a>
            <a
              href="https://instagram.com/eranda_chamodh"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.threads.net/@eranda_chamodh"
              target="_blank"
              rel="noreferrer"
              aria-label="Threads"
              className="hover:text-designColor duration-300 text-xl"
            >
              <SiThreads />
            </a>
            <a
              href="mailto:Chamodheranda51@gmail.com"
              aria-label="Email"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a
            href="tel:+94770182402"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Contact me <FiSend />
          </a>
          {/* Pay Me Button */}
          <a
            href="/payment"
            className="w-1/3 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Pay Me <FaCreditCard className="text-white text-base" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;