import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

import { FooterPattern } from "../assets/website";
import Logo from "../assets/logo.png";
import { FooterLinks } from "../constants";
const bgImage = {
  backgroundImage: `url(${FooterPattern})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
function Footer() {
  return (
    <div style={bgImage} className="text-white pb-56 pt-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        className="container flex justify-center items-center"
      >
        <div className="flex lg:flex-row flex-col lg:gap-24 gap-10">
          {/* 1st section */}
          <div className="lg:w-1/3 space-y-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="w-12 h-12" />
              <h3 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
                Qdame Gebya
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>
          {/* 2nd section */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="mr-20">
              <h3 className="font-semibold text-2xl whitespace-nowrap">
                Important Links
              </h3>
              <div className="mt-3">
                <ul className="space-y-2">
                  {FooterLinks.map((data) => (
                    <li
                      key={data.title}
                      className="hover:pl-1 hover:text-primary transition-all duration-200"
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="font-semibold text-2xl">Links</h3>
              <div className="mt-3">
                <ul className="space-y-2">
                  {FooterLinks.map((data) => (
                    <li
                      key={data.title}
                      className="hover:pl-1 hover:text-primary transition-all duration-200"
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Kera, Addis Ababa</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+251923456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
