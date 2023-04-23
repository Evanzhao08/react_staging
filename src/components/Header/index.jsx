import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

function anonyHeader(MessCom) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    let navigate = useNavigate()
    return <MessCom props={props} navigate={navigate} />
  }
}
class Header extends Component {
  back = () => {
    console.log(this.props.navigate)
    this.props.navigate(-1)
  }
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}

export default anonyHeader(Header)
