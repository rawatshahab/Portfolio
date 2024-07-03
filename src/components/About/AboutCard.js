import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayank Rawat </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            <br />
            A Final year B.Tech student specializing in Computer Engineering with a focus on data science. Fluent in frontend web development, data structures & algorithms. Passionate about leveraging technology to solve real-world problems. Currently seeking opportunities to apply and enhance my skills in software engineering and data science. Let's connect and innovate together!
            <br />
            <br />
           </p>
          

         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
