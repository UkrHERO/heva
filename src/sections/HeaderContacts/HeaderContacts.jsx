import Container from "../../components/Container/Container";
import withLocalization from "../../components/hocLang/withLocalization";

import { ReactComponent as Facebook } from "../../images/facebook2.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Mail } from "../../images/mail.svg";

import "./HeaderContacts.css";

function HeaderContacts({ localization }) {
  const { currentLocale, locales, changeLocale } = localization;

  return (
    <div className="header_box">
      <Container>
        <div className="header_box">
          <div className="header_wrap">
            <div className="header_contacts">
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
            <div className="header_social">
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
              {/* <a className="header_face" href="https://www.facebook.com/">
                <Facebook className="social" />
              </a>
              <a className="header_face" href="https://www.facebook.com/">
                <Instagram className="social" />
              </a> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default withLocalization(HeaderContacts);
