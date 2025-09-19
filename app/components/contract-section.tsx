'use client';

import Image from 'next/image';
import Link from 'next/link';

export function ContractSection() {
  return (
    <section id="contract-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12 lg:mb-16">
          <Image
            src="/dosis-token.png"
            alt="DOSIS Token"
            width={48}
            height={48}
            className="object-contain"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-primary">
            $DOSIS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:grid-flow-col-dense">
          <div className="space-y-6 lg:col-start-2">
            <div className="flex items-center gap-3">
              <Image
                src="/dosis-token.png"
                alt="DOSIS Token"
                width={32}
                height={32}
                className="object-contain"
              />
              <p className="text-lg font-body text-muted leading-relaxed">
                <strong className="text-foreground">$DOSIS</strong> -
                Used to buy in-game stuff and participate in the dosis.fun ecosystem.
              </p>
            </div>

            {/* GeckoTerminal Embed */}
            <div className="bg-muted/20 border border-muted/30 rounded-lg p-4">
              <div className="relative w-full h-100">
                <iframe
                  height="100%" 
                  width="100%" 
                  id="geckoterminal-embed" 
                  title="GeckoTerminal Embed" 
                  src="https://www.geckoterminal.com/starknet-alpha/pools/0x5840a26097ef00e681c622053d07d38b87769d090cebf5cdafdd8b0fae17761?embed=1&info=0&swaps=0&grayscale=0&light_chart=0&chart_type=price&resolution=15m"
                  allow="clipboard-write">
                </iframe>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:col-start-1">
            <div className="relative w-full max-w-xs">
              <Image
                src="/contract.png"
                alt="Smart contract representation"
                width={300}
                height={300}
                className="object-contain w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}