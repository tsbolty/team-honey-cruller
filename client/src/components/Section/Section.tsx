import clsx from 'clsx';
import useStyles from './useStyles';

interface SectionProps {
    className?: string;
    children?: JSX.Element;
    narrow?: boolean;
    fullWidth?: boolean;
    disablePadding?: boolean;
    [x: string]: any;
}

const Section = ({
    children,
    fullWidth,
    narrow,
    disablePadding,
    className,
    ...rest
}: SectionProps): JSX.Element => {
    const classes = useStyles();

    return (
        <section
            className={clsx(
                'section',
                classes.root,
                fullWidth ? classes.fullWidth : {},
                narrow ? classes.narrow : {},
                disablePadding ? classes.disablePadding : {},
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
};

export default Section;
