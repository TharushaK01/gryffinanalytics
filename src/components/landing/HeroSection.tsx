import Link from "next/link";
import Image from "next/image";

interface CardData {
  id: string;
  title: string;
  description: string;
  type: "light" | "featured";
  bgImage?: string;
  previewImage?: string;
}

const cards: CardData[] = [
  {
    id: "scattered",
    title: "Data scattered everywhere",
    description:
      "Your data don't connect. You're forced to jump between platforms to understand what's happening.",
    type: "light",
  },
  {
    id: "clarity",
    title: "Reports don't give real clarity",
    description:
      "You see numbers, but not clear answers. Teams still struggle to know what's working and what isn't.",
    type: "featured",
    bgImage: "/middle-card-bg.svg", // Replace with your middle rectangle background image
    previewImage: "/middle-card-preview.png", // Replace with middle card dashboard graphics
  },
  {
    id: "late-insights",
    title: "Insights come too late",
    description:
      "Getting answers takes too long, reports, sheets, back and forth. By the time you know, the moment to act is gone.",
    type: "light",
    previewImage: "/right-card-preview.png", // Replace with right card calendar preview image
  },
];

// Integration logos array for Card 1
const integrationLogos = [
  { name: "Google Analytics", src: "/logos/ga.svg" },
  { name: "Mixpanel", src: "/logos/mixpanel.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "WordPress", src: "/logos/wordpress.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Typeform", src: "/logos/typeform.svg" },
];

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const featureCards: FeatureCard[] = [
  {
    id: "tracking-integration",
    title: "Data Tracking & Integration",
    description:
      "Connect all your data sources into one system so nothing gets lost. From ads, websites and CRMs, we make sure everything is tracked and accurate.",
    imageSrc: "/data-tracking.svg",
    imageAlt: "Data Tracking & Integration Diagram",
  },
  {
    id: "analytics-insights",
    title: "Analytics & Insights",
    description:
      "Turn raw data into clear insights you can actually use. Understand performance, spot trends and make better business decisions.",
    imageSrc: "/analytics-insights.svg",
    imageAlt: "Analytics & Insights Dashboards",
  },
  {
    id: "dashboards-automation",
    title: "Dashboards & Automation",
    description:
      "See all your key metrics in one simple dashboard with automated reporting. Save time and remove manual work.",
    imageSrc: "/dashboards-automation.svg",
    imageAlt: "Dashboards & Automation Visuals",
  },
];

interface IntegrationLogo {
  name: string;
  src: string;
}

// Top row of logos (10 items)
const topRowLogos: IntegrationLogo[] = [
  { name: "Google Analytics", src: "/logos/google-analytics.svg" },
  { name: "Mixpanel", src: "/logos/mixpanel.svg" },
  { name: "Shopify", src: "/logos/shopify.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "Google Ads", src: "/logos/google-ads.svg" },
  { name: "Asana", src: "/logos/asana.svg" },
  { name: "Airtable", src: "/logos/airtable.svg" },
  { name: "WeChat", src: "/logos/wechat.svg" },
  { name: "BigQuery", src: "/logos/bigquery.svg" },
];

// Bottom row of logos (9 items)
const bottomRowLogos: IntegrationLogo[] = [
  { name: "Google Data Studio", src: "/logos/datastudio.svg" },
  { name: "Zapier", src: "/logos/zapier.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "WordPress", src: "/logos/wordpress.svg" },
  { name: "Gmail", src: "/logos/gmail.svg" },
  { name: "Typeform", src: "/logos/typeform.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Meta", src: "/logos/meta.svg" },
  { name: "Salesforce", src: "/logos/salesforce.svg" },
];

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  buttonText: string;
  isPopular?: boolean;
  bgImage?: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "For small teams starting with structured tracking and basic reporting.",
    price: "$400",
    period: "/month",
    buttonText: "Get Started",
    features: [
      "Single source data tracking setup",
      "Basic dashboard (KPIs overview)",
      "Standard performance reporting",
      "Email support",
      "For early stage teams",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For businesses that need connected data and deeper insights.",
    price: "$1000",
    period: "/month",
    buttonText: "Get Started",
    isPopular: true,
    bgImage: "/hero-bg.svg",
    features: [
      "Multi-source data integration (Ads, CRM, Web)",
      "Custom dashboards for marketing & sales",
      "Automated reporting workflows",
      "Funnel & performance tracking",
      "Monthly optimization & improvements",
      "Growing teams scaling marketing and operations",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    description:
      "For companies that need a full analytics system across the business.",
    price: "Custom",
    buttonText: "Get Started",
    features: [
      "Full data infrastructure setup",
      "Advanced dashboards (revenue, product, users)",
      "AI-powered insights & anomaly detection",
      "Advanced automation (reporting + workflows)",
      "Dedicated analytics support & iteration",
      "Companies that rely heavily on data for decision making",
    ],
  },
];
interface ComparisonCard {
  title: string;
  subtitle: string;
  features: string[];
  footerText: string;
}

const comparisonData: ComparisonCard[] = [
  {
    title: "In House Setup",
    subtitle:
      "You hire for multiple roles, build everything from scratch and maintain it constantly.",
    features: [
      "Multiple hires needed (data, analytics, automation)",
      "Long setup time before anything works",
      "Ongoing maintenance and fixes required",
      "Tools and integrations managed internally",
    ],
    footerText: "Slow setup, high operational cost and constant upkeep",
  },
  {
    title: "With Gryffin Analytics",
    subtitle:
      "You get a ready-to-use system already built for you, so you can start tracking, analyzing and making better decisions.",
    features: [
      "Pre-built data tracking & integrations",
      "Dashboards ready from day one",
      "Automated reporting and workflows",
      "Continuous improvements and support",
    ],
    footerText: "Faster setup, lower effort, immediate clarity",
  },
];

export default function HomeLandingPage() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen w-full bg-red-900 text-white flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <Image
            src="/hero-bg.svg"
            alt="Hero Background"
            fill
            priority
            className="object-fill opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-red-950/40" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full mx-auto text-center flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-3xl">
            Bring All Your Data Together for Better Decisions
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm sm:text-base text-white/90 font-light mb-8 leading-relaxed px-2">
            Bring all your business data from tools like ads, websites and CRMs
            into one place so you can track performance and make better
            decisions faster.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-3">
            <Link
              href="#book-call"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-xs sm:text-sm transition-all shadow-md text-center"
            >
              Book a free call
            </Link>
            <Link
              href="#pricing"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-stone-100 text-gray-900 font-medium text-xs sm:text-sm transition-all shadow-md text-center"
            >
              Check Pricing
            </Link>
          </div>

          {/* Micro Copy below buttons */}
          <p className="text-[11px] sm:text-xs text-white/70 font-light mb-10 sm:mb-14">
            No cost, just a conversation.
          </p>

          {/* Dashboard Image Preview Container */}
          <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-4">
            <div className="w-full relative rounded-2xl shadow-2xl overflow-hidden border border-white/20 bg-white/10">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-white/5">
                <Image
                  src="/dashboard-preview.svg"
                  alt="Dashboard Overview Preview"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DATA CHALLENGE SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
              The Data Challenge Every
              <br /> Business Faces
            </h2>
            <p className="text-base sm:text-lg text-[#434343] font-regular leading-relaxed">
              Dashboards are full of numbers, but they don't clearly explain
              what's working and what's not. <br className="hidden sm:inline" />
              Teams spend time looking at data, but still struggle to make
              confident decisions.
            </p>
          </div>

          {/* 3-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* CARD 1: Data scattered everywhere */}
            <div className="rounded-3xl bg-[#F8F8F8] border border-gray-100 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[420px]">
              <div>
                {/* Icon + Title Header Row */}
                <div className="flex items-start gap-3 sm:gap-4 mb-8">
                  {/* Left: Red Circle Icon aligned with title */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/red-icon-logo.svg"
                      alt="Logo"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col">
                    {/* Title centered to the logo height */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug flex items-center h-10 sm:h-11">
                      {cards[0].title}
                    </h3>

                    {/* Description sits right underneath */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                      {cards[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Integration Logos Grid */}
              <div className="grid grid-cols-5 gap-2.5 pt-4">
                {integrationLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2.5"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 2: Reports don't give real clarity (MIDDLE CARD) */}
            <div className="rounded-3xl bg-red-900 text-white p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[420px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero-bg.svg"
                  alt="Middle Background"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="relative z-10">
                {/* Icon + Title Header Row */}
                <div className="flex items-start gap-3 sm:gap-4 mb-8">
                  {/* Left: Red Circle Icon aligned with title */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/red-icon-logo.svg"
                      alt="Logo"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col">
                    {/* Title centered to the logo height */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug flex items-center h-10 sm:h-11">
                      {cards[1].title}
                    </h3>

                    {/* Description sits right underneath */}
                    <p className="text-xs sm:text-sm text-white leading-relaxed mt-1">
                      {cards[1].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full h-44 sm:h-48 rounded-t-xl overflow-hidden shadow-2xl mt-4">
                <Image
                  src="/middle-card-preview.svg"
                  alt="Reports Preview"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* CARD 3: Insights come too late */}
            <div className="rounded-3xl bg-[#F8F8F8] border border-gray-100 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[420px]">
              <div>
                {/* Icon + Title Header Row */}
                <div className="flex items-start gap-3 sm:gap-4 mb-8">
                  {/* Left: Red Circle Icon aligned with title */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/red-icon-logo.svg"
                      alt="Logo"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col">
                    {/* Title centered to the logo height */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug flex items-center h-10 sm:h-11">
                      {cards[2].title}
                    </h3>

                    {/* Description sits right underneath */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                      {cards[2].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-44 sm:h-48 rounded-t-xl overflow-hidden shadow-sm border border-gray-200/80 bg-white mt-4">
                <Image
                  src="/right-card-preview.svg"
                  alt="Calendar Insights Preview"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* --- SECTION HEADER --- */}
          <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-42px lg:text-5xl font-medium tracking-tight text-[#000000] mb-4 sm:mb-6">
              Everything You Need to Turn Data Into Decisions
            </h2>
            <p className="text-sm sm:text-18px lg:text-lg text-#434343 font-regular leading-relaxed px-2">
              Connect, track, and visualize your business data in one place so
              you can <br className="hidden sm:inline" />
              understand performance and make faster decisions.
            </p>
          </div>

          {/* --- 3-CARD GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="rounded-3xl bg-white border border-gray-100 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Card Image Wrapper */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden ">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>

                {/* Card Content */}
                <div className="px-1 pb-2">
                  <h3 className="text-xl sm:text-20px font-medium text-[#000000] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#000000] leading-relaxed font-regular">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* --- SECTION HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Connect All Your Data Sources
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto px-2">
              Bring together your ads, website, CRM and sales data into one
              connected system so everything is tracked accurately and nothing
              is missed.
            </p>
          </div>

          {/* --- LOGO TILES CONTAINER --- */}
          <div className="flex flex-col gap-1 sm:gap-1 items-center justify-center">
            {/* Top Row */}
            <div className="flex flex-wrap justify-center items-center max-w-9xl">
              {topRowLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl flex items-center justify-center p-3 sm:p-4 hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap justify-center items-center max-w-7xl">
              {bottomRowLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-32 h-32 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl flex items-center justify-center p-3 sm:p-4 hover:scale-105 transition-transform duration-200"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* --- SECTION HEADER --- */}
          <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-42px lg:text-5xl font-medium tracking-tight text-[#000000] mb-4 sm:mb-6">
              How We’ve Helped Businesses
            </h2>
            <p className="text-sm sm:text-18px lg:text-lg text-[#434343] font-regular leading-relaxed px-2">
              See how we turn complex business data into clear insights, better
              visibility and faster decisions.
            </p>
          </div>

          {/* --- MAIN CONTENT GRID (Text Left, Image Right) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Text Copy */}
            <div className="flex flex-col space-y-6 text-left">
              <h3 className="text-2xl sm:text-32px lg:text-4xl font-medium text-[#000000] leading-tight">
                Operational &amp; Revenue Analytics Dashboard for a Global Proxy
                Provider
              </h3>

              <p className="text-sm sm:text-18px text-[#434343] leading-relaxed font-regular">
                Custom analytics dashboard for Torch Labs to track revenue,
                product performance and customer behavior in one place enabling
                faster, data driven decisions across teams
              </p>

              <p className="text-sm sm:text-18px text-[#434343] leading-relaxed font-regular">
                By unifying payments, usage and user behavior data, the
                dashboard eliminates manual reporting and reveals how users move
                through the product highlighting funnels, drop off points and
                the products, use cases, and regions driving growth.
              </p>
            </div>

            {/* Right Column: Dashboard Card Preview Image */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/torch-labs-dashboard.svg"
                alt="Operational and Revenue Analytics Dashboard Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF] text-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* --- SECTION HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-42px lg:text-5xl font-medium tracking-tight text-[#000000] mb-4 sm:mb-6">
              Choose Your Plan
            </h2>
            <p className="text-sm sm:text-18px lg:text-lg text-[#434343] font-regular leading-relaxed px-2">
              Whether you&apos;re starting with basic tracking or need a full
              analytics system, we build solutions that scale with your
              business.
            </p>
          </div>

          {/* --- PRICING CARDS GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
            {plans.map((plan) => {
              const isHighlight = plan.isPopular;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-sm ${
                    isHighlight
                      ? "bg-red-950 text-white border-0 shadow-lg"
                      : "bg-[#F8F8F8]/80 border border-gray-100 text-gray-900"
                  }`}
                >
                  {/* Background Image for Middle Highlight Card */}
                  {isHighlight && plan.bgImage && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={plan.bgImage}
                        alt="Card background"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </div>
                  )}

                  {/* Main Card Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    {/* Plan Name */}
                    <h3
                      className={`text-xl sm:text-20px font-medium mb-2 ${isHighlight ? "text-white" : "text-[#434343]"}`}
                    >
                      {plan.name}
                    </h3>

                    {/* Plan Description */}
                    <p
                      className={`text-xs sm:text-16px leading-relaxed mb-6 font-regular ${isHighlight ? "text-white/90" : "text-[#808080]"}`}
                    >
                      {plan.description}
                    </p>

                    {/* Price Header */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span
                        className={`text-3xl sm:text-42px lg:text-5xl font-medium tracking-tight ${isHighlight ? "text-white" : "text-[#434343]"}`}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span
                          className={`text-sm sm:text-base font-regular ${isHighlight ? "text-white/80" : "text-[#434343]"}`}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      className={`w-full py-3.5 px-6 rounded-full font-medium text-18px transition-opacity duration-200 shadow-sm mb-8 ${
                        isHighlight
                          ? "bg-white text-gray-900 hover:bg-white/95"
                          : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {plan.buttonText}
                    </button>

                    <hr
                      className={`border-t mb-8 ${isHighlight ? "border-white/20" : "border-gray-200/80"}`}
                    />

                    {/* Feature List */}
                    <ul className="space-y-3 mt-auto">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-14px font-regular leading-relaxed"
                        >
                          <span
                            className={`select-none ${isHighlight ? "text-white/80" : "text-gray-400"}`}
                          >
                            •
                          </span>
                          <span
                            className={
                              isHighlight ? "text-white/90" : "text-gray-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
        {/* --- BACKGROUND IMAGE WITH OVERLAY --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/red-cloud-bg.svg"
            alt="Section Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark tint to improve text legibility */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* --- SECTION HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-42px lg:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-5">
              Why Not Build This In House?
            </h2>
            <p className="text-sm sm:text-18px lg:text-lg text-white/90 font-regular leading-relaxed px-2">
              Most teams underestimate what it takes to build and maintain a
              working data system.
            </p>
          </div>

          {/* --- COMPARISON CARDS (Glassmorphism Effect) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {comparisonData.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <h3 className="text-xl sm:text-20px font-medium text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-16px text-white/80 font-regular leading-relaxed mb-6">
                    {card.subtitle}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-16px text-white/90 font-regular leading-relaxed"
                      >
                        <span className="select-none text-white/70">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tag / Footer Text */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs sm:text-16px text-white/80 font-regular">
                    {card.footerText}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* --- BOTTOM CALL TO ACTION --- */}
          <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
            <p className="text-sm sm:text-18px lg:text-lg text-white/90 font-regular leading-relaxed mb-2">
              Companies choose us because they want results from their data, not
              another system to manage.
            </p>
            <p className="text-sm sm:text-18px font-regular text-white/80 mb-6 sm:mb-8">
              Skip the setup. Get a working system instead
            </p>

            <a
              href="#book-call"
              className="inline-flex items-center justify-center bg-white text-[#000000] font-medium text-sm sm:text-16px px-6 sm:px-8 py-3.5 rounded-lg shadow-md hover:bg-white/95 transition-all duration-200"
            >
              Book a free call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
