import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default function BlackMarketPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Market Display */}
            <div className="mb-12 flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                <Image
                  src="/black-market.png"
                  alt="DOSIS.FUN black market marketplace"
                  width={192}
                  height={192}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-title font-bold text-primary mb-8 tracking-wide">
              BLACK MARKET
            </h1>

            {/* Reward Badge */}
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
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="text-lg font-title font-bold text-primary">
                EARN REAL $STRK + IN-GAME REWARDS
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-body text-foreground mb-4 max-w-2xl mx-auto">
              Trade your drugs as memecoins and earn real rewards
            </p>

            <p className="text-lg font-body text-muted mb-12 max-w-2xl mx-auto">
              Every successful sale rewards you both in-game and with real $STRK tokens
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white font-title font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors uppercase">
                COMING SOON
              </button>
              <a
                href="/"
                className="px-8 py-3 bg-transparent text-foreground border-2 border-foreground font-body font-semibold text-lg rounded-lg hover:bg-foreground hover:text-background transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-primary mb-4">
                DRUGS TRADING FEATURES
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
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  DRUGS AS MEMECOINS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Each product you create becomes a tradeable memecoin. Buy and sell different drug varieties from other players in the underground economy.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-background border border-border rounded-lg p-6">
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
                  REAL $STRK REWARDS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Every successful sale of your memecoins rewards you with real $STRK tokens. The more popular your product, the higher your earnings.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-background border border-border rounded-lg p-6">
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
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.05 1.4v.17a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.4-1.05H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.05-1.4V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.05 1.4 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.4 1.05h.17a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.4 1.05z" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  INGAME BENEFITS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Successful trades also reward you with in-game benefits: reputation points, in game cash, experience.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-background border border-border rounded-lg p-6">
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
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-title font-bold text-foreground mb-3">
                  MARKET DYNAMICS
                </h3>
                <p className="text-muted font-body leading-relaxed">
                  Drugs memecoin prices fluctuate based on player demand, rarity, and quality. Create viral drugs to maximize your $STRK earnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-background border border-border rounded-lg p-12">
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
                MARKETPLACE IN DEVELOPMENT
              </h2>

              <p className="text-lg font-body text-muted mb-8 max-w-2xl mx-auto">
                The Black Market is being built to handle the complex underground economy. Stay tuned for the most advanced player-driven marketplace in gaming.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.gg/yNs5w7k5pD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white font-body font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Early Access Updates
                </a>
                <a
                  href="/"
                  className="px-6 py-3 bg-transparent text-foreground border-2 border-foreground font-body font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}