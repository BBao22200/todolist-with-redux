import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";

import Todo from "./Todo";
import { addTodos, fetchTodos } from "../features/todo/todoSlice"

export default function TodoList() {
  const [input, setInput] = useState("")
  const [priority, setPriority] = useState("MEDIUM")
  const [category, setCategory] = useState("LEARNING")

  const todosList = useSelector((state) => state.todosList.todos);
  const isLoading = useSelector((state) => state.todosList.status === "true");

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

  const handleAddButtonClick = () => {
    const temp = {
      "id": (Math.random() * 11),
      "todo": input,
      "priority": priority,
      "category": category,
      "status": "TO DO",
      "dueDate": date
    }
    dispatch(addTodos(temp))
    setInput("")
  }

  useEffect(() => {
    dispatch(fetchTodos()).then((state) => { console.log(state.status) })
  }, []);

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          todosList.map((todo) => (
            <Todo key={todo.id} data={todo} />
          ))
        )}
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
