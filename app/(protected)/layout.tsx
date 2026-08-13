import {requireAuth} from '@/features/auth/actions'
import React from 'react'

export default  async function ProtectedLayout({children}:{children:React.ReactNode}){
  await  requireAuth();

  return <div className='min-h-svh flex flex-1 flex-col items-center justify-center bg'>{children}</div>
}