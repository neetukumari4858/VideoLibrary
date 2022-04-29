import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
    return (
        <div className="Home-Page-container">
            <div className="home-img-container">
                <img className="home-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg" />
            </div>
            <h2 className="mustWatch">Must Watch</h2>
            <div className="card-section">

                <div className="cartContainer">
                    <div className="iconDiv">
                        <p className="VedioLength">7:50</p>
                    </div>
                    <Link to="VideoListing"><img className="thumbnailImg" src="https://i.ytimg.com/vi/Zw_0VYhshBE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBNLp-Ho_WkbDMkWFQuOaKrl2Uqag" alt="videoImg" /></Link>
                    <div className="cardText">
                        <img className="chennelProfile" src="https://yt3.ggpht.com/ytc/AKedOLTMz8j3mFPDwTjJiCs8DjpxpiA5BW7kdFVcwyXG8g=s68-c-k-c0x00ffffff-no-rj" alt="profileImg" />
                        <div className="cardFooter" >
                            <p className="title">5 offer In video Must Watch this Amazing video ??</p>
                            <h5 className="channelName">incrediable vibe</h5>
                            <h5 className="view">245 views 10 month ago"</h5>
                        </div>
                    </div>
                </div>

                <div className="cartContainer">
                    <div className="iconDiv">
                        <p className="VedioLength">7:50</p>
                    </div>
                    <Link to="VideoListing"><img className="thumbnailImg" src="https://i.ytimg.com/vi/ReDGUvSsAEA/hq720.jpg?sqp=-%E2%80%A6AFwAcABBg==&rs=AOn4CLDdeUFtRS_l7HuHBKWXuaxyBHexaQ" alt="videoImg" /></Link>
                    <div className="cardText">
                        <img className="chennelProfile" src="https://yt3.ggpht.com/ytc/AKedOLTzk1AGT1_u0QZ38-ZmfDJkQC74DvPSCUJHx8YG=s68-c-k-c0x00ffffff-no-rj" alt="profileImg" />
                        <div className="cardFooter" >
                            <p className="title">My shoes Collection... ??</p>
                            <h5 className="channelName">Riya Arora</h5>
                            <h5 className="view">242 views 10 month ago"</h5>
                        </div>
                    </div>
                </div>
                <div className="cartContainer">
                    <div className="iconDiv">
                        <p className="VedioLength">7:50</p>
                    </div>
                    <Link to="VideoListing"><img className="thumbnailImg" src="https://i.ytimg.com/vi/ppvGar4U664/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDdj58_JWoLcODD2xOcdlGuVzH3kA" alt="videoImg" /></Link>
                    <div className="cardText">
                        <img className="chennelProfile" src="https://yt3.ggpht.com/ytc/AKedOLQRgfh13U9qDxcqAMaTLgWr0v6mfQELPIvCh84S=s68-c-k-c0x00ffffff-no-rj" alt="profileImg" />
                        <div className="cardFooter" >
                            <p className="title">Imported shoes Made in Japan... ??</p>
                            <h5 className="channelName">Technical vlog</h5>
                            <h5 className="view">240 views 10 month ago"</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Home }




