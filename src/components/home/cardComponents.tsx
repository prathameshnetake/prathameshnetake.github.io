import React from "react";
import { motion } from "framer-motion";

interface CardHeadProps {
  title?: string;
  subTitle?: string;
}

interface CardContentProps {
  items: string[];
}

export const CardContent: React.FC<CardContentProps> = ({ items }) => {
  return (
    <ol className="mt-4 list-disc pl-6">
      {items.map((i) => (
        <li className="text-sm text-gray-800 mt-1">{i}</li>
      ))}
    </ol>
  );
};

export const CardHead: React.FC<CardHeadProps> = ({ title, subTitle }) => {
  return (
    <motion.div className="flex">
      <div className="flex flex-col">
        <motion.p className="text-lg font-semibold">{title}</motion.p>
        <motion.p className="text-sm text-gray-500">{subTitle}</motion.p>
      </div>
      <div></div>
    </motion.div>
  );
};
