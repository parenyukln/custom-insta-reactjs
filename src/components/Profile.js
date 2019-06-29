import React, {Component} from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className='container profile'>
            <User
                src='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
                alt='Manjkee'
                name='coolMan'
            />
            <Palette/>
        </div>
    );
}

export default Profile;