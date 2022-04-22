import "./PlaylistCard.css"
const PlaylistCard=()=>{
    return (
        <div className="playlistCard">
            <div className="delete-icon-and-text">
            <h2 className="cardTitle cardText">My Playlist</h2>
            <i className='fa fa-trash-o '></i>
            </div>
            
            <h6 className="videoLength cardText">10 Videos</h6>
        </div>
    )
}
export {PlaylistCard}