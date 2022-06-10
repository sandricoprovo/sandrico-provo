import { forwardRef, ForwardedRef } from 'react';
import { TablerIcon, TablerIconProps } from '@tabler/icons';
import { motion } from 'framer-motion';

import { IconProps } from './withIconStyles';

type IconMotionProps = IconProps & TablerIconProps;

function withIconMotions(Icon: TablerIcon) {
    const IconWithRef = forwardRef<HTMLElement, IconMotionProps>((props, ref) =>
        // Wraps the icon inside a div or a tag based on available href
        !props.href ? (
            <div ref={ref as ForwardedRef<HTMLDivElement>}>
                <Icon {...props} />
            </div>
        ) : (
            <a
                ref={ref as ForwardedRef<HTMLAnchorElement>}
                href={props.href}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Icon {...props} />
            </a>
        )
    );

    return motion(IconWithRef);
}

export default withIconMotions;
