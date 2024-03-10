import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Osmium Science</span>,
  project: {
    link: 'https://github.com/osmiumscienceinc/docs',
  },
  darkMode: false,
  chat: {
    link: 'https://discord.gg/',
  },
  docsRepositoryBase: 'https://github.com/osmiumscienceinc/docs',
  footer: {
    text: 'Osmium Science Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Osmium Science'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Osmium Science Docs" />
      <meta property="og:description" content="Osmium Science - Documentation" />
      <meta property="og:type" content="website"/>
    </>
  )
}

export default config
