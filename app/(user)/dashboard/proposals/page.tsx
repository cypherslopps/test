import React from 'react';
import NotificationBox from '@/app/components/notification-box/notification-box'
import ProposalItem from '@/app/components/proposal-item/proposal-item';
import { proposals } from '@/app/lib/constants';
import DashboardSidebar from '@/app/components/dashboard-sidebar/dashboard-sidebar';
import FormSearch from '@/app/components/form-search/form-search';
import ProposalCollection from '@/app/components/proposal-collection/proposal-collection';


function Proposals() {
  return (
    <main className='grid md-md:grid-cols-[max-content,1fr] md-md:gap-x-6 lg:gap-x-9'>
        <DashboardSidebar />

        <section className="flex flex-col gap-y-6">
            <NotificationBox type="info" />

            {/* Proposal Collection */}
            <ProposalCollection styles="space-y-6" />
        </section>
    </main>
  )
}

export default Proposals