import React, { useEffect } from "react";

const Sidebar = ({ clicks, setClicks }) => {
  const upgradeList = [
    {
      name: "cursor",
      cost: 15,
      delay: 5000,
      count: 1,
    },
    {
      name: "grandma",
      cost: 100,
      delay: 4000,
      count: 1,
    },
  ];

  const addUpgrade = (upgrade) => {
    console.log("Ran add upgrade");
    const item = upgradeList[upgrade];
    if (item && clicks >= item[0]) {
      setInterval(() => setClicks((prevCount) => prevCount + 1), item[1]);
      setClicks(clicks - item[0]);
    }
  };

  return (
    <div className="flex flex-col gap-2 p-10 bg-black h-dvh">
      <h2 className="text-white">Upgrades</h2>
      {upgradeList.map((upgrade) => {
        return (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => addUpgrade(upgrade["name"])}
          >
            {upgrade["name"]}: {upgrade["cost"]}
          </button>
        );
      })}
      {/* 
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => addUpgrade("grandma")}
      >
        Grandma: 100
      </button> */}
    </div>
  );
};

export default Sidebar;
