export default function Upgrades({ clickCount, onUpgrade, doubleClickLevel }) {
  const doubleClickCost = 100 * 4 ** doubleClickLevel;
  const autoClickerCost = 200;

  const buyUpgrade = (upgrade) => {
    if (clickCount >= upgrade.cost) {
      onUpgrade(upgrade);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Upgrades</h2>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <span>Double Clicks (x{2 ** (doubleClickLevel + 1)}) - {doubleClickCost} cookies</span>
          <button
            onClick={() => buyUpgrade({ id: "double", cost: doubleClickCost })}
            disabled={clickCount < doubleClickCost}
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Buy
          </button>
        </li>
        <li className="flex justify-between items-center">
          <span>Auto Clicker - {autoClickerCost} cookies</span>
          <button
            onClick={() => buyUpgrade({ id: "auto", cost: autoClickerCost })}
            disabled={clickCount < autoClickerCost}
            className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
          >
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
}
