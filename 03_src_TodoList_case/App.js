import React, { Component } from 'react'

import { nanoid } from 'nanoid'
import ProTypes from 'prop-types'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

import './App.css'

export default class App extends Component {
  static proTypes = {
    addToDo: ProTypes.func.isRequired,
  }
  state = {
    todos: [
      { id: nanoid(), name: '吃饭', done: true },
      { id: nanoid(), name: '睡觉', done: true },
      { id: nanoid(), name: '敲代码', done: false },
      { id: nanoid(), name: '开车', done: true },
    ],
  }

  addToDo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    })
  }
  updateToDo = (id, done) => {
    console.log(id, done)
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }
  deleteToDo = (id) => {
    const { todos } = this.state
    if (todos.length <= 1) return
    // const newTodos = todos.filter((todo) => todo.id !== id)
    this.setState({ todos: todos.filter((todo) => todo.id !== id) })
  }

  checkAllToDo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return { ...todo, done }
    })
    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addToDo={this.addToDo} />
          <List
            todos={todos}
            updateToDo={this.updateToDo}
            deleteToDo={this.deleteToDo}
          />
          <Footer
            todos={todos}
            checkAllToDo={this.checkAllToDo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    )
  }
}
