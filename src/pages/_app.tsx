import '../globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const font = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html { font-family: ${font.style.fontFamily}; }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
