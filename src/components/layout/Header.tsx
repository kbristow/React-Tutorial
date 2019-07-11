import React, {CSSProperties} from 'react';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to={"/"}>Home</Link> | <Link style={linkStyle} to={"/about"}>About</Link>
        </header>
    )
};

const headerStyle: CSSProperties = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
};

const linkStyle: CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
};

export default Header;
