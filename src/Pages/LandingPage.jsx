import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className="mt-5 align-itmes-center justify-content-between w-100 ">
        <Col></Col>
        <Col lg={5}>
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={()=>navigateByUrl('/home')}  className="mt-5 btn btn-info">Get Started <i class="fa-solid fa-right-long fa-beat-fade"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img
            src="https://media.tenor.com/3_AoCT4PqOkAAAAi/musically-beats.gif"
            className="img-fluid"
            alt="Landing"
          />
        </Col>
      </Row>

      <div className="container mt-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Featuers</h3>

        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
          <Card className="p-3  " style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://media.tenor.com/Sj6cOh82m1cAAAAi/music.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://media.tenor.com/ykQ5HijpTrEAAAAi/headphones-music.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="p-3" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src="https://media.tenor.com/4jLi3pOFzWEAAAAi/btbam-betweentheburiedandme.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded border-secondary p-5 mt-5 d-flex align-items-center justify-content-between w-100 mb-5">
        <div className="content col-lg-5">
          <h3 className="mb-5  text-warning">Simple, Fast and Powerful</h3>
          <h6 className="mb-3 "><span className="fs-5 fw-bolder">Play Eveything</span> : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae magni nobis ad quo ut repudiandae dolor dolorum qui distinctio neque, quibusdam quasi et porro laborum ipsa. Sapiente itaque saepe placeat?</h6>
          <h6 className="mb-3"><span className="fs-5 fw-bolder">Play Eveything</span> : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae magni nobis ad quo ut repudiandae dolor dolorum qui distinctio neque, quibusdam quasi et porro laborum ipsa. Sapiente itaque saepe placeat?</h6>
          <h6 className="mb-3"><span className="fs-5 fw-bolder">Play Eveything</span> : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae magni nobis ad quo ut repudiandae dolor dolorum qui distinctio neque, quibusdam quasi et porro laborum ipsa. Sapiente itaque saepe placeat?</h6>
        </div>
        <div className="vedio col-lg-6">
          <iframe
            width="100%"
            height="387"
            src="https://www.youtube.com/embed/IqwIOlhfCak?si=SYMejuyfPoTs3SMW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
