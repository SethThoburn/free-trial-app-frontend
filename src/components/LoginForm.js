import React, {Component} from 'react'
import PropType from 'prop-types'
import Form from './Form'
import Spinner from './Spinner'
import '../resources/App.css'

export class LoginForm extends Component {
  render() {
    
    return (
      <div className="landing-outer">
      <div className="landing">
        <div className="landing-inner">

        { 
          this.props.isLoading 
          ? <Spinner />
          : <Form login={this.props.login}/>
        }

        </div>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
}

export default LoginForm
