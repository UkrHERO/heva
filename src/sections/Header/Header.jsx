import MobileMenu from "../../components/MobileMunu/MobileMenu";
import Container from "../../components/Container/Container";
import logo from "../../images/logo2.png";
import withLocalization from "../../components/hocLang/withLocalization";

import "./Header.css";

function Header({ localization }) {
  const { advantages, cars, about_us, contacts } =
    localization.localizedContent;

  return (
    <div className="header_back">
      <Container>
        <div className="header_cont">
          <img className="logo" src={logo} alt="logo" />
          <MobileMenu />
          <ul className="menu">
            <li>
              <a className="menu_item" href="#advantages">
                {advantages}
              </a>
            </li>
            <li>
              <a className="menu_item" href="#products">
                PRODUCTS
              </a>
            </li>
            <li>
              <a className="menu_item" href="#aboutus">
                {about_us}
              </a>
            </li>
            <li>
              <a className="menu_item" href="#contacts">
                {contacts}
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
export default withLocalization(Header);
