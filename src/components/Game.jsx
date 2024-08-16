import Lettuce from "../assets/images/lettuce.png";

const Game = ({ clicks, setClicks }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <img
        src={Lettuce}
        alt="Lettuce"
        className="object-cover h-96 w-96"
        onClick={() => setClicks(clicks + 1)}
      />
      <p className="text-black dark:text-white font-bold text-3xl">
        Times Clicked: {clicks}
      </p>
    </div>
  );
};

export default Game;
