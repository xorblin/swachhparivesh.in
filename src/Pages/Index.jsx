import "./styles/index.css";
import "./styles/splide.css";
import { useEffect } from "react";
import "@splidejs/react-splide/css";
import Arrow__Next from "../assets/arrow-next.svg";
import Arrow__Prev from "../assets/arrow-prev.svg";
import { Img1, Img2, Img3, Img4 } from "../import/Splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
const Home = () => {
  let splideOption = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    rewind: true,
    pauseOnHover: false,
    pagination: false,
  };
  useEffect(() => {
    let arrowPrev = document.querySelector(".splide__arrow--prev");
    let arrowNext = document.querySelector(".splide__arrow--next");
    arrowPrev.innerHTML = `<img src="${Arrow__Prev}" class="splide__arrows__svg" />`;
    arrowNext.innerHTML = `<img src="${Arrow__Next}" class="splide__arrows__svg" />`;
  });

  return (
    <>
      <Splide hasTrack={false} aria-label="" options={splideOption}>
        <SplideTrack>
          <SplideSlide>
            <div className="splide_carousel__container">
              <img src={Img1} className="splide_carousel__img" alt="slide1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="splide_carousel__container">
              <img src={Img2} className="splide_carousel__img" alt="slide1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="splide_carousel__container">
              <img src={Img3} className="splide_carousel__img" alt="slide1" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="splide_carousel__container">
              <img src={Img4} className="splide_carousel__img" alt="slide1" />
            </div>
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>

      {/* About NGO */}
      <div className="about-ngo">
        <div className="about-ngo-box">
          <div className="about-ngo-design">
            <img src="./assets/images/about-ngo-1.png" alt="design1" />
          </div>
          <div className="about-ngo-content">
            <h1>About Swachh Parivesh Foundation...</h1>

            <p>
              Swachh Parivesh Foundation is a registered trust established in
              2018 for the welfare of the community. The trust is a young
              organization run by enthusiastic persons who have come together
              for a common goal. They are from all field of life and some of
              them are volunteering for the love of the hills. The involvement
              implemented by the Foundation range from grass root level projects
              to national-level programs. The trust works towards empowering
              lives and serving to the needs of all sectors of the society.
              <ul>
                <li>SWACHH PARIVESH (स्वच्छ परिवेश)</li>
                <li>SWASTH PARIVESH (स्वस्थ परिवेश)</li>
                <li>SIKSHIT PARIVESH (शिक्षित परिवेश)</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {/* About NGO */}

      {/* Founder */}
      <div className="slides">
        <Splide aria-label="My Favorite Images" className="slider">
          <SplideSlide>
            <div className="founder">
              <div className="founder-box">
                <div className="founder-img">
                  <img src="./assets/images/founder.png" alt="founder" />
                </div>

                <div className="founder-details">
                  <h2>Our Founder</h2>
                  <p>
                    <b>Mrs. Urmila Padiyar</b>
                    <br /> -M.Sc.(Chemistry), B.Ed., MSW
                  </p>

                  <p>
                    Trust work towards the empowerment of the community ,health,
                    sanitation ,environment, education and sustainable library
                    who to enhance the quality of life of individual residing in
                    our country
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="founder">
              <div className="founder-box">
                <div className="founder-img">
                  <img src="./assets/images/secretary.png" alt="secretary" />
                </div>

                <div className="founder-details">
                  <h2>Our Secretary</h2>
                  <p>
                    <b>Mr. Ravindra Singh Padiyar</b>
                    <br /> -M.A, M.B.A
                  </p>

                  <p>
                    To make people self- sustainable for the betterment of their
                    life and community, also to contribute towards greener and
                    more peaceful environment.
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* Founder */}

      {/* Major Activities */}
      <div className="activity-div">
        <div className="activities">
          <h2>
            Our <br />
            Major <br /> Activities
          </h2>
          <div className="activity-box">
            <div className="activity-l">
              <ul>
                <li>Plantation</li>
                <li>Yoga</li>
                <li>Health Camps</li>
                <li>Blood Donation Camps</li>
                <li>Awareness</li>
                <li>Empowerment</li>
              </ul>
            </div>

            <div className="activity-r">
              <ul>
                <li>Education</li>
                <li>Wildlife Welfare</li>
                <li>Gau Seva</li>
                <li>Cultural Activities</li>
                <li>Sanitation</li>
                <li>Art and Craft</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
