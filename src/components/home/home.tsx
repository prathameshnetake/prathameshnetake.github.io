import React, { createContext, useState } from "react";
import { Section } from "../common/section";
import programmingAnimation from "../../../static/animations/programming-computer.json";
import experience from "../../../static/animations/experience.json";
import certificateAnimation from "../../../static/animations/certificate.json";
import dp from "../../../static/images/prathamesh.png";
import { Animation } from "../common/animation";
import { MotionCard } from "./motionCard";
import { AnimatePresence, motion } from "framer-motion";
import { AnimationModal } from "./animationModal";

export enum LAYOUT {
  PROGRAMMING = "programming",
  EXPERIENCE = "experience",
  CERTIFICATE = "certificate",
}

interface HomeContextType {
  currentLayout?: LAYOUT;
  setCurrentLayout?: React.Dispatch<React.SetStateAction<LAYOUT | undefined>>;
}

export const HomeContext = createContext<HomeContextType>({});

export const Home = () => {
  const animations: { data: any; id: LAYOUT }[] = [
    { data: programmingAnimation, id: LAYOUT.PROGRAMMING },
    { data: experience, id: LAYOUT.EXPERIENCE },
    { data: certificateAnimation, id: LAYOUT.CERTIFICATE },
  ];
  const [currentLayout, setCurrentLayout] = useState<undefined | LAYOUT>();

  return (
    <HomeContext.Provider value={{ currentLayout, setCurrentLayout }}>
      <Section>
        <div className="flex relative h-full w-full">
          <div className="absolute bottom-0 w-full flex justify-center">
            <img src={dp} alt="Prathamesh Netake" className="w-96" />
          </div>
          <div className="grid h-full w-full grid-cols-3">
            <div className="flex flex-col p-10 h-full grow">
              <div className="grow flex flex-col justify-center">
                <p className="text-xl">Hello I'm</p>
                <p className="text-6xl font-extrabold p-2">Prathamesh</p>
                <p className="p-2">
                  Prathamesh is a full-stack software developer with over seven
                  years of experience in various web domains, tech stacks, AI,
                  and product development. He specializes in Node.js, React, and
                  Python. Prathamesh aims to use the acquired skills in the
                  software industry to effectively contribute to a company's
                  business objectives and deliver innovative solutions.
                </p>
              </div>
              <div className="h-16">
                <p>prathamesh.netake@gmail.com</p>
              </div>
            </div>
            <div />
            <div className="grow">
              <div className="h-full flex items-center justify-center">
                <div className="grid justify-center items-center gap-10">
                  {animations.map((anm) => (
                    <motion.div
                      onClick={() => setCurrentLayout(anm.id)}
                      key={anm.id}
                      layoutId={anm.id}
                    >
                      <Animation animationData={anm.data} />
                    </motion.div>
                  ))}
                </div>
                <AnimationModal />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-10 left-10">
          <a
            className="flex text-center px-4 py-2 cursor-pointer bg-blue-900 text-white rounded-lg shadow-lg hover:shadow-2xl"
            href="mailto:prathamesh.netake@gmail.com?subject=Hello%2C%20Prathamesh&body=I%20am%20writing%20to%20say%20hello%2C%20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-50 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <p>Hire Me</p>
          </a>
        </div>
      </Section>
    </HomeContext.Provider>
  );
};
