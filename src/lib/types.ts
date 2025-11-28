export interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  content: string
  rating: number
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  excluded: string[]
  popular: boolean
  buttonText: string
  buttonVariant: string
}

export interface NavLink {
  name: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}