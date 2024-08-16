import Header from "./components/Header";
import Game from "./components/Game";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="bg-white dark:bg-gray-800 h-dvh">
      <div className="flex">
        <Sidebar clicks={clicks} setClicks={setClicks} />
        <div className="w-screen">
          <Header />
          <Game clicks={clicks} setClicks={setClicks} />
        </div>
      </div>
    </div>
  );
}

export default App;
