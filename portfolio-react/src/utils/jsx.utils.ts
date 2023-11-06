import * as React from 'react';

/**
 * @interface CommonProps
 * @description Default react component props.
 */
export interface CommonProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * @interface ChildrenProps
 * @description React children specification for components.
 */
export interface ChildrenProps<
    T extends unknown | unknown[] = React.ReactNode,
> {
    children?: T extends (infer U)[] ? U | U[] : T;
}
