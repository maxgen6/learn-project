import React, {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {AppWrapper} from "./blocks/AppWrapper";
import Header from "./Components/Header";
import {Container} from "./blocks/Container";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Main from "./Components/Main";


export default function App() {
  // state = {
  //   isLogin: localStorage.getItem('login') || false
  // }

  const [isLogin, setIsLogin] = useState(localStorage.getItem('login') || false)

  const isHandlerLogin = () => {
    setIsLogin(true)
    // this.setState({isLogin: true})
    localStorage.setItem('login', 'true')
  }

  const isLogout = () => {
    setIsLogin(false)
    // this.setState({isLogin: false})
    localStorage.removeItem('login')
  }

    return (
      <AppWrapper>
        <Header isLogin={isLogin} isLogout={isLogout}/>
        <Container>
          <Switch>
            <Route path="/" exact
                   render={() => isLogin ? <Main/> : <Redirect to="/login"/>}
            />
            <Route
              path="/login"
              render={(props) => isLogin ?
                <Redirect to="/"/> : <Login isHandlerLogin={isHandlerLogin} {...props}/>}
            />
            <Route
              path="/registration"
              render={(props) => <Registration isHandlerLogin={isHandlerLogin} {...props}/>}
            />
          </Switch>
        </Container>
      </AppWrapper>
    );
}


