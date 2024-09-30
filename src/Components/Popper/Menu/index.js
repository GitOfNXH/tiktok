import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import PopperWrapper from '~/Components/Popper'
import style from './Menu.module.scss'
import Button from '~/Components/Button'

const cx = classNames.bind(style)

function Menu({ children, menuDatas }) {
    const renderItem = () =>
        menuDatas.map((data) => (
            <Button leftIcon={data.icon} to={data.to} key={data.title}>
                {data.title}
            </Button>
        ))

    return (
        <Tippy
            interactive
            delay={[100, 700]}
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        <div className={cx('menu-list')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
