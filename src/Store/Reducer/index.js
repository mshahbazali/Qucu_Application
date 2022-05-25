const STATE_DATA = {
    RegisterMobileNumber: '',
    UserId: ""
}

const Reducer = (state = STATE_DATA, action) => {
    switch (action.type) {
        case "RegisterMobileNumber":
            state.RegisterMobileNumber = action.RegisterMobileNumber;
        case "UserId":
            state.UserId = action.UserId;
        default:
            return state
    }

}

export default Reducer;