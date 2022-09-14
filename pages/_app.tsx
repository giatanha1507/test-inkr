import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { NovelProvider } from '../contexts/NovelContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NovelProvider>
			<Component {...pageProps} />
		</NovelProvider>
	)
}

export default MyApp
