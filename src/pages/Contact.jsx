import React from "react";
import Navbar from "../components/Navbar";
import linkedin from '../images/linkedin.png'
import research from '../images/research.png'
import scholar from '../images/scholar.png'

const contactInfo = [
  {
    label: "Email 📧",
    value: "mr.kuntalmaity@gmail.com ",
    link: "mailto:mr.kuntalmaity@gmail.com ",
  },
  {
    label: "Work Email 📩",
    value: "kuntalmaity@ou.edu",
    link: "mailto:kuntalmaity@ou.edu",
  },
  {
    label: "Office Location 🏢",
    value: "Room 301E, Felgar Hall, School of Aerospace and Mechanical Engineering, University of Oklahoma, Norman, OK 73019, USA",
    link: "https://maps.app.goo.gl/cqrtdxPKhLDEp6d88",
  },
];

const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kuntal-maity-819432187/",
    icon: linkedin,
  },
  {
    platform: "Google Scholar",
    url: "https://scholar.google.com/citations?user=stzV8BMAAAAJ&hl=en",
    icon: scholar,
  },
  {
    platform: "ResearchGate",
    url: "https://www.researchgate.net/profile/Kuntal-Maity-2",
    icon: research,
  },
];

const Contact = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
        <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="pt-[60px] text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500 hover:text-blue-700">
          📩 Contact Me
        </h1>

        {/* Contact Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {contact.label}
                </h3>
                <a 
                  href={contact.link} 
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Links */}
        <section>
          <div className="flex flex-wrap gap-6 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300 flex items-center space-x-4"
              >
                <img src={social.icon} alt={social.platform} className="h-10 w-10" />
                <span className="text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {social.platform}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
