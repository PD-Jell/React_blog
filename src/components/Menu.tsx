import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (): JSX.Element => {
    const activeStyle: React.CSSProperties = {
        color: 'green',
        fontSize: '2rem'
    }

    return (
        <div>
            <ul>
                <li><NavLink exact={true} to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact={true} to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink exact={true} to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink exact={true} to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    )
};

export default Menu;