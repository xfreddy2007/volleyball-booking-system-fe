/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import style from './AccountDesktopNavigation.module.scss';

const AccountDesktopNavigation: React.FC = () => {
  const router = useRouter();
  return (
    <div className="order-1 flex w-[300px] flex-col gap-y-2 grid-area-[nav]">
      <button onClick={() => router.push('/account')} className={style.link}>
        帳戶總覽
      </button>
      <button onClick={() => router.push('/account', '/account/seasonalgame')} className={style.link}>
        季打名單
      </button>
    </div>
  );
};

export default AccountDesktopNavigation;
