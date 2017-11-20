import { connect } from 'react-redux'

import FilterList from '../components/FilterList'

const mapStateToProps = (state, props) => {
  const categories = Object.values(state.categories).reduce(
    (acc,cur) => acc.concat(cur), [])

  return {
    categories
  }
}

const ConnectedFilterList = connect(mapStateToProps)(FilterList)

export default ConnectedFilterList