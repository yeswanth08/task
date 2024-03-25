import { selector } from "recoil";
import { Task,List } from "../atmos/Todo"; 

export const setTask = selector({
    key: "setTask",
    get: (({get})=>{
        return get(Task)
    }),
    set:(({set},newtask)=>{
        set(Task,(prevtasks)=>[...prevtasks,newtask])
    })
})

export const setList = selector({
    key: "setList",
    get: (({get})=>{
        return get(List)
    }),
    set: (({set},newlist)=>{
        set(List,(prevlist)=>[...prevlist,newlist])
    })
})