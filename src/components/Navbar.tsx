import { Navlink } from "./Navlink";

export const Navbar = () => {
  return (
    <nav className="fixed z-10 h-12 w-screen bg-transparent text-white shadow-lg backdrop-blur-sm">
      <ul className="m-auto flex h-full w-64 content-center justify-center gap-4 md:gap-6">
        <Navlink to="#" text="Home" />
        <Navlink to="#about" text="About" />
        <Navlink to="#characters" text="Characters" />
      </ul>
    </nav>
  );
};
