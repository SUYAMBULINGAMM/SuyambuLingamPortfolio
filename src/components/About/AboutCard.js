import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhartha Bhattacharjee </span>
            from <span className="purple"> Assam, India. </span> currently based in <span className="purple"> Bangalore, India </span>.
              <br />
            <br /> 
              I’m a final-year B.Tech Computer Science Engineering student at SRM University, Chennai, with a CGPA of 9.89. I’ve gained hands-on experience through internships at <span className="purple">Broadridge</span> and <span className="purple">Siemens</span>, working on cutting-edge technologies like Blockchain, Hyperledger Fabric, Solidity, and Full-Stack Development.
            <br />
              <br />
              As a passionate technologist, I’ve built impactful projects like <span className="purple">ResqAI</span> (a GenAI-powered emergency call management system) and <span className="purple">Lifafa</span> (a blockchain-based gifting platform), and I’ve <span className="purple">won 3 national-level hackathons</span> including the WarpSpeed GenAI Hackathon and Unfold 2023.
            <br />
            <br />
            In addition to development, I’ve <span className="purple">conducted tech workshops in 9 colleges</span> and organized events through my work with <span className="purple">Shardeum</span>, <span className="purple">Fire-Chain</span>, and college communities like <span className="purple">CodeChef SRM RMP</span> and <span className="purple">GDSC</span>. I’m always eager to learn, build, and help others grow along the way.
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
          <footer className="blockquote-footer">Kelly Slater</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
