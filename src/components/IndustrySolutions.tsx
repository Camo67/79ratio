import React from 'react'
import { motion } from 'motion/react'
import { Shield, HeartHandshake, Factory, Scale as Law, BarChart3, Cloud, FileText, Users, Lock, Cpu, Settings, Activity } from 'lucide-react'

export default function IndustrySolutions() {
  return (
    <section id="industries-we-serve" className="py-[var(--space-96)] bg-black">
      <div className="container mx-auto px-[var(--space-24)]">
        <motion.div
          className="text-center mb-[var(--space-64)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-[var(--space-16)] text-white font-sans">Industries We Serve</h2>
          <p className="text-[#A0AEC0] font-sans max-w-3xl mx-auto">
            Tailored, secure solutions for your sector — Law Firms, Healthcare, Nonprofits, and Manufacturing.
          </p>
        </motion.div>

        {/* Nonprofits */}
        <motion.div
          className="rounded-xl border border-black bg-black p-[var(--space-32)] mb-[var(--space-48)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-16)]">
            <HeartHandshake className="w-6 h-6 text-yellow-400" />
            <h3 className="text-white font-sans font-medium">Nonprofits Digital Empowerment</h3>
          </div>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">How it Works</h4>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mb-[var(--space-24)] max-w-4xl">
            Our platform integrates donor management, volunteer coordination, program tracking, and outreach into a unified digital ecosystem. Using cloud-based solutions, nonprofits can automate fundraising campaigns, grant tracking, and impact measurement, ensuring resources are focused on mission-driven activities. We tailor security and accessibility features to protect sensitive supporter data and maintain compliance with regulatory standards.
          </p>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">What We Offer</h4>
          <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-[#A0AEC0] font-sans">
            <li className="flex items-start gap-3"><Users className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Custom Engagement Portals:</strong> Designed for inclusivity and ease of use, facilitating donations, volunteering, and partnership engagement.</span></li>
            <li className="flex items-start gap-3"><BarChart3 className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Impact Analytics:</strong> Real-time support and program metrics help refine strategies and demonstrate value to stakeholders.</span></li>
            <li className="flex items-start gap-3"><Settings className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Fundraising Automation:</strong> Streamlined workflows for campaigns, donor communications, and grant management that save time and increase donations.</span></li>
            <li className="flex items-start gap-3"><Cloud className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Secure Cloud Storage:</strong> Safeguarding donor records, financial data, and sensitive project information, compliant with privacy standards.</span></li>
          </ul>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mt-[var(--space-24)] max-w-4xl">
            Our solutions ensure your organization maintains agility, builds trust, and accelerates mission delivery—all while aligning with industry-specific regulations and community expectations.
          </p>
        </motion.div>

        {/* Law Firms */}
        <motion.div
          className="rounded-xl border border-black bg-black p-[var(--space-32)] mb-[var(--space-48)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-16)]">
            <Law className="w-6 h-6 text-yellow-400" />
            <h3 className="text-white font-sans font-medium">Law Firm Digital Solution</h3>
          </div>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">How it Works</h4>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mb-[var(--space-24)] max-w-4xl">
            We deploy specialized platforms that centralize case files, automate workflow processes, and facilitate secure communications. Powered by cloud infrastructure, these tools enable legal professionals to access case materials remotely, automate document generation, and manage client data with strict confidentiality. Our system seamlessly integrates with existing legal practices, allowing for swift adaptation and compliance adherence.
          </p>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">What We Offer</h4>
          <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-[#A0AEC0] font-sans">
            <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Secure Case Management:</strong> A tailored environment for storing, retrieving, and sharing legal documents with permission controls.</span></li>
            <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Automated Document Generation:</strong> Save hours with templates and AI-assisted drafting for contracts, filings, and pleadings.</span></li>
            <li className="flex items-start gap-3"><Users className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Client Portal & Communication:</strong> Secure channels for client updates, document signing, and consultations, elevating client experience and transparency.</span></li>
            <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Compliance & Data Privacy:</strong> Built-in features that continuously monitor adherence to legal standards, safeguarding client confidentiality.</span></li>
          </ul>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mt-[var(--space-24)] max-w-4xl">
            Our solutions empower law practices to operate more efficiently and securely, ensuring they meet the highest data privacy and compliance standards unique to legal environments.
          </p>
        </motion.div>

        {/* Manufacturing */}
        <motion.div
          className="rounded-xl border border-black bg-black p-[var(--space-32)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[var(--space-12)] mb-[var(--space-16)]">
            <Factory className="w-6 h-6 text-yellow-400" />
            <h3 className="text-white font-sans font-medium">Manufacturing Digital Transformation</h3>
          </div>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">How it Works</h4>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mb-[var(--space-24)] max-w-4xl">
            Our system integrates real-time data collection from machinery, sensors, and supply chains into a unified platform. Using cloud infrastructure and automation, manufacturing companies can monitor production lines, predict maintenance needs, and optimize logistics. Custom dashboards visualize operational metrics, enabling proactive decision-making and reducing downtime.
          </p>
          <h4 className="text-white/90 font-sans mb-[var(--space-12)]">What We Offer</h4>
          <ul className="grid md:grid-cols-2 gap-[var(--space-12)] text-[#A0AEC0] font-sans">
            <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Digital Twin Simulations:</strong> Virtual replicas of manufacturing processes for testing improvements before implementation, reducing risk.</span></li>
            <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Automation & Robotics Management:</strong> Control and optimize robotics and machinery through an intuitive interface that adapts to production needs.</span></li>
            <li className="flex items-start gap-3"><Settings className="w-5 h-5 text-yellow-400 mt-0.5" /> <span><strong className="text-white">Supply Chain Visibility:</strong> Full transparency with integrated tracking from raw materials to finished products, enabling agile responses.</span></li>
            <li className="flex items-start gap-3"><WrenchIcon /> <span><strong className="text-white">Predictive Maintenance:</strong> Analyze machine data in real time to anticipate failures and schedule repairs proactively.</span></li>
          </ul>
          <p className="text-[#A0AEC0] font-sans leading-relaxed mt-[var(--space-24)] max-w-4xl">
            Our solutions turn traditional factories into smart, adaptive production hubs, giving manufacturers the edge in efficiency, quality, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function WrenchIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4z" />
    </svg>
  )
}
