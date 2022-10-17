import React, { ReactNode, useCallback, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

export interface Card {
  head: React.ReactNode;
  id: string;
  content: React.ReactNode;
}

export interface FramerAccordionProps {
  cards: Card[];
}

const Card: React.FC<{
  content: React.ReactNode;
  head: ReactNode;
  id: string;
  open: boolean;
  onClick: (id: string) => void;
}> = ({ head, content, onClick, id, open }) => {
  return (
    <motion.div
      layout
      initial={false}
      onClick={() => onClick(id)}
      className="w-full rounded-md p-4 m-2 shadow-sm cursor-pointer"
    >
      <motion.div layout>{head}</motion.div>
      {open && <motion.div>{content}</motion.div>}
    </motion.div>
  );
};

export const FramerAccordion: React.FC<FramerAccordionProps> = ({ cards }) => {
  const [openedCard, setOpenedCard] = useState<undefined | string>();
  const onCardClick = useCallback((id: string) => {
    setOpenedCard(id);
  }, []);

  return (
    <>
      {cards.map((c) => (
        <Card
          {...c}
          onClick={onCardClick}
          open={openedCard === c.id}
          key={c.id}
        />
      ))}
    </>
  );
};
