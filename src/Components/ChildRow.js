import React from "react";

const ChildRow = ({ child }) => (
  <tr>
    <td>{child.name}</td>
    <td>{child.dob}</td>
  </tr>
);

export default ChildRow;
