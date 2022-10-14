import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web/build/player/lottie_light";

interface AnimationProps {
  animationData: any;
}

export const Animation: React.FC<AnimationProps> = ({ animationData }) => {
  const animationContainer = useRef(null);
  let animationController = useRef<AnimationItem | undefined>();

  useEffect(() => {
    console.log(animationContainer.current);
    if (animationContainer.current) {
      animationController.current = lottie.loadAnimation({
        animationData,
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
      });
    }

    return () => {
      if (animationController.current) {
        animationController.current.destroy();
      }
    };
  }, [animationContainer]);

  console.log(animationController);

  return (
    <div
      className="rounded-lg shadow-xl cursor-pointer active:shadow-lg flex"
      onMouseEnter={() => {
        if (animationController.current) {
          animationController.current.stop();
          animationController.current.play();
        }
      }}
      onMouseLeave={() => {
        if (animationController.current) {
          animationController.current.goToAndStop(
            animationController.current.totalFrames - 1,
            true
          );
        }
      }}
    >
      <div ref={animationContainer} className="w-32 flex h-32"></div>
    </div>
  );
};
