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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Zaxby's Franchise Management Platform",
  description:
    "Get in touch with our team. We&apos;re here to help you succeed with your Zaxby&apos;s franchise operations.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our support team",
    contact: "(555) 123-ZAXBYS",
    hours: "Mon-Fri 8AM-8PM EST",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email within 2 hours",
    contact: "support@yourzaxbys.com",
    hours: "24/7 Response",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available Now",
    hours: "Mon-Fri 9AM-6PM EST",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Schedule Demo",
    description: "Book a personalized demo",
    contact: "30-60 minutes",
    hours: "Flexible scheduling",
    action: "Book Demo",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "Customer Success Manager",
    email: "sarah@yourzaxbys.com",
    phone: "(555) 123-4567",
    image: "/team/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    title: "Technical Support Lead",
    email: "michael@yourzaxbys.com",
    phone: "(555) 123-4568",
    image: "/team/michael-chen.jpg",
  },
  {
    name: "Lisa Rodriguez",
    title: "Implementation Specialist",
    email: "lisa@yourzaxbys.com",
    phone: "(555) 123-4569",
    image: "/team/lisa-rodriguez.jpg",
  },
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer:
      "Most customers are up and running within 24-48 hours. Our implementation team will guide you through the setup process and provide training for your team.",
  },
  {
    question: "Do you offer training for my staff?",
    answer:
      "Yes! We provide comprehensive training including live sessions, video tutorials, and ongoing support to ensure your team gets the most out of the platform.",
  },
  {
    question: "What if I need custom features?",
    answer:
      "Our Enterprise plan includes custom development. We work closely with you to understand your specific needs and build solutions that fit your operations.",
  },
  {
    question: "How do I migrate my existing data?",
    answer:
      "Our team will help you migrate data from your current systems. We support most common formats and can work with your existing POS, HR, and accounting systems.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're Here to
              <span className="block text-red-600">Help You Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our platform? Need help getting started? Our
              team of experts is ready to help you transform your franchise
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose How You'd Like to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get the help you need, when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="font-semibold text-gray-900">
                      {method.contact}
                    </p>
                    <p className="text-sm text-gray-600">{method.hours}</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 2
                hours during business hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="company">Company/Location Name</Label>
                  <Input id="company" name="company" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Headquarters
                    </h3>
                    <p className="text-gray-600">
                      1040 Zaxby&apos;s Blvd
                      <br />
                      Athens, GA 30601
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-ZAXBYS</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">support@yourzaxbys.com</p>
                    <p className="text-sm text-gray-500">24/7 Response</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 8:00 PM EST
                      <br />
                      Saturday: 9:00 AM - 5:00 PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Meet Your Support Team
                </h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600">{member.title}</p>
                        <p className="text-sm text-red-600">{member.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              Quick answers to common questions about our platform and support.
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

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Join hundreds of successful Zaxby&apos;s franchisees who are already
            using our platform to optimize their operations and grow their
            business.
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
