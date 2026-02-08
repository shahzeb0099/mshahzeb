// components/Hero.js
import Button from "./ui/Button";
import { data } from "@/data/portfolioData";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-start min-h-[90vh] px-4 py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex items-center w-full gap-12">
        {/* LEFT CONTENT */}
        <div className="flex items-center">
          <div className="hidden md:block h-72 w-1 bg-blue-500/50 mr-12 rounded-full shadow-lg shadow-blue-500/20"></div>

          <div className="max-w-4xl text-left">
            <p className="text-xl font-medium text-blue-400 mb-4 tracking-widest uppercase animate-fadeInUp">
              Hi, my name is
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-fadeInUp delay-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                {data.name}
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-8 animate-fadeInUp delay-400">
              {data.title}
            </h2>

            <p className="max-w-2xl text-xl text-gray-400 mb-10 animate-fadeInUp delay-600">
              {data.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-800">
              <Button primary href="/#projects">
                View My Work
              </Button>
              <Button href="/#contact">Get In Touch</Button>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL BLOCK */}
        {/* RIGHT FEATURED PROJECT */}
        {/* RIGHT GIF SECTION */}
        <div className="hidden lg:flex flex-1 justify-center items-center animate-fadeInUp delay-1000">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-4 shadow-xl">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Frontend Developer Coding"
              className="rounded-xl w-[420px] h-auto object-cover"
            />
            <p className="text-center text-gray-400 text-sm mt-3">
              Building modern frontend experiences with React & Next.js
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
