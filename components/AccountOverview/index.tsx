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
      <h1 className="default-h3 font-arial font-extrabold">{`Hi, ${playerData.name || 'User'}`}</h1>
      <div className="flex">
        <p className="flex flex-col">
          <span>Email</span>
          <span>{playerData.email}</span>
        </p>
        <p className="flex flex-col">
          <span>性別</span>
          <span>{genderMap[playerData.gender]}</span>
        </p>
        <p className="flex flex-col">
          <span>強度</span>
          <span>{levelMap[playerData.level]}</span>
        </p>
      </div>
    </div>
  );
};

export default AccountOverview;
