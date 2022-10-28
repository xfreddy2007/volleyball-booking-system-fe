import { Games, ClubInfo } from '@/types/gameField';

export const xindianClub = {
  id: '0001',
  name: '新店排球團',
  address: '新北市新店區十四張路75號2樓',
  availableGames: ['新店排球團週五么八場', '新店排球團週四下午場', '新店排球團週三八控場'],
};

export const pseudoClubs: ClubInfo[] = [
  xindianClub,
  {
    id: '0002',
    name: '伊斯特排球團',
    address: '新北市中和區永和路75號',
    availableGames: ['中和排球團週五么八場', '中和排球團週四下午場', '中和排球團週三八控場'],
  },
];

export const pseudoGames: Games[] = [
  {
    name: '新店排球團週五么八場',
    clubInfo: xindianClub,
    quarter: '第四季',
    startTime: 'Fri Oct 28 2022 18:00:00 GMT+0800 (Taipei Standard Time)',
    endTime: 'Fri Oct 28 2022 20:00:00 GMT+0800 (Taipei Standard Time)',
    netHeight: 'Male',
    gametype: 'Mixed',
    level: 'none',
    availablePosition: 15,
    seasonalPosition: 15,
    seansonalMember: ['xfreddy2007@gmail.com'],
    price: 260,
  },
  {
    name: '新店排球團週四下午場',
    clubInfo: xindianClub,
    quarter: '第四季',
    startTime: 'Thur Oct 27 2022 14:00:00 GMT+0800 (Taipei Standard Time)',
    endTime: 'Thur Oct 27 2022 16:00:00 GMT+0800 (Taipei Standard Time)',
    netHeight: 'Male',
    gametype: 'Mixed',
    level: 'none',
    availablePosition: 15,
    seasonalPosition: 15,
    seansonalMember: ['xfreddy2007@gmail.com'],
    price: 260,
  },
  {
    name: '新店排球團週三八控場',
    clubInfo: xindianClub,
    quarter: '第四季',
    startTime: 'Wed Oct 26 2022 20:00:00 GMT+0800 (Taipei Standard Time)',
    endTime: 'Wed Oct 26 2022 22:00:00 GMT+0800 (Taipei Standard Time)',
    netHeight: 'Male',
    gametype: 'Mixed',
    level: 'none',
    availablePosition: 15,
    seasonalPosition: 15,
    seansonalMember: ['xfreddy2007@gmail.com'],
    price: 260,
  },
];
