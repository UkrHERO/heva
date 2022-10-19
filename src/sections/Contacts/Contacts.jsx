import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import withLocalization from "../../components/hocLang/withLocalization";

import Container from "../../components/Container/Container";
import { ReactComponent as Phone } from "../../images/phone.svg";
import { ReactComponent as Mail } from "../../images/mail.svg";
import { ReactComponent as Telegram } from "../../images/social/telegram.svg";
import { ReactComponent as Viber } from "../../images/social/viber.svg";
import { ReactComponent as Whatsapp } from "../../images/social/whatsapp.svg";
import products from "../../images/products.png";

import "./Contacts.css";

function Contacts({ localization }) {
  const { contacts, contact_form, nameL, phone_email, messageL, send } =
    localization.localizedContent;

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [massege, setMassege] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_15d2gt4",
        "template_10nz3l3",
        {
          from_name: name,
          to_name: tel,
          message: massege,
        },
        "63VrFfhUKEko2T_jp"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setTel("");
    setMassege("");
  };
  return (
    <section id="contacts" className="services_sec">
      <Container>
        <h2 className="service_title">{contacts}</h2>
        <div className="line"></div>
        <div className="service_box">
          <div className="contact_box">
            <div className="cont_ph_box">
              <a className="phone phone_footer" href="tel:+17869617330">
                <Phone className="phone_icon" />
                +1 (786) 961 7330
              </a>
            </div>
            <div>
              <a
                className="phone phone_footer"
                href="mailto:mobiheva@gmail.com"
              >
                <Mail className="phone_icon" />
                mobiheva@gmail.com
              </a>
            </div>
            {/* <div className="contact_socials">
              <a href="https://t.me/miamicarrent">
                <Telegram className="social_item" />
              </a>
              <a href="https://wa.me/19145223334">
                <Whatsapp className="social_item" />
              </a>
              <a href="viber://add?number=19145223334">
                <Viber className="social_item" />
              </a>
            </div> */}
            <img className="keys_img" src={products} alt="keys" />
          </div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="contact_form">{contact_form}</p>
            {/* <label className="form_label">Name</label> */}
            <input
              className="form_input"
              placeholder={nameL}
              type="text"
              name="from_name"
              value={name}
              onChange={(text) => setName(text.target.value)}
            />
            {/* <label className="form_label">Email</label> */}
            <input
              onChange={(text) => setTel(text.target.value)}
              className="form_input"
              placeholder={phone_email}
              type="tel"
              name="email"
              value={tel}
            />
            {/* <label className="form_label">Message</label> */}
            {/* <input
              className="form_input"
              placeholder="Повідомлення"
              type="email"
              name="message"
            /> */}
            <textarea
              className="form_input form_mass"
              placeholder={messageL}
              name="message"
              value={massege}
              onChange={(text) => setMassege(text.target.value)}
            />
            <input className="form_btn" type="submit" value={send} />
          </form>
        </div>
      </Container>
    </section>
  );
}
export default withLocalization(Contacts);
