import { useWatchlist } from '../../Context/watchLaterContext'
import './VideoCard.css'
import { useLiked } from '../../Context/LikedContext'
import { useHistory } from '../../Context/HistoryContext'
import { useModal } from './../../Context/ModelContext'
import { useAuth } from '../../Context/AuthContext'
import { addToLike } from '../../services/likeServices/addToLike'
import { deleteLiked } from '../../services/likeServices/deleteLinked'

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
  const { watchlistDispatch } = useWatchlist()
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

  return (
    <>
      <div
        onClick={() =>
          HistoryDispatch({
            type: 'ADD_TO_HISTORY',
            payload: {
              _id: _id,
              videoLength: videoLength,
              thumbnail: thumbnail,
              chennelProfile: chennelProfile,
              title: title,
              chennelName: chennelName,
              view: view,
            },
          })
        }
        className="cartContainer"
        key={_id}
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

            <i
              onClick={() =>
                watchlistDispatch({
                  type: 'ADD_TO_WATCHLIST',
                  payload: {
                    _id: _id,
                    videoLength: videoLength,
                    thumbnail: thumbnail,
                    chennelProfile: chennelProfile,
                    title: title,
                    chennelName: chennelName,
                    view: view,
                  },
                })
              }
              className="fa fa-clock-o borderRadius"
            ></i>

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
