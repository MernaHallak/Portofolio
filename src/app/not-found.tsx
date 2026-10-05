import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] items-center justify-center pt-28 sm:pt-32">
      <div className="card max-w-lg p-8 text-center">
        <p className="section-kicker">404</p>
        <h1 className="section-title mt-3">Page not found</h1>
        <p className="section-subtitle mt-4">
          The page you&apos;re looking for isn&apos;t available.
        </p>
        <Link href="/" className="btn-primary mt-7">
          Back to home
        </Link>
      </div>
    </section>
  );
}
