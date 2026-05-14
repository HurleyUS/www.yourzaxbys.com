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
import {
  Target,
  Award,
  TrendingUp,
  Shield,
  Heart,
  CheckCircle,
  BarChart3,
  DollarSign,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Zaxby's Franchise Management Platform",
  description:
    "Learn about our mission to empower Zaxby's franchisees with comprehensive management tools and our commitment to operational excellence.",
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're committed to helping every Zaxby's franchisee achieve operational excellence and maximize their success.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description:
      "Every feature we build is designed with franchisees' real-world challenges and needs in mind.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We maintain the highest standards of data security and compliance to protect your business.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "We constantly evolve our platform based on industry trends and customer feedback.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    title: "CEO & Co-Founder",
    image: "/team/sarah.jpg",
    bio: "Former Zaxby's franchisee with 15+ years of restaurant operations experience.",
  },
  {
    name: "Michael Chen",
    title: "CTO & Co-Founder",
    image: "/team/michael.jpg",
    bio: "Tech veteran with expertise in restaurant management systems and data analytics.",
  },
  {
    name: "Lisa Rodriguez",
    title: "Head of Product",
    image: "/team/lisa.jpg",
    bio: "Product leader with deep understanding of franchise operations and user experience.",
  },
  {
    name: "David Thompson",
    title: "Head of Customer Success",
    image: "/team/david.jpg",
    bio: "Customer success expert dedicated to helping franchisees maximize platform value.",
  },
];

const stats = [
  { label: "Active Locations", value: "500+", icon: BarChart3 },
  { label: "Cost Reduction", value: "25%", icon: DollarSign },
  { label: "Time Saved", value: "15hrs/week", icon: Clock },
  { label: "Customer Satisfaction", value: "4.9★", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              About Our Company
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Zaxby's
              <span className="block text-red-600">Franchise Success</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to revolutionize how Zaxby&apos;s
              franchisees manage their operations, optimize performance, and
              grow their business through cutting-edge technology and deep
              industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2024 by former Zaxby&apos;s franchisees and
                  technology experts, we understand the unique challenges of
                  running a successful restaurant franchise. After years of
                  struggling with disconnected systems and manual processes, we
                  set out to create a comprehensive solution.
                </p>
                <p>
                  Our platform was born from real-world experience managing
                  multiple locations, dealing with complex HR challenges, and
                  optimizing operations for maximum profitability. We&apos;ve
                  lived the problems we&apos;re solving.
                </p>
                <p>
                  Today, we&apos;re proud to serve hundreds of Zaxby&apos;s
                  locations nationwide, helping franchisees reduce costs,
                  improve efficiency, and focus on what matters most: delivering
                  exceptional experiences to their customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about/team-meeting.jpg"
                alt="Our team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve
              our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry experts and technology leaders united by a passion for
              franchise success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-red-600 font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto mb-8 opacity-90">
            To empower every Zaxby&apos;s franchisee with the tools, insights,
            and support they need to build thriving businesses that consistently
            deliver exceptional customer experiences while maximizing
            profitability and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>500+ Successful Locations</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>25% Average Cost Reduction</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>4.9★ Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how our platform can transform your franchise operations
            and help you achieve the success you&apos;ve always envisioned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
              Start Free Trial
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
