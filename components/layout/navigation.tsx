"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  BarChart3,
  DollarSign,
  Star,
  FileText,
  Newspaper,
  MessageSquare,
  Users,
  LayoutDashboard,
} from "lucide-react";

const navigation = [
  { name: "Features", href: "/features", icon: BarChart3 },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "About", href: "/about", icon: Users },
  { name: "Testimonials", href: "/testimonials", icon: Star },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: MessageSquare },
];

const resources = [
  { name: "Documentation", href: "/docs" },
  { name: "API Reference", href: "/api-docs" },
  { name: "Help Center", href: "/help" },
  { name: "Community", href: "/community" },
  { name: "Status", href: "/status" },
];

export function Navigation() {
  const { isSignedIn, isLoaded } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Zaxby's" width={180} height={44} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {resourcesOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setResourcesOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {!isLoaded ? (
              <div className="h-8 w-24 bg-gray-200 animate-pulse rounded" />
            ) : isSignedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Start Free Trial
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-red-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-200 pt-4">
                <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resources
                </p>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    href={resource.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-3">
                <div className="flex flex-col space-y-2 w-full">
                  {isSignedIn ? (
                    <>
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start"
                        >
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Dashboard
                        </Button>
                      </Link>
                      <div className="flex items-center gap-2 px-2">
                        <UserButton afterSignOutUrl="/" />
                        <span className="text-sm text-gray-600">Account</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="justify-start w-full"
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link
                        href="/signup"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 w-full"
                        >
                          Start Free Trial
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
