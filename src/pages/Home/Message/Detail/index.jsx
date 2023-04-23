import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'

function myWithRouter(Detail) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    //  const [searchParams] = useSearchParams()
    let location = useLocation()
    /*
      这里写成 location.state || {}
      因为state在刷新后可能为空，所以这里为空时设置为空对象
    */
    const stateObj = location.state || {}
    const params = {
      id: stateObj.id,
      title: stateObj.title,
    }
    return <Detail {...props} params={params} />
  }
}

const DetailData = [
  { id: '01', content: 'aaaaaaa' },
  { id: '02', content: 'bbbbbbb' },
  { id: '03', content: 'ccccccc' },
]
class Detail extends Component {
  render() {
    const { id, title } = this.props.params
    const findResult =
      DetailData.find((item) => {
        return item.id === id
      }) || {} //这里 || {} 当未找到匹配的值时contentStr设置为空对象
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
