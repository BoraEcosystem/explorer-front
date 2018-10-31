import { Injectable } from '@angular/core';

declare var Web3: any;
@Injectable()
export class Web3Service {
  private web3Obj: Object = {};

  private endPoints: Object = {
    '1000': 'https://testnet-gethpub.bora-lagoon.com', // token
    '1001': 'https://testnet-gethpub1.bora-lagoon.com', // point main
    '100003': 'https://testnet-gethpub2.bora-lagoon.com', // tower blocks
    '100004': 'https://testnet-gethpub3.bora-lagoon.com', // pacman
  };

  private method_point_map: Object = {
    '': 'UNDEFINED',
    '5c09329c': 'TRANSFER',
    '899fe659': 'TRANSFER_FROM',
    '426a8493': 'APPROVE',
    'a95e5b8b': 'INCREASE_APPROVAL',
    '70552cd2': 'DECREASE_APPROVAL',
    '156e29f6': 'MINT',
    'f5298aca': 'BURN'
  };

  private method_token_map: Object = {
    '': 'UNDEFINED',
    'a9059cbb': 'TRANSFER',
    '23b872dd': 'TRANSFER_FROM',
    '095ea7b3': 'APPROVAL',
    '6f58b914': 'APPROVAL_APPROVAL',
    'c69e0f78': 'DECREASE_APPROVAL',
    '42966c68': 'BURN',
    '8c0d4199': 'LOCK',
    'b6549f75': 'REVOKE',
    '4e71d92d': 'CLAIM',
    '8456cb59': 'PAUSE',
    '3f4ba83a': 'UNPAUSE',
    'f2fde38b': 'TRANSFER_OWNERSHIP'
  };

  constructor(
  ) {
  }

  public get_lastest_block_tx_count(appId: string, nBefore: number = 1): any {
    if ( this.endPoints[appId] === undefined) {
      return 'error';
    }

    if ( this.web3Obj[appId] === undefined || this.web3Obj[appId] === 'error') {
      this.web3Obj[appId] = new Web3( new Web3.providers.HttpProvider(this.endPoints[appId]) );
    }
    const web3 = this.web3Obj[appId];

    // get tps of block before lastest.(fixed block)
    // latest block is not fixed tx count
    if (web3 === 'error') {
      return 'error';
    }

    let result: number = 0 as number;
    const blockNoTarget: any = web3.eth.blockNumber - nBefore;
    const blockInfo = web3.eth.getBlock(blockNoTarget);
    result = blockInfo.transactions.length;

    return result;
  }
}
