import "./styles/error.css";
import ErrorFramer from "../assets/error.png";
export default function ErrorPage() {
  return (
    <div className="error__container nav__margin cent">
      <div className="error__item col">
        <img src={ErrorFramer} alt="Error" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
