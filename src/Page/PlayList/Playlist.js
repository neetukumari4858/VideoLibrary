import './Playlist.css'
import { PlaylistCard } from './../../Components/PlayListCard/PlaylistCard'
import { usePlayList } from '../../Context/index'
import {Sidebar} from "./../../Components/SidebarItems/Sidebar"
const Playlist = () => {
  const { Playlist } = usePlayList()
  const { playlists } = Playlist

  return (
    <div className="inner-Body">
      <Sidebar />
      <div className="product-container">
        <h1 className="Playlist">Playlist Videos ({playlists.length})</h1>

        {playlists.length > 0 ? (
          <div className="section">
            <PlaylistCard />
          </div>
        ) : (
          <h1 className="Playlist">Start Creating Your Playlists 😃</h1>
        )}
      </div>
    </div>
  )
}
export { Playlist }
