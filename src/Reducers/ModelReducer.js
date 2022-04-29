const ModalReducer = (ModalState, action) => {
    switch (action.type) {
        case "Modal":
            return {
                ...ModalState,
                openCloseModal: action.payload.status,video:action.payload.video
            };
        default:
            return {
                ModalState
            };
    }
};
export { ModalReducer };
