const initState = {
    filters: {
        status: "Done",
        category: "Work",
        priority: "High"
    },
    todoslist: []
}
const rootReducer = (state = initState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state, todoslist: [...state.todoslist, action.payload]
            }
        case "FETCH_API":
            return {
                ...state, todoslist: [...state.todoslist, action.payload]
            }
        case "FILTER_BY_STATUS":
            return {
                ...state, filter: {...state.filters, status: action.status}
            }
        default:
            return state;
    }
}
export default rootReducer