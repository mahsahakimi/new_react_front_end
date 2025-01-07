// this file not used :)
import React from 'react';
import './ProblemReader.css';

const ProblemReader = ({title, content, option_1, option_2, option_3, option_4}) => {
  return (
    <main>
        <h1>
            {title}
        </h1>
        <div>
            <p><strong>{content}</strong></p>
            <ol>
                <li>{option_1}</li>
                <li>{option_2}</li>
                <li>{option_3}</li>
                <li>{option_4}</li>
            </ol>
        </div>            
    </main>
  );
};

export default ProblemReader;