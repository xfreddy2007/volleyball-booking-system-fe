/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBtn from './NavBtn';
import style from './AccountDesktopNavigation.module.scss';

type AccountDesktopNavigationProps = {
  setPage: (state: string) => void;
};

const AccountDesktopNavigation: React.FC<AccountDesktopNavigationProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col gap-y-2 overflow-y-hidden grid-area-[nav]">
      <NavBtn text="帳戶總覽" className={style.link} setPage={() => setPage('overview')} />
      <NavBtn
        text="季打名單"
        className={style.link}
        navPlaceholder="/account/seasonalclub"
        setPage={() => setPage('seasonalClub')}
      />
      <NavBtn
        text="我的報名場次"
        className={style.link}
        navPlaceholder="/account/bookedgame"
        setPage={() => setPage('bookedGame')}
      />
    </div>
  );
};

export default AccountDesktopNavigation;
