/* eslint-disable max-len */
import React from 'react';
import { PlayerBookedGame } from '@/types/player';
import dayjs from 'dayjs';
import { dayMap, DayMapProps, netMap, gameTypeMap } from '@/libs/utils/dataMap';
import { useRouter } from 'next/router';

type GameCardProps = PlayerBookedGame;

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  clubInfo,
  quarter,
  startTime,
  endTime,
  netHeight,
  gametype,
}) => {
  const router = useRouter();

  // playday
  const playDay = dayjs(startTime).day();

  // playdate
  const playMonth =
    dayjs(startTime).month() + 1 < 10 ? `0${dayjs(startTime).month() + 1}` : dayjs(startTime).month() + 1;
  const playDate = dayjs(startTime).date() < 10 ? `0${dayjs(startTime).date()}` : dayjs(startTime).date();

  // playtime
  const playStartTime = `${dayjs(startTime).hour()}:${
    dayjs(startTime).minute() < 10 ? `0${dayjs(startTime).minute()}` : dayjs(startTime).minute()
  }`;
  const playEndTime = `${dayjs(endTime).hour()}:${
    dayjs(endTime).minute() < 10 ? `0${dayjs(endTime).minute()}` : dayjs(endTime).minute()
  }`;
  return (
    <div className="flex w-full flex-col gap-y-2 rounded-md border-[1px] border-solid border-navy bg-white-pure p-4">
      <div className="flex justify-between">
        <h3 className="max-w-[100px] text-lg font-bold text-navy md:max-w-none">{name}</h3>
        <p className="font-bold">{`${clubInfo.name} ${quarter}`}</p>
      </div>
      <div className="my-2 h-[1px] w-full bg-gray-300" />
      <div className="flex flex-col justify-between gap-y-2 md:flex-row md:items-center md:gap-y-0">
        <p className="flex gap-x-2">
          <span>{`${playMonth}/${playDate}`}</span>
          <span>{dayMap(playDay as DayMapProps)}</span>
          <span>{`${playStartTime} ~ ${playEndTime}`}</span>
          <span>{`${netMap(netHeight)}${gameTypeMap(gametype)}`}</span>
        </p>
        <button
          className="rounded border-[1px] border-solid border-navy px-4 py-2 text-navy transition-all duration-300 hover:bg-navy hover:text-white"
          onClick={() => router.push({ pathname: '/account/bookedgame/[pid]', query: { pid: id } })}
        >
          詳細資料
        </button>
      </div>
    </div>
  );
};

export default React.memo(GameCard);
