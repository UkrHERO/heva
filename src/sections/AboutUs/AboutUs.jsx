import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";

import laptop from "../../images/laptops.jpg";

import "./AboutUs.css";

function AboutUs({ localization }) {
  const { about_us, about_text } = localization.localizedContent;
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="aboutus" className="service_sec">
      <Container>
        <h2 className="service_title">{about_us}</h2>
        <div className="line"></div>
        <div className="aboutus_box">
          <div className="aboutus_left">
            <p className="aboutus_title">HEVA MOBILE</p>
            <p className="aboutus_text">
              We are a wholesale distributor of cell phones, laptops, watches,
              accessories, and other electronics. You can order the electronics
              you are interested in from us. All cell phones are tested and
              graded by model, condition, color, and memory. Individual approach
              to the client, flexible prices for cell phones and other
              electronics.
            </p>
          </div>
          <div className="aboutus_right">
            <img className="aboutus_img" src={laptop} alt="About Us" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default withLocalization(AboutUs);
