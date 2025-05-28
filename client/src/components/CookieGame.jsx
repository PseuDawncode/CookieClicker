import { useEffect, useState } from "react";
import CookieClicker from "./CookieClicker";
import Upgrades from "./Upgrades";

export default function CookieGame() {
  const [clickCount, setClickCount] = useState(() => parseInt(localStorage.getItem("clickCount")) || 0);
  const [doubleClickLevel, setDoubleClickLevel] = useState(() => parseInt(localStorage.getItem("doubleClickLevel")) || 0);
  const [autoClickerActive, setAutoClickerActive] = useState(() => localStorage.getItem("autoClickerActive") === "true");

  const doubleClickMultiplier = 2 ** doubleClickLevel;

  const handleClick = () => {
    const newCount = clickCount + doubleClickMultiplier;
    setClickCount(newCount);
    localStorage.setItem("clickCount", newCount);
  };

  const handleUpgrade = (upgrade) => {
    if (upgrade.id === "double") {
      const newLevel = doubleClickLevel + 1;
      setDoubleClickLevel(newLevel);
      localStorage.setItem("doubleClickLevel", newLevel);
    }

    if (upgrade.id === "auto" && !autoClickerActive) {
      setAutoClickerActive(true);
      localStorage.setItem("autoClickerActive", "true");
    }
  };

  useEffect(() => {
    if (!autoClickerActive) return;

    const interval = setInterval(() => {
      setClickCount((prev) => {
        const newCount = prev + doubleClickMultiplier;
        localStorage.setItem("clickCount", newCount);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickerActive]);

  return (
    <div className="text-center p-8">
      
      <CookieClicker
        onCookieClick={handleClick}
        count={clickCount}
        increment={doubleClickMultiplier}
      />
      <Upgrades
        clickCount={clickCount}
        onUpgrade={handleUpgrade}
        doubleClickLevel={doubleClickLevel}
      />
    </div>
  );
}
