import React from 'react';
import ProfileHeader from './ProfileHeader.js'
import ProfileBody from './ProfileBody.js'
// TODO: Styling
// import "../style/NavBar.css"

export default function Profile() {
    return (
        <div className="profile-main">
            <ProfileHeader/>
            <ProfileBody/>
        </div>
    );
}