

export type COUNT={
    count:number,
    increment:(value:number)=>void
    decrement:(value:number)=>void
    total:number
}

export type POST = {
    iserId:number,
    id:number,
    title:string,
    body:string
}