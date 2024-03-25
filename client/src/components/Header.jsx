import { useRecoilValue} from 'recoil'
import {username} from "../store/atmos/Details.jsx"
import { useNavigate } from 'react-router-dom'
import '../index.css'


export default function App(){
    return(
        <Header/>
    )
}

function Header(){
    const Username = useRecoilValue(username);
    const navigate = useNavigate();
    const value = `let's schedule`;

    const login = () => {
        navigate("/");
    }

    return(
        <div className='flex justify-spacebetween border-2 py-1'>
        <button onClick={login} className='px-10 py-2 rounded-xl border-2 bg-rose-500 text-white'>Logout</button>
        <div className='px-14 mx-24 pt-2'>
            {value}
        </div>
            <img src="../assets/profile.png" alt="profile" className='w-10 ml-96'/>
            <div className='ml-8 pt-4'>hello {Username} ...</div>
        </div>
    )
}