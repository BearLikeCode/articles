import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-menu'>
                    <Link to="/">Articles</Link>
                    <Link to="/new">Create post</Link>
                </div>
            </div>
        </div>
    )
}