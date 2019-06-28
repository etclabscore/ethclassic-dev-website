module.exports = {
  title: 'ethclassic.dev',
  description: 'An Ethereum Classic development website.',
  themeConfig: {
    nav: [
      { text: 'Ethereum Classic Development', link: '/' },
      { text: 'Beginners', link: '/beginners/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'API', link: '/api/' },
      { text: 'Index', link: '/index/' },
      { text: 'News', link: '/news/' }
    ]
  },
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1'}],
    ['link', {rel: 'icon', type: 'image/png', href: '/favicon.png'}],
    ['meta', { name: 'twitter:site', content: '@etclabscore' }],
    // ['meta', { name: 'twitter:creator', content: '@etclabscore }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Ethereum Classic' }],
    ['meta', { property: 'og:site_name', content: 'ethclassic.dev' }],
    ['meta', { property: 'og:description', content: 'Ethereum Classic is an open-source, public, blockchain-based distributed computing platform featuring smart contract (scripting) functionality.'}],
    ['meta', { property: 'og:url', content: 'https://ethclassic.dev' }],
    ['meta', { property: 'og:image', content: 'https://ethclassic.dev/assets/img/hero-dark.503e3890.png'}],

    ['script', { async: true, defer: true, src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' },
    `
      new Crate({
        server: '538420083614023710',
        channel: '543112562405933116',
        shard: 'https://disweb.deploys.io'
      })
    `]

    
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  }
}
