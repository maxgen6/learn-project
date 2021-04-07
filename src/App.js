import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {AppWrapper} from "./blocks/AppWrapper";
import Header from "./Components/Header";
import {Container} from "./blocks/Container";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Main from "./Components/Main";


export default class App extends Component{
    state = {
        isLogin: localStorage.getItem('login') || false
    }

    isHandlerLogin = () => {
        this.setState({ isLogin: true})
        localStorage.setItem('login', 'true')
    }

    isLogout = () => {
        this.setState({ isLogin: false })
        localStorage.removeItem('login')
    }

    render() {
        return (
            <AppWrapper>
                <Header isLogin={this.state.isLogin} isLogout={this.isLogout}/>
                <Container>
                    <Switch>
                        <Route path="/" exact
                               render={() => this.state.isLogin ? <Main /> : <Redirect to="/login" /> }
                        />
                        <Route
                            path="/login"
                            render={(props) => this.state.isLogin ?
                                <Redirect to="/" /> : <Login isHandlerLogin={this.isHandlerLogin} {...props}/> }
                        />
                        <Route
                            path="/registration"
                            render={() => <Registration />}
                        />
                    </Switch>
                </Container>
            </AppWrapper>
        );
    }
}


