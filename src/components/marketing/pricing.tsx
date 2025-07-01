"use client";

import { pricingContent, siteConfig } from "@/config/content";
import { cn } from "@/functions";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { SectionBadge } from "../ui/section-bade";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative"
    >
      <Container className="overflow-x-hidden">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <SectionBadge title={pricingContent.badge} />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            {pricingContent.headline}
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            {pricingContent.subheadline}
          </p>
        </div>
      </Container>

      <div className="mt-8 w-full relative flex flex-col items-center justify-center">
        <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10" />
        <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10" />

        <Container>
          <div className="w-full flex flex-col items-center justify-center mb-8 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
              {pricingContent.plans.map((plan, index) => (
                <Plan key={plan.id} index={index} {...plan} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const Plan = ({
  id,
  title,
  desc,
  monthlyPrice,
  badge,
  buttonText,
  features,
  orderUrl,
  index,
}: {
  id: string;
  title: string;
  desc: string;
  monthlyPrice: number;
  badge?: string;
  buttonText: string;
  features: string[];
  orderUrl: string;
  index: number;
}) => {
  const displayedPrice = monthlyPrice;

  return (
    <div className="w-full relative flex flex-col saturate-150 rounded-2xl h-full">
      <div
        className={cn(
          "flex flex-col size-full border rounded-2xl relative p-4 md:p-6 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
          id === "pro"
            ? "border-primary/80 shadow-lg shadow-primary/20"
            : "border-border/60",
          "transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50"
        )}
      >
        {badge && (
          <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-2 py-0.5 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3.5 left-1/2 -translate-x-1/2 select-none">
            <span className="flex-1 text-xs sm:text-sm px-2 font-medium text-white">
              {badge}
            </span>
          </div>
        )}
        <div className="flex flex-col p-3 w-full">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">
            {title}
          </h2>
          <p className="text-xs sm:text-sm mt-2 text-muted-foreground break-words min-h-[3em]">
            {desc}
          </p>
        </div>
        <hr
          className="shrink-0 border-none w-full h-px bg-border my-3"
          role="separator"
        />
        <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-3 sm:gap-4">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-end gap-1">
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                {siteConfig.currency}
                {displayedPrice === 0 ? "0" : <NumberTicker value={displayedPrice * 1000} />}
              </span>
            </div>
          </div>
          <ul className="flex flex-col gap-2 sm:gap-2.5">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <CheckIcon
                  aria-hidden="true"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5"
                />
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 mt-auto h-auto flex w-full items-center">
          <Button
            asChild
            variant={id === "pro" ? "default" : "outline"}
            className="w-full text-sm sm:text-base"
            size="lg"
          >
            <Link href={orderUrl} target="_blank">
              {buttonText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
