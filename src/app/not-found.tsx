import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-text-muted/30 mb-2">404</h1>
      <h2 className="text-2xl font-bold mb-3 text-text-primary">
        Page Not Found
      </h2>
      <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-md hover:bg-white/90 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
