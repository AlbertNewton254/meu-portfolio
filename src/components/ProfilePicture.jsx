import React from 'react';
import image from '../assets/image.jpg';

const ProfilePicture = () => {
    return (
        <div>
            <img src={image} alt="" className="image"/>
        </div>
    );
}

export default ProfilePicture;