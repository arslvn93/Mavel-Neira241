/**
 * Centralized configuration object for website content.
 * Modifying values here will update the content across the site,
 * making it easy to adapt the template for different realtors.
 */

// Define agent details separately to avoid initialization errors
const agentDetails = {
  /** @type {string} Agent's full name (e.g., "Mike Henry"). Used widely. */
  name: "Mike Henry", // Resolved: Kept remote change
  /** @type {string} Agent's first name (e.g., "Mike"). Used in informal contexts. */
  firstName: "Mike", // Resolved: Kept remote change
  /** @type {string} Agent's professional title (e.g., "Brampton Realtor"). Used in copyright, potentially titles. */
  title: "Brampton Realtor", // Resolved: Kept remote change
  /** @type {string} Agent's professional designation (e.g., "Real Estate Sales Representative", "Broker", "Realtor"). */
  designation: "Real Estate Sales Representative", // Resolved: Kept local addition
  /** @type {string} Primary city/town served (e.g., "Brampton"). Used in descriptions, titles. */
  location: "Brampton", // Resolved: Kept remote change
  /** @type {string} Broader region served (if applicable, e.g., "Peel Region"). Used in FAQ. */
  region: "Peel Region",
  /** @type {number} Agent's years of experience. Used in About section, potentially counters. */
  experienceYears: 10,
  /** @type {string} Agent's primary contact phone number. Used in Footer, Contact forms/sidebars. */
  phone: "647-881-4044", // Resolved: Kept remote change
  /** @type {string} Agent's primary contact email address. Used in Footer, Contact forms/sidebars. */
  email: "mike.solditquick@gmail.com", // Resolved: Kept remote change
  /** @type {string} Agent's primary office address. */
  address: "276 DANFORTH AVENUE", // Resolved: Kept remote change
  /** @type {string} Name of the brokerage the agent is affiliated with. */
  brokerageName: "REAL Broker", // Resolved: Kept local addition
  /** @type {string} File path for the standard agent headshot. Relative to /public. */
  headshotImageSrc: "/images/agent/headshot.png", // Placeholder - Ensure image exists at this path
  /** @type {string} File path for the agent headshot with no background. Relative to /public. */
  headshotNoBgImageSrc: "/images/agent/headshot_no_bg.png", // Placeholder - Ensure image exists at this path
  /**
   * @description List of social media profiles for the footer.
   * @type {Array<{name: string, url: string, iconClass: string}>}
   */
  socialLinks: [
    // Provide actual URLs for the agent's profiles
    { name: "Facebook", url: "https://www.facebook.com/Mike.Henry.Realestate/", iconClass: "icon-fb" }, // Resolved: Kept remote change
    { name: "Twitter", url: "#", iconClass: "icon-X" },
    { name: "LinkedIn", url: "#", iconClass: "icon-linked" },
    { name: "Instagram", url: "http://instagram.com/mike.henry.realestate", iconClass: "icon-ins" } // Resolved: Kept remote change
  ]
};


export const siteContent = {
  /**
   * @description Core information about the individual real estate agent.
   * Used across various components like headers, footers, contact sections, etc.
   */
  agent: agentDetails, // Assign the separately defined agent object

  /**
   * @description Base templates for SEO metadata (page titles, descriptions).
   * Used in the metadata export of each page layout.
   */
  metadata: {
    /** @type {string} Text appended to page-specific titles (e.g., "| Mike Henry - Brampton Realtor"). */
    baseTitleSuffix: `| ${agentDetails.name} - ${agentDetails.title}`, // Dynamically constructed
    /** @type {string} Default site description for SEO. Concise summary of agent/service/location (~15-25 words). */
    baseDescription: `${agentDetails.name}, your trusted realtor for buying and selling homes in ${agentDetails.location}. ${agentDetails.experienceYears} years of local experience.`, // Dynamically constructed
  },

  /**
   * @description Content for the main hero section on the home page (`Hero6.jsx`).
   */
  hero: {
    /**
     * @description Content for the text/small image part of the hero slider.
     * Note: Currently simplified to use only the first item's content consistently.
     * @type {Array<{title: string, description: string, buttonText: string, smallImage: {src: string, alt: string}}>}
     */
    slides: [
      {
        /** @type {string} Main headline. Can include HTML spans for styling. (~5-10 words). */
        title: "Hero Section Headline", // Placeholder - Constructed dynamically in Hero6.jsx
        /** @type {string} Short introductory paragraph (~2-3 sentences / 150-250 chars). */
        description: "Mission: To put you in the home of your dreams as quickly as possible!", // Resolved: Kept remote change
        /** @type {string} Text for the main call-to-action button (~2-4 words). */
        buttonText: "Learn How I Can Help",
        /** @type {{src: string, alt: string}} Small image next to hero text. `src` relative to /public. */
        smallImage: { src: "/images/page-title/gallery-1.jpg", alt: "Realtor Image" } // Placeholder - Constructed dynamically in Hero6.jsx
      }
    ],
    /**
     * @description Images for the large background slider.
     * @type {Array<{src: string, alt: string}>}
     */
    mainImages: [
      // Use the separately defined agentDetails here
      { src: agentDetails.headshotImageSrc, alt: `${agentDetails.name} - ${agentDetails.title}` }, // Use agent headshot
      { src: "/images/page-title/thumbs-main-1.jpg", alt: "Stylish Living Room Interior" },
      { src: "/images/page-title/thumbs-main-2.jpg", alt: `${agentDetails.location} Community Park` } // Dynamically constructed
    ],
    /**
     * @description Images for the small pagination thumbnails.
     * @type {Array<{src: string, alt: string}>}
     */
    paginationImages: [
       { src: "/images/page-title/pagi-thumbs-1.jpg", alt: "Keys Exchange" },
       { src: "/images/page-title/pagi-thumbs-2.jpg", alt: `${agentDetails.location} Real Estate Icon` }, // Dynamically constructed
       { src: "/images/page-title/pagi-thumbs-3.jpg", alt: "Abstract Texture" }
    ],
    /** @type {string} Label for the first counter below hero text. */
    counter1Label: "Happy Clients", // Odometer component uses its own 'max' prop for the number.
    /** @type {string} Label for the second counter below hero text. */
    counter2Label: `Years in ${agentDetails.location}`, // Dynamically construct the label
    /** @type {string} Placeholder text for the search input in the hero (~4-6 words). */
    searchPlaceholder: `Interested in ${agentDetails.location} Real Estate?`, // Dynamically construct the placeholder
    /** @type {string} Text for the search button in the hero (~1-3 words). */
    searchButtonText: "Get Started Today"
  },

  /**
   * @description Content for the main "About" section on the home page (`About6.jsx`).
   */
  about: {
    /** @type {string} Main heading for the section (~5-8 words). */
    sectionTitle: `Experience and Dedication in ${agentDetails.location} Real Estate`, // Dynamically constructed
    /** @type {string} Detailed introduction to the agent (first person, ~3-5 sentences / 300-500 chars). */
    mainParagraph: `With ${agentDetails.experienceYears} years of dedicated experience in the ${agentDetails.location} market, I offer unparalleled local knowledge and a commitment to achieving your real estate goals. My client-first approach ensures clear communication and a seamless process whether you're buying or selling.`, // Dynamically constructed example
    /** @type {string} Label for the phone number link. */
    callLabel: "Call Agent", // Placeholder - Constructed dynamically in About6.jsx
    /** @type {string} Label for the email link. */
    helpLabel: "Need Help?",
    /** @type {string} Text for the "Learn More" button. */
    moreButtonText: "Learn More About Agent", // Placeholder - Constructed dynamically in About6.jsx
    /** @type {string} Heading for the list of services/expertise. */
    expertiseTitle: "My Expertise:",
    /** @type {string} Introductory sentence before the expertise list (~1 sentence / 80-120 chars). */
    expertiseIntro: `I offer specialized real estate services tailored to the ${agentDetails.location} market:`, // Dynamically constructed
    /** @type {string[]} List of key service areas (~3-5 items, ~2-4 words each). */
    expertiseItems: [
      "Residential Sales and Leasing",
      "Commercial Real Estate",
      "Property Management",
      "Investment Advisory"
    ],
    /** @type {string} Path for the larger image in this section. Relative to /public. */
    image1Src: "/images/section/section-find-home-2.jpg",
    /** @type {string} Path for the smaller image in this section. Relative to /public. */
    image2Src: "/images/section/section-find-home.jpg",
  },

  /**
   * @description Content for the "Services" section on the home page (`Services6.jsx`).
   */
  services: {
    /** @type {string} Main heading for the section (~4-6 words). */
    sectionTitle: "Client-Focused Real Estate Services",
    /** @type {string} Description elaborating on service philosophy (~2-3 sentences / 150-250 chars). */
    introParagraph: `My focus is on providing exceptional, personalized service to every client. I leverage my ${agentDetails.experienceYears} years of ${agentDetails.location} market knowledge to ensure you make informed decisions and achieve the best possible outcome.`, // Dynamically constructed
    /** @type {string} Text for the button at the bottom of the section. */
    buttonText: "Explore My Services",
    /**
     * @description Details for each service displayed in the slider.
     * @type {Array<{id: number, icon: string, title: string, description: string, imageSrc: string, delay: string}>}
     */
    items: [
      // Guidance: Provide concise title (2-4 words) & description (1 sentence / ~100-150 chars) for ~3 key services.
      { id: 1, icon: "icon-house-2", title: "Residential Sales and Leasing", description: "Assisting clients in buying, selling, and leasing residential properties such as houses, apartments, and condominiums", imageSrc: "/images/section/service-1.jpg", delay: "0.1s" },
      { id: 2, icon: "icon-house-3", title: "Commercial Real Estate Services", description: "Facilitating transactions related to commercial properties such as office buildings, retail spaces, industrial warehouses, land for development", imageSrc: "/images/section/service-2.jpg", delay: "0.2s" },
      { id: 3, icon: "icon-house-4", title: "Property Management", description: "Managing properties on behalf of owners, including tenant screening, rent collection, maintenance, and financial reporting", imageSrc: "/images/section/service-3.jpg", delay: "0.3s" }
    ]
  },

  /**
   * @description Content for the section featuring the agent (formerly "Team" section) (`Team6.jsx`).
   */
  aboutMike: {
    /** @type {string} Main heading for the section. */
    sectionTitle: "About The Agent", // Placeholder - Constructed dynamically in Team6.jsx
    /** @type {string} Short introductory text below the heading (~1 sentence / 50-100 chars). */
    description: `Your trusted guide for buying and selling in ${agentDetails.location}.`, // Dynamically constructed
    /** @type {string} Text displayed below the agent's name in the slider card (~5-8 words). */
    agentDescription: `Your ${agentDetails.location} Realtor - ${agentDetails.experienceYears} Years Experience`, // Dynamically constructed
    /** @type {string} Text for the button at the bottom. */
    buttonText: "Learn About My Approach"
    // Note: Team6.jsx component now uses siteContent.agent directly for name/image.
  },

  /**
   * @description Content for the "Success Stories" section (formerly "Projects") (`Projects6.jsx`).
   */
  projects: {
    /** @type {string} Main heading for the section. */
    sectionTitle: `${agentDetails.firstName}'s Client Success Stories`, // Dynamically constructed
    /** @type {string} Introductory text (~1-2 sentences / 100-200 chars). */
    introParagraph: `See examples of how I've helped clients achieve their real estate goals in ${agentDetails.location}, delivering exceptional results with personalized service.`, // Dynamically constructed
    /** @type {string[]} Placeholder titles for the grid items (~12 items, ~3-6 words each). */
    // Dynamically update story titles containing {Location}
    storyTitles: [
      `Successful ${agentDetails.location} Home Purchase`, "Investment Property Secured", "Achieving Top Market Value", "Expert Negotiation Skills", "Client Success Story #5",
      `Seamless Property Sale in ${agentDetails.location}`, "Navigating a Complex Transaction", "Relocation Made Easy", "Client Success Story #9", "Client Success Story #10",
      "First-Time Buyer Guidance", "Client Success Story #12"
    ],
    /** @type {string} Text displayed in the "empty" grid item (~1 sentence / 50-100 chars). */
    emptyBoxText: "Let me help you write your own success story.",
    /** @type {string} Text for the button within the "empty" grid item. */
    buttonText: "View Success Stories",
    /** @type {string} The URL path that the success story items link to. */
    linkTarget: "/contact"
  },

  /**
   * @description Content for the "Testimonials" section (`Testimonials6.jsx`).
   */
  testimonials: {
    /** @type {string} Main heading for the section. */
    sectionTitle: "What My Clients Say",
    /** @type {string} Introductory text (~1-2 sentences / 100-200 chars). */
    introParagraph: `Building trust and achieving results for my clients in ${agentDetails.location} is my top priority. Hear directly from those I've had the pleasure of working with.`, // Dynamically constructed
    /**
     * @description Content for each testimonial slide.
     * @type {Array<{id: number, description: string, avatar: string, name: string, role: string}>}
     */
    items: [
      // Guidance: Provide 3 genuine-sounding testimonials (~2-4 sentences / 150-300 chars each). Use placeholder avatar paths.
      { id: 1, description: `${agentDetails.name} made buying our first home in ${agentDetails.location} so easy! His knowledge and patience were invaluable. Highly recommended!`, avatar: "/images/avatar/testimonials-3.jpg", name: "Sarah & Tom P.", role: `First-Time Homebuyers, ${agentDetails.location}` }, // Dynamically constructed
      { id: 2, description: `Selling our house with ${agentDetails.firstName} was a great experience. He got us a fantastic price and handled everything professionally. Thanks, ${agentDetails.firstName}!`, avatar: "/images/avatar/testimonials-2.jpg", name: "David R.", role: `Home Seller, ${agentDetails.location}` }, // Dynamically constructed
      { id: 3, description: `As an investor, I rely on ${agentDetails.firstName}'s expertise of the ${agentDetails.location} market. He consistently finds great opportunities. A true professional.`, avatar: "/images/avatar/testimonials-4.jpg", name: "Priya K.", role: "Real Estate Investor" } // Dynamically constructed
    ]
  },

  /**
   * @description Content related to blog sections and components.
   */
  blog: {
    /** @type {string} Heading for the blog section on the home page (`Blogs6.jsx`). */
    sectionTitle: `${agentDetails.firstName}'s ${agentDetails.location} Market Insights`, // Dynamically constructed
    /** @type {string} Introductory text for the home page blog section (~1 sentence / 80-120 chars). */
    introParagraph: `Stay informed with the latest news, tips, and trends relevant to the ${agentDetails.location} real estate market.`, // Dynamically constructed
    /** @type {string} Title used on the main blog grid page (`Blogs2.jsx`). */
    gridTitle: `${agentDetails.name}'s Blog`, // Dynamically constructed
    /** @type {string} Author name displayed on blog detail pages (`BlogDetails.jsx`). */
    detailAuthor: agentDetails.name, // Use dynamic value
    /** @type {string} Heading for the related posts section (`RelatedBlogs.jsx`). */
    relatedTitle: `More Articles by ${agentDetails.firstName}`, // Dynamically constructed
    /** @type {string} Heading for the newsletter signup in the blog sidebar (`BlogDetails.jsx`). */
    newsletterTitle: "Join My Newsletter",
    /** @type {string} Text encouraging newsletter signups (~1 sentence / 80-150 chars). */
    newsletterDescription: `Sign up to receive ${agentDetails.location} market insights and tips directly from ${agentDetails.name}.`, // Dynamically constructed
    /**
     * @description Content for blog post previews/listings. Used by `Blogs6.jsx`, `Blogs2.jsx`, `RelatedBlogs.jsx`.
     * @type {Array<{id: number, imageSrc: string, alt: string, tag: string, date: string, title: string, description: string}>}
     */
    // Dynamically update blog post placeholders
    posts: [
    { id: 4, imageSrc: "/images/blog/blog-grid-1.jpg", alt: `Etobicoke neighbourhood`, tag: "Buying Tips", date: "June 1, 2025", title: `5 Tips for First-Time Homebuyers in Etobicoke`, description: `Navigate Etobicoke's buyer-friendly market with insider strategies on government programs, neighborhood selection, and building your expert team for homeownership success`},
    { id: 5, imageSrc: "/images/blog/blog-grid-2.jpg", alt: "Condo building", tag: "Market Update", date: "June 1, 2025", title: `Understanding Etobicoke's Condo Market Trends`, description: `Discover why Etobicoke condos offer $90,000+ savings compared to downtown Toronto, plus essential insights on maintenance fees, neighborhoods, and investment potential in today's market.` },
    { id: 6, imageSrc: "/images/blog/blog-grid-3.jpg", alt: "House exterior", tag: "Selling Tips", date: "June 6, 2025", title: `How to Prepare Your Etobicoke Home for a Quick Sale`, description: `Transform your property into a buyer magnet with proven staging techniques, strategic pricing, and professional presentation strategies that sell homes in 28-36 days.` }
    ],
    postDetails: [
      {
        id: 4,
        paragraph1: "Ready to make Etobicoke your home? This vibrant Toronto community offers the perfect blend of lakefront living and urban convenience, making it an ideal launching pad for your homeownership journey.",
        paragraph2: "With home prices averaging $1.04-$1.24 million compared to Toronto's $1.16 million average, Etobicoke delivers exceptional value while keeping you connected to everything the GTA has to offer.\n\nThe current market strongly favors buyers like you, with 42% more inventory available and homes selling closer to asking price than in recent years. This means more choice, better negotiating power, and time to find the perfect fit. Plus, with the Bank of Canada's seven consecutive rate cuts bringing borrowing costs down, your buying power has significantly improved.",
        quote: "Let's dive into five essential strategies that'll help you navigate Etobicoke's market with confidence.",
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: "Maximize your down payment power with smart government programs.\n\nYour government wants to help you succeed, and 2024 brought game-changing improvements to first-time buyer programs. The Home Buyers' Plan now allows you to withdraw up to $60,000 from your RRSP (up from $35,000), giving you substantially more buying power. Combined with the new First Home Savings Account offering $40,000 in lifetime contributions with full tax benefits, you could potentially access $100,000 in tax-advantaged funds.",
        paragraph4: "In Toronto, you'll also benefit from generous land transfer tax rebates totaling up to $8,475 when you combine provincial and municipal rebates. For a typical Etobicoke condo around $550,000, this rebate covers your entire land transfer tax burden. Remember, these programs are one-time opportunities, so understanding exactly how they work ensures you maximize every dollar available.\n\nThe key is planning ahead. Your RRSP funds must sit for 90 days before withdrawal, and FHSA contributions are tax-deductible in the year you make them. Start these accounts early to build your down payment while reducing your tax bill.",
        quote2: "Choose your Etobicoke neighborhood strategically.",
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: "Etobicoke isn't just one market – it's a collection of distinct communities, each offering different lifestyles and price points. Understanding these differences helps you find the perfect match for your budget and priorities.\n\nFor budget-conscious buyers, Long Branch and Mimico offer incredible lakefront access with GO Transit connectivity to downtown in just 15-20 minutes. These areas feature a mix of condos starting around $500,000 and detached homes averaging $976,000-$1.24 million. You'll enjoy small-town charm with big-city convenience, plus ongoing development that's enhancing property values.\n\nIf you're seeking prestige and established amenities, The Kingsway delivers tree-lined streets and Tudor-style architecture, though prices reflect this premium location. For the best of both worlds, consider Islington or central Etobicoke areas where you'll find excellent TTC access, reasonable pricing, and strong community infrastructure including top-rated schools and recreational facilities.\n\nEach neighborhood offers unique advantages, from Humber Bay's waterfront condos to Alderwood's family-friendly streets. Your choice should align with your commute, lifestyle preferences, and long-term plans rather than just price alone."
      },
      {
        id: 5,
        paragraph1: "Etobicoke's condo market is experiencing a fascinating transformation that creates both challenges and opportunities for savvy buyers. With average condo prices sitting $90,000 below downtown Toronto levels and a dramatic shift toward buyer-friendly conditions, understanding these trends helps you make informed decisions in one of the GTA's most dynamic markets.",
        paragraph2: "Current data reveals Etobicoke condos averaging $535,000-$683,000 compared to Toronto's $726,000-$770,000 range, representing exceptional value for lakefront and transit-connected living. However, the market has seen a 24% decline in condo sales year-over-year, creating a unique environment where prepared buyers have unprecedented choice and negotiating power.",
        quote: "Let's explore what these trends mean for your condo buying journey and how to capitalize on current conditions.",
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: "Market fundamentals show clear buyer advantages.\n\nThe numbers tell a compelling story of opportunity. Etobicoke condos are spending an average of 36 days on market compared to just 15 days in early 2023, giving you time to carefully evaluate options without the frantic bidding wars of recent years. Properties are selling at 99% of asking price, meaning realistic pricing has become essential for sellers.",
        paragraph4: "This shift reflects broader market dynamics including higher inventory levels – up 71% compared to 2023 – and changing buyer behavior. The stress of competitive bidding has been replaced by thoughtful evaluation and negotiation, allowing you to make conditional offers for financing and inspections that protect your interests.\n\nGeographic variations within Etobicoke create different opportunities. Humber Bay Shores commands premium prices for waterfront views but offers resort-style living with world-class amenities. Islington and central areas provide excellent value with strong transit connections, while emerging areas like Six Points (downtown Etobicoke) feature 35+ new towers approved or under construction, suggesting significant future development.",
        quote2: "Understanding maintenance fees and long-term costs.",
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: "One of the biggest condo considerations involves ongoing monthly fees, which in Etobicoke typically range from $420-$900 for a 700-square-foot unit. These fees aren't just expenses – they're investments in your building's long-term health and your quality of life.\n\nWell-managed buildings with reasonable fees often provide better value than those with suspiciously low costs. A building with $525 monthly fees that includes heat, water, and excellent amenities offers better value than one with $350 fees that will require special assessments for deferred maintenance.\n\nReserve fund studies reveal a building's true financial health. Look for buildings with adequate reserves (typically 25-30% of the annual budget) and recent comprehensive studies. Red flags include multiple special assessments, negative reserve fund balances, or fees significantly above or below neighborhood averages.\n\nConsider the total cost of ownership when comparing condos to houses. While your monthly fees might seem high, they replace many homeownership costs like snow removal, landscaping, exterior maintenance, and often major utilities. For many first-time buyers, the predictable monthly cost provides better budget certainty than the variable expenses of house ownership."
      },
      {
        id: 6,
        paragraph1: "Selling your Etobicoke home in today's market requires a completely different approach than the frenzied bidding wars of recent years. With homes now taking an average of 28-36 days to sell and properties moving at 99% of asking price, success depends on professional presentation, strategic pricing, and understanding what today's buyers actually want.",
        paragraph2: "The good news? Properly prepared homes still sell quickly and for strong prices, even in this more balanced market. The key is adapting to current conditions where buyers have more choice, take time for careful evaluation, and expect excellent value for their investment. Smart sellers who understand these dynamics consistently outperform those clinging to outdated strategies.",
        quote: "Here's your complete guide to positioning your Etobicoke property for maximum appeal and fastest sale in 2024-2025 market conditions.",
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: "Master the art of strategic pricing.\n\nIn today's market, pricing accuracy determines everything. Overpriced homes sit on the market and eventually sell for less than properties priced correctly from day one. Buyers now have time to compare multiple options, and overpriced listings quickly become stale inventory that raises questions about underlying problems.\n\nStart with a comprehensive market analysis of recent sales in your immediate area, not just Etobicoke broadly. A Humber Bay waterfront condo commands different pricing than a similar unit in Islington, even though both are technically \"Etobicoke condos.\" Look at properties that sold within the past 90 days, particularly those with similar features, sizes, and conditions.",
        paragraph4: "Consider the absorption rate in your specific neighborhood and property type. If similar homes are taking 35+ days to sell, price aggressively to generate immediate interest. A home priced 3-5% below comparable recent sales often sells quickly and for more than an overpriced listing that sits for months before eventual price reductions.\n\nRemember that motivated buyers still exist – they're just more selective. Price to attract these buyers while leaving minimal room for excessive negotiation. The goal is quick sale at fair market value, not maximum possible price after months of market exposure.",
        quote2: "Create irresistible visual appeal through professional staging.",
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: "91% of professionally staged homes sell within one month, making staging investment rather than expense in today's competitive inventory environment. Etobicoke buyers expect move-in ready properties, and staging helps them envision their lifestyle in your space.\n\nFor condos, space maximization becomes critical. Remove 30-50% of your furniture to make rooms appear larger, and choose appropriately scaled pieces that don't overwhelm smaller spaces. Replace oversized furniture with sleek, streamlined alternatives, and eliminate anything that blocks natural light or makes spaces feel cramped.\n\nHouse staging focuses on highlighting your property's best features while creating clear traffic flow throughout rooms. Arrange furniture to showcase architectural elements like fireplaces, built-ins, or high ceilings, and ensure easy access to windows and views. Use neutral color schemes – light greys, beiges, and greiges – that appeal to the broadest range of buyers.\n\nProfessional staging companies understand current buyer preferences and have furniture inventory specifically designed for showing homes. The investment typically ranges from $2,000-$5,000 but often returns 3-6% higher sale prices and significantly faster sales times."
      }
    ],
    /** @type {string} Title for the ad in the blog detail sidebar. */
    sidebarAdTitle: `Ready to Buy or Sell in ${agentDetails.location}?`, // Dynamically constructed
    /** @type {string} Description for the ad in the blog detail sidebar. */
    sidebarAdText: `Connect with ${agentDetails.name} - I know the market inside out and can help you achieve your goals.`, // Dynamically constructed
    /** @type {string} Button text for the ad in the blog detail sidebar. */
    sidebarAdButton: "Contact Agent", // Placeholder - Constructed dynamically in BlogDetails.jsx
  },

  /**
   * @description Content for the FAQ page (`Faqs.jsx`).
   */
  faq: {
    /** @type {string} Main heading for the FAQ page content area. */
    pageTitle: "Frequently Asked Questions",
    /** @type {string} Heading in the final contact box at the bottom of the FAQ list. */
    contactBoxQuestion: "Still have questions?",
    /** @type {string} Text in the final contact box. */
    contactBoxText: "Can't find the answer you're looking for? Please get in touch.",
    /** @type {string} Title for the contact form in the sidebar. */
    sidebarContactTitle: "Contact Agent", // Placeholder - Constructed dynamically in Faqs.jsx
    /**
     * @description Defines the structure and content for the FAQ accordion.
     * @type {Array<{title: string, idPrefix: string, questions: Array<{id: string, question: string, answer: string}>}>}
     */
    categories: [
      // Guidance: Organize Q&A into 2-3 logical categories. Answers should be informative (~2-4 sentences / 150-300 chars).
      {
        title: "About The Agent & Services", // Placeholder
        idPrefix: "faq-serv", // Unique prefix for accordion targeting
        questions: [
          { id: "faq-q1", question: "What areas do you specialize in?", answer: `I specialize in residential real estate throughout ${agentDetails.location} and the surrounding ${agentDetails.region}. With ${agentDetails.experienceYears} years focused specifically on this area, I have deep knowledge of its diverse neighbourhoods and market dynamics.` }, // Dynamically constructed
          { id: "faq-q2", question: "What services do you offer for buyers?", answer: "I provide comprehensive support for buyers, including personalized property searches based on your needs, market analysis, expert negotiation, guidance through inspections and financing, and ensuring a smooth closing process." },
          { id: "faq-q3", question: "How do you help home sellers?", answer: "For sellers, I offer strategic pricing analysis, professional home staging advice, targeted marketing campaigns across multiple platforms, skilled negotiation to get you the best price, and management of the entire selling process from listing to closing." },
          { id: "faq-q4", question: "What makes you different from other realtors?", answer: `My ${agentDetails.experienceYears} years of dedicated experience in ${agentDetails.location}, combined with a client-first approach built on communication and trust, sets me apart. I'm committed to providing personalized service and achieving outstanding results for every client I work with.` } // Dynamically constructed
        ]
      },
      {
        title: "The Process & Fees",
        idPrefix: "faq-proc",
        questions: [
          { id: "faq-q5", question: "What are your commission fees?", answer: "Real estate commissions are typically paid by the seller and can vary depending on the specifics of the transaction. I believe in full transparency and will discuss all fees and services clearly during our initial consultation." },
          { id: "faq-q6", question: "What should I expect during the closing process?", answer: "The closing process involves the final transfer of ownership. Key steps include a final walkthrough of the property, signing legal documents (often with a lawyer), transferring funds, and receiving the keys. I will guide you through each step to ensure everything proceeds smoothly and on schedule." }
        ]
      },
      {
        title: "Getting Started",
        idPrefix: "faq-start",
        questions: [
          { id: "faq-q7", question: "How do I get started working with you?", answer: `The best way to start is by scheduling a free, no-obligation consultation. We can discuss your specific needs, goals, and how I can best assist you in the ${agentDetails.location} real estate market. Use the contact form on this page or call me directly!` } // Dynamically constructed
        ]
      }
    ]
  },

  /**
   * @description Content specific to the main Contact page (`Contact.jsx`, `About.jsx` [contact version]).
   */
  contactPage: {
    /** @type {string} Heading above the main contact form. */
    formTitle: "I Would Love to Hear From You",
    /** @type {string} Text below the contact form heading. */
    formDescription: "Tell me about your goals, and I'll explain how I can help you achieve them.",
    /** @type {string} Text for the submit button on the main contact form. */
    formButtonText: "Send Agent a Message", // Placeholder - Constructed dynamically in Contact.jsx / Contact6.jsx
    /** @type {string} Heading in the secondary section on the contact page. */
    aboutTitle: `Providing the most suitable and quality real estate guidance in ${agentDetails.location}.`, // Dynamically constructed
    /** @type {string} Text below the secondary heading on the contact page. */
    aboutDescription: "Ready to take the next step? Contact me today for a personalized consultation."
  },

  /**
   * @description Content specific to the Home Loan Process page (`Facts.jsx`, `Process.jsx`, `LoanCalculator.jsx`).
   */
  loanProcess: {
    /** @type {string} Heading for the "Facts" section. */
    factsTitle: "I Am Here to Help",
    /** @type {string} First paragraph in the "Facts" section. */
    factsDescription1: "The home loan process can feel overwhelming, but I will help you stay informed throughout, from pre-approval to closing. The first step is consulting with a mortgage specialist. If you don't have one, I partner with some of the best lenders in the industry and would be happy to introduce you.",
    /** @type {string} Second paragraph in the "Facts" section. */
    factsDescription2: `I stand ready to serve you as your dedicated ${agentDetails.location} real estate agent.`, // Dynamically constructed
    /** @type {string} Button text in the "Facts" section. */
    factsButtonText: "About The Agent", // Placeholder - Constructed dynamically in LoanProcess/Facts.jsx
    /** @type {string} Label for the first counter in the "Facts" section. */
    factsCounter1Label: "Clients Served",
    /** @type {string} Label for the second counter (uses agent.experienceYears for value). */
    factsCounter2Label: "Years Experience",
    /** @type {string} Label for the third counter. */
    factsCounter3Label: "Properties Sold",
    /** @type {string} Heading for the "Process" section. */
    processTitle: `Selling Your Home With ${agentDetails.name}`, // Dynamically constructed
    /** @type {string} Introductory text for the "Process" section. */
    processDescription: "I'll get to know you to understand your selling goals, and explain the selling process so you know what to expect.",
    /** @type {string} Text used below each of the 3 process steps. */
    processStepDescription: "Your responses will help connect you with the right resources. Shortly after your lender is selected, they’ll contact you to discuss options for financing your future home.",
    /** @type {string} Heading for the "Loan Calculator" section. */
    calculatorTitle: "Calculate Mortgage Payments",
    /** @type {string} Text below the calculator heading. */
    calculatorDescription: "Estimate your payment with this easy-to-use loan calculator. Then, let me connect you with a trusted local lender for pre-qualification."
  },

  /**
   * @description Content for the 404 Not Found page (`not-found.jsx`).
   */
  notFound: {
    /** @type {string} The main message displayed. Can include HTML `<br />`. */
    message: "I searched everywhere but couldn’t find what you’re looking for. Let’s find <br />a better place for you to go."
  },

  /**
   * @description Content for common components used across multiple pages.
   */
  common: {
    /** @type {string} Title for the main Call To Action component (`Cta.jsx`). */
    ctaTitle: `Looking for a ${agentDetails.location} Real Estate Expert?`, // Dynamically constructed
    /** @type {string} Description for the main CTA component. */
    ctaDescription: "Whether you're buying or selling, I'll help you achieve the best possible outcome.",
    /** @type {string} Button text for the main CTA component. */
    ctaButtonText: "Contact Agent Today", // Placeholder - Constructed dynamically in Cta.jsx
    /** @type {string} Title for the Brands/Partners section (`Brands.jsx`). */
    brandsTitle: "Let’s Work Together",
    /** @type {string} Description for the Brands/Partners section. */
    brandsDescription: "Let's discuss how my expertise can help you achieve your real estate goals."
  }
};