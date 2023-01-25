interface Props {
  item: Character;
  setShowInfo: SetShowInfo;
}

export const CharacterInfo: React.FC<Props> = ({ item, setShowInfo }) => {
  return (
    <div className="fixed top-0 right-0 z-10 mt-0 flex h-screen w-screen items-center bg-gray-900">
      <div
        className="xl:2/4 h-90% relative m-auto flex w-5/6 flex-col justify-center rounded-lg bg-gray-700 p-4  text-white md:w-2/5"
        key={item.id}
      >
        <button
          className="absolute top-0 text-5xl text-gray-300"
          onClick={() => setShowInfo(false)}
        >
          &times;
        </button>
        <img
          src={item.image}
          className={"mt-12 h-96 w-full rounded-t-lg object-cover"}
        />
        <div className="">
          <div className="mt-4 rounded-lg bg-gray-600 p-2 ">
            <p className="  text-xl font-bold">{item.name}</p>
            <p className="">{item.species}</p>
          </div>

          <div className=" mt-2 rounded-lg bg-gray-600 p-2 ">
            <p className="font-light">Gender: </p>
            <span className="font-semibold">{item.gender}</span>
          </div>

          <div className=" mt-2 rounded-lg bg-gray-600 p-2 ">
            <p className="font-light">Last known location: </p>
            <span className="font-semibold">{item.location.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
