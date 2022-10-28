/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import classNames from 'classnames';
import Breadcrumb from '../Breadcrumb';
import AccountDesktopNavigation from './AccountDesktopNavigation';
import AccountMobileNavigation from './AccountMobileNavigation';
import AccountOverview from '../AccountOverview';
import AccountSeasonalClub from '../AccountSeasonalClub';
import AccountBookedGame from '../AccountBookedGame';
import style from './AccountPage.module.scss';

const AccountPage: React.FC = () => {
  const isDesktop = useMediaMatch('(min-width: 1024px)');

  const [userPage, setUserPage] = useState('overview');
  let accountPage: JSX.Element;
  switch (userPage) {
    case 'seasonalClub':
      accountPage = <AccountSeasonalClub />;
      break;
    case 'bookedGame':
      accountPage = <AccountBookedGame />;
      break;
    case 'overview':
    default:
      accountPage = <AccountOverview />;
      break;
  }
  const [isMobileInSubNav, setIsMobileInSubNav] = useState('');
  return (
    <div className="mt-12 h-full w-full pt-8">
      <div className={classNames('grid__container', style.container)} data-mobile-subnav={!!isMobileInSubNav}>
        <Breadcrumb />
        {isDesktop ? (
          <AccountDesktopNavigation setPage={setUserPage} />
        ) : (
          <AccountMobileNavigation
            navState={isMobileInSubNav}
            setNavState={setIsMobileInSubNav}
            setPage={setUserPage}
          />
        )}
        <div className="h-full grid-area-[page]">{accountPage}</div>
      </div>
    </div>
  );
};

export default AccountPage;
