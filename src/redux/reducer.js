const initState = {
    filters: {
        status: "Done",
        category: "Work",
        priority: "High"
    },
    todoslist: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, todoslist: [...state.todoslist, action.payload]
            }
        case "FETCH_DATA":
            return {
                ...state, todoslist: action.payload
            }
        case "DELETE":
            return {
                ...state,
                todoslist: state.todoslist.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}
export default rootReducer