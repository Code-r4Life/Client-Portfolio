import React from "react";
import Navbar from "../components/Navbar";
import awards1 from "../images/awards1.jpg"
import awards2 from "../images/awards2.jpg"
import awards3 from "../images/awards3.jpg"
import awards4 from "../images/awards4.jpg"

const awards = [
  {
    title: "Best Poster Award",
    event: "International Conference on Advances in Polymeric Materials & Human Health Care",
    year: "2019",
    image: awards1,
  },
  {
    title: "Oral Presentation",
    event: "ICEOT 2017, Kolkata, India",
    year: "2017",
    image: awards2,
  },
  {
    title: "Oral Presentation",
    event: "41st ASME-AIAA symposium, Norman, Oklahoma",
    year: "2023",
    image: awards3,
  },
  {
    title: "Invited Talk: Powering the Future: Clean Energy & Healthcare",
    event: "Graduate Student Community (GSC), University of Oklahoma – Gallogly College of Engineering",
    year: "2024",
    image: awards4,
    link: "https://mymedia.ou.edu/media/Farrokh%20Mistrees%20Personal%20Meeting%20Room/1_mroilvih",
  },
  {
    title: "Best Oral Award",
    event: "National Seminar on Emerging Frontiers in Materials Science (EFMS)",
    year: "2019",
  },
  {
    title: "Best Paper Award",
    event: "International Conference on Nanotechnology (ICNT)",
    year: "2018",
  },
  {
    title: "Best Poster Award",
    event: "International Symposium on Functional Materials (ISFM): Energy and Biomedical Applications",
    year: "2018",
  },
  {
    title: "Best Paper Award",
    event: "International Conference on Energy Options for Tomorrow: Technology to Sustainability (ICEOT)",
    year: "2017",
  },
  {
    title: "CSIR Foreign Travel Grant",
    event: "9th International Conference on Materials for Advanced Technologies (ICMAT), Singapore",
    year: "2017",
  },
  {
    title: "Poster Presentation",
    event: "2021 MRS Fall Meeting A Hybrid Event (Virtual)",
    year: "2021",
  },
  {
    title: "Thesis Presentation",
    event: "64th DAE Solid State Physics Symposium, Rajasthan, India",
    year: "2019",
  },
  {
    title: "Oral Presentation",
    event: "2019 MRS Meeting & Exhibit, Phoenix, Arizona, USA",
    year: "2019",
  },
  {
    title: "Oral Presentation",
    event: "National Conference on Atomic, Molecular and Nano Sciences (NCAMNS-2019), Kolkata, India",
    year: "2019",
  },
  {
    title: "Oral Presentation",
    event: "National Conference on Recent Developments in Nanoscience & Nanotechnology (NCRDNN), Kolkata, India",
    year: "2019",
  },
  {
    title: "Oral Presentation",
    event: "International Conference on Nanotechnology ICNT 2018, Haldia, India",
    year: "2018",
  },
  {
    title: "Oral Presentation",
    event: "9th ICMAT, Suntec, Singapore",
    year: "2017",
  },
];

const fellowships = [
  {
    title: " Junior Research Fellowship (JRF), CSIR-UGC National Eligibility Test (NET)",
    details:
      "Ranked in the top 0.5% of 250,000 candidates, earning one of India’s most prestigious fellowships.",
    funding: "₹390,000/year ($4,700 USD) for 2 years, ₹450,000/year ($5,400 USD) for 3 years.",
    year: "2015-2020",
  },
  {
    title: "West Bengal Govt. Merit-cum-Means Scholarship",
    details: "Awarded for academic excellence and financial need.",
    funding: "₹10,800/year ($130 USD) for 3 years.",
    year: "2007-2010",
  },
];

const grants = [
  {
    title: "National Science Foundation - NSF-ART: Intensifying Translation of Research in Oklahoma (InTRO)",
    award_no: 2331409,
    details:
      `Co-Principal Investigator (PI) on $100,000 funded project “Development of Prototype Flexible Sensor for Health Assessment and Disease Diagnosis”`,
    status: "Funded",
    year: "2025-2027",
  },
  {
    title: "OKBioStart Program for Oklahoma Biotech Innovation",
    details:
      "Innovator on a project focused on developing self-powered cardiovascular sensor technologies",
    status: "Selected",
    year: "2025",
    link: "https://www.linkedin.com/posts/okbiostart_congratulations-to-everyone-who-was-previously-ugcPost-7342965339544059905-xLqn?utm_source=share&utm_medium=member_desktop&rcm=ACoAACwGJRUBP83uCW0kEFflhE_Pdde8lTNMFSA",
  },
  {
    title: "Strategic Equipment Investment Program (SEIP)), University of Oklahoma (OU) ",
    details:
      `Co-PI on a $50,000 funded project titled "High-Performance Multifunctional Electrodes for Self-Powered Sensors and Environmental Remediation"`,
    PI: "Prof. Mrinal Saha",
    status: "Funded",
    year: "2023",
    link: "https://www.ou.edu/research-norman/news-events/2023/five-proposals-awarded-through-the-fall-2023-ovprp-strategic-equipment-investment-program",
  },
];

const Awards = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />
      {/* Page Title */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="pt-[60px] text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500 hover:text-blue-700">
          🏆 Awards & Recognitions
        </h1>

        {/* Fellowships Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Fellowships</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {fellowships.map((fellowship, index) => (
              <div
                key={index}
                className="min-h-[220px] flex flex-col justify-between cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {fellowship.title}
                </h3>
                <p className="text-gray-600">{fellowship.details}</p>
                <p className="text-green-700 text-sm font-semibold mt-3">Funding: {fellowship.funding}</p>
                <p className="text-gray-500 text-sm font-semibold mt-2">Year: {fellowship.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Grants and Funded Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Grants and Funded Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {grants.map((grant, index) => (
              <div
                key={index}
                className="min-h-[300px] flex flex-col justify-between cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {grant.title}
                </h3>
                {grant.award_no && <span className="text-gray-600 font-bold">Award Number : {grant.award_no}</span>}
                <p className="text-gray-600">{grant.details}</p>
                {grant.PI && <span className="text-gray-600">PI : {grant.PI}</span>}
                {grant.status && <p className="text-green-700 text-sm font-semibold mt-3">Status: {grant.status}</p>}
                <p className="text-gray-500 text-sm font-semibold mt-2">Year: {grant.year}</p>
                {grant.link && <a
                  href={grant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>}
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Honors & Awards</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col justify-evenly cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.event} - {award.year}</p>
                {award.image && <img
                      src={award.image}
                      alt={award.title}
                      className="lg:h-[280px] w-full object-cover rounded-lg shadow-inner mt-4"
                />}
                {award.link && <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;
