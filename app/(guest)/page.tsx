import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/hero/hero';
import zkSyncLogo from '@/public/images/zksync_logo.png';
import MyProjectImage from '@/public/images/My project-1 1.png';
import BoxImage from '@/public/images/box.png';
import AlienImage from '@/public/images/alien.png';
import RocketImage from '@/public/images/rocket.png';
import RectangleImage from '@/public/images/rectangle.png'; 
import Heading from '../components/heading/heading';
import BlurryPattern from '../components/blurry-pattern/blurry-pattern';
import ListItem from '../components/list-item/list-item';
import { communityGovernanceContent, featuresContent, nebulaLaunchpadContent, nebulaNFTContent, nebulaStakeContent } from '../lib/constants';
import FeatureItem from '../components/feature-item/feature-item';
import InfoIcon from '@/public/svg/info.svg';
import TokenomicsChart from '../components/tokenomics-chart/tokenomics-chart';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Claims */}
      <section className="claims bg-white py-4 px-3 xs:py-5 xs:px-7 phone-sm:px-5 md:py-6 lg:py-8 flex justify-center items-center relative overflow-hidden">
        <div className='content space-y-2 sm:space-y-1 md:space-y-0.5'>
          <h4 className='text-black text-[.93rem] leading-tight xs:text-[.92rem] phone-sm:text-[.93rem] sm:text-[.98rem] md:text-base lg:text-[1.1] font-semibold'>Don’t miss out on the  Nebula  Token Community offering.</h4>
          <span className='text-black/80 flex flex-col text-[.87rem] gap-x-1 xs:text-[.84rem] phone-sm:items-center phone-sm:gap-y-0 phone-sm:gap-x-1 phone-sm:flex-row phone-sm:text-[.89rem] sm:text-[.92rem] md:text-[.9rem] lg:text-[.94rem]'>
            <div className='flex items-center gap-x-1'>
              <Image 
                src={InfoIcon}
                alt="info"
                width={15}
                className='w-[.8rem] xs:w-3 phone-sm:w-max'
              />
              You can use a burner wallet for this event.
            </div>
      
            <Link href="#" className='text-tertiary-900 block phone-sm:inline-block phone-sm:text-[.89rem] sm:text-[.92rem] md:text-[.9rem] lg:text-[.94rem] underline decoration-dashed font-semibold transition-colors duration-200 hover:decoration-2'>Participate now</Link>
          </span>
        </div>
      </section>

      {/* Features */}
      <section className='features py-14 xs:py-16 sm:py-20 md:py-24 flex justify-center items-center relative overflow-hidden'>
        <div className="wrapper w-11/12 xxs:w-[89%] xs:w-[92%] phone-sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-3/4 grid grid-cols-1 gap-y-4 xs:px-6 phone-sm:px-14 sm:px-0 sm:grid-cols-2 sm:justify-items-center sm:gap-3 md:gap-5">
            {featuresContent.map(feature => (
              <FeatureItem 
                key={feature.title}
                {...feature}
              />
            ))}
        </div>

        {/* Blurry pattern */}
        <BlurryPattern 
          y="top-[0%]"
          x="left-[4%]"
          width="8%"
        />

        <BlurryPattern 
          y="bottom-[3%]"
          x="right-[62%]"
          width="8%"
        />
      </section>

      {/* Nebula Launchpad */}
      <section className="governance py-14 xs:py-16 sm:py-20 md:py-24 flex justify-center items-center relative overflow-hidden">
        <div className="wrapper w-[95%] phone-sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-3/4 flex flex-col items-center gap-y-8 md:gap-y-0 md:justify-between md:flex-row md:gap-x-14 md-xl:gap-x-20 lg:gap-x-28 xl:gap-x-36">
          {/* Content */}
          <div className="content space-y-9 order-2 md:order-1">
            <Heading 
              heading="Nebula Launchpad"
              subHeading='Access community vetted projects, top tier
              sales before they hit the market.'
              variant="light"
            />

            {/* List item */}
            <ListItem 
              list={nebulaLaunchpadContent} 
              variant="light"
            />
          </div>

          <figure className='relative order-1 flex justify-center md:order-2 sm:inline-block'>
            <Image 
              src={RectangleImage}
              alt="my-project"
              height={331}
              className='w-[45%] xxs:w-2/4 xs:w-[45%] phone-sm:w-[47%] sm:w-1/3 md:w-5/6 lg:w-max object-fit rotate-6'
            />

            <Image 
              src={RocketImage}
              alt="my-project"
              height={331}
              className='w-[45%] xxs:w-2/4 xs:w-[45%] phone-sm:w-[47%] sm:w-1/3 md:w-5/6 lg:w-max object-fit absolute -top-[15%] left-[30%] phone-sm:left-[30%] sm:left-4 -rotate-4'
            />
          </figure>
        </div>

        {/* Blurry pattern */}
        <BlurryPattern 
          y="top-[6%]"
          x="-right-[4%]"
          width="8%"
        />
        
        <BlurryPattern 
          y="bottom-[2%]"
          x="right-[40%]"
          width="8%"
        />
      </section>

      {/* Community Governance */}
      <section className="governance py-14 xs:py-16 sm:py-20 md:py-24 flex justify-center items-center relative">
        <div className="wrapper w-[95%] phone-sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-3/4 flex flex-col items-center gap-y-8 md:gap-y-0 md:justify-between md:flex-row md:gap-x-14 md-xl:gap-x-20 lg:gap-x-28 xl:gap-x-36">
          <Image 
            src={MyProjectImage}
            alt="my-project"
            height={331}
            className='w-[45%] phone-sm:w-[47%] sm:w-1/3 md:w-[35%] lg:w-max object-fit -rotate-15'
          />

          {/* Content */}
          <div className="content space-y-6 xs:space-y-9">
            <Heading 
              heading="Community Governance"
              variant="light"
            />

            {/* List item */}
            <ListItem 
              list={communityGovernanceContent} 
              variant="light"
            />
          </div>
        </div>

        {/* Blurry pattern */}
        <BlurryPattern 
          y="bottom-[6%]"
          x="right-[4%]"
          width="20%"
        />
      </section>

      {/* Nebula NFT */}
      <section className="nft py-14 xs:py-16 sm:py-20 md:py-24 flex justify-center items-center relative bg-white overflow-hidden">
        <div className="wrapper w-[95%] phone-sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-3/4 flex flex-col items-center gap-y-8 md:gap-y-0 md:justify-between md:flex-row md:gap-x-14 md-xl:gap-x-20 lg:gap-x-28 xl:gap-x-36">
          {/* Content */}
          <div className='w-full space-y-8 sm:space-y-6 md:space-y-10 lg:w-[63%] lg:space-y-8'>
            <Heading 
                heading="Nebula NFT"
                subHeading="Nebula NFTs form an integral part of zkNebula, bringing unique benefit and shaping the zkSync ecosystem"
                styles="text-center md:w-[67%] mx-auto lg:mx-0 lg:w-full lg:text-left"
              />

              {/* List */}
              <div className="space-y-5 pr-0 md:pr-5 lg:pr-9">
                {/* List item */}
                {nebulaNFTContent.map(list => (
                  <ListItem 
                    key={list.title}
                    list={list}
                    variant="dark"
                  />
                ))}
              </div>
          </div>

          {/* Image */}
          <figure className="hidden lg:inline-block absolute bottom-0 right-0 image">
            <Image 
              src={AlienImage}
              alt="alien"
              className="md:w-[14rem] lg:w-[30rem] object-cover"
              priority
            />
          </figure>
        </div>
      </section>
 
      {/* Stake */}
      <section className="stake py-14 xs:py-16 sm:py-20 md:py-24 flex justify-center items-center relative overflow-hidden">
        <div className="wrapper w-[95%] phone-sm:w-11/12 md:w-[87%] lg:w-5/6 xl:w-3/4 flex flex-col items-center gap-y-8 md:gap-y-0 md:justify-between md:flex-row md:gap-x-14 md-xl:gap-x-20 lg:gap-x-28 xl:gap-x-36">
          <Image 
              src={BoxImage}
              alt="my-project"
              height={251}
              className='w-[45%] phone-sm:w-[47%] sm:w-1/3 md:w-[35%] lg:w-max object-fit -rotate-15'
            />

            {/* Content */}
          <div className="content space-y-9">
            <Heading 
              heading="Nebula Stake"
              subHeading="Stake to unlock maximum benefits in the Nebula ecosystem."
              variant="light"
            />

            {/* List */}
            <div className="space-y-5">
              {/* List item */}
              {nebulaStakeContent.map(list => (
                <ListItem 
                  key={list.title}
                  list={list}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Blurry pattern */}
        <BlurryPattern 
          y="bottom-[6%]"
          x="-left-[4%]"
          width="8%"
        />
        
        <BlurryPattern 
          y="top-[30%]"
          x="right-[6%]"
          width="8%"
        />
      </section>

      {/* Tokenomics */}
      <section>
        <TokenomicsChart />
      </section>

      {/* Company Feature */}
      <section className='py-5 phone-sm:py-4 sm:py-0 sm:h-[35vh] md:h-[40vh] lg:h-[44vh] bg-white flex flex-col justify-center items-center gap-y-3 sm:gap-y-5 md:gap-y-7'>
        <h3 className='text-black font-extrabold text-xl sm:text-3xl lg:text-4xl'>Supported by</h3>
        <Image 
          src={zkSyncLogo}
          alt="zkSync logo feature"
          width={100}
          height={70}
          title="zkNebula"
          className='w-[3.5rem] sm:w-[5rem] md:w-max'
          priority
        />
      </section>  
    </>
  )
}
