import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as ethers from 'ethers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/generateMnemonic')
  generateMnemonic() {
    return {
      code: 0,
      data: ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(32)),
    };
  }

  @Post('/deriveAccount')
  deriveAccount(
    @Body('mnemonic') mnemonic: string,
    @Body('accountNumber') accountNumber: number,
  ) {
    console.log('mnemonic', mnemonic);
    const hdWallet = ethers.HDNodeWallet.fromPhrase(mnemonic);
    const accounts = [];

    for (let i = 0; i < accountNumber; i++) {
      const hdChild = hdWallet.deriveChild(i);
      accounts.push({
        address: hdChild.address,
        key: hdChild.privateKey,
      });
    }

    return {
      code: 0,
      data: accounts,
    };
  }
}
