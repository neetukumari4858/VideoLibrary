import { useNavigate, useParams } from 'react-router-dom'
import { usePlayList, useAuth } from './../../Context/index'
import {Sidebar} from "./../../Components/SidebarItems/Sidebar"
import { useModal } from '../../Context/ModelContext'
import {
  deleteVideoFromPlaylist,
  getSinglePlaylist,
} from './../../services/index'
import './SinglePlayList.css'
import { useEffect } from 'react'

const SinglePlayList = () => {
  const { PlayListDispatch } = usePlayList()
  const { playlistId } = useParams()
  console.log(playlistId,"playlistid")
  const {playlistVideo, setplaylistVideo}=useModal()
  
  // const [playlistVideo, setplaylistVideo] = useState(null)

  const { userDetail } = useAuth()
  const { token } = userDetail
  const navigate = useNavigate()

  const deleteVideoHandler = (_id) => {
    deleteVideoFromPlaylist(_id, playlistId, token, PlayListDispatch)
    getSinglePlaylist(token, setplaylistVideo, playlistId)
  }
  useEffect(() => getSinglePlaylist(token, setplaylistVideo, playlistId), [])

  return (
    <div className="inner-Body">
      <Sidebar />
      <div className="product-container">
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
                  <img
                    className="thumbnailImg"
                    src={thumbnail}
                    alt="videoImg"
                    onClick={() => navigate(`/VideoListing/${_id}`)}
                  />
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
            <h1 className="emptyHeading">No videos</h1>
          )}
        </div>
      </div>
    </div>
  )
}
export { SinglePlayList }
