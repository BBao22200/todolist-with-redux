export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data,
    };
};
export const fetchAPI = (data) => {
    return {
        type: "FETCH_API",
        payload: data
    };
};
export const filterByStatus = (status) => {
    return {
        type: "FILTER_BY_STATUS",
        payload: status
    };
};