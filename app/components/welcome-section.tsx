'use client';

import { ContentSection } from './content-section';

export function WelcomeSection() {
  return (
    <ContentSection
      id="welcome-section"
      title="WELCOME TO THE UNDERGROUND"
      imageUrl="/weed.png"
      imageAlt="Underground survival character"
      imagePosition="left"
    >
      <p className="text-lg font-body text-muted leading-relaxed">
        You&apos;re broke, desperate, and owe dangerous people serious money.
        The only way out? Build your own underground operation from scratch.
        Create, trade, and survive in a world where every decision could be your last and
        every move has the potential to make you rich beyond your dreams.
      </p>
      <p className="text-lg font-body text-muted leading-relaxed">
        Start with nothing but your wits and determination. Build an empire that spans
        the underground economy, where reputation is currency and survival is never guaranteed.
      </p>
    </ContentSection>
  );
}