import "./Sidebar.css"
const Sidebar=()=>{
    return (
        <>
            <div className="sidebar">
                <a className="sidebarItemsLink" href="#"><i class="fa fa-home"></i>Home</a>
                <a  className="sidebarItemsLink"  href="#"><i class="material-icons">explore</i>Explore</a>
                <a className="sidebarItemsLink" href="#"><i class="fa fa-clock-o"></i>Watch later</a> 
                <a  className="sidebarItemsLink"  href="#"><i class="fa fa-thumbs-up"></i>Liked Videos</a>
                <a  className="sidebarItemsLink"  href="#"><i class="fa fa-history"></i> History</a>
                <a className="sidebarItemsLink"  href="#"><i class='fas fa-sliders-h'></i>Playlist</a>
                <a className="sidebarItemsLink" href="#"><i class="fa fa-gear"></i>Settings</a> 
                
            </div>
          
        </>
    )
    
}
export {Sidebar}