import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// import modal package
import Modal from "react-modal";
import { useState } from "react";
import { Fragment } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
    zIndex: "5000",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Projects } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-center">
          <img
            className="w-[50%] text-center"
            src={selectProject?.image}
            alt="..."
          />
        </div>
        <h6 className="text-center">{selectProject?.title}</h6>
        <br />
        <div className="px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectProject?.description}
        </div>
        <br />
        <div className="flex justify-between items-center">
          <div className="flex">
            <div>
              {" "}
              <a
                href={selectProject?.liveLink}
                target="_blank"
                className="btn bg-dark_primary text-white mr-3"
              >
                Live
              </a>
            </div>
            <div>
              {" "}
              <a
                href={selectProject?.codeLink}
                target="_blank"
                className="btn bg-dark_primary text-white"
              >
                Code
              </a>
            </div>
          </div>
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>
      <section className="bg-bg_light_primary" id="projects">
        <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
          <div>
            <h2 className="title" data-aos="fade-down">
              {Projects.title}
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              {Projects.subtitle}
            </h4>
            <br />
          </div>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
            <img
              src={Projects.image}
              alt="..."
              data-aos="fade-right"
              className="max-w-[45vw] min-w-[22rem]"
            />

            <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button
                      className="font-bold text-gray self-end"
                      onClick={() => {
                        setSelectProject(content);
                        openModal();
                      }}
                    >
                      READ MORE
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
