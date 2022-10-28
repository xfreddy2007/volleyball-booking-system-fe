import React from 'react';
import { Player } from '@/types/player';
import { useAppSelector } from '@/store/hooks';

const AccountOverview: React.FC = () => {
  const playerData = useAppSelector((state) => state.auth);

  // gender mapping
  const genderMap: Record<Player['gender'], string> = {
    Male: '男',
    Female: '女',
    Other: '其他',
  };
  const levelMap: Record<Player['level'], string> = {
    none: '無',
    low: '下',
    medium: '中',
    mediumHigh: '中上',
    high: '高',
  };
  return (
    <div className="w-full">
      <h1 className="default-h3 font-arial font-extrabold text-navy">{`Hi, ${playerData.name || 'User'}`}</h1>
      <div className="mt-4 flex">
        <p className="flex w-1/3 flex-col">
          <span className="text-sm font-bold text-navy">Email</span>
          <span className="text-[#878787]">{playerData.email}</span>
        </p>
        <p className="flex w-1/3 flex-col">
          <span className="text-sm font-bold text-navy">性別</span>
          <span className="text-[#878787]">{genderMap[playerData.gender]}</span>
        </p>
        <p className="flex w-1/3 flex-col">
          <span className="text-sm font-bold text-navy">強度</span>
          <span className="text-[#878787]">{levelMap[playerData.level]}</span>
        </p>
      </div>
      <div className="my-3 h-[2px] w-full bg-navy" />
      <h2 className="default-h5 font-arial font-extrabold text-navy">最近參加的球聚</h2>
      <div className="flex flex-col gap-y-2">page</div>
    </div>
  );
};

export default AccountOverview;
