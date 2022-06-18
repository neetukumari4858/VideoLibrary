import { useState } from 'react'
import { useModal } from './../../Context/ModelContext'
import { usePlayList } from '../../Context/PlayListContext'
import { useAuth } from '../../Context/index'
import './Modal.css'
import { createPlaylist, addVideoToPlaylist ,deletePlaylist} from './../../services/index'

const Modal = () => {
  const { ModalState, Modaldispatch } = useModal()
  const { video } = ModalState

  const { Playlist, PlayListDispatch } = usePlayList()

  const { playlists } = Playlist
  const [titleName, setTitle] = useState({ title: '' })
  const { userDetail } = useAuth()
  const { token } = userDetail

  const ChangeHandler = (e) => {
    setTitle({ ...titleName, title: e.target.value })
  }

  const playListCheckHandler = (_id) => {
    addVideoToPlaylist(_id, video, token, PlayListDispatch)
  }

  const checkPlaylist = (title) => {
    if (playlists?.find((item) => item.title === title)) {
      alert('Playlist already exist')
    } else if (title === '') {
      alert('Please Enter Playlist Name')
    } else {
      return true
    }
  }

  const createPlaylistHandler = () => {
    if (checkPlaylist(titleName.title)) {
      createPlaylist(titleName, PlayListDispatch, token, video)
    }
    setTitle({ ...titleName, title: '' })
  }

  const checkVideoInPlaylist = (_id) => {
    const playlist = playlists.find((item) => item._id === _id)
    return playlist.videos.some((item) => item._id === video._id)
  }

  return (
    <div className="ModalDiv">
      <div className="ModalHeader">
        <h5>Create New Playlist</h5>
        <i
          onClick={() =>
            Modaldispatch({
              type: 'Modal',
              payload: { status: false, video: {} },
            })
          }
          className="fa fa-close"
        ></i>
      </div>
      <hr></hr>

      {playlists?.map((play) => {
        return (
          <div className="checkboxDiv" key={play?._id}>
            <label htmlFor={play?._id} className="PlayListcheckbox">
              <input
                id={play?._id}
                type="checkbox"
                checked={checkVideoInPlaylist(play?._id)}
                onChange={(e) => playListCheckHandler(play._id)}
              />
              {play.title}
            </label>
          </div>
        )
      })}
      <input
        value={titleName.title}
        className="playlistInput"
        onChange={ChangeHandler}
        placeholder="Create new playlist"
      />
      <div className="createText">
        <h5 onClick={createPlaylistHandler}>Create</h5>
      </div>
    </div>
  )
}
export { Modal }
