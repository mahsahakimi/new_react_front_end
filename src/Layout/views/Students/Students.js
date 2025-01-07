import React, {useState,useEffect} from 'react';
import './Students.css';
import Student from '../../components/Student/Student';

function sortTableByScore() {
    let table = document.getElementById("studentsTable");
    let rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        let scoreA = parseInt(a.cells[1].innerText);
        let scoreB = parseInt(b.cells[1].innerText);
        return scoreB - scoreA; 
    });

    let tbody = table.tBodies[0];
    tbody.append(...rows);
}

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        // console.log("Loading Data ...")
        sortTableByScore();
        fetch("http://localhost:8080/students")
                .then(response=>response.json())
                .then(data=>setStudents(data))
    },)

    return (
        <div>
            <main>
                <h1>All Students</h1>
                <table id="studentsTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student)=>{
                                return <Student key={student.id} name={student.name} score={student.score}/>
                            })
                        }
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Students;