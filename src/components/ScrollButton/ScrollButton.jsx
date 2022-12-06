import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";


const ScrollButton = (props) => {
    const visibility = props.visibility
// console.log('visibility =>', visibility)
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowAltCircleUp}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 2rem",
          fontSize: "30px",
          bottom: "40px",
          right: "40px",
          color: "#fff",
          textAlign: "center",
          zIndex: 1,
          visibility: `${visibility}`
        }}
      />
    </div>
  );
};

export default ScrollButton;
