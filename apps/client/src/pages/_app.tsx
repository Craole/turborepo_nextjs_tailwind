import '@/styles/reset.css'
import '@/styles/variables.css'
// import '@/styles/tailwind.css';
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

// documentation
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

// documentation
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
