import { NetField } from './gameField';

export interface Player {
  id: string;
  name: string;
  password: string;
  address?: string;
  seasonalMembership: NetField[];
}
