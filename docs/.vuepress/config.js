module.exports = {
  title: 'ethclassic.dev',
  description: 'A DApp development resource.',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Beginners', link: '/beginners/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'APIs', link: '/apis/' },
      { text: 'Resources', link: '/resources/' },
      { text: '⚠️ Atlantis', link: '/news/' },
    ]
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'EthClassic' }],
    ['meta', { property: 'og:site_name', content: 'ethclassic.dev' }],
    ['meta', { property: 'og:description', content: 'The OpenRPC Specification defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.' }],
    ['meta', { property: 'og:url', content: 'https://ethclassic.dev' }],
    ['meta', { property: 'og:image', content: 'https://github.com/open-rpc/design/raw/master/png/open-rpc-logo-320x320.png?raw=true' }],
    ['script', { async: true, defer: true, src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' },
    `
      new Crate({
        server: '538420083614023710',
        channel: '543112562405933116',
        shard: 'https://disweb.deploys.io'
      })
    `]
  ],
}