import React, {Component} from 'react';
import preloader from '../preloader.gif';

const Preloader = () => {
    return (
        <div className='preloader'>
            <img src={preloader}></img>
        </div>
    );
}

export default Preloader;