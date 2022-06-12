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

  return (
    <>
      <div
        // onClick={() =>
        //   HistoryDispatch({
        //     type: 'ADD_TO_HISTORY',
        //     payload: {
        //       _id: _id,
        //       videoLength: videoLength,
        //       thumbnail: thumbnail,
        //       chennelProfile: chennelProfile,
        //       title: title,
        //       chennelName: chennelName,
        //       view: view,
        //     },
        //   })
        // }
        key={_id}
        className="cartContainer"
        onClick={addToHistoryHandler}
      >
        <div className="iconDiv">
          <p className="VedioLength">{videoLength}</p>
          <div className="icons">
            {likedVideos.some((item) => item._id === _id) ? (
              <i
                className="fas fa-thumbs-up  videoEachIcon"
                onClick={deleteVideoHandler}
              ></i>
            ) : (
              <i
                className="far fa-thumbs-up videoEachIcon "
                onClick={likeVideoHandler}
              ></i>
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

            <i
              onClick={() =>
                Modaldispatch({
                  type: 'Modal',
                  payload: { status: true, video: eachVideo },
                })
              }
              className="fas fa-sliders-h borderRadius"
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
    </>
  )
}
export { VideoCard }
