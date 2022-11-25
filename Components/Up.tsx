import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Up = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      id="myBtn"
      title="Go to top"
      className="bg-slate-700 hover:bg-blue-500"
    >
      <FaArrowUp />
    </button>
  );
};

export default Up;
