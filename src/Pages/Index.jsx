import "./styles/index.css";
import "./styles/splide.css";
import "@splidejs/react-splide/css";
import FocusedCard from "../Components/FocusedCard";
import Children from "../assets/children.jpg";
import { Link } from "react-router-dom";
import { Img1, Img2, Img3, Img4 } from "../import/Splide";
import { founder, secretary } from "../import/founder";
import FocusedData from "../import/focused";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Founder from "../Components/FounderCard";

import Slum from "../assets/Events/work-in-slums.jpg";
import Plantation from "../assets/Events/plantation.jpg";
import Empowerment from "../assets/Gallery/Empowerment/empowerment3.jpg";
import Health from "../assets/Gallery/Health/health2.jpg";
import Relief from "../assets/Gallery/Relief/relief1.jpg";
import Awareness from "../assets/Gallery/Awareness/awareness1.jpg";
import BodyHelmet from "../Components/BodyHelmet";

const Home = () => {
  let splideOption = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    rewind: true,
    pauseOnHover: false,
    pagination: false,
  };
  function windowTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <BodyHelmet
        title="Home"
        description="This is the home page"
        keywords="home, page, website"
      />
      <div className="banner__container nav__margin row">
        <div className="banner__item banner__splide__image__container">
          <Splide hasTrack={false} aria-label="" options={splideOption}>
            <SplideTrack>
              <SplideSlide>
                <img
                  src={Img1}
                  className="splide__img"
                  alt="Swachh Parivesh Tree Plantation"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Img2}
                  className="splide__img"
                  alt="Swachh Parivesh Cleanliness Tour "
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Img3}
                  className="splide__img"
                  alt="Swach Parivesh Women Computer Education Empowerment"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  src={Img4}
                  className="splide__img"
                  alt="Swach Parivesh Business Empowerment"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
        <div className="banner__item banner__splide__text__container">
          <div className="banner__header">
            <h1>Swachh Parivesh Foundation</h1>
          </div>
          <Splide
            hasTrack={false}
            aria-label=""
            options={splideOption}
            id="text__splide"
          >
            <SplideTrack>
              <SplideSlide>
                <div className="banner__slide__content cent">
                  <div>
                    <h1>Tile</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque, mollitia?
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="banner__slide__content cent">
                  <div>
                    <h1>Tile</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque, mollitia?
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="banner__slide__content cent">
                  <div>
                    <h1>Tile</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque, mollitia?
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>

      {/*  */}
      <div className="story__container row">
        <div className="story__item story__img__container cent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="-25 -25 250 250"
            className="float floating__blob__svg"
          >
            <defs>
              <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" className="stop1" />
                <stop offset="100%" className="stop2" />
              </linearGradient>
            </defs>
            <path
              d="M101.34738293717042 0.009077615912445935 C66.01573089280191 -0.7867065457788454 4.885321376904964 63.56658879482341 0.01023449566372392 98.56933777996282 C-3.51708986482883 123.89525548915712 26.42129646022909 180.34542116084572 51.05493888190314 187.20310196401135 C92.01656511936224 198.60627787712426 193.28963838144801 146.88556186333344 199.88084308874613 104.88028522540152 C205.45752365354673 69.34049845676228 137.3129165834482 0.8191388608987351 101.34738293717042 0.009077615912445935Z"
              stroke="none"
              fill="url(#lgrad)"
            />
          </svg>
          <img src={Children} alt="" className="story__img" />
        </div>
        <div className="story__item cent">
          <div className="story__item__content">
            <div className="story__item__header row">
              <div className="border__left"></div>
              <div className="border__center">
                <p>Our Story</p>
              </div>
              <div className="border__right"></div>
            </div>
            <div className="story__content__container">
              <p>
                Swachh Parivesh Foundation is a registered trust established in
                2018 for the welfare of the community. The trust is a young
                organization run by enthusiastic persons who have come together
                for a common goal. They are from all field of life and some of
                them are volunteering for the love of the hills. The involvement
                implemented by the Foundation range from grass root level
                projects to national-level programs. The trust works towards
                empowering lives and serving to the needs of all sectors of the
                society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mv__container">
        <div className="mv__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Mission & Vision</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="mv__main__container cent row">
          <div className="mv__item cent__col">
            <h2 className="mv__item__header">Our Mission</h2>
            <p>
              Our mission is to provide comprehensive education and support for
              underprivileged children/women, promote environmental
              conservation, enhance community health and livelihoods, and
              preserve national heritage, art, and culture through diverse
              initiatives and programs.
            </p>
          </div>
          <div className="mv__item cent__col">
            <h2 className="mv__item__header">Our Vision</h2>
            <p>
              Trust works towards the empowerment of the community, health,
              sanitation, environment, education, and sustainable livelihood to
              enhance the quality of life of individuals residing in our
              country.
            </p>
          </div>
        </div>
      </div>
      {/* Founder */}
      <div className="founder__container">
        <div className="founder__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Founders</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="founder__main__container cent">
          <div className="founder__items row">
            <div className="founder__card__container">
              <Founder
                name={founder.name}
                image={founder.img}
                desc={founder.desc}
                about={founder.about}
              />
            </div>
            <div className="founder__card__container">
              <Founder
                name={secretary.name}
                image={secretary.img}
                desc={secretary.desc}
                about={secretary.about}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="focused__container">
        <div className="focused__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Focus</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="focused__card__container row">
          {FocusedData.map((item, index) => {
            return (
              <FocusedCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
      {/* The Objective */}
      <div className="objective__container">
        <div className="objective__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Objectives</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="objective__main__container cent">
          <div className="objective__content">
            <p>
              The objectives of the trust are focused on various aspects of
              education, vocational training, and environmental conservation. It
              aims to establish and maintain centers for technical, formal, and
              non-formal education, as well as provide vocational training
              opportunities, especially for women and those in need.
              Additionally, the trust is dedicated to promoting cottage
              industries, Khadi, Gaushala, and traditional handicrafts. Its
              primary focus lies in conserving ecology, wildlife, and natural
              resources, while also raising awareness about sanitation and
              providing health and medical relief where necessary. Moreover, the
              trust engages in publishing educational materials for income
              generation and managing higher and professional education
              institutes. Finally, it's committed to safeguarding national
              heritage, art, and culture, operating solely for public and
              charitable purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="index__gallery__container">
        <div className="index__main__gallery__container">
          <div className="gallery__main__header row">
            <div className="border__right"></div>
            <div className="border__center">
              <p>Gallery</p>
            </div>
            <div className="border__left"></div>
          </div>
          <div className="index__gallery__card__container row">
            <img className="index__gallery__img" src={Empowerment} alt="" />
            <img className="index__gallery__img" src={Health} alt="" />
            <img className="index__gallery__img" src={Slum} alt="" />
            <img className="index__gallery__img" src={Awareness} alt="" />
            <img className="index__gallery__img" src={Relief} alt="" />
            <img className="index__gallery__img" src={Plantation} alt="" />
          </div>
          <div className="view__more__container cent">
            <Link to="/gallery" onClick={windowTop}>
              <button className="view__more__btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
