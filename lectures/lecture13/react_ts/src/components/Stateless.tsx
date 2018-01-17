import * as React from 'react';

export const Stateless = (props: { value?: string, component: any }) => {
    const Component = props.component
    return (
        <div>
            <h1>{props.value}</h1>
            <Component />
        </div>
    );
}

Stateless.defaultProps = {
    value: 'default'
}
