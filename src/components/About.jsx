import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import stu from "../assets/stu.jpg";
import CountUp from "react-countup";
import "./about.css";

const About = () => {
  return (
    <section className="mt-10">
      <Container>
        <Row>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              The development of character is a responsibility that rests with every member of the community. In classrooms, on playing fields, in residential houses, students grow in confidence and self-esteem, and are instilled with such fundamental values as honesty, integrity, teamwork, generosity, and compassion toward others. Choate Rosemary Hall also fosters community involvement and service as it prepares students to assume leadership roles in an ever-changing world. As part of its commitment to character formation, the school offers regular community-wide reflections on moral and spiritual issues, as well as exposure to various religious traditions.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={stu} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About