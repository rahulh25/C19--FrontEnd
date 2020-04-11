import React, { useEffect } from 'react';
import { Affix, Col, Layout, List, Row } from 'antd';
import { BoardHeader, JobCard } from './components';
import './styles/index.css';
import 'antd/dist/antd.css';
import { getJobs } from '../../actions/jobPostingActions';
import { useSelector, useDispatch } from 'react-redux';

const { Content, Header } = Layout;

export const Jobs = () => {
  const listings = useSelector((state) => state.jobsReducer.jobs);
  const dispatch = useDispatch();

  const queryListings = async () => {
    await dispatch(getJobs());
  };

  useEffect(() => {
    queryListings();
  }, []);

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
              dataSource={listings}
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
