import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function MintPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Character Display */}
            <div className="mb-12 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <Image
                  src="/character.png"
                  alt="DOSIS.FUN character for minting"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-title font-bold text-primary mb-8 tracking-wide">
              MINT YOUR CHARACTER
            </h1>

            {/* Price Badge */}
            <div className="inline-flex items-center bg-card border border-primary rounded-lg px-6 py-3 mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary mr-3"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-title font-bold text-primary">
                400 STRK
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-body text-foreground mb-4 max-w-2xl mx-auto">
              Select and mint your unique survivor NFT
            </p>

            <p className="text-lg font-body text-muted mb-12 max-w-2xl mx-auto">
              Your NFT is your game progress - trade your entire gaming session anytime
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white font-title font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors uppercase">
                COMING SOON
              </button>
              <Link
                href="/"
                className="px-8 py-3 bg-transparent text-foreground border-2 border-foreground font-body font-semibold text-lg rounded-lg hover:bg-foreground hover:text-background transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-primary mb-4">
                WHAT YOU&apos;LL GET FOR 400 STRK
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  CHARACTER SELECTION
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Choose from available character designs and mint your survivor NFT. Each character has unique traits that affect gameplay.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  GAME ACCESS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Your NFT grants full access to DOSIS.FUN gameplay. Start building your underground empire immediately after minting.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  TRADEABLE PROGRESS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Your NFT contains your entire game progress. Sell your gaming session, including all achievements, resources, and empire progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-border rounded-lg p-12">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl font-title font-bold text-primary mb-4">
                COMING SOON
              </h2>

              <p className="text-lg font-body text-muted mb-8 max-w-2xl mx-auto">
                Character minting is currently in development. Join our Discord to get notified when minting goes live and secure your spot in the underground.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/yNs5w7k5pD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Join Discord for Updates
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 bg-transparent text-foreground border-2 border-foreground font-body font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}