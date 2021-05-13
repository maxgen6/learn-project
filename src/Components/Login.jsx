import React, {useState} from 'react';
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";
import axios from "axios";
import {api} from "../congif/api";

const styles = {
  "margin-bottom": "25px"
}

const {url} = api

export default function Login(props) {
  // state = {
  //   email: '',
  //   password: ''
  // }

  const [loginCreeds, setLoginCreeds] = useState({})

  const handlerLoginCreeds = e => {
    loginCreeds[e.target.name] = e.target.value
  }

  // inputLogin = e => {
  //   e.preventDefault()
  //   this.setState({ email: e.target.value})
  // }
  //
  // inputPassword = e => {
  //   e.preventDefault()
  //   this.setState({ password: e.target.value})
  // }

  const isLogin = e => {
    e.preventDefault()
    const email = loginCreeds.email
    const password = loginCreeds.password

    if (email && password.length > 5) {
      const user = {
        email: email,
        password: password
      }
      axios.post(`${url}/signin`, user)
        .then(res => {
          props.isHandlerLogin()
          props.history.push('/')
        })
        .catch(err => {
          if((err.response.status === 400) || (err.response.status === 500)) {
            alert('Неправильные логин или пароль!')
          }
        })
        .finally(() => setLoginCreeds({}))
    }
  }

    return (
      <FormBlock type="submit" onSubmit={isLogin}>
        <h2>Добро пожаловать!</h2>
        <label htmlFor="email">
          <span>email</span>
          <Input placeholder="email" name="email" styles={styles} type="email" onChange={handlerLoginCreeds}/>
        </label>
        <label htmlFor="password">
          <span>password</span>
          <Input placeholder="password" name="password" styles={styles} type="password" onChange={handlerLoginCreeds}/>
        </label>
        <LargeButton forms={+true} >Войти</LargeButton>
      </FormBlock>
    );
}
