import "./Sidebar.css"
import { Link } from 'react-router-dom';
import {BsFillBookmarkFill} from "react-icons/bs";
import {RiPlayList2Fill} from "react-icons/ri"
const Sidebar=()=>{
    return (
        <>
            <div className="sidebar">
                <Link className="sidebarItemsLink"  to="/"><i className="fa fa-home icon_size"></i><span className="header_text">Home</span></Link>
                <Link  className="sidebarItemsLink" to="/VideoListing"><i className="material-icons icon_size">explore</i><span className="header_text">Explore</span></Link>
                <Link className="sidebarItemsLink "  to="/WatchLater"><i className="fa icon_size"><BsFillBookmarkFill /></i><span className="header_text">Watch later</span></Link> 
                <Link  className="sidebarItemsLink" to="/LikedPage"><i className="fa fa-thumbs-up icon_size"></i><span className="header_text">Liked Videos</span></Link>
                <Link  className="sidebarItemsLink" to="/HistoryPage"><i className="fa fa-history icon_size"></i> <span className="header_text">History</span></Link>
                <Link className="sidebarItemsLink"  to="/PlaylistPage"><i className='fas icon_size'><RiPlayList2Fill /></i><span className="header_text">Playlist</span></Link>
            </div>
        </>
    )
}
export {Sidebar}

{/* <i onClick={playlistHandler} className="videoEachIcon"> */}
            //   <RiPlayList2Fill />
            // </i>
