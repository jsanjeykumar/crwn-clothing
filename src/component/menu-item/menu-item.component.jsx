import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
/*withrouter - HIGHER ORDER COMPONENT (HOC) - is a function that takes an component as an 
input and gives an modified version of that component*/

const MenuItem = ({ title, imageUrl, size,linkUrl, history, match, location }) => {
  return (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle"> SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
