import React, { Component } from 'react'
import './App.css'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,
    err: '',
  } //初始化状态，usrs初始值为数组
  updateAppState = (stateObj) => {
    this.setState({
      ...this.state,
      ...stateObj,
    })
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }
}
