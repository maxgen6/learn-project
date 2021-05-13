import React, {Component} from 'react';
import axios from "axios";
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";
import {api} from "../congif/api";

const styles = {
    "margin-bottom": "25px"
}

const {url} = api

export default class Registration extends Component {
    state = {
        email: '',
        password: ''
    }

    submitForm = e => {
        e.preventDefault()
        const email = this.state.email
        const password = this.state.password

        if(email && password.length > 5) {
            const user = {
                email: email,
                password: password
            }

            axios.post(`${url}/signup`, user)
                .then(res => {
                    this.props.history.push('/')
                })
                .catch(err => {
                    if(err.response.status === 409){
                        alert('Такой email уже зарегистрирован')
                    } else if (err.response.status === 400) {
                        alert('Неккоретный email, попробуйте еще раз!')
                    }
                })
        }
    }

    inputLogin = e => {
        e.preventDefault()
        this.setState({ email: e.target.value })
    }

    inputPassword = e => {
        e.preventDefault()
        this.setState({ password: e.target.value })
    }


    render() {
        return (
            <FormBlock type="submit" onSubmit={this.submitForm}>
                <h2>Добро пожаловать!</h2>
                <label htmlFor="email">
                    <span>email</span>
                    <Input placeholder="email" type="email" styles={styles} onChange={this.inputLogin} />
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <Input placeholder="password" type="password" styles={styles} onChange={this.inputPassword} />
                </label>
                <LargeButton forms={+true}>Регистрация</LargeButton>
            </FormBlock>
        );
    }
}
