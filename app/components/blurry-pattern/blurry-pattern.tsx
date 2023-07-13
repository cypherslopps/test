import React from 'react';
import Image from 'next/image';
import BlurryImage from '@/public/images/blurry-pattern.png';

type Props = {
  y: string;
  x: string;
  width?: string;
}

const BlurryPattern = ({ y, x, width }: Props) => {
  return (
    <div className={`absolute ${y} ${x} ${width ? `w-[${width}]` : "w-[10%]"} scale-75 sm:scale-90 md:scale-100 opacity-50 -z-10`}> 
      <Image 
        src={BlurryImage}
        alt="blurry image"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default BlurryPattern