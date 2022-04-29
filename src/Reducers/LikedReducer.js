
const likedReducer=(likedState,action)=>{
    const {likedVideos} =likedState;
    switch (action.type) {
        case "ADD_TO_LIKED":
            return {...likedState, likedVideos:[...likedVideos,{...action.payload}]};
            
        case "REMOVE_FROM_LIKED":
        return {
            ...likedState,
            likedVideos: [...likedVideos.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        default:
            return {...likedState} 
    }
}
export {likedReducer}
