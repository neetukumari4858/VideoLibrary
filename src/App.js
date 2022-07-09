import './App.css'
import { Navbar } from './Components/index'
import { AppRouter } from './Routes/AppRouter'
import { Modal } from './Components/Modal/Modal'

import { useModal } from './Context/ModelContext'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const { ModalState } = useModal()
  const { openCloseModal } = ModalState
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      {openCloseModal && <Modal />}
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </>
  )
}

export default App
