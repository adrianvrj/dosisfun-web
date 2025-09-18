import { Header } from './components/header';
import { HeroSection } from './components/hero-section';
import { WelcomeSection } from './components/welcome-section';
import { OwnershipSection } from './components/ownership-section';
import { EconomySection } from './components/economy-section';
import { ContractSection } from './components/contract-section';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <OwnershipSection />
        <EconomySection />
        <ContractSection />
      </main>
      <Footer />
    </div>
  );
}
