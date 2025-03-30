import React from 'react'
import { Loader2 } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <Loader2 className='size-8 animate-spin'/>
    </div>
  )
}
