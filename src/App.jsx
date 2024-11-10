import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Mainsection from "./components/mainPage/Mainsection";
function App() {
  const [state, changeState] = useState();
  return (
    <div className="w-screen h-screen flex overflow-x-hidden">
      <Sidebar
        state={state}
        change={changeState}
        className="w-1/5 fixed h-full "
      ></Sidebar>
      <div className="w-full md:ml-52">
        <Mainsection change={changeState} state={state}></Mainsection>
      </div>
    </div>
  );
}

export default App;
