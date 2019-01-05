import React, { Component } from 'react';
import { InputNumber as AntInputNumber} from 'antd';

class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  onValueChange(value) {
    this.setState({ value: value })
  }

  render() {
    return (
      <AntInputNumber
        {...this.state}
        onChange={ (v) => this.onValueChange(v) }
      />
    )
  }
}

export default InputNumber;
