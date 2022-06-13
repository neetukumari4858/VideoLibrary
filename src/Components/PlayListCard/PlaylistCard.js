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
            <div className="delete-icon-and-text">
              <Link
                to={`/PlaylistPage/${item._id}`}
                className="playlistcardLink"
              >
                <i
                  className="fa fa-trash-o delete_icon "
                  onClick={(e) => {
                      e.preventDefault()
                      deletePlaylistHandler(item._id)
                    }}
                ></i>
              </Link>
            <h2 className="cardTitle cardText">{item.title}</h2>
            <h6 className="videoLength cardText">{item?.videos.length} video</h6>
            </div>
          </div>
        )
      })}
    </>
  )
}
export { PlaylistCard }
