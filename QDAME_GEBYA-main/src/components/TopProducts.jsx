import { FaStar } from "react-icons/fa";
import { TopProductsData } from "../constants";
import Button from "../ui/Button";

function TopProducts() {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white transition-all duration-200 pb-8">
      <div className="container">
        <div className="flex flex-col gap-20">
          {/* heading section  */}
          <div className="space-y-1">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Rated Products for you
            </p>
            <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Best Products
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-400 text-sm"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>

          {/* card section  */}
          <div
            data-aos="zoom-in"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"
          >
            {TopProductsData.map((data) => (
              <div
                key={data.id}
                className="dark:bg-gray-800 rounded-xl max-w-[300px] shadow-lg p-4 text-center space-y-2 hover:bg-stone-800 dark:hover:bg-primary hover:text-white group"
              >
                {/* image section  */}
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[140px] mx-auto object-cover group-hover:scale-105 transform -translate-y-1/2 transition-all duration-200"
                  />
                </div>

                {/* details section  */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-center">
                      {Array.from({ length: 5 }, (i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 dark:text-white">
                      {data.description}
                    </p>
                  </div>
                  <div className="">
                    <Button styles="bg-primary group-hover:bg-white group-hover:text-primary transition-all duration-200">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
