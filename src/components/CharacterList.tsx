import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Character } from "./Character";

interface Props {
  characters: Character[];
}
export const CharacterList: React.FC<Props> = ({ characters }) => {
  return (
    <section
      id="characters"
      className="mx-auto w-11/12 scroll-m-8 grid-cols-1 gap-8 p-4 md:w-2/3 md:grid-cols-3"
    >
      <h2 className="mx-2 p-4 text-center text-4xl font-bold text-white">
        Characters
      </h2>
      <div className="mx-auto mb-4 grid w-full scroll-m-8 grid-cols-1 gap-8 p-4 md:grid-cols-3">
        {characters.slice(0, 6).map((item: Character) => (
          <Character key={item.id} item={item} />
        ))}
      </div>
      <Link
        className=" m-4 w-36 rounded bg-yellow-200 p-2 text-center font-medium duration-100 ease-in-out hover:bg-yellow-100 active:scale-95"
        to={"/characters"}
      >
        All Characters
      </Link>
    </section>
  );
};
