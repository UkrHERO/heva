import Accordion from "react-bootstrap/Accordion";
import withLocalization from "../hocLang/withLocalization";

import { ReactComponent as Facebook } from "../../images/facebook2.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Mail } from "../../images/mail.svg";

import "./HeaderAccord.css";

function HeaderAccord({ localization }) {
  const { currentLocale, locales, changeLocale } = localization;

  return (
    <div className="header_mob">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header></Accordion.Header>
          <Accordion.Body>
            <div className="header_box_mob">
              <div className="header_wrap_mob">
                <div className="header_contacts_mob">
                  <div className="header_phone">
                    <a className="phone" href="tel:+19145223334">
                      <Phone className="phone_icon" />
                      +1 (914) 522 3334
                    </a>
                  </div>
                  <div className="header_email">
                    <a className="phone" href="mailto:vavocarsmiami@gmail.com">
                      <Mail className="phone_icon" />
                      vavocarsmiami@gmail.com
                    </a>
                  </div>
                </div>
                <div className="header_social_mob">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => changeLocale(locale)}
                      className={
                        locale === currentLocale
                          ? "header_face_active"
                          : "header_face"
                      }
                    >
                      {locale}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default withLocalization(HeaderAccord);
