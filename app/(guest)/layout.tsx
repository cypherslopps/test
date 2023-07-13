import Navigation from '../components/navigation/navigation';
import Footer from '../components/footer/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      
      {children}
      
      <Footer />
    </>      
  )
}

