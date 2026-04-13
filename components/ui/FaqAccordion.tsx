"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const FaqAccordion = AccordionPrimitive.Root;

const FaqAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`border-b border-white/[0.07] last:border-b-0 ${className ?? ""}`}
    {...props}
  />
));
FaqAccordionItem.displayName = "FaqAccordionItem";

const FaqAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { question: string }
>(({ question, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className="group flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline-none"
      {...props}
    >
      <span
        className="text-white font-semibold text-base leading-snug"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {question}
      </span>
      <div className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/25 transition-transform duration-300 group-data-[state=open]:rotate-180">
        <ChevronDown className="h-4 w-4 text-[#60A5FA]" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
FaqAccordionTrigger.displayName = "FaqAccordionTrigger";

const FaqAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className="px-7 pb-6 pt-1 bg-white/[0.015]">
      <p className="text-white/60 text-sm leading-relaxed">{children}</p>
    </div>
  </AccordionPrimitive.Content>
));
FaqAccordionContent.displayName = "FaqAccordionContent";

export { FaqAccordion, FaqAccordionItem, FaqAccordionTrigger, FaqAccordionContent };
