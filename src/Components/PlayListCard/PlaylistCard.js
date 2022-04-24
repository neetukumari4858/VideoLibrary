import "./PlaylistCard.css"
import {usePlayList} from "../../Context/PlayListContext/PlayListContext"
import { Link } from "react-router-dom";

const PlaylistCard=()=>{
    const {Playlist} =usePlayList();
      
    return (
        <>
        { Playlist.map((item)=>{
                return (
                <div className="playlistCard" key={item._id}>
                    <Link to={`/PlaylistPage/${item._id}`} >
                        <div className="delete-icon-and-text">
                        <h2 className="cardTitle cardText">{item.title}</h2>
                        <i className='fa fa-trash-o '></i>
                        </div>
                    </Link>
                    <h6 className="videoLength cardText">{Playlist.length} video</h6>
                 </div>
                )
            })
        }
            
        </>
        
    )
}
export {PlaylistCard}