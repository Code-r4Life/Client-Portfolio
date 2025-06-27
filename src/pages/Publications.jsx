import React from "react";
import Navbar from "../components/Navbar";

const journals = [
  {
    id: "J1",
    title: "Cellulose Nanocrystal-Based All-3D-Printed Pyro-Piezoelectric Nanogenerator",
    journal: "ACS Appl. Mater. Interfaces (IF: 10.383)",
    year: "2023",
    authors: "Kuntal Maity, Anirban Mondal, Mrinal C. Saha",
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.2c21680",
  },
  {
    id: "J2",
    title: "Piezo-Phototronic Effect in Highly Stable CsPbI3-PVDF Composite",
    journal: "Nano Energy (IF: 17.6)",
    year: "2022",
    authors: "Kuntal Maity, Uttam Pal, Hari Krishna Mishra, Prasenjit Maji, etc.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2211285521009927",
  },
  {
    id: "J3",
    title: "Development of Flexible Self-charging Triboelectric Power Cell on Paper",
    journal: "Nano Energy (IF: 19.069)",
    year: "2019",
    authors: "Srikanta Karmakar, Partha Kumbhakar, Kuntal Maity, etc.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2211285519305312",
  },
  {
    id: "J4",
    title: "All-Organic High-Performance Piezoelectric Nanogenerator",
    journal: "ACS Appl. Mater. Interfaces (IF: 10.383)",
    year: "2018",
    authors: "Kuntal Maity, Dipankar Mandal",
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.8b01862",
  },
  {
    id: "J5",
    title: "Natural Sugar-Assisted, Chemically Reinforced, Highly Durable Piezoorganic Nanogenerator",
    journal: "ACS Appl. Mater. Interfaces (IF: 10.383)",
    year: "2018",
    authors: "Kuntal Maity, Samiran Garain, etc.",
    link: "https://pubs.acs.org/doi/full/10.1021/acsami.8b15320",
  },
];

const conferences = [
  {
    id: "C1",
    title: "Characterization and Improvisation of Direct-Ink-Writing (DIW) Technique",
    journal: "American Society for Composites—37th Technical Conference",
    year: "2023",
    authors: "Anirban Mondal, Mrinal Saha, Kuntal Maity, etc.",
    link: "https://www.dpi-proceedings.com/index.php/asc37/article/view/36434",
  },
  {
    id: "C2",
    title: "Characterization of 3D Printed Single Filament Carbon Fiber Epoxy Composite",
    journal: "ASME International Mechanical Engineering Congress",
    year: "2023",
    authors: "Anirban Mondal, Mrinal Saha, Kuntal Maity, etc.",
    link: "https://asmedigitalcollection.asme.org/IMECE/proceedings/IMECE2022/86717/V009T12A014/1157440",
  },
  {
    id: "C3",
    title: "Direct-Ink-Writing of Flexible Sensor Array for Large Area Pressure Mapping",
    journal: "Kansas City Nuclear Security Campus (KCNSC)",
    year: "2022",
    authors: "Anirban Mondal, Kuntal Maity, etc.",
    link: "https://www.osti.gov/biblio/1872927",
  },
];

const books = [
  {
    id: "B1",
    title: "Piezoelectric Polymers and Composites for Multifunctional Materials",
    journal: "Woodhead Publishing",
    year: "2022",
    authors: "Kuntal Maity, Dipankar Mandal",
    link: "https://www.sciencedirect.com/science/article/abs/pii/B9780128185018000019",
  },
  {
    id: "B2",
    title: "Towards the Development of Triboelectricity-Based Virus Killer Face Mask for COVID-19",
    journal: "Springer",
    year: "2021",
    authors: "Sanjay Banerjee, Barnali Ghatak, Kuntal Maity, etc.",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-72752-9_14",
  },
];

const Publications = () => {
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen">
      <Navbar />
      {/* Page Title */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="pt-[60px] text-4xl font-bold text-center text-gray-800 mb-10 transition-all duration-500 hover:text-blue-700">
          📚 Publications
        </h1>

        {/* Journal Papers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Journal Papers</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {journals.map((pub) => (
              <div
                key={pub.id}
                className="min-h-[200px] flex flex-col justify-between cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                {pub.title}
                </h3>
                <p className="text-gray-600">{pub.journal} - {pub.year}</p>
                <p className="text-gray-500 text-sm">Authors: {pub.authors}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
                <a href="https://scholar.google.co.in/citations?user=stzV8BMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
                  View All Publications →
                </a>
            </div>
        </section>

        {/* Conference Papers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Conference Papers</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {conferences.map((pub) => (
              <div
                key={pub.id}
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {pub.title}
                </h3>
                <p className="text-gray-600">{pub.journal} - {pub.year}</p>
                <p className="text-gray-500 text-sm">Authors: {pub.authors}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Book Chapters Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Book Chapters</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {books.map((pub) => (
              <div
                key={pub.id}
                className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                  {pub.title}
                </h3>
                <p className="text-gray-600">{pub.journal} - {pub.year}</p>
                <p className="text-gray-500 text-sm">Authors: {pub.authors}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium transition-all duration-300 hover:text-blue-800 hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Publications;
