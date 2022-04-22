import { useState } from "react";
import { useModal } from "./../../Context/ModelContext"
import { usePlayList } from "../../Context/PlayListContext/PlayListContext";
import "./Modal.css";
// import { Playlist } from "../../Page";
const Modal = () => {
  const {Modaldispatch } = useModal();
  const {Playlist,PlayListDispatch} =usePlayList();
  const [title ,setTitle]=useState("")

  const ChangeHandler=(e)=>{
    setTitle(e.target.value)
  }

  return (
    <div className="ModalDiv">
      <div className="ModalHeader">
          <h5>Create New Playlist</h5>
          <i onClick={() => Modaldispatch({ type: "Modal", payload: false })} className="fa fa-close" ></i>
      </div>
      <hr></hr>
      {Playlist.map((play)=>{
        return (
            <div className="checkboxDiv">
            <label  className="PlayListcheckbox" key={play._id}> <input type="checkbox" />{play.title} 
            </label>
            </div>
        )
      })}
      <input  className="playlistInput"  onChange={ChangeHandler}  value ={title} placeholder="Create new playlist"/>
      <div className="createText">
           <h5 onClick={()=>PlayListDispatch({type:"CREATE_PLAYLIST",payload:{playList:{title,_id:Playlist.length+1}

           }})}>Creact</h5>
      </div>

    </div>
  );
};
export { Modal };
