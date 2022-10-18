import Container from "../../components/Container/Container";
import withLocalization from "../../components/hocLang/withLocalization";

import { ReactComponent as Telegram } from "../../images/social/telegram.svg";
import { ReactComponent as Viber } from "../../images/social/viber.svg";
import { ReactComponent as Whatsapp } from "../../images/social/whatsapp.svg";

import "./Footer.css";

function Footer({ localization }) {
  const {
    advantages,
    about_us,
    about_text,
    messengers,
    great_range,
    perf_cond,
    ind_approach,
    reas_prisec,
  } = localization.localizedContent;

  return (
    <section className="service_sec">
      <Container>
        <div className="footer_box">
          <div className="footer_item">
            <p className="footer_title">{about_us}</p>
            <div className="footer_line"></div>
            <p className="footer_text">{about_text}</p>
          </div>
          <div className="footer_item">
            <p className="footer_title">{advantages}</p>
            <div className="footer_line"></div>
            <ul className="footer_ul">
              <li className="footer_li">
                <p className="footer_text">{great_range}</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">{perf_cond}</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">{ind_approach}</p>
              </li>
              <li className="footer_li">
                <p className="footer_text">{reas_prisec}</p>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <p className="footer_title">{messengers}</p>
            <div className="footer_line"></div>
            <div className="footer_mes">
              <a href="https://t.me/miamicarrent">
                <Telegram className="social_item" />
              </a>
              <a href="https://wa.me/19145223334">
                <Whatsapp className="social_item" />
              </a>
              <a href="viber://add?number=19145223334">
                <Viber className="social_item" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default withLocalization(Footer);
