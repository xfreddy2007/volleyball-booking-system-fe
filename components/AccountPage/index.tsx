import React from 'react';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import classNames from 'classnames';
import Breadcrumb from '../Breadcrumb';
import AccountDesktopNavigation from './AccountDesktopNavigation';
import AccountMobileNavigation from './AccountMobileNavigation';
import style from './AccountPage.module.scss';

const AccountPage: React.FC = () => {
  const isDesktop = useMediaMatch('(min-width: 1024px)');
  return (
    <div className="mt-12 w-full pt-8">
      <div className={classNames('grid__container', style.container)}>
        <Breadcrumb />
        {isDesktop ? <AccountDesktopNavigation /> : <AccountMobileNavigation />}
        <div className="grid-area-[page]">Page</div>
      </div>
    </div>
  );
};

export default AccountPage;
