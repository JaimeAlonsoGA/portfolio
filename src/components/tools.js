// import { useSpring, animated } from '@react-spring/web'
import { useState } from "react";

import { TiTick } from "react-icons/ti";
import { MdHome } from "react-icons/md";

// import atom from '../assets/icons/atom.png';
// import eclipse from '../assets/icons/Eclipse IDE.png';
// import Android from '../assets/icons/Android.png';
// import Apache from '../assets/icons/Apache.png';
// import json from '../assets/icons/JSON.png';
import Android_Studio from '../assets/icons/Android Studio.png';
import copilot from '../assets/icons/copilot.png';
import css from '../assets/icons/css-3.png';
import docker from '../assets/icons/Docker.png';
import figma from '../assets/icons/figma.png';
import git from '../assets/icons/Git.png';
import html from '../assets/icons/html-5.png';
import java from '../assets/icons/java.png';
import javascript from '../assets/icons/js.png';
import kubernetes from '../assets/icons/Kubernetes.png';
import mongoDB from '../assets/icons/MongoDB.png';
import mysql from '../assets/icons/MySQL.png';
import nodejs from '../assets/icons/Node.js.png';
import npm from '../assets/icons/NPM.png';
import oracle from '../assets/icons/Oracle.png';
import react from '../assets/icons/react.png';
import reactNative from '../assets/icons/react-native.png';
import tailwindCSS from '../assets/icons/Tailwind CSS.png';
import unity from '../assets/icons/Unity.png';
import unrealEngine from '../assets/icons/Unreal Engine.png';
import vscode from '../assets/icons/Visual Studio Code.png';
import github from '../assets/icons/github.png';
import sqlite from '../assets/icons/SQLite.png';
import flutter from '../assets/icons/Flutter.png';
import csharp from '../assets/icons/C#.png';
import redux from '../assets/icons/Redux.png';
import expo from '../assets/icons/expo.png';
import firebase from '../assets/icons/Firebase.png';
import wwise from '../assets/icons/wwise.png';
import fmod from '../assets/icons/fmod.png';
import cubase from '../assets/icons/cubase.png';




const Tools = ({ setShowTools }) => {
    const [hoverTool, setHoverTool] = useState('My everyday tools!');

    // const props = useSpring({
    //     backgroundColor: hoverTool ? 'linear-gradient(to right, red, yellow)' : 'white',
    //     config: { duration: 1000 },
    //     reset: true,
    //     reverse: true,
    //     delay: 200,
    //     onRest: () => setHoverTool("My eveyday tools!")
    // })

    // useEffect(() => {
    // }, [setHoverTool])

    return (
        <>
            <div className="w-full h-full fixed inset-0 flex items-start justify-center z-50 overflow-auto">
                <div className="bg-white p-2 rounded-lg shadow-md">
                    <div className="w-full h-2 bg-gradient-to-r from-Red to-Yellow rounded-md"></div>
                    <div className="flex flex-row justify-between m-4 items-center">
                        <h1 className="text-gray-500"></h1>
                        <div className="text-center float-right hover:bg-gradient-to-r hover:from-Red hover:to-Yellow flex items-center justify-center rounded-lg mx-4 p-0.5">
                            <p className="text-gray-500 shadow-md rounded p-2">{hoverTool}</p>
                        </div>
                        <div className="float-right hover:bg-gradient-to-r hover:from-Red hover:to-Yellow w-6 h-6 flex items-center justify-center rounded-xl">
                            <button onClick={() => setShowTools(false)} className="bg-white w-5 h-5 rounded-xl"><MdHome size={20} color="Red" /></button>
                        </div>
                    </div>
                    <div className="m-4">
                        <ToolSection section={language} setHoverTool={setHoverTool} sectionType="Languages" />
                        <ToolSection section={frontend} setHoverTool={setHoverTool} sectionType="Frontend" />
                        <ToolSection section={database} setHoverTool={setHoverTool} sectionType="Backend" />
                        <ToolSection section={backend} setHoverTool={setHoverTool} sectionType="Setup" />
                        <ToolSection section={others} setHoverTool={setHoverTool} sectionType="Tools" />
                    </div>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0 bg-black opacity-20"></div>
        </>
    );
}

const ToolSection = ({ section, setHoverTool, sectionType }) => {
    return (
        <div className="flex flex-row justify-between border-2 border-Gray rounded-lg shadow-md p-2 text-gray-500 my-4 items-center">
            <div className="flex flex-wrap">
                {section.map((tool) => <ToolIcon image={tool.image} alt={tool.alt} setHoverTool={setHoverTool} />)}
            </div>
            <div className="text-center flex flex-col m-4">
                <code className="text-gray-300 text-2xl">{sectionType}</code>
            </div>
        </div>
    )
}

const ToolIcon = ({ image, alt, setHoverTool }) => {
    return (
        <div className="float-right hover:bg-gradient-to-r hover:from-Red hover:to-Yellow flex items-center justify-center rounded-lg mx-4 p-0.5"
            onMouseEnter={() => setHoverTool(alt)}>
            <div className="bg-Plat text-Plat text-center w-24 h-24 rounded-lg p-4">
                <img src={image} alt={alt} />
            </div>
        </div>
    )
}

const language = [
    // { image: csharp, alt: "C#" },
    { image: java, alt: "Java" },
    { image: javascript, alt: "JavaScript" },
]
const frontend = [
    // { image: flutter, alt: "Flutter" },
    // { image: redux, alt: "Redux" },
    // { image: css, alt: "CSS" },
    { image: tailwindCSS, alt: "Tailwind CSS" },
    { image: reactNative, alt: "React Native" },
    { image: react, alt: "React" },
    // { image: html, alt: "HTML" },
]
const database = [
    { image: docker, alt: "Docker" },
    { image: firebase, alt: "Firebase" },
    // { image: kubernetes, alt: "Kubernetes" },
    { image: oracle, alt: "Oracle" },
    // { image: mongoDB, alt: "MongoDB" },
    // { image: sqlite, alt: "SQLite" },
    { image: mysql, alt: "MySQL" },
]
const backend = [
    { image: git, alt: "Git" },
    // { image: npm, alt: "NPM" },
    { image: expo, alt: "Expo EAS" },
    { image: nodejs, alt: "Node.js" },
]
const others = [
    // { image: unrealEngine, alt: "Unreal Engine" },
    // { image: unity, alt: "Unity" },
    // { image: wwise, alt: "Wwise" },
    // { image: fmod, alt: "FMOD" },
    { image: figma, alt: "Figma" },
    { image: copilot, alt: "Copilot" },
    { image: Android_Studio, alt: "Android Studio" },
    { image: github, alt: "GitHub" },
    { image: cubase, alt: "Cubase" },
    { image: vscode, alt: "Visual Studio Code" },
]

export default Tools;