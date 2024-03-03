import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anand Rajpal </span>
            from <span className="purple"> New Delhi, India.</span>
            <br /> a passionate product manager with 3 years of experience in product domain
             driven by a deep curiosity for innovation, problem-solving, and creating exceptional user experiences
            <br />
            I am currently employed as a Product Manager at
            Virohan a healthcare focused ed tech company.
            <br />
            <br />
            Apart from building digital products, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Financial markets
            </li>
            <li className="about-activity">
              <ImPointRight /> Geopolitics and Macro economic data
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create products that create an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Anand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
