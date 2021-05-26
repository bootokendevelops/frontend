export default {
  nav: {
    logo: process.env.PUBLIC_URL + '/assets/bootoken.png',
    links: [
      { text: 'Home', to: 'header' },
      { text: 'About', to: 'about' },
      { text: 'Tokenomics', to:'tokenomics'},
      { text: 'Roadmap', to: 'roadmap'},
      { text: 'Community', to: 'community'},
      { text: 'Buy Boo', to:'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe52246c0647bcd730d62ec58432409901f0e6798'},
      { text: 'Whitepaper', to:process.env.PUBLIC_URL + '/assets/whitepaper.pdf'}
    ],
  },
  header: {
    img:
        process.env.PUBLIC_URL + '/assets/boo_background.png',
    imgPlaceholder:
      '',
    text: ['Hi!', "It's me Boo."],
    typical: [
      'I Supporting My Friends',
      2000,
      'I make them find a warm home and food',
      2000,
      'Come on join us',
      2000,
    ],
    btnText: 'Buy Boo',
    btnURL:'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe52246c0647bcd730d62ec58432409901f0e6798',
    btn2Text: 'BSC SCAN',
    btn2URL:'https://bscscan.com/token/0xe52246c0647bcd730d62ec58432409901f0e6798',
  },
  about: {
    title: 'What is Boo?',
    img: process.env.PUBLIC_URL + '/assets/moon.svg',
    imgPlaceholder:
      '',
    projectName: 'Boo Token',
    desc:
      'The goal of Boo is to prevent dogs of all breeds from being abandoned. For this reason, we will be making weekly donations to community chosen dog charities!',
  },
  tokenomics: {
    title: 'Tokenomics',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/pool.png',
        alt: 'liquidity',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/wallet.png',
        alt: 'wallet',
      },
    ],
    tech2: [
      {
        img:process.env.PUBLIC_URL + '/assets/techrate.png',
        link:'https://bootoken.org/assets/BooAuditReport.pdf'
      },
      {
        img:process.env.PUBLIC_URL + '/assets/dx-lock.png',
        link:'https://dxsale.app/app/pages/dxlockview?id=1&add=0x9F644E1d5bFd3e8BE73dAbba492ce38942bB51a4&type=lplock&chain=BSC'
      }
    ],
    desc: `%5 Re-distributed to Holders And %5 Liquidity`,
    lock: `We have audit report and liquidity is locked until 2026`
  },
  contact: {
    title: 'Join us!',
    desc:
      "Be sure to join our communities to keep up-to-date and find out how you can get involved.",
    socials: [
      {
        alt: 'twitter',
        img: process.env.PUBLIC_URL + '/assets/Twitter.png',
        link:'https://twitter.com/BooToken'
      },
      {
        alt: 'telegram',
        img: process.env.PUBLIC_URL + '/assets/Telegram.png',
        link:'https://t.me/bootoken'
      },
      {
        alt: 'reddit',
        img: process.env.PUBLIC_URL + '/assets/reddit.png',
        link:'https://www.reddit.com/r/BooTokenOfficial/'
      },
    ],
    img:
    process.env.PUBLIC_URL + '/assets/bootoken.png',
    imgPlaceholder:
      'data:image/jpeg;base64,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',
  },
};
