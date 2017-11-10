import React from 'react'
import PropTypes from 'prop-types'

import FilterLinkContainer from '../containers/FilterLinkContainer'

console.log("+++++ FilterLinkComponent")

class FilterLinkComponent extends React.Component{
  render(){
    return(
      <p>
      Show:
      {' '}
      <FilterLinkContainer filter="SHOW_ALL">
        All
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_ACTIVE">
        Active
      </FilterLinkContainer>
      {', '}
      <FilterLinkContainer filter="SHOW_COMPLETED">
        Completed
      </FilterLinkContainer>
      </p>
    )
  }
}

export default FilterLinkComponent