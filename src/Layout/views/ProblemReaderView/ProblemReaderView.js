// this page not used :)
import React, {useState,useEffect} from 'react';
import ProblemReader from '../../components/ProblemReader/ProblemReader';

const ProblemReaderView = ({title}) => {
    const [problem, setProblem] = useState([]);

    useEffect(()=>{
        // console.log("Loading Data ...")
        fetch(`http://localhost:8080/problems/${title}`)
            .then(response=>response.json())
            .then(data=>setProblem(data))
    },)

    return (
        <div>
            <ProblemReader key={problem.id} title={problem.title} content={problem.content} option_1={problem.option_1} option_2={problem.option_2} option_3={problem.option_3} option_4={problem.option_4}/>
        </div>
    );
}

export default ProblemReaderView;