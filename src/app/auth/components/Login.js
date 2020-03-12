import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from 'components/LoginForm'
import Alert from 'components/Alert'
import {login} from 'app/auth/actions'
import PropType from 'prop-types'

export class Login extends Component {
  render() {
    const {isLoading, isAuthenticated} = this.props
    const msg = "Incorrect username or Password. Try again."

    return (
      <div className="landing-outer">
      <div className="landing">
        <div className="landing-inner">
          <div className="landing-form">
      
          {
            !isAuthenticated && !isLoading
            ? <Alert msg={msg}/>
            : null
          }
          <LoginForm login={this.props.login} isLoading={this.props.isLoading}/>

          </div>
        </div>
      </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
  isAuthenticated: PropType.bool.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  msg: state.auth.msg,
})

export default connect(mapStateToProps, {login})(Login)
