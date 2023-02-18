import axios from "axios";

import { fetchData } from "../redux/actions";

export const fetchDataFromAPI = async (dispatch) => {
    const response = await axios.get(`http://localhost:3000/todos/`);
    dispatch(fetchData(response.data));
    return response.data;
};

