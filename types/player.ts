import { Games } from './gameField';

export interface Player {
  id: string;
  email: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  level: Games['level'];
  address?: string;
  seasonalMembership: string[];
  isAdmin: boolean;
}

export interface PlayerBookedGame extends Games {
  paid: boolean;
}

export interface PlayerSeasonalClubMemberShip extends Games {
  paid: boolean;
}
