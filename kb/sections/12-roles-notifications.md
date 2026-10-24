# 12 — User Roles, Notifications & HTL Workflow

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Reference Guide to User Roles, CTA's, Dev Links, Tech Stack for Keydemand V2 Platform | Google Doc | `13IxQfdp4HhjqRNUp3K6rGDf1y454LstSLOE-z0CNkE4` | pradeepa.pv@futuristglobal.com | 2026-09-22 | AUTHORITATIVE (for Dev links, Tech stack, CTAs, Persona journeys; for role-journey text that overlaps doc 2, doc 2 is newer and wins — see Group notes) |
| 2 | Reference Guide to User Roles on Keydemand Platform | Google Doc | `1v84nXG7_YORBZH2okgSiOfibYemXa7zZ3KK9KliOqcM` | pradeepa.pv@futuristglobal.com | 2026-10-06 | AUTHORITATIVE (complementary; newer revision of the role-journey/access sections) |
| 3 | Notifications Breakdown | Google Doc | `1HkwJ-9ZHhL9snZmncJVg0iWImGh_L5lBKWdkgYDAZPo` | pradeepa.pv@futuristglobal.com | 2026-10-16 | AUTHORITATIVE (explainer of notification-matrix column semantics only; the matrix itself is not in this doc) |
| 4 | HTL workflow | Google Doc | `1eUnwSbr1CxBnc1VANFYdSp2h92QsTOeXAaGmcaZDtsQ` | pradeepa.pv@futuristglobal.com | 2026-06-30 | AUTHORITATIVE |

---
## Reference Guide to User Roles, CTA's, Dev Links, Tech Stack for Keydemand V2 Platform  [AUTHORITATIVE]
**Source:** Google Doc · ID `13IxQfdp4HhjqRNUp3K6rGDf1y454LstSLOE-z0CNkE4` · pradeepa.pv@futuristglobal.com · modified 2026-09-22 (created 2026-09-15) · sections read: DEV LINK and LOGINS; Keydemand Tech Stack for V2; Journeys; Access & Privileges; CTAs (Master CTA & Conversion Matrix); Persona-based Details (personas 1–8) · comments: none returned · read coverage: 100%

### Content

#### DEV LINK and LOGINS
| Item | Value |
|---|---|
| DEV WEB URLs | <https://d3nkiewgx0jg9g.cloudfront.net> |

Test users (login is mobile number + OTP; no passwords/OTPs present in source):

| Name | Phone | Role | Key state for testing |
|---|---|---|---|
| Amit Patel | 919900000001 | agent | Subscribed; PAN-India retail+office coverage; cities Mumbai/Bengaluru; propertyTypes retail+office. Best for: posting properties, subscription/coverage, search. |
| Rajesh Kumar | 919900000002 | brand (individual, RetailMax) | Has brandId/companyId; asset-class-locked → searchAssetScope. Best for: brand explore (clamp), contact-view paywall, first-demand. |
| Vikram Mehta | 919900000003 | office_tenant (individual) | cities Mumbai/Bengaluru; interestedInManagedSpace. Best for: tenant explore clamp (→office), demand post. |
| Sara Khan | 919900000004 | managed_space_occupier | 25 seats, Mumbai. Best for: managed-space clamp, occupier free-contact paywall. |

#### Keydemand Tech Stack for V2
- TypeScript Mono Repo - A single codebase for Web, Android, and iOS applications
- Core Framework: Svelte/SvelteKit with Capacitor
- API Layer: GraphQL and REST
- Backend: Fastify (Node.js)
- Database: MongoDB Atlas
- Cloud Hosting: AWS S3, EC2/Elastic Beanstalk
- Location Services: Google Places API

#### Journeys

##### Brand Journey (Retail & F&B)
- **Explore Properties**: They can browse and search through available commercial property and project listings across Retail, F&B, and Office categories.
- **Space Requirements**: Brands can post space expansion requirements (demands) matching their specific category (Retail or F&B).
- **Connect and Manage**: Individual brands can view up to 5 property contacts directly and can post up to 3 for free. When agents request to connect on their demands, brands have **4 working days** (excluding weekends) to manually accept or reject them before they expire. Post that they must upgrade to enterprise.

##### Tenant Journey (Office & Managed Space)
- **Explore Properties**: They can browse and search through available commercial property and project listings across Managed Space and Office categories.
- **Office Space Demands**: Office Tenants can post Office and Managed Space; Managed Space operators can post only Managed Space.
- **Two-Way Reveal**: Clicking to view a property contact instantly shares the supplier's contact details with the tenant and automatically sends the tenant's verified details to the supplier—allowing both parties to connect instantly without waiting for manual approval.
- **Limits**: Individual occupiers can view up to 5 property contacts directly and can post 1 free demand posting. Post that they must upgrade to enterprise.

##### Enterprise Journey-(Brands and Tenants)
- **Corporate Portals**: Tailored for large-scale corporate occupiers, supporting multiple regional acquisition managers logging in independently under a single corporate brand account. Enterprise brands cannot manage sub-users themselves; these must be managed via the Key Demand admin panel.
- **Auto-Fill Formats**: Features pre-configured brand templates that auto-populate property specs so expansion teams only select the city and location to instantly go live.
- **Enterprise Restrictions**: Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. Enterprise requirements must be bulk uploaded centrally through the Admin panel.
- **Private Blackout**: High-ticket requirements bypass public agent feeds entirely and are routed exclusively to an assigned Keydemand Point of Contact (POC) for private, offline servicing.

##### Keydemand Team Journey
- **Onboarding & Authentication:** Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP.
- **Exclusive Search**: They are the only user role authorized to search, filter, and explore the global demands directory.
- **Posting Restrictions**: Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload centrally through the Admin panel.
- **Exclusive Indicators:** If a demand is managed exclusively by Keydemand, the "Self-View" and explore demand screens must explicitly indicate "Keydemand Team".
- **Advanced Overseer Privileges**: Internal users bypass public paywalls to view hidden contact numbers and images, and they manage the High-Ticket Lead matching pool.
- **Broker Monitoring View:** A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers they have onboarded. This tracks requirements added, relevancies, contact attempts, leads received, missed calls, and ignored image requests to counter broker complaints.
- **Exclusive Project Follow-up:** The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated "Exclusive" projects.

##### Admin / Super Admin Journey
- **Centralised Control:** Admins have master access via the backend Control Panel to oversee platform operations, approve or moderate listings, and manage all user accounts.
- **Manual Onboarding:** They manually register and onboard Developers, Managed Space Operators, and major Enterprise Brands who are restricted from front-end signup. They can also add agents, Keydemand team, Brands and Tenants on the backend.
- **Plan & City Configuration**: Admins set up subscription tiers, define Metro/Non-Metro pricing, add active cities, and can award zero-charge complimentary testing plans to agents.
- **Lead & Pipeline Management:** They track platform-wide property matches, assign dedicated Relationship Managers (POCs) to Enterprise accounts, and manage high-value leads—including manually unlocking hidden corporate demands to the agent pool.
- **Audit & Security Control:** Accesses complete tracking logs to monitor platform usage, including detailed "Viewed by" history of who accessed sensitive client phone numbers or edited listings.

#### Access & Privileges
- **Strict Access Separation:** The platform must be strictly demarcated into two environments: the "Control Panel" (Admin portal) and the "User Portal" (Web UI).
- **Control Panel Access Limits:** The Control Panel is exclusively for user management, bulk uploads, platform oversight, and configuring high-value leads.
- **Onboarding & Authentication:** Agents, Brands (Retail & F&B), and Tenants (both Office and Managed Space occupiers) all self-register and log in directly on the front-end interface using their mobile number and OTP. The administrative team can also manually add, configure, or manage these profiles via the backend Admin Control Panel.

##### Property Agent Journey
- **List and Manage**: Agents can list and manage available commercial properties (Office, Retail, and F&B) and post space requirements (demands) on behalf of clients.
- **Discover Matches**: They can view automatic property-demand matches, manage image requests, and unlock contact details on their active dashboard.
- **Trial Limitations**: Free-tier agents operate under a limited trial plan with exactly 1 free property listing, 1 free demand posting, and 5 lifetime contact reveals.
- **Complimentary Subscription Access for Testing**: Admins can assign zero-charge subscriptions to agents from the backend.

##### Agent Subscription
- **Pro Member Status**: Subscribing to a paid plan unlocks unlimited property listings, unlimited contact reveals, and automatic real-time WhatsApp alerts.
- **Flexible Pricing**: Subscriptions are billed on a monthly 30-day cycle. Pricing is calculated per city and asset class (Retail & F&B vs. Office), with custom PAN India options available.
- **Prorated Changes**: Agents can dynamically add or remove cities mid-cycle. New additions are prorated to match the billing date, and cancellations take effect next billing cycle.
- **3-Month Grace Period**: If a plan expires or is cancelled, active listings remain public for exactly 3 months so the agent can still capture inbound leads, but they cannot unlock contact details without resubscribing. After 3 months, listings are automatically deactivated.
- **Subscription & Membership CTAs**:
  - **[Subscribe Now for Unlimited Access]** / **[Subscribe to Pro Plan]**: Triggers Razorpay payment flow upon exhausting trial caps (5 unlocks or 1 listing).
  - **[Confirm and Pay]** / **[Start Subscription]**: Completes plan selection and executes payment.
  - **[Renew Membership]**: Manual renewal CTA rendered on failed auto-payments or expiring plans.
  - **[Cancel Membership]**: Halts auto-renewal starting from the next billing cycle.
  - **[Reactivate Account]** / **[Reactivate Plan]**: Homepage/Dashboard button to restore a deactivated or expired account.

#### CTAs — Master CTA & Conversion Matrix
| Target Persona | Primary CTA | Secondary CTA | Key Conversion Metric |
|---|---|---|---|
| 1. Unregistered User | [Verify Mobile OTP] | [Explore Properties] | Guest-to-Registered Account Conversion Rate |
| 2. Registered User | [Post Free Demand / Listing] | [View Phone Number] | First Requirement / Supply Upload Rate |
| 3. Property Agent | [Subscribe to Pro Plan] | [Post Property / Demand] | Trial-to-Paid Subscription Conversion Rate & MRR |
| 4. Brand — Retail | [Post Retail Demand] | [Request Phone number] | Requirement Post Rate & 4-Day SLA Response Rate |
| 5. Brand — F&B | [Post F&B Demand] | [Request Phone number] | Requirement Post Rate & Inbound Match Acceptance Rate |
| 6. Tenant — Office | [Post Office Requirement] | [View Phone Number] | Requirement Submission Rate & Two-Way Unlocks |
| 7. Tenant — Managed Office | [Post Managed Space Search] | [View Phone Number]] (sic) | Seat Requirement Submissions & Project Enquiries |
| 8. Enterprise | [Submit Enterprise RFP / Callback] | [Enterprise Solutions] | Qualified Enterprise Lead Rate & Pipeline Velocity |

#### Persona-based Details — Persona User Journeys

##### 1. Unregistered User (Prospecting & Discovery)
**Objective:** Browse available commercial properties, city-level inventory, and developer projects without friction, while being strategically nudged toward account creation upon attempting high-intent actions.

**Step-by-Step User Flow**
1. **Discovery**: Lands on Keydemand.in via search ads or organic social. Sees default city (**Bengaluru**), top 7–10 popular city buttons, the **"Explore Listings"** menu, and a **"1 Free Listing"** promotional banner.
2. **Engagement**: Filters listings by City, Locality, Asset Class (defaults to **Office**), and Transaction Type (defaults to **Lease**). Views property detail pages, public images, and interactive location maps/street view.
3. **Conversion**: Attempts a high-intent action such as clicking **[View Phone Number]**, **[Contact Us]**, or **[Request for Images]**. The system blocks access and opens the mobile OTP authentication modal.
4. **Retention**: Completes mobile OTP verification, enters their basic profile details, and is prompted to submit their first active demand requirement to unlock the platform.

**Calls to Action (CTAs)**
- Header & Global Navigation CTAs:
  - **[Explore Properties]**: Directs users to browse property listings.
  - **[Agent Subscription]**: Opens the subscription selection page for unsubscribed or unregistered agents.
  - **[List a Property]** / **[Post a Property]**: Opens the property upload/onboarding form.
  - **[Post a Demand]**: Opens the demand creation/onboarding form.
  - **[List your Project >>]**: Navbar dropdown CTA (**Developer | Operator**) that opens a project enquiry form.
  - **[Enterprise Solution]**: Opens the dedicated Enterprise Solutions overview and enquiry page.
- Search Bar & Hero Section CTAs:
  - **[Select City / Top City Buttons]**: Displays top 7–10 cities as clickable buttons or opens a full BookMyShow-style city overlay when clicking "other city".
  - **[Search]**: Executes structured search across listings (defaulting to Office and Lease if unselected).
- Listing & Project Card CTAs:
  - **[View Phone Number]**: Prompts guest users to register/log in via mobile OTP before revealing landlord contacts.
  - **[Show Interest]** (Project Cards): Opens mobile OTP verification and guest lead registration.
  - **[Explore]** (Popular Cities / Real Estate Cards): Opens city-filtered property/project list views.
- About & Marketing Section CTAs:
  - **[Request a Callback]**: Low-abandonment callback module in the video section (captures mobile number only).
  - **[Send an Enquiry] / [Book a Demo]**: Opens a representative's Calendly link to schedule a live demo.
  - **[Download on App Store] / [Download on Google Play]**: Footer store download links.

**Marketing Touchpoints**
- Ad Channels: Google Search Ads targeting hyper-local commercial keywords (*"Office space for lease in Indiranagar"*), LinkedIn Sponsored Content.
- Messaging Hooks: *"Access Verified Commercial Real Estate Direct from Owners & Top Agents."*
- Retargeting Triggers: Drop-offs at the OTP registration modal receive programmatic display ads and SMS/WhatsApp remarketing showing trending properties in their searched city.

##### 2. Registered User (Lead Nurturing & Portal Access)
**Objective:** Access saved searches, manage personal dashboard leads, and utilize free/trial allowances before upgrading to paid subscriptions or enterprise solutions.

**Step-by-Step User Flow**
1. **Discovery**: Logs in via Mobile OTP. Lands on a personalized 6-card dashboard tracking Leads Received, Properties Contacted, and Active Listings/Demands.
2. **Engagement**: Reviews recent searches, checks red-dot notification flags for new relevancy matches, and uses their free contact unlock allowance (up to 5 free reveals for Brands/Tenants; 1 free property or 1 free demand for agent, 3 free demand listings for Brand (Retail and F&B), 1 free demand listings for Tenant (Office and Managed Space), and 5 lifetime contact reveals for all).
3. **Conversion**: Hits their 5th contact reveal or listing quota limit. The system displays a paywall or upsell prompt (**[Subscribe to Pro Plan]** for Agents or **[Connect for Enterprise Solution]** for Brands/Tenants).
4. **Retention**: Receives automated transactional WhatsApp alerts whenever a new property or demand matches their stored criteria.

**Calls to Action (CTAs)**
- **[Manage Dashboard]** *(Header / Profile)*
- **[View Phone Number]**: Unlocks contact details directly (up to 5 free lifetime clicks on Trial Plan; unlimited for Pro Members).
- **[Request Contact]**: Outbound request CTA sent to F&B and Retail brand demands.
- **[Post Free Demand/Property]** *(Dashboard / Navigation)*
- **[Subscribe to Pro Plan]** *(Paywall Banner for Agents)*. Triggers Razorpay payment flow upon exhausting trial caps (5 unlocks or 1 listing).
- **[Connect for Enterprise Solution]** *(Quota Exceeded Modal for Brands/Tenants)*

**Marketing Touchpoints**
- Nurture Channels: Automated WhatsApp Business API updates, personalized email digests summarizing new matched listings.
- Messaging Hooks: *"You have 3 new matching properties in Mumbai. Unlock details now."*
- Retargeting Triggers: In-app notifications when free allowances hit 80% (e.g., *"You have used 4 of your 5 free contacts"*).

##### 3. Property Agent (Brokers & Channel Partners)
**Objective:** List commercial property inventory (Office, Retail, F&B) and client demands to capture high-quality occupier leads, eventually upgrading to a paid **"Pro Member"** monthly subscription.

**Step-by-Step User Flow**
1. **Discovery**: Registers as a Property Agent via mobile OTP. Enters a dashboard branded with a **"Trial Plan"** badge and active usage counters (*"Usage 0 of 1"*).
2. **Engagement**: Posts 1 free property listing and 1 free demand (strictly constrained to their selected asset classes and cities). Sets image privacy via **[Do Not Show Images]** if needed.
3. **Conversion**: Reaches trial limits (1 listing, 1 demand, or 5 lifetime contact unlocks, including rejections). Clicks **[Subscribe to Pro Plan]**. Selects asset class bundle (*Retail & F&B* or *Office*) and city tier (*Metro ₹1,000/mo*, *Non-Metro ₹750/mo*, or *PAN India ₹5,000/mo*). Completes native Razorpay checkout.
4. **Retention**: Enjoys unlimited listings, unlimited contact reveals, and automated WhatsApp lead alerts as a **"Pro Member"**. Utilizes mid-cycle additions (prorated charges). If a plan lapses, enters a **3-month grace period** (listings remain live to collect leads, but contact reveals are locked) before auto-deactivation. Can click **[Reactivate Account]** on the homepage to restore benefits.

**Calls to Action (CTAs)**
- **[Post Property]** *(Dashboard / Header)*
- **[Post Demand]** *(Dashboard)*
- **[Do Not Show Images]** *(Media Upload Form)*
- **[Subscribe to Pro Plan]** *(Billing Page)*
- **[Renew Membership]** *(Payment Failure / Renewal Banner)*
- **[Reactivate Account]** *(Homepage Banner for Expired Accounts)*

**Marketing Touchpoints**
- Acquisition Channels: B2B Broker WhatsApp communities, targeted Meta/LinkedIn ads, industry channel partner offline events.
- Messaging Hooks: *"Get Unlimited Commercial Leads & Automated Direct WhatsApp Enquiries for ₹INR/Month."*
- Retargeting Triggers: Automated WhatsApp reminders on failed auto-payments with a direct **[Renew Membership]** link; reactivation campaigns sent at day 60 of the 3-month grace period.

##### 4. Brand — Retail (Commercial Retail Space Acquisition)
**Objective:** Post space expansion requirements (up to 3 free demands) across target markets, discover highstreet, mall, or highway retail spaces, and manage inbound broker/landlord connection requests.

**Step-by-Step User Flow**
1. **Discovery**: Onboards as a Retail Brand via mobile OTP. Explores Retail, F&B, and Office property supply.
2. **Engagement**: Posts up to 3 free Retail demands specifying store format (*Highstreet, Mall, Kiosk, Highway, etc.*), carpet area, and up to 3 secondary localities in the target city.
3. **Conversion**: Receives inbound connection requests from suppliers/agents on their demand cards. Reviews agent credentials under the "Leads Received" dashboard slider and clicks **[Accept Connection Request]** or **[Reject Connection Request]** within a strict **4-working-days SLA** (excluding Sat/Sun). Direct-views up to 5 property contacts.
4. **Retention**: Attempting a 4th demand posting automatically triggers the Enterprise brand upgrade flow. Automated 60-day demand validity checks ensure continuous relevancy.

**Calls to Action (CTAs)**
- **[Post Retail Demand]** *(Onboarding / Dashboard)*
- **[Explore Retail Supply]** *(Navigation Bar)*
- **[Accept Connection Request]** *(Dashboard Slider — 4-Day SLA)*
- **[Reject Connection Request]** *(Dashboard Slider)*
- **[Enquire for Enterprise Solution]**: Triggered during onboarding or upon attempting a 4th demand post.

**Marketing Touchpoints**
- Acquisition Channels: Retail real estate summits, LinkedIn ABM targeting Retail Expansion Heads & Leasing Managers.
- Messaging Hooks: *"Source Premium Highstreet & Mall Retail Locations Direct from Verified Listers."*
- Retargeting Triggers: Automated WhatsApp SLA countdown notifications (*"You have 2 pending connection requests expiring in 24 hours"*).

##### 5. Brand — F&B (Food & Beverage Operators)
**Objective:** Secure specialized commercial F&B properties (kitchen-ready, high-footfall, exhaust/utility compatible) by posting targeted demands and controlling agent connection approvals.

**Step-by-Step User Flow**
1. **Discovery**: Onboards as an F&B Brand via mobile OTP. Searches commercial properties filtered by F&B, Retail, and Office.
2. **Engagement**: Posts F&B demands (carpet area, floor preference, seating/utility needs, primary location + up to 3 secondary localities).
3. **Conversion**: Reviews agent interest under the "Leads Received" dashboard slider (across 3 sub-tabs: *Phone numbers viewed*, *Contact requests*, *Image requests*). Executes **[Accept Connection Request]** or **[Reject Connection Request]** within the 4-working-days SLA. Unlocks up to 5 property contact numbers directly.
4. **Retention**: Receives automated WhatsApp updates when requests are actioned. Exceeding 3 free demands triggers a seamless transition into the Enterprise expansion pipeline.

**Calls to Action (CTAs)**
- **[Post F&B Requirement]** *(Dashboard)*
- **[Request for Images]** *(Property Card CTA)*
- **[Accept Connection Request]** *(Leads Slider)*
- **[Reject Connection Request]** *(Leads Slider)*
- **[View Phone Number]** *(Direct Property Unlock)*
- **[Enquire for Enterprise Solution]**: Triggered during onboarding or upon attempting a 4th demand post.

**Marketing Touchpoints**
- Acquisition Channels: Restaurant association networks, F&B franchise expos, digital ads targeting Cloud Kitchen & QSR founders.
- Messaging Hooks: *"Find Kitchen-Ready & High-Footfall F&B Spaces in Top Metro Cities."*
- Retargeting Triggers: Instant WhatsApp notifications with a red-dot indicator whenever a newly listed F&B property matches their exact seating/carpet area criteria.

##### 6. Tenant — Office (Traditional Office Leasing Decision-Makers)
**Objective:** Post office space requirements and connect instantly with property owners via zero-friction two-way contact sharing.

**Step-by-Step User Flow**
1. **Discovery**: Onboards as an Office Occupier via mobile OTP. Explores Office properties and Developer Projects.
2. **Engagement**: Posts 1 free Office demand (validating Carpet vs. Built-up area, possession date, primary location + up to 4 secondary localities in the city).
3. **Conversion**: Clicks **[View Phone Number]** on a property listing. The system triggers the **Two-Way Reveal Mechanic**: instantly sends property owner details to the tenant via WhatsApp while concurrently sending tenant details (*Company Name, User Type, Mobile, Property ID*) to the owner via WhatsApp. Unlocks up to 5 direct contacts before an Enterprise prompt appears.
4. **Retention**: Receives real-time WhatsApp alerts for new relevancy matches. Uses the dashboard slider to track "Properties Contacted" (*capturing owner name, photo, and timestamp*).

**Calls to Action (CTAs)**
- **[Post Office Requirement]** *(Onboarding / Dashboard)*
- **[Explore Office Supply]** *(Search Bar)*
- **[View Phone Number]** *(Triggers Two-Way Reveal)*
- **[Show Interest]** *(Project Detail Page)*
- **[Also Interested in Managed Office?]**: Checkbox in Office signup that routes inquiry details to Keydemand admins.
- **[Enquire for Enterprise Solution]**: Pitch prompt after 1 free demand or when requesting >20 seats / >5,000 sq ft.

**Marketing Touchpoints**
- Acquisition Channels: Google Search Ads (*"Office space for rent in HSR Layout"*), LinkedIn Ads targeting Admin & HR Heads, Facility Directors.
- Messaging Hooks: *"Direct Landlord Access. Zero Broker Delays. Instant Office Contact Unlocks."*
- Retargeting Triggers: Email and WhatsApp remarketing summarizing newly listed office properties matching their exact budget and seat count.

##### 7. Tenant — Managed Office
**Objective:** Source flexible workspace, dedicated desks, or managed office hubs (classified under Projects) for expanding teams.

**Step-by-Step User Flow**
1. **Discovery**: Onboards as a Managed Space Tenant via mobile OTP. Explores Managed Space & Office properties/projects.
2. **Engagement**: Posts 1 free Managed Space demand (specifying number of seats, meeting rooms, lock-in period). *Note: Requirements >20 seats automatically route to the Enterprise onboarding funnel.*
3. **Conversion**: Clicks **[View Phone Number]** on Managed Office listings (triggers Two-Way Reveal with Keydemand team/operator) or **[Show Interest]** on Managed Centers under Projects.
4. **Retention**: Tracks submitted enquiries under the "Enquiries Sent" dashboard slider. Serviced offline or through managed partner updates.

**Calls to Action (CTAs)**
- **[Post Managed Space Search]** *(Dashboard)*
- **[Explore Managed Centers]** *(Projects Navbar)*
- **[View Phone Number]** *(Instant Reveal)*
- **[Show Interest]** *(Project Card CTA)*

**Marketing Touchpoints**
- Acquisition Channels: Search campaigns targeting flex workspace terms (*"Managed office seats in Cyber City"*), startup ecosystem partnerships.
- Messaging Hooks: *"Plug-and-Play Managed Offices & Flex Workspaces for Growing Teams."*
- Retargeting Triggers: Automated CRM escalation for searches >20 seats to schedule a direct consultation with a Keydemand Relationship Manager.

##### 8. Enterprise (Retail, F&B, Office, Managed Space)
**Objective:** Execute high-volume, multi-city corporate expansions (>5,000 sq ft or >20 seats) through dedicated portfolio management, pre-configured brand formats, and private offline servicing.

**Step-by-Step User Flow**
1. **Discovery**: Normal Brands and Tenants can get converted to Enterprise after their free quota is over. They can contact Keydemand to convert them to Enterprise. They are also onboarded via the offline Enterprise Solution page, "List a Project" enquiry form, or triggered automatically when requirement sizes exceed high-ticket thresholds (*>5,000 sq ft in Mumbai, >10,000 sq ft in Bangalore/Hyderabad, or >20 seats*). They are assigned a dedicated Keydemand Relationship Manager (RM).
2. **Engagement**: Logs into a multi-user corporate portal. Uses pre-configured **Brand Formats** (pre-set carpet area, store type, floor preference) where team members only select City and Location to deploy demands instantly. The RM performs bulk Excel uploads via the backend Control Panel.
3. **Conversion**: High-Ticket Leads (HTLs) bypass public agent feeds entirely and enter a private blackout pool managed exclusively by Keydemand.
4. **Retention**: Dedicated RM manages site visits and landlord negotiations. Dashboard presents custom portfolio views, assigned POC details, and unified lead status (*Approved, Rejected, Open - For Brands only*).

**Calls to Action (CTAs)**
- **[Click on Enterprise Solutions]** *(Enterprise Landing Page)*
- **[Click on Enterprise Solutions]** *(About Us Page)*
- **[Contact Relationship Manager]** *(Dashboard Floating CTA)*
- **[Call Now]** (Relationship Manager Card): Direct mobile dialer CTA to connect with assigned Keydemand Point of Contact (POC).

**Marketing Touchpoints**
- Acquisition Channels: Account-Based Marketing (ABM) targeting C-Suite, Heads of Real Estate, and Procurement Directors at Fortune 500 & Unicorn companies.
- Messaging Hooks: *"End-to-End Corporate Real Estate Expansion with Zero Market Leakage & Dedicated RM Support."*
- Retargeting Triggers: High-touch outreach via email and executive phone consultations, triggered immediately when a user submits a high-ticket demand.

### Business rules extracted
- **BR-ROL-001** — The V2 platform is a TypeScript mono repo: a single codebase for Web, Android and iOS (Svelte/SvelteKit + Capacitor; GraphQL and REST; Fastify; MongoDB Atlas; AWS S3, EC2/Elastic Beanstalk; Google Places API). _(§ Tech Stack)_
- **BR-ROL-002** — Brands (Retail & F&B) can browse and search property and project listings across Retail, F&B and Office categories. _(§ Brand Journey)_
- **BR-ROL-003** — Brands can post demands only matching their specific category (Retail or F&B). _(§ Brand Journey)_
- **BR-ROL-004** — Individual brands can view up to 5 property contacts directly. _(§ Brand Journey)_
- **BR-ROL-005** — Individual brands can post up to 3 demands for free; beyond that they must upgrade to enterprise. _(§ Brand Journey; Persona 4)_
- **BR-ROL-006** — When agents request to connect on a brand's demand, the brand has 4 working days (excluding weekends / Sat-Sun) to manually accept or reject before the request expires. _(§ Brand Journey; Persona 4, 5)_
- **BR-ROL-007** — Tenants (Office & Managed Space) can browse and search listings across Managed Space and Office categories. _(§ Tenant Journey)_
- **BR-ROL-008** — Office Tenants can post Office and Managed Space demands; Managed Space operators/occupiers can post only Managed Space. _(§ Tenant Journey; refined by doc 2 → BR-ROL-062)_
- **BR-ROL-009** — Two-Way Reveal: when a tenant clicks to view a property contact, supplier contact details are shared with the tenant and the tenant's verified details are automatically sent to the supplier, with no manual approval. _(§ Tenant Journey)_
- **BR-ROL-010** — In the Two-Way Reveal, owner details go to the tenant via WhatsApp and tenant details (Company Name, User Type, Mobile, Property ID) go to the owner via WhatsApp. _(§ Persona 6)_
- **BR-ROL-011** — Individual occupiers can view up to 5 property contacts directly and post 1 free demand; beyond that they must upgrade to enterprise. _(§ Tenant Journey Limits)_
- **BR-ROL-012** — Enterprise accounts support multiple regional acquisition managers logging in independently under one corporate brand account. _(§ Enterprise Journey)_
- **BR-ROL-013** — Enterprise brands cannot manage sub-users themselves; sub-users are managed via the Key Demand admin panel. _(§ Enterprise Journey)_
- **BR-ROL-014** — Enterprise brand templates (Brand Formats: pre-set carpet area, store type, floor preference) auto-populate specs so users only select City and Location to go live. _(§ Enterprise Journey; Persona 8)_
- **BR-ROL-015** — Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf; enterprise requirements must be bulk uploaded centrally through the Admin panel. _(§ Enterprise Journey — CONFLICTS with doc 2, see BR-ROL-063)_
- **BR-ROL-016** — High-ticket requirements bypass public agent feeds and route exclusively to an assigned Keydemand POC for private, offline servicing (private blackout pool). _(§ Enterprise Journey; Persona 8)_
- **BR-ROL-017** — Keydemand team members are onboarded exclusively via the backend and log in with mobile number + OTP. _(§ Keydemand Team Journey)_
- **BR-ROL-018** — Keydemand team is the only role authorized to search, filter and explore the global demands directory. _(§ Keydemand Team Journey)_
- **BR-ROL-019** — Keydemand users assigned to a brand cannot manually post or edit demands for that brand; enterprise requirements are managed via bulk or single upload in the Admin panel. _(§ Keydemand Team Journey)_
- **BR-ROL-020** — If a demand is managed exclusively by Keydemand, the "Self-View" and explore demand screens must show "Keydemand Team". _(§ Keydemand Team Journey)_
- **BR-ROL-021** — Internal users bypass public paywalls to view hidden contact numbers and images, and manage the High-Ticket Lead matching pool. _(§ Keydemand Team Journey)_
- **BR-ROL-022** — A restricted Broker Monitoring dashboard must let BD members monitor brokers they onboarded: requirements added, relevancies, contact attempts, leads received, missed calls, ignored image requests. _(§ Keydemand Team Journey)_
- **BR-ROL-023** — The Keydemand team exclusively handles all follow-ups and contact for mandated "Exclusive" projects. _(§ Keydemand Team Journey)_
- **BR-ROL-024** — Admins have master access via the backend Control Panel to oversee operations, approve or moderate listings and manage all user accounts. _(§ Admin Journey)_
- **BR-ROL-025** — Developers, Managed Space Operators and major Enterprise Brands are restricted from front-end signup and are manually onboarded by Admins; Admins can also add agents, Keydemand team, Brands and Tenants on the backend. _(§ Admin Journey)_
- **BR-ROL-026** — Admins set up subscription tiers, define Metro/Non-Metro pricing, add active cities, and can award zero-charge complimentary testing plans to agents. _(§ Admin Journey; Property Agent Journey)_
- **BR-ROL-027** — Admins assign dedicated Relationship Managers (POCs) to Enterprise accounts and can manually unlock hidden corporate demands to the agent pool. _(§ Admin Journey)_
- **BR-ROL-028** — Admins access full tracking logs including "Viewed by" history of who accessed sensitive client phone numbers or edited listings. _(§ Admin Journey)_
- **BR-ROL-029** — The platform is strictly separated into the "Control Panel" (Admin portal) and the "User Portal" (Web UI). _(§ Access & Privileges)_
- **BR-ROL-030** — The Control Panel is exclusively for user management, bulk uploads, platform oversight and configuring high-value leads. _(§ Access & Privileges)_
- **BR-ROL-031** — Agents, Brands (Retail & F&B) and Tenants (Office and Managed Space occupiers) self-register and log in on the front end with mobile number + OTP; admins can also add/configure/manage them in the Control Panel. _(§ Access & Privileges)_
- **BR-ROL-032** — Agents can list Office, Retail and F&B properties and post demands on behalf of clients. _(§ Property Agent Journey)_
- **BR-ROL-033** — Agents can view automatic property-demand matches, manage image requests and unlock contacts on their dashboard. _(§ Property Agent Journey)_
- **BR-ROL-034** — Free-tier (Trial) agents get exactly 1 free property listing, 1 free demand posting and 5 lifetime contact reveals. _(§ Property Agent Journey)_
- **BR-ROL-035** — Agent trial contact-unlock count of 5 includes rejections. _(§ Persona 3)_
- **BR-ROL-036** — Agent free listing and demand are strictly constrained to the agent's selected asset classes and cities. _(§ Persona 3)_
- **BR-ROL-037** — Pro Member (paid) agents get unlimited property listings, unlimited contact reveals and automatic real-time WhatsApp alerts. _(§ Agent Subscription)_
- **BR-ROL-038** — Subscriptions are billed on a monthly 30-day cycle, priced per city and asset class (Retail & F&B vs Office), with custom PAN India options. _(§ Agent Subscription)_
- **BR-ROL-039** — Price tiers: Metro ₹1,000/mo, Non-Metro ₹750/mo, PAN India ₹5,000/mo; checkout via native Razorpay. _(§ Persona 3)_
- **BR-ROL-040** — Cities can be added/removed mid-cycle; additions are prorated to the billing date; cancellations take effect next billing cycle. _(§ Agent Subscription)_
- **BR-ROL-041** — On plan expiry/cancellation, active listings stay public for exactly 3 months (inbound leads still captured) but contact unlocks are blocked without resubscription; after 3 months listings auto-deactivate. _(§ Agent Subscription)_
- **BR-ROL-042** — [Subscribe Now for Unlimited Access] / [Subscribe to Pro Plan] triggers the Razorpay flow upon exhausting trial caps (5 unlocks or 1 listing). _(§ Subscription CTAs)_
- **BR-ROL-043** — [Renew Membership] is shown on failed auto-payments or expiring plans; [Cancel Membership] halts auto-renewal from the next billing cycle; [Reactivate Account]/[Reactivate Plan] restores a deactivated/expired account from Homepage/Dashboard. _(§ Subscription CTAs)_
- **BR-ROL-044** — Master CTA matrix per persona (primary/secondary CTA/metric) as tabulated in § CTAs. _(§ CTAs)_
- **BR-ROL-045** — Unregistered user default city is Bengaluru; homepage shows top 7–10 city buttons, "Explore Listings" menu and a "1 Free Listing" banner. _(§ Persona 1)_
- **BR-ROL-046** — Search defaults: Asset Class = Office, Transaction Type = Lease, when unselected. _(§ Persona 1)_
- **BR-ROL-047** — Guest clicks on [View Phone Number], [Contact Us], [Request for Images] or project [Show Interest] are blocked and open the mobile OTP modal. _(§ Persona 1)_
- **BR-ROL-048** — After OTP verification and basic profile, the user is prompted to submit their first demand. _(§ Persona 1)_
- **BR-ROL-049** — "Other city" opens a full BookMyShow-style city overlay. _(§ Persona 1)_
- **BR-ROL-050** — [List your Project >>] is a navbar dropdown (Developer | Operator) opening a project enquiry form. _(§ Persona 1)_
- **BR-ROL-051** — [Request a Callback] captures mobile number only; [Send an Enquiry]/[Book a Demo] opens a representative's Calendly link. _(§ Persona 1)_
- **BR-ROL-052** — Registered user lands on a 6-card dashboard tracking Leads Received, Properties Contacted and Active Listings/Demands; red-dot flags mark new relevancy matches. _(§ Persona 2)_
- **BR-ROL-053** — On quota exhaustion, Agents see [Subscribe to Pro Plan]; Brands/Tenants see [Connect for Enterprise Solution] (Quota Exceeded Modal). _(§ Persona 2)_
- **BR-ROL-054** — [Request Contact] is the outbound request CTA on F&B and Retail brand demands. _(§ Persona 2)_
- **BR-ROL-055** — Agent dashboard shows a "Trial Plan" badge and usage counters ("Usage 0 of 1"). _(§ Persona 3)_
- **BR-ROL-056** — Agents can hide images with [Do Not Show Images] on the media upload form. _(§ Persona 3)_
- **BR-ROL-057** — Retail demands specify store format (Highstreet, Mall, Kiosk, Highway, etc.), carpet area and up to 3 secondary localities; F&B demands specify carpet area, floor preference, seating/utility needs, primary location + up to 3 secondary localities. _(§ Persona 4, 5)_
- **BR-ROL-058** — Attempting a 4th brand demand triggers the Enterprise upgrade flow / [Enquire for Enterprise Solution]. _(§ Persona 4, 5)_
- **BR-ROL-059** — Demands have automated 60-day validity checks. _(§ Persona 4)_
- **BR-ROL-060** — Brand "Leads Received" slider has 3 sub-tabs: Phone numbers viewed, Contact requests, Image requests. _(§ Persona 5)_
- **BR-ROL-061** — Office demand validates Carpet vs Built-up area, possession date, primary location + up to 4 secondary localities; "Properties Contacted" slider captures owner name, photo and timestamp. _(§ Persona 6)_
- **BR-ROL-064** — [Also Interested in Managed Office?] checkbox on Office signup routes inquiry details to Keydemand admins. _(§ Persona 6)_
- **BR-ROL-065** — Office tenant is pitched Enterprise after 1 free demand or when requesting >20 seats / >5,000 sq ft. _(§ Persona 6)_
- **BR-ROL-066** — Managed Space demand specifies number of seats, meeting rooms, lock-in period; requirements >20 seats automatically route to the Enterprise onboarding funnel. _(§ Persona 7)_
- **BR-ROL-067** — Managed office contact view triggers Two-Way Reveal with Keydemand team/operator; submitted enquiries tracked in "Enquiries Sent" slider. _(§ Persona 7)_
- **BR-ROL-068** — Brands/Tenants convert to Enterprise after free quota by contacting Keydemand, via the Enterprise Solution page, "List a Project" enquiry form, or automatically when size exceeds HTL thresholds (>5,000 sq ft Mumbai, >10,000 sq ft Bangalore/Hyderabad, or >20 seats); each gets a dedicated RM. _(§ Persona 8)_
- **BR-ROL-069** — RM performs bulk Excel uploads of enterprise demands via the backend Control Panel. _(§ Persona 8)_
- **BR-ROL-070** — Enterprise dashboard shows portfolio views, assigned POC details and unified lead status (Approved, Rejected, Open — for Brands only); [Call Now] on RM card opens the dialer to the POC. _(§ Persona 8)_
- **BR-NTF-001** — Registered users receive automated transactional WhatsApp alerts whenever a new property or demand matches their stored criteria. _(§ Persona 2)_
- **BR-NTF-002** — Nurture: WhatsApp Business API updates and personalized email digests of new matched listings (hook: "You have 3 new matching properties in Mumbai. Unlock details now."). _(§ Persona 2)_
- **BR-NTF-003** — In-app notification when free allowances hit 80% (e.g., "You have used 4 of your 5 free contacts"). _(§ Persona 2)_
- **BR-NTF-004** — OTP-modal drop-offs receive programmatic display ads and SMS/WhatsApp remarketing of trending properties in their searched city. _(§ Persona 1)_
- **BR-NTF-005** — Automated WhatsApp reminders on failed agent auto-payments include a direct [Renew Membership] link; reactivation campaigns are sent at day 60 of the 3-month grace period. _(§ Persona 3)_
- **BR-NTF-006** — Brands receive WhatsApp SLA countdown notifications (e.g., "You have 2 pending connection requests expiring in 24 hours"). _(§ Persona 4)_
- **BR-NTF-007** — F&B brands get WhatsApp updates when requests are actioned, and instant WhatsApp + red-dot alerts when a new F&B property matches their seating/carpet criteria. _(§ Persona 5)_
- **BR-NTF-008** — Office tenants receive real-time WhatsApp alerts for new relevancy matches and email/WhatsApp remarketing of new office listings matching budget and seat count. _(§ Persona 6)_
- **BR-NTF-009** — Managed-space searches >20 seats trigger automated CRM escalation to schedule a consultation with a Keydemand RM. _(§ Persona 7)_
- **BR-NTF-010** — High-ticket demand submission immediately triggers high-touch email and executive phone outreach. _(§ Persona 8)_

### Open questions / ambiguities in this doc
- Enterprise Journey says Keydemand users assigned to a brand **cannot** post/edit demands; doc 2 (newer) says POC **can**. Doc 2 wins on recency, but doc 2 still repeats "cannot" in its Keydemand Team section.
- "Managed Space operators can post only Managed Space" — operators are supply-side and are admin-onboarded (BR-ROL-025); likely means Managed Space occupiers/tenants (test user role `managed_space_occupier`).
- HTL thresholds stated only for Mumbai and Bangalore/Hyderabad here; HTL doc lists 8 Tier-1 HTL cities with admin-editable thresholds.
- Enterprise threshold appears as ">5,000 sq ft or >20 seats" (Objective, Persona 6) vs city-specific values (Persona 8).
- Registered User step 2 mixes caps: "1 free property or 1 free demand for agent" vs Agent sections "1 listing AND 1 demand".
- Office demand allows up to 4 secondary localities; Retail/F&B up to 3 — confirm intended.
- "₹INR/Month" placeholder in agent messaging hook; "[View Phone Number]]" typo in CTA matrix.
- Lead status "Approved, Rejected, Open - For Brands only" — unclear whether the qualifier applies to the whole list or only "Open".
- Persona 1/2 use "[Request for Images]"; persona 4/5 primary CTA matrix uses "[Request Phone number]" while persona 2 uses "[Request Contact]" — label not unified.
- Keydemand team is "the only role authorized to search the global demands directory", yet agents see demands under Relevancy — confirm "global directory" vs relevancy scope.

---
## Reference Guide to User Roles on Keydemand Platform  [AUTHORITATIVE — complementary; newer revision of overlapping sections]
**Source:** Google Doc · ID `1v84nXG7_YORBZH2okgSiOfibYemXa7zZ3KK9KliOqcM` · pradeepa.pv@futuristglobal.com · modified 2026-10-06 (created 2026-09-04) · sections read: Access & Privileges preamble, Property Agent Journey, Agent Subscription, Brand Journey, Tenant Journey, Enterprise Journey, Keydemand Team Journey, Admin / Super Admin Journey · comments: none · read coverage: 100%

This doc covers only the role-journey and access sections. Its text is otherwise identical to the matching sections of doc 1 (transcribed above), so only differences are listed instead of re-transcribing. It is not a pure subset: it is newer (2026-10-06 vs 2026-09-22) and changes three rules, so both are kept AUTHORITATIVE and **doc 2 wins on overlapping role-journey rules**.

### Differences vs doc 1 (13IxQ…)
- **Missing from doc 2 (exists only in doc 1):** DEV LINK and LOGINS, Tech Stack, Master CTA & Conversion Matrix, all 8 Persona journeys, and the "Subscription & Membership CTAs" list under Agent Subscription.
- **Order:** doc 2 lists sections as Access preamble → Property Agent → Agent Subscription → Brand → Tenant → Enterprise → Keydemand Team → Admin; Brand/Tenant journeys list "Space Requirements"/"Office Space Demands" before "Explore Properties".
- **Changed — Tenant Journey, Office Space Demands:** doc 1 "Office Tenants can post Office and Managed Space" → doc 2 quote: "Office Tenants can post Office and Managed Space(if they have ticked also interested in managed space during onboarding journey); Managed Space operators can post only Managed Space."
- **Changed — Enterprise Journey, Enterprise Restrictions:** doc 1 "Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf. Enterprise requirements must be bulk uploaded centrally through the Admin panel." → doc 2 quote: "Key Demand users(POC) assigned to a brand can post or edit demands on that brand's behalf. Enterprise requirements can also be bulk-uploaded centrally through the Admin panel."
- **Added (only in doc 2) — Keydemand Team Journey, Relevancy:** "Relevancy: Keydemand team properties and demands get matched with their own postings, other KD members, agents, brands and tenants."
- **Unchanged inside doc 2 (internal conflict):** Keydemand Team "Posting Restrictions" still says Keydemand users assigned to a brand "cannot manually post or edit demands on that brand's behalf".

### Business rules extracted
- **BR-ROL-062** — Office Tenants can post Managed Space demands only if they ticked "also interested in managed space" during onboarding; otherwise Office only. _(§ Tenant Journey — supersedes BR-ROL-008)_
- **BR-ROL-063** — Key Demand users (POC) assigned to a brand can post or edit demands on that brand's behalf; enterprise requirements can also be bulk-uploaded via the Admin panel. _(§ Enterprise Journey — supersedes BR-ROL-015; contradicts BR-ROL-019 restated in this same doc)_
- **BR-ROL-071** — Keydemand team properties and demands are matched (relevancy) with their own postings, other KD members, agents, brands and tenants. _(§ Keydemand Team Journey)_
- All other rules in this doc are identical to BR-ROL-002…BR-ROL-034, BR-ROL-037…BR-ROL-041 above.

### Open questions / ambiguities in this doc
- Enterprise Restrictions (POC **can** post/edit) contradicts Keydemand Team Posting Restrictions (**cannot**) within the same doc — needs a PO decision.

---
## Notifications Breakdown  [AUTHORITATIVE]
**Source:** Google Doc · ID `1HkwJ-9ZHhL9snZmncJVg0iWImGh_L5lBKWdkgYDAZPo` · pradeepa.pv@futuristglobal.com · modified 2026-10-16 (created 2026-01-02) · sections read: whole doc (Daily cap / daily digest / typical per day explainer; Toast vs Push; "Typical per day 0.02"; How are they calculated) · comments: none · read coverage: 100% of text. File size (35 KB) suggests embedded images (likely the spreadsheet screenshot referenced as "your screenshot") which are not returned by the reader.

**Important:** this doc does **not** contain the notification matrix itself (triggers, recipients, channels, template text, timing per notification). It explains the columns of the "Notification Final" tab of a Product Requirements spreadsheet, which is not in this group. It links to `KeyDemand Daily Summary.pdf` (ID `1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452`, PDF, modified 2026-06-11), which was not assigned and not read.

### Content
**What is Daily Cap, daily digest, typical per day.**

In product design, a **daily cap** is the maximum limit on how many notifications the system is allowed to send a user in a single day. This prevents notification fatigue and keeps users from disabling alerts or uninstalling the app.

The **"Counts to daily cap"** column dictates whether a specific notification uses up one of the slots in that daily allowance.

Based on the rules written at the top of your spreadsheet (Row 2), *"Anything the user did themselves is a receipt and does not count towards the daily cap."*
- **No (Does not count):** These are usually essential, user-triggered transactional alerts (like a password reset or an instant receipt). They must be sent immediately, regardless of how many other alerts the user has received that day.
- **Yes (Counts):** These are system-generated nudges, updates, or marketing alerts. For example, in Row 6, the toast message *"Complete your profile for better recommendations"* has a "Yes" in this column. If a user has already hit their maximum notification limit for the day, the system will skip sending this nudge.

Based on the context of the notification plan you are viewing, a **daily digest** is an aggregated summary of notifications sent to a user once a day, rather than pinging them instantly for every single event.

In your spreadsheet, the **"In daily digest"** column determines whether a specific alert gets bundled into this single daily recap (like a daily summary email or a single push notification) or if it is sent out on its own.

Product teams use daily digests to reduce notification fatigue, ensuring users stay informed without feeling spammed by constant alerts.

<https://drive.google.com/file/d/1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452/view>

Based on the "Notification Final" tab of the Product Requirements spreadsheet you are viewing, these are column headers defining how different system notifications will behave in the Keydemand app.
- **Typical per day:** This represents the estimated average number of times a specific notification will be triggered for a single user in a given day. Product managers use this to estimate server load and ensure they aren't spamming users (which relates to the "Counts to daily cap" column next to it).
- **Toast text:** A "toast" is a small, temporary pop-up message that appears briefly at the bottom or top of the screen while the user is actively using the app (e.g., "Welcome to Keydemand. Your account is active."). This column defines the exact copy for those messages.
- **Push text:** This defines the copy for push notifications, which are the alerts sent to the user's phone lock screen or notification center, even when the app is closed.

**What does "Typical per day 0.02" mean?**
In row 6, the toast text is *"Complete your profile for better recommendations."* with a "Typical per day" rate of **0.02**.
Mathematically, 0.02 times per day means this notification is expected to occur roughly **once every 50 days** per user (1 ÷ 0.02 = 50), or it means that on any given day, only about **2% of users** will receive this specific nudge. It indicates a very low-frequency reminder.

**How are they calculated?** Before an app launches, these numbers are usually **estimated** based on expected user behavior, rather than calculated with a strict mathematical formula. Product managers assign these values based on how often they expect a user to trigger a specific event:
- **Values of 1:** Represents an action expected to happen exactly once a day (e.g., a daily digest or logging in).
- **Values like 0.3 to 0.6:** Represents actions happening a few times a week. For example, 0.5 means the user does this about once every two days.
- **Values like 0.01 to 0.02:** Represents rare actions, happening maybe once a month or once every 50 days (like updating a profile or a subscription renewal).
- **Values of 0:** Represents extreme edge cases, error states, or hard limits (like rows 30 and 31 in your screenshot, which warn users that they have maxed out their current plan).

[Image: likely screenshot of the "Notification Final" spreadsheet tab, referenced as "your screenshot" — not visible to the reader]

### Business rules extracted
- **BR-NTF-011** — The system enforces a per-user daily cap on the number of notifications sent per day. _(§ Daily cap)_
- **BR-NTF-012** — "Anything the user did themselves is a receipt and does not count towards the daily cap"; such user-triggered transactional alerts are sent immediately regardless of the cap. _(§ Daily cap, spreadsheet Row 2)_
- **BR-NTF-013** — System-generated nudges, updates and marketing alerts count towards the daily cap and are skipped once the user has hit the cap. _(§ Daily cap)_
- **BR-NTF-014** — Each notification has an "In daily digest" flag; flagged alerts are bundled into a once-a-day summary (e.g., daily summary email or a single push) instead of being sent individually. _(§ Daily digest)_
- **BR-NTF-015** — Notification channels/attributes per notification include: Counts to daily cap (Yes/No), In daily digest, Typical per day, Toast text (in-app transient pop-up shown while user is active), Push text (lock screen / notification centre, app closed). _(§ column headers)_
- **BR-NTF-016** — Toast "Complete your profile for better recommendations." counts to daily cap (Yes), typical per day 0.02. _(§ Row 6)_
- **BR-NTF-017** — Example toast on activation: "Welcome to Keydemand. Your account is active." _(§ Toast text)_
- **BR-NTF-018** — Plan-maxed-out warnings exist (spreadsheet rows 30 and 31) with typical per day 0. _(§ How are they calculated)_

### Open questions / ambiguities in this doc
- The actual notification catalogue (every trigger, recipient, channel incl. email/SMS/WhatsApp, template text, timing) is in the "Notification Final" tab of a Product Requirements spreadsheet that is not in this group — needs to be located and extracted.
- The daily cap value (max notifications per day) is not stated.
- Daily digest send time and channel (email vs push) are not stated.
- Doc mentions "password reset" as an example though the platform uses mobile OTP only (no passwords) — generic example, not a requirement.
- Linked `KeyDemand Daily Summary.pdf` (ID `1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452`) not read (out of assigned scope).

---
## HTL workflow  [AUTHORITATIVE]
**Source:** Google Doc · ID `1eUnwSbr1CxBnc1VANFYdSp2h92QsTOeXAaGmcaZDtsQ` · pradeepa.pv@futuristglobal.com · modified 2026-06-30 · sections read: intro; 1 HTL Logic & Workflow; 2 Hamburger Menu Architecture; 3 Administrative Access Controls; 4 Finalized Terminology & Profile Logic · comments: none · read coverage: 100%

### Content
This improved summary incorporates the specific granular details on HTL workflow.

#### 1. High-Ticket Lead (HTL) Logic & Workflow
The HTL system acts as a "gatekeeper" for high-value transactions, prioritizing the internal Keydemand team while maintaining a manual release valve for the broader marketplace.
- **Custom Thresholds:** Requirement size limits (e.g., 10k SFT for Bangalore, 5k SFT for Mumbai) are fully editable via the Admin Control Panel on a city-by-city basis.
- **The "Manual Unlock" Mechanic:** If the internal team cannot service an HTL within n number of days days, an Admin can manually "unlock" the requirement. It then becomes visible to Regular **Property Agents** under their "Relevancy" tab—but *only* if they have a property listing that matches the criteria.
- **Notification Routing:** Leads are routed to specific **Account Handlers** based on city assignments (e.g., Hyderabad leads route to specific team members like Shankar/AJ).
- **Geographic Tiers:**
  - **Tier 1 (HTL Cities):** Bangalore, Hyderabad, Chennai, Coimbatore (noted as a high-growth GCC market), Pune, Mumbai, Gurgaon, and Delhi.
  - **Tier 2 (Open Cities):** Leads in cities like Jaipur or Indore are a "level playing field" and visible to everyone under Relevancy regardless of size.
- **Agent-to-Agent Visibility:** Requirements added by agents themselves bypass the HTL size restrictions and are visible to other agents if relevant.

#### 2. Keydemand User Portal: Hamburger Menu Architecture
To cater to non-tech-savvy sales/BD staff, the internal portal will feature a highly explicit, partitioned menu structure. Each primary category is split into "My" (personal/assigned) and "Overall" (company-wide) views:
1. **Listings:**
   - *My Listings:* Properties/Requirements added by the user.
   - *Keydemand Listings:* Team-wide inventory/demands for cross-selling.
2. **Projects:**
   - *My Projects:* Projects specifically tagged to the user.
   - *All Projects:* Every project listed on the platform.
3. **Enterprise Accounts (Brands/Tenants/Developers):**
   - *My Assigned:* Brands (e.g., McDonald's) the user manages.
   - *All Enterprise Accounts:* The full company roster.
4. **High Ticket Leads:**
   - *My Leads:* HTLs in the user's assigned city.
   - *Overall/Company Leads:* Every HTL captured across all target cities.
5. **Activity & Management:**
   - *Notifications & Inquiries:* Direct inbound requests.
   - *Shortlists/Favorites:* Saved items.
   - *Broker Management:* A dedicated view for team members responsible for onboarding and managing external brokers.

#### 3. Administrative Access Controls
A strict "Separation of Concerns" is enforced between business operations and platform management:
- **The Control Panel (Super Admin):** Restricted to a core 4-5 person team (Kartik, Sudanchu, Himmanu, Nitesh). Used for creating new UserTypes (e.g., "Broker Sales," "Front-end Transaction"), managing granular permissions, and setting city-wise HTL caps.
- **The User Portal (Business Ops):** 100% of daily operations—BD, Sales, Lead management, and Broker onboarding—occur within the **User Portal**. No BD or sales staff are permitted to access the backend Admin panel to avoid UI complexity and data risk.

#### 4. Finalized Terminology & Profile Logic
- **Leads vs. Inquiries:** A lead is captured immediately upon **OTP validation** (Phone number). If the user doesn't complete the profile, it remains an "Incomplete Lead" for team follow-up.
- **Nomenclature:** "Agent" is now **Property Agent**; "Tenant" is now **Office Tenant**.
- **Pre-Registration Hook:** The "One Free Listing" incentive must be displayed **Pre-Wall** (before the registration modal) to increase conversion.
- **Trial Plan UI:** User profiles must explicitly state: *"You are on a Trial Plan. X of 1 Listings used. Subscribe for unlimited access."*

### Business rules extracted
- **BR-HTL-001** — HTL size thresholds are configurable per city in the Admin Control Panel (examples: Bangalore 10k SFT, Mumbai 5k SFT). _(§ 1 Custom Thresholds)_
- **BR-HTL-002** — HTLs are reserved for the internal Keydemand team by default (gatekeeper). _(§ 1)_
- **BR-HTL-003** — If the internal team cannot service an HTL within n days, an Admin can manually unlock it. _(§ 1 Manual Unlock)_
- **BR-HTL-004** — An unlocked HTL becomes visible to regular Property Agents in their "Relevancy" tab only if they have a matching property listing. _(§ 1 Manual Unlock)_
- **BR-HTL-005** — HTLs are routed (notified) to Account Handlers by city assignment (e.g., Hyderabad → Shankar/AJ). _(§ 1 Notification Routing)_
- **BR-HTL-006** — Tier 1 HTL cities: Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi. _(§ 1 Geographic Tiers)_
- **BR-HTL-007** — Tier 2 (Open) cities (e.g., Jaipur, Indore): leads are visible to everyone under Relevancy regardless of size. _(§ 1 Geographic Tiers)_
- **BR-HTL-008** — Requirements added by agents bypass HTL size restrictions and are visible to other agents if relevant. _(§ 1 Agent-to-Agent Visibility)_
- **BR-HTL-009** — Keydemand User Portal hamburger menu has 5 categories each split into "My" and "Overall" views: Listings (My Listings / Keydemand Listings), Projects (My Projects / All Projects), Enterprise Accounts (My Assigned / All Enterprise Accounts), High Ticket Leads (My Leads / Overall/Company Leads), Activity & Management (Notifications & Inquiries, Shortlists/Favorites, Broker Management). _(§ 2)_
- **BR-HTL-010** — "My Leads" shows HTLs in the user's assigned city; "Overall/Company Leads" shows every HTL across all target cities. _(§ 2)_
- **BR-HTL-011** — The Control Panel (Super Admin) is restricted to a core 4-5 person team and is used to create new UserTypes (e.g., "Broker Sales", "Front-end Transaction"), manage granular permissions and set city-wise HTL caps. _(§ 3)_
- **BR-HTL-012** — All daily BD, Sales, Lead management and Broker onboarding happen in the User Portal; BD/sales staff must not access the backend Admin panel. _(§ 3)_
- **BR-HTL-013** — A lead is captured immediately on OTP (phone) validation; if the profile is not completed it remains an "Incomplete Lead" for team follow-up. _(§ 4)_
- **BR-HTL-014** — Nomenclature: "Agent" → "Property Agent"; "Tenant" → "Office Tenant". _(§ 4)_
- **BR-HTL-015** — The "One Free Listing" incentive must be shown pre-wall (before the registration modal). _(§ 4)_
- **BR-HTL-016** — Trial user profiles must state: "You are on a Trial Plan. X of 1 Listings used. Subscribe for unlimited access." _(§ 4)_

### Open questions / ambiguities in this doc
- Manual unlock window is "n number of days" — value not defined; is it configurable?
- Is there any threshold for seats (managed space) in HTL logic? Not mentioned here (doc 1 says >20 seats).
- Super Admin team is "4-5 person" but only 4 names listed.
- Whether unlocked HTLs also reach brands/tenants via relevancy is not stated (only Property Agents).
- Specific thresholds for the other 6 Tier-1 cities not given.

---
## Role catalogue (consolidated)
| Role | Description | Sub-types | Key CTAs | Apps used |
|---|---|---|---|---|
| Unregistered User (Guest) | Browses properties/projects; nudged to register on high-intent actions | — | [Verify Mobile OTP], [Explore Properties], [View Phone Number], [Show Interest], [Request a Callback], [Book a Demo], [List your Project >>], [Enterprise Solution], [Agent Subscription] | Web, Mobile (App Store / Google Play) |
| Registered User (generic) | Any OTP-verified user using free allowances | Agent / Brand / Tenant (below) | [Post Free Demand / Listing], [View Phone Number], [Request Contact], [Manage Dashboard], [Connect for Enterprise Solution] | Web, Mobile |
| Property Agent (formerly "Agent") | Lists Office/Retail/F&B properties and posts demands for clients; Trial → Pro Member | Trial (1 listing, 1 demand, 5 lifetime reveals); Pro Member (paid; Metro ₹1,000 / Non-Metro ₹750 / PAN India ₹5,000 per month); Complimentary (₹0, admin-assigned); Grace period (3 months) | [Post Property], [Post Demand], [Do Not Show Images], [Subscribe to Pro Plan], [Confirm and Pay]/[Start Subscription], [Renew Membership], [Cancel Membership], [Reactivate Account]/[Reactivate Plan] | Web, Mobile (self-register); also manageable in Control Panel |
| Brand | Posts expansion demands in own category; accepts/rejects agent connection requests within 4 working days | Retail; F&B; Individual (3 free demands, 5 reveals) vs Enterprise | [Post Retail Demand]/[Post F&B Requirement], [Explore Retail Supply], [Accept/Reject Connection Request], [Request for Images], [View Phone Number], [Enquire for Enterprise Solution] | Web, Mobile |
| Tenant / Occupier | Posts office/managed-space demands; Two-Way Reveal on contact view | Office Tenant (formerly "Tenant"; can post Managed Space if ticked interest); Managed Space Tenant/Occupier; Individual (1 free demand, 5 reveals) vs Enterprise | [Post Office Requirement], [Post Managed Space Search], [Explore Office Supply], [Explore Managed Centers], [View Phone Number], [Show Interest], [Also Interested in Managed Office?], [Enquire for Enterprise Solution] | Web, Mobile |
| Enterprise (Brand/Tenant) | Large multi-city occupiers; multi-user corporate portal; brand formats; HTLs routed privately to RM/POC | Retail, F&B, Office, Managed Space; regional acquisition managers (sub-users managed by admin) | [Submit Enterprise RFP / Callback], [Enterprise Solutions], [Contact Relationship Manager], [Call Now] | Web/Mobile corporate portal; onboarding & bulk upload via Control Panel |
| Developer / Managed Space Operator | Supply-side project listers; cannot self-signup | Developer; Operator | [List your Project >>] (Developer \| Operator) enquiry | Onboarded via Control Panel; projects shown on Web/Mobile |
| Keydemand Team (internal BD/Sales/POC/RM/Account Handler) | Internal users: global demand search, paywall bypass, HTL pool, broker monitoring, exclusive project follow-up | POC / Relationship Manager; Account Handler (city-based HTL routing); BD (Broker Management); custom UserTypes e.g. "Broker Sales", "Front-end Transaction" | Hamburger menu: My/Keydemand Listings, My/All Projects, My Assigned/All Enterprise Accounts, My/Overall HTLs, Notifications & Inquiries, Shortlists, Broker Management | User Portal (Web) only; backend-onboarded; no Control Panel access |
| Admin / Super Admin | Master control: user management, onboarding, plans/cities/pricing, HTL thresholds & manual unlock, RM assignment, audit logs | Super Admin (core 4-5 person team); Admin | Control Panel functions (bulk upload, approve/moderate listings, complimentary plans, unlock HTL) | Control Panel (Admin portal) |

---
## Group-level notes
### Version history
- Doc 1 (V2 guide, modified 2026-09-22) and doc 2 (Roles guide, modified 2026-10-06) share identical role-journey text, except three edits in doc 2. Neither title has a version number. Doc 1 has much more scope (dev links, tech stack, CTAs, personas). Doc 2 is a newer revision of the overlapping part only, so they are **complementary**: both AUTHORITATIVE, and doc 2 overrides doc 1 where they overlap (Office Tenant managed-space condition, POC posting rights, KD relevancy).
- HTL workflow (2026-06-30) predates both role guides; it is the only source for HTL tiers, manual unlock and the User Portal menu. Its nomenclature ("Property Agent", "Office Tenant") is reflected in later docs.
- Notifications Breakdown is an explainer only; the real notification matrix lives in a separate "Notification Final" spreadsheet tab (not in this group).

### Conflicts across docs in this group
- **POC posting for enterprise brands:** doc 1 "cannot post or edit"; doc 2 Enterprise section "can post or edit" (doc 2 newer → authoritative), but doc 2 Keydemand Team section still says "cannot". Unresolved — PO decision needed.
- **HTL thresholds:** HTL doc — editable per city (e.g., Bangalore 10k, Mumbai 5k SFT) across 8 Tier-1 cities; doc 1 Persona 8 — >5,000 sq ft Mumbai, >10,000 sq ft Bangalore/Hyderabad, or >20 seats; doc 1 Persona 6/8 objective — flat >5,000 sq ft / >20 seats. HTL doc (admin-configurable) should govern; seat threshold exists only in doc 1.
- **Who sees HTLs after unlock:** HTL doc — only Property Agents with a matching listing via Relevancy; doc 1 Admin journey — "manually unlocking hidden corporate demands to the agent pool" (consistent, less specific).
- **Global demand search:** doc 1/2 — Keydemand team is the only role allowed to search the global demands directory; HTL doc — Tier-2 leads and agent-posted requirements are "visible to everyone under Relevancy". Consistent only if Relevancy (matched) ≠ global search; confirm.
- **Managed Space Operators:** doc 1/2 say operators "can post only Managed Space" (demand side) while also listing them as admin-onboarded supply-side users who cannot self-signup — likely a terminology mix-up with Managed Space occupiers.
- **Notifications:** role docs specify WhatsApp/email/SMS/in-app/red-dot alerts (BR-NTF-001…010); Notifications Breakdown only defines toast/push/daily-digest/daily-cap semantics. No doc in this group gives the full trigger/recipient/channel/template/timing matrix.
