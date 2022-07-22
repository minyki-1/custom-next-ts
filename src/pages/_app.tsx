import '../../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Amplify } from 'aws-amplify';
// import awsExports from '../aws-exports';
// Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp