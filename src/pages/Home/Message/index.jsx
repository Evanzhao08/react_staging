import React, { Component } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function anonyCom(MessCom) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    let navigate = useNavigate()
    return <MessCom props={props} navigate={navigate} />
  }
}

class Message extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  }
  replaceShow = (msgObj) => {
    this.props.navigate(`/home/message/detail`, {
      replace: true,
      state: {
        id: msgObj.id,
        title: msgObj.title,
      },
    })
    console.log(this.props.navigate)
  }
  pushShow = (msgObj) => {
    this.props.navigate(`/home/message/detail`, {
      push: true,
      state: {
        id: msgObj.id,
        title: msgObj.title,
      },
    })
    console.log(this.props, msgObj)
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
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}
                {/* 向路由组件传递search参数 */}
                {/* <Link
                  to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                <Link
                  to="/home/message/detail"
                  replace
                  state={{
                    id: msgObj.id,
                    title: msgObj.title,
                  }}>
                  {msgObj.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(msgObj)
                  }}>
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(msgObj)
                  }}>
                  replace查看
                </button>
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

export default anonyCom(Message)
