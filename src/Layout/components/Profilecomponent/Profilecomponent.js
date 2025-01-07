import React from 'react';
import '../../views/Profile/Profile';

const Profilecomponent = ({name, score, created, followers, followings}) => {
  if (score)
    return (
      <>
      <h1 className="profile-name">{name}</h1>
      <div className="profile-stats">
          <div className="stat">
              <h2 className="stat-number">{followers}</h2>
              <p className="stat-label">Followers</p>
          </div>
          <div className="stat">
              <h2 className="stat-number">{followings}</h2>
              <p className="stat-label">Following</p>
          </div>
          <div>
              <h2 className="stat-number">{score}</h2>
              <p className="stat-label">Score</p>
          </div>
      </div>
      </>
    );
  else
    return (
      <>
      <h1 className="profile-name">{name}</h1>
      <div className="profile-stats">
          <div className="stat">
              <h2 className="stat-number">{followers}</h2>
              <p className="stat-label">Followers</p>
          </div>
          <div className="stat">
              <h2 className="stat-number">{followings}</h2>
              <p className="stat-label">Following</p>
          </div>
          <div>
              <h2 className="stat-number">{created}</h2>
              <p className="stat-label">Questions</p>
          </div>
      </div>
      </>
    );
}

export default Profilecomponent;