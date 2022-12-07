import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export function Text({children, asChield, className }) {
    const Comp = asChield ? Slot : 'div';

    return (
        <Comp
            className={clsx(
                'Ubuntu',
                {},
                className,
            )}
        >
            {children}
        </Comp>
    )
}