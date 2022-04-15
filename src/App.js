import "./App.css";
import { Navbar, Sidebar } from "./Components/index";
import { AppRouter } from "./Routes/AppRouter";

function App() {
  return (  
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <AppRouter/>
    </div>
  );
}

export default App;