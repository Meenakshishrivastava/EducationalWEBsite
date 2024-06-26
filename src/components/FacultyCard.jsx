import React from "react";

const FacultyCard = (props) => {
  const { imgUrl, title, name } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {name}
          </p>
          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;