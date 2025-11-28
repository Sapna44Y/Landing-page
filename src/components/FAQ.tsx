'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'

const faqItems = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Our free trial gives you full access to all Professional plan features for 14 days. No credit card required upfront. You can explore all features, invite team members, and test workflows. At the end of the trial, you can choose any plan that fits your needs."
  },
  {
    question: "Can I change or cancel my plan anytime?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes to your plan take effect immediately, and we'll prorate the charges for the remainder of your billing cycle. No long-term contracts or cancellation fees."
  },
  {
    question: "Is my data secure with CloudFlow?",
    answer: "Security is our top priority. We use enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, regular security audits, and GDPR compliance. Your data is stored in secure AWS data centers with 99.9% uptime SLA."
  },
  {
    question: "Do you offer discounts for startups or non-profits?",
    answer: "Yes! We offer a 50% discount for registered non-profit organizations and early-stage startups (under 2 years old). Contact our support team with your documentation to get started with our startup/non-profit program."
  },
  {
    question: "What kind of customer support do you provide?",
    answer: "All plans include email support with 24-hour response time. Professional and Enterprise plans include priority support with 4-hour response times, live chat, and screen sharing. Enterprise customers get 24/7 phone support and a dedicated account manager."
  },
  {
    question: "Can I export my data if I decide to cancel?",
    answer: "Yes, you can export all your data at any time in common formats (CSV, JSON, Excel, PDF). We believe you should always have full control and access to your data. Export tools are available in your account settings."
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, we offer on-premise deployment for Enterprise customers. This includes full installation support, dedicated infrastructure, and custom security configurations. Contact our sales team for on-premise deployment options and pricing."
  },
  {
    question: "How often do you release new features?",
    answer: "We release updates every two weeks with new features, improvements, and bug fixes. Major feature releases happen quarterly. All customers get access to new features automatically - no extra cost or action required."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8))] dark:bg-grid-slate-800/20 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))]" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-700 dark:text-gray-300 text-sm font-medium mb-6 border border-gray-200/50 dark:border-gray-700/50">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about CloudFlow. Can't find the answer? Contact our friendly team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl overflow-hidden premium-shadow hover-lift transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <span className="text-xl font-semibold text-gray-900 dark:text-white pr-8 group-hover:gradient-text transition-all duration-300">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-5">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}