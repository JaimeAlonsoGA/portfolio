import './App.css';
import { useEffect, useState } from 'react';
// import { useTrail, config, animated, useSpring } from '@react-spring/web'
import Marquee from 'react-fast-marquee';
import Contact from './components/contact';

import { FaCalendarCheck } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { FaItchIo } from "react-icons/fa";
import { RiSoundcloudLine } from "react-icons/ri";
import { FaLock } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaUnlock } from "react-icons/fa";

import p7 from './assets/images/p7.png';
import p6 from './assets/images/p6.png';
import p5 from './assets/images/p5.png';
import p4 from './assets/images/p4.png';
import Tools from './components/tools';
import Projects from './components/projects';


const plantImages = [p4, p5, p6, p7];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plantImg, setPlantImg] = useState(plantImages[currentIndex]);
  const [completed, setCompleted] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [academicPressed, setAcademicPressed] = useState(false);
  const [projectsButtonPressed, setProjectsButtonPressed] = useState(false);
  const [toolsButtonPressed, setToolsButtonPressed] = useState(false);
  const [contactButtonPressed, setContactButtonPressed] = useState(false);
  const [academicHover, setAcademicHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);
  const [toolsHover, setToolsHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);


  useEffect(() => {
    if (currentIndex === plantImages.length) {
      setCompleted(true);
      // setShowContact(true);
    }
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="overflow-y-auto whitespace-nowrap">
      <Container plantImg={plantImg} setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} completed={completed}
        setShowContact={setShowContact} showContact={showContact} showTools={showTools} setShowTools={setShowTools}
        academicPressed={academicPressed} setAcademicPressed={setAcademicPressed} projectsButtonPressed={projectsButtonPressed} setProjectsButtonPressed={setProjectsButtonPressed}
        toolsButtonPressed={toolsButtonPressed} setToolsButtonPressed={setToolsButtonPressed} academicHover={academicHover} setAcademicHover={setAcademicHover}
        projectsHover={projectsHover} setProjectsHover={setProjectsHover} toolsHover={toolsHover} setToolsHover={setToolsHover}
        showProjects={showProjects} setShowProjects={setShowProjects} contactButtonPressed={contactButtonPressed} setContactButtonPressed={setContactButtonPressed}
        contactHover={contactHover} setContactHover={setContactHover}
      />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}


const Container = ({ plantImg, setPlantImg, currentIndex, setCurrentIndex, completed, showContact, setShowContact,
  setShowTools, showTools, academicPressed, setAcademicPressed, projectsButtonPressed, setProjectsButtonPressed,
  toolsButtonPressed, setToolsButtonPressed, academicHover, setAcademicHover, projectsHover, setProjectsHover, toolsHover, setToolsHover,
  showProjects, setShowProjects, contactButtonPressed, setContactButtonPressed, contactHover, setContactHover }) => {
  return (
    <div>
      <div className='mb-10 text-center'>
        <h1 className="mt-4 text-slate-500 text-4xl">Jaime Alonso</h1>
      </div>
      <TaskPanel academicPressed={academicPressed} projectsButtonPressed={projectsButtonPressed} toolsButtonPressed={toolsButtonPressed}
        setAcademicHover={setAcademicHover} setProjectsHover={setProjectsHover} setToolsHover={setToolsHover} completed={completed} contactButtonPressed={contactButtonPressed}
        setContactHover={setContactHover} />
      {completed && <ContactButton setShowContact={setShowContact} setContactButtonPressed={setContactButtonPressed} contactHover={contactHover} />}
      <ContentBox setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} academicPressed={academicPressed} setAcademicPressed={setAcademicPressed} academicHover={academicHover} />
      {showContact && <Contact setShowContact={setShowContact} />}
      {showTools && <Tools setShowTools={setShowTools} />}
      {showProjects && <Projects setShowProjects={setShowProjects} />}
      <div className='flex justify-center'>
        <div className='fixed bottom-44 flex justify-between items-center'>
          <ProjectsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} projectsButtonPressed={projectsButtonPressed} setProjectsButtonPressed={setProjectsButtonPressed} projectsHover={projectsHover} setShowProjects={setShowProjects} />
          <Plant plantImg={plantImg} />
          <ToolsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setShowTools={setShowTools} toolsButtonPressed={toolsButtonPressed} setToolsButtonPressed={setToolsButtonPressed} toolsHover={toolsHover} />
        </div>
      </div>
      <div className='fixed bottom-0 w-full flex flex-col items-center content-center'>
        <LinksBanner completed={completed} />
      </div>
    </div>
  );
}


const ContentBox = ({ setPlantImg, currentIndex, setCurrentIndex, academicPressed, setAcademicPressed, academicHover }) => {
  const [soundPressed, setSoundPressed] = useState(false);
  const [softwarePressed, setSoftwarePressed] = useState(false);

  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [academicPressed]);

  useEffect(() => {
    if (soundPressed && softwarePressed) setAcademicPressed(true);
  }, [softwarePressed, soundPressed]);

  const [pressed, setPressed] = useState({
    softwareDeveloper: false,
    soundEngineer: false
  })

  const handlePress = (name) => {
    setPressed(prevState => ({
      softwareDeveloper: false,
      soundEngineer: false,
      [name]: !prevState[name]
    }));
  }

  return (
    <div className="flex flex-col items-center">
      <div className={academicHover ? 'border-2 border-Black rounded-xl' : ''}>
        <div className={soundPressed && softwarePressed ? "flex text-center bg-gradient-to-r from-Green to-Green via-Plat text-Black p-2 mb-4 rounded-xl" :
          (soundPressed ? "flex text-center bg-gradient-to-r from-Red to-Green via-Plat text-Black p-2 mb-4 rounded-xl" :
            (softwarePressed ? "flex text-center bg-gradient-to-r from-Green to-Red via-Plat text-Black p-2 mb-4 rounded-xl" :
              "flex text-center bg-gradient-to-r from-Red to-Yellow via-Plat text-Black p-2 mb-4 rounded-xl"))}>
          <div className='w-1/2'>
            <button onClick={() => { handlePress('softwareDeveloper'); setSoftwarePressed(true) }} className={pressed.softwareDeveloper ? "text-Black font-bold p-1" : "text-gray-500 font-medium p-1"}>Software Developer</button>
          </div>
          <div className='w-1/2'>
            <button onClick={() => { handlePress('soundEngineer'); setSoundPressed(true) }} className={pressed.soundEngineer ? "text-Black font-bold p-1" : "text-gray-500 font-medium p-1"} >Sound Engineer</button>
          </div>
        </div>
        {(pressed.softwareDeveloper || pressed.soundEngineer) &&
          <div className="bg-Gray p-2 pr-72 rounded-xl">
            <p>{pressed.softwareDeveloper ? softwareText : soundText}</p>
          </div>
        }
        <p className='text-Plat'>............................................................................................................................................................................................................................</p>
      </div >
    </div>
  );
}


const TaskPanel = ({ academicPressed, projectsButtonPressed, toolsButtonPressed, setAcademicHover, setProjectsHover, setToolsHover, completed, contactButtonPressed, setContactHover }) => {
  return (
      <div className='fixed top-20 right-20'>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center space-x-4">
          <h1 className='text-gray-300'>What to see</h1>
          <Task task="Academic" hover={setAcademicHover} boolean={academicPressed} />
          <Task task="Projects" hover={setProjectsHover} boolean={projectsButtonPressed} />
          <Task task="Tools" hover={setToolsHover} boolean={toolsButtonPressed} />
          <div className={completed ? 'flex flex-row items-center rounded-lg p-1 cursor-help' : 'flex flex-row items-center rounded-lg p-1 cursor-not-allowed'}>
            {contactButtonPressed ? <TiTick size={20} color="green" /> : (completed ? <FaUnlock size={12} color='green' className='mr-2' /> : <FaLock size={12} className='mr-2' />)}
            <p onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}>Contact</p>
          </div>
        </div>
      </div>
  );
};

const Task = ({ task, hover, boolean }) => {
  return (
    <div className='flex flex-row items-center cursor-help'>
      <TiTick size={20} color={boolean ? 'green' : 'red'} />
      <p onMouseEnter={() => hover(true)}
        onMouseLeave={() => hover(false)}>{task}</p>
    </div>
  )
}



const ProjectsButton = ({ setPlantImg, currentIndex, setCurrentIndex, projectsButtonPressed, setProjectsButtonPressed, projectsHover, setShowProjects }) => {
  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [projectsButtonPressed]);

  return (
    <button onClick={() => { setProjectsButtonPressed(true); setShowProjects(true) }}>
      <div className="ml-60">
        <div className={projectsHover ? 'border-2 border-Black rounded-xl' : ''}>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="overflow-hidden rounded-full">
                  <div className={projectsButtonPressed ? "w-full h-full bg-Green p-6" :
                    "w-full h-full bg-gradient-to-r from-Red to-Yellow p-6"
                  }>..........</div>
                </div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="text-xl font-medium text-black">Projects</div>
              <p className="text-gray-300">Multidisciplinary projects</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};


const ToolsButton = ({ setPlantImg, currentIndex, setCurrentIndex, setShowTools, toolsButtonPressed, setToolsButtonPressed, toolsHover }) => {
  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [toolsButtonPressed]);

  return (
    <button onClick={() => { setToolsButtonPressed(true); setShowTools(true) }}>
      <div className="float-right mr-60">
        <div className={toolsHover ? 'border-2 border-Black rounded-xl' : ''}>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="overflow-hidden rounded-full">
                  <div className={toolsButtonPressed ? "w-full h-full bg-Green p-6" :
                    "w-full h-full bg-gradient-to-r from-Yellow to-Red p-6"
                  }>..........</div>
                </div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="text-xl font-medium text-black">Tools</div>
              <p className="text-gray-300">My everyday tools!</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};


const Plant = ({ plantImg }) => {
  return (
    <div>
      <img src={plantImg} alt="This plant grows" className="object-contain w-64 h-64 mx-24" />
    </div>
  );
};


const links = [
  { text: "Linkedin", icon: <CiLinkedin size={30} />, link: "https://www.linkedin.com/in/jaime360/" },
  { text: "GitHub", icon: <FaGithub size={25} />, link: "https://github.com/JaimeAlonsoGA" },
  { text: "Email", icon: <MdOutlineEmail size={25} />, link: "mailto:alonsog.jaime@gmail.com" },
  { text: "Resume", icon: <GrDocumentPdf size={23} />, link: "https://drive.google.com/file/d/1rc6TNp92qo8FIlQ6-1cn_Zt6SgQQ0T5L/view?usp=sharing" },
  { text: "Soundcloud", icon: <RiSoundcloudLine size={25} />, link: "https://soundcloud.com/jaime-alonso-360" },
  { text: "Itch.io", icon: <FaItchIo size={23} />, link: "https://jaime-alonso.itch.io/" },
];

const LinksBanner = ({ completed }) => {
  return (
    <Marquee velocity={5} className="mt-20" autoFill={true} gradient={true} gradientColor={completed ? 'Green' : 'Red'} gradientWidth={600}>
      {links.map((link, index) => (
        <Links to={link.link} key={index} icon={link.icon} link={link.link} text={link.text} completed={completed} />
      ))}
    </Marquee>
  );
};

const Links = ({ text, icon, link, completed }) => {
  return (
    <div className='flex items-center flex-col mx-20 p-2'>
      <a href={link} target="_blank" rel="noreferrer" className={completed ? "text-Plat bg-LightGreen w-18 h-18 p-4 inline-block hover:bg-Green" :
        "text-Plat bg-LightRed w-18 h-18 p-4 inline-block hover:bg-Red"}>{icon}</a>
      <p className='text-gray-500'>{text}</p>
    </div>
  );
}


const softwareData = [
  { Icon: GiGraduateCap, size: 26, text: "Cross-Platform Development" },
  { Icon: GiDiploma, size: 26, text: "Certificate of Higher Education" },
  { Icon: FaLocationDot, size: 20, text: "Francisco de Vitoria University, Madrid, Spain" },
  { Icon: FaCalendarCheck, size: 20, text: "2023 - 2025" },
  { Icon: MdOutlineDescription, size: 20, text: "[CARTA RECOMENDACIÓN]" },
];

const soundData = [
  { Icon: GiGraduateCap, size: 26, text: "Sound Engineering & Music Production" },
  { Icon: GiDiploma, size: 26, text: "Advanced Diploma" },
  { Icon: FaLocationDot, size: 20, text: "Abbey Road Institute, Amsterdam, Netherlands" },
  { Icon: FaCalendarCheck, size: 20, text: "2021 - 2023" },
  { Icon: MdOutlineDescription, size: 20, text: "[CARTA RECOMENDACIÓN]" },
];

const softwareText = (
  <code>
    {softwareData.map(({ Icon, size, text }) => (
      <div className="flex flex-row m-2">
        <Icon size={size} className='mr-8' />
        {text}
      </div>
    ))}
  </code>
);

const soundText = (
  <code>
    {soundData.map(({ Icon, size, text }) => (
      <div className="flex flex-row m-2">
        <Icon size={size} className='mr-8' />
        {text}
      </div>
    ))}
  </code>
);


const ContactButton = ({ setShowContact, setContactButtonPressed, contactHover }) => {
  return (
    <button onClick={() => { setShowContact(true); setContactButtonPressed(true) }}
      className="absolute left-12 top-28 text-center border border-Gray shadow-md bg-gradient-to-r from-Green to-Red flex items-center justify-center rounded-lg mx-4 p-0.5">
      <div className={contactHover ? 'border-2 border-Black rounded-xl' : ''}>
        <div className="bg-Plat text-Black text-center rounded-lg p-4">
          <p className='text-bold'>Contact</p>
          <p className='text-gray-300'>Thank you for your interest!</p>
        </div>
      </div>
    </button>

  );
}


export default App;