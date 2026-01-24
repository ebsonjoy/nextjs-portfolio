'use client'
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
        <span className="text-3xl">⚠️</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-tight">
        Something went wrong!
      </h2>
      <p className="text-text-secondary mb-12 max-w-md mx-auto">
        An unexpected error occurred. Don't worry, our team of cyber-ants is investigating.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all hover:scale-105 active:scale-95 transition-all"
      >
        Try again
      </button>
    </div>
  )
}
