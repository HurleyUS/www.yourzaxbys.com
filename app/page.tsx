import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Users,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
  Target,
  Award,
  Zap,
  Globe,
} from "lucide-react";
import { HeroCTA, SolutionCTA, FinalCTA } from "@/components/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.svg"
              alt="Zaxby's"
              width={300}
              height={73}
              className="mx-auto mb-6"
            />
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Franchise Management Platform
            </Badge>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Transform Your
            <span className="block text-red-600">Franchise Operations</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The all-in-one platform that empowers Zaxby's franchisees with
            powerful analytics, streamlined HR management, and comprehensive
            operational tools to maximize success.
          </p>

          <HeroCTA />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">500+</div>
              <div className="text-gray-600">Active Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">25%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">4.9★</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Are You Struggling With These Challenges?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Managing a Zaxby's franchise comes with unique operational
              complexities that traditional tools can't handle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Scattered Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sales, labor, and operational data spread across multiple
                  systems, making it impossible to get a clear picture of
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">HR Headaches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manual hiring processes, scattered employee records, and no
                  centralized training management system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Time Drain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Spending hours on administrative tasks instead of focusing on
                  growing your business and serving customers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Hidden Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wasted food, inefficient labor scheduling, and missed
                  opportunities due to lack of real-time insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Compliance Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manual tracking of audits, training compliance, and health
                  department requirements leading to potential violations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Growth Barriers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No scalable systems to manage multiple locations or identify
                  opportunities for expansion and improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Complete Solution for Zaxby's Franchisees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One platform that handles everything from real-time analytics to
              complete HR management, designed specifically for the unique needs
              of Zaxby's operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Real-Time Performance Dashboard
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Get instant insights into sales, labor costs, waste management,
                and operational excellence with beautiful, interactive
                dashboards that update in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Sales tracking and trend analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Labor cost optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Waste reduction monitoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Guest experience scoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-red-600">$12,450</div>
                  <div className="text-sm text-gray-600">Today's Sales</div>
                  <div className="text-green-600 text-sm">
                    +8.2% vs yesterday
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">23.4%</div>
                  <div className="text-sm text-gray-600">Labor Cost</div>
                  <div className="text-green-600 text-sm">-2.1% vs target</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">4.2%</div>
                  <div className="text-sm text-gray-600">Waste Rate</div>
                  <div className="text-red-600 text-sm">+0.3% vs target</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">4.8★</div>
                  <div className="text-sm text-gray-600">Guest Score</div>
                  <div className="text-green-600 text-sm">
                    +0.2 vs last week
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for Zaxby's franchise
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Real-time dashboards for sales, labor, waste, and operational
                  metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sales trend analysis</li>
                  <li>• Labor cost optimization</li>
                  <li>• Waste reduction tracking</li>
                  <li>• COGS variance analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>HR Management</CardTitle>
                <CardDescription>
                  Complete hiring, onboarding, and team management system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Applicant tracking system</li>
                  <li>• Digital onboarding workflows</li>
                  <li>• Training management</li>
                  <li>• Attendance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Audit Management</CardTitle>
                <CardDescription>
                  Track Steritech and Health Department scores with compliance
                  tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Audit score tracking</li>
                  <li>• Compliance monitoring</li>
                  <li>• Corrective action planning</li>
                  <li>• Documentation management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Maintenance System</CardTitle>
                <CardDescription>
                  Streamlined equipment and facility maintenance management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Issue reporting and tracking</li>
                  <li>• Equipment maintenance schedules</li>
                  <li>• Parts ordering system</li>
                  <li>• Vendor management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>Uniform Management</CardTitle>
                <CardDescription>
                  Complete uniform allocation, sales, and inventory tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Employee uniform assignments</li>
                  <li>• Inventory management</li>
                  <li>• Sales tracking</li>
                  <li>• Replacement scheduling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Catering & Marketing</CardTitle>
                <CardDescription>
                  CRM system for catering orders and local marketing management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Customer relationship management</li>
                  <li>• Order tracking</li>
                  <li>• Marketing campaign tools</li>
                  <li>• ROI measurement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Results for Zaxby's Franchisees
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of successful franchisees who have transformed their
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
              <div className="text-gray-600">
                Reduction in Administrative Costs
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15hrs</div>
              <div className="text-gray-600">Saved Per Week Per Location</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">18%</div>
              <div className="text-gray-600">Increase in Profit Margins</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600">Average User Satisfaction</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Franchise?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join the growing community of successful Zaxby's franchisees using
              our platform
            </p>
            <SolutionCTA />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Let Your Competition Get Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            While you're struggling with outdated systems, your competitors are
            using our platform to optimize operations, reduce costs, and grow
            their business.
          </p>

          <FinalCTA />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">30-Day</div>
              <div className="text-gray-400">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">No Setup</div>
              <div className="text-gray-400">Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">Cancel</div>
              <div className="text-gray-400">Anytime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
