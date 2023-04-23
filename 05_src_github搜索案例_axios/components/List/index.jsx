import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    console.log(users, isFirst, isLoading, err)
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
