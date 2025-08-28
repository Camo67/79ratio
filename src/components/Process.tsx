import { Ear, Layers, HeartHandshake } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const Process = () => {
  const steps = [
    {
      icon: <Ear className="w-8 h-8 text-yellow-400" />,
      title: "We Listen Deeply",
      description: "Every journey begins with understanding your rhythms and roadblocks."
    },
    {
      icon: <Layers className="w-8 h-8 text-yellow-400" />,
      title: "Integrate Seamlessly",
      description: "Solutions flow into your workflow—not on top of it."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-yellow-400" />,
      title: "Continued Support",
      description: "Because true partnership doesn't end at launch."
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-white">
            How We Integrate With Intention
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 p-8 text-center glow-gold">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button px-8 py-4"
          >
            Start With a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Process