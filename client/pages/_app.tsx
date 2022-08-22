import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../src/firebase/firebase'
import {wrapper} from "../src/redux";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
