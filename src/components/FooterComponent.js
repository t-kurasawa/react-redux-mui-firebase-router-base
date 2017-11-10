import React from 'react'

console.log("+++++ FooterComponent")
class FooterComponent extends React.Component{
  render(){
    console.log("+++++ FooterComponent render")
    return(
      <center><p>powered by <a href="https://github.com/t-kurasawa">t-kurasawa</a></p></center>
    )
  }
}

export default FooterComponent