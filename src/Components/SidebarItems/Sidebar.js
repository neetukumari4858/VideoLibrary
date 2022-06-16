import "./Sidebar.css"
import { Link } from 'react-router-dom';
import {BsFillBookmarkFill} from "react-icons/bs";
import {RiPlayList2Fill} from "react-icons/ri"
const Sidebar=()=>{
    return (
        <>
            <div className="sidebar">
                <Link className="sidebarItemsLink"  to="/"><i className="fa fa-home"></i>Home</Link>
                <Link  className="sidebarItemsLink" to="/VideoListing"><i className="material-icons">explore</i>Explore</Link>
                <Link className="sidebarItemsLink"  to="/WatchLater"><i className="fa"><BsFillBookmarkFill /></i>Watch later</Link> 
                <Link  className="sidebarItemsLink" to="/LikedPage"><i className="fa fa-thumbs-up"></i>Liked Videos</Link>
                <Link  className="sidebarItemsLink" to="/HistoryPage"><i className="fa fa-history"></i> History</Link>
                <Link className="sidebarItemsLink"  to="/PlaylistPage"><i className='fas'><RiPlayList2Fill /></i>Playlist</Link>
            </div>
        </>
    )
}
export {Sidebar}

{/* <i onClick={playlistHandler} className="videoEachIcon"> */}
            //   <RiPlayList2Fill />
            // </i>
