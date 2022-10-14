import { AnimatePresence, motion } from "framer-motion";
import React, { useContext } from "react";
import { HomeContext } from "./home";

export const AnimationModal = () => {
  const { currentLayout, setCurrentLayout } = useContext(HomeContext);
  return (
    <AnimatePresence>
      {currentLayout && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 bg-gray-50 bg-opacity-30 flex justify-center items-center"
          onClick={() => setCurrentLayout && setCurrentLayout(undefined)}
        >
          <motion.div
            layoutId={currentLayout}
            className="h-[400px] w-[650px] bg-white rounded-lg shadow-lg opacity-95"
          >
            prathamesh
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
