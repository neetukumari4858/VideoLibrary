import "./WatchList.css";
import { useWatchlist } from "../../Context/watchLaterContext";
import { useLiked } from "../../Context/LikedContext";
import { Link } from "react-router-dom";
const WatchList = () => {
    const { watchlistState, watchlistDispatch } = useWatchlist();
    const { watchListVideos } = watchlistState;

    const { likedState, likedDispatch } = useLiked();
    const { likedVideos } = likedState

    return (
        <div className="WatchList-Page-container">
            <h1 className="WatchLater"> Watch Later</h1>
            <div className="section">
                {watchListVideos.map(({ _id, videoLength, thumbnail, chennelProfile, title, chennelName, view }) => {
                    return (
                        <div className="cartContainer" key={_id}>
                            <div className="iconDiv">
                                <p className="VedioLength">{videoLength}</p>
                                <div className="icons">
                                    {likedVideos.find((item) => item._id === _id) ? (
                                        <Link to="/LikedPage"></Link>
                                    ) : (
                                        <i onClick={() => likedDispatch({
                                            type: "ADD_TO_LIKED", payload: {
                                                _id: _id,
                                                videoLength: videoLength,
                                                thumbnail: thumbnail,
                                                chennelProfile: chennelProfile,
                                                title: title,
                                                chennelName: chennelName,
                                                view: view
                                            }
                                        })} className="fa fa-thumbs-up borderRadius"></i>
                                    )}
                                    
                                    <i onClick={() => watchlistDispatch({ type: "REMOVE_From_WatchList", payload: { _id: _id } })} className="fa fa-clock-o borderRadius"></i>
                                    <i className='fas fa-sliders-h borderRadius'></i>
                                </div>
                            </div>
                            <img className="thumbnailImg" src={thumbnail} alt="videoImg" />
                            <div className="cardText">
                                <img className="chennelProfile" src={chennelProfile} alt="profileImg" />
                                <div className="cardFooter" >
                                    <p className="title">{title}</p>
                                    <h5 className="channelName">{chennelName}</h5>
                                    <h5 className="view">{view}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export { WatchList }