import React from 'react';
import classNames from 'classnames';
import NavHome from '@/assets/icons/icon-volleyball-nav-home.png';
import NavEvent from '@/assets/icons/icon-volleyball-nav-event.png';
import NavCalendar from '@/assets/icons/icon-volleyball-nav-calendar.png';
import NavUser from '@/assets/icons/icon-volleyball-nav-user.png';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { switchCurrentTab } from '@/store/feature/currentMenu';
import LinkItem from './LinkItem';
import style from './Header.module.scss';

const menuData = [
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
  const dispatch = useAppDispatch();
  return (
    <nav className="fixed left-0 top-0 h-[48px] w-full bg-yellow">
      <div className={classNames('grid__container', style.container)}>
        <h2 className={classNames('h-[48px] text-xl font-black leading-[48px] text-red', style.icon)}>排球Queue</h2>
        <div className={classNames('flex justify-center gap-x-2', style.menu)}>
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
