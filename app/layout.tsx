import '@/styles/globals.css';
import '@/styles/RichEditor.css';
import { Syne, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Providers from './providers';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter/static/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/static/Inter-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/static/Inter-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/static/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter/static/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/Inter/static/Inter-Black.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: "--font-syne"
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: "--font-roboto"
})

export const metadata = {
  title: 'zkNebula',
  description: 'zkNebula is an extraordinary decentralized autonomous organization (DAO) project that has been developed to be entirely community-driven, providing the blockchain community with complete control over all decisions, contributions, and participation within the protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <head>
        <link rel="icon" href='../../_next/static/media/favicon-large.3b6a782a.png' />
      </head>
      <body className={`${inter.className} ${syne.className} selection:bg-accent-shade-800 selection:text-black ${roboto.className} font-sans bg-app-background text-white`}>          
        <Providers>
          {children}
        </Providers>
        <div id="modal-root"></div>
        <div id="offset-root"></div>
      </body>
    </html>
  )
}

