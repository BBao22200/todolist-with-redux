import axios from "axios";

export const addItem = (temp) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3000/todos', temp);
        dispatch(addTodo(response.data));
    } catch (error) {
        dispatch({ type: 'ADD_ITEM_FAILURE', payload: error.message });
    }
};

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