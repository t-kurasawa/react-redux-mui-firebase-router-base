import React from 'react';

import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

console.log("+++++ DetailPageComponent")

class DetailPageComponent extends React.Component {
    render() {
      console.log("+++++ DetailPageComponent render")
      return(
          <div>
            <HeaderComponent />
            <p>Detail</p>
            <p>:detailId {this.props.match.params.detailId}</p>
            <FooterComponent />
          </div>
      )
    }
  }
  
export default DetailPageComponent;