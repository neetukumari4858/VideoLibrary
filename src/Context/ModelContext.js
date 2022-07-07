import { createContext, useContext, useReducer } from 'react'
import { ModalReducer } from './../Reducers/ModelReducer'
import { useState } from 'react'
const ModalContext = createContext()
const useModal = () => useContext(ModalContext)
const ModalContextProvider = ({ children }) => {
  const [ModalState, Modaldispatch] = useReducer(ModalReducer, {
    openCloseModal: false,
    video: {},
  })
  const [playlistVideo, setplaylistVideo] = useState(null)

  return (
    <ModalContext.Provider
      value={{ ModalState, Modaldispatch, playlistVideo, setplaylistVideo }}
    >
      {children}
    </ModalContext.Provider>
  )
}
export { useModal, ModalContextProvider }
