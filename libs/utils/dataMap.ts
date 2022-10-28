import { Games } from '@/types/gameField';

const dayMapping = {
  0: '星期日',
  1: '星期一',
  2: '星期二',
  3: '星期三',
  4: '星期四',
  5: '星期五',
  6: '星期六',
};

const netMapping: Record<Games['netHeight'], string> = {
  Male: '男網',
  Female: '女網',
};

const gameTypeMapping: Record<Games['gametype'], string> = {
  Male: '純男排',
  Female: '純女排',
  Mixed: '混排',
};

export type DayMapProps = keyof typeof dayMapping;

export const dayMap = (day: DayMapProps): string => {
  return dayMapping[day];
};

export const netMap = (net: Games['netHeight']): string => {
  return netMapping[net];
};
export const gameTypeMap = (types: Games['gametype']): string => {
  return gameTypeMapping[types];
};
