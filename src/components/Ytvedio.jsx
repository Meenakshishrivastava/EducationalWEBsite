import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import img from "../assets/img.jpg";
import "./ytvedio.css";

import ReactPlayer from "react-player";

const Ytvedio = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="m-8">
      <Container>
        <Row>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=EMDMMzLh2Dk"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={img} alt="" className="w-100" /> 
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
  
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              We as a school pride ourselves on who we are—a community committed to integrity, respect, and compassion. We also know that our identity cannot be defined by these words alone—it must be supported by the actions we take each day, both as individuals and as an institution.

Choate Rosemary Hall’s 2021 Strategic Plan seeks to do precisely that: to unify our commitments with our actions.
 Through 2019 and into the start of 2020, we, along with the Board of Trustees and senior administrators, met with students, faculty, staff, alumni, and parents, seeking far-reaching ideas regarding Choate’s current direction and reflecting upon how we as an institution need to adapt in order to benefit all of our constituents.

              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Ytvedio;