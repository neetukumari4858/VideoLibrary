
const likedReducer=(likedState,action)=>{
    const {likedVideos} =likedState;
    const LikedItem = likedVideos.find((LikedPageItems) => LikedPageItems._id === action.payload._id,)
    switch (action.type) {
        case "ADD_TO_LIKED":
            if (LikedItem){
                return {...likedState}
            }else {
            }
            return {...likedState, likedVideos:[...likedVideos,{...action.payload}]};
        case "REMOVE_From_LIKED":
        return {
            ...likedState,
            likedVideos: [...likedVideos.filter((removeItem) => removeItem._id !== action.payload._id)]
          };
        default:
            return {...likedState} 
    }
}
export {likedReducer}
