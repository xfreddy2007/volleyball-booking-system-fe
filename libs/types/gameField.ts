export interface GameArena {
  id: string;
  name: string;
  address: string;
  socialMediaGroup?: {
    line?: string;
    facebook?: string;
  };
  availableNetField: NetField[];
}

export interface NetField {
  name: string;
  gameArena: GameArena;
  startTime: string;
  endTime: string;
  netHeight: 'Male' | 'Female';
  gametype: 'Male' | 'Female' | 'Mixed';
  isFemalePrioritized?: boolean;
  availablePosition: {
    male: number;
    female: number;
  };
  seasonalPosition: number;
  seansonalMember: string[];
}
