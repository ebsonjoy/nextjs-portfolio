import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-8xl font-black text-white/5 mb-[-2rem] select-none">404</h1>
      <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-tight">
        Lost in Code?
      </h2>
      <p className="text-text-secondary mb-12 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved to another dimension.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-primary text-navy rounded-full font-bold uppercase tracking-wider hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
      >
        Return Home
      </Link>
    </div>
  )
}
