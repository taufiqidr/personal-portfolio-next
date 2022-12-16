import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black min-h-screen text-white flex flex-col mx-4"
    >
      <h1 className="text-5xl font-bold text-center my-4">Projects</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={"https://taufiqidr.vercel.app/"}
            target="_blank"
            aria-label="A link to my personal website"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              taufiqidr.vercel.app
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            My personal website
          </p>
          <Link
            href={"https://github.com/taufiqidr/personal-portfolio-next"}
            target="_blank"
            aria-label="A link to my personal website source code"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={"https://tokofication.vercel.app/"}
            target="_blank"
            aria-label="A link to tokofication app"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              Tokofication
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            A fake marketplace app
          </p>
          <Link
            href={"https://github.com/taufiqidr/tokofication-t3"}
            target="_blank"
            aria-label="A link to tokofication app source code"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={"https://cuapan.vercel.app/"}
            target="_blank"
            aria-label="A link to cuapan v2 app"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              Cuapan V2
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            A better Twitter clone app made with the T3 stack
          </p>
          <Link
            href={"https://github.com/taufiqidr/cuapan-t3"}
            target="_blank"
            aria-label="A link to cuapan v2 app source code"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={"https://cuapan.github.io/"}
            target="_blank"
            aria-label="A link to cuapan v1 app"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              Cuapan V1 (Frontend)
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            A Twitter clone app made with the MERN stack
          </p>

          <Link
            href={"https://github.com/cuapan/cuapan.github.io"}
            target="_blank"
            aria-label="A link to cuapan v1 app frontend source code"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={"https://replit.com/@TaufiqIdrus/cuapan-backend"}
            target="_blank"
            aria-label="A link to cuapan v1 app"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              Cuapan V1 (Backend)
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            The backend server for Cuapan V1
          </p>
          <Link
            href={"https://github.com/taufiqidr/cuapan-backend"}
            target="_blank"
            aria-label="A link to cuapan v1 app backend source code"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>

        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
          <Link
            href={
              "https://colab.research.google.com/drive/10xa9-qA4rYnIhtTL8QCOAX9ImNKj1Twy?usp=sharing"
            }
            target="_blank"
            aria-label="A link my thesis project"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
              Thesis Project
            </h5>
          </Link>
          <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
            A CNN model for identifying disease in apple leaves
          </p>
          <Link
            href={
              "https://colab.research.google.com/drive/10xa9-qA4rYnIhtTL8QCOAX9ImNKj1Twy?usp=sharing"
            }
            target="_blank"
            aria-label="A link my thesis project"
          >
            <button
              type="button"
              className="items-center mt-3 border flex gap-x-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Source Code
              <BsArrowUpRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
