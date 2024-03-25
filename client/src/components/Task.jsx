import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil";
import { setTask } from "../store/selectors/Todo.jsx"
import { useState } from "react";
import "../index.css"

export default function App(){
    return(
        <Box/>
    )
}


function Box(){
    const navigate = useNavigate();
    const [state,settask] = useState();
    const st = useSetRecoilState(setTask);

    const setstate = (e)=>{
        settask(e.target.value);
    }
    const shift = ()=>{
        navigate('/app')
    }
    const create = ()=>{
        if (state.length>0){st(state)}
        navigate('/app')
    }
    return(
        <div className="border-2 mx-96 my-48 ">
            <h3 className="mx-44 pt-2">Create a New Task...</h3>
            <input type="text" value={state} onChange={setstate} placeholder="Enter the Task Name" className="w-64 h-8 border-2 border-black rounded-xl placeholder-sky-500 hover:placeholder-white px-8 mx-32 my-4"/>
            <div className="flex justify space-between px-64 py-2">
                <button onClick={shift} className="border-2 rounded-xl px-4 mr-8 pb-1 hover:bg-rose-500 hover:text-white">cancle</button>
                <button onClick={create} className="border-2 rounded-xl px-6 mr-8 pb-1 bg-green-500 text-white hover:text-black" type="submit">create</button>
            </div>
        </div>
    )
}