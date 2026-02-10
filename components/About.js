// components/About.js (Updated)
import { data } from "@/data/portfolioData";

const About = () => {
  const skillIcons = {
    "React.js": "react",
    "Redux Toolkit": "redux",
    "React Hook Form": "react",
    "Next.js": "nextjs",
    "JavaScript (ES6+)": "javascript",
    TypeScript: "typescript",
    "Tailwind CSS": "tailwindcss",
    "Material UI": "materialui",
    "Chakra UI": "chakraui",
    "REST APIs": "nodejs",
    "Git & GitHub": "git",
    Postman: "postman",
  };

  return (
    // NEW BG: bg-gray-800
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEW TEXT COLOR: text-white, accent blue-400 */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          <span className="text-blue-400">About Me</span>
        </h2>

        <div className="lg:flex lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* NEW TEXT COLOR: text-white */}
            <h3 className="text-3xl font-semibold text-white mb-4">
              {data.about.headline}
            </h3>
            {/* NEW TEXT COLOR: text-gray-300 */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {data.about.text}
            </p>
            {/* NEW BORDER & TEXT: border-blue-400, text-gray-400 */}
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">
              My Core Technologies
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {data.about.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center
                   bg-gray-700/40 rounded-xl p-4
                   hover:bg-gray-700 transition"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillIcons[skill]}/${skillIcons[skill]}-original.svg`}
                    alt={skill}
                    className="w-10 h-10 mb-2"
                  />
                  <span className="text-sm text-gray-300 text-center">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
