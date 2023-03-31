import "../styles/launch.css";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { contactLinks } from "../constants";

const Projects = ({ onClose, onOpen, setValue, dialog }) => {

  return (
      <div id="launch">
        <div className="menu">
          <div style={{display: "flex", justifyContent:"center", alignContent: "center"}}>
            <p className="title">Quick Launch</p>
          </div>
          <div className="menu-items">
            <div className="textbox">
              <p className="text">Actions</p>
            </div>
            <div className="buttonbox" onClick={ () => { 
              navigator.clipboard.writeText('https://yash-kothari.netlify.app/');
              onClose();
            }}>
              <button className="button">Copy URL</button>
            </div>
            <div className="buttonbox">
              <a href="mailto:kothariy09@gmail.com">
                <button className="button">Shoot me an email</button>
              </a>
            </div>
            {/* <div className="textbox">
              <p className="text">Navigate</p>
            </div>
            <div className="buttonbox" onClick={ () => { 
              onOpen();
              dialog();
              onClose();
            }}>
              <a href="https://github.com">
                <button className="button">Home</button>
              </a>
            </div>
            <div className="buttonbox" onclick="window.open('https://www.w3docs.com','mywindow')">
              <a href="https://github.com">
                <button className="button">About</button>
              </a>
            </div>
            <div className="buttonbox" onclick="window.open('https://www.w3docs.com','mywindow')">
              <a href="https://github.com">
                <button className="button">Experience</button>
              </a>
            </div>
            <div className="buttonbox" onclick="window.open('https://www.w3docs.com','mywindow')">
              <a href="https://github.com">
                <button className="button">Projects</button>
              </a>
            </div> */}
            <div className="textbox">
              <p className="text">Reach Me</p>
            </div>
            <div className="buttonbox">
              <a href={contactLinks[0].link} rel="noreferrer" target="_blank">
                <button className="button">
                  <img alt="" src={github} style={{ filter: "brightness(0) invert(1)", height: "1.4rem", marginRight: "0.5rem" }} />
                  Github
                </button>
              </a>
            </div>
            <div className="buttonbox">
              <a href={contactLinks[1].link} rel="noreferrer" target="_blank">
                <button className="button">
                  <img alt="" src={linkedin} style={{ filter: "brightness(0) invert(1)", height: "1.4rem", marginRight: "0.5rem" }} />
                  LinkedIn
                </button>
              </a>
            </div>
            <div className="buttonbox">
              <a href={contactLinks[3].link} rel="noreferrer" target="_blank">
                <button className="button">
                  <img alt="" src={instagram} style={{ filter: "brightness(0) invert(1)", height: "1.4rem", marginRight: "0.5rem" }} />
                  Instagram
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
