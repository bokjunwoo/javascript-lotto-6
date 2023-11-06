import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constants.js';

const OutputView = {
  printLottoPricePurchased(price) {
    const totalCounts = price / LOTTO_PRICE;
    Console.print(`\n${totalCounts}개를 구매했습니다.`);
  },

  printLottoNumbers(lottos) {
    for (const lottoNumbers of lottos) {
      Console.print(lottoNumbers);
    }
  },

  printErrorMessage(message) {
    Console.print(`${message}\n`);
  },
};

export default OutputView;