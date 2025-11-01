import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Scale, Factory, Heart } from 'lucide-react'

export default function IndustriesTeaser() {
  const base = import.meta.env.BASE_URL || '/'
  const withBase = (p: string) => encodeURI(p.startsWith('/') ? `${base}${p.slice(1)}` : `${base}${p}`)
  const items = [
    {
      id: 'nonprofits',
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
      title: 'Nonprofits',
      image: '/Partnership Approach.jpg',
      bullets: [
        'Digital tools for donor management, fundraising, and impact tracking.',
        'Secure, compliant cloud storage for sensitive data.',
        'Custom portals to boost engagement and mission delivery.',
      ],
    },
    {
      id: 'law-firms',
      icon: <Scale className="w-5 h-5 text-black" />,
      title: 'Law Firms',
      image: '/Partnership Approach.jpg',
      bullets: [
        'Secure case management and document automation.',
        'Client portals for transparency and communication.',
        'Compliance-focused platforms for legal data privacy.',
      ],
    },
    {
      id: 'manufacturing',
      icon: <Factory className="w-5 h-5 text-black" />,
      title: 'Manufacturing',
      image: '/Partnership Approach.jpg',
      bullets: [
        'Real-time monitoring and predictive maintenance.',
        'Automation and robotics control.',
        'Supply chain visibility for efficient operations.',
      ],
    },
    {
      id: 'healthcare',
      icon: <Heart className="w-5 h-5 text-black" />,
      title: 'Healthcare',
      image: '/Partnership Approach.jpg',
      bullets: [
        'Secure patient data management.',
        'Streamlined operations and compliance.',
      ],
    },
  ]

  return (
    <section className="py-[var(--space-96)] bg-black" id="industries-teaser">
      <div className="container mx-auto px-[var(--space-24)]">
        <div className="text-center mb-[var(--space-64)]">
          <h2 className="mb-[var(--space-16)] text-white font-sans">Industries We Serve</h2>
          <p className="text-[#A0AEC0] max-w-3xl mx-auto font-sans">
            We provide tailored, secure solutions designed for your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-32)]">
          {items.map((item) => (
            <Link key={item.id} to={`/industries#${item.id}`} className="group block">
              <div className="relative overflow-hidden rounded-xl border border-black bg-black p-[var(--space-32)] hover:border-yellow-400/40 transition-colors">
                {item.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center z-0"
                      style={{ backgroundImage: `url("${withBase(item.image)}")` }}
                    />
                    <div className="absolute inset-0 bg-black/60 z-0" />
                  </>
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-[var(--space-12)] mb-[var(--space-16)]">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-sans font-medium group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                  </div>
                  <ul className="space-y-[var(--space-8)] text-white font-sans">
                    {item.bullets.map((b, i) => (
                      <li key={i}>• {b}</li>
                    ))}
                  </ul>
                  <div className="mt-[var(--space-16)] inline-flex items-center text-yellow-400 font-sans font-medium">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-[var(--space-8)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
