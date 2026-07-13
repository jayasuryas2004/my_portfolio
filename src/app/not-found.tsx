import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="label mb-4">404</p>
      <h1 className="heading-section mb-4">Page not found</h1>
      <p className="body-sm mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="rounded-full">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
