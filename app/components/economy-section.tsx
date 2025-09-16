'use client';

import { ContentSection } from './content-section';

export function EconomySection() {
  return (
    <ContentSection
      id="economy-section"
      title="DYNAMIC ECONOMY"
      imageUrl="/black-market.png"
      imageAlt="Underground marketplace showing dynamic economy"
      imagePosition="left"
    >
      <div className="space-y-6">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Player-driven marketplace</strong> -
              Supply and demand are controlled entirely by player actions and decisions.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Create scarce artifacts</strong> -
              Craft unique items that become legendary commodities in the underground economy.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Rare recipes and formulas</strong> -
              Discover and trade exclusive knowledge that gives you competitive advantages.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Buy, sell, and trade everything</strong> -
              From basic commodities to rare items, the entire economy is in your hands.
            </p>
          </li>
        </ul>
      </div>
    </ContentSection>
  );
}