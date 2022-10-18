import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";
import img1 from "../../images/ellipse2.png";
import Container from "../../components/Container/Container";
import { ReactComponent as Card } from "../../images/card.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Check2 } from "../../images/check2.svg";
import { ReactComponent as Phones } from "../../images/phones.svg";

import "./Benefits.css";

function Benefits({ localization }) {
  const { advantages, great_range, perf_cond, ind_approach, reas_prisec } =
    localization.localizedContent;
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="advantages" className="service_sec">
      <Container>
        <h2 className="service_title">{advantages}</h2>
        <div className="line"></div>
        <div className="serv_box">
          <div className="benefits_item">
            <p className="benefits_text benefits_title">Quality Grading</p>
            <Phones className="benefits_icon" />
            <p className="benefits_text">
              All devices are tested, graded and verified.
            </p>
          </div>
          <div className="benefits_item benefits_item2">
            <p className="benefits_text benefits_title">Fast Delivery</p>
            <Check2 className="benefits_icon" />
            <p className="benefits_text">
              Delivery in the shortest possible time around the world
            </p>
          </div>
          <div className="benefits_item benefits_item3">
            <p className="benefits_text benefits_title">Flexible prices</p>

            <User className="benefits_icon" />
            <p className="benefits_text">Individual approach to the client</p>
          </div>
          {/* <div className="benefits_item">
            <Card className="benefits_icon" />
            <p className="benefits_text">{reas_prisec}</p>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
export default withLocalization(Benefits);
