import Navigation from '../../components/navigation/navigation';

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
    <>
      <Navigation 
        scrollPositionProp
        showLinks={false}
        showHamburger  
      />

      <main className='mt-16 xxs:mt-20 mb-6 xs:mt-20 sm:mt-20 py-4 w-[94%] sm:w-[96%] md-md:w-[94%] lg:w-[85%] mx-auto'>
        {children}
      </main>
    </>  
  )
}

