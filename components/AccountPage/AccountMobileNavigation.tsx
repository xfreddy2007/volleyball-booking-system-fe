/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowIcon from '@/assets/icons/icon-arrow.png';
import NavBtn from './NavBtn';
import style from './AccountMobileNavigation.module.scss';

type AccountMobileNavigationProps = {
  navState: string;
  setNavState: (state: string) => void;
  setPage: (state: string) => void;
};

const AccountMobileNavigation: React.FC<AccountMobileNavigationProps> = ({ navState, setNavState, setPage }) => {
  const router = useRouter();
  return (
    <div
      className={classNames(
        'mt-8 flex flex-col grid-area-[nav]',
        !navState && 'border-t-2 border-solid border-[#e1e1e1]',
      )}
    >
      {navState ? (
        <button
          className="relative flex cursor-pointer items-center gap-x-2 border-2 border-solid border-[#e1e1e1] p-4 text-xl font-semibold text-blue"
          onClick={() => {
            setPage('overview');
            router.push('/account');
            setNavState('');
          }}
        >
          <Image src={ArrowIcon} width={24} height={24} />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{navState}</span>
        </button>
      ) : (
        <>
          <NavBtn
            text="我的報名場次"
            className={style.link}
            navPlaceholder="/account/bookedgame"
            setPage={() => setPage('bookedGame')}
            callback={() => setNavState('我的報名場次')}
            arrowIcon
          />
          <NavBtn
            text="季打名單"
            className={style.link}
            navPlaceholder="/account/seasonalclub"
            setPage={() => setPage('seasonalClub')}
            callback={() => setNavState('季打名單')}
            arrowIcon
          />
        </>
      )}
    </div>
  );
};

export default AccountMobileNavigation;
