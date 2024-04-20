import PropTypes from "prop-types";
import GallImg from "./GallImg";
import "./styles/GalleryContainer.css";
export default function GalleryContainer({ title, Images }) {
  let code = () => {
    console.log(Images);
  };
  code();
  return (
    <div className="gallery__img__container">
      <div className="gallery__img__title">
        <h1>{title}</h1>
      </div>
      <div className="row gallery__img__card__container">
        {Images.map((image, index) => (
          <GallImg key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

GalleryContainer.propTypes = {
  title: PropTypes.string,
  Images: PropTypes.array,
};
