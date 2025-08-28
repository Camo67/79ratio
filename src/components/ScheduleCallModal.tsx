'use client'

import { useState } from 'react'
import { Calendar, Clock, Building, Mail, Phone, User, X } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface ScheduleCallModalProps {
  isOpen: boolean
  onClose: () => void
}

const ScheduleCallModal = ({ isOpen, onClose }: ScheduleCallModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    employees: '',
    services: '',
    preferredTime: '',
    timeZone: '',
    urgency: '',
    currentChallenges: '',
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Close modal after success message
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        employees: '',
        services: '',
        preferredTime: '',
        timeZone: '',
        urgency: '',
        currentChallenges: '',
        additionalInfo: ''
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-black border border-gray-800 max-w-md mx-auto">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-black" />
            </div>
            <h3 
              className="text-white mb-4"
              style={{ 
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: 'var(--line-height-h3)'
              }}
            >
              Thank You!
            </h3>
            <p 
              className="text-gray-300"
              style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              We've received your consultation request. Our team will contact you within 24 hours to schedule your call.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-gray-800 max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-gray-800 pb-6">
          <DialogTitle 
            className="text-white flex items-center gap-3"
            style={{ 
              fontSize: 'var(--text-h3)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-h3)'
            }}
          >
            <Calendar className="w-6 h-6 text-yellow-400" />
            Schedule Your Free IT Consultation
          </DialogTitle>
          <p 
            className="text-gray-300 mt-2"
            style={{ 
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 'var(--line-height-body)'
            }}
          >
            Get personalized IT solutions for your business. Our experts will assess your needs and provide tailored recommendations.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6" style={{ padding: 'var(--space-24) 0' }}>
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 
              className="text-yellow-400 flex items-center gap-2"
              style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              <User className="w-4 h-4" />
              Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-white">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                  required
                />
              </div>
            </div>
          </div>

          {/* Company Information */}
          <div className="space-y-4">
            <h4 
              className="text-yellow-400 flex items-center gap-2"
              style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              <Building className="w-4 h-4" />
              Company Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company" className="text-white">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                  required
                />
              </div>
              <div>
                <Label htmlFor="jobTitle" className="text-white">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="employees" className="text-white">Number of Employees</Label>
              <Select onValueChange={(value) => handleInputChange('employees', value)}>
                <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Services & Scheduling */}
          <div className="space-y-4">
            <h4 
              className="text-yellow-400 flex items-center gap-2"
              style={{ 
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 'var(--line-height-body)'
              }}
            >
              <Clock className="w-4 h-4" />
              Consultation Details
            </h4>
            <div>
              <Label htmlFor="services" className="text-white">Primary Interest</Label>
              <Select onValueChange={(value) => handleInputChange('services', value)}>
                <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                  <SelectValue placeholder="Select service area" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  <SelectItem value="strategic-consulting">Strategic IT & Consulting</SelectItem>
                  <SelectItem value="infrastructure">Core Infrastructure & Network Management</SelectItem>
                  <SelectItem value="security">Security & Compliance</SelectItem>
                  <SelectItem value="cloud">Cloud & Virtualization Solutions</SelectItem>
                  <SelectItem value="data-protection">Data Protection & Business Continuity</SelectItem>
                  <SelectItem value="managed-operations">Managed Operations & Support</SelectItem>
                  <SelectItem value="general">General IT Assessment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredTime" className="text-white">Preferred Time</Label>
                <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="urgency" className="text-white">Urgency Level</Label>
                <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    <SelectItem value="asap">ASAP (Critical Issue)</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="next-week">Next Week</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentChallenges" className="text-white">Current IT Challenges</Label>
              <Textarea
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                placeholder="Describe your current IT challenges or what you'd like to discuss..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="additionalInfo" className="text-white">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                className="bg-gray-900/50 border-gray-700 text-white focus:border-yellow-400"
                placeholder="Any additional information you'd like us to know..."
                rows={2}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6 border-t border-gray-800">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 text-white hover:bg-gray-600"
              style={{ 
                padding: 'var(--space-16) var(--space-24)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                minHeight: '44px'
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500 glow-gold-button"
              style={{ 
                padding: 'var(--space-16) var(--space-24)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                minHeight: '44px'
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Scheduling...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule My Consultation
                </div>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ScheduleCallModal