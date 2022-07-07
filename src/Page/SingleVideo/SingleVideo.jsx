import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleVideo } from "./../../services/index";
import "./SingleVideo.css";
import { useNavigate } from "react-router-dom";
import {
  addToHistory,
  addToLike,
  deleteLiked,
  addToWatchLater,
  deleteWatchLater,
} from "./../../services/index";

import {
  useHistory,
  useLiked,
  useWatchlist,
  useAuth,
  useModal,
} from "../../Context/index";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {Sidebar} from "./../../Components/SidebarItems/Sidebar"

const SingleVideo = () => {
  const [video, setVideo] = useState({});
  const { videoId } = useParams();
  const navigate=useNavigate()

  const { HistoryDispatch } = useHistory();
  const { likedState, likedDispatch } = useLiked();
  const { likedVideos } = likedState;
  const { watchlistState, watchlistDispatch } = useWatchlist();
  const { watchListVideos } = watchlistState;
  const { Modaldispatch } = useModal();
  const { userDetail } = useAuth();
  const { token } = userDetail;

  useEffect(() => getSingleVideo(videoId, setVideo), []);

  const deleteVideoHandler = (_id) => {
    deleteLiked(_id, token, likedDispatch);
  };

  const likeVideoHandler = () => {
    if (token) {
      addToLike(video, token, likedDispatch);
    } else {
      navigate("/loginPage");
      alert("login first");
    }
  };
  const deleteWatchLaterHandler = (_id) => {
    deleteWatchLater(_id, token, watchlistDispatch);
  };

  const watchLaterHandler = () => {
    if (token) {
      addToWatchLater(video, token, watchlistDispatch);
    } else {
      navigate("/loginPage");
      alert("login first");
    }
  };

  const playlistHandler = () => {
    if (token) {
      Modaldispatch({
        type: "Modal",
        payload: { status: true, video: video },
      });
    } else {
      navigate("/LoginPage");
      alert("Please login to use these features!");
    }
  };

  const addToHistoryHandler = () => {
    addToHistory(video, token, HistoryDispatch);
  };
  return (
    <div className="inner-Body">
        <Sidebar />
      <div className="product-container">
      <div className="section ">
        <ReactPlayer
          className="Video_section"
          width="75%"
          height="68%"
          url={`https://www.youtube.com/embed/${video.youtubeId}`}
          controls={true}
          onStart={addToHistoryHandler}
        />
        <div className="footer_div">
          <h2>{video.title}</h2>
          <div className="footer_video-content">
            <p>{video.view} deleteVideoHandler</p>
            <div className="footer_icons-div">
              {likedVideos.some((item) => item._id === video._id) ? (
                <i
                  className="  videoEachIcon"
                  onClick={(e) => deleteVideoHandler(video._id)}
                >
                  <AiFillLike />
                </i>
              ) : (
                <i className="videoEachIcon " onClick={likeVideoHandler}>
                  <AiOutlineLike />
                </i>
              )}
              {watchListVideos.some((item) => item._id === video._id) ? (
                <i
                  className="videoEachIcon"
                  onClick={() => deleteWatchLaterHandler(video._id)}
                >
                  <BsFillBookmarkFill />
                </i>
              ) : (
                <i
                  className="videoEachIcon"
                  onClick={() => watchLaterHandler()}
                >
                  <BsBookmark />
                </i>
              )}
              <i onClick={playlistHandler} className="videoEachIcon">
                <RiPlayList2Fill />
              </i>
            </div>
          </div>
          <div className="cardText">
            <img
              className="chennelProfile"
              src={video.chennelProfile}
              alt="profileImg"
            />
            <div className="cardFooter">
              <p className="thumnail_text">{video.title}</p>
              <h5 className="channelName ">{video.chennelName}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export { SingleVideo };
