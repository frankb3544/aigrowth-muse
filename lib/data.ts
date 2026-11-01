/**
 * Homepage content data: diagnostic stages, process steps, tools,
 * properties, programs, membership comparison rows, and FAQs.
 * Copy is frozen from the approved combined B+C mockup.
 */

/* ---------------------------------- Diagnostic --------------------------------- */

export type DiagnosticStage = {
  id: string;
  label: string;
  race: string;
  symptom: string;
  systemName: string;
  systemDetail: string;
};

export const diagnosticStages: DiagnosticStage[] = [
  {
    id: "seen",
    label: "Getting seen",
    race: "Reach",
    symptom:
      "People nearby don't know you exist — or they met you once and forgot. Your good work never leaves the job site.",
    systemName: "A content system that runs itself",
    systemDetail:
      "Built in Vibizm: one idea in, a week of posts, clips, and pictures out — in your words, on your pages, without you sitting down to write every night.",
  },
  {
    id: "enquiries",
    label: "Getting enquiries",
    race: "Acquire",
    symptom:
      "People find you, but there's no easy next step. The phone rings while you're on a ladder, and by the time you call back, they've moved on.",
    systemName: "An AI front desk",
    systemDetail:
      "Missed calls get an instant text back, questions get answered on the spot, and booking a time with you takes one tap — even at 9pm.",
  },
  {
    id: "customers",
    label: "Turning enquiries into customers",
    race: "Convert",
    symptom:
      "Enquiries come in, then go quiet. Quotes sit in inboxes. Follow-up depends on you remembering, after a full day of real work.",
    systemName: "Follow-up that never forgets",
    systemDetail:
      "Automatic check-ins, quote reminders, and one simple list where every open enquiry lives — so nothing slips because you were busy doing the work.",
  },
  {
    id: "repeat",
    label: "Keeping customers coming back",
    race: "Expand",
    symptom:
      "Happy customers never hear from you again. No review asked, no check-in, no referral — just silence until they need someone and pick whoever shows up first.",
    systemName: "A stay-in-touch system",
    systemDetail:
      "Review requests after every finished job, friendly check-ins a few times a year, and referral asks that send themselves.",
  },
];

/* ----------------------------------- Process ----------------------------------- */

export type ProcessStep = {
  title: string;
  detail: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Find the bottleneck",
    detail:
      "We walk your whole business and name the one thing costing you the most time or money.",
  },
  {
    title: "Goal-factor",
    detail:
      "We break the big goal down until the first step is small enough to just do it.",
  },
  {
    title: "Build",
    detail: "We build that one system, in your tools, with you watching.",
  },
  {
    title: "Deploy as a routine",
    detail:
      "It becomes a routine that runs on a schedule — not a one-off trick you have to remember.",
  },
  {
    title: "Test it",
    detail:
      "We run it 10 times, score it out of 10, and fix the weak spots before it counts.",
  },
  {
    title: "Weekly check-in",
    detail:
      "We look at the numbers together, then pick the next bottleneck. And repeat.",
  },
];

/* ------------------------------------ Tools ------------------------------------ */

export type Tool = {
  name: string;
  href: string;
  linkLabel: string;
  description: string;
  stat?: string;
};

export const featuredTools: Tool[] = [
  {
    name: "ClosePay",
    href: "https://closepay.app",
    linkLabel: "Visit ClosePay",
    description:
      "Know what you actually made on every deal. ClosePay tracks your commission income down to the penny — broker splits, progress toward your annual cap, referral fees, and your exact net on each closing.",
    stat: "Realtor usage up 30% and growing",
  },
  {
    name: "Vibizm",
    href: "https://vibizm.com/",
    linkLabel: "Visit Vibizm",
    description:
      "Start with an idea. Leave with something you can actually use. Vibizm turns a rough idea into a buildable plan for an app, a video, a picture, or a song — no code, no blank page.",
    stat: "Where our content systems get built",
  },
];

export const tools: Tool[] = [
  {
    name: "Inspect Sumo",
    href: "https://inspectsumo.com",
    linkLabel: "Visit Inspect Sumo",
    description:
      "Turn a 50-page inspection report into a clear, client-ready summary in under 2 minutes — defects sorted Critical, Major, and Moderate, with repair cost estimates. First report free.",
  },
  {
    name: "Nurse K",
    href: "https://nurse-k-demo.vercel.app/",
    linkLabel: "Visit Nurse K",
    description:
      "A calm daily companion for nursing students: today's classes, this week's deadlines, and small, steady review that builds clinical confidence.",
  },
  {
    name: "Cobles Landing Reservations",
    href: "https://cobles-landing-reservations.vercel.app/",
    linkLabel: "Visit Cobles Landing Reservations",
    description:
      "The reservation and operations platform behind Coble's Landing, a 25-acre family retreat in Polkton, North Carolina. Guest stays, camping sites, experiences, and events — plus bookings, deposits, and automated messaging for guests.",
  },
  {
    name: "Salintus",
    href: "https://salintus.com/",
    linkLabel: "Visit Salintus",
    description:
      "Mental fitness without therapy. Talk it out by voice, and Salintus helps you sort your thoughts and leave with one clear next step. Non-clinical, private, and built for busy minds.",
  },
];

/* ------------------------------ Built & owned ---------------------------------- */

export type Property = {
  name: string;
  href: string;
  description: string;
  stat?: string;
};

export const properties: Property[] = [
  {
    name: "NewConstructionInsider.net",
    href: "https://newconstructioninsider.net",
    description:
      "Find new construction deals and incentives across the Charlotte area. 135 communities tracked, with builder incentives checked weekly — so buyers see the deals builders don't advertise.",
    stat: "Usage up 25%",
  },
  {
    name: "CoblesLanding.com",
    href: "https://cobleslanding.com/",
    description:
      "A 25-acre family campground and retreat in Polkton, NC — family owned and operated since 2020, and kids 12 & under stay free. We rebuilt the whole thing: the new site, reservations and booking with e-commerce on the back end, Google Search Console wired up, and the marketing and growth plan behind it.",
  },
];

/* ------------------------------ Charlotte programs ------------------------------ */

export type Program = {
  name: string;
  description: string;
  tag?: string;
};

export const programs: Program[] = [
  {
    name: "The Builder's Cohort",
    description:
      "A small group of local owners and builders who each take one idea to a working tool — together, step by step, no one left behind.",
  },
  {
    name: "The Automation Lab",
    description:
      "Once a month at Collaboration Central, we build one full automation live for a local business or nonprofit — and everybody in the room learns how it works.",
  },
  {
    name: "Build School",
    description:
      "Hands-on AI building for students and schools: real projects, in a real classroom, at a pace that keeps it fun.",
  },
  {
    name: "AI Breakfast",
    description:
      "A morning table for local owners to swap what's actually working with AI over coffee. Being planned now.",
    tag: "Planned",
  },
];

/* ------------------------------- Community tiers ------------------------------- */

export type ComparisonRow = {
  label: string;
  free: boolean;
  basic: boolean;
};

export const comparisonRows: ComparisonRow[] = [
  { label: "Daily AI tip, in plain words", free: true, basic: true },
  { label: "Weekly tool video — one tool, shown working", free: true, basic: true },
  { label: "Monthly open Q&A — ask anything", free: true, basic: true },
  { label: "Starter prompt packs for your path", free: true, basic: true },
  { label: "Full prompt library — every pack, every track", free: false, basic: true },
  { label: "A prompt pack personalised to your path", free: false, basic: true },
  { label: "Mobile App Builder course — build and launch an app", free: false, basic: true },
  { label: "Full course library, new courses included", free: false, basic: true },
  { label: "Book Briefs — 2 new AI book summaries a month", free: false, basic: true },
  { label: "Member pricing on audits and tools", free: false, basic: true },
];

/* ------------------------------------- FAQ ------------------------------------- */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What does the $199 Pro AI Audit include?",
    answer:
      "A full walk through how your business actually runs. We map how customers find you, reach you, buy from you, and come back — then name the ONE bottleneck costing you the most, and hand you a written plan with the top three automations to build, in order. You keep the plan either way.",
  },
  {
    question: "How does book first, pay after work?",
    answer:
      "Simple: you book first. Pick a time that suits you and your audit goes on the calendar. After your audit is scheduled, you'll get the payment link to pay the $199 and lock it in. No paying for a call you haven't booked yet.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "You get the written plan. From there it's your call: build it yourself with the plan in hand, learn alongside the community, or book a Build Sprint and we'll build the first system with you, in your own tools.",
  },
  {
    question: "Is the community really free?",
    answer:
      "Yes. The free group on Skool costs nothing and asks for no card: a daily AI tip, a weekly tool video, starter prompt packs, and a monthly open Q&A. Join, look around, and stay as long as it's useful.",
  },
  {
    question: "What does Basic add for $10 a month?",
    answer:
      "Everything in Free, plus the full prompt library, a prompt pack personalised to your path, the Mobile App Builder course, the full course library (new courses included), Book Briefs twice a month, and member pricing on audits and tools.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. No coding, no jargon, no setup headaches. If you can describe the problem in plain words, you're ready — we build in everyday tools and explain every step as we go.",
  },
];
