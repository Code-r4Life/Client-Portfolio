import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import km from './images/km.jpg'
import linkedin from './images/linkedin.png'
import research from './images/research.png'
import scholar from './images/scholar.png'
import Typed from 'typed.js'

function App() {
  const typedRef = useRef(null)
  const roleRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Applied Physicist',
        'Materials Scientist',
        'Educator',
        'Innovator'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    })

    const typedRole = new Typed(roleRef.current, {
      strings: [
        'Lecturer',
        'Postdoctoral Researcher'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true
    })

    return () => {
    typed.destroy()
    typedRole.destroy()
  }
  }, [])

  return (
    <>
      <div className='custom-scrollbar flex-1 overflow-y-auto flex flex-col h-screen'>
        <Navbar />
        <div className='pt-[60px] flex flex-col lg:flex-row justify-center mx-auto p-1 max-w-full sm:px-0 px-3'>
          <div className='flex flex-col items-center mx-auto'>
            <img src={km} alt='Kuntal Maity' className='h-[79vh] mx-10 mt-15 rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer' />
            <p className='text-lg text-gray-700 leading-relaxed lg:block hidden mt-6'>
              <span ref={roleRef}>Lecturer | Postdoctoral Researcher</span>
            </p>
            <span className='text-lg text-gray-700 leading-relaxed lg:block hidden font-bold'>University of Oklahoma</span>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='flex flex-col items-center lg:items-start'>
              <div className='w-[70vw] lg:w-[50vw] text-center lg:text-left'>
                <div className='flex flex-col gap-y-6 items-center lg:items-center'>
                  <p className='text-lg text-gray-700 leading-relaxed mt-18 w-full'>
                    <strong className='text-4xl font-bold text-center lg:text-left text-gray-800 transition-all duration-500 hover:text-blue-700'>Dr. Kuntal Maity</strong><br />
                    <span ref={typedRef}>Applied Physicist | Materials Scientist | Educator | Innovator</span>
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed w-full'>
                    <strong>Advancing Smart Materials for a Sustainable Future</strong><br />
                    <span className='lg:hidden block'>Lecturer & Postdoctoral Researcher • University of Oklahoma</span>
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    I’m an applied physicist and materials scientist (Ph.D.), with postdoctoral training in mechanical engineering at the School of Aerospace and Mechanical Engineering, University of Oklahoma (OU), Norman, USA. My research focuses on developing next-generation technologies using sustainable piezoelectric materials, advanced manufacturing, and self-powered sensing systems.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    I have pioneered all-3D-printed nanogenerators, explored strain-gradient-driven flexoelectricity, and designed biosensors that are redefining possibilities across aerospace, biomedical, and renewable energy applications. My work bridges fundamental materials science with translational engineering to deliver impactful, real-world solutions.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    My mission is to engineer intelligent, resilient systems that advance safety, efficiency, and sustainability—while mentoring the next generation of scientists and engineers to lead the way.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed w-full font-bold'>
                    Let’s build a smarter, cleaner future—together.
                  </p>
                </div>
              </div>
            </div>
            <ul className='flex justify-center items-center gap-x-6 mt-6 flex-wrap'>
              <li>
                <a
                  href='https://www.linkedin.com/in/kuntal-maity-819432187/'
                  className='w-fit inline-block transform transition-all duration-300 hover:scale-110'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={linkedin}
                    alt='linkedin'
                    className='h-10 rounded-[12px] shadow-lg hover:shadow-2xl' />
                </a>
              </li>
              <li>
                <a
                  href='https://scholar.google.co.in/citations?user=stzV8BMAAAAJ&hl=en'
                  className='w-fit inline-block transform transition-all duration-300 hover:scale-110'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={scholar}
                    alt='scholar'
                    className='h-10 hover:shadow-2xl' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.researchgate.net/profile/Kuntal-Maity-2'
                  className='w-fit inline-block transform transition-all duration-300 hover:scale-110'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={research}
                    alt='research'
                    className='h-10 rounded-lg shadow-lg hover:shadow-2xl' />
                </a>
              </li>
              <li className='mb-5.5 mt-4'>
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:c17f8d84-4419-4767-a5ec-88353d01727e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 text-sm font-semibold rounded-md shadow-md hover:bg-gray-700 transform transition-all duration-200 hover:scale-110">
                  View CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App