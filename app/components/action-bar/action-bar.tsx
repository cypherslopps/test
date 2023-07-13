import React from 'react';
import Button from '../button/button';

const ActionBar = () => {
  return (
    <aside className='w-15vw border border-tertiary-900 rounded-xl p-4 space-y-6'>
        <Button
            role="action"
            variant="border"  
            className="rounded-full" 
        >
            Preview
        </Button>
    </aside>
  )
}

export default ActionBar