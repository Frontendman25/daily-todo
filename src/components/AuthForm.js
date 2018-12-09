import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AuthForm extends Component {
  static propTypes = {
    prop: PropTypes.func
  }

  render() {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
      <div className="inputWrap">
        <input onChange={this.props.onChange} type="text" name="name"/>
        {this.props.errorName ? <span style={{marginTop: '5px', display: 'block', textAlign: 'center', fontSize: '10px', color: 'red'}}>{this.props.errorName}</span> : null}
      </div>
      <div className="inputWrap">
        <button type="submit">Войти</button>
      </div>
    </form>
    )
  }
}


// function AuthForm(props) {
//   return (
//     <form className="form" onSubmit={props.onSubmit}>
//       <div className="inputWrap">
//         <input onChange={props.onChange} type="text" name="name" ref={props.ref} />
//         {props.errorName ? <span style={{marginTop: '5px', display: 'block', textAlign: 'center', fontSize: '10px', color: 'red'}}>{props.errorName}</span> : null}
//       </div>
//       <div className="inputWrap">
//         <button type="submit">Войти</button>
//       </div>
//     </form>
//   )
// }

// AuthForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired
// }

// export default AuthForm

