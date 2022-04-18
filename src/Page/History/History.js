import "./History.css"
import { useHistory } from "../../Context/HistoryContext";

const History = () => {
    const { HistoryState, HistoryDispatch } = useHistory();
    const { HistoryVideos } = HistoryState;
    return (
        <div className="History-Page-container">
            <div className="history-header">
                <h1 className="History">History Videos</h1>
                <button className="clear-btn" onClick={() => HistoryDispatch({ type: "CLEAR_ALL" })}>CLEAR  FULL HISTORY</button>
            </div>
            <div className="section">
                {HistoryVideos.map(({ _id, videoLength, thumbnail, chennelProfile, title, chennelName, view }) => {
                    return (
                        <div className="cartContainer" key={_id}>
                            <div className="iconDiv">
                                <p className="VedioLength">{videoLength}</p>
                                <div className="icons">
                                    <i onClick={() => HistoryDispatch({ type: "REMOVE_FROM_HISTORY", payload: { _id: _id } })} className='fa fa-trash-o borderRadius'></i>
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
export { History }