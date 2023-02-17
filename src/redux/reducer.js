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
            // console.log('state:', state)
            // console.log('action =>', action)
            return {
                ...state, todoslist: [...state.todoslist, action.payload]
            }
        case "FETCH_DATA":
            return {
                ...state, todoslist: action.payload
            }
        case "FILTER_BY_STATUS":
            return {
                ...state, filter: { ...state.filters, status: action.status }
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