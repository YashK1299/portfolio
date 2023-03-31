import "../styles/gigs.scss";
import { gigs } from "../constants.js";

const Projects = () => {


  return (
      <div id="projects">
        <div id="done">
          <p class="peach">My Projects and Blogs</p>
        </div>
        <div class="row">
          {
            gigs.map((card) => (
              <div class="card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={card.img} class="card-img-top" alt="..." /><br/>
                    <div class="card-body">
                      <h3 class="card-title">{card.name}</h3>
                    </div>
                </div>
                <div class="flip-card-back" onClick={() => window.open(card.link, 'mywindow')}>
                  <div class="card-body">
                    <h3 class="card-title">{card.name}</h3>
                    <p class="card-text">{card.desc}</p>
                    <p class="credits">Click tile to view project</p>
                  </div>
                </div>
                </div>
              </div>
            ))}
        </div>
      </div>
  );
};

export default Projects;
