/**
 * tasks --> atom which holds an array of the tasks 
 */

import {atom} from 'recoil'

export const Task = atom({
    key: "Task",
    default: ["doing homework","walking"]
})

export const List = atom({
    key: "List",
    default: ["maths homewok form 6pm-7pm","walking in park from 6am-7am"]
})