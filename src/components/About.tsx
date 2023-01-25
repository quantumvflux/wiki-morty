export const About = () => {
  return (
    <section id="about" className="mx-auto mb-4 w-10/12 scroll-m-8 md:w-2/5 ">
      <h2 className="mx-2 p-4 text-center text-4xl font-bold text-white">
        About
      </h2>
      <p className="mx-auto mb-8 font-thin text-gray-300">
        Rick and Morty is an American adult animated science-fiction sitcom
        created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
        programming block Adult Swim. It is distributed internationally by
        Warner Bros. Domestic Television. The series follows the misadventures
        of cynical mad scientist Rick Sanchez and his good-hearted but fretful
        grandson Morty Smith, who split their time between domestic life and
        interdimensional adventures that take place across an infinite number of
        realities, often travelling to other planets and dimensions through
        portals and on Rick's flying saucer. The general concept of Rick and
        Morty relies on two conflicting scenarios: domestic family drama, and an
        alcoholic grandfather dragging his grandson into hijinks.{" "}
      </p>
      <a
        className="w-36 rounded bg-yellow-200 p-2 text-center font-medium duration-100 ease-in-out hover:bg-yellow-100 active:scale-95"
        href="https://en.wikipedia.org/wiki/Rick_and_Morty"
        target="_blank"
      >
        More information
      </a>
    </section>
  );
};
