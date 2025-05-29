export default function Upgrades({ clickCount, onUpgrade, doubleClickLevel }) {
  const doubleClickCost = 100 * 4 ** doubleClickLevel;
  const autoClickerCost = 200;

  const buyUpgrade = (upgrade) => {
    if (clickCount >= upgrade.cost) {
      onUpgrade(upgrade);
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Upgrades</h2>
      <ul className="space-y-4 w-full max-w-md">
        <li className="flex justify-between items-center bg-amber-800 p-4 rounded shadow">
          <span className="text-left w-2/3 text-yellow-400">
            Double Clicks (x{2 ** (doubleClickLevel + 1)}) – {doubleClickCost}{" "}
            cookies
          </span>
          <button
            onClick={() => buyUpgrade({ id: "double", cost: doubleClickCost })}
            disabled={clickCount < doubleClickCost}
            className="px-1 py-2 mx-3 w-15 text-sm md:text-lg sm:w-23 md:w-30 text-yellow-400 font-semibold md:py-2 md:px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 hover:text-[#003018] transition-colors duration-300 bg-green-800 disabled:opacity-40 disabled:bg-amber-800 disabled:text-yellow-400 disabled:cursor-not-allowed cursor-pointer"
          >
            Buy
          </button>
        </li>
        <li className="flex justify-between items-center  bg-amber-800 p-4 rounded shadow">
          <span className="text-left w-2/3 text-yellow-400">
            Auto Clicker – {autoClickerCost} cookies
          </span>
          <button
            onClick={() => buyUpgrade({ id: "auto", cost: autoClickerCost })}
            disabled={clickCount < autoClickerCost}
            className="px-1 py-2 mx-3 w-15 text-sm md:text-lg sm:w-23 md:w-30 text-yellow-400 font-semibold md:py-2 md:px-6 rounded-full border border-yellow-400 shadow-md hover:bg-yellow-300 cursor-pointer hover:text-[#003018] transition-colors duration-300 bg-green-800 disabled:opacity-40 disabled:bg-amber-800 disabled:text-yellow-400 disabled:cursor-not-allowed"
          >
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
}
