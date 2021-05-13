import React, {useCallback, useState} from 'react';
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";
import axios from "axios";
import {api} from "../congif/api";

const styles = {
  "margin-bottom": "25px"
}

const {url} = api

export default function Login() {
  // state = {
  //   password: ''
  // }

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [loginCreads, setLoginCreads] = useState({})

  const handleChangeLoginCreads = e => {
    e.preventDefault()
    loginCreads[e.target.name] = e.target.value
  }

  const inputLogin = useCallback(e => {
    e.preventDefault()
    setEmail({email: e.target.value})
  }, [email])

  const inputPassword = useCallback(e => {
    e.preventDefault()
    setPassword({password: e.target.value})
  }, [password])




  const isLogin = e => {
    e.preventDefault()
    console.log(1)
    console.log(this)
    const email = loginCreads.email
    const password = loginCreads.password

    if (email && password.length > 5) {
      const user = {
        email: email,
        password: password
      }
      axios.post(`${url}/signin`, user)
        .then(res => {
          this.props.isHandlerLogin()
          this.props.history.push('/')
        })
        .catch(err => {
          console.log(err)
          if ((err.response.status === 400) || (err.response.status === 500)) {
            alert('Неправильные логин или пароль!')
          }
        })
        .finally(() => setLoginCreads({}))
    }
  }

  return (
    <FormBlock type="submit" onSubmit={isLogin}>
      <h2>Добро пожаловать!</h2>
      <label htmlFor="email">
        <span>email</span>
        <Input placeholder="email" name="email" styles={styles} type="email" onChange={handleChangeLoginCreads}/>
      </label>
      <label htmlFor="password">
        <span>password</span>
        <Input placeholder="password" name="password" styles={styles} type="password" onChange={handleChangeLoginCreads}/>
      </label>
      <LargeButton forms={+true}>Войти</LargeButton>
    </FormBlock>
  );
}
