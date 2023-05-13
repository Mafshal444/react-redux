const initialState = {
    count: 0, 
    text: 'Learn React', 
    completed: true,
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("increment",state)
            return state + 1;
        case "DECREMENT":
            return state.count - 1;
        case "RESET":
            return (state.count = 0 );
        default:
            return state.count;
    }
};
export default counterReducer;