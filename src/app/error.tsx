'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
        <span className="text-2xl">⚠️</span>
      </div>
      <h2 className="text-2xl font-bold mb-3 text-text-primary">
        Something went wrong
      </h2>
      <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
        An unexpected error occurred. Please try refreshing the page.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2 bg-primary text-white text-xs font-semibold rounded-md hover:bg-white/90 transition-all"
      >
        Try again
      </button>
    </div>
  );
}
