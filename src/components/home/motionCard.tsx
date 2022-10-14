import React, { Children } from "react";
import { motion } from "framer-motion";

export const MotionCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <motion.div>{children}</motion.div>;
};
