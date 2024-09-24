import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faEllipsis,
    faEllipsisVertical,
    faMagnifyingGlass,
    faSearch,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import Button from '~/Components/Button'
import style from './Header.module.scss'
import image from '~/assets/images'
import PopperWrapper from '~/Components/Popper'

const cx = classNames.bind(style)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt='Tiktok' />
                </div>
                <div>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                                <PopperWrapper>
                                    <ul className={cx('search-list')}>
                                        <li className={cx('search-item')}>
                                            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                                            <span className={cx('search-title')}>Hoạt hình cho em bé</span>
                                            <FontAwesomeIcon className={cx('search-option')} icon={faEllipsis} />
                                        </li>
                                        <li className={cx('search-item')}>
                                            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                                            <span className={cx('search-title')}>Hoàng sao special</span>
                                            <FontAwesomeIcon className={cx('search-option')} icon={faEllipsis} />
                                        </li>
                                        <li className={cx('search-item')}>
                                            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                                            <span className={cx('search-title')}>Honor x9b</span>
                                            <FontAwesomeIcon className={cx('search-option')} icon={faEllipsis} />
                                        </li>
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search-wrap')}>
                            <div className={cx('search')}>
                                <input type='text' placeholder='Search' spellCheck={false} />
                                <button className={cx('clear')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                                <div className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    <Button primary medium>
                        Log in
                    </Button>
                    <FontAwesomeIcon className={cx('option')} icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    )
}

export default Header
