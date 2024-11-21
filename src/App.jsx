import "./App.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <div className="App">
          <Helmet>
            <title>Todo List </title>
          </Helmet>
        </div>

        <div className="sidebar w-1/6 min-h-screen max-h-full p-2">
          <SideBar />
        </div>
        <div className="main w-5/6 min-h-screen max-h-full p-2">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
