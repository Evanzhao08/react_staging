import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllToDo(e.target.checked)
  }
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((prev, cur) => prev + (cur.done ? 1 : 0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === todos.length}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
