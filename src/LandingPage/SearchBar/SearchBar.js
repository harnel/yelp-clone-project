import React from 'react';

import styles from './SearchBar.module.css';
const SearchBar = props =>{
    const searchSize = props.isSmall ? "" : "is-medium"
    return (
        <div className={`field has-addons ${styles['control']}`}>
            <p className="control">
                <button className={`button is-static ${searchSize}`}> Search</button>
            </p>
            <p className="control">
                <input className={`input ${searchSize} ${styles['input-control']}`} type="text" placeholder="Some .............." />
            </p>
            <p className="control">
                <button className={`button is-static ${searchSize}`}> Near</button>
            </p>
            <p className="control">
                <input className={`input ${searchSize} ${styles['input-control']}`} type="text" placeholder="body *********" />
            </p>
            <button className={`button ${searchSize} ${styles['search-button']}`}>
                <span className="icon ">
                    <i className="fas fa-search"></i>
                </span>
            </button>
        </div>
    )
};

export default SearchBar;