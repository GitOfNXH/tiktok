import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faEllipsisVertical,
    faGlobe,
    faHouseUser,
    faMagnifyingGlass,
    faMoon,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import Button from '~/Components/Button'
import style from './Header.module.scss'
import image from '~/assets/images'
import PopperWrapper from '~/Components/Popper'
import SearchItem from '~/Components/SearchItem'
import Menu from '~/Components/Popper/Menu'

const cx = classNames.bind(style)

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const menuDatas = [
        {
            icon: <FontAwesomeIcon icon={faHouseUser} />,
            title: 'Creator tools'
        },
        {
            icon: <FontAwesomeIcon icon={faGlobe} />,
            title: 'English'
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Dark'
        }
    ]

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
                                        <SearchItem title='Hoạt hình cho em bé' />
                                        <SearchItem title='Hoa anh đào đà lạt' />
                                        <SearchItem title='Hoa bỉ ngạn' />
                                        <SearchItem title='Hoa thiên cốt' />
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

                    <Menu menuDatas={menuDatas}>
                        <button className={cx('option')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
