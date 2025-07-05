import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import mentoring1 from "../images/mentoring1.jpg";
import mentoring2 from "../images/mentoring2.jpg";
import teaching1 from "../images/teaching1.jpg"
import teaching2 from "../images/teaching2.jpg"
import teaching3 from "../images/teaching3.jpg"
import teaching4 from "../images/teaching4.jpg"

const teachingContent = [
  "I am currently an Instructor in the School of Aerospace and Mechanical Engineering at the University of Oklahoma.",
  "My teaching approach integrates active learning, 3D modeling, and virtual labs to help students connect theoretical principles to engineering practice.",
  "I also actively mentor undergraduate and graduate students across interdisciplinary research projects.",
];

const capstoneProject = [
  "Mentored two undergraduate students in their final year capstone projects, guiding them in developing independent research.",
  "• One student designed a self-powered micro aerial vehicle (MAV) and is now working in industry.",
  "• The other developed a 3D-printed flexoelectric sensor integrated with artificial intelligence (AI) and is planning to launch a startup in soft robotics.",
  "• Provided support on data analysis and presentation skills.",
]

const mentorshipOverview = [
  "Mentored 3 graduate and 9 undergraduate students in cutting-edge research across additive manufacturing, sensor technologies, and energy harvesting at the University of Oklahoma (OU) (2021–Present).",
  "Resulted in published papers, startup ventures, and career placements at SpaceX, Boeing, Blue Origin, and Northrop Grumman.",
  "Supported entrepreneurial initiatives and helped secure prestigious research fellowships.",
];

const pastMentees = [
  {
    name: "Colin Watson (Aerospace Engineering)",
    work: "Designed mechanical systems for prototype energy harvesting characterizations.",
    achievement: "Now Mechanical Design Engineer at SpaceX Starshield.",
  },
  {
    name: "Alias John (Aerospace Engineering)",
    work: "Worked on mechanical systems for energy harvesting prototypes.",
    achievement: "Now Propulsion Test Engineer at Blue Origin.",
  },
  {
    name: "Paige Hobart (Aerospace Engineering)",
    work: "Additive manufacturing of PVDF materials for energy harvesting.",
    achievement: "Now Structural Analysis Engineer at Boeing.",
  },
  {
    name: "Brandon Knight (Mechanical Engineering)",
    work: "Aerosol jet printing for self-powered marine antifouling technologies.",
    achievement: "Now Mechanical Engineer at Northrop Grumman.",
  },
  {
    name: "Kayla Gorham (Biomedical Engineering)",
    work: "Developed 3D-printed porous sensors for speech-signal monitoring.",
    achievement: "Now working in the biotech industry.",
  },
  {
    name: "Jacob Coffman (Engineering Physics)",
    work: "Created hybrid flexible nanogenerators for micro aerial vehicles.",
    achievement: "Now Validation Engineer at Navistar Inc.",
  },
  {
    name: "Emmanuel Hakizimana (Mechanical Engineering)",
    work: "Developed porous materials for thermoelectric generators.",
    achievement: "Previously at Battery Handling Systems, now at Alliantgroup.",
  },
  {
    name: "Rajan Rijal (Mechanical Engineering)",
    work: "3D printing of flexoelectric sensors.",
    achievement: "Secured an internship through mentorship.",
  },
  {
    name: "Davin Rhule (Mechanical Engineering)",
    work: "Developed a pellet extruder for additive manufacturing.",
    achievement: "Passed FE exam, continuing graduate studies at OU.",
  },
  {
    name: "Anirban Mondal (PhD Student)",
    work: "DC-assisted extrusion of carbon fiber composites for improved alignment in additive manufacturing.",
    achievement: "Co-authored 3 conference papers and 1 journal paper submission.",
  },
  {
    name: "Aryan Senthil (Engineering Physics)",
    work: "Developed flexoelectric sensors for structural health monitoring.",
    achievement: "Published at ASC Conference, journal submission in progress. Launching a startup in soft robotics sensors.",
  },
  {
    name: "Emily Bishop (Biomedical Engineering)",
    work: "Developed a human cardio-respiratory monitoring system using self-powered sensors.",
    achievement: "Earned two OU Engineering Research Fellowships (Summer & Fall 2022).",
  }
];

const Mentorship = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />
      <div className="pt-[100px] max-w-6xl mx-auto p-6 text-gray-900">
        <h1 className="text-4xl font-bold text-center mb-8 transition-all duration-500 hover:text-blue-700">
          🌟 Teaching & Mentorship
        </h1>

        <div className="space-y-10">
          {/* Teaching Section */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              Teaching at the University of Oklahoma
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">{teachingContent[0]}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">I have designed and taught: </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-6">
              <img
                src={teaching1}
                alt="teaching1"
                className="lg:h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
              <img
                src={teaching2}
                alt="teaching2"
                className="h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-2 mt-3">{teachingContent[1]}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-2">{teachingContent[2]}</p>
          </section>

          {/* Capstone Project */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              Capstone Project Mentoring
            </h2>
            {capstoneProject.map((line, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-2">
                {line}
              </p>
            ))}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-6">
              <img
                src={teaching3}
                alt="teaching3"
                className="h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
              <img
                src={teaching4}
                alt="teaching4"
                className="h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
            </div>
          </section>

          {/* OU Sooner Racing Team */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              Faculty Support: OU Sooner Racing Team, FSAE Michigan 2025
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              In May 2025, I had the opportunity to accompany the OU Sooner Racing Team to the Formula SAE (FSAE) international competition in Michigan. This event brought together student teams from across the globe to compete in a rigorous, hands-on engineering challenge—designing, building, and racing a Formula-style car.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-6">
              <img
                src={mentoring1}
                alt="mentoring1"
                className="lg:h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
              <img
                src={mentoring2}
                alt="mentoring2"
                className="h-[300px] w-auto object-cover rounded-lg shadow-inner"
              />
            </div>
            <p className="text-lg text-gray-700 mt-6">
              This was more than just a competition—it was a transformative learning experience for our students and a powerful example of engineering in action. The team demonstrated outstanding commitment, creativity, and teamwork throughout the week. I was honored to support them and proud of their representation of the University of Oklahoma.
            </p>
          </section>

          {/* Mentorship Approach */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              My Approach to Mentorship
            </h2>
            {mentorshipOverview.map((point, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed mb-2">
                {point}
              </p>
            ))}
          </section>

          {/* Past Mentees */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              Success Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {pastMentees.map((mentee, index) => (
                <div key={index} className="min-h-[190px] flex flex-col justify-between cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {mentee.name}
                  </h3>
                  <p className="text-gray-700">{mentee.work}</p>
                  <p className="text-sm font-semibold mt-3 text-green-700">{mentee.achievement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center mb-10">
            <h2 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
              Interested in Mentorship? 📩
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              If you're passionate about <strong>material science, nanotechnology, or energy harvesting</strong> and want guidance, feel free to reach out!
            </p>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">Contact Me</Link>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentorship;