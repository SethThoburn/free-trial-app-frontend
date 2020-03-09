import React, { Component } from 'react'
import PropType from 'prop-types'

export class Form extends Component {
  state = {
    email: '',
    password: '',
    msg: null
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    const user = {email, password}
    this.props.login(user)
  }
  render() {
    return (
      <React.Fragment>
        <form className="form-group" onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='mb-3'
            onChange={this.onChange}
          />

          <label>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            className='mb-3'
            onChange={this.onChange}
          />
          <a 
            href="https://www.google.com"
            style={{fontSize: "11px"}}
          >
          Forgot your password?
          </a>
            <button color='dark' style={{ marginTop: '1rem' }}>
              Login
            </button>
        </form>
      </React.Fragment>
    )
  }
}

Form.propTypes = {
  login: PropType.func.isRequired,
}

export default Form
