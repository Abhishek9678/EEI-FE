import { ArrowRight, Check, Zap, Shield, TrendingUp, Users, Battery } from 'lucide-react';

export default function FranchisePage() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Growth Market",
      description: "The EV sector is growing at 23% CAGR, offering substantial returns on investment."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Government Support",
      description: "Benefit from subsidies, tax credits, and incentives for EV adoption."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Growing Demand",
      description: "Rising fuel costs and environmental awareness are driving EV adoption."
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Lower Operating Costs",
      description: "EVs have 40% lower operational costs compared to traditional vehicles."
    }
  ];

  const investmentTiers = [
    {
      name: "Starter",
      price: "₹10k - ₹20k",
      features: [
        "5-10 EV fleet vehicles",
        "Local market operations",
        "Basic charging setup",
        "Training & support"
      ]
    },
    {
      name: "Growth",
      price: "₹50k - ₹80k",
      popular: true,
      features: [
        "15-30 EV fleet vehicles",
        "City-wide operations",
        "Advanced charging infrastructure",
        "Dedicated support",
        "Marketing assistance"
      ]
    },
    {
      name: "Enterprise",
      price: "₹1lakh+",
      features: [
        "50+ EV fleet vehicles",
        "Regional operations",
        "Multiple charging hubs",
        "Custom solutions",
        "24/7 priority support"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Invest in the Future of Mobility
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Join our EV revolution with a franchise opportunity that delivers sustainable returns and makes a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/investors" 
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Investment Plans
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Invest With Us?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section id="investment" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Options</h2>
            <p className="text-gray-600">Choose the plan that fits your investment goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  tier.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-6">{tier.price}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-lg font-medium ${
                      tier.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 md:p-12 rounded-2xl">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of mobility. Contact our team to learn more about franchise opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919211780652" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Call Us Now
              </a>
              <a 
                href="mailto:franchise@evcompany.com" 
                className="px-6 py-3 border-2 border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
