import React from 'react';

// A magazine-style pull quote component
export const PullQuote = ({ children }: { children?: React.ReactNode }) => (
  <blockquote className="my-8 border-l-4 border-rutgers-red pl-6 italic text-xl md:text-2xl text-slate-700 font-serif leading-relaxed">
    {children}
  </blockquote>
);

// A figure component for images with captions
interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}

export const Figure: React.FC<FigureProps> = ({ src, alt, caption, className = "" }) => (
  <figure className={`my-10 w-full ${className}`}>
    <div className="overflow-hidden rounded-lg shadow-md border border-stone-200">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-out" 
      />
    </div>
    <figcaption className="mt-3 text-sm text-stone-500 font-sans border-b border-stone-200 pb-2">
      {caption}
    </figcaption>
  </figure>
);

// Section Header
export const SectionHeading = ({ children }: { children?: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold font-sans mt-12 mb-6 text-rutgers-dark tracking-tight">
    {children}
  </h2>
);

// Separator
export const Separator = () => (
  <div className="w-24 h-1 bg-rutgers-red my-12 opacity-80 rounded-full" />
);