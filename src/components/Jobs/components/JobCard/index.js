import React from 'react';
import moment from 'moment';
import { Card, List, Tag, Typography } from 'antd';

const { Paragraph, Text, Title } = Typography;

export const JobCard = ({ job }) => {
  const { jobTitle: title, description, postedDate, skills } = job;
  const date = Date.parse(postedDate);
  return (
    <List.Item>
      <Card hoverable className="job-card__card">
        <Title level={3}>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <br />
        <List
          itemLayout="horizontal"
          grid={{ gutter: 4 }}
          dataSource={skills}
          renderItem={(skill) => (
            <List.Item>
              <Tag>{skill}</Tag>
            </List.Item>
          )}
        />
        <Text type="secondary" style={{ fontSize: '10px' }}>
          Posted {moment(date).fromNow()}
        </Text>
      </Card>
    </List.Item>
  );
};
