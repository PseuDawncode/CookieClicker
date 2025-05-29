import { useEffect, useState, useRef } from "react";
import CookieClicker from "./CookieClicker";
import Upgrades from "./Upgrades";

export default function CookieGame({
  initialClickCount,
  initialDoubleClickLevel,
  initialAutoClickerActive,
  onSaveGame,
}) {
  // Initialize state using the initial props passed from App.jsx
  const [clickCount, setClickCount] = useState(initialClickCount);
  const [doubleClickLevel, setDoubleClickLevel] = useState(
    initialDoubleClickLevel
  );
  const [autoClickerActive, setAutoClickerActive] = useState(
    initialAutoClickerActive
  );

  const doubleClickMultiplier = 2 ** doubleClickLevel;

  // useRef to store the timeout ID for debouncing save calls
  const saveTimeoutRef = useRef(null);

  // Effect to re-sync internal state with initial props if they change (e.g., user logs in/out)
  useEffect(() => {
    setClickCount(initialClickCount);
    setDoubleClickLevel(initialDoubleClickLevel);
    setAutoClickerActive(initialAutoClickerActive);
  }, [initialClickCount, initialDoubleClickLevel, initialAutoClickerActive]);

  // To handle saving of data with timeInterval of 500ms
  useEffect(() => {
    // Only attempt to save if the onSaveGame function is provided
    if (onSaveGame) {
      // Clear any existing timeout to ensure only one save operation is pending
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      // A timeout to call onSaveGame after 500ms
      saveTimeoutRef.current = setTimeout(() => {
        onSaveGame({
          clickCount: clickCount,
          doubleClickLevel: doubleClickLevel,
          autoClickerActive: autoClickerActive,
        });
      }, 500);

      // Cleanup function: ensures any pending save is cleared
      return () => {
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }
      };
    }
  }, [clickCount, doubleClickLevel, autoClickerActive, onSaveGame]);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + doubleClickMultiplier);
  };

  const handleUpgrade = (upgrade) => {
    if (upgrade.id === "double") {
      setClickCount((prevCount) => prevCount - upgrade.cost);
      setDoubleClickLevel((prevLevel) => prevLevel + 1);
      console.log(clickCount);
    }

    if (upgrade.id === "auto") {
      setClickCount((prevCount) => prevCount - upgrade.cost);
      console.log(clickCount);
      if (clickCount < upgrade.cost) {
        setAutoClickerActive(false);
      }
      setAutoClickerActive(true);
    }
  };

  // Auto-clicker interval is 1 second
  useEffect(() => {
    if (!autoClickerActive) return;

    const interval = setInterval(() => {
      setClickCount((prev) => prev + doubleClickMultiplier);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickerActive, doubleClickMultiplier]);

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
