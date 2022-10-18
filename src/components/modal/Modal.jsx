import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import withLocalization from "../hocLang/withLocalization";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function ModalBox(props) {
  const { book_now, nameL, phone_email, messageL, send } =
    props.localization.localizedContent;
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [massege, setMassege] = useState("");
  const [dataFrom, setDataFrom] = useState("");
  const [dataTo, setDataTo] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xz2ia0h",
        "template_6bw51po",
        {
          from_name: name,
          email: tel,
          date_from: dataFrom,
          date_to: dataTo,
          message: massege,
        },
        "qIZ1BmBa6hqijvbKN"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setName("");
    setTel("");
    setMassege("");
    setDataFrom("");
    setDataTo("");
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form2" ref={form} onSubmit={sendEmail}>
          {/* <p className="contact_form">Форма зворотного зв'язку</p> */}
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
            type="text"
            name="email"
            value={tel}
          />

          <textarea
            className="form_input form_mass"
            placeholder={messageL}
            name="message"
            value={massege}
            onChange={(text) => setMassege(text.target.value)}
          />
          <input className="form_btn" type="submit" value={send} />
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default withLocalization(ModalBox);
