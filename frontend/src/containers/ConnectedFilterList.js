import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FilterList from '../components/FilterList'
import { setFilter, clearFilter } from '../actions'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])

  return {
    categories 
  }
}

const mapDispatchToProps = (dispatch, props) => 
  bindActionCreators({  setFilter, clearFilter }, dispatch)

const ConnectedFilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList)

export default ConnectedFilterList