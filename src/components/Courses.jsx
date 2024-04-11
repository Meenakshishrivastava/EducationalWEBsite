import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./Fcourses.css";
import CourseCard from './CoursesCard';
import seo from "../assets/seo.png";
import brabding from "../assets/branding.png";
import img9 from "../assets/img9.jpg";
import design from "../assets/design.png";


const CourseData = [
    {
      id: "01",
      title: "Basic Computer Course",
      imgUrl: seo,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgUrl: brabding,
      students: 5.3,
      rating: 1.7,
    },
  
    {
      id: "03",
      title: "English Speaking Courses",
      imgUrl: img9,
      students: 5.3,
      rating: 1.7,
    },
  
    {
      id: "04",
      title: "Basic UI/UX Design",
      imgUrl: design,
      students: 5.3,
      rating: 1.7,
    },
  ];

const Courses = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Our Free Courses</h2>
        </Col>

        {CourseData.map((item) => (
          <Col lg="3" md="4" className="mb-4" key={item.id}>
            <CourseCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
  )
}

export default Courses