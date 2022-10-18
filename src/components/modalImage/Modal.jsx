import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function ModalBoxImage(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">Project 1</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Carousel fade>
          {props.images.map((i) => (
            <Carousel.Item>
              <img className="d-block w-100" src={i} alt="Phone" />
              <Carousel.Caption className="carousel_box"></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalBoxImage;
