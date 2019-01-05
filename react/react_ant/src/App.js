import React, { Component } from 'react';
import AdminLayout from './AdminLayout.js'

import DatePicker from './DatePicker.js';
import InputNumber from './InputNumber.js';


import 'antd/dist/antd.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <AdminLayout />
    );
  }
}

export default App;

// <div>
//   <InputNumber
//     formatter={value => `${value}%`}
//     parser={value => value.replace('%', '')}
//   />
//   <DatePicker format="YYYY/MM/DD"/>
// </div>
