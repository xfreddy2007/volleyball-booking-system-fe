import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileMenuOpen, switchCurrentTab } from '@/store/feature/currentMenu';
import useMediaMatch from '@/libs/hooks/useMediaMatch';
import CloseIcon from '@/assets/icons/icon-close.svg';
import { menuData } from '.';
import LinkItem from './LinkItem';
import style from './MobileSidebar.module.scss';

const MobileSidebar: React.FC = () => {
  const tab = useAppSelector((state) => state.currentMenu.currentTab);
  const isOpen = useAppSelector((state) => state.currentMenu.isMobileMenuOpen);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaMatch('(min-width: 768px)');
  useEffect(() => {
    if (isDesktop) dispatch(toggleMobileMenuOpen(false));
  }, [dispatch, isDesktop]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);
  return (
    <>
      <div className={classNames('navigation-list__z-index', style.root, isOpen && style.open)}>
        <div className={style.closeIcon} onClick={() => dispatch(toggleMobileMenuOpen(false))}>
          <CloseIcon />
        </div>
        <div className={style.menu}>
          {menuData.map((item, idx) => {
            return (
              <LinkItem
                key={item.text}
                isSelected={tab === idx}
                {...item}
                onClick={() => {
                  dispatch(switchCurrentTab(idx));
                  dispatch(toggleMobileMenuOpen(false));
                }}
              />
            );
          })}
        </div>
      </div>
      {isOpen && (
        <div
          className={classNames('navigation-list-modal__z-index', style.modal)}
          onClick={() => dispatch(toggleMobileMenuOpen(false))}
        />
      )}
    </>
  );
};

export default MobileSidebar;
