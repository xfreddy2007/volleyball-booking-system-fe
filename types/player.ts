export interface Player {
  id: string;
  email: string;
  name: string;
  address?: string;
  seasonalMembership: string[];
  isAdmin: boolean;
}
