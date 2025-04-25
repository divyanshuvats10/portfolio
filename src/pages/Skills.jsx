import { useState, useEffect } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  // Animated progress for skill proficiency
  const skills = {
    ProgrammingLanguages: [
      { name: "C", icon: "/icons/c.png", proficiency: 70 },
      { name: "C++", icon: "/icons/cpp.png", proficiency: 75 },
      { name: "Java", icon: "/icons/java.png", proficiency: 85 },
      { name: "Python", icon: "/icons/python.png", proficiency: 75 },
    ],
    Frontend: [
      { name: "React", icon: "/icons/react.png", proficiency: 90 },
      { name: "HTML", icon: "/icons/html.png", proficiency: 95 },
      { name: "CSS", icon: "/icons/css.png", proficiency: 85 },
      { name: "JavaScript", icon: "/icons/javascript.png", proficiency: 90 },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png", proficiency: 80 },
      { name: "Bootstrap", icon: "/icons/bootstrap.png", proficiency: 75 },
    ],
    Backend: [
      { name: "Node.js", icon: "/icons/node.png", proficiency: 85 },
      { name: "Express.js", icon: "/icons/express.png", proficiency: 80 },
    ],
    Databases: [
      { name: "MySQL", icon: "/icons/mysql.png", proficiency: 85 },
      { name: "MongoDB", icon: "/icons/mongodb.png", proficiency: 80 },
    ],
    Tools: [
      { name: "Git", icon: "/icons/git.png", proficiency: 90 },
      { name: "GitHub", icon: "/icons/github.png", proficiency: 90 },
    ],
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get all skills or filter by category
  const getSkillsToShow = () => {
    if (activeCategory === "all") {
      return Object.entries(skills).flatMap(([category, skillList]) => 
        skillList.map(skill => ({ ...skill, category }))
      );
    }
    return skills[activeCategory].map(skill => ({ ...skill, category: activeCategory }));
  };

  const skillsToShow = getSkillsToShow();

  return (
    <section className="min-h-screen bg-slate-900 text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-600 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-indigo-600 opacity-5 rounded-full blur-3xl -z-10"></div>
      
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 inline-block mb-2">
            Technical Arsenal
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of technologies I've mastered on my journey as a developer.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            All Skills
          </button>
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsToShow.map((skill, index) => (
            <div
              key={`${skill.category}-${skill.name}`}
              className="bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center p-5">
                <div className="bg-slate-700 p-3 rounded-lg mr-4 group-hover:bg-indigo-900/50 transition-colors duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium text-gray-200">{skill.name}</h3>
                    <span className="text-sm text-indigo-400">{skill.proficiency}%</span>
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full origin-left transition-all duration-1000 transform scale-x-0 group-hover:scale-x-100"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="bg-slate-900/50 py-1 px-3 text-right">
                <span className="text-xs text-gray-400">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Learning Journey */}
        <div className="mt-16 bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Learning Journey</h2>
          <p className="text-gray-300 mb-6">
            My technical skill set is constantly evolving. Currently exploring:
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["Docker", "AWS", "SpringBoot", "TypeScript", "Next.js"].map((skill, index) => (
              <span 
                key={index} 
                className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm border border-indigo-800/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;