import React from 'react';

import './TopNav.module.css';

const TopNav = props =>{
    return (
        <div>
            <div>
                <span> Write...</span> <span> On the go ....</span>
            </div>
            <div>
                <span>Login</span>
                <button>LOGIN</button>
            </div>
        </div>
    )
};

export default TopNav;