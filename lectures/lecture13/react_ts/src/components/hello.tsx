import * as React from "react";
import Time from './Time';
import LifecycleHooks from './LifecycleHooks'
import { Stateless } from './Stateless'


export interface HelloProps { compiler: string; framework: string; }

export interface HelloState {
  value: string;
  timeFormat: string;
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: "Ivan",
      timeFormat: 'HH:mm:ss'
    }
  } 
  render() {
    return (
      <div>
        {/* <h1>{this.props.compiler} and {this.props.framework}!</h1> */}
        <p>{this.state.timeFormat}</p>
        <input type="text" value={this.state.timeFormat} onChange={this.onChange} />

        <Stateless component={LifecycleHooks} />

        <Time timeFormat={this.state.timeFormat}/>
      </div>
    );
  }

  onChange = (event: any) => {
    const value = event.target.value;
    this.setState(({ timeFormat }) => ({
      timeFormat: value
    }));
  }
}
