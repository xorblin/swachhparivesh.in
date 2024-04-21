import "./styles/Whatsapp.css";
import { Link } from "react-router-dom";
import WhatsApp from "../assets/whatsapp.svg";
export default function Whatsapp() {
  return (
    <Link to="https://tinyurl.com/3hyncykb">
      <img className="whatsapp" src={WhatsApp} alt="whatsapp" />
    </Link>
  );
}
