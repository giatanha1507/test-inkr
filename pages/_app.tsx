import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { NovelProvider } from '../contexts/NovelContext'

function MyApp({ Component, pageProps }: AppProps) {
	return <NovelProvider><Component {...pageProps} /></NovelProvider>
}

export default MyApp
