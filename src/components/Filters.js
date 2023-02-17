import { Col, Row, Input, Typography, Radio, Select, Tag, Button } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus } from '../redux/actions';
import axios from "axios";

export default function Filters() {
  const [filterStatus, setFilterStatus] = useState("")
  
  const handleRadioChange = (choice) => {
    setFilterStatus(choice.target.value)
  }
  
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    filterStatus();
  };

  return (
    <Row justify='center'>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleRadioChange}>  
          <Radio value='done'>Done</Radio>
          <Radio value='inprogress'>In Progress</Radio>
          <Radio value='todo'>To do</Radio>
          <Button onClick={handleButtonClick}>Search</Button>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Category
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='work'>Work</Radio>
          <Radio value='home'>Home</Radio>
          <Radio value='learing'>Learning</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='high'>High</Radio>
          <Radio value='medium'>Medium</Radio>
          <Radio value='low'>Low</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
}