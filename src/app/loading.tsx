import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <LoadingSpinner />
      <p className="mt-4 text-text-secondary animate-pulse font-mono tracking-widest uppercase text-xs">
        Loading Portfolio...
      </p>
    </div>
  )
}
