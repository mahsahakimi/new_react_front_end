import React, {useState,useEffect,useContext} from 'react';
import Problem from '../../components/Problem/Problem';
import './Problems.css';
import AuthContext from '../../contexts/AuthContext';

async function saveProblem(credentials, type, authContext) {
    if (type === 't')
        return fetch('http://localhost:8080/problems', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(data => data.json())

    else
        return fetch(`http://localhost:8081/problems/checkproblem/${authContext}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

function sortTableByQuestionCount() {
    let table = document.getElementById("problemsTable");
    let rows = Array.from(table.rows).slice(1); 

    rows.sort((a, b) => {
        let questiosA = parseInt(a.cells[4].innerText);
        let questionsB = parseInt(b.cells[4].innerText);
        return questionsB - questiosA; 
    });

    let tbody = table.tBodies[0];
    tbody.append(...rows);
}

const Problems = ({username, type}) => {
    const authContext = useContext(AuthContext);
    const [problems, setProblems] = useState([]);
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");
    const [Difficulty, setDifficulty] = useState("");
    const [Category, setCategory] = useState("");
    const [Op1, setOp1] = useState("");
    const [Op2, setOp2] = useState("");
    const [Op3, setOp3] = useState("");
    const [Op4, setOp4] = useState("");
    const [Answer, setAnswer] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = await saveProblem({
            Title,
            Content,
            Difficulty,
            authContext,
            Category,
            Op1,
            Op2,
            Op3,
            Op4,
            Answer
        }, type, authContext);

        // if (payload.message)
        //     alert(payload.message);
    }

    useEffect(()=>{
        // console.log("Loading Data ...")
        sortTableByQuestionCount();
        if (type === 's')
            fetch(`http://localhost:8080/students/${username}/solved`)
                .then(response=>response.json())
                .then(data=>setProblems(data))
        else if (type === 't')
            fetch(`http://localhost:8080/problems/author/${username}`)
                .then(response=>response.json())
                .then(data=>setProblems(data))
        else
            fetch(`http://localhost:8080/problems`)
                .then(response=>response.json())
                .then(data=>setProblems(data))
    },)

    // for tabels
    if (!username)
        return (
            <div>
                <main>
                    <h1>All Problems</h1>
                    <table id="problemsTable">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Difficulty</th>
                                <th>Category</th>
                                <th>Solved #</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            problems.map((problem)=>{
                                return <Problem key={problem.id} title={problem.title} difficulty={problem.difficulty} solved={problem.solved} category={problem.category} content={problem.content} option_1={problem.option_1} option_2={problem.option_2} option_3={problem.option_3} option_4={problem.option_4}/>
                            })
                            }
                        </tbody>
                    </table>
                </main>
            </div>
    );
    
    // teacher profile
    if (type === 't')
        return (
            <div>
                <main>
                    <h2>Questions Designed</h2>
                    <table id="problemsTable">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Difficulty</th>
                                <th>Category</th>
                                <th>Solved #</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            problems.map((problem)=>{
                                return <Problem key={problem.id} title={problem.title} difficulty={problem.difficulty} solved={problem.solved} category={problem.category} content={problem.content} option_1={problem.option_1} option_2={problem.option_2} option_3={problem.option_3} option_4={problem.option_4}/>
                            })
                            }
                        </tbody>
                    </table>
                </main>

                <form className='pform' onSubmit={handleSubmit}>
                    <label>
                        <p>Title</p>
                        <input type="text" onChange={e => setTitle(e.target.value)}/>
                    </label>
                    <label>
                        <p>Content</p>
                        <input type="text" onChange={e => setContent(e.target.value)}/>
                    </label>
                    <div className="options">
                        <label>
                            <p>1.</p>
                            <input type="text" onChange={e => setOp1(e.target.value)}/>
                        </label>
                        <label>
                            <p>2.</p>
                            <input type="text" onChange={e => setOp2(e.target.value)}/>
                        </label>
                        <label>
                            <p>3.</p>
                            <input type="text" onChange={e => setOp3(e.target.value)}/>
                        </label>
                        <label>
                            <p>4.</p>
                            <input type="text" onChange={e => setOp4(e.target.value)}/>
                        </label>
                    </div>
                    <label>
                        <p>Answer</p>
                        <input type="text" placeholder='1 - 4?' onChange={e => setAnswer(e.target.value)}/>
                    </label>
                    <label>
                        <p>Difficulty</p>
                        <input type="text" placeholder='Easy or Medium or Hard?' onChange={e => setDifficulty(e.target.value)}/>
                    </label>
                    <label>
                        <p>Category</p>
                        <input type="text" onChange={e => setCategory(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );

    // student profile
    return (
        <div>
            <main>
                <h2>Problems Solved</h2>
                <table id="problemsTable">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Difficulty</th>
                            <th>Category</th>
                            <th>Solved #</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        problems.map((problem)=>{
                            return <Problem key={problem.id} title={problem.title} difficulty={problem.difficulty} solved={problem.solved} category={problem.category} content={problem.content} option_1={problem.option_1} option_2={problem.option_2} option_3={problem.option_3} option_4={problem.option_4}/>
                        })
                        }
                    </tbody>
                </table>
            </main>
            <form className='pform' onSubmit={handleSubmit}>
                <label>
                    <p>Title</p>
                    <input type="text" onChange={e => setTitle(e.target.value)}/>
                </label>
                <label>
                    <p>Answer</p>
                    <input type="text" placeholder='1 - 4?' onChange={e => setAnswer(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Problems;