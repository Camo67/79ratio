import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Brain,
  CheckCircle,
  Cloud,
  Cpu,
  Database,
  Headphones,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    title: "Managed Systems & Support",
    description: "Keeping your operations running smoothly.",
    icon: Server,
    features: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support"],
  },
  {
    title: "Cyber Protection",
    description: "Guarding your business from digital threats.",
    icon: Lock,
    features: ["Threat Detection", "Data Encryption", "Compliance Management"],
  },
  {
    title: "Cloud & Data Solutions",
    description: "Access your information anytime, anywhere.",
    icon: Cloud,
    features: ["Cloud Migration", "Disaster Recovery", "Auto-Backup Systems"],
  },
  {
    title: "AI Optimization",
    description: "Smarter systems that work for you.",
    icon: Brain,
    features: ["Predictive Support", "Process Automation", "Intelligent Analytics"],
  },
  {
    title: "On-Site & Remote Assistance",
    description: "Support when and where you need it.",
    icon: Headphones,
    features: ["Local Presence", "Instant Response", "Multi-Channel Support"],
  },
  {
    title: "Business Tech Strategy",
    description: "Mapping growth with technology that works.",
    icon: TrendingUp,
    features: ["Digital Strategy", "Growth Planning", "Tech Roadmaps"],
  },
];

const DIFFERENTIATORS = [
  {
    title: "One partner for everything",
    description: "No finger pointing between providers.",
    icon: Users,
  },
  {
    title: "Flat-rate simplicity",
    description: "Predictable pricing without surprise invoices.",
    icon: Database,
  },
  {
    title: "Built for small-business reality",
    description: "Right-sized support that adapts with you.",
    icon: Cpu,
  },
  {
    title: "From rescue to long-term growth",
    description: "Support across every stage of your tech journey.",
    icon: TrendingUp,
  },
  {
    title: "Technology that gives time back",
    description: "More hours, greater profit, and calmer operations.",
    icon: Zap,
  },
];

const BRAND_TRUTH = [
  "You are not the cheapest — but you save the most.",
  "You don't promise perfection — you promise continuity.",
  "When something breaks, you are already on the way.",
  "When something grows, you're already ahead of it.",
  "And that makes you more than a provider — you are the partner businesses wish they found sooner.",
];

const HomePage = () => {
  const base = import.meta.env.BASE_URL || "/";
  const heroBg = encodeURI(`${base}technology-consulting-partners.png`);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero */}
      <section
        className="relative isolate overflow-hidden bg-slate-950"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 16, 25, 0.8), rgba(13, 16, 25, 0.8)), url("${heroBg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <Badge className="mb-6 bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/30">
            RATIO 79
          </Badge>
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Everything tech. One trusted partner.
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-base text-slate-200 sm:text-lg">
            RATIO 79 manages your systems, data, and tools so you can focus on
            growing your business—confident the technology behind it is secure,
            available, and future-ready.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/get-started">
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300">
                Book a free assessment
              </Button>
            </Link>
            <Link to="/solutions">
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                Explore our solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">What we do</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Strategic support, ironclad security, and day-to-day reliability—without the enterprise bloat.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
          <Card className="border-slate-800/60 bg-slate-900/60 backdrop-blur">
            <CardHeader className="flex flex-row items-start gap-3">
              <Shield className="mt-1 h-6 w-6 text-yellow-400" />
              <div>
                <CardTitle className="text-lg font-semibold text-white">
                  We keep your systems alive
                </CardTitle>
                <p className="mt-1 text-sm text-slate-300">
                  24/7 monitoring, proactive maintenance, and zero-downtime mindsets.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-slate-800/60 bg-slate-900/60 backdrop-blur">
            <CardHeader className="flex flex-row items-start gap-3">
              <Lock className="mt-1 h-6 w-6 text-yellow-400" />
              <div>
                <CardTitle className="text-lg font-semibold text-white">
                  We protect what matters most
                </CardTitle>
                <p className="mt-1 text-sm text-slate-300">
                  Modern cyber defence to keep threats out and compliance on track.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-slate-800/60 bg-slate-900/60 backdrop-blur">
            <CardHeader className="flex flex-row items-start gap-3">
              <TrendingUp className="mt-1 h-6 w-6 text-yellow-400" />
              <div>
                <CardTitle className="text-lg font-semibold text-white">
                  We modernise for tomorrow
                </CardTitle>
                <p className="mt-1 text-sm text-slate-300">
                  Cloud, automation, and analytics that scale alongside your ambition.
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-slate-800/60 bg-slate-900/60 backdrop-blur">
            <CardHeader className="flex flex-row items-start gap-3">
              <Headphones className="mt-1 h-6 w-6 text-yellow-400" />
              <div>
                <CardTitle className="text-lg font-semibold text-white">
                  We stay when others leave
                </CardTitle>
                <p className="mt-1 text-sm text-slate-300">
                  Long-term partnership with clear lines, quick responses, and real humans.
                </p>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Core services</h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Handled by specialists, orchestrated as one team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, description, icon: Icon, features }) => (
              <Card
                key={title}
                className="border-slate-800/60 bg-slate-950/60 transition hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-yellow-400/15 p-3 text-yellow-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
                  </div>
                  <p className="text-sm text-slate-300">{description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-slate-200">
                      <CheckCircle className="mr-3 h-4 w-4 text-yellow-300" />
                      {feature}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Why teams choose RATIO 79</h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Consistent delivery, transparent communication, and zero finger pointing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {DIFFERENTIATORS.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-6 transition hover:border-yellow-400/50"
              >
                <Icon className="mb-4 h-6 w-6 text-yellow-300" />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand truth */}
      <section className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-transparent py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">The truth of our brand</h2>
          <div className="mt-10 space-y-6 text-base text-slate-100 sm:text-lg">
            {BRAND_TRUTH.map((item) => (
              <p key={item} className="text-balance">{item}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Keep your business moving, securely.
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Book a free technology assessment and see where we can reduce risk, recover hours, and unlock smarter workflows.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/get-started">
              <Button size="lg" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300">
                Schedule free assessment
              </Button>
            </Link>
            <Link to="/solutions">
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                Talk to a specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
