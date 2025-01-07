import React, {useState,useEffect, useContext} from 'react';
import './Profile.css';
import AuthContext from '../../contexts/AuthContext';
import TypeContext from '../../contexts/TypeContext';
import Profilecomponent from '../../components/Profilecomponent/Profilecomponent';
import Problems from '../Problems/Problems';
import ProfileImageComponent from '../../components/ProfileImageComponent/ProfileImageComponent'

const Profile = () => {
    const authContext = useContext(AuthContext);
    const typeContext = useContext(TypeContext);
    const [person, setPerson] = useState({});

    useEffect(()=>{
        // console.log("Loading Data ..."
        if (typeContext === 's')
            fetch(`http://localhost:8081/students/${authContext}`)
                    .then(response=>response.json())
                    .then(data=>setPerson(data))
        else
            fetch(`http://localhost:8081/teachers/${authContext}`)
                .then(response=>response.json())
                .then(data=>setPerson(data))
    },)
    return (
        <div className="container">
            <div className="profile-container">
                <div className="profile-card">
                    <ProfileImageComponent/>
                    <Profilecomponent key={person.id} name={person.name} score={person.score} created={person.created} followers={person.followers} followings={person.followings}/>
                </div>
            </div>

            <div className="table-container">
                <Problems username={authContext} type={typeContext}/>
            </div>
        </div>
    );
}

export default Profile;