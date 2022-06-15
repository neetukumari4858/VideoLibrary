import './PlaylistCard.css'
import { usePlayList } from '../../Context/PlayListContext'
import { Link } from 'react-router-dom'

const PlaylistCard = () => {
  const { Playlist, PlayListDispatch } = usePlayList()
  return (
    <>
      {Playlist.map((item) => {
        return (
          <div className="playlistCard" key={item._id}>
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
                  PlayListDispatch({
                    type: 'REMOVE_PLAYLIST',
                    payload: item._id,
                  })
                }}
              ></i>
            </div>

            {/* <div className="delete-icon-and-text">
              <Link
                to={`/PlaylistPage/${item._id}`}
                className="playlistcardLink"
              >
                <h2 className="cardTitle cardText">{item.title}</h2>
                <i
                  className="fa fa-trash-o delete "
                  onClick={(e) => {
                    e.preventDefault()
                    PlayListDispatch({
                      type: 'REMOVE_PLAYLIST',
                      payload: item._id,
                    })
                  }}
                ></i>
              </Link>
            </div> */}
            {/* <h6 className="videoLength cardText">{item.videos.length} video</h6> */}
          </div>
        )
      })}
    </>
  )
}
export { PlaylistCard }

{
  /*        <div className="playlist_text">
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
            </div> */
}
