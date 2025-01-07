import React from 'react';
import '../../views/Teachers/Teachers.css';

const Teacher = ({name, created}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{Number(created)}</td>
    </tr>
  );
}

export default Teacher;