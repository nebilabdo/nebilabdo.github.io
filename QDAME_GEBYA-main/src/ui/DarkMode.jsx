import { useEffect, useState } from "react";
import { DarkButton, LightButton } from "../assets/website";
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const el = document.documentElement;
  useEffect(
    function () {
      if (theme === "light") {
        el.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      if (theme === "dark") {
        el.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    },
    [theme, el]
  );
  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="light button"
        className={`w-12 drop-shadow-md cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />

      <img
        src={DarkButton}
        alt="light button"
        className="w-12 drop-shadow-md cursor-pointer transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}

export default DarkMode;
