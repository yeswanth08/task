/**
 * high level --> this holds the login form of the website
 */

import { memo} from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { username,password } from "../store/atmos/Details.jsx"
import { setusername,setpassword } from "../store/selectors/Details.jsx"
import { Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import "../index.css"

const validate = "http://localhost:3001/api-auth"

export default function App(){
    return(
        <Display/>
    )
}

// child components

// we need a wrapper components bcs we need recoilroot to rerender the recoil terms

function Display(){
    return (
        <>
            <Login/>
        </>
    )
}

const Login  = memo(function Login(){
    const Username = useRecoilValue(username);
    const Password = useRecoilValue(password);
    const Setusername = useSetRecoilState(setusername);
    const Setpassword = useSetRecoilState(setpassword);
    const navigate = useNavigate();

    const handleusername =  (e) =>{
         Setusername(e.target.value);
    }
    const handlepassword =  (e) =>{
         Setpassword(e.target.value);
    }
    const sendtobackend = async () =>{
        const response = await axios.post(validate,{
            username: Username,
            password: Password
        });
        if (response['data'] === 'invalid user'){
            window.alert('Invalid user credentials')
        }else if (response['data'] === 'user not found'){
            window.alert('you are not a registered user');
        }else{
            navigate("/app");
        }
    }
    return(
        <div className="flex justify-spacebetween mt-36">
            <div className="border-2 pt-6 ml-52 px-2 ">
                <div className="pl-20">Credentials</div> <br />
                <input type="text" placeholder="Enter the username" id="username" value={Username} onChange={handleusername} required className="w-64 h-10 border-2 border-black rounded-xl hover:border-green-500 placeholder-sky-500 hover:placeholder-white pl-4 mb-4"></input> <br />
                <input type="text" placeholder="Enter the password" id="password" value={Password} onChange={handlepassword} required className="w-64 h-10 border-2 border-black rounded-xl hover:border-green-500 placeholder-sky-500 hover:placeholder-white pl-4 mb-6"></input> <br />
                <button onClick={sendtobackend} className="w-32 h-8 ml-14 border-2 rounded-xl border-black text-white bg-sky-500 hover:bg-green-500">Login</button>
                <p className="px-12 py-2 ">new user ? <Link to={'/signup'} className="text-black underline hover:text-green-500">Signup</Link> </p>
            </div>
            <div className="w-64 ml-64">
                <img src="../assets/Data_security_05.jpg" alt="Login"/>
            </div>
        </div>
    )
})
