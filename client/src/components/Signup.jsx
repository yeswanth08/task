/**
 * high level --> landing page and signup validation
 */

import { memo } from "react";
import { username,password } from "../store/atmos/Details";
import { setpassword,setusername } from "../store/selectors/Details";
import { RecoilRoot,useRecoilValue, useSetRecoilState } from "recoil";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css"

const create =  "http://localhost:3001/api-create"

export default function App(){
    return(
        <RecoilRoot>
            <Display/>
        </RecoilRoot>
    )
}

function Display(){
    return(
        <Signup/>
    ) 
}


const Signup = memo(function Signup(){
    const Username = useRecoilValue(username);
    const Password = useRecoilValue(password);
    const Setusername = useSetRecoilState(setusername);
    const Setpassword = useSetRecoilState(setpassword);
    const navigate = useNavigate();

    const handleusername = async (e) =>{
        await Setusername(e.target.value);
    }
    const handlepassword  = async (e) =>{
        await Setpassword(e.target.value);
    }

    const sendtobackend = async () =>{
        const response  =  await axios.post(create,{
            username:Username,
            password:Password
        });
        if (response['data'] === 'existing user'){
            window.alert('you are already an existing user')
        }else{
            navigate("/app");
        }
    }

    return (
            <div className="flex justify-spacebetween mt-36">
            <div className="border-2 pt-6 ml-52 px-2 ">
                <div className="pl-20">Credentials</div> <br />
                <input type="text" placeholder="Enter the username" id="username" value={Username} onChange={handleusername} className="w-64 h-10 border-2 border-black rounded-xl hover:border-green-500 placeholder-sky-500 hover:placeholder-white pl-4 mb-4" required ></input> <br />
                <input type="text" placeholder="Enter the password" id="password" value={Password} onChange={handlepassword} className="w-64 h-10 border-2 border-black rounded-xl hover:border-green-500 placeholder-sky-500 hover:placeholder-white pl-4 mb-6" required></input> <br />
                <button type="submit" onClick={sendtobackend} className="w-32 h-8 mx-14 border-2 rounded-xl border-black text-white bg-sky-500 hover:bg-green-500">Signup</button>
                <p className="pl-12 mt-2">
                    existing user? <Link to={'/login'} className="text-black hover:text-green-500 underline">Login</Link>
                </p>
            </div>
            <div className="w-64 ml-64">
                <img src="../assets/Data_security_05.jpg" alt="Login"/>
            </div>
        </div>
    )
})

