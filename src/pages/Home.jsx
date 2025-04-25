import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/div.png"; // Place your image in src/assets/

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Animated tags that represent your skills
  const skills = ["Java","Python","React", "JavaScript", "Node.js", "MongoDB", "CSS"];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Simplified background elements */}
      <br></br>
      <br></br>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          {/* Profile image with sleek, minimal design */}
          <div className="mb-10">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden relative z-10 hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-400/30">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              Divyanshu Vats
            </span>
          </h1>

          {/* Animated typing effect for title */}
          <div className="h-12 mb-6">
            <h2 className="text-2xl md:text-3xl text-gray-300 text-center overflow-hidden whitespace-nowrap border-r-4 border-indigo-500 pr-1 animate-typing">
              Full Stack Developer
            </h2>
          </div>

          {/* Description with better styling */}
          <p className="max-w-2xl text-gray-300 text-lg mb-10 text-center leading-relaxed">
            Welcome to my digital playground! I craft elegant solutions through code, turning ideas into 
            immersive digital experiences that solve real-world problems.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium bg-indigo-900 text-indigo-200 hover:bg-indigo-700 transition-all cursor-default animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <Link to="/projects">
              <button className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-indigo-500/30 transition duration-300 overflow-hidden">
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link to="/contact">
              <button className="group relative px-8 py-3 rounded-lg bg-transparent border-2 border-indigo-500 text-white font-medium text-lg hover:bg-indigo-900/30 transition duration-300">
                <span className="relative z-10">Contact Me</span>
              </button>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-12">
            {["github", "linkedin", "twitter", "codepen"].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-indigo-900 transition-colors duration-300">
                  {/* Social icon would go here */}
                  <span className="text-xl">{social.charAt(0).toUpperCase()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;