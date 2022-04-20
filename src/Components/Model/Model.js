import { useModel } from "./../../Context/ModelContext";
import "./Model.css";
const Model = () => {
  const { modelState,modeldispatch } = useModel();
  const {createBox}= modelState
  return (
    <div className="close">
      <div className="ModelDiv">
          <h5>Create New Playlist</h5>
          <i onClick={() => modeldispatch({ type: "MODEL", payload: false })} className="fa fa-close" ></i>
      </div>
      <hr></hr>
      <input  className="playlistInput" placeholder="Create new playlist"/>
      <div className="createText">
           <h5 onClick={()=>modeldispatch ({type:"CREATE_ITEMS"})}>Creact</h5>
      </div>
     
      
     
    </div>
  );
};
export { Model };
