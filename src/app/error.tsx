'use client';

import Link from 'next/link';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section flex min-h-[70vh] items-center justify-center pt-28 sm:pt-32">
      <div className="card max-w-lg p-8 text-center">
        <p className="section-kicker">Something went wrong</p>
        <h1 className="section-title mt-3">Please try again</h1>
        <p className="section-subtitle mt-4">
          We couldn&apos;t load this part of the portfolio. You can try again or return home.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
