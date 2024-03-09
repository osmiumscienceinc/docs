import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Osmium Science</span>,
  project: {
    link: 'https://github.com/osmiumscienceinc/docs',
  },
  chat: {
    link: 'https://discord.gg/',
  },
  docsRepositoryBase: 'https://github.com/osmiumscienceinc/docs',
  footer: {
    text: 'Osmium Science Docs',
  },
  primaryHue: 194,
  primarySaturation: 100,
}

export default config
