import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Character } from "./Character";
import { Navbar } from "./Navbar";

interface Props {
  characters: Character[];
}

export const AllCharacters: React.FC<Props> = ({ characters }) => {
  let [allCharacters, setAllCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const nextPage = () => {
    setPage((prev) => (prev < 42 ? prev + 1 : (prev = 42)));
  };

  const prevPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : (prev = 1)));
  };

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((jsonData) => setAllCharacters(jsonData.results))
      .catch((err) => console.log(err));
  }, [nextPage, prevPage]);

  return (
    <div>
      <nav className="w-screen pt-4 text-center">
        <Link
          className=" font-semibold text-yellow-200 hover:underline"
          to={"/"}
        >
          {" "}
          Home{" "}
        </Link>
      </nav>
      <h2 className="mx-2  p-4 text-center text-4xl font-bold text-white">
        Characters
      </h2>
      <div className="flex w-screen justify-center gap-4  pb-4">
        <button
          className="w-36 rounded bg-yellow-200 p-2 text-center font-medium duration-100 ease-in-out hover:bg-yellow-100 active:scale-95 "
          onClick={() => prevPage()}
        >
          Previous page
        </button>
        <button
          className="w-36 rounded bg-yellow-200 p-2 text-center font-medium duration-100 ease-in-out hover:bg-yellow-100 active:scale-95  "
          onClick={() => nextPage()}
        >
          Next page
        </button>
      </div>
      <p className="pb-4  text-center text-white">Page {page} of 42</p>
      <section
        id="characters"
        className="mx-auto  w-11/12  grid-cols-1 gap-8 p-4 md:w-2/3 md:grid-cols-3"
      >
        <div className="mx-auto mb-4 grid w-full scroll-m-8 grid-cols-1 gap-8 p-4 md:grid-cols-3">
          {allCharacters.length > 0 ? (
            allCharacters.map((item: Character) => (
              <Character key={item.id} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </div>
  );
};
