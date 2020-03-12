import React, { Component } from 'react'
import PropType from 'prop-types'
import 'resources/App.css'

export class Alert extends Component {
  render() {
    return (
      <div className="alert-container">
        <span>{this.props.msg}</span>
      </div>
    )
  }
}

Alert.propTypes = {
  msg: PropType.string.isRequired,
}

export default Alert
