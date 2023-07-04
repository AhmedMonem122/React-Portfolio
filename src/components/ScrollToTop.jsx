import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleActive);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-[40px] bottom-[40px] bg-dark_primary w-[40px] h-[40px] text-white flex items-center justify-center cursor-pointer hover:bg-gray hover:text-dark_primary transition-all z-[998] ${
        isActive ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaAngleUp />
    </div>
  );
}

export default ScrollToTop;
