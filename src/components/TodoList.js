import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Todo from "./Todo";
import { addTodo } from "../redux/actions";
import { fetchAPI } from "../redux/actions";

export default function TodoList() {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState("Medium")
  const [category, setCategory] = useState("Learning")

  const todosList = useSelector((state) => state.todoslist);
  console.log({ todosList })

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

  const handleButtonClick = async () => {
    // dispatch(addTodo({
    //   id: uuidv4(),
    //   todo: input,
    //   priority: priority,
    //   category: category,
    //   status: "To do",
    //   dueDate: Date()
    // }))
    // setInput("")
    const response = await axios.post(`http://localhost:3000/todos/`)
    console.log(response)
  }

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos/`
        );
        if (response?.status === 200) {
          dispatch(fetchAPI(response.data));
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
        {todosList.map((todo => (
          todo.map(item => {
            return (
              <Todo 
                key={item.id}
                data={item}
              />
            )
          })
        )))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }}>
          <Input onChange={handleInputChange} value={input} />
          <Button type="primary" onClick={handleButtonClick}>Add</Button>
          <Select defaultValue="Medium" onChange={handlePriorityChange} value={priority}>
            <Select.Option value="High" label="High">
              <Tag>High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag>Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag>Low</Tag>
            </Select.Option>
          </Select>
          <Select defaultValue="Learning" onChange={handleCategoryChange} value={category}>
            <Select.Option value="Work" label="Work">
              <Tag>Work</Tag>
            </Select.Option>
            <Select.Option value="Home" label="Home">
              <Tag>Home</Tag>
            </Select.Option>
            <Select.Option value="Learning" label="Learning">
              <Tag>Learning</Tag>
            </Select.Option>
          </Select>
        </Input.Group>
      </Col>
    </Row>
  );
}
