import Slider from "react-slick";
import { TestimonialData } from "../constants";

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function Testimonials() {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white">
      <div className="container sm:pb-16 pb-8">
        <div className="space-y-10">
          {/* heading section  */}
          <div className="text-center space-y-1">
            <p data-aos="fade-up" className="text-sm text-primary">
              What our customers are saying
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl sm:text-4xl font-bold"
            >
              Testimonials
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* testimonial card section  */}
          <div data-aos="zoom-in" data-aos-duration="800">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div key={data.id}>
                  <div className="bg-primary/10 dark:bg-gray-800 shadow-lg rounded-xl px-6 py-8 my-6  mx-4 relative">
                    {/* image section  */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    {/* details section  */}
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400 line-clamp-3">
                        {data.text}
                      </p>
                      <h3 className="text-xl font-semibold">{data.name}</h3>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
