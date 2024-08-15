import { useState } from "react";
import Lettuce from "./assets/images/lettuce.png";
import Header from "./components/Header";

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-800 h-dvh flex flex-col justify-center items-center gap-8">
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
    </>
  );
}

export default App;
