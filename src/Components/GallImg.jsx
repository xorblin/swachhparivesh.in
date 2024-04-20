import "./styles/GallImg.css";
import PropTypes from "prop-types";
import { useState } from "react";
export default function GallImg({ image }) {
  const [expanded, setExpanded] = useState(false);

  let gallModalHandler = (e) => {
    if (!expanded) {
      e.stopPropagation();
      e.target.parentElement.classList.add("gallery__expand");
      e.target.classList.add("gallery__img__expand");
      setExpanded(true);
    }
  };
  let gallModalClose = (e) => {
    e.stopPropagation();
    e.currentTarget
      .closest(".gallery__expand")
      .classList.remove("gallery__expand");
    setExpanded(false);
  };

  return (
    <div className="gallery__img__card" onClick={(e) => gallModalHandler(e)}>
      {expanded && (
        <span
          className="close__expanded__gall"
          onClick={(e) => gallModalClose(e)}
        >
          X
        </span>
      )}
      <img className="gallery__img" src={image.src} alt={image.alt} />
    </div>
  );
}

GallImg.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
