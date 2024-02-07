import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kasun Mahendra </span>
            from <span className="purple"> Bibile,Sri Lanka</span>
            <br />I am a junior pursuing Bsc in Computer Science and Chemistry in Eastern University Of Sri Lanka.
              As well as currently working for the Commercial Bank's Production Issues Responding Team for the Software 
              Development Related issues and been Providing Immediate Actions to Mitigate the Production Software Issues
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying And Solving Complex Mathematical Theories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Like to Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kasun Mahendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
