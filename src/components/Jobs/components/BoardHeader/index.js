import React from 'react';
import { Input, Layout, Select, Row } from 'antd';

const { Search } = Input;
const { Header } = Layout;
const { Option } = Select;

export const BoardHeader = () => {
  return (
    <Header
      style={{
        backgroundColor: '#fefefe',
      }}
    >
      <Search placeholder="Search for listings" style={{ width: '200px' }} />
      <span> Sort By </span>
      <Select value="latest">
        <Option value="latest">Latest</Option>
        <Option value="oldest">Oldest</Option>
      </Select>
    </Header>
  );
};
