import React from 'react';
import footerItems, { FooterItemsId } from './footerItems';

type FooterListProps = {
  listId: FooterItemsId;
};

const FooterList: React.FC<FooterListProps> = ({ listId }) => {
  return (
    <>
      <h5 className="mb-2 text-xl font-extrabold text-navy">{footerItems[listId].category}</h5>
      <ul className="flex flex-col gap-y-1">
        {footerItems[listId].list.map((item) => (
          <a key={item.title} href={item.url} target={item.url.includes('http') ? '_blank' : '_self'} rel="noreferrer">
            <li className="text-navy hover:text-blue">{item.title}</li>
          </a>
        ))}
      </ul>
    </>
  );
};

export default React.memo(FooterList);
