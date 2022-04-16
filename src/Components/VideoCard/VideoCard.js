import "./VideoCard.css"
const VideoCard=({_id,videoLength,thumbnail,chennelProfile,title,chennelName,view})=>{
    console.log(_id,videoLength,thumbnail,chennelProfile,title,chennelName,view)

    return (
        <div className="cartContainer" key={_id}>
            <div className="iconDiv">
                <p  className="VedioLength">{videoLength}</p>
                <div className="icons">
                    <i className="fa fa-thumbs-up borderRadius"></i>
                    <i className="fa fa-clock-o borderRadius"></i>
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