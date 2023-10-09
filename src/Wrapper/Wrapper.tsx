import React from 'react'
import CountConstructor from '../store/counter'
import {observer} from 'mobx-react-lite'
import Counter from '../Counter/Counter'
import Posts from '../Posts/Posts'
import {useStore} from '../store/contextStore'

// const counter1 = new CountConstructor()
// const counter2 = new CountConstructor()

const Wrapper=observer(()=> {
    const {count} = useStore()
    // const counter1 = CountConstructor
//    const counter2 = CountConstructor
  return (
    <div>
      <Counter {...count} total={count.total}/>
      {/* <Counter {...counter2} total={counter2.total}/> */}
      <Posts/>
    </div>
  )
})

export default Wrapper
