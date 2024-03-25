import { lazy } from "react";
import { useRecoilValue } from "recoil";
import { Task, List } from "../store/atmos/Todo.jsx";
import { useNavigate } from "react-router-dom";

const Header = lazy(() => import("./Header.jsx"));

export default function App() {
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

function Card() {
    const tasks = useRecoilValue(Task);
    const lists = useRecoilValue(List);
    const navigate = useNavigate();

    const addtask = ()=>{
        navigate("/tasks")
    }
    const addlist = ()=>{
        navigate("/lists")
    }

  return (
    <>
      <div className="flex justify-center">
      <div className="border-2 w-5/6 h-96 mt-4 flex justify-spacebetween">
          <div className="border-b-2 w-96 h-full text-center">
            <div className="flex justify-center border-2">Task</div>
            <div id="taskspace" className="flex flex-col items-center">
              {tasks.map((task) => (
                <div key={task} className="border-2 w-96 p-2 mt-2">
                  {task}
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 w-full h-full">
            <div className="flex justify-center border-2">List</div>
            <div id="listspace" className="flex flex-col items-center">
              {lists.map((list) => (
                <div key={list} className="border-2 w-96 p-2 mt-2">
                  {list}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-evenly">
            <button onClick={addtask} className="border-2 rounded-xl py-2 px-4 w-32 mr-44 bg-green-500 text-white hover:text-black">Add Task</button>
            <button onClick={addlist} className="border-2 rounded-full px-4 ml-96 bg-green-500 text-white hover:text-black">+</button>
        </div>
    </>
  );
}
