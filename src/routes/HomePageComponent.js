import React from 'react';

import HeaderComponent from '../components/HeaderComponent'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FilterLinkComponent from '../components/FilterLinkComponent'
import FooterComponent from '../components/FooterComponent'

console.log("+++++ HomePageComponent")

class HomePageComponent extends React.Component {
    render() {
      console.log("+++++ HomePageComponent render")
      return(
          <div>
            <HeaderComponent />
            <AddTodoContainer />
            <TodoListContainer />
            <FilterLinkComponent />
            <FooterComponent />
          </div>
      )
    }
  }
  
export default HomePageComponent;