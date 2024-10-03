import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import PopperWrapper from '~/Components/Popper'
import style from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(style)

const defaultFn = () => {}

function Menu({ children, menuDatas = [], onChange = defaultFn }) {
    const [menu, setMenu] = useState([{ data: menuDatas }])
    const [headerMenu, setHeaderMenu] = useState('')
    const current = menu[menu.length - 1]

    const renderItem = () =>
        current.data.map((item) => (
            <MenuItem
                data={item}
                key={item.title}
                onClick={() => {
                    const isParent = !!item.children
                    if (isParent) {
                        setHeaderMenu(item.children.title || item.title)
                        setMenu((prev) => [...prev, item.children])
                    } else {
                        onChange(item)
                    }
                }}
            />
        ))

    return (
        <Tippy
            interactive
            visible
            delay={[100, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        <div className={cx('menu-list')}>
                            {menu.length > 1 && (
                                <Header
                                    title={headerMenu}
                                    onBack={() => {
                                        setMenu((prev) => prev.slice(0, prev.length - 1))
                                    }}
                                />
                            )}
                            {renderItem()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
