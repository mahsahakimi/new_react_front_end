import React from 'react';
import '../../views/Problems/Problems.css';

const Problem = ({title, difficulty, solved, category, content, option_1, option_2, option_3, option_4}) => {
  return (
  <tr>
    <td><a>{title}</a></td>
    <td><p><strong>{content}</strong></p>
       <ol>
          <li>{option_1}</li>
          <li>{option_2}</li>
          <li>{option_3}</li>
          <li>{option_4}</li>
        </ol>
    </td>
    <td>{difficulty}</td>
    <td>{category}</td>
    <td>{Number(solved)}</td>
  </tr>
  );
}

export default Problem;