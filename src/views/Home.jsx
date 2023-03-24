import Typical from "react-typical";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Hi, I'm <span className="name">Yash</span>
          </h1>
          <h2>
            I'm a{" "}
            <Typical
              steps={[
                "Full Stack Developer",
                2000,
                "Web Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </h2>
          <p>
            I am a full stack developer with a passion for learning new
            technologies and building applications. I have a background in
            business and entrepreneurship, which has helped me to develop a
            strong work ethic and a desire to always be improving. I am currently
            working on a few personal projects and am looking for a full time
            position as a developer.
          </p>
          <div className="home-btns">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="contact-btn">Contact Me</button>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="projects-btn">My Projects</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
