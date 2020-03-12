import React from 'react'
import store from 'store'
import Login from 'app/auth/components/Login'
import Home from 'app/dashboard/components/Home'
import {Provider} from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import 'resources/App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
