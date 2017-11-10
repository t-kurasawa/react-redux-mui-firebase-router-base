import React from 'react';
import { BrowserRouter, Route ,Link } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import HomePageComponent from './routes/HomePageComponent'
import DetailPageComponent from './routes/DetailPageComponent'
import ContentPageComponent from './routes/ContentPageComponent'

console.log("+++++ App")

class App extends React.Component{
  render(){
    console.log("+++++ App render")
    this.contentId = 1
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePageComponent} />
            <Route exact path="/detail/:detailId" component={DetailPageComponent} />
            <Route exact path="/content" render={props=> <ContentPageComponent contentId={this.contentId} {...props}/>} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;