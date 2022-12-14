import Image from "next/image";
import React from "react";

const About = () => {
  const me = () =>
    "https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/IMG_20220607_113010.jpg?alt=media&token=317d7603-963c-4ee8-a66f-ba54c5fbda08";
  return (
    <>
      <section
        id="about"
        className="bg-black h-auto min-h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col sm:flex-row-reverse sm:items-center mx-4"
      >
        <div className="mx-4">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/mynotes-taufiqidr.appspot.com/o/IMG_20220607_113010.jpg?alt=media&token=317d7603-963c-4ee8-a66f-ba54c5fbda08"
            className="rounded-full"
            alt="Taufiqurrahman Idrus"
            width={2196}
            height={2238}
            loading="lazy"
            loader={me}
          />
        </div>
        <div className="mx-4">
          <h1 className="text-5xl font-bold text-center sm:mb-10">About Me</h1>
          <p className="sm:text-xl text-base text-justify">
            I am a fresh graduate with a bachelor&apos;s degree in Computer
            Science (S.Kom) from UIN Maulana Malik Ibrahim Malang. I love to
            code and solve problems. My main interest is in web development. I
            can do frontend as well as backend development. I mainly use Next js
            framework with Typescript. I am actively looking for a job to start
            my career in the IT world.
          </p>
        </div>
      </section>
      <section
        id="skills"
        className="bg-black h-auto min-h-[calc(100vh-4rem)] text-white scroll-mt-16 flex flex-col justify-center mx-4"
      >
        <div className="mx-4 mb-4 justify-center ">
          <h1 className="text-5xl font-bold text-center sm:mb-10">
            Skills and Tools
          </h1>
          <p className="text-xl text-center">
            As a software engineer, I have some skills that I possess and tools
            that I use to get my job done. I decided to divide it into 3
            categories:
          </p>
        </div>
        <div className="flex justify-center flex-col sm:flex-row sm:justify-evenly space-y-4 sm:space-y-0">
          <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
            <div className="bg-blue-700 p-3 rounded-t-xl">
              <h4 className="font-semibold text-center text-white">
                Programming Language
              </h4>
            </div>
            <div className="text-center space-y-1">
              <p className="font-semibold underline">Frequently Used</p>
              <ul className="">
                <li>Javascript/Typescript</li>
                <li>Python</li>
              </ul>
              <p className="font-semibold underline">Rarely Used</p>
              <ul className="">
                <li>Java</li>
                <li>PHP</li>
                <li>C/C++</li>
                <li>Go</li>
              </ul>
            </div>
          </div>
          <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
            <div className="bg-blue-500 p-3 rounded-t-xl">
              <h4 className="font-semibold text-center text-black">
                Frameworks
              </h4>
            </div>
            <div className="text-center space-y-1">
              <p className="font-semibold underline">Frequently Used</p>
              <ul className="">
                <li>Next JS</li>
                <li>Tailwind CSS</li>
                <li>Prisma</li>
                <li>tRPC</li>
              </ul>
              <p className="font-semibold underline">Rarely Used</p>
              <ul className="">
                <li>Keras/Tensorflow</li>
                <li>CodeIgniter</li>
              </ul>
            </div>
          </div>
          <div className="bg-white text-black rounded-xl mx-4 sm:w-64 h-72">
            <div className="bg-blue-300 p-3 rounded-t-xl">
              <h4 className="font-semibold text-center text-black">Tools</h4>
            </div>
            <div className="text-center space-y-1">
              <p className="font-semibold underline">Frequently Used</p>
              <ul className="">
                <li>Git</li>
                <li>Github</li>
                <li>Postman</li>
                <li>Google Chrome</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
