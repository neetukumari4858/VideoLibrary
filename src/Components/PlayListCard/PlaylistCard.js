import './PlaylistCard.css'
import { usePlayList, useAuth } from '../../Context/index'
import { Link } from 'react-router-dom'
import { deletePlaylist, getPlaylist } from './../../services/index'
import { useEffect } from 'react'

const PlaylistCard = () => {
  const { Playlist, PlayListDispatch } = usePlayList()
  const { playlists } = Playlist
  const { userDetail } = useAuth()
  const { token } = userDetail

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(playlistId, token, PlayListDispatch)
  }
  useEffect(() => getPlaylist(token, PlayListDispatch), [])

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
                <p className="playlistName">{item.title}</p>
              </Link>
              <p className="videoLength">
                {item?.videos.length} video
              </p>
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
