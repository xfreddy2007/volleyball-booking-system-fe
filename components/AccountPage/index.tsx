/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import classNames from 'classnames';
import Breadcrumb from '../Breadcrumb';
import AccountDesktopNavigation from './AccountDesktopNavigation';
import AccountMobileNavigation from './AccountMobileNavigation';
import style from './AccountPage.module.scss';

const AccountPage: React.FC = () => {
  const isDesktop = useMediaMatch('(min-width: 1024px)');

  const [userPage, setUserPage] = useState('overview');
  const [isMobileInSubNav, setIsMobileInSubNav] = useState('');
  return (
    <div className="mt-12 w-full pt-8">
      <div className={classNames('grid__container', style.container)} data-mobile-subnav={!!isMobileInSubNav}>
        <Breadcrumb />
        {isDesktop ? (
          <AccountDesktopNavigation />
        ) : (
          <AccountMobileNavigation navState={isMobileInSubNav} setNavState={setIsMobileInSubNav} />
        )}
        <div className="grid-area-[page]">Page</div>
      </div>
    </div>
  );
};

export default AccountPage;
