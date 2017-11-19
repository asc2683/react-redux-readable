import React from 'react'

export default class HiddenContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isVisible: false }
  }

  render () {
    const { children, title } = this.props
    const { isVisible } = this.state

    if (!isVisible) {
      return (
        <span>
          <button onClick={() => this.setState({ isVisible: true })}>
            {title}
          </button>
        </span>
      )
    }

    return (
      <span>
        <button onClick={() => this.setState({ isVisible: false })}>
          cancel
        </button>
      <div>{children}</div>
    </span>
    )
  }
}