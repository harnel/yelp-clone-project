import React from 'react';

import styles from "./SubNavItem.module.css";

const SubNavItem = props => {
    const showRightBorder = props.showRightBorder ? styles['right-border'] : '' ;
    return (
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <div className={`${styles['sub-nav-item']} ${showRightBorder}`} aria-haspopup="true" aria-controls="dropdown-menu4">
                <span ><i className={`fas fa-${props.icon}`}></i></span>
                <span>{props.label}</span>
                <span ><i className= 'fas fa-angle-down'  ></i></span>
              </div>
            </div>
            <div className="dropdown-menu" id="dropdown-menu4" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
              </div>
            </div>
        </div>
    )
};

export default SubNavItem;