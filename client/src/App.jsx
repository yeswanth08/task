import { Suspense, lazy } from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const Singup = lazy(()=>import("./components/Signup.jsx"));
const Header = lazy(()=>import("./components/Header.jsx"));
const Login = lazy(()=>import("./components/Login.jsx"));
const Dashboard = lazy(()=>import("./components/Dashboard.jsx"))
const Task = lazy(()=>import("./components/Task.jsx"));
const List = lazy(()=>import("./components/List.jsx"));

// as it is the parent compoenent we declare here then we use link to reredner the components

export default function App(){
    return(
        <RecoilRoot>
        <BrowserRouter>
            <Routes>
                <Route path="/header" element={<Suspense fallback={<center><div>loading...</div></center>}><Header/></Suspense>}/>
                <Route path="/signup" element={<Suspense fallback={<center><div>loading...</div></center>}><Singup/></Suspense>}/>
                <Route path="/" element={<Suspense fallback={<center><div>loading...</div></center>}><Login/></Suspense>}/>
                <Route path="/app" element={<Suspense fallback={<center><div>loading...</div></center>}><Dashboard/></Suspense>}/>
                <Route path="/tasks" element={<Suspense fallback={<center><div>loading...</div></center>}><Task/></Suspense>}/>
                <Route path="/lists" element={<Suspense fallback={<center><div>loading...</div></center>}><List/></Suspense>}/>
            </Routes>
        </BrowserRouter>
        </RecoilRoot>
    )
}