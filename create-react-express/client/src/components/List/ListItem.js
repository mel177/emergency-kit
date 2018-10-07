import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    {props.item}
    <span className="delete-btn" onClick={()=> props.onClick(props.id)}>✗</span>
  </li>
);
