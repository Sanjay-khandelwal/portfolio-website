import {Navbar} from './component/Navbar/Navbar.jsx'
import {About} from './component/About/About.jsx'
import {Skill} from './component/Skill/Skill.jsx'
import {Education} from './component/Education/Education.jsx'
import {Project} from './component/Project/Project.jsx'
import {Contact} from './component/Contect/Contect.jsx'
import {Footer} from './component/Footer/Footer.jsx'
import {BlurBlob} from './BlurBlob.jsx'


function App() {
  return (
   <div className="bg-[#050414]">

       <BlurBlob position={{ top: '30%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
            <Navbar />
            <About />
            <Skill />
            <Project />
            <Education />
            <Contact />
            <Footer />
      </div>

    </div>
  )
}

export default App
