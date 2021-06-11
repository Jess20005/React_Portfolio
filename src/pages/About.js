import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div class="auto">
      <Hero backgroundImage="https://img.freepik.com/free-vector/programming-code-coding-hacker-background-programming-code-icon-made-with-binary-code_127544-815.jpg?size=626&ext=jpg">
        <h1>Jessica Gibbs</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row size="auto">
          <Col size="auto">
            <h1>Welcome to my page!!</h1>
          </Col>
        </Row>
        <Row size="auto">
          <Col size="auto">
            <p>
              I appreciate you stopping by for a visit. My name is Jessica Gibbs
              and I currently work for a non-profit agency where are focus is
              early literacy for children ages birth to 5. I have amazing
              coworkers and I enjoy serving the community. This new journey I
              have begun with attending this bootcamp has definitely been an eye
              opener in a very small amount of time. I hope to attain knowledge
              here to further my career in helping the community by learning how
              to build and maintain websites and databases that can help in
              collecting and sorting data of families in the most needed areas.
              I also have some personal endeavors I would like to pursue and
              with the foundational tools I am learning in this class it should
              be attainable. This is definitely a learning curve but I can only
              take it one day at a time and continue to put my best effort
              forward.
            </p>
          </Col>
          <Col size="auto">
            <img src="/Me.jpg" width="300" height="300" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
