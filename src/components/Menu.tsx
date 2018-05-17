import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui';
// import NavigationMoreVert from 'material-ui/svg-icons/navigation/expand-more';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as React from 'react';
// import { NavLink } from 'react-router-dom';

interface Props {
  leftClick: () => void
}

const handleChangeSingle = (event: React.SyntheticEvent<{}>, value: any) => {
  console.log(value);
}

const rightMenu: JSX.Element =
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    onChange={(event, value) => { handleChangeSingle(event, value) }}
  >
    <MenuItem value="1" primaryText="Refresh" />
    <MenuItem value="2" primaryText="Send feedback" />
    <MenuItem value="3" primaryText="Settings" />
    <MenuItem value="4" primaryText="Help" />
    <MenuItem value="5" primaryText="Sign out" />
  </IconMenu>



const Menu = (props: Props): JSX.Element => {
  // const activeStyle: React.CSSProperties = {
  //     color: 'green',
  //     fontSize: '2rem'
  // }

  return (
    <div>
      <AppBar
      onLeftIconButtonClick={(e) => props.leftClick()}
      onRightIconButtonClick={(e) => props.leftClick()}
      // iconElementRight={<IconButton><NavigationMoreVert/></IconButton>}
      iconElementRight={rightMenu}
      className="appbar"
      title={<div className="appbar_title">Jell blog</div>}
      />
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
