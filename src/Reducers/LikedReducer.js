
const likedReducer=(likedState,likeAction)=>{
    const {likedVideos} =likedState;
    switch (likeAction.type) {
        case "LIKED_VIDEO":
            return {...likedState, likedVideos:likeAction.payload};
            
        case "DELETE_LIKED":
        return  {...likedState, likedVideos:likeAction.payload};
        default:
            return {...likedState} 
    }
}
export {likedReducer}
