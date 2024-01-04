import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-page">
        <a className="game-development-">
          <div className="game-development">Game Development</div>
        </a>
        <a className="computer-graphics-">
          <div className="game-development">Computer Graphics</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
