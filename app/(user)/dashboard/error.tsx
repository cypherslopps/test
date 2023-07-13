'use client'
 
import Button from '@/app/components/button/button'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center justify-center mt-20 sm:mt-16 md:mt-14'>
      <h1 className='text-[3.5rem] xs:text-6xl sm:text-7xl mb-2 xs:mb-4'>😠</h1>
      <h2 className='text-[1.3rem] xs:text-2xl sm:text-3xl font-extrabold text-white/95'>Something went wrong!</h2>
      <p className='mt-1 mb-4 xs:mt-2 xs:mb-5 text-[.94rem] xs:text-[1.06rem] sm:text-base'>An error occured in the app</p>
      <Button
        variant="primary"
        onClick={
          () => reset()
        }
      >
        Refresh page
      </Button>
    </div>
  )
}