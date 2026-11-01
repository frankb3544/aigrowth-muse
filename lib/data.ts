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

/* ------------------------------ Tool detail pages ------------------------------ */

export type ToolPage = {
  slug: string;
  name: string;
  href: string;
  linkLabel: string;
  tagline: string;
  description: string;
  stat?: string;
  whoFor: string;
  points: string[];
};

export const toolPages: ToolPage[] = [
  {
    slug: "closepay",
    name: "ClosePay",
    href: "https://closepay.app",
    linkLabel: "Visit ClosePay",
    tagline: "Know what you actually made on every deal.",
    description:
      "ClosePay tracks a real estate agent's commission income down to the penny, deal by deal — so the number in your head and the number on the check finally match.",
    stat: "Realtor usage up 30% and growing",
    whoFor: "Real estate agents who want their real net, not a guess.",
    points: [
      "Broker splits calculated on every closing",
      "Progress toward your annual cap, always current",
      "Referral fees, franchise royalties, E&O and per-transaction fees tracked",
      "Your exact net payout on each deal, before the check arrives",
      "A what-if simulator for offers and price changes",
      "Brokerage-plan comparison, so you can see which split actually pays you more",
    ],
  },
  {
    slug: "vibizm",
    name: "Vibizm",
    href: "https://vibizm.com/",
    linkLabel: "Visit Vibizm",
    tagline: "Start with an idea. Leave with something you can actually use.",
    description:
      "Vibizm is an idea development and execution platform. It takes a rough idea and shapes it into an execution-ready output — with the structured prompts, flows, and plans to actually build it.",
    stat: "Where our content systems get built",
    whoFor: "Anyone with an idea stuck in their head and no plan to build it.",
    points: [
      "Turns rough ideas into structured, buildable plans",
      "Outputs for apps, videos, images, and music",
      "Guided flows instead of a blank page",
      "No code required at any step",
    ],
  },
  {
    slug: "inspect-sumo",
    name: "Inspect Sumo",
    href: "https://inspectsumo.com",
    linkLabel: "Visit Inspect Sumo",
    tagline: "A 50-page inspection report, made clear in under 2 minutes.",
    description:
      "Inspect Sumo turns any home inspection PDF into a client-ready summary your buyers and sellers can actually understand — defects sorted by severity, with repair cost estimates and a repair-request letter ready to send.",
    whoFor: "Agents, buyers, sellers, and investors who read inspection reports.",
    points: [
      "Upload any inspection PDF and get a clear summary in under 2 minutes",
      "Defects prioritised: Critical, Major, and Moderate",
      "Repair cost estimates alongside each issue",
      "A repair-request letter generated from the findings",
      "First report free",
    ],
  },
  {
    slug: "nurse-k",
    name: "Nurse K",
    href: "https://nurse-k-demo.vercel.app/",
    linkLabel: "Visit Nurse K",
    tagline: "A calm daily dashboard for nursing students.",
    description:
      "Nurse K keeps a nursing student's day in one calm place: today's classes, upcoming deadlines across their NURS courses, and small, steady daily review that builds clinical confidence over time.",
    whoFor: "Nursing students juggling classes, deadlines, and clinicals.",
    points: [
      "Today's classes at a glance",
      "Upcoming NURS-course deadlines in one list",
      "Small, steady daily review sessions",
      "Built to build clinical confidence, day by day",
    ],
  },
  {
    slug: "cobles-landing-reservations",
    name: "Cobles Landing Reservations",
    href: "https://cobles-landing-reservations.vercel.app/",
    linkLabel: "Visit Cobles Landing Reservations",
    tagline: "Bookings for a 25-acre family retreat, handled end to end.",
    description:
      "The reservation and operations platform behind Coble's Landing, a 25-acre family retreat in Polkton, North Carolina. It manages guest stays, camping sites, experiences, and events — bookings, deposits, and automated guest messaging included.",
    whoFor: "The team running Coble's Landing — and guests booking a stay.",
    points: [
      "Bookings for camping sites, cabins, fishing, and gatherings",
      "Deposits handled as part of the booking flow",
      "Automated messaging keeps guests informed",
      "Stays, sites, experiences, and events tracked in one place",
    ],
  },
  {
    slug: "salintus",
    name: "Salintus",
    href: "https://salintus.com/",
    linkLabel: "Visit Salintus",
    tagline: "Mental fitness without therapy.",
    description:
      "Salintus is a voice-first, non-clinical app for clearing your head. Talk it out, and it helps structure your thoughts in real time — every session ends with a clear takeaway and one next step.",
    whoFor: "Busy minds that think better out loud.",
    points: [
      "Voice-first: talk it out instead of typing",
      "Your thoughts structured in real time as you speak",
      "Every session ends with a clear takeaway and next step",
      "Non-clinical and private — mental fitness, not treatment",
    ],
  },
];

/* --------------------------------- Learn posts --------------------------------- */

export type Post = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing: string;
};

export const posts: Post[] = [
  {
    slug: "what-is-an-ai-audit",
    title: "What is an AI audit, in plain words?",
    description:
      "An AI audit is a guided walk through how your business actually runs — customers finding you, reaching you, buying, and coming back — to find the one bottleneck worth automating first.",
    intro:
      "People hear “audit” and picture a clipboard and a lecture. Ours is closer to a walk-through with a flashlight: we look at how your business actually runs, day to day, and find the one spot where work piles up, money leaks, or customers quietly disappear.",
    sections: [
      {
        heading: "The four parts we walk through",
        paragraphs: [
          "Getting seen — do people nearby know you exist, and do they remember you after the first meeting? Then getting enquiries — when someone does find you, is the next step easy, or does the phone ring while you're busy doing the work?",
          "Turning enquiries into customers — quotes, follow-ups, and reminders, and whether they happen on their own or depend on you remembering after a long day. And keeping customers coming back — reviews, check-ins, and referrals, or silence after the job is done.",
        ],
      },
      {
        heading: "What you walk away with",
        paragraphs: [
          "One named bottleneck — the single thing costing you the most time or money — and a written plan with the top three automations to build, in order. Not a 40-page report. A short plan you could act on yourself, with the community, or with us in a Build Sprint.",
          "The point of the audit is order. Most businesses don't need ten new tools; they need the right one, first. Automate the bottleneck and the next one shows itself — that's the whole method.",
        ],
      },
    ],
    closing:
      "The Pro AI Audit is $199, and it's book first, pay after: pick a time, get it on the calendar, and only then does the payment link arrive.",
  },
  {
    slug: "missed-calls-cost-you",
    title: "The phone rang. Nobody picked up. Again.",
    description:
      "Most small businesses miss calls while doing the actual work. Here's what happens to those callers — and how an AI front desk answers in seconds, books the job, and never has a busy day.",
    intro:
      "It happens on ladders, under sinks, in showings, and mid-haircut: the phone rings, your hands are full, and by the time you call back, the customer has already booked whoever answered first. It's nobody's fault. It's a systems problem — and systems problems have systems answers.",
    sections: [
      {
        heading: "What a missed call really costs",
        paragraphs: [
          "A missed call isn't a missed conversation; it's usually a missed job. The caller had a problem, a budget, and a deadline — and a list of other businesses one search away. Calling back an hour later is better than nothing, but you're often calling back someone who has already moved on.",
          "Multiply that by every busy day in a month and it's real money walking past — quietly, because the phone never tells you what it cost.",
        ],
      },
      {
        heading: "What an AI front desk does instead",
        paragraphs: [
          "The fix isn't answering faster; it's answering instantly, every time. A missed call gets a text back within seconds — “Sorry we missed you, what do you need?” — and the conversation continues by text while you finish the job you're on.",
          "Questions get answered on the spot from your own information, and booking a time takes one tap. At 9pm, on weekends, mid-job. Nothing fancy, nothing robotic — just no caller ever hitting a wall again.",
        ],
      },
    ],
    closing:
      "This is usually the first system we build after an audit, because it pays for itself fastest. Start with the audit and we'll show you exactly where your version of it should live.",
  },
  {
    slug: "thursdays-we-build-in-public",
    title: "Thursdays, we build in public",
    description:
      "Every Thursday at Collaboration Central in Charlotte, we build something real with AI — live, in a classroom — then teach how it works. Here's what a session looks like.",
    intro:
      "Most AI teaching is someone talking at slides. Ours is the opposite: every Thursday, in a real classroom at Collaboration Central in Charlotte, we build something real with AI — live, mistakes and all — and then teach exactly how it works.",
    sections: [
      {
        heading: "Build first, teach second",
        paragraphs: [
          "A session starts with a real problem from a real local business or nonprofit. We build the solution on the spot — a working tool, an automation, a small system — using the same tools anyone in the room could open that evening.",
          "Then we slow down and teach it: what we clicked, what we typed, what we'd do differently. You leave with the pattern, not just the notes.",
        ],
      },
      {
        heading: "The Automation Lab",
        paragraphs: [
          "Once a month, the Thursday session becomes the Automation Lab: one full automation, built live for one local business or nonprofit, with everybody in the room learning how it works as it comes together.",
          "It's the fastest way we know to learn this stuff — watch a real thing get built for a real neighbour, then go build your version.",
        ],
      },
    ],
    closing:
      "The community side lives on Skool, where the daily tips and weekly tool videos land between Thursdays. Join free, look around, and come build with us.",
  },
  {
    slug: "the-follow-up-gap",
    title: "The follow-up gap: where good businesses quietly lose customers",
    description:
      "The pattern our audit is built to find: the work is good, but follow-up lives in somebody's memory — and busy weeks erase it. Here's the gap, the five moments that matter, and the small system that closes it.",
    intro:
      "Ask almost any owner where business leaks and they'll point at marketing. Walk the day-to-day, though, and the leak is usually quieter: good work surrounded by small gaps — the call nobody returned, the quote nobody nudged, the happy customer nobody asked for a review. Nobody decided to skip those things. They just lived in somebody's memory — and memory is the first thing a busy week spends.",
    sections: [
      {
        heading: "It's not a people problem",
        paragraphs: [
          "Follow-up fails in almost every small business for the same boring reason: it isn't a system, it's an intention. The owner means to call back. The tech means to send the text. Then three jobs land at once, and the intentions are what get dropped — the actual work always wins the day.",
          "Customers almost never complain about it. They don't leave a one-star review saying 'nobody followed up.' They just quietly book somebody else next time, and you never learn their name. That's what makes the gap expensive: it's invisible on every report you look at.",
        ],
      },
      {
        heading: "The five moments that matter",
        paragraphs: [
          "Whatever the trade, the same five moments decide whether follow-up happens. One: a missed call — the save text that should go out within minutes. Two: a quote sent — the gentle nudge three days later, when it's been forgotten, not rejected. Three: a job finished — the thank-you and the review ask, while the good feeling is fresh.",
          "Four: a review posted — answered or ignored, it is a public conversation about your business, and only one side is talking if you don't reply. Five: a past customer gone quiet — the friendly check-in months later that brings back work you'd never have chased. None of these need talent. All of them need a trigger.",
        ],
      },
      {
        heading: "A system, not a resolution",
        paragraphs: [
          "The fix is never 'try harder.' It's three small parts: a trigger (the missed call itself starts the clock), a template (the words are already written, in your voice, so sending takes ten seconds), and a timer (if it hasn't happened by a set time, it surfaces again instead of vanishing). Small and boring beats big and occasional, every week of the year.",
          "This is also exactly where AI earns its keep without taking the wheel: it drafts the text, the nudge, the reply — and a person still reads anything public before it ships. The system remembers; the human decides. That's the whole design.",
        ],
      },
    ],
    closing:
      "If you want a feel for it before any audit: our free starter prompt pack includes the missed-call save, the review reply, and the quiet-quote nudge — three of the five moments, ready to copy and paste. And if you'd like us to map your version of the gap, that's precisely what the audit is for.",
  },
  {
    slug: "ai-for-realtors-human-in-charge",
    title: "AI for realtors: where it genuinely helps — and where a human stays in charge",
    description:
      "Real estate runs on follow-up and paperwork, which is exactly where AI earns its place. Here's where it helps an agent's week, the one line it must never cross, and the simple rule that keeps you on the right side of it.",
    intro:
      "Agents don't need more apps. They need their evenings back. The work that eats an agent's week isn't the skilled part — the negotiation, the read of a client, the judgement call. It's the drafting, summarising, chasing, and re-typing around it. That's the work AI is genuinely good at, and it's where we point it. But real estate has one line most industries don't, and it matters more than any time saving.",
    sections: [
      {
        heading: "The busywork it eats",
        paragraphs: [
          "Start with drafts. A listing description from plain facts — beds, baths, features, the feel of the street — in two lengths, ready for your edit. A follow-up to yesterday's showing, written the same evening while the house is still in the buyers' heads. A reply to every review, kind ones and awkward ones, in your voice instead of a template's.",
          "Then the paper. Inspection reports that run to dozens of pages become a plain, prioritised summary a client can actually read — what matters, what's minor, what to ask for. Commission maths, splits, caps, and 'what do I actually net on this deal' stop being spreadsheet archaeology. None of this is the job. All of it was eating the job's hours.",
        ],
      },
      {
        heading: "The line it must not cross",
        paragraphs: [
          "Here is the part the hype skips: marketing copy in real estate sits under fair housing law. Language that steers — who a home is 'perfect for,' what kind of people a neighbourhood suits — can be a violation even when it's cheerful, even when nobody meant anything by it. And an AI will write exactly that language, fluently and confidently, if you let it draft unchecked.",
          "So the rule in everything we build for agents is structural, not a suggestion: AI drafts, a human reads, then it ships. Every listing description, every ad, every piece of client-facing marketing gets an agent's eyes before it goes anywhere public. The ten seconds that takes is the cheapest compliance you will ever buy.",
        ],
      },
      {
        heading: "A simple rule to work by",
        paragraphs: [
          "If it's private and it's paperwork, let the machine run — summaries, drafts, maths, first passes. If it's public, or it's about people, you read it first. That one rule captures nearly everything: speed where speed is safe, judgement where judgement is the job.",
          "Worked that way, AI doesn't make an agent sound like a robot. It does the opposite — it hands back the hours that let the agent sound like themselves, in more places, on the same day the work happened.",
        ],
      },
    ],
    closing:
      "Our community has a whole track for realtors, and the free starter prompt pack includes the listing-words, after-showing, and open-house prompts — each one written with the human-review step built in. Start there, or book the audit and we'll map where AI fits your week, line by line.",
  },
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

export type PromptPackItem = {
  track: "Business" | "Realtor" | "Everyday";
  title: string;
  prompt: string;
  tip: string;
};

/**
 * The free starter prompt pack — the lead magnet. Copy, swap the
 * [bracketed] bits, paste into any AI chat. Plain words, small wins.
 */
export const promptPack: PromptPackItem[] = [
  {
    track: "Business",
    title: "The missed-call save",
    prompt:
      "Write a short, friendly text message I can send to a customer whose call I missed at my [type of business]. Apologise briefly, say I will call back by [time], and give them one helpful next step. Keep it under 60 words and warm, not salesy.",
    tip: "Save it in your phone's notes. The best follow-up is the one that actually gets sent.",
  },
  {
    track: "Business",
    title: "Reply to any review",
    prompt:
      "Here is a Google review for my business: [paste review]. Write a reply in my voice — grateful for the kind words, honest about anything that went wrong, and one specific thing we will do better. Under 80 words, no corporate speak.",
    tip: "Works for five stars and three stars. Replying at all puts you ahead of most competitors.",
  },
  {
    track: "Business",
    title: "The quiet-quote nudge",
    prompt:
      "I sent a quote of [$ amount] to [customer name] for [job] three days ago and heard nothing back. Write a polite follow-up email that is easy to say yes to: one reminder of the benefit they cared about, one clear next step, zero pressure.",
    tip: "Most quotes don't die — they just get forgotten. One kind nudge revives a lot of them.",
  },
  {
    track: "Business",
    title: "One photo, one post",
    prompt:
      "I run a [type of business] in [town]. Write a social media post about this job: [describe the photo or the job in one sentence]. Sound like a proud local owner, not an ad. Add 3–5 hashtags a local customer would actually search.",
    tip: "One real job photo beats a week of stock content. Post it the day the job finishes.",
  },
  {
    track: "Realtor",
    title: "Listing words from plain facts",
    prompt:
      "Turn these facts about a home into a warm listing description: [beds, baths, size, best features, neighbourhood]. Lead with how it feels to live there, keep every claim factual, and write two versions — one short, one long. Plain words, no hype.",
    tip: "Always read it yourself before it goes anywhere public — you are the Fair Housing check, not the AI.",
  },
  {
    track: "Realtor",
    title: "The after-showing follow-up",
    prompt:
      "Write a follow-up message to buyers who just toured [address/area] with me. Thank them, name one thing they said they loved, answer this concern they raised: [concern], and suggest one clear next step. Friendly and brief.",
    tip: "Send it the same evening, while the house is still in their heads.",
  },
  {
    track: "Realtor",
    title: "Open-house invitation",
    prompt:
      "Write an invitation to an open house at [address] on [day, time]. Who it suits, the one feature worth the trip, and easy parking/arrival details: [details]. Three versions: a text, an email, and a social post.",
    tip: "The 'one feature worth the trip' line does the heavy lifting — pick the true one.",
  },
  {
    track: "Everyday",
    title: "Brain-dump to to-do list",
    prompt:
      "Here is everything on my mind right now: [paste your messy list]. Turn it into a calm to-do list: group it into today / this week / later, make each item one small clear action, and flag the one thing that matters most.",
    tip: "Do it Sunday night or first thing Monday. Two minutes, whole week sorted.",
  },
  {
    track: "Everyday",
    title: "Explain it like I'm new",
    prompt:
      "Explain this to me like I've never seen it before: [paste anything — a letter, a contract clause, a medical note, an error message]. Plain words, short sentences, then end with: 'So what should I actually do?' answered in three steps or fewer.",
    tip: "Works on almost anything official and confusing. Understanding first, decisions second.",
  },
];
