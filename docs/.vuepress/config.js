module.exports = {
  title: 'Blokken Oefeningen',
  description: 'Programmeeroefeningen voor Blockly',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VIVES', link: 'https://www.vives.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/chapter-1/', 'Chapter 1'],
      ['/chapter-2/', 'Chapter 2'],
      ['/chapter-3/', 'Chapter 3'],
      ['/chapter-4/', 'Chapter 4']
    ],
    repo: 'https://github.com/pcordemans/blokken-oefeningen',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
