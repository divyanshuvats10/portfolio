import { useState, useEffect } from "react";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending delay
    setTimeout(() => {
      console.log("Message sent:", formData);
      // You can integrate with EmailJS, Formspree, or your backend here
      setIsSending(false);
      setIsSent(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600 opacity-10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-purple-600 opacity-5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400">
              Get In Touch
            </span>
          </h2>
          
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          
          <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
            Have a question or want to work together? Fill out the form below or reach out directly through my contact information.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-500/30">
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSending || isSent}
                        className={`group relative w-full py-3 px-6 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 ${
                          isSent 
                            ? "bg-green-600" 
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-indigo-500/30"
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSending ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : isSent ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Message Sent!
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="md:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 h-full p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-bold text-blue-300 mb-6">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0">
                      <span role="img" aria-label="email" className="text-lg">✉️</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">Email</h4>
                      <a 
                        href="mailto:divyanshuvats1006@gmail.com" 
                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                      >
                        divyanshuvats1006@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0">
                      <span role="img" aria-label="phone" className="text-lg">📱</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">Phone</h4>
                      <a 
                        href="tel:+918278478622" 
                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                      >
                        +91-8278478622
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0">
                      <span role="img" aria-label="linkedin" className="text-lg">🔗</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/divyanshuvats-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                      >
                        linkedin.com/in/divyanshuvats-
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/60 flex items-center justify-center flex-shrink-0">
                      <span role="img" aria-label="github" className="text-lg">💻</span>
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium mb-1">GitHub</h4>
                      <a 
                        href="https://github.com/divyanshuvats10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-300 hover:text-indigo-200 transition-colors"
                      >
                        github.com/divyanshuvats10
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-medium text-gray-400 mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {["twitter", "instagram", "dribbble", "behance"].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 rounded-full bg-slate-700 hover:bg-indigo-900/60 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        aria-label={social}
                      >
                        <span>{social.charAt(0).toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map or additional contact call-to-action */}
          <div className="mt-12 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
            <p className="text-gray-300">Looking forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;