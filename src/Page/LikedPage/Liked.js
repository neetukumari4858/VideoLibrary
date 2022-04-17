import "./Liked.css"
import { useLiked } from "../../Context/LikedContext";
import { useWatchlist } from "../../Context/watchLaterContext";
import { Link } from "react-router-dom";

const Liked = () => {
    const { likedState, likedDispatch } = useLiked();
    const { likedVideos } = likedState;

    const { watchlistState, watchlistDispatch } = useWatchlist();
    const { watchListVideos } = watchlistState;

    return (
        <div className="Liked-Page-container">
            <h1 className="Liked">Liked Videos</h1>
            <div className="section">
                {likedVideos.map(({ _id, videoLength, thumbnail, chennelProfile, title, chennelName, view }) => {
                    return (
                        <div className="cartContainer" key={_id}>
                            <div className="iconDiv">
                                <p className="VedioLength">{videoLength}</p>
                                <div className="icons">
                                    <i onClick={() => likedDispatch({ type: "REMOVE_From_LIKED", payload: { _id: _id } })} className="fa fa-thumbs-up borderRadius"></i>
                                    {watchListVideos.find((item) => item._id === _id) ? (
                                        <Link to="/WatchLater"></Link>
                                    ) : (
                                        <i onClick={() => watchlistDispatch({
                                            type: "ADD_TO_WATCHLIST", payload: {
                                                _id: _id,
                                                videoLength: videoLength,
                                                thumbnail: thumbnail,
                                                chennelProfile: chennelProfile,
                                                title: title,
                                                chennelName: chennelName,
                                                view: view
                                            }
                                        })} className="fa fa-clock-o borderRadius"></i>
                                    )}

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
export { Liked }