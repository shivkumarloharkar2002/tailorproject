import React from 'react';

function Profile() {
    const localData=JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <h1>{localData.username}</h1>
        </div>
    );
}

export default Profile;