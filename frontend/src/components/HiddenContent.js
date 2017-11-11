import React from 'react'

export default class HiddenContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isVisible: false }
  }

  render () {
    const { children } = this.props
    const { isVisible } = this.state

    if (!isVisible) {
      return (
        <span>
          <a href="javascript:void(0)" onClick={() => this.setState({ isVisible: true })}>
            new post
          </a>
        </span>
      )
    }

    return (
      <span>
        <a href="javascript:void(0)" onClick={() => this.setState({ isVisible: false })}>
          cancel
        </a>
      <div>{children}</div>
    </span>      
    )
  }
}