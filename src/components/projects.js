import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { TiTick } from "react-icons/ti";
//Alone?
import { MdPerson } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
//Game, App or Website?
import { IoGameController } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { SiGooglechrome } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdHome } from "react-icons/md";

import alchimixIcon from '../assets/projects/alchimixIcon.png';
import biovisu from '../assets/projects/biovisu.jpg';
import erase from '../assets/projects/erase.png';
import gas from '../assets/projects/gas.png';
import getem from '../assets/projects/getem.jpg';
import gift from '../assets/projects/gift.png';
import goblin from '../assets/projects/goblin.jpg';
import portfolio from '../assets/projects/portfolio.png';
import reclaim from '../assets/projects/reclaim.png';
import sucked from '../assets/projects/sucked.png';
import time from '../assets/projects/time.png';
import unreal from '../assets/projects/unreal.png';
import Marquee from "react-fast-marquee";


import react from '../assets/icons/react.png';
import reactNative from '../assets/icons/react-native.png';
import tailwindCSS from '../assets/icons/Tailwind CSS.png';
import unity from '../assets/icons/Unity.png';
import unrealEngine from '../assets/icons/Unreal Engine.png';
import wwise from '../assets/icons/wwise.png';
import fmod from '../assets/icons/fmod.png';
import cubase from '../assets/icons/cubase.png';
import figma from '../assets/icons/figma.png';
import firebase from '../assets/icons/Firebase.png';

const placeholderProjects = "...";


const Projects = ({ setShowProjects }) => {
    const [hoverProject, setHoverProject] = useState('My projects!');
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [filterPressed, setFilterPressed] = useState({
        solo: false,
        group: false,
        game: false,
        app: false,
        website: false,
    });

    const selectFilter = (text) => {
        if (selectedFilter === text) {
            setSelectedFilter(null);
        } else {
            setSelectedFilter(text);
        }
        // console.log(filterPressed);
    };

    const isLgScreen = useMediaQuery({ query: '(min-width: 1024px)' });

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50 h-screen">
                <div className="bg-white p-2 rounded-lg shadow-lg w-full h-full">
                    <div className="w-full h-2 bg-gradient-to-r from-Red to-Yellow rounded-md"></div>
                    <div className="flex flex-row justify-between m-4 items-center">
                        {isLgScreen && <div className="flex flex-row">
                            <p className="text-gray-300">Filters: </p>
                            {filterButtons.map((button) => <HeaderIcon
                                icon={button.icon} text={button.text} setHoverProject={setHoverProject}
                                filterGroupPressed={filterPressed}
                                setFilterPressed={setFilterPressed}
                                isSelected={selectedFilter === button.text}
                                onSelect={() => selectFilter(button.text)}
                                selectText={button.selectText} />)}
                        </div>}
                        {!isLgScreen && <div></div>}
                        <div className="absolute left-0 right-0 mx-auto text-center hover:bg-gradient-to-r hover:from-Red hover:to-Yellow flex items-center justify-center rounded-lg p-0.5" style={{ width: 'fit-content' }}>
                            <p className="text-gray-500 shadow-md rounded p-2">{hoverProject}</p>
                        </div>
                        <div className="hover:bg-gradient-to-r hover:from-Red hover:to-Yellow w-6 h-6 flex items-center justify-center rounded-xl">
                            <button onClick={() => setShowProjects(false)} className="bg-white w-5 h-5 rounded-xl"><MdHome size={20} color="Red" /></button>
                        </div>
                    </div>
                    {isLgScreen && <div className="mt- 20 flex justify-center items-center">
                        <div className="justify-center">
                            <ProjectsContainer setHoverProject={setHoverProject} />
                        </div>
                    </div>}
                    {!isLgScreen && <MobileProjectsContainer setHoverProject={setHoverProject} />}
                    {isLgScreen && <div className="flex flex-row justify-center items-center">
                        <div className="fixed bottom-10 px-4 justify-center">
                            <ProjectsRow setHoverProject={setHoverProject} filterPressed={filterPressed} selectedFilter={selectedFilter} />
                        </div>
                    </div>}
                </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
        </>
    );
};


const MobileProjectsContainer = ({ setHoverProject }) => {
    return (
        <div className="flex flex-col container mx-auto px-1 my-24 overflow-y-auto">
            <div className="flex text-gray-500 my-0.25 items-center">
                {projects.map((project) => <MobileProjectInfoMarquee title={project.title} image={project.image} alt={project.alt} setHoverProject={setHoverProject}
                    group={project.group} platform={project.platform} rol={project.rol} maintech={project.maintech} sidetech={project.sidetech} link={project.link} />)}
            </div>
        </div>
    );
};


const ProjectsContainer = ({ setHoverProject }) => {
    return (
        <div className="container mx-auto px-1 my-24 overflow-x-auto">
            <Marquee velocity={5} autoFill={true} gradient={true} pauseOnClick={true}>
                <div className="flex text-gray-500 my-0.25 items-center">
                    {projects.map((project) => <ProjectInfoMarquee title={project.title} image={project.image} alt={project.alt} setHoverProject={setHoverProject}
                        group={project.group} platform={project.platform} rol={project.rol} maintech={project.maintech} sidetech={project.sidetech} link={project.link} />)}
                </div>
            </Marquee>
        </div>
    );
};


const ProjectInfoMarquee = ({ setHoverProject, image, alt, title, group, platform, rol, maintech, sidetech, link }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <a href={link} target="_blank">
            <div className="hover:bg-gradient-to-r hover:from-Red hover:to-Yellow rounded-lg p-0.5 mx-4 justify-center items-center"
                onMouseEnter={() => { setHoverProject(alt); setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false); setHoverProject(placeholderProjects) }}>
                <div className="flex flex-col items-center bg-Plat text-Black rounded-lg">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div>
                            <p className="text-gray-500">{title}</p>
                        </div>
                        {isHovering &&
                            <div className="flex flex-row">
                                {group === "Alone" ? <MdPerson size={20} color="black" className="mr-2" /> : <RiTeamFill size={20} color="black" className="mr-2" />}
                                {platform === "Game" ? <IoGameController size={20} color="black" /> : platform === "App" ? <IoPhonePortraitOutline size={20} color="black" /> : <GrPersonalComputer size={20} color="black" />}
                            </div>
                        }
                    </div>
                    <div className="relative rounded-lg bg-Plat text-Plat h-72 w-72 cursor-none">
                        <img src={image} alt={alt} className="z-20 rounded-lg absolute top-0 left-0 h-full w-full object-cover hover:opacity-5" />
                        {isHovering && (
                            <div className="flex flex-col absolute inset-0 flex items-center justify-center">
                                <img src={maintech} alt="Main technology" className="w-24 h-24 mt-2" />
                                <div className="flex flex-col">
                                    {rol.map((rol) =>
                                        <div className="mt-4 z-10 text-center bg-gradient-to-r from-Red to-Yellow flex items-center justify-center rounded-lg mx-4 p-0.5">
                                            <p className="text-Black shadow-md rounded p-2 w-full overflow-auto break-words">{rol}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-row w-full h-full justify-center items-center mt-4">
                                    {sidetech.map((tech, index) => <img key={index} src={tech} alt="Side technology" className="h-8 w-8 object-cover mx-4" />)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
};


const MobileProjectInfoMarquee = ({ setHoverProject, image, alt, title, group, platform, rol, maintech, sidetech, link }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="hover:bg-gradient-to-r hover:from-Red hover:to-Yellow rounded-lg p-0.5 mx-4 justify-center items-center"
            onMouseEnter={() => { setHoverProject(alt); setIsHovering(true) }} onMouseLeave={() => { setIsHovering(false); setHoverProject(placeholderProjects) }}>
            <div className="flex flex-col items-center bg-Plat text-Black rounded-lg">
                <div className="w-full flex flex-row justify-between items-center">
                    <div>
                        <p className="text-gray-500">{title}</p>
                    </div>
                    {isHovering &&
                        <div className="flex flex-row">
                            {group === "Alone" ? <MdPerson size={20} color="black" className="mr-2" /> : <RiTeamFill size={20} color="black" className="mr-2" />}
                            {platform === "Game" ? <IoGameController size={20} color="black" /> : platform === "App" ? <IoPhonePortraitOutline size={20} color="black" /> : <GrPersonalComputer size={20} color="black" />}
                        </div>
                    }
                </div>
                <div className="relative rounded-lg bg-Plat text-Plat h-72 w-72 cursor-none">
                    <img src={image} alt={alt} className="z-20 rounded-lg absolute top-0 left-0 h-full w-full object-cover hover:opacity-5" />
                    {isHovering && (
                        <div className="flex flex-col absolute inset-0 flex items-center justify-center">
                            <img src={maintech} alt="Main technology" className="w-24 h-24 mt-2" />
                            <div className="flex flex-col">
                                {rol.map((rol) =>
                                    <div className="mt-4 z-10 text-center bg-gradient-to-r from-Red to-Yellow flex items-center justify-center rounded-lg mx-4 p-0.5">
                                        <p className="text-Black shadow-md rounded p-2 w-full overflow-auto break-words">{rol}</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-row w-full h-full justify-center items-center mt-4">
                                {sidetech.map((tech, index) => <img key={index} src={tech} alt="Side technology" className="h-8 w-8 object-cover mx-4" />)}
                            </div>
                        </div>
                    )}
                </div>
                <a href={link} target="_blank" className="p-2 mt-4 border-gray-500 border-2 rounded">
                    <FaExternalLinkAlt size={18} />
                </a>
            </div>
        </div>
    );
};


const ProjectsRow = ({ setHoverProject, filterPressed, selectedFilter }) => {
    const isFilterMatch = (group, platform) => {
        if (selectedFilter === "solo" || selectedFilter === "group") {
            if (group === "Solo") {
                return filterPressed.solo;
            }
            else if (group === "Group") {
                return filterPressed.group;
            }
        }
        if (selectedFilter === "game" || selectedFilter === "app" || selectedFilter === "website") {
            if (platform === "Game") {
                return filterPressed.game;
            } else if (platform === "App") {
                return filterPressed.app;
            } else if (platform === "Website") {
                return filterPressed.website;
            }
        }
        return true;
    }

    return (
        <div>
            <div className="flex flex-row justify-center items-center">
                {/* <p className="text-center text-gray-500">External</p> */}
                {/* <FaItchIo color="gray" className="mx-2" /> */}
                <FaExternalLinkAlt size={18} color="black" className="mr-2" />
                {/* <FaGithub color="gray" className="mr-2" /> */}
                {/* <p className="text-center text-gray-500">Links</p> */}

            </div>
            <div className="flex flex-row p-2 text-gray-500 my-2 items-center justify-center border rounded-xl">
                {projects.map((project) => (
                    <ProjectInfoRow
                        title={project.title} image={project.image} alt={project.alt} setHoverProject={setHoverProject}
                        link={project.link} group={project.group} filterPressed={filterPressed} platform={project.platform} isFilterMatch={isFilterMatch} />
                ))}
            </div>
        </div>
    );
}

const ProjectInfoRow = ({ image, alt, link, setHoverProject, group, platform, isFilterMatch }) => {

    return (
        <div className={isFilterMatch(group, platform) ? "p-0.5 opacity-80 hover:opacity-100 border-b-2 border-gray-500 rounded-lg mx-4" : "p-0.5 opacity-20 hover:opacity-100 mx-4"}
            onMouseEnter={() => setHoverProject(alt)}
            onMouseLeave={() => setHoverProject(placeholderProjects)}>
            <div className="bg-Plat text-Plat rounded-lg">
                <a href={link} target="_blank">
                    <img src={image} alt={alt} className="rounded-lg w-24" />
                </a>
            </div>
        </div>
    );
}

const HeaderIcon = ({ icon, setHoverProject, text, setFilterPressed, onSelect, isSelected, selectText }) => {
    const handlePress = (name) => {
        setFilterPressed(prevState => ({
            solo: false,
            group: false,
            game: false,
            app: false,
            website: false,
            [name]: !prevState[name]
        }));
    }

    return (
        <div className={isSelected ? "flex flex-row items-center justify-center rounded-xl bg-gradient-to-r from-Red to-Yellow p-0.5 mx-4"
            : "flex flex-row items-center justify-center rounded-xl hover:bg-gradient-to-r hover:from-Red hover:to-Yellow p-0.5 mx-4"}
            onMouseEnter={() => { setHoverProject(selectText) }}
            onMouseLeave={() => { setHoverProject(placeholderProjects) }}>
            <button onClick={() => {
                onSelect();
                handlePress(text);
            }} className="bg-white rounded-xl p-1">{icon}</button>
        </div>
    );
};

//id, title, image, alt, group, platform, link, rol, maintech, sidetech
const projects = [
    { id: 1, title: "Alchimix", image: alchimixIcon, alt: "Cocktail recipe book for Android and IOS", group: "Solo", platform: "App", link: "https://github.com/JaimeAlonsoGA/alchimix", rol: ["Fullstack Developer"], maintech: reactNative, sidetech: [figma] },
    { id: 8, title: "Jaime 360", image: portfolio, alt: "This website!", group: "Solo", platform: "Website", link: "https://github.com/JaimeAlonsoGA/portfolio", rol: ["Fullstack Developer"], maintech: react, sidetech: [tailwindCSS, figma, firebase] },
    { id: 3, title: "Once Upon A Time", image: erase, alt: "Social storytelling game for Android and IOS", group: "Solo", platform: "App", link: "https://github.com/JaimeAlonsoGA/erase-una-vez", rol: ["Fullstack Developer"], maintech: reactNative, sidetech: [figma] },
    { id: 12, title: "Unreal Engine Demo Level", image: unreal, alt: "Level design and game mechanics demo for Unreal Engine", group: "Solo", platform: "Game", link: "https://youtu.be/uMCGGwNkLDA?si=FRIiVkmciwvWmhbn", rol: ["Fullstack Developer"], maintech: unrealEngine, sidetech: [cubase] },
    { id: 11, title: "TimeKeeper", image: time, alt: "Video game with procedural level generation and high score", group: "Group", platform: "Game", link: "https://threeraccoonsgames.itch.io/timekeeper", rol: ["Project manager", "Game designer"], maintech: unity, sidetech: [] },
    { id: 2, title: "The Visu Exam", image: biovisu, alt: "Specie identification tool for Android and IOS", group: "Solo", platform: "App", link: "https://github.com/JaimeAlonsoGA/bio-visu", rol: ["Fullstack Developer"], maintech: reactNative, sidetech: [figma] },
    { id: 9, title: "Reclaim the Surface", image: reclaim, alt: "Video game with levels, enemies and a final boss fight", group: "Group", platform: "Game", link: "https://rubikow.itch.io/reclaim-the-surface", rol: ["Sound Designer", "Audio implementation"], maintech: unity, sidetech: [fmod, cubase] },
    { id: 6, title: "The Gift Of Fire", image: gift, alt: "Video game based on the dungeon crawler concept", group: "Group", platform: "Game", link: "https://mkimball.itch.io/gift-of-fire", rol: ["Sound Designer", "Audio implementation"], maintech: wwise, sidetech: [cubase] },
    { id: 4, title: "SmartGas", image: gas, alt: "Your car gas consumption statistics for Android and IOS", group: "Group", platform: "App", link: "https://github.com/JaimeAlonsoGA/smartgas", rol: ["Developer"], maintech: reactNative, sidetech: [tailwindCSS] },
    { id: 10, title: "Sucked Souls", image: sucked, alt: "Video game in which you kill zombies", group: "Group", platform: "Game", link: "https://thekaoser.itch.io/suck-souls", rol: ["Sound Designer"], maintech: cubase, sidetech: [] }, //cubase
    { id: 5, title: "Get'em", image: getem, alt: "Video game with levels, local multiplayer and dynamic audio", group: "Group", platform: "Game", link: "https://globalgamejam.org/games/2024/get-it-them-2", rol: ["Sound Designer", "Audio implementation"], maintech: unity, sidetech: [fmod, cubase] },
    { id: 7, title: "Walking the Goblin", image: goblin, alt: "Video game made to satisfy the ambitions of beign a goblin", group: "Solo", platform: "Game", link: "https://github.com/JaimeAlonsoGA/walking-the-goblin", rol: ["Fullstack Developer"], maintech: unity, sidetech: [fmod, cubase] },
]

const filterButtons = [
    { icon: <MdPerson />, text: "solo", selectText: "Solo" },
    { icon: <RiTeamFill />, text: "group", selectText: "Group" },
    { icon: <IoGameController />, text: "game", selectText: "Video Game" },
    { icon: <IoPhonePortraitOutline />, text: "app", selectText: "App" },
    { icon: <GrPersonalComputer />, text: "website", selectText: "Website" }
];

export default Projects;