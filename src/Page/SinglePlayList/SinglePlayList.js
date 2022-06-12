import { useParams } from "react-router-dom";
import { usePlayList } from "./../../Context/PlayListContext"
import "./SinglePlayList.css"

const SinglePlayList = () => {
    const { Playlist, PlayListDispatch } = usePlayList();
    const {playlists}=Playlist
    const { id } = useParams()
    const playlist = playlists?.find((playList) => {
        return playList._id == id
    }) 
    const deleteVideoHandler = () => {
        deleteVideoFromPlaylist( _id, token, PlayListDispatch)
        // getSinglePlaylist(token, setplaylistVideo, playlistId)
      }


    return (
        <div className="single-Page-container">
            <div className="section">
                {playlist?.videos?.map((video) => {
                    const { _id, videoLength, thumbnail, chennelProfile, title, chennelName, view }=video
                    return (
                        <div className="cartContainer" key={_id}>
                            <div className="iconDiv">
                                <p className="VedioLength">{videoLength}</p>
                                <div className="icons">
                                    <i className='fa fa-trash-o borderRadius' onClick={() => deleteVideoHandler(_id, token, PlayListDispatch)}></i>
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
                })
                }
            </div>
        </div>
    )
}
export { SinglePlayList }