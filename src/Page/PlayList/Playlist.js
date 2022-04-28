import "./Playlist.css"
import {PlaylistCard} from "./../../Components/PlayListCard/PlaylistCard"
import { usePlayList } from "../../Context/PlayListContext"
const Playlist = () => {
    const {Playlist}=usePlayList ()
    console.log(Playlist,"playlist")
    return (
        <div className="Playlist-Page-container">
            <h1 className="Playlist">Playlist Videos ({Playlist.length})</h1>
            {Playlist.length>0 ?
            (<div className="section">
                <PlaylistCard/>
            </div>)
            :(<h1 className="Playlist">Start Creating Your Playlists 😃</h1>)
            }
        </div>
    )
}
export {  Playlist  }