import "./styles/FocusedCard.css";
import PropTypes from "prop-types";
export default function FocusedCard({ img, title, desc }) {
  return (
    <div className="focused__card" data-aos="fade-up" data-aos-duration="1000">
      <img className="focused__card__img" src={img} alt={title} />
      <div className="focused__hover__container cent">
        <div className="focused__hover__content cent col">
          <h2 className="focused__card__title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
FocusedCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
