import { useState, useEffect } from "react";

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Actual resume data based on your provided resume
  const resumeData = {
    education: [
      {
        institution: "Lovely Professional University",
        location: "Punjab, India",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        period: "Since August 2022",
        details: "CGPA: 8.16*"
      },
      {
        institution: "St Theresa's Convent School",
        location: "Karnal, Haryana",
        degree: "Intermediate",
        period: "April 2021 - March 2022",
        details: "Percentage: 90.4%"
      },
      {
        institution: "Delhi Public School",
        location: "Karnal, Haryana",
        degree: "Matriculation",
        period: "April 2019 - March 2020",
        details: "Percentage: 93.3%"
      }
    ],
    skills: [
      { category: "Programming Skills", items: ["Python", "Java", "C", "C++", "JavaScript", "PHP"] },
      { category: "Tools and Libraries", items: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL", "Bootstrap", "Tailwind", "GitHub"] },
      { category: "Soft Skills", items: ["Problem-Solving", "Team player", "Quick learner", "Adaptability"] }
    ],
    projects: [
      {
        title: "ClassAid",
        period: "April, 2025",
        description: [
          "Built a full-stack app to log and track infrastructure issues across blocks, floors, rooms, and objects",
          "Implemented role-based access (Admin, Worker, Student, Guest) with session-based auth",
          "Enabled real-time complaint status updates and object-level history with filtering",
          "Structured nested data in MongoDB for efficient hierarchy and complaint tracking"
        ],
        tech: "HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB",
        link: "Github"
      },
      {
        title: "Expenz",
        period: "November, 2024",
        description: [
          "Developed an intuitive expense tracking website to efficiently manage income and expenditures",
          "Implemented interactive graphs and charts for enhanced data visualization and financial insights",
          "Enabled users to create customizable categories for better organization of expenses and income",
          "Integrated user authentication and secure session management to protect financial data and personalize user experience"
        ],
        tech: "HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB, TailwindCS",
        link: "Github"
      },
      {
        title: "YouTub",
        period: "April, 2024",
        description: [
          "Engineered an engaging interface mirroring the YouTube website for a seamless user experience",
          "Crafted an ad-free video feed to ensure uninterrupted content browsing",
          "Integrated the YouTube API to dynamically retrieve and showcase video contents",
          "Implemented responsive design to ensure optimal viewing across devices and screen sizes"
        ],
        tech: "HTML, CSS, JavaScript, ReactJS, NodeJS",
        link: "Github"
      }
    ],
    experience: [
      {
        title: "Complete Interview Preparation",
        company: "GeeksForGeeks",
        period: "June - July, 2024",
        type: "SUMMER TRAINING",
        description: [
          "Learned essential DSA, system design, and core CS concepts tailored for coding interviews",
          "Practiced a wide range of coding problems with step-by-step explanations and solutions",
          "Gained insights into technical and behavioral interview strategies, including resume building and mock interviews",
          "Developed a Sudoko Solver as a Project using the DSA skills learned in the course"
        ]
      },
      {
        title: "Smart India Hackathon",
        company: "LPU",
        period: "August, 2024",
        type: "EXTRACURRICULAR",
        description: [
          "Built an intuitive platform for farmers to list and showcase their products with images",
          "Differentiated accounts of farmers and consumers providing them different functionality",
          "Facilitated direct transactions between farmers and consumers for a seamless purchasing experience"
        ],
        tech: "HTML, CSS, JavaScript, ReactJs, NodeJs, MongoDB"
      },
      {
        title: "IOT Devices",
        company: "LPU",
        period: "March, 2023",
        type: "EXTRACURRICULAR",
        description: [
          "Designed an automated highway lighting system for efficient energy usage",
          "Implemented Arduino to control and manage the lighting mechanism",
          "Integrated motion sensors and counters to activate lights based on vehicle movement"
        ],
        tech: "C, Ardiuno"
      }
    ],
    certificates: [
      { name: "Cloud Computing", issuer: "NPTEL", date: "October 2024" },
      { name: "Server side JavaScript with Node.js", issuer: "Coursera", date: "May, 2024" },
      { name: "HTML, CSS, and Javascript for Web Developers", issuer: "Coursera", date: "May, 2024" }
    ],
    achievements: [
      {
        title: "One among Dean's top 10% students at University",
        date: "September, 2024",
        description: "For good academic performance and extra-curricular activities at University"
      }
    ],
    contact: {
      email: "divyanshuvats1006@gmail.com",
      mobile: "+91-8278478622",
      linkedin: "https://www.linkedin.com/in/divyanshuvats-/",
      github: "https://github.com/divyanshuvats10"
    }
  };

  const TabButton = ({ id, label, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        active 
          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md" 
          : "text-gray-400 hover:text-indigo-400 hover:bg-indigo-50/10"
      }`}
    >
      {label}
    </button>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">{edu.institution}</h3>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full inline-block">
                    {edu.period}
                  </span>
                </div>
                <p className="text-white mt-2">{edu.degree}</p>
                <p className="text-gray-300 mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        );
      
      case "skills":
        return (
          <div className="space-y-6">
            {resumeData.skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-300 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/70 text-indigo-200 hover:bg-indigo-700 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case "projects":
        return (
          <div className="space-y-6">
            {resumeData.projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-xl font-bold text-blue-300">{project.title}</h3>
                  <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full inline-block">
                    {project.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-3">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium text-gray-300">Tech: </span>
                    {project.tech}
                  </div>
                  {project.link && (
                    <a 
                      href="#" 
                      className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      {project.link} ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      
      case "experience":
        return (
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="text-xs font-semibold text-indigo-400 mb-1">{exp.type}</div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-300 mb-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {exp.tech && (
                  <div className="text-sm text-gray-400 mt-3">
                    <span className="font-medium text-gray-300">Tech: </span>
                    {exp.tech}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case "certificates":
        return (
          <div className="space-y-4">
            {resumeData.certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
              >
                <div className="flex items-center gap-3">
                  <div className="text-indigo-400 text-2xl">🏆</div>
                  <div>
                    <h3 className="font-semibold text-blue-300">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
            ))}
            
            <div className="mt-6">
              <h3 className="text-xl font-bold text-blue-300 mb-3">Achievements</h3>
              {resumeData.achievements.map((achieve, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                    <h3 className="font-semibold text-blue-300">{achieve.title}</h3>
                    <span className="text-sm font-medium text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full">
                      {achieve.date}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{achieve.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-600 opacity-5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              My Resume
            </span>
          </h2>
          
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a 
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-gray-300 hover:text-white hover:bg-indigo-900/60 transition-colors"
            >
              <span>✉️</span> {resumeData.contact.email}
            </a>
            <a 
              href={`tel:${resumeData.contact.mobile}`}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-gray-300 hover:text-white hover:bg-indigo-900/60 transition-colors"
            >
              <span>📱</span> {resumeData.contact.mobile}
            </a>
            <a 
              href={resumeData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-gray-300 hover:text-white hover:bg-indigo-900/60 transition-colors"
            >
              <span>🔗</span> LinkedIn
            </a>
            <a 
              href={resumeData.contact.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 text-gray-300 hover:text-white hover:bg-indigo-900/60 transition-colors"
            >
              <span>💻</span> GitHub
            </a>
          </div>

          {/* Resume tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <TabButton id="education" label="Education" active={activeTab === "education"} />
            <TabButton id="skills" label="Skills" active={activeTab === "skills"} />
            <TabButton id="projects" label="Projects" active={activeTab === "projects"} />
            <TabButton id="experience" label="Experience" active={activeTab === "experience"} />
            <TabButton id="certificates" label="Certificates" active={activeTab === "certificates"} />
          </div>

          {/* Tab content */}
          <div className="mt-8 transition-all duration-300">
            {renderTabContent()}
          </div>

          {/* Download Button */}
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf" // Place your resume in the public/ folder as resume.pdf
              download
              className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg hover:shadow-indigo-500/30 transition duration-300 overflow-hidden"
            >
              <span className="relative z-10">📄 Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;