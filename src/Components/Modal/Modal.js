import { useState } from "react";
import { useModal } from "./../../Context/ModelContext"
import { usePlayList } from "../../Context/PlayListContext/PlayListContext";
import "./Modal.css";
// import { Playlist } from "../../Page";
const Modal = () => {
  const {ModalState,Modaldispatch } = useModal();
  // console.log(ModalState,"modelState");
  const {video}=ModalState
  // console.log(video,"video");
  const {Playlist,PlayListDispatch} =usePlayList();
  console.log(Playlist,"playlist now")
  const [title ,setTitle]=useState("")

  const ChangeHandler=(e)=>{
    setTitle(e.target.value)
  }
  
  const playListCheckHandler=(e,play)=>{
    PlayListDispatch({type:"ADD_TO_PLAYLIST",payload:{Playlist:play,video:video}})


  }
  return (
    <div className="ModalDiv">
      <div className="ModalHeader">
          <h5>Create New Playlist</h5>
          <i onClick={() => Modaldispatch({ type: "Modal", payload: {status:false, video:{}} })} className="fa fa-close" ></i>
      </div>
      <hr></hr>
      {Playlist.map((play)=>{
        console.log(play,"play");
        return (
            <div className="checkboxDiv" key={play._id}>
            <label htmlFor={play._id} className="PlayListcheckbox"> <input id={play._id} type="checkbox"  onChange={(e)=>playListCheckHandler(e,play)}/>{play.title} 
            </label>
            </div>
        )
      })}
      <input  className="playlistInput"  onChange={ChangeHandler}  value ={title} placeholder="Create new playlist"/>
      <div className="createText">
           <h5 onClick={()=>PlayListDispatch({type:"CREATE_PLAYLIST",payload:{playList:{title,_id :Playlist.length,videos:[]}

           }})}>Creact</h5>
      </div>

    </div>
  );
};
export { Modal };
