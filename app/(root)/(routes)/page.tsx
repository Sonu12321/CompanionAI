import { UserButton } from '@clerk/nextjs';
import React from 'react'

const Testpage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
      </div>
  )
}

export default Testpage;