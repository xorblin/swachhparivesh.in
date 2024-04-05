import { Link } from "react-router-dom";
import "./styles/footer.css";
import NGOLogo from "../assets/NGO_Logo.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="lower">
        <div className="lower-under">
          <div className="pic">
            <Link to="/">
              <img src={NGOLogo} alt="Swachh Parivesh Foundation" />
              <p>Swachh Parivesh Foundation</p>
            </Link>
          </div>
          <hr></hr>
          <div className="useful">
            <h5>Useful Links</h5>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/">Our Goal</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Media</Link>
              </li>
            </ul>
          </div>
          <hr></hr>
          <div className="useful">
            <h5>Connect to Us</h5>
            <div className="pics">
              <Link to="https://www.instagram.com/swachhpfoundation?igsh=MWNuODkwMmtuOGd2dg==">
                <i class="fa-brands fa-square-instagram"></i>
              </Link>
              <Link to="https://www.facebook.com/DharampurVidhansabhaz?mibextid=ZbWKwL">
                <i class="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i class="fa-brands fa-x-twitter"></i>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div className="branch">
            <h5>Address</h5>
            <p>
              C-Block , Lane- 4-H, Saraswati Vihar, Ajabpur Khurd, Dehradun,
              Uttarakhand, India- 248121
            </p>
            <h5>Contact Us</h5>
            <p>
              +91 9639002477 <br /> +91 9760090334
            </p>
          </div>
        </div>
        <div className="last">
          <p>
            &#169; 2024 All Right Reserved By Swachh Parivesh Foundation &
            Developed By{" "}
            <a
              href="http://xorblin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xorblin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
