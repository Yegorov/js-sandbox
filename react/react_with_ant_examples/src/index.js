import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './App.js'
import { DatePicker, Icon, Button, Badge, Alert, message, notification } from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';

import * as moment from 'moment';
import 'moment/locale/ru';

import './index.css';
import 'antd/dist/antd.css';

import axios from 'axios';

class MyBadge extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count || 1 }
  }
  componentDidMount() {
    // var self = this;
    // setInterval(
    //     function() { this.setState({count: this.state.count += 1 }) }.bind(this),
    //   1000
    // );

    //setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <Badge count={this.state.count} offset={[0, 10]}>
        <a href="#" className="head-example" />
      </Badge>
    );
  }
}

var date = "";

var onClickBtn = (e) => {
  console.log('click');
  axios.get('https://httpbin.org/headers', {
    headers: { 'X-Date': date },
  })
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.headers["X-Date"])
        notification['success']({ message: response.data.headers["X-Date"] });
      })
      .catch(function (error) {
        console.log(error);
      });
  message.info('This is a normal message');
}

var el = document.getElementById('root');
ReactDOM.render(
<div>
  <Alert message="Success Tips" type="success" showIcon />
  <Button type="primary"
    onClick={onClickBtn}
    className="test test2">
    <Icon type="plus" />
  </Button>
  <MyBadge/>
  <DatePicker
    className="Test"
    locale={locale}
    format="DD/MM/YYYY"
    defaultValue={moment()}
    onChange={function(d) {
      console.log(d);
      date = d.format("DD/MM/YYYY")
    }}
  />
</div>, el);

//ReactDOM.render(<App />, el);
