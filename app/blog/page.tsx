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
import { ArrowRight, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Zaxby's Franchise Management Platform",
  description:
    "Insights, tips, and best practices for Zaxby's franchisees to optimize operations and maximize success.",
};

const featuredPost = {
  title: "5 Ways to Reduce Labor Costs Without Sacrificing Service Quality",
  excerpt:
    "Learn proven strategies that successful Zaxby's franchisees use to optimize labor scheduling and reduce costs while maintaining excellent customer service.",
  author: "Sarah Johnson",
  date: "December 15, 2024",
  readTime: "8 min read",
  image: "/blog/labor-costs.jpg",
  category: "Operations",
  tags: ["Labor Management", "Cost Reduction", "Scheduling"],
};

const blogPosts = [
  {
    title: "The Complete Guide to Zaxby's Franchise Compliance",
    excerpt:
      "Everything you need to know about maintaining compliance with Zaxby's standards, health department requirements, and audit preparation.",
    author: "Michael Chen",
    date: "December 12, 2024",
    readTime: "12 min read",
    image: "/blog/compliance-guide.jpg",
    category: "Compliance",
    tags: ["Compliance", "Audits", "Standards"],
  },
  {
    title: "How to Use Data Analytics to Boost Your Franchise Performance",
    excerpt:
      "Discover how to leverage real-time data and analytics to make informed decisions that drive growth and profitability.",
    author: "Lisa Rodriguez",
    date: "December 10, 2024",
    readTime: "10 min read",
    image: "/blog/data-analytics.jpg",
    category: "Analytics",
    tags: ["Analytics", "Data", "Performance"],
  },
  {
    title: "Building a High-Performing Team: HR Best Practices for Franchisees",
    excerpt:
      "Learn effective hiring, training, and retention strategies that top-performing Zaxby's franchisees use to build successful teams.",
    author: "David Thompson",
    date: "December 8, 2024",
    readTime: "15 min read",
    image: "/blog/hr-best-practices.jpg",
    category: "Human Resources",
    tags: ["HR", "Team Building", "Training"],
  },
  {
    title: "Waste Reduction Strategies That Actually Work",
    excerpt:
      "Proven methods to minimize food waste, reduce costs, and improve sustainability in your Zaxby's operations.",
    author: "Jennifer Chen",
    date: "December 5, 2024",
    readTime: "7 min read",
    image: "/blog/waste-reduction.jpg",
    category: "Operations",
    tags: ["Waste Management", "Sustainability", "Cost Control"],
  },
  {
    title: "Customer Experience Optimization: Lessons from Top Performers",
    excerpt:
      "How leading Zaxby's franchisees create exceptional customer experiences that drive loyalty and repeat business.",
    author: "Robert Williams",
    date: "December 3, 2024",
    readTime: "9 min read",
    image: "/blog/customer-experience.jpg",
    category: "Customer Experience",
    tags: ["Customer Service", "Experience", "Loyalty"],
  },
  {
    title: "Technology Integration: Modernizing Your Franchise Operations",
    excerpt:
      "Explore the latest technology trends and tools that can help streamline your franchise operations and improve efficiency.",
    author: "Sarah Mitchell",
    date: "November 30, 2024",
    readTime: "11 min read",
    image: "/blog/technology-integration.jpg",
    category: "Technology",
    tags: ["Technology", "Automation", "Efficiency"],
  },
];

const categories = [
  { name: "All", count: 12, active: true },
  { name: "Operations", count: 4, active: false },
  { name: "Analytics", count: 2, active: false },
  { name: "Human Resources", count: 3, active: false },
  { name: "Compliance", count: 2, active: false },
  { name: "Customer Experience", count: 1, active: false },
];

const newsletter = {
  title: "Stay Updated with Franchise Insights",
  description:
    "Get the latest tips, strategies, and industry insights delivered to your inbox every week.",
  subscribers: "2,500+",
  features: [
    "Weekly industry insights",
    "Exclusive case studies",
    "Best practice guides",
    "Platform updates",
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Franchise Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Franchise Success
              <span className="block text-red-600">Starts Here</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover proven strategies, best practices, and insider tips from
              successful Zaxby&apos;s franchisees and industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
            <div className="w-20 h-1 bg-red-600"></div>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">Featured</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <span className="text-sm text-gray-500">
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="bg-red-600 hover:bg-red-700">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <div className="w-20 h-1 bg-red-600"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm text-gray-500">
                          {post.readTime}
                        </span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                          <span className="text-sm font-medium text-gray-900">
                            {post.author}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Categories */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                          category.active
                            ? "bg-red-50 text-red-700"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                  <CardDescription>{newsletter.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {newsletter.subscribers} subscribers
                    </div>

                    <div className="space-y-2">
                      {newsletter.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Star className="h-4 w-4 mr-2 text-red-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Operations",
                      "Analytics",
                      "HR",
                      "Compliance",
                      "Customer Service",
                      "Technology",
                      "Cost Reduction",
                      "Training",
                    ].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Put these insights into action with our comprehensive franchise
            management platform. Start your free trial today and see the results
            for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
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
