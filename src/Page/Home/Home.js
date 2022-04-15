// import {VideoCard} from  "./"
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import "./Home.css";
const Home=()=>{
    return (
        <div className="product-container">
            <div className="home-img-container">
                <img className="home-image" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2bbcfa99737217.5ef9be3dbb9a9.jpg"/>
            </div>
           
            <h2 className="mustWatch">Must Watch</h2>
            {/* <div className="sectiono"> */}
                <VideoCard/>
            {/* </div> */}
            

        </div>
    )

}
export {Home}