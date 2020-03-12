import React, {Component} from 'react'
import PropType from 'prop-types'
import Form from 'components/Form'
import 'resources/App.css'

export class LoginForm extends Component {
  render() {
    
    return (
      <React.Fragment>
        <Form login={this.props.login}/>
      </React.Fragment>
    )
  }
}

LoginForm.propTypes = {
  login: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
}

export default LoginForm
