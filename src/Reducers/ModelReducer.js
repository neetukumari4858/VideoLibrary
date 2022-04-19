const ModelReducer = (modelState, action) => {
    switch (action.type) {
        case "MODEL":
            return {
                ...modelState,
                openCloseModel: action.payload
            };
        default:
            return {
                modelState
            };
    }
};
export { ModelReducer };
