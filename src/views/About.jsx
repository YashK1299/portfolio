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
              I grew up in Mumbai, India, and now find myself 'across the pond' as a graduate 
              student at Northeastern University, Boston, where I soak in nature, history, and 
              people while pursuing my degree in Computer Science. I am passionate about 
              Software Development and have a decent knowledge of programming languages such as 
              Python, Java, C, SQL, Javascript. I exhibit an entrepreneurial mentality and am 
              eager to learn and adapt to different environments. I am seeking creative and 
              challenging full-time opportunities and I am ready to join as soon as possible, 
              and would love to connect with you!
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
