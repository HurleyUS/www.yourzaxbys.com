import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Quote,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials - Zaxby's Franchise Management Platform",
  description:
    "Hear from successful Zaxby's franchisees who have transformed their operations with our platform.",
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Multi-Unit Franchisee",
    location: "Atlanta, GA",
    image: "/testimonials/sarah-mitchell.jpg",
    rating: 5,
    quote:
      "This platform has completely transformed how we manage our 5 locations. We've reduced administrative time by 60% and increased our profit margins by 18%. The real-time analytics help us make data-driven decisions every day.",
    results: {
      locations: 5,
      timeSaved: "15hrs/week",
      profitIncrease: "18%",
      costReduction: "25%",
    },
  },
  {
    name: "Michael Rodriguez",
    title: "Franchise Owner",
    location: "Dallas, TX",
    image: "/testimonials/michael-rodriguez.jpg",
    rating: 5,
    quote:
      "The HR management system alone has saved us thousands of dollars. The automated onboarding process and training management have made our team more efficient and our employees happier.",
    results: {
      locations: 3,
      timeSaved: "12hrs/week",
      profitIncrease: "22%",
      costReduction: "30%",
    },
  },
  {
    name: "Jennifer Chen",
    title: "Area Manager",
    location: "Phoenix, AZ",
    image: "/testimonials/jennifer-chen.jpg",
    rating: 5,
    quote:
      "As someone managing 8 locations, I need visibility into everything. This platform gives me real-time insights across all locations, helping me identify issues before they become problems.",
    results: {
      locations: 8,
      timeSaved: "20hrs/week",
      profitIncrease: "15%",
      costReduction: "28%",
    },
  },
  {
    name: "David Thompson",
    title: "Franchisee",
    location: "Nashville, TN",
    image: "/testimonials/david-thompson.jpg",
    rating: 5,
    quote:
      "The maintenance system has been a game-changer. We can track equipment issues, schedule preventive maintenance, and reduce downtime significantly. Our equipment costs have dropped by 35%.",
    results: {
      locations: 2,
      timeSaved: "8hrs/week",
      profitIncrease: "25%",
      costReduction: "35%",
    },
  },
  {
    name: "Lisa Johnson",
    title: "Operations Director",
    location: "Miami, FL",
    image: "/testimonials/lisa-johnson.jpg",
    rating: 5,
    quote:
      "The compliance tracking features have given us peace of mind. We never miss an audit deadline, and our Steritech scores have improved consistently. It's like having a compliance manager built into the system.",
    results: {
      locations: 6,
      timeSaved: "18hrs/week",
      profitIncrease: "20%",
      costReduction: "22%",
    },
  },
  {
    name: "Robert Williams",
    title: "Franchise Owner",
    location: "Denver, CO",
    image: "/testimonials/robert-williams.jpg",
    rating: 5,
    quote:
      "The uniform management system has streamlined our operations completely. We can track inventory, manage employee assignments, and reduce waste. It's the little things that add up to big savings.",
    results: {
      locations: 4,
      timeSaved: "10hrs/week",
      profitIncrease: "16%",
      costReduction: "20%",
    },
  },
];

const stats = [
  { label: "Average Rating", value: "4.9★", icon: Star },
  { label: "Time Saved", value: "15hrs/week", icon: Clock },
  { label: "Cost Reduction", value: "25%", icon: DollarSign },
  { label: "Happy Customers", value: "500+", icon: Users },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Customer Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our Customers
              <span className="block text-red-600">Are Saying</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from successful Zaxby's
              franchisees who have transformed their operations and achieved
              remarkable results with our platform.
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                      <p className="text-sm text-red-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="h-8 w-8 text-red-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">
                        {testimonial.results.locations}
                      </div>
                      <div className="text-xs text-gray-600">Locations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {testimonial.results.timeSaved}
                      </div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {testimonial.results.profitIncrease}
                      </div>
                      <div className="text-xs text-gray-600">
                        Profit Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {testimonial.results.costReduction}
                      </div>
                      <div className="text-xs text-gray-600">
                        Cost Reduction
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Watch Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our customers have transformed their operations in their
              own words.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Sarah Mitchell - Multi-Unit Success Story
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    Michael Rodriguez - HR Management Success
                  </p>
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
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Start your free trial today and discover how our platform can help
            you achieve similar results for your franchise operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
