import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";

import { fetchData } from '../redux/actions';
import { fetchDataFromAPI } from '../API/fetchDataFromAPI';

export default function Todo({ data }) {
  const { id, todo, priority, category } = data;
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/todos/${id}`)
      if (response?.status === 200) {
        // // dispatch(deleteTodo(id))
        // const newResponse = await axios.get(`http://localhost:3000/todos/`)
        // dispatch(fetchData(newResponse.data))
        // // console.log("🚀 ~ file: Todo.js:24 ~ handleDeleteTodo ~ newResponse", newResponse)
        fetchDataFromAPI(dispatch)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='todo'>
      <Row
        justify='space-between'
        style={{
          marginBottom: 3,
          ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
        }}
      >
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {todo}
        </Checkbox>
        <div>
          <Tag style={{ margin: 0 }}>
            {priority}
          </Tag>
          <Tag style={{ margin: 0 }}>
            {category}
          </Tag>
        </div>
      </Row>
      <Button onClick={handleDeleteTodo}>Delete</Button>
    </div>

  );
}