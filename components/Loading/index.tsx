import React from 'react';
import classNames from 'classnames';
import VolleyballIcon from '@/assets/icons/icon-volleyball-mikasa.png';
import Image from 'next/image';
import { useAppSelector } from '@/store/hooks';
import style from './Loading.module.scss';

export type LoadingProps = JSX.IntrinsicElements['div'] & {
  children?: React.ReactNode;
};

const Loading: React.FC<LoadingProps> = ({ children, ...rest }) => {
  const globalLoading = useAppSelector((state) => state.init.globalLoading);
  return (
    <div className={classNames('relative min-h-screen min-w-full', globalLoading && 'pointer-events-none')} {...rest}>
      {globalLoading ? (
        <div className="absolute inset-1/2 flex h-[64px] w-[175px] origin-center -translate-x-1/2 items-center">
          <div className={style.iconAnimation}>
            <Image src={VolleyballIcon} />
          </div>
          <span className={style.textAnimation}>Loading . . . .</span>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default React.memo(Loading);
