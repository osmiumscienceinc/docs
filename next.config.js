const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = {
  output: 'export',
}

module.exports = withNextra(config)