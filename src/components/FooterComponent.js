import React from 'react'

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

console.log("+++++ FooterComponent")

class FooterComponent extends React.Component{
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render(){
    console.log("+++++ FooterComponent render")
    return(
      <Paper zDepth={1}>
      <BottomNavigation selectedIndex={this.state.selectedIndex}>
        <BottomNavigationItem
          label="Home"
          icon={<FontIcon className="material-icons">home</FontIcon>}
          onClick={() => this.select(0)}
        />
        <BottomNavigationItem
          label="Favorites"
          icon={<FontIcon className="material-icons">favorite</FontIcon>}
          onClick={() => this.select(1)}
        />
        <BottomNavigationItem
          label="Nearby"
          icon={<IconLocationOn />}
          onClick={() => this.select(2)}
        />
      </BottomNavigation>
    </Paper>
  );    
  }
}

export default FooterComponent