import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import FacebookIcon from '@/assets/icons/icon-facebook.svg';
import InstagramIcon from '@/assets/icons/icon-instagram.svg';
import LinkedInIcon from '@/assets/icons/icon-linkedin.svg';
import GithubIcon from '@/assets/icons/icon-github.svg';
import MobileFooterList from './MobileFooterList';
import FooterList from './FooterList';
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
        <div className={style.iconContainer}>
          <a href="https://www.facebook.com/xfreddy2007" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/xfreddy2007/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/freddy-liu-515525156/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/xfreddy2007" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
      <p className={style.copyright}>
        <span>{`© ${new Date().getFullYear()} - Developed by Freddy Liu.`}</span>
        <span>All Rights Reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
