import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen'>
      <Navbar />
      <div className="pt-[100px] max-w-6xl mx-auto p-6 text-gray-900">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 transition-all duration-500 hover:text-blue-700">
          About
        </h1>

        {/* Introduction */}
        <p className="text-lg text-center mb-10 leading-relaxed">
          Engineering sustainable materials and designing self-powered sensors to drive innovation in healthcare, aerospace, and clean energy
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Overview */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 transition-colors duration-300 hover:text-blue-600">Overview</h2>
            <p>
              I am an applied physicist and materials scientist currently serving as a Lecturer and Postdoctoral Research Associate at the University of Oklahoma. With over 9 years of research experience and interdisciplinary training across India and the United States, I specialize in developing next-generation piezoelectric and flexoelectric devices for applications in healthcare diagnostics, aerospace structural monitoring, and clean energy.
            </p>
          </section>

          {/* Vision */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 transition-colors duration-300 hover:text-blue-600">My Vision</h2>
            <p>
              I believe in translating fundamental science into scalable, real-world technologies. My research aims to repurpose low-cost and biowaste-derived materials into high-performance systems that are not only environmentally sustainable, but also clinically and industrially relevant. Whether I’m engineering 3D-printed smart sensors or developing AI-integrated health monitoring platforms, my focus is on innovation that serves people and the planet.
            </p>
            <p className="mt-4">
              I believe that good science thrives in collaboration—across disciplines, institutions, and borders. Whether it’s co-leading grant proposals, mentoring students, I embrace interdisciplinary approaches to empower the next generation of scientists and engineers.
            </p>
          </section>

          {/* Academic Journey */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 transition-colors duration-300 hover:text-blue-600">Academic Journey</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ph.D. in Materials Science (2015–2020)</strong><br />Department of Physics, Jadavpur University, India — Developed wearable piezoelectric nanogenerators using electrospun nanofibers and perovskite composites.</li>
              <li><strong>Postdoctoral Research Associate (2021–Present)</strong><br />School of Aerospace & Mechanical Engineering, University of Oklahoma, USA — Focused on 3D-printed flexoelectric sensors and self-powered health monitoring systems; led DOE- and NSF-related projects.</li>
              <li><strong>Lecturer (2024–Present)</strong><br />School of Aerospace & Mechanical Engineering, University of Oklahoma, USA — Teaching “Solid Mechanics” and “Materials, Design & Manufacturing,” integrating real-world applications with classroom learning.</li>
            </ul>
          </section>

          {/* Beyond the Lab */}
          <section className="cursor-pointer relative group bg-white shadow-lg rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-gray-200 hover:border-blue-300">
            <h2 className="text-2xl font-semibold mb-3 transition-colors duration-300 hover:text-blue-600">Beyond the Lab</h2>
            <p>
              When not immersed in materials and sensors, I actively participate in science outreach and mentorship programs. I work with the OU Sooner Racing Team, volunteer in community events like "The Big Event," and lead K-12 workshops that bring microscopy and material science to the next generation of innovators.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
