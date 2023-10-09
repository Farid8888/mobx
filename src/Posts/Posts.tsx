import React,{useEffect} from 'react'
import PostConstructor from '../store/posts'
import {observer} from 'mobx-react-lite'
import {toJS} from 'mobx'
import {useStore} from '../store/contextStore'

// const postcl = new PostConstructor()

const Posts=observer(()=> {
    const {post:{posts,getPosts}} = useStore()
    
    // const {posts,getPosts} = PostConstructor
    // console.log(posts)
    // const posts = toJS(postcl.posts)
    // const getPosts = postcl.getPosts
    useEffect(()=>{
      getPosts()
    },[])
    // if(postcl.loading){
    //     return <div style={{textAlign:'center'}}>...Loading</div>
    // }
//     if(posts?.state === 'pending'){
//         return <div style={{textAlign:'center'}}>...Loading</div>
//     }
//     if(posts?.state === 'rejected'){
//         return <div>error</div>
//     }
//   return (
//     <div style={{textAlign:'center'}}>
//       {posts?.value.map(item=>{
//         return <div key={item.id}>{item.title}</div>
//       })}
//     </div>
//   )

if(!posts){
    return null
}
return posts?.case({
pending:()=><div>...Loading</div>,
rejected:()=><div>error</div>,
fulfilled:(value)=>{
   return( <div style={{textAlign:'center'}}>
      {value.map(item=>{
        return <div key={item.id}>{item.title}</div>
      })}
    </div>
   )
}
})
})

export default Posts
