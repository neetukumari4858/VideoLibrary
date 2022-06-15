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

  useEffect(() => getPlaylist(token, PlayListDispatch), [])

  const deletePlaylistHandler = (playlistId) => {
    deletePlaylist(playlistId, token, PlayListDispatch)
  }

  const singlePlaylistHandler = (videos) => {
    PlayListDispatch({ type: 'VIDEO_TO_SINGLE_PLAYLIST_PAGE', payload: videos })
  }

  return (
    <>
      {playlists.map((item) => {
        {console.log(playlists,"playlist");}
        return (
          <div className="playlistCard" key={item.videos}>
            {/* {console.log(item.videos,"yi")} */}
            <div className="playlist_text">
              <Link
                to={`/PlaylistPage/${item._id}`}
                className="playlistcardLink"
                
                onClick={() => singlePlaylistHandler(item.videos)}
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
