import "./styles/Whatsapp.css";
import { Link } from "react-router-dom";
import WhatsApp from "../assets/whatsapp.svg";
export default function Whatsapp() {
  return (
    <Link to="">
      <img className="whatsapp" src={WhatsApp} alt="whatsapp" />
    </Link>
  );
}
