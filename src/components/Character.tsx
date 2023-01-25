import { useState } from "react";
import { motion } from "framer-motion";
import { CharacterInfo } from "./CharacterInfo";

interface Props {
  item: Character;
}

export const Character: React.FC<Props> = ({ item }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {showInfo ? (
        <CharacterInfo setShowInfo={setShowInfo} item={item} />
      ) : null}
      <motion.div
        initial={{
          opacity: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1.01,
          cursor: "pointer",
        }}
        className="flex  flex-col justify-center rounded-lg bg-gray-700 text-white"
        onClick={() => {
          setShowInfo(true);
        }}
      >
        <img src={item.image} className={"h-full rounded-t-lg object-cover"} />
        <div className="m-4">
          <p className="text-xl font-bold">{item.name}</p>
          <p>{item.species}</p>
          <p>{item.status}</p>
        </div>
      </motion.div>
    </>
  );
};
