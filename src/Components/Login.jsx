import React, {Component} from 'react';
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";

const styles = {
    "margin-bottom": "25px"
}

export default class Login extends Component {
    state = {
        login: '',
        password: ''
    }

    inputLogin = e => {
        e.preventDefault()
        this.setState({ login: e.target.value})
    }

    inputPassword = e => {
        e.preventDefault()
        this.setState({ password: e.target.value})
    }

    isLogin = e => {

        e.preventDefault()
        const login = this.state.login
        const password = this.state.password
        if(login === 'qwe@mail.ru' && password === '123') {
            this.props.isHandlerLogin()
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <FormBlock type="submit" onSubmit={this.isLogin}>
                <h2>Добро пожаловать!</h2>
                <label htmlFor="email">
                    <span>email</span>
                    <Input placeholder="email" styles={styles} type="email" onChange={this.inputLogin}/>
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <Input placeholder="password" styles={styles} type="password" onChange={this.inputPassword}/>
                </label>
                <LargeButton forms={+true} >Войти</LargeButton>
            </FormBlock>
        );
    }
}
