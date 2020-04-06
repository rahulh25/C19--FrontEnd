import React from 'react';
import { Affix, Col, Layout, List, Row } from 'antd';
import { BoardHeader, JobCard } from './components';
import { testJobs } from '../../lib/mock';
import './styles/index.css';
import 'antd/dist/antd.css';

const { Content, Header } = Layout;

export const Jobs = () => {
  return (
    <Layout className="jobs__layout">
      <Affix offsetTop={0}>
        <Header></Header>
      </Affix>
      <Content className="jobs__content">
        <Row gutter={16} justify="center">
          <Col span={16}>
            <List
              header={<BoardHeader />}
              dataSource={testJobs}
              renderItem={(item) => <JobCard job={item} />}
              pagination={{
                hideOnSinglePage: true,
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
