const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = {
  output: 'export',
}

const nextConfig = {
  ...config,
  ...withNextra
}

module.exports = nextConfig