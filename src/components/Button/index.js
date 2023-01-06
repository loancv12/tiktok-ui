import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { key } from 'localforage';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passPros
}) {
    let Comp = 'button';

    const pros = {
        onClick,
        ...passPros,
    };

    // remove event listenr when btn disabled
    if (disabled) {
        Object.keys(pros).forEach((key) => {
            if (key.startsWith('on') && typeof pros[key] === 'function') {
                delete pros.key;
            }
        });
    }
    if (to) {
        pros.to = to;
        Comp = Link;
    } else if (href) {
        pros.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...pros}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
