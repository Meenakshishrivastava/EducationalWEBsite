import React from "react";
import { Container, Row, Col } from "reactstrap";
import teach from "../assets/teach.jpg";
import R from "../assets/R.jpg";
import prin from "../assets/prin.jpg";
import pt from "../assets/pt.avif";
import OIP from "../assets/OIP.jpg";
import mam from "../assets/mam.webp";
import sir from "../assets/sir.webp";
import "./courses.css";
import FacultyCard from "./FacultyCard";

const coursesData = [
  {
    id: "01",
    title: "Principle of the School",
    name : "Mr. Bhupendra jogi",
    imgUrl: R,
  },

  {
    id: "02",
    title: "Vise Principle",
    name : "Mr. Ankit Malhotra",
    imgUrl: prin,
  },

  {
    id: "03",
    title: "Sports Teacher",
    name : "Miss Shilpee Tiwari",
    imgUrl: pt,
  },
  {
    id: "03",
    title: "Math Teacher",
    name : "Mr.lokesh Malhotra",
    imgUrl: OIP,
  },
  {
    id: "03",
    title: "Science teacher",
    name : "Miss Sunita Sharma",
    imgUrl: teach,
  },
  {
    id: "03",
    title: "Art Teacher",
    name : "Mr. Ayush Mishra",
    imgUrl: sir,
  },

];

const Faculty = () => {
  return (
    <section className="m-10">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-center align-items-center">
              <div className="course__top__left text-center">
                <h2>United in SUPPORT</h2>
                <p>
                None of us do this alone. Our supportive community encourages integrity, respect, and compassion through a network of students and faculty, and by a curriculum that recognizes the importance of being not only an excellent student, but a moral and ethical person.!
                </p>
              </div>

              
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <FacultyCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Faculty;