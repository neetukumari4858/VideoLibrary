import { useWatchlist } from "../../Context/watchLaterContext"
import "./VideoCard.css"
const VideoCard=({_id,videoLength,thumbnail,chennelProfile,title,chennelName,view})=>{
    
    const {watchlistDispatch} = useWatchlist();
    // const addToWatchlist=async()=>{
    //     try{
    //         await watchlistDispatch({type:"ADD_TO_WATCHLIST",payload:{
    //             _id:_id,
    //             videoLength:videoLength,
    //             thumbnail:thumbnail,
    //             chennelProfile:chennelProfile,
    //             title:title,
    //             chennelName:chennelName,
    //             view:view
    //         }})
    //     }catch(error){
    //         alert(error);
    //     }
    // }
    return (
        <div className="cartContainer" key={_id}>
            <div className="iconDiv">
                <p  className="VedioLength">{videoLength}</p>
                <div className="icons">
                    <i className="fa fa-thumbs-up borderRadius"></i>
                    <button onClick={ ()=>watchlistDispatch({type:"ADD_TO_WATCHLIST",payload:{
                    _id:_id,
                    videoLength:videoLength,
                    thumbnail:thumbnail,
                    chennelProfile:chennelProfile,
                    title:title,
                    chennelName:chennelName,
                    view:view
                    }})}>
                    <i className="fa fa-clock-o borderRadius"></i>
                    </button>
                    <i className='fas fa-sliders-h borderRadius'></i>
                </div>
            </div>
            <img  className="thumbnailImg" src={thumbnail} alt="videoImg"/>
            <div className="cardText">
                <img  className="chennelProfile" src={chennelProfile} alt="profileImg"/>
                 <div className="cardFooter" >
                    <p  className="title">{title}</p>
                    <h5 className="channelName">{chennelName}</h5>
                    <h5 className="view">{view}</h5>
                </div> 
            </div>
        </div>
    )
}
export {VideoCard}