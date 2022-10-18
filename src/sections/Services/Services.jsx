import { useState } from "react";
import Container from "../../components/Container/Container";
import { ReactComponent as Notebook } from "../../images/notebook.svg";
import { ReactComponent as Contract } from "../../images/contract.svg";
import { ReactComponent as Bank } from "../../images/bank.svg";
import { ReactComponent as FileLook } from "../../images/fileLook.svg";

import "./Services.css";

function Services() {
  const [activeItem, setActiveItem] = useState();
  return (
    <section id="services" className="service_sec">
      <Container>
        <h2 className="service_title">ADVANTAGES</h2>
        <div className="line"></div>
        <div className="serv_box">
          <div
            className={
              activeItem === 1 ? "service_item_active" : "service_item"
            }
            onClick={() => setActiveItem(1)}
          >
            <Notebook className="service_icon" />
            <div className="line2"></div>
            <p className="service_text">Митно-брокерські послуги</p>
          </div>
          <div
            className={
              activeItem === 2 ? "service_item_active" : "service_item"
            }
            onClick={() => setActiveItem(2)}
          >
            <Contract className="service_icon" />
            <div className="line2"></div>
            <p className="service_text">Підготовка дозвільних документів ЗЕД</p>
          </div>
          <div
            className={
              activeItem === 3 ? "service_item_active" : "service_item"
            }
            onClick={() => setActiveItem(3)}
          >
            <Bank className="service_icon" />
            <div className="line2"></div>
            <p className="service_text">Юридичне супроводження</p>
          </div>
          <div
            className={
              activeItem === 4 ? "service_item_active" : "service_item"
            }
            onClick={() => setActiveItem(4)}
          >
            <FileLook className="service_icon" />
            <div className="line2"></div>
            <p className="service_text">Митний консалтинг</p>
          </div>
        </div>
        {activeItem === 1 && (
          <div className="service_content">
            <p className="service_content_text">
              1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
        {activeItem === 2 && (
          <div className="service_content">
            <p className="service_content_text">
              2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
        {activeItem === 3 && (
          <div className="service_content">
            <p className="service_content_text">
              3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
        {activeItem === 4 && (
          <div className="service_content">
            <p className="service_content_text">
              4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Services;
