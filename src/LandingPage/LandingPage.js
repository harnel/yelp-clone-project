import React from 'react';

import TopNav from '../LandingPage/TopNav/TopNav';
import logo from '../assets/logo.png'
import styles from './LandingPage.module.css';

const LandingPage = props =>{
    return (
        <div>
            <TopNav />
            <img src={logo} className={styles['logo']} alt='logo'/>
        </div>
        
    )
}

export default LandingPage;