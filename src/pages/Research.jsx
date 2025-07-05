import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import research2 from "../images/research2.jpg";
import research3 from "../images/research3.jpg";
import research6 from "../images/research6.jpg";
import research7 from "../images/research7.jpg";
import research8 from "../images/research8.jpg";
import research9 from "../images/research9.jpg";
import research10 from "../images/research10.jpg";
import research11 from "../images/research11.jpg";
import research12 from "../images/research12.jpg";
import research13 from "../images/research13.jpg";
import research14 from "../images/research14.jpg";

const researchCategories = [
  {
    id: 1,
    title: "Engineered Piezoelectric Materials",
    description: "Designing the foundation: sustainable, responsive, and multifunctional materials",
    icon: "🧪",
    image: research7,
    focusAreas: [
      "Sustainable Biopolymers: Plant-derived cellulose, natural fibers",
      "Ferroelectric Polymers: PVDF and PVDF-based composites",
      "2D Materials: MoS₂ nanosheets, Graphene",
      "Hybrid Perovskites: CsPbI₃-PVDF systems for dual piezo-phototronic applications"
    ],
    highlights: [
      "Custom-tuned d₃₃ coefficients for targeted applications",
      "Biocompatibility and biodegradability",
      "High energy conversion efficiency and environmental sustainability"
    ],
    relatedImages: [
      { id: 1, image: research10 },
      { id: 2, image: research11 },
      { id: 3, image: research12 },
    ]
  },
  {
    id: 2,
    title: "Advanced Manufacturing of Functional Materials",
    description: "Fabrication techniques that scale smart materials into real-world systems",
    icon: "🏭",
    image: research8,
    techniques: [
      "3D Printing (FDM/DIW): Design of complex sensor geometries and composite structures",
      "Electrospinning: Random and aligned nanofiber fabrication",
      "In-Situ Electric Field-Assisted Alignment during extrusion",
      "Device Prototyping: Integrated sensor arrays"
    ],
    highlights: [
      "Highly aligned nanofiber composites",
      "Scalable sensor manufacturing",
      "Integration from micro to macro for wearables and aerospace"
    ],
    relatedImages: [
      { id: 4, image: research13 },
      { id: 5, image: research14 },
    ]
  },
  {
    id: 3,
    title: "Self-Powered Nanogenerators and Sensing Systems",
    description: "From material to function: powering the future through sustainable sensing",
    icon: "⚡",
    image: research9,
    applications: [
      "Flexible Electronics: Wearable biosensors, AI-integrated health diagnostics",
      "Human Health Monitoring: Cardiovascular and respiratory sensors",
      "Clean Energy Harvesting: Hybrid pyro-/piezoelectric nanogenerators",
      "Aerospace SHM: Flexoelectric sensor arrays in composites"
    ],
    highlights: [
      "Battery-free operation",
      "Real-time decision-making",
      "Field-tested for human health and aerospace"
    ],
    relatedProjects: [
      {
        id: 1,
        title: "Self-Powered Biosensor for Human Health Monitoring",
        description:
          "Flexible, AI-assisted biosensor for real-time vitals tracking (heart, respiration). Enables early detection of diseases.",
        applications: "Remote health monitoring, wearable diagnostics, telemedicine.",
        image: research2,
      },
      {
        id: 2,
        title: "3D Printed Flexoelectric Sensor for Aerospace SHM",
        description:
          "Battery-free, shape-conforming flexoelectric sensor for structural monitoring in aerospace systems.",
        applications: "Aircraft safety, composite structure monitoring.",
        image: research3,
      },
      {
        id: 4,
        title: "Perovskite-Based Nanogenerators & Photodetectors",
        description:
          "Hybrid CsPbI₃-PVDF composite enabling simultaneous energy harvesting and light detection.",
        applications: "Solar cells, optoelectronics, smart sensors.",
        image: research6,
      },
    ]
  }
];

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedResearch(null);
  };

  const handleBackToProjects = () => {
    setSelectedResearch(null);
  };

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />

      {/* Categories View */}
      {!selectedCategory && !selectedResearch && (
        <div className="pt-[100px] max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 hover:text-blue-700 transition-all duration-500">
            🔬 Research
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            My research focuses on designing smart and sustainable material systems for energy harvesting,
            diagnostics, and aerospace monitoring—by integrating engineered materials with advanced manufacturing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {researchCategories.map((category) => (
              <div
                key={category.id}
                className="cursor-pointer text-center bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm italic">{category.description}</p>
                <div className="mt-4 text-blue-600 font-semibold hover:underline">Click to explore →</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Detail View */}
      {selectedCategory && !selectedResearch && (
        <div className="pt-[100px] max-w-6xl mx-auto px-6 py-10">
          <button
            onClick={handleBackToCategories}
            className="mb-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          >
            ← Back to Categories
          </button>

          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{selectedCategory.icon}</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedCategory.title}</h1>
            <p className="text-lg text-gray-600 italic">{selectedCategory.description}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-10">
            {selectedCategory.focusAreas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Focus Areas:</h3>
                <ul className="space-y-2">{selectedCategory.focusAreas.map((item, i) => <li key={i}>• {item}</li>)}</ul>
              </div>
            )}
            {selectedCategory.techniques && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Techniques:</h3>
                <ul className="space-y-2">{selectedCategory.techniques.map((item, i) => <li key={i}>• {item}</li>)}</ul>
              </div>
            )}
            {selectedCategory.applications && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Applications:</h3>
                <ul className="space-y-2">{selectedCategory.applications.map((item, i) => <li key={i}>• {item}</li>)}</ul>
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Highlights:</h3>
              <ul className="space-y-2">{selectedCategory.highlights.map((item, i) => <li key={i}>• {item}</li>)}</ul>
            </div>
          </div>

          {/* Related Projects */}
          {selectedCategory.relatedProjects && (
            <>
              <h2 className="text-3xl font-semibold text-gray-700 mb-6">Related Research Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {selectedCategory.relatedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="cursor-pointer text-center bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
                    onClick={() => setSelectedResearch(project)}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-[30vh] rounded-lg shadow-md group-hover:opacity-80 transition-opacity" />
                    <h3 className="text-xl font-semibold text-gray-800 mt-3 hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Related Images Section */}
          {selectedCategory.relatedImages && (
            <>
              <h2 className="text-3xl font-semibold text-gray-700 mb-6 mt-10">Visual Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {selectedCategory.relatedImages.map((img) => (
                  <div key={img.id}>
                    <img src={img.image} alt={`related-${img.id}`} className="rounded-lg cursor-pointer overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Modal for Single Research Project */}
      {selectedResearch && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-white bg-opacity-90 z-50 p-4 overflow-y-scroll md:pt-[60px] lg:pt-[0px] sm:pt-[100px] pt-[150px]">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-2xl w-full relative text-center">
            <img src={selectedResearch.image} alt={selectedResearch.title} className="h-[54vh] w-full rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{selectedResearch.title}</h3>
            <p className="text-gray-600 mb-3">{selectedResearch.description}</p>
            <p className="text-gray-700 font-semibold">
              <strong>Applications:</strong> {selectedResearch.applications}
            </p>
            <div className="flex gap-4 mt-6 justify-center">
              <button onClick={handleBackToProjects} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                ← Back to Projects
              </button>
              <button onClick={handleBackToCategories} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer">
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Research;