import * as React from 'react';

export default class LifecycleHooks extends React.Component<any, { value: string }> {
    constructor(props: any) {
        super(props);
        console.log('[LIFE-HOOKS] 1. Constructor');
        
        this.state = {
            value: ''
        }
    }

    componentWillMount() {
        console.log('[LIFE-HOOKS] 2. Will mount');
    }

    render() {
        console.log('[LIFE-HOOKS] 3. Render')
        return (
            <div>
                LifecycleHooks
                <p>{this.state.value}</p>
                <input type="text" value={this.state.value} onChange={this.onChange} />
            </div>
        )
    }

    onChange = (event: any) => {
        const value = event.target.value;
        this.setState(({ timeFormat }) => ({
          value
        }));
      }

    componentDidMount() {
        console.log('[LIFE-HOOKS] 4. Did mount');
    }

    componentWillUpdate() {
        console.log('[LIFE-HOOKS] 2. Will Update');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[LIFE-HOOKS] 1. Should Update?', nextProps, nextState);
        return nextState.value && this.state.value < nextState.value;
    }

    componentDidUpdate() {
        console.log('[LIFE-HOOKS] 4. Did Update');
    }
}