import * as React from 'react';

import { interval } from 'rxjs/observable/interval'

import * as moment from 'moment';


export default class Time extends React.Component<{ timeFormat: string }, { time: string, value?: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      time: moment().format(this.props.timeFormat)
    };

    interval(1000)
      .subscribe(() => {
        this.setState({
          time: moment().format(this.props.timeFormat)
        })
      })
  }

  render() {
    return (
      <div ref="mainElem">
        <h1>{this.state.time}</h1>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Time.defaultProps = {
  value: 'test'
}