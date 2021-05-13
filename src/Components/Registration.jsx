import React, {useState} from 'react';
import axios from "axios";
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";
import {api} from "../congif/api";

const styles = {
  "margin-bottom": "25px"
}

const {url} = api

export default function Registration(props) {
  // state = {
  //     email: '',
  //     password: ''
  // }

  const [registrationCreedsInfo, setRegistrationCreads] = useState({})

  const handleRegistrationCreeds = e => {
    registrationCreedsInfo[e.target.name] = e.target.value
  }

  const submitForm = e => {
    e.preventDefault()
    const email = registrationCreedsInfo.email
    const password = registrationCreedsInfo.password

    if (email && password.length > 5) {
      const user = {
        email: email,
        password: password
      }

      axios.post(`${url}/signup`, user)
        .then(res => {
          props.history.push('/')
        })
        .catch(err => {
          if (err.response.status === 409) {
            alert('Такой email уже зарегистрирован')
          } else if (err.response.status === 400) {
            alert('Неккоретный email, попробуйте еще раз!')
          }
        })
    }
  }

  // inputLogin = e => {
  //     e.preventDefault()
  //     this.setState({ email: e.target.value })
  // }
  //
  // inputPassword = e => {
  //     e.preventDefault()
  //     this.setState({ password: e.target.value })
  // }


  return (
    <FormBlock type="submit" onSubmit={submitForm}>
      <h2>Добро пожаловать!</h2>
      <label htmlFor="email">
        <span>email</span>
        <Input placeholder="email" name="email" type="email" styles={styles} onChange={handleRegistrationCreeds}/>
      </label>
      <label htmlFor="password">
        <span>password</span>
        <Input placeholder="password" name="password" type="password" styles={styles} onChange={handleRegistrationCreeds}/>
      </label>
      <LargeButton forms={+true}>Регистрация</LargeButton>
    </FormBlock>
  );
}
