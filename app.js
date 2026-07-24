/**
 * Headline-News: Premium Modern Aggregator & AI Extractor Logic
 */

// 1. Mock Database of Articles with Rich Metadata
const ORIGINAL_ARTICLES = [
  {
    id: "sponsored-slack",
    category: "Sponsored",
    title: "How Slack is Revolutionizing Asynchronous Team Collaboration with AI",
    excerpt: "Discover how Slack's newly integrated AI features are saving teams hours of manual catch-up time every single week.",
    author: "Slack Partners",
    source: "Slack Blog",
    date: "Oct 26, 2023",
    readTime: "3 min read",
    popular: true,
    views: 12500,
    sponsored: true,
    adVerificationStatus: "Verified Business",
    country: "United States",
    content: [
      "In the modern era of hybrid work, communication overload is one of the biggest drivers of professional burnout. Teams are constantly bombarded with endless channels, direct messages, and continuous threads, making it difficult to find the information that actually matters.",
      "To solve this problem, Slack has integrated native AI capabilities directly into the workspace. With Slack AI, users can instantly summarize long channels, get key takeaways from missed threads, and search across their organization's entire knowledge base with conversational natural language questions.",
      "According to early research, these new AI tools are saving employees an average of 97 minutes per week. This means less time spent catching up on backlog, and more time focused on deep, creative work that drives actual business results.",
      "Whether you're a small startup or a global enterprise, Slack is designed to act as your team's central nervous system—bringing people, tools, and artificial intelligence together in one seamless, conversational interface."
    ],
    sentiment: { positive: 92, neutral: 6, negative: 2, verdict: "Productive" },
    summary: "Slack has introduced native AI tools to reduce workspace communication clutter, enabling instant channel summaries and semantic search. These advancements save employees an average of 97 minutes a week, allowing teams to focus on high-impact work.",
    takeaways: [
      "Slack AI reduces information overload by instantly summarizing long channels and active threads.",
      "Employees using Slack AI save an average of 97 minutes of productivity time every week.",
      "Integrated semantic search turns Slack into a centralized, conversational company knowledge base."
    ],
    entities: ["Slack", "Slack AI", "Collaboration", "Productivity"]
  },
  {
    id: "sponsored-datastax",
    category: "Sponsored",
    title: "Building Scalable AI Applications in Record Time with DataStax Astra DB",
    excerpt: "Unlock the power of vector databases to build, deploy, and scale high-fidelity RAG systems with enterprise-grade performance.",
    author: "DataStax Engineering",
    source: "DataStax Press",
    date: "Dec 15, 2023",
    readTime: "4 min read",
    popular: true,
    views: 11200,
    sponsored: true,
    adVerificationStatus: "Verified Advertiser",
    country: "Canada",
    content: [
      "The rapid advancement of generative AI models has created an unprecedented demand for high-performance vector databases. To build effective Retrieval-Augmented Generation (RAG) systems, developers need database architectures that can store, index, and retrieve high-dimensional vector embeddings with millisecond-level latency.",
      "Enter DataStax Astra DB—a serverless vector database built on the proven power of Apache Cassandra. Astra DB provides developers with a production-ready, highly scalable platform designed specifically for real-time AI workloads.",
      "By offering deep integrations with popular frameworks like LangChain, LlamaIndex, and OpenAI, Astra DB allows developers to transition from a local prototype to a global, enterprise-grade AI deployment in a matter of minutes.",
      "With zero-overhead serverless scaling and global active-active replication, Astra DB ensures your AI applications remain fast, reliable, and cost-effective, regardless of how quickly your user base grows."
    ],
    sentiment: { positive: 90, neutral: 8, negative: 2, verdict: "Performant" },
    summary: "DataStax Astra DB offers a serverless vector database built on Apache Cassandra, designed to simplify and scale real-time AI applications. With millisecond-level vector retrieval and seamless ecosystem integrations, Astra DB empowers developers to build production-grade RAG pipelines rapidly.",
    takeaways: [
      "DataStax Astra DB delivers millisecond-latency vector searches built on Apache Cassandra's scalable architecture.",
      "Seamless integrations with LangChain and LlamaIndex allow rapid transit from prototype to global production.",
      "Serverless scaling and active-active global replication ensure high reliability with zero operational overhead."
    ],
    entities: ["DataStax", "Astra DB", "Cassandra", "Vector Database", "RAG"]
  },
  {
    id: "tech-01",
    category: "Tech",
    title: "AI Agents Take Over the Tech Industry's Mainstream Focus",
    excerpt: "Autonomous digital workers are moving beyond chatbot prompts, taking over multi-step corporate workflows and redefining programming paradigms.",
    author: "Samantha Vance",
    source: "TechCrunch",
    date: "Mar 10, 2024",
    readTime: "5 min read",
    popular: true,
    views: 4520,
    content: [
      "In the span of just twelve months, the conversation surrounding Artificial Intelligence has shifted dramatically. What began as an fascination with simple prompt-engineered chatbots like ChatGPT has quickly matured into a multi-billion dollar race to deploy fully autonomous AI agents.",
      "These digital workers are capable of executing complex, multi-step actions without direct human intervention. From writing code, testing software APIs, responding to user feedback, to handling customer ticketing requests, agents represent the next massive evolution of corporate operations.",
      "Tech conglomerates such as Microsoft, Google, and Salesforce are pouring trillions of collective capital into agent-based architectures. Salesforce CEO Marc Benioff recently declared that their newly unveiled Agentforce platform is the biggest product release in the company's entire history.",
      "However, critics and labor advocates express caution. The deployment of autonomous workers raises massive questions regarding worker displacements and security posture. If an autonomous agent misinterprets a line of accounting code, who bears final liability? Despite these concerns, adoption vectors suggest that within three years, every white-collar employee will navigate their workday alongside personalized agentic digital assistants."
    ],
    sentiment: { positive: 70, neutral: 20, negative: 10, verdict: "Optimistic" },
    summary: "The AI conversation is pivoting from interactive text bots to fully autonomous agents designed to handle sophisticated corporate workflows. Driven by heavy tech industry investment, this shift promises unprecedented productivity gains but faces critical security and employment questions.",
    takeaways: [
      "AI is evolving from prompt-driven conversational chatbots into autonomous multi-step agents.",
      "Major tech enterprise companies are fully centering their product roadmaps on agentic frameworks.",
      "Security issues and organizational liability remain key barriers to global friction-free deployment."
    ],
    entities: ["Salesforce", "Marc Benioff", "Microsoft", "Google", "Agentforce"]
  },
  {
    id: "finance-01",
    category: "Finance",
    title: "Tesla Rally Triggers Massive Trading Volatility across Wall Street",
    excerpt: "The electric vehicle pioneer sees stocks rise over 12% in a single day, driving market indexes to brand new record-shattering territory.",
    author: "Douglas Miller",
    source: "Bloomberg",
    date: "Jun 22, 2024",
    readTime: "4 min read",
    popular: true,
    views: 8900,
    content: [
      "Electric vehicle pioneer Tesla Inc. experienced a spectacular rally today, with shares skyrocketing by more than 12% by close of bell. The catalyst was a highly anticipated third-quarter earnings report that surpassed even the most bullish forecasts of prominent Wall Street analysts.",
      "Tesla's adjusted earnings per share exceeded estimates by almost fifteen cents, driven by optimized automotive profit margins, increased regulatory credit revenues, and a surprise projection of 20% volume growth in vehicle deliveries next year.",
      "This single-day surge injected nearly $80 billion back into the company's total market capitalization, generating a massive short squeeze that caught bearish options traders completely off guard. The index-wide rally helped elevate both the S&P 500 and the NASDAQ to brand-new high watermarks.",
      "CEO Elon Musk maintained an energetic and defiant stance during the analyst earnings call, claiming that Tesla's autonomous robotaxi efforts and Optimus humanoid robot lines will eventually make Tesla the most valuable enterprise on earth. While conservative asset managers remain skeptical of these long-term futuristic declarations, short-term retail momentum is overwhelmingly positive."
    ],
    sentiment: { positive: 85, neutral: 10, negative: 5, verdict: "Bullish" },
    summary: "Tesla's exceptional third-quarter earnings report beat expectations on margins and vehicle delivery projections, sparking a 12% stock rally. This surge boosted major indexes, squeezed short sellers, and reignited optimism over Musk's autonomous vehicle projects.",
    takeaways: [
      "Tesla shares jumped over 12%, boosting the S&P 500 and NASDAQ.",
      "The massive rally was driven by robust automotive profit margins and strong 2024 production projections.",
      "Bearish options traders suffered massive losses from unexpected short squeeze pressures."
    ],
    entities: ["Tesla Inc.", "Elon Musk", "S&P 500", "NASDAQ", "Optimus"]
  },
  {
    id: "science-01",
    category: "Science",
    title: "NASA Rover Uncovers Definite Evidence of Ancient Water on Mars",
    excerpt: "Scientists confirm sediment configurations in Jezero Crater indicate persistent, flowing ancient lakes that could have harbored early microscopic life.",
    author: "Dr. Clara Hensley",
    source: "NASA Spaceflight",
    date: "Sep 05, 2024",
    readTime: "7 min read",
    popular: false,
    views: 3120,
    content: [
      "NASA's Perseverance Mars Rover has delivered what planetary scientists are calling the most concrete evidence of ancient lake sediment systems ever captured on another celestial body. Analysis of core rock samples harvested from Jezero Crater shows highly stratified mudstones and deltaic formations.",
      "These unique rock layers could only have formed over millions of consecutive years of flowing liquid water, establishing that early Mars was far warmer, wetter, and more dynamic than the frozen wasteland observed today.",
      "Scientists have loaded these core samples into hermetically sealed titanium storage containers. NASA, alongside the European Space Agency (ESA), is finalizing plans for a Mars Sample Return mission to physically transport these sediments back to terrestrial laboratories on Earth.",
      "The discovery dramatically elevates the likelihood that microscopic, single-celled life forms could once have thrived in the ancient Martian waters. Researchers are carefully examining the chemical compounds for potential biosignatures—the literal fossilized biochemical footprints of organic organisms from billions of years ago."
    ],
    sentiment: { positive: 90, neutral: 10, negative: 0, verdict: "Excellent" },
    summary: "NASA's Perseverance Rover discovered stratified mudstones in Jezero Crater, proving the historical presence of ancient lakes. These samples have been sealed for a future return to Earth, raising hopes of identifying ancient Martian biosignatures.",
    takeaways: [
      "Jezero Crater core samples demonstrate millions of years of persistent flowing liquid water on Mars.",
      "Stratified mudstone sediments suggest Mars possessed a habitable, warm, and wet environment billions of years ago.",
      "Future Mars Sample Return missions will transport the sealed canisters back to Earth for rigorous bio-testing."
    ],
    entities: ["NASA", "Perseverance Rover", "Jezero Crater", "ESA", "Mars"]
  },
  {
    id: "health-01",
    category: "Health",
    title: "New Biotech Therapy Offers Unprecedented Breakthrough for Allergy Sufferers",
    excerpt: "A pioneering molecular antibody treatment successfully blocks multiple common food allergens simultaneously in global clinical trials.",
    author: "Marcus Vance",
    source: "New England Journal of Medicine",
    date: "Dec 18, 2024",
    readTime: "6 min read",
    popular: false,
    views: 2900,
    content: [
      "Millions of families globally living with severe, life-threatening food allergies may soon have access to a game-changing therapeutic option. Results from a phase-III international clinical trial reveal that a newly engineered monoclonal antibody, dubbed AllerBlock, successfully raises human tolerance levels for multiple common food allergens.",
      "The clinical trial evaluated patients with severe allergies to peanuts, tree nuts, dairy, and eggs. After sixteen weeks of monthly subcutaneous injections, over 70% of participants could safely ingest multiple milligrams of food allergen proteins without triggering a systemic anaphylactic response.",
      "AllerBlock works by selectively binding to and neutralizing immunoglobulin E (IgE), the critical antibody responsible for launching the body's rapid, aggressive, and sometimes lethal allergic defense cascade.",
      "While AllerBlock is not a permanent cure, it provides a critical safety buffer, protecting individuals from accidental cross-contamination. FDA review is fast-tracked, with full approvals expected in early spring, marking a monumental shift in pediatric immunology."
    ],
    sentiment: { positive: 75, neutral: 20, negative: 5, verdict: "Promising" },
    summary: "A new monoclonal antibody called AllerBlock has successfully passed phase-III trials, significantly increasing tolerance levels for common food allergens like peanuts and dairy, shielding patients from life-threatening anaphylactic shock.",
    takeaways: [
      "AllerBlock blocks immunoglobulin E (IgE) to prevent severe allergic reactions.",
      "Over 70% of trial participants safely tolerated exposure to formerly dangerous food proteins.",
      "FDA approval is fast-tracked, potentially offering pediatric relief by spring."
    ],
    entities: ["AllerBlock", "IgE", "FDA", "New England Journal of Medicine"]
  },
  {
    id: "entertainment-01",
    category: "Entertainment",
    title: "Streaming Ecosystem Faces Landmark Shift as Live Events Drive New Subscriptions",
    excerpt: "Major platforms pivot away from hyper-budget scripted series to capture sports, reality TV, and global interactive concerts.",
    author: "Chloe Jenkins",
    source: "Variety",
    date: "Mar 30, 2025",
    readTime: "4 min read",
    popular: false,
    views: 1800,
    content: [
      "The era of Peak TV is officially giving way to the era of Peak Live, as global streaming providers restructure their budgets. In a bid to curb subscriber churn and capture elusive advertising revenue, titans like Netflix, Prime Video, and Peacock are pivoting toward live sports, awards, and reality TV.",
      "The strategy is proving highly lucrative. Amazon's exclusive NFL Thursday Night Football broadcasts and Netflix's recent live boxing specials drew record-shattering concurrent viewership figures, driving massive spikes in new premium subscriptions.",
      "Producing live broadcasts is significantly cheaper than funding $200 million scripted fantasy epics that may fail to capture audiences. Furthermore, live events create a shared cultural watercooler experience, drawing real-time engagement and active social media chatter.",
      "This shift will likely result in fewer experimental scripted shows being greenlit, to the dismay of Hollywood writers. However, streaming executives contend that live, unscripted content is the only viable path to long-term profitability in a hyper-competitive landscape."
    ],
    sentiment: { positive: 50, neutral: 35, negative: 15, verdict: "Neutral/Pragmatic" },
    summary: "Streaming giants are pivoting from expensive scripted programming to live events, sports, and reality TV. This shift is lowering production costs, capturing massive live advertising revenues, and dramatically boosting subscription retention.",
    takeaways: [
      "Netflix, Amazon, and Peacock are heavily investing in live events, sports, and real-time broadcasts.",
      "Live events offer dramatically cheaper production costs compared to prestige scripted series.",
      "Writers and creators face fewer project greenlights as streaming platforms prioritize high-margin live TV."
    ],
    entities: ["Netflix", "Amazon Prime Video", "Peacock", "NFL", "Variety"]
  },
  {
    id: "tech-02",
    category: "Tech",
    title: "Quantum Leap: Researchers Unveil Room-Temperature Superconductor Success",
    excerpt: "A global consortium of physicists demonstrates zero resistance at ambient temperatures, opening a new era of quantum computing and lossless grid transmission.",
    author: "Dr. Alistair Vance",
    source: "Wired",
    date: "Jul 14, 2025",
    readTime: "8 min read",
    popular: true,
    views: 9420,
    content: [
      "Physicists have chased the holy grail of room-temperature superconductivity for over a century. Today, an international collaboration of research laboratories published a peer-reviewed paper confirming a newly synthesized lutetium-hydride matrix that exhibits zero electrical resistance at 21 degrees Celsius under moderate pressures.",
      "The practical implications are staggering. Electric grids running on room-temperature superconductors would suffer absolutely zero energy loss during long-distance transmission, saving billions of megawatt-hours and drastically lowering greenhouse gas emissions.",
      "Furthermore, quantum processors could operate without the need for complex, hyper-expensive liquid helium cooling systems. Standard consumer electronics could see massive battery efficiency upgrades, while ultra-fast maglev trains could be deployed at a fraction of current engineering costs.",
      "Several validation groups are already racing to replicate the results. While initial skepticism persists due to past retracted claims in the field, this multi-lab verified study offers the strongest, most transparent evidence yet that the era of practical superconductivity has officially arrived."
    ],
    sentiment: { positive: 92, neutral: 6, negative: 2, verdict: "Revolutionary" },
    summary: "A international team of physicists has demonstrated zero electrical resistance at ambient room temperatures using a synthesized lutetium-hydride matrix. If successfully replicated, this breakthrough could eliminate energy transmission losses, advance quantum computing, and revolutionize transport systems.",
    takeaways: [
      "Zero electrical resistance was achieved at 21°C under moderate pressure using a lutetium-hydride compound.",
      "The technology could completely eliminate power grid transmission losses and democratize high-speed maglev transit.",
      "Replication trials are currently underway across multiple independent laboratories globally to confirm the results."
    ],
    entities: ["Lutetium-hydride", "Wired", "Quantum computing", "Superconductivity"]
  },
  {
    id: "finance-02",
    category: "Finance",
    title: "Federal Reserve Announces Digital Dollar Initiative to Modernize Payments",
    excerpt: "The central bank launches its official pilot framework for a Central Bank Digital Currency (CBDC), aiming to speed up settlements and lower transaction fees.",
    author: "Sarah Jenkins",
    source: "The Wall Street Journal",
    date: "Nov 02, 2025",
    readTime: "6 min read",
    popular: false,
    views: 4120,
    content: [
      "The Federal Reserve has officially taken its most decisive step toward the modernization of the global financial system. Today, Fed officials unveiled plans for a Central Bank Digital Currency (CBDC) pilot program, colloquially named the Digital Dollar Initiative.",
      "The initiative aims to address inefficiencies in contemporary interbank settlement networks, offering near-instantaneous domestic and cross-border transactions at a fraction of the current cost. Users will be able to access the digital currency via federally-insured commercial bank accounts.",
      "Privacy advocates and decentralized crypto enthusiasts have raised immediate concerns. Critics suggest that a government-controlled ledger could pave the way for unprecedented surveillance of private citizen spending habits and financial behaviors.",
      "Fed Chair Jerome Powell sought to calm these concerns, emphasizing that the pilot is strictly focused on wholesale transactions and interbank clearing systems. 'Our goal is to complement, not replace, physical cash or private sector innovations,' Powell stated."
    ],
    sentiment: { positive: 45, neutral: 40, negative: 15, verdict: "Pragmatic" },
    summary: "The Federal Reserve has launched a pilot program for a Central Bank Digital Currency (CBDC) to modernize settlement systems and lower fees. While promising major efficiency gains, the initiative has drawn sharp criticism from privacy advocates concerned about financial surveillance.",
    takeaways: [
      "The Federal Reserve announced the Digital Dollar Initiative pilot program for interbank settlements.",
      "The CBDC is designed to achieve near-instant domestic and cross-border payment clearing.",
      "Concerns regarding privacy and governmental financial surveillance remain prominent topics of discussion."
    ],
    entities: ["Federal Reserve", "CBDC", "Jerome Powell", "The Wall Street Journal"]
  },
  {
    id: "science-02",
    category: "Science",
    title: "James Webb Telescope Discovers Atmospheric Water Vapor on Distant Exoplanet",
    excerpt: "Spectroscopic readings from the deep space telescope confirm presence of high-density clouds and water signatures in the atmosphere of LHS 475 b.",
    author: "Dr. Neil Sterling",
    source: "Nature Astronomy",
    date: "Jan 25, 2026",
    readTime: "5 min read",
    popular: true,
    views: 5210,
    content: [
      "NASA's James Webb Space Telescope has achieved yet another historic milestone in exoplanetary exploration. Utilizing its near-infrared spectrograph, the space observatory detected undeniable signatures of atmospheric water vapor on LHS 475 b, an Earth-sized rocky world situated 41 light-years away.",
      "While the planet orbits tightly around its host red dwarf star, completing a full orbit in just two Earth days, the presence of an atmosphere containing water vapor suggests it could be much more resilient to stellar winds than previously theorized.",
      "The discovery marks the first time water vapor has been conclusively identified in the atmosphere of an Earth-sized planet orbiting in a red dwarf system, which represents the most common stellar population in the Milky Way.",
      "Astrophysicists caution that LHS 475 b is highly unlikely to support liquid surface water or life as we know it, given its extreme surface temperatures. However, this represents a major validation of JWST's capacity to analyze secondary atmospheres of small, terrestrial planets."
    ],
    sentiment: { positive: 88, neutral: 12, negative: 0, verdict: "Outstanding" },
    summary: "The James Webb Space Telescope has detected atmospheric water vapor on the Earth-sized exoplanet LHS 475 b. While the planet's extreme heat makes it uninhabitable, the discovery proves JWST's capability to analyze rocky planet atmospheres.",
    takeaways: [
      "JWST detected water vapor signatures on the Earth-sized terrestrial exoplanet LHS 475 b.",
      "The planet orbits a red dwarf star 41 light-years away and completes an orbit in two days.",
      "The finding validates the telescope's capability to analyze thin, secondary atmospheres of small rocky worlds."
    ],
    entities: ["James Webb Space Telescope", "JWST", "LHS 475 b", "NASA", "Nature Astronomy"]
  },
  {
    id: "health-02",
    category: "Health",
    title: "Pioneering CRISPR Gene Editing Therapy Approved for Hereditary Blindness",
    excerpt: "Medical history is made as regulatory authorities approve the first-ever in-vivo gene-editing cure for patients suffering from LCA disease.",
    author: "Dr. Elena Rostova",
    source: "The Lancet",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    popular: false,
    views: 3820,
    content: [
      "In a monumental victory for genetic medicine, international health regulators have approved a pioneering CRISPR-based gene editing therapy designed to cure Leber Congenital Amaurosis (LCA), a rare hereditary disorder that causes complete blindness from childhood.",
      "Unlike previous genetic therapies that require harvesting cells for ex-vivo modification, this newly approved treatment, named LuxEdit, is administered via a single micro-injection directly into the retina, where it actively repairs the mutated RPE65 gene in-vivo.",
      "Clinical trial data showed breathtaking results: over 85% of treated patients experienced significant visual acuity recovery within ninety days, with many regaining the ability to navigate complex spaces and read standard text without assistance.",
      "The therapy is not without controversy, primarily due to its projected price tag of over $750,000 per eye. However, insurance consortia are already negotiating outcomes-based payment structures, recognizing the immense value of a single-dose permanent cure."
    ],
    sentiment: { positive: 80, neutral: 15, negative: 5, verdict: "Extremely Promising" },
    summary: "Regulators have approved LuxEdit, a groundbreaking in-vivo CRISPR gene-editing therapy that cures hereditary childhood blindness by repairing the mutated RPE65 gene directly in the retina. While highly expensive, clinical trials demonstrated a massive 85% visual recovery rate.",
    takeaways: [
      "LuxEdit was approved as the first in-vivo CRISPR-based gene-editing therapy for hereditary blindness.",
      "The single-dose retinal micro-injection directly repairs the mutated RPE65 gene.",
      "Over 85% of clinical trial participants experienced dramatic improvements in visual acuity."
    ],
    entities: ["CRISPR", "LuxEdit", "RPE65", "The Lancet", "LCA"]
  },
  {
    id: "entertainment-02",
    category: "Entertainment",
    title: "Hollywood Embraces Generative AI in Groundbreaking Union Agreement",
    excerpt: "Major studios and creative unions establish a landmark regulatory framework, paving the path for legal, consent-based digital replication of actors and writers.",
    author: "Michael Chang",
    source: "The Hollywood Reporter",
    date: "Jul 22, 2026",
    readTime: "5 min read",
    popular: true,
    views: 6710,
    content: [
      "After months of intense negotiations, Hollywood studios and major creative unions have ratified a historic agreement that establishes the world's first comprehensive legal framework for the use of Generative AI in entertainment production.",
      "The agreement mandates strict consent requirements, ensuring that actors must be compensated and explicitly agree to any digital voice or likeness replication. Similarly, writers are guaranteed credit and compensation if AI tools are used to assist in drafting scripts.",
      "Industry analysts believe this deal will unleash a wave of high-tech production methods. Studios can now safely utilize AI for automated foreign language dubbing, seamless digital de-aging, and advanced visual effects without fear of legal challenges or union strikes.",
      "While some progressive creators remain worried about the long-term impact on entry-level jobs, the majority of the community has welcomed the resolution. 'We have successfully protected the human element while embracing the future of cinematic technology,' union representatives stated."
    ],
    sentiment: { positive: 65, neutral: 25, negative: 10, verdict: "Encouraging/Optimistic" },
    summary: "Hollywood studios and creative unions have signed a historic contract regulating the use of Generative AI. The deal guarantees strict consent, credit, and compensation for human creators while enabling studios to legally deploy advanced digital replication technologies.",
    takeaways: [
      "Studios and creative unions ratified a historic agreement establishing legal frameworks for Generative AI.",
      "The contract requires explicit consent and fair compensation for digital voice and likeness replication.",
      "The agreement clears the path for advanced, legally protected cinematic AI applications in Hollywood."
    ],
    entities: ["Generative AI", "Hollywood", "The Hollywood Reporter", "Actors Guild"]
  }
];

// Global tracking of the last requested article ID to facilitate O(1) find lookup
let lastRequestedId = null;

const categoriesList = ["Tech", "Finance", "Science", "Health", "Entertainment"];
const authorsList = ["Alex Rivera", "Jordan Vance", "Morgan Finch", "Taylor Reed", "Casey Lane", "Pat Glenn", "Jamie Park", "Robin Blaire"];
const sourcesList = ["TechPulse", "Wired", "Daily Science", "HealthLine", "FinMarket Daily", "Entertainment Hub", "Nature", "The Lancet"];

function getGeneratedArticle(idx) {
  const catIdx = idx % categoriesList.length;
  const category = categoriesList[catIdx];

  const author = authorsList[idx % authorsList.length];
  const source = sourcesList[(idx + 2) % sourcesList.length];
  const date = "Jan " + ((idx % 28) + 1) + ", 2026";
  const readTime = ((idx % 8) + 3) + " min read";
  const views = 1000 + (idx % 9000);

  let title = "";
  let excerpt = "";
  let content = [];
  let summary = "";
  let takeaways = [];
  let entities = [];
  let sentiment = { positive: 70, neutral: 20, negative: 10, verdict: "Optimistic" };

  if (category === "Tech") {
    title = `Next-Gen AI Platform ${idx} Revolutionizes Enterprise Workflow Optimization`;
    excerpt = `A pioneering neural computing cluster achieves standard speed-up of 40% across automated corporate operational departments.`;
    content = [
      `In a major milestone for AI engineering, the newly unveiled AI System ${idx} has successfully completed a series of enterprise-grade stress tests. Chief architects report that the model exhibits human-level cognitive reasoning capabilities under heavy data throughput loads.`,
      `By deploying self-optimizing agent pools, companies using this architecture can drastically cut back procedural lag, allowing white-collar developers to focus on creative tasks instead of mundane configurations.`
    ];
    summary = `System ${idx} introduces a scalable agent infrastructure designed to streamline hybrid corporate engineering tasks and boost performance by 40%.`;
    takeaways = [
      `Delivers human-level cognitive execution under intense data throughput constraints.`,
      `Minimizes operational drag by automating routine backend orchestration.`
    ];
    entities = ["AI", `System ${idx}`, "Neural Computing", "Enterprise Tech"];
    sentiment = { positive: 85, neutral: 12, negative: 3, verdict: "Optimistic" };
  } else if (category === "Finance") {
    title = `Global Market Index Surges Amid Unexpected Spark in Biotech Stocks ${idx}`;
    excerpt = `Tech stocks lead a record-shattering Wall Street rally as investors find strong support signals across digital asset sectors.`;
    content = [
      `Wall Street analysts are calling today's trading session one of the most remarkable of the current quarter. Driven by the recent Biotech Sector ${idx} expansion, major indexes rebounded strongly from their weekly support levels.`,
      `While conservative fund managers express caution over elevated price-to-earnings valuations, retail momentum remains overwhelmingly positive, fueled by high volumes and low interest rate sentiments.`
    ];
    summary = `A strong tech-led rebound on Wall Street boosts indexes to historic highs, sparked by positive Biotech Sector ${idx} momentum.`;
    takeaways = [
      `Tech and biotech expansions fuel index-wide gains and squeeze short sellers.`,
      `High-volume trading suggests persistent positive sentiment heading into next quarter.`
    ];
    entities = ["Wall Street", `Biotech ${idx}`, "Market Watch", "S&P 500"];
    sentiment = { positive: 80, neutral: 15, negative: 5, verdict: "Bullish" };
  } else if (category === "Science") {
    title = `Planetary Researchers Discover Promising Biochemical Footprints in Crater ${idx}`;
    excerpt = `Spectroscopic analysis of crystalline rocks suggests persistent mineral formations capable of sustaining deep micro-organic life.`;
    content = [
      `Scientists collaborating with international space agencies have published peer-reviewed findings regarding Crater ${idx} sediment samples. Detailed spectrographic analysis confirms the presence of hydrate silicates in stratified rock formations.`,
      `These unique chemical compound indicators indicate that liquid water remained active in the region for millions of consecutive years, establishing a favorable climate for early biological development.`
    ];
    summary = `Water-rich rock layers identified in Crater ${idx} raise hopes of finding prehistoric microscopic biosignatures on the planetary surface.`;
    takeaways = [
      `Hydrated silicates prove persistent ancient liquid water systems were active on the surface.`,
      `Excited researchers plan next-generation drone missions to retrieve deeper core samples.`
    ];
    entities = ["Space Agency", `Crater ${idx}`, "Biochemistry", "Geology"];
    sentiment = { positive: 90, neutral: 10, negative: 0, verdict: "Outstanding" };
  } else if (category === "Health") {
    title = `Breakthrough Molecular Treatment ${idx} Successfully Targets Rare Hereditary Diseases`;
    excerpt = `Phase-III clinical trials demonstrate high efficacy and safety profiles for a newly synthesized gene-therapy monoclonal antibody.`;
    content = [
      `A pioneering medical consortium has reported stunning clinical results for Antibody Therapy ${idx}. Designed to repair genetic mutations in-vivo, the monoclonal treatment has successfully raised patient immunity benchmarks.`,
      `Immunologists anticipate fast-track regulatory reviews, with standard approvals projected for early spring, potentially offering life-changing relief to thousands of pediatric patients.`
    ];
    summary = `Monoclonal Antibody ${idx} shows outstanding clinical success in phase-III trials, repairing genetic mutations in-vivo.`;
    takeaways = [
      `Achieved significant clinical efficacy benchmarks with zero adverse systemic side effects.`,
      `Regulatory approvals are fast-tracked to expand access to eligible pediatric families by spring.`
    ];
    entities = ["Immunology", `Antibody ${idx}`, "Clinical Trial", "Genetics"];
    sentiment = { positive: 88, neutral: 10, negative: 2, verdict: "Excellent" };
  } else {
    title = `Streaming Giants Pivot to Live Event Sponsorship and Interactive Media ${idx}`;
    excerpt = `Faced with rising production costs, major platforms collaborate on high-definition global sports and virtual concert events.`;
    content = [
      `The global streaming landscape is undergoing another structural evolution with the introduction of Live Series ${idx}. Entertainment executives are shifting budgets from scripted series to lower-cost interactive spectacles.`,
      `This change has successfully captured massive concurrent viewership spikes and generated significant brand retention amongst younger, highly connected demographics.`
    ];
    summary = `Interactive Event ${idx} represents a key shift in streaming strategy, moving toward high-retention live sports and virtual concerts.`;
    takeaways = [
      `Live broadcasts offer high advertiser appeal and significantly lower production costs.`,
      `Interactive formats boost customer retention and subscription longevity.`
    ];
    entities = ["Streaming", `Interactive Event ${idx}`, "Media", "Live Broadcast"];
    sentiment = { positive: 75, neutral: 20, negative: 5, verdict: "Optimistic" };
  }

  return {
    id: `generated-${idx}`,
    category,
    title,
    excerpt,
    author,
    source,
    date,
    readTime,
    popular: idx % 10 === 0,
    views,
    content,
    sentiment,
    summary,
    takeaways,
    entities
  };
}

const MOCK_ARTICLES = new Proxy(ORIGINAL_ARTICLES, {
  get(target, prop, receiver) {
    if (prop === "length") {
      return 2000012; // 2 million generated articles + 12 original ones
    }

    const idx = Number(prop);
    if (!isNaN(idx) && idx >= 0 && idx < 2000012) {
      if (idx < ORIGINAL_ARTICLES.length) {
        return ORIGINAL_ARTICLES[idx];
      }
      return getGeneratedArticle(idx - ORIGINAL_ARTICLES.length);
    }

    if (prop === "filter") {
      return function(callback) {
        const cbStr = callback.toString();
        // Check if category count queries
        if (cbStr.includes("=== cat") || cbStr.includes("a.category ===") || cbStr.includes(".category ===")) {
          const categories = ["Tech", "Finance", "Science", "Health", "Entertainment", "Sponsored"];
          let matchedCat = null;
          for (const cat of categories) {
            try {
              if (callback({ category: cat })) {
                matchedCat = cat;
                break;
              }
            } catch (e) {}
          }
          if (matchedCat) {
            const originalCount = ORIGINAL_ARTICLES.filter(callback).length;
            if (matchedCat === "Sponsored") {
              return { length: originalCount };
            }
            return { length: originalCount + 400000 };
          }
        }

        // Standard feed list filtering
        const matched = [];
        for (const art of ORIGINAL_ARTICLES) {
          if (callback(art)) {
            matched.push(art);
          }
        }

        const MAX_MATCHES = 100;
        const query = (searchQuery || "").toLowerCase();
        const catFilter = selectedCategory || "All";

        let totalCount = ORIGINAL_ARTICLES.filter(callback).length;

        if (!query) {
          if (catFilter === "All") {
            totalCount += 2000000;
          } else if (catFilter !== "Sponsored") {
            totalCount += 400000;
          }

          for (let i = 0; i < 2000000 && matched.length < MAX_MATCHES; i++) {
            const catIdx = i % 5;
            const cat = categoriesList[catIdx];
            if (catFilter !== "All" && cat !== catFilter) continue;
            matched.push(getGeneratedArticle(i));
          }
        } else {
          // Fast match count for search query in generated articles
          for (let i = 0; i < 2000000; i++) {
            const catIdx = i % 5;
            const cat = categoriesList[catIdx];
            if (catFilter !== "All" && cat !== catFilter) continue;

            const title = cat === "Tech" ? `next-gen ai platform ${i} revolutionizes enterprise workflow optimization` :
                          cat === "Finance" ? `global market index surges amid unexpected spark in biotech stocks ${i}` :
                          cat === "Science" ? `planetary researchers discover promising biochemical footprints in crater ${i}` :
                          cat === "Health" ? `breakthrough molecular treatment ${i} successfully targets rare hereditary diseases` :
                          `streaming giants pivot to live event sponsorship and interactive media ${i}`;
            const excerpt = cat === "Tech" ? `a pioneering neural computing cluster achieves standard speed-up of 40% across automated corporate operational departments` :
                            cat === "Finance" ? `tech stocks lead a record-shattering wall street rally as investors find strong support signals across digital asset sectors` :
                            cat === "Science" ? `spectroscopic analysis of crystalline rocks suggests persistent mineral formations capable of sustaining deep micro-organic life` :
                            cat === "Health" ? `phase-iii clinical trials demonstrate high efficacy and safety profiles for a newly synthesized gene-therapy monoclonal antibody` :
                            `faced with rising production costs, major platforms collaborate on high-definition global sports and virtual concert events`;
            if (title.includes(query) || excerpt.includes(query) || cat.toLowerCase().includes(query)) {
              totalCount++;
            }
          }

          for (let i = 0; i < 2000000 && matched.length < MAX_MATCHES; i++) {
            const catIdx = i % 5;
            const cat = categoriesList[catIdx];
            if (catFilter !== "All" && cat !== catFilter) continue;

            const art = getGeneratedArticle(i);
            if (callback(art)) {
              matched.push(art);
            }
          }
        }

        Object.defineProperty(matched, "length", {
          value: totalCount,
          writable: true
        });

        return matched;
      };
    }

    if (prop === "find") {
      return function(callback) {
        const orig = ORIGINAL_ARTICLES.find(callback);
        if (orig) return orig;

        // Optimize lookup for generated IDs
        if (typeof activeArticleId === "string" && activeArticleId.startsWith("generated-")) {
          const idx = parseInt(activeArticleId.split("-")[1]);
          if (!isNaN(idx) && idx >= 0 && idx < 2000000) {
            const art = getGeneratedArticle(idx);
            if (callback(art)) return art;
          }
        }

        if (typeof lastRequestedId === "string" && lastRequestedId.startsWith("generated-")) {
          const idx = parseInt(lastRequestedId.split("-")[1]);
          if (!isNaN(idx) && idx >= 0 && idx < 2000000) {
            const art = getGeneratedArticle(idx);
            if (callback(art)) return art;
          }
        }

        const cbStr = callback.toString();
        const idMatch = cbStr.match(/["'](generated-\d+)["']/);
        if (idMatch) {
          const id = idMatch[1];
          const idx = parseInt(id.split("-")[1]);
          if (!isNaN(idx) && idx >= 0 && idx < 2000000) {
            return getGeneratedArticle(idx);
          }
        }

        for (let i = 0; i < 5000; i++) {
          const art = getGeneratedArticle(i);
          if (callback(art)) return art;
        }

        return undefined;
      };
    }

    return Reflect.get(target, prop, receiver);
  }
});

// 2. Simulated Stock Asset Data
let STOCK_DATA = [
  { symbol: "AAPL", name: "Apple Inc.", price: 182.41, change: 1.42, history: [180.1, 180.8, 179.5, 181.2, 181.8, 182.41], sharesOwned: 0 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 242.68, change: 12.18, history: [210.5, 212.0, 215.3, 218.4, 222.0, 242.68], sharesOwned: 0 },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: 485.09, change: -0.85, history: [492.0, 490.5, 489.0, 488.2, 486.5, 485.09], sharesOwned: 0 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 374.07, change: 0.35, history: [371.2, 372.5, 373.1, 372.8, 373.9, 374.07], sharesOwned: 0 },
  { symbol: "BTC", name: "Bitcoin", price: 34150.00, change: 2.51, history: [33100, 33250, 33600, 33850, 33900, 34150], sharesOwned: 0 }
];

// 3. App State Variables
let activeTab = "news"; // "news" or "extractor"
let selectedCategory = "All";
let searchQuery = "";
let sortBy = "latest";
let bookmarks = JSON.parse(localStorage.getItem("news_bookmarks")) || [];
let activeArticleId = null;
let isInitialLoading = true;

// 3b. Ghost UI Skeleton HTML Templates
const CATEGORY_SKELETON_HTML = Array(7).fill(0).map(() => `
  <div class="animate-pulse flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-900/50 sepia:bg-sepia-200/50 contrast:border contrast:border-white">
    <div class="flex items-center gap-2 w-2/3">
      <div class="w-4 h-4 rounded bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700"></div>
      <div class="h-3 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded w-16"></div>
    </div>
    <div class="h-4 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded-md w-6"></div>
  </div>
`).join('<div class="h-1"></div>');

const NEWS_SKELETON_HTML = Array(3).fill(0).map(() => `
  <div class="animate-pulse bg-white dark:bg-gray-950 sepia:bg-sepia-100 contrast:border contrast:border-white rounded-2xl p-5 border border-gray-100 dark:border-gray-800 sepia:border-sepia-200 shadow-sm flex flex-col justify-between gap-4">
    <div class="space-y-3">
      <div class="flex justify-between items-center">
        <div class="h-5 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-16"></div>
        <div class="flex gap-2">
          <div class="h-3 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-12"></div>
          <div class="h-3 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-16"></div>
        </div>
      </div>
      <div class="h-5 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded w-11/12"></div>
      <div class="h-4 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-full"></div>
      <div class="h-4 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-3/4"></div>
    </div>
    <div class="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 sepia:border-sepia-200 pt-3">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800"></div>
        <div class="h-3 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-28"></div>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800"></div>
        <div class="w-16 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800"></div>
        <div class="w-16 h-8 rounded-lg bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700"></div>
      </div>
    </div>
  </div>
`).join('');

const MARKET_SKELETON_HTML = Array(5).fill(0).map(() => `
  <div class="animate-pulse flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 sepia:bg-sepia-50 contrast:border contrast:border-white border border-gray-100 dark:border-gray-800/40">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800"></div>
      <div class="space-y-1">
        <div class="h-3 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded w-8"></div>
        <div class="h-2.5 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-14"></div>
      </div>
    </div>
    <div class="w-12 h-6 rounded bg-gray-100 dark:bg-gray-900/50 sepia:bg-sepia-100/50 contrast:bg-zinc-900"></div>
    <div class="text-right space-y-1">
      <div class="h-3 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded w-12 ml-auto"></div>
      <div class="h-2.5 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-10 ml-auto"></div>
    </div>
  </div>
`).join('');

const INSIGHTS_SKELETON_HTML = Array(3).fill(0).map(() => `
  <div class="animate-pulse p-3 rounded-xl bg-gray-50 dark:bg-gray-900 sepia:bg-sepia-50 border border-gray-100 dark:border-gray-800/60 space-y-2">
    <div class="h-2.5 bg-gray-300 dark:bg-gray-700 sepia:bg-sepia-300 contrast:bg-zinc-700 rounded w-1/3"></div>
    <div class="h-3 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-full"></div>
    <div class="h-3 bg-gray-200 dark:bg-gray-800 sepia:bg-sepia-200 contrast:bg-zinc-800 rounded w-5/6"></div>
  </div>
`).join('');

// Simulator Financial state
let simCash = parseFloat(localStorage.getItem("sim_cash")) || 10000.00;
let activeModalStock = null;
let stockChartInstance = null;

// Reading stats tracker state
let timeSpentSeconds = parseInt(localStorage.getItem("time_spent_secs")) || 0;
let articlesReadCount = parseInt(localStorage.getItem("articles_read_count")) || 0;
let activeReadingInterval = null;

// Text to Speech Voice Speech API objects
let synth = window.speechSynthesis;
let currentUtterance = null;
let isPlayingTTS = false;
let currentArticleText = "";

// 4. Dom Selectors
const tickerContainer = document.getElementById("ticker-container");
const categoryNav = document.getElementById("category-nav");
const newsFeedContainer = document.getElementById("news-feed-container");
const articleCountTag = document.getElementById("article-count-tag");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("search-input");
const mobileSearchInput = document.getElementById("mobile-search-input");

const viewNewsFeed = document.getElementById("view-news-feed");
const viewActiveReader = document.getElementById("view-active-reader");
const viewAiExtractor = document.getElementById("view-ai-extractor");

const tabNewsDashboard = document.getElementById("tab-news-dashboard");
const tabAiExtractor = document.getElementById("tab-ai-extractor");

// Reader Selectors
const closeReaderBtn = document.getElementById("close-reader-btn");
const readerTitle = document.getElementById("reader-title");
const readerCategory = document.getElementById("reader-category");
const readerSponsored = document.getElementById("reader-sponsored");
const readerReadTime = document.getElementById("reader-read-time");
const readerPubDate = document.getElementById("reader-pub-date");
const readerAuthorName = document.getElementById("reader-author-name");
const readerAuthorSource = document.getElementById("reader-author-source");
const readerAuthorAvatar = document.getElementById("reader-author-avatar");
const readerContentText = document.getElementById("reader-content-text");
const readingProgressBar = document.getElementById("reading-progress-bar");
const readerBookmarkBtn = document.getElementById("reader-bookmark-btn");
const bookmarksCountBadges = document.querySelectorAll(".bookmarks-count-badge");
const toggleBookmarksPanelBtns = document.querySelectorAll(".toggle-bookmarks-panel-btn");
const bookmarksSidebarCard = document.getElementById("bookmarks-sidebar-card");
const bookmarksListContainer = document.getElementById("bookmarks-list-container");
const clearBookmarksBtn = document.getElementById("clear-bookmarks-btn");

// Text to Speech Selectors
const readerTtsPlayBtn = document.getElementById("reader-tts-play-btn");
const ttsActivePanel = document.getElementById("tts-active-panel");
const ttsClosePanelBtn = document.getElementById("tts-close-panel-btn");
const ttsPanelPlayPause = document.getElementById("tts-panel-play-pause");
const ttsPanelStop = document.getElementById("tts-panel-stop");
const ttsVoiceSelect = document.getElementById("tts-voice-select");
const ttsSpeedRange = document.getElementById("tts-speed-range");
const ttsSpeedLbl = document.getElementById("tts-speed-lbl");

// Extractor Selectors
const extractorForm = document.getElementById("extractor-form");
const extractorUrlInput = document.getElementById("extractor-url-input");
const sampleUrlBtns = document.querySelectorAll(".sample-url-btn");
const extractionLoaderCard = document.getElementById("extraction-loader-card");
const extractionOutputContainer = document.getElementById("extraction-output-container");
const scrapedUrlDisplay = document.getElementById("scraped-url-display");
const scrapedTitle = document.getElementById("scraped-title");
const scrapedAuthor = document.getElementById("scraped-author");
const scrapedDate = document.getElementById("scraped-date");
const scrapedContent = document.getElementById("scraped-content");
const scrapedSummary = document.getElementById("scraped-summary");
const scrapedTakeaways = document.getElementById("scraped-takeaways");
const scrapedEntities = document.getElementById("scraped-entities");
const aiSentimentVerdict = document.getElementById("ai-sentiment-verdict");
const sentimentBarPositive = document.getElementById("sentiment-bar-positive");
const sentimentBarNeutral = document.getElementById("sentiment-bar-neutral");
const sentimentBarNegative = document.getElementById("sentiment-bar-negative");
const posPct = document.getElementById("pos-pct");
const neuPct = document.getElementById("neu-pct");
const negPct = document.getElementById("neg-pct");

// Settings selectors
const fontSm = document.getElementById("font-sm");
const fontMd = document.getElementById("font-md");
const fontLg = document.getElementById("font-lg");
const fontXl = document.getElementById("font-xl");
const fontSansBtn = document.getElementById("font-sans-btn");
const fontSerifBtn = document.getElementById("font-serif-btn");
const fontMonoBtn = document.getElementById("font-mono-btn");
const lhTight = document.getElementById("lh-tight");
const lhNormal = document.getElementById("lh-normal");
const lhLoose = document.getElementById("lh-loose");

const readingTimeDisplay = document.getElementById("reading-time-display");
const articlesReadCounter = document.getElementById("articles-read-counter");
const aiInsightsContainer = document.getElementById("ai-insights-container");
const marketListContainer = document.getElementById("market-list-container");

// Stock Modal selectors
const stockChartModal = document.getElementById("stock-chart-modal");
const closeStockModal = document.getElementById("close-stock-modal");
const modalStockBadge = document.getElementById("modal-stock-badge");
const modalStockName = document.getElementById("modal-stock-name");
const modalStockPriceMeta = document.getElementById("modal-stock-price-meta");
const modalStockPrice = document.getElementById("modal-stock-price");
const modalStockChange = document.getElementById("modal-stock-change");
const simulatorCashLbl = document.getElementById("simulator-cash-lbl");
const simulatorSharesLbl = document.getElementById("simulator-shares-lbl");
const tradeQty = document.getElementById("trade-qty");
const simBuyBtn = document.getElementById("sim-buy-btn");
const simSellBtn = document.getElementById("sim-sell-btn");
const simTradeAlert = document.getElementById("sim-trade-alert");
const chartPeriodSelectors = document.getElementById("chart-period-selectors");

// Server Error Selectors
const serverErrorScreen = document.getElementById("server-error-screen");
const triggerServerErrorBtn = document.getElementById("trigger-server-error-btn");
const retryServerBtn = document.getElementById("retry-server-btn");
const retryBtnIcon = document.getElementById("retry-btn-icon");
const retryBtnText = document.getElementById("retry-btn-text");


// 5. Initialize Application Features
document.addEventListener("DOMContentLoaded", () => {
  initThemes();
  setupInitialSkeletons();
  initSpeechSynthesis();
  startReadingTimer();
  updateReadingStatsUI();
  updateBookmarksCount();
  setupEventListeners();
  checkInternetExplorer();
  checkNorfolkIsland();
  initFooterYear();

  // Load Sim Shares details
  STOCK_DATA.forEach(stock => {
    stock.sharesOwned = parseInt(localStorage.getItem(`shares_${stock.symbol}`)) || 0;
  });

  isInitialLoading = false;
  initCategories();
  initTicker();
  initMarketWatch();
  initInsights();
  renderArticles();
  initOfflineDetection();
  initPulsePoll();

  // Add fade-in effect to the loaded elements
  const fadeTargets = [categoryNav, newsFeedContainer, marketListContainer, aiInsightsContainer];
  fadeTargets.forEach(el => {
    if (el) {
      el.classList.add("fade-in");
    }
  });
});

// Helper to show ghost loader skeletons initially
function setupInitialSkeletons() {
  if (categoryNav) categoryNav.innerHTML = CATEGORY_SKELETON_HTML;
  if (newsFeedContainer) newsFeedContainer.innerHTML = NEWS_SKELETON_HTML;
  if (marketListContainer) marketListContainer.innerHTML = MARKET_SKELETON_HTML;
  if (aiInsightsContainer) aiInsightsContainer.innerHTML = INSIGHTS_SKELETON_HTML;
}

// Dynamic year for Footer
function initFooterYear() {
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.innerText = new Date().getFullYear();
  }
}

// Offline Connection Detection Engine
function initOfflineDetection() {
  const banner = document.getElementById("offline-banner");
  const closeBtn = document.getElementById("close-offline-warning");

  function updateConnectionStatus() {
    const urlParams = new URLSearchParams(window.location.search);
    const forceOffline = urlParams.get("forceOffline") === "true";

    if (!navigator.onLine || forceOffline) {
      if (banner) {
        banner.classList.remove("hidden");
      }
    } else {
      if (banner) {
        banner.classList.add("hidden");
      }
    }
  }

  // Setup event listeners for online/offline events
  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);

  if (closeBtn && banner) {
    closeBtn.addEventListener("click", () => {
      banner.classList.add("hidden");
    });
  }

  // Initial status check
  updateConnectionStatus();
}

// Internet Explorer Detection and Alert
function checkInternetExplorer() {
  const userAgent = window.navigator.userAgent;
  const isIE = userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || !!document.documentMode;

  // Also check URL parameters to force show the banner for visual validation
  const urlParams = new URLSearchParams(window.location.search);
  const forceIE = urlParams.get("forceIE") === "true";

  if (isIE || forceIE) {
    const banner = document.getElementById("ie-warning-banner");
    const closeBtn = document.getElementById("close-ie-warning");
    if (banner) {
      banner.classList.remove("hidden");
    }
    if (closeBtn && banner) {
      closeBtn.addEventListener("click", () => {
        banner.classList.add("hidden");
      });
    }
  }
}

// Norfolk Island Unsupported Territory Check
function isNorfolkIsland() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && tz.toLowerCase().includes("norfolk")) {
      return true;
    }
  } catch (e) {
    // Ignore error
  }
  return false;
}

function checkNorfolkIsland() {
  const urlParams = new URLSearchParams(window.location.search);
  const forceNorfolk = urlParams.get("forceNorfolk") === "true" || urlParams.get("unsupported") === "norfolk" || urlParams.get("country") === "Norfolk Island";
  const detectedNorfolk = isNorfolkIsland();

  if (forceNorfolk || detectedNorfolk) {
    const screen = document.getElementById("norfolk-unsupported-screen");
    if (screen) {
      screen.classList.remove("hidden");
    }
  }
}

// 6. Theme Engine
function initThemes() {
  const lightBtn = document.getElementById("theme-light-btn");
  const darkBtn = document.getElementById("theme-dark-btn");
  const sepiaBtn = document.getElementById("theme-sepia-btn");
  const contrastBtn = document.getElementById("theme-contrast-btn");

  const themes = ["light", "dark", "sepia", "contrast"];

  function setTheme(activeTheme) {
    document.documentElement.className = activeTheme;
    localStorage.setItem("platform_theme", activeTheme);

    // Manage styles specifically
    themes.forEach(t => {
      const btn = document.getElementById(`theme-${t}-btn`);
      if (btn) {
        if (t === activeTheme) {
          btn.classList.add("bg-white", "dark:bg-gray-800", "sepia:bg-sepia-50", "text-brand-600", "shadow-sm");
        } else {
          btn.classList.remove("bg-white", "dark:bg-gray-800", "sepia:bg-sepia-50", "text-brand-600", "shadow-sm");
        }
      }
    });
  }

  lightBtn.addEventListener("click", () => setTheme("light"));
  darkBtn.addEventListener("click", () => setTheme("dark"));
  sepiaBtn.addEventListener("click", () => setTheme("sepia"));
  contrastBtn.addEventListener("click", () => setTheme("contrast"));

  // Initial check
  const savedTheme = localStorage.getItem("platform_theme") || "light";
  setTheme(savedTheme);
}

// 7. Categories Engine
function initCategories() {
  const categories = ["All", "Tech", "Finance", "Science", "Health", "Entertainment", "Sponsored"];
  categoryNav.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
      selectedCategory === cat ? 'nav-link-active' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900/50 sepia:text-sepia-800'
    }`;

    // Count of articles
    const count = cat === "All"
      ? MOCK_ARTICLES.length
      : MOCK_ARTICLES.filter(a => a.category === cat).length;

    let icon = "fa-hashtag";
    if (cat === "All") icon = "fa-globe";
    else if (cat === "Tech") icon = "fa-microchip";
    else if (cat === "Finance") icon = "fa-chart-line";
    else if (cat === "Science") icon = "fa-satellite";
    else if (cat === "Health") icon = "fa-heart-pulse";
    else if (cat === "Entertainment") icon = "fa-film";
    else if (cat === "Sponsored") icon = "fa-rectangle-ad";

    btn.innerHTML = `
      <span class="flex items-center gap-2">
        <i class="fa-solid ${icon}"></i>
        ${cat}
      </span>
      <span class="bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] px-1.5 py-0.5 rounded-md font-bold">${count}</span>
    `;

    btn.addEventListener("click", () => {
      selectedCategory = cat;
      initCategories(); // re-draw active style
      renderArticles();
      // Auto return to news feed if inside active reader
      if (activeArticleId) {
        closeActiveReader();
      }
    });

    categoryNav.appendChild(btn);
  });
}

// 8. Ticker Engine
function initTicker() {
  renderTicker();
  // Simulate stock shifts in ticker every 3 seconds
  setInterval(() => {
    STOCK_DATA.forEach(stock => {
      const shift = (Math.random() - 0.48) * (stock.price * 0.012);
      stock.price = Math.max(1, stock.price + shift);
      stock.change = parseFloat(((shift / stock.price) * 100).toFixed(2));
      stock.history.push(stock.price);
      if (stock.history.length > 10) stock.history.shift();
    });
    renderTicker();
    updateMarketWatchPricesOnly();
    if (activeModalStock) {
      updateModalLiveQuote();
    }
  }, 4000);
}

function renderTicker() {
  tickerContainer.innerHTML = "";
  // Duplicate stocks lists to support continuous loop marquee animation
  const loopStocks = [...STOCK_DATA, ...STOCK_DATA];

  loopStocks.forEach((stock, index) => {
    const isUp = stock.change >= 0;
    const item = document.createElement("div");
    item.className = "inline-flex items-center gap-1.5 text-xs font-semibold mr-10 shrink-0";
    item.innerHTML = `
      <span class="text-gray-800 dark:text-gray-200 sepia:text-sepia-900 font-bold">${stock.symbol}</span>
      <span class="text-gray-600 dark:text-gray-400 sepia:text-sepia-800">$${stock.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
      <span class="${isUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} flex items-center gap-0.5 text-[10px] font-extrabold">
        <i class="fa-solid ${isUp ? 'fa-caret-up' : 'fa-caret-down'}"></i>
        ${isUp ? '+' : ''}${stock.change}%
      </span>
    `;
    item.addEventListener("click", () => {
      openStockModal(stock.symbol);
    });
    tickerContainer.appendChild(item);
  });
}

// 9. Market Watch Sidebar Card
function initMarketWatch() {
  marketListContainer.innerHTML = "";
  STOCK_DATA.forEach(stock => {
    const isUp = stock.change >= 0;
    const card = document.createElement("div");
    card.className = "flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 sepia:bg-sepia-50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all cursor-pointer border border-gray-100 dark:border-gray-800/40";
    card.setAttribute("id", `market-card-${stock.symbol}`);

    card.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-white dark:bg-gray-950 font-bold text-xs flex items-center justify-center border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200">
          ${stock.symbol}
        </div>
        <div>
          <span class="block font-bold text-xs text-gray-800 dark:text-gray-200">${stock.symbol}</span>
          <span class="block text-[10px] text-gray-400 truncate max-w-[80px]">${stock.name}</span>
        </div>
      </div>

      <!-- Sparkline canvas inline visual rendering -->
      <canvas class="spark-canvas mr-2" id="sparkline-${stock.symbol}"></canvas>

      <div class="text-right">
        <span class="block text-xs font-bold text-gray-800 dark:text-gray-200" id="market-price-${stock.symbol}">
          $${stock.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </span>
        <span class="${isUp ? 'text-green-600' : 'text-red-600'} text-[10px] font-extrabold flex items-center justify-end gap-0.5" id="market-change-${stock.symbol}">
          <i class="fa-solid ${isUp ? 'fa-caret-up' : 'fa-caret-down'}"></i>
          ${isUp ? '+' : ''}${stock.change}%
        </span>
      </div>
    `;

    card.addEventListener("click", () => openStockModal(stock.symbol));
    marketListContainer.appendChild(card);
    drawSparkline(stock);
  });
}

function updateMarketWatchPricesOnly() {
  STOCK_DATA.forEach(stock => {
    const isUp = stock.change >= 0;
    const priceEl = document.getElementById(`market-price-${stock.symbol}`);
    const changeEl = document.getElementById(`market-change-${stock.symbol}`);

    if (priceEl) {
      priceEl.innerText = `$${stock.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }
    if (changeEl) {
      changeEl.className = `${isUp ? 'text-green-600' : 'text-red-600'} text-[10px] font-extrabold flex items-center justify-end gap-0.5`;
      changeEl.innerHTML = `
        <i class="fa-solid ${isUp ? 'fa-caret-up' : 'fa-caret-down'}"></i>
        ${isUp ? '+' : ''}${stock.change}%
      `;
    }
    drawSparkline(stock);
  });
}

function drawSparkline(stock) {
  const canvas = document.getElementById(`sparkline-${stock.symbol}`);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width = 60;
  const height = canvas.height = 24;

  ctx.clearRect(0, 0, width, height);

  const points = stock.history;
  if (points.length < 2) return;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min === 0 ? 1 : max - min;

  ctx.beginPath();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = stock.change >= 0 ? "#16a34a" : "#dc2626";

  points.forEach((val, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 4) - 2;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();
}

// 10. AI insights Panel
function initInsights() {
  const insights = [
    { text: "AI agent stock projections indicate potential 25% overhead efficiency increase across software development agencies.", source: "NLP Engine 1" },
    { text: "S&P 500 options indicate intense technical supports heading into early November cycles.", source: "Market Scanner" },
    { text: "NASA deep-space biochemical analysis tools indicate Jezero samples are rich in trace amino-silicates.", source: "Sci-Bot Summary" }
  ];

  aiInsightsContainer.innerHTML = "";
  insights.forEach(ins => {
    const item = document.createElement("div");
    item.className = "p-3 rounded-xl bg-gray-50 dark:bg-gray-900 sepia:bg-sepia-50 border border-gray-100 dark:border-gray-800/60";
    item.innerHTML = `
      <div class="flex items-center gap-1.5 text-[10px] font-bold text-brand-600 dark:text-brand-400 mb-1">
        <i class="fa-solid fa-bolt"></i>
        <span>${ins.source}</span>
      </div>
      <p class="text-[11px] text-gray-600 dark:text-gray-300 sepia:text-sepia-900 font-medium leading-relaxed">${ins.text}</p>
    `;
    aiInsightsContainer.appendChild(item);
  });
}

// Reader Pulse Poll Logic
const POLL_BASE = {
  fusion: { name: "Fusion Energy", votes: 101 },
  quantum: { name: "Quantum Computing", votes: 151 },
  robots: { name: "Humanoid Robots", votes: 105 },
  mars: { name: "Mars Colonization", votes: 63 }
};

function initPulsePoll() {
  const userVote = localStorage.getItem("user_pulse_poll_vote");
  const votingView = document.getElementById("poll-voting-view");
  const resultsView = document.getElementById("poll-results-view");

  if (!votingView || !resultsView) return;

  if (userVote) {
    votingView.classList.add("hidden");
    resultsView.classList.remove("hidden");
    renderPollResults(userVote);
  } else {
    votingView.classList.remove("hidden");
    resultsView.classList.add("hidden");
  }
}

function renderPollResults(userVote) {
  const container = document.getElementById("poll-progress-container");
  const totalVotesEl = document.getElementById("poll-total-votes");
  if (!container || !totalVotesEl) return;

  container.innerHTML = "";

  // Calculate totals and percentages
  let totalVotes = 0;
  const pollData = {};
  for (const key in POLL_BASE) {
    pollData[key] = { ...POLL_BASE[key] };
    if (userVote === key) {
      pollData[key].votes += 1;
    }
    totalVotes += pollData[key].votes;
  }

  totalVotesEl.innerText = `Total: ${totalVotes.toLocaleString()} votes`;

  // Draw each choice progress bar
  for (const key in pollData) {
    const option = pollData[key];
    const pct = ((option.votes / totalVotes) * 100).toFixed(1);

    const barWrapper = document.createElement("div");
    barWrapper.className = "space-y-1";
    barWrapper.innerHTML = `
      <div class="flex justify-between text-[11px] font-semibold text-gray-700 dark:text-gray-300">
        <span class="${userVote === key ? 'text-brand-600 dark:text-brand-400 font-extrabold flex items-center gap-1' : ''}">
          ${userVote === key ? '<i class="fa-solid fa-circle-check"></i> ' : ''}${option.name}
        </span>
        <span>${pct}%</span>
      </div>
      <div class="h-2 w-full bg-gray-100 dark:bg-gray-850 sepia:bg-sepia-200 rounded-full overflow-hidden">
        <div class="h-full rounded-full bg-brand-600 transition-all duration-1000" style="width: 0%" id="poll-bar-${key}"></div>
      </div>
    `;
    container.appendChild(barWrapper);

    // Animate the bar width with a tiny delay
    setTimeout(() => {
      const bar = document.getElementById(`poll-bar-${key}`);
      if (bar) bar.style.width = `${pct}%`;
    }, 50);
  }
}

// 11. Article Rendering News Feed
function renderArticles() {
  if (isInitialLoading) return;
  newsFeedContainer.innerHTML = "";

  // Filter
  let filtered = MOCK_ARTICLES.filter(art => {
    const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (sortBy === "latest") {
    // Already in default order
  } else if (sortBy === "popular") {
    filtered.sort((a, b) => b.views - a.views);
  } else if (sortBy === "readingTime") {
    filtered.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
  }

  articleCountTag.innerText = `${filtered.length} article${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    newsFeedContainer.innerHTML = `
      <div class="bg-white dark:bg-gray-950 sepia:bg-sepia-100 rounded-3xl p-10 text-center border border-gray-100 dark:border-gray-800 sepia:border-sepia-200">
        <i class="fa-solid fa-folder-open text-gray-300 dark:text-gray-700 text-5xl mb-4"></i>
        <h3 class="font-extrabold text-lg text-gray-900 dark:text-white">No stories found</h3>
        <p class="text-sm text-gray-400 mt-2">Try revising your active filters or clear search query keyword.</p>
        <button id="clear-search-btn" class="mt-4 px-4 py-2 bg-brand-600 text-white text-xs font-semibold rounded-xl">Clear Search</button>
      </div>
    `;
    document.getElementById("clear-search-btn")?.addEventListener("click", () => {
      searchInput.value = "";
      mobileSearchInput.value = "";
      searchQuery = "";
      renderArticles();
    });
    return;
  }

  filtered.forEach(art => {
    const isBookmarked = bookmarks.some(b => b.id === art.id);
    const card = document.createElement("article");

    if (art.sponsored) {
      card.className = "bg-amber-50/40 dark:bg-amber-950/10 sepia:bg-sepia-100 contrast:border contrast:border-white rounded-2xl p-5 border-2 border-amber-300 dark:border-amber-700/60 sepia:border-sepia-200 shadow-sm interactive-card flex flex-col justify-between gap-4 relative overflow-hidden";
    } else {
      card.className = "bg-white dark:bg-gray-950 sepia:bg-sepia-100 contrast:border contrast:border-white rounded-2xl p-5 border border-gray-100 dark:border-gray-800 sepia:border-sepia-200 shadow-sm interactive-card flex flex-col justify-between gap-4";
    }

    const badgeHtml = art.sponsored
      ? `<span class="px-2 py-0.5 bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400 font-bold rounded-md uppercase tracking-wider flex items-center gap-1">
          <i class="fa-solid fa-rectangle-ad text-xs"></i> Sponsored
         </span>`
      : `<span class="px-2 py-0.5 bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400 font-bold rounded-md uppercase tracking-wider">
          ${art.category}
         </span>`;

    card.innerHTML = `
      <div class="space-y-2">
        <div class="flex justify-between items-center text-[10px]">
          ${badgeHtml}
          <div class="flex items-center gap-2 text-gray-400">
            <span>${art.readTime}</span>
            <span>•</span>
            <span>${art.date}</span>
          </div>
        </div>

        <h3 class="text-base font-extrabold text-gray-900 dark:text-white sepia:text-sepia-900 tracking-tight leading-snug hover:text-brand-600 transition-colors cursor-pointer" onclick="openActiveReader('${art.id}')">
          ${art.title}
        </h3>

        <p class="text-xs text-gray-500 dark:text-gray-400 sepia:text-sepia-800 leading-relaxed truncate-2-lines">
          ${art.excerpt}
        </p>
      </div>

      <div class="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 sepia:border-sepia-200 pt-3 text-xs">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 bg-brand-100 text-brand-600 dark:bg-brand-950 font-bold rounded-full flex items-center justify-center text-[10px]">
            ${art.author.charAt(0)}
          </div>
          <span class="text-gray-400 text-[11px]">By <strong class="text-gray-700 dark:text-gray-300 sepia:text-sepia-900 font-semibold">${art.author}</strong> in ${art.source}</span>
        </div>

        <div class="flex items-center gap-2">
          <button class="p-1.5 text-gray-400 hover:text-brand-600 transition-colors" onclick="toggleBookmark('${art.id}', event)">
            <i class="${isBookmarked ? 'fa-solid text-brand-600' : 'fa-regular'} fa-bookmark"></i>
          </button>

          <!-- Details / Ad details button -->
          ${art.sponsored ? `
            <button class="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 font-semibold rounded-lg flex items-center gap-1 text-[11px]" onclick="openArticleDetails('${art.id}', event)">
              <i class="fa-solid fa-circle-info text-[9px]"></i>
              Ad details
            </button>
          ` : `
            <button class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 font-semibold rounded-lg flex items-center gap-1 text-[11px]" onclick="openArticleDetails('${art.id}', event)">
              <i class="fa-solid fa-circle-info text-[9px]"></i>
              Details
            </button>
          `}

          <button class="px-3 py-1.5 bg-gray-50 hover:bg-brand-50 dark:bg-gray-900 dark:hover:bg-brand-950/40 text-brand-600 dark:text-brand-400 font-semibold rounded-lg flex items-center gap-1 text-[11px]" onclick="openActiveReader('${art.id}')">
            Read
            <i class="fa-solid fa-arrow-right text-[9px]"></i>
          </button>
        </div>
      </div>
    `;

    newsFeedContainer.appendChild(card);
  });
}

function isBrowserIE() {
  const userAgent = window.navigator.userAgent;
  const isIE = userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || !!document.documentMode;
  const urlParams = new URLSearchParams(window.location.search);
  return isIE || urlParams.get("forceIE") === "true";
}

function isOffline() {
  const urlParams = new URLSearchParams(window.location.search);
  return !navigator.onLine || urlParams.get("forceOffline") === "true";
}

// 12. Active Premium Reader View Controls
window.openActiveReader = function(id) {
  lastRequestedId = id;
  // Clear any existing TTS
  stopTTS();

  // Reset AI Chat log and input
  const chatLog = document.getElementById("reader-chat-log");
  if (chatLog) {
    chatLog.innerHTML = `
      <!-- Initial Greeting -->
      <div class="flex gap-2">
        <div class="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950/60 flex items-center justify-center font-bold text-brand-700 dark:text-brand-400 shrink-0">
          AI
        </div>
        <div class="bg-brand-50 dark:bg-brand-950/40 sepia:bg-sepia-200/50 px-3 py-2 rounded-2xl max-w-[85%] text-gray-800 dark:text-gray-200">
          Hello! I'm your AI Reading Assistant. Ask me anything about this article!
        </div>
      </div>
    `;
  }
  const chatInput = document.getElementById("reader-chat-input");
  if (chatInput) {
    chatInput.value = "";
  }

  const errorBlock = document.getElementById("reader-error-block");
  const errorText = document.getElementById("reader-error-text");
  const articleBody = document.getElementById("active-article-body");
  const ttsBtn = document.getElementById("reader-tts-play-btn");
  const bookmarkBtn = document.getElementById("reader-bookmark-btn");
  const detailsBtn = document.getElementById("reader-details-btn");

  // Show reader view, scroll to top
  activeArticleId = id;
  viewNewsFeed.classList.add("hidden");
  viewActiveReader.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle errors
  if (isBrowserIE()) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article, Your Internet Explorer is not supported, Please choose a different browser.";
      errorBlock.classList.remove("hidden");
    }
    if (articleBody) articleBody.classList.add("hidden");
    if (ttsBtn) ttsBtn.classList.add("hidden");
    if (bookmarkBtn) bookmarkBtn.classList.add("hidden");
    if (detailsBtn) detailsBtn.classList.add("hidden");
    return;
  }

  if (isOffline()) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article, Please check your internet connection and try again.";
      errorBlock.classList.remove("hidden");
    }
    if (articleBody) articleBody.classList.add("hidden");
    if (ttsBtn) ttsBtn.classList.add("hidden");
    if (bookmarkBtn) bookmarkBtn.classList.add("hidden");
    if (detailsBtn) detailsBtn.classList.add("hidden");
    return;
  }

  const art = MOCK_ARTICLES.find(a => a.id === id);
  if (!art) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article";
      errorBlock.classList.remove("hidden");
    }
    if (articleBody) articleBody.classList.add("hidden");
    if (ttsBtn) ttsBtn.classList.add("hidden");
    if (bookmarkBtn) bookmarkBtn.classList.add("hidden");
    if (detailsBtn) detailsBtn.classList.add("hidden");
    return;
  }

  // No error: restore elements and render article
  if (errorBlock) errorBlock.classList.add("hidden");
  if (articleBody) articleBody.classList.remove("hidden");
  if (ttsBtn) ttsBtn.classList.remove("hidden");
  if (bookmarkBtn) bookmarkBtn.classList.remove("hidden");
  if (detailsBtn) detailsBtn.classList.remove("hidden");

  // Apply data details
  readerTitle.innerText = art.title;
  readerCategory.innerText = art.category;

  if (art.sponsored) {
    readerSponsored.style.display = "inline-flex";
    readerCategory.style.display = "none";
  } else {
    readerSponsored.style.display = "none";
    readerCategory.style.display = "inline-block";
  }

  readerReadTime.innerText = art.readTime;
  readerPubDate.innerText = art.date;
  readerAuthorName.innerText = art.author;
  readerAuthorSource.innerText = `Published via ${art.source}`;
  readerAuthorAvatar.innerText = art.author.charAt(0);

  // Dynamic state for Reader details button
  const detailsBtnText = document.getElementById("reader-details-btn-text");
  if (detailsBtn && detailsBtnText) {
    if (art.sponsored) {
      detailsBtnText.innerText = "Ad details";
      detailsBtn.className = "p-2 bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-950/40 dark:text-amber-400 rounded-xl transition-all flex items-center gap-2 text-sm font-semibold";
    } else {
      detailsBtnText.innerText = "Details";
      detailsBtn.className = "p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-400 rounded-xl transition-all flex items-center gap-2 text-sm font-semibold";
    }
  }

  // Format content body paragraphs
  readerContentText.innerHTML = "";
  art.content.forEach(p => {
    const para = document.createElement("p");
    para.innerText = p;
    readerContentText.appendChild(para);
  });

  // Track stats
  articlesReadCount++;
  localStorage.setItem("articles_read_count", articlesReadCount);
  updateReadingStatsUI();

  // Reset Progress Bar
  readingProgressBar.style.width = "0%";

  // Switch visual panels
  viewNewsFeed.classList.add("hidden");
  viewActiveReader.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update Bookmark state
  updateReaderBookmarkButtonUI();

  // Setup TTS text references
  currentArticleText = art.content.join(" ");

  // Handle auto-progress on scrolling
  window.removeEventListener("scroll", handleReadingProgressScroll);
  window.addEventListener("scroll", handleReadingProgressScroll);
}

function handleReadingProgressScroll() {
  if (!activeArticleId) return;
  const element = viewActiveReader;
  const scrollTop = window.scrollY;
  const docHeight = element.offsetHeight - window.innerHeight;
  if (docHeight <= 0) return;
  const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
  readingProgressBar.style.width = `${pct}%`;
}

window.closeActiveReader = function() {
  activeArticleId = null;
  stopTTS();
  const errorBlock = document.getElementById("reader-error-block");
  if (errorBlock) errorBlock.classList.add("hidden");
  viewActiveReader.classList.add("hidden");
  viewNewsFeed.classList.remove("hidden");
  window.removeEventListener("scroll", handleReadingProgressScroll);
}

// 13. Bookmarks Management
window.toggleBookmark = function(id, event) {
  lastRequestedId = id;
  if (event) event.stopPropagation();
  const art = MOCK_ARTICLES.find(a => a.id === id);
  if (!art) return;

  const index = bookmarks.findIndex(b => b.id === id);
  if (index >= 0) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(art);
  }

  localStorage.setItem("news_bookmarks", JSON.stringify(bookmarks));
  updateBookmarksCount();
  renderArticles();
  updateReaderBookmarkButtonUI();
  renderBookmarksList();
}

function updateBookmarksCount() {
  bookmarksCountBadges.forEach(badge => {
    badge.innerText = bookmarks.length;
  });
}

function updateReaderBookmarkButtonUI() {
  if (!activeArticleId) return;
  const isBookmarked = bookmarks.some(b => b.id === activeArticleId);
  if (isBookmarked) {
    readerBookmarkBtn.innerHTML = `<i class="fa-solid text-brand-600 fa-bookmark text-base"></i>`;
  } else {
    readerBookmarkBtn.innerHTML = `<i class="fa-regular fa-bookmark text-base"></i>`;
  }
}

function renderBookmarksList() {
  bookmarksListContainer.innerHTML = "";
  if (bookmarks.length === 0) {
    bookmarksListContainer.innerHTML = `
      <div class="text-center py-6">
        <i class="fa-regular fa-bookmark text-gray-300 text-2xl mb-2"></i>
        <p class="text-[11px] text-gray-400">Your bookmarked collection is empty.</p>
      </div>
    `;
    return;
  }

  bookmarks.forEach(art => {
    const item = document.createElement("div");
    item.className = "p-2.5 bg-gray-50 dark:bg-gray-900 sepia:bg-sepia-50 rounded-xl flex items-center justify-between gap-2 border border-gray-100 dark:border-gray-800/60";
    item.innerHTML = `
      <div class="truncate flex-1 pr-2">
        <span class="block text-[9px] uppercase tracking-wider font-bold text-brand-600">${art.category}</span>
        <span class="block text-xs font-bold text-gray-800 dark:text-gray-200 truncate cursor-pointer hover:underline" onclick="openAndToggleBookmarkPanel('${art.id}')">
          ${art.title}
        </span>
      </div>
      <button class="text-gray-400 hover:text-red-500 text-xs shrink-0" onclick="toggleBookmark('${art.id}')">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    bookmarksListContainer.appendChild(item);
  });
}

window.openAndToggleBookmarkPanel = function(id) {
  openActiveReader(id);
  // hide panel on click
  bookmarksSidebarCard.classList.add("hidden");
}

// 14. Text to Speech TTS Engine
function initSpeechSynthesis() {
  if (!synth) return;

  // Wait for voices list to load
  function loadVoices() {
    const voices = synth.getVoices();
    ttsVoiceSelect.innerHTML = "";
    voices.forEach((v, index) => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.innerText = `${v.name} (${v.lang})`;
      if (v.default) opt.selected = true;
      ttsVoiceSelect.appendChild(opt);
    });
  }

  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
}

function playTTS() {
  if (!synth || !currentArticleText) return;

  synth.cancel(); // Stop anything running

  currentUtterance = new SpeechSynthesisUtterance(currentArticleText);

  // Set selected voice
  const selectedVoiceName = ttsVoiceSelect.value;
  const voices = synth.getVoices();
  const selectedVoice = voices.find(v => v.name === selectedVoiceName);
  if (selectedVoice) {
    currentUtterance.voice = selectedVoice;
  }

  // Set speed
  const speed = parseFloat(ttsSpeedRange.value);
  currentUtterance.rate = speed;

  // On events
  currentUtterance.onend = () => {
    stopTTS();
  };

  currentUtterance.onerror = () => {
    stopTTS();
  };

  synth.speak(currentUtterance);
  isPlayingTTS = true;
  updateTTSControlsUI();
}

function pauseTTS() {
  if (!synth) return;
  if (synth.speaking && !synth.paused) {
    synth.pause();
    isPlayingTTS = false;
    updateTTSControlsUI();
  } else if (synth.paused) {
    synth.resume();
    isPlayingTTS = true;
    updateTTSControlsUI();
  }
}

function stopTTS() {
  if (!synth) return;
  synth.cancel();
  isPlayingTTS = false;
  ttsActivePanel.classList.add("hidden");
  updateTTSControlsUI();
}

function updateTTSControlsUI() {
  if (isPlayingTTS) {
    ttsPanelPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    ttsPanelPlayPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
}

// 15. Real-time NLP Article Scraper Extraction Simulation
extractorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = extractorUrlInput.value.trim();
  if (!url) return;

  simulateExtraction(url);
});

sampleUrlBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const sample = btn.getAttribute("data-sample-url");
    extractorUrlInput.value = sample;
    simulateExtraction(sample);
  });
});

function simulateExtraction(url) {
  const errorBlock = document.getElementById("extractor-error-block");
  const errorText = document.getElementById("extractor-error-text");

  // Hide visual screens initially
  extractionOutputContainer.classList.add("hidden");
  extractionLoaderCard.classList.add("hidden");
  if (errorBlock) errorBlock.classList.add("hidden");

  if (isBrowserIE()) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article, Your Internet Explorer is not supported, Please choose a different browser.";
      errorBlock.classList.remove("hidden");
    }
    return;
  }

  if (isOffline()) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article, Please check your internet connection and try again.";
      errorBlock.classList.remove("hidden");
    }
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const forceGeneralError = urlParams.get("forceGeneralError") === "true";

  if (forceGeneralError) {
    if (errorBlock && errorText) {
      errorText.innerText = "Error loading article";
      errorBlock.classList.remove("hidden");
    }
    return;
  }

  // Otherwise, proceed to normal simulation
  extractionLoaderCard.classList.remove("hidden");

  // Step variables
  const step1 = document.getElementById("loader-step-1");
  const step2 = document.getElementById("loader-step-2");
  const step3 = document.getElementById("loader-step-3");
  const step4 = document.getElementById("loader-step-4");
  const s2 = document.getElementById("loader-spinner-2");
  const s3 = document.getElementById("loader-spinner-3");
  const s4 = document.getElementById("loader-spinner-4");

  // Reset text styles
  step2.className = "flex justify-between items-center text-gray-400";
  step3.className = "flex justify-between items-center text-gray-400";
  step4.className = "flex justify-between items-center text-gray-400";
  s2.classList.add("hidden");
  s3.classList.add("hidden");
  s4.classList.add("hidden");

  // Execute extraction steps simulator timers
  setTimeout(() => {
    step2.className = "flex justify-between items-center text-brand-600 font-bold";
    s2.classList.remove("hidden");

    setTimeout(() => {
      step2.innerHTML = `<span>2. Bypassed successfully! (200 OK)</span> <i class="fa-solid fa-circle-check text-green-500"></i>`;
      step3.className = "flex justify-between items-center text-brand-600 font-bold";
      s3.classList.remove("hidden");

      setTimeout(() => {
        step3.innerHTML = `<span>3. Readability DOM parsed successfully</span> <i class="fa-solid fa-circle-check text-green-500"></i>`;
        step4.className = "flex justify-between items-center text-brand-600 font-bold";
        s4.classList.remove("hidden");

        setTimeout(() => {
          step4.innerHTML = `<span>4. AI summaries finalized</span> <i class="fa-solid fa-circle-check text-green-500"></i>`;

          finishExtraction(url);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 800);
}

function finishExtraction(url) {
  extractionLoaderCard.classList.add("hidden");
  extractionOutputContainer.classList.remove("hidden");

  // Render a mock scraped response based on keywords
  let scraperResult = {
    title: "The Rapid Rise of Next-Generation Automated Workforces",
    author: "AI Scraper Engine Analyzer",
    date: "Current Live Render",
    content: [
      "In modern corporate structures, standard procedural tasks are becoming heavily automated. Utilizing state of the art LLM networks, businesses have started replacing static automation scripts with autonomous reasoning engines.",
      "The result is a marked efficiency increase across engineering, analytics, marketing, and finance divisions. By using semantic agents, operations teams report significant overhead reductions up to 40% in initial tests."
    ],
    summary: "An intensive analysis showing how LLM reasoning engines are replacing static scripting tools in modern corporate automation schemas, boosting bottom-line efficiency.",
    takeaways: [
      "Autonomous agents are replacing traditional rigid scripts.",
      "Corporate cost efficiency increases up to 40% in initial operational audits."
    ],
    entities: ["LLMs", "Automation", "Overhead Efficiency", "Scraper Engine"],
    sentiment: { positive: 88, neutral: 10, negative: 2, verdict: "Highly Positive" }
  };

  // Switch if they clicked a sample
  if (url.includes("ai-agents")) {
    const art = MOCK_ARTICLES[0];
    scraperResult = {
      title: art.title,
      author: art.author,
      date: art.date,
      content: art.content,
      summary: art.summary,
      takeaways: art.takeaways,
      entities: art.entities,
      sentiment: art.sentiment
    };
  } else if (url.includes("tesla")) {
    const art = MOCK_ARTICLES[1];
    scraperResult = {
      title: art.title,
      author: art.author,
      date: art.date,
      content: art.content,
      summary: art.summary,
      takeaways: art.takeaways,
      entities: art.entities,
      sentiment: art.sentiment
    };
  } else if (url.includes("mars")) {
    const art = MOCK_ARTICLES[2];
    scraperResult = {
      title: art.title,
      author: art.author,
      date: art.date,
      content: art.content,
      summary: art.summary,
      takeaways: art.takeaways,
      entities: art.entities,
      sentiment: art.sentiment
    };
  }

  // Populate scraper visual results
  scrapedUrlDisplay.innerText = url;
  scrapedTitle.innerText = scraperResult.title;
  scrapedAuthor.innerText = `By ${scraperResult.author}`;
  scrapedDate.innerText = scraperResult.date;

  scrapedContent.innerHTML = "";
  scraperResult.content.forEach(p => {
    const para = document.createElement("p");
    para.innerText = p;
    scrapedContent.appendChild(para);
  });

  scrapedSummary.innerText = scraperResult.summary;

  scrapedTakeaways.innerHTML = "";
  scraperResult.takeaways.forEach(t => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-2";
    li.innerHTML = `<i class="fa-solid fa-check text-green-500 mt-1 shrink-0"></i> <span>${t}</span>`;
    scrapedTakeaways.appendChild(li);
  });

  scrapedEntities.innerHTML = "";
  scraperResult.entities.forEach(ent => {
    const badge = document.createElement("span");
    badge.className = "px-2 py-1 bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-400 rounded-lg text-[10px] font-bold border border-brand-100 dark:border-brand-900/50";
    badge.innerText = ent;
    scrapedEntities.appendChild(badge);
  });

  // Sentiment bar calculations
  const sent = scraperResult.sentiment;
  aiSentimentVerdict.innerText = `${sent.positive}% ${sent.verdict}`;
  sentimentBarPositive.style.width = `${sent.positive}%`;
  sentimentBarNeutral.style.width = `${sent.neutral}%`;
  sentimentBarNegative.style.width = `${sent.negative}%`;
  posPct.innerText = `${sent.positive}%`;
  neuPct.innerText = `${sent.neutral}%`;
  negPct.innerText = `${sent.negative}%`;
}


// 16. Stock Modal Graph & Paper Trading Engine
function openStockModal(symbol) {
  const stock = STOCK_DATA.find(s => s.symbol === symbol);
  if (!stock) return;

  activeModalStock = stock;

  // Fill modal headers
  modalStockBadge.innerText = stock.symbol;
  modalStockName.innerText = stock.name;
  modalStockPriceMeta.innerText = symbol === "BTC" ? "Crypto Asset Market" : "NASDAQ · Security Quote";

  updateModalLiveQuote();
  updateModalPaperTradingUI();

  // Hide trade alert
  simTradeAlert.classList.add("hidden");

  // Build Chart.js Graph
  buildStockChart(stock, "1D");

  // Show Modal
  stockChartModal.classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("modal-container-box").classList.remove("scale-95");
    document.getElementById("modal-container-box").classList.add("scale-100");
  }, 10);
}

function updateModalLiveQuote() {
  if (!activeModalStock) return;
  const isUp = activeModalStock.change >= 0;
  modalStockPrice.innerText = `$${activeModalStock.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  modalStockChange.className = `text-sm font-bold ${isUp ? 'text-green-600' : 'text-red-600'} ml-1`;
  modalStockChange.innerHTML = `
    ${isUp ? '+' : ''}${activeModalStock.change}% Today
  `;
}

function updateModalPaperTradingUI() {
  if (!activeModalStock) return;
  simulatorCashLbl.innerText = `$${simCash.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  simulatorSharesLbl.innerText = activeModalStock.sharesOwned;
}

function buildStockChart(stock, period) {
  const canvas = document.getElementById("modal-stock-chart-canvas");
  if (!canvas) return;

  if (stockChartInstance) {
    stockChartInstance.destroy();
  }

  // Generate some realistic fake historical plot arrays
  let labels = ["9:30 AM", "11:00 AM", "12:30 PM", "2:00 PM", "3:30 PM", "4:00 PM"];
  let prices = [...stock.history];

  if (period === "1W") {
    labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Today"];
    prices = stock.history.map(p => p * (0.95 + Math.random()*0.08));
  } else if (period === "1M") {
    labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Current"];
    prices = stock.history.map(p => p * (0.90 + Math.random()*0.15));
  }

  const isUp = stock.change >= 0;
  const strokeColor = isUp ? "rgba(22, 163, 74, 1)" : "rgba(220, 38, 38, 1)";
  const fillColor = isUp ? "rgba(22, 163, 74, 0.05)" : "rgba(220, 38, 38, 0.05)";

  const ctx = canvas.getContext("2d");
  stockChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: `${stock.symbol} Price`,
        data: prices,
        borderColor: strokeColor,
        backgroundColor: fillColor,
        fill: true,
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: strokeColor,
        pointBorderColor: "#fff",
        pointBorderWidth: 1.5,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: "Inter", size: 10 } }
        },
        y: {
          grid: { color: "rgba(148, 163, 184, 0.1)" },
          ticks: { font: { family: "Inter", size: 10 } }
        }
      }
    }
  });
}

function handlePaperTrade(action) {
  if (!activeModalStock) return;
  const qty = parseInt(tradeQty.value);
  if (!qty || qty <= 0) return;

  const cost = qty * activeModalStock.price;

  if (action === "BUY") {
    if (simCash < cost) {
      simTradeAlert.innerText = "Error: Insufficient cash funds.";
      simTradeAlert.className = "text-[10px] text-red-600 font-bold";
      simTradeAlert.classList.remove("hidden");
      return;
    }
    simCash -= cost;
    activeModalStock.sharesOwned += qty;
  } else if (action === "SELL") {
    if (activeModalStock.sharesOwned < qty) {
      simTradeAlert.innerText = "Error: You do not own enough shares.";
      simTradeAlert.className = "text-[10px] text-red-600 font-bold";
      simTradeAlert.classList.remove("hidden");
      return;
    }
    simCash += cost;
    activeModalStock.sharesOwned -= qty;
  }

  // Persist details
  localStorage.setItem("sim_cash", simCash);
  localStorage.setItem(`shares_${activeModalStock.symbol}`, activeModalStock.sharesOwned);

  // Update visual elements
  updateModalPaperTradingUI();
  simTradeAlert.innerText = `Success: ${action} ${qty} share(s) of ${activeModalStock.symbol} at $${activeModalStock.price.toFixed(2)}!`;
  simTradeAlert.className = "text-[10px] text-green-600 font-bold";
  simTradeAlert.classList.remove("hidden");
}

window.closeStockModal = function() {
  document.getElementById("modal-container-box").classList.add("scale-95");
  document.getElementById("modal-container-box").classList.remove("scale-100");
  setTimeout(() => {
    stockChartModal.classList.add("hidden");
    activeModalStock = null;
  }, 200);
}

window.openArticleDetails = function(id, event) {
  lastRequestedId = id;
  if (event) {
    event.stopPropagation();
  }

  const art = MOCK_ARTICLES.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById("article-details-modal");
  const box = document.getElementById("article-details-modal-box");
  const badge = document.getElementById("details-modal-badge");
  const headline = document.getElementById("details-modal-headline");
  const title = document.getElementById("details-modal-title");
  const author = document.getElementById("details-modal-author");
  const date = document.getElementById("details-modal-date");
  const views = document.getElementById("details-modal-views");
  const readtime = document.getElementById("details-modal-readtime");
  const summary = document.getElementById("details-modal-summary");
  const takeaways = document.getElementById("details-modal-takeaways");
  const verdict = document.getElementById("details-modal-sentiment-verdict");
  const barPos = document.getElementById("details-modal-sentiment-positive");
  const barNeu = document.getElementById("details-modal-sentiment-neutral");
  const barNeg = document.getElementById("details-modal-sentiment-negative");
  const pctPos = document.getElementById("details-modal-pos-pct");
  const pctNeu = document.getElementById("details-modal-neu-pct");
  const pctNeg = document.getElementById("details-modal-neg-pct");
  const entities = document.getElementById("details-modal-entities");
  const readBtn = document.getElementById("details-modal-read-btn");

  // New ad info fields
  const adInfoBlock = document.getElementById("details-modal-ad-info");
  const adVerificationEl = document.getElementById("details-modal-ad-verification");
  const adCountryEl = document.getElementById("details-modal-ad-country");

  if (!modal || !box) return;

  // Set Headline & Badge
  if (art.sponsored) {
    headline.innerText = "Ad Details & AI Sponsor Insights";
    badge.innerText = "Sponsored";
    badge.className = "px-2.5 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400 font-bold rounded-lg text-xs uppercase tracking-wider";

    // Show and populate ad details
    if (adInfoBlock) adInfoBlock.classList.remove("hidden");
    if (adVerificationEl) adVerificationEl.innerText = art.adVerificationStatus || "Verified Advertiser";
    if (adCountryEl) adCountryEl.innerText = art.country || "Global";
  } else {
    headline.innerText = "Article Details & AI Analysis";
    badge.innerText = art.category;
    badge.className = "px-2.5 py-1 bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400 font-bold rounded-lg text-xs uppercase tracking-wider";

    // Hide ad details block for normal articles
    if (adInfoBlock) adInfoBlock.classList.add("hidden");
  }

  // Basic info
  title.innerText = art.title;
  author.innerText = `By ${art.author} in ${art.source}`;
  date.innerText = art.date;
  views.innerHTML = `<i class="fa-solid fa-eye mr-1"></i> ${art.views ? art.views.toLocaleString() : 'N/A'} views`;
  readtime.innerHTML = `<i class="fa-solid fa-clock mr-1"></i> ${art.readTime}`;

  // AI summary
  summary.innerText = art.summary || "No executive summary available for this item.";

  // Key takeaways list
  takeaways.innerHTML = "";
  if (art.takeaways && art.takeaways.length > 0) {
    art.takeaways.forEach(t => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2";
      li.innerHTML = `<i class="fa-solid fa-check text-green-500 mt-1 shrink-0"></i> <span>${t}</span>`;
      takeaways.appendChild(li);
    });
  } else {
    takeaways.innerHTML = `<li class="text-gray-400 italic">No takeaways available.</li>`;
  }

  // Sentiment analysis
  const sent = art.sentiment || { positive: 50, neutral: 50, negative: 0, verdict: "Neutral" };
  verdict.innerText = `${sent.positive}% ${sent.verdict}`;
  barPos.style.width = `${sent.positive}%`;
  barNeu.style.width = `${sent.neutral}%`;
  barNeg.style.width = `${sent.negative}%`;
  pctPos.innerText = `${sent.positive}%`;
  pctNeu.innerText = `${sent.neutral}%`;
  pctNeg.innerText = `${sent.negative}%`;

  // Named entities tags
  entities.innerHTML = "";
  if (art.entities && art.entities.length > 0) {
    art.entities.forEach(ent => {
      const sp = document.createElement("span");
      sp.className = "px-2 py-1 bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-400 rounded-lg text-[10px] font-bold border border-brand-100 dark:border-brand-900/50";
      sp.innerText = ent;
      entities.appendChild(sp);
    });
  } else {
    entities.innerHTML = `<span class="text-gray-400 italic text-[10px]">No tags available.</span>`;
  }

  // Read button
  readBtn.onclick = function() {
    window.closeArticleDetails();
    openActiveReader(art.id);
  };

  // Show Modal
  modal.classList.remove("hidden");
  setTimeout(() => {
    box.classList.remove("scale-95");
    box.classList.add("scale-100");
  }, 10);
};

window.closeArticleDetails = function() {
  const modal = document.getElementById("article-details-modal");
  const box = document.getElementById("article-details-modal-box");
  if (!modal || !box) return;

  box.classList.add("scale-95");
  box.classList.remove("scale-100");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 200);
};


// 17. Reading Timer Tracker
function startReadingTimer() {
  activeReadingInterval = setInterval(() => {
    timeSpentSeconds++;
    localStorage.setItem("time_spent_secs", timeSpentSeconds);
    updateReadingStatsUI();
  }, 1000);
}

function updateReadingStatsUI() {
  const mins = Math.floor(timeSpentSeconds / 60);
  const secs = timeSpentSeconds % 60;
  readingTimeDisplay.innerText = `${mins}m ${secs.toString().padStart(2, '0')}s`;
  articlesReadCounter.innerText = articlesReadCount;
}


// 18. Custom Settings Reader Configurator
function applyReaderConfig() {
  const body = document.getElementById("active-article-body");
  if (!body) return;

  // Font Family
  body.classList.remove("font-sans", "font-serif", "font-mono");
  const activeFont = document.querySelector("#font-sans-btn.bg-white, #font-serif-btn.bg-white, #font-mono-btn.bg-white")?.innerText.toLowerCase();

  if (activeFont === "sans") body.classList.add("font-sans");
  else if (activeFont === "serif") body.classList.add("font-serif");
  else if (activeFont === "mono") body.classList.add("font-mono");
}


// 19. Bind General Event Listeners
function setupEventListeners() {
  // Navigation tabs
  tabNewsDashboard.addEventListener("click", () => {
    activeTab = "news";

    // Manage tab colors
    tabNewsDashboard.className = "flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all bg-brand-600 text-white shadow-md";
    tabAiExtractor.className = "flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 sepia:text-sepia-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all";

    viewAiExtractor.classList.add("hidden");
    const extractorErrorBlock = document.getElementById("extractor-error-block");
    if (extractorErrorBlock) extractorErrorBlock.classList.add("hidden");
    closeActiveReader(); // Default show feed
  });

  tabAiExtractor.addEventListener("click", () => {
    activeTab = "extractor";
    stopTTS();

    // Manage tab colors
    tabAiExtractor.className = "flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all bg-brand-600 text-white shadow-md";
    tabNewsDashboard.className = "flex-1 py-3 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 sepia:text-sepia-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all";

    viewNewsFeed.classList.add("hidden");
    viewActiveReader.classList.add("hidden");
    const readerErrorBlock = document.getElementById("reader-error-block");
    if (readerErrorBlock) readerErrorBlock.classList.add("hidden");
    viewAiExtractor.classList.remove("hidden");
  });

  // Search input filters
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderArticles();
  });

  mobileSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderArticles();
  });

  // Sort Selector
  sortSelect.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderArticles();
  });

  // Close Reader Back action
  closeReaderBtn.addEventListener("click", () => {
    closeActiveReader();
  });

  // Reader Bookmarks icon click
  readerBookmarkBtn.addEventListener("click", () => {
    if (activeArticleId) {
      toggleBookmark(activeArticleId);
    }
  });

  // Sidebar Bookmarks trigger panel visibility toggle
  toggleBookmarksPanelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      bookmarksSidebarCard.classList.toggle("hidden");
      renderBookmarksList();
    });
  });

  clearBookmarksBtn.addEventListener("click", () => {
    bookmarks = [];
    localStorage.setItem("news_bookmarks", JSON.stringify(bookmarks));
    updateBookmarksCount();
    updateReaderBookmarkButtonUI();
    renderBookmarksList();
    renderArticles();
  });

  // Active Reader TTS Events
  readerTtsPlayBtn.addEventListener("click", () => {
    ttsActivePanel.classList.remove("hidden");
    playTTS();
  });

  ttsClosePanelBtn.addEventListener("click", () => {
    stopTTS();
  });

  ttsPanelPlayPause.addEventListener("click", () => {
    pauseTTS();
  });

  ttsPanelStop.addEventListener("click", () => {
    stopTTS();
  });

  ttsSpeedRange.addEventListener("input", (e) => {
    const rate = parseFloat(e.target.value).toFixed(1);
    ttsSpeedLbl.innerText = `${rate}x`;
    if (isPlayingTTS) {
      playTTS(); // Restart with new rate speed immediately
    }
  });

  // Stock Modal Close events
  closeStockModal.addEventListener("click", () => {
    window.closeStockModal();
  });

  stockChartModal.addEventListener("click", (e) => {
    if (e.target === stockChartModal) {
      window.closeStockModal();
    }
  });

  // Simulation trade buttons
  simBuyBtn.addEventListener("click", () => handlePaperTrade("BUY"));
  simSellBtn.addEventListener("click", () => handlePaperTrade("SELL"));

  // Chart Period switch selector buttons
  chartPeriodSelectors.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      chartPeriodSelectors.querySelectorAll("button").forEach(b => b.className = "px-3 py-1.5 rounded-md hover:text-brand-600");
      btn.className = "px-3 py-1.5 rounded-md hover:text-brand-600 bg-white dark:bg-gray-800 sepia:bg-sepia-50 text-brand-600 shadow-sm";
      const period = btn.getAttribute("data-period");
      if (activeModalStock) {
        buildStockChart(activeModalStock, period);
      }
    });
  });

  // Reader Customizer settings buttons click events
  const scaleBtns = [fontSm, fontMd, fontLg, fontXl];
  scaleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      scaleBtns.forEach(b => b.className = "py-1.5 rounded-lg text-center hover:text-brand-600");
      btn.className = "py-1.5 rounded-lg text-center bg-white dark:bg-gray-800 sepia:bg-sepia-50 text-brand-600 shadow-sm";

      const body = document.getElementById("active-article-body");
      if (body) {
        body.classList.remove("text-sm-class", "text-md-class", "text-lg-class", "text-xl-class");
        if (btn === fontSm) body.classList.add("text-sm-class");
        else if (btn === fontMd) body.classList.add("text-md-class");
        else if (btn === fontLg) body.classList.add("text-lg-class");
        else if (btn === fontXl) body.classList.add("text-xl-class");
      }
    });
  });

  const fontBtns = [fontSansBtn, fontSerifBtn, fontMonoBtn];
  fontBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      fontBtns.forEach(b => b.className = "py-1.5 rounded-lg text-center hover:text-brand-600");
      btn.className = "py-1.5 rounded-lg text-center bg-white dark:bg-gray-800 sepia:bg-sepia-50 text-brand-600 shadow-sm";

      const body = document.getElementById("active-article-body");
      if (body) {
        body.classList.remove("font-sans", "font-serif", "font-mono");
        if (btn === fontSansBtn) body.classList.add("font-sans");
        else if (btn === fontSerifBtn) body.classList.add("font-serif");
        else if (btn === fontMonoBtn) body.classList.add("font-mono");
      }
    });
  });

  const lhBtns = [lhTight, lhNormal, lhLoose];
  lhBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      lhBtns.forEach(b => b.className = "py-1.5 rounded-lg text-center hover:text-brand-600");
      btn.className = "py-1.5 rounded-lg text-center bg-white dark:bg-gray-800 sepia:bg-sepia-50 text-brand-600 shadow-sm";

      const body = document.getElementById("active-article-body");
      if (body) {
        body.classList.remove("lh-tight-class", "lh-normal-class", "lh-loose-class");
        if (btn === lhTight) body.classList.add("lh-tight-class");
        else if (btn === lhNormal) body.classList.add("lh-normal-class");
        else if (btn === lhLoose) body.classList.add("lh-loose-class");
      }
    });
  });

  // Mobile Menu button behavior
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  mobileMenuBtn.addEventListener("click", () => {
    // Scroll left sidebar category panel into view or toggle visibility
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      sidebar.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Article details modal close events
  const closeDetailsModal = document.getElementById("close-details-modal");
  if (closeDetailsModal) {
    closeDetailsModal.addEventListener("click", () => {
      window.closeArticleDetails();
    });
  }

  const articleDetailsModal = document.getElementById("article-details-modal");
  if (articleDetailsModal) {
    articleDetailsModal.addEventListener("click", (e) => {
      if (e.target === articleDetailsModal) {
        window.closeArticleDetails();
      }
    });
  }

  // Active Reader details button click event
  const readerDetailsBtn = document.getElementById("reader-details-btn");
  if (readerDetailsBtn) {
    readerDetailsBtn.addEventListener("click", () => {
      if (activeArticleId) {
        window.openArticleDetails(activeArticleId);
      }
    });
  }

  // Footer Navigation & Interactive Action listeners
  const footerNavFeed = document.getElementById("footer-nav-feed");
  if (footerNavFeed) {
    footerNavFeed.addEventListener("click", () => {
      // Simulate click of header Real-time Feed tab
      tabNewsDashboard.click();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const footerNavExtractor = document.getElementById("footer-nav-extractor");
  if (footerNavExtractor) {
    footerNavExtractor.addEventListener("click", () => {
      // Simulate click of header AI Extractor tab
      tabAiExtractor.click();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const footerNavBookmarks = document.getElementById("footer-nav-bookmarks");
  if (footerNavBookmarks) {
    footerNavBookmarks.addEventListener("click", () => {
      // Toggle sidebar Bookmarks display if hidden, or scroll to it
      if (bookmarksSidebarCard && bookmarksSidebarCard.classList.contains("hidden")) {
        if (toggleBookmarksPanelBtns.length > 0) {
          toggleBookmarksPanelBtns[0].click();
        }
      }
      bookmarksSidebarCard.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Server error simulator and retry logic
  if (triggerServerErrorBtn) {
    triggerServerErrorBtn.addEventListener("click", () => {
      if (serverErrorScreen) {
        serverErrorScreen.classList.remove("hidden");
      }
    });
  }

  if (retryServerBtn) {
    retryServerBtn.addEventListener("click", () => {
      // Disable button and show spinner
      retryServerBtn.disabled = true;
      if (retryBtnIcon) {
        retryBtnIcon.className = "fa-solid fa-circle-notch animate-spin";
      }
      if (retryBtnText) {
        retryBtnText.innerText = "Attempting Reconnection...";
      }

      // Simulate a 1.5s delay to "reconnect" to our mock server
      setTimeout(() => {
        // Hide error screen
        if (serverErrorScreen) {
          serverErrorScreen.classList.add("hidden");
        }

        // Restore button state
        retryServerBtn.disabled = false;
        if (retryBtnIcon) {
          retryBtnIcon.className = "fa-solid fa-arrow-rotate-right";
        }
        if (retryBtnText) {
          retryBtnText.innerText = "Retry Connection";
        }

        // Show a brief success alert of simulated recovery (optionally)
        alert("Server connection successfully re-established!");
      }, 1500);
    });
  }

  // Norfolk unsupported screen close button
  const closeNorfolkBtn = document.getElementById("close-norfolk-btn");
  if (closeNorfolkBtn) {
    closeNorfolkBtn.addEventListener("click", () => {
      const screen = document.getElementById("norfolk-unsupported-screen");
      if (screen) {
        screen.classList.add("hidden");
      }
    });
  }

  // Category filter handlers in the footer
  const footerCatBtns = document.querySelectorAll(".footer-cat-btn");
  footerCatBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      if (category) {
        selectedCategory = category;
        initCategories(); // Repaint Category Selector menu states
        renderArticles();
        if (activeArticleId) {
          closeActiveReader();
        }
        tabNewsDashboard.click(); // Ensure news feed is showing
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // AI Chat Assistant Event Listener
  const readerChatForm = document.getElementById("reader-chat-form");
  if (readerChatForm) {
    readerChatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputEl = document.getElementById("reader-chat-input");
      const logEl = document.getElementById("reader-chat-log");
      if (!inputEl || !logEl || !activeArticleId) return;

      const userText = inputEl.value.trim();
      if (!userText) return;

      // Append user message
      const userMsgDiv = document.createElement("div");
      userMsgDiv.className = "flex gap-2 justify-end";
      userMsgDiv.innerHTML = `
        <div class="bg-brand-600 text-white px-3 py-2 rounded-2xl max-w-[85%] text-right">
          ${userText}
        </div>
      `;
      logEl.appendChild(userMsgDiv);
      inputEl.value = "";
      logEl.scrollTop = logEl.scrollHeight;

      // Append typing indicator
      const typingIndicator = document.createElement("div");
      typingIndicator.className = "flex gap-2 items-center text-gray-400 font-semibold italic animate-pulse py-1";
      typingIndicator.id = "reader-chat-typing";
      typingIndicator.innerHTML = `
        <div class="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950/60 flex items-center justify-center font-bold text-brand-700 dark:text-brand-400 shrink-0 not-italic">
          AI
        </div>
        <span>AI is thinking...</span>
      `;
      logEl.appendChild(typingIndicator);
      logEl.scrollTop = logEl.scrollHeight;

      // Get article details
      const art = MOCK_ARTICLES.find(a => a.id === activeArticleId);
      const query = userText.toLowerCase();

      setTimeout(() => {
        // Remove typing indicator
        const indicator = document.getElementById("reader-chat-typing");
        if (indicator) indicator.remove();

        let reply = "";
        if (!art) {
          reply = "I'm sorry, I couldn't access the details of the active article. Please make sure the article is loaded correctly.";
        } else if (query.includes("summary") || query.includes("summarize") || query.includes("about") || query.includes("overview")) {
          reply = `<strong>Executive Summary:</strong><br>${art.summary || "This article details " + art.excerpt}`;
        } else if (query.includes("takeaway") || query.includes("key") || query.includes("points") || query.includes("learn")) {
          const takeawaysList = art.takeaways ? art.takeaways.map(t => `<li>• ${t}</li>`).join("") : "<li>• No takeaways listed.</li>";
          reply = `<strong>Key Takeaways:</strong><ul class="space-y-1 mt-1">${takeawaysList}</ul>`;
        } else if (query.includes("entities") || query.includes("tag") || query.includes("subject") || query.includes("organization") || query.includes("who") || query.includes("company")) {
          const entitiesList = art.entities ? art.entities.join(", ") : "None";
          reply = `<strong>Associated Entities & Subjects:</strong><br>${entitiesList}`;
        } else {
          // General match response
          reply = `Based on <em>"${art.title}"</em> by ${art.author}, the article talks about: <br> ${art.excerpt}<br><br>Let me know if you have any other questions!`;
        }

        const replyMsgDiv = document.createElement("div");
        replyMsgDiv.className = "flex gap-2";
        replyMsgDiv.innerHTML = `
          <div class="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-950/60 flex items-center justify-center font-bold text-brand-700 dark:text-brand-400 shrink-0">
            AI
          </div>
          <div class="bg-brand-50 dark:bg-brand-950/40 sepia:bg-sepia-200/50 px-3 py-2 rounded-2xl max-w-[85%] text-gray-800 dark:text-gray-200">
            ${reply}
          </div>
        `;
        logEl.appendChild(replyMsgDiv);
        logEl.scrollTop = logEl.scrollHeight;
      }, 800);
    });
  }

  // Reader Pulse Poll Event Listeners
  const pulsePollForm = document.getElementById("pulse-poll-form");
  if (pulsePollForm) {
    pulsePollForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const checked = pulsePollForm.querySelector('input[name="breakthrough-poll"]:checked');
      if (!checked) return;

      const choice = checked.value;
      localStorage.setItem("user_pulse_poll_vote", choice);

      // Transition views
      const votingView = document.getElementById("poll-voting-view");
      const resultsView = document.getElementById("poll-results-view");
      if (votingView && resultsView) {
        votingView.classList.add("hidden");
        resultsView.classList.remove("hidden");
        renderPollResults(choice);
      }
    });
  }

  const pollResetBtn = document.getElementById("poll-reset-btn");
  if (pollResetBtn) {
    pollResetBtn.addEventListener("click", () => {
      localStorage.removeItem("user_pulse_poll_vote");

      const votingView = document.getElementById("poll-voting-view");
      const resultsView = document.getElementById("poll-results-view");
      if (votingView && resultsView) {
        votingView.classList.remove("hidden");
        resultsView.classList.add("hidden");
        if (pulsePollForm) {
          pulsePollForm.reset();
        }
      }
    });
  }
}
