/**
 * hold the state variable of the details of the user
 * atom --> state variable 
 * selector --> setfunction/updater functions
 */

import {atom} from "recoil";

export const username = atom({
    key: "username",
    default: ""
})

export const password = atom({
    key: "password",
    default: ""
})

