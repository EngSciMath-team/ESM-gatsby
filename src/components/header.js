import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Container } from "./layoutComponents";

const StyledHeader = styled.header`
  color: var(--white);
  background: linear-gradient(180deg, #aa0707 50%, #111111 50%);
  padding-top: 75px;
  padding-bottom: 75px;

  h1 {
    margin: 0;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  h1 {
    font-family: Raleway;
    font-weight: 900;
    font-size: 106px;
    width: 40%;
    align-self: center;
  }

  h2 {
    width: 57.8%;
    font-family: Roboto;
    font-size: 21px;
    margin: 0;
    text-shadow: 0em 0em 0.3em #000000;
    line-height: 1.6em;
  }
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <TextBox>
        <h1>
          <Link to="/">E-S-M</Link>
        </h1>
        <h2>
          A coalition of students, professionals, and activists working to forge
          a stronger connection between the fields of STEM and the international
          socialist community.
        </h2>
      </TextBox>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  className: PropTypes.string,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
