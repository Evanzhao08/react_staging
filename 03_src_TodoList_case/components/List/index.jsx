import React, { Component } from 'react'
import ProTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static proTypes = {
    todos: ProTypes.array.isRequired,
    updateToDo: ProTypes.func.isRequired,
    deleteToDo: ProTypes.func.isRequired,
  }
  render() {
    const { todos, updateToDo, deleteToDo } = this.props
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateToDo={updateToDo}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ul>
    )
  }
}
