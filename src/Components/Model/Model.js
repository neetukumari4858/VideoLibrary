import { useModel } from "./../../Context/ModelContext";
import "./Model.css";
const Model = () => {
  const { modeldispatch } = useModel();
  return (
    <div className="close">
      <div>
          <h3>Create New Playlist</h3>
          <button onClick={() => modeldispatch({ type: "MODEL", payload: false })}>
        close
      </button>
      </div>
      <input placeholder="Create new playlist"/>
      <p>Creact</p>
     
    </div>
  );
};
export { Model };
