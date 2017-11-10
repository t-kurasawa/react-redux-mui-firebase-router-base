import React from 'react';

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

console.log("+++++ ContentPageComponent")

class ContentPageComponent extends React.Component {
    render() {
      console.log("+++++ ContentPageComponent render")
      return(
          <div>
            <HeaderComponent />
            <p>Content</p>
            <p>:contentId {this.props.contentId}</p>
            <FooterComponent />
          </div>
      )
    }
  }
  
export default ContentPageComponent;