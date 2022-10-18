import { useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";
import ModalBox from "../../components/modal/Modal";
import ModalBoxImage from "../../components/modalImage/Modal";
import logo from "../../images/banner.jpg";
import lap from "../../images/lap.png";
import tel from "../../images/tel.png";
import watch from "../../images/watch.png";

import "./Price.css";

function Price({ localization }) {
  const {
    cars,
    review,
    classL,
    color,
    white,
    grey,
    silver,
    capacity,
    seats,
    interior,
    leather,
    from,
    book_now,
    sedan,
    cabriolet,
    blue,
    black,
  } = localization.localizedContent;

  const [modalShow, setModalShow] = useState(false);
  const [images, setImages] = useState([]);
  const [modalShowImg, setModalShowImg] = useState(false);
  return (
    <section id="products" className="services_sec">
      <Container>
        <h2 className="service_title">PRODUCTS</h2>
        <div className="line"></div>

        <div className="cars_box">
          <div className="product_box">
            <img className="product_img" src={tel} alt="logo" />
            <p className="product_title">Cell Phones</p>
          </div>
          <div className="product_box">
            <img className="product_img" src={lap} alt="logo" />
            <p className="product_title">Laptops</p>
          </div>
          <div className="product_box">
            <img className="product_img" src={watch} alt="logo" />
            <p className="product_title">Watches</p>
          </div>
        </div>

        <ModalBoxImage
          images={images}
          show={modalShowImg}
          onHide={() => setModalShowImg(false)}
        />
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </section>
  );
}
export default withLocalization(Price);
