import { FaCaretDown, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import DarkMode from "../ui/DarkMode";
import { DropdownLinks, NavLinks } from "../constants";
import Button from "../ui/Button";

function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* upper section  */}
      <div className="bg-primary/40">
        <div className="container py-2 flex justify-between items-center">
          {/* logo section  */}
          <div className="">
            <a href="" className="flex items-center gap-2">
              <img src={Logo} alt="logo" className="w-10 h-10" />
              <span className="font-bold sm:text-2xl text-xl whitespace-nowrap">
                Qdame Gebya
              </span>
            </a>
          </div>
          {/* 🔍 section  */}
          <div className="flex justify-between items-center gap-3">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search..."
                className="sm:w-[200px] border border-gray-300 dark:border-gray-500 rounded-full px-2 py-1 group-hover:w-[300px] focus:outline-none focus:border focus:border-primary transition-all duration-300 dark:bg-gray-800"
              />
              <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button  */}
            <Button
              onClick={() => {}}
              styles="bg-gradient-to-r from-primary to-secondary flex gap-2 items-center group"
            >
              <span className="hidden group-hover:block transition-all duration-300">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-md" />
            </Button>
            {/* Dark mode switch */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower section  */}

      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="hidden sm:flex items-center py-3">
          {NavLinks.map((link) => (
            <li key={link.id} className="">
              <a
                href={link.link}
                className="px-4 hover:text-primary transition-all duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* SIMPLE DROP down links  */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] group">
              Trending Products
              <span className="group-hover:rotate-180 transition-all duration-300">
                <FaCaretDown />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className="inline-block p-2 rounded-md w-full hover:bg-primary/20 whitespace-nowrap"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
