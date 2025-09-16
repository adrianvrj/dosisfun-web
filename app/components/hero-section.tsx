'use client';

import Image from 'next/image';
import { Button } from './button';

interface HeroSectionProps {
  onMintClick?: () => void;
  onLearnMoreClick?: () => void;
}

export function HeroSection({ onMintClick, onLearnMoreClick }: HeroSectionProps) {
  const handleMintClick = () => {
    if (onMintClick) {
      onMintClick();
    } else {
      // Default behavior - could navigate to mint page
      window.open('/mint', '_blank');
    }
  };

  const handleLearnMoreClick = () => {
    if (onLearnMoreClick) {
      onLearnMoreClick();
    } else {
      // Default behavior - scroll to next section
      const nextSection = document.getElementById('welcome-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Skull Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
            <Image
              src="/logo.png"
              alt="DOSIS.FUN skull logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-title font-bold text-primary mb-6 leading-tight">
          DOSIS.FUN
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-body text-foreground mb-4">
          Survive the Streets. Build Your Empire.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl font-body text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
          From zero to kingdom in the most ruthless survival RPG ever created
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="large"
            onClick={handleMintClick}
            className="w-full sm:w-auto"
          >
            Mint your character
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={handleLearnMoreClick}
            className="w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}