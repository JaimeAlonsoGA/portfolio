// import logo from './logo.svg';
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

import p7 from './assets/images/p7.png';
import p6 from './assets/images/p6.png';
import p5 from './assets/images/p5.png';
import p4 from './assets/images/p4.png';
import Tools from './components/tools';

const plantImages = [p4, p5, p6, p7];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plantImg, setPlantImg] = useState(plantImages[currentIndex]);
  const [completed, setCompleted] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTools, setShowTools] = useState(false);

  useEffect(() => {
    if (currentIndex === plantImages.length) {
      setCompleted(true);
      setShowContact(true);
    }
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <Container plantImg={plantImg} setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} completed={completed}
        setShowContact={setShowContact} showContact={showContact} showTools={showTools} setShowTools={setShowTools} />
    </div>
  );
}

const Container = ({ plantImg, setPlantImg, currentIndex, setCurrentIndex, completed, showContact, setShowContact, setShowTools, showTools }) => {
  return (
    <div>
      <div className='mb-10 text-center'>
        <h1 className="mt-6 text-slate-500 text-4xl">Jaime Alonso</h1>
      </div>
      <ContentBox setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      {showContact && <Contact setShowContact={setShowContact} />}
      {showTools && <Tools setShowTools={setShowTools} />}
      <div className='flex justify-between items-center'>
        <ProjectsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        <Plant plantImg={plantImg} />
        <ToolsButton setPlantImg={setPlantImg} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setShowTools={setShowTools}/>
      </div>
      <div className='fixed bottom-0 w-full flex flex-col items-center content-center'>
        {completed && <ContactButton setShowContact={setShowContact} />}
        <LinksBanner />
      </div>
    </div>
  );
}

const ContentBox = ({ setPlantImg, currentIndex, setCurrentIndex }) => {
  const [soundPressed, setSoundPressed] = useState(false);

  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [soundPressed]);

  const [pressed, setPressed] = useState({
    softwareDeveloper: true,
    soundEngineer: false
  })
  const handlePress = (name) => {
    setPressed({
      softwareDeveloper: false,
      soundEngineer: false,
      [name]: true
    })
  }

  return (
    <div className="flex items-center justify-center flex-col items-center">
      <div className="flex justify-evenly bg-gradient-to-r from-Red to-Yellow via-Plat w-1/2 mb-2 text-Black">
        <button onClick={() => handlePress('softwareDeveloper')} className={pressed.softwareDeveloper ? "text-Black font-bold p-1" : "text-gray-500 font-medium"}>Software Developer</button>
        <button onClick={() => { handlePress('soundEngineer'); setSoundPressed(true) }} className={pressed.soundEngineer ? "text-Black font-bold p-1" : "text-gray-500 font-medium"} >Sound Engineer</button>
      </div>
      <div className="bg-Gray w-1/2">
        <p>{pressed.softwareDeveloper ? softwareText : (pressed.soundEngineer ? soundText : "")}</p>
      </div>
    </div>
  );
}

const ProjectsButton = ({ setPlantImg, currentIndex, setCurrentIndex }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [buttonPressed]);

  return (
    <button onClick={() => setButtonPressed(true)}>
      <div className="ml-60">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="inline-block relative">
              <div className="overflow-hidden rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-Red to-Yellow p-6">..........</div>
              </div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-black">Projects</div>
            <p className="text-gray-500">Multidisciplinary projects</p>
          </div>
        </div>
      </div>
    </button>
  );
};

const ToolsButton = ({ setPlantImg, currentIndex, setCurrentIndex, setShowTools }) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    setCurrentIndex(currentIndex + 1);
    setPlantImg(plantImages[currentIndex]);
  }, [buttonPressed]);

  return (
    <button onClick={() => { setButtonPressed(true); setShowTools(true) }}>
      <div className="float-right mr-60">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="inline-block relative">
              <div className="overflow-hidden rounded-full">
                <div className="w-full h-full bg-gradient-to-r from-Yellow to-Red p-6">..........</div>
              </div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-black">Tools</div>
            <p className="text-gray-500">My everyday tools!</p>
          </div>
        </div>
      </div>
    </button>
  );
};

const Plant = ({ plantImg }) => {
  return (
    <div>
      <img src={plantImg} alt="This plant grows" className="object-contain w-64 h-64" />
    </div>
  );
};


const links = [
  { text: "Linkedin", icon: <CiLinkedin size={30} />, link: "https://www.linkedin.com/in/jaime360/" },
  { text: "GitHub", icon: <FaGithub size={25} />, link: "https://github.com/JaimeAlonsoGA" },
  { text: "Email", icon: <MdOutlineEmail size={25} />, link: "mailto:alonsog.jaime@gmail.com" },
  { text: "Resume", icon: <GrDocumentPdf size={23} />, link: "https://drive.google.com/file/d/1rc6TNp92qo8FIlQ6-1cn_Zt6SgQQ0T5L/view?usp=sharing" },
  { text: "Soundcloud", icon: <RiSoundcloudLine size={25} />, link: "https://soundcloud.com/jaime-alonso-360" },
  { text: "Itch.io", icon: <FaItchIo size={23} />, link: "https://open.spotify.com/artist/5Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6" },
];

const LinksBanner = () => {
  return (
    <Marquee velocity={5} className="mt-20" autoFill={true} gradient={true} gradientColor='Red' gradientWidth={600}>
      {links.map((link, index) => (
        <Links to={link.link} key={index} icon={link.icon} link={link.link} text={link.text} />
      ))}
    </Marquee>
  );
};

const Links = ({ text, icon, link }) => {
  return (
    <div className='flex items-center flex-col mx-20 p-2'>
      <a href={link} target="_blank" rel="noreferrer" className="text-Plat bg-LightRed w-18 h-18 p-4 inline-block hover:bg-Red">{icon}</a>
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

const ContactButton = ({ setShowContact }) => {
  return (
    <button onClick={() => setShowContact(true)}
      className='z-10 fixed bottom-0 flex flex-col 
    text-xl font-medium text-black
    justify-center items-center p-6 
    max-w-sm mx-auto shadow-xl rounded-xl 
    bg-gradient-to-r from-Plat to-Gray hover:bg-gradient-to-r hover:from-Plat hover:to-Green hover:text-Plat mb-32'>
      Contact
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="overflow-hidden rounded-full">
            </div>
            <div className="absolute inset-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <p className="text-Green text-base font-light p-2">Thank you for your interest!</p>
        </div>
      </div>
    </button>
  );
}

export default App;