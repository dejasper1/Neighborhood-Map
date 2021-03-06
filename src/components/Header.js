import React from "react";

const Header = props => {
  return (
    <nav>
      <svg
        aria-label="menu"
        tabIndex="0"
        width="30"
        height="30"
        onClick={props.changeSideBar}
      >
        <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" strokeOpacity="0.8" />
        <path
          d="M0,14 30,14"
          stroke="#fff"
          strokeWidth="5"
          strokeOpacity="0.8"
        />
        <path
          d="M0,23 30,23"
          stroke="#fff"
          strokeWidth="5"
          strokeOpacity="0.8"
        />
      </svg>
      <h3>Trending Foursquare Venues</h3>
    </nav>
  );
};

export default Header;
