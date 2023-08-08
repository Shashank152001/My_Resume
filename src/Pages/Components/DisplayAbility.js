import React from "react";
import "./Stylesheets/DisplayAbility.css";
import { Rate } from "antd";

const DisplayAbility = (props) => {
  return (
    <div className="display-ability">
      <div className="display-ability-name">{props.name}</div>
      <div className="display-ability-rating">
        <Rate
          disabled
          defaultValue={props.rating}
          size="small"
          className="display-ability-stars"
          allowHalf
          character = "&#9733;"
        />
      </div>
    </div>
  );
};

export default DisplayAbility;
