'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

interface ContentSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export function ContentSection({
  id,
  title,
  children,
  imageUrl,
  imageAlt = '',
  imagePosition = 'right',
  className = ''
}: ContentSectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-title font-bold text-primary text-center mb-12 lg:mb-16">
          {title}
        </h2>

        {/* Content Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
        }`}>
          {/* Text Content */}
          <div className={`space-y-6 ${
            imagePosition === 'left' ? 'lg:col-start-2' : ''
          }`}>
            {children}
          </div>

          {/* Image */}
          {imageUrl && (
            <div className={`flex justify-center ${
              imagePosition === 'left' ? 'lg:col-start-1' : ''
            }`}>
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={500}
                  height={600}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}