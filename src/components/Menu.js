import PropTypes from "prop-types";
import React from "react";

const Menu = ({ siteTitle }) => <h2>Menu</h2>;

Menu.propTypes = {
  siteTitle: PropTypes.string
};

Menu.defaultProps = {
  siteTitle: ``
};

export default Menu;
