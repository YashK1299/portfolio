import "../styles/gigs.scss";
import { gigs } from "../constants.js";

const Projects = () => {

  return (
      <div id="projects" class="container-fluid">
        <div id="done">
          <p class="peach">My Projects </p>
        </div>
        <div class="row">
          {
            gigs.map((card) => (
              <div class="col-12 col-md-6 col-lg-4 mb-5"  key={card.name}>
                <div class="card h-100">
                  <img src={card.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h3 class="card-title">{card.name}</h3><br/>
                    <p class="card-text">{card.desc}</p>
                    <a href={card.link} class="btn">View Project</a>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;
