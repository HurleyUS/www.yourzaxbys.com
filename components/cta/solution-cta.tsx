import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SolutionCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        variant="secondary"
        className="text-lg px-8 py-6"
        asChild
      >
        <Link href="/signup">
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-100"
        asChild
      >
        <Link href="/signup?demo=true">Schedule Demo</Link>
      </Button>
    </div>
  );
}
