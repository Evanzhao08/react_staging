import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
  // userRef = React.createRef()
  search = () => {
    //获取用户的输入
    const {
      KeyWordElement: { value: keyWord },
    } = this
    this.props.updateAppState({ isFirst: false, isLoading: true })
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      (response) => {
        this.props.updateAppState({
          users: response.data.items,
          isLoading: false,
        })
      },
      (error) => {
        this.props.updateAppState({ err: error.message, isLoading: false })
        console.log('失败了', error)
      }
    )
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => (this.KeyWordElement = c)}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
