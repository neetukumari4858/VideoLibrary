import './WatchList.css'
import { useWatchlist, useAuth } from './../../Context/index'
import { deleteWatchLater } from '../../services/index'
import { BsFillBookmarkFill } from 'react-icons/bs'

const WatchList = () => {
  const { watchlistState, watchlistDispatch } = useWatchlist()
  const { watchListVideos } = watchlistState

  const { userDetail } = useAuth()
  const { token } = userDetail

  const deleteWatchLaterHandler = (_id) => {
    deleteWatchLater(_id, token, watchlistDispatch)
  }

  return (
    <div className="WatchList-Page-container">
      <h1 className="WatchLater"> Watch Later</h1>
      <div className="section">
        {watchListVideos.map(
          ({
            _id,
            videoLength,
            thumbnail,
            chennelProfile,
            title,
            chennelName,
            view,
          }) => {
            return (
              <div className="cartContainer" key={_id}>
                <div className="iconDiv">
                  <p className="VedioLength">{videoLength}</p>
                  <div className="icons">
                    <i
                      className="videoEachIcon"
                      onClick={(e) => deleteWatchLaterHandler(_id)}
                    >
                      <BsFillBookmarkFill />
                    </i>
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
          },
        )}
      </div>
    </div>
  )
}
export { WatchList }
