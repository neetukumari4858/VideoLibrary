import { useWatchlist } from "../../Context/watchLaterContext"
import "./VideoCard.css"
import { useLiked } from "../../Context/LikedContext";
import { useHistory } from "../../Context/HistoryContext";
import { useModal } from "./../../Context/ModelContext"


const VideoCard = ({ _id, videoLength, thumbnail, chennelProfile, title, chennelName, view }) => {

    const { watchlistDispatch } = useWatchlist();
    const { likedDispatch } = useLiked();
    const { HistoryDispatch } = useHistory();
    const {  Modaldispatch } = useModal()


    return (
        <>
            <div onClick={() => HistoryDispatch({
                type: "ADD_TO_HISTORY", payload: {
                    _id: _id,
                    videoLength: videoLength,
                    thumbnail: thumbnail,
                    chennelProfile: chennelProfile,
                    title: title,
                    chennelName: chennelName,
                    view: view
                }
            })} className="cartContainer" key={_id}>
                <div className="iconDiv">
                    <p className="VedioLength">{videoLength}</p>
                    <div className="icons">
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
                        
                        <i onClick={() => Modaldispatch({ type: "Modal", payload: true })} className='fas fa-sliders-h borderRadius'></i>
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
        </>
    )
}
export { VideoCard }
