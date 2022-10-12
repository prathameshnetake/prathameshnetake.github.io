import React from "react";
import { Section } from "../components/common/section";
import dp from "../../static/images/prathamesh.png";

export const Index = () => {
  return (
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
                years of experience in various web domains, tech stacks, AI, and
                product development. He specializes in Node.js, React, and
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
          <div className="grow">This is another column</div>
        </div>
      </div>
    </Section>
  );
};
