import React, { useState, useEffect } from "react";
import { ReactComponent as Up } from "../../images/up.svg";

import "./ToTop.css";

function ToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showTopBtn && (
      <button className="btnUp" onClick={goToTop} type="button">
        <Up className="up" />
      </button>
    )
  );
}

export default ToTop;
