import { Route, Routes} from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar } from "./Components/index";
import {VideoListing} from "./Page/index"

function App() {
  return (  
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element= {<VideoListing/>}/>
      </Routes>
    </div>
  );
}

export default App;