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
          My name is Eteyen Ikpeme. I am software engineer with a background in
          medical device engineering who is detail-oriented and motivated with a
          passion for learning and building high-quality, clean and efficient
          code. With the determination to improve, I've expanded my coding
          skills via a 500+ hour coding Bootcamp focused on the Javascript web
          development NERP (Node, Express, React, PostgresSql) stack and more
          technologies. During the course, I took full advantage of
          indispensable opportunities and learned how to work both autonomously
          and in a collaborative setting, understanding the importance of
          detailed project planning and how to utilize the individual strengths
          of team members to meet project deadlines and goals. Eager to tackle
          more complex challenges and coding solutions for real-world problems,
          I keep myself busy on multiple projects, personal and professional,
          constantly learning and improving my skills as a software developer.
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
            <p>: Full-time | Contract | Freelance </p>
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
