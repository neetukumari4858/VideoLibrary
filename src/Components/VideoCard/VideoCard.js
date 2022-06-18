import './VideoCard.css'
import {
  useWatchlist,
  useLiked,
  useHistory,
  useModal,
  useAuth,
} from './../../Context/index'
import {
  addToLike,
  deleteLiked,
  addToWatchLater,
  deleteWatchLater,
  addToHistory,
} from './../../services/index'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { RiPlayList2Fill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const VideoCard = ({
  _id,
  videoLength,
  thumbnail,
  chennelProfile,
  title,
  chennelName,
  view,
  video,
}) => {
  const { watchlistState, watchlistDispatch } = useWatchlist()
  const { watchListVideos } = watchlistState
  const { likedState, likedDispatch } = useLiked()
  const { likedVideos } = likedState
  const { HistoryDispatch } = useHistory()
  const { Modaldispatch } = useModal()
  const { userDetail } = useAuth()
  const { token } = userDetail

  const navigate = useNavigate()

  const selectedVideo = video.find((item) => item._id === _id)
  const likeVideoHandler = () => {
    if (token) {
      addToLike(selectedVideo, token, likedDispatch)
    } else {
      navigate('/loginPage')
      alert('login first')
    }
  }

  const deleteVideoHandler = () => {
    deleteLiked(_id, token, likedDispatch)
  }

  const watchLaterHandler = (_id) => {
    if (token) {
      const videos = video.find((item) => item._id === _id)
      addToWatchLater(videos, token, watchlistDispatch)
    } else {
      navigate('/loginPage')
      alert('login first')
    }
  }
  const deleteWatchLaterHandler = () => {
    deleteWatchLater(_id, token, watchlistDispatch)
  }

  const addToHistoryHandler = () => {
    addToHistory(selectedVideo, token, HistoryDispatch)
  }

  const playlistHandler = (_id) => {
    if (token) {
      Modaldispatch({
        type: 'Modal',
        payload: { status: true, video: selectedVideo },
      })
    } else {
      navigate('/LoginPage')
      alert('login first')
    }
  }

  return (
    <>
      <div key={_id} className="cartContainer" onClick={addToHistoryHandler}>
        <div className="iconDiv">
          <p className="VedioLength">{videoLength}</p>
          <div className="icons">
            {likedVideos.some((item) => item._id === _id) ? (
              <i className="  videoEachIcon" onClick={deleteVideoHandler}>
                <AiFillLike />
              </i>
            ) : (
              <i className="videoEachIcon " onClick={likeVideoHandler}>
                <AiOutlineLike />
              </i>
            )}
            {watchListVideos.some((item) => item._id === _id) ? (
              <i className="videoEachIcon" onClick={deleteWatchLaterHandler}>
                <BsFillBookmarkFill />
              </i>
            ) : (
              <i
                className="videoEachIcon"
                onClick={(e) => watchLaterHandler(_id)}
              >
                <BsBookmark />
              </i>
            )}

            <i onClick={playlistHandler} className="videoEachIcon">
              <RiPlayList2Fill />
            </i>
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
    </>
  )
}
export { VideoCard }
