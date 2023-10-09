import {makeAutoObservable,runInAction} from 'mobx'
import {IPromiseBasedObservable,fromPromise} from 'mobx-utils'
import {POST} from '../types/type'
import {sendRequest} from '../api/api'

class PostConstructor{
    posts?:IPromiseBasedObservable<POST[]>
    // posts:POST[] = []
    // loading = false
    // error=''
    constructor(){
        makeAutoObservable(this)
    }

    getPosts =()=>{
        this.posts = fromPromise(sendRequest())
    }
//    getPosts=async()=>{
//     try{
//         this.loading =true
//         const data = await sendRequest()
//         runInAction(()=>{
//             this.posts = data
//             this.loading = false
//         })
//     }catch(e:any){
//        this.error = e.message
//     }
//    }
}

export default new PostConstructor()