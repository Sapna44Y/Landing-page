'use client'

import { ExternalLink, Sparkles } from 'lucide-react'

export default function Hero() {
  const openVercelV0 = () => {
    window.open('https://v0.app/ref/R18B4C', '_blank', 'noopener,noreferrer')
  }

  const handleScrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/30 pt-20 pb-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800/20 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float dark:bg-blue-600/10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float delay-1000 dark:bg-purple-600/10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float delay-2000 dark:bg-indigo-600/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-7xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 font-medium mb-12 premium-shadow hover-lift group">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-500 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                New: AI-powered workflows now available
              </span>
            </div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
            <span className="block">Streamline</span>
            <span className="block">
              Your{' '}
              <span className="gradient-text relative">
                Workflow
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 -z-10" />
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            The intelligent SaaS platform that helps <span className="font-semibold text-gray-700 dark:text-gray-200">modern teams</span> collaborate, 
            automate, and achieve <span className="font-semibold text-gray-700 dark:text-gray-200">more in less time</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={openVercelV0}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 premium-shadow hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:ring-offset-2 animate-glow"
            >
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md group-hover:blur-lg transition-all opacity-70 -z-10" />
            </button>
            
            <button 
              onClick={handleScrollToPricing}
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-300/50 dark:border-gray-600/50 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 premium-shadow hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500/20 focus:ring-offset-2"
            >
              View Pricing
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '10k+', label: 'Teams Trust Us' },
              { value: '24/7', label: 'Premium Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-500 dark:text-gray-400 font-medium tracking-wide text-sm uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}