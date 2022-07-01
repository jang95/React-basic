import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    vaildated: false,
  }

  input = React.createRef();

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      vaildated: this.state.password === '0000'
    });
    // this.input.focus()
    this.input.current.focus()
  }

  render() {
    return (
      <div>
        <input
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.vaildated ? 'success' : 'failure') : ''}
          // ref={(ref) => this.input=ref}
          ref={this.input}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}

export default ValidationSample;