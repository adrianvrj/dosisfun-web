'use client';

import { ContentSection } from './content-section';

export function OwnershipSection() {
  return (
    <ContentSection
      id="ownership-section"
      title="REAL OWNERSHIP. REAL STAKES"
      imageUrl="/character.png"
      imageAlt="DOSIS.FUN character portrait showing real ownership"
      imagePosition="right"
    >
      <div className="space-y-6">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Your character progression is permanent</strong> -
              Every skill learned, every connection made, every territory claimed stays with you forever.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Track your entire game session with other players</strong> -
              Build relationships, form alliances, and establish your reputation in a persistent world.
            </p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">Everything you build has real value</strong> -
              Your success can literally pay off in ways that extend beyond the game world.
            </p>
          </li>
        </ul>
      </div>
    </ContentSection>
  );
}