import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./Components/index";
import {VideoListing ,Login} from "./Page/index"
import { SignUp } from "./Page/SignUpPage/SignUp";

function App() {
  return (  
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element= {<VideoListing/>}/>
        <Route path="/loginPage" element= {<Login/>}/>
        <Route path="/SignUpPage" element= {<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;