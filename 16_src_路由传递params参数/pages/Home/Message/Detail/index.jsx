import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

function myWithRouter(Detail) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return <Detail {...props} params={useParams()} />
  }
}

const DetailData = [
  { id: '01', content: 'aaaaaaa' },
  { id: '02', content: 'bbbbbbb' },
  { id: '03', content: 'ccccccc' },
]
class Detail extends Component {
  render() {
    console.log(this.props)
    const { id, title } = this.props.params
    const findResult = DetailData.find((item) => {
      return item.id === id
    })
    console.log(DetailData, this.props.params.id)
    return (
      <div>
        <li>ID:{id}</li>
        <li>TLTLE:{title}</li>
        <li>{findResult.content}</li>
      </div>
    )
  }
}

export default myWithRouter(Detail)
