import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'

export class Authentication extends Component {
  render() {
    return (
      <div>
      {this.props.isAuthenticated 
        ? <span>Dashboard</span>
        : <Login />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  status: state.status
})

export default connect(mapStateToProps, {})(Authentication)
