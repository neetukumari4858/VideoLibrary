import "./App.css";
import { Navbar, Sidebar } from "./Components/index";
import { AppRouter } from "./Routes/AppRouter";
import { Modal } from "./Components/Modal/Modal";
import {useModal} from "./Context/ModelContext"

function App() {
  const  {ModalState} = useModal()
  const {openCloseModal}=ModalState
  return ( 
    <>
      {openCloseModal && <Modal />}
      <div className="App">
        <Navbar/>
        <Sidebar/>
        <AppRouter/>
      </div>
    </>
  );
}

export default App;