import React from 'react';

import SubNavItem from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css';

const SubNav = props =>{
    return (
        <div className={styles['content']}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label='Restaurant' icon='utensils'/>
                    <SubNavItem label='Home Services' icon='home'/>
                    <SubNavItem label='Motor Services' icon='car'/>
                    <SubNavItem label='More ... ' icon='info-circle' showRightBorder/>
                </div>
                <div>
                    <button className={`button ${styles['button']} ${styles['right-border']}`}>
                      <span className={`icon ${styles['icon']}`}> <i className="fas fa-pen"></i></span>
                      <span>Write a Review</span>
                    </button>
                    <button className={`button ${styles['button']}`}>
                      <span className={`icon ${styles['icon']}`}><i className="fas fa-hotel"></i></span>
                      <span>Businesses</span>
                    </button>
                </div>
            </div>
        </div>
        
    )
};

export default SubNav;