import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import ResourceMenu from './ResourceMenu.js'

const {
  Header, Footer, Sider, Content,
} = Layout;

class AdminLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider collapsible>
          <ResourceMenu />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AdminLayout;
