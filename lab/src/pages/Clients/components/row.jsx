import React from 'react'
const Row = ({id, name, age}) =>(
    <tr>
    <td scope ="row">{id}</td>
    <td>{name}</td>
    <td>{age}</td>
  </tr>
);
export default Row;