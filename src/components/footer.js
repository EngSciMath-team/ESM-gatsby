import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "./layoutComponents";

const Footer = ({ className }) => (
  <footer className={className}>
    <Container>
      © {new Date().getFullYear()} EngSciMath.{" "}
      <a href="mailto:engscimath@protonmail.com">engscimath@protonmail.com</a>
    </Container>
  </footer>
);

const StyledFooter = styled(Footer)`
  color: #fffaff;
  background: var(--primary-color);
  padding: 1rem 0;
`;

Footer.propTypes = {
  className: PropTypes.string
};

export default StyledFooter;
