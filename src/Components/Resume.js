import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"AUG 2021 - present"}
            title={"Junior Developer (Apprenticeship)"}
            subTitle={"DevStack-Dev- Remote"}
            textList={["● Collaborative freelance mobile app development"]}
          />
          <ResumeItem
            year={"MAR 2021 - AUG 2021"}
            title={"Junior Developer (Part-time)"}
            subTitle={"Phantom Research ILC - Remote"}
            textList={[
              "● Attended weekly standup meetings to provide input and feedback on project progress.",
              "● Performed code reviews and assist with code design and implementation (MATLAB).",
              "● Provided technical support for software requirements and planning for Terumo Cardiovascular product development.",
            ]}
          />
          <ResumeItem
            year={"SEP 2016 - MAR 2021"}
            title={"Product Development Engineer"}
            subTitle={"Terumo Cardiovascular Group - Ann Arbor Michigan"}
            textList={[
              "● Improved VBA code to analyze CDI monitor data; made process efficient by over 50% handling multiple files",
              "● Lead cross functional teams and communicated software requirements with contractors in India and U.S.",
              "● Extensive use of python and VBA to script data parsers for various data collection software in multiple projects, greatly minimizing time spent for data analysis and visualization.",
            ]}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - 2021"}
            title={"Certificate - Software Engineering, Web Development"}
            subTitle={"Fullstack Academy - Chicago Illinois Immersive"}
            textList={[
              " Specialization in NERP (Node Express, React, Postgres) stack technologies",
            ]}
          />
          <ResumeItem
            year={"2012 - 2016"}
            title={"B.S Chemical Engineering "}
            subTitle={"University Of Michigan - Ann Arbor"}
            textList={[]}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
