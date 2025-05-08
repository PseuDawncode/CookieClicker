//Reusable Cards for the game page
import React, { useState } from "react";

const UpgradeCard = ({ title, description, cost, cookies, onPurchase }) => {
  const canAfford = cookies >= cost;

  const handleClick = () => {
    if (canAfford) {
      onPurchase(cost);
    }
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow p-4 flex items-center justify-between mb-4 w-full max-w-xl mx-auto">
      <div>
        <h3 className="text-lg font-bold text-orange-800">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <button
        onClick={handleClick}
        className={`font-semibold py-2 px-4 rounded transition-colors duration-200 ${
          canAfford
            ? "bg-[#FFD700] text-black hover:brightness-110"
            : "bg-gray-400 text-white cursor-not-allowed"
        }`}
        disabled={!canAfford}
      >
        Pay {cost} Cookies
      </button>
    </div>
  );
};

export default UpgradeCard;
