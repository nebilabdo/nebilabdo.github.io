import { FaStar } from "react-icons/fa";
import { ProductsData } from "../constants";
import Button from "../ui/Button";
function Products() {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container sm:py-14 py-7">
        <div className="flex flex-col gap-6">
          {/* text section  */}
          <div className="flex flex-col items-center gap-1">
            <p data-aos="fade-up" className="text-sm text-secondary">
              Top Selling Products for you
            </p>

            <h2 data-aos="fade-up" className="font-bold text-3xl sm:text-4xl">
              Products
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xs text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* body section  */}
          <div className="space-y-6">
            {/* card section  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-2"
                >
                  <img
                    src={data.img}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-md font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-500">{data.color}</p>
                    <span className="flex items-center gap-[4px]">
                      <FaStar className="text-yellow-400" />
                      {data.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* button section  */}
            <div className="text-center">
              <Button styles="rounded-md bg-primary">View All Button</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
