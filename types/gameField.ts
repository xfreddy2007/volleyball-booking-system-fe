export interface ClubInfo {
  id: string;
  name: string;
  address: string;
  socialMediaGroup?: {
    line?: string;
    facebook?: string;
  };
  availableGames: string[];
}

export interface Games {
  name: string;
  clubInfo: ClubInfo;
  quarter: string;
  startTime: string;
  endTime: string;
  netHeight: 'Male' | 'Female';
  gametype: 'Male' | 'Female' | 'Mixed';
  level: 'low' | 'medium' | 'mediumHigh' | 'high' | 'none';
  isFemalePrioritized?: boolean;
  availablePosition: number | { male: number; female: number };
  seasonalPosition: number;
  seansonalMember: string[];
  price: number | { male: number; female: number };
}
