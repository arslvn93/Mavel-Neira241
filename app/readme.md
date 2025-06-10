# Website Content Configuration Report (`siteContent.js`)

**Objective:** This document details the structure and purpose of the `new_app/data/siteContent.js` file. It serves as a guide for an AI coding agent to understand how to populate or modify this file to generate website content for different individual real estate agents.

**File Purpose:** `siteContent.js` centralizes customizable text and data for the website template located in the `new_app` directory. By modifying the values within the exported `siteContent` object, the website's content can be easily adapted for a new realtor without needing to change individual component code.

**General Guidelines for AI Content Generation:**
*   Maintain a professional, trustworthy, and client-focused tone.
*   Incorporate the specific agent's details (name, location, experience) naturally into descriptions and titles where placeholders (`{agentName}`, `{location}`, `{experienceYears}`) are used or implied.
*   Keep text concise and scannable. Use suggested lengths as guidelines.
*   Ensure generated content (especially for blogs, testimonials, FAQs) is relevant to residential real estate and the target location (e.g., Brampton).
*   Avoid overly technical jargon unless appropriate for the specific section (e.g., Loan Process).

---

## `siteContent` Object Structure:

```javascript
export const siteContent = {
  // ... object properties detailed below ...
};
```

### 1. `agent` Object
*Purpose:* Stores core information about the individual real estate agent.

*   **`name`**: (String) Full name of the agent.
    *   *Usage:* Headers, titles, contact sections, copyright, descriptions.
    *   *Guidance:* Use the provided agent name (e.g., "Mike Henry"). (Length: ~2-4 words)
*   **`title`**: (String) Agent's professional title.
    *   *Usage:* Copyright, potentially page titles/metadata.
    *   *Guidance:* e.g., "Brampton Realtor", "Real Estate Agent". (Length: ~2-3 words)
*   **`location`**: (String) Primary city/town the agent serves.
    *   *Usage:* Incorporated into various descriptions, titles, metadata.
    *   *Guidance:* e.g., "Brampton". (Length: ~1-2 words)
*   **`region`**: (String) Broader region served (if applicable).
    *   *Usage:* FAQ answer about specialization.
    *   *Guidance:* e.g., "Peel Region". (Length: ~1-3 words)
*   **`experienceYears`**: (Number) Agent's years of experience.
    *   *Usage:* About section, potentially hero counters, descriptions.
    *   *Guidance:* e.g., `10`.
*   **`phone`**: (String) Agent's primary contact phone number.
    *   *Usage:* Footer contact info, sidebar contact info.
    *   *Guidance:* Use standard phone format (e.g., "1-555-123-4567").
*   **`email`**: (String) Agent's primary contact email address.
    *   *Usage:* Footer contact info, sidebar contact info.
    *   *Guidance:* Use standard email format (e.g., "agent.name@example.com").
*   **`aboutImageSrc`**: (String) File path for the main image used in the "About [Agent Name]" section (formerly Team section).
    *   *Usage:* `Team6.jsx`.
    *   *Guidance:* Path relative to the `public` directory (e.g., `/images/agents/mike_henry_main.jpg`). Use placeholder `/images/section/agent-item-16.jpg` if no specific image is provided.
*   **`sidebarImageSrc`**: (String) File path for the smaller image used in sidebar contact forms (e.g., on FAQ page).
    *   *Usage:* `Faqs.jsx`.
    *   *Guidance:* Path relative to the `public` directory (e.g., `/images/agents/mike_henry_sidebar.jpg`). Use placeholder `/images/avatar/seller.jpg` if no specific image is provided.
*   **`socialLinks`**: (Array of Objects) List of social media profiles.
    *   *Usage:* Footer social media links (`Footer2.jsx`).
    *   *Structure:* `[{ name: "PlatformName", url: "ProfileURL", iconClass: "icon-css-class" }, ...]`
    *   *Guidance:* Provide actual profile URLs. Keep `iconClass` values as found in the original template (`icon-fb`, `icon-X`, `icon-linked`, `icon-ins`). (Array length: ~2-5 links)

### 2. `metadata` Object
*Purpose:* Defines base templates for page titles and descriptions for SEO.

*   **`baseTitleSuffix`**: (String) Text appended to page-specific titles.
    *   *Usage:* Used in `metadata` exports in page files.
    *   *Guidance:* e.g., "| Mike Henry - Brampton Realtor". (Length: ~4-6 words)
*   **`baseDescription`**: (String) Default site description, used on the home page and potentially as a fallback.
    *   *Usage:* Used in `metadata` exports in page files.
    *   *Guidance:* Concise summary of the agent's service and location. (Length: ~15-25 words / 150-160 chars)

### 3. `hero` Object
*Purpose:* Content for the main hero section on the home page (`Hero6.jsx`).

*   **`slides`**: (Array of Objects) Content for the text/small image part of the hero slider. *Currently simplified to use only the first item's content consistently across slides.*
    *   `title`: (String) Main headline. Can include HTML `<span>` for styling.
        *   *Guidance:* Compelling headline featuring agent name and location. (Length: ~5-10 words)
    *   `description`: (String) Short introductory paragraph.
        *   *Guidance:* Briefly introduce the agent, experience, and value proposition. (Length: ~2-3 sentences / 150-250 chars)
    *   `buttonText`: (String) Text for the main call-to-action button.
        *   *Guidance:* Action-oriented, e.g., "Learn How I Can Help", "Schedule Consultation". (Length: ~2-4 words)
    *   `smallImage`: (Object) Contains `src` (String: path relative to `public`) and `alt` (String) for the small image next to the text.
        *   *Guidance:* Use a professional headshot or relevant graphic. Alt text should be descriptive.
*   **`mainImages`**: (Array of Objects) Images for the large background slider.
    *   *Structure:* `[{ src: "path", alt: "description" }, ...]`
    *   *Guidance:* Use high-quality images of local homes, interiors, or community scenes relevant to Brampton. Provide descriptive alt text. (Array length: ~3 images)
*   **`paginationImages`**: (Array of Objects) Images for the small pagination thumbnails below the hero text.
    *   *Structure:* `[{ src: "path", alt: "description" }, ...]`
    *   *Guidance:* Use relevant small images or icons (keys, map icons, textures). Provide descriptive alt text. (Array length: ~3 images)
*   **`counter1Label`**: (String) Label for the first counter (e.g., Happy Clients).
*   **`counter2Label`**: (String) Label for the second counter (e.g., Years in Brampton).
*   **`searchPlaceholder`**: (String) Placeholder text for the search input in the hero.
    *   *Guidance:* Keep it relevant to real estate interest, avoid promising specific search functionality if not present. (Length: ~4-6 words)
*   **`searchButtonText`**: (String) Text for the search button in the hero.
    *   *Guidance:* Action-oriented, e.g., "Get Started Today", "Explore". (Length: ~1-3 words)

### 4. `about` Object
*Purpose:* Content for the main "About" section on the home page (`About6.jsx`).

*   **`sectionTitle`**: (String) Main heading for the section.
    *   *Guidance:* Focus on the agent's value proposition. (Length: ~5-8 words)
*   **`mainParagraph`**: (String) Detailed introduction to the agent.
    *   *Guidance:* Write in the first person ("I'm Mike Henry..."). Include experience, location focus, approach, and commitment. (Length: ~3-5 sentences / 300-500 chars)
*   **`callLabel`**: (String) Label for the phone number link.
    *   *Guidance:* e.g., "Call Mike", "Direct Line".
*   **`helpLabel`**: (String) Label for the email link.
    *   *Guidance:* e.g., "Need Help?", "Email Me".
*   **`moreButtonText`**: (String) Text for the "Learn More" button.
    *   *Guidance:* e.g., "Learn More About Mike", "My Approach".
*   **`expertiseTitle`**: (String) Heading for the list of services/expertise.
    *   *Guidance:* e.g., "My Expertise:", "Areas of Focus:".
*   **`expertiseIntro`**: (String) Introductory sentence before the list.
    *   *Guidance:* e.g., "I offer specialized real estate services tailored to the Brampton market:". (Length: ~1 sentence / 80-120 chars)
*   **`expertiseItems`**: (Array of Strings) List of key service areas.
    *   *Usage:* Displayed as a bulleted list.
    *   *Guidance:* List 3-5 core services relevant to the agent. (Each item: ~2-4 words)
*   **`image1Src`**: (String) Path for the larger image in this section.
*   **`image2Src`**: (String) Path for the smaller image in this section.

### 5. `services` Object
*Purpose:* Content for the "Services" section on the home page (`Services6.jsx`).

*   **`sectionTitle`**: (String) Main heading for the section.
    *   *Guidance:* e.g., "Client-Focused Real Estate Services", "How I Help Clients". (Length: ~4-6 words)
*   **`introParagraph`**: (String) Description elaborating on the agent's service philosophy.
    *   *Guidance:* Focus on personalization, market knowledge, client outcomes. (Length: ~2-3 sentences / 150-250 chars)
*   **`buttonText`**: (String) Text for the button at the bottom of the section.
    *   *Guidance:* e.g., "Explore My Services", "See How I Work".
*   **`items`**: (Array of Objects) Details for each service displayed in the slider.
    *   *Structure:* `[{ id, icon, title, description, imageSrc, delay }, ...]`
    *   *Guidance:* Provide a concise `title` (2-4 words) and `description` (1 sentence / ~100-150 chars) for each key service (likely 3). Keep `icon` class names and `imageSrc` paths relevant.

### 6. `aboutMike` Object
*Purpose:* Content for the section featuring the agent (formerly "Team" section) (`Team6.jsx`).

*   **`sectionTitle`**: (String) Main heading.
    *   *Guidance:* e.g., "About Mike Henry", "Your Brampton Expert".
*   **`description`**: (String) Short introductory text below the heading.
    *   *Guidance:* Brief, benefit-oriented statement. (Length: ~1 sentence / 50-100 chars)
*   **`agentDescription`**: (String) Text displayed below the agent's name in the slider card.
    *   *Guidance:* Short title/summary. (e.g., "Your Brampton Realtor - 10 Years Experience"). (Length: ~5-8 words)
*   **`buttonText`**: (String) Text for the button at the bottom.
    *   *Guidance:* e.g., "Learn About My Approach", "Get In Touch".

### 7. `projects` Object
*Purpose:* Content for the "Success Stories" section (formerly "Projects") (`Projects6.jsx`).

*   **`sectionTitle`**: (String) Main heading for the section.
    *   *Guidance:* e.g., "Mike Henry's Client Success Stories", "Proven Results in Brampton".
*   **`introParagraph`**: (String) Introductory text.
    *   *Guidance:* Briefly explain the purpose of showcasing past successes. (Length: ~1-2 sentences / 100-200 chars)
*   **`storyTitles`**: (Array of Strings) Placeholder titles for the grid items.
    *   *Guidance:* Provide ~12 descriptive placeholder titles representing different types of successful transactions (buying, selling, investment, complex deals, etc.). (Each title: ~3-6 words)
*   **`emptyBoxText`**: (String) Text displayed in the "empty" grid item.
    *   *Guidance:* A call to action or inviting message. (Length: ~1 sentence / 50-100 chars)
*   **`buttonText`**: (String) Text for the button within the "empty" grid item.
    *   *Guidance:* e.g., "Share Your Story", "Become a Success Story".
*   **`linkTarget`**: (String) The URL path that the success story items link to.
    *   *Guidance:* Currently `/contact`. Could be changed later if a dedicated page is created.

### 8. `testimonials` Object
*Purpose:* Content for the "Testimonials" section (`Testimonials6.jsx`).

*   **`sectionTitle`**: (String) Main heading.
    *   *Guidance:* e.g., "What My Clients Say", "Client Testimonials".
*   **`introParagraph`**: (String) Introductory text.
    *   *Guidance:* Emphasize trust and client satisfaction. (Length: ~1-2 sentences / 100-200 chars)
*   **`items`**: (Array of Objects) Content for each testimonial slide.
    *   *Structure:* `[{ id, description, avatar, name, role }, ...]`
    *   *Guidance:* Provide 3 genuine-sounding (even if fictional) testimonials. Include a quote (`description`, ~2-4 sentences / 150-300 chars), client `name`, and `role` (e.g., "Home Buyer, Brampton"). Use placeholder `avatar` paths.

### 9. `blog` Object
*Purpose:* Content related to blog sections (`Blogs6.jsx`, `Blogs2.jsx`, `BlogDetails.jsx`, `RelatedBlogs.jsx`).

*   **`sectionTitle`**: (String) Heading for the blog section on the home page.
    *   *Guidance:* e.g., "Mike's Brampton Market Insights", "Real Estate News & Tips".
*   **`introParagraph`**: (String) Introductory text for the home page blog section.
    *   *Guidance:* Briefly state the blog's purpose. (Length: ~1 sentence / 80-120 chars)
*   **`gridTitle`**: (String) Title used on the main blog grid page (`Blogs2.jsx`).
    *   *Guidance:* e.g., "Mike Henry's Blog", "Brampton Real Estate Blog".
*   **`detailAuthor`**: (String) Author name displayed on blog detail pages.
    *   *Guidance:* Should be the agent's name, "Mike Henry".
*   **`relatedTitle`**: (String) Heading for the related posts section on blog detail pages.
    *   *Guidance:* e.g., "More Articles by Mike", "Related Insights".
*   **`newsletterTitle`**: (String) Heading for the newsletter signup in the blog sidebar.
    *   *Guidance:* e.g., "Join My Newsletter", "Stay Updated".
*   **`newsletterDescription`**: (String) Text encouraging newsletter signups.
    *   *Guidance:* Highlight the value (market insights, tips). (Length: ~1 sentence / 80-150 chars)
*   **`posts`**: (Array of Objects) Content for blog post previews/listings.
    *   *Structure:* `[{ id, imageSrc, alt, tag, date, title, description }, ...]`
    *   *Guidance:* Provide data for ~3 sample posts relevant to Mike Henry/Brampton. Include descriptive `title` (~5-10 words), relevant `tag` (e.g., "Buying Tips"), realistic `date`, and a short `description` (1 sentence / ~100-150 chars). Use appropriate `imageSrc` and `alt` text.
*   **`detailPlaceholder`**: (Object) Placeholder content for the main body of a blog post on the detail page.
    *   *Structure:* `{ paragraph1, quote, quoteAuthor, paragraph2, paragraph3 }`
    *   *Guidance:* Provide generic placeholder text for several paragraphs and a quote, to be replaced with actual blog content later.
*   **`sidebarAdTitle`**: (String) Title for the ad in the blog detail sidebar.
*   **`sidebarAdText`**: (String) Description for the ad in the blog detail sidebar.
*   **`sidebarAdButton`**: (String) Button text for the ad in the blog detail sidebar.

### 10. `faq` Object
*Purpose:* Content for the FAQ page (`Faqs.jsx`).

*   **`pageTitle`**: (String) Main heading for the FAQ page content area.
*   **`contactBoxQuestion`**: (String) Heading in the final contact box.
*   **`contactBoxText`**: (String) Text in the final contact box.
*   **`sidebarContactTitle`**: (String) Title for the contact form in the sidebar.
*   **`categories`**: (Array of Objects) Defines the structure and content for the FAQ accordion.
    *   *Structure:* `[{ title: "Category Title", idPrefix: "unique-prefix", questions: [{ id: "unique-id", question: "...", answer: "..." }, ...] }, ...]`
    *   *Guidance:* Organize the 7 approved Q&A pairs under 2-3 logical category `title`s. Ensure `idPrefix` and question `id`s are unique. Answers should be informative (~2-4 sentences / 150-300 chars).

### 11. `contactPage` Object
*Purpose:* Content specific to the main Contact page (`Contact.jsx`, `About.jsx` [contact version]).

*   **`formTitle`**: (String) Heading above the main contact form.
*   **`formDescription`**: (String) Text below the contact form heading.
*   **`formButtonText`**: (String) Text for the submit button on the main contact form.
*   **`aboutTitle`**: (String) Heading in the secondary section on the contact page.
*   **`aboutDescription`**: (String) Text below the secondary heading on the contact page.

### 12. `loanProcess` Object
*Purpose:* Content specific to the Home Loan Process page (`Facts.jsx`, `Process.jsx`, `LoanCalculator.jsx`).

*   **`factsTitle`**: (String) Heading for the "Facts" section.
*   **`factsDescription1`**: (String) First paragraph in the "Facts" section.
*   **`factsDescription2`**: (String) Second paragraph in the "Facts" section.
*   **`factsButtonText`**: (String) Button text in the "Facts" section.
*   **`factsCounter1Label`**: (String) Label for the first counter.
*   **`factsCounter2Label`**: (String) Label for the second counter.
*   **`factsCounter3Label`**: (String) Label for the third counter.
*   **`processTitle`**: (String) Heading for the "Process" section.
*   **`processDescription`**: (String) Introductory text for the "Process" section.
*   **`processStepDescription`**: (String) Text used below each of the 3 process steps.
*   **`calculatorTitle`**: (String) Heading for the "Loan Calculator" section.
*   **`calculatorDescription`**: (String) Text below the calculator heading.

### 13. `notFound` Object
*Purpose:* Content for the 404 Not Found page (`not-found.jsx`).

*   **`message`**: (String) The main message displayed. Can include `<br />`.

### 14. `common` Object
*Purpose:* Content for components used across multiple pages.

*   **`ctaTitle`**: (String) Title for the main Call To Action component (`Cta.jsx`).
*   **`ctaDescription`**: (String) Description for the main CTA component.
*   **`ctaButtonText`**: (String) Button text for the main CTA component.
*   **`brandsTitle`**: (String) Title for the Brands/Partners section (`Brands.jsx`).
*   **`brandsDescription`**: (String) Description for the Brands/Partners section.
