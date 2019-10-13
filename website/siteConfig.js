/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Metronome Token',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F2400%2F1*2UJFsmiXEN6hvrkAdIqf7w.jpeg&f=1&nofb=1',
    infoLink: 'https://metronome.io/',
    pinned: true,
  },
  {
    caption: 'Saturn',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.coingecko.com%2Fmarkets%2Fimages%2F352%2Flarge%2FSaturn.png%3F1550053581&f=1&nofb=1',
    infoLink: 'https://saturn.network/',
    pinned: true,
  },
  {
    caption: 'OriginalMy',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://originalmy.com/assets/new-site/img/logo-originalmy.png',
    infoLink: 'https://originalmy.com/',
    pinned: true,
  },
  {
    caption: 'Slips',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/x9kck4cwluucsfygdkmy',
    infoLink: 'https://slips.io/',
    pinned: true,
  },
  {
    caption: 'Coingame',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://pbs.twimg.com/profile_images/1082094654516953089/3YCYAAmq_400x400.jpg',
    infoLink: 'https://www.coingame.com/index',
    pinned: true,
  },  
];

const siteConfig = {
  title: 'Ethereum Classic | Developers', // Title for your website.
  tagline: 'A website for classic EthereumStack developers.',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
    url: 'https://etclabscore.github.io',
    baseUrl: '/ethclassic-dev-website/',

  // Used for publishing and more
  projectName: 'Ethereum Classic | Developers',
  organizationName: 'Ethereum Classic Devs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    organizationName: 'etclabscore',
    cname: 'ethclassic.dev',
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'api', label: 'API'},
    {page: 'community', label: 'Community'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#4CAF50',
    secondaryColor: '#1f6f22',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `MIT ${new Date().getFullYear()} License`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
