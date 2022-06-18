import axios from "axios";

const getSingleVideo = async (videoId, setVideo) => {
  try {
    const response = await axios.get(`/api/video/${videoId}`);
    console.log(response, "resp");
    setVideo(response.data.video);
  } catch (error) {
    console.log(error);
  }
};
export { getSingleVideo };
