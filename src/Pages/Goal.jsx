import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/goal.css";

const Goal = () => {
  return (
    <div className="goal">
      <div className="vision">
        <div className="vision-content">
          <h1>Our Vision</h1>
          <p>
            Trust works towards the empowerment of the community, health,
            sanitation, environment, education, and sustainable livelihood to
            enhance the quality of life of individuals residing in our country.
          </p>
        </div>
      </div>
      <div className="mission">
        <h2>Our Mission</h2>
        <ul>
          <li>
            To run and operate different types of education programs/schools
            like formal, non-formal, pre-school for the education development of
            underprivileged children/women of the community/trust.
          </li>
          <li>
            To run and open schools for the welfare and uplift of needy
            children/women and also run adult education programs.
          </li>
          <li>
            The trust aims to conserve ecology and environment, wildlife,
            natural resources, and sustainable livelihoods for an improved
            environment.
          </li>
          <li>Work among society for the awareness of sanitation.</li>
          <li>
            The trust works for health &amp; medical relief, to promote cottage
            industries, Khadi, Gaushala industries, dairy products industries,
            and traditional handicraft.
          </li>
          <li>Protection of national Heritage, Art, and Culture.</li>
        </ul>
      </div>
      <div className="objectives">
        <h2>Objectives Of The Trust</h2>
        <ul>
          <li>
            To arrange/establish and maintain centers of technical training,
            low-cost education, formal &amp; non-formal education, adult
            education &amp; vocational education.
          </li>
          <li>To organize vocational training for women and needy people.</li>
          <li>
            To promote cottage industries, Khadi, Gaushala Industries, dairy
            products industries, and traditional handicraft.
          </li>
          <li>
            The primary focus will be to conserve Ecology and Environment, Wild
            Life, natural resources, and sustainable livelihoods for the
            improvement of the environment.
          </li>
          <li>Will work among society for the awareness of sanitation.</li>
          <li>Will work for Health &amp; Medical Relief.</li>
          <li>
            To publish books, magazines, charts, issue related IEC (Information,
            Education, and Communication) materials, and other periodical
            illustration for generating income for the trust for the benefit of
            its aims.
          </li>
          <li>
            To open/run/manage institute/college of
            higher/professional/vocational education in any part of the country
            for providing quality education and training to youth and children.
          </li>
          <li>Protection of national Heritage, Art, and Culture.</li>
        </ul>
        <div className="trust">
          <p>
            "The Trust shall be wholly for public and charitable purposes, and
            incomes shall be applied for the same and accumulated in India."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goal;
