import { AppBar } from 'material-ui';
import * as React from 'react';
// import { NavLink } from 'react-router-dom';

interface Props {
  leftClick: () => void
}

const Menu = (props: Props): JSX.Element => {
  // const activeStyle: React.CSSProperties = {
  //     color: 'green',
  //     fontSize: '2rem'
  // }

  return (
    <div>
      <AppBar title="Jell Blog" onLeftIconButtonClick={(e) => props.leftClick()} />
      {/* <ul>
                <li><NavLink exact={true} to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact={true} to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink exact={true} to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink exact={true} to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/> */}
    </div>
  )
};

export default Menu;
