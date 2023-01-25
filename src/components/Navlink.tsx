interface Link {
  to: string;
  text: string;
}
export const Navlink: React.FC<Link> = ({ text, to }) => {
  return (
    <li className="m-auto ">
      <a className=" font-semibold text-yellow-200 hover:underline" href={to}>
        {text}
      </a>
    </li>
  );
};
