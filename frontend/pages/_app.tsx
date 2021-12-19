import React from 'react'
import { AppProps } from 'next/app'

import '../libs/axios'
import '../styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App