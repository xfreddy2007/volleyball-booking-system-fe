/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import classNames from 'classnames';
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
      accountPage = <AccountOverview setPage={setUserPage} />;
      break;
  }
  const [isMobileInSubNav, setIsMobileInSubNav] = useState('');
  return (
    <div className="mt-12 w-full">
      <div className={classNames('grid__container', style.container)} data-mobile-subnav={!!isMobileInSubNav}>
        {isDesktop ? (
          <AccountDesktopNavigation setPage={setUserPage} page={userPage} />
        ) : (
          <AccountMobileNavigation
            navState={isMobileInSubNav}
            setNavState={setIsMobileInSubNav}
            setPage={setUserPage}
          />
        )}
        <div className="overflow-auto grid-area-[page] lg:mt-16">{accountPage}</div>
      </div>
    </div>
  );
};

export default AccountPage;
