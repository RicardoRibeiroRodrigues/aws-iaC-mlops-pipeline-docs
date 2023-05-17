import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AWS MlOps pipeline</span>,
  useNextSeoProps() {
    return { titleTemplate: 'MlOps Pipeline - %s' }
  },
  project: {
    link: 'https://github.com/RicardoRibeiroRodrigues/AWS-IaC-mlops-pipeline',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/RicardoRibeiroRodrigues/aws-iaC-mlops-pipeline-docs',
  footer: {
    text: 'Documentação do projeto',
  },
}

export default config
