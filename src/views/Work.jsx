import "../styles/work.scss";
import { work } from "../constants.js";

const Work = () => {
  return (<section>
    <div class="container py-5" style={{marginLeft:"30px", marginRight:"30px"}}>
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline">
                    {work.map((card) => (
                        <div class="timeline">
                            <div class="timeline-content">
                                <div class="circle"><span class="homebox"><img src={card.img} class="img" alt="..."/></span></div>
                                <div class="content">
                                    <span class="year">{card.time}</span>
                                    <h3 class="title h3">{card.name}</h3>
                                    <p class="description">{card.desc}</p>
                                    <div class="icon"><span></span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Work;
