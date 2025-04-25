import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Personal interests/hobbies with icons
  const interests = [
    { name: "Surfing Web", icon: "💻" },
    { name: "Reading", icon: "📚" },
    { name: "Music", icon: "🎵" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Section title with animated underline */}
        <div className="relative mb-16 text-center">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block">
            About Me
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left column - Profile and quick info */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
            {/* Profile image with animated border */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-slate-800 p-1 rounded-2xl">
                <img
                  src="/images/div.png"
                  alt="Divyanshu Vats"
                  className="w-64 h-64 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Quick stats */}
            <div className="w-full bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-slate-700">
              <h3 className="text-xl font-medium text-gray-200 mb-4">Quick Facts</h3>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-indigo-300">📍</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-200">Haryana, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-indigo-300">🎓</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="text-gray-200">Pursuing B.Tech in Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-indigo-300">💼</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Experience</p>
                  <p className="text-gray-200">2+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Bio and details */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main bio section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h2>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-200">
                Hello! I'm <span className="font-semibold text-purple-400">Divyanshu Vats</span>, a passionate 
                developer with a deep fascination for transforming complex problems into elegant digital solutions.
              </p>
              
              <p className="text-lg mb-4 leading-relaxed text-gray-300">
                My journey in tech began with curious exploration and has evolved into a focused expertise in 
                full-stack development. I specialize in crafting responsive, user-centered applications 
                using React, Node.js, and modern cloud infrastructure.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300">
                What drives me is the intersection of technology and creativity—finding that perfect balance 
                between functional code and intuitive design. I'm constantly expanding my skills through hands-on 
                projects and keeping up with emerging technologies.
              </p>
            </div>
            
            {/* What I enjoy */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">When I'm Not Coding</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-700/50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-indigo-900/30 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-3xl mb-2">{interest.icon}</span>
                    <span className="text-gray-200">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Philosophy/Approach */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Approach</h2>
              
              <p className="text-lg text-gray-300">
                I believe in creating technology that's not just functional but meaningful. Every line of code 
                I write aims to solve real problems and enhance user experiences. I value clean architecture, 
                collaborative development, and continuous learning as the foundations of great software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;