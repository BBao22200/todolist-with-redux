import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "date-fns";

import Todo from "./Todo";
import { addTodo, fetchData } from "../redux/actions";

export default function TodoList() {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState("MEDIUM")
  const [category, setCategory] = useState("LEARNING")

  const todosList = useSelector((state) => state.todoslist);

  const date = format(new Date(), 'yyyy-MM-dd');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const handleCategoryChange = (value) => {
    setCategory(value)
  }

  const handleAddButtonClick = async () => {
    const temp = {
      "id": (Math.random() * 11),
      "todo": input,
      "priority": priority,
      "category": category,
      "status": "TO DO",
      "dueDate": date
    }
    try {
      const response = await axios.post('http://localhost:3000/todos', temp);
      if (response?.status === 200) {
        // dispatch(addTodo(temp))
        const newResponse = await axios.get(
          `http://localhost:3000/todos/`
        );
        dispatch(fetchData(newResponse.data))
      }
      console.log("todosList: ",todosList)
    } catch (error) {
      console.log(error)
    }
    setInput("")
  }

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos/`
        );
        if (response?.status === 200) {
          dispatch(fetchData(response.data));
        }
        console.log("response", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todosList.map((todo => {
          return (
            <Todo 
            key={todo.id}
            data={todo}
            />
          )
        }))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }}>
          <Input onChange={handleInputChange} value={input} />
          <Button type="primary" onClick={handleAddButtonClick}>Add</Button>
          <Select defaultValue="MEDIUM" onChange={handlePriorityChange} value={priority}>
            <Select.Option value="HIGH" label="High">
              <Tag>High</Tag>
            </Select.Option>
            <Select.Option value="MEDIUM" label="Medium">
              <Tag>Medium</Tag>
            </Select.Option>
            <Select.Option value="LOW" label="Low">
              <Tag>Low</Tag>
            </Select.Option>
          </Select>
          <Select defaultValue="LEARNING" onChange={handleCategoryChange} value={category}>
            <Select.Option value="WORK" label="Work">
              <Tag>Work</Tag>
            </Select.Option>
            <Select.Option value="HOME" label="Home">
              <Tag>Home</Tag>
            </Select.Option>
            <Select.Option value="LEARNING" label="Learning">
              <Tag>Learning</Tag>
            </Select.Option>
          </Select>
        </Input.Group>
      </Col>
    </Row>
  );
}
