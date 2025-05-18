import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SUYAMBULINGAM M </span>
            from <span className="purple"> TamilNadu, India</span>. 
              <br />
            <br /> 
              I’m a Third-year B.E Computer Science Engineering student at R M K COLLEGE OF ENGINEERING AND TECHNOLOGY, Chennai, with a CGPA of 8.22.
            <br />
              <br />
              My academic journey is marked by a deep interest in <span className="purple">Software Development</span> and <span className="purple">Web Technologies</span>.
              <br />
              <br />
              Passionate about leveraging my technical skills to solve <span className="purple">real-world problems</span>, I am keen on exploring opportunities that allow me to apply my knowledge in practical settings, particularly in <span className="purple">Software Development</span> and <span className="purple">Web Technologies</span>. I’ve built impactful projects like <span className="purple">PERSONALIZATION AI-CHATBOT</span> (Developed a dynamic AI chatbot web application called CAREBOT), and I’ve <span className="purple">Participated in 3 Hackathons</span>
            <br />
            <br />
            I am actively seeking <span className="purple">internships</span> and <span className="purple">collaborative projects</span> that challenge me to grow further while contributing to my professional journey in the field of <span className="purple">Computer Science</span>. I’m always eager to learn, build, and help others grow along the way.
              <br />
              <br />
              Beyond Coding, I Enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Attending tech conferences, seminars, and hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching and mentoring through workshops and events
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new ideas & cultures
            </li>
          </ul>

          <p style={{ color: "#628c88d5" }}>
            "Motivation is temporary, consistency is permanent!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;