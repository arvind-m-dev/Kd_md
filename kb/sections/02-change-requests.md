# 02 — Change Requests & Business Rule Changes

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Phase 1 - CRs and New Business - Final | Google Sheet (6 tabs) | `1-1NUwujIQpKMt-gu2EK-KGncXAMGU6jVhz54YfJk3Cc` | pradeepa.pv@futuristglobal.com | 2026-08-03 11:20 UTC | AUTHORITATIVE (consolidated CR register; supersedes the July 9th sheet) |
| 2 | Phase 1 - CR's and New Business Rule additions | Google Doc (1 tab) | `1i6udGwW4Im-tFr_ZUJvNRhoug6QN_o70dK4k9y_4cSU` | pradeepa.pv@futuristglobal.com | 2026-09-27 08:25 UTC | AUTHORITATIVE (running CR log; dated sections up to July 29) |
| 3 | July 29th - Business rules and Action items | Google Doc | `14nXV4QvzlIE3JwqOsDNOIOhJC4UmCBHO6hqFAE_24SI` | pradeepa.pv@futuristglobal.com | 2026-08-03 12:11 UTC | AUTHORITATIVE (for 29 Jul 2026) |
| 4 | Changes told in in this week meeting + Business Rule Changes | Google Doc | `1GnyoSuQXlhh6K9L3po-cv5aDHXlC87MaS8pV7NPckf8` | pradeepa.pv@futuristglobal.com | 2026-06-30 14:54 UTC | AUTHORITATIVE (for 25–30 Jun 2026; many items later restated/changed — see Conflicts) |
| 5 | Recent enhancements | Google Doc | `1ayBF6ywdSTdCRePAJD7dchfFGOMFSbj9l3FcWAHREso` | pradeepa.pv@futuristglobal.com | 2026-06-30 08:48 UTC | AUTHORITATIVE (for 30 Jun 2026; several items later changed — see Conflicts) |
| 6 | Phase 1 - CR's and New Business Rule additions - July 9th | Google Sheet (1 tab) | `1oim_dW0m5wSOUKhM9W2wgHCCLX810uKdA6VbGgKNAIk` | pradeepa.pv@futuristglobal.com | 2026-07-12 18:14 UTC | HISTORY (superseded by Phase 1 - CRs and New Business - Final) |
| 7 | Rough 2- My Drafts | Google Doc | `1f1LOJkqKIrq3kgC42h9E6tPlKREqseVBiPj_eicY1ps` | pradeepa.pv@futuristglobal.com | 2026-10-22 09:24 UTC | NON-AUTHORITATIVE (personal draft; document body is empty) |

**Conventions used in this section**
- BR numbering: BR-CR-001…205 are the rows of the Final sheet (authoritative register). BR-CR-206 onward are rules found in the other docs that are **not** already stated identically in the Final sheet (new rules, extra detail, or a different value). Where a doc repeats a Final-sheet rule word-for-word or near-verbatim, it is cross-referenced ("also stated: BR-CR-xxx") instead of being re-numbered.
- Comments in Google Docs are shown inline as `⟦comment <id> start⟧ … ⟦comment <id> end — <author> (<date>, <status>): "<text>"⟧`.
- Struck-through text in the source is shown as `~~text~~ *(struck through in source)*`.
- No passwords, OTPs, keys or tokens appear in any of these documents; nothing was redacted.

---
## Phase 1 - CRs and New Business - Final  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1-1NUwujIQpKMt-gu2EK-KGncXAMGU6jVhz54YfJk3Cc` · owner pradeepa.pv@futuristglobal.com · created 2026-07-14, modified 2026-08-03 · tabs read: Overall Milestones, Phase 1 - CRs and New Business, Effort Summary by App, Sheet1, Schedule, Delivery Tracker · read coverage: 100% of cell values in all 6 tabs (no cell comments exist). Not readable via the tools: cell background colours — the "Schedule" tab's Gantt bars (weekly cells D–U) are colour-only, so which weeks each workstream occupies could not be read; only the legend text is available.

### Content

#### Tab "Phase 1 - CRs and New Business " (main CR register, rows 1–218)
Columns: Sno · Epic No · Story No · Module · Features · Business Rule Type · Business Rule · Feature Group · Consolidated Feature (cross-module) · Timeline. The **Timeline column is empty in every row**. All Epic/Story values are the placeholder `EP-000` / `US-000`.
Notes on the source layout:
- Sno 58 does not exist (the July 9th sheet had a duplicate "Landing Page City Tabs" row which was removed). Sno 186, 187, 188 do not exist (numbering jumps from 185 to 189).
- Rows 209–213 (BRM, Sno 202–206) are shifted one column right in the source: the Feature Group cell is blank, "KD Enterprise, Broker & Notifications" sits under *Consolidated Feature*, and "6A. Broker Relationship Manager (BRM)" sits under *Timeline*. Shown below exactly as in the source.
- Section header rows (Features column only): "Applies to all user journeys(Generic)", "Landing Page and Login Flows", "Agent Flow ", "Keydemand Flow", "Brand  F&B and Retail", "Office and Managed Office Tenant", "Enterprise Brand", "Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel)", "Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona]", "PHASE 2  -  Deferred items (NOT in Phase 1 scope)".

| Row | Sno | Epic No | Story No | Module | Features  | Business Rule Type | Business Rule | Feature Group | Consolidated Feature (cross-module) | Timeline | (extra col K) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 |  |  |  |  | Applies to all user journeys(Generic) |  |  |  |  |  |  |
| 3 | 1 | EP-000 | US-000 | WebApp + MobileApp | All Journeys general rules | Empty Fields | Any field left empty should be hidden from the UI in view mode(non mandatory fields) | Global Terminology & Field Rules | 1. Global Terminology & Field Rules |  |  |
| 4 | 2 | EP-000 | US-000 | WebApp + MobileApp |  | Renaming | Rename 'Agent' to 'Property Agent' and 'Tenant' to 'Office Tenant' and Managed Space Tenant globally. | Global Terminology & Field Rules | 1. Global Terminology & Field Rules |  |  |
| 5 | 3 |  |  | AdminApp | Admin Panel(Generic) | Control Panel Access | The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core users. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 6 | 4 |  |  | Admin App |  | V2 Phase 1 Roles | For the initial launch, enforce strictly three primary administrative roles in the Control Panel: 'Super Admin',  'Admin' and 'Ops User'. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 7 | 5 |  |  | Admin App |  | Super Admin Privileges | The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 8 | 6 |  |  | Admin App |  | Dynamic Role Creation | The system must include functionality allowing the core admin team to dynamically create new internal users and assign their access permissions across the platform. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 9 | 7 |  |  | WebApp + MobileApp + AdminApp |  | Admin Login Protocol | Admin account creation requires a name, email ID, and permissions set. Login operates via email and password. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 10 | 8 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Password Complexity | Passwords must contain at least 6 characters, including one uppercase letter, one number, and one special character. | Admin Foundation & Platform | 2. Auth, Registration & Login |  |  |
| 11 | 9 | EP-000 | US-000 | Admin App |  | Session Timeout | Admin sessions must automatically time out after 15 minutes of inactivity for security purposes. | Admin Foundation & Platform | 10. Admin Control Panel - Core (new app) |  |  |
| 12 | 10 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Automated Migration | All active V1 users must be automatically migrated to the new V2 platform. | Admin Foundation & Platform | Foundation - Data Migration & Cutover |  |  |
| 13 | 11 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Complimentary Access | At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users. | Admin Foundation & Platform | 5. Subscription & Pricing (cross-app) |  |  |
| 14 | 12 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Privacy Policy Action | The Privacy Policy must immediately append a conditional scope clause into the Privacy Policy detailing potential future chatbot integrations. | Admin Foundation & Platform | 13. Compliance, Legal & Attribution |  |  |
| 15 | 13 | EP-000 | US-000 | WebApp + MobileApp | Property, Project and Demand Fields, Validation & Logic | Validation Logic | Trigger an explicit error for incomplete email addresses or mandatory fields. The system must visually highlight the missing section and guide the user to it. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 16 | 14 | EP-000 | US-000 | WebApp + MobileApp |  | Redirection | The interface should automatically redirect the user to the precise location of any missing fields. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 17 | 15 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | PDF Download | Implement the missing functionality where we allow users to download a PDF of their own 'My Listings'. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 18 | 16 | EP-000 | US-000 | WebApp + MobileApp |  | Area Validation | Carpet Area must strictly be less than or equal to the Built-up Area. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 19 | 17 |  |  | WebApp + MobileApp |  | Filters & Sorting | Implement comprehensive filters (e.g., City) and sorting options (e.g., 'Most Demands,' 'Most Properties Posted,' 'Most Leads Received') on the dashboard to allow effective monitoring. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 20 | 18 | EP-000 | US-000 | WebApp + MobileApp |  | Field Editability | Ensure that 'yes' fields remain editable by users even after a response has been received. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 21 | 19 | EP-000 | US-000 | WebApp + MobileApp |  | Demand Posting | Expand the 'other interested location' options to allow users to input at least 3 additional localities. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 22 | 20 |  |  | WebApp + MobileApp |  | OC Supply Standardization | To prevent contradictions in the relevance Machine Learning (ML) models, the 'OC Status' fields across all property and project backend sheets must be unified to exactly three terms: 'Available', 'Not available', and 'Under construction'. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 23 | 21 |  |  | WebApp + MobileApp + AdminApp |  | Draft Auto-Save | The system must automatically save a draft of a property or demand listing every 30 seconds during the posting flow. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 24 | 22 |  |  | WebApp + MobileApp + AdminApp |  | Brand Image Display | If a brand logo/image is uploaded in the backend, it must display as the demand image. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 25 | 23 |  |  |  |  | Reference Images | Show sample reference images during the image upload step so users understand what kind of photos to upload. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 26 | 24 | EP-000 | US-000 | WebApp + MobileApp |  | User Permissions | Grant users the ability to modify all fields except for the core City and Location parameters. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 27 | 25 | EP-000 | US-000 | WebApp + MobileApp |  | Image Shuffling | For demands without brand logos, the UI should shuffle between a pool of five high-quality asset-class images to maintain a dynamic look. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 28 | 26 |  |  | WebApp + MobileApp |  | Locked Fields | Ensure Asset Class, Transaction Type, City, and Location remain permanently locked. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 29 | 27 |  |  | WebApp + MobileApp |  | Unlocked Fields | Unlock 'Other interested locations' and 'Possession needed' fields so they can be edited after initial submission | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 30 | 28 |  |  | WebApp + MobileApp |  | Property Cards Display | Listing Title: Display the Project Name, if available. If absent, use the descriptive format: [Store Type] [Asset Class] Property. Posted By: Display the name of the specific Agent. If posted by the Keydemand team, display 'Keydemand'. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 31 | 29 |  |  | WebApp + MobileApp |  | Demand Cards Display | Categories: Retail Demand, Office Demand, Managed Space Demand, F&B Demand. Posted By: Display the specific Brand, Tenant, or Agent name. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 32 | 30 | EP-000 | US-000 | WebApp + MobileApp |  | RERA Numbers | Add a mandatory field to capture RERA numbers, restricted strictly to the project level. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 33 | 31 | EP-000 | US-000 | WebApp + MobileApp | Compliance, Legal & Chatbot | Grievance Officer | Appoint and clearly display the contact details for a Grievance Officer, satisfying both DPDP and GDPR mandates. | Listings, Validation & Compliance | 13. Compliance, Legal & Attribution |  |  |
| 34 | 32 | EP-000 | US-000 | WebApp + MobileApp |  | Event Tracking | Implement strict event tracking to monitor user behaviour when they encounter hidden images to support A/B testing and funnel analysis. | Listings, Validation & Compliance | 13. Compliance, Legal & Attribution |  |  |
| 35 | 33 | EP-000 | US-000 | WebApp + MobileApp |  | Privacy Policy | A conditional scope clause detailing potential future chatbot integrations must be added to the Privacy Policy immediately. | Listings, Validation & Compliance | 13. Compliance, Legal & Attribution |  |  |
| 36 | 34 | EP-000 | US-000 | WebApp + MobileApp |  | Leads Renaming | Rename the existing 'contact inquiries' section to 'leads' to streamline the interface.Inquiries + Image Requests = Lead). | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 37 | 35 | EP-000 | US-000 | WebApp + MobileApp |  | Legacy Data | Recognise that any lead counts currently visible are legacy data, as the system lacks an active mechanism to increment them. | Listings, Validation & Compliance | 1. Global Terminology & Field Rules |  |  |
| 38 | 36 | EP-000 | US-000 | WebApp + MobileApp | Marketing & Source Tracking | Attribution Tracking | User acquisition sources (e.g., Organic vs. Paid) will be tracked using the user's phone number as the primary source of truth. | Listings, Validation & Compliance | 13. Compliance, Legal & Attribution |  |  |
| 39 |  |  |  |  | Landing Page and Login Flows |  |  |  |  |  |  |
| 40 | 37 |  |  | WebApp + MobileApp | CTA | CTA Restrictions | Ensure unregistered users are prompted to register only when clicking actionable elements like 'View Phone Number' or 'Contact Us'. | Landing Page & CTAs | 3. Landing Page & Discovery |  |  |
| 41 | 38 | EP-000 | US-000 | WebApp + MobileApp |  | Request a Callback | Add a 'Request a callback' button alongside the 'Book a demo' option in About Keydemand video section. | Landing Page & CTAs | 3. Landing Page & Discovery |  |  |
| 42 | 39 | EP-000 | US-000 | WebApp + MobileApp |  | Book a Demo | Change 'Book a demo' text to 'Send an inquiry' in the About section. Add two provided logos to the client marquee. | Landing Page & CTAs | 3. Landing Page & Discovery |  |  |
| 43 | 40 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Login and Registration Flows | OTP Wait Timer | The system must strictly enforce a 30-second cooldown period before a user can request an OTP resend. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 44 | 41 |  |  |  |  | Compliance & Verification | Age verification (18+) is managed via the standard Terms & Conditions agreement. No separate DOB field or checkbox is required in the registration flow. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 45 | 42 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Abandoned Session | If a user successfully verifies their mobile number via OTP but abandons the registration process before completing their profile, the backend must instantly capture and log that mobile number as an actionable lead. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 46 | 43 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Resuming Registration | If a user who previously abandoned their registration returns and enters their verified mobile number, the system must bypass the initial verification steps and direct them straight to the profile setup page. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 47 | 44 |  |  | WebApp + MobileApp |  | Form Cleanup | Remove the email address field from the user registration form completely. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 48 | 45 |  |  | WebApp + MobileApp |  | Age Verification Verbiage | The registration screen must explicitly enforce 18+ consent using this exact required phrase: 'by continuing you confirm you are 18 years and above'. and a tick | Login & Registration | 2. Auth, Registration & Login |  |  |
| 49 | 46 | EP-000 | US-000 | WebApp + MobileApp | Profile Data Field Constraints | Profile Picture Uploads | The profile picture upload feature must be completely removed from the initial registration form to prevent user drop-off and distraction. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 50 | 47 | EP-000 | US-000 | WebApp + MobileApp |  | Email Field Labeling | The email input field across forms must be universally explicitly labeled as 'Official Email ID'. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 51 | 48 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Email Field Validation | Strict domain-level validation (such as actively blocking generic domains like '@gmail.com') is NOT enforced in the system. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 52 | 49 | EP-000 | US-000 | WebApp + MobileApp |  | Email Logic | Email addresses are strictly mandatory for all entity-level profiles, which includes Brands and Office Tenants. Email addresses are optional for Agent profiles. | Login & Registration | 2. Auth, Registration & Login |  |  |
| 53 | 50 |  |  | WebApp + MobileApp | Landing page UI | Promotional Hook | Feature a '1 free listing' notification on the Agent Home page (Navbar or first fold) for new users to incentivise posting. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 54 | 51 |  |  | WebApp + MobileApp |  | Property Detail Access | Implement functionality allowing unregistered users to view property details by default. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 55 | 52 |  |  | WebApp + MobileApp |  | Image Restrictions | Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 56 | 53 |  |  | WebApp + MobileApp + AdminApp |  | Default City | Set the default city to Bengaluru (instead of Mumbai) when a user visits the platform for the first time. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 57 | 54 |  |  | WebApp + MobileApp |  | Incentive Messaging | Design and implement a pre-wall popup or graphic that communicates the 'free listing' reward to users before they begin the registration flow. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 58 | 55 |  |  | WebApp + MobileApp + AdminApp |  | Landing Page City Tabs | Remove static city tabs from the exclusive projects section. Make the city tabs for sponsored projects dynamic, so they only display cities with active project inventory. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 59 | 56 |  |  | WebApp + MobileApp |  | Client Logos | Add the names and logos for 'Office Tenant' and 'Managed Office Spaces' to the static client section on the landing page. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 60 | 57 |  |  | WebApp + MobileApp |  | Navbar Inquiry Button | Add a 'List your project' (Developer/Managed Space Inquiry) button to the top navigation bar that triggers an inquiry form without requiring a user login. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 61 | 59 |  |  | WebApp + MobileApp |  | Cities Tabs | Remove the 'Cities' tabs entirely from this section of the Exclusive Projects section. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 62 | 60 |  |  | WebApp + MobileApp |  | Dynamic City Tabs | Add dynamic city tabs based on where projects are actively listed (e.g., if a project is in Nashik, show a 'Nashik' city tab). | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 63 | 61 |  |  | WebApp + MobileApp |  | City Defaults | If a user searches for a location without active properties, the system should default to the closest city with available inventory, accompanied by a messaging banner. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 64 | 62 |  |  | WebApp + MobileApp |  | Sponsored Projects | The 'Sponsored Projects' section must feature dynamic city tabs that only display the specific cities where current sponsored projects are active. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 65 | 63 |  |  | WebApp + MobileApp + AdminApp |  | Immediate Lead Capture | Update the 'Show Interest' API logic to capture the phone number as a lead the exact moment OTP verification is successful. | Landing Page UI & Discovery | 2. Auth, Registration & Login |  |  |
| 66 | 64 |  |  | WebApp + MobileApp + AdminApp |  | Project Filter | Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects. | Landing Page UI & Discovery | 3. Landing Page & Discovery |  |  |
| 67 | 65 | EP-000 | US-000 | WebApp + MobileApp | Location & City Mapping | Single-Select Restraint | The 'Operating City' (or base city) selector must be a single-select dropdown, replacing any multi-select functionality. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 68 | 66 | EP-000 | US-000 | WebApp + MobileApp |  | City Categorization | The dropdown category previously labeled 'Other cities' must be explicitly renamed to 'Popular cities'. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 69 | 67 | EP-000 | US-000 | WebApp + MobileApp |  | Geographic Groupings | Sub-locations and micro-markets in Goa must be consolidated under a single 'Goa' parent category. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 70 | 68 |  |  | WebApp + MobileApp + AdminApp |  | Google Maps Integration | Integrate Google Maps into the search/typing functionality for accurate locality selection. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 71 | 69 | EP-000 | US-000 | WebApp + MobileApp |  | Regional Tooltips | For macro-regions like Mumbai/MMR, Delhi NCR, and Pune/PCMC, the user interface must display exactly what sub-regions are included. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 72 | 70 | EP-000 | US-000 | WebApp + MobileApp | Compliance & Legal | Terms & Policies | Include an explicit, mandatory checkbox for 'Terms of Use' and 'Privacy Policy' in all registration flows to ensure compliance with DPDP/GDPR. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 73 | 71 | EP-000 | US-000 | WebApp + MobileApp |  | Phone Number Disclosure | Include explicit consent terms regarding phone number sharing during registration to ensure users are informed that their number is shared upon request. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 74 | 72 | EP-000 | US-000 | WebApp + MobileApp | Data Collection & Field Logic | Relevancy Matching | Ensure that all fields critical for backend relevancy matching are permanently included in the initial quick registration form. | Location & City Mapping | 2. Auth, Registration & Login |  |  |
| 75 |  |  |  |  | Agent Flow |  |  |  |  |  |  |
| 76 | 73 | EP-000 | US-000 | WebApp + MobileApp |  | High-End Demands Logic | Agents are restricted from viewing demands that fall within city-specific high-ticket thresholds (HVLs). | Agent Flow, Dashboard & Subscription | 7. High Value Leads (HVL) Engine |  |  |
| 77 | 74 |  |  | WebApp + MobileApp | Dashboard | Dashboard Cleanup | Remove the redundant 'lead management' section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 78 | 75 |  |  | WebApp + MobileApp |  | Dashboard Subscription Text | Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., 'Free Plan,' 'Trial Plan,' 'Usage 0 of 1'). | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 79 | 76 |  |  | WebApp + MobileApp | Agent Onboarding | Agent Onboarding | On the Profile page, change the 'Operating City' field to a single-select dropdown using a visual selection layout similar to the landing page city selector. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 80 | 77 | EP-000 | US-000 | AdminApp |  | Onboarding Fields | When an Admin adds an agent, they must input the agent's name, mobile number, email, designation, and assigned city. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 81 | 78 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Subscription - Agent | Subscription Billing | Automatically provide GST invoices to users after they subscribe. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 82 | 79 | EP-000 | US-000 | WebApp + MobileApp |  | Subscription/Payment Flow | Implement the Razorpay component embedded into a dedicated native page (instead of a direct API popup). | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 83 | 80 | EP-000 | US-000 | WebApp + MobileApp |  | Subscription Status | Unsubscribed agents must see a 'Trial Plan' label with the free listing offer. Paid users should be tagged as 'Pro Member'. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 84 | 81 | EP-000 | US-000 | AdminApp |  | Complimentary Access | Admins have the capability to assign zero-charge subscriptions to agents from the backend. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 85 | 82 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Pricing Updates | Price changes made by Admins via the Control Panel must reflect on the front end immediately. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 86 | 83 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Tier Management | Admins can edit subscription prices and add new cities to specific categorizations. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 87 | 84 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Auto-Renewal | Subscriptions should default to manual renewal unless the user explicitly opts into auto-renewal during checkout. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 88 | 85 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Billing Cycle Impact | For active users, updated subscription prices will only take effect and bill starting from their next billing cycle. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 89 | 86 |  |  | WebApp + MobileApp + AdminApp |  | Indicative Cities Protection | Existing indicative cities pre-populated within the tiers must not be removed from their respective categories. | Agent Flow, Dashboard & Subscription | 5. Subscription & Pricing (cross-app) |  |  |
| 90 | 87 | EP-000 | US-000 | WebApp + MobileApp | Property and Listing Management | Duplicate Click Prevention | Prevent multiple clicks by the same user on a single property from incrementing the view count. Display an 'Already requested' message. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 91 | 88 | EP-000 | US-000 | WebApp + MobileApp |  | Image Requests | When a user requests locked images, they must be logged in. This action shares their phone number with the listing owner. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 92 | 89 | EP-000 | US-000 | WebApp + MobileApp |  | Massive Demand Bypass | If an external agent posts a massive demand (e.g., >10,000 sq ft in Bangalore), it bypasses the 'Keydemand exclusive' block and becomes visible to other agents. | Agent Flow, Dashboard & Subscription | 7. High Value Leads (HVL) Engine |  |  |
| 93 | 90 | EP-000 | US-000 | WebApp + MobileApp |  | Transparency | The agent's name must be displayed whenever they post a property or demand. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 94 | 91 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Configurable Permissions | Admins can selectively toggle an agent's ability to explore demands, post properties/demands, access broker management, view Key Demand listings, and view assigned enterprise brands. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 95 | 92 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | No City Deletion | The ability to 'Delete' a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts. | Agent Flow, Dashboard & Subscription | 4. Agent Flow, Dashboard & Subscription |  |  |
| 96 |  |  |  |  | Keydemand Flow |  |  |  |  |  |  |
| 97 | 93 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Login Flow | Onboarding & Authentication | Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 98 | 94 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Profile Management | Role-Based Access | Account creation is strictly permission-based; specific privileges are managed via the admin portal. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 99 | 95 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Profile Management | The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 100 | 96 |  |  | WebApp + MobileApp | KD Dashboard | Dashboard | Apply the color hues, hover effects, and overall visual accents from the existing Agent mobile app to the Keydemand web dashboard to ensure uniformity. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 101 | 97 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Team Inventory Capabilities | Keydemand members can view the inventory of other team members within their 'Listings' dashboard, but they are strictly restricted to editing only their own self-listings. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 102 | 98 | EP-000 | US-000 | WebApp + MobileApp |  | Backup Coordination | If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 103 | 99 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Immediate Dashboard Redirect | Keydemand users must be redirected straight to their Dashboard immediately upon logging in. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 104 | 100 | EP-000 | US-000 | WebApp + MobileApp |  | Dashboard Routing Logic | Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 105 | 101 |  |  | WebApp + MobileApp |  | Grid Toggles | Dashboards must feature a dedicated switch to toggle between 'High-Value' and 'Standard' inventory views. | Keydemand Team Portal | 7. High Value Leads (HVL) Engine |  |  |
| 106 | 102 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Interactive Drill-Downs | All aggregate metrics on the Dashboard must be clickable, leading to a granular, filtered list view of the items being counted. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 107 | 103 |  |  | WebApp + MobileApp |  | Filters & Sorting | The dashboard must include comprehensive filtering and sorting options. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 108 | 104 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | User Dropdown Menu | Hamburger Menu | Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 109 | 105 |  |  | WebApp + MobileApp |  |  | Implement sticky headers for filters/sorts and a blur effect for side navigation when users scroll through project listings. Add a "Go to Top" button for quick navigation on long listing pages. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 110 | 106 | EP-000 | US-000 | WebApp + MobileApp |  | Custom Side-Menu | A custom side-menu for internal users must bypass standard filters and segment views into 'My' vs. 'Overall'. | Keydemand Team Portal | 6. Keydemand Team Portal |  |  |
| 111 | 107 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | HVL(High Value Leads) | HVL Definition | Requirements exceeding specific size thresholds are classified as HVLs. The Admin must have controls in the panel to define and edit these square footage limits. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 112 | 108 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Cross-Asset Application | HVL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 113 | 109 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Exclusion | Day-to-day operational requirements posted by existing, onboarded enterprise brands are not categorized as high-value leads. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 114 | 110 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Standard Leads | If a new inquiry falls below the high-value threshold, it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 115 | 111 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Tier 1 vs. Tier 2 Routing | HVL restrictions only apply to Tier 1 markets. Leads in Tier 2 cities bypass this and remain open to all agents. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 116 | 112 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Exclusive Routing | HVLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 117 | 113 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Global Access | While notifications for a new HVL are localized to the assigned city members, all Keydemand team members possess global access to view HVLs pan-India. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 118 | 114 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Manual Unlock Valve | If the Keydemand team cannot service an HVL within a specific timeframe, Admins can manually 'unlock' the requirement. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 119 | 115 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Agent-Added Exemption | Demands posted directly by agents bypass HVL restrictions entirely and remain visible to other agents via relevancy matching. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 120 | 116 |  |  | WebApp + MobileApp + AdminApp |  | HVL Unopened Marker | Unopened leads must be visually marked with a red dot in the platform. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 121 | 117 |  |  | WebApp + MobileApp + AdminApp |  | HVL Unlock Notification | If the KD team unlocks an HVL requirement, the system must notify agents who possess relevant properties based on relevancy matching. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 122 | 118 |  |  | WebApp + MobileApp + AdminApp |  | HVL Notification Mediums | Notifications for new leads must go out via both email and WhatsApp to the assigned users. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 123 | 119 |  |  | WebApp + MobileApp + AdminApp |  | HVL Customization | The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned KD team members. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 124 | 120 |  |  | WebApp + MobileApp |  | Visibility Rules 1 | All KD team members must be able to access all high-value leads. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 125 | 121 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Admin-RM Assignment | Account-Level Assignment | An RM is assigned at the overarching entity/account level for a specific city. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 126 | 122 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Nomenclature | RM' is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title. | High Value Leads (HVL) Engine | 1. Global Terminology & Field Rules |  |  |
| 127 | 123 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Cross-Collaboration | While leads are assigned to specific RMs, other team members can view these leads under the 'Others' or 'All' tabs. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 128 | 124 |  |  | WebApp + MobileApp + AdminApp |  | Agent RM View | Build a dedicated internal 'agent relationship manager' view allowing designated Keydemand staff to track the specific platform actions of the external brokers they have personally onboarded. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 129 | 125 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Notifications | Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a relevant property matching the demand. | High Value Leads (HVL) Engine | 7. High Value Leads (HVL) Engine |  |  |
| 130 | 126 | EP-000 | US-000 | WebApp + MobileApp | Visibility & Security | Posted By Transparency | To external audiences, internal demands/properties display as 'Keydemand.' However, internally, the team will see the specific name of the uploading team member. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 131 | 127 | EP-000 | US-000 | WebApp + MobileApp |  | Exclusive Indicators | If a demand is managed exclusively by Keydemand, the 'Self-View' and explore demand screens must explicitly indicate 'Keydemand Team'. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 132 | 128 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Hidden Image Protocols | If a listing owner selects 'Do not show images', external users cannot view them. However, Keydemand teams can always see these images. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 133 | 129 | EP-000 | US-000 | WebApp + MobileApp |  | Thumbnail Rule | The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 134 | 130 | EP-000 | US-000 | WebApp + MobileApp |  | Image Request CTA | To prevent sourcing conflicts, the 'View Image Request' CTA button must be completely removed for Keydemand users when they view external agent properties. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 135 | 131 | EP-000 | US-000 | WebApp + MobileApp |  | Relevancy Matching Scope | Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 136 | 132 | EP-000 | US-000 | WebApp + MobileApp |  | Demand Exploration | The Keydemand team is the only party authorized to explore demands. Specifically, 'Managed Space' demands are visible exclusively to Keydemand. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 137 | 133 |  |  | WebApp + MobileApp + AdminApp | Permissions and Sizes | My Listings CRUD | Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 138 | 134 |  |  | WebApp + MobileApp + AdminApp |  | Colleague Data | Properties and demands posted by other Key Demand team members must be strictly 'Read-Only' for colleagues. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 139 | 135 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Demand Size Limit | The system must hide high-sq-ft demands from standard users/agents and route them directly to the Keydemand team. | KD Visibility, Security & Permissions | 7. High Value Leads (HVL) Engine |  |  |
| 140 | 136 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Size Configuration | The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city. | KD Visibility, Security & Permissions | 7. High Value Leads (HVL) Engine |  |  |
| 141 | 137 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Default Permissions | Dashboard' access and 'Explore Property' access must be set as default, non-removable permissions for all new Key Demand users. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 142 | 138 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Editing Limits | Editing capabilities within the Listing Management Control Panel should only be enabled for 'Keydemand' and 'Enterprise' inventory. | KD Visibility, Security & Permissions | 6. Keydemand Team Portal |  |  |
| 143 | 139 | EP-000 | US-000 | WebApp + MobileApp | Enterprise Accounts-KD | Dashboard Breakdown | The dashboard must calculate the total aggregate of enterprise users and segment them into: Assigned to Me, Assigned to Others, Sub-Category Itemization. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 144 | 140 | EP-000 | US-000 | WebApp + MobileApp |  | Posting Restrictions | Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 145 | 141 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | CRM Pipeline | The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 146 | 142 | EP-000 | US-000 | WebApp + MobileApp |  | Lead Statusing | Leads for Enterprise Clients are strictly categorized as Approved, Rejected, or Open. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 147 | 143 | EP-000 | US-000 | WebApp + MobileApp |  | Alerting & Highlights | New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 148 | 144 | EP-000 | US-000 | WebApp + MobileApp | CTA Tracking | Metric Definition | The 'User Contacted' metric must increment exclusively when the 'View Phone Number' button is clicked. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 149 | 145 | EP-000 | US-000 | WebApp + MobileApp |  | Direct Contact CTAs | The Keydemand team does not need to use 'Request Phone Number' workflows for relevant demands; they are provided with an explicit 'View Phone Number' CTA. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 150 | 146 | EP-000 | US-000 | WebApp + MobileApp |  | Outbound Contact Logs | Properties Contacted' logs for Enterprise clients must capture the Property ID, associated photo, and the exact date of contact for audit purposes. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 151 | 147 | EP-000 | US-000 | WebApp + MobileApp |  | Lead Access Audit Trail | Clicking the 'View Requirement' CTA unlocks the lead's mobile number and automatically updates the 'Viewed' status with a timestamp. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 152 | 148 | EP-000 | US-000 | WebApp + MobileApp |  | Accountability Tracking | A 'Viewed by' column must maintain a timestamped log of exactly which Keydemand team member accessed a lead. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 153 | 149 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Broker Management | Broker Monitoring View | A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 154 | 150 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Project Addition | Projects can only be added strictly via the backend control panel by the Admin team. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 155 | 151 | EP-000 | US-000 | WebApp + MobileApp |  | Project Categorization | Projects must be sorted by 'Category' (Standard, Premium, Exclusive) within the tables. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 156 | 152 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Exclusive Project | The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated 'Exclusive' projects. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 157 | 153 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Enquiry Granularity | All project lists must support a drill-down for 'Enquiries Received,' capturing user metadata. | KD Enterprise, Broker & Notifications | 6. Keydemand Team Portal |  |  |
| 158 | 154 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Notifications & Routing | Notification Filtering | Notifications must be segmentable, allowing users to filter by specific triggers. | KD Enterprise, Broker & Notifications | 12. Notifications & Mobile Infrastructure |  |  |
| 159 | 155 | EP-000 | US-000 | WebApp + MobileApp |  | Enquiry Routing Logic | The system must automate routing based on the specific interaction type. | KD Enterprise, Broker & Notifications | 12. Notifications & Mobile Infrastructure |  |  |
| 160 |  |  |  |  | Brand  F&B and Retail |  |  |  |  |  |  |
| 161 | 156 | EP-000 | US-000 | WebApp + MobileApp | Listing Management | Asset Class Selection | The asset class is pre-selected based on the user's registration. | Brand (F&B / Retail) Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 162 | 157 | EP-000 | US-000 | WebApp + MobileApp |  | Asset Class Notification | If a user explores the other asset class within their allowed set (Retail <-> F&B), notify them that they are viewing a different asset class but allow them to continue. | Brand (F&B / Retail) Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 163 | 158 | EP-000 | US-000 | WebApp + MobileApp |  | Discovery Logic | Retail & F&B users can explore ONLY Retail and F&B asset classes. They CANNOT explore Office or Managed Space. (Retail explores Retail + F&B; F&B explores F&B + Retail.) | Brand (F&B / Retail) Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 164 | 159 |  |  | WebApp + MobileApp |  | Registered Asset Class | Regardless of search or activity, the user's pre-selected asset class remains their registered one. | Brand (F&B / Retail) Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 165 | 160 | EP-000 | US-000 | WebApp + MobileApp |  | Posting Restrictions | A Retail brand cannot post F&B properties, and vice versa. They can see properties outside their asset class, but they cannot post them. | Brand (F&B / Retail) Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 166 | 161 | EP-000 | US-000 | WebApp + MobileApp |  | Brand Name Display | For Brands and Office Tenants- The company/brand name must be displayed when they post a demand. | Brand (F&B / Retail) Flows | 8. Brand / Tenant / Enterprise Flows |  |  |
| 167 | 162 | EP-000 | US-000 | WebApp + MobileApp | Usage Limits | Limits | Both brands and tenants can view up to 5 phone numbers before being prompted for enterprise solutions. | Brand (F&B / Retail) Flows | 8. Brand / Tenant / Enterprise Flows |  |  |
| 168 | 163 | EP-000 | US-000 | WebApp + MobileApp | Abandoned Registration Flow | Abandoned Registration | If a brand/user starts the registration journey, verifies their mobile number via OTP, but abandons the page before completing their profile, their verified number must be immediately captured by the system as an actionable 'lead'. | Brand (F&B / Retail) Flows | 2. Auth, Registration & Login |  |  |
| 169 | 164 | EP-000 | US-000 | WebApp + MobileApp |  | Resuming Journey | If the dropped-off user returns and enters their number again, the system must recognize them and prompt a 'resume registration' flow. | Brand (F&B / Retail) Flows | 2. Auth, Registration & Login |  |  |
| 170 | 165 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Internal Action | The central team can use these incomplete captured leads for outbound cold calling to manually assist the user in account creation. | Brand (F&B / Retail) Flows | 2. Auth, Registration & Login |  |  |
| 171 |  |  |  |  | Office and Managed Office Tenant |  |  |  |  |  |  |
| 172 | 166 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Listing Management | Office and Managed Office Tenant- Posting Permissions | Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space. | Office / Managed Space Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 173 | 167 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Discovery Logic | Office Tenants and Managed Space Tenants can explore both Managed Space and Office properties. | Office / Managed Space Flows | 8A. Asset-Class Access & Posting Matrix |  |  |
| 174 | 168 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Managed Office Operators | Managed Office Operators | Managed office operators will be treated identically to 'Developers' on the Keydemand platform. They will not log into the platform directly; Keydemand teams will collect details offline and manually upload them. | Office / Managed Space Flows | 9. Managed Space as Project Asset Class |  |  |
| 175 | 169 | EP-000 | US-000 | WebApp + MobileApp | Brand Display | Brand Name Display (same rule as Sno 161) | For Brands and Office Tenants, the company/brand name must be displayed when they post a demand. | Office / Managed Space Flows | 8. Brand / Tenant / Enterprise Flows |  |  |
| 176 | 170 | EP-000 | US-000 | WebApp + MobileApp | Terminology | Terminology | Remove existing terminology for 'Account Handler' and 'RM' (Relationship Manager) globally; ensure all system labels are replaced with 'Point of Contact' or 'POC'. | Office / Managed Space Flows | 1. Global Terminology & Field Rules |  |  |
| 177 | 171 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Project Classification | Project Classification | Inventory provided by managed operators (centers/hubs) will be classified as 'Projects' rather than standard property inventory. | Office / Managed Space Flows | 9. Managed Space as Project Asset Class |  |  |
| 178 | 172 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | High-Value Routing | High-Value Routing | Introduce 'Managed Space' as a new asset class entirely nested under the 'Projects' structure rather than standard property inventory. Restrict the transaction options for Managed Space projects strictly to 'Lease'. | Office / Managed Space Flows | 9. Managed Space as Project Asset Class |  |  |
| 179 |  |  |  |  | Enterprise Brand |  |  |  |  |  |  |
| 180 | 173 | EP-000 | US-000 | WebApp + MobileApp | Listing Management | Brand - Exploring Properties | Retail & F&B brands (Individual AND Enterprise) can explore ONLY Retail and F&B - NOT Office or Managed Space. F&B explores F&B + Retail; Retail explores Retail + F&B. | Enterprise Accounts & Formats | 8A. Asset-Class Access & Posting Matrix |  |  |
| 181 | 174 |  |  | WebApp + MobileApp |  | Tenant - Exploring Properties | Office can explore Office and Managed Space and Managed Space can explore Office and Managed Space. | Enterprise Accounts & Formats | 8A. Asset-Class Access & Posting Matrix |  |  |
| 182 | 175 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Brand - Posting Properties | They can post only on their Asset Classes. | Enterprise Accounts & Formats | 8A. Asset-Class Access & Posting Matrix |  |  |
| 183 | 176 |  |  | WebApp + MobileApp + AdminApp |  | Tenant - Posting Permissions | Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space | Enterprise Accounts & Formats | 8A. Asset-Class Access & Posting Matrix |  |  |
| 184 | 177 |  |  | WebApp + MobileApp |  | Bulk Upload | Existing enterprise brands rarely upload their own requirements manually on the platform. They typically share bulk requirements via Excel with their RM, who uploads them from the Keydemand Admin Control Panel. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 185 | 178 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | User Management and Restrictions | Sub-user Management | Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel. | Enterprise Accounts & Formats | 10. Admin Control Panel - Core (new app) |  |  |
| 186 | 179 | EP-000 | US-000 | WebApp + MobileApp |  | Enterprise Restrictions | Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. | Enterprise Accounts & Formats | 8. Brand / Tenant / Enterprise Flows |  |  |
| 187 | 180 | EP-000 | US-000 | WebApp + MobileApp | Format | Format/Template Logic | A 'Format' acts as a template for a brand where the physical attributes remain constant, and only the City and Location act as variables. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 188 | 181 | EP-000 | US-000 | WebApp + MobileApp |  | Format Naming | Formats must not be named generically. They must be explicitly named according to the brand's specific model. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 189 | 182 | EP-000 | US-000 | WebApp + MobileApp |  | Format - Creation Hierarchy | When adding a new format in the control panel, the very first mandatory identifier field must be the 'Brand Name'. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 190 | 183 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Admin Panel-Enterprise | Demand Auto-Fill | When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 191 | 184 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Brand Deactivation | Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 192 | 185 | EP-000 | US-000 | WebApp + MobileApp + AdminApp |  | Brand Reactivation | If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, not its previously active demands. | Enterprise Accounts & Formats | 11. Admin - Enterprise Brand & Format Manager |  |  |
| 193 |  |  |  |  | Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) |  |  |  |  |  |  |
| 194 | 189 | EP-000 | US-000 | MobileApp | Mobile UI/UX | Card-Based Interface | Horizontal scrolling tables are prohibited on mobile; all list data must use a card/thumbnail layout. | Mobile App Foundation | 12. Notifications & Mobile Infrastructure |  |  |
| 195 | 190 | EP-000 | US-000 | MobileApp | Mobile UI/UX | Dual Navigation | Provide both a 'Back' button (previous screen) and a 'Close' button (global exit to dashboard) on nested screens. | Mobile App Foundation | 12. Notifications & Mobile Infrastructure |  |  |
| 196 | 191 | EP-000 | US-000 | MobileApp | Mobile UI/UX | Persistent Search Bar | Lock a persistent search & filter bar to the top of any paginated / scrollable list screen so search context is not lost. | Mobile App Foundation | 12. Notifications & Mobile Infrastructure |  |  |
| 197 | 192 | EP-000 | US-000 | MobileApp | Mobile UI/UX | Visible Contact on Cards | Display the agent/user phone number directly on top-level UI cards, immediately below the name. | Mobile App Foundation | 12. Notifications & Mobile Infrastructure |  |  |
| 198 | 193 | EP-000 | US-000 | MobileApp | Mobile UI/UX | Regional Info Button | Show a clickable 'i' info button for macro-regions (Mumbai/MMR, Delhi NCR, Pune/PCMC) listing the included sub-regions. | Mobile App Foundation | 12. Notifications & Mobile Infrastructure |  |  |
| 199 | 194 | EP-000 | US-000 | MobileApp | Mobile Infrastructure | Firebase Integration | Integrate Firebase for Crashlytics (crash reporting) and in-app push notifications. | Notifications & Mobile Infra | 12. Notifications & Mobile Infrastructure |  |  |
| 200 | 195 | EP-000 | US-000 | AdminApp | Admin Dashboard | User & Listing Analytics | Dashboard shows user-level and listing-level aggregates (active agents/tenants/developers/KD; properties/demands/projects by asset class) with clickable drill-downs. | Admin Control Panel | 10. Admin Control Panel - Core (new app) |  |  |
| 201 | 196 | EP-000 | US-000 | AdminApp | Admin - Bulk Upload | Bulk Upload | Support bulk upload (Excel) of properties, demands, projects and enterprise brand formats from the Control Panel. | Admin Enterprise & Formats | 11. Admin - Enterprise Brand Format Data |  |  |
| 202 | 197 | EP-000 | US-000 | AdminApp | Admin - Listing Mgmt | Listing Management | Central listing management to view/edit/activate/deactivate/delete inventory; edit enabled only for Keydemand & Enterprise inventory. | Admin Control Panel | 10. Admin Control Panel - Core (new app) |  |  |
| 203 | 198 | EP-000 | US-000 | AdminApp | Admin - User Mgmt | User Management CRUD | Add/edit/deactivate/delete every user persona (Agents, Individual & Enterprise Tenants, Developers, Managed Operators, KD members) with per-persona fields; deactivate/delete cascades to their inventory. | Admin Control Panel | 10. Admin Control Panel - Core (new app) |  |  |
| 204 | 199 | EP-000 | US-000 | AdminApp | Admin - Control Panel Users | Roles & Permissions | Add control-panel users; assign Super Admin / Admin / Ops roles and toggle module-level permissions (dynamic role creation). | Admin Control Panel | 10. Admin Control Panel - Core (new app) |  |  |
| 205 | 200 | EP-000 | US-000 | AdminApp | Admin - Projects | Project & Category Management | Add Developer & Managed-Space projects, assign KD members and set Category (Standard / Premium / Exclusive). | Office / Managed Space Flows | 9. Managed Space as Project Asset Class |  |  |
| 206 | 201 | EP-000 | US-000 | AdminApp | Admin Dashboard | Google Analytics | Show Google Analytics active-user data (Daily / Weekly / Monthly) on the Admin dashboard and user dashboard. | Admin Control Panel | 10. Admin Control Panel - Core (new app) |  |  |
| 207 | (blank row) |  |  |  |  |  |  |  |  |  |  |
| 208 |  |  |  |  | Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] |  |  |  |  |  |  |
| 209 | 202 | EP-000 | US-000 | WebApp + MobileApp | Broker Relationship Manager | BRM Persona | A new Keydemand User-Portal persona - the Broker Relationship Manager (BRM) - can access ALL External Subscribed Brokers (Property Agents) and their activity to address broker concerns. Acts as the relationship owner for external brokers. |  | KD Enterprise, Broker & Notifications | 6A. Broker Relationship Manager (BRM) |  |
| 210 | 203 | EP-000 | US-000 | WebApp + MobileApp |  | Broker Directory | BRM sees a consolidated directory of external subscribed brokers with subscription status, city, registration date and source/mode. |  | KD Enterprise, Broker & Notifications | 6A. Broker Relationship Manager (BRM) |  |
| 211 | 204 | EP-000 | US-000 | WebApp + MobileApp |  | Broker Metrics Drill-down | For each broker, BRM can view properties & demands added, leads received, relevancies, contacts made, missed calls and ignored image requests. |  | KD Enterprise, Broker & Notifications | 6A. Broker Relationship Manager (BRM) |  |
| 212 | 205 | EP-000 | US-000 | WebApp + MobileApp |  | Read-only Oversight | BRM access is read-only; the BRM cannot edit or delete a broker's listings/demands. The view exists purely to monitor activity and resolve broker concerns/complaints. |  | KD Enterprise, Broker & Notifications | 6A. Broker Relationship Manager (BRM) |  |
| 213 | 206 | EP-000 | US-000 | AdminApp |  | BRM Permission | The BRM capability is a permission assigned from the Admin Control Panel to designated Keydemand users; scope can be all brokers or only those they personally onboarded. |  | KD Enterprise, Broker & Notifications | 6A. Broker Relationship Manager (BRM) |  |
| 214 | (blank row) |  |  |  |  |  |  |  |  |  |  |
| 215 |  |  |  |  | PHASE 2  -  Deferred items (NOT in Phase 1 scope) |  |  |  |  |  |  |
| 216 | 207 | EP-000 | US-000 | WebApp + MobileApp | Admin Panel-General | No Phase 1 Chatbot | A live chatbot is NOT a mandatory feature and will not be built or integrated for the Phase 1 launch (deferred to a later phase). | Deferred / Phase 2 | Deferred / Phase 2 |  |  |
| 217 | 208 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Admin Panel-General | Granular Permissions | Highly granular, module-level permission toggles must be deferred to Phase 2 development to prevent over-engineering. | Deferred / Phase 2 | Deferred / Phase 2 |  |  |
| 218 | 209 | EP-000 | US-000 | WebApp + MobileApp + AdminApp | Keydemand | Future Phase | In a future release phase, Keydemand users will be permitted to add projects and developers directly. | Deferred / Phase 2 | Deferred / Phase 2 |  |  |

#### Tab "Overall Milestones"
**Keydemand V2 - Phase 1 | Delivery Plan & Timeline**

This plan delivers the full Phase-1 change-request & enhancements along with pending workitems for Keydemand V2 across two modules - the User Portal (one web + mobile app, shared codebase) and the Admin Control Panel - together with all the behind-the-scenes engineering (APIs, database, data migration from the current V1 system, and hosting). The work builds on the existing V2 foundation, is delivered in short sprints, and is tested continuously so we reach a stable, business-approved launch on 6 November 2026.

**At a glance**
| Item | Value |
|---|---|
| Kickoff | 6 July 2026 (Monday) |
| Go-Live (Production) | 6 November 2026 (Friday) |
| Total duration | ~18 weeks (about 4.5 months) |
| Delivery approach | Agile - complete design up front, short build sprints, continuous QA, business sign-off before launch |
| Products | User Portal (web + mobile, one shared codebase) and the Admin Control Panel |
| Scope | All Phase-1 CRs: user journeys, Keydemand Team persona, High-Value-Lead engine, Admin Control Panel, data migration |

**Key Milestones & Dates**
| Milestone | Target date | Week | What it means |
|---|---|---|---|
| Kickoff | 06-Jul-2026 | W1 | Programme starts; requirements & full platform design underway. |
| Complete Platform Design Sign-off | 17-Jul-2026 | W2 | All screens (web/mobile/admin), data model and API contracts agreed. |
| Sprint 1 Complete - Foundation | 07-Aug-2026 | W5 | Global rules, registration/login and landing pages in Dev. |
| Sprint 2 Complete - Admin Control Panel | 28-Aug-2026 | W8 | Admin user management, configuration & bulk uploads in Dev. |
| Sprint 3 Complete - User Journeys | 11-Sep-2026 | W10 | Agent, Subscription, Brand/Enterprise, Access Matrix, Managed-Space in Dev. |
| DEV Complete (Feature-Complete) | 25-Sep-2026 | W12 | Keydemand Team persona, High-Value-Leads, Notifications & Mobile all built. |
| Migration Validated + SIT/QA Complete | 16-Oct-2026 | W15 | V1 data migrated & all three surfaces tested in SIT. |
| UAT Sign-off | 30-Oct-2026 | W17 | Business team accepts the platform. |
| Go-Live (Production) | 06-Nov-2026 | W18 | Platform live; V1 users migrated with 3-month free access. |

**Team & responsibilities**
| Team member | Role | Responsible for |
|---|---|---|
| Sathish(Lead) | Backend & DevOps | All server-side APIs, database & schema, data migration (V1 -> V2), hosting/environments (Dev, SIT, UAT, Production) and security. |
| Krishna | Frontend | The User Portal (web + mobile from ONE shared codebase - build once, verify the mobile screens) and the Admin Control Panel. |
| John & Patrik | Quality Assurance | Independent end-to-end testing of all three surfaces (Web, Mobile, Admin), the V1 -> V2 migration, and support during business UAT. |
| Keydemand Business Team | Acceptance | Validates the platform against real business scenarios during UAT and gives the final go-ahead for launch. |

**Who uses which product**
| Product | Users |
|---|---|
| User Portal (Web + Mobile) | Property Agents, Brands & Tenants (individual + enterprise), Developers/Operators, and Keydemand personas - the Keydemand Team AND the Broker Relationship Manager (BRM), a Keydemand role that oversees all external subscribed brokers and their metrics to resolve their concerns. All of these are personas INSIDE the User Portal, NOT separate apps. |
| Admin Control Panel | Only the small Keydemand Admin team (4-5 core users) - for user onboarding, bulk uploads, pricing & city configuration, and High-Value-Lead rules. |

**How we work (in plain terms)**
- >> We start from the platform already built in V2, the pending work includes the mix of new features along with enhancements plus Admin module
- >> We complete the full platform design first (all screens, data model and API contracts) before heavy build begins.
- >> We build the Admin Control Panel early (Sprint 2): it configures platform-wide settings (users, pricing, High-Value-Lead rules), which lets the user-app features be developed and tested end-to-end.
- >> The Web and Mobile apps share one codebase, so features are built once and the mobile screens are double-checked - not built twice.
- >> Backend, Frontend and Testing run in parallel every sprint; each sprint ends with working software the business can preview.
- >> Nothing goes live until the Keydemand business team signs off in UAT.
- >> One week of database-schema work now runs in parallel with backend development, so Go-Live moves one week earlier - to 6 November 2026.

#### Tab "Effort Summary by App"
**Effort Summary by App (weeks)**
Build effort in weeks on the existing V2 base. Owners: Sathish = ALL Backend + DB + Migration + DevOps + Security; Krishna = ALL Frontend. Web & Mobile share ONE codebase - the 'Mobile App' column is only the native-only delta. John = QA across all three surfaces + migration + UAT. Group 6A (Broker Relationship Manager) is a new User-Portal persona added within the same timeline (builds on the Keydemand broker-monitoring scope).

| Feature Group | Admin App (FE) | Web App (FE) | Mobile (native delta) | Backend / API | DB & Schema | QA | Total | Scope covered | (col J note) |
|---|---|---|---|---|---|---|---|---|---|
| 1. Global Terminology & Field Rules | 0 | 0.5 | 0 | 1 | 0 | 0.5 | 2 | Renames (Agent->Property Agent, POC), hide-empty fields, area validation, OC 3-value standardization, PDF export, RERA, field lock/unlock, image shuffling. | |
| 2. Auth, Registration & Login | 0 | 0.5 | 0 | 1 | 0 | 0.5 | 2 | OTP 30s cooldown, abandoned-session lead capture + resume, remove email/profile-pic from register, Official Email ID logic, T&C + 18+ consent, password/session rules, relevancy fields in quick-reg. | Broken registration should also generate the lead |
| 3. Landing Page & Discovery | 0 | 0.5 | 0 | 0.5 | 0 | 1 | 2 | Bengaluru default, dynamic sponsored/exclusive city tabs, project view toggle, unregistered property view, CTA gating, Request-a-callback, List-your-Project, Google Maps, client logos, free-listing hooks. | Images unlocked for unregistered users |
| 4. Agent Flow, Dashboard & Subscription | 0 | 0.5 | 0 | 1 | 0 | 0.5 | 2 | Dashboard cleanup + plan labels, duplicate-click prevention, image-request flow, high-end demand hiding, agent onboarding city selector. | |
| 5. Subscription & Pricing (cross-app) | 0.5 | 0.5 | 0 | 1 | 0.5 | 0.5 | 3 | GST invoice, Razorpay native page, immediate price sync, tier/city management, manual-renewal default, next-cycle billing, no city deletion, indicative-cities protection, complimentary access. | |
| 6. Keydemand Team (User-Portal persona) | 0 | 0.5 | 0.5 | 1 | 1 | 1 | 4 | Persona INSIDE the User Portal (assigned to Keydemand agents): dashboard drill-downs, My/Overall segmentation, My/KD listings, projects Assigned/All, enterprise-accounts breakdown + CRM-lite, action-tracking/audit trail, manage listings.. | |
| 6A. Broker Relationship Manager (BRM) | 0.5 | 0.5 | 0 | 0.5 | 0 | 0.5 | 2 | Keydemand User-Portal persona (Broker Relationship Manager) that oversees ALL external subscribed brokers: consolidated broker directory + per-broker drill-down of properties/demands added, leads received, relevancies, contacts recieved, contacts requested and ignored image requests - read-only, to resolve broker concerns. Builds on the KD broker-monitoring scope; capability toggled from Admin. | |
| 7. High Value Leads (HVL) Engine | 0.5 | 0.5 | 0 | 1 | 0.5 | 0.5 | 3 | Per-city/asset/size thresholds (configured in Admin), Tier-1 vs Tier-2 routing, exclusive-to-KD hiding, manual unlock, relevancy notify, email + WhatsApp alerts, agent exemption. | |
| 8. Brand / Tenant / Enterprise Flows | 0.5 | 0.5 | 0 | 0.5 | 0 | 0.5 | 2 | Brand-name display, 5-number view limit -> enterprise user login, brand-logo/image logic, enterprise multi-user restrictions, brand requirements deactivate/reactivate. | |
| 8A. Asset-Class Access & Posting Matrix | 0.5 | 0.5 | 0 | 0.5 | 0 | 0.5 | 2 | Per-persona explore/post matrix. Retail & F&B (Ind & Ent) explore Retail+F&B only; Office & Managed explore Office+Managed only; posting locked to registered asset class. | |
| 9. Managed Space as Project Asset Class | 0.5 | 0.5 | 0 | 0.5 | 0 | 0.5 | 2 | New Managed-Space asset class under Projects (lease-only), operators treated as Developers (offline onboarding), Managed-Space demands KD-exclusive. | |
| 10. Admin Control Panel - Core (built Sprint 2) | 2 | 0 | 0 | 1 | 0.5 | 0.5 | 4 | Used by the Keydemand Admin team. User & listing dashboards + GA, user-management CRUD for every persona (cascades to inventory), central listing & project management, control-panel users + dynamic roles, enquiries. | |
| 11. Admin - Enterprise Brand & Format Manager | 0.5 | 0 | 0 | 0.5 | 0.5 | 0.5 | 2 | Enterprise brand CRUD, multi-format templates, bulk & single demand upload, brand deactivation cascade. | |
| 12. Notifications & Mobile Infrastructure | 0.5 | 0.5 | 1 | 0.5 | 0 | 0.5 | 3 | Web & Mobile share ONE codebase; this Mobile figure is the native-only delta: Firebase Crashlytics + push, app build/store release, mobile-screen double-check. Plus email/WhatsApp (Interakt) & notification centre. | |
| 13. Compliance, Legal & Attribution | 0 | 0.5 | 0 | 0.5 | 0 | 1 | 2 | Grievance Officer, Privacy-Policy cookie clause, legal entity 'Keyproperty', hidden-image event tracking, Singular/Branch attribution, data residency. | |
| Feature-group subtotal | 6 | 6.5 | 1.5 | 11 | 3 | 9 | 37 | | |


**Platform Foundation & QA (parallel)**
| Item | QA | Total | Scope |
|---|---|---|---|
| V1 -> V2 Data & Content Migration (Sathish) | 0 | 2 | Auto-migrate active V1 users, 3-mo complimentary access, images/videos/PDF; validated in SIT. |
| DevOps - Dev/SIT/UAT/PROD (Sathish) | 0 | 2 | Pipelines, environments, monitoring, release. |
| Security & Hardening (Sathish) | 0 | 1 | Authz on new personas (incl. BRM), admin session security, fixes. |
| Migration validation testing (John & Patrik) | 2 | 2 | QA validates the V1 -> V2 migration in SIT. |
| Cross-app regression & UAT support (John & Patrik) | 1 | 1 | Regression across Web/Mobile/Admin + UAT support. |

**TOTAL EFFORT BY OWNER (weeks) - fits the ~18-week window**
| Owner line | Weeks |
|---|---|
| Sathish - Backend / API build | 11 |
| Sathish - DB & Schema (1 wk runs parallel to backend) | 3 |
| Sathish - V1->V2 Migration | 2 |
| Sathish - DevOps | 2 |
| Sathish - Security | 1 |
| >> Sathish TOTAL (Backend + DevOps) | 19 |
| Krishna - Admin App FE | 6 |
| Krishna - Web App FE | 6.5 |
| Krishna - Mobile (native delta) | 1.5 |
| >> Krishna TOTAL (All Frontend) | 14 |
| >> John & Patrik - QA (all 3 apps + migration + UAT) | 12 |

Footnote (source): "Effort is rounded to whole weeks. Sathish = 19 wk, Krishna = 14 wk, QA = 12 wk (John, supported part-time by Patrik) - committed across the ~18-week window. One week of DB-schema work runs in parallel with backend development, so Go-Live is 6 November 2026. Web & Mobile share one codebase (Mobile column = native-only delta). The Broker Relationship Manager (6A) is a User-Portal persona within the same timeline."

#### Tab "Sheet1"
| Work Item | Planned Release | Scope | Why |
|---|---|---|---|
| Global Terminology & Rule Changes | July | Renames (Agent->Property Agent, POC), hide-empty fields, area validation, OC 3-value standardization, PDF export, RERA, field lock/unlock, image shuffling. | low impact changes to comply with newer business asks |
| Auth, Registration & Login | July | relevancy changes in quick registration | low complexity & highly important to flow testing |
| High Value Leads (HVL) Engine - Phase 1 | July | TBD | Give a complete but MVP flow so that even if we release to production, this will work for all simple use cases |

#### Tab "Schedule"
**Schedule (weekly) - 6 Jul to 6 Nov 2026.** Week columns: 06-Jul, 13-Jul, 20-Jul, 27-Jul, 03-Aug, 10-Aug, 17-Aug, 24-Aug, 31-Aug, 07-Sep, 14-Sep, 21-Sep, 28-Sep, 05-Oct, 12-Oct, 19-Oct, 26-Oct, 02-Nov. [Image: colour-filled Gantt bars in the week cells — not readable as text]

| Workstream / Phase | Owner | Eng-wks |
|---|---|---|
| **SDLC STAGES** | | |
| Requirements & Complete Platform Design | Team | |
| Development (Sprint1 Foundation -> Sprint2 Admin -> Sprint3 Journeys -> Sprint4 KD/BRM/HVL/Mobile) | SAT+KRI | |
| Write Test Cases | John | |
| Feature Functional Validation (SIT) | John & Patrik | |
| Data Migration & System Testing (SIT) | SAT+John | |
| User Acceptance Testing (UAT) | Business+John&Patrik | |
| Go-Live | SAT | |
| **DETAILED WORKSTREAMS** | | |
| Requirements & Complete Platform Design | SAT/KRI | 2 |
| Global rules & Field validation | SAT/KRI | 1 |
| Auth, Registration & Login | SAT/KRI | 2 |
| Landing Page & Discovery | SAT/KRI | 2 |
| Admin Control Panel (core + config + formats) | SAT/KRI | 6 |
| Agent Flow & Subscription/Pricing | SAT/KRI | 3 |
| Brand/Enterprise, Access Matrix & Managed-Space | SAT/KRI | 3 |
| Keydemand Team persona (User Portal) | SAT/KRI | 3 |
| Broker Relationship Manager (BRM) view | SAT/KRI | 1 |
| High Value Leads (HVL) Engine | SAT/KRI | 3 |
| Notifications & Mobile finalisation | SAT/KRI | 3 |
| Compliance, Legal & Attribution | SAT/KRI | 1 |
| DB schema & migrations (1 wk parallel to backend) | SAT | 3 |
| V1 -> V2 Data / Content migration | SAT | 1 |
| DevOps (Dev/SIT/UAT/PROD envs) | SAT | 2 |
| Security & Hardening | SAT | 1 |
| SIT / QA testing (Web + Mobile + Admin) | John & Patrik | 9 |
| Migration validation testing | John & Patrik | 1 |
| UAT validation & sign-off | Business + John & Patrik | 1 |
| Go-Live cutover | SAT | 1 |

Legend: Design · Build · Admin build · BRM · Migration · SIT/QA · UAT · Go-Live.
Note: "One week of DB-schema work runs in parallel with backend development, compressing the plan from 19 to 18 weeks (Go-Live 6 Nov)."

#### Tab "Delivery Tracker"
**Delivery Plan - Software Development Life Cycle (SDLC)**
We finish the complete platform design first, then build in four sprints - starting with the Admin Control Panel (which controls platform-wide configuration) so the user journeys can be built and tested seamlessly - followed by migration, testing, business acceptance and launch.

| # | Stage | Dates | What happens (plain English) | Who | Outcome / Milestone |
|---|---|---|---|---|---|
| 1 | Requirements & Complete Platform Design | 06 Jul - 17 Jul 2026 | Finalise the detailed requirements from the CR list and complete the design of the WHOLE platform - all screens (web/mobile/admin), the data model and the API contracts - so build runs smoothly. | Whole team | Complete design sign-off |
| 2 | Build Sprint 1 - Foundation | 20 Jul - 07 Aug 2026 | Shared platform base: global changes (renaming, field rules, validations), the new registration & login experience, and the public landing & discovery pages. | Sathish + Krishna | Foundation working in Dev |
| 3 | Build Sprint 2 - Admin Control Panel | 10 Aug - 28 Aug 2026 | The Admin Control Panel built early: user onboarding & management, subscription/pricing & city configuration, High-Value-Lead rules, enterprise brand & format setup, bulk uploads, roles. This controls the platform so user journeys build & test seamlessly. | Sathish + Krishna | Admin Control Panel working in Dev |
| 4 | Build Sprint 3 - User Journeys & Subscriptions | 31 Aug - 11 Sep 2026 | User Portal journeys that consume the Admin configuration: Property-Agent flow & dashboard, subscriptions & payments, Brand/Tenant/Enterprise journeys, the asset-class access matrix and Managed-Space. | Sathish + Krishna | User journeys working in Dev |
| 5 | Build Sprint 4 - Keydemand Team, High-Value Leads & Mobile | 14 Sep - 25 Sep 2026 | The Keydemand Team persona inside the User Portal (dashboards, listings, enterprise accounts), the Broker Relationship Manager (BRM) view over all external subscribed brokers, the High-Value-Lead routing engine, notifications, mobile-screen finalisation and compliance items. | Sathish + Krishna | Feature-complete (DEV Complete) |
| 6 | Data Migration & System Testing (SIT) | 28 Sep - 16 Oct 2026 | Migrate all existing V1 users & content into V2, and have QA test all three surfaces (Web, Mobile, Admin) end-to-end plus the migration in the SIT environment. | Sathish + John & Patrik | Tested, migration-validated build |
| 7 | User Acceptance Testing (UAT) | 19 Oct - 30 Oct 2026 | The Keydemand business team (with QA) validates the platform against real business scenarios and signs off. | Business + John & Patrik | Client UAT sign-off |
| 8 | Go-Live | 02 Nov - 06 Nov 2026 | Final production cutover, V1 users migrated with 3 months complimentary access, and the platform goes live. | Sathish | Live in Production - 6 Nov |

### Business rules extracted
Rules BR-CR-001 … BR-CR-205 = one per populated Business Rule row of the main tab, in sheet order (source wording, Business Rule Type in brackets).

- **BR-CR-001** — [Empty Fields] Any field left empty should be hidden from the UI in view mode(non mandatory fields) _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 1, row 3; Module: WebApp + MobileApp)_
- **BR-CR-002** — [Renaming] Rename 'Agent' to 'Property Agent' and 'Tenant' to 'Office Tenant' and Managed Space Tenant globally. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 2, row 4; Module: WebApp + MobileApp)_
- **BR-CR-003** — [Control Panel Access] The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core users. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 3, row 5; Module: AdminApp)_
- **BR-CR-004** — [V2 Phase 1 Roles] For the initial launch, enforce strictly three primary administrative roles in the Control Panel: 'Super Admin',  'Admin' and 'Ops User'. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 4, row 6; Module: Admin App)_
- **BR-CR-005** — [Super Admin Privileges] The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 5, row 7; Module: Admin App)_
- **BR-CR-006** — [Dynamic Role Creation] The system must include functionality allowing the core admin team to dynamically create new internal users and assign their access permissions across the platform. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 6, row 8; Module: Admin App)_
- **BR-CR-007** — [Admin Login Protocol] Admin account creation requires a name, email ID, and permissions set. Login operates via email and password. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 7, row 9; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-008** — [Password Complexity] Passwords must contain at least 6 characters, including one uppercase letter, one number, and one special character. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 8, row 10; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-009** — [Session Timeout] Admin sessions must automatically time out after 15 minutes of inactivity for security purposes. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 9, row 11; Module: Admin App)_
- **BR-CR-010** — [Automated Migration] All active V1 users must be automatically migrated to the new V2 platform. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 10, row 12; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-011** — [Complimentary Access] At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 11, row 13; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-012** — [Privacy Policy Action] The Privacy Policy must immediately append a conditional scope clause into the Privacy Policy detailing potential future chatbot integrations. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 12, row 14; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-013** — [Validation Logic] Trigger an explicit error for incomplete email addresses or mandatory fields. The system must visually highlight the missing section and guide the user to it. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 13, row 15; Module: WebApp + MobileApp)_
- **BR-CR-014** — [Redirection] The interface should automatically redirect the user to the precise location of any missing fields. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 14, row 16; Module: WebApp + MobileApp)_
- **BR-CR-015** — [PDF Download] Implement the missing functionality where we allow users to download a PDF of their own 'My Listings'. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 15, row 17; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-016** — [Area Validation] Carpet Area must strictly be less than or equal to the Built-up Area. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 16, row 18; Module: WebApp + MobileApp)_
- **BR-CR-017** — [Filters & Sorting] Implement comprehensive filters (e.g., City) and sorting options (e.g., 'Most Demands,' 'Most Properties Posted,' 'Most Leads Received') on the dashboard to allow effective monitoring. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 17, row 19; Module: WebApp + MobileApp)_
- **BR-CR-018** — [Field Editability] Ensure that 'yes' fields remain editable by users even after a response has been received. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 18, row 20; Module: WebApp + MobileApp)_
- **BR-CR-019** — [Demand Posting] Expand the 'other interested location' options to allow users to input at least 3 additional localities. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 19, row 21; Module: WebApp + MobileApp)_
- **BR-CR-020** — [OC Supply Standardization] To prevent contradictions in the relevance Machine Learning (ML) models, the 'OC Status' fields across all property and project backend sheets must be unified to exactly three terms: 'Available', 'Not available', and 'Under construction'. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 20, row 22; Module: WebApp + MobileApp)_
- **BR-CR-021** — [Draft Auto-Save] The system must automatically save a draft of a property or demand listing every 30 seconds during the posting flow. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 21, row 23; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-022** — [Brand Image Display] If a brand logo/image is uploaded in the backend, it must display as the demand image. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 22, row 24; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-023** — [Reference Images] Show sample reference images during the image upload step so users understand what kind of photos to upload. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 23, row 25; Module: —)_
- **BR-CR-024** — [User Permissions] Grant users the ability to modify all fields except for the core City and Location parameters. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 24, row 26; Module: WebApp + MobileApp)_
- **BR-CR-025** — [Image Shuffling] For demands without brand logos, the UI should shuffle between a pool of five high-quality asset-class images to maintain a dynamic look. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 25, row 27; Module: WebApp + MobileApp)_
- **BR-CR-026** — [Locked Fields] Ensure Asset Class, Transaction Type, City, and Location remain permanently locked. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 26, row 28; Module: WebApp + MobileApp)_
- **BR-CR-027** — [Unlocked Fields] Unlock 'Other interested locations' and 'Possession needed' fields so they can be edited after initial submission _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 27, row 29; Module: WebApp + MobileApp)_
- **BR-CR-028** — [Property Cards Display] Listing Title: Display the Project Name, if available. If absent, use the descriptive format: [Store Type] [Asset Class] Property. Posted By: Display the name of the specific Agent. If posted by the Keydemand team, display 'Keydemand'. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 28, row 30; Module: WebApp + MobileApp)_
- **BR-CR-029** — [Demand Cards Display] Categories: Retail Demand, Office Demand, Managed Space Demand, F&B Demand. Posted By: Display the specific Brand, Tenant, or Agent name. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 29, row 31; Module: WebApp + MobileApp)_
- **BR-CR-030** — [RERA Numbers] Add a mandatory field to capture RERA numbers, restricted strictly to the project level. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 30, row 32; Module: WebApp + MobileApp)_
- **BR-CR-031** — [Grievance Officer] Appoint and clearly display the contact details for a Grievance Officer, satisfying both DPDP and GDPR mandates. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 31, row 33; Module: WebApp + MobileApp)_
- **BR-CR-032** — [Event Tracking] Implement strict event tracking to monitor user behaviour when they encounter hidden images to support A/B testing and funnel analysis. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 32, row 34; Module: WebApp + MobileApp)_
- **BR-CR-033** — [Privacy Policy] A conditional scope clause detailing potential future chatbot integrations must be added to the Privacy Policy immediately. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 33, row 35; Module: WebApp + MobileApp)_
- **BR-CR-034** — [Leads Renaming] Rename the existing 'contact inquiries' section to 'leads' to streamline the interface.Inquiries + Image Requests = Lead). _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 34, row 36; Module: WebApp + MobileApp)_
- **BR-CR-035** — [Legacy Data] Recognise that any lead counts currently visible are legacy data, as the system lacks an active mechanism to increment them. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 35, row 37; Module: WebApp + MobileApp)_
- **BR-CR-036** — [Attribution Tracking] User acquisition sources (e.g., Organic vs. Paid) will be tracked using the user's phone number as the primary source of truth. _(§ Final › 'Phase 1 - CRs and New Business' › Applies to all user journeys(Generic) › Sno 36, row 38; Module: WebApp + MobileApp)_
- **BR-CR-037** — [CTA Restrictions] Ensure unregistered users are prompted to register only when clicking actionable elements like 'View Phone Number' or 'Contact Us'. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 37, row 40; Module: WebApp + MobileApp)_
- **BR-CR-038** — [Request a Callback] Add a 'Request a callback' button alongside the 'Book a demo' option in About Keydemand video section. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 38, row 41; Module: WebApp + MobileApp)_
- **BR-CR-039** — [Book a Demo] Change 'Book a demo' text to 'Send an inquiry' in the About section. Add two provided logos to the client marquee. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 39, row 42; Module: WebApp + MobileApp)_
- **BR-CR-040** — [OTP Wait Timer] The system must strictly enforce a 30-second cooldown period before a user can request an OTP resend. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 40, row 43; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-041** — [Compliance & Verification] Age verification (18+) is managed via the standard Terms & Conditions agreement. No separate DOB field or checkbox is required in the registration flow. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 41, row 44; Module: —)_
- **BR-CR-042** — [Abandoned Session] If a user successfully verifies their mobile number via OTP but abandons the registration process before completing their profile, the backend must instantly capture and log that mobile number as an actionable lead. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 42, row 45; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-043** — [Resuming Registration] If a user who previously abandoned their registration returns and enters their verified mobile number, the system must bypass the initial verification steps and direct them straight to the profile setup page. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 43, row 46; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-044** — [Form Cleanup] Remove the email address field from the user registration form completely. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 44, row 47; Module: WebApp + MobileApp)_
- **BR-CR-045** — [Age Verification Verbiage] The registration screen must explicitly enforce 18+ consent using this exact required phrase: 'by continuing you confirm you are 18 years and above'. and a tick _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 45, row 48; Module: WebApp + MobileApp)_
- **BR-CR-046** — [Profile Picture Uploads] The profile picture upload feature must be completely removed from the initial registration form to prevent user drop-off and distraction. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 46, row 49; Module: WebApp + MobileApp)_
- **BR-CR-047** — [Email Field Labeling] The email input field across forms must be universally explicitly labeled as 'Official Email ID'. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 47, row 50; Module: WebApp + MobileApp)_
- **BR-CR-048** — [Email Field Validation] Strict domain-level validation (such as actively blocking generic domains like '@gmail.com') is NOT enforced in the system. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 48, row 51; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-049** — [Email Logic] Email addresses are strictly mandatory for all entity-level profiles, which includes Brands and Office Tenants. Email addresses are optional for Agent profiles. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 49, row 52; Module: WebApp + MobileApp)_
- **BR-CR-050** — [Promotional Hook] Feature a '1 free listing' notification on the Agent Home page (Navbar or first fold) for new users to incentivise posting. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 50, row 53; Module: WebApp + MobileApp)_
- **BR-CR-051** — [Property Detail Access] Implement functionality allowing unregistered users to view property details by default. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 51, row 54; Module: WebApp + MobileApp)_
- **BR-CR-052** — [Image Restrictions] Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 52, row 55; Module: WebApp + MobileApp)_
- **BR-CR-053** — [Default City] Set the default city to Bengaluru (instead of Mumbai) when a user visits the platform for the first time. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 53, row 56; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-054** — [Incentive Messaging] Design and implement a pre-wall popup or graphic that communicates the 'free listing' reward to users before they begin the registration flow. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 54, row 57; Module: WebApp + MobileApp)_
- **BR-CR-055** — [Landing Page City Tabs] Remove static city tabs from the exclusive projects section. Make the city tabs for sponsored projects dynamic, so they only display cities with active project inventory. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 55, row 58; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-056** — [Client Logos] Add the names and logos for 'Office Tenant' and 'Managed Office Spaces' to the static client section on the landing page. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 56, row 59; Module: WebApp + MobileApp)_
- **BR-CR-057** — [Navbar Inquiry Button] Add a 'List your project' (Developer/Managed Space Inquiry) button to the top navigation bar that triggers an inquiry form without requiring a user login. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 57, row 60; Module: WebApp + MobileApp)_
- **BR-CR-058** — [Cities Tabs] Remove the 'Cities' tabs entirely from this section of the Exclusive Projects section. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 59, row 61; Module: WebApp + MobileApp)_
- **BR-CR-059** — [Dynamic City Tabs] Add dynamic city tabs based on where projects are actively listed (e.g., if a project is in Nashik, show a 'Nashik' city tab). _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 60, row 62; Module: WebApp + MobileApp)_
- **BR-CR-060** — [City Defaults] If a user searches for a location without active properties, the system should default to the closest city with available inventory, accompanied by a messaging banner. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 61, row 63; Module: WebApp + MobileApp)_
- **BR-CR-061** — [Sponsored Projects] The 'Sponsored Projects' section must feature dynamic city tabs that only display the specific cities where current sponsored projects are active. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 62, row 64; Module: WebApp + MobileApp)_
- **BR-CR-062** — [Immediate Lead Capture] Update the 'Show Interest' API logic to capture the phone number as a lead the exact moment OTP verification is successful. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 63, row 65; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-063** — [Project Filter] Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 64, row 66; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-064** — [Single-Select Restraint] The 'Operating City' (or base city) selector must be a single-select dropdown, replacing any multi-select functionality. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 65, row 67; Module: WebApp + MobileApp)_
- **BR-CR-065** — [City Categorization] The dropdown category previously labeled 'Other cities' must be explicitly renamed to 'Popular cities'. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 66, row 68; Module: WebApp + MobileApp)_
- **BR-CR-066** — [Geographic Groupings] Sub-locations and micro-markets in Goa must be consolidated under a single 'Goa' parent category. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 67, row 69; Module: WebApp + MobileApp)_
- **BR-CR-067** — [Google Maps Integration] Integrate Google Maps into the search/typing functionality for accurate locality selection. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 68, row 70; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-068** — [Regional Tooltips] For macro-regions like Mumbai/MMR, Delhi NCR, and Pune/PCMC, the user interface must display exactly what sub-regions are included. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 69, row 71; Module: WebApp + MobileApp)_
- **BR-CR-069** — [Terms & Policies] Include an explicit, mandatory checkbox for 'Terms of Use' and 'Privacy Policy' in all registration flows to ensure compliance with DPDP/GDPR. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 70, row 72; Module: WebApp + MobileApp)_
- **BR-CR-070** — [Phone Number Disclosure] Include explicit consent terms regarding phone number sharing during registration to ensure users are informed that their number is shared upon request. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 71, row 73; Module: WebApp + MobileApp)_
- **BR-CR-071** — [Relevancy Matching] Ensure that all fields critical for backend relevancy matching are permanently included in the initial quick registration form. _(§ Final › 'Phase 1 - CRs and New Business' › Landing Page and Login Flows › Sno 72, row 74; Module: WebApp + MobileApp)_
- **BR-CR-072** — [High-End Demands Logic] Agents are restricted from viewing demands that fall within city-specific high-ticket thresholds (HVLs). _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 73, row 76; Module: WebApp + MobileApp)_
- **BR-CR-073** — [Dashboard Cleanup] Remove the redundant 'lead management' section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 74, row 77; Module: WebApp + MobileApp)_
- **BR-CR-074** — [Dashboard Subscription Text] Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., 'Free Plan,' 'Trial Plan,' 'Usage 0 of 1'). _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 75, row 78; Module: WebApp + MobileApp)_
- **BR-CR-075** — [Agent Onboarding] On the Profile page, change the 'Operating City' field to a single-select dropdown using a visual selection layout similar to the landing page city selector. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 76, row 79; Module: WebApp + MobileApp)_
- **BR-CR-076** — [Onboarding Fields] When an Admin adds an agent, they must input the agent's name, mobile number, email, designation, and assigned city. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 77, row 80; Module: AdminApp)_
- **BR-CR-077** — [Subscription Billing] Automatically provide GST invoices to users after they subscribe. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 78, row 81; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-078** — [Subscription/Payment Flow] Implement the Razorpay component embedded into a dedicated native page (instead of a direct API popup). _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 79, row 82; Module: WebApp + MobileApp)_
- **BR-CR-079** — [Subscription Status] Unsubscribed agents must see a 'Trial Plan' label with the free listing offer. Paid users should be tagged as 'Pro Member'. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 80, row 83; Module: WebApp + MobileApp)_
- **BR-CR-080** — [Complimentary Access] Admins have the capability to assign zero-charge subscriptions to agents from the backend. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 81, row 84; Module: AdminApp)_
- **BR-CR-081** — [Pricing Updates] Price changes made by Admins via the Control Panel must reflect on the front end immediately. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 82, row 85; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-082** — [Tier Management] Admins can edit subscription prices and add new cities to specific categorizations. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 83, row 86; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-083** — [Auto-Renewal] Subscriptions should default to manual renewal unless the user explicitly opts into auto-renewal during checkout. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 84, row 87; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-084** — [Billing Cycle Impact] For active users, updated subscription prices will only take effect and bill starting from their next billing cycle. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 85, row 88; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-085** — [Indicative Cities Protection] Existing indicative cities pre-populated within the tiers must not be removed from their respective categories. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 86, row 89; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-086** — [Duplicate Click Prevention] Prevent multiple clicks by the same user on a single property from incrementing the view count. Display an 'Already requested' message. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 87, row 90; Module: WebApp + MobileApp)_
- **BR-CR-087** — [Image Requests] When a user requests locked images, they must be logged in. This action shares their phone number with the listing owner. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 88, row 91; Module: WebApp + MobileApp)_
- **BR-CR-088** — [Massive Demand Bypass] If an external agent posts a massive demand (e.g., >10,000 sq ft in Bangalore), it bypasses the 'Keydemand exclusive' block and becomes visible to other agents. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 89, row 92; Module: WebApp + MobileApp)_
- **BR-CR-089** — [Transparency] The agent's name must be displayed whenever they post a property or demand. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 90, row 93; Module: WebApp + MobileApp)_
- **BR-CR-090** — [Configurable Permissions] Admins can selectively toggle an agent's ability to explore demands, post properties/demands, access broker management, view Key Demand listings, and view assigned enterprise brands. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 91, row 94; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-091** — [No City Deletion] The ability to 'Delete' a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts. _(§ Final › 'Phase 1 - CRs and New Business' › Agent Flow › Sno 92, row 95; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-092** — [Onboarding & Authentication] Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 93, row 97; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-093** — [Role-Based Access] Account creation is strictly permission-based; specific privileges are managed via the admin portal. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 94, row 98; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-094** — [Profile Management] The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 95, row 99; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-095** — [Dashboard] Apply the color hues, hover effects, and overall visual accents from the existing Agent mobile app to the Keydemand web dashboard to ensure uniformity. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 96, row 100; Module: WebApp + MobileApp)_
- **BR-CR-096** — [Team Inventory Capabilities] Keydemand members can view the inventory of other team members within their 'Listings' dashboard, but they are strictly restricted to editing only their own self-listings. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 97, row 101; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-097** — [Backup Coordination] If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 98, row 102; Module: WebApp + MobileApp)_
- **BR-CR-098** — [Immediate Dashboard Redirect] Keydemand users must be redirected straight to their Dashboard immediately upon logging in. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 99, row 103; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-099** — [Dashboard Routing Logic] Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 100, row 104; Module: WebApp + MobileApp)_
- **BR-CR-100** — [Grid Toggles] Dashboards must feature a dedicated switch to toggle between 'High-Value' and 'Standard' inventory views. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 101, row 105; Module: WebApp + MobileApp)_
- **BR-CR-101** — [Interactive Drill-Downs] All aggregate metrics on the Dashboard must be clickable, leading to a granular, filtered list view of the items being counted. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 102, row 106; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-102** — [Filters & Sorting] The dashboard must include comprehensive filtering and sorting options. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 103, row 107; Module: WebApp + MobileApp)_
- **BR-CR-103** — [Hamburger Menu] Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 104, row 108; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-104** — [(no type)] Implement sticky headers for filters/sorts and a blur effect for side navigation when users scroll through project listings. Add a "Go to Top" button for quick navigation on long listing pages. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 105, row 109; Module: WebApp + MobileApp)_
- **BR-CR-105** — [Custom Side-Menu] A custom side-menu for internal users must bypass standard filters and segment views into 'My' vs. 'Overall'. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 106, row 110; Module: WebApp + MobileApp)_
- **BR-CR-106** — [HVL Definition] Requirements exceeding specific size thresholds are classified as HVLs. The Admin must have controls in the panel to define and edit these square footage limits. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 107, row 111; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-107** — [Cross-Asset Application] HVL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 108, row 112; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-108** — [Exclusion] Day-to-day operational requirements posted by existing, onboarded enterprise brands are not categorized as high-value leads. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 109, row 113; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-109** — [Standard Leads] If a new inquiry falls below the high-value threshold, it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 110, row 114; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-110** — [Tier 1 vs. Tier 2 Routing] HVL restrictions only apply to Tier 1 markets. Leads in Tier 2 cities bypass this and remain open to all agents. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 111, row 115; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-111** — [Exclusive Routing] HVLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 112, row 116; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-112** — [Global Access] While notifications for a new HVL are localized to the assigned city members, all Keydemand team members possess global access to view HVLs pan-India. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 113, row 117; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-113** — [Manual Unlock Valve] If the Keydemand team cannot service an HVL within a specific timeframe, Admins can manually 'unlock' the requirement. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 114, row 118; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-114** — [Agent-Added Exemption] Demands posted directly by agents bypass HVL restrictions entirely and remain visible to other agents via relevancy matching. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 115, row 119; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-115** — [HVL Unopened Marker] Unopened leads must be visually marked with a red dot in the platform. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 116, row 120; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-116** — [HVL Unlock Notification] If the KD team unlocks an HVL requirement, the system must notify agents who possess relevant properties based on relevancy matching. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 117, row 121; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-117** — [HVL Notification Mediums] Notifications for new leads must go out via both email and WhatsApp to the assigned users. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 118, row 122; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-118** — [HVL Customization] The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned KD team members. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 119, row 123; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-119** — [Visibility Rules 1] All KD team members must be able to access all high-value leads. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 120, row 124; Module: WebApp + MobileApp)_
- **BR-CR-120** — [Account-Level Assignment] An RM is assigned at the overarching entity/account level for a specific city. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 121, row 125; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-121** — [Nomenclature] RM' is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 122, row 126; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-122** — [Cross-Collaboration] While leads are assigned to specific RMs, other team members can view these leads under the 'Others' or 'All' tabs. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 123, row 127; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-123** — [Agent RM View] Build a dedicated internal 'agent relationship manager' view allowing designated Keydemand staff to track the specific platform actions of the external brokers they have personally onboarded. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 124, row 128; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-124** — [Notifications] Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a relevant property matching the demand. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 125, row 129; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-125** — [Posted By Transparency] To external audiences, internal demands/properties display as 'Keydemand.' However, internally, the team will see the specific name of the uploading team member. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 126, row 130; Module: WebApp + MobileApp)_
- **BR-CR-126** — [Exclusive Indicators] If a demand is managed exclusively by Keydemand, the 'Self-View' and explore demand screens must explicitly indicate 'Keydemand Team'. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 127, row 131; Module: WebApp + MobileApp)_
- **BR-CR-127** — [Hidden Image Protocols] If a listing owner selects 'Do not show images', external users cannot view them. However, Keydemand teams can always see these images. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 128, row 132; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-128** — [Thumbnail Rule] The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 129, row 133; Module: WebApp + MobileApp)_
- **BR-CR-129** — [Image Request CTA] To prevent sourcing conflicts, the 'View Image Request' CTA button must be completely removed for Keydemand users when they view external agent properties. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 130, row 134; Module: WebApp + MobileApp)_
- **BR-CR-130** — [Relevancy Matching Scope] Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 131, row 135; Module: WebApp + MobileApp)_
- **BR-CR-131** — [Demand Exploration] The Keydemand team is the only party authorized to explore demands. Specifically, 'Managed Space' demands are visible exclusively to Keydemand. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 132, row 136; Module: WebApp + MobileApp)_
- **BR-CR-132** — [My Listings CRUD] Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 133, row 137; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-133** — [Colleague Data] Properties and demands posted by other Key Demand team members must be strictly 'Read-Only' for colleagues. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 134, row 138; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-134** — [Demand Size Limit] The system must hide high-sq-ft demands from standard users/agents and route them directly to the Keydemand team. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 135, row 139; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-135** — [Size Configuration] The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 136, row 140; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-136** — [Default Permissions] Dashboard' access and 'Explore Property' access must be set as default, non-removable permissions for all new Key Demand users. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 137, row 141; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-137** — [Editing Limits] Editing capabilities within the Listing Management Control Panel should only be enabled for 'Keydemand' and 'Enterprise' inventory. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 138, row 142; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-138** — [Dashboard Breakdown] The dashboard must calculate the total aggregate of enterprise users and segment them into: Assigned to Me, Assigned to Others, Sub-Category Itemization. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 139, row 143; Module: WebApp + MobileApp)_
- **BR-CR-139** — [Posting Restrictions] Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 140, row 144; Module: WebApp + MobileApp)_
- **BR-CR-140** — [CRM Pipeline] The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 141, row 145; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-141** — [Lead Statusing] Leads for Enterprise Clients are strictly categorized as Approved, Rejected, or Open. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 142, row 146; Module: WebApp + MobileApp)_
- **BR-CR-142** — [Alerting & Highlights] New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 143, row 147; Module: WebApp + MobileApp)_
- **BR-CR-143** — [Metric Definition] The 'User Contacted' metric must increment exclusively when the 'View Phone Number' button is clicked. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 144, row 148; Module: WebApp + MobileApp)_
- **BR-CR-144** — [Direct Contact CTAs] The Keydemand team does not need to use 'Request Phone Number' workflows for relevant demands; they are provided with an explicit 'View Phone Number' CTA. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 145, row 149; Module: WebApp + MobileApp)_
- **BR-CR-145** — [Outbound Contact Logs] Properties Contacted' logs for Enterprise clients must capture the Property ID, associated photo, and the exact date of contact for audit purposes. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 146, row 150; Module: WebApp + MobileApp)_
- **BR-CR-146** — [Lead Access Audit Trail] Clicking the 'View Requirement' CTA unlocks the lead's mobile number and automatically updates the 'Viewed' status with a timestamp. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 147, row 151; Module: WebApp + MobileApp)_
- **BR-CR-147** — [Accountability Tracking] A 'Viewed by' column must maintain a timestamped log of exactly which Keydemand team member accessed a lead. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 148, row 152; Module: WebApp + MobileApp)_
- **BR-CR-148** — [Broker Monitoring View] A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 149, row 153; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-149** — [Project Addition] Projects can only be added strictly via the backend control panel by the Admin team. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 150, row 154; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-150** — [Project Categorization] Projects must be sorted by 'Category' (Standard, Premium, Exclusive) within the tables. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 151, row 155; Module: WebApp + MobileApp)_
- **BR-CR-151** — [Exclusive Project] The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated 'Exclusive' projects. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 152, row 156; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-152** — [Enquiry Granularity] All project lists must support a drill-down for 'Enquiries Received,' capturing user metadata. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 153, row 157; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-153** — [Notification Filtering] Notifications must be segmentable, allowing users to filter by specific triggers. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 154, row 158; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-154** — [Enquiry Routing Logic] The system must automate routing based on the specific interaction type. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand Flow › Sno 155, row 159; Module: WebApp + MobileApp)_
- **BR-CR-155** — [Asset Class Selection] The asset class is pre-selected based on the user's registration. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 156, row 161; Module: WebApp + MobileApp)_
- **BR-CR-156** — [Asset Class Notification] If a user explores the other asset class within their allowed set (Retail <-> F&B), notify them that they are viewing a different asset class but allow them to continue. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 157, row 162; Module: WebApp + MobileApp)_
- **BR-CR-157** — [Discovery Logic] Retail & F&B users can explore ONLY Retail and F&B asset classes. They CANNOT explore Office or Managed Space. (Retail explores Retail + F&B; F&B explores F&B + Retail.) _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 158, row 163; Module: WebApp + MobileApp)_
- **BR-CR-158** — [Registered Asset Class] Regardless of search or activity, the user's pre-selected asset class remains their registered one. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 159, row 164; Module: WebApp + MobileApp)_
- **BR-CR-159** — [Posting Restrictions] A Retail brand cannot post F&B properties, and vice versa. They can see properties outside their asset class, but they cannot post them. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 160, row 165; Module: WebApp + MobileApp)_
- **BR-CR-160** — [Brand Name Display] For Brands and Office Tenants- The company/brand name must be displayed when they post a demand. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 161, row 166; Module: WebApp + MobileApp)_
- **BR-CR-161** — [Limits] Both brands and tenants can view up to 5 phone numbers before being prompted for enterprise solutions. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 162, row 167; Module: WebApp + MobileApp)_
- **BR-CR-162** — [Abandoned Registration] If a brand/user starts the registration journey, verifies their mobile number via OTP, but abandons the page before completing their profile, their verified number must be immediately captured by the system as an actionable 'lead'. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 163, row 168; Module: WebApp + MobileApp)_
- **BR-CR-163** — [Resuming Journey] If the dropped-off user returns and enters their number again, the system must recognize them and prompt a 'resume registration' flow. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 164, row 169; Module: WebApp + MobileApp)_
- **BR-CR-164** — [Internal Action] The central team can use these incomplete captured leads for outbound cold calling to manually assist the user in account creation. _(§ Final › 'Phase 1 - CRs and New Business' › Brand  F&B and Retail › Sno 165, row 170; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-165** — [Office and Managed Office Tenant- Posting Permissions] Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 166, row 172; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-166** — [Discovery Logic] Office Tenants and Managed Space Tenants can explore both Managed Space and Office properties. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 167, row 173; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-167** — [Managed Office Operators] Managed office operators will be treated identically to 'Developers' on the Keydemand platform. They will not log into the platform directly; Keydemand teams will collect details offline and manually upload them. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 168, row 174; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-168** — [Brand Name Display (same rule as Sno 161)] For Brands and Office Tenants, the company/brand name must be displayed when they post a demand. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 169, row 175; Module: WebApp + MobileApp)_
- **BR-CR-169** — [Terminology] Remove existing terminology for 'Account Handler' and 'RM' (Relationship Manager) globally; ensure all system labels are replaced with 'Point of Contact' or 'POC'. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 170, row 176; Module: WebApp + MobileApp)_
- **BR-CR-170** — [Project Classification] Inventory provided by managed operators (centers/hubs) will be classified as 'Projects' rather than standard property inventory. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 171, row 177; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-171** — [High-Value Routing] Introduce 'Managed Space' as a new asset class entirely nested under the 'Projects' structure rather than standard property inventory. Restrict the transaction options for Managed Space projects strictly to 'Lease'. _(§ Final › 'Phase 1 - CRs and New Business' › Office and Managed Office Tenant › Sno 172, row 178; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-172** — [Brand - Exploring Properties] Retail & F&B brands (Individual AND Enterprise) can explore ONLY Retail and F&B - NOT Office or Managed Space. F&B explores F&B + Retail; Retail explores Retail + F&B. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 173, row 180; Module: WebApp + MobileApp)_
- **BR-CR-173** — [Tenant - Exploring Properties] Office can explore Office and Managed Space and Managed Space can explore Office and Managed Space. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 174, row 181; Module: WebApp + MobileApp)_
- **BR-CR-174** — [Brand - Posting Properties] They can post only on their Asset Classes. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 175, row 182; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-175** — [Tenant - Posting Permissions] Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 176, row 183; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-176** — [Bulk Upload] Existing enterprise brands rarely upload their own requirements manually on the platform. They typically share bulk requirements via Excel with their RM, who uploads them from the Keydemand Admin Control Panel. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 177, row 184; Module: WebApp + MobileApp)_
- **BR-CR-177** — [Sub-user Management] Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 178, row 185; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-178** — [Enterprise Restrictions] Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 179, row 186; Module: WebApp + MobileApp)_
- **BR-CR-179** — [Format/Template Logic] A 'Format' acts as a template for a brand where the physical attributes remain constant, and only the City and Location act as variables. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 180, row 187; Module: WebApp + MobileApp)_
- **BR-CR-180** — [Format Naming] Formats must not be named generically. They must be explicitly named according to the brand's specific model. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 181, row 188; Module: WebApp + MobileApp)_
- **BR-CR-181** — [Format - Creation Hierarchy] When adding a new format in the control panel, the very first mandatory identifier field must be the 'Brand Name'. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 182, row 189; Module: WebApp + MobileApp)_
- **BR-CR-182** — [Demand Auto-Fill] When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 183, row 190; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-183** — [Brand Deactivation] Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 184, row 191; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-184** — [Brand Reactivation] If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, not its previously active demands. _(§ Final › 'Phase 1 - CRs and New Business' › Enterprise Brand › Sno 185, row 192; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-185** — [Card-Based Interface] Horizontal scrolling tables are prohibited on mobile; all list data must use a card/thumbnail layout. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 189, row 194; Module: MobileApp)_
- **BR-CR-186** — [Dual Navigation] Provide both a 'Back' button (previous screen) and a 'Close' button (global exit to dashboard) on nested screens. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 190, row 195; Module: MobileApp)_
- **BR-CR-187** — [Persistent Search Bar] Lock a persistent search & filter bar to the top of any paginated / scrollable list screen so search context is not lost. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 191, row 196; Module: MobileApp)_
- **BR-CR-188** — [Visible Contact on Cards] Display the agent/user phone number directly on top-level UI cards, immediately below the name. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 192, row 197; Module: MobileApp)_
- **BR-CR-189** — [Regional Info Button] Show a clickable 'i' info button for macro-regions (Mumbai/MMR, Delhi NCR, Pune/PCMC) listing the included sub-regions. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 193, row 198; Module: MobileApp)_
- **BR-CR-190** — [Firebase Integration] Integrate Firebase for Crashlytics (crash reporting) and in-app push notifications. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 194, row 199; Module: MobileApp)_
- **BR-CR-191** — [User & Listing Analytics] Dashboard shows user-level and listing-level aggregates (active agents/tenants/developers/KD; properties/demands/projects by asset class) with clickable drill-downs. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 195, row 200; Module: AdminApp)_
- **BR-CR-192** — [Bulk Upload] Support bulk upload (Excel) of properties, demands, projects and enterprise brand formats from the Control Panel. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 196, row 201; Module: AdminApp)_
- **BR-CR-193** — [Listing Management] Central listing management to view/edit/activate/deactivate/delete inventory; edit enabled only for Keydemand & Enterprise inventory. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 197, row 202; Module: AdminApp)_
- **BR-CR-194** — [User Management CRUD] Add/edit/deactivate/delete every user persona (Agents, Individual & Enterprise Tenants, Developers, Managed Operators, KD members) with per-persona fields; deactivate/delete cascades to their inventory. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 198, row 203; Module: AdminApp)_
- **BR-CR-195** — [Roles & Permissions] Add control-panel users; assign Super Admin / Admin / Ops roles and toggle module-level permissions (dynamic role creation). _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 199, row 204; Module: AdminApp)_
- **BR-CR-196** — [Project & Category Management] Add Developer & Managed-Space projects, assign KD members and set Category (Standard / Premium / Exclusive). _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 200, row 205; Module: AdminApp)_
- **BR-CR-197** — [Google Analytics] Show Google Analytics active-user data (Daily / Weekly / Monthly) on the Admin dashboard and user dashboard. _(§ Final › 'Phase 1 - CRs and New Business' › Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel) › Sno 201, row 206; Module: AdminApp)_
- **BR-CR-198** — [BRM Persona] A new Keydemand User-Portal persona - the Broker Relationship Manager (BRM) - can access ALL External Subscribed Brokers (Property Agents) and their activity to address broker concerns. Acts as the relationship owner for external brokers. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] › Sno 202, row 209; Module: WebApp + MobileApp)_
- **BR-CR-199** — [Broker Directory] BRM sees a consolidated directory of external subscribed brokers with subscription status, city, registration date and source/mode. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] › Sno 203, row 210; Module: WebApp + MobileApp)_
- **BR-CR-200** — [Broker Metrics Drill-down] For each broker, BRM can view properties & demands added, leads received, relevancies, contacts made, missed calls and ignored image requests. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] › Sno 204, row 211; Module: WebApp + MobileApp)_
- **BR-CR-201** — [Read-only Oversight] BRM access is read-only; the BRM cannot edit or delete a broker's listings/demands. The view exists purely to monitor activity and resolve broker concerns/complaints. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] › Sno 205, row 212; Module: WebApp + MobileApp)_
- **BR-CR-202** — [BRM Permission] The BRM capability is a permission assigned from the Admin Control Panel to designated Keydemand users; scope can be all brokers or only those they personally onboarded. _(§ Final › 'Phase 1 - CRs and New Business' › Keydemand - Broker Relationship Manager (BRM) [new User-Portal persona] › Sno 206, row 213; Module: AdminApp)_
- **BR-CR-203** — [No Phase 1 Chatbot] A live chatbot is NOT a mandatory feature and will not be built or integrated for the Phase 1 launch (deferred to a later phase). _(§ Final › 'Phase 1 - CRs and New Business' › PHASE 2  -  Deferred items (NOT in Phase 1 scope) › Sno 207, row 216; Module: WebApp + MobileApp)_
- **BR-CR-204** — [Granular Permissions] Highly granular, module-level permission toggles must be deferred to Phase 2 development to prevent over-engineering. _(§ Final › 'Phase 1 - CRs and New Business' › PHASE 2  -  Deferred items (NOT in Phase 1 scope) › Sno 208, row 217; Module: WebApp + MobileApp + AdminApp)_
- **BR-CR-205** — [Future Phase] In a future release phase, Keydemand users will be permitted to add projects and developers directly. _(§ Final › 'Phase 1 - CRs and New Business' › PHASE 2  -  Deferred items (NOT in Phase 1 scope) › Sno 209, row 218; Module: WebApp + MobileApp + AdminApp)_

Rules from the planning tabs of the same sheet:
- **BR-CR-206** — Phase 1 kicks off 6 July 2026 and Go-Live (Production) is 6 November 2026 (~18 weeks); nothing goes live until the Keydemand business team signs off in UAT (UAT sign-off 30-Oct-2026). _(§ Final › Overall Milestones; Delivery Tracker #7–8)_
- **BR-CR-207** — The User Portal is one web + mobile app from one shared codebase; Keydemand Team and Broker Relationship Manager (BRM) are personas INSIDE the User Portal, NOT separate apps. _(§ Final › Overall Milestones › Who uses which product)_
- **BR-CR-208** — The Admin Control Panel is used only by the small Keydemand Admin team (4-5 core users) for user onboarding, bulk uploads, pricing & city configuration, and High-Value-Lead rules. _(§ Final › Overall Milestones)_
- **BR-CR-209** — At Go-Live, V1 users are migrated with 3 months complimentary (free) access; migration covers images/videos/PDF and is validated in SIT. _(§ Final › Overall Milestones; Effort Summary › Platform Foundation)_
- **BR-CR-210** — Broken (abandoned) registration should also generate the lead. _(§ Final › Effort Summary › row "2. Auth, Registration & Login", note column)_
- **BR-CR-211** — Images are unlocked for unregistered users. _(§ Final › Effort Summary › row "3. Landing Page & Discovery", note column)_
- **BR-CR-212** — Asset-class matrix: Retail & F&B (Individual & Enterprise) explore Retail + F&B only; Office & Managed explore Office + Managed only; posting locked to registered asset class. _(§ Final › Effort Summary › 8A)_
- **BR-CR-213** — The "5-number view limit" leads to enterprise user login (brands/tenants). _(§ Final › Effort Summary › 8)_
- **BR-CR-214** — Email/WhatsApp notifications are sent via Interakt. _(§ Final › Effort Summary › 12)_
- **BR-CR-215** — Compliance scope includes a Privacy-Policy cookie clause, legal entity 'Keyproperty', and data residency. _(§ Final › Effort Summary › 13)_
- **BR-CR-216** — BRM capability is toggled from Admin; BRM per-broker drill-down covers properties/demands added, leads received, relevancies, contacts received, contacts requested and ignored image requests (read-only). _(§ Final › Effort Summary › 6A)_
- **BR-CR-217** — Planned July release items: Global Terminology & Rule Changes; Auth, Registration & Login (relevancy changes in quick registration); High Value Leads (HVL) Engine - Phase 1 (scope TBD; MVP flow that works for all simple use cases). _(§ Final › Sheet1)_
- **BR-CR-218** — Security & Hardening includes authorization on new personas (incl. BRM) and admin session security. _(§ Final › Effort Summary › Platform Foundation)_

### Open questions / ambiguities in this doc
- **Email at registration contradicts itself:** Sno 44 "Form Cleanup — Remove the email address field from the user registration form completely" vs Sno 49 "Email addresses are strictly mandatory for all entity-level profiles (Brands, Office Tenants); optional for Agent profiles" vs Sno 47 email labelled "Official Email ID".
- **Email domain validation:** Sno 48 now reads "…is NOT enforced in the system" — a reversal of the July 9th sheet ("to be enforced"); the sentence still begins "Strict domain-level validation (such as actively blocking generic domains like '@gmail.com')", so intent should be confirmed.
- **Age consent:** Sno 41 says "No separate DOB field or checkbox is required"; Sno 45 requires the exact phrase "…18 years and above" "and a tick".
- **Admin permissions:** Sno 199 says "toggle module-level permissions (dynamic role creation)" while Sno 208 defers "Highly granular, module-level permission toggles" to Phase 2.
- **Office Tenant posting:** Sno 166/176 say Office Tenants can post Office and Managed Space; the CR Doc's July 13 "Office Registration Permissions (Pending Rule)" says office accounts can post only office demand (Managed Space interest only triggers a KD alert).
- **"Managed Space operators can post only Managed Space"** (Sno 166) vs Sno 168 "Managed office operators … will not log into the platform directly".
- **Sponsored vs Premium:** Sno 55/62 still say "Sponsored Projects"; the CR Doc renamed them "Premium projects".
- **RERA:** Sno 30 "mandatory field … project level"; CR Doc struck that and says "optional field".
- **OC Status:** 3 values here ('Available', 'Not available', 'Under construction') vs 4 values in the CR Doc.
- **Legacy Data (Sno 35)** is still listed here but is struck through in the CR Doc.
- **Lead statuses:** Sno 142 "Approved, Rejected, or Open" vs CR Doc July 13 "approved, rejected, and pending".
- **BRM** is introduced here as a persona, but the July 29 doc states "Brokers are not assigned Relationship Managers (BRMs do not exist in the system)".
- **Sno 19 Demand Posting** "at least 3 additional localities" vs CR Doc July 16 "up to three".
- **Timeline** column empty for every row; Epic/Story numbers are placeholders (EP-000/US-000). Sheet1 HVL scope = "TBD".
- **Schedule** tab Gantt bars are colour-only and could not be read.
- Sno 160 says a Retail brand "cannot post F&B properties", while brands post demands (CR Doc says "demands").
- Effort Summary still says "remove email/profile-pic from register" and "dynamic sponsored/exclusive city tabs".

---
## Phase 1 - CR's and New Business Rule additions  [AUTHORITATIVE]
**Source:** Google Doc · ID `1i6udGwW4Im-tFr_ZUJvNRhoug6QN_o70dK4k9y_4cSU` · owner pradeepa.pv@futuristglobal.com · created 2026-06-30, modified 2026-09-27 · tabs/sections read: single tab (verified by also exporting the doc as plain text — identical content; no further tabs), all sections from "General" through "July 29th - Business rules and Action items", plus all 4 comment threads · read coverage: 100%.
Dated content inside this doc: sections tagged "added on 7th July" (comments), "List of Business Rules discussed on July 13", "…July 14", "…July 16", and "July 29th - Business rules and Action items" (a verbatim copy of doc #3, verified identical line by line). Undated sections are the base CR list (created 30 Jun 2026).

### Content
(Headings demoted by three levels so they nest here; text otherwise as in source.)

#### **General**
###### **Platform Portals & Separation of Duties**
  - **System Demarcation:** The platform is strictly divided into two distinct environments: the regular Key Demand "User Portal" (front-end) and the administrative "Control Panel" (back-end).
  - **Key Demand User Portal Scope:** Front-end Key Demand agents are transactional users who utilize the platform to explore properties, post demands, and manage their assigned leads. They are strictly prohibited from onboarding new users or editing external user profiles.
  - **Control Panel Scope:** The Control Panel is restricted to a handful of core management/administrative staff (e.g., based in Mumbai). It provides a holistic overview of the platform, enabling user onboarding, bulk project/property uploads, subscription management, and analytics.
##### **Business Rules & Terminology**
  - ⟦comment AAAB-uYvcCU start⟧Any field left empty should be automatically hidden from the UI.⟦comment AAAB-uYvcCU end — John Abraham (2026-07-01, RESOLVED): "Informed client that it will be fixed later and they are okay with it"⟧
  - Rename "Agent" to "Property Agent" and "Tenant" to "Office Tenant" and Managed Space Tenant globally.
  - New fields are added to Managed Space and Projects. Fields please check Column ES and HE in the PR sheet under the Property & Project Input Fields tab 
  - Remove existing terminology for "Account Handler" and "RM" (Relationship Manager) globally; ensure all system labels are replaced with **"Point of Contact"** or **"POC"**.
  - Compliance & Verification: Age verification (18+) is managed via the standard Terms & Conditions agreement. No separate DOB field or checkbox is required in the registration flow.
  - Filters & Sorting: Implement comprehensive filters (e.g., City) and sorting options (e.g., "Most Demands," "Most Properties Posted," "Most Leads Received") on the dashboard to allow effective monitoring.
  - **⟦comment AAAB_VpOYck start⟧Occupancy Certificate (OC) Supply Standardization:** To prevent contradictions in the relevance Machine Learning (ML) models, the "OC Status" fields across all property and project backend sheets must be unified to exactly 4 terms: Received, Applied, Not Available, Under Construction. (This replaces terms like "Received," "Applied," and "Not applicable").
  - **OC Demand Exception:** In the 'Demand' section strictly, the "OC Required" parameter will remain a standard boolean "Yes/No" selection⟦comment AAAB_VpOYck end — Pradeepa PV (2026-07-07, OPEN): "added on 7th July"⟧
##### **Validation & Logic**
  - **Validation Logic:** Trigger an explicit error for incomplete email addresses or mandatory fields. The system must visually highlight the missing section and guide the user to it (e.g., preventing progression during agent sign-up without clarifying the input error).
  - The interface should automatically redirect the user to the precise location of any missing fields.
  - **Area Validation:** Carpet Area must strictly be less than or equal to the Built-up Area.
  - Ensure that "yes" fields remain editable by users even after a response has been received.
  - **Demand Posting:** Expand the "other interested location" options to allow users to input at least **3 additional** localities. Same city, no radius.   
  - **User Permissions:** Following internal discussion(Keydemand), can we grant users the ability to modify all fields except for the core **City and Location** parameters?
##### **UI & Navigation**
  - **PDF Functionality:** Implement the missing PDF download feature for individual user listings.
  - **Immediate Lead Capture:** Update the "Show Interest" API logic to capture the phone number as a lead the exact moment OTP verification is successful, preventing lead loss if the user closes the browser before finishing.
  - **Standardize Mandatory Fields:** Update the quick registration journey to mirror the exact mandatory fields required when posting a demand (e.g., floor preference, carpet area, transaction type) to ensure backend relevancy matching does not break later.
  - ~~**Form Cleanup:** Remove the email address field from the user registration form completely, as it causes validation failures in the "Show Interest" flow.~~ *(struck through in source)*
  - **Field Editability:** Change system logic to allow users to edit 'Yes' fields in property and demand forms even after a response is received.
  - Show sample reference images during the image upload step so users understand what kind of photos to upload.
##### **Compliance, Legal & Chatbot Integrations**
  - **Image Shuffling:** For demands without brand logos, the UI should shuffle between a pool of five high-quality asset-class images to maintain a dynamic look.
  - For internal backend/Keydemand terminology, they will exclusively use "Account Handler". On the front-end user interface visible to brands, the label will display as Point of Contact or “POC”
  - ~~Add a mandatory field to capture RERA numbers, restricted strictly to the project level. (Currently, it is not a mandatory field)~~ *(struck through in source)* Add an optional field to capture RERA numbers at the project level.
  - Appoint and clearly display the contact details for a Grievance Officer, satisfying both DPDP and GDPR mandates.
  - Implement strict event tracking to monitor user behaviour when they encounter hidden images to support A/B testing and funnel analysis.
  - Build a dedicated internal "agent relationship manager" view allowing designated Keydemand staff to track the specific platform actions (requirements, relevancies, contacts) of the external brokers they have personally onboarded.
  - **Chatbot Implementation:** A live chatbot is not a mandatory feature for Phase 1 and will not be built or integrated for the initial launch.
  - **Privacy Policy Future-Proofing:** A conditional scope clause detailing potential future chatbot integrations must be added to the Privacy Policy immediately by the legal vendor. This prevents incurring additional vendor costs for re-reviewing the document when the feature is eventually rolled out.
  - **Age Verification Copy:** The registration screen must explicitly enforce 18+ consent using the exact phrase: "by continuing you confirm you are 18 years and above".
  - **Legal Entity Name:** The official legal entity name to be used across all terms of use and privacy policies is "Keydemand".
##### **Permissions & Access**
  - Restrict platform access to users who are 18 years of age or older.
  - Ensure Asset Class, Transaction Type, City, and Location remain permanently locked.
  - Unlock "Other interested locations" and "Possession needed" fields so they can be edited after initial submission
  - Display Logic for Listing Cards
    - A. Property Cards
    - Listing Title: Display the Project Name, if available. If absent, use the descriptive format: [Store Type] [Asset Class] Property (e.g., Highstreet Retail Property, Office Property for Lease, Office Property for Sale, Managed Property for Lease).
    - Posted By: Display the name of the specific Agent. If posted by the Keydemand team, display "Keydemand".
    - B. Demand Cards
    - Categories: Retail Demand, Office Demand, Managed Space Demand, F&B Demand.
    - Posted By: Display the specific Brand, Tenant, or Agent name. If the specific brand or tenant name is unavailable, use the appropriate category label (e.g., "Retail Brand" or "F&B Brand").
  - Leads
    - Consolidation: Remove the separate "leads" section to eliminate duplication with "contact inquiries."
    - Renaming: Rename the existing "contact inquiries" section to "leads" to streamline the interface.
    - Definition: Define a "lead" as a compound value comprising both inquiry requests and image requests (Inquiries + Image Requests = Lead).
    - ~~Status of Current Data: Recognise that any lead counts currently visible are legacy data, as the system lacks an active mechanism to increment them following the removal of the inquiry button from property pages.~~ *(struck through in source)*
###### **Marketing & Source Tracking**
  - **Attribution Tracking:** User acquisition sources (e.g., Organic vs. Paid) will be tracked using the user's phone number as the primary source of truth. This will be accomplished by integrating third-party marketing APIs such as "Singular" or "Branch".
#### **Landing Page **
##### **UI & Promotional Hooks**
  - **Promotional Hook:** Feature a **"1 free listing"** notification on the Agent Home page (Navbar or first fold) for new users to incentivise posting. This applies to all user types with listing capabilities.
  - **Property Detail Access:** Implement functionality allowing unregistered users to view property details by default.
  - Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand.
  - Set the default city to **Bengaluru** (instead of Mumbai) when a user visits the platform for the first time.
  - **CTA Restrictions:** Ensure unregistered users are prompted to register only when clicking actionable elements like "View Phone Number" or "Contact Us".
  - **Incentive Messaging:** Design and implement a pre-wall popup or graphic that communicates the "one free listing" reward to users *before* they begin the registration flow, rather than showing it after registration.
##### **Navigation & CTAs**
  - **Dashboard Subscription Text:** Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., "Free Plan," "Trial Plan," "Usage 0 of 1") and a "Subscribe Now for unlimited access" call to action.
  - **Landing Page City Tabs:** Remove static city tabs from the exclusive projects section. Make the city tabs for Premium projects dynamic, so they only display cities with active project inventory. Also rename Sponsored Projects to Premium projects
  - **Default Search Bug:** Fix the bug where the default city selection does not automatically default to Bangalore.
  - **Google Maps Integration:** Integrate Google Maps into the search/typing functionality for accurate locality selection (to be evaluated for performance impact).
  - **Dashboard Cleanup:** Remove the redundant "lead management" section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard. 
  - **Client Logos:** Add the names and logos for "Office Tenant" and "Managed Office Spaces" to the static client section on the landing page.
##### **Search & Map Logic**
  - Add a "Request a callback" button alongside the "Book a demo" option in About Keydemand video section. This should only capture the mobile number (do not make name/email mandatory to reduce abandonment). 
  - Add a **"List your Project >>"** button on the Navbar.
      - Clicking it should reveal a dropdown with **Developer | Operator** options.
      - Selecting either should open an Enquiry Form.
      - Remove this entry point from the login/sign-up page.
  - City Defaults: If a user searches for a location without active properties (e.g., Karimnagar), the system should default to the closest city with available inventory, accompanied by a messaging banner explaining the redirect.
  - The "Premium Projects" section must feature dynamic city tabs that only display the specific cities where current premium projects are active.(e.g., if a project is in Nashik, show a "Nashik" city tab).
  - Change "Book a demo" text to "Send an inquiry" in the About section. Add two provided logos (Office Tenant, Managed Office) to the client marquee.
  - Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects.
#### **Login and Edit Flows **
**⟦comment AAAB_VpOYco start⟧Authentication and Registration Flow**
  - **OTP Wait Timer:** The system must strictly enforce a 30-second cooldown period before a user can request an OTP resend.
  - **Abandoned Session Lead Capture:** If a user successfully verifies their mobile number via OTP but abandons the registration process (e.g., clicks the back button or closes the browser window) before completing their profile, the backend must instantly capture and log that mobile number as an actionable lead.
  - **Resuming Registration:** If a user who previously abandoned their registration returns and enters their verified mobile number, the system must bypass the initial verification steps and direct them straight to the profile setup page
**User Interface & Data Field Constraints**
  - **Profile Picture Uploads:** The profile picture upload feature must be completely removed from the initial registration form to prevent user drop-off and distraction. This feature will be exclusively available as an optional add-on within the user's "My Profile" page after registration is completed.
  - **Email Field Labeling:** The email input field across forms must be universally explicitly labeled as "Official Email ID".
  - **Email Field Validation:** Strict domain-level validation (such as actively blocking generic domains like "@gmail.com") is to be enforced in the system.
  - **Email Mandatory/Optional Logic:**
      - Email addresses are **strictly mandatory** for all entity-level profiles, which includes Brands and Office Tenants.
      - Email addresses are **optional** for Agent profiles, as they are treated as B2C users in the system.
  - **User Nomenclature:** The broad categorization of "Tenant" must be replaced with the exact term "Office tenant/occupier" to eliminate ambiguity regarding residential versus commercial users
**Location & City Mapping Configuration**
  - **Single-Select Restraint:** The "Operating City" (or base city) selector must be a single-select dropdown, replacing any multi-select functionality.
  - **City Categorization:** The dropdown category previously labeled "Other cities" must be explicitly renamed to "Popular cities".
  - **Geographic Groupings (Goa):** Sub-locations and micro-markets in Goa (e.g., Mapusa, Margo, Marmaga, and Panjim) must be consolidated under a single "Goa" parent category.
  - **Regional Tooltips for Metros:** For macro-regions like Mumbai/MMR, Delhi NCR, and Pune/PCMC, the user interface must display exactly what sub-regions are included. This will be achieved via a hover-over information display on the web version, and a clickable 'I' (info) button on the mobile interface⟦comment AAAB_VpOYco end — Pradeepa PV (RESOLVED 2026-09-27): "added on 7th July"⟧
**Compliance & Legal**
  - **Terms & Policies:** Include an explicit, mandatory checkbox for "Terms of Use" and "Privacy Policy" in all registration flows to ensure compliance with DPDP/GDPR. A simple "Proceed" button is legally insufficient.
  - **Phone Number Disclosure:** Include explicit consent terms regarding phone number sharing during registration to ensure users are informed that their number is shared upon request.
**Data Collection & Field Logic**
  - **Relevancy Matching:** Ensure that all fields critical for backend relevancy matching (e.g., floor preference, store type) are permanently included in the initial quick registration form.
  - Keydemand team will receive an alert about the user interested in Managed Office Space if someone opts to click during office registration. The Office demand will be posted on on their account. The user will only be able to post office demand & not managed space demand.
#### **Agent Flow**
**1. Permissions & Business Rules**
  - **High-End Demands Logic:** Agents are restricted from viewing demands that fall within city-specific high-ticket thresholds (HTLs). While these demands remain hidden from external agent relevancy matching, the original poster retains the ability to view the agent’s property and initiate contact.
  - **Subscription Status:** Unsubscribed agents must see a "Trial Plan" label with the free listing offer. Paid users should be tagged as "Pro Member" (replacing terms like "Broker" or "Agent" to sound more premium).
  - **Agent Onboarding:** On the Profile page, change the "Operating City" field to a single-select dropdown using a visual selection layout similar to the landing page city selector.
  - **Duplicate Click Prevention:** Prevent multiple clicks by the same user on a single property from incrementing the view count. Display an "Already requested" message.
  - **Billing:** Automatically provide GST invoices to users after they subscribe.
  - **Image Requests:** When a user requests locked images, they must be logged in. This action shares their phone number with the listing owner. Upon owner approval, images and the owner’s number become visible.
**2. Validation & Logic**
  - **Massive Demand Bypass:** If an external agent posts a massive demand (e.g., >10,000 sq ft in Bangalore), it bypasses the "Keydemand exclusive" block and becomes visible to other agents with matching properties.
  - **Transparency:** The agent’s name must be displayed whenever they post a property or demand.
  - **Subscription/Payment Flow:** Implement the Razorpay component embedded into a dedicated native page (instead of a direct API popup).
#### **Keydemand Flow **
**1. Account Management & User Permissions**
  - **Onboarding & Authentication:** Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP.
  - **Role-Based Access:** Account creation is strictly permission-based; specific privileges are managed via the admin portal.
  - **Profile Management Restrictions:** The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend.
  - **Inventory Lifecycle:** Deactivating a user profile automatically deactivates their associated inventory. Deleting a profile permanently removes all associated inventory. This can be done only from backend. 
  - **Team Inventory Capabilities:** Keydemand members can view the inventory of other team members within their "Listings" dashboard, but they are strictly restricted to editing only their own self-listings.
  - **Backup Coordination:** If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline.
  - **Future Phase (Scope):** In a future release phase, Keydemand users will be permitted to add projects and developers directly.
**2. Login Flow & Dashboard Navigation**
  - **Immediate Dashboard Redirect:** Keydemand users must be redirected straight to their Dashboard immediately upon logging in.
  - **Mobile UX Optimization:** The mobile app interface must abandon horizontal tables in favor of a card/thumbnail-based layout to optimize screen space and usability.
  - **Dashboard Routing Logic:** Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics.
  - **Interactive Drill-Downs:** All aggregate metrics on the Dashboard (e.g., Active Properties, Active Demands, Projects) must be clickable, leading to a granular, filtered list view of the items being counted.
  - **Hamburger Menu & Holistic View:** Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. By clicking the hamburger menu, they should see a summary of all assigned brands/tenants (demands, relevancies, contact requests, project inquiries) without needing to switch accounts.
  - **Custom Side-Menu Segmentation:** A custom side-menu for internal users must bypass standard filters and segment views into "My" (User-specific/Assigned) vs. "Overall" (Company-wide/All). It must explicitly list: Dashboard, Profile, Listings (My/KD), Projects (Assigned/All), Enterprise Accounts (Assigned/All), High Ticket Leads (My City/Overall), Solutions, Notifications, Inquiries, and Saved/Shortlisted items.
  - **Grid Toggles:** Dashboards must feature a dedicated switch to toggle between "High-Value" and "Standard" inventory views.
  - **Filters & Sorting:** The dashboard must include comprehensive filtering (e.g., City) and sorting options (e.g., "Most Demands," "Most Properties Posted," "Most Leads Received").
**3. High-Value Lead (HVL) Ecosystem**
  - **HVL Definition & Dynamic Thresholds:** Requirements exceeding specific size thresholds (e.g., >10,000 sq ft in Bangalore/Hyderabad; >5,000 sq ft in Mumbai) are classified as HTLs. The Admin must have controls in the panel to define and edit these square footage limits on a per-city basis. High-value leads are exclusively new, fresh inquiries or registrations that meet or exceed specific size (sq. ft.) thresholds based on asset class and city.
  - **Cross-Asset Application:** HTL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes.
  - Exclusion: Day-to-day operational requirements posted by existing, onboarded enterprise brands (e.g., Raymond, H&M) are not categorized as high-value leads in this context.
  - Standard Leads: If a new inquiry falls below the high-value threshold (e.g., a 6,000 sq. ft. restaurant requirement where the benchmark is 8,000), it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents on the platform.
  - **Tier 1 vs. Tier 2 Routing:** HTL restrictions only apply to Tier 1 markets (Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi). Leads in Tier 2 cities (e.g., Jaipur, Indore) bypass this and remain open to all agents regardless of size.
  - **Exclusive Routing:** HTLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents.
  - **Global Access vs. Local Alerts:** While notifications for a new HTL are localized to the assigned city members, all Keydemand team members possess global access to view HTLs pan-India.
  - **Manual Unlock Valve:** If the Keydemand team cannot service an HTL within a specific timeframe (e.g., 3-4 days), Admins can manually "unlock" the requirement. This pushes it into the public relevancy pool, making it visible to external agents strictly under the relevancy matching engine.
  - **Agent-Added Exemption:** Demands posted directly by agents bypass HTL restrictions entirely and remain visible to other agents via relevancy matching.
**4. RM (Relationship Manager) Assignment & Lead Visibility**
  - **Account-Level Assignment:** An RM is assigned at the overarching entity/account level for a specific city. For example, one RM managing Aditya Birla in Hyderabad automatically handles all its sub-brands (Peter England, Louis Philippe, etc.) for that region.
  - **Nomenclature:** "RM" is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title; to them, this person is simply their point of contact.
  - **Cross-Collaboration ("Others" Tab):** While leads are assigned to specific RMs (visible in their "Assigned" tab), other team members can view these leads under the "Others" or "All" tabs. This allows other team members to step in and fulfill the requirement using their macro-level connections if the assigned RM fails to source an option.
  - **Notifications:** Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a *relevant property* matching the demand, following standard regular demand workflows.
**5. Visibility, Relevancy & Image Security**
  - **"Posted By" Transparency:** To external audiences, internal demands/properties display as "Keydemand." However, internally, the team will see the specific name of the uploading team member (e.g., "Posted by Himanshu").
  - **Exclusive Indicators:** If a demand is managed exclusively by Keydemand, the "Self-View" and explore demand screens must explicitly indicate "Keydemand Team".
  - **Hidden Image Protocols:** If a listing owner selects "Do not show images", external users cannot view them. However, Keydemand teams *can* always see these images, overlaid with a banner reading "Hidden to others".
  - **Thumbnail Rule:** The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view.
  - **Image Request CTA Prevention:** To prevent sourcing conflicts, the "View Image Request" CTA button must be completely removed (or greyed out/disabled) for Keydemand users when they view external agent properties.
  - **Relevancy Matching Scope:** Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands (subject to final confirmation/TBD by Kartik).
  - **Demand Exploration Exclusivity:** The Keydemand team is the *only* party authorized to explore demands. Specifically, "Managed Space" demands are visible exclusively to Keydemand and hidden from everyone else.
**6. Enterprise Accounts Breakdown & Pipeline Management**
  - **Enterprise Account Dashboard Breakdown:** The dashboard must calculate the total aggregate of enterprise users (e.g., 500) and segment them into:
      - **Assigned to Me:** Total count assigned to the logged-in user.
      - **Assigned to Others:** Balance managed by the rest of the team.
      - **Sub-Category Itemization:** The "Assigned to Me" count must explicitly break down into itemized values for *Retail and Office Brands*, *Office Tenants*, and *Managed Spaces* (and per yesterday's meeting notes).
  - **Posting Restrictions:** Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload centrally through the Admin panel.
  - **CRM Pipeline (Lite):** The Admin Dashboard tracks enterprise leads through explicit CRM stages: *New, In Discussion, Site Visit, Negotiation, Closed, Lost*. It also logs the assigned representative and last activity date.
  - **Lead Statusing:** Leads for Enterprise Clients(Brands) are strictly categorized as *Approved, Rejected,* or *Open*.
  - **Alerting & Highlights:** New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page.
**7. Action Tracking & Accountability Audits**
  - **Metric Definition ("User Contacted"):** The "User Contacted" metric must increment *exclusively* when the "View Phone Number" button is clicked, as offline physical calls cannot be tracked.
  - **Direct Contact CTAs:** The Keydemand team does not need to use "Request Phone Number" workflows for relevant demands; they are provided with an explicit "View Phone Number" CTA for direct, instant access.
  - **Outbound Contact Logs:** "Properties Contacted" logs for Enterprise clients must capture the Property ID, associated photo, and the exact date of contact for audit purposes.
  - **Lead Access Audit Trail:** Clicking the "View Requirement" CTA unlocks the lead's mobile number and automatically updates the "Viewed" status (Yes/No) with a timestamp.
  - **Accountability Tracking:** A "Viewed by" column must maintain a timestamped log of exactly which Keydemand team member accessed a lead.
**8. Broker Management & Projects**
  - **Broker Monitoring View:** A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers they have onboarded. This tracks requirements added, relevancies, contact attempts, leads received, missed calls, and ignored image requests to counter broker complaints.
  - **Project Addition:** Projects can only be added strictly via the backend control panel by the Admin team.
  - **Project Categorization:** Projects must be sorted by "Category" (*Standard, Premium, Exclusive*) within the tables.
  - **Exclusive Project Follow-up:** The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated "Exclusive" projects.
  - **Enquiry Granularity:** All project lists must support a drill-down for "Enquiries Received," capturing user metadata (type, name, mobile, email, timestamp, and specific projects of interest).
**9. Notifications & Routing**
  - **Notification Filtering:** Notifications must be segmentable, allowing users to filter by specific triggers such as "All leads for my listings," "Tagged projects," or "Relevancies".
  - **Enquiry Routing Logic:** The system must automate routing based on the specific interaction type (e.g., direct developer enquiries, enterprise conversion prompts, or support requests)
#### **Brand (F&B and Retail)**
**1. Posting Restrictions & Asset Locks**
  - ⟦comment AAACAfzCgqM start⟧A Retail brand cannot post F&B demands, and vice versa. They can see properties outside their asset class, but they cannot post them.⟦comment AAACAfzCgqM end — Pradeepa PV (RESOLVED 2026-09-08): "Himanshu will get back"⟧
  - For Brands and Office Tenants- The company/brand name must be displayed when they post a demand.
**2. Discovery & Navigation Logic**
  - Retail & F&B users are allowed to explore Retail, F&B, office asset classes.
  - The asset class is pre-selected based on the user's registration.
  - If a user explores a different asset class, the system will notify them that they are exploring a different asset class, but allow them to continue.
  - Regardless of search or activity, the user's pre-selected asset class remains their registered one.
**3. Enterprise Solutions & Limits**
  - Both brands and tenants can view up to 5 phone numbers before being prompted for enterprise solutions.
4\. **Abandoned Registration & Lead Capture**
  - **Lead Generation on Drop-off:** If a brand/user starts the registration journey, verifies their mobile number via OTP, but abandons the page before completing their profile, their verified number must be immediately captured by the system as an actionable "lead" or "inquiry".
  - **Resuming the Journey:** If the dropped-off user returns and enters their number again, the system must recognize them and prompt a "resume registration" flow (similar to an abandoned cart) rather than starting from scratch.
  - **Internal Action:** The central team can use these incomplete captured leads for outbound cold calling to manually assist the user in account creation.
#### **Office Tenant and Managed Space **
##### **1. Posting Permissions & Asset Rules**
  - Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space.
  - Managed office operators will be treated identically to "Developers" on the Keydemand platform. They will not log into the platform directly; Keydemand teams will collect details offline and manually upload them.
  - For Brands and Office Tenants, the company/brand name must be displayed when they post a demand.
  - Introduce "Managed Space" as a new asset class nested under the "Projects" structure. Restrict transaction options for Managed Space projects strictly to "Lease" (removing "Sale" and "Lead" parameters).
##### **2. Discovery & Navigation Logic**
  - Office Tenants and Managed Space Tenants can explore both Managed Space and Office properties.
  - Inventory provided by managed operators (centers/hubs) will be classified as "Projects" rather than standard property inventory.
##### **3. High-Value Routing & Enterprise Limits**
  - Introduce "Managed Space" as a new asset class entirely nested under the "Projects" structure rather than standard property inventory. Restrict the transaction options for Managed Space projects strictly to "Lease", removing the "Sale" and "Lead" parameters used in traditional projects. 
#### **Enterprise -Brand(F&B and Retail)**
  - They can explore asset classes( Exploring Properties) - F&B can have F&B, Retail and Office. Retail can have both F&B, Retail and office too.  
  - They can post only on their Asset Classes 
  - Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel.
  - Enterprise Restrictions: Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. Enterprise requirements must be bulk uploaded centrally through the Admin panel.
  - **Enterprise Brand Requirements & "Formats"**
  - **Bulk Upload Reality:** Existing enterprise brands rarely upload their own requirements manually on the platform. They typically share bulk requirements via Excel with their RM, who uploads them from the Keydemand Admin Control Panel.
  - **Format/Template Logic:** A "Format" acts as a template for a brand where the physical attributes (e.g., square footage, parking availability, frontage) remain **constant**, and only the *City* and *Location* act as **variables**.
  - **Format Naming Convention:** Formats must *not* be named generically (e.g., "Format 1", "Format 2"). They must be explicitly named according to the brand's specific model.
      - *Example (McDonald's):* "Drive-thru" (approx. 20,000 sq ft plot with parking), "Food Court" (900-1100 sq ft), or "High Street" (2200-2800 sq ft).
  - **Creation Hierarchy:** When adding a new format in the control panel, the very first mandatory identifier field must be the "Brand Name".
#### **Enterprise - Office Tenant and Managed Space** 
  - Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand backend admin panel.
  - They can explore both classes( Exploring Properties) - Office can have Office and Managed Space and Managed Space can explore Office and Managed Space.
  - Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space
  - Enterprise Restrictions: Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. Enterprise requirements must be bulk uploaded centrally through the Admin panel.
#### **Administrative & Control Panel Logic**
**Platform Architecture & Environment Separation**
  - **Strict Access Separation:** The platform must be strictly demarcated into two environments: the "Control Panel" (Admin portal) and the "User Portal".
  - **Operational Demarcation:** 100% of day-to-day business operations (Sales, Business Development, Broker Management) must happen exclusively within the User Portal, not the backend Control Panel.
  - **Control Panel Access Limits:** The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core people (Kartik, Sudanchu, Himmanu, Nitesh, and tech admins).
**Admin Roles & Permissions**
  - **Phase 1 Roles:** For the initial launch, enforce strictly two primary administrative roles in the Control Panel: "Super Admin" and "Admin".
  - **Super Admin Privileges:** The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system.
  - **Dynamic Role Creation:** The system must include functionality allowing the core admin team to dynamically create new internal user roles and toggle their access permissions across the platform.
  - **Deferred Granular Permissions:** Highly granular, module-level permission toggles (e.g., manually unchecking specific view/edit/delete rights for internal admins) must be deferred to Phase 2 development to prevent over-engineering.
  - **Admin Login Protocol:** Admin account creation requires a name, email ID, and permissions set. Login operates via email and password, triggering a one-time password sent to the registered email upon creation, with options to change and reset passwords.
**Agent Onboarding & Front-End Privileges**
  - **No Self-Registration:** Key Demand team is restricted from self-registering; they must be added manually from the backend Control Panel by an Admin.
  - **Mandatory Onboarding Fields:** When an Admin adds an agent, they must input the agent's name, mobile number, email, designation, and assigned city.
  - **Default Front-End Permissions:** "Dashboard" access and "Explore Property" access must be set as default, non-removable permissions for all new Key Demand users.
  - **Configurable Front-End Permissions:** Admins can selectively toggle an agent's ability to explore demands, post properties/demands, access broker management, view Key Demand listings, and view assigned enterprise brands.
  - **Complimentary Access for Testing:** Admins have the capability to assign zero-charge subscriptions to agents from the backend (e.g., to test agent journey access).
**Listing & Inventory Management**
  - **"My Listings" CRUD Privileges:** Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted.
  - **"Key Demand Listings" (Colleague Data):** Properties and demands posted by other Key Demand team members must be strictly "Read-Only" for colleagues; users cannot edit, delete, or deactivate another colleague's listings.
  - **Control Panel Editing Limits:** Editing capabilities within the Listing Management Control Panel should only be enabled for "Keydemand" and "Enterprise" inventory.
**Enterprise Brand & Tenant Logic**
  - **Enterprise Login:** Enterprise users (e.g., ABFRL) log in using their registered mobile numbers.
  - **Demand Auto-Fill Logic:** When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format. The user only needs to complete the remaining mandatory or specific fields.
  - **Brand Image Display Logic:** If a brand logo/image is uploaded in the backend, it must display as the demand image. If no brand image is available, the system must default to displaying the selected "end-use" image.
  - **Brand Deactivation Rule:** Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately.
  - **Brand Reactivation Rule:** If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, *not* its previously active demands.
**High-Value Leads (HVL) & Relevancy Rules**
  - **Demand Size Limit Logic:** The system must hide high-sq-ft demands (e.g., >10,000 sq ft) from standard users/agents and route them directly to the Keydemand team.
  - **Size Configuration Feature:** The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city.
  - **HVL Unopened Marker:** Unopened leads must be visually marked with a red dot in the platform.
  - **HVL Unlock Notification:** If the KD team unlocks an HVL requirement, the system must notify agents who possess relevant properties based on relevancy matching.
  - **HVL Notification Mediums:** Notifications for new leads must go out via both email and WhatsApp to the assigned users.
  - **HVL Customization:** The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned KD team members (via a dropdown list).
  - **Visibility Rules:**
      - All KD team members must be able to access all high-value leads.
      - Demands added by agents must be visible to other agents (under relevancy), regardless of size constraints.
      - Leads from other cities can be viewed by agents and the KD team (under relevancy), irrespective of sizes.
**Subscription, Pricing & City Management**
  - **Immediate Frontend Pricing Updates:** Price changes made by Admins via the Control Panel must reflect on the front end immediately.
  - **Deferred Billing Cycle Impact:** For active users, updated subscription prices will only take effect and bill starting from their *next* billing cycle.
  - **No City Deletion (Phase 1):** The ability to "Delete" a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts for users with active auto-pay/auto-renewal tokens.
  - **Tier Management:** Admins can edit subscription prices and add new cities to specific categorizations (Class A/Metros, Class B/Non-metros, Class C/Rest of India, Class D/Pan India).
  - **Indicative Cities Protection:** Existing indicative cities pre-populated within the tiers must not be removed from their respective categories.
**V1 to V2 Platform Transition Actions**
  - **Automated Migration:** All active V1 users must be automatically migrated to the new V2 platform.
  - **Complimentary Transition Access:** At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users.
**Legal, Compliance & Front-End Verbiage**
  - **No Phase 1 Chatbot:** A live chatbot is not a mandatory feature and will *not* be built or integrated for the Phase 1 launch.
  - **Privacy Policy Action Item:** The legal vendor must immediately append a conditional scope clause into the Privacy Policy detailing potential future chatbot integrations, preventing future re-review vendor costs.
  - **Age Verification Verbiage:** The registration screen must explicitly enforce 18+ consent using this exact required phrase: *"by continuing you confirm you are 18 years and above"*.
  - **Official Legal Entity:** The exact official legal entity name, *"Keyproperty"*, must be used across all terms of use, privacy policies, and compliance documents.
#### **App **
##### **Infrastructure & UI**
  - Mobile App Infrastructure: Integrate Firebase specifically for Crashlytics (crash reporting) and in-app push notifications
###### **Mobile UI/UX & Navigation**
  - **Card-Based Interface:** Horizontal scrolling tables are strictly prohibited for mobile interfaces; data must be converted into a mobile-friendly card or thumbnail-based design.
  - **Visible Contact Details:** To facilitate efficient RM calls, agent or user phone numbers must be displayed directly on the top-level UI cards (immediately below the name).
  - **Nested Screen Navigation:** When users navigate multiple layers deep into the UI, the system must provide dual-navigation controls: a **"Back" button** (to return to the immediate previous screen) and a **"Close" button** (to act as a global exit dropping back to the main dashboard).
  - **Persistent Search Rule:** As a global platform rule, any screen featuring paginated lists or scrollable card results must lock a persistent search and filter bar to the top of the screen so users do not lose their search context.
#### **Marketing Attribution & Source Tracking**
  - **Acquisition API Integration:** The platform will integrate a third-party marketing API (such as "Singular" or "Branch") to track the acquisition source of newly onboarded users (e.g., tracking Organic vs. Paid traffic).
  - **Source of Truth:** The user's phone number will serve as the primary identifier and source of truth for pulling this attribution data.
#### List of Business Rules discussed on July 13 
**1. Enterprise Dashboard Data Display & Tracking**
  - **Properties Contacted Tracking:** The "Properties Contacted" list on the Enterprise user dashboard must capture and display any property where a brand user clicks a Call-to-Action (CTA). This includes properties found through direct exploration as well as properties found via relevancy matches.
  - **Property Owner Labeling:** In the properties contacted list, the field previously referred to as "Added by" must be explicitly renamed to "Name of property owner". This section must display the property ID, a photo, the property owner's name, and the owner's mobile number.
  - **Format Comparison (UI Behavior):** Accordions displaying formats should not automatically close when another is opened, allowing users to compare two formats side-by-side.
**2. Relevancy Logic & Navigation**
  - **Default Sorting:** Relevancies are dynamic and must always be sorted by "newest first" by default.
  - **Relevancy Grouping & UI:** Because contact requests are a subset of total relevancies and the list will get highly congested, relevancies must not be displayed as a flat list. Instead, they must be grouped by Demand using a multi-list dropdown structure (e.g., "Demand ID XYZ - Mumbai - 3,000 sq ft - 2 relevancies," which drops down to show the specific relevant properties).
  - **Search and Filters:** Search and filtering functionality must be added to enterprise lists (including properties, projects, and relevancies) to make navigating large amounts of data easier.
  - **New Tab Routing:** When a user clicks on a specific property from within the relevancy list, the property detail page must open in a **new tab**, not the same window. This click-to-new-tab rule also applies to clicking on Demand cards.
**3. Lead Status Navigation**
  - **Direct Lead State Access:** The leads dashboard must support direct state navigation. If a user clicks on "approved," the UI must directly open the approved leads view. If they click "rejected," it must directly open the rejected leads view, allowing the user to change statuses directly from those screens.
4\. **Lead & Relevancy Matching Logic (Enterprise & Agents):**
  - **Relevancy-Based Contact:** If an enterprise user posts a demand and receives relevant properties, and they click "contact" or "view phone number" on one of those properties, the system must capture and display both the user's Demand ID and the relevant Property ID. This ensures the connection between the specific demand and the property is clearly tracked.
  - **Direct Exploration Contact:** If a user explores a property directly (without any underlying demand or relevancy match) and requests the phone number or contact details, the system will only display the relevant Property ID, as there is no Demand ID involved in the transaction.
  - **Inbound Property Lead Match:** If an agent posts a property and receives a demand against it, any request for contact must show the agent both the matching Demand ID and their own Property ID.
**5. UI/UX Navigation & Display Rules:**
  - **Relevancy Drill-Down:** The total number of relevancies (e.g., 10 relevancies across 3 demands) will be shown on the Relevancy tab. Clicking on this total number must open a side drawer/bifurcated view that specifically breaks down which Demand IDs match with which specific properties.
  - **Lead Statuses:** The "Leads Received" dashboard must display categorized statuses for leads, specifically identifying which are "approved", "rejected", and "pending".
  - **Standardized Terminology:** The term "requirements" is deprecated across the entire platform. The UI, tables, and backend must exclusively use the word "demands" (e.g., "Number of Demands", "Active Demands").
  - **Active Link Navigation:** Clicking on "Active Properties" must navigate the user directly to the Properties view, and clicking on "Active Demands" must navigate directly to the Demands view (replacing the confusing "My Listings" tab).
  - **Logo/Icon Display:** Standard letter icons (e.g., L, V, Z) or brand logos must be accommodated within the UI cards.
**6. User Management & Permissions:**
  - **User Management Data Handling:** Adding and removing cities within the User Management (or subscription) front-end UI should reflect back-end capabilities, making system adaptations easier. X cities added to an account are indicative and should not be removed from the category without proper access rules.
  - **Office Registration Permissions (Pending Rule):** By default, an "office" account can post only office spaces. However, when the "manage space" checkbox is ticked during registration— Keydemand team will receive an alert about the user interested in Managed Office Space if someone opts to click during office registration. The Office demand will be posted on on their account. The user will only be able to post office demand & not managed space demand.
-----
**Action Items, Tasks, and Deadlines**
  - **Task:** Rename the "Added by" label to "Name of property owner" on the Properties Contacted page.
      - **Assigned To:** Krishna Chaitanya.
  - **Task:** Update the Relevancy UI to use a grouped, drop-down list format for Demands rather than flat pagination to handle high data volumes.
      - **Assigned To:** Krishna Chaitanya.
  - **Task:** Add search, sorting, and filter options to the enterprise dashboard lists.
      - **Assigned To:** Krishna Chaitanya.
  - **Task:** Make all property links and demand cards within the relevancy section clickable, and configure them to open in a new browser tab.
      - **Assigned To:** Krishna Chaitanya.
#### List of Business Rules discussed on July 14 
###### **Exhaustive List of Business Rules**
**1. Branding & Identity**
  - **Logo Tagline Integration:** The Keydemand logo used in the UI must include the "CRE simplified" tagline, as this is part of the officially registered logo and standard marketing language used across all creatives.
**2. User Accounts & Tracking**
  - **No User Impersonation ("Switch" Feature):** A Keydemand admin or assigned demand team user cannot use a brand’s profile/account on their behalf to contact properties. All actions logged under "properties contacted" must strictly be the brand user's own actions.
**3. Dashboard UI & Terminology**
  - **Card Constraints:** The dashboard UI must strictly maintain six total cards to ensure a clean UI/UX.
  - **Leads Terminology:** The term "Leads received" is being deprecated in favor of simply "Leads".
  - **Consolidated Leads Card:** Because of the six-card limit, the main Leads card (the green card) must encompass both "inbound" metrics (e.g., leads received, image requests) and "outbound" metrics (outbound contacts). Outbound contacts will likely be added as a floating element within this single card.
  - **Contextual "User Types":** The platform defines "User Type" in two distinct contexts that must not be confused:
      - *Population Level:* Defined at Keydemand’s end (e.g., broker, brand user).
      - *Project/Inquiry Level:* Defined as roles like Tenant, Agent, or Developer.
**4. Property Display & Interaction UX**
  - **Hidden Property Display:** For properties that a user uploads but marks as "hidden," the UI must not rely solely on an eye icon. Because the photo area is small, an opacity change (or similar visual treatment) must be used so the user can still read the property details.
  - **Internal Visibility of Hidden Properties:** If a property is marked hidden by a specific user (e.g., Himanshu), it must remain fully accessible and viewable to authorized internal users/managers (e.g., Kartik), clearly indicating who hid it.
  - **Clickable Property Cards:** Clicking anywhere on the general background of a property card must open that specific property's page.
  - **Hover States:** When a user hovers over a fully clickable card, the background must light up/highlight (e.g., in a green or blue shade) to clearly indicate it is clickable.
  - **Exclusion from General Clickability:** The four specific call-to-action buttons on a card (Relevancy, Edit, Detail, etc.) act independently and are excluded from the general card hover/click rules.
  - **Information-Dense Cards:** Cards containing heavy amounts of information should utilize a subtle shadow rather than color-changing backgrounds on hover to avoid overwhelming the user.
#### List of business rules on July 16
**1. Enterprise Dashboard & High-Value Leads UI Logic**
  - **Actionable Buttons Restriction:** Enterprise brands (acting as Keydemand team users) do not have "Accept," "Reject," or "Image Request" buttons for leads. "Leads Open" solely functions to open and view the lead.
  - **High-Value KD Tickets Display:** For high-value leads where a demand is matched, the UI must explicitly display the demand card, its specific relevancy score, and the property/project owner's details.
  - **"My Task" Shortcut Functionality:** The "My Task" section acts as a shortcut view displaying items marked with a red indicator, specifically representing unviewed or unopened property leads and demand leads.
  - **Enterprise 'All Accounts' Card Data:** The Enterprise assigned accounts table must display "Relevancy" data. Relevancy details must encompass the Demand ID, a clickable Relevant Property ID (which opens the property page), relevancy percentage, place, and size.
  - **Mobile UI Abbreviations:** To prevent text wrapping issues on mobile screens, internal team dashboards can utilize abbreviations (e.g., "KD" instead of "Keydemand Properties") subject to final UX review.
**2. Property Posting & Form Logic**
  - **Other Interested Locations Field:** The "Other Interested Location" field must be supported across Retail, FNB, Office, and Managed Spaces. It must accommodate up to three multiple secondary locations alongside the primary location. Same city, no radius
  - In the filters field in all properties page, we need to have an option to select range between example 1000 to 2000. the range is to short to select the option 1000 to 2000
#### July 29th - Business rules and Action items 
<https://docs.google.com/document/d/14nXV4QvzlIE3JwqOsDNOIOhJC4UmCBHO6hqFAE_24SI/edit?tab=t.0>
##### **Business Rules**
**Demand Images & Brand Logos**
  - Uploaded enterprise brand logos must display as the small avatar (icon) on demand cards.
  - If the end-user provides no brand logo, system-defined placeholder images based on the specific asset class (e.g., office, retail) must be used.
  - On the detailed demand page, no large images or photos should be shown, as demands represent requirements and lack tangible media.
  - If a brand (e.g., Starbucks) registers independently and does not upload a photo, the system should simply display their initial and name (e.g., "posted by Starbucks") rather than a large empty thumbnail.
  - A feature to mask or hide brand names/logos for enterprise clients who request anonymity (e.g., Levi's) is noted as a business necessity but has been parked for future phases.
**Demand & Property Display Logic**
  - Demand cards must be structurally lean (approximately 15 fields) compared to property cards (25-30 fields) because they do not require heavy media attachments or floor plans.
  - "Explore Demands" and "Explore Properties" cannot coexist in a single scrolling feed or multi-select search because their filter logic and fields are polar opposites and would confuse users.
  - Only "Keydemand" users possess the system permissions to explore demands; regular users, brands, and agents do not have this option.
  - "Properties" and "Projects" both represent supply inventory and can be multi-selected and viewed together.
  - Selecting "Demands" in the search parameters must automatically deselect "Properties" and "Projects".
**Platform Navigation & Global Filters**
  - The primary navbar menu item on Keydemand navbar must be renamed from "Explore Properties" to a consolidated "Explore Listings".
  - Under "Explore Listings," users will use radio buttons to explicitly toggle between exploring demands or properties.
  - When searching for Projects, the following filters must be present: Transaction type, Project size, Possession date, Project type, City, Location, and Asset class.
  - "Asset Class" and "Project Type" are mandatory filter fields for Projects.
**User Onboarding, Consent & Landing Pages**
  - The "18 and above" age consent checkbox and the Terms of Use link on the login modal have been verified as fully implemented and correct.
  - For unregistered users, a new "List a Project" button must be present on the global navbar to act as a primary acquisition hook for Developers and Managed Space Operators.
  - Developer and Managed Space Operator registration entry points must be removed from the standard login popup. They are to be moved into the "List a Project" flow, forcing users to explicitly select their user type via radio button to reveal the registration form.
  - The landing page client section must feature static, non-clickable category text reading: Retail & F&B Brands, Developers, Mall Operators, Office Tenants, and Managed Space Operators.
  - The "Explore Clients" UI must specifically utilize the verified list of client logos located in Columns G and H of the PR sheet (e.g., Postman, which has 5 offices in Bangalore).
  - The "8,000+ properties" banner on the landing page will feature complete client lists, while the banner on the About Us page will feature select bits of client information.
**User Roles & Relationship Managers (RMs)**
  - Brokers are not assigned Relationship Managers (BRMs do not exist in the system).
  - Enterprise and Brand users (e.g., retail and F&B brands) are assigned RMs.
  - If multiple Key Demand team members are assigned to manage a single brand's account, only the **first** person assigned will be publicly displayed as the designated RM on the brand's dashboard.
-----
##### **Key Action Items & Tasks**
|  |  |  |
| :- | :- | :- |
| **Action Needed** | **Owner** | **Target Deadline / Status** |
| Remove heavy media placeholders from demand cards to make them lean (~15 fields max). | Krishna Chaitanya | Immediate |
| Overhaul API/backend logic so demands and properties search independently of each other. | Sathish Reddy | Immediate |
| Rename the navigation bar menu item to "Explore Listings". | Krishna Chaitanya | Immediate |
| Add "Asset Class" and "Project Type" filters to the Project search functionality. | Pradeepa / Krishna | Immediate |
| Add a "List a Project" button to the logged-out global navbar. | Krishna Chaitanya | Immediate |
| Move Developer & Managed Space operator registration from the login modal to the "List a Project" radio-select flow. | Krishna Chaitanya | Immediate |
| Add static, non-clickable client category text to the landing page client section. | Krishna Chaitanya | Immediate |
| Extract the correct client list and logos from Columns G & H in the PR sheet for the "Explore Clients" section. | Krishna Chaitanya | Immediate |
| Implement permissions logic to ensure only the *first* assigned RM shows on Brand dashboards. | Krishna Chaitanya | Immediate |
| Provide finalized copy/text for the About Us page banner. | Kartik Iyer | Pending |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |





### Business rules extracted
Most remaining bullets in this doc are restated row-by-row in the Final sheet (BR-CR-001…205, matched by Business Rule Type) and are not renumbered.
New or different rules in this doc:

**General / terminology / validation**
- **BR-CR-219** — The platform is strictly divided into two environments: the Key Demand "User Portal" (front-end) and the administrative "Control Panel" (back-end). _(§ General › Platform Portals)_
- **BR-CR-220** — Front-end Key Demand agents are transactional users (explore properties, post demands, manage assigned leads) and are strictly prohibited from onboarding new users or editing external user profiles. _(§ General › Platform Portals)_
- **BR-CR-221** — The Control Panel is restricted to a handful of core management/administrative staff (e.g., based in Mumbai) and enables user onboarding, bulk project/property uploads, subscription management, and analytics. _(§ General › Platform Portals)_
- **BR-CR-222** — Any field left empty should be automatically hidden from the UI (comment: client informed it will be fixed later; client OK). _(§ General › Business Rules & Terminology)_
- **BR-CR-223** — New fields are added to Managed Space and Projects — see Column ES and HE in the PR sheet, "Property & Project Input Fields" tab. _(§ General › Business Rules & Terminology)_
- **BR-CR-224** — OC Status fields across all property and project backend sheets must be unified to exactly 4 terms: Received, Applied, Not Available, Under Construction (replacing "Received," "Applied," and "Not applicable"). _(§ General, added 7 July — differs from BR-CR-020)_
- **BR-CR-225** — In the 'Demand' section strictly, "OC Required" remains a boolean "Yes/No" selection. _(§ General, added 7 July)_
- **BR-CR-226** — "Other interested location": at least 3 additional localities; same city, no radius. _(§ Validation & Logic)_
- **BR-CR-227** — Open question (phrased as a question in source): grant users the ability to modify all fields except City and Location? _(§ Validation & Logic)_
- **BR-CR-228** — Quick registration must mirror the mandatory fields required when posting a demand (e.g., floor preference, carpet area, transaction type) so backend relevancy matching does not break. _(§ UI & Navigation)_
- **BR-CR-229** — Removing the email field from the user registration form is struck through (cancelled). _(§ UI & Navigation)_
- **BR-CR-230** — Internal backend/Keydemand terminology exclusively uses "Account Handler"; the brand-facing front-end label is "Point of Contact" / "POC". _(§ Compliance, Legal & Chatbot Integrations)_
- **BR-CR-231** — RERA number: optional field at the project level (mandatory version struck through). _(§ Compliance — differs from BR-CR-030)_
- **BR-CR-232** — Chatbot: not built for Phase 1; the legal vendor must add a conditional future-chatbot scope clause to the Privacy Policy immediately to avoid re-review vendor costs. _(§ Compliance)_
- **BR-CR-233** — Legal entity name for terms of use and privacy policies is "Keydemand". _(§ Compliance — conflicts with BR-CR-262 "Keyproperty")_
- **BR-CR-234** — Restrict platform access to users 18 years of age or older. _(§ Permissions & Access)_
- **BR-CR-235** — Property card title fallback examples: Highstreet Retail Property, Office Property for Lease, Office Property for Sale, Managed Property for Lease. _(§ Permissions & Access › Display Logic)_
- **BR-CR-236** — Demand card "Posted By": if brand/tenant name is unavailable, use the category label (e.g., "Retail Brand" or "F&B Brand"). _(§ Display Logic)_
- **BR-CR-237** — Remove the separate "leads" section (duplicate of "contact inquiries"); rename "contact inquiries" to "leads"; Lead = Inquiries + Image Requests. Legacy-data note struck through. _(§ Permissions & Access › Leads)_
- **BR-CR-238** — Attribution tracking uses third-party marketing APIs such as "Singular" or "Branch", keyed on phone number. _(§ Marketing & Source Tracking; § Marketing Attribution)_

**Landing page**
- **BR-CR-239** — "1 free listing" hook applies to all user types with listing capabilities. _(§ Landing Page › UI & Promotional Hooks)_
- **BR-CR-240** — Dashboard subscription labels (e.g., "Free Plan," "Trial Plan," "Usage 0 of 1") plus a "Subscribe Now for unlimited access" CTA. _(§ Landing › Navigation & CTAs)_
- **BR-CR-241** — Rename "Sponsored Projects" to "Premium projects"; Premium projects city tabs are dynamic (only cities with active premium projects, e.g., Nashik). _(§ Landing › Navigation & CTAs; Search & Map Logic)_
- **BR-CR-242** — Google Maps integration is to be evaluated for performance impact. _(§ Landing › Navigation & CTAs)_
- **BR-CR-243** — "Request a callback" captures only the mobile number (name/email not mandatory). _(§ Landing › Search & Map Logic)_
- **BR-CR-244** — Navbar "List your Project >>" reveals a dropdown Developer | Operator; selecting either opens an Enquiry Form; remove this entry point from the login/sign-up page. _(§ Landing › Search & Map Logic)_
- **BR-CR-245** — City default redirect example: a location without active properties (e.g., Karimnagar) defaults to the closest city with inventory plus an explanatory banner. _(§ Landing › Search & Map Logic)_

**Login & edit flows**
- **BR-CR-246** — Abandonment examples: back button or browser close after OTP verification → mobile captured as lead. _(§ Login and Edit Flows, added 7 July)_
- **BR-CR-247** — Profile picture upload is available only as an optional add-on in "My Profile" after registration. _(§ Login and Edit Flows)_
- **BR-CR-248** — Strict domain-level email validation (blocking generic domains like "@gmail.com") is to be enforced. _(§ Login and Edit Flows — reversed by BR-CR-048 in Final)_
- **BR-CR-249** — Agents are treated as B2C users (email optional). _(§ Login and Edit Flows)_
- **BR-CR-250** — Replace "Tenant" with the exact term "Office tenant/occupier". _(§ Login and Edit Flows)_
- **BR-CR-251** — Goa sub-locations (e.g., Mapusa, Margo, Marmaga, Panjim) consolidate under "Goa". _(§ Location & City Mapping)_
- **BR-CR-252** — Regional sub-region info: hover-over on web; clickable 'I' (info) button on mobile. _(§ Location & City Mapping)_
- **BR-CR-253** — Relevancy-critical fields (e.g., floor preference, store type) are permanently in the quick registration form. _(§ Data Collection)_
- **BR-CR-254** — If the Managed Office Space option is clicked during office registration, the Keydemand team receives an alert; the Office demand is posted on their account; the user can post only office demand, not managed space demand. _(§ Data Collection; repeated July 13 §6)_

**Agent flow**
- **BR-CR-255** — HTL demands hidden from agents; the original poster can still view the agent's property and initiate contact. _(§ Agent Flow)_
- **BR-CR-256** — "Pro Member" replaces terms like "Broker" or "Agent" to sound more premium. _(§ Agent Flow)_
- **BR-CR-257** — Image request: upon owner approval, images and the owner's number become visible to the requester. _(§ Agent Flow)_
- **BR-CR-258** — Massive agent demands become visible to other agents with matching properties. _(§ Agent Flow)_

**Keydemand flow**
- **BR-CR-259** — Deactivating a user profile deactivates their inventory; deleting a profile permanently removes all associated inventory; only from backend. _(§ Keydemand Flow §1)_
- **BR-CR-260** — Hamburger menu: RM sees summary of all assigned brands/tenants (demands, relevancies, contact requests, project inquiries) without switching accounts. Side menu lists: Dashboard, Profile, Listings (My/KD), Projects (Assigned/All), Enterprise Accounts (Assigned/All), High Ticket Leads (My City/Overall), Solutions, Notifications, Inquiries, Saved/Shortlisted. _(§ KD Flow §2)_
- **BR-CR-261** — HVL thresholds example: >10,000 sq ft Bangalore/Hyderabad; >5,000 sq ft Mumbai; HVLs are exclusively new, fresh inquiries/registrations meeting thresholds by asset class and city; exclusion examples Raymond, H&M; standard-lead example 6,000 sq ft restaurant vs 8,000 benchmark → open to all agents; Tier 1 = Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi; Tier 2 e.g. Jaipur, Indore; manual unlock timeframe e.g. 3-4 days, pushes into public relevancy pool. _(§ KD Flow §3)_
- **BR-CR-262** — Official legal entity "Keyproperty" for terms, privacy policies, compliance documents. _(§ Administrative › Legal)_
- **BR-CR-263** — RM account-level example: one RM for Aditya Birla in Hyderabad handles all sub-brands (Peter England, Louis Philippe…) for that region. _(§ KD Flow §4)_
- **BR-CR-264** — Internally, KD-posted items show uploader name (e.g., "Posted by Himanshu"). Hidden images show to KD with banner "Hidden to others". _(§ KD Flow §5)_
- **BR-CR-265** — "View Image Request" CTA removed (or greyed out/disabled) for KD users on external agent properties. _(§ KD Flow §5)_
- **BR-CR-266** — KD relevancy scope (Brands and Tenants only) is subject to final confirmation/TBD by Kartik. _(§ KD Flow §5)_
- **BR-CR-267** — Enterprise breakdown "Assigned to Me" itemises Retail and Office Brands, Office Tenants, Managed Spaces (e.g., total 500). _(§ KD Flow §6)_
- **BR-CR-268** — CRM pipeline also logs assigned representative and last activity date. _(§ KD Flow §6)_
- **BR-CR-269** — "View Requirement" updates "Viewed" status (Yes/No) with timestamp. _(§ KD Flow §7)_
- **BR-CR-270** — Broker Monitoring tracks requirements added, relevancies, contact attempts, leads received, missed calls and ignored image requests, to counter broker complaints. _(§ KD Flow §8)_
- **BR-CR-271** — Enquiries Received captures user type, name, mobile, email, timestamp, projects of interest. _(§ KD Flow §8)_
- **BR-CR-272** — Notification filters e.g. "All leads for my listings," "Tagged projects," "Relevancies"; routing by interaction type (developer enquiries, enterprise conversion prompts, support requests). _(§ KD Flow §9)_

**Brand / Office / Enterprise**
- **BR-CR-273** — A Retail brand cannot post F&B demands, and vice versa (comment: "Himanshu will get back", resolved). _(§ Brand §1)_
- **BR-CR-274** — Retail & F&B users may explore Retail, F&B, office asset classes. _(§ Brand §2; Enterprise-Brand — superseded by BR-CR-158/173)_
- **BR-CR-275** — Managed Space projects: transaction options strictly "Lease" (remove "Sale" and "Lead"). _(§ Office Tenant and Managed Space)_
- **BR-CR-276** — Format examples (McDonald's): "Drive-thru" (approx. 20,000 sq ft plot with parking), "Food Court" (900-1100 sq ft), "High Street" (2200-2800 sq ft). _(§ Enterprise-Brand)_
- **BR-CR-277** — Enterprise requirements must be bulk uploaded centrally through the Admin panel. _(§ Enterprise sections)_

**Admin / Control Panel**
- **BR-CR-278** — Control Panel access: 4-5 core people (Kartik, Sudanchu, Himmanu, Nitesh, and tech admins). _(§ Administrative)_
- **BR-CR-279** — Phase 1 admin roles: strictly two — "Super Admin" and "Admin". _(§ Administrative — differs from BR-CR-004 (three roles incl. 'Ops User'))_
- **BR-CR-280** — Admin login: email and password; a one-time password is sent to the registered email on creation; options to change and reset passwords. _(§ Administrative)_
- **BR-CR-281** — Key Demand team cannot self-register; added manually from the Control Panel by an Admin. _(§ Administrative › Agent Onboarding)_
- **BR-CR-282** — Enterprise users (e.g., ABFRL) log in with registered mobile numbers. _(§ Administrative › Enterprise)_
- **BR-CR-283** — If no brand image is available, default to the selected "end-use" image for the demand. _(§ Administrative › Enterprise)_
- **BR-CR-284** — HVL size limit example >10,000 sq ft; HVL assigned KD members chosen via dropdown list. _(§ Administrative › HVL)_
- **BR-CR-285** — Subscription tiers: Class A/Metros, Class B/Non-metros, Class C/Rest of India, Class D/Pan India; no city deletion in Phase 1 because of active auto-pay/auto-renewal tokens. _(§ Administrative › Subscription)_

**July 13**
- **BR-CR-286** — "Properties Contacted" (Enterprise dashboard) captures any property where the brand user clicks a CTA, from exploration or relevancy.
- **BR-CR-287** — Rename "Added by" to "Name of property owner"; show property ID, photo, owner name, owner mobile.
- **BR-CR-288** — Format accordions must not auto-close when another opens (side-by-side comparison).
- **BR-CR-289** — Relevancies default sort "newest first".
- **BR-CR-290** — Relevancies grouped by Demand in a multi-list dropdown (e.g., "Demand ID XYZ - Mumbai - 3,000 sq ft - 2 relevancies"), not a flat list.
- **BR-CR-291** — Search and filtering on enterprise lists (properties, projects, relevancies).
- **BR-CR-292** — Property clicked from the relevancy list, and Demand cards, open in a new tab.
- **BR-CR-293** — Clicking "approved"/"rejected" on the leads dashboard opens that view directly; statuses changeable there.
- **BR-CR-294** — Relevancy-based contact shows both Demand ID and Property ID; direct exploration contact shows only Property ID; agent inbound match shows Demand ID and own Property ID.
- **BR-CR-295** — Relevancy tab shows total (e.g., 10 relevancies across 3 demands); clicking opens side drawer breaking down Demand IDs ↔ properties.
- **BR-CR-296** — "Leads Received" shows statuses "approved", "rejected", "pending".
- **BR-CR-297** — The term "requirements" is deprecated platform-wide; use "demands" (e.g., "Number of Demands", "Active Demands").
- **BR-CR-298** — "Active Properties" → Properties view; "Active Demands" → Demands view (replacing "My Listings" tab).
- **BR-CR-299** — UI cards accommodate letter icons (e.g., L, V, Z) or brand logos.
- **BR-CR-300** — Adding/removing cities in User Management/subscription UI reflects backend; X cities added to an account are indicative and not removed without proper access rules.
- **BR-CR-301** — Action items (owner Krishna Chaitanya): rename "Added by"; grouped relevancy UI; search/sort/filter on enterprise lists; relevancy links/cards clickable opening new tab.

**July 14**
- **BR-CR-302** — Keydemand logo must include the "CRE simplified" tagline.
- **BR-CR-303** — No user impersonation ("Switch"): KD admins/users cannot act via a brand's account; "properties contacted" must be the brand user's own actions.
- **BR-CR-304** — Dashboard keeps exactly six cards.
- **BR-CR-305** — "Leads received" deprecated → "Leads"; the green Leads card covers inbound (leads received, image requests) and outbound contacts (likely a floating element).
- **BR-CR-306** — "User Type" has two contexts: population level (broker, brand user) vs project/inquiry level (Tenant, Agent, Developer).
- **BR-CR-307** — Hidden properties use opacity change (not just eye icon); remain viewable to authorized internal users (e.g., Kartik), indicating who hid them.
- **BR-CR-308** — Whole property card clickable; hover highlights background (green/blue); the four CTA buttons (Relevancy, Edit, Detail, etc.) excluded; info-dense cards use subtle shadow instead.

**July 16**
- **BR-CR-309** — Enterprise brands (acting as KD team users) have no "Accept", "Reject", "Image Request" buttons; "Leads Open" only opens/views.
- **BR-CR-310** — High-value KD tickets show demand card, relevancy score, and property/project owner details.
- **BR-CR-311** — "My Task" shortcut shows red-indicator items (unviewed/unopened property and demand leads).
- **BR-CR-312** — Enterprise assigned accounts table shows Relevancy: Demand ID, clickable Relevant Property ID, relevancy %, place, size.
- **BR-CR-313** — Mobile internal dashboards may use abbreviations (e.g., "KD") subject to UX review.
- **BR-CR-314** — "Other Interested Location" across Retail, FNB, Office, Managed Spaces: up to three secondary locations, same city, no radius.
- **BR-CR-315** — Property filters must allow range selection (e.g., 1000 to 2000).

(July 29 rules: see doc #3 section, BR-CR-316 onward.)

### Open questions / ambiguities in this doc
- Two legal entity names in the same doc: "Keydemand" vs "Keyproperty".
- "No separate DOB field or checkbox is required" vs explicit 18+ phrase; July 29 says the "18 and above" checkbox is implemented.
- Terminology: "Remove Account Handler and RM globally → POC" vs "internal terminology exclusively Account Handler" vs "RM is strictly an internal administrative term" vs RM labels used throughout KD flow.
- Admin roles: two here vs three (incl. Ops User) in the sheets.
- "Can we grant users ability to modify all fields except City and Location?" — phrased as question; also conflicts with locked Asset Class/Transaction Type.
- Relevancy matching scope "subject to final confirmation/TBD by Kartik".
- Office registration permission explicitly marked "(Pending Rule)" (July 13).
- Open comment AAAB_VpOYck on OC 4-term rule ("added on 7th July") never resolved; sheets use 3 terms.
- Enterprise demand auto-fill when "Enterprise user posts a demand" vs "Enterprise requirements must be bulk uploaded centrally".
- Brand image fallback: "end-use image" vs pool of five asset-class images vs July 29 placeholder/initial-and-name.
- Leads statuses Open vs Pending; "Leads Received" (July 13) vs "Leads received" deprecated (July 14).
- "at least 3 additional" vs "up to three" other interested locations.
- Retail/F&B explore Office (here) vs Final sheet (not Office).
- Comment AAACAfzCgqM "Himanshu will get back" on the brand posting rule (resolved, no recorded answer).

---
## July 29th - Business rules and Action items  [AUTHORITATIVE]
**Source:** Google Doc · ID `14nXV4QvzlIE3JwqOsDNOIOhJC4UmCBHO6hqFAE_24SI` · owner pradeepa.pv@futuristglobal.com · created 2026-07-29, modified 2026-08-03 · sections read: Business Rules (5 sub-sections), Key Action Items & Tasks table · no comments · read coverage: 100%.

### Content
#### Business Rules
**Demand Images & Brand Logos**
- Uploaded enterprise brand logos must display as the small avatar (icon) on demand cards.
- If the end-user provides no brand logo, system-defined placeholder images based on the specific asset class (e.g., office, retail) must be used.
- On the detailed demand page, no large images or photos should be shown, as demands represent requirements and lack tangible media.
- If a brand (e.g., Starbucks) registers independently and does not upload a photo, the system should simply display their initial and name (e.g., "posted by Starbucks") rather than a large empty thumbnail.
- A feature to mask or hide brand names/logos for enterprise clients who request anonymity (e.g., Levi's) is noted as a business necessity but has been parked for future phases.

**Demand & Property Display Logic**
- Demand cards must be structurally lean (approximately 15 fields) compared to property cards (25-30 fields) because they do not require heavy media attachments or floor plans.
- "Explore Demands" and "Explore Properties" cannot coexist in a single scrolling feed or multi-select search because their filter logic and fields are polar opposites and would confuse users.
- Only "Keydemand" users possess the system permissions to explore demands; regular users, brands, and agents do not have this option.
- "Properties" and "Projects" both represent supply inventory and can be multi-selected and viewed together.
- Selecting "Demands" in the search parameters must automatically deselect "Properties" and "Projects".

**Platform Navigation & Global Filters**
- The primary navbar menu item on Keydemand navbar must be renamed from "Explore Properties" to a consolidated "Explore Listings".
- Under "Explore Listings," users will use radio buttons to explicitly toggle between exploring demands or properties.
- When searching for Projects, the following filters must be present: Transaction type, Project size, Possession date, Project type, City, Location, and Asset class.
- "Asset Class" and "Project Type" are mandatory filter fields for Projects.

**User Onboarding, Consent & Landing Pages**
- The "18 and above" age consent checkbox and the Terms of Use link on the login modal have been verified as fully implemented and correct.
- For unregistered users, a new "List a Project" button must be present on the global navbar to act as a primary acquisition hook for Developers and Managed Space Operators.
- Developer and Managed Space Operator registration entry points must be removed from the standard login popup. They are to be moved into the "List a Project" flow, forcing users to explicitly select their user type via radio button to reveal the registration form.
- The landing page client section must feature static, non-clickable category text reading: Retail & F&B Brands, Developers, Mall Operators, Office Tenants, and Managed Space Operators.
- The "Explore Clients" UI must specifically utilize the verified list of client logos located in Columns G and H of the PR sheet (e.g., Postman, which has 5 offices in Bangalore).
- The "8,000+ properties" banner on the landing page will feature complete client lists, while the banner on the About Us page will feature select bits of client information.

**User Roles & Relationship Managers (RMs)**
- Brokers are not assigned Relationship Managers (BRMs do not exist in the system).
- Enterprise and Brand users (e.g., retail and F&B brands) are assigned RMs.
- If multiple Key Demand team members are assigned to manage a single brand's account, only the **first** person assigned will be publicly displayed as the designated RM on the brand's dashboard.

#### Key Action Items & Tasks
| Action Needed | Owner | Target Deadline / Status |
|---|---|---|
| Remove heavy media placeholders from demand cards to make them lean (~15 fields max). | Krishna Chaitanya | Immediate |
| Overhaul API/backend logic so demands and properties search independently of each other. | Sathish Reddy | Immediate |
| Rename the navigation bar menu item to "Explore Listings". | Krishna Chaitanya | Immediate |
| Add "Asset Class" and "Project Type" filters to the Project search functionality. | Pradeepa / Krishna | Immediate |
| Add a "List a Project" button to the logged-out global navbar. | Krishna Chaitanya | Immediate |
| Move Developer & Managed Space operator registration from the login modal to the "List a Project" radio-select flow. | Krishna Chaitanya | Immediate |
| Add static, non-clickable client category text to the landing page client section. | Krishna Chaitanya | Immediate |
| Extract the correct client list and logos from Columns G & H in the PR sheet for the "Explore Clients" section. | Krishna Chaitanya | Immediate |
| Implement permissions logic to ensure only the *first* assigned RM shows on Brand dashboards. | Krishna Chaitanya | Immediate |
| Provide finalized copy/text for the About Us page banner. | Kartik Iyer | Pending |
(4 further empty table rows in source.)

### Business rules extracted
- **BR-CR-316** — Enterprise brand logos display as the small avatar (icon) on demand cards. _(§ Demand Images)_
- **BR-CR-317** — No brand logo → system-defined placeholder images based on asset class. _(§ Demand Images)_
- **BR-CR-318** — Detailed demand page shows no large images or photos. _(§ Demand Images)_
- **BR-CR-319** — Independent brand with no photo → display initial and name (e.g., "posted by Starbucks"), no large empty thumbnail. _(§ Demand Images)_
- **BR-CR-320** — Brand anonymity masking (e.g., Levi's) parked for future phases. _(§ Demand Images)_
- **BR-CR-321** — Demand cards lean (~15 fields) vs property cards (25-30 fields). _(§ Display Logic)_
- **BR-CR-322** — Explore Demands and Explore Properties cannot coexist in one feed or multi-select search. _(§ Display Logic)_
- **BR-CR-323** — Only Keydemand users can explore demands. _(§ Display Logic)_
- **BR-CR-324** — Properties and Projects can be multi-selected and viewed together. _(§ Display Logic)_
- **BR-CR-325** — Selecting "Demands" auto-deselects "Properties" and "Projects". _(§ Display Logic)_
- **BR-CR-326** — Navbar item renamed "Explore Properties" → "Explore Listings", with radio buttons to toggle demands vs properties. _(§ Navigation)_
- **BR-CR-327** — Project search filters: Transaction type, Project size, Possession date, Project type, City, Location, Asset class; Asset Class and Project Type mandatory. _(§ Navigation)_
- **BR-CR-328** — "18 and above" consent checkbox and Terms of Use link on the login modal are implemented and correct. _(§ Onboarding)_
- **BR-CR-329** — Logged-out navbar shows "List a Project" for Developers and Managed Space Operators; their registration moves from the login popup into this flow with user-type radio selection revealing the registration form. _(§ Onboarding)_
- **BR-CR-330** — Landing client section static non-clickable categories: Retail & F&B Brands, Developers, Mall Operators, Office Tenants, Managed Space Operators. _(§ Onboarding)_
- **BR-CR-331** — "Explore Clients" uses verified client logos from Columns G and H of the PR sheet. _(§ Onboarding)_
- **BR-CR-332** — "8,000+ properties" landing banner shows complete client lists; About Us banner shows select client info (copy pending from Kartik Iyer). _(§ Onboarding; Action items)_
- **BR-CR-333** — Brokers have no RMs (BRMs do not exist); Enterprise and Brand users are assigned RMs; only the first assigned KD member is publicly shown as RM on the brand dashboard. _(§ User Roles)_
- **BR-CR-334** — Backend: demands and properties search independently (owner Sathish Reddy, Immediate). _(§ Action items)_

### Open questions / ambiguities in this doc
- About Us banner copy pending (Kartik Iyer).
- "BRMs do not exist" conflicts with the BRM persona in the Final sheet (same modification day, 3 Aug 2026).
- "List a Project" here vs "List your Project >>" (June 30 / CR Doc); here it reveals a registration form, earlier an Enquiry Form without login.

---
## Changes told in in this week meeting + Business Rule Changes  [AUTHORITATIVE]
**Source:** Google Doc · ID `1GnyoSuQXlhh6K9L3po-cv5aDHXlC87MaS8pV7NPckf8` · owner pradeepa.pv@futuristglobal.com · created 2026-06-25, modified 2026-06-30 · sections read: New Rule Sent in Whatsapp- June 25; June 30th Business Rule; Keydemand User Role Permissions & Constraints - Changes; Enterprise Brands (F&B, Retail); Enterprise Brands (Office and Managed Space); Business Rule Phase 1 Changes - in PR Sheet; Client Discussions June 4th Week; Business Rules Phase 1 Tab- PR sheet; 2 comments · read coverage: 100%.

### Content
#### New Rule Sent in Whatsapp- June 25
**HIGH TICKET LEADS**
- **Sizes to be editable** from the admin end.
    - City wise sizes
- These requirements can be manually opened-up OR permitted to the regular agents from the admin panel to be viewed by agents thru property relevancy.
- **Keydemand will own the City wise leads** to go out to assigned users & a master roster of all these leads to be maintained & accessed at admin end.
- **Cities:** Bengaluru, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi
- All other city leads irrespective of sizes can be viewed by **agents & KD team** under relevancy.
- All demands added by agents would be viewed by other agents irrespective of size and by **KD team** under relevancy.
- **All KD members** would be able to access all High Ticket Leads.

#### June 30th Business Rule
**Legal team has mentioned, we need to have a tick box for acceptance of terms and conditions during user onboarding(web and app)**

**Keydemand User Role Permissions & Constraints - Changes -** https://docs.google.com/document/d/1hSyAXJFKO2X9aJmAhucWcY54rEwbTpPUsh4heq_tHuY/edit?tab=t.0#heading=h.3cxgiys6gj7c

**Agent Flow - High End Demands Logic:** They cannot see any demands that fall in the criteria of (Restricted city wise) these demands will not match to their properties. (Agent should not see these demands) But the user who has posted demand can see their property and can connect [Phase 1]

**Brands**
They can explore all the asset classes and can show interest, but when posting, it will be restricted to only the asset class selected -
**CANNOT Bypass Asset Locks for posting:** A Retail brand cannot post F&B properties, and vice versa. They can see, but they cannot post apart from their asset class[Phase 1]
⟦comment AAAB-nQ9Ebc — Pradeepa PV (2026-06-30, OPEN): "Added on June 30"; anchored text: "We will be allowing Retail & F&B to explore retail, F&B and office. Where the asset class would be pre-selected to the one that user registered with. Also when the user with registered asset class tries to explore any other asset class we will notify them that they are exploring other asset class and continue to explore. Even if the user does any search or activity their pre-selected asset class should be the one registered."⟧

**Tenant(Office and Managed Space)**
Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space
Office properties and Managed Space Tenants can explore Managed Space properties & Office properties too.[Phase 1]
1] **CANNOT Bypass High-Value Routing:** If an Office Tenant requests > 5,000 sq ft, their demand is hidden from agents thru relevancy and routed exclusively to KD. They can get property relevancy of agents but agent cant see their requirement (Applicable to office only)[Phase 2]

#### ENTERPRISE BRANDS (F&B, Retail)
They can explore asset classes( Exploring Properties) - F&B can have F&B and Retail and Retail can have both F&B and Retail.
They can post only on their Asset Classes

#### ENTERPRISE BRANDS (Office and Managed Space)
They can explore both classes( Exploring Properties) - Office can have Office and Managed Space and Managed Space can explore Office and Managed Space.
Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space

#### Business Rule Phase 1 Changes - in PR Sheet
**Landing Page**
- Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand.
- Set the default city to **Bengaluru** (instead of Mumbai) when a user visits the platform for the first time.
- Add a "Request a callback" button alongside the "Book a demo" option. This should only capture the mobile number (do not make name/email mandatory to reduce abandonment).

**Navbar / Header**
- Add a **"List your Project >>"** button on the Navbar.
    - Clicking it should reveal a dropdown with **Developer | Operator** options.
    - Selecting either should open an Enquiry Form.
    - Remove this entry point from the login/sign-up page.

**Exclusive Projects**
- Remove the "Cities" tabs entirely from this section.

**Landing and Home Pages Page**
- Add dynamic city tabs based on where projects are actively listed (e.g., if a project is in Nashik, show a "Nashik" city tab).
- City Defaults: If a user searches for a location without active properties (e.g., Karimnagar), the system should default to the closest city with available inventory, accompanied by a messaging banner explaining the redirect.

**Landing page & Enterprise Solution Details Page**
- Change the Call-to-Action (CTA) text and functionality from **"Schedule a call"** to **"Request a call back"** (opens a Form).

**Search & Maps Integration**
- Add predictive search and autofill functionality for the **Location** input field, and completely remove project search from this specific field.

**User Permissions / Dashboard**
- Allow Retail, FnB, Office, and Managed Office users to browse and explore all other asset class properties.
- Restrict property posting strictly to the specific asset class assigned to their account profile.

**Admin / Lead Management**
- For high-end leads, implement a preset list of cities where Keydemand has an physical office, using a fixed carpet area parameters for now.

**Login and Demand (Enterprise)**
- Update the "Managed Space Occupier" input field for **Number of Seats** to be strictly numeric, with validation logic that only accepts values above 20 seats.

**Agent Home Page**
- Display a **"1 free listing"** promotional banner/notice for first-time users to drive engagement and encourage them to post.

**Property Listing Page**
- Show sample reference images during the image upload step so users understand what kind of photos to upload.
- Update the **OC Status** dropdown options to: *Available, Not Available, Under Construction*.

**Agent Subscription Page**
- Explicitly display a **"Trial Package"** mention if the agent does not have an active paid subscription.

**Agent Onboarding Flow**
- On the Profile page, change the **Operating City** field to a single-select dropdown. Use a visual selection layout similar to the city selector found on the landing page.

#### Client Discussions June 4th Week
**UI, UX, and Content Changes**
- **Property Detail Access:** Implement functionality allowing unregistered users to view property details by default.
- **Image Masking:** Ensure property images are masked/blacked out for unregistered users *only* if the broker specifically opted to hide them.
- **CTA Restrictions:** Ensure unregistered users are prompted to register only when clicking actionable elements like "View Phone Number" or "Contact Us".
- **Incentive Messaging:** Design and implement a pre-wall popup or graphic communicating the "one free listing" reward to users *before* they begin the registration flow, rather than showing it post-registration.
- **Dashboard Subscription Text:** Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., "Free Plan," "Trial Plan," "Usage 0 of 1") and a "Subscribe Now for unlimited access" call to action.
- **Navbar Inquiry Button:** Add a "List your project" (Developer/Managed Space Inquiry) button to the top navigation bar that triggers an inquiry form without requiring a user login.
- **Landing Page City Tabs:** Remove static city tabs from the exclusive projects section. Make the city tabs for sponsored projects dynamic so they only display cities with active project inventory.
- **Default Search Bug:** Fix the bug where the default city selection is not automatically defaulting to Bangalore.
- **Google Maps Integration:** Integrate Google Maps into the search/typing functionality for accurate locality selection (to be evaluated for performance impact).
- **Dashboard Cleanup:** Remove the redundant "lead management" section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard.
- **Client Logos:** Add the names and logos for "Office Tenant" and "Managed Office Spaces" to the static client section on the landing page.
- **Form Validations:** Add a vibrating notification or explicit visual indicator to alert users when mandatory fields are missed during form submission.
- **Text Updates:** Revise website content/write-ups for clarity. Standardize user terminology across the platform by changing "Agent" to "Property Agent" and "Tenant" to "Office Tenant".
- **PDF Functionality:** Implement the missing PDF download feature for individual user listings.
- **SEO Compliance:** Populate the necessary website data and tags to ensure the platform is fully SEO compliant.

**Forms, Registration & Lead Capture**
- **Immediate Lead Capture:** Update the "Show Interest" API logic to capture the phone number as a lead the exact moment OTP verification is successful, preventing lead loss if the user closes the browser before finishing.
- **Standardize Mandatory Fields:** Update the quick registration journey to mirror the exact mandatory fields required when posting a demand (e.g., floor preference, carpet area, transaction type) to ensure backend relevancy matching does not break later.
- **Form Cleanup:** Remove the email address field from the user registration form completely, as it causes validation failures in the "Show Interest" flow.
- **Field Editability:** Change system logic to allow users to edit 'Yes' fields in property and demand forms even after a response is received.

**Business Rules & Platform Logic Evaluations**
- **High-Value Demand Routing:** Develop a simplified, hardcoded logic model to route high-end requirements (e.g., above 5,000 sq ft) exclusively to Key Demand team members based on specific cities (Mumbai, Pune, Bangalore, Chennai, Indore, Hyderabad).
- **Demand Volume Restrictions:** Confirm with the business team whether city-specific demand volume restrictions (e.g., hiding 10,000+ sq ft demands from public view) will be implemented in Phase 1 or deferred to Phase 2.
- **Cross-Asset Exploration:** Finalize the logic allowing Retail and Food & Beverage (FNB) brands to explore each other's properties to maximize leads, while restricting their ability to post demands to their registered asset class.
- **Tenant Logic Verification:** Confirm the rule that Office tenants can post and explore both Office and Managed Spaces, while Managed Space tenants can explore Office but only post Managed Space.
- **Lead Visibility:** Decide whether Key Demand agents should have a centralized Pan-India view of high-end leads or if visibility should be strictly restricted to their assigned cities.
- **Metric Redundancy:** Evaluate if the "Leads Received" and "Contact Inquiries" counters are doing the exact same thing and determine if one should be removed to avoid confusion.
- Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand backend admin panel.
- **Update Client Logos:** Provide names and logos for the new "office tenant" and "managed office space" users to be added to the client logos section.

**Compliance, Legal, & Admin**
- **Mandatory Checkboxes:** Add a mandatory Terms and Conditions / Privacy Policy checkbox to *all* registration flows (a simple "Proceed" button was deemed legally insufficient).
- **Phone Number Consent:** Add explicit terms regarding phone number disclosure to the registration process so users know their number is shared upon a request.
- **Legal Documentation:** Review the pending Terms of Use and Privacy Policy documentation (expected by the 10th) to ensure it satisfies both European GDPR and Indian DPDP Acts.
- **Data Deletion:** Implement a mechanism for automated "right to erase" or account deletion requests to comply with data laws.
- **Compliance Fields:** Add mandatory fields for Project RERA registration numbers and appoint a dedicated platform Grievance Officer. Determine if agent registration numbers are legally necessary for commercial properties.
- **Admin Panel Roles:** Finalize the precise user permissions for Admin groups (A, B, and C) and populate the administrative input fields.

Keydemand team: They can view my listings and all Keydemand listings under the dashboard, with a separate section to showcase as My listing / Keydemand listing

#### Business Rules Phase 1 Tab- PR sheet
- Unless otherwise specified, all fields must be **Dynamic**.
- ⟦comment AAAB-q1Z3fg start⟧Update the platform stats to reflect: **8000+** properties, **25Mn+** sq ft inventory, **28Mn+** sq ft demands, **1.5Mn+** sq ft Exclusive Inventory, and **450+** Brands.⟦comment AAAB-q1Z3fg end — Pradeepa PV (2026-06-30, OPEN): "Waiting for update from client"⟧
- **Validation Logic:** Trigger an explicit error for incomplete email addresses or mandatory fields. The system must visually highlight and navigate the user to the specific missing section (e.g., preventing progression during agent sign-up without clarifying the input error).
- The interface should automatically redirect the user to the precise location of any **missing fields**.
- **UI Alignment:** Rectify the property card layout to match finalized Figma designs; currently, the project name is appearing twice.
- Incorporate a **Select/Deselect All** functionality within the city update section.
- **Error Handling:** Implement clear notifications for invalid emails or empty outcomes. The UI must anchor the user to the incomplete segment to resolve blockers during onboarding.
- Automated navigation to the **required input** must be enforced.
- **Figma Compliance:** Standardize the property card to eliminate redundant project name displays.
- **Area Validation:** Carpet Area must strictly be less than or equal to the Builtup Area.
- **Demand Posting:** Expand the "other interested location" options to allow users to input at least **3 additional** localities.
- **Promotional Hook:** Feature a **"1 free listing"** notification on the Agent Home page (Navbar or first fold) for new users to incentivize posting. This applies to all user types with listing capabilities.
- **Subscription Status:** Unsubscribed agents must see a **"Trial Plan"** label with the free listing offer. Paid users should be tagged as **"Pro Member"** with active plan details (cities, pricing).
- **Dashboard Clean-up:** Remove the redundant "leads received" metric; maintain only "enquiries received" as finalized in the *June 25 Daily Stand-up*.
- **User Permissions:** Following internal review, grant users the ability to modify all fields except for the core **City and Location** parameters.

### Business rules extracted
Rules restated later in the Final sheet / CR Doc are not renumbered (landing-page defaults, callback, list-your-project, CTA gating, validation/redirect, area validation, free-listing hook, trial/pro labels, T&C checkbox, phone consent, field editability, sub-users, Show Interest lead capture). New or different here:
- **BR-CR-335** — HTL sizes editable from admin, city-wise; HTLs can be manually opened up or permitted to regular agents from the admin panel (visible via property relevancy). _(§ June 25)_
- **BR-CR-336** — Keydemand owns city-wise HTLs routed to assigned users; a master roster of these leads is maintained and accessed at admin end. _(§ June 25)_
- **BR-CR-337** — HTL cities: Bengaluru, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi; other-city leads of any size visible to agents & KD team under relevancy; agent-added demands visible to other agents regardless of size; all KD members access all HTLs. _(§ June 25)_
- **BR-CR-338** — Legal: tick box for acceptance of terms and conditions during user onboarding (web and app). _(§ June 30)_
- **BR-CR-339** — Brands may explore all asset classes and show interest but post only in their selected asset class (comment: Retail & F&B explore retail, F&B and office; pre-selected registered asset class; notify when exploring another). _(§ June 30 › Brands)_
- **BR-CR-340** — Office Tenant >5,000 sq ft demand hidden from agents and routed exclusively to KD (office only) — [Phase 2]. _(§ June 30 › Tenant)_
- **BR-CR-341** — Enterprise F&B and Retail brands explore F&B and Retail; post only their asset classes. _(§ Enterprise Brands (F&B, Retail))_
- **BR-CR-342** — CTA "Schedule a call" → "Request a call back" (opens a Form) on Landing page & Enterprise Solution Details page. _(§ PR Sheet changes)_
- **BR-CR-343** — Location field: predictive search and autofill; project search removed from this field. _(§ PR Sheet changes)_
- **BR-CR-344** — High-end leads: preset list of cities where Keydemand has a physical office, with fixed carpet area parameters for now. _(§ PR Sheet changes)_
- **BR-CR-345** — "Managed Space Occupier" Number of Seats: strictly numeric, only accepts values above 20. _(§ PR Sheet changes)_
- **BR-CR-346** — OC Status dropdown: Available, Not Available, Under Construction. _(§ PR Sheet changes)_
- **BR-CR-347** — Agent subscription page shows "Trial Package" if no active paid subscription; Pro Member shows active plan details (cities, pricing). _(§ PR Sheet changes; PR sheet tab)_
- **BR-CR-348** — Images masked/blacked out for unregistered users only if the broker opted to hide them. _(§ Client Discussions)_
- **BR-CR-349** — Mandatory field misses signalled by a vibrating notification or explicit visual indicator. _(§ Client Discussions)_
- **BR-CR-350** — Website must be fully SEO compliant (data and tags). _(§ Client Discussions)_
- **BR-CR-351** — Remove email address field from the registration form (causes Show Interest validation failures). _(§ Client Discussions — later reversed/struck in CR Doc)_
- **BR-CR-352** — High-value demand routing (simplified, hardcoded): above 5,000 sq ft to KD for Mumbai, Pune, Bangalore, Chennai, Indore, Hyderabad. _(§ Client Discussions — superseded by Tier 1 list/thresholds)_
- **BR-CR-353** — Terms of Use and Privacy Policy must satisfy GDPR and Indian DPDP Acts; implement automated "right to erase"/account deletion requests. _(§ Compliance)_
- **BR-CR-354** — Mandatory Project RERA registration numbers; appoint a Grievance Officer; determine whether agent registration numbers are legally necessary for commercial properties. _(§ Compliance)_
- **BR-CR-355** — Finalize permissions for Admin groups A, B and C. _(§ Compliance)_
- **BR-CR-356** — KD team dashboard has separate sections "My listing" / "Keydemand listing". _(§ Compliance, trailing line)_
- **BR-CR-357** — Unless otherwise specified, all fields must be Dynamic. _(§ PR sheet tab)_
- **BR-CR-358** — Platform stats: 8000+ properties, 25Mn+ sq ft inventory, 28Mn+ sq ft demands, 1.5Mn+ sq ft Exclusive Inventory, 450+ Brands (comment: waiting for client update). _(§ PR sheet tab)_
- **BR-CR-359** — Property card must match Figma; project name must not appear twice. _(§ PR sheet tab)_
- **BR-CR-360** — City update section has Select/Deselect All. _(§ PR sheet tab)_
- **BR-CR-361** — Remove "leads received" metric; keep only "enquiries received" (June 25 Daily Stand-up). _(§ PR sheet tab — later superseded by "leads" rename)_

### Open questions / ambiguities in this doc
- Demand volume restriction Phase 1 vs Phase 2 — to confirm.
- Pan-India vs city-restricted HTL visibility for KD — to decide (later decided: global access).
- Leads Received vs Contact Inquiries redundancy — to evaluate.
- Legal docs expected "by the 10th".
- Stats comment "Waiting for update from client" (open).
- Agent registration numbers legally necessary? — open.
- Admin groups A, B, C permissions — to finalize.
- Linked external doc (Keydemand User Role Permissions & Constraints) not in this group.

---
## Recent enhancements  [AUTHORITATIVE]
**Source:** Google Doc · ID `1ayBF6ywdSTdCRePAJD7dchfFGOMFSbj9l3FcWAHREso` · owner pradeepa.pv@futuristglobal.com · created/modified 2026-06-30 · sections read: intro + sections 1–7 · no comments · read coverage: 100%.

### Content
This comprehensive summary consolidates all technical requirements, business logic for the development of Keydemand V2.

#### 1. Standardized Nomenclature & User Roles
To eliminate ambiguity between the frontend and backend, the following terminology is finalized:
- **Agent:** (Formerly "Agent")
- **Office Tenant:** (Formerly "Tenant")
- **Account Handler:** The standardized term for the internal Keydemand team/backend.
- **Relationship Manager (RM):** The external-facing title for the internal staff member assigned to a brand/enterprise.
- **Developers/Mall Operators:** Specialized users for large-scale projects and mall listings.

#### 2. Exploration Logic & "Asset Lock" Rules
The platform balances open discovery with strict posting integrity through a dual-mode logic:
- **Unregistered User Access:** Property detail pages are now public including property images to unregistered users to improve SEO and user acquisition. However, a registration/login wall is triggered for specific actions: Viewing phone numbers, requesting locked images, or clicking "Contact Us."
- **Cross-Asset Exploration:** Registered users (Retail, FNB, and Office) are authorized to explore property listings across *all* asset classes (excluding Managed Spaces) to maximize lead capture potential.
- **Posting Restrictions:** Posting capabilities remain strictly locked to the user's registered asset class to ensure data quality.
    - **Office Tenants:** Authorized to post for both "Office" and "Managed Space."
    - **Managed Space Tenants:** Restricted to posting *only* "Managed Space."
- **Enterprise Brands:** Can be provisioned with multiple asset classes (e.g., both FNB and Retail) at the backend, allowing them to post demands for any assigned category.

#### 3. Lead Generation & ShowIntrest Mechanics
The registration flow is optimized to reduce friction and prevent lead loss:
- **OTP-First Capture:** A lead (Mobile Number) must be captured and sent to the backend immediately upon successful **OTP verification**. The system must not wait for the user to complete the full profile. If the user drops off after OTP, it is flagged as an "Incomplete Lead."
- **Form Optimization:**
    - **Select Role** must be the first field.
    - **Email address** is moved to an optional/non-mandatory field.
- **Compliance:** An explicit, mandatory checkbox for "Terms of Use" and "Privacy Policy" must be present in all registration flows (compliance with DPDP/GDPR).
- **Incentive Messaging:** The "One Free Listing" reward must be prominently displayed **before** registration (Pre-Wall) to encourage sign-ups.

#### 4. High-Ticket Lead (HTL) Ecosystem
HTL logic is the primary revenue protection mechanic for Tier 1 markets:
- **Threshold Definition:** Requirements exceeding specific size thresholds (e.g., >10,000 SFT in Bangalore/Hyderabad; >5,000 SFT in Mumbai) are classified as HTLs. These thresholds must be editable by the Admin on a per-city basis.
- **Tier 1 Markets:** Focus includes Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, and Delhi. Leads in Tier 2 cities (e.g., Jaipur, Indore) remain open to all agents regardless of size.
- **The "Manual Unlock" Valve:** HTLs are initially diverted to an internal Keydemand roster. If the internal team cannot service the lead within a set timeframe (e.g., 3-4 days), the Admin can manually "unlock" it, making it visible to general **Property Agents** under "Relevancy."
- **Agent-Added Demands:** Requirements posted by agents themselves bypass HTL restrictions and are visible to other agents through the relevancy matching engine.

#### 5. Dashboard & Internal Portal Architecture
To support internal sales and BD staff (who may not be tech-savvy), the portal uses a highly explicit, partitioned menu:
- **Hamburger Menu Segments:** Every category is divided into **"My"** (User-specific) and **"Overall"** (Company-wide) views:
    1. **Listings:** My Listing vs. Keydemand Listing.
    2. **Projects:** My Projects (assigned) vs. All Projects.
    3. **Enterprise Accounts:** My Assigned vs. All Enterprise Accounts.
    4. **High Ticket Leads:** My Leads (city-specific) vs. Overall Leads.
- **Broker Management:** A dedicated view for team members to monitor broker onboarding progress and inventory added by external brokers in their region.
- **Grid Toggles:** Dashboards must feature a switch to toggle between "High-Value" and "Standard" inventory views.

#### 6. UI/UX & technical Enhancements
- **Image Privacy (Bokeh Effect):** Property images are hidden/masked if those been locked by the Agent. Masked images should use a blurred layer with a "Request for Images" CTA.
- **Image Shuffling:** For demands without brand logos, the UI should shuffle between a pool of five high-quality asset-class images to maintain a dynamic look.
- **Brand Fallback:** Cards should prioritize the **Brand Logo**. If unavailable, display the **Brand Name** and the **First Initial** as an icon.
- **Google Maps Integration:** Location search must integrate with Google Maps to allow for precise, locality-based filtering (similar to 99acres).
- **Field Editability:** Few fields can still remain editable even after a response/lead has been received to allow users to refine their data. Further details are there in PR sheet.

#### 7. Administrative & Control Panel Logic
- **Strict Access Separation:** The **Admin Control Panel** is restricted to a core team (Kartik, Sudanchu, Himmanu, Nitesh) for platform management (creating UserTypes, setting HTL caps, managing permissions).
- **Portal-Only Operations:** 100% of day-to-day business operations (Sales, BD, Broker Management) must happen within the **User Portal**, not the backend Admin panel.
- **Subscription UI:** Trial plan placeholders must be replaced with dynamic status text: *"You are on a Trial Plan. X of 1 Listings used. Subscribe for unlimited access."*

### Business rules extracted
(Rules restated in the Final sheet/CR Doc — HTL tiers/unlock/agent exemption, T&C checkbox, pre-wall, image shuffling, grid toggles, portal-only operations — are not renumbered.)
- **BR-CR-362** — Terminology (30 Jun): "Account Handler" = internal team/backend term; "Relationship Manager (RM)" = external-facing title for staff assigned to a brand/enterprise; "Office Tenant" formerly "Tenant"; Developers/Mall Operators = large-scale projects and mall listings. _(§1)_
- **BR-CR-363** — Property detail pages public including images for unregistered users; login wall only for viewing phone numbers, requesting locked images, or "Contact Us". _(§2)_
- **BR-CR-364** — Retail, FNB and Office users explore all asset classes excluding Managed Spaces. _(§2 — superseded)_
- **BR-CR-365** — Enterprise brands can be provisioned with multiple asset classes (e.g., FNB and Retail) at backend and post demands for any assigned category. _(§2)_
- **BR-CR-366** — Drop-off after OTP is flagged as "Incomplete Lead". _(§3)_
- **BR-CR-367** — Registration form: "Select Role" is the first field; email optional/non-mandatory. _(§3)_
- **BR-CR-368** — HTL is the primary revenue-protection mechanic for Tier 1 markets; thresholds editable per city by Admin. _(§4)_
- **BR-CR-369** — Hamburger "My"/"Overall": Listings (My Listing vs Keydemand Listing), Projects (My Projects assigned vs All Projects), Enterprise Accounts (My Assigned vs All), High Ticket Leads (My Leads city-specific vs Overall). _(§5)_
- **BR-CR-370** — Broker Management view: monitor broker onboarding progress and inventory added by external brokers in the member's region. _(§5)_
- **BR-CR-371** — Locked images shown with blurred (Bokeh) layer and a "Request for Images" CTA. _(§6)_
- **BR-CR-372** — Brand fallback: Brand Logo first; else Brand Name and First Initial icon. _(§6)_
- **BR-CR-373** — Google Maps locality filtering similar to 99acres. _(§6)_
- **BR-CR-374** — Admin Control Panel core team (Kartik, Sudanchu, Himmanu, Nitesh) creates UserTypes, sets HTL caps, manages permissions. _(§7)_
- **BR-CR-375** — Trial status text exactly: "You are on a Trial Plan. X of 1 Listings used. Subscribe for unlimited access." _(§7)_

### Open questions / ambiguities in this doc
- "Agent: (Formerly "Agent")" is self-referential — likely intended "Property Agent (formerly Agent)".
- "Few fields can still remain editable … Further details are there in PR sheet" — field list not given here.

---
## Phase 1 - CR's and New Business Rule additions - July 9th  [HISTORY — superseded by Phase 1 - CRs and New Business - Final]
**Source:** Google Sheet · ID `1oim_dW0m5wSOUKhM9W2wgHCCLX810uKdA6VbGgKNAIk` · owner pradeepa.pv@futuristglobal.com · created 2026-07-08, modified 2026-07-12 · tab read: "Phase 1 - CR's and New Business Rule additions -  " (rows 1–197, cols A–H) · no comments · read coverage: 100%.

### Differences vs authoritative version
- Columns: Sno, Epic No, Story No, Module, Features, Business Rule Type, Business Rule, Timeline. **Sno is blank on every row**; Final adds Sno numbering plus "Feature Group" and "Consolidated Feature (cross-module)" columns. Timeline empty in both.
- July 9 contains a **duplicate "Landing Page City Tabs"** row (two identical rows); Final removed the second (Sno 58 gap).
- **Email Field Validation:** July 9 "Strict domain-level validation (such as actively blocking generic domains like '@gmail.com') to be enforced in the system." → Final "…is NOT enforced in the system."
- **Asset Class Notification:** July 9 "If a user explores a different asset class, the system will notify them that they are exploring a different asset class, but allow them to continue." → Final "If a user explores the other asset class within their allowed set (Retail <-> F&B), notify them…"
- **Discovery Logic (Brand):** July 9 "Retail & F&B users are allowed to explore Retail, F&B, and Office asset classes." → Final "Retail & F&B users can explore ONLY Retail and F&B asset classes. They CANNOT explore Office or Managed Space."
- **Brand - Exploring Properties:** July 9 "They can explore asset classes - F&B can have F&B, Retail and Office. Retail can have both F&B, Retail and office too." → Final "Retail & F&B brands (Individual AND Enterprise) can explore ONLY Retail and F&B - NOT Office or Managed Space…"
- **Brand Name Display (Office section):** Business Rule Type "Brand Name Display" → "Brand Name Display (same rule as Sno 161)".
- **Phase 2 section header:** "PHASE 2" → "PHASE 2  -  Deferred items (NOT in Phase 1 scope)".
- **No Phase 1 Chatbot:** July 9 module "WebApp + MobileApp + AdminApp", text "A live chatbot is not a mandatory feature and will not be built or integrated for the Phase 2 launch." → Final module "WebApp + MobileApp", text "…is NOT a mandatory feature and will not be built or integrated for the Phase 1 launch (deferred to a later phase)."
- **Only in Final (absent from July 9):** section "Additional CRs surfaced in analysis (Mobile App UI/Infra & Admin Control Panel)" (Sno 189–201: Card-Based Interface, Dual Navigation, Persistent Search Bar, Visible Contact on Cards, Regional Info Button, Firebase Integration, User & Listing Analytics, Bulk Upload, Listing Management, User Management CRUD, Roles & Permissions, Project & Category Management, Google Analytics) and section "Keydemand - Broker Relationship Manager (BRM)" (Sno 202–206).
- All other rows (Generic, Landing/Login, Agent, Keydemand, Brand, Office/Managed, Enterprise Brand, remaining Phase 2) are word-for-word identical to the Final sheet.
- Nothing exists only in the July 9 sheet except the duplicate row and the old values above.

---
## Rough 2- My Drafts  [NON-AUTHORITATIVE — personal draft]
**Source:** Google Doc · ID `1f1LOJkqKIrq3kgC42h9E6tPlKREqseVBiPj_eicY1ps` · owner pradeepa.pv@futuristglobal.com · created 2026-10-16, modified 2026-10-22 · read coverage: 100% — the document body is **empty** (read_file_content returned no text; Drive size 1,024 bytes). No rules extracted.

---
## Group-level notes
### Version history
- **July 9th sheet → Final sheet:** same CR register (identical structure and almost all rows). Final has a later created date (14 Jul vs 8 Jul) and modified date (3 Aug vs 12 Jul), adds columns and new sections, and changes 5 rules. Final is AUTHORITATIVE; July 9th is HISTORY.
- **CR Doc (Phase 1 - CR's and New Business Rule additions):** running log created 30 Jun, last modified 27 Sep; contains dated additions (7 Jul, 13 Jul, 14 Jul, 16 Jul, 29 Jul). Its July 29 section is a verbatim copy of the July 29 doc. The undated base content is the source for the July 9th/Final sheet rows (the sheets restate it per row).
- **June docs (Changes told…, Recent enhancements, both 30 Jun):** earliest decisions; authoritative for their date, superseded where later docs changed a rule.
- **Rough 2:** empty personal draft.
- Chronology applied for "latest dated decision wins": 25 Jun → 30 Jun → 7 Jul → 9 Jul sheet → 13/14/16 Jul → 29 Jul → Final sheet (3 Aug, 11:20 UTC) ≈ July 29 doc last edit (3 Aug, 12:11 UTC). Final sheet rows inherited from the base CR list carry the date of the sheet, but where a rule is clearly older text copied forward and a dated meeting note changed it later (e.g., July 13 Office registration), this is flagged rather than silently resolved.

### Conflicts across docs in this group
1. **Retail/F&B exploration** — 30 Jun "Changes" doc: explore all asset classes (comment: retail, F&B and office); 30 Jun "Recent enhancements": all except Managed Spaces; CR Doc + July 9 sheet: Retail, F&B, Office; **Final (3 Aug): ONLY Retail and F&B, not Office or Managed Space** → Final wins.
2. **Email domain validation** — CR Doc and July 9 sheet: enforced (block @gmail.com); **Final (3 Aug): NOT enforced** → Final wins (wording should be confirmed).
3. **Email on registration** — 30 Jun Changes: remove email field; 30 Jun Recent: email optional; CR Doc: removal struck through, email mandatory for Brands/Office Tenants and optional for Agents, labelled "Official Email ID"; Final sheet keeps BOTH "Form Cleanup: remove email completely" (Sno 44) and "Email Logic" mandatory for entities (Sno 49); Effort Summary says "remove email/profile-pic from register". Unresolved — needs decision; latest explicit rule set (CR Doc, unstruck) = mandatory for entities / optional for agents.
4. **OC Status values** — 30 Jun: Available, Not Available, Under Construction; CR Doc (added 7 Jul, open comment): 4 terms Received, Applied, Not Available, Under Construction, plus Demand "OC Required" Yes/No; **July 9 + Final (3 Aug): exactly 3 terms 'Available', 'Not available', 'Under construction'**; Effort Summary "OC 3-value". Latest dated = 3 values.
5. **Admin Control Panel roles** — CR Doc: strictly two (Super Admin, Admin); **July 9/Final: three (Super Admin, Admin, Ops User)** → Final wins. 30 Jun: Admin groups A, B, C to be finalized. Final also internally conflicts (module-level toggles Sno 199 vs deferred Sno 208).
6. **Admin login** — CR Doc: email+password, OTP to registered email on creation, change/reset password; Final: email+password, password ≥6 chars with uppercase/number/special, 15-min admin session timeout. Not contradictory except the OTP step absent from Final.
7. **RERA** — 30 Jun: mandatory project RERA; July 9/Final: mandatory, project level; CR Doc: mandatory struck → optional (edit undated; doc last modified 27 Sep). Unresolved — if the CR Doc edit is after 3 Aug, optional wins.
8. **Legal entity name** — CR Doc has both "Keydemand" and "Keyproperty"; Effort Summary (Final): "Keyproperty". Needs confirmation; Final-dated evidence = "Keyproperty".
9. **Broker Relationship Manager** — July 29 doc: "Brokers are not assigned Relationship Managers (BRMs do not exist in the system)"; **Final sheet (same day, 3 Aug) adds a BRM persona** (read-only oversight of all external subscribed brokers, permission from Admin). Direct conflict; both edited 3 Aug (July 29 doc slightly later). Needs decision.
10. **RM / Account Handler / POC terminology** — 30 Jun Recent: Account Handler internal, RM external-facing; CR Doc: remove both globally → "Point of Contact"/"POC", but also "internal backend exclusively Account Handler; front-end POC" and "RM is strictly internal"; July 29: first assigned KD member "publicly displayed as the designated RM on the brand's dashboard". Latest (July 29) uses "RM" publicly, contradicting POC rule.
11. **Office Tenant posting Managed Space** — 30 Jun docs, CR Doc base, Final: Office Tenants can post Office and Managed Space; **CR Doc July 13 (Pending Rule)**: office accounts post only office demand; Managed Space interest only alerts KD. Final row text predates/ignores this; flagged.
12. **Managed Space** — "Managed Space Tenants can post only Managed Space" vs "Managed office operators … will not log into the platform" and "Managed Space demands visible exclusively to Keydemand"; Recent enhancements excluded Managed Spaces from cross-asset exploration.
13. **High-value thresholds/cities** — 25 Jun: 8 cities incl. Coimbatore, Gurgaon, Delhi; 30 Jun client discussion: >5,000 sq ft for Mumbai, Pune, Bangalore, Chennai, **Indore**, Hyderabad; 30 Jun "Changes": preset cities with KD physical office, fixed carpet area; Recent/CR Doc: >10,000 BLR/HYD, >5,000 Mumbai, Tier 1 = 8 cities, **Indore is Tier 2 (open to all)**. Latest = Tier 1 list (Indore excluded), thresholds admin-editable per city/asset class/size.
14. **Office Tenant >5,000 sq ft hidden from agents** — 30 Jun marked [Phase 2]; later HVL engine (Phase 1) applies across Office, Retail, F&B.
15. **Leads terminology** — 30 Jun: remove "leads received", keep "enquiries received"; CR Doc: remove "leads" section, rename "contact inquiries" → "leads" (Inquiries + Image Requests); July 13: "Leads Received" dashboard with approved/rejected/pending; July 14: "Leads received" deprecated → "Leads". Latest (14 Jul) = "Leads".
16. **Lead statuses** — Final/CR Doc: Approved, Rejected, Open; July 13: approved, rejected, pending.
17. **Legacy lead data rule** — struck in CR Doc, still present in Final (Sno 35).
18. **Sponsored vs Premium projects** — 30 Jun + Final: "Sponsored Projects"; CR Doc: renamed "Premium projects". Project categories Standard/Premium/Exclusive support "Premium".
19. **Project listing entry point** — 30 Jun / CR Doc: "List your Project >>" dropdown Developer | Operator → Enquiry Form, no login; **July 29: "List a Project" with radio-button user type revealing a registration form**, entry removed from login popup → July 29 wins.
20. **Age consent** — CR Doc/Final: "No separate DOB field or checkbox is required"; Final Sno 45 "…and a tick"; 30 Jun legal: tick box for T&C; **July 29: "18 and above" checkbox verified implemented**.
21. **Other interested locations** — "at least 3 additional" (30 Jun, CR Doc, Final) vs "up to three" (July 16). Latest = up to three, same city, no radius.
22. **Demand image without brand logo** — Recent/CR Doc/Final: shuffle pool of five asset-class images; CR Doc Admin: default to selected "end-use" image; Recent: Brand Name + First Initial icon; **July 29: placeholder by asset class; independent brand with no photo → initial and name; no large images on demand detail page** → July 29 wins.
23. **Chatbot phase** — July 9 sheet said "for the Phase 2 launch" (typo); Final: not built for Phase 1.
24. **Who explores demands** — consistent: only Keydemand (CR Doc, Final, July 29); Managed Space demands KD-only.
25. **Field editability** — "modify all fields except City and Location" (30 Jun, Final) vs "Asset Class, Transaction Type, City, Location permanently locked" (CR Doc, Final) — Final contains both; lock list is the stricter, later-detailed rule.
