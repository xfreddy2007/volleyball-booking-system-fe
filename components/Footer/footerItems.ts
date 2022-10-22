type FooterItemType = {
  category: string;
  list: {
    title: string;
    url: string;
  }[];
};

const footerItems: { [property: string]: FooterItemType } = {
  aboutus: {
    category: '關於',
    list: [{ title: '關於我們', url: '/about-us' }],
  },
  location: {
    category: '場地',
    list: [
      { title: '合作場地', url: '/locations' },
      { title: '加入我們', url: '/join-us' },
    ],
  },
  help: {
    category: '協助',
    list: [
      { title: '隱私政策', url: '/privacy-policy' },
      { title: '條款及細則', url: '/terms-n-conditions' },
      { title: '聯絡我們', url: '/contact-us' },
    ],
  },
};

export type FooterItemsId = keyof typeof footerItems;
export default footerItems;
