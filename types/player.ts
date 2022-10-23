export interface Player {
  id: string;
  email: string;
  name: string;
  password: string;
  address?: string;
  seasonalMembership: string[];
  isAdmin: boolean;
}
