export interface ISpinfo {
  appId: number;
  appName: string;
  connectNode: string;
  tokenAddress: string;
}

export interface IPoints {
  appId: number;
  appName: string;
  holder: number;
  totlaSupply: number;
  transferCount: number;
  currentBlock: number;
  tps: number;
  latestBlockDate: string; 
}

export interface ITokens {
  tokenAddress: string;
  currentBlock: number;
  gasUsed: number;
  blockTime: number;
  holder: number;
  transferCount: number;
  latestBlockDate: string;
}
