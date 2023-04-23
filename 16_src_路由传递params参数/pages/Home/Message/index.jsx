import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}
              </li>
            )
          })}
        </ul>
        <hr></hr>
        <Outlet />
      </div>
    )
  }
}

export default Message
