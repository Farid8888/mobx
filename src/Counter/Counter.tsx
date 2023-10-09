import React from 'react'
import {COUNT} from '../types/type'
// import {observer} from 'mobx-react-lite'
// import PostsConsctructor from '../store/counter'
// const counter = new PostsConsctructor()
const Counter:React.FC<COUNT>=(props)=> {

  return (
    <div style={{textAlign:'center'}}>
      <div>{props.count}</div>
      <div>{props.total}</div>
      <button onClick={()=>props.increment(1)}>+</button>
      <button onClick={()=>props.decrement(1)}>-</button>
    </div>
  )
}

export default Counter
