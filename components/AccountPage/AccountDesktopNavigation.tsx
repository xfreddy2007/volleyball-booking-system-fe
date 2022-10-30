/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Breadcrumb from '../Breadcrumb';
import NavBtn from './NavBtn';
import style from './AccountDesktopNavigation.module.scss';

type AccountDesktopNavigationProps = {
  page: string;
  setPage: (state: string) => void;
};

const AccountDesktopNavigation: React.FC<AccountDesktopNavigationProps> = ({ page, setPage }) => {
  return (
    <div className="grid-area-[nav]">
      <Breadcrumb />
      <div className="sticky top-14 flex flex-col gap-y-2">
        <NavBtn
          text="帳戶總覽"
          className={style.link}
          setPage={() => setPage('overview')}
          isSelected={page === 'overview'}
        />
        <NavBtn
          text="我的報名場次"
          className={style.link}
          navPlaceholder="/account/bookedgame"
          setPage={() => setPage('bookedGame')}
          isSelected={page === 'bookedGame'}
        />
        <NavBtn
          text="季打名單"
          className={style.link}
          navPlaceholder="/account/seasonalclub"
          setPage={() => setPage('seasonalClub')}
          isSelected={page === 'seasonalClub'}
        />
      </div>
    </div>
  );
};

export default AccountDesktopNavigation;
