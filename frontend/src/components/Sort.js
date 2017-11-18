import React from 'react'

export default class Sort extends React.Component {

  render () {
    const { title } = this.props

    if (title === 'sort comments') {
      return (
        <center>
          <strong>
            {title}
          </strong><br />
          <button onClick={() => alert('clicked')}>Date Descending</button>
          <button onClick={() => alert('clicked')}>Date Ascending</button>
          <button onClick={() => alert('clicked')}>Vote Descending</button>
          <button onClick={() => alert('clicked')}>Vote Ascending</button>
        </center>
      )
    }

    if (title === 'sort posts') {
      return (
        <center>
          <strong>
            {title}
          </strong><br />
          <button onClick={() => alert('clicked')}>Date Descending</button>
          <button onClick={() => alert('clicked')}>Date Ascending</button>
          <button onClick={() => alert('clicked')}>Vote Descending</button>
          <button onClick={() => alert('clicked')}>Vote Ascending</button>
        </center>
      )
    }
  }
}