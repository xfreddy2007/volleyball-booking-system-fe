/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import style from './LinkItem.module.scss';

export type LinkItemProps = {
  href: string;
  text: string;
  imageSrc: StaticImageData;
  isSelected: boolean;
  onClick: () => void;
};

const LinkItem: React.FC<LinkItemProps> = ({ href, text, imageSrc, isSelected, onClick }) => {
  return (
    <Link href={href}>
      <a>
        <div
          className={classNames(
            'relative flex h-[48px] items-center px-2 text-lg font-extrabold leading-[48px]',
            style.menuItem,
          )}
          data-select={isSelected}
          onClick={onClick}
        >
          <Image src={imageSrc} width={24} height={24} layout="fixed" />
          <span className="ml-2">{text}</span>
        </div>
      </a>
    </Link>
  );
};

export default React.memo(LinkItem);
