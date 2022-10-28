/* eslint-disable max-len */
import React from 'react';
import { Games } from '@/types/gameField';
import dayjs from 'dayjs';
import { dayMap, DayMapProps, netMap, gameTypeMap } from '@/libs/utils/dataMap';
import style from './GameCard.module.scss';

type GameCardProps = Games;

const GameCard: React.FC<GameCardProps> = ({ name, clubInfo, quarter, startTime, endTime, netHeight, gametype }) => {
  // playday
  const playDay = dayjs(startTime).day();

  // playdate
  const playMonth = dayjs(startTime).month() + 1;
  const playDate = dayjs(startTime).date();

  // playtime
  const playStartTime = `${dayjs(startTime).hour()}:${
    dayjs(startTime).minute() < 10 ? `0${dayjs(startTime).minute()}` : dayjs(startTime).minute()
  }`;
  const playEndTime = `${dayjs(endTime).hour()}:${
    dayjs(endTime).minute() < 10 ? `0${dayjs(endTime).minute()}` : dayjs(endTime).minute()
  }`;
  return (
    <div className={style.root}>
      <div className="flex justify-between">
        <h3 className={style.name}>{name}</h3>
        <p>{`${clubInfo.name} ${quarter}`}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex gap-x-2">
          <span>{`${playMonth}/${playDate}`}</span>
          <span>{dayMap(playDay as DayMapProps)}</span>
          <span>{`${playStartTime} ~ ${playEndTime}`}</span>
          <span>{`${netMap(netHeight)}${gameTypeMap(gametype)}`}</span>
        </p>
        <button className="rounded border-[1px] border-solid border-navy px-4 py-2 text-navy transition-all duration-300 hover:bg-navy hover:text-white">
          詳細資料
        </button>
      </div>
    </div>
  );
};

export default React.memo(GameCard);
