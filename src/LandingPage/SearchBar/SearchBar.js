import React from 'react';

import styles from './SearchBar.module.css';
const SearchBar = props =>{
    return (
        <div className="field has-addons">
            <p className="control">
                <button className="button is-static is-medium"> Search</button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Some .............." />
            </p>
            <p className="control">
                <button className="button is-static is-medium"> Near</button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="body *********" />
            </p>
            <button className={`button is-medium ${styles['search-button']}`}>
                <span className="icon ">
                    <i className="fas fa-search"></i>
                </span>
            </button>
        </div>
    )
};

export default SearchBar;