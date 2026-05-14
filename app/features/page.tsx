import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Users,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  Zap,
  Globe,
  Headphones,
  FileText,
  Settings,
  Smartphone,
  Database,
  Lock,
  Bell,
  Calendar,
  MessageSquare,
  PieChart,
  LineChart,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Zaxby's Franchise Management Platform",
  description:
    "Discover all the powerful features that help Zaxby's franchisees optimize operations, reduce costs, and maximize success.",
};

const featureCategories = [
  {
    title: "Performance Analytics",
    icon: BarChart3,
    description: "Real-time insights and data-driven decision making",
    features: [
      {
        name: "Sales Analytics",
        description:
          "Track sales performance, trends, and forecasts with interactive dashboards",
        icon: LineChart,
        benefits: [
          "Real-time sales tracking",
          "Trend analysis",
          "Forecasting",
          "Comparative performance",
        ],
      },
      {
        name: "Labor Management",
        description:
          "Optimize labor costs and scheduling with intelligent analytics",
        icon: Users,
        benefits: [
          "Labor cost tracking",
          "Schedule optimization",
          "Overtime monitoring",
          "Efficiency metrics",
        ],
      },
      {
        name: "Waste Management",
        description:
          "Monitor and reduce food waste with detailed tracking and alerts",
        icon: Target,
        benefits: [
          "Waste tracking",
          "Cost analysis",
          "Reduction goals",
          "Spoilage alerts",
        ],
      },
      {
        name: "Financial Reporting",
        description: "Comprehensive financial reports and variance analysis",
        icon: DollarSign,
        benefits: [
          "COGS analysis",
          "Profit margins",
          "Budget tracking",
          "Variance reports",
        ],
      },
    ],
  },
  {
    title: "Human Resources",
    icon: Users,
    description: "Complete HR management from hiring to retirement",
    features: [
      {
        name: "Hiring Management",
        description: "Streamlined applicant tracking and hiring workflows",
        icon: FileText,
        benefits: [
          "ATS system",
          "Job postings",
          "Interview scheduling",
          "Background checks",
        ],
      },
      {
        name: "Onboarding",
        description: "Digital onboarding workflows and training management",
        icon: CheckCircle,
        benefits: [
          "Digital checklists",
          "Document collection",
          "Training schedules",
          "Progress tracking",
        ],
      },
      {
        name: "Attendance Tracking",
        description: "Comprehensive time tracking and attendance management",
        icon: Clock,
        benefits: [
          "Time clock integration",
          "PTO tracking",
          "Schedule adherence",
          "Overtime alerts",
        ],
      },
      {
        name: "Performance Management",
        description: "Track employee performance and manage rewards",
        icon: Star,
        benefits: [
          "Performance reviews",
          "Goal setting",
          "Recognition system",
          "Bonus tracking",
        ],
      },
    ],
  },
  {
    title: "Operations Management",
    icon: Settings,
    description: "Streamline daily operations and maintenance",
    features: [
      {
        name: "Maintenance System",
        description: "Track and manage equipment maintenance and repairs",
        icon: Settings,
        benefits: [
          "Issue reporting",
          "Work order tracking",
          "Vendor management",
          "Preventive maintenance",
        ],
      },
      {
        name: "Uniform Management",
        description: "Complete uniform allocation and inventory tracking",
        icon: Award,
        benefits: [
          "Inventory tracking",
          "Employee assignments",
          "Sales management",
          "Replacement scheduling",
        ],
      },
      {
        name: "Compliance Tracking",
        description: "Monitor audits, inspections, and regulatory compliance",
        icon: Shield,
        benefits: [
          "Audit management",
          "Health inspections",
          "Training compliance",
          "Document storage",
        ],
      },
      {
        name: "Quality Control",
        description: "Maintain consistent quality standards across locations",
        icon: CheckCircle,
        benefits: [
          "Quality checklists",
          "Standards monitoring",
          "Corrective actions",
          "Performance metrics",
        ],
      },
    ],
  },
  {
    title: "Customer Experience",
    icon: Headphones,
    description: "Enhance customer satisfaction and loyalty",
    features: [
      {
        name: "Guest Feedback",
        description: "Collect and analyze customer feedback and reviews",
        icon: MessageSquare,
        benefits: [
          "Review aggregation",
          "Satisfaction surveys",
          "Response management",
          "Trend analysis",
        ],
      },
      {
        name: "Catering CRM",
        description: "Manage catering orders and customer relationships",
        icon: Globe,
        benefits: [
          "Order tracking",
          "Customer profiles",
          "Event management",
          "Follow-up automation",
        ],
      },
      {
        name: "Local Marketing",
        description: "Tools for local store marketing and promotions",
        icon: Target,
        benefits: [
          "Campaign management",
          "Promotional tracking",
          "Community engagement",
          "ROI measurement",
        ],
      },
      {
        name: "Service Analytics",
        description: "Monitor service speed and customer experience metrics",
        icon: Activity,
        benefits: [
          "Service time tracking",
          "Queue management",
          "Customer wait times",
          "Efficiency metrics",
        ],
      },
    ],
  },
];

const integrations = [
  {
    name: "POS Systems",
    description: "Seamless integration with major POS providers",
  },
  {
    name: "Payroll Systems",
    description: "Connect with ADP, Paychex, and other payroll providers",
  },
  {
    name: "Inventory Management",
    description: "Real-time inventory tracking and alerts",
  },
  {
    name: "Accounting Software",
    description: "QuickBooks, Xero, and other accounting platforms",
  },
  {
    name: "Email Marketing",
    description: "Mailchimp, Constant Contact, and marketing automation",
  },
  {
    name: "Scheduling Tools",
    description: "When I Work, Homebase, and employee scheduling apps",
  },
];

const securityFeatures = [
  "End-to-end encryption",
  "SOC 2 Type II compliance",
  "GDPR compliance",
  "Regular security audits",
  "Role-based access control",
  "Multi-factor authentication",
  "Data backup and recovery",
  "Secure API endpoints",
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Comprehensive Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="block text-red-600">Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools and insights you
              need to optimize operations, manage your team, and grow your
              Zaxby's franchise successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <category.icon className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.features.map((feature, featureIndex) => (
                <Card
                  key={featureIndex}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the tools you already use. Our platform integrates
              with over 50+ popular business applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {integration.name}
                  </h3>
                  <p className="text-gray-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your data security is our top priority. We maintain the highest
                standards of security and compliance to protect your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/features/security-dashboard.jpg"
                alt="Security dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/features/mobile-app.jpg"
                alt="Mobile app interface"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mobile-First Design
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Access all features on the go with our responsive web app and
                native mobile applications. Manage your franchise from anywhere,
                anytime.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Smartphone className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700">
                    Native iOS and Android apps
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700">
                    Responsive web interface
                  </span>
                </div>
                <div className="flex items-center">
                  <Bell className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700">Real-time notifications</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-700">
                    Offline data synchronization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience All These Features?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Start your free trial today and discover how our comprehensive
            platform can transform your franchise operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
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
    </div>
  );
}
