import { GrSecure } from "react-icons/gr";
import Image from "../assets/women/women2.jpg";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
function Banner() {
  return (
    <section className="dark:bg-gray-900 dark:text-white pb-8 flex justify-center items-center min-h-[550px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* image section  */}
          <div className="">
            <div data-aos="zoom-in" className="md:w-1/2">
              <img
                src={Image}
                alt=""
                className="h-[350px] max-w-[400px] drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
          </div>
          {/* text content section  */}
          <div className="md:w-1/2">
            <div className="space-y-3">
              <h2 data-aos="fade-up" className="font-bold text-3xl sm:text-4xl">
                Winter Sale upto 50% Off
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm text-gray-500"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <div className="space-y-4">
                <div data-aos="fade-up" className="flex items-center gap-3">
                  <GrSecure className="text-4xl h-12 w-12 p-4 bg-violet-100 dark:bg-violet-400 rounded-full" />
                  <p>Quality Products</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex items-center gap-3"
                >
                  <IoFastFood className="text-4xl h-12 w-12 p-4 bg-orange-100 dark:bg-orange-400 rounded-full" />
                  <p>Fast Delivery</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex items-center gap-3"
                >
                  <GiFoodTruck className="text-4xl h-12 w-12 p-4 bg-green-100 dark:bg-green-400 rounded-full" />
                  <p>Easy Payment method</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex items-center gap-3"
                >
                  <GiFoodTruck className="text-4xl h-12 w-12 p-4 bg-yellow-100 dark:bg-yellow-400 rounded-full" />
                  <p>Get Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
