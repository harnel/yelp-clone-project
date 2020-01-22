import React from 'react';

import styles from './TopNav.module.css';

const TopNav = props =>{
    return (
        <div className={styles['top-nav'] } >
            <div className={styles['left']}>
                <span> Write a Review</span>
                <span>Event</span>
            </div>
            <div className={styles['right']}>
                <span >Login</span>
                <button className="button">  Sign-Up</button>
            </div>
        </div>
    )
};

export default TopNav;