import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Lock, Mail, Eye, EyeOff } from 'lucide-react'

interface ClientLoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const ClientLoginModal = ({ isOpen, onClose }: ClientLoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in real implementation, this would call your authentication API
    console.log('Login attempt:', formData)
    // For demo purposes, just close the modal
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-white flex items-center justify-center gap-2">
            <Lock className="w-5 h-5 text-yellow-400" />
            Client Portal Login
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                placeholder="your.email@company.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-300 transition-colors hover-underline"
            >
              Forgot Password?
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors hover-underline"
            >
              Need Help?
            </button>
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 glow-gold-button"
              style={{ 
                padding: 'var(--space-12) var(--space-24)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                minHeight: '44px'
              }}
            >
              Sign In to Portal
            </Button>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors hover-underline"
                >
                  Contact your account manager
                </button>
              </p>
            </div>
          </div>
        </form>

        <div className="pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Secure access to your IT services dashboard, reports, and support tickets.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ClientLoginModal