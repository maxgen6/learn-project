import React from 'react';
import {HeaderBlock} from "../blocks/HeaderBlock";
import {Button} from "../blocks/Button";
import {NavLink} from "react-router-dom";


const Header = props => {
    return (
        <HeaderBlock>
            {props.isLogin ?
                <NavLink to="/login"><Button onClick={() => props.isLogout()}>Выйти</Button></NavLink>
                :
                <>
                    <NavLink to="/registration"><Button margin="10px">Регистрация</Button></NavLink>
                    <NavLink to="/login"><Button>Войти</Button></NavLink>
                </>
            }
        </HeaderBlock>
    );
};

export default Header;