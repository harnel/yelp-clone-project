import React from 'react';

import styles from './SearchSuggestions.module.css';

const SearchSuggestions = props =>{
    return (
        <div className={styles["search-suggestions"]}>
            <span className={`icon ${styles['search-suggestion']}`}><i className="fas fa-utensils"></i></span> <span>Restaurant</span>
            <span className={`icon ${styles['search-suggestion']}`}><i className="fas fa-cocktail"></i></span> <span>Night Life</span>
            <span className={`icon ${styles['search-suggestion']}`}><i className="fas fa-concierge-bell"></i></span> <span>Service</span>
            <span className={`icon ${styles['search-suggestion']}`}><i className="fas fa-truck"></i></span> <span>Delivery Service</span>
            
        </div>
        
    )
};

export default SearchSuggestions;