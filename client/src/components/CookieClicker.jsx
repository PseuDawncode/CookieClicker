import { useState } from "react";

export default function CookieClicker({ onCookieClick, count, increment }) {
  const [floatingNumbers, setFloatingNumbers] = useState([]);
  const [crumbs, setCrumbs] = useState([]);

  const handleClick = () => {
    onCookieClick();

    const id = Date.now();
    const floatX = Math.random() * 100 - 50;
    const floatY = Math.random() * 100 - 50;
    const crumbX = Math.random() * 80 - 40;
    const crumbY = Math.random() * 80 - 40;

    setFloatingNumbers((prev) => [...prev, { id, value: `+${increment}`, x: floatX, y: floatY }]);
    setCrumbs((prev) => [...prev, { id, x: crumbX, y: crumbY }]);

    setTimeout(() => {
      setFloatingNumbers((prev) => prev.filter((item) => item.id !== id));
      setCrumbs((prev) => prev.filter((item) => item.id !== id));
    }, 1000);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative">
        <img
          src="/cookie.png"
          alt="Cookie"
          onClick={handleClick}
          className="w-40 h-40 cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-90"
        />

        {floatingNumbers.map((item) => (
          <span
            key={item.id}
            className="absolute text-red-500 font-bold text-lg animate-float pointer-events-none select-none"
            style={{ top: "50%", left: "50%", transform: `translate(${item.x}%, ${item.y}%)` }}
          >
            {item.value}
          </span>
        ))}

        {crumbs.map((item) => (
          <div
            key={item.id}
            className="absolute w-2 h-2 bg-yellow-600 rounded-full animate-crumb"
            style={{ top: "50%", left: "50%", transform: `translate(${item.x}%, ${item.y}%)` }}
          ></div>
        ))}
      </div>
      <p className="mt-4 text-xl font-bold">{count} cookies</p>
    </div>
  );
}

