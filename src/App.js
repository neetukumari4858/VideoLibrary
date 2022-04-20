import "./App.css";
import { Navbar, Sidebar } from "./Components/index";
import { AppRouter } from "./Routes/AppRouter";
import { Model } from "./Components/Model/Model";
import {useModel} from "./Context/ModelContext";

function App() {
  const  {modelState} = useModel()
  const {openCloseModel}=modelState
  return ( 
     <>
      {openCloseModel && <Model />}
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <AppRouter/>
      </div>
     </>
    
  );
}

export default App;