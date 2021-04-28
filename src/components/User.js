import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';
import UserInfo from "./UserInfo";

const User = props => {
    const { currentUserData, userRepos } = props;
    console.log(currentUserData);
    return (

        <div className="user-data-container">
            <UserInfo userName={currentUserData.name} ImageUrl={currentUserData.avatar_url}/>
            {
                userRepos.length === 0 && (
                    <h2>No repos found for user {currentUserData.name}</h2>
                )}
            {
                userRepos.length > 0 && (
                    <div className="repository-container">
                        <h2>Repositories</h2>
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
