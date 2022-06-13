import './PlaylistCard.css'
import { usePlayList, useAuth } from '../../Context/index'
import { Link } from 'react-router-dom'
import { deletePlaylist } from './../../services/index'

const PlaylistCard = () => {
  const { Playlist, PlayListDispatch } = usePlayList()
  const { playlists } = Playlist
  const { userDetail } = useAuth()
  const { token } = userDetail

  const deletePlaylistHandler = (id) => {
    deletePlaylist(id, token, PlayListDispatch)
  }

  return (
    <>
      {playlists.map((item) => {
        return (
          <div className="playlistCard" key={item.videos}>
            <div className="playlist_text">
              <Link
                to={`/PlaylistPage/${item._id}`}
                className="playlistcardLink"
              >
                <h2 className="playlistName">{item.title}</h2>
              </Link>
              <h6 className="videoLength cardText ">
                {item?.videos.length} video
              </h6>
            </div>
            <div className="delete_icon_div">
              <i
                className="fa fa-trash-o delete_icon "
                onClick={(e) => {
                  e.preventDefault()
                  deletePlaylistHandler(item._id)
                }}
              ></i>
            </div>
          </div>
        )
      })}
    </>
  )
}
export { PlaylistCard }
