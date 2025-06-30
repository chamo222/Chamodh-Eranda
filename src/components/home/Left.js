import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Noor_Mohammad_resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://music.youtube.com/channel/your_channel"
              aria-label="YouTube Music"
              className="hover:text-designColor duration-300 text-xl"
            >
              <SiYoutubemusic />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-designColor duration-300 text-xl"
            >
              <BsFacebook />
            </a>
            <a
              href="https://instagram.com/eranda_cham"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-designColor duration-300 text-xl"
            >
              <FiInstagram />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="hover:text-designColor duration-300 text-xl"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="mailto:youremail@example.com"
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
            href="#contact"
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300"
          >
            Contact me <FiSend />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;