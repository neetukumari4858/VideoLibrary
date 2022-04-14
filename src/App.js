import "./App.css";
import {Navbar} from "./Components/Navigation/Navbar"
import {Sidebar} from "./Components/Sidebar/Sidebar"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;