import React, {Component} from 'react';
import axios from "axios";
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";

const styles = {
    "margin-bottom": "25px"
}

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

            axios.post('https://rude-panda-17.loca.lt/signup', user)
                .then(res => {
                    console.log(res.status)
                    console.log(res.data)
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
