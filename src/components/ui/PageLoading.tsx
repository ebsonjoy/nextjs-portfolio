'use client'
import { useEffect, useState } from 'react'

export default function PageLoading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-navy z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        <div className="absolute inset-0 rounded-full border-t-2 border-primary/20"></div>
      </div>
      <p className="mt-4 text-primary font-medium tracking-widest text-sm animate-pulse">LOADING</p>
    </div>
  )
}