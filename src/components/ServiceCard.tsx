import { Card } from './ui/card'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="h-full bg-gray-900/50 border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 p-8 group rounded-[10px] glow-gold">
      <div className="flex flex-col items-start gap-4 h-full">
        <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

export default ServiceCard