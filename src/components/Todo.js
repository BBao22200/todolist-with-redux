import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { fetchAPI } from '../redux/actions';
export default function Todo({data}) {
  const { id, todo, priority, category } = data;
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    const response = await axios.delete(`http://localhost:3000/todos/${id}`)
    console.log('response', response);
    // dispatch(fetchAPI(response.data))
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