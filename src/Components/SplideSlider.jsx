import PropTypes from "prop-types";
import "./styles/SplideSlider.css";
export default function SplideSlider({ img }) {
  return (
    <div className="splide_carousel__container">
      <img src={img} className="splide_carousel__img" alt="slide1" />
      <div className="splide__carousel__content__container cent">
        <div className="splide__carousel__content">
          <h1 className="splide__carousel__content__title">Title</h1>
          <p className="splide__carousel__content__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            efficitur, sem et suscipit fermentum, nunc elit tincidunt odio, a
            pharetra libero nunc nec nisl.
          </p>
        </div>
      </div>
    </div>
  );
}
SplideSlider.propTypes = {
  img: PropTypes.string,
};
