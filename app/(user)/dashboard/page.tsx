"use client";

import React, { useEffect, useState } from 'react'
import { ProgressBar } from '@tremor/react';
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar'
import { Chart } from '@/app/components/chart/chart'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/app/components/ui/accordion';
import Button from '@/app/components/button/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import Stake from '@/app/components/stake/stake';
import ProposalCollection from '@/app/components/proposal-collection/proposal-collection';
import { fetchZkSyncBalance } from '@/app/lib/zkSyncUtils';
import { setBalance } from 'viem/dist/types/actions/test/setBalance';

const nebulaBalanceData = [
  {
    date: "Jan 22",
    Balance: 2890,
  },
  {
    date: "Feb 22",
    Balance: 5745,
  },
  {
    date: "Mar 14",
    Balance: 3575,
  },
  {
    date: "Apr 20",
    Balance: 4554,
  },
  {
    date: "May 5",
    Balance: 2756,
  },
  {
    date: "Jun 04",
    Balance: 2000,
  },
  {
    date: "Jul 11",
    Balance: 1242,
  },
];

const totalVolume = [
  {
    date: "Jan 22",
    Volume: 70323,
  },
  {
    date: "Feb 22",
    Volume: 23745,
  },
  {
    date: "Mar 14",
    Volume: 30575,
  },
  {
    date: "Apr 20",
    Volume: 45554,
  },
  {
    date: "May 5",
    Volume: 756,
  },
  {
    date: "Jun 04",
    Volume: 84300,
  },
  {
    date: "Jul 11",
    Volume: 62342,
  },
];

const nebulaHoldings = [
  {
    date: "Jan 22",
    Holdings: 1033423,
  },
  {
    date: "Feb 22",
    Holdings: 233745,
  },
  {
    date: "Mar 14",
    Holdings: 7350575,
  },
  {
    date: "Apr 20",
    Holdings: 845554,
  },
  {
    date: "May 5",
    Holdings: 3756,
  },
  {
    date: "Jun 04",
    Holdings: 85300,
  },
  {
    date: "Jul 11",
    Holdings: 2342,
  },
];

function Dashboard() {
  const [balance, setBalance] = useState<number>(0);
  const address = "0x5E93Dc46cb41D9ACbEc0da2b5F33de7a4a8Cf7a9";

  useEffect(() => {
    fetchZkSyncBalance(address).then((res: any) => setBalance(res));
  }, [address]);

  return (
    <main className='grid md-md:grid-cols-[max-content,1fr] md-md:gap-x-6 lg:gap-x-9'>
      <DashboardSidebar />

      <section className='space-y-16 sm:space-y-14'>
        <header className='grid grid-cols-1 px-1.5 xxs:px-2 xs:px-8 sm:grid-cols-2 sm:px-0 gap-3 md:gap-5'>
          <Chart 
            title="Nebula Volume" 
            amount={102262000000}
            data={nebulaBalanceData}
            categories={["Balance"]}
          />

          <blockquote className='bg-chart order-3 rounded-2xl py-3.5 px-3 row-start-1 row-end-2 xs:row-auto xs:py-[1.4rem] xs:px-4 sm:p-4 border border-tertiary-shade-900/30 flex flex-col justify-between gap-y-4 xs:gap-y-5 sm:gap-y-6'>
            <header className='pt-2 space-y-0.5 sm:space-y-1'>
              <h1 className='text-[1.3rem] xs:text-[1.18rem] sm:text-[1.2rem] font-bold'>Total Vote</h1>
              <p className='text-[.84rem] sm:text-sm text-white/95'>Vote on elegant proposal to gain Nebula token</p>
            </header>

            <div className='content space-y-2 pb-6'>
              <div className='flex justify-between'>
                <h4 className='text-[.91rem] sm:text-[.97rem] md:text-base'>64%</h4>
                <div className='flex items-center gap-x-2 text-[.82rem] sm:text-sm md:text-[.78rem]'>
                  <span className='font-medium'>22 NGT</span>
                  <span className='text-white/90'>41.25%</span>
                </div>
              </div>

              <ProgressBar value={41.25} />
            </div>
          </blockquote>

          <Chart 
            title="Total Volume (TVL)" 
            amount={10226200}
            data={totalVolume}
            categories={["Volume"]}
          />

          <Chart 
            title="Wallet holdings" 
            amount={balance}
            data={nebulaHoldings}
            categories={["Holdings"]}
          />
        </header>

        {/* Stake box */}
        <section className='py-6' id="stake">
          <div className='mx-auto w-[98%] xs:w-[94%] sm:w-10/12 md:w-4/5'>
            {/* Tabs */}
            <Tabs defaultValue="stake">
              <TabsList className='grid grid-cols-2 z-10 bg-[#212C3A] rounded-none rounded-tl-3xl rounded-tr-3xl'>
                <TabsTrigger value="stake">Stake</TabsTrigger>
                <TabsTrigger value="unstake">Unstake</TabsTrigger>
              </TabsList>

              {/* Tab content */}
              <div className='bg-chart border border-tertiary-shade-900/30 rounded-bl-2xl rounded-br-2xl pt-2 pb-5 px-3 xxs:pt-3 xxs:pb-7 xxs:px-4 sm:pt-5 sm:pb-9 sm:px-7 relative z-20 overflow-hidden'>
                <div className='absolute -bottom-14 left-0 w-full h-36 -z-10 bg-radial' />
                <TabsContent value="stake">
                  <Stake type="stake" />
                </TabsContent>
                <TabsContent value="unstake">
                  <Stake type="unstake" />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Proposal Collection */}
        <ProposalCollection 
          type="dashboard"
          showButton 
          tabs 
        />

        {/* Faqs */}
        <section>
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem className='border-white/10 px-3' value="item-1">
                <AccordionTrigger className="text-tertiary-700 text-[.92rem] sm:text-[.98rem] py-5">What is staking?</AccordionTrigger>
                <AccordionContent className="text-[.88rem] sm:text-[.92rem] leading-relaxed">
                  Staking is the process of delegating digital assets to a validator and assigning them to a network to help secure its operations. By doing so, stakers can earn rewards based on the amount of assets they have committed, and the rewards are distributed by staking pools. Nebula is a platform that aims to simplify the staking process and make it accessible to a wider audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className='border-white/10 px-3' value="item-2">
                <AccordionTrigger className="text-tertiary-700 text-[.92rem] sm:text-[.98rem] py-5">How does Nebula Stake work?</AccordionTrigger>
                <AccordionContent className="text-[.88rem] sm:text-[.92rem] leading-relaxed space-y-0.5">
                  <p>
                    The community can stake a minimum of 1 billion Nebula tokens in the governance protocol during a governance period and vote on all available proposals (including project development).
                  </p>
                  <p>At the end of each governance round, the community can unstake their tokens and claim rewards. </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem className='border-white/10 px-3' value="item-3">
                <AccordionTrigger className="text-tertiary-700 text-[.92rem] sm:text-[.98rem] py-5">Is it safe to work with Nebula Stake?</AccordionTrigger>
                <AccordionContent className="text-[.88rem] sm:text-[.92rem] leading-relaxed space-y-0.5">
                  <p>Yes, it is safe to work with Nebula stake.</p>
                  <p>
                    In cases where tokens are unstacked before the end of the governance period, there will be no reward and there is a 5% penalty fee for early unstacking.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </section>
      </section>
    </main>
  )
}

export default Dashboard