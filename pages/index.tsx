import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
const picsum = () => `https://picsum.photos/500?grayscale`;
export default function Home() {
  return (
    <div>
      <section
        id="welcome"
        className="min-h-[calc(100vh-4rem)] bg-black text-white flex md:flex-row flex-col justify-center"
      >
        <div className="space-y-5 mx-4 my-auto md:w-1/2 md:text-start text-justify">
          <h1 className="sm:text-7xl text-5xl font-mono text-center">
            Hello World
          </h1>
          <p className="md:text-3xl text-2xl">
            My name is Taufiqurrahman Idrus. I am a full-stack web developer. I
            mainly use React js and Tailwind CSS for the frontend and Express/Go
            for the Backend.
          </p>
          <p className="md:text-3xl text-2xl">
            Welcome to my website. Check out{" "}
            <Link
              href={"/projects"}
              className={"text-blue-500"}
              aria-label="link to projects page"
            >
              my projects
            </Link>
            , read my{" "}
            <Link
              href={"/blog"}
              className={"text-blue-500"}
              aria-label="link to blog page"
            >
              blog
            </Link>{" "}
            or learn more{" "}
            <Link
              href={"/about"}
              className={"text-blue-500"}
              aria-label="link to about page"
            >
              about me
            </Link>
          </p>
        </div>
        <div className="w-1/2 mx-4 my-auto h-1/2 hidden md:block">
          <Image
            src="https://picsum.photos/500?grayscale"
            width={500}
            height={500}
            alt="random grayscale image"
            className="mx-auto max-w-full h-auto "
            loading="lazy"
            loader={picsum}
          />
        </div>
      </section>
      <section
        id="contact"
        className="bg-black max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col"
      >
        <div className="mx-4">
          <h1 className="text-5xl font-bold text-center my-4">Contacts</h1>
          <p className="text-xl text-center my-4">
            I&apos;m still open to job opportunities and collaboration. If you
            are interested in working with me, feel free to contact me on my
            social media account
          </p>
        </div>
        <div className="flex justify-center items-center h-screen mx-4">
          <ul className="grid grid-cols-3 gap-x-10 gap-y-10 sm:flex sm:flex-row sm:justify-evenly">
            <li className="text-7xl hover:text-blue-500">
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
            <li className="text-7xl hover:text-blue-500">
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
            <li className="text-7xl hover:text-blue-500">
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
            <li className="text-7xl hover:text-blue-500">
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
            <li className="text-7xl hover:text-blue-500">
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
            <li className="text-7xl hover:text-blue-500">
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
        </div>
      </section>
    </div>
  );
}
