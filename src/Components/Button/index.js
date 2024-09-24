import classNames from 'classnames/bind'
import style from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(style)

function Button({
    children,
    to,
    href,
    primary,
    popular,
    outline,
    active,
    long,
    message,
    small,
    medium,
    large,
    leftIcon,
    rightIcon,
    disabled,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    const classes = cx('wrapper', {
        primary,
        small,
        medium,
        large,
        popular,
        active,
        long,
        outline,
        message,
        disabled
    })

    const props = {
        ...passProps,
        onClick
    }

    if (href) {
        Comp = 'a'
        props.href = href
    }
    if (to) {
        Comp = Link
        props.to = to
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
