
import "./Home.css";
const Home=()=>{
    return (
        <div className="Home-Page-container">
            <div className="home-img-container">
                <img className="home-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"/>
            </div>
            <h2 className="mustWatch">Must Watch</h2>
            <div className="card-section">
                
                <div className="cartContainer">
                    <div className="iconDiv">
                        <p  className="VedioLength">7:50</p>
                        <div className="icons">
                            <i className="fa fa-thumbs-up borderRadius"></i>
                            <i className="fa fa-clock-o borderRadius"></i>
                            <i className='fas fa-sliders-h borderRadius'></i>
                        </div>
                    </div>
                    <img  className="thumbnailImg" src="https://ak.picdn.net/shutterstock/videos/1057495222/thumb/1.jpg?ip=x480" alt="videoImg"/>
                    <div className="cardText">
                        <img  className="chennelProfile" src="https://i.ebayimg.com/images/g/uhkAAOSwTM5Yvo4B/s-l300.jpg" alt="profileImg"/>
                        <div className="cardFooter" >
                            <p  className="title">How to tie your shoelaces Shoelace Style see now  ??</p>
                            <h5 className="channelName">channelName</h5>
                            <h5 className="view">245 views 10 month ago"</h5>
                        </div> 
                    </div>
                </div>
                {/*  */}
                <div className="cartContainer">
                    <div className="iconDiv">
                        <p  className="VedioLength">7:50</p>
                        <div className="icons">
                            <i className="fa fa-thumbs-up borderRadius"></i>
                            <i className="fa fa-clock-o borderRadius"></i>
                            <i className='fas fa-sliders-h borderRadius'></i>
                        </div>
                    </div>
                    <img  className="thumbnailImg" src="https://ak.picdn.net/shutterstock/videos/1057495222/thumb/1.jpg?ip=x480" alt="videoImg"/>
                    <div className="cardText">
                        <img  className="chennelProfile" src="https://i.ebayimg.com/images/g/uhkAAOSwTM5Yvo4B/s-l300.jpg" alt="profileImg"/>
                        <div className="cardFooter" >
                            <p  className="title">How to tie your shoelaces Shoelace Style see now  ??</p>
                            <h5 className="channelName">channelName</h5>
                            <h5 className="view">245 views 10 month ago"</h5>
                        </div> 
                    </div>
                </div>
                {/*  */}
                <div className="cartContainer">
                    <div className="iconDiv">
                        <p  className="VedioLength">7:50</p>
                        <div className="icons">
                            <i className="fa fa-thumbs-up borderRadius"></i>
                            <i className="fa fa-clock-o borderRadius"></i>
                            <i className='fas fa-sliders-h borderRadius'></i>
                        </div>
                    </div>
                    <img  className="thumbnailImg" src="https://ak.picdn.net/shutterstock/videos/1057495222/thumb/1.jpg?ip=x480" alt="videoImg"/>
                    <div className="cardText">
                        <img  className="chennelProfile" src="https://i.ebayimg.com/images/g/uhkAAOSwTM5Yvo4B/s-l300.jpg" alt="profileImg"/>
                        <div className="cardFooter" >
                            <p  className="title">How to tie your shoelaces Shoelace Style see now  ??</p>
                            <h5 className="channelName">channelName</h5>
                            <h5 className="view">245 views 10 month ago"</h5>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Home}


