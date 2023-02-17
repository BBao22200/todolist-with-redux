export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: data
    };
};
export const fetchData = (data) => {
    return {
        type: "FETCH_DATA",
        payload: data
    };
};

export const deleteTodo = (id) => {
    return {
        type: "DELETE",
        payload: id
    }
}