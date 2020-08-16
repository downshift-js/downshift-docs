export default {
  port: 6006,
  src: './src/docs/',
  menu: [
    'Home',
    'Components',
    {name: 'Hooks', menu: ['useCombobox', 'useMultipleSelection', 'useSelect']},
  ],
  repository: 'https://github.com/downshift-js/downshift',
  themeConfig: {
    showDarkModeSwitch: true,
    initialColorMode: 'light',
    breakpoints: ['920px'],
    styles: {
      Container: {
        width: ['100%', '75%'],
      },
      inlineCode: {
        bg: 'blockquote.bg',
      },
    },
  },
  plugins: ['gatsby-theme-docz'],
}
