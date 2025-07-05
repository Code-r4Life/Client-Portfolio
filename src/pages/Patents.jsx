import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const patents = [
  {
    title: "Piezoelectric Biomaterials Derived from Onion Peel, and Methods of Manufacture and Use",
    details: {
      Innovators: ["Kuntal Maity", "Mrinal C. Saha"],
      Patent: "Provisional Application Serial No. 63/811,340 (US Patent)",
    },
    status: "Patent pending",
  },
  {
    title: "Graphene-Based Conductive Adhesive for Thermal and Electrical Interface",
    details:
      "Invention to be disclosed soon to the Office of Technology and Commercialization, University of Oklahoma (2025).",
    status: "Patent pending",
  },
];

const Patents = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />

      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="pt-[60px] text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500 hover:text-blue-700">
          📜 Patents
        </h1>

        <section className="mb-35">
          <div className="grid lg:grid-cols-2 gap-8">
            {patents.map((patent, index) => (
              <div
                key={index}
                className="flex flex-col justify-between cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600 mb-2">
                  {patent.title}
                </h3>

                {typeof patent.details === "object" ? (
                  <>
                    <p className="text-gray-700 flex flex-col">
                      <span>Innovators: <strong>{patent.details.Innovators[0]}</strong>,</span>
                      <span className="ml-23">{patent.details.Innovators[1]}</span>
                    </p>
                    <p className="text-gray-600">
                      <strong>{patent.details.Patent}</strong>
                    </p>
                  </>
                ) : (
                  <p className="text-gray-600">{patent.details}</p>
                )}

                <p className="text-green-700 text-sm font-semibold mt-3">{patent.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Patents;