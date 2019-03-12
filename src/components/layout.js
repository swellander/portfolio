import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./layout.css";
import MediaLinks from "./MediaLinks";

const styles = {
  footer: {
    position: "absolute",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    width: "100vw"
  },
  mediaLinks: {
    width: 200,
    marginBottom: 20
  }
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <main>{children}</main>
          <footer style={styles.footer}>
            <div style={styles.mediaLinks}>
              <MediaLinks />
              {/* <p>© {new Date().getFullYear()} Sam Wellander</p> */}
            </div>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
