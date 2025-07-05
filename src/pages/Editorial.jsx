import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import certificate1 from "../images/certificate1.jpg";
import certificate2 from "../images/certificate2.jpg";

const EditorialAndReview = () => {
  const [activeTab, setActiveTab] = useState("editorial");

  const editorialRoles = [
    {
      title: "Guest Editor",
      journal: "Machines",
      publisher: "MDPI",
      topic: "Emerging Additive Manufacturing Techniques for Multifunctional Sustainable Technologies",
      year: "2024",
      certificateImage: certificate1,
      link: "https://www.mdpi.com/journal/machines/special_issues/7U5071745X",
    },
    {
      title: "Guest Editor",
      journal: "Frontiers in Transplantation",
      publisher: "Frontiers",
      topic: "Biosensors for Point-of-Care Diagnosis and Treatment",
      year: "2025",
      link: "https://www.frontiersin.org/journals/transplantation",
    },
    {
      title: "Guest Editor",
      journal: "Nano Energy, Frontiers in Energy Research",
      publisher: "Frontiers",
      topic: "Advancements in Nano Energy Harvesting and Thermal Control for Sustainable Technologies",
      year: "2024",
      link: "https://www.frontiersin.org/journals/energy-research/sections/nano-energy",
    },
  ];

  const peerReviews = [
    {
      title: "Peer Reviewer",
      journals:
        "Ceramics International (Elsevier), Nanotechnology (IOP), Micromachines, Polymers, and Materials (MDPI)",
      contributions:
        "Contributed to the evaluation of over 25 research papers, ensuring scientific rigor and innovation in materials science and nanotechnology.",
      researcherID: "Web of Science ResearcherID: HIR-5518-2022",
      certificateImage: certificate2,
    },
  ];

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="pt-[60px] text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500 hover:text-blue-600">
          📚 Editorial & Peer Review
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setActiveTab("editorial")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 border cursor-pointer ${
              activeTab === "editorial"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            📝 Editorial Roles
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 border cursor-pointer ${
              activeTab === "review"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
          >
            🔍 Peer Review
          </button>
        </div>

        {/* Content */}
        {activeTab === "editorial" ? (
          <div className="grid lg:grid-cols-1 gap-8 mb-10">
            {editorialRoles.map((role, index) => (
              <div
                key={index}
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {role.title} — <span className="text-blue-600">{role.journal}</span>
                </h3>
                <p className="text-gray-600">{role.publisher}</p>
                <p className="text-gray-600">Topic: {role.topic}</p>
                <p className="text-gray-500 font-medium mt-2">Year: {role.year}</p>
                {role.note && <p className="text-red-500 text-sm mt-2">{role.note}</p>}
                {role.certificateImage && (
                    <img
                        src={role.certificateImage}
                        alt="Certificate"
                        className="mt-4 rounded-lg shadow-md max-h-64 object-contain border m-auto"
                    />
                )}
                <a
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-1 gap-8 mb-10">
            {peerReviews.map((review, index) => (
              <div
                key={index}
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800">{review.title}</h3>
                <p className="text-gray-600">Journals: {review.journals}</p>
                <p className="text-gray-600">{review.contributions}</p>
                <p className="text-gray-500 font-medium mt-2">{review.researcherID}</p>
                {review.certificateImage && (
                    <img
                        src={review.certificateImage}
                        alt="Certificate"
                        className="mt-4 rounded-lg shadow-md max-h-64 object-contain border m-auto"
                    />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EditorialAndReview;
