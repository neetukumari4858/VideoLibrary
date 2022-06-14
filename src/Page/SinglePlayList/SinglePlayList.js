import { useParams } from 'react-router-dom'
import { usePlayList, useAuth } from './../../Context/index'

import {
  deleteVideoFromPlaylist,
  getSinglePlaylist,
} from './../../services/index'
import './SinglePlayList.css'
import { useState, useEffect } from 'react'

const SinglePlayList = () => {
  const { Playlist, PlayListDispatch } = usePlayList()
  const { playlistId } = useParams()
  const [playlistVideo, setplaylistVideo] = useState(null)

  const { userDetail } = useAuth()
  const { token } = userDetail

  useEffect(() => getSinglePlaylist(token, setplaylistVideo, playlistId), [])

  const deleteVideoHandler = (_id) => {
    deleteVideoFromPlaylist(_id, playlistId, token, PlayListDispatch)
    getSinglePlaylist(token, setplaylistVideo, playlistId)
  }

  console.log(playlistVideo, 'play')
  return (
    <div className="single-Page-container">
      <div className="section">
        {playlistVideo ? (
          playlistVideo.videos?.map((video) => {
            const {
              _id,
              videoLength,
              thumbnail,
              chennelProfile,
              title,
              chennelName,
              view,
            } = video
            return (
              <div className="cartContainer" key={_id}>
                <div className="iconDiv">
                  <p className="Vedio, userDispatch Length">{videoLength}</p>
                  <div className="icons">
                    <i
                      className="fa fa-trash-o borderRadius"
                      onClick={() => deleteVideoHandler(_id)}
                    ></i>
                  </div>
                </div>
                <img className="thumbnailImg" src={thumbnail} alt="videoImg" />
                <div className="cardText">
                  <img
                    className="chennelProfile"
                    src={chennelProfile}
                    alt="profileImg"
                  />
                  <div className="cardFooter">
                    <p className="title">{title}</p>
                    <h5 className="channelName">{chennelName}</h5>
                    <h5 className="view">{view}</h5>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <h1 className="emptyHeading">Playlist is Empty</h1>
        )}
      </div>
    </div>
  )
}
export { SinglePlayList }
