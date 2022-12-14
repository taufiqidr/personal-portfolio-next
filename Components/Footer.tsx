import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaGithub,
  FaPlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="static bottom-0 z-10 bg-slate-700 text-white flex flex-col items-center gap-y-3"
      id="footer"
    >
      <p className="text-base mt-3">Made by Taufiqurrahman Idrus &copy; 2022</p>
      <ul className="flex flex-row justify-between gap-x-3">
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"https://github.com/taufiqidr"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to github"
          >
            <FaGithub />
          </Link>
        </li>
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"https://www.linkedin.com/in/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to linkedin"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"https://twitter.com/taufiqidr"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to twitter"
          >
            <FaTwitter />
          </Link>
        </li>
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"https://www.instagram.com/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to instagram"
          >
            <FaInstagram />
          </Link>
        </li>
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"https://www.facebook.com/taufiqidr/"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to facebook"
          >
            <FaFacebook />
          </Link>
        </li>
        <li className="text-base hover:text-blue-500">
          <Link
            className="text-white hover:text-blue-500"
            href={"mailto:taufiqmck@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="send email"
          >
            <FaEnvelope />
          </Link>
        </li>
      </ul>
      <p className="text-center text-base">
        <Link
          href="https://www.flaticon.com/free-icons/t"
          className="text-light text-decoration-none"
          aria-label="flaticon link"
        >
          T icons created by Freepik - Flaticon
        </Link>
      </p>
      <div className="flex flex-col ">
        <Link
          href="https://reactjs.org/"
          className="text-center text-md"
          aria-label="link to react js"
        >
          Made with Next Js + Taildwind CSS
          <div className="flex flex-row justify-center my-3 gap-x-3">
            <Image
              src="/Nextjs-logo.svg"
              alt=""
              height={"40"}
              width={"40"}
              className={"text-white"}
            />
            {<FaPlus />}
            <Image
              src="/tailwind.svg"
              alt=""
              height={"40"}
              width={"40"}
              className={"text-white"}
            />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
