import classNames from 'classnames/bind'

import style from './Menu.module.scss'
import Button from '~/Components/Button'

const cx = classNames.bind(style)

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem
