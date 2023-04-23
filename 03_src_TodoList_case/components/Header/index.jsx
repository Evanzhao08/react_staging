/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  handleKeyUp = (e) => {
    console.log(e.keyCode)
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    this.props.addToDo({ id: nanoid(), name: target.value, done: false })
    e.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyDown={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
