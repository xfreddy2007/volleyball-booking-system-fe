import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import FooterList from './FooterList';
import MobileFooterList from './MobileFooterList';
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  const isDesktop = useMediaMatch('(min-width: 768px)');

  const [isShow, setIsShow] = useState('');
  const toggleShow = useCallback(
    (menu: string) => {
      if (isShow === menu) {
        setIsShow('');
      } else {
        setIsShow(menu);
      }
    },
    [isShow],
  );
  return (
    <footer className={style.root}>
      <div
        className={classNames(
          'grid__container',
          style.container,
          !isDesktop && 'border-t-[1px] border-solid border-navy',
        )}
      >
        {isDesktop ? (
          <>
            <div className="grid-area-[aboutus]">
              <FooterList listId="aboutus" />
            </div>
            <div className="grid-area-[location]">
              <FooterList listId="location" />
            </div>
            <div className="grid-area-[help]">
              <FooterList listId="help" />
            </div>
          </>
        ) : (
          <>
            <div className="grid-area-[aboutus]" onClick={() => toggleShow('aboutus')}>
              <MobileFooterList listId="aboutus" isShow={isShow === 'aboutus'} />
            </div>
            <div className="grid-area-[location]" onClick={() => toggleShow('location')}>
              <MobileFooterList listId="location" isShow={isShow === 'location'} />
            </div>
            <div className="grid-area-[help]" onClick={() => toggleShow('help')}>
              <MobileFooterList listId="help" isShow={isShow === 'help'} />
            </div>
          </>
        )}
      </div>
      <p className={style.copyright}>
        <span>{`© ${new Date().getFullYear()} - Developed by Freddy Liu.`}</span>
        <span>All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
