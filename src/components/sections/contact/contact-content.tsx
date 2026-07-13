"use client";

import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { MailIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      <header className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <AnimatedReveal>
            <p className="label mb-4">/ Contact</p>
            <h1 className="heading-display max-w-3xl">Let&apos;s work together</h1>
            <p className="body-lg mt-6 max-w-xl">
              Have a project in mind, internship opportunity, or just want to say hello?
              I&apos;d love to hear from you.
            </p>
          </AnimatedReveal>
        </div>
      </header>

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <AnimatedReveal>
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <div className="size-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                  <Send className="size-5" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="body-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project inquiry" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button type="submit" className="rounded-full w-full sm:w-auto">
                  Send Message
                  <Send className="size-4" />
                </Button>
              </form>
            )}
          </AnimatedReveal>

          {/* Contact info */}
          <AnimatedReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <SectionHeading label="/ Direct" title="Get in Touch" className="mb-6" />
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-muted hover:text-foreground transition-colors focus-ring rounded"
                  >
                    <div className="size-10 rounded-full border border-border flex items-center justify-center">
                      <MailIcon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm">{SITE.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-muted">
                    <div className="size-10 rounded-full border border-border flex items-center justify-center">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm">{SITE.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="label mb-4">/ Social</p>
                <SocialLinks />
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-medium mb-2">{SITE.availability}</p>
                <p className="body-sm">
                  Currently accepting internship applications for Summer 2026 and freelance
                  projects with flexible timelines.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </div>
  );
}
