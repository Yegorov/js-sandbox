import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class ResourceMenu extends Component {
  render() {
    var submenu = (
      <Menu.Item key="1">
        <Icon type="user" />
        <span>nav 1</span>
      </Menu.Item>
    )

    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        { submenu }
        { submenu }
        { submenu }
        { submenu }
        { submenu }
        { submenu }
        { submenu }
      </Menu>
    )
  }
}
