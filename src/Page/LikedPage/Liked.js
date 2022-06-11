import './Liked.css'
import { deleteLiked } from '../../services/index'
import { useAuth, useLiked } from '../../Context/index'

const Liked = () => {
  const { likedState, likedDispatch } = useLiked()
  const { likedVideos } = likedState
  const { userDetail } = useAuth()
  const { token } = userDetail

  const unlikeHandler = (_id) => {
    deleteLiked(_id, token, likedDispatch)
  }
  return (
    <div className="Liked-Page-container">
      <h1 className="Liked">Liked Videos</h1>
      <div className="section">
        {likedVideos.map(
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
                      className="fas fa-thumbs-up  videoEachIcon"
                      onClick={(e) => unlikeHandler(_id)}
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
          },
        )}
      </div>
    </div>
  )
}
export { Liked }
