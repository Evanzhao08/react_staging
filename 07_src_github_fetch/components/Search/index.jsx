// import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  // userRef = React.createRef()
  search = async () => {
    //获取用户的输入
    const {
      KeyWordElement: { value: keyWord },
    } = this
    PubSub.publish('githubSearch', { isFirst: false, isLoading: true })
    /*     axios.get(`/api1/search/users?q=${keyWord}`).then(
      (response) => {
        PubSub.publish('githubSearch', {
          users: response.data.items,
          isLoading: false,
        })
      },
      (error) => {
        PubSub.publish('githubSearch', { err: error.message, isLoading: false })
        console.log('失败了', error)
      }
    ) */
    //发送网络请求使用fetch发送
    /*   fetch(`/api1/search/users2?q=${keyWord}`)
      .then(
        (response) => {
          // console.log('联系服务器成功了', response, response.json())
          return response.json()
        },
        (error) => {
          console.log('联系服务器失败了', error)
        }
      )
      .then(
        (response) => {
          console.log('获取数据成功了', response)
        },
        (error) => {
          console.log('获取数据失败了', error)
        }
      ) */
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('githubSearch', {
        users: data.items,
        isLoading: false,
      })
    } catch (error) {
      PubSub.publish('githubSearch', { err: error.message, isLoading: false })
      console.log('请求出错', error)
    }
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
