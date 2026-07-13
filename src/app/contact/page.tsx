import type { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for internships, freelance projects, or design collaborations.",
};

export default function ContactPage() {
  return <ContactContent />;
}
