import "../styles/about.css";
import aboutme from "../assets/aboutme.png";
import { techStack } from "../constants";

const About = () => {
  return (
    <div id="about" class="screen-body">
      <div class="screen-body-item">
        <div>
          <div class="avatar-flip">
            <img src={aboutme} height="150" width="150" alt="..."/>
          </div>
          <div>
            <div class="app-contact">Yash Kothari</div>
            <div class="app-title">Software Engineer</div>
            <div class="app-contact">
              <p>
                I'm a self-taught web developer and Mobile App Developer with
                experience in designing new features from ideation to production,
                implementation of wireframes and design flows into high
                performance software applications. I take into consideration the
                user experience while writing reusable and efficient code. I
                passionately combine good design, technology, and innovation in
                all my projects, which I like to accompany from the first idea to
                release.Currently, I'm focused on the backend development.
              </p>
            </div>
            <div class="app-title">
                  <span>Skills Unlocked:</span>
            </div>
            <div class="wrapper">
            {techStack.map((el) => (
              <div className={`badge ${el.color}`}>
                <div className="rounded" title={el.name}>
                  <img className="badge-img" alt="" src={el.icon}/>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
