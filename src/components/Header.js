import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <div className='container h-flex'>
                    <Link to='/' className='logo'>
                        <img alt='Логотип инстаграм' src={logo}></img>
                    </Link>
                    <nav className='links'>
                    <ul>
                        <li>
                            <Link to='/' className='menu__links'>Лента</Link>
                        </li>
                        <li>
                            <Link to='/profile' className='menu__links'>Профиль</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </header>
        );
    }
}

export default Header;