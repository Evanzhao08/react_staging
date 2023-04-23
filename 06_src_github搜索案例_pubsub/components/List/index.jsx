import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {
  state = {
    users: [],
    isFirst: true, //是否为第一次打开页面
    isLoading: false,
    err: '',
  } //初始化状态，usrs初始值为数组

  componentDidMount = () => {
    this.token = PubSub.subscribe('githubSearch', (_, stateObj) => {
      this.setState({
        ...this.state,
        ...stateObj,
      })
    })
  }

  componentWillUnmount = () => {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {isFirst ? (
          <h2>Welcome, enter the keyword, then click search</h2>
        ) : isLoading ? (
          <h2>Loading......</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          users.map((item) => {
            return (
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    alt="head_portrait"
                    src={item.avatar_url}
                    style={{ width: '100px' }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
