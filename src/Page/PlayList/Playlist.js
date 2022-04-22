import "./Playlist.css"
import {PlaylistCard} from "./../../Components/PlayListCard/PlaylistCard"
const Playlist = () => {

    return (
        <div className="Playlist-Page-container">
            <h1 className="Playlist">Playlist Videos</h1>
            <div className="section">
                <PlaylistCard/>
                
            </div>
        </div>
    )
}
export {  Playlist  }