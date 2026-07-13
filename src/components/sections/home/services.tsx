"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { BackgroundText } from "@/components/shared/background-text";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/data/services";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Services() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundText text="SERVICE" />

      <div className="container-wide relative">
        <AnimatedReveal>
          <SectionHeading label="/ Services" title="How I Can Help" />
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            defaultValue="ui-ux"
            className="w-full"
          >
            {services.map((service, index) => (
              <AccordionItem 
                key={service.id} 
                value={service.id}
                className="group border-b border-border py-4 transition-all duration-500 data-[state=open]:bg-foreground data-[state=open]:text-background data-[state=open]:rounded-2xl data-[state=open]:px-6 data-[state=open]:md:px-10 data-[state=open]:border-transparent"
              >
                <div className="flex items-center gap-4 text-sm font-medium opacity-50 group-data-[state=open]:text-background/50 mb-2">
                  0{index + 1}
                </div>
                <AccordionTrigger className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight hover:no-underline py-2 group-data-[state=open]:py-4 transition-all outline-none">
                  <span className="uppercase">{service.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 group-data-[state=open]:pb-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                      <div className="max-w-md">
                        <p className="text-background/80 leading-relaxed mb-6 font-medium">
                          {service.description}
                        </p>
                        <ul className="space-y-3">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-sm text-background/80"
                            >
                              <span className="size-1.5 rounded-full bg-background" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-background/5 rotate-2 scale-105 shadow-2xl transition-transform duration-700 ease-out">
                        <Image
                          src={service.image}
                          alt={`${service.title} illustration`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedReveal>
      </div>
    </section>
  );
}
