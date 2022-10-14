import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web/build/player/lottie_light";

interface AnimationProps {
  animationData: any;
}

export const Animation: React.FC<AnimationProps> = ({ animationData }) => {
  const animationContainer = useRef(null);
  let animationController: AnimationItem;

  useEffect(() => {
    if (animationContainer.current) {
      animationController = lottie.loadAnimation({
        animationData,
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
      });
    }

    return () => {
      animationController.destroy();
    };
  }, []);

  return (
    <div
      className="rounded-lg shadow-xl cursor-pointer active:shadow-lg flex"
      // onMouseEnter={() => {
      //   if (animationController) {
      //     animationController.stop();
      //     animationController.play();
      //   }
      // }}
      // onMouseLeave={() => {
      //   if (animationController) {
      //     animationController.goToAndStop(
      //       animationController.totalFrames - 1,
      //       true
      //     );
      //   }
      // }}
    >
      <div ref={animationContainer} className="w-32 flex h-32"></div>
    </div>
  );
};
