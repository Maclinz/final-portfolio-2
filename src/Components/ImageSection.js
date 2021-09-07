import React from "react";
import styled from "styled-components";
import avatar from "../img/avatar.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={avatar} alt="" />
      </div>
      <div className="right-content">
        <h1>
          <span>Etty</span>
        </h1>
        <p className="paragraph">
          My name is Eteyen Ikpeme. Software engineer with a 4 year background
          in medical device engineering. I am passionate about programming
          having switched careers and now specialize in computer science,
          javascript web development, NERP stack (Node Express, React, Postgres)
          technologies and more. I enjoy working with hardworking and passionate
          individuals, like myself, who have a deep appreciation for improving
          the efficiency and availability of innovative systems, processes
          and/or services.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Eteyen Thomas Ikpeme</p>
            <p>: 26</p>
            <p>: US </p>
            <p>: English, Spanish </p>
            <p>: Chicago Illinois, US</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
