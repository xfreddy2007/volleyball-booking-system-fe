/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBtn from './NavBtn';
import style from './AccountDesktopNavigation.module.scss';

const AccountDesktopNavigation: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-2 grid-area-[nav]">
      <NavBtn text="帳戶總覽" className={style.link} />
      <NavBtn text="季打名單" className={style.link} navPlaceholder="/account/seasonalgame" />
      <NavBtn text="我的報名場次" className={style.link} navPlaceholder="/account/bookedgame" />
    </div>
  );
};

export default AccountDesktopNavigation;
