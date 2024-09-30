import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import style from './SearchItem.module.scss'

const cx = classNames.bind(style)

function SearchItem({ title }) {
    return (
        <li className={cx('search-item')}>
            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
            <span className={cx('search-title')}>{title}</span>
            <FontAwesomeIcon className={cx('search-option')} icon={faEllipsis} />
        </li>
    )
}

export default SearchItem
