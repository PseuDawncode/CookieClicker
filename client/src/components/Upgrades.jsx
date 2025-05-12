// components/Upgrades.jsx
import { useState, useEffect } from "react";

const upgradesList = [
  { id: 1, name: "Auto Clicker", cost: 50 },
  { id: 2, name: "Double Clicks", cost: 100 },
];

export default function Upgrades({ clickCount, onUpgrade }) {
  const [purchased, setPurchased] = useState(() => {
    const stored = localStorage.getItem("purchasedUpgrades");
    return stored ? JSON.parse(stored) : [];
  });

  const buyUpgrade = (upgrade) => {
    if (clickCount >= upgrade.cost && !purchased.includes(upgrade.id)) {
      const newPurchased = [...purchased, upgrade.id];
      setPurchased(newPurchased);
      localStorage.setItem("purchasedUpgrades", JSON.stringify(newPurchased));
      onUpgrade(upgrade);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Upgrades</h2>
      <ul>
        {upgradesList.map((upgrade) => (
          <li
            key={upgrade.id}
            className="mb-2 flex justify-between items-center"
          >
            <span>{upgrade.name} - {upgrade.cost} cookies</span>
            <button
              disabled={clickCount < upgrade.cost || purchased.includes(upgrade.id)}
              onClick={() => buyUpgrade(upgrade)}
              className="ml-4 px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              {purchased.includes(upgrade.id) ? "Purchased" : "Buy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
