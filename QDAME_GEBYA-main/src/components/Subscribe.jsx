import { OrangePattern } from "../assets/website";
const bgImage = {
  backgroundImage: `url(${OrangePattern})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
function Subscribe() {
  return (
    <section
      data-aos="zoom-in"
      style={bgImage}
      className="min-h-[200px] flex justify-center items-center"
    >
      <div className="container">
        <div className="space-y-4 max-w-[600px] mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Get Notified About New Products
          </h2>
          <input
            data-aos="fade-up"
            data-aos-delay="200"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 text-[#222] "
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
