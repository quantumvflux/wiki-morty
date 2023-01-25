import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { AllCharacters } from "./components/AllCharacters";
import { CharacterList } from "./components/CharacterList";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetch(url)
      .then((data) => data.json())
      .then((jsonData) => setCharacters(jsonData.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-900">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <CharacterList characters={characters} />
            </>
          }
        />
        <Route
          path="/characters"
          element={<AllCharacters characters={characters} />}
        />
      </Routes>
    </div>
  );
};
