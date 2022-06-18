import './History.css'
import { useHistory, useAuth } from '../../Context/index'
import { deleteAllHistory, deleteHistory } from './../../services/index'
import { useNavigate } from 'react-router-dom'

const History = () => {
  const { HistoryState, HistoryDispatch } = useHistory()
  const { HistoryVideos } = HistoryState

  const { userDetail } = useAuth()
  const { token } = userDetail
  const navigate = useNavigate()

  const deleteHistoryHandler = (_id) => {
    deleteHistory(_id, token, HistoryDispatch)
  }

  const clearHistoryHandler = () => {
    deleteAllHistory(token, HistoryDispatch)
  }

  return (
    <div className="History-Page-container">
      <div className="history-header">
        <h1 className="History">History Videos</h1>
        <button className="clear-btn" onClick={clearHistoryHandler}>
          CLEAR FULL HISTORY
        </button>
      </div>
      <div className="section">
        {HistoryVideos.map(
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
                      onClick={(e) => deleteHistoryHandler(_id)}
                      className="fa fa-trash-o videoEachIcon"
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
          },
        )}
      </div>
    </div>
  )
}
export { History }
