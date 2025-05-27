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
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
          <span className="text-left w-2/3">
            Double Clicks (x{2 ** (doubleClickLevel + 1)}) – {doubleClickCost} cookies
          </span>
          <button
            onClick={() => buyUpgrade({ id: "double", cost: doubleClickCost })}
            disabled={clickCount < doubleClickCost}
            className="ml-4 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Buy
          </button>
        </li>
        <li className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
          <span className="text-left w-2/3">Auto Clicker – {autoClickerCost} cookies</span>
          <button
            onClick={() => buyUpgrade({ id: "auto", cost: autoClickerCost })}
            disabled={clickCount < autoClickerCost}
            className="ml-4 px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
          >
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
}