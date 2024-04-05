import "./styles/GallImg.css";
import PropTypes from "prop-types";
export default function GallImg({ image }) {
  return (
    <div className="gallery__img__card">
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
