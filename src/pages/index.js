import React from "react";

import MediaLinks from "../components/MediaLinks";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const styles = {
  container: {
    minHeight: "100vh",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0
  },
  image: {
    width: `200px`,
    marginTop: `-300px`
  },
  hr: {
    height: 1,
    color: "grey",
    width: "65%"
  },
  title: {
    marginTop: 20
  }
};

const IndexPage = () => (
  <Layout>
    <div style={styles.container}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div style={styles.image}>
        <Image />
      </div>
      <h1 style={styles.title}>Sam Wellander</h1>
      <hr style={styles.hr} />
    </div>
  </Layout>
);

export default IndexPage;
