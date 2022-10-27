import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowIcon from '@/assets/icons/icon-arrow.png';
import classNames from 'classnames';

type NavBtnProps = {
  className?: string;
  navPlaceholder?: string;
  text: string;
  arrowIcon?: boolean;
  callback?: () => void;
};

const NavBtn: React.FC<NavBtnProps> = ({ className, navPlaceholder, text, arrowIcon, callback }) => {
  const router = useRouter();
  const onNavClick = useCallback(() => {
    callback?.();
    router.push('/account', navPlaceholder);
  }, [callback, navPlaceholder, router]);
  return (
    <button onClick={onNavClick} className={classNames(className, 'justify-between')}>
      <span>{text}</span>
      {arrowIcon && <Image src={ArrowIcon} width={24} height={24} className="rotate-180" />}
    </button>
  );
};

export default React.memo(NavBtn);
