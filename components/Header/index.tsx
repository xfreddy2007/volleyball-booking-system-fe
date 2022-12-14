import React from 'react';
import classNames from 'classnames';
import NavHome from '@/assets/icons/icon-volleyball-nav-home.png';
import NavEvent from '@/assets/icons/icon-volleyball-nav-event.png';
import NavCalendar from '@/assets/icons/icon-volleyball-nav-calendar.png';
import NavUser from '@/assets/icons/icon-volleyball-nav-user.png';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { switchCurrentTab, toggleMobileMenuOpen } from '@/store/feature/currentMenu';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import LinkItem from './LinkItem';
import style from './Header.module.scss';

export const menuData = [
  {
    href: '/',
    text: 'Home',
    imageSrc: NavHome,
  },
  {
    href: '/events',
    text: 'Events',
    imageSrc: NavEvent,
  },
  {
    href: '/calendar',
    text: 'Calendar',
    imageSrc: NavCalendar,
  },
  {
    href: '/account',
    text: 'Account',
    imageSrc: NavUser,
  },
];

const Header: React.FC = () => {
  const tab = useAppSelector((state) => state.currentMenu.currentTab);
  const isOpen = useAppSelector((state) => state.currentMenu.isMobileMenuOpen);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaMatch('(min-width: 768px)');

  return (
    <nav className={classNames('header__z-index', style.root)}>
      <div className={classNames('grid__container', style.container)}>
        {!isDesktop && (
          <div className={style.hambugerIcon} onClick={() => dispatch(toggleMobileMenuOpen())}>
            <div className={classNames(style.hambugerOne, 'dark:bg-white', isOpen && style.open)} />
            <div className={classNames(style.hambugerTwo, 'dark:bg-white', isOpen && style.open)} />
            <div className={classNames(style.hambugerThree, 'dark:bg-white', isOpen && style.open)} />
          </div>
        )}
        <h2 className={style.icon}>排球Queue</h2>
        <div className={style.menu}>
          {menuData.map((item, idx) => {
            return (
              <LinkItem
                key={item.text}
                isSelected={tab === idx}
                {...item}
                onClick={() => dispatch(switchCurrentTab(idx))}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
