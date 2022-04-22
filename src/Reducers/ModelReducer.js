const ModalReducer = (ModalState, action) => {
    switch (action.type) {
        case "Modal":
            return {
                ...ModalState,
                openCloseModal: action.payload
            };
        default:
            return {
                ModalState
            };
    }
};
export { ModalReducer };
