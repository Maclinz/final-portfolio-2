import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import resume from "../img/resume.pdf";

function PrimaryButton({ title }) {
  //post request to make email?

  return (
    <PrimaryButtonStyled>
      <a href={resume} download="Eteyen Ikpeme's resume.pdf">
        {title}
      </a>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
