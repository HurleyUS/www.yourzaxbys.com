import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Button
        size="lg"
        className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white"
        asChild
      >
        <Link href="/signup">
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
        <Link href="/signup?demo=true">Watch Demo</Link>
      </Button>
    </div>
  );
}
