import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import style from './Menu.module.scss'
import Button from '~/Components/Button'

const cx = classNames.bind(style)

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <Button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    )
}

export default Header
