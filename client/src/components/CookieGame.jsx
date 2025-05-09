import { useEffect, useState } from "react";
import CookieClicker from "./CookieClicker"; 
import Upgrades from "./Upgrades";

export default function CookieGame() {
  const [clickCount, setClickCount] = useState(() => {
    return parseInt(localStorage.getItem("clickCount")) || 0;
  });

  const [doubleClickActive, setDoubleClickActive] = useState(() => {
    return localStorage.getItem("doubleClickActive") === "true";
  });

  const [autoClickerActive, setAutoClickerActive] = useState(() => {
    return localStorage.getItem("autoClickerActive") === "true";
  });

  const handleCookieClick = () => {
    const increment = doubleClickActive ? 2 : 1;
    const newCount = clickCount + increment;
    setClickCount(newCount);
    localStorage.setItem("clickCount", newCount);
  };

  const handleUpgrade = (upgrade) => {
    if (upgrade.name === "Double Clicks") {
      setDoubleClickActive(true);
      localStorage.setItem("doubleClickActive", "true");
    }

    if (upgrade.name === "Auto Clicker") {
      if (!autoClickerActive) {
        setAutoClickerActive(true);
        localStorage.setItem("autoClickerActive", "true");
      }
    }
  };

  useEffect(() => {
    if (!autoClickerActive) return;

    const interval = setInterval(() => {
      setClickCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem("clickCount", newCount);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickerActive]);

  return (
    <div className="text-center p-8">
      <CookieClicker onCookieClick={handleCookieClick} count={clickCount} />
      <Upgrades clickCount={clickCount} onUpgrade={handleUpgrade} />
    </div>
  );
}
