import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { HomeContext, LAYOUT } from "./home";
import { WorkExperience } from "./workExperience";

export const AnimationModal = () => {
  const { currentLayout, setCurrentLayout } = useContext(HomeContext);

  const getLayoutContent = () => {
    switch (currentLayout) {
      case LAYOUT.EXPERIENCE:
        return <WorkExperience />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {currentLayout && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-50 bg-opacity-30 flex justify-center items-center">
          <motion.div
            layoutId={currentLayout}
            className="h-[600px] w-[720px] bg-white rounded-lg shadow-lg opacity-95 relative p-4 flex flex-col"
          >
            <button
              className="absolute right-4 top-4"
              onClick={() => setCurrentLayout && setCurrentLayout(undefined)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <div className="grow overflow-y-auto overflow-x-hidden">
              {getLayoutContent()}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
