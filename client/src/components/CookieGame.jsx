import { useEffect, useState, useRef } from "react";
import CookieClicker from "./CookieClicker";
import Upgrades from "./Upgrades";

export default function CookieGame({
  initialClickCount,
  initialDoubleClickLevel,
  initialAutoClickerActive,
  initialAutoClickerLevel,
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
  const [autoClickerLevel, setAutoClickerLevel] = useState(
    initialAutoClickerLevel
  );
  const doubleClickMultiplier = 2 ** doubleClickLevel;

  // useRef to store the timeout ID for debouncing save calls
  const saveTimeoutRef = useRef(null);

  // Effect to re-sync internal state with initial props if they change (e.g., user logs in/out)
  useEffect(() => {
    setClickCount(initialClickCount);
    setDoubleClickLevel(initialDoubleClickLevel);
    setAutoClickerActive(initialAutoClickerActive);
    setAutoClickerLevel(initialAutoClickerLevel);
  }, [
    initialClickCount,
    initialDoubleClickLevel,
    initialAutoClickerActive,
    initialAutoClickerLevel,
  ]);

  // To handle saving of data with timeInterval of 500ms
  useEffect(() => {
    // Only attempt to save if the onSaveGame function is provided
    if (onSaveGame) {
      // Clears any existing timeout to ensure only one save operation is pending
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      // A timeout to call onSaveGame after 500ms
      saveTimeoutRef.current = setTimeout(() => {
        onSaveGame({
          clickCount: clickCount,
          doubleClickLevel: doubleClickLevel,
          autoClickerActive: autoClickerActive,
          autoClickerLevel: autoClickerLevel,
        });
      }, 500);

      // Cleanup function: ensures any pending save is cleared
      return () => {
        if (saveTimeoutRef.current) {
          clearTimeout(saveTimeoutRef.current);
        }
      };
    }
  }, [
    clickCount,
    doubleClickLevel,
    autoClickerActive,
    autoClickerLevel,
    onSaveGame,
  ]);

  const handleClick = () => {
    setClickCount(
      (prevCount) => prevCount + doubleClickMultiplier + autoClickerLevel
    );
  };

  const handleUpgrade = (upgrade) => {
    if (upgrade.id === "double") {
      setClickCount((prevCount) => prevCount - upgrade.cost);
      setDoubleClickLevel((prevLevel) => prevLevel + 1);
    }

    if (upgrade.id === "auto") {
      if (clickCount >= upgrade.cost) {
        setClickCount((prevCount) => prevCount - upgrade.cost);
        setAutoClickerLevel((prevLevel) => prevLevel + 1);
        if (!autoClickerActive) {
          setAutoClickerActive(true);
        }
      } else {
        console.log("Not enough cookies to buy auto-clicker upgrade!");
      }
    }
  };

  // Auto-clicker interval is 1 second
  useEffect(() => {
    if (!autoClickerActive) return;

    const interval = setInterval(() => {
      if (doubleClickLevel > 0) {
        setClickCount((prev) => {
          return prev + doubleClickMultiplier + autoClickerLevel;
        });
      } else {
        setClickCount((prev) => {
          return prev + autoClickerLevel;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [autoClickerActive, doubleClickMultiplier, autoClickerLevel]);

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
        autoClicklevel={autoClickerLevel}
      />
    </div>
  );
}
