import '../styles/globals.css'
import { GlobalProvider } from '../context/context'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
    <footer className="flex flex-col justify-center items-center bg-violet-600 h-32 mt-4">
    <div className='text-lg'>
      <h1>© Pedro Fernandez </h1>
    </div>
    <div className=' flex flex-col justify-center items-center mt-3'>
      <a href="https://nextjs.org/" target="_blank">Nextjs</a>
      <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>
    </div>
  </footer>
  </>
  )
}

export default MyApp
