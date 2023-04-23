import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import News from './pages/Home/News'
import Message from './pages/Home/Message'
import Detail from './pages/Home/Message/Detail'

export default class App extends Component {
  render () {
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
              <MyNavLink to="about">About</MyNavLink>
              <MyNavLink to="home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="about" element={<About />} />
                  <Route path="/home/*" element={<Home />}>
                    <Route path="news" element={<News />} />
                    <Route path="message" element={<Message />} >
                      {/* 声明接收params参数 */}
                      <Route path="detail/:id/:title" element={<Detail />} />
                      {/* search参数 无需声明接收*/}
                      {/* <Route path='detail' element={<Detail />} /> */}
                    </Route>
                    <Route path="*" element={<Navigate to="/home/news" />} />
                  </Route>
                  <Route path="*" element={<Navigate to="/about" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
