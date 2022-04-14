import "./Sidebar.css"
import { Link } from 'react-router-dom';
const Sidebar=()=>{
    return (
        <>
            <div className="sidebar">
                <Link className="sidebarItemsLink"  to="/"><i className="fa fa-home"></i>Home</Link>
                <Link  className="sidebarItemsLink" to="/VideoListing"><i className="material-icons">explore</i>Explore</Link>
                <Link className="sidebarItemsLink"  to="/"><i className="fa fa-clock-o"></i>Watch later</Link> 
                <Link  className="sidebarItemsLink" to="/"><i className="fa fa-thumbs-up"></i>Liked Videos</Link>
                <Link  className="sidebarItemsLink" to="/"><i className="fa fa-history"></i> History</Link>
                <Link className="sidebarItemsLink"  to="/"><i className='fas fa-sliders-h'></i>Playlist</Link>
                <Link className="sidebarItemsLink"  to="/"><i className="fa fa-gear"></i>Settings</Link>  
            </div>
        </>
    )
}
export {Sidebar}