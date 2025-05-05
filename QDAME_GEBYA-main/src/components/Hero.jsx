import Slider from "react-slick";

import Button from "../ui/Button";
import { ImageList } from "../constants";

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] -z-10 bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center max-md:pb-8">
      {/* background pattern section  */}
      <div className="w-[700px] h-[700px] bg-primary/40 rounded-3xl absolute -top-1/2 right-0 rotate-45 -z-[9]"></div>
      {/* hero section  */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div className="" key={data.id}>
              <div className="flex flex-col-reverse md:flex-row gap-6">
                {/* text section  */}
                <div className="md:w-1/2 flex flex-col gap-4 justify-center max-md:text-center">
                  <h1
                    data-aos="zoom-out"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p data-aos="fade-up" className="text-sm line-clamp-3">
                    {data.description}
                  </p>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <Button styles="bg-gradient-to-r from-primary to-secondary px-4 py-2">
                      Order Now
                    </Button>
                  </div>
                </div>
                {/* image section  */}
                <div data-aos="zoom-in" className="">
                  <img
                    src={data.img}
                    alt="women"
                    className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Hero;
