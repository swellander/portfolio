import PropTypes from "prop-types";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const styles = {
  marginTop: "3vh",
  display: "flex",
  justifyContent: "space-around",
  width: "75%",
  margin: "auto"
};

const MediaLinks = () => {
  return (
    <div style={styles}>
      <a href={"https://github.com/swellander"}>
        <FaGithub size={20} />
      </a>
      <a href={"https://www.linkedin.com/in/swellander/"}>
        <FaLinkedinIn size={20} />
      </a>
      <a href={"mailto:samwellander@gmail.com"}>
        <FiMail size={20} style={{ marginTop: 2.5 }} />
      </a>
    </div>
  );
};

MediaLinks.propTypes = {
  siteTitle: PropTypes.string
};

MediaLinks.defaultProps = {
  siteTitle: ``
};

export default MediaLinks;
