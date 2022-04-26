import "./PlaylistCard.css"
import { usePlayList } from "../../Context/PlayListContext"
import { Link } from "react-router-dom";

const PlaylistCard = () => {
    const { Playlist, PlayListDispatch } = usePlayList();
    console.log(Playlist, "playlist  check");
    return (
        <>
            {Playlist.map((item) => {
                return (
                    <div className="playlistCard" key={item._id}>
                        <div className="delete-icon-and-text">
                            <Link to={`/PlaylistPage/${item._id}`} className="playlistcardLink" >
                                <h2 className="cardTitle cardText">{item.title}</h2>
                                <i className='fa fa-trash-o delete ' onClick={() => PlayListDispatch({ type: "REMOVE_PLAYLIST", payload: item._id })}></i>
                            </Link>
                        </div>
                        <h6 className="videoLength cardText">{item.videos.length} video</h6>
                    </div>
                )
            })
            }
        </>
    )
}
export { PlaylistCard }