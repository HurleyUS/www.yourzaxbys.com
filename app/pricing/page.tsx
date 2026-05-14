import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Star, Zap, Crown, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Zaxby's Franchise Management Platform",
  description:
    "Choose the perfect plan for your Zaxby's franchise. Transparent pricing with no hidden fees. Start your free trial today.",
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for single location franchisees",
    price: "$99",
    period: "per month",
    icon: Star,
    popular: false,
    features: [
      "Real-time analytics dashboard",
      "Basic HR management (up to 25 employees)",
      "Sales & labor tracking",
      "Email support",
      "Mobile app access",
      "Basic reporting",
      "1 location included",
    ],
    limitations: [
      "Limited integrations",
      "Basic training management",
      "Standard maintenance tracking",
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Ideal for multi-location franchisees",
    price: "$199",
    period: "per month",
    icon: Zap,
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced analytics & forecasting",
      "Complete HR management (unlimited employees)",
      "Hiring & onboarding workflows",
      "Training management system",
      "Uniform management",
      "Maintenance ticket system",
      "Priority support",
      "Up to 5 locations",
      "API access",
      "Custom reporting",
      "Phone support",
    ],
    limitations: [],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For large franchise groups and above-store teams",
    price: "Custom",
    period: "contact us",
    icon: Crown,
    popular: false,
    features: [
      "Everything in Professional",
      "Unlimited locations",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom training programs",
      "Advanced security features",
      "SLA guarantees",
      "Custom development",
      "Multi-brand support",
      "Executive dashboards",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

const addOns = [
  {
    name: "Additional Locations",
    description: "Add more locations to your plan",
    price: "$25",
    period: "per location/month",
    features: [
      "Full platform access",
      "Separate analytics",
      "Location-specific reporting",
    ],
  },
  {
    name: "Advanced Analytics",
    description: "AI-powered insights and predictions",
    price: "$50",
    period: "per month",
    features: [
      "Predictive analytics",
      "Trend analysis",
      "Custom AI models",
      "Advanced forecasting",
    ],
  },
  {
    name: "Custom Integrations",
    description: "Connect with your existing systems",
    price: "$200",
    period: "one-time setup",
    features: [
      "POS integration",
      "Payroll system sync",
      "Inventory management",
      "Custom API development",
    ],
  },
  {
    name: "Priority Support",
    description: "Faster response times and dedicated support",
    price: "$100",
    period: "per month",
    features: [
      "1-hour response time",
      "Dedicated support agent",
      "Phone & chat support",
      "Priority feature requests",
    ],
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a 30-day free trial with full access to all features. No credit card required to start.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "What happens if I exceed my location limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can add additional locations for $25/month each or upgrade your plan.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer:
      "Yes! Save 20% when you pay annually. Contact our sales team for more information about annual pricing.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees for Starter and Professional plans. Enterprise plans may include custom setup based on requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, ACH transfers, and can accommodate enterprise payment terms for larger customers.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="block text-red-600">Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No hidden fees, no surprises. Start with a 30-day free trial and
              scale as you grow. All plans include our core features with
              transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-red-500 shadow-xl scale-105" : "hover:shadow-lg"} transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    className={`w-full ${plan.ctaVariant === "default" ? "bg-red-600 hover:bg-red-700" : ""}`}
                    variant={plan.ctaVariant}
                  >
                    {plan.cta}
                  </Button>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Limitations:
                      </h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li
                            key={limitationIndex}
                            className="flex items-start"
                          >
                            <X className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Add-ons & Extensions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional features and services tailored
              to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {addon.price}
                    </span>
                    <span className="text-gray-600 ml-1">{addon.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Our Enterprise plan offers unlimited customization, dedicated
            support, and tailored solutions for large franchise groups and
            above-store teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Contact Sales Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful Zaxby's franchisees who are already
            using our platform to optimize their operations and grow their
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
            >
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
