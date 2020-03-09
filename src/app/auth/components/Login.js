import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../../../components/LoginForm'
import {login} from '../actions'

export class Login extends Component {
  render() {
    return (
        <LoginForm login={this.props.login}/>
    )
  }
}

export default connect(null, {login})(Login)
