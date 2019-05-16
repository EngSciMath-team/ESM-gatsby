import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import JoinUs from "../components/joinus";
import About from "../components/about";
// import Image from "../components/image";
import { Container } from "../components/layoutComponents";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />{" "}
      <JoinUs />
      <About /> 
      <Container>
        <Link to="/community-guidelines/">Go to Community Guidelines</Link>
      </Container>
    </Layout>
  );
};

export default IndexPage;
