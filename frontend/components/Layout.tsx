import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'COVID Timeline Generator' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> 
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </div>
)

export default Layout
