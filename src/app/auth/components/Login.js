import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../../../components/LoginForm'
import {login} from '../actions'
import PropType from 'prop-types'

export class Login extends Component {
  render() {
    return (
        <LoginForm login={this.props.login} isLoading={this.props.isLoading}/>
    )
  }
}

Login.propTypes = {
  login: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
})

export default connect(mapStateToProps, {login})(Login)
