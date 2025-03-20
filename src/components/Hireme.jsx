import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-full md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] ml-3"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <a
              href="https://drive.google.com/file/d/1qEFMy99690Zxlpn4B_JkL7RFGSoHLNpW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn bg-dark_primary text-white"
            >
              {Hireme.btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
