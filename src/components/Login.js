import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
//import { runInNewContext } from 'vm';
import AuthForm from './AuthForm'
import PageTodoList from './PageTodoList';

export default class Login extends Component {
  static propTypes = {
    prop: PropTypes.func
  }

  state = {
    namesArray: [],
    getItem: [], 
    access: false,
    name: '',
    errorName: ''
  }

  onChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
    this.setState({errorName: ''})
  }

  onSubmit = (e) => {
      e.preventDefault()
      
      if(!this.state.namesArray.includes(this.state.name) && this.state.name !== ''){
        this.setState({
          ...this.state,
          access: true,
          namesArray: [...this.state.namesArray, this.state.name]
        })
  
        let names = JSON.stringify(this.state.namesArray)
        localStorage.setItem("name", names)
  
        document.forms[0].elements.name.value = ''
        console.log('localStorage.getItem --- ', localStorage.getItem("name"))
      }else{
        this.setState({
          ...this.state,
          errorName: 'Sorry this name is already exists'
        })
      }
      
  }
  
  render() {
    const { errorName, access } = this.state
    // console.log(this.state.namesArray)
    return (
      <div className="formWrap">
        {!access ? <AuthForm onSubmit={this.onSubmit} onChange={this.onChange} errorName={errorName} /> : <Redirect to="/todo" />}
      </div>
    )
  }
}