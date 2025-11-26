import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckCircle, HeartHandshake, Scale, Factory, Heart } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="relative py-[var(--space-128)] px-[var(--space-24)] text-white">
        {(() => {
          const base = import.meta.env.BASE_URL || '/'
          const heroBg = encodeURI(`${base}Image_fx (11).jpg`)
          return (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url("${heroBg}")` }}
              />
              <div className="absolute inset-0 bg-black/70 z-0" />
            </>
          )
        })()}
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="mb-[var(--space-24)] font-sans">Industries We Serve</h1>
          <p className="text-[var(--text-body-large)] text-gray-300 font-sans">
            We provide tailored, secure solutions designed specifically for your sector — Law Firms, Healthcare, Nonprofits, and Manufacturing. Our technology is built to meet the unique needs of each industry, ensuring security, compliance, and efficiency.
          </p>
        </div>
      </section>

      {/* Nonprofits */}
      <section id="nonprofits" className="py-[var(--space-96)] px-[var(--space-24)] bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-[var(--space-24)] flex items-center gap-[var(--space-12)]">
            <HeartHandshake className="w-6 h-6 text-yellow-400" />
            <h2 className="font-sans">Nonprofits: Digital Empowerment</h2>
          </div>
          <h3 className="text-white/90 mb-[var(--space-12)] font-sans">How It Works</h3>
          <p className="text-gray-400 leading-relaxed mb-[var(--space-24)] font-sans">
            Our platform integrates donor management, volunteer coordination, program tracking, and outreach into a unified digital ecosystem. Using cloud-based solutions, nonprofits can automate fundraising campaigns, grant tracking, and impact measurement, ensuring resources are focused on mission-driven activities. We tailor security and accessibility features to protect sensitive supporter data and maintain compliance with regulatory standards.
          </p>
          <Card className="bg-black border-black">
            <CardContent className="p-[var(--space-32)]">
              <h3 className="text-white/90 mb-[var(--space-12)] font-sans">What We Offer</h3>
              <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-gray-300 font-sans">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Custom Engagement Portals: Designed for inclusivity and ease of use, facilitating donations, volunteering, and partnership engagement.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Impact Analytics: Real-time support and program metrics help refine strategies and demonstrate value to stakeholders.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Fundraising Automation: Streamlined workflows for campaigns, donor communications, and grant management that save time and increase donations.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Secure Cloud Storage: Safeguarding donor records, financial data, and sensitive project information, compliant with privacy standards.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-gray-400 leading-relaxed mt-[var(--space-24)] font-sans">
            Our solutions ensure your organization maintains agility, builds trust, and accelerates mission delivery — all while aligning with industry-specific regulations and community expectations.
          </p>
        </div>
      </section>

      {/* Law Firms */}
      <section id="law-firms" className="py-[var(--space-96)] px-[var(--space-24)] bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-[var(--space-24)] flex items-center gap-[var(--space-12)]">
            <Scale className="w-6 h-6 text-yellow-400" />
            <h2 className="font-sans">Law Firms: Digital Solutions</h2>
          </div>
          <h3 className="text-white/90 mb-[var(--space-12)] font-sans">How It Works</h3>
          <p className="text-gray-400 leading-relaxed mb-[var(--space-24)] font-sans">
            We deploy specialized platforms that centralize case files, automate workflow processes, and facilitate secure communications. Powered by cloud infrastructure, these tools enable legal professionals to access case materials remotely, automate document generation, and manage client data with strict confidentiality. Our system seamlessly integrates with existing legal practices, allowing for swift adaptation and compliance adherence.
          </p>
          <Card className="bg-black border-black">
            <CardContent className="p-[var(--space-32)]">
              <h3 className="text-white/90 mb-[var(--space-12)] font-sans">What We Offer</h3>
              <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-gray-300 font-sans">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Secure Case Management: A tailored environment for storing, retrieving, and sharing legal documents with permission controls.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Automated Document Generation: Save hours with templates and AI-assisted drafting for contracts, filings, and pleadings.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Client Portal & Communication: Secure channels for client updates, document signing, and consultations, elevating client experience and transparency.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Compliance & Data Privacy: Built-in features that continuously monitor adherence to legal standards, safeguarding client confidentiality.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-gray-400 leading-relaxed mt-[var(--space-24)] font-sans">
            Our solutions empower law practices to operate more efficiently and securely, ensuring they meet the highest data privacy and compliance standards unique to legal environments.
          </p>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="py-[var(--space-96)] px-[var(--space-24)] bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-[var(--space-24)] flex items-center gap-[var(--space-12)]">
            <Heart className="w-6 h-6 text-yellow-400" />
            <h2 className="font-sans">Healthcare: Secure, Compliant, and Patient-Centered Solutions</h2>
          </div>
          <h3 className="text-white/90 mb-[var(--space-12)] font-sans">How It Works</h3>
          <p className="text-gray-400 leading-relaxed mb-[var(--space-24)] font-sans">
            We deploy secure, HIPAA-compliant platforms that centralize patient records, appointment scheduling, telehealth services, and clinical workflows. Using cloud infrastructure, healthcare providers can access critical data remotely, automate administrative tasks, and ensure strict data privacy. Our systems integrate with existing EHRs (Electronic Health Records) and medical devices, allowing for seamless adoption and compliance.
          </p>
          <Card className="bg-black border-black">
            <CardContent className="p-[var(--space-32)]">
              <h3 className="text-white/90 mb-[var(--space-12)] font-sans">What We Offer</h3>
              <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-gray-300 font-sans">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Secure Patient Data Management: Safeguarding patient records, medical histories, and sensitive health data with HIPAA-compliant storage and access controls.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Telehealth &amp; Remote Care: Enable secure virtual consultations, patient engagement platforms, and remote monitoring tools to expand care access.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Automated Administrative Workflows: Streamline scheduling, billing, and compliance reporting to reduce administrative burden and improve operational efficiency.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Compliance &amp; Data Privacy: Built-in features that monitor adherence to HIPAA, GDPR, and other healthcare regulations, ensuring data integrity and legal compliance.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-gray-400 leading-relaxed mt-[var(--space-24)] font-sans">
            Our solutions empower healthcare providers to deliver high-quality care while maintaining the highest standards of security, compliance, and patient trust.
          </p>
        </div>
      </section>

      {/* Manufacturing */}
      <section id="manufacturing" className="py-[var(--space-96)] px-[var(--space-24)] bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-[var(--space-24)] flex items-center gap-[var(--space-12)]">
            <Factory className="w-6 h-6 text-yellow-400" />
            <h2 className="font-sans">Manufacturing: Digital Transformation</h2>
          </div>
          <h3 className="text-white/90 mb-[var(--space-12)] font-sans">How It Works</h3>
          <p className="text-gray-400 leading-relaxed mb-[var(--space-24)] font-sans">
            Our system integrates real-time data collection from machinery, sensors, and supply chains into a unified platform. Using cloud infrastructure and automation, manufacturing companies can monitor production lines, predict maintenance needs, and optimize logistics. Custom dashboards visualize operational metrics, enabling proactive decision-making and reducing downtime.
          </p>
          <Card className="bg-black border-black">
            <CardContent className="p-[var(--space-32)]">
              <h3 className="text-white/90 mb-[var(--space-12)] font-sans">What We Offer</h3>
              <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-gray-300 font-sans">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Digital Twin Simulations: Virtual replicas of manufacturing processes for testing improvements before implementation, reducing risk.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Automation & Robotics Management: Control and optimize robotics and machinery through an intuitive interface that adapts to production needs.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Supply Chain Visibility: Full transparency with integrated tracking from raw materials to finished products, enabling agile responses.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5" /> Predictive Maintenance: Analyze machine data in real time to anticipate failures and schedule repairs proactively.</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-gray-400 leading-relaxed mt-[var(--space-24)] font-sans">
            Our solutions turn traditional factories into smart, adaptive production hubs, giving manufacturers the edge in efficiency, quality, and innovation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
