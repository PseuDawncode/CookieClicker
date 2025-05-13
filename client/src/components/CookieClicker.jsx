import { useState } from "react";

export default function CookieClicker({ onCookieClick, count }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    onCookieClick();

    // Remove the "clicked" class after 150ms
    setTimeout(() => {
      setClicked(false);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src="/cookie.png"
        alt="Cookie"
        onClick={handleClick}
        className={`w-40 h-40 cursor-pointer transition-transform duration-150 ${
          clicked ? "scale-90" : "scale-100"
        }`}
      />
      <p className="mt-4 text-3xl font-bold">{count} cookies</p>
    </div>
  );
}
