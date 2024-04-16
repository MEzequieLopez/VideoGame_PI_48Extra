import "./landing.style.css";

import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing-content">
      <div className="landing">
        <div className="content-image">
          <div className="content">
            <h1>Bienvenido a nuestro proyecto</h1>
            <div className="button"></div>
            <Link to="/home">
              <button>HOME</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
