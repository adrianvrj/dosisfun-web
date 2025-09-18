'use client';

import Image from 'next/image';
import Link from 'next/link';

export function ContractSection() {
  return (
    <section id="contract-section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-primary text-center mb-12 lg:mb-16">
          CONTRACT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:grid-flow-col-dense">
          <div className="space-y-6 lg:col-start-2">
            <p className="text-lg font-body text-muted leading-relaxed">
              <strong className="text-foreground">$DOSIS</strong> -
              Used to buy in-game stuff and participate in the dosis.fun ecosystem.
            </p>

            <div className="bg-muted/20 border border-muted/30 rounded-lg p-6">
              <Link
                href="https://www.geckoterminal.com/starknet-alpha/pools/0x5840a26097ef00e681c622053d07d38b87769d090cebf5cdafdd8b0fae17761"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mr-10"
              >
                View on GeckoTerminal
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
              <Link
                href="https://voyager.online/token/0x04cd1aebaeebed861072e715bc8963d6cd39b73aba0d563b03d7e8f008e09bdb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                View on Voyager
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
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