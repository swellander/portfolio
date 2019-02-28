import React from "react";

import Menu from "../components/Menu";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <div style={{ width: `200px`, marginTop: `-300px` }}>
      <Image />
    </div>
    <Menu />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
