import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export function Text({children, asChield, className, color }) {
    const Comp = asChield ? Slot : 'div';

    return (
        <Comp
            className={clsx(
                'Ubuntu',
                color ? color : 'text-colorsText',
                className,
            )}
        >
            {children}
        </Comp>
    )
}