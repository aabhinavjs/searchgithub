import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';

const User = props => {
    debugger
    const { currentUserData, userRepos } = props;
    console.log(currentUserData);
    return (

        <div className="user-data-container">
            <h1>{currentUserData.login}</h1>
            <img
                className="user-avtar"
                style={{ width: '150px', height: '150px' }}
                src={currentUserData.avatar_url}
            />
            
            {
                userRepos.length === 0 && (
                    <h2>No repos found for user {currentUserData.login}</h2>
                )}
            {
                userRepos.length > 0 && (
                    <div className="repository-container">
                        <h2>Repos</h2>
                        <Repos repos={userRepos} />
                    </div>
                )}
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
