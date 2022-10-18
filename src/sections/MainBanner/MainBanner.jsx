import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";
import logo from "../../images/banner.jpg";

import Container from "../../components/Container/Container";
import ModalBox from "../../components/modal/Modal";

import "./MainBanner.css";

function MainBanner({ localization }) {
  const { car_rental, banner_desc, contact_us, contacts } =
    localization.localizedContent;

  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="mainbanner_sec">
      <div>
        <Container>
          {/* <div className="banner_content">
            <h1 className="main_title">{car_rental}</h1>
            <h2 className="main_desc">{banner_desc}</h2>
            <button
              type="button"
              className="main_button"
              onClick={() => setModalShow(true)}
            >
              {contact_us}
            </button>
          </div> */}
          <div className="banner_cont">
            <div className="banner_text">
              <h1>HEVA MOBILE - Wholesale Electronics</h1>

              <p>Sell/buy phones, laptops, tablets, accessories, and more.</p>
              <button
                onClick={() => setModalShow(true)}
                className="shop_btn"
                type="button"
              >
                Shop now
              </button>
            </div>
            <div className="banner_box">
              <img className="banner_img" src={logo} alt="logo"></img>
              <div className="banner_back"> </div>
            </div>
          </div>
          <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </div>
    </section>
  );
}
export default withLocalization(MainBanner);
