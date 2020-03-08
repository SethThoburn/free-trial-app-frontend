import React, {Component} from 'react'
import {connect} from 'react-redux'
import Landing from '../../../components/Landing'
import {login} from '../actions'

export class Login extends Component {
  render() {
    return (
        <Landing login={this.props.login}/>
    )
  }
}

export default connect(null, {login})(Login)
