import React, {useState,useEffect} from 'react';
import Teacher from '../../components/Teacher/Teacher';
import './Teachers.css';

function sortTableByQuestionCount() {
    let table = document.getElementById("teachersTable");
    let rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        let questiosA = parseInt(a.cells[1].innerText);
        let questionsB = parseInt(b.cells[1].innerText);
        return questionsB - questiosA; 
    });

    let tbody = table.tBodies[0];
    tbody.append(...rows);
}

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        // console.log("Loading Data ...")
        sortTableByQuestionCount();
        fetch("http://localhost:8081/teachers")
            .then(response=>response.json())
            .then(data=>setTeachers(data))
    },)

    return (
        <div>
            <main>
                <h1>All Teachers</h1>
                <table id="teachersTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Question #</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        teachers.map((teacher)=>{
                            return <Teacher key={teacher.id} name={teacher.name} created={teacher.created}/>
                        })
                        }
                    </tbody>
                </table>
            </main>
        </div>
    );
}

export default Teachers;