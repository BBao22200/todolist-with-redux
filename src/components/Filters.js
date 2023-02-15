import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';

const { Search } = Input;

export default function Filters() {
  return (
    <Row justify='center'>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='done'>Done</Radio>
          <Radio value='inprogress'>In Progress</Radio>
          <Radio value='todo'>To do</Radio>
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