import React from 'react'
import store from './store'
import Login from './app/auth/components/Login'
import Authentication from './app/auth/components/Authentication'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import './resources/App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/dashboard">
              <Authentication />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
