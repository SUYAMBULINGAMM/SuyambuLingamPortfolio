import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
<<<<<<< HEAD
=======
import { TbTextSize } from "react-icons/tb";
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
<<<<<<< HEAD

=======
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made with ♥ by SUYAMBULINGAM M</h3>
        </Col>
<<<<<<< HEAD

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SUYAMBULINGAM M</h3>
        </Col>

=======
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SUYAMBULINGAM M</h3>
        </Col>
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SUYAMBULINGAMM"
                style={{ color: "white" }}
<<<<<<< HEAD
                target="_blank"
=======
                target="_blank" 
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
<<<<<<< HEAD

            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "white" }}
                target="_blank"
=======
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
<<<<<<< HEAD

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/"
                style={{ color: "white" }}
                target="_blank"
=======
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
<<<<<<< HEAD

            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank"
=======
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
>>>>>>> be84a1da39d85297eef1ca658ff862c5d7f121e4
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
