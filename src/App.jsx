// import components
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { Fragment, useEffect, useState } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <Navbar />
          <Hero />
          <Skills />
          <Service />
          <Projects />
          <Testimonials />
          <Hireme />
          <Contact />
          <footer className="p-3 text-center">
            <h6 className="mb-3">AHMED MONEM</h6>
            <p>
              Made with ♥ by AHMED MONEM &copy; All CopyRights Reserved 2023
            </p>
          </footer>
        </div>
      )}
    </Fragment>
  );
};

export default App;
