import React from 'react';
import footerItems, { FooterItemsId } from './footerItems';
import Collapse from '../Collapse';

type MobileFooterListProps = {
  listId: FooterItemsId;
  isShow: boolean;
};

const MobileFooterList: React.FC<MobileFooterListProps> = ({ listId, isShow }) => {
  return (
    <div className="border-b-[1px] border-solid border-navy py-2">
      <h5 className="flex justify-between text-xl font-extrabold text-navy">
        <span>{footerItems[listId].category}</span>
        <span>{isShow ? '-' : '+'}</span>
      </h5>
      <Collapse show={isShow}>
        <ul className="mt-2 flex flex-col gap-y-1">
          {footerItems[listId].list.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target={item.url.includes('http') ? '_blank' : '_self'}
              rel="noreferrer"
            >
              <li className="text-navy hover:text-blue">{item.title}</li>
            </a>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default React.memo(MobileFooterList);
