import './App.css';
import { useEffect, useState } from 'react';
// import { useTrail, config, animated, useSpring } from '@react-spring/web'
import Marquee from 'react-fast-marquee';
import Contact from './components/contact';
import { useMediaQuery } from 'react-responsive'

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
  const [pressed, setPressed] = useState({
    softwareDeveloper: false,
    soundEngineer: false
  })

  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });
  const isMdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const is2xlScreen = useMediaQuery({ query: '(min-width: 1536px)' });

  useEffect(() => {
    if (currentIndex === plantImages.length) {
      setCompleted(true);
      // setShowContact(true);
    }
  }, [currentIndex]);

  return (
    <div>
      <h1 className="mt-6 text-center text-gray-400 text-2xl lg:text-4xl">Jaime Alonso</h1>
      <div className='flex justify-center my-6'>
        <TaskPanel academicPressed={academicPressed} projectsButtonPressed={projectsButtonPressed} toolsButtonPressed={toolsButtonPressed}
          setAcademicHover={setAcademicHover} setProjectsHover={setProjectsHover} setToolsHover={setToolsHover} completed={completed} contactButtonPressed={contactButtonPressed}
          setContactHover={setContactHover} />
        {completed && <ContactButton setShowContact={setShowContact} setContactButtonPressed={setContactButtonPressed} contactHover={contactHover} />}
      </div>
      <ContentBox setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} academicPressed={academicPressed} setAcademicPressed={setAcademicPressed} academicHover={academicHover} setPressed={setPressed} pressed={pressed} />
      {showContact && <Contact setShowContact={setShowContact} />}
      {showTools && <Tools setShowTools={setShowTools} />}
      {showProjects && <Projects setShowProjects={setShowProjects} />}
      {(!pressed.softwareDeveloper && !pressed.soundEngineer) && <div className='flex flex-row mt-6'>
        <ProjectsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} projectsButtonPressed={projectsButtonPressed} setProjectsButtonPressed={setProjectsButtonPressed} projectsHover={projectsHover} setShowProjects={setShowProjects} isSmScreen={isSmScreen} />
        <ToolsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setShowTools={setShowTools} toolsButtonPressed={toolsButtonPressed} setToolsButtonPressed={setToolsButtonPressed} toolsHover={toolsHover} isSmScreen={isSmScreen} />
      </div>}
      {(!pressed.softwareDeveloper && !pressed.soundEngineer) && <Plant plantImg={plantImg} />}
      <div className='w-full absolute bottom-0'>
        <LinksBanner completed={completed} isMdScreen={isMdScreen} isLgScreen={isLgScreen} />
      </div>
    </div>
  );
}


const ContentBox = ({ setPlantImg, currentIndex, setCurrentIndex, academicPressed, setAcademicPressed, academicHover, pressed, setPressed }) => {

  const [soundPressed, setSoundPressed] = useState(false);
  const [softwarePressed, setSoftwarePressed] = useState(false);

  useEffect(() => {
    if (academicPressed) {
      setPlantImg(plantImages[currentIndex]);
      setCurrentIndex(currentIndex + 1);
    }
  }, [academicPressed]);

  const toggleSoftwarePressed = () => {
    setSoftwarePressed(prevState => {
      if (!prevState) {
        setSoftwarePressed(true);
      }
    });
  }

  const toggleSoundPressed = () => {
    setSoundPressed(prevState => {
      if (!prevState) {
        setSoundPressed(true);
      }
    });
  }

  useEffect(() => {
    if (soundPressed && softwarePressed) setAcademicPressed(true);
  }, [softwarePressed, soundPressed]);

  const handlePress = (name) => {
    setPressed(prevState => ({
      softwareDeveloper: false,
      soundEngineer: false,
      [name]: !prevState[name]
    }));
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <div className={academicHover ? 'border-2 border-Black rounded-xl w-full' : 'w-full'}>
          <div className={soundPressed && softwarePressed ? "flex text-center bg-gradient-to-r from-Green to-Green via-Plat text-Black p-2 rounded-xl" :
            (soundPressed ? "flex text-center bg-gradient-to-r from-Red to-Green via-Plat text-Black p-2 rounded-xl" :
              (softwarePressed ? "flex text-center bg-gradient-to-r from-Green to-Red via-Plat text-Black p-2 rounded-xl" :
                "flex text-center bg-gradient-to-r from-Red to-Yellow via-Plat text-Black p-2 rounded-xl"))}>
            <div className='w-1/2'>
              <button onClick={() => { handlePress('softwareDeveloper'); toggleSoftwarePressed() }} className={pressed.softwareDeveloper ? "text-Black font-bold p-1" : "text-gray-500 font-medium p-1"}>Software Developer</button>
            </div>
            <div className='w-1/2'>
              <button onClick={() => { handlePress('soundEngineer'); toggleSoundPressed() }} className={pressed.soundEngineer ? "text-Black font-bold p-1" : "text-gray-500 font-medium p-1"} >Sound Engineer</button>
            </div>
          </div >
        </div>
      </div>
      {(pressed.softwareDeveloper || pressed.soundEngineer) &&
        <div className="bg-Gray rounded-xl mt-6">
          <p>{pressed.softwareDeveloper ? softwareText : soundText}</p>
        </div>
      }
    </>
  );
}


const TaskPanel = ({ academicPressed, projectsButtonPressed, toolsButtonPressed, setAcademicHover, setProjectsHover, setToolsHover, completed, contactButtonPressed, setContactHover }) => {
  return (
    <div className="py-2 bg-white rounded-lg shadow-md flex flex-col items-center px-8 sm:px-16 md:px-32 lg:px-48">
      <h1 className='text-gray-300'>What to see</h1>
      <Task task="Academic" hover={setAcademicHover} boolean={academicPressed} />
      <Task task="Projects" hover={setProjectsHover} boolean={projectsButtonPressed} />
      <Task task="Tools" hover={setToolsHover} boolean={toolsButtonPressed} />
      <div className={completed ? 'flex flex-row items-center rounded-lg p-0.5 cursor-help' : 'flex flex-row items-center rounded-lg p-0.5 cursor-not-allowed'}>
        {contactButtonPressed ? <TiTick size={20} color="green" /> : (completed ? <FaUnlock size={12} color='green' className='mr-2' /> : <FaLock size={12} className='mr-2' />)}
        <p onMouseEnter={() => setContactHover(true)}
          onMouseLeave={() => setContactHover(false)}>Contact</p>
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
};


const ContactButton = ({ setShowContact, setContactButtonPressed, contactHover }) => {
  return (
    <button onClick={() => { setShowContact(true); setContactButtonPressed(true) }}
      className="text-center border border-Gray shadow-md bg-gradient-to-r from-Green to-Red flex items-center justify-center rounded-lg ml-4 p-0.5">
      <div className={contactHover ? 'border-2 border-Black rounded-xl' : ''}>
        <div className="bg-Plat text-Black text-center rounded-lg p-4 py-11">
          <p className='text-bold'>Contact</p>
          <p className='text-gray-300'>Thank you for your interest!</p>
        </div>
      </div>
    </button>

  );
};



const ProjectsButton = ({ setPlantImg, currentIndex, setCurrentIndex, projectsButtonPressed, setProjectsButtonPressed, projectsHover, setShowProjects, isSmScreen }) => {
  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [projectsButtonPressed]);

  return (
    <div className='w-full flex justify-center'>
      <button onClick={() => { setProjectsButtonPressed(true); setShowProjects(true) }}>
        <div className={projectsHover ? 'border-2 border-Black rounded-xl' : ''}>
          <div className="p-6 bg-white rounded-xl shadow-md flex items-center">
            {isSmScreen && <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="overflow-hidden rounded-full">
                  <div className={projectsButtonPressed ? "w-full h-full bg-Green p-6" :
                    "w-full h-full bg-gradient-to-r from-Red to-Yellow p-6"
                  }>..........</div>
                </div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
              </div>
            </div>}
            <div>
              <div className="text-xl font-medium text-black">Projects</div>
              {isSmScreen && <p className="text-gray-300 px-4">Multidisciplinary projects</p>}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};


const ToolsButton = ({ setPlantImg, currentIndex, setCurrentIndex, setShowTools, toolsButtonPressed, setToolsButtonPressed, toolsHover, isSmScreen }) => {
  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [toolsButtonPressed]);

  return (
    <div className='w-full flex justify-center'>
      <button onClick={() => { setToolsButtonPressed(true); setShowTools(true) }} className='float-right'>
        <div className={toolsHover ? 'border-2 border-Black rounded-xl' : ''}>
          <div className="p-6 bg-white rounded-xl shadow-md flex items-center">
            {isSmScreen && <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="overflow-hidden rounded-full">
                  <div className={toolsButtonPressed ? "w-full h-full bg-Green p-6" :
                    "w-full h-full bg-gradient-to-r from-Yellow to-Red p-6"
                  }>..........</div>
                </div>
                <div className="absolute inset-2 bg-white rounded-full"></div>
              </div>
            </div>}
            <div>
              <div className="text-xl font-medium text-black">Tools</div>
              {isSmScreen && <p className="text-gray-300 px-4">My everyday tools!</p>}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};


const Plant = ({ plantImg }) => {
  return (
    <div className='w-full h-full flex justify-center'>
      <img src={plantImg} alt="This plant grows" className="object-contain w-48 h-48 sm:w-52 sm:h-52" />
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

const LinksBanner = ({ completed, isMdScreen, isLgScreen }) => {
  return (
    <Marquee velocity={5} autoFill={true} gradient={true} gradientColor={completed ? 'Green' : 'Red'} gradientWidth={isMdScreen ? 200 : (isLgScreen ? 250 : 100)}>
      {links.map((link, index) => (
        <Links to={link.link} key={index} icon={link.icon} link={link.link} text={link.text} completed={completed} />
      ))}
    </Marquee>
  );
};

const Links = ({ text, icon, link, completed }) => {
  return (
    <div className='flex items-center flex-col mx-14 sm:mx-16 lg:mx-20'>
      <a href={link} target="_blank" rel="noreferrer" className={completed ? "text-Plat bg-LightGreen w-18 h-18 p-2 inline-block hover:bg-Green" :
        "text-Plat bg-LightRed w-18 h-18 p-2 inline-block hover:bg-Red"}>{icon}</a>
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
      <div className="flex flex-row p-2">
        <Icon size={size} className='mr-8' />
        {text}
      </div>
    ))}
  </code>
);

const soundText = (
  <code>
    {soundData.map(({ Icon, size, text }) => (
      <div className="flex flex-row p-2">
        <Icon size={size} className='mr-8' />
        {text}
      </div>
    ))}
  </code>
);


export default App;