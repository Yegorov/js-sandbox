import React, { Component } from 'react';
import { DatePicker as AntDatePicker } from 'antd';

import locale_ru from 'antd/lib/date-picker/locale/ru_RU';
import * as moment from 'moment';
import 'moment/locale/ru';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: locale_ru,
      format: props.format || "DD/MM/YYYY",
      value: moment()
    }
  }

  handleOnChage(d) {
    this.setState({ value: d })
  }

  render() {
    return (
      <AntDatePicker
        locale={this.state.locale}
        format={this.state.format}
        value={this.state.value}
        onChange={(d) => this.handleOnChage(d)}
      />
    )
  }
}

export default DatePicker
