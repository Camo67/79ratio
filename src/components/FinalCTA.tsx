import { Button } from './ui/button'
import { Card } from './ui/card'

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Card className="bg-gray-900/80 border-yellow-400/30 p-16 text-center glow-gold-intense">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-white">
              IT That Disappears Into Your Workflow
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto font-sans">
              When Tech works, Your Brand Runs full speed!
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed font-sans">
              Speak with the team!
            </p>
            <Button 
              size="lg" 
              className="bg-yellow-400 text-black hover:bg-yellow-300 glow-gold-button px-12 py-6 text-body-large font-sans"
            >
              Talk to the Humans at 79Ratio
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FinalCTA