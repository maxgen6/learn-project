import React, {Component} from 'react';
import {FormBlock} from "../blocks/FormBlock";
import {Input} from "../blocks/Input";
import {LargeButton} from "../blocks/Button";

const styles = {
    "margin-bottom": "25px"
}

export default class Registration extends Component {
    render() {
        return (
            <FormBlock>
                <h2>Добро пожаловать!</h2>
                <label htmlFor="email">
                    <span>email</span>
                    <Input placeholder="email" styles={styles}/>
                </label>
                <label htmlFor="password">
                    <span>password</span>
                    <Input placeholder="password" styles={styles}/>
                </label>
                <LargeButton forms={+true}>Регистрация</LargeButton>
            </FormBlock>
        );
    }
}
