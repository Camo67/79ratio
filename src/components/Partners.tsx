import React from 'react';

export default function Partners() {
  const base = import.meta.env.BASE_URL || '/';
  const src = encodeURI(`${base}technology-consulting-partners.png`);
  return (
    <section className="py-16 bg-black" aria-labelledby="partners-heading">
      <h2 id="partners-heading" className="sr-only">Technology Consulting Partners</h2>
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <img
            src={src}
            alt="Technology Consulting Partners - 79Ratio"
            title="Technology Consulting Partners - 79Ratio"
            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl border border-gray-800"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
