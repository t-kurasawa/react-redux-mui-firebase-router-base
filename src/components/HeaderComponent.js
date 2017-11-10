import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

console.log("+++++ HeaderComponent")

const HeaderMenu = () => (
  <IconMenu
    iconButtonElement={<IconButton><MenuIcon color={'white'} /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem>
      <Link to="/">Home</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/detail/1">Detail</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/content">Content</Link>
    </MenuItem>
    
  </IconMenu>
);

class HeaderComponent extends React.Component{
  render(){
    console.log("+++++ HeaderComponent render")
    return(
      <AppBar
        title="Todo"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<HeaderMenu />}
      />
    )
  }
}

export default HeaderComponent;