export const Data = [
  {
    id: 1,
    income: "$0 - $18,200",
    taxRate: "0%",
    tax: 1,
  },
  {
    id: 2,
    income: "$18,201 - $45,000",
    taxRate: "Nil + 19% of excess over $18,200",
    tax: 0.19,
  },
  {
    id: 3,
    income: "$45,001 - $120,000",
    taxRate: "$5,092 + 32.5% of excess over $45,000",
    tax: 0.325,
  },
  {
    id: 4,
    income: "$120,001 - $180,000",
    taxRate: "$29,467 + 37% of excess over $120,000",
    tax: 0.37,
  },
  {
    id: 5,
    income: "$180,001 +",
    taxRate: "$51,667 + 45% of excess over $180,000",
    tax: 0.45,
  },
];

export const Faq = [
  {
    id: 1,
    question: "How are cryptocurrencies taxed in Australia?",
    answer:
      "The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.",
  },
  {
    id: 2,
    question:
      "What’s the difference between long-term and short-term capital gains?",
    answer:
      "The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.",
  },
  {
    id: 3,
    question: "Do I have to pay tax on crypto-to-crypto transactions?",
    answer:
      "Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.      Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free. ",
  },
  {
    id: 4,
    question: "Can the ATO track crypto?",
    answer:
      "The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.",
  },
];
