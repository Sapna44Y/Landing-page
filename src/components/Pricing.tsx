'use client'

import { Check, X, ExternalLink, Crown } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB cloud storage",
      "Basic analytics dashboard",
      "Email support",
      "Standard security features",
      "Basic workflow automation"
    ],
    excluded: [
      "Advanced AI workflows",
      "Custom integrations",
      "Priority support",
      "Advanced analytics"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Everything growing teams need to scale",
    features: [
      "Up to 20 team members",
      "100GB cloud storage",
      "Advanced analytics suite",
      "Priority email & chat support",
      "Custom workflow builder",
      "API access & webhooks",
      "AI-powered automation",
      "Custom branding"
    ],
    excluded: [
      "Dedicated account manager",
      "SLA guarantees"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "primary"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "1TB+ storage with scaling",
      "Custom analytics & reporting",
      "24/7 phone & chat support",
      "Advanced security & compliance",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment"
    ],
    excluded: [],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline"
  }
]

export default function Pricing() {
  const openVercelV0 = () => {
    window.open('https://v0.app/ref/R18B4C', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your{' '}
            <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 border-2 transition-all duration-500 group ${
                plan.popular 
                  ? 'border-orange-400 dark:border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 transform scale-105 premium-shadow' 
                  : 'border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover-lift'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative">
                {/* Plan Header */}
                <div className="text-center mb-10">
                  <h3 className={`text-3xl font-bold mb-4 ${
                    plan.popular 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600' 
                      : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className={`text-5xl font-bold ${
                      plan.popular 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-xl ml-2 ${
                      plan.popular 
                        ? 'text-orange-600 dark:text-orange-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-lg ${
                    plan.popular 
                      ? 'text-orange-700 dark:text-orange-300'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-5 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-4 group/item">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition-transform ${
                        plan.popular 
                          ? 'bg-orange-100 dark:bg-orange-900/30' 
                          : 'bg-green-100 dark:bg-green-900/30'
                      }`}>
                        <Check className={`h-4 w-4 ${
                          plan.popular 
                            ? 'text-orange-600 dark:text-orange-400' 
                            : 'text-green-600 dark:text-green-400'
                        }`} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                  {plan.excluded.map((excluded, excludedIndex) => (
                    <div key={excludedIndex} className="flex items-start space-x-4 opacity-50 group/item">
                      <div className="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mt-0.5">
                        <X className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-lg line-through">
                        {excluded}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={openVercelV0}
                  className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group/btn ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600 premium-shadow hover:shadow-2xl transform hover:scale-105'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 premium-shadow hover:shadow-2xl transform hover:scale-105'
                  }`}
                >
                  {plan.buttonText}
                  {(plan.buttonText === "Get Started" || plan.buttonText === "Start Free Trial") && (
                    <ExternalLink className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500'
              }`} />
            </div>
          ))}
        </div>

        {/* Enterprise Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Need a custom solution?{' '}
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
              Contact our sales team
            </button>{' '}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}