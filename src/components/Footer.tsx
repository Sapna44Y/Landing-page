'use client' // Add this at the top

import { Twitter, Facebook, Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,transparent,black)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  CloudFlow
                </span>
              </div>
              <p className="text-gray-300 text-lg mb-8 max-w-md leading-relaxed">
                Streamline your workflow with our powerful SaaS platform. 
                Join thousands of teams who trust us with their productivity and collaboration needs.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600/50"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Integrations', 'Updates', 'API Docs', 'Mobile App'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                      {item}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300 ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-4">
                {['Documentation', 'Help Center', 'Contact Us', 'Status', 'Community', 'Training'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium group flex items-center">
                      {item}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300 ml-2" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-400 text-lg">
              © 2024 CloudFlow. All rights reserved.
            </div>
            <div className="flex space-x-8 text-lg">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium group"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <div className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gray-700/50 transition-colors border border-gray-700/50 group-hover:border-gray-600/50">
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}