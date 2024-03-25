import { selector } from "recoil";
import { username,password} from "../atmos/Details.jsx";

export const setusername = selector({
    key: "setusername",
    get: (({get}) => {
        return get(username)
    }),
    set: (({set},newvalue) => {
        set(username,newvalue)
    })
})

export const setpassword = selector({
    key: "setpassword",
    get: (({get})=>{
        return get(password)
    }),
    set: (({set},newvalue)=>{
        set(password,newvalue)
    })
})
