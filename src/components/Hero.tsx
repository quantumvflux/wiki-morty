import hero from "./../assets/hero.mp4";

export const Hero = () => {
  return (
    <div id="home" className="min-w-screen relative grid min-h-screen">
      <video
        src={hero}
        autoPlay
        loop
        className="h-screen w-screen object-cover"
      />
      <div className="absolute top-0 h-screen w-screen bg-gray-900 opacity-40"></div>
      <div className="absolute top-1/3 right-0 left-0 text-center text-white">
        <h1 className="mb-4 text-8xl font-bold ">Wiki & Morty</h1>
        <h2 className="text-xl">
          Rick and Morty information web page built with the
        </h2>
        <a
          className="text-xl font-semibold text-yellow-200 hover:underline"
          href="https://rickandmortyapi.com"
          target="_blank"
        >
          Rick And Morty API
        </a>
      </div>
    </div>
  );
};
