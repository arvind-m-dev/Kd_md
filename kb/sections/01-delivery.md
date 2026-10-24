# 01 — Delivery Plan, Tracker & Environments

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Keydemand V2 Phase 1 - Delivery Plan.xlsx | xlsx (6 tabs, 1 hidden) | 1LvPiNQFNLQu-IYuu-1VNS47Y952OaR6L | pradeepa.pv@futuristglobal.com | 2026-10-22 | AUTHORITATIVE (hidden tab "DEV - Ongoing plus CRs & New Fe" is HISTORY, superseded by tab "Ongoing plus CRs & New Features") |
| 2 | Keydemand V2 - Phase 1 Tracker | Google Sheet (3 tabs) | 1HDjVsQGcavd2uamI4rmVeCTemFJczg6eRN0RJdbyHvM | pradeepa.pv@futuristglobal.com | 2026-07-30 | HISTORY (superseded by Keydemand V2 Phase 1 - Delivery Plan.xlsx; the Delivery Plan's link register labels it "Old tracker") |
| 3 | Production_OnCall_Sheet.xlsx | xlsx (6 tabs, 1 hidden) | 1Kye-tYrvHv4dz9cTCTEdRhkImVJ_Xh_p | pradeepa.pv@futuristglobal.com | 2026-10-23 | AUTHORITATIVE |
| 4 | V2 SIT Environment Details.docx | docx | 1XuokGE1CoAUqBltFl9fhQh8MHhMJJ849 | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 5 | UAT Details | Google Doc | 1k3tlQFM1q8GMYXI7-JSzh9P2fdAhPHjBPkMVWLCY_Jc | pradeepa.pv@futuristglobal.com | 2026-08-04 | AUTHORITATIVE (content identical to rows 1-14 of the Delivery Plan "UAT Links" tab) |
| 6 | KeyDemand Daily Summary.pdf | PDF (2 pages) | 1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452 | pradeepa.pv@futuristglobal.com | 2026-06-11 | AUTHORITATIVE (design mock-up of the end-of-day summary email; linked as "Notifications Design"; all names and numbers are sample data) |
| 7 | FAQ (linked from Delivery Plan, "Phase 1- Important Links to all" row 55) | Google Doc link | 1q8mVbidN6Bp0VlofoRNtwx5Z62BcbSke | — | — | UNREADABLE (Requested entity was not found.) |

---
## Keydemand V2 Phase 1 - Delivery Plan.xlsx  [AUTHORITATIVE]
**Source:** xlsx · ID `1LvPiNQFNLQu-IYuu-1VNS47Y952OaR6L` · owner pradeepa.pv@futuristglobal.com · created 2026-07-20, modified 2026-10-22 · tabs read: Delivery Tracker; Effort Summary by App; Ongoing plus CRs & New Features; UAT Links; Phase 1- Important Links to all; DEV - Ongoing plus CRs & New Fe (hidden tab) · read coverage: 100% (all 6 sheets parsed cell by cell from the raw xlsx; the drawing parts attached to each sheet contain no images or shapes; no cell comments in the file).

Notes on transcription: "Row" = the Excel row number. "Milestone Date Cutoff" values are stored as Excel serial dates and are shown converted (46241 = 07-Aug-2026, 46262 = 28-Aug-2026, 46276 = 11-Sep-2026, 46290 = 25-Sep-2026, 46297 = 02-Oct-2026). `<br>` marks a line break inside a cell. Blank cells are kept blank (the source does not repeat Feature Group / Feature on every row; a blank means "same as the row above").

### Content

#### Tab 1 — Delivery Tracker
**Title (R1):** Delivery Plan - Keydemand V2 Phase 1

**Intro (R2):** We deliver in one design stage followed by four dependency-linked builds, then migration, testing, acceptance and launch. Each build is a working increment the next build extends - nothing is built before the piece it depends on exists. To de-risk the launch we test and release INCREMENTALLY: system-integration testing (SIT) runs from Build 1, business UAT starts from Build 2, and production releases start from Build 4 - so the 23-Oct Go-Live is a controlled cutover, not a big-bang. Team: Sathish (Backend / DB / DevOps / Migration / Security), Krishna (all Frontend), John & Patrik (QA), Business (UAT). All dates follow the Dates column above.

|  Row | # | Stage | Dates | Depends On | Features Covered | SIT | UAT | PROD | Outcome / Milestone |
|---|---|---|---|---|---|---|---|---|---|
| 5 | 1 | Requirements & Complete Platform Design | 06 Jul - 17 Jul 2026 | - | Finalise every CR requirement and produce the full design set for the whole platform - all Web, Mobile and Admin screens, the end-to-end data model and the API contracts each build implements - so the builds proceed without rework. | - | - | - | Design signed off |
| 6 | 2 | Build 1 - Foundation | 20 Jul - 07 Aug 2026 | Design | FOUNDATION (Feature Groups 1-3). Global terminology & field rules: renames to Property Agent / Point of Contact, hide-empty fields, mandatory-field validation + auto-redirect, carpet<=built-up, OC standardisation, RERA, field locks/unlocks, draft auto-save, 'contact inquiries'->Leads. Authentication & registration: phone + OTP (30s resend), capture-lead-on-OTP & resume, remove email/profile-pic from register, Official Email ID logic, Terms/Privacy + 18+ consent, single-select operating city (Popular cities / Goa / tooltips), Google-Maps locality. Landing & discovery: Bengaluru default, dynamic sponsored/exclusive city tabs, project-type toggle, unregistered property view, register-gate on View-Phone/Contact, Request-a-callback, 'List your Project' enquiry, client logos, free-listing incentive. | Starts | - | - | Foundation working in Dev |
| 7 | 3 | Build 2 - Admin Control Panel | 10 Aug - 28 Aug 2026 | Build 1 | ADMIN CONTROL PANEL (Feature Groups 12-13) - built early because it configures the platform. Super Admin / Admin / Ops roles with dynamic role creation; user-level & listing-level dashboards; add/edit/deactivate/delete for every persona (Agents, individual & enterprise Tenants, Developers, Operators, Keydemand members) with per-persona fields, permission toggles and inventory cascade; central listing & project management (Standard/Premium/Exclusive); enterprise brand records with named multi-format templates, single & bulk (Excel) upload, brand deactivate/reactivate and upgrade-to-Enterprise. It also sets subscription prices & city tiers (Group 5) and the High-Value-Lead thresholds per city/asset/size (Group 8) that the user journeys depend on. | Continues | Starts | - | Admin in Dev - platform now configurable; UAT begins |
| 8 | 4 | Build 3 - User Journeys & Subscriptions | 31 Aug - 11 Sep 2026 | Build 2 | USER JOURNEYS & SUBSCRIPTIONS (Feature Groups 4, 5, 9, 10, 11) that consume the Admin configuration. Agent journey & dashboard: cleanup, Trial/Pro status, duplicate-click guard, locked-image request flow, agent-name transparency. Subscriptions & payments: GST invoice, Razorpay native page, immediate price sync billed next cycle, manual renewal, complimentary access. Brand/Tenant/Enterprise: brand-name-on-demand, 5-contact view limit -> Enterprise Solutions, enterprise multi-user restrictions. Asset-class access & posting matrix: Retail & F&B explore Retail+F&B only, Office & Managed explore Office+Managed only, posting locked to the registered class. Managed Space: lease-only Project asset class, operators as Developers, KD-exclusive demands. | Continues | Continues | - | User journeys in Dev - UAT continues |
| 9 | 5 | Build 4 - Keydemand Team, HVL & Mobile | 14 Sep - 25 Sep 2026 | Build 3 | KEYDEMAND TEAM, HVL & MOBILE (Feature Groups 6, 7, 8, 14, 15). Keydemand Team workspace: dashboard drill-downs, My vs Overall/KD segmentation & side-menu, My/KD listings with hidden-image thumbnails, Assigned/All projects, enterprise-account breakdown + CRM-lite, direct View-Phone with viewed-by audit trail, Saved/Shortlisted. Broker Relationship Manager: read-only oversight of all external subscribed brokers and their metrics. High-Value-Lead engine: threshold classification, exclusive-to-KD hiding, Tier-1/2 routing, manual unlock to relevant agents, red-dot markers, email + WhatsApp alerts, agent-posted exemption. Notifications & Mobile: segmented notification centre, Firebase Crashlytics + push, card layout, app build/store. Compliance: grievance officer, privacy forward-clause, attribution, India data residency. | Continues | Continues | Starts | Feature-complete - first production releases begin |
| 10 | 6 | Data Migration & System Testing (SIT) | 21 Sep - 02 Oct 2026 | Build 4 | Migrate all live V1 users and their content (properties, demands, images, videos, PDFs) into V2, then run consolidated full-platform system-integration testing end-to-end across Web, Mobile and Admin - plus the migration itself - in the SIT environment. Each build was already tested incrementally (SIT from Build 1); this is the full-platform run. | Full run | Continues | Continues | Migration-validated, fully-tested build |
| 11 | 7 | User Acceptance Testing (UAT) - rolling from Build 2 | 05 Oct - 16 Oct 2026 | Build 2 onward | The Keydemand business team, supported by QA, validates each delivered increment (from Build 2 onward) against real business scenarios - user journeys, admin configuration, HVL routing, enterprise formats - and signs off module by module. | - | Rolling | - | Business UAT sign-off |
| 12 | 8 | Production Releases & Final Go-Live | 25 Sep - 23 Oct 2026 | Build 4 onward | Staged production releases of validated modules from Build 4; the final cutover on 23 Oct migrates all V1 users with 3 months complimentary Pan-India access and opens the platform to users. | - | - | Rolling -> Final | Live in Production - 23 Oct |

**Why this sequence? (dependency-driven)** (R14-R19)
- Design first - scope, screens and API contracts are locked up front, so the builds do not rework each other.
- Foundation first (Build 1) - every module needs login, the shared data model and the core platform base, so this is built before anything else.
- Admin Control Panel second (Build 2) - it CONFIGURES the platform (users, pricing & cities, HVL rules, brand formats). Without this data the user journeys cannot be built or tested end-to-end, so it must precede them, and it is the first module the business validates in UAT.
- User Journeys third (Build 3) - they consume the Admin configuration, so they follow it. Being the core flows, they deliver the primary end-user value validated in UAT.
- Keydemand Team, HVL & Mobile fourth (Build 4) - these monitor and route the user-journey data, so they need Build 3 in place. Once validated, production releases begin.

**Incremental SIT, UAT & Production - why we don't wait for the end** (R21-R25)
- SIT runs from Build 1: QA tests every build as it is produced, so defects are caught continuously - the Build-6 SIT stage is the consolidated full-platform run, not the first test.
- UAT starts at Build 2: the business validates each module (from the Admin Control Panel onward) as soon as it is ready, so gaps surface early when they are cheap to fix.
- Production releases start at Build 4: validated modules ship to production progressively, so the 23-Oct Go-Live is a controlled final cutover.
- The build dates, the data-migration window and the 23-Oct Go-Live are per the Dates column - only the test-and-release model is incremental.

#### Tab 2 — Effort Summary by App
**Title (R1):** Effort Summary by App (in weeks)

**Intro (R2):** Build effort in weeks on the existing V2 base. Owners: Sathish = ALL Backend + DB + Migration + DevOps + Security; Krishna = ALL Frontend. Web & Mobile share ONE codebase - the 'Mobile App' column is only the native-only delta. John = QA across all three surfaces + migration + UAT. Group 6A (Broker Relationship Manager) is a new User-Portal persona added within the same timeline (builds on the Keydemand broker-monitoring scope).

|  Row | Feature Group | Admin App (FE) | Web App (FE) | Mobile  <br> (native delta) | Backend / API | DB & Schema | QA | Total | Scope covered |
|---|---|---|---|---|---|---|---|---|---|
| 4 | 1. Global Terminology & Field Rules | 0.0 | 0.5 | 0.0 | 1.0 | 0.0 | 0.5 | 2.0 | Global renames (Agent -> Property Agent; Account Handler / RM -> Point of Contact); hide empty non-mandatory fields in view mode; mandatory-field validation with an inline error and auto-redirect to the missing field; carpet <= built-up area check; OC status standardised to Available / Not available / Under construction; 'My Listings' PDF export; 30-second draft auto-save; brand-logo-else-end-use image display, reference sample images and image shuffling for logo-less demands; 'yes' fields stay editable after a response; permanent locks on Asset Class / Transaction Type / City / Location (Other-locations & Possession unlockable); mandatory project-level RERA; property & demand card display rules; and the 'contact inquiries' -> 'Leads' rename (Inquiries + Image Requests = Lead). |
| 5 | 2. Auth, Registration & Login | 0.0 | 0.5 | 0.0 | 1.0 | 0.0 | 0.5 | 2.0 | Phone + OTP registration with a 30-second resend cooldown; capture the number as a lead the instant OTP succeeds and resume an abandoned sign-up straight to profile setup; remove the email field and profile-picture from the register form (profile picture optional later in My Profile); 'Official Email ID' labelling - mandatory for Brands/Tenants, optional for Agents; password complexity (>=6, upper + number + special) and 15-minute admin session timeout; single-select operating city with 'Popular cities', Goa consolidation and Mumbai-MMR / Delhi-NCR / Pune tooltips; Google-Maps locality; mandatory Terms & Privacy + 18+ consent tick with phone-sharing disclosure; and the relevancy-critical fields carried into quick registration. |
| 6 | 3. Landing Page & Discovery | 0.0 | 0.5 | 0.0 | 0.5 | 0.0 | 1.0 | 2.0 | Default city Bengaluru; unregistered users can view property detail, gated to register only on 'View Phone' / 'Contact'; dynamic sponsored & exclusive city tabs (only cities with live inventory) with nearest-city redirect + banner; Office / Retail / F&B / Managed project toggle; 'Request a callback' (number only) and 'Book a demo' -> 'Send an inquiry'; a no-login 'List your Project' Developer/Operator enquiry; client logos (Office Tenant, Managed Office); a pre-wall '1 free listing' incentive; and removal of image restrictions except owner/KD-hidden images. |
| 7 | 4. Agent Flow, Dashboard & Subscription | 0.0 | 0.5 | 0.0 | 1.0 | 0.0 | 0.5 | 2.0 | Agent dashboard cleanup - remove the redundant lead-management tab and placeholder text and show accurate plan status (Free/Trial, 'Usage 0 of 1', Subscribe-Now); single-select operating-city onboarding selector; duplicate-click & view-count guard with an 'Already requested' message; the locked-image request flow (login + number shared, owner approves to reveal images and number); the agent's name shown on every post; admin-configurable agent permissions; and no city deletion in Phase 1. |
| 8 | 5. Subscription & Pricing (cross-app) | 0.5 | 0.5 | 0.0 | 1.0 | 0.5 | 0.5 | 3.0 | GST invoices auto-issued on subscribe; Razorpay embedded on a native page; unsubscribed agents see 'Trial Plan' with the free-listing offer and paid agents 'Pro Member'; admin price changes reflect on the front end immediately but bill from the next cycle; city-tier management (Class A Metro / B Non-metro / C Rest-of-India / D Pan-India) with protected indicative cities; manual renewal by default (opt-in auto-renew); and admin-granted complimentary / zero-charge access (incl. 3-month Pan-India for migrated V1 users). |
| 9 | 6. Keydemand Team (User-Portal persona) | 0.0 | 0.5 | 0.5 | 1.0 | 1.0 | 1.0 | 4.0 | The Keydemand team's workspace inside the User Portal (backend onboarding, mobile + OTP login, permission-based access): a dashboard with clickable drill-downs and My vs Overall (KD) segmentation via a custom side-menu; My/KD listings (property thumbnails shown even when images are hidden to others, with a 'Hidden to others' overlay) with colleague listings read-only; Assigned/All projects with category and enquiry drill-downs; an enterprise-account breakdown with CRM-lite stages (New / In-Discussion / Site-Visit / Negotiation / Closed / Lost) and Approved/Rejected/Open lead statuses; direct 'View Phone' contact (no request workflow) with a timestamped 'viewed-by' audit trail; relevancy restricted to Brands & Tenants; Managed-Space demands KD-exclusive; Saved/Shortlisted; and lead/enquiry definitions. |
| 10 | 7. Broker Relationship Manager (BRM) | 0.5 | 0.5 | 0.0 | 0.5 | 0.0 | 0.5 | 2.0 | A Keydemand User-Portal persona (Broker Relationship Manager) that oversees ALL external subscribed brokers to resolve their concerns: a consolidated broker directory (subscription, city, source) plus a per-broker drill-down of properties/demands added, relevancies, leads received, contacts received/requested, missed calls and ignored image requests - strictly read-only. The capability is toggled per Keydemand user from the Admin Control Panel. |
| 11 | 8. High Value Leads (HVL) Engine | 0.5 | 0.5 | 0.0 | 1.0 | 0.5 | 0.5 | 3.0 | Per-city / asset-class / size thresholds (configured and customisable in Admin) that classify large requirements as High-Value Leads, hide them from external agents and route them exclusively to the Keydemand roster; applies across Office/Retail/F&B; Tier-1 markets restricted, Tier-2 open; day-to-day enterprise-brand requirements excluded; red-dot unopened markers; a High-Value vs Standard dashboard toggle; global KD access with city-localised alerts; a manual unlock valve that releases a lead to relevant agents via relevancy matching; email + WhatsApp notifications; and exemption for agent-posted demands. |
| 12 | 9. Brand / Tenant / Enterprise User Flows | 0.5 | 0.5 | 0.0 | 0.5 | 0.0 | 0.5 | 2.0 | The brand / company name is displayed whenever a Brand or Office Tenant posts a demand; individual brands and tenants can view up to 5 phone numbers before being prompted for Enterprise Solutions; and Keydemand users assigned to a brand cannot post or edit demands on that brand's behalf (enterprise requirements are uploaded centrally via Admin). |
| 13 | 10. Asset-Class Access & Posting | 0.5 | 0.5 | 0.0 | 0.5 | 0.0 | 0.5 | 2.0 | The per-persona explore / post matrix: the asset class is pre-selected from registration and never changes; Retail & F&B (individual & enterprise) explore Retail + F&B only; Office Tenant & Managed Space explore Office + Managed only; posting is locked to the registered asset class (a Retail brand cannot post F&B; Office Tenants post Office + Managed; Managed operators post Managed only); and a notice appears when a permitted cross-asset class is viewed. |
| 14 | 11. Managed Space as Project Asset Class | 0.5 | 0.5 | 0.0 | 0.5 | 0.0 | 0.5 | 2.0 | Managed Space introduced as an asset class nested under Projects and restricted to Lease (no Sale / Lead); managed operators onboarded offline by Keydemand and treated like Developers (no self-login); their centres classified as Projects (Standard/Premium/Exclusive) and added/assigned centrally from Admin; and Managed-Space demands kept Keydemand-exclusive. |
| 15 | 12. Admin Control Panel - Core (built Sprint 2) | 2.0 | 0.0 | 0.0 | 1.0 | 0.5 | 0.5 | 4.0 | The Keydemand-Admin back-office (4-5 core users; email + password login, 15-minute timeout): Super Admin / Admin / Ops roles with dynamic role creation; user-level & listing-level dashboards with Google Analytics (daily/weekly/monthly); add / edit / deactivate / delete for every persona - Agents, individual & enterprise Tenants, Developers, Managed Operators, Keydemand members - with per-persona fields, permission toggles and inventory cascade (deactivate hides, delete removes); central listing & project management (edit limited to Keydemand & Enterprise inventory); and Developer / Operator / Enterprise-Solution enquiry management. |
| 16 | 13. Admin - Enterprise Brand & Manage Formats | 0.5 | 0.0 | 0.0 | 0.5 | 0.5 | 0.5 | 2.0 | Enterprise brand management via Admin: reusable named multi-format templates (physical attributes fixed, only City & Location vary - e.g. Drive-thru / Food-Court / High-Street) with Brand Name as the first identifier; demand auto-fill from the selected brand format (editable) with brand-logo-else-end-use image; single & bulk (Excel) demand upload by the RM; brand deactivation that also disables the brand's active demands (reactivation restores the brand only); and upgrading an individual tenant to an Enterprise account. |
| 17 | 14. Notifications & Mobile Infrastructure | 0.5 | 0.5 | 1.0 | 0.5 | 0.0 | 0.5 | 3.0 | Web & Mobile share ONE codebase, so this is the native-only delta: Firebase Crashlytics + in-app push; a card / thumbnail mobile layout (no horizontal tables) with dual Back + Close navigation, a persistent search/filter bar, phone-number-on-card and a regional 'i' info button; plus the segmented notification centre (all-leads / tagged-projects / relevancies) and interaction-based enquiry routing, delivered via email + WhatsApp (Interakt). |
| 18 | 15. Compliance, Legal & Attribution | 0.0 | 0.5 | 0.0 | 0.5 | 0.0 | 1.0 | 2.0 | A displayed Grievance Officer contact (DPDP/GDPR); a Privacy-Policy forward-clause covering future chatbot integration (added now to avoid re-review cost); the 'Keyproperty' legal entity across Terms & Privacy; hidden-image event tracking for A/B and funnel analysis; phone-number-based acquisition attribution via a third-party SDK (Singular / Branch); and India-only data residency (Atlas India, AWS ap-south-1, MSG91 / Interakt / Razorpay - no overseas transfer). |
| 19 | Feature-group subtotal | 6.0 | 6.5 | 1.5 | 11.0 | 3.0 | 9.0 | 37.0 |  |

**Platform Foundation & QA (parallel)** (R21-R27). In the source, rows R22-R24 have only the QA and Total cells filled; the per-app columns are blank.

|  Row | Item | Admin App (FE) | Web App (FE) | Mobile (native delta) | Backend / API | DB & Schema | QA | Total | Scope covered |
|---|---|---|---|---|---|---|---|---|---|
| 22 | V1 -> V2 Data & Content Migration |  |  |  |  |  | 0.0 | 2.0 | Auto-migrate active V1 users, 3-months of complimentary access, images/videos/PDF; validate in SIT. |
| 23 | DevOps - Dev/SIT/UAT/PROD |  |  |  |  |  | 0.0 | 2.0 | Pipelines, environments, monitoring, release. |
| 24 | Security & Hardening |  |  |  |  |  | 0.0 | 1.0 | Authz on new personas (incl. BRM), admin session security, fixes. |
| 25 | Migration validation testing |  |  |  |  |  | 2.0 | 2.0 | QA validates the V1 -> V2 migration in SIT and UAT |
| 26 | Cross-app regression & UAT support |  |  |  |  |  | 1.0 | 1.0 | Regression across Web/Mobile/Admin + UAT support. |
| 27 | Platform-foundation subtotal |  |  |  |  |  | 3.0 | 8.0 |  |

#### Tab 3 — Ongoing plus CRs & New Features (Requirements Register)
**Title (R1):** Keydemand V2 - Phase 1 | Requirements Register (grouped by Feature Group)

Status dropdowns (data validation on Developer Status / SIT/QA Status): `To Do, Yet to do, In-Progress, Yet to check, Completed, Failed, Duplicate, Default` (header row and K21 use the shorter list `To Do, In-Progress, Yet to check, Completed, Failed, Duplicate`). An auto-filter is defined on A1:L69. Rows with Developer Status "Duplicate" carry the remark "Not checked as it is striked out as duplicate" (they are struck through in the source). Row 226 is a section divider "Phase 2"; rows 227-233 are the Deferred / Phase 2 items. Row 126 has a 13th (unlabelled) cell "to be done".

|  Row | S.no. | Feature Group | App Module | Feature | Business Rule | Short Description | Build Number | Milestone Date Cutoff | Dependency | Developer Status | SIT/QA Status | Remarks | (unlabelled col M) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | 1 | 1. Global Terminology & Field Rules | WebApp + MobileApp | All User Journeys general rules | Empty Fields | Any field left empty should be hidden from the UI in view mode(non mandatory fields) | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed | Kept it for testing purpose. will remove towards the end |  |
| 4 | 2 |  | WebApp + MobileApp |  | Renaming | Rename 'Agent' to 'Property Agent' and 'Tenant' to 'Office Tenant' and Managed Space Tenant globally. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 5 |  |  | WebApp + MobileApp |  |  | The Keydemand logo used in the UI must include the "CRE simplified" tagline, as this is part of the officially registered logo and standard marketing language used across all creatives. <br> | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 6 | 3 |  | WebApp + MobileApp | Property, Project and Demand Fields, Validation & Logic | Validation Logic | Trigger an explicit error for incomplete email addresses or mandatory fields. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 7 | 4 |  | WebApp + MobileApp |  | Redirection | The interface should automatically redirect the user to the precise location of any missing fields. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 8 | 5 |  | WebApp + MobileApp + AdminApp |  | PDF Download | Implement the missing functionality where we allow users to download a PDF of their own 'My Listings'. | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 9 | 6 |  | WebApp + MobileApp |  | Area Validation | Carpet Area must strictly be less than or equal to the Built-up Area. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 10 | 7 |  | WebApp + MobileApp |  | Filters & Sorting | Implement comprehensive filters (e.g., City) and sorting options (e.g., 'Most Demands,' 'Most Properties Posted,' 'Most Leads Received') on the dashboard to allow effective monitoring. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 11 | 8 |  | WebApp + MobileApp |  | Field Editability | Ensure that 'yes' fields remain editable by users even after a response has been received. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 12 | 9 |  | WebApp + MobileApp |  | Demand Posting | Expand the 'other interested location' options to allow users to input at most 3 additional localities. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 13 | 10 |  | WebApp + MobileApp |  | OC Supply Standardization | To prevent contradictions in the relevance Machine Learning (ML) models, the 'OC Status' fields across all property and project backend sheets must be unified to exactly 4 terms: Received, Applied, Not Available, Under Construction | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 14 | 11 |  | WebApp + MobileApp + AdminApp |  | Draft Auto-Save | The system must automatically save a draft of a property or demand listing every 30 seconds during the posting flow. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 15 | 12 |  | WebApp + MobileApp + AdminApp |  | Brand Image Display | If a brand logo/image is uploaded in the backend, it must display as the demand image. | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 16 | 13 |  | WebApp + MobileApp |  | Reference Images | Show sample reference images during the image upload step so users understand what kind of photos to upload. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 17 |  |  | WebApp + MobileApp |  | Image permissions | For properties that a user uploads but marks as "hidden," the UI must not rely solely on an eye icon. Because the photo area is small, an opacity change (or similar visual treatment) must be used so the user can still read the property details. <br> | Build 1 |  |  | Completed | Completed |  |  |
| 18 | 14 |  | WebApp + MobileApp |  | User Permissions | Grant users the ability to modify all fields except for the core City and Location parameters.- repeated as 19 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 19 | 15 |  | WebApp + MobileApp |  | Image Shuffling | For enterprise demands  the UI should should use end use images to maintain a dynamic look. | Build 1  <br> Build 4 | 07-Aug-2026 |  | In-Progress | In-Progress | Needs discussion. and immediately implement. |  |
| 20 | 16 |  | WebApp + MobileApp |  | Locked Fields | Ensure Asset Class, Transaction Type, City, and Location remain permanently locked. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 21 | 17 |  | WebApp + MobileApp |  | Unlocked Fields | Unlock 'Other interested locations' and 'Possession needed' fields so they can be edited after initial submission | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 22 | 18 |  | WebApp + MobileApp |  | Property Cards Display | Listing Title: Display the Property Name, if available. If absent, use the descriptive format: [Store Type] [Asset Class] Property for [Transaction Type]. Posted By: Display the name of the specific Agent. If posted by the Keydemand team, display 'Keydemand'. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 23 | 19 |  | WebApp + MobileApp |  | Demand Cards Display | Naming Convention for Demand: Office/Retail/F&B/Managed Space Demand <br> Posted by: Display the specific Brand, Tenant, or Agent name. If the specific brand or tenant name is unavailable, use the appropriate category label: Retail Tenant/F&B Tenant /Office Tenant/Managed Space Tenant | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 24 | 20 |  | WebApp + MobileApp |  | RERA Numbers | Add an optional field to capture RERA numbers to the project level.- Before it was this - Add a mandatory field to capture RERA numbers, restricted strictly to the project level. | Build 1  <br> Build 2 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 25 | 21 |  | WebApp + MobileApp | Leads Update | Leads Renaming | Rename the existing 'contact inquiries' section to 'leads' to streamline the interface.Inquiries + Image Requests = Lead). | Build 1  <br> Build 3 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 26 | 22 |  | WebApp + MobileApp |  | Legacy Data | Recognise that any lead counts currently visible are legacy data, as the system lacks an active mechanism to increment them.- NOT CLEAR. CAN BE REMOVED | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 27 | 23 |  | WebApp + MobileApp + AdminApp | Admin-RM Assignment | Nomenclature | RM' is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title. | Build 1  <br> Build 3 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 28 | 24 |  | WebApp + MobileApp | Terminology | Terminology | Remove existing terminology for 'Account Handler' and 'RM' (Relationship Manager) globally; ensure all system labels are replaced with 'Point of Contact' or 'POC'. | Build 1  <br> Build 3 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 29 | 25 | 2. Auth, Registration & Login | WebApp + MobileApp + AdminApp | Admin Panel(Generic) | Password Complexity | Passwords must contain at least 6 characters, including one uppercase letter, one number, and one special character. | Build 1  <br> Build 2 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 30 | 26 |  | WebApp + MobileApp + AdminApp | Login and Registration Flows | OTP Wait Timer | The system must strictly enforce a 30-second cooldown period before a user can request an OTP resend. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 31 | 27 |  | WebApp + MobileApp |  | Compliance & Verification | Age verification (18+) is managed via the standard Terms & Conditions agreement. No separate DOB field or checkbox is required in the registration flow. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 32 | 28 |  | WebApp + MobileApp + AdminApp |  | Abandoned Session | If a user successfully verifies their mobile number via OTP but abandons the registration process before completing their profile, the backend must instantly capture and log that mobile number as an actionable lead. | Build 1  <br> Build 2 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 33 | 29 |  | WebApp + MobileApp + AdminApp |  | Resuming Registration | If a user who previously abandoned their registration returns and enters their verified mobile number, the system must bypass the initial verification steps and direct them straight to the profile setup page. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 34 | 30 |  | WebApp + MobileApp |  | Form Cleanup | Remove the email address field from the user registration form completely. WRONG plus repeat as 35 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 35 | 31 |  | WebApp + MobileApp |  | Age Verification Verbiage | The registration screen must explicitly enforce 18+ consent using this exact required phrase: 'by continuing you confirm you are 18 years and above'. and a tick - duplicate as 27 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 36 | 32 |  | WebApp + MobileApp | Profile Data Field Constraints | Profile Picture Uploads | The profile picture upload feature must be completely removed from the initial registration form to prevent user drop-off and distraction. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 37 | 33 |  | WebApp + MobileApp |  | Email Field Labeling | The email input field across forms must be universally explicitly labeled as 'Official Email ID'. - other than agent flow and email is mandatory.  repeat as 35 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 38 | 34 |  | WebApp + MobileApp + AdminApp |  | Email Field Validation | Strict domain-level validation (such as actively blocking generic domains like '@gmail.com') is to be enforced in the system. | Build 1 Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 39 | 35 |  | WebApp + MobileApp |  | Email Logic | Email addresses are strictly mandatory for all entity-level profiles, which includes Brands and Office Tenants. Email addresses are optional for Agent profiles. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 40 | 36 |  | WebApp + MobileApp + AdminApp | Landing page UI | Immediate Lead Capture | Update the 'Show Interest' API logic to capture the phone number as a lead the exact moment OTP verification is successful. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 41 | 37 |  | WebApp + MobileApp | Location & City Mapping | Single-Select Restraint | The 'Operating City' (or base city) selector must be a single-select dropdown, replacing any multi-select functionality. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 42 | 38 |  | WebApp + MobileApp |  | City Categorization | The dropdown category previously labeled 'Other cities' must be explicitly renamed to 'Popular cities'. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 43 | 39 |  | WebApp + MobileApp |  | Geographic Groupings | Sub-locations and micro-markets in Goa must be consolidated under a single 'Goa' parent category. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 44 | 40 |  | WebApp + MobileApp + AdminApp |  | Google Maps Integration | Integrate Google Maps into the search/typing functionality for accurate locality selection. | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 45 | 41 |  | WebApp + MobileApp |  | Regional Tooltips | For macro-regions like Mumbai/MMR, Delhi NCR, the user interface must display exactly what sub-regions are included. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 46 | 42 |  | WebApp + MobileApp | Compliance & Legal | Terms & Policies | Include an explicit, mandatory checkbox for 'Terms of Use' and 'Privacy Policy' in all registration flows to ensure compliance with DPDP/GDPR. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 47 | 43 |  | WebApp + MobileApp |  | Phone Number Disclosure | Include explicit consent terms regarding phone number sharing during registration to ensure users are informed that their number is shared upon request. Are terms condition specify clause for consent? Also check remarks column | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 48 | 44 |  | WebApp + MobileApp | Data Collection & Field Logic | Relevancy Matching | Ensure that all fields critical for backend relevancy matching are permanently included in the initial quick registration form. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 49 | 45 |  | WebApp + MobileApp | Abandoned Registration Flow | Abandoned Registration | If a brand/user starts the registration journey, verifies their mobile number via OTP, but abandons the page before completing their profile, their verified number must be immediately captured by the system as an actionable 'lead'. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 50 | 46 |  | WebApp + MobileApp |  | Resuming Journey | If the dropped-off user returns and enters their number again, the system must recognize them and prompt a 'resume registration' flow.  - duplicate as 29 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 51 | 47 |  | WebApp + MobileApp + AdminApp |  | Internal Action | The central team can use these incomplete captured leads for outbound cold calling to manually assist the user in account creation. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 52 | 48 | 3. Landing Page & Discovery | WebApp + MobileApp | CTA | CTA Restrictions | Ensure unregistered users are prompted to register only when clicking actionable elements like 'View Phone Number', image requests or 'Contact Us'. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 53 | 49 |  | WebApp + MobileApp |  | Request a Callback | Add a 'Request a callback' button alongside the 'Book a demo' option in About Keydemand video section. To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 54 | 50 |  | WebApp + MobileApp |  | Book a Demo | Change 'Book a demo' text to 'Send an inquiry' in the About section. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 55 | 51 |  | WebApp + MobileApp | Landing page UI | Promotional Hook | Feature a '1 free listing' pop up on the Agent Home page (Navbar or first fold) for new users to incentivise posting. | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 56 | 52 |  | WebApp + MobileApp |  | Property Detail Access | Implement functionality allowing unregistered users to view property details by default. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 57 | 53 |  | WebApp + MobileApp |  | Image Restrictions | Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 58 | 54 |  | WebApp + MobileApp + AdminApp |  | Default City | Set the default city to Bengaluru (instead of Mumbai) when a user visits the platform for the first time. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 59 | 55 |  | WebApp + MobileApp |  | Incentive Messaging | Design and implement a pre-wall popup or graphic that communicates the 'free listing' reward to users before they begin the registration flow. | Phase 2 | 07-Aug-2026 |  | To Do | To Do | Not doing it now we will discuss |  |
| 60 | 56 |  | WebApp + MobileApp + AdminApp |  | Landing Page City Tabs | Remove Cities Tabs from Exclusive Projects | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 61 | 57 |  | WebApp + MobileApp |  | Client Logos | Add the names and logos for 'Office Tenant' and 'Managed Office Spaces' to the client section on the landing page. | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 62 | 58 |  | WebApp + MobileApp |  | Navbar Inquiry Button | Add a "List your Project >>" button on the Navbar. Clicking it should reveal a dropdown with Developer \| Operator options. Selecting either should open an Enquiry Form. Remove this entry point from the login/sign-up page.  <br> | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 63 | 59 |  | WebApp + MobileApp |  | Cities Tabs | Remove the 'Cities' tabs entirely from this section of the Exclusive Projects section. -duplicate as 56 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 64 | 60 |  | WebApp + MobileApp |  | Dynamic City Tabs | Add dynamic city tabs on Premium projects where projects are listed. Eg if project in nashik then to show nashik as the city tab. Rename Sponsored to Premium projects | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 65 |  |  | WebApp + MobileApp |  | Banner Text | The changes to be made on the banner are - 8000+ properties, 25Mn+ sft of inventory, 28Mn+ sft of demands, 1.5Mn+ sft of Exclusive Inventory, 450+ Brands on landing page. About us - they will give us the copy- 29th July | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 66 | 61 |  | WebApp + MobileApp |  | City Defaults | If a user searches for a location without active properties, the system should default to the same city with available inventory, accompanied by a messaging banner. | Build 1  <br> Build 4 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 67 | 62 |  | WebApp + MobileApp |  | Sponsored Projects | The 'Premium Projects' section must feature dynamic city tabs that only display the specific cities where current premium projects are active. Also rename Sponsored to Premium projects  - duplicate as 60 | Build 1 | 07-Aug-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 68 | 63 |  | WebApp + MobileApp + AdminApp |  | Project Filter | Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects. Also add cities. TBD-Already implemented in UI | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 69 |  |  | WebApp + MobileApp + AdminApp |  |  | Pune city - combinations are added. Check City (Metro & Non-metro) tab | Build 1 | 07-Aug-2026 |  | Completed | Completed |  |  |
| 71 | 174 | 12. Admin Control Panel - Core (built Sprint 2) | AdminApp | Admin Panel(Generic) | Control Panel Access | The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core users. | Build 2  <br> Build 4 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 72 | 175 |  | AdminApp |  | V2 Phase 1 Roles | For the initial launch, enforce strictly three primary administrative roles in the Control Panel: 'Super Admin',  'Admin' and 'Ops User'. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 73 | 176 |  | AdminApp |  | Super Admin Privileges | The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 74 | 177 |  | AdminApp |  | Dynamic Role Creation | The system must include functionality allowing the core admin team to dynamically create new internal users and assign their access permissions across the platform. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 75 | 178 |  | WebApp + MobileApp + AdminApp |  | Admin Login Protocol | Admin account creation requires a name, email ID, and permissions set. Login operates via email and password. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 76 | 179 |  | AdminApp |  | Session Timeout | Admin sessions must automatically time out after 15 minutes of inactivity for security purposes. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 77 | 180 |  | WebApp + MobileApp + AdminApp | User Management and Restrictions | Sub-user Management | Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 78 | 181 |  | AdminApp | Admin Dashboard | User & Listing Analytics | Dashboard shows user-level and listing-level aggregates (active agents/tenants/developers/KD; properties/demands/projects by asset class) with clickable drill-downs. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 79 | 182 |  | AdminApp | Admin - Listing Mgmt | Listing Management | Central listing management to view/edit/activate/deactivate/delete inventory; edit enabled only for Keydemand & Enterprise inventory. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 80 | 183 |  | AdminApp | Admin - User Mgmt | User Management CRUD | Add/edit/deactivate/delete every user persona (Agents, Individual & Enterprise Tenants, Developers, Managed Operators, KD members) with per-persona fields; deactivate/delete cascades to their inventory. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 81 | 184 |  | AdminApp | Admin - Control Panel Users | Roles & Permissions | Add control-panel users; assign Super Admin / Admin / Ops roles and toggle module-level permissions (dynamic role creation). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 82 | 185 |  | AdminApp | Admin Dashboard | Google Analytics | Show Google Analytics active-user data (Daily / Weekly / Monthly) on the Admin dashboard and user dashboard. | Phase 2 | 28-Aug-2026 |  | To Do | To Do | Google analytics added to the App. But in admin will be done in Phase 2 |  |
| 83 | 186 |  | AdminApp | Dashboard | User-Level Metrics | The Admin dashboard shows user-level counts: Active Agents (Subscribed/Registered), Properties & Demands uploaded by asset class, Active Individual & Enterprise Tenants by asset class, Developers, Managed Operators, Keydemand members, and Google-Analytics active users (Daily/Weekly/Monthly). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 84 | 187 |  | AdminApp |  | Listing-Level Metrics | The Admin dashboard shows listing-level counts: Total Active Properties, Demands and Projects by asset class, with relevancy-across-all, leads, and per-project enquiries received. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 85 | 188 |  | AdminApp | User Management | Developer & Operator Onboarding | Adding a Developer or Managed-Space Operator captures name, mobile, contact person, cities (multi-select) and asset class (multi-select); their projects are added centrally and assigned a Category (Standard/Premium/Exclusive). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 86 | 189 |  | AdminApp |  | Keydemand Member Permissions | Adding a Keydemand member captures name, mobile, email, designation, home city and assigned cities, plus toggleable front-end permissions - Dashboard, Explore Property/Demand, Post Property/Demand, List of Brokers, My/KD Listings, Assigned/KD Brands & Tenants, Tagged/All Projects, High Value Leads, Notifications & Enquiries (Dashboard + Explore Property are default and non-removable). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 87 | 190 |  | AdminApp | Enquiries | Enquiry Management | Admin manages inbound enquiries - Developer enquiries, Managed-Space-Operator enquiries and Enterprise-Solution enquiries - each with user metadata (type, name, mobile, email, timestamp). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 88 | 191 | 13. Admin - Enterprise Brand & Manage Formats | WebApp + MobileApp | Listing Management | Bulk Upload | Existing enterprise brands rarely upload their own requirements manually on the platform. They typically share bulk requirements via Excel with their RM, who uploads them from the Keydemand Admin Control Panel. | Build 2  <br> Build 4 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 89 | 192 |  | WebApp + MobileApp | Format | Format/Template Logic | A 'Format' acts as a template for a brand where the physical attributes remain constant, and only the City and Location act as variables. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 90 | 193 |  | WebApp + MobileApp |  | Format Naming | Formats must not be named generically. They must be explicitly named according to the brand's specific model. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 91 | 194 |  | WebApp + MobileApp |  | Format - Creation Hierarchy | When adding a new format in the control panel, the very first mandatory identifier field must be the 'Brand Name'. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 92 | 195 |  | WebApp + MobileApp + AdminApp | Admin Panel-Enterprise | Demand Auto-Fill | When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 93 | 196 |  | WebApp + MobileApp + AdminApp |  | Brand Deactivation | Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 94 | 197 |  | WebApp + MobileApp + AdminApp |  | Brand Reactivation | If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, not its previously active demands. | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 95 | 198 |  | AdminApp | Admin - Bulk Upload | Bulk Upload | Support bulk upload (Excel) of properties, demands, projects and enterprise brand formats from the Control Panel. | Build 2  <br> Build 4 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 96 | 199 |  | AdminApp | Enterprise | Upgrade to Enterprise | Admin can switch an individual Retail/F&B or Office/Managed tenant into an Enterprise account (multiple sub-users and reusable brand formats). | Build 2 | 28-Aug-2026 |  | Completed | Completed |  |  |
| 98 | 64 | 4. Agent Flow, Dashboard & Subscription | WebApp + MobileApp | Dashboard | Dashboard Cleanup | Remove the redundant 'lead management' section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 99 | 65 |  | WebApp + MobileApp |  | Dashboard Subscription Text | Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., 'Free Plan,' 'Trial Plan,' 'Usage 0 of 1'). | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 100 | 66 |  | WebApp + MobileApp | Agent Onboarding | Agent Onboarding | On the Profile page, change the 'Operating City' field to a single-select dropdown using a visual selection layout similar to the landing page city selector. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 101 | 67 |  | AdminApp |  | Onboarding Fields | When an Admin adds an agent, they must input the Name, Mobile Number, Email id, Asset Class, Transaction Type, My City, Company Name, Designation, Experience, WhatsApp - On/Off, Profile Picture | Build 2 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 102 | 68 |  | WebApp + MobileApp | Property and Listing Management | Duplicate Click Prevention | Prevent multiple clicks by the same user on a single property from incrementing the view count. Display an 'Already requested' message. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 103 | 69 |  | WebApp + MobileApp |  | Image Requests | When a user requests locked images, they must be logged in. This action shares their phone number with the listing owner. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 104 | 70 |  | WebApp + MobileApp |  | Transparency | The agent's name must be displayed whenever they post a property or demand. (Posted By) | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 105 | 71 |  | WebApp + MobileApp + AdminApp |  | Configurable Permissions | Admins can selectively toggle a keydemand team's ability to explore demands, post properties/demands, access broker management, view Key Demand listings, and view assigned enterprise brands. | Build 3  <br> Build 4 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 106 | 72 |  | WebApp + MobileApp + AdminApp |  | No City Deletion | The ability to 'Delete' a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 107 |  |  | WebApp + MobileApp |  | Detailed invoice reference | https://propvantageproptech-my.sharepoint.com/:i:/g/personal/himanshu_keydemand_in/IQCdv3TM1wvCQaoKJpxeqDVGAYNkTp1DCjnz0AYadc9tUko?e=r8L0bk <br> https://acrobat.adobe.com/id/urn:aaid:sc:AP:64a69ad3-99e7-4c9c-896b-b71da9128a4f | Build 3  <br> Build 4 | 11-Sep-2026 |  | Completed | Completed | https://teams.cloud.microsoft/l/message/48:notes/1785822068946?context=%7B%22contextType%22%3A%22chat%22%2C%22oid%22%3A%228%3Aorgid%3A57197ce3-0a68-484a-a170-0f24906143dc%22%7D        User adding GST information, company name. Also able to change it during the next payment as well. Check Claude payment how it allows to change the name on the invoice |  |
| 108 | 155 | 9. Brand / Tenant / Enterprise User Flows | WebApp + MobileApp | Listing Management | Brand Name Display | For Brands and Office Tenants- The company/brand name must be displayed when they post a demand. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 109 | 156 |  | WebApp + MobileApp | Usage Limits | Limits | Both brands and tenants can view up to 5 phone numbers before being prompted for enterprise solutions. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 110 | 157 |  | WebApp + MobileApp | Brand Display | Brand Name Display (same rule as Sno 161) | For Brands and Office Tenants, the company/brand name must be displayed when they post a demand. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 111 | 158 |  | WebApp + MobileApp | User Management and Restrictions | Enterprise Restrictions | Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. | Build 3  <br> Build 4 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 112 | 73 | 5. Subscription & Pricing (cross-app) | WebApp + MobileApp + AdminApp | Admin Panel(Generic) | Complimentary Access | At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users. | Build 3 | 11-Sep-2026 |  | To Do | To Do | Business has access to the dashboard. THey will assign to people if needed |  |
| 113 | 74 |  | WebApp + MobileApp + AdminApp | Subscription - Agent | Subscription Billing | Automatically provide GST invoices to users after they subscribe. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 114 | 75 |  | WebApp + MobileApp |  | Subscription/Payment Flow | Implement the Razorpay component embedded into a dedicated native page (instead of a direct API popup). | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 115 | 76 |  | WebApp + MobileApp |  | Subscription Status | Unsubscribed agents must see a 'Trial Plan' label with the free listing offer. Paid users should be tagged as 'Pro Member'. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 116 | 77 |  | AdminApp |  | Complimentary Access | Admins have the capability to assign zero-charge subscriptions to agents from the backend. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 117 | 78 |  | WebApp + MobileApp + AdminApp |  | Pricing Updates | Price changes made by Admins via the Control Panel must reflect on the front end immediately. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 118 | 79 |  | WebApp + MobileApp + AdminApp |  | Tier Management | Admins can edit subscription prices and add new cities to specific categorizations. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 119 | 80 |  | WebApp + MobileApp + AdminApp |  | Auto-Renewal | Subscriptions should default to manual renewal unless the user explicitly opts into auto-renewal during checkout. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 120 | 81 |  | WebApp + MobileApp + AdminApp |  | Billing Cycle Impact | For active users, updated subscription prices will only take effect and bill starting from their next billing cycle. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 121 | 82 |  | WebApp + MobileApp + AdminApp |  | Indicative Cities Protection | Existing indicative cities pre-populated within the tiers must not be removed from their respective categories. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 122 | 159 | 10. Asset-Class Access & Posting | WebApp + MobileApp | Listing Management | Asset Class Selection | The asset class is pre-selected based on the user's registration. | Build 3 | 11-Sep-2026 |  | Completed | Completed | It is not necessary, as agent has the option to select and brands are pre selected |  |
| 123 | 160 |  | WebApp + MobileApp |  | Asset Class Notification | If a user explores the other asset class within their allowed set (Retail <-> F&B, office), notify them that they are viewing a different asset class but allow them to continue. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 124 | 161 |  | WebApp + MobileApp |  | Discovery Logic | While registering the user can post and say that I am interested in Managed offices and ticks the button. The outcome to this triggers a notification to Keydemand team with this user info as lead  <br>  <br> Journey 2  <br>  <br> Upon registration the user still has a demand to post for office. The user cannot post Managed offices demand  neither tick the box to inform that it's a managed offices requirement.  <br>  <br> Hence we will give him an option to post both offices and managed offices too | Build 3 | 11-Sep-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 125 | 162 |  | WebApp + MobileApp |  | Registered Asset Class | Regardless of search or activity, the user's pre-selected asset class remains their registered one. | Build 3 | 11-Sep-2026 |  | Completed | Completed | It is not necessary, as agent has the option to select and brands are pre selected |  |
| 126 | 163 |  | WebApp + MobileApp |  | Posting Restrictions | A Retail brand cannot post F&B demands, and vice versa. They can see properties outside their asset class, but they cannot post them. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  | to be done |
| 127 | 164 |  | WebApp + MobileApp + AdminApp |  | Office and Managed Office Tenant- Posting Permissions | Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space. By default, an "office" account can post only office spaces but can post managed space office too. However, when the "manage space" checkbox is ticked during registration of office tenant— Keydemand team will receive an alert about the user interested in Managed Office Space if someone opts to click during office registration. The Office demand will be posted from their account. The user can then be able to post both office demand & managed space demand. <br> | Build 3 | 11-Sep-2026 |  | Completed | Completed | While registering the user can post and say that I am interested in Managed offices and ticks the button. The outcome to this triggers a notification to Keydemand team with this user info as lead  <br> Journey 2  <br> Upon registration the user still has a demand to post for office. The user cannot post Managed offices demand  only when the box is ticked, can the person post both office and managed space.  <br> Hence we will give him an option to post both offices and managed offices too |  |
| 128 | 165 |  | WebApp + MobileApp + AdminApp |  | Discovery Logic | Office Tenants and Managed Space Tenants can explore both Managed Space and Office properties. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 129 | 166 |  | WebApp + MobileApp |  | Brand - Exploring Properties | Retail & F&B brands (Individual AND Enterprise) can explore Retail, F&B, office- NOT Managed Space. F&B explores F&B + Retail, office | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 130 | 167 |  | WebApp + MobileApp |  | Tenant - Exploring Properties | Office can explore Office and Managed Space and Managed Space can explore Office and Managed Space. -repeat of 165 | Build 3 | 11-Sep-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 131 | 168 |  | WebApp + MobileApp + AdminApp |  | Brand - Posting Demands | They can post only on their Asset Classes. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 132 | 169 |  | WebApp + MobileApp + AdminApp |  | Tenant - Posting Permissions | Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space - repeat of 164 | Build 3 | 11-Sep-2026 |  | Duplicate | Duplicate | Not checked as it is striked out as duplicate |  |
| 133 | 170 | 11. Managed Space as Project Asset Class | WebApp + MobileApp + AdminApp | Managed Office Operators | Managed Office Operators | Managed office operators will be treated identically to 'Developers' on the Keydemand platform. They will not log into the platform directly; Keydemand teams will collect details offline and manually upload them. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 134 | 171 |  | WebApp + MobileApp + AdminApp | Project Classification | Project Classification | Inventory provided by managed operators (centers/hubs) will be classified as 'Projects' rather than standard property inventory. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 135 | 172 |  | WebApp + MobileApp + AdminApp | High-Value Routing | High-Value Routing | Introduce 'Managed Space' as a new asset class entirely nested under the 'Projects' structure rather than standard property inventory. Restrict the transaction options for Managed Space projects strictly to 'Lease'. | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 136 | 173 |  | AdminApp | Admin - Projects | Project & Category Management | Add Developer & Managed-Space projects, assign KD members and set Category (Standard / Premium / Exclusive). | Build 3 | 11-Sep-2026 |  | Completed | Completed |  |  |
| 138 | 83 | 6. Keydemand Team (User-Portal persona) | WebApp + MobileApp + AdminApp | Login Flow | Onboarding & Authentication | Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 139 | 84 |  | WebApp + MobileApp + AdminApp | Profile Management | Role-Based Access | Account creation is strictly permission-based; specific privileges are managed via the admin portal. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 140 | 85 |  | WebApp + MobileApp + AdminApp |  | Profile Management | The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 141 | 86 |  | WebApp + MobileApp | KD Dashboard | Dashboard | Apply the color hues, hover effects, and overall visual accents from the existing Agent mobile app to the Keydemand web dashboard to ensure uniformity. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 142 | 87 |  | WebApp + MobileApp + AdminApp |  | Team Inventory Capabilities | Keydemand members can view the inventory of other team members within their 'Listings' dashboard, but they are strictly restricted to editing only their own self-listings. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 143 | 88 |  | WebApp + MobileApp |  | Backup Coordination | If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 144 | 89 |  | WebApp + MobileApp + AdminApp |  | Immediate Dashboard Redirect | Keydemand users must be redirected straight to their Dashboard immediately upon logging in. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 145 | 90 |  | WebApp + MobileApp |  | Dashboard Routing Logic | Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 146 | 91 |  | WebApp + MobileApp + AdminApp |  | Interactive Drill-Downs | All aggregate metrics on the Dashboard must be clickable, leading to a granular, filtered list view of the items being counted. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 147 | 92 |  | WebApp + MobileApp |  | Filters & Sorting | The dashboard must include comprehensive filtering and sorting options. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 148 | 93 |  | WebApp + MobileApp + AdminApp | User Dropdown Menu | Hamburger Menu | Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 149 | 94 |  | WebApp + MobileApp |  |  | Implement sticky headers for filters/sorts and a blur effect for side navigation when users scroll through project listings. Add a "Go to Top" button for quick navigation on long listing pages. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 150 | 95 |  | WebApp + MobileApp |  | Custom Side-Menu | A custom side-menu for internal users must bypass standard filters and segment views into 'My' vs. 'Overall'. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 151 | 96 |  | WebApp + MobileApp + AdminApp | Admin-RM Assignment | Account-Level Assignment | An RM is assigned at the overarching entity/account level for a specific city. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 152 | 97 |  | WebApp + MobileApp + AdminApp |  | Cross-Collaboration | While leads are assigned to specific RMs, other team members can view these leads under the 'Others' or 'All' tabs. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 153 | 98 |  | WebApp + MobileApp | Visibility & Security | Posted By Transparency | To external audiences, internal demands/properties display as 'Keydemand.' However, internally, the team will see the specific name of the uploading team member. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 154 | 99 |  | WebApp + MobileApp |  | Exclusive Indicators | If a demand is managed exclusively by Keydemand, the 'Self-View' and explore demand screens must explicitly indicate 'Keydemand Team'. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 155 | 100 |  | WebApp + MobileApp + AdminApp |  | Hidden Image Protocols | If a listing owner selects 'Do not show images', external users cannot view them. However, Keydemand teams can always see these images. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 156 | 101 |  | WebApp + MobileApp |  | Thumbnail Rule | The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 157 | 102 |  | WebApp + MobileApp |  | Image Request CTA | To prevent sourcing conflicts, the 'View Image Request' CTA button must be completely removed for Keydemand users when they view external agent properties. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 158 | 103 |  | WebApp + MobileApp |  | Relevancy Matching Scope | Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands. | Build 4 | 25-Sep-2026 |  | Completed | In-Progress |  |  |
| 159 | 104 |  | WebApp + MobileApp |  | Demand Exploration | The Keydemand team is the only party authorized to explore demands. Specifically, 'Managed Space' demands are visible exclusively to Keydemand. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 160 | 105 |  | WebApp + MobileApp + AdminApp | Permissions and Sizes | My Listings CRUD | Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 161 | 106 |  | WebApp + MobileApp + AdminApp |  | Colleague Data | Properties and demands posted by other Key Demand team members must be strictly 'Read-Only' for colleagues. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 162 | 107 |  | WebApp + MobileApp + AdminApp |  | Default Permissions | Dashboard' access and 'Explore Property' access must be set as default, non-removable permissions for all new Key Demand users. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 163 | 108 |  | WebApp + MobileApp + AdminApp |  | Editing Limits | Editing capabilities within the Listing Management Control Panel should only be enabled for 'Keydemand' and 'Enterprise' inventory. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 164 | 109 |  | WebApp + MobileApp | Enterprise Accounts-KD | Dashboard Breakdown | The dashboard must calculate the total aggregate of enterprise users and segment them into: Assigned to Me, Assigned to Others, Sub-Category Itemization. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 165 | 110 |  | WebApp + MobileApp |  | Posting Restrictions | Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 166 | 111 |  | WebApp + MobileApp + AdminApp |  | CRM Pipeline | The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. | Phase 2 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 167 | 112 |  | WebApp + MobileApp |  | Lead Statusing | Leads for Enterprise Brand Clients are strictly categorized as Approved, Rejected, or Open. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 168 | 113 |  | WebApp + MobileApp |  | Alerting & Highlights | New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 169 | 114 |  | WebApp + MobileApp | CTA Tracking | Metric Definition | The 'User Contacted' metric must increment exclusively when the 'View Phone Number' button is clicked. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 170 | 115 |  | WebApp + MobileApp |  | Direct Contact CTAs | The Keydemand team does not need to use 'Request Phone Number' workflows for relevant demands; they are provided with an explicit 'View Phone Number' CTA. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 171 | 116 |  | WebApp + MobileApp |  | Outbound Contact Logs | Properties Contacted' logs for Enterprise clients must capture the Property ID, and the exact date of contact for audit purposes. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 172 | 117 |  | WebApp + MobileApp |  | Lead Access Audit Trail | Clicking the 'View Requirement' CTA unlocks the lead's mobile number and automatically updates the 'Viewed' status with a timestamp. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 173 | 118 |  | WebApp + MobileApp |  | Accountability Tracking | A 'Viewed by' column must maintain a timestamped log of exactly which Keydemand team member accessed a lead. | Build 4 | 25-Sep-2026 |  | To Do | To Do | It is not critical. |  |
| 174 | 119 |  | WebApp + MobileApp + AdminApp | Broker Management | Project Addition | Projects can only be added strictly via the backend control panel by the Admin team. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 175 | 120 |  | WebApp + MobileApp |  | Project Categorization | Projects must be sorted by 'Category' (Standard, Premium, Exclusive) within the tables. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 176 | 121 |  | WebApp + MobileApp + AdminApp |  | Exclusive Project | The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated 'Exclusive' projects. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 177 | 122 |  | WebApp + MobileApp + AdminApp |  | Enquiry Granularity | All project lists must support a drill-down for 'Enquiries Received,' capturing user metadata. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 178 | 123 |  | WebApp + MobileApp | Hamburger Menu | Side-Menu Structure | The Keydemand side-menu lists Dashboard, My Profile, Listings (My/KD), Projects (Assigned/All), Brands & Tenants (Assigned/All), High Value Leads (Assigned/All), Notifications, Enquiries, Saved/Shortlisted, List of Brokers and Sign out. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 179 | 124 |  | WebApp + MobileApp | My Profile | Profile & Permissions | My Profile shows the user's info (name, number, email, photo) and the roles & permissions assigned for that user type. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 180 | 125 |  | WebApp + MobileApp | Dashboard | Aggregate Metrics (My vs Overall) | The dashboard shows Active Properties, Active Demands, Projects, Enterprise Users and High-Value Leads - each split into My vs Overall (KD) - with every count clickable to a filtered list. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 181 | 126 |  | WebApp + MobileApp | Leads & Enquiries | Lead / Enquiry Definitions | Leads Received (inbound) = Image Requests + My-Contact-Viewed; Enquiries Sent (outbound) = Users Contacted + Images seen+ Projects Enquired | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 182 | 127 |  | WebApp + MobileApp | Saved / Shortlisted | Saved / Shortlisted | Keydemand users can save/shortlist Properties, Demands and Projects and review them under a Saved/Shortlisted section. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 183 | 128 | 7. Broker Relationship Manager (BRM) | WebApp + MobileApp + AdminApp | Admin-RM Assignment | Agent RM View | Build a dedicated internal 'agent relationship manager' view allowing designated Keydemand staff to track the specific platform actions of the external brokers they have personally onboarded. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 184 | 129 |  | WebApp + MobileApp + AdminApp | Broker Management | Broker Monitoring View | A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 185 | 130 |  | WebApp + MobileApp | Broker Relationship Manager | BRM Persona | A new Keydemand User-Portal persona - the Broker Relationship Manager (BRM) - can access ALL External Subscribed Brokers (Property Agents) and their activity to address broker concerns. Acts as the relationship owner for external brokers. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 186 | 131 |  | WebApp + MobileApp |  | Broker Directory | BRM sees a consolidated directory of external subscribed brokers with subscription status, city, registration date and source/mode. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 187 | 132 |  | WebApp + MobileApp |  | Broker Metrics Drill-down | For each broker, BRM can view properties & demands added, leads received, relevancies, contacts made, missed calls and ignored image requests. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 188 | 133 |  | WebApp + MobileApp |  | Read-only Oversight | BRM access is read-only; the BRM cannot edit or delete a broker's listings/demands. The view exists purely to monitor activity and resolve broker concerns/complaints. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 189 | 134 |  | AdminApp |  | BRM Permission | The BRM capability is a permission assigned from the Admin Control Panel to designated Keydemand users; scope can be all brokers or only those they personally onboarded. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 190 | 135 | 8. High Value Leads (HVL) Engine | WebApp + MobileApp | Agent Flow, Dashboard & Subscription | High-End Demands Logic | Agents are restricted from viewing demands that fall within city-specific high-ticket thresholds (HVLs). | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 191 | 136 |  | WebApp + MobileApp | Property and Listing Management | Massive Demand Bypass | If an external agent posts a massive demand (e.g., >10,000 sq ft in Bangalore), it bypasses the 'Keydemand exclusive' block and becomes visible to other agents. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 192 | 137 |  | WebApp + MobileApp | KD Dashboard | Grid Toggles | Dashboards must feature a dedicated switch to toggle between 'High-Value' and 'Standard' inventory views. | Build 4 | 25-Sep-2026 |  | Completed | Completed | Given better UX now |  |
| 193 | 138 |  | WebApp + MobileApp + AdminApp | HVL(High Value Leads) | HVL Definition | Requirements exceeding specific size thresholds are classified as HVLs. The Admin must have controls in the panel to define and edit these square footage limits. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 194 | 139 |  | WebApp + MobileApp + AdminApp |  | Cross-Asset Application | HVL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 195 | 140 |  | WebApp + MobileApp + AdminApp |  | Exclusion | Day-to-day operational requirements posted by existing, onboarded enterprise brands are not categorized as high-value leads. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 196 | 141 |  | WebApp + MobileApp + AdminApp |  | Standard Leads | If a new inquiry falls below the high-value threshold, it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 197 | 142 |  | WebApp + MobileApp + AdminApp |  | Tier 1 vs. Tier 2 Routing | HVL restrictions only apply to Tier 1 markets. Leads in Tier 2 cities bypass this and remain open to all agents. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 198 | 143 |  | WebApp + MobileApp + AdminApp |  | Exclusive Routing | HVLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 199 | 144 |  | WebApp + MobileApp + AdminApp |  | Global Access | While notifications for a new HVL are localized to the assigned city members, all Keydemand team members possess global access to view HVLs pan-India. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 200 | 145 |  | WebApp + MobileApp + AdminApp |  | Manual Unlock Valve | If the Keydemand team cannot service an HVL within a specific timeframe, Admins can manually 'unlock' the requirement. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 201 | 146 |  | WebApp + MobileApp + AdminApp |  | Agent-Added Exemption | Demands posted directly by agents bypass HVL restrictions entirely and remain visible to other agents via relevancy matching. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 202 | 147 |  | WebApp + MobileApp + AdminApp |  | HVL Unopened Marker | Unopened leads must be visually marked with a red dot in the platform. | Build 4 | 25-Sep-2026 |  | Completed | In-Progress |  |  |
| 203 | 148 |  | WebApp + MobileApp + AdminApp |  | HVL Unlock Notification | If the KD team unlocks an HVL requirement, the system must notify agents who possess relevant properties based on relevancy matching. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 204 | 149 |  | WebApp + MobileApp + AdminApp |  | HVL Notification Mediums | Notifications for new leads must go out via both email and WhatsApp to the assigned users. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 205 | 150 |  | WebApp + MobileApp + AdminApp |  | HVL Customization | The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned KD team members. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 206 | 151 |  | WebApp + MobileApp |  | Visibility Rules 1 | All KD team members must be able to access all high-value leads. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 207 | 152 |  | WebApp + MobileApp + AdminApp | Admin-RM Assignment | Notifications | Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a relevant property matching the demand. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 208 | 153 |  | WebApp + MobileApp + AdminApp | Permissions and Sizes | Demand Size Limit | The system must hide high-sq-ft demands from standard users/agents and route them directly to the Keydemand team. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 209 | 154 |  | WebApp + MobileApp + AdminApp |  | Size Configuration | The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 210 | 200 | 14. Notifications & Mobile Infrastructure | WebApp + MobileApp + AdminApp | Notifications & Routing | Notification Filtering | Notifications must be segmentable, allowing users to filter by specific triggers such as "All leads for my listings," "Tagged projects," or "Relevancies". | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 211 | 201 |  | WebApp + MobileApp |  | Enquiry Routing Logic | The system must automate routing based on the specific interaction type (e.g., direct developer enquiries, enterprise conversion prompts, or support requests) | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 212 |  |  |  |  | Mobile UI Abbreviations | To prevent text wrapping issues on mobile screens, internal team dashboards can utilize abbreviations (e.g., "KD" instead of "Keydemand Properties") subject to final UX review. <br> | Build 4 |  |  | Completed | Completed |  |  |
| 213 | 202 |  | MobileApp | Mobile UI/UX | Card-Based Interface | Horizontal scrolling tables are prohibited on mobile; all list data must use a card/thumbnail layout. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 214 | 203 |  | MobileApp |  | Dual Navigation | Provide both a 'Back' button (previous screen) and a 'Close' button (global exit to dashboard) on nested screens. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 215 | 204 |  | MobileApp |  | Persistent Search Bar | Lock a persistent search & filter bar to the top of any paginated / scrollable list screen so search context is not lost. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 216 | 205 |  | MobileApp |  | Visible Contact on Cards | Display the agent/user phone number directly on top-level UI cards, immediately below the name. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 217 | 206 |  | MobileApp |  | Regional Info Button | Posting a property >> while uploading images should have sample images shown for user to understand - repeat of 13 | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 218 | 207 |  | MobileApp | Mobile Infrastructure | Firebase Integration | Integrate Firebase for Crashlytics (crash reporting) and in-app push notifications. | Build 4 | 25-Sep-2026 |  | In-Progress | In-Progress | Crashlytics is not needed some 3rd party needed. |  |
| 219 | 208 | 15. Compliance, Legal & Attribution | WebApp + MobileApp + AdminApp | Admin Panel(Generic) | Privacy Policy Action | The Privacy Policy must immediately append a conditional scope clause into the Privacy Policy detailing potential future chatbot integrations. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 220 | 209 |  | WebApp + MobileApp | Compliance, Legal & Chatbot | Grievance Officer- Terms and Conditions | Appoint and clearly display the contact details for a Grievance Officer, satisfying both DPDP and GDPR mandates. Is it to be put in Terms and Conditions? who will be doing it? | Build 4 | 25-Sep-2026 |  | In-Progress | Completed |  |  |
| 221 | 210 |  | WebApp + MobileApp |  | Event Tracking | Implement strict event tracking to monitor user behaviour when they encounter hidden images to support A/B testing and funnel analysis. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 222 | 211 |  | WebApp + MobileApp |  | Privacy Policy | A conditional scope clause detailing potential future chatbot integrations must be added to the Privacy Policy immediately. - Same as 208 | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 223 | 212 |  | WebApp + MobileApp | Marketing & Source Tracking | Attribution Tracking | User acquisition sources (e.g., Organic vs. Paid) will be tracked using the user's phone number as the primary source of truth. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 224 | 213 |  | WebApp + MobileApp + AdminApp | Data Residency | Data Residency (India-only) | All data storage and sub-processors are India-resident (MongoDB Atlas India, AWS ap-south-1, MSG91/Interakt/Razorpay); no overseas data transfer in Phase 1. | Build 4 | 25-Sep-2026 |  | Completed | Completed |  |  |
| 225 | 214 | Foundation - Data Migration | WebApp + MobileApp + AdminApp | Admin Panel(Generic) | Automated Migration | All active V1 users must be automatically migrated to the new V2 platform. | Build 4 | 02-Oct-2026 |  | In-Progress | In-Progress | Only routing and selected migration . Client will do internal. only few agents will be done by |  |
| 226 |  |  |  | Phase 2 |  |  |  |  |  |  |  |  |  |
| 227 | 215 | Deferred / Phase 2 | WebApp + MobileApp | Admin Panel-General | No Phase 1 Chatbot | A live chatbot is NOT a mandatory feature and will not be built or integrated for the Phase 1 launch (deferred to a later phase). |  |  |  | To Do |  |  |  |
| 228 | 216 |  | WebApp + MobileApp + AdminApp |  | Granular Permissions | Highly granular, module-level permission toggles must be deferred to Phase 2 development to prevent over-engineering. |  |  |  | To Do |  |  |  |
| 229 | 217 |  | WebApp + MobileApp + AdminApp | Keydemand | Future Phase | In a future release phase, Keydemand users will be permitted to add projects and developers directly. |  |  |  | To Do |  |  |  |
| 230 | 218 |  | AdminApp | Content Management | Content Management (Phase 2) | Admin-managed content - Keydemand statistics, About Us, FAQ, Terms & Conditions, Privacy Policy, Banners, Clients and Testimonials - is deferred to a later phase. |  |  |  | To Do |  |  |  |
| 231 | 219 |  | AdminApp | Site Down | Maintenance Page (Phase 2) | A configurable 'Site Down' / maintenance page is deferred to a later phase. |  |  |  | To Do |  |  |  |
| 232 | 220 |  | AdminApp | Keydemand | Future Phase | CRM Pipeline (Lite): The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. It also logs the assigned representative and the last activity date.(Phase 2) |  |  |  | To Do |  |  |  |
| 233 |  |  |  |  |  | Boost property/project for extra money. Can be pushed on top. |  |  |  |  |  |  |  |

#### Tab 4 — UAT Links
**R1:** User App — https://uat-v2.keydemand.in

**R3:** Login = phone number + OTP [REDACTED-credential] (all seed users; from 04-users.seed.ts + enterprise brand seeded on UAT)

| Persona | Role | Phone | Notes |
|---|---|---|---|
| Amit Patel | Agent | 919900000001 | Has an active Mumbai subscription → can post freely |
| Rajesh Kumar | Brand (individual) | 919900000002 | |
| Vikram Mehta | Office Tenant | 919900000003 | |
| Sara Khan | Managed-space Occupier | 919900000004 | |
| Priya Sharma | Developer | 919900000005 | KD-approved (can post projects) |
| Rahul Gupta | MSO Operator | 919900000006 | onboarding pending |
| Meera Iyer | MSO Operator | 919900000008 | onboarding approved |
| Anita Verma | Keydemand Team (internal) | 919900000007 | KD /kd/* surface |
| UrbanThread Owner | Enterprise Brand (retail) | 919900000009 | unlimited contact unlocks |

**R19:** New UAT Admin logins — https://admin-uat-v2.keydemand.in

| Email | Password |
|---|---|
| sudhanshu@keydemand.in | [REDACTED-credential] |
| nitesh@keydemand.in | [REDACTED-credential] |
| k.iyer@keydemand.in | [REDACTED-credential] |
| himanshu@keydemand.in | [REDACTED-credential] |
| pradeepa.pv@futuristglobal.com | [REDACTED-credential] |

**R30:** SIT Details

| App | URL |
|---|---|
| Web app | https://du15yseakf0ik.cloudfront.net |
| Control Panel | https://d2vy3h98yr0q9e.cloudfront.net |

R34: https://docs.google.com/document/d/1XuokGE1CoAUqBltFl9fhQh8MHhMJJ849/edit (= V2 SIT Environment Details.docx, doc 4 below)

**R37:** Here are the DEV seed users. Login flow: enter phone → OTP is bypassed in dev, use [REDACTED-credential].

| # | Name | Phone | Role | Key state for testing |
|---|---|---|---|---|
| 1 | Amit Patel | 919900000001 | agent | Subscribed; PAN-India retail+office coverage; cities Mumbai/Bengaluru; propertyTypes retail+office. Best for: posting properties, subscription/coverage, search. |
| 2 | Rajesh Kumar | 919900000002 | brand (individual, RetailMax) | Has brandId/companyId; asset-class-locked → searchAssetScope. Best for: brand explore (clamp), contact-view paywall, first-demand. |
| 3 | Vikram Mehta | 919900000003 | office_tenant (individual) | cities Mumbai/Bengaluru; interestedInManagedSpace. Best for: tenant explore clamp (→office), demand post. |
| 4 | Sara Khan | 919900000004 | managed_space_occupier | 25 seats, Mumbai. Best for: managed-space clamp, occupier free-contact paywall. |
| 5 | Priya Sharma | 919900000005 | developer (BuildRight, approved) | KD-onboarding approved → can log in. Project poster. |
| 6 | Rahul Gupta | 919900000006 | managed_space_operator (pending) | kdOnboardingStatus: pending → login is gated (403). Use to test the "pending review" screen. |
| 7 | Anita Verma | 919900000007 | keydemand_team (kdRole rm) | KD/admin. Best for: moderation, KD browse (demands), admin grant, leads, KD-bypass on restricted projects. |
| 8 | Meera Iyer | 919900000008 | managed_space_operator (approved) | Approved MSO companion to Rahul — test post-onboarding MSO flow. |

| Environment | URL |
|---|---|
| DEV WEB URLs | https://d3nkiewgx0jg9g.cloudfront.net |
| Admin-ui (DEV) | https://d16rkle5fvh00m.cloudfront.net |
| API (DEV, HTTPS via CloudFront): | https://d1brddgvaviw9r.cloudfront.net |
| API direct ALB (debug): | http://keydemand-v2-dev-alb-2033088979.ap-south-1.elb.amazonaws.com |
| (R54, API docs) | https://d1brddgvaviw9r.cloudfront.net/api/v2/docs |

#### Tab 5 — Phase 1- Important Links to all
Rows 11, 33 and 58 have no URL in the source ("Keydemand Team Specific Page - Registered" repeats its own name in the Link cell; row 33 "Version 2 of all pages- After Client Changes" is a sub-heading; row 58 "Keydemand daily summary" has no link). Row 45 has a link with no asset name.

|  Row | Name of the Asset | Link |
|---|---|---|
| 2 | All Assets for V2 | https://drive.google.com/drive/folders/1VdUOwdm-4URDoehjRo6XRbODrcnv22cX |
| 3 | PR Sheet- Client Main | https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=AdAK1rfu3kg |
| 4 | Figma Main Link | https://www.figma.com/design/n3LbZUIb3Zs5ht0pElfQTW/Keydemand?node-id=0-1&p=f&t=N5q59gjfFN8LwzNc-0 |
| 5 | SIT Main Link | https://du15yseakf0ik.cloudfront.net/ |
| 6 | Control Panel V2.1 -0 Keydemand- (Admin Panel) | https://docs.google.com/document/d/1CcjZcH6RU1G48AW47ZqjrcsoGfPOhlyy/edit#heading=h.99x570u361tm |
| 7 | Master Sheet -Phase 1 | https://docs.google.com/document/d/1bMWbCXa7y4FUAGeXfAGo_loEbwSziCebyOcXEP7p0R4/edit?pli=1&tab=t.0#heading=h.2034v5thq2jm |
| 8 | Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us | https://docs.google.com/document/d/1gW6_NYr5I-GjGBtZE19K97o2bUorBqmlCmfWIyYGvRM/edit?tab=t.0 |
| 9 | Keydemand V2 - Phase 1 Tracker - Old tracker | https://docs.google.com/spreadsheets/d/1HDjVsQGcavd2uamI4rmVeCTemFJczg6eRN0RJdbyHvM/edit?gid=0#gid=0 |
| 10 | Agent Home Page/Specific Page - Registered | https://docs.google.com/document/d/1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c/edit?tab=t.0 |
| 11 | Keydemand Team Specific Page - Registered | Keydemand Team Specific Page - Registered |
| 12 | Keydemand Team 30062026 - Final - Dashboard | https://docs.google.com/document/d/1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr/edit#heading=h.9wzh5o1sam8u |
| 13 | Brand- F&B Home Page - Specific Page | https://docs.google.com/document/d/1ecSsc_fejBryLf9me0KeVMVDt7FhUp-vt1dfa8jek_8/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 14 | Brand-Retail Home Page- Specific Page | https://docs.google.com/document/d/1sCmFhBF3cqiqbUpMKt5pIZGcj4SAF-p4S0nk3HqxOyI/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 15 | Office Tenant Home Page-Specific Page | https://docs.google.com/document/d/1IZvh3VFhois8m7Suku3_Gxg0MBHKbLfAAJ_cpFYhuq4/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 16 | Managed Space Tenant-Individual Home Page-Specific Page | https://docs.google.com/document/d/1m-GHd7uhRH9tNSi6FihHeJnaNO4aQcNzzTzTe9fSQ10/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 17 | Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier | https://docs.google.com/document/d/1lLEjGwHduI2x73Z6bTMleJIZdMVJ3kA-wBZq3fxlLFU/edit?tab=t.0 |
| 18 | Privacy Policy | https://docs.google.com/document/d/1mx-hqfeHKeWdJgtRlp9w7BD5yrfK7wOj/edit |
| 19 | Keydemand T&C | https://docs.google.com/document/d/1pVemSRsZalZIc_CiFwCL3u-KG1aKejqv/edit |
| 20 | Keydemand_PRD_v1 Document | https://docs.google.com/document/d/1Zby45ttZtQAzPYelmLgR1f_pb3LTtRAu/edit |
| 21 | Phase 1 - CR's and New Business Rule additions - FINAL MAIN COPY | https://docs.google.com/document/d/1i6udGwW4Im-tFr_ZUJvNRhoug6QN_o70dK4k9y_4cSU/edit?tab=t.0#heading=h.9c0gzvd6105p |
| 22 | Keydemand V2 Phase 1 - Delivery Plan - New and Updated | https://docs.google.com/spreadsheets/d/1LvPiNQFNLQu-IYuu-1VNS47Y952OaR6L/edit?gid=1359979139#gid=1359979139 |
| 23 | July 29th - Business rules and Action items | https://docs.google.com/document/d/14nXV4QvzlIE3JwqOsDNOIOhJC4UmCBHO6hqFAE_24SI/edit?tab=t.0#heading=h.v176h28rldej |
| 24 | DSC Meeting Link - 9:30 AM to 10:30 AM | https://meet.google.com/tqm-udjb-xrt?authuser=0&hs=122&ijlm=1781718539316 |
| 25 | Client Meeting Link - 10:30 AM to 11:30 AM | meet.google.com/toe-gqbc-iat |
| 26 | Keydemand V2 - Phase 1 Tracker | https://docs.google.com/spreadsheets/d/1HDjVsQGcavd2uamI4rmVeCTemFJczg6eRN0RJdbyHvM/edit?gid=1821053913#gid=1821053913 |
| 27 | Sit Test Users | https://docs.google.com/spreadsheets/d/1HDjVsQGcavd2uamI4rmVeCTemFJczg6eRN0RJdbyHvM/edit?gid=1821053913#gid=1821053913 |
| 28 | UAT Details | https://docs.google.com/document/d/1k3tlQFM1q8GMYXI7-JSzh9P2fdAhPHjBPkMVWLCY_Jc/edit?tab=t.0 |
| 29 | Images for V2 - Logos of all clients | https://drive.google.com/drive/folders/1wC35Q7G_Du0S3SA0OznD7-2-kJ51Irbr |
| 30 | Keydemand Test Case Sheet - Final <br> | https://docs.google.com/spreadsheets/d/1pXL1_1PIB9EJ10ecuhzjNA5nowEKtfMYxerUmdShGRg/edit?gid=481669923#gid=481669923 |
| 31 | KD- ADMIN - Test cases <br> | https://docs.google.com/spreadsheets/d/1m0gw_nElV3mFo_Z-DUfwumoa1L7Tx3lXGb9MACBPfF0/edit?gid=0#gid=0 |
| 32 | Development Bug list | https://docs.google.com/spreadsheets/d/1BfQ5JB9x8pYJNJoQP4kJsfVak2FIbeY-zPPwQM9oI4s/edit?gid=1484843939#gid=1484843939 |
| 33 | Version 2 of all pages- After Client Changes |  |
| 34 | Version 1.0- Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us | https://docs.google.com/document/d/1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc/edit?tab=t.0 |
| 35 | Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL | https://docs.google.com/document/d/1cHdivqBmfSS08uMiRJd_otlDaD1acAg7yuXBKx8FM-0/edit?tab=t.0 |
| 36 | Version 1.0 Agent Home Page/Specific Page - Registered | https://docs.google.com/document/d/1_-y47KOc43wYJ2ConPhogkez9KM9L5OCI3lfjiP9ruM/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 37 | Version 1.0 Brand- F&B Home Page - Specific Page | https://docs.google.com/document/d/1OUHdFtGTXUTWsZOG6aQ1lv57K0ttI6Ym3_7FqqfxNg4/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 38 | Version 1.0 Brand-Retail Home Page- Specific Page | https://docs.google.com/document/d/1Lx_0064buDmM6a_rjawrnDLoO1s1dMtnGlPq5-uYGLU/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 39 | Version 1.0 Office Tenant Home Page-Specific Page | https://docs.google.com/document/d/1yRm2NnqeeEoXf4gXDSB8lGBY7xnczSEHFrI886pO-QE/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 40 | Version 1.0 Managed Space Tenant-Individual Home Page-Specific Page | https://docs.google.com/document/d/1cMCQsHDnGx4qFZFhseFxIWb8-TBtU9vBImi8oBCV2AA/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 41 | Version 1.0 Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier | https://docs.google.com/document/d/1AYt0SdmjORmTxSEIoZMczSxEQ05r2HUVELQGbCjD8LA/edit?tab=t.0 |
| 42 | Version 1.0 Keydemand Team Specific Page - Registered | https://docs.google.com/document/d/1nVz-XohH3SKJdUITQN4jcrj80fLOpKN3QDwK4ZFLOos/edit?tab=t.0#heading=h.6rkpcmxsrdvh |
| 43 | Version 2.0 Keydemand Team Specific Page - Registered | https://docs.google.com/document/d/1IZWe79BBcaBqgGX4qD6znl04o3hEQrn8DymvikBkAGo/edit?tab=t.0#heading=h.9wzh5o1sam8u |
| 44 | Data set for Bulk Upload | https://docs.google.com/spreadsheets/d/1KCoNi_zjVIVAo80Vjqvn5TXkqxBlfjRI/edit?gid=670426502#gid=670426502 |
| 45 |  | https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp |
| 46 | Version 1.0 Control Panel V2.1 -0 Keydemand | https://docs.google.com/document/d/1Kv7FiKdeRP53F0vYiV8THEdMNrlvgSM4/edit |
| 47 | Version 2.0 Control Panel V2.1 -0 Keydemand | https://drive.google.com/file/d/1KPljeVP9SsDRb4eSnlnsIFSDk31iEPK-/view?usp=sharing |
| 48 | Super Admin, Normal Admin what they can do | https://docs.google.com/document/d/1qh1Uh-T8MWhGs2WumwpJY8mzXv3v9UhEVE2N4vp2cak/edit?tab=t.0 |
| 49 | Reference Guide to User Roles on Keydemand Platform | https://docs.google.com/document/d/1v84nXG7_YORBZH2okgSiOfibYemXa7zZ3KK9KliOqcM/edit?tab=t.0 |
| 50 | PR SHeet- Copy-4 Oct _ FINAL | https://docs.google.com/spreadsheets/d/1CZxTS5kCzHTRa5W1GKa3i_yLs1zeGtr8I0QZTBu3RIE/edit?gid=745903108#gid=745903108 |
| 51 | Property & Project Input Fields - September 8th | https://docs.google.com/spreadsheets/d/1xf8Efoa0GhJgfxSnUBeW9w6L3jntJziUbzmhQdtpsmQ/edit?gid=1174773546#gid=1174773546 |
| 52 | Demand Input fields - September 8th | https://docs.google.com/spreadsheets/d/1wxriATtu4B7pXm8_UdVmq-qNivcOhwRyp4lgKmYd7fo/edit?gid=1945842031#gid=1945842031 |
| 53 | Generic BUG  list | https://docs.google.com/spreadsheets/d/1mSp6jiYY01m9GEPesHCRkyg2bhGU1dQMgLuP_Iofl9M/edit?gid=922280560#gid=922280560 |
| 54 | Notifications Design | https://drive.google.com/file/d/1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452/view?usp=drive_link |
| 55 | FAQ | https://docs.google.com/document/d/1q8mVbidN6Bp0VlofoRNtwx5Z62BcbSke/edit |
| 56 | Notifications Breakdown | https://docs.google.com/document/d/1HkwJ-9ZHhL9snZmncJVg0iWImGh_L5lBKWdkgYDAZPo/edit?tab=t.0 |
| 57 | Keydemand Mktg Messaging Framework | https://docs.google.com/spreadsheets/d/1o933swzZB3kMwpF1gGgYMFRfZCG0UXNKe6dOWZzpQ0k/edit?gid=0#gid=0 |
| 58 | Keydemand daily summary |  |
| 59 | Relevancy Logic | https://docs.google.com/document/d/1cM4ZE069Xb12FWrItTipiSOp6oKrPKfB/edit?usp=sharing&ouid=111697948643101603932&rtpof=true&sd=true |
| 60 | All User Journeys in Keydemand V2 | https://docs.google.com/document/d/1lyX8vwFoW48XPY6L6QjtH-DQT0f60Zw0D2ZYmIU7X4U/edit?tab=t.0 |
| 61 | Design System | https://leadcaller.live/design-system |
| 62 | Properties and projects relavancy/similar matches | https://docs.google.com/spreadsheets/d/1QNT9o_tREQro2OFa9uhx58ZDlJpGhKHpRWExI_FYIIU/edit?gid=787458221#gid=787458221 |
| 63 | Images for Demand -Relevancy and Enterprise End Use as discussed in Client call today(8th October) | https://docs.google.com/document/d/1To607MwaovFvLD7jj2spXYhhRPv_AsdaidcHvm8tof4/edit?tab=t.0 |
| 64 | Property And Demand, Project Card Details | https://docs.google.com/document/d/1gRsyx7gDMAnGbpxdF7twjQKMDNLcfivT0RSidB2XsYE/edit?tab=t.0#heading=h.17hyfitcdwa9 |
| 65 | Relevancy Logic V2 -Phase 1 shared by client | https://docs.google.com/spreadsheets/d/1u8vTa1tN7UAWQQgi-PXnAG2lels_N33M/edit?gid=587144316#gid=587144316 |
| 67 | Rough 2- My Drafts | https://docs.google.com/document/d/1f1LOJkqKIrq3kgC42h9E6tPlKREqseVBiPj_eicY1ps/edit?tab=t.0 |
| 69 | Sathish Buglist | https://docs.google.com/spreadsheets/d/189jFuMLjDTcDKrli9su8uIMLnSGXnKBD0YMFzSRXT5w/edit?gid=0#gid=0 |
| 70 | Development Bug list | https://docs.google.com/spreadsheets/d/1BfQ5JB9x8pYJNJoQP4kJsfVak2FIbeY-zPPwQM9oI4s/edit?gid=1608696293#gid=1608696293 |
| 72 | Production_OnCall_Sheet | https://docs.google.com/spreadsheets/d/1Kye-tYrvHv4dz9cTCTEdRhkImVJ_Xh_p/edit?gid=577554112#gid=577554112 |

### Business rules extracted
Delivery Tracker / Effort Summary (plan-level rules):
- **BR-DEL-001** — Delivery follows one design stage, then four dependency-linked builds, then migration, testing, acceptance and launch; "nothing is built before the piece it depends on exists." _(§ Delivery Tracker R2)_
- **BR-DEL-002** — SIT runs from Build 1, business UAT starts from Build 2, and production releases start from Build 4; the 23-Oct Go-Live is "a controlled cutover, not a big-bang." _(§ Delivery Tracker R2, R21-R24)_
- **BR-DEL-003** — Stage 1 Requirements & Complete Platform Design: 06 Jul - 17 Jul 2026; outcome "Design signed off"; produces all Web, Mobile and Admin screens, the end-to-end data model and the API contracts. _(§ Delivery Tracker R5)_
- **BR-DEL-004** — Build 1 - Foundation (Feature Groups 1-3): 20 Jul - 07 Aug 2026, depends on Design; SIT starts; milestone "Foundation working in Dev". _(§ Delivery Tracker R6)_
- **BR-DEL-005** — Build 2 - Admin Control Panel (Feature Groups 12-13, plus subscription prices & city tiers of Group 5 and HVL thresholds per city/asset/size of Group 8): 10 Aug - 28 Aug 2026, depends on Build 1; SIT continues, UAT starts; milestone "Admin in Dev - platform now configurable; UAT begins". _(§ Delivery Tracker R7)_
- **BR-DEL-006** — Build 3 - User Journeys & Subscriptions (Feature Groups 4, 5, 9, 10, 11): 31 Aug - 11 Sep 2026, depends on Build 2. _(§ Delivery Tracker R8)_
- **BR-DEL-007** — Build 4 - Keydemand Team, HVL & Mobile (Feature Groups 6, 7, 8, 14, 15): 14 Sep - 25 Sep 2026, depends on Build 3; PROD starts; milestone "Feature-complete - first production releases begin". _(§ Delivery Tracker R9)_
- **BR-DEL-008** — Data Migration & System Testing (SIT): 21 Sep - 02 Oct 2026 — migrate all live V1 users and their content (properties, demands, images, videos, PDFs) into V2, then run consolidated full-platform SIT across Web, Mobile and Admin plus the migration itself in the SIT environment. _(§ Delivery Tracker R10)_
- **BR-DEL-009** — UAT (rolling from Build 2): 05 Oct - 16 Oct 2026 — the Keydemand business team, supported by QA, validates each increment against real business scenarios and signs off module by module; outcome "Business UAT sign-off". _(§ Delivery Tracker R11)_
- **BR-DEL-010** — Production Releases & Final Go-Live: 25 Sep - 23 Oct 2026; the final cutover on 23 Oct migrates all V1 users with 3 months complimentary Pan-India access and opens the platform to users; outcome "Live in Production - 23 Oct". _(§ Delivery Tracker R12)_
- **BR-DEL-011** — Ownership: Sathish = ALL Backend + DB + Migration + DevOps + Security; Krishna = ALL Frontend; John = QA across all three surfaces + migration + UAT (Delivery Tracker also names Patrik as QA); Business = UAT. _(§ Effort Summary R2; Delivery Tracker R2)_
- **BR-DEL-012** — Web & Mobile share ONE codebase; the Mobile column is only the native-only delta. _(§ Effort Summary R2, R17)_
- **BR-DEL-013** — Total effort: feature groups 37.0 weeks (Admin FE 6.0, Web FE 6.5, Mobile 1.5, Backend 11.0, DB 3.0, QA 9.0); platform-foundation 8.0 weeks (migration 2.0, DevOps 2.0, security 1.0, migration validation testing 2.0, regression & UAT support 1.0). _(§ Effort Summary R19, R22-R27)_
- **BR-DEL-014** — Global renames: Agent -> Property Agent; Account Handler / RM -> Point of Contact. _(§ Effort Summary R4)_
- **BR-DEL-015** — Mandatory-field validation shows an inline error and auto-redirects to the missing field. _(§ Effort Summary R4)_
- **BR-DEL-016** — OC status standardised to Available / Not available / Under construction (Effort Summary wording; see conflict with CR S.no. 10). _(§ Effort Summary R4)_
- **BR-DEL-017** — Mandatory project-level RERA (Effort Summary wording; see conflict with CR S.no. 20 which makes it optional). _(§ Effort Summary R4)_
- **BR-DEL-018** — Lead = Inquiries + Image Requests ('contact inquiries' renamed 'Leads'). _(§ Effort Summary R4; CR S.no. 21)_
- **BR-DEL-019** — 'Official Email ID' labelling - mandatory for Brands/Tenants, optional for Agents; profile picture optional later in My Profile. _(§ Effort Summary R5)_
- **BR-DEL-020** — Password complexity (>=6, upper + number + special) and 15-minute admin session timeout. _(§ Effort Summary R5)_
- **BR-DEL-021** — Mandatory Terms & Privacy + 18+ consent tick with phone-sharing disclosure at registration (Effort Summary wording; see conflict with CR S.no. 27). _(§ Effort Summary R5)_
- **BR-DEL-022** — Unregistered users can view property detail, gated to register only on 'View Phone' / 'Contact'. _(§ Effort Summary R6)_
- **BR-DEL-023** — Dynamic sponsored & exclusive city tabs show only cities with live inventory, with nearest-city redirect + banner. _(§ Effort Summary R6)_
- **BR-DEL-024** — Landing project toggle: Office / Retail / F&B / Managed. _(§ Effort Summary R6)_
- **BR-DEL-025** — 'Request a callback' captures number only; 'Book a demo' -> 'Send an inquiry'; no-login 'List your Project' Developer/Operator enquiry. _(§ Effort Summary R6)_
- **BR-DEL-026** — Image restrictions removed except owner/KD-hidden images. _(§ Effort Summary R6)_
- **BR-DEL-027** — Agent dashboard shows accurate plan status (Free/Trial, 'Usage 0 of 1', Subscribe-Now). _(§ Effort Summary R7)_
- **BR-DEL-028** — Locked-image request flow: login + number shared, owner approves to reveal images and number. _(§ Effort Summary R7)_
- **BR-DEL-029** — No city deletion in Phase 1. _(§ Effort Summary R7; CR S.no. 72)_
- **BR-DEL-030** — City tiers: Class A Metro / B Non-metro / C Rest-of-India / D Pan-India, with protected indicative cities. _(§ Effort Summary R8)_
- **BR-DEL-031** — Admin price changes reflect on the front end immediately but bill from the next cycle; manual renewal by default (opt-in auto-renew). _(§ Effort Summary R8)_
- **BR-DEL-032** — Admin-granted complimentary / zero-charge access, incl. 3-month Pan-India for migrated V1 users. _(§ Effort Summary R8)_
- **BR-DEL-033** — Keydemand Team login: backend onboarding, mobile + OTP login, permission-based access. _(§ Effort Summary R9)_
- **BR-DEL-034** — KD listings: property thumbnails shown even when images are hidden to others, with a 'Hidden to others' overlay; colleague listings read-only. _(§ Effort Summary R9)_
- **BR-DEL-035** — Enterprise-account CRM-lite stages: New / In-Discussion / Site-Visit / Negotiation / Closed / Lost; lead statuses Approved / Rejected / Open. _(§ Effort Summary R9)_
- **BR-DEL-036** — KD direct 'View Phone' contact (no request workflow) with a timestamped 'viewed-by' audit trail. _(§ Effort Summary R9)_
- **BR-DEL-037** — KD relevancy restricted to Brands & Tenants; Managed-Space demands KD-exclusive. _(§ Effort Summary R9)_
- **BR-DEL-038** — BRM: consolidated broker directory (subscription, city, source) and per-broker drill-down of properties/demands added, relevancies, leads received, contacts received/requested, missed calls and ignored image requests - strictly read-only; capability toggled per Keydemand user from the Admin Control Panel. _(§ Effort Summary R10)_
- **BR-DEL-039** — HVL: per-city / asset-class / size thresholds configured in Admin; hidden from external agents, routed exclusively to KD roster; Office/Retail/F&B; Tier-1 restricted, Tier-2 open; day-to-day enterprise-brand requirements excluded; red-dot unopened markers; High-Value vs Standard dashboard toggle; global KD access with city-localised alerts; manual unlock releases to relevant agents via relevancy matching; email + WhatsApp; agent-posted demands exempt. _(§ Effort Summary R11)_
- **BR-DEL-040** — Individual brands and tenants can view up to 5 phone numbers before being prompted for Enterprise Solutions. _(§ Effort Summary R12)_
- **BR-DEL-041** — Asset-class explore/post matrix: asset class pre-selected from registration and never changes; Retail & F&B explore Retail + F&B only; Office Tenant & Managed Space explore Office + Managed only; posting locked to the registered asset class (Retail brand cannot post F&B; Office Tenants post Office + Managed; Managed operators post Managed only); a notice appears when a permitted cross-asset class is viewed. _(§ Effort Summary R13; see conflict with CR S.no. 166)_
- **BR-DEL-042** — Managed Space is a Project asset class restricted to Lease (no Sale / Lead); operators onboarded offline and treated like Developers (no self-login); centres are Projects (Standard/Premium/Exclusive) added/assigned centrally from Admin. _(§ Effort Summary R14)_
- **BR-DEL-043** — Keydemand-Admin back-office: 4-5 core users; email + password login, 15-minute timeout; Super Admin / Admin / Ops roles with dynamic role creation; deactivate hides inventory, delete removes it; listing edit limited to Keydemand & Enterprise inventory. _(§ Effort Summary R15)_
- **BR-DEL-044** — Enterprise formats: physical attributes fixed, only City & Location vary (e.g. Drive-thru / Food-Court / High-Street); Brand Name is the first identifier; demand auto-fill from the selected format is editable, with brand-logo-else-end-use image; brand deactivation also disables active demands; reactivation restores the brand only. _(§ Effort Summary R16)_
- **BR-DEL-045** — Mobile: Firebase Crashlytics + in-app push; card/thumbnail layout (no horizontal tables); dual Back + Close; persistent search/filter bar; phone-number-on-card; regional 'i' info button; segmented notification centre (all-leads / tagged-projects / relevancies); delivered via email + WhatsApp (Interakt). _(§ Effort Summary R17)_
- **BR-DEL-046** — Compliance: displayed Grievance Officer contact (DPDP/GDPR); Privacy-Policy forward-clause for future chatbot; 'Keyproperty' legal entity across Terms & Privacy; hidden-image event tracking; phone-number-based acquisition attribution via a third-party SDK (Singular / Branch); India-only data residency (Atlas India, AWS ap-south-1, MSG91 / Interakt / Razorpay - no overseas transfer). _(§ Effort Summary R18)_
- **BR-DEL-047** — Migration: auto-migrate active V1 users, 3 months of complimentary access, images/videos/PDF; validate in SIT; QA validates the migration in SIT and UAT. _(§ Effort Summary R22, R25)_
- **BR-DEL-048** — Security & Hardening covers authz on new personas (incl. BRM) and admin session security. _(§ Effort Summary R24)_

Requirements Register (one rule per register row, source wording; status shown as recorded on 2026-10-22):
- **BR-DEL-049** — **Empty Fields** — Any field left empty should be hidden from the UI in view mode(non mandatory fields) _(§ Ongoing plus CRs & New Features, row 3, S.no. 1; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-050** — **Renaming** — Rename 'Agent' to 'Property Agent' and 'Tenant' to 'Office Tenant' and Managed Space Tenant globally. _(§ Ongoing plus CRs & New Features, row 4, S.no. 2; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-051** — **Rule** — The Keydemand logo used in the UI must include the "CRE simplified" tagline, as this is part of the officially registered logo and standard marketing language used across all creatives. <br> _(§ Ongoing plus CRs & New Features, row 5, S.no. (no S.no.); Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-052** — **Validation Logic** — Trigger an explicit error for incomplete email addresses or mandatory fields. _(§ Ongoing plus CRs & New Features, row 6, S.no. 3; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-053** — **Redirection** — The interface should automatically redirect the user to the precise location of any missing fields. _(§ Ongoing plus CRs & New Features, row 7, S.no. 4; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-054** — **PDF Download** — Implement the missing functionality where we allow users to download a PDF of their own 'My Listings'. _(§ Ongoing plus CRs & New Features, row 8, S.no. 5; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-055** — **Area Validation** — Carpet Area must strictly be less than or equal to the Built-up Area. _(§ Ongoing plus CRs & New Features, row 9, S.no. 6; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-056** — **Filters & Sorting** — Implement comprehensive filters (e.g., City) and sorting options (e.g., 'Most Demands,' 'Most Properties Posted,' 'Most Leads Received') on the dashboard to allow effective monitoring. _(§ Ongoing plus CRs & New Features, row 10, S.no. 7; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-057** — **Field Editability** — Ensure that 'yes' fields remain editable by users even after a response has been received. _(§ Ongoing plus CRs & New Features, row 11, S.no. 8; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-058** — **Demand Posting** — Expand the 'other interested location' options to allow users to input at most 3 additional localities. _(§ Ongoing plus CRs & New Features, row 12, S.no. 9; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-059** — **OC Supply Standardization** — To prevent contradictions in the relevance Machine Learning (ML) models, the 'OC Status' fields across all property and project backend sheets must be unified to exactly 4 terms: Received, Applied, Not Available, Under Construction _(§ Ongoing plus CRs & New Features, row 13, S.no. 10; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-060** — **Draft Auto-Save** — The system must automatically save a draft of a property or demand listing every 30 seconds during the posting flow. _(§ Ongoing plus CRs & New Features, row 14, S.no. 11; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-061** — **Brand Image Display** — If a brand logo/image is uploaded in the backend, it must display as the demand image. _(§ Ongoing plus CRs & New Features, row 15, S.no. 12; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-062** — **Reference Images** — Show sample reference images during the image upload step so users understand what kind of photos to upload. _(§ Ongoing plus CRs & New Features, row 16, S.no. 13; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-063** — **Image permissions** — For properties that a user uploads but marks as "hidden," the UI must not rely solely on an eye icon. Because the photo area is small, an opacity change (or similar visual treatment) must be used so the user can still read the property details. <br> _(§ Ongoing plus CRs & New Features, row 17, S.no. (no S.no.); Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-064** — **User Permissions** — Grant users the ability to modify all fields except for the core City and Location parameters.- repeated as 19 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 18, S.no. 14; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-065** — **Image Shuffling** — For enterprise demands  the UI should should use end use images to maintain a dynamic look. _(§ Ongoing plus CRs & New Features, row 19, S.no. 15; Build: Build 1  + Build 4; Dev: In-Progress; SIT/QA: In-Progress)_
- **BR-DEL-066** — **Locked Fields** — Ensure Asset Class, Transaction Type, City, and Location remain permanently locked. _(§ Ongoing plus CRs & New Features, row 20, S.no. 16; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-067** — **Unlocked Fields** — Unlock 'Other interested locations' and 'Possession needed' fields so they can be edited after initial submission _(§ Ongoing plus CRs & New Features, row 21, S.no. 17; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-068** — **Property Cards Display** — Listing Title: Display the Property Name, if available. If absent, use the descriptive format: [Store Type] [Asset Class] Property for [Transaction Type]. Posted By: Display the name of the specific Agent. If posted by the Keydemand team, display 'Keydemand'. _(§ Ongoing plus CRs & New Features, row 22, S.no. 18; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-069** — **Demand Cards Display** — Naming Convention for Demand: Office/Retail/F&B/Managed Space Demand Posted by: Display the specific Brand, Tenant, or Agent name. If the specific brand or tenant name is unavailable, use the appropriate category label: Retail Tenant/F&B Tenant /Office Tenant/Managed Space Tenant _(§ Ongoing plus CRs & New Features, row 23, S.no. 19; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-070** — **RERA Numbers** — Add an optional field to capture RERA numbers to the project level.- Before it was this - Add a mandatory field to capture RERA numbers, restricted strictly to the project level. _(§ Ongoing plus CRs & New Features, row 24, S.no. 20; Build: Build 1  + Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-071** — **Leads Renaming** — Rename the existing 'contact inquiries' section to 'leads' to streamline the interface.Inquiries + Image Requests = Lead). _(§ Ongoing plus CRs & New Features, row 25, S.no. 21; Build: Build 1  + Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-072** — **Legacy Data** — Recognise that any lead counts currently visible are legacy data, as the system lacks an active mechanism to increment them.- NOT CLEAR. CAN BE REMOVED **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 26, S.no. 22; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-073** — **Nomenclature** — RM' is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title. _(§ Ongoing plus CRs & New Features, row 27, S.no. 23; Build: Build 1  + Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-074** — **Terminology** — Remove existing terminology for 'Account Handler' and 'RM' (Relationship Manager) globally; ensure all system labels are replaced with 'Point of Contact' or 'POC'. _(§ Ongoing plus CRs & New Features, row 28, S.no. 24; Build: Build 1  + Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-075** — **Password Complexity** — Passwords must contain at least 6 characters, including one uppercase letter, one number, and one special character. _(§ Ongoing plus CRs & New Features, row 29, S.no. 25; Build: Build 1  + Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-076** — **OTP Wait Timer** — The system must strictly enforce a 30-second cooldown period before a user can request an OTP resend. _(§ Ongoing plus CRs & New Features, row 30, S.no. 26; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-077** — **Compliance & Verification** — Age verification (18+) is managed via the standard Terms & Conditions agreement. No separate DOB field or checkbox is required in the registration flow. _(§ Ongoing plus CRs & New Features, row 31, S.no. 27; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-078** — **Abandoned Session** — If a user successfully verifies their mobile number via OTP but abandons the registration process before completing their profile, the backend must instantly capture and log that mobile number as an actionable lead. _(§ Ongoing plus CRs & New Features, row 32, S.no. 28; Build: Build 1  + Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-079** — **Resuming Registration** — If a user who previously abandoned their registration returns and enters their verified mobile number, the system must bypass the initial verification steps and direct them straight to the profile setup page. _(§ Ongoing plus CRs & New Features, row 33, S.no. 29; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-080** — **Form Cleanup** — Remove the email address field from the user registration form completely. WRONG plus repeat as 35 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 34, S.no. 30; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-081** — **Age Verification Verbiage** — The registration screen must explicitly enforce 18+ consent using this exact required phrase: 'by continuing you confirm you are 18 years and above'. and a tick - duplicate as 27 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 35, S.no. 31; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-082** — **Profile Picture Uploads** — The profile picture upload feature must be completely removed from the initial registration form to prevent user drop-off and distraction. _(§ Ongoing plus CRs & New Features, row 36, S.no. 32; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-083** — **Email Field Labeling** — The email input field across forms must be universally explicitly labeled as 'Official Email ID'. - other than agent flow and email is mandatory.  repeat as 35 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 37, S.no. 33; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-084** — **Email Field Validation** — Strict domain-level validation (such as actively blocking generic domains like '@gmail.com') is to be enforced in the system. _(§ Ongoing plus CRs & New Features, row 38, S.no. 34; Build: Build 1 Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-085** — **Email Logic** — Email addresses are strictly mandatory for all entity-level profiles, which includes Brands and Office Tenants. Email addresses are optional for Agent profiles. _(§ Ongoing plus CRs & New Features, row 39, S.no. 35; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-086** — **Immediate Lead Capture** — Update the 'Show Interest' API logic to capture the phone number as a lead the exact moment OTP verification is successful. _(§ Ongoing plus CRs & New Features, row 40, S.no. 36; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-087** — **Single-Select Restraint** — The 'Operating City' (or base city) selector must be a single-select dropdown, replacing any multi-select functionality. _(§ Ongoing plus CRs & New Features, row 41, S.no. 37; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-088** — **City Categorization** — The dropdown category previously labeled 'Other cities' must be explicitly renamed to 'Popular cities'. _(§ Ongoing plus CRs & New Features, row 42, S.no. 38; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-089** — **Geographic Groupings** — Sub-locations and micro-markets in Goa must be consolidated under a single 'Goa' parent category. _(§ Ongoing plus CRs & New Features, row 43, S.no. 39; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-090** — **Google Maps Integration** — Integrate Google Maps into the search/typing functionality for accurate locality selection. _(§ Ongoing plus CRs & New Features, row 44, S.no. 40; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-091** — **Regional Tooltips** — For macro-regions like Mumbai/MMR, Delhi NCR, the user interface must display exactly what sub-regions are included. _(§ Ongoing plus CRs & New Features, row 45, S.no. 41; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-092** — **Terms & Policies** — Include an explicit, mandatory checkbox for 'Terms of Use' and 'Privacy Policy' in all registration flows to ensure compliance with DPDP/GDPR. _(§ Ongoing plus CRs & New Features, row 46, S.no. 42; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-093** — **Phone Number Disclosure** — Include explicit consent terms regarding phone number sharing during registration to ensure users are informed that their number is shared upon request. Are terms condition specify clause for consent? Also check remarks column _(§ Ongoing plus CRs & New Features, row 47, S.no. 43; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-094** — **Relevancy Matching** — Ensure that all fields critical for backend relevancy matching are permanently included in the initial quick registration form. _(§ Ongoing plus CRs & New Features, row 48, S.no. 44; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-095** — **Abandoned Registration** — If a brand/user starts the registration journey, verifies their mobile number via OTP, but abandons the page before completing their profile, their verified number must be immediately captured by the system as an actionable 'lead'. _(§ Ongoing plus CRs & New Features, row 49, S.no. 45; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-096** — **Resuming Journey** — If the dropped-off user returns and enters their number again, the system must recognize them and prompt a 'resume registration' flow.  - duplicate as 29 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 50, S.no. 46; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-097** — **Internal Action** — The central team can use these incomplete captured leads for outbound cold calling to manually assist the user in account creation. _(§ Ongoing plus CRs & New Features, row 51, S.no. 47; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-098** — **CTA Restrictions** — Ensure unregistered users are prompted to register only when clicking actionable elements like 'View Phone Number', image requests or 'Contact Us'. _(§ Ongoing plus CRs & New Features, row 52, S.no. 48; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-099** — **Request a Callback** — Add a 'Request a callback' button alongside the 'Book a demo' option in About Keydemand video section. To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory. _(§ Ongoing plus CRs & New Features, row 53, S.no. 49; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-100** — **Book a Demo** — Change 'Book a demo' text to 'Send an inquiry' in the About section. _(§ Ongoing plus CRs & New Features, row 54, S.no. 50; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-101** — **Promotional Hook** — Feature a '1 free listing' pop up on the Agent Home page (Navbar or first fold) for new users to incentivise posting. _(§ Ongoing plus CRs & New Features, row 55, S.no. 51; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-102** — **Property Detail Access** — Implement functionality allowing unregistered users to view property details by default. _(§ Ongoing plus CRs & New Features, row 56, S.no. 52; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-103** — **Image Restrictions** — Remove image restrictions; only hide images that are explicitly marked not to be shown by the agent or Keydemand. _(§ Ongoing plus CRs & New Features, row 57, S.no. 53; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-104** — **Default City** — Set the default city to Bengaluru (instead of Mumbai) when a user visits the platform for the first time. _(§ Ongoing plus CRs & New Features, row 58, S.no. 54; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-105** — **Incentive Messaging** — Design and implement a pre-wall popup or graphic that communicates the 'free listing' reward to users before they begin the registration flow. **[Marked Phase 2]** _(§ Ongoing plus CRs & New Features, row 59, S.no. 55; Build: Phase 2; Dev: To Do; SIT/QA: To Do)_
- **BR-DEL-106** — **Landing Page City Tabs** — Remove Cities Tabs from Exclusive Projects _(§ Ongoing plus CRs & New Features, row 60, S.no. 56; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-107** — **Client Logos** — Add the names and logos for 'Office Tenant' and 'Managed Office Spaces' to the client section on the landing page. _(§ Ongoing plus CRs & New Features, row 61, S.no. 57; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-108** — **Navbar Inquiry Button** — Add a "List your Project >>" button on the Navbar. Clicking it should reveal a dropdown with Developer \| Operator options. Selecting either should open an Enquiry Form. Remove this entry point from the login/sign-up page.  <br> _(§ Ongoing plus CRs & New Features, row 62, S.no. 58; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-109** — **Cities Tabs** — Remove the 'Cities' tabs entirely from this section of the Exclusive Projects section. -duplicate as 56 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 63, S.no. 59; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-110** — **Dynamic City Tabs** — Add dynamic city tabs on Premium projects where projects are listed. Eg if project in nashik then to show nashik as the city tab. Rename Sponsored to Premium projects _(§ Ongoing plus CRs & New Features, row 64, S.no. 60; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-111** — **Banner Text** — The changes to be made on the banner are - 8000+ properties, 25Mn+ sft of inventory, 28Mn+ sft of demands, 1.5Mn+ sft of Exclusive Inventory, 450+ Brands on landing page. About us - they will give us the copy- 29th July _(§ Ongoing plus CRs & New Features, row 65, S.no. (no S.no.); Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-112** — **City Defaults** — If a user searches for a location without active properties, the system should default to the same city with available inventory, accompanied by a messaging banner. _(§ Ongoing plus CRs & New Features, row 66, S.no. 61; Build: Build 1  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-113** — **Sponsored Projects** — The 'Premium Projects' section must feature dynamic city tabs that only display the specific cities where current premium projects are active. Also rename Sponsored to Premium projects  - duplicate as 60 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 67, S.no. 62; Build: Build 1; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-114** — **Project Filter** — Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects. Also add cities. TBD-Already implemented in UI _(§ Ongoing plus CRs & New Features, row 68, S.no. 63; Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-115** — **Rule** — Pune city - combinations are added. Check City (Metro & Non-metro) tab _(§ Ongoing plus CRs & New Features, row 69, S.no. (no S.no.); Build: Build 1; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-116** — **Control Panel Access** — The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core users. _(§ Ongoing plus CRs & New Features, row 71, S.no. 174; Build: Build 2  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-117** — **V2 Phase 1 Roles** — For the initial launch, enforce strictly three primary administrative roles in the Control Panel: 'Super Admin',  'Admin' and 'Ops User'. _(§ Ongoing plus CRs & New Features, row 72, S.no. 175; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-118** — **Super Admin Privileges** — The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system. _(§ Ongoing plus CRs & New Features, row 73, S.no. 176; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-119** — **Dynamic Role Creation** — The system must include functionality allowing the core admin team to dynamically create new internal users and assign their access permissions across the platform. _(§ Ongoing plus CRs & New Features, row 74, S.no. 177; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-120** — **Admin Login Protocol** — Admin account creation requires a name, email ID, and permissions set. Login operates via email and password. _(§ Ongoing plus CRs & New Features, row 75, S.no. 178; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-121** — **Session Timeout** — Admin sessions must automatically time out after 15 minutes of inactivity for security purposes. _(§ Ongoing plus CRs & New Features, row 76, S.no. 179; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-122** — **Sub-user Management** — Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel. _(§ Ongoing plus CRs & New Features, row 77, S.no. 180; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-123** — **User & Listing Analytics** — Dashboard shows user-level and listing-level aggregates (active agents/tenants/developers/KD; properties/demands/projects by asset class) with clickable drill-downs. _(§ Ongoing plus CRs & New Features, row 78, S.no. 181; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-124** — **Listing Management** — Central listing management to view/edit/activate/deactivate/delete inventory; edit enabled only for Keydemand & Enterprise inventory. _(§ Ongoing plus CRs & New Features, row 79, S.no. 182; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-125** — **User Management CRUD** — Add/edit/deactivate/delete every user persona (Agents, Individual & Enterprise Tenants, Developers, Managed Operators, KD members) with per-persona fields; deactivate/delete cascades to their inventory. _(§ Ongoing plus CRs & New Features, row 80, S.no. 183; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-126** — **Roles & Permissions** — Add control-panel users; assign Super Admin / Admin / Ops roles and toggle module-level permissions (dynamic role creation). _(§ Ongoing plus CRs & New Features, row 81, S.no. 184; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-127** — **Google Analytics** — Show Google Analytics active-user data (Daily / Weekly / Monthly) on the Admin dashboard and user dashboard. **[Marked Phase 2]** _(§ Ongoing plus CRs & New Features, row 82, S.no. 185; Build: Phase 2; Dev: To Do; SIT/QA: To Do)_
- **BR-DEL-128** — **User-Level Metrics** — The Admin dashboard shows user-level counts: Active Agents (Subscribed/Registered), Properties & Demands uploaded by asset class, Active Individual & Enterprise Tenants by asset class, Developers, Managed Operators, Keydemand members, and Google-Analytics active users (Daily/Weekly/Monthly). _(§ Ongoing plus CRs & New Features, row 83, S.no. 186; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-129** — **Listing-Level Metrics** — The Admin dashboard shows listing-level counts: Total Active Properties, Demands and Projects by asset class, with relevancy-across-all, leads, and per-project enquiries received. _(§ Ongoing plus CRs & New Features, row 84, S.no. 187; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-130** — **Developer & Operator Onboarding** — Adding a Developer or Managed-Space Operator captures name, mobile, contact person, cities (multi-select) and asset class (multi-select); their projects are added centrally and assigned a Category (Standard/Premium/Exclusive). _(§ Ongoing plus CRs & New Features, row 85, S.no. 188; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-131** — **Keydemand Member Permissions** — Adding a Keydemand member captures name, mobile, email, designation, home city and assigned cities, plus toggleable front-end permissions - Dashboard, Explore Property/Demand, Post Property/Demand, List of Brokers, My/KD Listings, Assigned/KD Brands & Tenants, Tagged/All Projects, High Value Leads, Notifications & Enquiries (Dashboard + Explore Property are default and non-removable). _(§ Ongoing plus CRs & New Features, row 86, S.no. 189; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-132** — **Enquiry Management** — Admin manages inbound enquiries - Developer enquiries, Managed-Space-Operator enquiries and Enterprise-Solution enquiries - each with user metadata (type, name, mobile, email, timestamp). _(§ Ongoing plus CRs & New Features, row 87, S.no. 190; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-133** — **Bulk Upload** — Existing enterprise brands rarely upload their own requirements manually on the platform. They typically share bulk requirements via Excel with their RM, who uploads them from the Keydemand Admin Control Panel. _(§ Ongoing plus CRs & New Features, row 88, S.no. 191; Build: Build 2  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-134** — **Format/Template Logic** — A 'Format' acts as a template for a brand where the physical attributes remain constant, and only the City and Location act as variables. _(§ Ongoing plus CRs & New Features, row 89, S.no. 192; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-135** — **Format Naming** — Formats must not be named generically. They must be explicitly named according to the brand's specific model. _(§ Ongoing plus CRs & New Features, row 90, S.no. 193; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-136** — **Format - Creation Hierarchy** — When adding a new format in the control panel, the very first mandatory identifier field must be the 'Brand Name'. _(§ Ongoing plus CRs & New Features, row 91, S.no. 194; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-137** — **Demand Auto-Fill** — When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format. _(§ Ongoing plus CRs & New Features, row 92, S.no. 195; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-138** — **Brand Deactivation** — Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately. _(§ Ongoing plus CRs & New Features, row 93, S.no. 196; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-139** — **Brand Reactivation** — If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, not its previously active demands. _(§ Ongoing plus CRs & New Features, row 94, S.no. 197; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-140** — **Bulk Upload** — Support bulk upload (Excel) of properties, demands, projects and enterprise brand formats from the Control Panel. _(§ Ongoing plus CRs & New Features, row 95, S.no. 198; Build: Build 2  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-141** — **Upgrade to Enterprise** — Admin can switch an individual Retail/F&B or Office/Managed tenant into an Enterprise account (multiple sub-users and reusable brand formats). _(§ Ongoing plus CRs & New Features, row 96, S.no. 199; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-142** — **Dashboard Cleanup** — Remove the redundant 'lead management' section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard. _(§ Ongoing plus CRs & New Features, row 98, S.no. 64; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-143** — **Dashboard Subscription Text** — Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., 'Free Plan,' 'Trial Plan,' 'Usage 0 of 1'). _(§ Ongoing plus CRs & New Features, row 99, S.no. 65; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-144** — **Agent Onboarding** — On the Profile page, change the 'Operating City' field to a single-select dropdown using a visual selection layout similar to the landing page city selector. _(§ Ongoing plus CRs & New Features, row 100, S.no. 66; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-145** — **Onboarding Fields** — When an Admin adds an agent, they must input the Name, Mobile Number, Email id, Asset Class, Transaction Type, My City, Company Name, Designation, Experience, WhatsApp - On/Off, Profile Picture _(§ Ongoing plus CRs & New Features, row 101, S.no. 67; Build: Build 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-146** — **Duplicate Click Prevention** — Prevent multiple clicks by the same user on a single property from incrementing the view count. Display an 'Already requested' message. _(§ Ongoing plus CRs & New Features, row 102, S.no. 68; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-147** — **Image Requests** — When a user requests locked images, they must be logged in. This action shares their phone number with the listing owner. _(§ Ongoing plus CRs & New Features, row 103, S.no. 69; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-148** — **Transparency** — The agent's name must be displayed whenever they post a property or demand. (Posted By) _(§ Ongoing plus CRs & New Features, row 104, S.no. 70; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-149** — **Configurable Permissions** — Admins can selectively toggle a keydemand team's ability to explore demands, post properties/demands, access broker management, view Key Demand listings, and view assigned enterprise brands. _(§ Ongoing plus CRs & New Features, row 105, S.no. 71; Build: Build 3  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-150** — **No City Deletion** — The ability to 'Delete' a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts. _(§ Ongoing plus CRs & New Features, row 106, S.no. 72; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-151** — **Detailed invoice reference** — https://propvantageproptech-my.sharepoint.com/:i:/g/personal/himanshu_keydemand_in/IQCdv3TM1wvCQaoKJpxeqDVGAYNkTp1DCjnz0AYadc9tUko?e=r8L0bk https://acrobat.adobe.com/id/urn:aaid:sc:AP:64a69ad3-99e7-4c9c-896b-b71da9128a4f _(§ Ongoing plus CRs & New Features, row 107, S.no. (no S.no.); Build: Build 3  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-152** — **Brand Name Display** — For Brands and Office Tenants- The company/brand name must be displayed when they post a demand. _(§ Ongoing plus CRs & New Features, row 108, S.no. 155; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-153** — **Limits** — Both brands and tenants can view up to 5 phone numbers before being prompted for enterprise solutions. _(§ Ongoing plus CRs & New Features, row 109, S.no. 156; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-154** — **Brand Name Display (same rule as Sno 161)** — For Brands and Office Tenants, the company/brand name must be displayed when they post a demand. _(§ Ongoing plus CRs & New Features, row 110, S.no. 157; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-155** — **Enterprise Restrictions** — Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. _(§ Ongoing plus CRs & New Features, row 111, S.no. 158; Build: Build 3  + Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-156** — **Complimentary Access** — At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users. _(§ Ongoing plus CRs & New Features, row 112, S.no. 73; Build: Build 3; Dev: To Do; SIT/QA: To Do)_
- **BR-DEL-157** — **Subscription Billing** — Automatically provide GST invoices to users after they subscribe. _(§ Ongoing plus CRs & New Features, row 113, S.no. 74; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-158** — **Subscription/Payment Flow** — Implement the Razorpay component embedded into a dedicated native page (instead of a direct API popup). _(§ Ongoing plus CRs & New Features, row 114, S.no. 75; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-159** — **Subscription Status** — Unsubscribed agents must see a 'Trial Plan' label with the free listing offer. Paid users should be tagged as 'Pro Member'. _(§ Ongoing plus CRs & New Features, row 115, S.no. 76; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-160** — **Complimentary Access** — Admins have the capability to assign zero-charge subscriptions to agents from the backend. _(§ Ongoing plus CRs & New Features, row 116, S.no. 77; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-161** — **Pricing Updates** — Price changes made by Admins via the Control Panel must reflect on the front end immediately. _(§ Ongoing plus CRs & New Features, row 117, S.no. 78; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-162** — **Tier Management** — Admins can edit subscription prices and add new cities to specific categorizations. _(§ Ongoing plus CRs & New Features, row 118, S.no. 79; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-163** — **Auto-Renewal** — Subscriptions should default to manual renewal unless the user explicitly opts into auto-renewal during checkout. _(§ Ongoing plus CRs & New Features, row 119, S.no. 80; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-164** — **Billing Cycle Impact** — For active users, updated subscription prices will only take effect and bill starting from their next billing cycle. _(§ Ongoing plus CRs & New Features, row 120, S.no. 81; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-165** — **Indicative Cities Protection** — Existing indicative cities pre-populated within the tiers must not be removed from their respective categories. _(§ Ongoing plus CRs & New Features, row 121, S.no. 82; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-166** — **Asset Class Selection** — The asset class is pre-selected based on the user's registration. _(§ Ongoing plus CRs & New Features, row 122, S.no. 159; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-167** — **Asset Class Notification** — If a user explores the other asset class within their allowed set (Retail <-> F&B, office), notify them that they are viewing a different asset class but allow them to continue. _(§ Ongoing plus CRs & New Features, row 123, S.no. 160; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-168** — **Discovery Logic** — While registering the user can post and say that I am interested in Managed offices and ticks the button. The outcome to this triggers a notification to Keydemand team with this user info as lead   Journey 2   Upon registration the user still has a demand to post for office. The user cannot post Managed offices demand  neither tick the box to inform that it's a managed offices requirement.   Hence we will give him an option to post both offices and managed offices too **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 124, S.no. 161; Build: Build 3; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-169** — **Registered Asset Class** — Regardless of search or activity, the user's pre-selected asset class remains their registered one. _(§ Ongoing plus CRs & New Features, row 125, S.no. 162; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-170** — **Posting Restrictions** — A Retail brand cannot post F&B demands, and vice versa. They can see properties outside their asset class, but they cannot post them. _(§ Ongoing plus CRs & New Features, row 126, S.no. 163; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-171** — **Office and Managed Office Tenant- Posting Permissions** — Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space. By default, an "office" account can post only office spaces but can post managed space office too. However, when the "manage space" checkbox is ticked during registration of office tenant— Keydemand team will receive an alert about the user interested in Managed Office Space if someone opts to click during office registration. The Office demand will be posted from their account. The user can then be able to post both office demand & managed space demand. <br> _(§ Ongoing plus CRs & New Features, row 127, S.no. 164; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-172** — **Discovery Logic** — Office Tenants and Managed Space Tenants can explore both Managed Space and Office properties. _(§ Ongoing plus CRs & New Features, row 128, S.no. 165; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-173** — **Brand - Exploring Properties** — Retail & F&B brands (Individual AND Enterprise) can explore Retail, F&B, office- NOT Managed Space. F&B explores F&B + Retail, office _(§ Ongoing plus CRs & New Features, row 129, S.no. 166; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-174** — **Tenant - Exploring Properties** — Office can explore Office and Managed Space and Managed Space can explore Office and Managed Space. -repeat of 165 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 130, S.no. 167; Build: Build 3; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-175** — **Brand - Posting Demands** — They can post only on their Asset Classes. _(§ Ongoing plus CRs & New Features, row 131, S.no. 168; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-176** — **Tenant - Posting Permissions** — Office Tenants can post Office and Managed Space but Managed Space can post only Managed Space - repeat of 164 **[Struck out as DUPLICATE in source — not a live rule]** _(§ Ongoing plus CRs & New Features, row 132, S.no. 169; Build: Build 3; Dev: Duplicate; SIT/QA: Duplicate)_
- **BR-DEL-177** — **Managed Office Operators** — Managed office operators will be treated identically to 'Developers' on the Keydemand platform. They will not log into the platform directly; Keydemand teams will collect details offline and manually upload them. _(§ Ongoing plus CRs & New Features, row 133, S.no. 170; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-178** — **Project Classification** — Inventory provided by managed operators (centers/hubs) will be classified as 'Projects' rather than standard property inventory. _(§ Ongoing plus CRs & New Features, row 134, S.no. 171; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-179** — **High-Value Routing** — Introduce 'Managed Space' as a new asset class entirely nested under the 'Projects' structure rather than standard property inventory. Restrict the transaction options for Managed Space projects strictly to 'Lease'. _(§ Ongoing plus CRs & New Features, row 135, S.no. 172; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-180** — **Project & Category Management** — Add Developer & Managed-Space projects, assign KD members and set Category (Standard / Premium / Exclusive). _(§ Ongoing plus CRs & New Features, row 136, S.no. 173; Build: Build 3; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-181** — **Onboarding & Authentication** — Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP. _(§ Ongoing plus CRs & New Features, row 138, S.no. 83; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-182** — **Role-Based Access** — Account creation is strictly permission-based; specific privileges are managed via the admin portal. _(§ Ongoing plus CRs & New Features, row 139, S.no. 84; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-183** — **Profile Management** — The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend. _(§ Ongoing plus CRs & New Features, row 140, S.no. 85; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-184** — **Dashboard** — Apply the color hues, hover effects, and overall visual accents from the existing Agent mobile app to the Keydemand web dashboard to ensure uniformity. _(§ Ongoing plus CRs & New Features, row 141, S.no. 86; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-185** — **Team Inventory Capabilities** — Keydemand members can view the inventory of other team members within their 'Listings' dashboard, but they are strictly restricted to editing only their own self-listings. _(§ Ongoing plus CRs & New Features, row 142, S.no. 87; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-186** — **Backup Coordination** — If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline. _(§ Ongoing plus CRs & New Features, row 143, S.no. 88; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-187** — **Immediate Dashboard Redirect** — Keydemand users must be redirected straight to their Dashboard immediately upon logging in. _(§ Ongoing plus CRs & New Features, row 144, S.no. 89; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-188** — **Dashboard Routing Logic** — Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics. _(§ Ongoing plus CRs & New Features, row 145, S.no. 90; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-189** — **Interactive Drill-Downs** — All aggregate metrics on the Dashboard must be clickable, leading to a granular, filtered list view of the items being counted. _(§ Ongoing plus CRs & New Features, row 146, S.no. 91; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-190** — **Filters & Sorting** — The dashboard must include comprehensive filtering and sorting options. _(§ Ongoing plus CRs & New Features, row 147, S.no. 92; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-191** — **Hamburger Menu** — Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. _(§ Ongoing plus CRs & New Features, row 148, S.no. 93; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-192** — **Rule** — Implement sticky headers for filters/sorts and a blur effect for side navigation when users scroll through project listings. Add a "Go to Top" button for quick navigation on long listing pages. _(§ Ongoing plus CRs & New Features, row 149, S.no. 94; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-193** — **Custom Side-Menu** — A custom side-menu for internal users must bypass standard filters and segment views into 'My' vs. 'Overall'. _(§ Ongoing plus CRs & New Features, row 150, S.no. 95; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-194** — **Account-Level Assignment** — An RM is assigned at the overarching entity/account level for a specific city. _(§ Ongoing plus CRs & New Features, row 151, S.no. 96; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-195** — **Cross-Collaboration** — While leads are assigned to specific RMs, other team members can view these leads under the 'Others' or 'All' tabs. _(§ Ongoing plus CRs & New Features, row 152, S.no. 97; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-196** — **Posted By Transparency** — To external audiences, internal demands/properties display as 'Keydemand.' However, internally, the team will see the specific name of the uploading team member. _(§ Ongoing plus CRs & New Features, row 153, S.no. 98; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-197** — **Exclusive Indicators** — If a demand is managed exclusively by Keydemand, the 'Self-View' and explore demand screens must explicitly indicate 'Keydemand Team'. _(§ Ongoing plus CRs & New Features, row 154, S.no. 99; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-198** — **Hidden Image Protocols** — If a listing owner selects 'Do not show images', external users cannot view them. However, Keydemand teams can always see these images. _(§ Ongoing plus CRs & New Features, row 155, S.no. 100; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-199** — **Thumbnail Rule** — The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view. _(§ Ongoing plus CRs & New Features, row 156, S.no. 101; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-200** — **Image Request CTA** — To prevent sourcing conflicts, the 'View Image Request' CTA button must be completely removed for Keydemand users when they view external agent properties. _(§ Ongoing plus CRs & New Features, row 157, S.no. 102; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-201** — **Relevancy Matching Scope** — Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands. _(§ Ongoing plus CRs & New Features, row 158, S.no. 103; Build: Build 4; Dev: Completed; SIT/QA: In-Progress)_
- **BR-DEL-202** — **Demand Exploration** — The Keydemand team is the only party authorized to explore demands. Specifically, 'Managed Space' demands are visible exclusively to Keydemand. _(§ Ongoing plus CRs & New Features, row 159, S.no. 104; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-203** — **My Listings CRUD** — Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted. _(§ Ongoing plus CRs & New Features, row 160, S.no. 105; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-204** — **Colleague Data** — Properties and demands posted by other Key Demand team members must be strictly 'Read-Only' for colleagues. _(§ Ongoing plus CRs & New Features, row 161, S.no. 106; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-205** — **Default Permissions** — Dashboard' access and 'Explore Property' access must be set as default, non-removable permissions for all new Key Demand users. _(§ Ongoing plus CRs & New Features, row 162, S.no. 107; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-206** — **Editing Limits** — Editing capabilities within the Listing Management Control Panel should only be enabled for 'Keydemand' and 'Enterprise' inventory. _(§ Ongoing plus CRs & New Features, row 163, S.no. 108; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-207** — **Dashboard Breakdown** — The dashboard must calculate the total aggregate of enterprise users and segment them into: Assigned to Me, Assigned to Others, Sub-Category Itemization. _(§ Ongoing plus CRs & New Features, row 164, S.no. 109; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-208** — **Posting Restrictions** — Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload. _(§ Ongoing plus CRs & New Features, row 165, S.no. 110; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-209** — **CRM Pipeline** — The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. **[Marked Phase 2]** _(§ Ongoing plus CRs & New Features, row 166, S.no. 111; Build: Phase 2; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-210** — **Lead Statusing** — Leads for Enterprise Brand Clients are strictly categorized as Approved, Rejected, or Open. _(§ Ongoing plus CRs & New Features, row 167, S.no. 112; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-211** — **Alerting & Highlights** — New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page. _(§ Ongoing plus CRs & New Features, row 168, S.no. 113; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-212** — **Metric Definition** — The 'User Contacted' metric must increment exclusively when the 'View Phone Number' button is clicked. _(§ Ongoing plus CRs & New Features, row 169, S.no. 114; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-213** — **Direct Contact CTAs** — The Keydemand team does not need to use 'Request Phone Number' workflows for relevant demands; they are provided with an explicit 'View Phone Number' CTA. _(§ Ongoing plus CRs & New Features, row 170, S.no. 115; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-214** — **Outbound Contact Logs** — Properties Contacted' logs for Enterprise clients must capture the Property ID, and the exact date of contact for audit purposes. _(§ Ongoing plus CRs & New Features, row 171, S.no. 116; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-215** — **Lead Access Audit Trail** — Clicking the 'View Requirement' CTA unlocks the lead's mobile number and automatically updates the 'Viewed' status with a timestamp. _(§ Ongoing plus CRs & New Features, row 172, S.no. 117; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-216** — **Accountability Tracking** — A 'Viewed by' column must maintain a timestamped log of exactly which Keydemand team member accessed a lead. _(§ Ongoing plus CRs & New Features, row 173, S.no. 118; Build: Build 4; Dev: To Do; SIT/QA: To Do)_
- **BR-DEL-217** — **Project Addition** — Projects can only be added strictly via the backend control panel by the Admin team. _(§ Ongoing plus CRs & New Features, row 174, S.no. 119; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-218** — **Project Categorization** — Projects must be sorted by 'Category' (Standard, Premium, Exclusive) within the tables. _(§ Ongoing plus CRs & New Features, row 175, S.no. 120; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-219** — **Exclusive Project** — The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated 'Exclusive' projects. _(§ Ongoing plus CRs & New Features, row 176, S.no. 121; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-220** — **Enquiry Granularity** — All project lists must support a drill-down for 'Enquiries Received,' capturing user metadata. _(§ Ongoing plus CRs & New Features, row 177, S.no. 122; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-221** — **Side-Menu Structure** — The Keydemand side-menu lists Dashboard, My Profile, Listings (My/KD), Projects (Assigned/All), Brands & Tenants (Assigned/All), High Value Leads (Assigned/All), Notifications, Enquiries, Saved/Shortlisted, List of Brokers and Sign out. _(§ Ongoing plus CRs & New Features, row 178, S.no. 123; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-222** — **Profile & Permissions** — My Profile shows the user's info (name, number, email, photo) and the roles & permissions assigned for that user type. _(§ Ongoing plus CRs & New Features, row 179, S.no. 124; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-223** — **Aggregate Metrics (My vs Overall)** — The dashboard shows Active Properties, Active Demands, Projects, Enterprise Users and High-Value Leads - each split into My vs Overall (KD) - with every count clickable to a filtered list. _(§ Ongoing plus CRs & New Features, row 180, S.no. 125; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-224** — **Lead / Enquiry Definitions** — Leads Received (inbound) = Image Requests + My-Contact-Viewed; Enquiries Sent (outbound) = Users Contacted + Images seen+ Projects Enquired _(§ Ongoing plus CRs & New Features, row 181, S.no. 126; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-225** — **Saved / Shortlisted** — Keydemand users can save/shortlist Properties, Demands and Projects and review them under a Saved/Shortlisted section. _(§ Ongoing plus CRs & New Features, row 182, S.no. 127; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-226** — **Agent RM View** — Build a dedicated internal 'agent relationship manager' view allowing designated Keydemand staff to track the specific platform actions of the external brokers they have personally onboarded. _(§ Ongoing plus CRs & New Features, row 183, S.no. 128; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-227** — **Broker Monitoring View** — A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers. _(§ Ongoing plus CRs & New Features, row 184, S.no. 129; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-228** — **BRM Persona** — A new Keydemand User-Portal persona - the Broker Relationship Manager (BRM) - can access ALL External Subscribed Brokers (Property Agents) and their activity to address broker concerns. Acts as the relationship owner for external brokers. _(§ Ongoing plus CRs & New Features, row 185, S.no. 130; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-229** — **Broker Directory** — BRM sees a consolidated directory of external subscribed brokers with subscription status, city, registration date and source/mode. _(§ Ongoing plus CRs & New Features, row 186, S.no. 131; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-230** — **Broker Metrics Drill-down** — For each broker, BRM can view properties & demands added, leads received, relevancies, contacts made, missed calls and ignored image requests. _(§ Ongoing plus CRs & New Features, row 187, S.no. 132; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-231** — **Read-only Oversight** — BRM access is read-only; the BRM cannot edit or delete a broker's listings/demands. The view exists purely to monitor activity and resolve broker concerns/complaints. _(§ Ongoing plus CRs & New Features, row 188, S.no. 133; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-232** — **BRM Permission** — The BRM capability is a permission assigned from the Admin Control Panel to designated Keydemand users; scope can be all brokers or only those they personally onboarded. _(§ Ongoing plus CRs & New Features, row 189, S.no. 134; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-233** — **High-End Demands Logic** — Agents are restricted from viewing demands that fall within city-specific high-ticket thresholds (HVLs). _(§ Ongoing plus CRs & New Features, row 190, S.no. 135; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-234** — **Massive Demand Bypass** — If an external agent posts a massive demand (e.g., >10,000 sq ft in Bangalore), it bypasses the 'Keydemand exclusive' block and becomes visible to other agents. _(§ Ongoing plus CRs & New Features, row 191, S.no. 136; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-235** — **Grid Toggles** — Dashboards must feature a dedicated switch to toggle between 'High-Value' and 'Standard' inventory views. _(§ Ongoing plus CRs & New Features, row 192, S.no. 137; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-236** — **HVL Definition** — Requirements exceeding specific size thresholds are classified as HVLs. The Admin must have controls in the panel to define and edit these square footage limits. _(§ Ongoing plus CRs & New Features, row 193, S.no. 138; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-237** — **Cross-Asset Application** — HVL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes. _(§ Ongoing plus CRs & New Features, row 194, S.no. 139; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-238** — **Exclusion** — Day-to-day operational requirements posted by existing, onboarded enterprise brands are not categorized as high-value leads. _(§ Ongoing plus CRs & New Features, row 195, S.no. 140; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-239** — **Standard Leads** — If a new inquiry falls below the high-value threshold, it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents. _(§ Ongoing plus CRs & New Features, row 196, S.no. 141; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-240** — **Tier 1 vs. Tier 2 Routing** — HVL restrictions only apply to Tier 1 markets. Leads in Tier 2 cities bypass this and remain open to all agents. _(§ Ongoing plus CRs & New Features, row 197, S.no. 142; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-241** — **Exclusive Routing** — HVLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents. _(§ Ongoing plus CRs & New Features, row 198, S.no. 143; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-242** — **Global Access** — While notifications for a new HVL are localized to the assigned city members, all Keydemand team members possess global access to view HVLs pan-India. _(§ Ongoing plus CRs & New Features, row 199, S.no. 144; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-243** — **Manual Unlock Valve** — If the Keydemand team cannot service an HVL within a specific timeframe, Admins can manually 'unlock' the requirement. _(§ Ongoing plus CRs & New Features, row 200, S.no. 145; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-244** — **Agent-Added Exemption** — Demands posted directly by agents bypass HVL restrictions entirely and remain visible to other agents via relevancy matching. _(§ Ongoing plus CRs & New Features, row 201, S.no. 146; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-245** — **HVL Unopened Marker** — Unopened leads must be visually marked with a red dot in the platform. _(§ Ongoing plus CRs & New Features, row 202, S.no. 147; Build: Build 4; Dev: Completed; SIT/QA: In-Progress)_
- **BR-DEL-246** — **HVL Unlock Notification** — If the KD team unlocks an HVL requirement, the system must notify agents who possess relevant properties based on relevancy matching. _(§ Ongoing plus CRs & New Features, row 203, S.no. 148; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-247** — **HVL Notification Mediums** — Notifications for new leads must go out via both email and WhatsApp to the assigned users. _(§ Ongoing plus CRs & New Features, row 204, S.no. 149; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-248** — **HVL Customization** — The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned KD team members. _(§ Ongoing plus CRs & New Features, row 205, S.no. 150; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-249** — **Visibility Rules 1** — All KD team members must be able to access all high-value leads. _(§ Ongoing plus CRs & New Features, row 206, S.no. 151; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-250** — **Notifications** — Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a relevant property matching the demand. _(§ Ongoing plus CRs & New Features, row 207, S.no. 152; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-251** — **Demand Size Limit** — The system must hide high-sq-ft demands from standard users/agents and route them directly to the Keydemand team. _(§ Ongoing plus CRs & New Features, row 208, S.no. 153; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-252** — **Size Configuration** — The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city. _(§ Ongoing plus CRs & New Features, row 209, S.no. 154; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-253** — **Notification Filtering** — Notifications must be segmentable, allowing users to filter by specific triggers such as "All leads for my listings," "Tagged projects," or "Relevancies". _(§ Ongoing plus CRs & New Features, row 210, S.no. 200; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-254** — **Enquiry Routing Logic** — The system must automate routing based on the specific interaction type (e.g., direct developer enquiries, enterprise conversion prompts, or support requests) _(§ Ongoing plus CRs & New Features, row 211, S.no. 201; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-255** — **Mobile UI Abbreviations** — To prevent text wrapping issues on mobile screens, internal team dashboards can utilize abbreviations (e.g., "KD" instead of "Keydemand Properties") subject to final UX review. <br> _(§ Ongoing plus CRs & New Features, row 212, S.no. (no S.no.); Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-256** — **Card-Based Interface** — Horizontal scrolling tables are prohibited on mobile; all list data must use a card/thumbnail layout. _(§ Ongoing plus CRs & New Features, row 213, S.no. 202; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-257** — **Dual Navigation** — Provide both a 'Back' button (previous screen) and a 'Close' button (global exit to dashboard) on nested screens. _(§ Ongoing plus CRs & New Features, row 214, S.no. 203; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-258** — **Persistent Search Bar** — Lock a persistent search & filter bar to the top of any paginated / scrollable list screen so search context is not lost. _(§ Ongoing plus CRs & New Features, row 215, S.no. 204; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-259** — **Visible Contact on Cards** — Display the agent/user phone number directly on top-level UI cards, immediately below the name. _(§ Ongoing plus CRs & New Features, row 216, S.no. 205; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-260** — **Regional Info Button** — Posting a property >> while uploading images should have sample images shown for user to understand - repeat of 13 _(§ Ongoing plus CRs & New Features, row 217, S.no. 206; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-261** — **Firebase Integration** — Integrate Firebase for Crashlytics (crash reporting) and in-app push notifications. _(§ Ongoing plus CRs & New Features, row 218, S.no. 207; Build: Build 4; Dev: In-Progress; SIT/QA: In-Progress)_
- **BR-DEL-262** — **Privacy Policy Action** — The Privacy Policy must immediately append a conditional scope clause into the Privacy Policy detailing potential future chatbot integrations. _(§ Ongoing plus CRs & New Features, row 219, S.no. 208; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-263** — **Grievance Officer- Terms and Conditions** — Appoint and clearly display the contact details for a Grievance Officer, satisfying both DPDP and GDPR mandates. Is it to be put in Terms and Conditions? who will be doing it? _(§ Ongoing plus CRs & New Features, row 220, S.no. 209; Build: Build 4; Dev: In-Progress; SIT/QA: Completed)_
- **BR-DEL-264** — **Event Tracking** — Implement strict event tracking to monitor user behaviour when they encounter hidden images to support A/B testing and funnel analysis. _(§ Ongoing plus CRs & New Features, row 221, S.no. 210; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-265** — **Privacy Policy** — A conditional scope clause detailing potential future chatbot integrations must be added to the Privacy Policy immediately. - Same as 208 _(§ Ongoing plus CRs & New Features, row 222, S.no. 211; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-266** — **Attribution Tracking** — User acquisition sources (e.g., Organic vs. Paid) will be tracked using the user's phone number as the primary source of truth. _(§ Ongoing plus CRs & New Features, row 223, S.no. 212; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-267** — **Data Residency (India-only)** — All data storage and sub-processors are India-resident (MongoDB Atlas India, AWS ap-south-1, MSG91/Interakt/Razorpay); no overseas data transfer in Phase 1. _(§ Ongoing plus CRs & New Features, row 224, S.no. 213; Build: Build 4; Dev: Completed; SIT/QA: Completed)_
- **BR-DEL-268** — **Automated Migration** — All active V1 users must be automatically migrated to the new V2 platform. _(§ Ongoing plus CRs & New Features, row 225, S.no. 214; Build: Build 4; Dev: In-Progress; SIT/QA: In-Progress)_
- **BR-DEL-269** — **No Phase 1 Chatbot** — A live chatbot is NOT a mandatory feature and will not be built or integrated for the Phase 1 launch (deferred to a later phase). **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 227, S.no. 215; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-270** — **Granular Permissions** — Highly granular, module-level permission toggles must be deferred to Phase 2 development to prevent over-engineering. **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 228, S.no. 216; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-271** — **Future Phase** — In a future release phase, Keydemand users will be permitted to add projects and developers directly. **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 229, S.no. 217; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-272** — **Content Management (Phase 2)** — Admin-managed content - Keydemand statistics, About Us, FAQ, Terms & Conditions, Privacy Policy, Banners, Clients and Testimonials - is deferred to a later phase. **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 230, S.no. 218; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-273** — **Maintenance Page (Phase 2)** — A configurable 'Site Down' / maintenance page is deferred to a later phase. **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 231, S.no. 219; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-274** — **Future Phase** — CRM Pipeline (Lite): The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. It also logs the assigned representative and the last activity date.(Phase 2) **[Deferred / Phase 2 — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 232, S.no. 220; Build: —; Dev: To Do; SIT/QA: —)_
- **BR-DEL-275** — **Rule** — Boost property/project for extra money. Can be pushed on top. **[Deferred / Phase 2 section — not in Phase 1 scope]** _(§ Ongoing plus CRs & New Features, row 233, S.no. (no S.no.); Build: —; Dev: —; SIT/QA: —)_

Environment / UAT Links tab:
- **BR-DEL-276** — UAT user app is https://uat-v2.keydemand.in; login = phone number + OTP (static seed OTP [REDACTED-credential]) for all seed users from 04-users.seed.ts plus the enterprise brand seeded on UAT. _(§ UAT Links R1-R3)_
- **BR-DEL-277** — UAT Admin (Control Panel) is https://admin-uat-v2.keydemand.in; admin logins are email + password for sudhanshu@, nitesh@, k.iyer@, himanshu@keydemand.in and pradeepa.pv@futuristglobal.com. _(§ UAT Links R19-R27)_
- **BR-DEL-278** — UAT Enterprise Brand (retail) seed user (919900000009) has unlimited contact unlocks. _(§ UAT Links R14)_
- **BR-DEL-279** — A managed_space_operator with kdOnboardingStatus pending is gated at login (403) and sees a "pending review" screen; an approved developer/operator can log in. _(§ UAT Links R45, R44, R47)_
- **BR-DEL-280** — In DEV the OTP is bypassed (static OTP); DEV web, admin-ui, API (CloudFront) and ALB debug URLs are as listed; API docs at /api/v2/docs. _(§ UAT Links R37, R49-R54)_
- **BR-DEL-281** — Seed persona states: agent Amit Patel subscribed with PAN-India retail+office coverage; brand Rajesh Kumar asset-class-locked (searchAssetScope); office tenant Vikram Mehta interestedInManagedSpace; occupier Sara Khan 25 seats Mumbai; KD Anita Verma kdRole rm with KD-bypass on restricted projects. _(§ UAT Links R40-R46)_

### Open questions / ambiguities in this doc
- CR S.no. 20 (row 24) RERA: "Add an optional field … Before it was this - Add a mandatory field" — but Effort Summary group 1 still says "mandatory project-level RERA" and Delivery Tracker Build 1 lists "RERA". Which is final? (Register wording = optional.)
- CR S.no. 10 (row 13) OC status = 4 terms "Received, Applied, Not Available, Under Construction" vs Effort Summary R4 "Available / Not available / Under construction" (3 terms).
- CR S.no. 27 (row 31) "No separate DOB field or checkbox is required" vs Effort Summary R5 / Delivery Tracker R6 "18+ consent tick" and the struck-out S.no. 31 (exact phrase 'by continuing you confirm you are 18 years and above' and a tick).
- CR S.no. 30 (struck out, "WRONG") says remove email from registration; Effort Summary R5 says "remove the email field and profile-picture from the register form"; S.no. 35 says email mandatory for Brands and Office Tenants. Is the email field on the registration form or only on the profile?
- CR S.no. 15 Image Shuffling: "Needs discussion. and immediately implement." In-Progress; wording ("For enterprise demands the UI should should use end use images") differs from DEV tab ("shuffle between a pool of five high-quality asset-class images") and Effort Summary ("image shuffling for logo-less demands").
- CR S.no. 55 pre-wall free-listing popup is "Phase 2 / To Do — Not doing it now we will discuss", but Delivery Tracker Build 1 and Effort Summary group 3 still list "a pre-wall '1 free listing' incentive". S.no. 51 ('1 free listing' pop-up on Agent Home) is Completed.
- CR S.no. 56 removes city tabs from Exclusive Projects and S.no. 60 adds dynamic city tabs on Premium projects (rename Sponsored → Premium), but Effort Summary R6 says "dynamic sponsored & exclusive city tabs".
- CR S.no. 166: Retail & F&B brands "can explore Retail, F&B, office- NOT Managed Space" vs Delivery Tracker R8 / Effort Summary R13 "Retail & F&B explore Retail+F&B only".
- CR S.no. 159 and 162 remarks: "It is not necessary, as agent has the option to select and brands are pre selected" — rule kept as Completed; unclear whether it applies to agents.
- CR S.no. 164 (Office tenant posting) is long and internally contradictory: "By default, an 'office' account can post only office spaces but can post managed space office too" and "only when the box is ticked, can the person post both office and managed space" (remarks).
- CR S.no. 111 CRM Pipeline is labelled "Phase 2" in Build Number but status Completed/Completed; S.no. 220 (Deferred) repeats CRM Pipeline (Lite) as Phase 2 To Do; Effort Summary group 6 includes CRM-lite stages in Phase 1.
- CR S.no. 185 Google Analytics on Admin dashboard = Phase 2 ("Google analytics added to the App. But in admin will be done in Phase 2"), while S.no. 186 (Completed) lists "Google-Analytics active users (Daily/Weekly/Monthly)" among Admin dashboard metrics, and Effort Summary group 12 includes it.
- CR S.no. 118 'Viewed by' audit trail = To Do ("It is not critical."), while Delivery Tracker Build 4 and Effort Summary group 6 promise a "viewed-by audit trail".
- CR S.no. 73 complimentary 3-month Pan-India access = To Do ("Business has access to the dashboard. THey will assign to people if needed"); S.no. 214 Automated Migration = In-Progress ("Only routing and selected migration . Client will do internal. only few agents will be done by" — sentence is cut off in the source). Delivery Tracker R12 says the 23-Oct cutover "migrates all V1 users with 3 months complimentary Pan-India access".
- CR S.no. 207 Firebase: In-Progress, remark "Crashlytics is not needed some 3rd party needed." vs Effort Summary R17 / Delivery Tracker R9 (Firebase Crashlytics + push).
- CR S.no. 209 Grievance Officer: "Is it to be put in Terms and Conditions? who will be doing it?" (Dev In-Progress, SIT Completed).
- CR S.no. 43 Phone Number Disclosure: "Are terms condition specify clause for consent? Also check remarks column" (remarks column is empty).
- CR S.no. 22 Legacy Data: "NOT CLEAR. CAN BE REMOVED" (struck out).
- CR S.no. 63 Project Filter: "TBD-Already implemented in UI".
- CR S.no. 1 Empty Fields: remark "Kept it for testing purpose. will remove towards the end" — unclear what will be removed.
- CR S.no. 103 Relevancy Matching Scope and S.no. 147 HVL Unopened Marker: Dev Completed but SIT/QA In-Progress.
- CR S.no. 163 (row 126) has an extra unlabelled cell "to be done" although both statuses are Completed.
- CR row 107 "Detailed invoice reference" remark: "User adding GST information, company name. Also able to change it during the next payment as well. Check Claude payment how it allows to change the name on the invoice" — open design item; references SharePoint/Acrobat/Teams links.
- CR S.no. 156 limit is 5 phone numbers; hidden DEV tab remark "5 done but text is telling 3- Text change is to be done."
- CR S.no. 175 roles 'Super Admin', 'Admin', 'Ops User' vs SIT env doc roles Super Admin / Admin / Contributor.
- CR S.no. 216 defers "highly granular, module-level permission toggles" to Phase 2, yet S.no. 184 (Completed) says "toggle module-level permissions (dynamic role creation)" and S.no. 189 lists toggleable front-end permissions.
- CR S.no. 172 is titled "High-Value Routing" but its content is the Managed Space asset-class / Lease-only rule (label mismatch).
- CR S.no. 206 is titled "Regional Info Button" but its text is the sample-images rule ("repeat of 13").
- Effort Summary R2 calls BRM "Group 6A" but the table numbers it group 7.
- Delivery Tracker: UAT row dated 05 Oct - 16 Oct 2026 yet described as "rolling from Build 2" (Build 2 ends 28 Aug); stage 6 (21 Sep - 02 Oct) overlaps Build 4 (14 Sep - 25 Sep); intro says "All dates follow the Dates column above" though the column is below.
- Delivery Tracker R22 refers to "the Build-6 SIT stage" — stage 6 is not a build.
- Effort Summary R22-R24 (Migration, DevOps, Security) have Totals (2.0, 2.0, 1.0) but no per-owner breakdown.
- Delivery Plan link register R12 "Keydemand Team 30062026 - Final - Dashboard" and R11 have no usable link; R45 link has no name; FAQ link (R55) is UNREADABLE.

### Hidden tab "DEV - Ongoing plus CRs & New Fe"  [HISTORY — superseded by tab "Ongoing plus CRs & New Features"]
**Source:** same xlsx, sheet6 (state = hidden), defined range A1:AC830, populated rows 1-301 · read coverage: 100%.

It is an earlier working copy of the Requirements Register with the same rows. Header differences: column A is "Sno" (main: "S.no."), column K is "SIT/UAT/QA Status" (main: "SIT/QA Status"); R1 additionally links the CR source document https://docs.google.com/document/d/1i6udGwW4Im-tFr_ZUJvNRhoug6QN_o70dK4k9y_4cSU/edit?tab=t.0#heading=h.vyc71u2ak935. The DEV copy carries older statuses (many "To Do"/"In-Progress" where the main tab now says "Completed"), developer remarks (some in column Y), and a coverage note at rows 283-301. The "Milestone Date Cutoff" values are identical.

#### Differences vs authoritative version
- ONLY in DEV, row 6: "3.0 | WebApp + MobileApp | Property, Project and Demand Fields, Validation & Logic | Validation Logic | Trigger an explicit error for incomplete email addresses or mandatory fields. The system must visually highlight the missing section and guide the user to it. | Build 1 | 07-Aug-2026 | Completed | Completed"
- DEV row 7 (main row 7, S.no. 4 Redirection): Remarks: '' (main) vs 'Implemented by highlighting the fields that needs to be filled' (DEV)
- DEV row 8 (main row 8, S.no. 5 PDF Download): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Build 4' (DEV)
- DEV row 12 (main row 12, S.no. 9 Demand Posting): col Y: '' (main) vs 'Not covered in build 1' (DEV)
- DEV row 13 (main row 13, S.no. 10 OC Supply Standardization): col Y: '' (main) vs 'Need clarifications' (DEV)
- DEV row 14 (main row 14, S.no. 11 Draft Auto-Save): col Y: '' (main) vs 'Need time for UX' (DEV)
- DEV row 15 (main row 15, S.no. 12 Brand Image Display): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Profile pic/logo has been implemented in the frontend. Dependancy on build 4 w.r.t brand logo management.' (DEV); col Y: '' (main) vs 'Dependent on Sathish' (DEV)
- ONLY in DEV, row 19: "15.0 | WebApp + MobileApp | Image Shuffling | For demands without brand logos, the UI should shuffle between a pool of five high-quality asset-class images to maintain a dynamic look. | Build 1  / Build 4 | 07-Aug-2026 | In-Progress | In-Progress | Build 4"
- DEV row 25 (main row 25, S.no. 21 Leads Renaming): Remarks: '' (main) vs 'Need to think of a better ux for dashboard.' (DEV)
- DEV row 38 (main row 38, S.no. 34 Email Field Validation): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Need some discussion on domain restrictions. (Satish)' (DEV)
- DEV row 40 (main row 40, S.no. 36 Immediate Lead Capture): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Not functioning as expected (John)' (DEV)
- DEV row 44 (main row 44, S.no. 40 Google Maps Integration): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Need improvement on this - Build 4(Satish)' (DEV)
- DEV row 51 (main row 51, S.no. 47 Internal Action): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Not functioning as expected (John)' (DEV)
- DEV row 55 (main row 55, S.no. 51 Promotional Hook): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV); Remarks: '' (main) vs 'UX Change - need some time to think about it. Build 4' (DEV)
- DEV row 59 (main row 59, S.no. 55 Incentive Messaging): Build Number: 'Phase 2' (main) vs 'Build 1  / Build 4' (DEV); Remarks: 'Not doing it now we will discuss' (main) vs 'WIll implement it to the end Build 4' (DEV)
- DEV row 66 (main row 66, S.no. 61 City Defaults): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Closest location. (Satish)' (DEV)
- DEV row 71 (main row 71, S.no. 174 Control Panel Access): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Bulk Upload in build 4. (Satish)' (DEV)
- DEV row 88 (main row 88, S.no. 191 Bulk Upload): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Build 4' (DEV)
- DEV row 95 (main row 95, S.no. 198 Bulk Upload): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV); Remarks: '' (main) vs 'Build 4. (Satish)' (DEV)
- DEV row 98 (main row 98, S.no. 64 Dashboard Cleanup): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'All dashboard related will be updated with the new dashboard coming up with Build 4' (DEV)
- DEV row 100 (main row 100, S.no. 66 Agent Onboarding): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'in edit the cities are being added and is raised as a bug' (DEV)
- DEV row 101 (main row 101, S.no. 67 Onboarding Fields): SIT/QA Status: 'Completed' (main) vs 'In-Progress' (DEV); Remarks: '' (main) vs 'Asset class is missing' (DEV)
- DEV row 105 (main row 105, S.no. 71 Configurable Permissions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV); Remarks: '' (main) vs 'Build 4 with keydemand flow for verification' (DEV)
- DEV row 107 (main row 107, S.no. — Detailed invoice reference): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV); col M: '' (main) vs 'User adding GST information, company name. Also able to change it during the next payment as well. Check Claude payment how it allows to change the name on the invoice' (DEV)
- DEV row 109 (main row 109, S.no. 156 Limits): col M: '' (main) vs '5 done but text is telling 3- Text change is to be done.' (DEV)
- DEV row 111 (main row 111, S.no. 158 Enterprise Restrictions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV)
- DEV row 112 (main row 112, S.no. 73 Complimentary Access): Developer Status: 'To Do' (main) vs 'Completed' (DEV); SIT/QA Status: 'To Do' (main) vs 'In-Progress' (DEV); Remarks: 'Business has access to the dashboard. THey will assign to people if needed' (main) vs 'will be done after migration' (DEV)
- DEV row 113 (main row 113, S.no. 74 Subscription Billing): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV)
- DEV row 123 (main row 123, S.no. 160 Asset Class Notification): Developer Status: 'Completed' (main) vs 'In-Progress' (DEV); SIT/QA Status: 'Completed' (main) vs 'Yet to do' (DEV)
- DEV row 124 (main row 124, S.no. 161 Discovery Logic): Remarks: 'Not checked as it is striked out as duplicate' (main) vs '' (DEV)
- DEV row 125 (main row 125, S.no. 162 Registered Asset Class): Dependency: '' (main) vs 'This is unnecessary' (DEV)
- DEV row 127 (main row 127, S.no. 164 Office and Managed Office Tenant- Posting Permissions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs 'To Do' (DEV); Remarks: 'While registering the user can post and say that I am interested in Managed offices and ticks the button. The outcome to this triggers a notification to Keydemand team with this user info as lead  / Journey 2  / Upon registration the user still has a demand to post for office. The user cannot post Managed offices demand  only when the box is ticked, can the person post both office and managed space.  / Hence we will give him an option to post both offices and managed offices too' (main) vs 'While registering the user can post and say that I am interested in Managed offices and ticks the button. The outcome to this triggers a notification to Keydemand team with this user info as lead  / Journey 2  / Upon registration the user still has a demand to post for office. The user cannot post Managed offices demand  neither tick the box to inform that it's a managed offices requirement.  / Hence we will give him an option to post both offices and managed offices too' (DEV)
- DEV row 130 (main row 130, S.no. 167 Tenant - Exploring Properties): Remarks: 'Not checked as it is striked out as duplicate' (main) vs '' (DEV)
- DEV row 132 (main row 132, S.no. 169 Tenant - Posting Permissions): Remarks: 'Not checked as it is striked out as duplicate' (main) vs '' (DEV)
- DEV row 138 (main row 138, S.no. 83 Onboarding & Authentication): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 139 (main row 139, S.no. 84 Role-Based Access): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 140 (main row 140, S.no. 85 Profile Management): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 141 (main row 141, S.no. 86 Dashboard): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 142 (main row 142, S.no. 87 Team Inventory Capabilities): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 143 (main row 143, S.no. 88 Backup Coordination): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 144 (main row 144, S.no. 89 Immediate Dashboard Redirect): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 145 (main row 145, S.no. 90 Dashboard Routing Logic): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 146 (main row 146, S.no. 91 Interactive Drill-Downs): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 147 (main row 147, S.no. 92 Filters & Sorting): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 148 (main row 148, S.no. 93 Hamburger Menu): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 149 (main row 149, S.no. 94 ): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 150 (main row 150, S.no. 95 Custom Side-Menu): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 151 (main row 151, S.no. 96 Account-Level Assignment): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 152 (main row 152, S.no. 97 Cross-Collaboration): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 153 (main row 153, S.no. 98 Posted By Transparency): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 154 (main row 154, S.no. 99 Exclusive Indicators): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 155 (main row 155, S.no. 100 Hidden Image Protocols): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 156 (main row 156, S.no. 101 Thumbnail Rule): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 157 (main row 157, S.no. 102 Image Request CTA): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 158 (main row 158, S.no. 103 Relevancy Matching Scope): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'In-Progress' (main) vs '' (DEV)
- DEV row 159 (main row 159, S.no. 104 Demand Exploration): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 160 (main row 160, S.no. 105 My Listings CRUD): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 161 (main row 161, S.no. 106 Colleague Data): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 162 (main row 162, S.no. 107 Default Permissions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 163 (main row 163, S.no. 108 Editing Limits): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 164 (main row 164, S.no. 109 Dashboard Breakdown): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 165 (main row 165, S.no. 110 Posting Restrictions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 166 (main row 166, S.no. 111 CRM Pipeline): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 167 (main row 167, S.no. 112 Lead Statusing): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 168 (main row 168, S.no. 113 Alerting & Highlights): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 169 (main row 169, S.no. 114 Metric Definition): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 170 (main row 170, S.no. 115 Direct Contact CTAs): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 171 (main row 171, S.no. 116 Outbound Contact Logs): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 172 (main row 172, S.no. 117 Lead Access Audit Trail): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 173 (main row 173, S.no. 118 Accountability Tracking): SIT/QA Status: 'To Do' (main) vs '' (DEV); Remarks: 'It is not critical.' (main) vs '' (DEV)
- DEV row 174 (main row 174, S.no. 119 Project Addition): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 175 (main row 175, S.no. 120 Project Categorization): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 176 (main row 176, S.no. 121 Exclusive Project): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 177 (main row 177, S.no. 122 Enquiry Granularity): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 178 (main row 178, S.no. 123 Side-Menu Structure): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 179 (main row 179, S.no. 124 Profile & Permissions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 180 (main row 180, S.no. 125 Aggregate Metrics (My vs Overall)): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 181 (main row 181, S.no. 126 Lead / Enquiry Definitions): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 182 (main row 182, S.no. 127 Saved / Shortlisted): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 183 (main row 183, S.no. 128 Agent RM View): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 184 (main row 184, S.no. 129 Broker Monitoring View): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 185 (main row 185, S.no. 130 BRM Persona): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 186 (main row 186, S.no. 131 Broker Directory): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 187 (main row 187, S.no. 132 Broker Metrics Drill-down): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 188 (main row 188, S.no. 133 Read-only Oversight): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 189 (main row 189, S.no. 134 BRM Permission): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 190 (main row 190, S.no. 135 High-End Demands Logic): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 191 (main row 191, S.no. 136 Massive Demand Bypass): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 192 (main row 192, S.no. 137 Grid Toggles): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV); Remarks: 'Given better UX now' (main) vs '' (DEV)
- DEV row 193 (main row 193, S.no. 138 HVL Definition): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 194 (main row 194, S.no. 139 Cross-Asset Application): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 195 (main row 195, S.no. 140 Exclusion): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 196 (main row 196, S.no. 141 Standard Leads): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 197 (main row 197, S.no. 142 Tier 1 vs. Tier 2 Routing): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 198 (main row 198, S.no. 143 Exclusive Routing): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 199 (main row 199, S.no. 144 Global Access): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 200 (main row 200, S.no. 145 Manual Unlock Valve): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 201 (main row 201, S.no. 146 Agent-Added Exemption): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 202 (main row 202, S.no. 147 HVL Unopened Marker): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'In-Progress' (main) vs '' (DEV)
- DEV row 203 (main row 203, S.no. 148 HVL Unlock Notification): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 204 (main row 204, S.no. 149 HVL Notification Mediums): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 205 (main row 205, S.no. 150 HVL Customization): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 206 (main row 206, S.no. 151 Visibility Rules 1): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 207 (main row 207, S.no. 152 Notifications): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 208 (main row 208, S.no. 153 Demand Size Limit): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 209 (main row 209, S.no. 154 Size Configuration): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 210 (main row 210, S.no. 200 Notification Filtering): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 211 (main row 211, S.no. 201 Enquiry Routing Logic): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 212 (main row 212, S.no. — Mobile UI Abbreviations): Developer Status: 'Completed' (main) vs '' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 213 (main row 213, S.no. 202 Card-Based Interface): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 214 (main row 214, S.no. 203 Dual Navigation): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 215 (main row 215, S.no. 204 Persistent Search Bar): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 216 (main row 216, S.no. 205 Visible Contact on Cards): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 217 (main row 217, S.no. 206 Regional Info Button): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 218 (main row 218, S.no. 207 Firebase Integration): Developer Status: 'In-Progress' (main) vs 'To Do' (DEV); SIT/QA Status: 'In-Progress' (main) vs '' (DEV); Remarks: 'Crashlytics is not needed some 3rd party needed.' (main) vs '' (DEV)
- DEV row 219 (main row 219, S.no. 208 Privacy Policy Action): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 220 (main row 220, S.no. 209 Grievance Officer- Terms and Conditions): Developer Status: 'In-Progress' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 221 (main row 221, S.no. 210 Event Tracking): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 222 (main row 222, S.no. 211 Privacy Policy): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 223 (main row 223, S.no. 212 Attribution Tracking): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 224 (main row 224, S.no. 213 Data Residency (India-only)): Developer Status: 'Completed' (main) vs 'To Do' (DEV); SIT/QA Status: 'Completed' (main) vs '' (DEV)
- DEV row 225 (main row 225, S.no. 214 Automated Migration): Developer Status: 'In-Progress' (main) vs 'To Do' (DEV); SIT/QA Status: 'In-Progress' (main) vs '' (DEV); Remarks: 'Only routing and selected migration . Client will do internal. only few agents will be done by' (main) vs '' (DEV)
- ONLY in DEV, row 283: "Available sections"
- ONLY in DEV, row 284: "1. Global Terminology & Field Rules"
- ONLY in DEV, row 285: "2. Auth, Registration & Login"
- ONLY in DEV, row 286: "3. Landing Page & Discovery"
- ONLY in DEV, row 287: "4. Agent Flow, Dashboard & Subscription"
- ONLY in DEV, row 288: "6. Keydemand Team (User-Portal persona)"
- ONLY in DEV, row 289: "9. Brand / Tenant / Enterprise User Flows"
- ONLY in DEV, row 290: "10. Asset-Class Access & Posting"
- ONLY in DEV, row 291: "11. Managed Space as Project Asset Class"
- ONLY in DEV, row 292: "12. Admin Control Panel - Core (built Sprint 2)"
- ONLY in DEV, row 293: "13. Admin - Enterprise Brand & Manage Formats"
- ONLY in DEV, row 294: "14. Notifications & Mobile Infrastructure"
- ONLY in DEV, row 295: "15. Compliance, Legal & Attribution"
- ONLY in DEV, row 296: "Foundation - Data Migration"
- ONLY in DEV, row 297: "Deferred / Phase 2"
- ONLY in DEV, row 298: "Missing sections"
- ONLY in DEV, row 299: "5. Subscription & Pricing (cross-app)"
- ONLY in DEV, row 300: "7. Broker Relationship Manager (BRM)"
- ONLY in DEV, row 301: "8. High Value Leads (HVL) Engine"
- Main row 6 wording differs from DEV (main text): "Trigger an explicit error for incomplete email addresses or mandatory fields."
- Main row 19 wording differs from DEV (main text): "For enterprise demands  the UI should should use end use images to maintain a dynamic look."

---
## Keydemand V2 - Phase 1 Tracker  [HISTORY — superseded by Keydemand V2 Phase 1 - Delivery Plan.xlsx]
**Source:** Google Sheet · ID `1HDjVsQGcavd2uamI4rmVeCTemFJczg6eRN0RJdbyHvM` · owner pradeepa.pv@futuristglobal.com · created 2026-06-05, modified 2026-07-30 · tabs read: Phase 1 Tracker (A1:N34), Sit Test Users (A1:Z1002), Sheet3 (empty) · read coverage: 100% · no comments.

Why HISTORY: it is the June-2026 epic-level tracker; the Delivery Plan's "Phase 1- Important Links to all" tab (row 9) labels it "Keydemand V2 - Phase 1 Tracker - Old tracker", and its dates (June/July 2026 SIT deployments) pre-date the Delivery Plan's July–October build schedule. It is a different structure (epics, not CR rows), so nearly everything below exists ONLY in this old doc and is quoted in full.

### Differences vs authoritative version
- Structure: epics EP-001…EP-019 with Web/App dev status and SIT dates in June/July 2026, versus the Delivery Plan's 15 feature groups, 4 builds (20 Jul – 25 Sep 2026) and 23-Oct Go-Live.
- Only in this tracker: "Listing Moderation (Approve / Reject)", "Edit Any Listing (Admin)", "Feature / Unfeature Listings (Admin)", "Analytics Overview (Admin)" as Admin Console V2 tasks; Demand Status Management (Open / Fulfilled); the static-content dependencies (FAQ, Clients list, Demands and Banner images); "We need 1 week for regression testing." on every epic.
- Only here: SIT API URL https://dn9kfd3elbxs.cloudfront.net and the "Sarp" SIT test numbers (60000000xx, 80000000xx).

#### Tab "Phase 1 Tracker" (full content)
Header: Sno | Epic No | Feature | Tasks | Web (Dev) | App (Dev) | Web Status (SIT/QA) | Business Dependency Status | Expected Date of Deployment to SIT (QA) | Revised Date SIT (QA) post Dependency Update | Remarks from Engg Team | Expected Date of Deployment to UAT (Demo) | (unlabelled column M). Column L is empty on every row; column M holds "We need 1 week for regression testing." on rows 1-28.

|  Row | Sno | Epic No | Feature | Tasks | Web (Dev) | App (Dev) | Web Status (SIT/QA) | Business Dependency Status | Expected Date of Deployment to SIT (QA) | Revised Date SIT (QA) post Dependency Update | Remarks from Engg Team | Expected Date of Deployment to UAT (Demo) | (unlabelled col M) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 | 1 | EP-001 | Authentication & Access Control | User Login  <br> User Sign-Up <br> OTP Verification <br> User Logout | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 3 | 2 | EP-002 | User Profile Management | View My Profile (Everyone as per Login) <br> Edit My Profile | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 4 | 3 | EP-003 | Asset Class Framework | Asset Class Filter Selection in UI <br> Retail <br> F&B <br> Office | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 5 | 4 | EP-004 | Subscription & Plan Management | Subscription Plans <br> Activate Subscription <br> Subscription Renewal & Expiry <br> Feature Access Based on Plan | Completed | In-Progress | Completed |  | June 12th |  |  |  | We need 1 week for regression testing. |
| 6 | 5 | EP-005 | Property Listing Management | Add a Property <br> View Property Listing (Detail Page) <br> View My Properties (Self View) <br> Edit a Property <br> Delete a Property <br> Property Status Management | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 7 | 6 | EP-006 | Demand Listing Management | Add a Demand <br> View Demand Listing (Detail Page) <br> View My Demands (Self View) <br> Edit a Demand <br> Delete a Demand <br> Demand Status Management (Open / Fulfilled) | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 8 | 7 | EP-007 | Project Module | Create a Project (Backend / Uploading on backend) <br> View Project Page (Self and User View) | Completed | In-Progress | Completed |  | June 10th |  |  |  | We need 1 week for regression testing. |
| 9 | 8 | EP-008 | Explore Property (default) | Explore Properties Listing Page <br> Filter Properties | Completed | In-Progress | Completed |  | June 12th |  |  |  | We need 1 week for regression testing. |
| 10 | 9 | EP-009 | Explore Demand (default) | Explore Demands Listing Page <br> Filter Demands | In-Progress | To-Do | In-Progress | <br> Dependency has changed <br> Dependency resolved | June 16th |  |  |  | We need 1 week for regression testing. |
| 11 | 10 | EP - 009A | Project Discovery <br> | Explore Projects <br> Filter Projects | Completed | In-Progress | Completed |  | June 12th |  |  |  | We need 1 week for regression testing. |
| 12 | 11 | EP-010 | Search Filters | Keyword Search <br> City-Based Search <br> Asset-Class-Based Search <br> Project-Based Search | Completed | In-Progress | Completed |  | June 12th |  |  |  | We need 1 week for regression testing. |
| 13 | 12 | EP-011 | Enquiry System | Enquire on a Property  <br> Enquire on a Demand  <br> View My Enquiries | Completed | In-Progress | Completed | Dependency has changed | June 12th | June 15th | Rules on Leads and Enquiries were not clearly mentioned in the document, till we hit a blocker |  | We need 1 week for regression testing. |
| 14 | 13 | EP-012 | Contact Unlocking <br> | View Mobile Number (Property) <br> View Mobile Number /Request Phone number(Brand) - (Demand) | Completed | In-Progress | Completed | Dependency has changed | June 12th | June 15th | Rules on unlock contact for various scenarios were discussed on 10th Jun |  | We need 1 week for regression testing. |
| 15 | 14 | EP-013 | Relevancy Matching-Rule Based | Rule-Based Relevancy Matching fro Demands and Properties | Completed | In-Progress | Completed | <br> Dependency has changed <br> Dependency resolved | June 15th | June 15th |  |  | We need 1 week for regression testing. |
| 16 | 15 | EP - 019 | Landing Page - Unregistered | Property and Project Search + Exploration | Completed | In-Progress | Completed | <br> Dependency has changed <br> Dependency resolved | June 17 | June 22 | Business rules have changed |  | We need 1 week for regression testing. |
| 17 | 16 | EP-014 | Agent Dashboard | My Listings (properties) <br> My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received <br> | Completed | In-Progress | Completed | <br> Dependency has changed <br> Dependency resolved | June 15th | June 17th | Have to implement Show Interest Projects info and leads |  | We need 1 week for regression testing. |
| 18 | 17 | EP-014 | Keydemand team | My Listings (properties) <br> My Listings(demands) <br> Explore Properties <br> Explore Demands  <br> Leads Generated <br> Enquiries Sent/Received <br> Projects & Brand Management | In-Progress | In-Progress | In-Progress | <br> Dependency has changed <br> Dependency resolved on June 15th | June 16 |  | UI/UX is in progress |  | We need 1 week for regression testing. |
| 19 | 18 | EP-014 | Brand F&B | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | Completed | In-Progress | Completed | Dependency resolved | June 18 | June 23 | Business rules have changed |  | We need 1 week for regression testing. |
| 20 | 19 | EP-014 | Brand Retail | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | Completed | In-Progress | Completed | Dependency resolved | June 18 | June 23 | Business rules have changed |  | We need 1 week for regression testing. |
| 21 | 20 | EP-014 | Office Tenant | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | Completed | In-Progress | Completed | Dependency yet to be resolved (Edge case scenarios) | June 24 | June 26 | Business rules have changed |  | We need 1 week for regression testing. |
| 22 | 21 | EP-014 | Managed Space Occupier | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | Completed | In-Progress | Completed | Dependency yet to be resolved (Edge case scenarios) | June 25 | June 26 | Business rules have changed |  | We need 1 week for regression testing. |
| 23 | 22 | EP-014 | Enterprise - Brand F&B | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | In-Progress | To-Do | In-Progress | Dependency yet to be resolved (Edge case scenarios) | June 26 |  | Business rules have changed |  | We need 1 week for regression testing. |
| 24 | 23 | EP-014 | Enterprise - Brand Retail | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | In-Progress | To-Do | In-Progress | Dependency yet to be resolved (Edge case scenarios) | June 26 |  | Business rules have changed |  | We need 1 week for regression testing. |
| 25 | 24 | EP-014 | Enterprise - Office Tenant | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | To-Do | To-Do | To Do | Dependency yet to be resolved (Edge case scenarios) | June 29 |  | Business rules have changed |  | We need 1 week for regression testing. |
| 26 | 25 | EP-014 | Enterprise - Managed Space Occupier | My Listings(demands) <br> Explore Properties <br> Leads Generated <br> Enquiries Sent/Received | To-Do | To-Do | To Do | Dependency yet to be resolved (Edge case scenarios) | June 29 |  | Business rules have changed |  | We need 1 week for regression testing. |
| 27 | 26 | EP-014 | Notifications | In-App Notifications <br> WhatsApp Notifications | To-Do | To-Do | To Do | Dependency yet to be resolved (Edge case scenarios) | July 3rd |  | Once all flows are complete, scope of notifications change- |  | We need 1 week for regression testing. |
| 28 | 27 | EP-018 | Keydemand Admin Console V2 | Keydemand Team Dashboard <br> User Management (Admin) <br> Listing Moderation (Approve / Reject) <br> Edit Any Listing (Admin) <br> Feature / Unfeature Listings (Admin) <br> Analytics Overview (Admin) <br> | In-Progress | To-Do | In-Progress | Dependency yet to resolve.  Yet to receive information/Data | July 3rd |  | We have'nt received overall scope yet. However we started working on the design. <br> The final deliverable date would vary(+ 1week) based on the complete requirements scope freeze. |  | We need 1 week for regression testing. |
| 29 | 28 |  | Legal team's review and finalization of the terms and conditions and the privacy policy |  | To-Do | To-Do | To Do | Dependency yet to resolve- Client told before deployment we will have it | No need |  |  |  | We need 1 week for regression testing. |
| 30 | 29 |  | FAQ's - Updated Content |  |  |  |  | Dependency yet to resolve. Client - For FAQ might take some time. |  |  | Static content. Minor dependency |  |  |
| 31 | 30 |  | Clients - Actual List |  |  |  |  | <br> Dependency has changed <br> Dependency resolved | No need |  | Static content. Minor dependency |  |  |
| 32 | 31 |  | Demands and Banner Images |  |  |  |  | <br> Dependency has changed <br> Dependency resolved | No need |  | Static content. Minor dependency |  |  |
| 33 | 32 |  | Notiffications- Admin Panel - V2 |  |  |  |  | Dependency yet to resolve.  Yet to receive information/Data |  |  |  |  |  |

#### Tab "Sit Test Users " (full content)
SIT test users — all roles

| Name | Phone (login) | Role | Email | _id | Notes |
|---|---|---|---|---|---|
| Amit Patel | 919900000001 | agent | amit@propvantage.com | …cccc01 | Posts properties; propertyTypes retail+office; 1 free listing used, 3 free contacts used |
| Rajesh Kumar | 919900000002 | brand | rajesh@retailmax.com | …cccc02 | RetailMax brand; 3 free demands |
| Vikram Mehta | 919900000003 | office_tenant | vikram@stellartech.com | …cccc03 | Individual tenant; 1 free demand |
| Sara Khan | 919900000004 | managed_space_occupier | sara@nimbus.io | …cccc04 | Posts managed-space demands; 1 free |
| Priya Sharma | 919900000005 | developer | priya@buildright.com | …cccc05 | Onboarding approved → can log in; owns the seeded projects |
| Rahul Gupta | 919900000006 | managed_space_operator | rahul@coworkzone.com | …cccc06 | Onboarding pending → login returns needsKdApproval (use to test the gate) |
| Meera Iyer | 919900000008 | managed_space_operator | meera@flexworx.com | …cccc08 | Onboarding approved → can log in |
| Anita Verma | 919900000007 | keydemand_team | anita@keydemand.in | …cccc07 | KD RM (kdRole: rm); admin/moderation, posts projects, paywall-bypass |

URLs to DEV and SIT - KEYDEMAND. (rows 12-38, column A with numbers/names in columns B-C as laid out in the sheet)

| Column A | Column B | Column C |
|---|---|---|
| Dev URL - https://d3nkiewgx0jg9g.cloudfront.net/ | 8000000001 | |
| SIT — URLs | 8000000003 | |
| End-user UI (web-ui) https://du15yseakf0ik.cloudfront.net | 8000000005 | |
| API (CloudFront) https://dn9kfd3elbxs.cloudfront.net | | |
| | 6000000001 | Sarp Retail Brand 1 |
| SIT — Keydemand-team test user | 6000000002 | Sarp FnB Brand 2 |
| Field    Value | | |
| Name   Anita Verma | 6000000011 | Sarp Test Agent |
| Phone (login)  +91 9900000007 | 6000000022 | Sarp Test Agent2 |
| OTP    [REDACTED-credential] (static bypass — SIT is non-prod) | | |
| Role    keydemand_team (Keydemand Role: rm — Account Manager, Enterprise Brands) | | |
| Email    anita@keydemand.in | | |
| Role       Phone      Name | | |
| Agent      +919900000001  Amit Patel | | |
| Brand      +919900000002  Rajesh | | |
| Developer     +919900000005  Priya Sharma | | |
| Managed-space occupier +919900000004  Sara Khan | | |
| End-user UI (web-ui) https://du15yseakf0ik.cloudfront.net (repeated, row 37) | | |
| API (CloudFront) https://dn9kfd3elbxs.cloudfront.net (repeated, row 38) | | |

#### Tab "Sheet3"
Empty.

### Business rules extracted
- **BR-DEL-282** — Every epic required "1 week for regression testing" after SIT deployment. _(§ Phase 1 Tracker, column M, rows 1-28)_
- **BR-DEL-283** — Demand status values: Open / Fulfilled. _(§ Phase 1 Tracker, Sno 6 EP-006)_
- **BR-DEL-284** — Projects are created by backend upload ("Create a Project (Backend / Uploading on backend)"). _(§ Phase 1 Tracker, Sno 7 EP-007)_
- **BR-DEL-285** — Contact unlocking: View Mobile Number (Property); View Mobile Number / Request Phone number (Brand) - (Demand). _(§ Phase 1 Tracker, Sno 13 EP-012)_
- **BR-DEL-286** — Search filters: Keyword, City-Based, Asset-Class-Based, Project-Based. _(§ Phase 1 Tracker, Sno 11 EP-010)_
- **BR-DEL-287** — Asset Class Framework covers Retail, F&B, Office (filter selection in UI). _(§ Phase 1 Tracker, Sno 3 EP-003)_
- **BR-DEL-288** — Admin Console V2 (old scope) included Keydemand Team Dashboard, User Management, Listing Moderation (Approve / Reject), Edit Any Listing, Feature / Unfeature Listings, Analytics Overview. _(§ Phase 1 Tracker, Sno 27 EP-018)_
- **BR-DEL-289** — Notifications scope: In-App Notifications and WhatsApp Notifications. _(§ Phase 1 Tracker, Sno 26)_
- **BR-DEL-290** — Legal team's review and finalization of the T&C and Privacy Policy is a client dependency ("Client told before deployment we will have it"). _(§ Phase 1 Tracker, Sno 28)_
- **BR-DEL-291** — SIT seed user free-usage states: agent "1 free listing used, 3 free contacts used"; brand "3 free demands"; office tenant "1 free demand"; managed-space occupier "1 free". _(§ Sit Test Users rows 3-6)_
- **BR-DEL-292** — A pending managed_space_operator login returns needsKdApproval. _(§ Sit Test Users row 8)_
- **BR-DEL-293** — SIT OTP is a static bypass because SIT is non-prod. _(§ Sit Test Users row 23)_

### Open questions / ambiguities in this doc
- Sno 12 EP-011: "Rules on Leads and Enquiries were not clearly mentioned in the document, till we hit a blocker".
- Sno 27: "We have'nt received overall scope yet … The final deliverable date would vary(+ 1week) based on the complete requirements scope freeze."
- Sno 29 FAQ: "Client - For FAQ might take some time"; Sno 32 Notifications- Admin Panel - V2: "Yet to receive information/Data".
- Brand seed says "3 free demands" and agent "3 free contacts used" — the free allowances are not defined anywhere in this group.
- Epic numbering is inconsistent (EP-014 reused for 11 rows; EP-019 between EP-013 and EP-014; EP-015 to EP-017 absent).

---
## Production_OnCall_Sheet.xlsx  [AUTHORITATIVE]
**Source:** xlsx · ID `1Kye-tYrvHv4dz9cTCTEdRhkImVJ_Xh_p` · owner pradeepa.pv@futuristglobal.com · created 2026-10-22, modified 2026-10-23 · tabs read: Contacts and Escalation Matrix; Roster; Severity & SLA; Monitoring Checklist (hidden tab); Handover Log; Incident Log · read coverage: 100% (parsed from the raw xlsx; dropdown validations captured; Incident/Handover logs have only the example row, rows below are empty).

### Content
#### Tab 1 — Contacts and Escalation Matrix
**Production On-Call – Contact Directory**

| Name | Role | Mobile | Email | Backup Contact | Time Zone |
|---|---|---|---|---|---|
| Patrick | On-call Engineer | 6300344723 | patrick.b@futuristglobal.com | Stephen | IST |
| Stephen | On-call Engineer | 6383352367 | stephen.a@futuristglobal.com | Jenith | IST |
| Jenith | On-call Engineer | 6361664586 | jenith.a@futuristglobal.com | Patrick | IST |
| Pradeepa | PM / Escalation L3 | 8903961793 | pradeepa.pv@futuristglobal.com | john | IST |
| John(QA) | QA Lead- 24/7 Available | 8374676913 | john.a@futuristglobal.com | Pradeepa | IST |
| Patrick | DevOps | 9866636383 | sathish.r@futuristglobal.com | Patrick | IST |
| Satish | Backend and DevOps | | | | |
| Krishna and Aravind | Front End | 9891040646 | krishna.c@futuristglobal.com | Aravind | IST |
| Aravind | | 9885124921 | arvind.m@futuristglobal.com | | |

**Escalation Matrix**

| Level | Who | When to Escalate | Contact Method | Max Wait Before Next Level |
|---|---|---|---|---|
| L1 | Primary On-call | First responder for all alerts & tickets | Phone | 15 min to acknowledge |
| L2 | Secondary On-call | Primary has not acknowledged in 15 min, or needs help | Phone call | 30 min |
| L3 | PM (Pradeepa) | Any P1, or a P2 still open after 2 hrs | Phone call | P1: 1 hr |
| L4 | Tech Leads(Krishna-FrontEnd/Satish - Backend/DevOps) | P1 still open after 1 hr, data loss, or security issue | Phone | - |

#### Tab 2 — Roster
**Production On-Call Roster – Care (24x7)**

Shift A 06–14 | B 14–22 | C 22–06 IST. Secondary = next shift's primary. Go-live day: all 3 online from deployment until +4 hrs. Primary/Secondary/Status are dropdowns. (Primary/Secondary dropdown on E5:F25 = Patrick, Stephen, Jenith, Pradeepa, Tech Lead.)

| Date | Day | Shift | Time (IST) | Primary | Secondary | Status | Remarks / Swaps |
|---|---|---|---|---|---|---|---|
| 23-Oct-26 | Fri | A | 06:00 – 14:00 | Patrick | Stephen | Go-Live | |
| 23-Oct-26 | Fri | B | 14:00 – 22:00 | Stephen | Jenith | Go-Live | |
| 23-Oct-26 | Fri | C | 22:00 – 06:00 (+1) | Jenith | Patrick | Scheduled | |
| 24-Oct-26 | Sat | A | 06:00 – 14:00 | Patrick | Stephen | Scheduled | |
| 24-Oct-26 | Sat | B | 14:00 – 22:00 | Stephen | Jenith | Scheduled | |
| 24-Oct-26 | Sat | C | 22:00 – 06:00 (+1) | Jenith | Stephen | Scheduled | |
| 25-Oct-26 | Sun | A | 06:00 – 14:00 | Stephen | Jenith | Scheduled | |
| 25-Oct-26 | Sun | B | 14:00 – 22:00 | Jenith | Patrick | Scheduled | |
| 25-Oct-26 | Sun | C | 22:00 – 06:00 (+1) | Patrick | Stephen | Scheduled | |
| 26-Oct-26 | Mon | A | 06:00 – 14:00 | Stephen | Jenith | Scheduled | |
| 26-Oct-26 | Mon | B | 14:00 – 22:00 | Jenith | Patrick | Scheduled | |
| 26-Oct-26 | Mon | C | 22:00 – 06:00 (+1) | Patrick | Jenith | Scheduled | |
| 27-Oct-26 | Tue | A | 06:00 – 14:00 | Jenith | Patrick | Scheduled | |
| 27-Oct-26 | Tue | B | 14:00 – 22:00 | Patrick | Stephen | Scheduled | |
| 27-Oct-26 | Tue | C | 22:00 – 06:00 (+1) | Stephen | Jenith | Scheduled | |
| 28-Oct-26 | Wed | A | 06:00 – 14:00 | Jenith | Patrick | Scheduled | |
| 28-Oct-26 | Wed | B | 14:00 – 22:00 | Patrick | Stephen | Scheduled | |
| 28-Oct-26 | Wed | C | 22:00 – 06:00 (+1) | Stephen | Jenith | Scheduled | |
| 29-Oct-26 | Thu | A | 06:00 – 14:00 | Jenith | Patrick | Scheduled | |
| 29-Oct-26 | Thu | B | 14:00 – 22:00 | Patrick | Stephen | Scheduled | |
| 29-Oct-26 | Thu | C | 22:00 – 06:00 (+1) | Stephen | Jenith | Scheduled | |

**Workload Summary**

| Engineer | Primary Shifts | Primary Hours | Night Shifts (C) | Secondary Shifts |
|---|---|---|---|---|
| Patrick | 7 | 56 | 2 | 6 |
| Stephen | 7 | 56 | 3 | 7 |
| Jenith | 7 | 56 | 2 | 8 |
| Total | 21 | 168 | 7 | 21 |

Hours per shift: 8 — "Input: change if shift length changes"

#### Tab 3 — Severity & SLA
**Severity Definitions & Response SLAs** — SLA clock starts when the alert fires or the ticket is raised.

| Severity | Definition | Examples | Acknowledge | Target Resolution |
|---|---|---|---|---|
| P1 – Critical | Production down, data loss, security breach | Site/app unreachable, login failing for all users, DB down | 15 min | 4-8 hrs |
| P2 – High | Major feature broken or heavily degraded, no workaround | Payments/orders failing, severe slowness | 30 min | 8-16 hrs |
| P3 – Medium | Partial impact, workaround available | Single report failing, intermittent errors | 2 hrs | 2 business days |
| P4 – Low | Cosmetic or minor issue | UI alignment, typo, minor log noise | Next business day | Next release |

#### Tab 4 — Monitoring Checklist (hidden tab)
**Shift Monitoring Checklist** — Run at start of every shift and every 2 hrs. Fill Tool/Link & thresholds (yellow) once before go-live. Shift: ____ Date: ____ Engineer: ____ (Status dropdown: OK, Issue, N/A)

| # | Check Item | Tool / Link | Threshold | Status | Checked At | Remarks |
|---|---|---|---|---|---|---|
| 1 | Application health / uptime URLs | | 200 OK | | | |
| 2 | Error rate (5xx / exceptions) | | < 1% | | | |
| 3 | API response time | | p95 < ___ ms | | | |
| 4 | Server CPU / Memory / Disk | | < 80% | | | |
| 5 | DB connections & slow queries | | < ___ active | | | |
| 6 | Queue / background job backlog | | < ___ pending | | | |
| 7 | Scheduled jobs / cron status | | All success | | | |
| 8 | Third-party integrations (payment, email, SMS) | | Responding | | | |
| 9 | Application logs – new error patterns | | None new | | | |
| 10 | Backups completed | | Daily OK | | | |
| 11 | SSL certificate expiry | | > 30 days | | | |

#### Tab 5 — Handover Log
**Shift Handover Log** — One row per handover. Row 5 is an example – overwrite it. Outgoing engineer stays until the incoming one confirms. (Shift dropdown: A → B, B → C, C → A)

| Date | Shift | Handed Over By | Received By | Open Incidents | Actions Pending | Notes/Work Done |
|---|---|---|---|---|---|---|
| 23-Oct-26 | A → B | Patrick | Stephen | INC-001 (P3) | Monitor DB slow-query fix | Example row |

#### Tab 6 — Incident Log
**Incident Log** — Row 5 is an example – overwrite it. Duration (hrs) calculates automatically. (Severity dropdown: P1, P2, P3, P4)

| Incident ID | Detected (Date/Time) | Severity | Description | Detected By | Assigned To | Status | Root Cause | Resolution | Closed (Date/Time) | Duration (hrs) |
|---|---|---|---|---|---|---|---|---|---|---|
| INC-001 | 23-Oct-26 11:05 | P3 | Example: report page slow | Himanshu | Krishna/Satish | Resolved | Missing DB index | Index added | 23-Oct-26 13:20 | 2.25 |

### Business rules extracted
- **BR-DEL-294** — Production on-call is 24x7 in three 8-hour IST shifts: A 06:00–14:00, B 14:00–22:00, C 22:00–06:00 (+1). _(§ Roster R2)_
- **BR-DEL-295** — The Secondary on-call for a shift is the next shift's Primary. _(§ Roster R2)_
- **BR-DEL-296** — Go-live day (23-Oct-26): all 3 on-call engineers online from deployment until +4 hrs; shifts A and B on 23-Oct have status "Go-Live". _(§ Roster R2, R5-R6)_
- **BR-DEL-297** — Roster covers 23-Oct-26 to 29-Oct-26 with Patrick, Stephen and Jenith each doing 7 primary shifts (56 hrs); totals 21 shifts / 168 hrs / 7 night shifts. _(§ Roster R5-R32)_
- **BR-DEL-298** — Escalation L1 Primary On-call is first responder for all alerts & tickets, by phone, 15 min to acknowledge. _(§ Escalation Matrix L1)_
- **BR-DEL-299** — Escalation L2 Secondary On-call when Primary has not acknowledged in 15 min, or needs help; phone call; 30 min max wait. _(§ Escalation Matrix L2)_
- **BR-DEL-300** — Escalation L3 PM (Pradeepa) for any P1, or a P2 still open after 2 hrs; phone call; P1: 1 hr max wait. _(§ Escalation Matrix L3)_
- **BR-DEL-301** — Escalation L4 Tech Leads (Krishna - FrontEnd / Satish - Backend/DevOps) when a P1 is still open after 1 hr, or on data loss or a security issue. _(§ Escalation Matrix L4)_
- **BR-DEL-302** — SLA clock starts when the alert fires or the ticket is raised. _(§ Severity & SLA R2)_
- **BR-DEL-303** — P1 – Critical (production down, data loss, security breach): acknowledge 15 min, resolve 4-8 hrs. _(§ Severity & SLA R5)_
- **BR-DEL-304** — P2 – High (major feature broken/heavily degraded, no workaround): acknowledge 30 min, resolve 8-16 hrs. _(§ Severity & SLA R6)_
- **BR-DEL-305** — P3 – Medium (partial impact, workaround available): acknowledge 2 hrs, resolve 2 business days. _(§ Severity & SLA R7)_
- **BR-DEL-306** — P4 – Low (cosmetic or minor): acknowledge next business day, resolve next release. _(§ Severity & SLA R8)_
- **BR-DEL-307** — Monitoring checklist runs at the start of every shift and every 2 hrs; thresholds: uptime 200 OK, error rate < 1%, CPU/Memory/Disk < 80%, cron all success, integrations (payment, email, SMS) responding, no new log error patterns, backups daily OK, SSL expiry > 30 days; Status values OK / Issue / N/A. _(§ Monitoring Checklist)_
- **BR-DEL-308** — Shift handover: one row per handover; the outgoing engineer stays until the incoming one confirms. _(§ Handover Log R2)_
- **BR-DEL-309** — Incident log captures Incident ID, detected time, severity (P1-P4), description, detected by, assigned to, status, root cause, resolution, closed time; Duration (hrs) is calculated automatically. _(§ Incident Log R2-R4)_

### Open questions / ambiguities in this doc
- Contact row 10: Name "Patrick", Role "DevOps", but email sathish.r@futuristglobal.com and Backup "Patrick"; row 11 "Satish — Backend and DevOps" has no phone/email. Looks like a data-entry error — who is the DevOps contact and on which number?
- "Krishna and Aravind" share one row (Krishna's phone/email); Aravind's row has no role.
- Escalation L3 triggers on "a P2 still open after 2 hrs", while the P2 target resolution is 8-16 hrs.
- Monitoring Checklist thresholds for API p95, DB connections and queue backlog are blank ("___"), and all Tool/Link cells are empty — "Fill … once before go-live". The tab is hidden.
- Roster ends 29-Oct-26; no roster beyond the first week.
- Delivery Plan names QA as "John & Patrik"; here Patrick is an on-call engineer and John is QA Lead.

---
## V2 SIT Environment Details.docx  [AUTHORITATIVE]
**Source:** docx · ID `1XuokGE1CoAUqBltFl9fhQh8MHhMJJ849` · owner pradeepa.pv@futuristglobal.com · created/modified 2026-10-14 · sections read: intro, Links, App users, Control Panel admin users, admin roles · read coverage: 100% (credentials redacted).

### Content
Here is everyone who can log in to SIT right now: 20 app users and 10 Control-Panel admins. All data was read from the live SIT APIs, and every app phone was confirmed with a login lookup.

**Links**

| App | URL |
|---|---|
| Web app | https://du15yseakf0ik.cloudfront.net |
| Control Panel | https://d2vy3h98yr0q9e.cloudfront.net |

Written for: the QA team testing on SIT.

**App users (web app / mobile)**

Log in with phone number + OTP [REDACTED-credential] (same for every SIT user).

| Name | Phone | Role | KD sub-role | Cities | Notes |
|---|---|---|---|---|---|
| Amit Patel | +919900000001 | Agent | — | Mumbai, Bengaluru | Subscribed agent |
| Rajesh Kumar | +919900000002 | Brand | — | Mumbai, Delhi-NCR | Individual brand "RetailMax Express" (retail) |
| Neha Kapoor | +919900000009 | Brand | — | Mumbai, Bengaluru | Enterprise brand "UrbanThread" (retail) |
| Arjun Menon | +919900000015 | Brand | — | Delhi-NCR, Pune | Enterprise brand "Spice Route" (F&B) |
| Vikram Mehta | +919900000003 | Office tenant | — | Mumbai, Bengaluru | StellarTech Solutions |
| Sara Khan | +919900000004 | Managed space occupier | — | Mumbai | Nimbus Cloud Labs |
| Priya Sharma | +919900000005 | Developer | — | — | RM-only: sees only profile and Relationship Manager |
| Rahul Gupta | +919900000006 | Managed space operator | — | — | RM-only, onboarding pending (login is gated) |
| Meera Iyer | +919900000008 | Managed space operator | — | — | RM-only, onboarding approved |
| Anita Verma | +919900000007 | Keydemand team | Keydemand agent | Mumbai, Pune | Account Manager, Enterprise Brands |
| Rohan Iyer | +919900000010 | Keydemand team | BRM | Bengaluru, Hyderabad | Broker Relationship Manager |
| Prasad | +919900000101 | Keydemand team | Keydemand agent | Bengaluru | HVL: Bengaluru Retail, F&B |
| Vishwanath | +919900000102 | Keydemand team | Keydemand agent | Bengaluru | HVL: Bengaluru Retail |
| Jeevan | +919900000103 | Keydemand team | Keydemand agent | Bengaluru | HVL: Bengaluru Office |
| Ajay | +919900000104 | Keydemand team | Keydemand agent | Bengaluru, Hyderabad | HVL: Bengaluru Office, Hyderabad F&B |
| Shanker | +919900000105 | Keydemand team | Keydemand agent | Hyderabad | HVL: Hyderabad Retail, Office |
| Chetna | +919900000106 | Keydemand team | Keydemand agent | Mumbai, Delhi, Gurgaon | HVL: Mumbai, Delhi, Gurgaon (all three asset classes) |
| Ramesh | +919900000107 | Keydemand team | Keydemand agent | Chennai | HVL: Chennai (all three) |
| Dhanabal | +919900000108 | Keydemand team | Keydemand agent | Chennai | HVL: Chennai (all three) |
| Deepali | +919900000109 | Keydemand team | Keydemand agent | Pune | HVL: Pune (all three) |

The last nine are placeholder accounts for the HVL owners. Their phones are test numbers, not the real people's.

A fourth brand, "FreshBites Cafe" (enterprise, F&B), exists but has no login user.

**Control Panel admin users**

Log in with email + password + email OTP. The passwords are the same as on UAT; each person already has theirs, so none are listed here.

| Name | Email | Admin role | Active | Must reset password |
|---|---|---|---|---|
| Sathish R | sathish.r@futuristglobal.com | Super Admin | Yes | No |
| Krishna C | krishna.c@futuristglobal.com | Super Admin | Yes | No |
| John A | john.a@futuristglobal.com | Super Admin | Yes | No |
| Patrick B | patrick.b@futuristglobal.com | Super Admin | Yes | No |
| Pradeepa PV | pradeepa.pv@futuristglobal.com | Super Admin | Yes | No |
| Sudhanshu | sudhanshu@keydemand.in | Super Admin | Yes | No |
| Nitesh | nitesh@keydemand.in | Super Admin | Yes | No |
| Himanshu | himanshu@keydemand.in | Super Admin | Yes | No |
| K Iyer | k.iyer@keydemand.in | Super Admin | Yes | Yes, on first login |
| QA Admin (E2E) | qa-admin@keydemand.in | Super Admin | Yes | No |

SIT has three admin roles:

| Role | Permissions |
|---|---|
| Super Admin | 30 (full access) |
| Admin | 28 |
| Contributor | 9 |

No one currently holds Admin or Contributor. To test those permission levels, someone needs an admin user created with that role.

### Business rules extracted
- **BR-DEL-310** — SIT app users log in with phone number + a static OTP (same for every SIT user). _(§ App users)_
- **BR-DEL-311** — Control Panel admins log in with email + password + email OTP; SIT admin passwords are the same as on UAT. _(§ Control Panel admin users)_
- **BR-DEL-312** — Admin roles on SIT: Super Admin = 30 permissions (full access), Admin = 28, Contributor = 9. _(§ admin roles table)_
- **BR-DEL-313** — An admin account can be flagged "Must reset password" → reset on first login (e.g. K Iyer). _(§ Control Panel admin users)_
- **BR-DEL-314** — Developers and Managed space operators are "RM-only": they see only their profile and Relationship Manager. _(§ App users: Priya Sharma, Rahul Gupta, Meera Iyer)_
- **BR-DEL-315** — A managed space operator whose onboarding is pending has login gated. _(§ App users: Rahul Gupta)_
- **BR-DEL-316** — Keydemand team users have a KD sub-role: "Keydemand agent" or "BRM" (Broker Relationship Manager). _(§ App users)_
- **BR-DEL-317** — HVL owners are Keydemand agents mapped per city and asset class (e.g. Prasad = Bengaluru Retail, F&B; Chetna = Mumbai, Delhi, Gurgaon all three asset classes). _(§ App users rows Prasad…Deepali)_
- **BR-DEL-318** — An enterprise brand can exist without a login user (FreshBites Cafe). _(§ note after app users)_

### Open questions / ambiguities in this doc
- Admin roles here are Super Admin / Admin / Contributor; the Requirements Register (S.no. 175) specifies Super Admin / Admin / Ops User.
- Admin login here includes an email OTP; the Register (S.no. 178) says "Login operates via email and password."
- All 10 admins are Super Admin; Admin and Contributor permission levels are untested ("someone needs an admin user created with that role").
- Developer Priya Sharma is "RM-only" here, whereas UAT Links says "KD-approved (can post projects)" and the old tracker says she "owns the seeded projects".
- Anita Verma's KD sub-role is "Keydemand agent" here but "kdRole rm" in UAT Links / old tracker.
- Phone 919900000009 is "Neha Kapoor" here but "UrbanThread Owner" in UAT Details.

---
## UAT Details  [AUTHORITATIVE]
**Source:** Google Doc · ID `1k3tlQFM1q8GMYXI7-JSzh9P2fdAhPHjBPkMVWLCY_Jc` · owner pradeepa.pv@futuristglobal.com · created/modified 2026-08-04 · sections read: whole doc (one heading + one table), comments requested (none) · read coverage: 100%.

### Content
**User App —** https://uat-v2.keydemand.in

Login = phone number + OTP [REDACTED-credential] (all seed users; from 04-users.seed.ts + enterprise brand seeded on UAT)

| Persona | Role | Phone | Notes |
|---|---|---|---|
| Amit Patel | Agent | 919900000001 | Has an active Mumbai subscription → can post freely |
| Rajesh Kumar | Brand (individual) | 919900000002 | |
| Vikram Mehta | Office Tenant | 919900000003 | |
| Sara Khan | Managed-space Occupier | 919900000004 | |
| Priya Sharma | Developer | 919900000005 | KD-approved (can post projects) |
| Rahul Gupta | MSO Operator | 919900000006 | onboarding pending |
| Meera Iyer | MSO Operator | 919900000008 | onboarding approved |
| Anita Verma | Keydemand Team (internal) | 919900000007 | KD /kd/* surface |
| UrbanThread Owner | Enterprise Brand (retail) | 919900000009 | unlimited contact unlocks |

(Identical to Delivery Plan "UAT Links" tab rows 1-14; the Delivery Plan tab adds the UAT admin logins, SIT links and DEV seed users.)

### Business rules extracted
- **BR-DEL-319** — The Keydemand Team (internal) persona uses the KD /kd/* surface of the user app. _(§ UAT Details table, Anita Verma)_
- **BR-DEL-320** — An agent with an active Mumbai subscription can post freely. _(§ UAT Details table, Amit Patel)_
- **BR-DEL-321** — A KD-approved Developer can post projects; MSO Operator onboarding has states pending and approved. _(§ UAT Details table)_
- **BR-DEL-322** — The Enterprise Brand (retail) has unlimited contact unlocks. _(§ UAT Details table, UrbanThread Owner)_

### Open questions / ambiguities in this doc
- "Enterprise brand seeded on UAT" is named only "UrbanThread Owner" (no person name), while SIT names it Neha Kapoor.
- Developer can post projects here, whereas the Register says projects are added only via the backend control panel by the Admin team (S.no. 119) and SIT says developers are "RM-only".

---
## KeyDemand Daily Summary.pdf  [AUTHORITATIVE]
**Source:** PDF (2 pages, browser print of file:///D:/DATA/Downloads/KD_DailySummaryEmail.html, printed 11/06/2026, 16:10) · ID `1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452` · owner pradeepa.pv@futuristglobal.com · modified 2026-06-11 · read coverage: 100% of extracted text; visual layout/colours not visible [Image: rendered HTML email design — layout, colours and icons not available in text extraction]. Linked from the Delivery Plan as "Notifications Design". All company names, counts, sizes and times are illustrative sample data.

### Content
**Header:** KEYDEMAND — END OF DAY SUMMARY — #CRE SIMPLIFIED — "Here's what happened today."
Wednesday, 10 June 2026 · Platform Activity Digest

**TODAY AT A GLANCE**
- 7 New Enquiries
- 3 New Subscribers
- 2 High Value Demands
- 4 Deletions / Deactivations
- 1 Account Deleted

**NEW ENQUIRIES**
- New Developer Enquiry — 3 today
  - Prestige Group · Mumbai — Commercial tower — 2.4L sq.ft · 10:24 AM — View →
  - Brigade Group · Bengaluru — IT Park — 85,000 sq.ft · 2:11 PM — View →
  - Embassy REIT · Pune — Business park — 1.1L sq.ft · 4:48 PM — View →
- New Operator Enquiry — 2 today
  - Awfis Space Solutions · Bengaluru — Managed office — 12,000 sq.ft · 9:05 AM — View →
  - WeWork India · Hyderabad — Flex office — 8,500 sq.ft · 3:30 PM — View →

**USERS & SUBSCRIPTIONS**
- NEW SUBSCRIBED USERS — 3: Rajesh Kumar · Agent · Pro; Meera Retail Pvt Ltd · Brand · Basic; Sundar Spaces · Developer · Pro — "View All Subscribers →"
- EXPIRED USERS — 2: Ankit Brokers · Agent · Expired 9 Jun; FreshBite Foods · F&B · Expired 8 Jun — "View All Expired →"

**HIGH PRIORITY — ACTION NEEDED**
- Enterprise Solution Leads — 2 unassigned — "Assign Now →"
  - Tata Consultancy Services · Bengaluru · 3 cities — Office · 2,00,000 sq.ft · ₹85/sq.ft · Submitted 11:30 AM · No RM assigned
  - Zomato Corporate · Mumbai · 2 cities — F&B · 45,000 sq.ft · ₹120/sq.ft · Submitted 3:00 PM · SLA: 45 min left
- New Project Leads — 5 today — "View All →"
  - Godrej BKC — Tower B · Mumbai · 3 leads
  - Manyata Tech Park Phase 3 · Bengaluru · 1 lead
  - Vaishnavi Tech Square · Bengaluru · 1 lead
- HIGH VALUE DEMANDS — 2: Infosys BPM 1.5L sq.ft · ₹90/sq.ft · Pune; HDFC AMC 80,000 sq.ft · ₹110/sq.ft · BKC — "View Demands →"
- MANAGED OFFICE DEMANDS — 4: Groww Technologies 150 seats · Bengaluru; PharmEasy 80 seats · Mumbai; +2 more — "View Demands →"

**DELETIONS & DEACTIVATIONS**
- Deleted Properties — 2: Shop #12, Bandra West · Amit Realty; Office Fl.4, ORR · KD Listed — "View Log →"
- Deleted Demands — 1: Retail 2000 sq.ft, Koramangala · Brand User — "View Log →"
- Deactivated Properties — 3: Commercial Space, Whitefield; Retail Unit, Andheri West; +1 more — "View Log →"
- Deactivated Demands — 2: Office 5000 sq.ft, NCR · Paused; F&B 1200 sq.ft, Hyderabad · Paused — "View Log →"

**⚠ ACCOUNT DELETION**
- Sharma Properties Pvt Ltd · Agent — Account Deleted at 6:14 PM · 12 listings removed · 3 active demands removed — "View Record →"

**Footer CTAs:** VIEW FULL DASHBOARD · Download Today's Report as PDF
KEYDEMAND — #CRESIMPLIFIED · India's First CRE Platform — "This is an automated summary email." — Manage Preferences · Unsubscribe
(The PDF ends with 20 placeholder "#1" anchor links.)

### Business rules extracted
- **BR-DEL-323** — An automated end-of-day summary email ("Platform Activity Digest") is sent with sections: Today at a Glance; New Enquiries; Users & Subscriptions; High Priority – Action Needed; Deletions & Deactivations; Account Deletion. _(§ Daily Summary pp.1-2)_
- **BR-DEL-324** — "Today at a Glance" counters: New Enquiries, New Subscribers, High Value Demands, Deletions / Deactivations, Account Deleted. _(§ p.1)_
- **BR-DEL-325** — New Enquiries are split into New Developer Enquiry and New Operator Enquiry, each item showing company · city, type, size, time and a "View →" link. _(§ p.1)_
- **BR-DEL-326** — Users & Subscriptions lists New Subscribed Users (name · user type · plan) and Expired Users (name · type · expiry date), with "View All Subscribers →" / "View All Expired →". _(§ p.1)_
- **BR-DEL-327** — Enterprise Solution Leads show the unassigned count with an "Assign Now →" CTA, and each lead shows company, city, number of cities, asset class, size, ₹/sq.ft, submission time and either "No RM assigned" or an SLA countdown ("SLA: 45 min left"). _(§ p.1)_
- **BR-DEL-328** — New Project Leads list project · city · lead count; High Value Demands list company, size, ₹/sq.ft, location; Managed Office Demands list company, seats, city. _(§ p.1)_
- **BR-DEL-329** — Deletions & Deactivations report Deleted Properties, Deleted Demands, Deactivated Properties, Deactivated Demands (deactivated demands shown as "Paused"), each with "View Log →". _(§ p.2)_
- **BR-DEL-330** — An Account Deletion alert shows the account, user type, deletion time, number of listings removed and active demands removed, with "View Record →". _(§ p.2)_
- **BR-DEL-331** — The email footer offers VIEW FULL DASHBOARD, "Download Today's Report as PDF", Manage Preferences and Unsubscribe. _(§ p.2)_
- **BR-DEL-332** — Branding: "KEYDEMAND", "#CRESIMPLIFIED · India's First CRE Platform". _(§ p.2)_

### Open questions / ambiguities in this doc
- Recipients, send time and trigger of the daily summary are not stated.
- The plan names in the mock ("Pro", "Basic") and the "Developer · Pro" subscriber are not consistent with the Register (agents: 'Trial Plan' / 'Pro Member'; developers are onboarded by Keydemand and do not subscribe).
- The Enterprise Solution Lead SLA (e.g. "45 min left") is not defined in any doc in this group.
- The "Today at a Glance" counts (2 High Value Demands, 4 Deletions/Deactivations) don't add up to the detail sections (2+1+3+2 = 8 deletions/deactivations).

---
## FAQ  [UNREADABLE]
**Source:** Google Doc link https://docs.google.com/document/d/1q8mVbidN6Bp0VlofoRNtwx5Z62BcbSke/edit (Delivery Plan, "Phase 1- Important Links to all", row 55) · ID `1q8mVbidN6Bp0VlofoRNtwx5Z62BcbSke` · read coverage: 0% — error "Requested entity was not found."

---
## Group-level notes
### Version history
- **Delivery Plan.xlsx (modified 2026-10-22) supersedes the "Keydemand V2 - Phase 1 Tracker" Google Sheet (modified 2026-07-30).** Decided by: the Delivery Plan's own link register labels the gsheet "Keydemand V2 - Phase 1 Tracker - Old tracker" (row 9), and by modified date. Note that row 26/27 of the same register still link the same gsheet as "Keydemand V2 - Phase 1 Tracker" and "Sit Test Users".
- **Inside the Delivery Plan, tab "Ongoing plus CRs & New Features" (visible) supersedes the hidden tab "DEV - Ongoing plus CRs & New Fe".** Same rows; the visible tab has later statuses (mostly "Completed") and the hidden one older statuses and developer remarks. Decided by: hidden state and status progression; no version numbers exist.
- **UAT Details (2026-08-04) vs Delivery Plan "UAT Links" tab (2026-10-22):** identical user-app content; the tab is a superset. No conflict in content, so both are kept as AUTHORITATIVE.
- **V2 SIT Environment Details.docx (2026-10-14)** is the most recent SIT user list and supersedes the SIT user lists in the old tracker's "Sit Test Users" tab (8 users) — the docx lists 20 app users + 10 admins.
- The Delivery Plan link register also lists "Version 1.0" and "Version 2.0" copies of the page specs and Control Panel docs (rows 33-47); those docs are outside this group.

### Conflicts across docs in this group
- **Admin roles:** Register S.no. 175 = Super Admin / Admin / Ops User; SIT Environment Details = Super Admin (30 perms) / Admin (28) / Contributor (9). Register is the requirement; SIT doc reflects the build (newer, 14-Oct).
- **Admin login factors:** Register S.no. 178 = email + password; SIT Environment Details = email + password + email OTP.
- **Developer persona:** UAT Details/UAT Links = "KD-approved (can post projects)"; old tracker = "owns the seeded projects"; SIT Environment Details = "RM-only: sees only profile and Relationship Manager"; Register S.no. 119/170 = projects added only via the backend by Admin. Delivery Plan Register is authoritative.
- **Anita Verma KD role:** UAT Links / old tracker = kdRole rm (Account Manager, Enterprise Brands); SIT doc = KD sub-role "Keydemand agent" (Account Manager, Enterprise Brands).
- **Phone 919900000009:** UAT = "UrbanThread Owner"; SIT = "Neha Kapoor" (Enterprise brand "UrbanThread").
- **SIT API URL:** old tracker = https://dn9kfd3elbxs.cloudfront.net; no SIT API URL in the newer docs (DEV API = https://d1brddgvaviw9r.cloudfront.net).
- **QA staffing:** Delivery Plan = "John & Patrik (QA)"; On-call sheet = Patrick as On-call Engineer, John as QA Lead.
- **Go-Live/complimentary access:** Delivery Plan Delivery Tracker = 23-Oct cutover migrates all V1 users with 3 months complimentary Pan-India access; Register S.no. 73 (To Do — business will assign "if needed") and S.no. 214 (In-Progress — "Only routing and selected migration"). Register status is the latest word.
- **Contact-view limit:** Register/Effort = 5 phone numbers; hidden DEV tab = "5 done but text is telling 3"; old tracker seed agent "3 free contacts used".
- **Notifications:** old tracker = In-App + WhatsApp; Delivery Plan = email + WhatsApp (Interakt) plus Firebase in-app push; Daily Summary PDF = an automated summary email.
- **Admin Console scope:** old tracker includes Listing Moderation (Approve / Reject) and Feature / Unfeature Listings; the Delivery Plan Register has no moderation or feature/unfeature rule (it has a deferred "Boost property/project for extra money" note).
- Within the Delivery Plan itself (Effort Summary / Delivery Tracker vs Register): RERA mandatory vs optional; OC status 3 vs 4 values; 18+ tick vs no checkbox; Retail/F&B explore set; pre-wall free-listing incentive (in plan vs Phase 2); CRM-lite and Admin Google Analytics (in plan vs Phase 2); 'viewed-by' audit trail (in plan vs To Do); Firebase Crashlytics (in plan vs "not needed"). The Register (tab 3) is treated as the authoritative statement of rules and status.
