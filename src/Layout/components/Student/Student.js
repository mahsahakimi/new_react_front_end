import React from 'react';
import '../../views/Students/Students.css';

const Student = ({name, score}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{Number(score)}</td>
    </tr>
  );
}

export default Student;