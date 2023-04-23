import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="router/about">About</MyNavLink>
              <MyNavLink to="router/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="router/about" element={<About />} />
                  <Route path="router/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
