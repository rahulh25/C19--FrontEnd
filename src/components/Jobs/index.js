import React from 'react';
import { Card, Col, Layout, List, Typography, Row, Tag } from 'antd';
import { testJobs } from '../../lib/mock';
import './styles/index.css';
import 'antd/dist/antd.css';

const { Content } = Layout;
const { Paragraph, Text } = Typography;

const JobCard = ({ job }) => {
  const { title, description, postedOn, skills } = job;
  const datePosted = new Date(postedOn);
  return (
    <List.Item>
      <Card title={title} hoverable>
        <Paragraph>{description}</Paragraph>
        <br />
        <List
          grid={{ gutter: 4 }}
          dataSource={skills}
          renderItem={(skill) => (
            <List.Item>
              <Tag>{skill}</Tag>
            </List.Item>
          )}
        />
        <Text type="secondary" style={{ fontSize: '10px' }}>
          Posted on: {datePosted.toDateString()}
        </Text>
      </Card>
    </List.Item>
  );
};

export const Jobs = () => {
  return (
    <Layout className="jobs__layout">
      <Content>
        <Row gutter={16} justify="center">
          <Col span={12}>
            <List
              dataSource={testJobs}
              renderItem={(item) => <JobCard job={item} />}
              pagination={{
                defaultCurrent: 1,
                defaultPageSize: 5,
                simple: true,
              }}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
