# 10 — Keydemand Team (internal RM/Team) Pages & Dashboard

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Version 2.0 Keydemand Team Specific Page - Registered | Google Doc | `1IZWe79BBcaBqgGX4qD6znl04o3hEQrn8DymvikBkAGo` | pradeepa.pv@futuristglobal.com | 2026-10-06 | AUTHORITATIVE |
| 2 | Version 1.0 Keydemand Team Specific Page - Registered | Google Doc | `1nVz-XohH3SKJdUITQN4jcrj80fLOpKN3QDwK4ZFLOos` | pradeepa.pv@futuristglobal.com | 2026-09-27 | HISTORY (superseded by Version 2.0 Keydemand Team Specific Page - Registered) |
| 3 | Version 2 - Keydemand team- Specific Page | Google Doc | `1n6PzXkU9SDqkshGX5yj73_VcUxXfNSPA5I7KY7ZdM84` | pradeepa.pv@futuristglobal.com | 2026-07-02 | HISTORY (superseded by Version 2.0 Keydemand Team Specific Page - Registered) |
| 4 | Keydemand Team Specific Page - Registered | Google Doc | `1WY7UGhRfw0_wHdLDbVc8IUv2iFVQTgKtHsHvDqUZw8M` | pradeepa.pv@futuristglobal.com | 2026-08-10 | HISTORY (superseded by Version 2.0 Keydemand Team Specific Page - Registered) |
| 5 | Keydemand team- Specific Page | Google Doc | `1ltuysizKtddbyFNpYRs836Oh57TvwdSEz0QLM5sx2Ck` | pradeepa.pv@futuristglobal.com | 2026-07-29 | HISTORY (superseded by Version 2.0 Keydemand Team Specific Page - Registered) |
| 6 | Version 1.0 - Keydemand Team- Dashboard 30062026 - Final.docx | Word (.docx) | `1Iql1n5LaO46KTs3ticv3Hfk33E2d32Y2` | pradeepa.pv@futuristglobal.com | 2026-08-10 | AUTHORITATIVE (dashboard family) |
| 7 | Keydemand Team- Dashboard 30062026 - Final.docx | Word (.docx) | `1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr` | pradeepa.pv@futuristglobal.com | 2026-08-12 | HISTORY (superseded by Version 1.0 - Keydemand Team- Dashboard 30062026 - Final.docx) |

---
## Version 2.0 Keydemand Team Specific Page - Registered  [AUTHORITATIVE]
**Source:** Google Doc · ID `1IZWe79BBcaBqgGX4qD6znl04o3hEQrn8DymvikBkAGo` · owner pradeepa.pv@futuristglobal.com · created 2026-09-28 · modified 2026-10-06 · sections read: Business Rules (1–9), Header, Hamburger (Profile) 1–6, Body (Dashboard 1.1–1.6 + landing-page sections 3–10) · comments: none returned · read coverage: 100%

### Content

###### Business Rules

**1. Account Management & User Permissions**
- **Onboarding & Authentication:** Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP.
- **Role-Based Access:** Account creation is strictly permission-based; specific privileges are managed via the admin portal.
- **Profile Management Restrictions:** The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend.
- **Inventory Lifecycle:** Deactivation and Deletion of Keydemand team: The listings needs to be assigned to another KD team user before they delete the account or deactivate account.
- **Team Inventory Capabilities:** Keydemand members can view the inventory of other team members within their "Listings" dashboard, but they are strictly restricted to editing only their own self-listings.
- **Backup Coordination:** If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline.
- **"My Listings" CRUD Privileges:** Keydemand team must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted.
- **"Keydemand Listings" (Colleague Data):** Properties and Demands posted by other Key Demand team members must be strictly "Read-Only" for colleagues; users cannot edit, delete, or deactivate other colleague's listings.
- **Future Phase (Scope):** In a future release phase, Keydemand users will be permitted to add projects and developers directly.
- **Property and Demand Posting:** They can add Office, Retail, and F&B and managed space properties and demands.

**2. Login Flow & Dashboard Navigation**
- **Immediate Dashboard Redirect:** Keydemand users must be redirected straight to their Dashboard immediately upon logging in.
- **Mobile UX Optimization:** The mobile app interface must abandon horizontal tables in favour of a card/thumbnail-based layout to optimise screen space and usability.
- **Dashboard Routing Logic:**
  - Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics.
- **Interactive Drill-Downs:** All aggregate metrics on the Dashboard (e.g., Active Properties, Active Demands, Projects) must be clickable, leading to a granular, filtered list view of the items being counted.
- **Hamburger Menu & Holistic View:** Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. By clicking the hamburger menu, they should see a summary of all assigned brands/tenants (demands, relevancies, contact requests, project inquiries) without needing to switch accounts.
- **Custom Side-Menu Segmentation:** A custom side-menu for keydemand users must bypass standard filters and segment views into "My" (User-specific/Assigned) vs. "Overall" (Company-wide/All). It must explicitly list: Dashboard, Profile, Listings (My/KD), Projects (Assigned/All), Enterprise Accounts (Assigned/All), High Ticket Leads (My City/Overall), Notifications, leads, and Saved/Shortlisted items.
- **Grid Toggles:** Dashboards must feature a dedicated switch to toggle between "High-Value" and "Standard" inventory views.
- **Filters & Sorting:** The dashboard must include comprehensive filtering (e.g., City) and sorting options (e.g., "Most Demands," "Most Properties Posted," "Most Leads Received").

**3. High-Ticket Lead (HTL) Ecosystem**
- **HVL Definition & Dynamic Thresholds:** Requirements exceeding specific size thresholds (e.g., >10,000 sq ft in Bangalore/Hyderabad; >5,000 sq ft in Mumbai) are classified as HTLs. The Admin must have controls in the panel to define and edit these square footage limits on a per-city basis. High-value leads are exclusively new, fresh inquiries or registrations that meet or exceed specific size (sq. ft.) thresholds based on asset class and city.
- **Cross-Asset Application:** HTL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes.
  - Exclusion: Day-to-day operational requirements posted by existing, onboarded enterprise brands (e.g., Raymond, H&M) are not categorized as high-value leads in this context.
  - Standard Leads: If a new inquiry falls below the high-value threshold (e.g., a 6,000 sq. ft. restaurant requirement where the benchmark is 8,000), it bypasses explicit RM notification and is instantly unlocked/visible to all existing agents on the platform.
- **Tier 1 vs. Tier 2 Routing:** HTL restrictions only apply to Tier 1 markets (Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi). Leads in Tier 2 cities (e.g., Jaipur, Indore) bypass this and remain open to all agents regardless of size.
- **Exclusive Routing:** HTLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents.
- **Global Access vs. Local Alerts:** While notifications for a new HTL are localized to the assigned city members, all Keydemand team members possess global access to view HTLs pan-India.
- **Manual Unlock Valve:** If the Keydemand team cannot service an HTL within a specific timeframe (e.g., 3-4 days), Admins can manually "unlock" the requirement. This pushes it into the public relevancy pool, making it visible to external agents strictly under the relevancy matching engine.
- **Agent-Added Exemption:** Demands posted directly by agents bypass HTL restrictions entirely and remain visible to other agents via relevancy matching.

**4. Visibility, Relevancy & Image Security**
- **"Posted By" Transparency:** To external audiences, internal demands/properties display as "Keydemand." However, internally, the team will see the specific name of the uploading team member (e.g., "Posted by Himanshu").
- **Exclusive Indicators:** If a demand is managed exclusively by Keydemand, the "Self-View" and explore demand screens must explicitly indicate "Keydemand Team".
- **Hidden Image Protocols:** If a listing owner selects "Do not show images", external users cannot view them. However, Keydemand teams *can* always see these images, overlaid with a banner reading "Hidden to others".
- **Thumbnail Rule:** The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view.
- **Image Request CTA Prevention:** To prevent sourcing conflicts, the "View Image Request" CTA button must be completely removed (or greyed out/disabled) for Keydemand users when they view external agent properties.
- **Relevancy Matching Scope:** Keydemand team properties and demands get matched with their own postings, other KD members, agents, brands and tenants.
- **Demand Exploration Exclusivity:** The Keydemand team is the *only* party authorised to explore demands. Specifically, "Managed Space" demands are visible exclusively to Keydemand and hidden from everyone else.

**5. Enterprise Accounts Breakdown & Pipeline Management**
- **Enterprise Account Dashboard Breakdown:** The dashboard must calculate the total aggregate of enterprise users (e.g., 500) and segment them into:
  - **Assigned to Me:** Total count assigned to the logged-in user.
  - **Assigned to Others:** Balance managed by the rest of the team.
  - **Sub-Category Itemisation:** The "Assigned to Me" count must explicitly break down into itemised values for *Retail and Office Brands*, *Office Tenants*, and *Managed Spaces*.
- **Posting Restrictions:** Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload centrally through the Admin panel.
- **CRM Pipeline (Lite):** The Admin Dashboard tracks enterprise leads through explicit CRM stages: *New, In Discussion, Site Visit, Negotiation, Closed, Lost*. It also logs the assigned representative and the last activity date. (Phase 2)
- **Lead Statusing:** Leads for Enterprise Clients are strictly categorised as *Approved, Rejected,* or *Open*. [source has a stray "6" after this sentence]
- **Alerting & Highlights:** New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page.

**6. Action Tracking & Accountability Audits**
- **Metric Definition ("User Contacted"):** The "User Contacted" metric must increment *exclusively* when the "View Phone Number" button is clicked, as offline physical calls cannot be tracked.
- **Direct Contact CTAs:** The Keydemand team does not need to use "Request Phone Number" workflows for relevant demands; they are provided with an explicit "View Phone Number" CTA for direct, instant access.
- **Outbound Contact Logs:** "Properties Contacted" logs for Enterprise clients must capture the Property ID, associated photo, and the exact date of contact for audit purposes.
- **Lead Access Audit Trail:** Clicking the "View Requirement" CTA unlocks the lead's mobile number and automatically updates the "Viewed" status (Yes/No) with a timestamp.
- **Accountability Tracking:** A "Viewed by" column must maintain a timestamped log of exactly which Keydemand team member accessed a lead.

**7. Broker Management & Projects**
- **Broker Monitoring View:** A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers they have onboarded. This tracks requirements added, relevancies, contact attempts, leads received, missed calls, and ignored image requests to counter broker complaints.
- **Project Addition:** Projects can only be added strictly via the backend control panel by the Admin team.
- **Project Categorization:** Projects must be sorted by "Category" (*Standard, Premium, Exclusive*) within the tables.
- **Exclusive Project Follow-up:** The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated "Exclusive" projects.
- **Enquiry Granularity:** All project lists must support a drill-down for "Enquiries Received," capturing user metadata (type, name, mobile, email, timestamp, and specific projects of interest).

**8. RM (Relationship Manager) Assignment & Lead Visibility**
- **Account-Level Assignment:** An RM is assigned at the overarching entity/account level for a specific city. For example, one RM managing Aditya Birla in Hyderabad automatically handles all its sub-brands (Peter England, Louis Philippe, etc.) for that region.
- **Nomenclature:** "RM" is strictly an internal administrative term. The end-client/brand does not need to see this specific internal title; to them, this person is simply their point of contact.
- **Cross-Collaboration ("Others" Tab):** While leads are assigned to specific RMs (visible in their "Assigned" tab), other team members can view these leads under the "Others" or "All" tabs. This allows other team members to step in and fulfill the requirement using their macro-level connections if the assigned RM fails to source an option.
- **Notifications:** Once an admin unlocks a high-value lead to all agents, notifications are only sent to agents who have a *relevant property* matching the demand, following standard regular demand workflows.

**9. Notifications & Routing**
- **Notification Filtering:** Notifications must be segmentable, allowing users to filter by specific triggers such as "All leads for my listings," "Tagged projects," or "Relevancies".
- **Enquiry Routing Logic:** The system must automate routing based on the specific interaction type (e.g., direct developer enquiries, enterprise conversion prompts, or support requests)

###### Header
1. **Keydemand logo** - Will take us back Home page
2. **Post property** - They can add all other types of properties like Office, Retail and F&B and Managed space
3. **Post demand** - They can add all other types of properties like Office, Retail and F&B, managed space
4. **Explore Properties** - They can explore all properties
5. **Explore Demands** - They can explore all demands
6. **Notification** - All notifications with redirections
   - Demand Relevancy - Instant
   - Property Relevancy
   - Image Request
   - Phone number Request
   - Marketing notifications
   - New Demands Uploaded (Area Specific) - Not there presently
   - New Projects Uploaded
   - Demand/Property Active Status (3 Months once)

###### Hamburger (Profile)

##### 1. Dashboard (relevancy + leads)
It must be a live impromptu dashboard with all necessary information of **our listings.**
- **Properties** — 1500
  - Self — 300
  - KD Properties — 1200
- **Demands** — 1200
  - Self — 200
  - KD Demands — 1000
- **Projects** — 250
  - Assigned — 50
  - All — 200
- **Enterprise Users** — 500 (This denotes the total number of enterprise users in the platform)
  - Assigned — 50
    - All — 20
  - **High Value leads** — 50 [rendered as a heading nested under Enterprise Users in the source]
    - Assigned — 10
    - All — 40
  - Property Agents
    - Search
    - City search

**Demand Listings** - A summary or the total number of the agent's own demands
**Property Listings** - A summary or the total number of the agent's own property listings
**Phone number viewed** - Number of users who have viewed the Keydemand team member's phone number
**Image request** - The total *number* of image requests received by the agent.
**Property Relevancy** - Listing presented to the agent's demand
**Demand Relevancy** - Demands's presented to agent's property
**Project Interested** - Projects that the they have shown interest in or chosen as favourites

The following are the filters: Search bar, City, Asset Class, Transaction, Status and Sort with the following buttons.
**Properties**
**Demands**
Clicking on each of them will will reveal a detailed card of their listings.
**For more detailed information check the Dashboard in Body Section.**

##### 2. Edit profile
- User Info
  - Name
  - Number
  - Email
  - Photo
  - Designation
  - Assigned city (Multiple)
  - [empty bullet in source]
- Roles & permissions (as per user type)
  - Dashboard
  - Explore Property
  - Explore Demand
  - Post Property
  - Post Demand
  - Broker Management
  - My Listings
  - Keydemand Listings
  - Assigned Brands & Tenants
  - Keydemand Brands & Tenants
  - Tagged Projects
  - All Projects
  - High Value Leads

[Favourites](https://d3nkiewgx0jg9g.cloudfront.net/saved)
[Your Listings](https://d3nkiewgx0jg9g.cloudfront.net/dashboard)
[Notifications](https://d3nkiewgx0jg9g.cloudfront.net/notifications)
The above redirect to the respective pages.
They will not have Edit, Delete, or Deactivate buttons here. They can only be done on Backend.

##### 3. Saved
- Properties - Properties chosen as Favourites will appear here as cards.
- Projects - Projects chosen as Favourites will appear here as cards.
- Demands - Demands chosen as Favourites will appear here as cards.

Filters (Property and Demand) - All, Mixed use, Retail, Office, F&B
Filter (project) - Mixed use, IT park

##### 4. Notifications
**Notifications**
- All leads for my listings
- All leads for tagged projects
- Relevancies for my listings & tagged projects

**Enquiries**
- Direct Developer / Managed space enquiries
- Conversion prompt for a brand into an enterprise account
- Office tenant adding multiple or opting for managed space
- Support request raised by Ent. user
- High Value Lead Enquiries

WhatsApp - About Notifications, if they want to stop receiving messages.
Help - contact@keydemand.in

##### 5. Leads
Total leads -
By Status - Closed, New, Contacted - This is Phase 2. What is the plan
The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. It also logs the assigned representative and the last activity date. (Phase 2)

**- Table Column Headers**
- Contact Requests
- Image Requests

Contact Requests Table

| NAME | ROLE | PHONE | DATE |
|---|---|---|---|

Image Requests Table

| NAME | ROLE | PHONE | DATE | STATUS |
|---|---|---|---|---|

By Source - Example Developer Onboarding, Project Interest, Managed Space Operator Onboarding, Enterprise Solution, Landing Enquire, Managed Office Interest, Pending Registration

Filters
- New
- Contacted
- Qualified
- Close
- Landing Page Enquiries
- Enterprise Solution
- Project Interest
- City

##### 6. Logout

#### Body
Once the Keydemand user logins, Dashboard will open. Only when the Keydemand logo is clicked, it goes back to the landing page.

##### 1. Dashboard
Overview
Properties
Demands
Projects
Enterprise
High Value Leads
Property Agents

**Keydemand User Dashboard**:

###### 1.1 Properties
Displays a total count of active properties (e.g., 1500), broken down into:
- **Self/My Properties:** Properties posted by the logged-in user (e.g., 300).
- **KD Properties:** Properties posted by other Keydemand team members (e.g., 1200).

**Flow**
- **List View:** Clicking on these metrics opens a list/card view displaying the Property ID, Asset Class, Transaction Type, City, Location, Size, Relevancy, Leads, and Date Added. Property photos are always visible on thumbnails for the KD team, even if hidden from external users.
- **Actions:** Under "My Properties," users have full Edit and Delete privileges. "KD Properties" are read-only and display an "Added by [Name]" tag.
- **Relevancy:** Clicking on relevancy shows matching demands. The KD team can directly reach out by viewing the mobile number of the brand or tenant.
- **Leads:** Clicking on leads displays "Image Requests" and "Phone numbers viewed" tracking.

**Dashboard Slider Interactions for leads**
- **Leads Received**: To see a list of leads received, click "Leads Received." The slider will open and display the respective received leads for properties When clicked on number of leads, then it opens 2 tabs. just image requests and phone numbers viewed.
  - **Phone numbers viewed:** To see a list of phone numbers, click "Phone numbers viewed" The slider will open and display the numbers viewed.
  - **Image Requests**: To see a list of image requests, click "Image Requests." The slider will open and display the image requests. Can accept or reject requests.

Self - Property Card
- Size
- Property Id
- Asset Class
- TransactionType
- City
- Location
- Relevancy
- Leads
- Date Posted
- CTA - Edit, Deactivate, Delete

KD-Property Card
- Size of
- Property Id
- Asset Class
- TransactionType
- City
- Location
- Relevancy
- Leads
- Added by
- Date Posted

###### 1.2. Demands
Displays a total count of active demands (e.g., 1200), broken down into:
- **Self/My Demands:** Demands posted by the logged-in user (e.g., 200).
- **KD Demands:** Demands posted by other Keydemand team members (e.g., 1000).

**Flow**
- **List View:** Clicking opens a list view (typically without images) showing Demand ID, Asset Class, Transaction Type, City, Location, Size, Relevancy, Leads, and Date Added.
- **Actions:** Similar to properties, "My Demands" can be edited/deleted, while "KD Demands" are read-only.
- **Relevancy:** Clicking on relevancy displays matching properties.
- **Leads:** Clicking on leads shows a log of "My Contact Viewed."

**Dashboard Slider Interactions for leads**
- **Leads Received**: To see a list of leads received, click "Leads Received." The slider will open and display the respective received leads

**Phone numbers viewed:** To see a list of phone requests, click "Phone numbers viewed" The slider will open and display the numbers viewed.

Self - Demand Card
- Size
- Demand Id
- Asset Class
- TransactionType
- City
- Location
- Relevancy
- Leads
- Date added
- CTA - Edit, Deactivate, Delete

KD - Demand Card
- Size of
- Demand Id
- Asset Class
- TransactionType
- City
- Location
- Relevancy
- Leads
- Date Posted
- Posted by

###### 1.3. Projects
Displays a total count of projects (e.g., 250), broken down into:
- **Assigned Projects:** Projects specifically assigned to the logged-in user (e.g., 50).
- **All Projects:** All projects on the platform (e.g., 200).

**Flow:**
- **List View:** Both sections display projects with images in a list view, showing Project Name, Developer/Operator Name, Location, City, Project Type, Category (Standard, Premium, Exclusive), and Members Assigned.
- **Enquiries Received:** Users can drill down into enquiries to see the User Type, Name, Mobile Number, Email, and the Date of the enquiry. For "Exclusive" projects, the Keydemand team is strictly responsible for handling follow-ups.

Assigned - Project Card
- Project Name
- Developer or Operator Name
- Location
- City
- Project Type
- Enquiries received
- Members assigned
- Project ID
- Category

All - Project Card
- Project Name
- Developer or Operator
- Location
- City
- Project Type
- Category - Standard/Premium/Exclusive
- Members assigned
- Project ID
- Enquiries received

Assigned Projects & All Projects should show the images in a list view approach

###### 1.4. Enterprise Users (Brands / Office Tenants / Managed Spaces)
Displays the total number of enterprise users on the platform (e.g., 500), segmented into:
- **Assigned (e.g., 50):** Broken down into Brands (20), Office Tenants (20), and Managed Spaces (10).
- **All (e.g., 450):** Broken down into Brands (200), Office Tenants (200), and Managed Spaces (50).

**Flow**
- **List View:** Displays Asset Class, Number of Demands, Formats, Properties Contacted (Outbound), Leads Received (Approved/Rejected/Open), and Relevancy.
- **Formats:** Clicking on the number of formats reveals the specific backend templates uploaded for that brand (e.g., Brand Name, Carpet Area, Store Type, Possession Needed).
- **Properties Contacted (Outbound):** Shows the Property ID, owner name, mobile number, and the exact date contacted.
- **Leads Received (Inbound):** Tracks the CRM pipeline status of leads (Approved, Rejected, Pending).
- **Alerts:** Any new relevancies or leads for assigned enterprise clients are visually highlighted and route the user directly to the respective page.

Assigned Demand Card
- Brand/Tenant Name
- Asset Class
- No of Demands :-1
- Formats :-2
- Properties Contacted :-3
- Relevancy :-4
- Leads: Open, Approved, Rejected -5

Clicking on Demands -1
- Demand ID - clicking on it will open full details page where the POC can edit/delete/deactive.
- Asset Class
- Transaction
- City
- Location
- Size
- Relevancy
- Leads

Clicking on Format :2
- Brand name
- Transaction type
- Carpet Area:
- Store type
- Floor Preference
- Possession needed
- OC required

Clicking on Properties Contacted :-3
- Property ID with photo
- Name of the owner
- Mb. # of property owner (Mobile Number)
- Date contacted

Clicking on Relevancy :-4
- Demand ID
- Relevant Property ID → Property page
- Relevancy %

Clicking on Leads Received: 5
- Demand ID
- Relevant Property ID → Property page
- Approved
- Rejected
- Pending

**All Demand Card**
- Brand/Tenant Name
- Asset Class
- Demands: - 1
- Formats: -2
- Properties Contacted :- 3
- Assigned to
- Leads: Open, Approved, Rejected - 5

Clicking on Demands -1
- Demand ID - clicking on it will open full details page. clicking on it will open full details page where the POC can edit/delete/deactive.
- Asset Class
- Transaction
- City
- Location
- Size
- Relevancy
- Leads

Clicking on Format :2
- Brand name
- Transaction type
- Carpet Area:
- Store type
- Floor Preference
- Possession needed
- OC required

Clicking on Properties Contacted :-3
- Property ID with photo
- Name of the owner
- Mb. # of property owner (Mobile Number)
- Date contacted

Clicking on Leads Received: 5
- Demand ID
- Relevant Property ID → Property page
- Approved
- Rejected
- Pending

###### 1.5. High Value Leads
Displays the total number of High-Ticket Leads (e.g., demands exceeding specific square footage thresholds like 5,000+ sq ft), segmented into:
- **Assigned:** High-value leads assigned to the user (e.g., 10).
- **All:** High-value leads assigned to the rest of the team (e.g., 40).

Assigned
- Asset Class
- City
- Size
- View lead
- Date received
- Viewed - Yes/No

If the user clicks on View lead, the timestamp with 'Yes' under Viewed would come up; if not, then it would read 'No'.
If multiple cards are assigned as leads, when clicking View Lead will open phone number.

###### 1.6. Property Agents
Filters
- Name
- Mob No.
- City
- Subscribed - Yes/no
- Subscription details - 1
- Properties added - 2
- Demands added - 3
- Leads received - 4
- Enquiries sent - 5
- Reg. date
- Source / Mode

Clicking on Subscription details - 1
- Date subscribed
- Asset class
- Past subscriptions
- Current invoice (download)
- Past invoices (≤ 5)

Clicking on Properties added - 2
- So. No.
- Property. ID
- Asset Class
- Transaction Type
- City
- Location
- Size
- Relevancy
- Leads

Clicking on Demands added - 3
- So. No.
- Demand ID
- Asset Class
- Transaction Type
- City
- Location
- Size
- Relevancy
- Leads

Clicking on Leads received - 4
- Image Request
- My Contact Viewed

Clicking on Enquiries sent - 5
- Phone Number Viewed
- Images requested
- Project enquired
- Brand contact requested

###### Landing-page sections (when Keydemand logo clicked)
The following are the same sections as on the Landing page when clicked on Keydemand logo.

The banner on the landing page need to be auto carousel for 5s -
- Header
  - Title
  - Sub Header
- Explore Property
- City * (Mandatory)
  - Drop Down
    - Metro cities followed by All cities in India (A-Z)
- Asset Class
  - Office
  - Retail
  - F&B
- Transaction Type
  - Lease
  - Sales
- Search Bar
  - Enter Locality/Search - Multi-use search bar (Should have Google location), Project name, property name.

When a user searches for a city by name, it should display the city's properties and projects.
- Search CTA
  - Blank state
  - Filtered state

When the user comes in the next time, his previous searches, aka recent searches and new searches, are shown

**Recent Searches**
- City
- Location
- Transaction Type

**New Properties**
- Property/Property Name
- Store Type
- Location
- City
- Carpet Area
- Quoted Rent

**3. Premium Projects**
**Keydemand team can show interest by filling in the CTA**
CTA - Show Interest - A pre-filled form that can go from his profile
- Name
- Mobile
- Email
- User Type
Message shown: Thank you for showing interest

**4. Exclusive projects**
**Agents can show interest by filling in the CTA**
CTA - Show Interest - A pre-filled form that can go from his profile
- Name
- Mobile
- Email
- User Type
Message shown: Thank you for showing interest

**5. Explore Properties in <city> - Here even managed space can be shown**
CTA - View Phone Number, where the number will be shown

**6. Explore Projects in <city>**
CTA - Show Interest - A pre-filled form that can go from his profile
- Name
- Mobile
- Email
- User Type
Message shown: Thank you for showing interest

**7. Top cluster in <city>** - Hidden for Now - Phase 2

**8. Explore real estate in popular Cities**
CTA - Explore - Opens all properties/projects as per the city chosen

**9. About Keydemand -**
- CTA
  - Request a Callback - To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory.
  - Form Fields
    - Name
    - Email
    - Phone number
    - I am - User types
    - Message

**10. Footer**
Same as in the landing page

### Business rules extracted
- **BR-KDT-001** — Keydemand team members are onboarded exclusively via the backend. _(§ BR 1 Onboarding & Authentication)_
- **BR-KDT-002** — Keydemand team members log in using their mobile number and an OTP. _(§ BR 1 Onboarding & Authentication)_
- **BR-KDT-003** — Account creation is strictly permission-based; specific privileges are managed via the admin portal. _(§ BR 1 Role-Based Access)_
- **BR-KDT-004** — The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend. _(§ BR 1 Profile Management Restrictions; Hamburger 2 Edit profile)_
- **BR-KDT-005** — Edit profile shows no Edit, Delete, or Deactivate buttons; these can only be done on Backend. _(§ Hamburger 2)_
- **BR-KDT-006** — Before a KD team user's account is deleted or deactivated, their listings need to be assigned to another KD team user. _(§ BR 1 Inventory Lifecycle)_
- **BR-KDT-007** — Keydemand members can view the inventory of other team members within their "Listings" dashboard but can edit only their own self-listings. _(§ BR 1 Team Inventory Capabilities)_
- **BR-KDT-008** — If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline. _(§ BR 1 Backup Coordination)_
- **BR-KDT-009** — Keydemand team have full CRUD privileges strictly over the properties and demands they have personally posted. _(§ BR 1 "My Listings" CRUD)_
- **BR-KDT-010** — Properties and Demands posted by other KD team members are strictly Read-Only; users cannot edit, delete, or deactivate colleagues' listings. _(§ BR 1 "Keydemand Listings")_
- **BR-KDT-011** — Adding projects and developers directly by Keydemand users is future-phase scope (not current). _(§ BR 1 Future Phase)_
- **BR-KDT-012** — Keydemand team can post Office, Retail, F&B and Managed space properties and demands. _(§ BR 1 Property and Demand Posting; Header 2–3)_
- **BR-KDT-013** — Keydemand users are redirected straight to their Dashboard immediately upon login. _(§ BR 2; Body intro)_
- **BR-KDT-014** — Only clicking the Keydemand logo takes the KD user back to the landing page / Home page. _(§ Body intro; Header 1)_
- **BR-KDT-015** — Mobile app must use a card/thumbnail-based layout instead of horizontal tables. _(§ BR 2 Mobile UX Optimization)_
- **BR-KDT-016** — Clicking any user card routes the KD user to a read-only view of that user's dashboard statistics. _(§ BR 2 Dashboard Routing Logic)_
- **BR-KDT-017** — All aggregate dashboard metrics (e.g., Active Properties, Active Demands, Projects) must be clickable, leading to a filtered list view of the counted items. _(§ BR 2 Interactive Drill-Downs)_
- **BR-KDT-018** — From the hamburger menu, RMs see a summary of all assigned brands/tenants (demands, relevancies, contact requests, project inquiries) without switching accounts. _(§ BR 2 Hamburger Menu & Holistic View)_
- **BR-KDT-019** — The KD side-menu segments views into "My" (User-specific/Assigned) vs "Overall" (Company-wide/All) and lists: Dashboard, Profile, Listings (My/KD), Projects (Assigned/All), Enterprise Accounts (Assigned/All), High Ticket Leads (My City/Overall), Notifications, leads, Saved/Shortlisted. _(§ BR 2 Custom Side-Menu Segmentation)_
- **BR-KDT-020** — Dashboards must have a switch to toggle between "High-Value" and "Standard" inventory views. _(§ BR 2 Grid Toggles)_
- **BR-KDT-021** — Dashboard must offer filtering (e.g., City) and sorting (e.g., "Most Demands", "Most Properties Posted", "Most Leads Received"). _(§ BR 2 Filters & Sorting)_
- **BR-KDT-022** — Requirements exceeding per-city size thresholds (e.g., >10,000 sq ft Bangalore/Hyderabad; >5,000 sq ft Mumbai) are classified as HTLs. _(§ BR 3 HVL Definition)_
- **BR-KDT-023** — Admin panel must allow defining and editing HTL square-footage limits per city. _(§ BR 3 HVL Definition)_
- **BR-KDT-024** — HVLs are exclusively new, fresh inquiries or registrations that meet or exceed size thresholds based on asset class and city. _(§ BR 3 HVL Definition)_
- **BR-KDT-025** — HTL rules and threshold routing apply across Office, Retail and F&B asset classes. _(§ BR 3 Cross-Asset Application)_
- **BR-KDT-026** — Day-to-day operational requirements posted by existing, onboarded enterprise brands (e.g., Raymond, H&M) are not HVLs. _(§ BR 3 Exclusion)_
- **BR-KDT-027** — A new inquiry below the HV threshold bypasses RM notification and is instantly unlocked/visible to all existing agents (e.g., 6,000 sq ft restaurant vs 8,000 benchmark). _(§ BR 3 Standard Leads)_
- **BR-KDT-028** — HTL restrictions apply only to Tier 1 markets: Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi. _(§ BR 3 Tier 1 vs Tier 2)_
- **BR-KDT-029** — Leads in Tier 2 cities (e.g., Jaipur, Indore) remain open to all agents regardless of size. _(§ BR 3 Tier 1 vs Tier 2)_
- **BR-KDT-030** — HTLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents. _(§ BR 3 Exclusive Routing)_
- **BR-KDT-031** — New-HTL notifications go only to the assigned city's KD members. _(§ BR 3 Global Access vs Local Alerts)_
- **BR-KDT-032** — All KD team members can view HTLs pan-India. _(§ BR 3 Global Access vs Local Alerts)_
- **BR-KDT-033** — If KD cannot service an HTL within a timeframe (e.g., 3-4 days), Admins can manually "unlock" it, pushing it into the public relevancy pool visible to external agents only via relevancy matching. _(§ BR 3 Manual Unlock Valve)_
- **BR-KDT-034** — Once an admin unlocks an HVL, notifications go only to agents with a relevant property matching the demand (standard demand workflow). _(§ BR 8 Notifications)_
- **BR-KDT-035** — Demands posted directly by agents bypass HTL restrictions and remain visible to other agents via relevancy matching. _(§ BR 3 Agent-Added Exemption)_
- **BR-KDT-036** — To external audiences, KD-posted demands/properties display as posted by "Keydemand"; internally KD team sees the uploader's name (e.g., "Posted by Himanshu"). _(§ BR 4 "Posted By" Transparency)_
- **BR-KDT-037** — If a demand is managed exclusively by Keydemand, the Self-View and explore demand screens must indicate "Keydemand Team". _(§ BR 4 Exclusive Indicators)_
- **BR-KDT-038** — If a listing owner selects "Do not show images", external users cannot view them; KD team can always see them with a "Hidden to others" banner overlay. _(§ BR 4 Hidden Image Protocols)_
- **BR-KDT-039** — Property thumbnails are shown to KD team in all list views even if images are hidden externally. _(§ BR 4 Thumbnail Rule; Body 1.1)_
- **BR-KDT-040** — The "View Image Request" CTA must be removed (or greyed out/disabled) for KD users viewing external agent properties. _(§ BR 4 Image Request CTA Prevention)_
- **BR-KDT-041** — KD team properties and demands are matched with their own postings, other KD members, agents, brands and tenants. _(§ BR 4 Relevancy Matching Scope)_
- **BR-KDT-042** — The KD team is the only party authorised to explore demands. _(§ BR 4 Demand Exploration Exclusivity; Header 5)_
- **BR-KDT-043** — "Managed Space" demands are visible exclusively to Keydemand and hidden from everyone else. _(§ BR 4 Demand Exploration Exclusivity)_
- **BR-KDT-044** — KD team can explore all properties. _(§ Header 4)_
- **BR-KDT-045** — Dashboard shows total enterprise users (e.g., 500) segmented into Assigned to Me and Assigned to Others (balance). _(§ BR 5; Body 1.4)_
- **BR-KDT-046** — "Assigned to Me" breaks down into Retail and Office Brands, Office Tenants, and Managed Spaces. _(§ BR 5 Sub-Category Itemisation)_
- **BR-KDT-047** — KD users assigned to a brand cannot manually post or edit demands on that brand's behalf; enterprise requirements are uploaded (bulk or single) centrally via the Admin panel. _(§ BR 5 Posting Restrictions)_
- **BR-KDT-048** — (Phase 2) Admin Dashboard CRM-lite stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost; logs assigned representative and last activity date. _(§ BR 5 CRM Pipeline; Hamburger 5 Leads)_
- **BR-KDT-049** — Enterprise client leads are categorised strictly as Approved, Rejected, or Open. _(§ BR 5 Lead Statusing)_
- **BR-KDT-050** — New relevancies, leads and enquiries for assigned enterprise clients are visually highlighted and route directly to the respective page. _(§ BR 5 Alerting; Body 1.4 Alerts)_
- **BR-KDT-051** — "User Contacted" increments exclusively when "View Phone Number" is clicked. _(§ BR 6 Metric Definition)_
- **BR-KDT-052** — KD team gets a "View Phone Number" CTA (no "Request Phone Number" workflow) for relevant demands. _(§ BR 6 Direct Contact CTAs)_
- **BR-KDT-053** — Enterprise "Properties Contacted" logs capture Property ID, associated photo, and exact date of contact. _(§ BR 6 Outbound Contact Logs)_
- **BR-KDT-054** — Clicking "View Requirement" unlocks the lead's mobile number and sets "Viewed" to Yes with a timestamp (otherwise "No"). _(§ BR 6 Lead Access Audit Trail; Body 1.5)_
- **BR-KDT-055** — A "Viewed by" column keeps a timestamped log of which KD team member accessed a lead. _(§ BR 6 Accountability Tracking)_
- **BR-KDT-056** — A restricted dashboard view lets Business Development members monitor onboarded external brokers' activity (requirements added, relevancies, contact attempts, leads received, missed calls, ignored image requests). _(§ BR 7 Broker Monitoring View)_
- **BR-KDT-057** — Projects can only be added via the backend control panel by the Admin team. _(§ BR 7 Project Addition)_
- **BR-KDT-058** — Project tables are sorted by Category (Standard, Premium, Exclusive). _(§ BR 7 Project Categorization)_
- **BR-KDT-059** — KD team is exclusively responsible for follow-up/contact on mandated "Exclusive" projects. _(§ BR 7; Body 1.3)_
- **BR-KDT-060** — All project lists support "Enquiries Received" drill-down capturing user type, name, mobile, email, timestamp, and projects of interest. _(§ BR 7 Enquiry Granularity; Body 1.3)_
- **BR-KDT-061** — An RM is assigned at entity/account level per city and automatically handles all its sub-brands in that region (e.g., Aditya Birla Hyderabad → Peter England, Louis Philippe). _(§ BR 8 Account-Level Assignment)_
- **BR-KDT-062** — "RM" is an internal term only; not shown to the end-client/brand (shown simply as point of contact). _(§ BR 8 Nomenclature)_
- **BR-KDT-063** — Leads assigned to an RM appear in their "Assigned" tab; other team members can view them under "Others"/"All" tabs. _(§ BR 8 Cross-Collaboration)_
- **BR-KDT-064** — Notifications are filterable by trigger (e.g., "All leads for my listings", "Tagged projects", "Relevancies"). _(§ BR 9 Notification Filtering)_
- **BR-KDT-065** — Enquiry routing is automated by interaction type (direct developer enquiries, enterprise conversion prompts, support requests). _(§ BR 9 Enquiry Routing Logic)_
- **BR-KDT-066** — Header notifications (with redirections): Demand Relevancy (Instant), Property Relevancy, Image Request, Phone number Request, Marketing notifications, New Demands Uploaded (Area Specific — not there presently), New Projects Uploaded, Demand/Property Active Status (once every 3 months). _(§ Header 6)_
- **BR-KDT-067** — Hamburger dashboard shows Properties (Self/KD), Demands (Self/KD), Projects (Assigned/All), Enterprise Users (Assigned/All), High Value leads (Assigned/All), Property Agents (Search, City search). _(§ Hamburger 1)_
- **BR-KDT-068** — "Phone number viewed" = number of users who have viewed the KD team member's phone number. _(§ Hamburger 1)_
- **BR-KDT-069** — Dashboard filters: Search bar, City, Asset Class, Transaction, Status, Sort; buttons Properties and Demands each reveal a detailed listing card. _(§ Hamburger 1)_
- **BR-KDT-070** — Edit profile User Info fields: Name, Number, Email, Photo, Designation, Assigned city (Multiple). _(§ Hamburger 2)_
- **BR-KDT-071** — Roles & permissions (per user type): Dashboard, Explore Property, Explore Demand, Post Property, Post Demand, Broker Management, My Listings, Keydemand Listings, Assigned Brands & Tenants, Keydemand Brands & Tenants, Tagged Projects, All Projects, High Value Leads. _(§ Hamburger 2)_
- **BR-KDT-072** — Profile links redirect: Favourites → /saved, Your Listings → /dashboard, Notifications → /notifications (https://d3nkiewgx0jg9g.cloudfront.net/...). _(§ Hamburger 2)_
- **BR-KDT-073** — Saved shows favourited Properties, Projects and Demands as cards; filters (Property/Demand): All, Mixed use, Retail, Office, F&B; filter (Project): Mixed use, IT park. _(§ Hamburger 3)_
- **BR-KDT-074** — Notifications page groups: Notifications (All leads for my listings; All leads for tagged projects; Relevancies for my listings & tagged projects) and Enquiries (Direct Developer / Managed space enquiries; Conversion prompt for a brand into an enterprise account; Office tenant adding multiple or opting for managed space; Support request raised by Ent. user; High Value Lead Enquiries). _(§ Hamburger 4)_
- **BR-KDT-075** — WhatsApp setting lets users stop receiving notification messages; Help = contact@keydemand.in. _(§ Hamburger 4)_
- **BR-KDT-076** — Leads page "By Status" (Closed, New, Contacted) is Phase 2. _(§ Hamburger 5)_
- **BR-KDT-077** — Contact Requests table columns: NAME, ROLE, PHONE, DATE. _(§ Hamburger 5)_
- **BR-KDT-078** — Image Requests table columns: NAME, ROLE, PHONE, DATE, STATUS. _(§ Hamburger 5)_
- **BR-KDT-079** — Leads "By Source" values: Developer Onboarding, Project Interest, Managed Space Operator Onboarding, Enterprise Solution, Landing Enquire, Managed Office Interest, Pending Registration. _(§ Hamburger 5)_
- **BR-KDT-080** — Leads filters: New, Contacted, Qualified, Close, Landing Page Enquiries, Enterprise Solution, Project Interest, City. _(§ Hamburger 5)_
- **BR-KDT-081** — Body dashboard tabs: Overview, Properties, Demands, Projects, Enterprise, High Value Leads, Property Agents. _(§ Body 1)_
- **BR-KDT-082** — Property list view fields: Property ID, Asset Class, Transaction Type, City, Location, Size, Relevancy, Leads, Date Added. _(§ Body 1.1)_
- **BR-KDT-083** — "My Properties" have full Edit and Delete; "KD Properties" are read-only with an "Added by [Name]" tag. _(§ Body 1.1)_
- **BR-KDT-084** — Self Property Card CTAs: Edit, Deactivate, Delete; KD Property Card has no CTAs and shows "Added by". _(§ Body 1.1 cards)_
- **BR-KDT-085** — Clicking property relevancy shows matching demands; KD can reach out by viewing the brand/tenant mobile number. _(§ Body 1.1)_
- **BR-KDT-086** — Clicking property leads opens a slider with 2 tabs: Image Requests and Phone numbers viewed. _(§ Body 1.1 slider)_
- **BR-KDT-087** — In the property Image Requests slider tab, the user can accept or reject requests. _(§ Body 1.1 slider)_
- **BR-KDT-088** — Demand list view (typically without images) fields: Demand ID, Asset Class, Transaction Type, City, Location, Size, Relevancy, Leads, Date Added. _(§ Body 1.2)_
- **BR-KDT-089** — "My Demands" can be edited/deleted; "KD Demands" are read-only and show "Posted by". _(§ Body 1.2)_
- **BR-KDT-090** — Self Demand Card CTAs: Edit, Deactivate, Delete. _(§ Body 1.2 cards)_
- **BR-KDT-091** — Clicking demand relevancy shows matching properties; clicking demand leads shows the "My Contact Viewed" log. _(§ Body 1.2)_
- **BR-KDT-092** — Projects (Assigned and All) are shown with images in a list view with fields Project Name, Developer/Operator Name, Location, City, Project Type, Category (Standard/Premium/Exclusive), Members Assigned, Project ID, Enquiries received. _(§ Body 1.3)_
- **BR-KDT-093** — Enterprise Users: Assigned (e.g., 50 = Brands 20, Office Tenants 20, Managed Spaces 10); All (e.g., 450 = Brands 200, Office Tenants 200, Managed Spaces 50). _(§ Body 1.4)_
- **BR-KDT-094** — Enterprise list view: Asset Class, Number of Demands, Formats, Properties Contacted (Outbound), Leads Received (Approved/Rejected/Open), Relevancy. _(§ Body 1.4)_
- **BR-KDT-095** — Clicking Formats reveals backend-uploaded templates for the brand: Brand name, Transaction type, Carpet Area, Store type, Floor Preference, Possession needed, OC required. _(§ Body 1.4)_
- **BR-KDT-096** — Properties Contacted drill-down: Property ID with photo, Name of the owner, Mobile number of property owner, Date contacted. _(§ Body 1.4)_
- **BR-KDT-097** — Enterprise Relevancy drill-down: Demand ID, Relevant Property ID (→ Property page), Relevancy %. _(§ Body 1.4)_
- **BR-KDT-098** — Enterprise Leads Received drill-down: Demand ID, Relevant Property ID (→ Property page), Approved, Rejected, Pending. _(§ Body 1.4)_
- **BR-KDT-099** — Enterprise Demands drill-down: Demand ID (opens full details page where the POC can edit/delete/deactivate), Asset Class, Transaction, City, Location, Size, Relevancy, Leads. _(§ Body 1.4)_
- **BR-KDT-100** — All Demand Card shows Brand/Tenant Name, Asset Class, Demands, Formats, Properties Contacted, Assigned to, Leads (Open, Approved, Rejected); it has no Relevancy item. _(§ Body 1.4 All Demand Card)_
- **BR-KDT-101** — HVL Assigned list fields: Asset Class, City, Size, View lead, Date received, Viewed (Yes/No). _(§ Body 1.5)_
- **BR-KDT-102** — If multiple cards are assigned as leads, clicking View Lead opens the phone number. _(§ Body 1.5)_
- **BR-KDT-103** — Property Agents list fields: Name, Mob No., City, Subscribed (Yes/no), Subscription details, Properties added, Demands added, Leads received, Enquiries sent, Reg. date, Source / Mode. _(§ Body 1.6)_
- **BR-KDT-104** — Subscription details drill-down: Date subscribed, Asset class, Past subscriptions, Current invoice (download), Past invoices (≤ 5). _(§ Body 1.6)_
- **BR-KDT-105** — Agent Properties/Demands added drill-downs: So. No., Property ID / Demand ID, Asset Class, Transaction Type, City, Location, Size, Relevancy, Leads. _(§ Body 1.6)_
- **BR-KDT-106** — Agent Leads received drill-down: Image Request, My Contact Viewed; Enquiries sent drill-down: Phone Number Viewed, Images requested, Project enquired, Brand contact requested. _(§ Body 1.6)_
- **BR-KDT-107** — Landing banner auto-carousels every 5s. _(§ Body landing)_
- **BR-KDT-108** — Explore Property: City is mandatory; dropdown lists Metro cities first, then all cities in India (A-Z); Asset Class: Office, Retail, F&B; Transaction Type: Lease, Sales. _(§ Body landing)_
- **BR-KDT-109** — Search bar is multi-use (Google location, Project name, property name); searching a city shows that city's properties and projects; Search CTA has Blank and Filtered states. _(§ Body landing)_
- **BR-KDT-110** — Returning users see Recent Searches (City, Location, Transaction Type) and new searches. _(§ Body landing)_
- **BR-KDT-111** — New Properties card: Property/Property Name, Store Type, Location, City, Carpet Area, Quoted Rent. _(§ Body landing)_
- **BR-KDT-112** — Premium Projects, Exclusive projects and Explore Projects in <city> have "Show Interest" CTA with a pre-filled form from profile (Name, Mobile, Email, User Type); message "Thank you for showing interest". _(§ Body landing 3, 4, 6)_
- **BR-KDT-113** — Explore Properties in <city> includes managed space; CTA "View Phone Number" shows the number. _(§ Body landing 5)_
- **BR-KDT-114** — Top cluster in <city> is hidden for now (Phase 2). _(§ Body landing 7)_
- **BR-KDT-115** — Explore real estate in popular Cities: CTA "Explore" opens all properties/projects for the chosen city. _(§ Body landing 8)_
- **BR-KDT-116** — About Keydemand "Request a Callback" captures only mobile number as mandatory; name and email must not be mandatory. Form fields: Name, Email, Phone number, I am (User types), Message. _(§ Body landing 9)_
- **BR-KDT-117** — Footer is the same as the landing page. _(§ Body landing 10)_

### Open questions / ambiguities in this doc
- Hamburger 5 Leads: "By Status - Closed, New, Contacted - This is Phase 2. What is the plan" — explicit open question; Leads filters (New, Contacted, Qualified, Close) don't match the CRM stages (New, In Discussion, Site Visit, Negotiation, Closed, Lost) or the By Status list.
- Hamburger 1 dashboard numbers don't add up: Enterprise Users 500 → Assigned 50 → nested "All — 20" (Body 1.4 says All = 450); High Value leads is nested under Enterprise Users; Projects 250 = Assigned 50 + All 200, yet "All" means all projects on the platform.
- Body 1.5 defines "All" HVLs as "assigned to the rest of the team" (40), but the side menu says "High Ticket Leads (My City/Overall)", and BR 8 uses "Others"/"All" tabs. The labels are inconsistent.
- HVL threshold examples are inconsistent: >10,000 sq ft (Bangalore/Hyderabad), >5,000 sq ft (Mumbai), "5,000+ sq ft" (Body 1.5), benchmark 8,000 (restaurant example). The HTL city list leaves out Indore, which another Keydemand doc lists as an admin threshold city.
- Enterprise lead status: BR 5 says Approved/Rejected/Open; Body 1.4 flow and drill-downs say Approved/Rejected/Pending.
- "Phone number viewed" (Hamburger 1) = others viewing KD member's number (inbound), while the property-leads slider tab uses the same label for leads. Its direction is ambiguous.
- Body 1.6 "Property Agents" lists data columns (Subscription details, Properties added…) under "Filters". Is it filters or table columns? It also overlaps with "Broker Monitoring View" (BR 7) and the "Broker Management" permission.
- Exclusive projects (landing 4) says "Agents can show interest", but this is the KD page. It's unclear whether KD sees the Show Interest CTA on Exclusive projects (older docs said KD has no CTA on projects).
- Self Property/Demand Card CTA includes "Deactivate", but the Actions text says only "Edit and Delete".
- Header 2/3 text "add all other types of properties" for Post demand appears copy-pasted.
- BR 4 Image Request CTA rule names the CTA "View Image Request", but elsewhere it is "request for images".
- Enterprise Demand drill-down: "POC can edit/delete/deactive" conflicts with BR 5 Posting Restrictions (KD users assigned to a brand cannot post or edit demands on its behalf).
- Card field "Size of" (KD cards) appears incomplete.
- "Lead Statusing" sentence ends with a stray "6".

---
## Version 1.0 - Keydemand Team- Dashboard 30062026 - Final.docx  [AUTHORITATIVE]
**Source:** Word .docx · ID `1Iql1n5LaO46KTs3ticv3Hfk33E2d32Y2` · owner pradeepa.pv@futuristglobal.com · created 2026-08-10 · modified 2026-08-10 · sections read: header ("KD — Hamburger Menu (V1 + V2)"), Business Rules 1–8, KD – Hamburger Menu (Menu, List of Brokers, Keydemand User Dashboard, My Profile), Document 2 (Listings, Projects, Ent. Account Demands, High Value Leads, Notifications & Enquiries, Saved / Shortlisted), footer ("Page 1 of 7"), 1 embedded comment, 3 image placements · read coverage: 100% (text via read_file_content; docx XML also downloaded and parsed for comments, tracked changes, header/footer, images; the only media file is a blank/decorative PNG)

### Content
Document header: **KD — Hamburger Menu (V1 + V2)**

###### Business Rules
**1. Account Management & User Permissions**
- Onboarding & Authentication: Keydemand team members are onboarded exclusively via the backend and log in using their mobile number and an OTP.
- Role-Based Access: Account creation is strictly permission-based; specific privileges are managed via the admin portal.
- Profile Management Restrictions: The Keydemand team cannot edit, delete, or deactivate any user profiles via the front end; all profile management must be handled at the backend.
- Inventory Lifecycle: Deactivating a user profile automatically deactivates their associated inventory. Deleting a profile permanently removes all associated inventory.
- Team Inventory Capabilities: Keydemand members can view the inventory of other team members within their "Listings" dashboard, but they are strictly restricted to editing only their own self-listings.
- Backup Coordination: If multiple users are assigned to the same project, they function as backups and must coordinate their efforts offline.
- "My Listings" CRUD Privileges: Keydemand team must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted.
- "Keydemand Listings" (Colleague Data): Properties and Demands posted by other Key Demand team members must be strictly "Read-Only" for colleagues; users cannot edit, delete, or deactivate other colleague's listings.
- Future Phase (Scope): In a future release phase, Keydemand users will be permitted to add projects and developers directly.

**2. Login Flow & Dashboard Navigation**
- Immediate Dashboard Redirect: Keydemand users must be redirected straight to their Dashboard immediately upon logging in.
- Mobile UX Optimization: The mobile app interface must abandon horizontal tables in favour of a card/thumbnail-based layout to optimise screen space and usability.
- Dashboard Routing Logic:
  - Clicking on any user card must route the Keydemand user directly to a read-only view of that specific user's dashboard statistics.
- Interactive Drill-Downs: All aggregate metrics on the Dashboard (e.g., Active Properties, Active Demands, Projects) must be clickable, leading to a granular, filtered list view of the items being counted.
- Hamburger Menu & Holistic View: Keydemand Relationship Managers (RMs) must have a single holistic view from their user dashboard. By clicking the hamburger menu, they should see a summary of all assigned brands/tenants (demands, relevancies, contact requests, project inquiries) without needing to switch accounts.
- Custom Side-Menu Segmentation: A custom side-menu for keydemand users must bypass standard filters and segment views into "My" (User-specific/Assigned) vs. "Overall" (Company-wide/All). It must explicitly list: Dashboard, Profile, Listings (My/KD), Projects (Assigned/All), Enterprise Accounts (Assigned/All), High Ticket Leads (My City/Overall), Notifications, leads, and Saved/Shortlisted items.
- Grid Toggles: Dashboards must feature a dedicated switch to toggle between "High-Value" and "Standard" inventory views.
- Filters & Sorting: The dashboard must include comprehensive filtering (e.g., City) and sorting options (e.g., "Most Demands," "Most Properties Posted," "Most Leads Received").

**3. High-Ticket Lead (HTL) Ecosystem**
- HTL Definition & Dynamic Thresholds: Requirements exceeding specific size thresholds (e.g., >10,000 sq ft in Bangalore/Hyderabad; >5,000 sq ft in Mumbai) are classified as HTLs. The Admin must have controls in the panel to define and edit these square footage limits on a per-city basis.
- Cross-Asset Application: HTL rules and automated routing based on thresholds apply across Office, Retail, and F&B asset classes.
- Tier 1 vs. Tier 2 Routing: HTL restrictions only apply to Tier 1 markets (Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi). Leads in Tier 2 cities (e.g., Jaipur, Indore) bypass this and remain open to all agents regardless of size.
- Exclusive Routing: HTLs are routed exclusively to the Keydemand internal roster and are completely hidden from external agents.
- Global Access vs. Local Alerts: While notifications for a new HTL are localized to the assigned city members, all Keydemand team members possess global access to view HTLs pan-India.
- Manual Unlock Valve: If the Keydemand team cannot service an HTL within a specific timeframe (e.g., 3-4 days), Admins can manually "unlock" the requirement. This pushes it into the public relevancy pool, making it visible to external agents strictly under the relevancy matching engine.
- Agent-Added Exemption: Demands posted directly by agents bypass HTL restrictions entirely and remain visible to other agents via relevancy matching.

**4. Visibility, Relevancy & Image Security**
- "Posted By" Transparency: To external audiences, internal demands/properties display as "Keydemand." However, internally, the team will see the specific name of the uploading team member (e.g., "Posted by Himanshu").
- Exclusive Indicators: If a demand is managed exclusively by Keydemand, the "Self-View" and explore demand screens must explicitly indicate "Keydemand Team".
- Hidden Image Protocols: If a listing owner selects "Do not show images", external users cannot view them. However, Keydemand teams can always see these images, overlaid with a banner reading "Hidden to others".
- Thumbnail Rule: The system must display property thumbnails to the Keydemand team in all list views, even if the primary images are hidden from public or external view.
- Image Request CTA Prevention: To prevent sourcing conflicts, the "View Image Request" CTA button must be completely removed (or greyed out/disabled) for Keydemand users when they view external agent properties.
- Relevancy Matching Scope: Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands (subject to final confirmation/TBD by Kartik).
- Demand Exploration Exclusivity: The Keydemand team is the only party authorised to explore demands. Specifically, "Managed Space" demands are visible exclusively to Keydemand and hidden from everyone else.

**5. Enterprise Accounts Breakdown & Pipeline Management**
- Enterprise Account Dashboard Breakdown: The dashboard must calculate the total aggregate of enterprise users (e.g., 500) and segment them into:
  - Assigned to Me: Total count assigned to the logged-in user.
  - Assigned to Others: Balance managed by the rest of the team.
  - Sub-Category Itemisation: The "Assigned to Me" count must explicitly break down into itemised values for Retail and Office Brands, Office Tenants, and Managed Spaces.
- Posting Restrictions: Keydemand users assigned to a brand cannot manually post or edit demands on that brand's behalf. Enterprise requirements must be managed via bulk or single upload centrally through the Admin panel.
- CRM Pipeline (Lite): The Admin Dashboard tracks enterprise leads through explicit CRM stages: New, In Discussion, Site Visit, Negotiation, Closed, Lost. It also logs the assigned representative and the last activity date. (Phase 2)
- Lead Statusing: Leads for Enterprise Clients are strictly categorised as Approved, Rejected, or Open.
- Alerting & Highlights: New relevancies, leads, and enquiries for assigned Enterprise clients must be visually highlighted with direct routing to the respective page.

**6. Action Tracking & Accountability Audits**
- Metric Definition ("User Contacted"): The "User Contacted" metric must increment exclusively when the "View Phone Number" button is clicked, as offline physical calls cannot be tracked.
- Direct Contact CTAs: The Keydemand team does not need to use "Request Phone Number" workflows for relevant demands; they are provided with an explicit "View Phone Number" CTA for direct, instant access.
- Outbound Contact Logs: "Properties Contacted" logs for Enterprise clients must capture the Property ID, associated photo, and the exact date of contact for audit purposes.
- Lead Access Audit Trail: Clicking the "View Requirement" CTA unlocks the lead's mobile number and automatically updates the "Viewed" status (Yes/No) with a timestamp.
- Accountability Tracking: A "Viewed by" column must maintain a timestamped log of exactly which Keydemand team member accessed a lead.

**7. Broker Management & Projects**
- Broker Monitoring View: A specialized, restricted dashboard view must exist for Business Development members to monitor the platform activity of external brokers they have onboarded. This tracks requirements added, relevancies, contact attempts, leads received, missed calls, and ignored image requests to counter broker complaints.
- Project Addition: Projects can only be added strictly via the backend control panel by the Admin team.
- Project Categorization: Projects must be sorted by "Category" (Standard, Premium, Exclusive) within the tables.
- Exclusive Project Follow-up: The Keydemand team is exclusively responsible for handling all follow-ups and contact for mandated "Exclusive" projects.
- Enquiry Granularity: All project lists must support a drill-down for "Enquiries Received," capturing user metadata (type, name, mobile, email, timestamp, and specific projects of interest).

**8. Notifications & Routing**
- Notification Filtering: Notifications must be segmentable, allowing users to filter by specific triggers such as "All leads for my listings," "Tagged projects," or "Relevancies".
- Enquiry Routing Logic: The system must automate routing based on the specific interaction type (e.g., direct developer enquiries, enterprise conversion prompts, or support requests)

###### KD – Hamburger Menu
[Image: decorative graphic beside "KD – Hamburger Menu" title — blank PNG]

NOTE: ALL THE UNDERLINE OUTCOMES ARE REDIRECTED ONES. EG. #
Also, this # denotes Numbers
All the action items are mentioned in figures above the tables with 1,2,3,4… You will find the outcome when clicked for those numbers below it.

#### Hamburger Menu – Keydemand Team
##### Menu
[Image: decorative graphic beside Menu]
- Dashboard (relevancy + leads)
- My Profile
- Listings
  - My listings
  - KD listings
- Projects (by Developers and Managed Space operators)
  - Assigned Projects
  - All projects
- Brands / Tenants (Enterprise solution)
  - Assigned
  - All
- High Value Leads
  - Assigned
  - All
- Notifications
- Enquiries
- Shortlisted
- List of Brokers
- Sign out

##### List of Brokers (External Agents)
List/table view.
Action markers: 1 2 3 4 5

| Name + Mob No. | City | Subscribed | Subscription details | Properties added | Demands added | Leads received | Enquiries sent | Reg. date | Source / Mode |
|---|---|---|---|---|---|---|---|---|---|
| Text | Text | Yes / No / Expired | View | # | # | # | # | DD/MM/YY | Mode / organic |

###### Subscription details (pop-up box)
- Date subscribed
- Asset class
- Past subscriptions
- Current invoice (download)
- Past invoices (≤ 5)

###### Properties / Demands added (pop-up box)
###### Properties added
| So. No. | Prop. ID | Asset Class | Trans. Type | City | Location | Size | Relevancy | Leads |
|---|---|---|---|---|---|---|---|---|
| 1 | OP123 | Office | Lease | Hyd. | HITEC | 1500 | 8 | 2 |

###### Demands added
| So. No. | Demand ID | Asset Class | Trans. Type | City | Location | Size | Relevancy | Leads |
|---|---|---|---|---|---|---|---|---|
| 1 | OD123 | Office | Lease | Hyd. | HITEC | 1500 | 8 | 2 |

###### Leads Received (inbound) — 26
- Image Request — 8
- My Contact Viewed — 18

###### Enquiries Sent (outbound) — 20
- Phone Number Viewed — 6
- Images requested — 4
- Project enquired — 2
- Brand contact requested — 8

##### Keydemand User Dashboard
- Active Properties — 1500
  - My Properties — 300
  - KD Properties — 1200
- Active Demands — 1200
  - My Demands — 200
  - KD Demands — 1000
- Projects — 250
  - Assigned Projects — 50
  - All projects — 200
- Enterprise Users — 500 (This denotes the total number of enterprise users in the platform)
  - Assigned — 50
    - Brands — 20
    - Office Tenants — 20
    - Managed Space — 10
    - Managed Space — 10 [duplicated line in source]
  - All — 450
    - Brands — 200
    - Office Tenants — 200
    - Managed Space — 50
- **High Value Ticket — 50**
  - Assigned — 10
  - Others — 40

New relevancies & leads for assigned brands / office tenants / managed spaces would be highlighted; when clicked, it'll open the relevant page with leads/relevancies.

##### My Profile
- User Info
  - Name
  - Number
  - Email
  - Photo
- Roles & permissions (as per user type)

DOCUMENT 2 · 30TH JUNE 2026

#### Hamburger Menu — Keydemand Team
##### Listings
[Image: decorative graphic beside Listings]
- My listings
- KD listings

Toggle between Demands & Property — [ Demands / Properties ]

###### My listings – Will have separate views for Demands and Properties
Action markers: 1 2

| Prop / Demand ID | Asset Class | Trans. Type | City | Location | Size | Relevancy | Leads | Date added | Actions |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  | # | # |  | Edit / Delete |

(The extracted text shifted the sample-row cells left: "# | # | Edit / Delete". They are aligned here under Relevancy / Leads / Actions, as in the older Google Doc versions of the same table.)

###### Relevancy (Properties)
- Relevant demands → can directly reach out by viewing mobile # of brand / tenant

###### Relevancy (Demands)
- Relevant Properties

###### Leads (Property)
- Image Request
- My contact viewed

###### (2) Leads (Demand)
- My contact viewed

###### KD listings
| Prop / Demand ID | Asset Class | Trans. Type | City | Location | Size | Relevancy | Leads | Date added | Added by |
|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  | # | # |  |  |

My Properties & KD Properties to show property photo (even if image hidden for others) on the thumbnail
My demands & KD demands could be in a list view without images

##### Projects
- Assigned Projects
- All projects

###### Assigned Projects
Action marker: 1

| Project Name | Developer or Operator Name | Location | City | Project Type | Enquiries received | Members assigned | Project ID | Category |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  | # |  |  | Std. / Premium / Exclusive |

###### Enquiries Received
- User type
- Name
- Mobile #
- Email
- Date of enquiry

###### All Projects
| Project Name | Developer or Operator | Location | City | Project Type | Category | Members assigned | Project ID | Enquiries received |
|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  | Std. / Premium / Exclusive |  |  | # |

Assigned Projects & All Projects should show the images in a list view approach

##### Ent. Account Demands (Brands / Office Tenants / Managed Spaces)
> Comment (Himanshu Bhiwandkar, on this heading): "krishna.c@futuristglobal.com this is for the Assigned Brands (Clients) for Keydemand Team (Other Brands) What they can see"

- Assigned Clients
- All Clients

###### Assigned Clients
Leads columns, Approved / Rejected / Open sit under "Leads / Contact request received".
Action markers: 1 2 3 4 5 6 7

| Asset Class | No. of Demands | Formats | Properties contacted | Leads – Approved | Leads – Rejected | Leads – Open | Brand / Tenant name | Relevancy |
|---|---|---|---|---|---|---|---|---|
| Retail / F&B · Office Tenant · Managed Spaces | # | # | # | # | # | # |  | # (7) |

###### No. of Demands (list)
- Format -
- City
- Relevancy
- Leads
- Date added

###### Formats (list)
On click of the number, it should show the specifications of formats that have been uploaded at the backend. Eg., 6 > when clicked, it will show the format list
- Brand name: Louis Philippe
- Transaction type: Lease
- Carpet Area: 4000 sq.ft
- Store type
- Floor Preference
- Possession needed
- OC required

Properties Contacted (list) → outbound
- Property ID with photo
- Name of the owner
- Mb. # of property owner (Mobile Number)
- Date contacted

###### (7) Relevancies (list)
- Demand ID
- Relevant Property ID → Property page
- Relevancy %

###### (4) (5) (6) Leads Received / Contact request received (inbound)
- Demand ID
- Relevant Property ID → Property page
- Approved
- Rejected
- Pending

###### All Clients
Action marker: 1

| Brand / Tenant Name | Asset Class | # Formats | # Demands | Leads received | Properties contacted | Assigned to |
|---|---|---|---|---|---|---|
|  |  | # | # | # | # |  |

###### No. of demands (list)
- Format
- City
- Relevancy
- Leads

##### High Value Leads
- Assigned Leads
- All leads

###### Assigned Lead
Action marker: 1

| Asset Class | City | Size | View lead | Date received | Viewed |
|---|---|---|---|---|---|
|  |  |  | View Requirement |  | Yes / No |

###### View lead
- Open demand listing with mobile number unlocked

(If the user clicks on View Requirement, the timestamp with 'Yes' under Viewed would come up; if not, then it would read 'No'.)

###### All Leads
Action markers: 1 2

| Asset Class | City | Size | Assigned to | View lead | Date received | Viewed by |
|---|---|---|---|---|---|---|
|  |  |  |  | View requirement |  | # |

###### View lead
- Open demand listing with mobile number unlocked

(If the user clicks on View Requirement, the timestamp with 'Yes' under Viewed would come up; if not, then it would read 'No'.)

###### Viewed by
- List of KD users with timestamp

##### Notifications & Enquiries
###### Notifications
- All leads for my listings
- All leads for tagged projects
- Relevancies for my listings & tagged projects

###### Enquiries
- Direct Developer / Managed space enquiries
- Conversion prompt for a brand into an enterprise account
- Office tenant adding multiple or opting for managed space
- Support request raised by Ent. user
- High Value Lead Enquiries

##### Saved / Shortlisted
- Properties
- Demands
- Projects

Footer: Page 1 of 7

### Business rules extracted
(Rules that match the authoritative Specific Page are cross-referenced. Where the two disagree, see Conflicts.)
- **BR-KDT-118** — KD onboarded only via backend; login by mobile number + OTP. _(§ BR 1; same as BR-KDT-001/002)_
- **BR-KDT-119** — Account creation permission-based; privileges managed via admin portal. _(§ BR 1; same as BR-KDT-003)_
- **BR-KDT-120** — KD cannot edit/delete/deactivate user profiles on front end; backend only. _(§ BR 1; same as BR-KDT-004)_
- **BR-KDT-121** — Deactivating a user profile automatically deactivates their associated inventory. _(§ BR 1 Inventory Lifecycle — conflicts with BR-KDT-006)_
- **BR-KDT-122** — Deleting a user profile permanently removes all associated inventory. _(§ BR 1 Inventory Lifecycle — conflicts with BR-KDT-006)_
- **BR-KDT-123** — KD can view other team members' inventory in "Listings" but edit only their own; full CRUD over own listings; colleagues' listings are read-only. _(§ BR 1; same as BR-KDT-007/009/010)_
- **BR-KDT-124** — Multiple users assigned to one project act as backups and coordinate offline. _(§ BR 1; same as BR-KDT-008)_
- **BR-KDT-125** — Adding projects/developers by KD is a future phase. _(§ BR 1; same as BR-KDT-011)_
- **BR-KDT-126** — Login redirects to Dashboard; mobile uses card/thumbnail layout; user card opens read-only dashboard stats; all aggregate metrics are clickable drill-downs. _(§ BR 2; same as BR-KDT-013, 015–017)_
- **BR-KDT-127** — RM holistic view via hamburger menu; custom side-menu My vs Overall with the listed items; High-Value/Standard grid toggle; City filter and sort options. _(§ BR 2; same as BR-KDT-018–021)_
- **BR-KDT-128** — HTL: per-city thresholds (e.g., >10,000 sq ft Bangalore/Hyderabad; >5,000 sq ft Mumbai), admin-editable per city; applies to Office, Retail, F&B. _(§ BR 3; same as BR-KDT-022/023/025)_
- **BR-KDT-129** — HTL restrictions only in Tier 1 (Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi); Tier 2 (e.g., Jaipur, Indore) open to all agents regardless of size. _(§ BR 3; same as BR-KDT-028/029)_
- **BR-KDT-130** — HTLs routed exclusively to KD roster, hidden from external agents; alerts local to city, view access pan-India; admin manual unlock after e.g. 3-4 days into relevancy pool; agent-posted demands exempt. _(§ BR 3; same as BR-KDT-030–033, 035)_
- **BR-KDT-131** — "Posted by" shows "Keydemand" externally and member name internally; "Keydemand Team" indicator on exclusively-managed demands; hidden images visible to KD with "Hidden to others" banner; thumbnails always shown to KD; "View Image Request" CTA removed/greyed for KD on external agent properties. _(§ BR 4; same as BR-KDT-036–040)_
- **BR-KDT-132** — KD relevancy matching is restricted solely to Brands and Tenants; KD is not matched against Agent properties or Agent demands (subject to final confirmation/TBD by Kartik). _(§ BR 4 — conflicts with BR-KDT-041)_
- **BR-KDT-133** — KD is the only party that can explore demands; Managed Space demands are visible only to KD. _(§ BR 4; same as BR-KDT-042/043)_
- **BR-KDT-134** — Enterprise breakdown (Assigned to Me / Assigned to Others, with sub-categories); KD cannot post/edit demands for assigned brands (Admin bulk/single upload); CRM-lite stages (Phase 2); enterprise leads Approved/Rejected/Open; highlights for new items. _(§ BR 5; same as BR-KDT-045–050)_
- **BR-KDT-135** — "User Contacted" counts only View Phone Number clicks; KD gets direct View Phone Number; Properties Contacted logs Property ID, photo, date; View Requirement unlocks mobile and timestamps Viewed; Viewed-by log. _(§ BR 6; same as BR-KDT-051–055)_
- **BR-KDT-136** — BD broker monitoring view; projects added only by Admin via backend; projects sorted by Category (Standard/Premium/Exclusive); KD owns Exclusive project follow-up; Enquiries Received drill-down. _(§ BR 7; same as BR-KDT-056–060)_
- **BR-KDT-137** — Notification filtering by trigger; automated enquiry routing by interaction type. _(§ BR 8; same as BR-KDT-064/065)_
- **BR-KDT-138** — Underlined outcomes are redirects (clickable); "#" denotes numbers; numbered markers above tables (1, 2, 3…) map to click outcomes described below each table. _(§ KD – Hamburger Menu NOTE)_
- **BR-KDT-139** — Hamburger menu items: Dashboard (relevancy + leads), My Profile, Listings (My listings, KD listings), Projects (by Developers and Managed Space operators: Assigned, All), Brands / Tenants (Enterprise solution: Assigned, All), High Value Leads (Assigned, All), Notifications, Enquiries, Shortlisted, List of Brokers, Sign out. _(§ Menu)_
- **BR-KDT-140** — List of Brokers (External Agents) table: Name + Mob No., City, Subscribed (Yes / No / Expired), Subscription details (View), Properties added (#), Demands added (#), Leads received (#), Enquiries sent (#), Reg. date (DD/MM/YY), Source / Mode (Mode / organic). _(§ List of Brokers)_
- **BR-KDT-141** — Broker Subscription details pop-up: Date subscribed, Asset class, Past subscriptions, Current invoice (download), Past invoices (≤ 5). _(§ List of Brokers)_
- **BR-KDT-142** — Broker Properties/Demands added pop-ups: So. No., Prop./Demand ID, Asset Class, Trans. Type, City, Location, Size, Relevancy, Leads (e.g., OP123 / OD123, Office, Lease, Hyd., HITEC, 1500, 8, 2). _(§ List of Brokers)_
- **BR-KDT-143** — Broker Leads Received (inbound) = Image Request + My Contact Viewed (e.g., 26 = 8 + 18); Enquiries Sent (outbound) = Phone Number Viewed + Images requested + Project enquired + Brand contact requested (e.g., 20 = 6 + 4 + 2 + 8). _(§ List of Brokers)_
- **BR-KDT-144** — Dashboard: Active Properties (My/KD), Active Demands (My/KD), Projects (Assigned/All), Enterprise Users 500 (Assigned 50 = Brands 20, Office Tenants 20, Managed Space 10; All 450 = Brands 200, Office Tenants 200, Managed Space 50), High Value Ticket 50 (Assigned 10, Others 40). _(§ Keydemand User Dashboard)_
- **BR-KDT-145** — New relevancies & leads for assigned brands/office tenants/managed spaces are highlighted; clicking opens the relevant leads/relevancies page. _(§ Keydemand User Dashboard)_
- **BR-KDT-146** — My Profile: User Info (Name, Number, Email, Photo) and Roles & permissions (as per user type). _(§ My Profile)_
- **BR-KDT-147** — Listings has a toggle between Demands & Properties; My listings has separate views for Demands and Properties. _(§ Listings)_
- **BR-KDT-148** — My listings table: Prop / Demand ID, Asset Class, Trans. Type, City, Location, Size, Relevancy, Leads, Date added, Actions (Edit / Delete). _(§ My listings)_
- **BR-KDT-149** — KD listings table: same columns, but "Added by" replaces Actions (no actions). _(§ KD listings)_
- **BR-KDT-150** — Property relevancy → relevant demands (direct reach-out by viewing brand/tenant mobile #); Demand relevancy → relevant properties; Property leads → Image Request, My contact viewed; Demand leads → My contact viewed. _(§ My listings drill-downs)_
- **BR-KDT-151** — My & KD Properties show property photo on thumbnail even if hidden for others; My & KD demands may be a list view without images. _(§ Listings)_
- **BR-KDT-152** — Assigned Projects table: Project Name, Developer or Operator Name, Location, City, Project Type, Enquiries received (#), Members assigned, Project ID, Category (Std. / Premium / Exclusive); Enquiries Received drill-down: User type, Name, Mobile #, Email, Date of enquiry. _(§ Projects)_
- **BR-KDT-153** — All Projects table: Project Name, Developer or Operator, Location, City, Project Type, Category, Members assigned, Project ID, Enquiries received; both project lists show images in list view. _(§ Projects)_
- **BR-KDT-154** — Assigned Clients table: Asset Class (Retail / F&B · Office Tenant · Managed Spaces), No. of Demands, Formats, Properties contacted, Leads – Approved, Leads – Rejected, Leads – Open (under "Leads / Contact request received"), Brand / Tenant name, Relevancy. _(§ Ent. Account Demands)_
- **BR-KDT-155** — Assigned Clients No. of Demands drill-down: Format, City, Relevancy, Leads, Date added. _(§ Ent. Account Demands)_
- **BR-KDT-156** — Formats drill-down shows backend-uploaded format specs (e.g., Brand name: Louis Philippe; Transaction type: Lease; Carpet Area: 4000 sq.ft; Store type; Floor Preference; Possession needed; OC required). _(§ Ent. Account Demands)_
- **BR-KDT-157** — Properties Contacted (outbound) drill-down: Property ID with photo, Name of the owner, owner Mobile Number, Date contacted. _(§ Ent. Account Demands)_
- **BR-KDT-158** — Relevancies drill-down: Demand ID, Relevant Property ID → Property page, Relevancy %; Leads Received / Contact request received (inbound): Demand ID, Relevant Property ID → Property page, Approved, Rejected, Pending. _(§ Ent. Account Demands)_
- **BR-KDT-159** — All Clients table: Brand / Tenant Name, Asset Class, # Formats, # Demands, Leads received, Properties contacted, Assigned to; No. of demands drill-down: Format, City, Relevancy, Leads. _(§ All Clients)_
- **BR-KDT-160** — HVL Assigned Lead table: Asset Class, City, Size, View lead (View Requirement), Date received, Viewed (Yes / No); View lead opens demand listing with mobile number unlocked; Viewed shows 'Yes' + timestamp on click, else 'No'. _(§ High Value Leads)_
- **BR-KDT-161** — HVL All Leads table: Asset Class, City, Size, Assigned to, View lead (View requirement), Date received, Viewed by (#); Viewed by drill-down lists KD users with timestamp. _(§ High Value Leads)_
- **BR-KDT-162** — Notifications & Enquiries lists match the Specific Page (Notifications: 3 items; Enquiries: 5 items). _(§ Notifications & Enquiries; same as BR-KDT-074)_
- **BR-KDT-163** — Saved / Shortlisted contains Properties, Demands, Projects. _(§ Saved / Shortlisted)_

### Open questions / ambiguities in this doc
- Comment (Himanshu Bhiwandkar → krishna.c@futuristglobal.com) on "Ent. Account Demands": "this is for the Assigned Brands (Clients) for Keydemand Team (Other Brands) What they can see". This clarifies scope but leaves "Other Brands" undefined.
- Relevancy Matching Scope is "subject to final confirmation/TBD by Kartik". The newer Specific Page V2.0 resolves this differently (see Conflicts).
- Enterprise lead statuses: Open in BR 5 and tables vs Pending in the Leads Received drill-down.
- Dashboard HVL is labelled "Others — 40" while the menu and section say "All".
- "Managed Space — 10" is duplicated under Assigned.
- The footer reads "Page 1 of 7", which looks like a template artefact; the docx holds all the content shown.
- "Document 2 · 30th June 2026" marker: the doc combines two documents (V1 + V2) without separate version notes.

---
## Version 1.0 Keydemand Team Specific Page - Registered  [HISTORY — superseded by Version 2.0 Keydemand Team Specific Page - Registered]
**Source:** Google Doc · ID `1nVz-XohH3SKJdUITQN4jcrj80fLOpKN3QDwK4ZFLOos` · owner pradeepa.pv@futuristglobal.com · created 2026-08-10 · modified 2026-09-27 · read coverage: 100% (incl. 1 open comment)

### Differences vs authoritative version
- **Inventory Lifecycle** changed. Old: "Deactivating a user profile automatically deactivates their associated inventory. Deleting a profile permanently removes all associated inventory. These can be done only from the backend." New: listings must first be reassigned to another KD team user.
- **Relevancy Matching Scope** changed. Old: "Matching for Keydemand is restricted solely to Brands and Tenants; the system does not match Keydemand against Agent properties or Agent demands (subject to final confirmation/TBD by Kartik)." New: matched with own postings, other KD members, agents, brands and tenants.
- **HTL section**: the old version lacks the V2.0 additions (HVLs are exclusively new, fresh inquiries/registrations; the Exclusion of onboarded enterprise brands' day-to-day requirements; the Standard Leads below-threshold rule).
- **Hamburger Dashboard** labels: old "Active Properties / My Properties", "Active Demands / My Demands", "Assigned Projects / All projects" → new "Properties / Self", "Demands / Self", "Assigned / All". Old Enterprise breakdown was Assigned 50 (Brands 20, Office Tenants 20, Managed Space 10 [duplicated]) / All 450 (200/200/50). New nests "All — 20" under Assigned. Old "High Value Ticket — 50: Assigned 10, Others 40" → new "High Value leads — 50: Assigned 10, All 40". Old-only line: "*New relevancies & leads for assigned brands / office tenants / managed spaces would be highlighted; when clicked, it'll open the relevant page with leads/relevancies.*" Property Agents (Search, City search) is new.
- Metric definitions: old "Phone number viewed - Number of users who have viewed the agent's phone number" → new "...the Keydemand team member's phone number". Old-only metric: "**Phone number requested** - Number of phone number's asked on other listings". Old "Project Interested - Projects that the agent has shown interest in…" → new "…that the they have shown interest in…".
- Old dashboard buttons were Properties, Demands, Projects, Enterprise, High Value Tickets, Brokers. New has only Properties, Demands.
- **Edit profile**: old User Info was Name, Number, Email, Photo; "Roles & permissions (as per user type)" had no list. New adds Designation, Assigned city (Multiple), the 13-item permission list, the Favourites/Your Listings/Notifications links, and the "no Edit, Delete, Deactivate buttons" note.
- Old comment (open, Pradeepa PV, "need to ask") on the Edit profile text: "Delete Account - Soft delete, but backend can have user information, even inventory listing may still be there. Deactivate Account - A dialog box can come here. Are you sure you want to Deactivate, if yes will proceed. Account remains the same."
- Old hamburger structure: 3. Enquiries (empty), 4. List of Brokers (full table + pop-ups, identical to the Dashboard docx List of Brokers), 3. Favourites (Properties, Projects, Demands), 5. Notifications & Enquiries, 6. Logout. New structure: 3. Saved (with filters), 4. Notifications, 5. Leads (new), 6. Logout. The broker list moved to Body 1.6 Property Agents. Old-only: "FAQ- With Chatbot - Self Help - For now take from website". New-only: Saved filters; the entire Leads section.
- **Body Dashboard**: old sections were 1. Active Properties, 2. Active Demands, 3. Projects, 4. Enterprise Users, 5. High Value Tickets (Leads), 6. My Tasks, then table-based Active Properties Listings / Active Demand Listings / Projects / Enterprise Users / High Value Leads (identical to the Dashboard docx tables). The new version uses cards and slider interactions.
- Old property Leads click displayed "Image Requests" and "My Contact Viewed" → new "Image Requests" and "Phone numbers viewed". New adds the slider interactions and Self/KD card field lists with CTA Edit, Deactivate, Delete.
- Old HVL flow (only in old): "**List View:** Shows the Asset Class, City, Size, Date Received, and a "Viewed" status (Yes/No). **View Lead:** Clicking "View Requirement" unlocks the lead's mobile number and opens the demand listing. **Audit Trail:** The system automatically updates the "Viewed" status with a timestamp and maintains a "Viewed by" log tracking exactly which Keydemand team member accessed the lead." Old All Leads table had Assigned to and Viewed by columns. New Body 1.5 drops the All list and adds "If multiple cards are assigned as leads, when clicking View Lead will open phone number".
- **Old-only section "6. My Tasks"** (quoted in full): "This acts as the primary task list, where users manage direct developer/managed space enquiries, enterprise conversion prompts, support requests, and alerts for new leads or relevancies. Users must also monitor inbound contact requests, as they automatically nullify if not accepted within 72 hours. **Flow** – **Accessing the Tasks:** The user initiates the workflow by clicking the **My Task arrow**. This action opens a dedicated slider on the screen containing the task information. – **Navigation:** While inside the slider, the user can use the **Back button** to return to the previous slider view, or click the **Close Button** to dismiss the task slider entirely and return to the main dashboard. – **Contacted Items:** By clicking the **Contacted Tab** within the slider, the user can drill down to see a comprehensive list of all their previously contacted items. – **Image Requests:** By clicking the **Image requests Tab**, the user views a list of all pending requests from other users asking for access to property or demand images. – **Actioning Requests:** While viewing the Image requests tab, the user can directly manage the queue by clicking the **Accept button** to approve an image request or the **Reject button** to deny it."
- Old Enterprise Assigned Clients "No. of Demands (list)": Format, City, Relevancy, Leads, Date added → new Demand ID, Asset Class, Transaction, City, Location, Size, Relevancy, Leads (Demand ID opens a details page where the POC can edit/delete/deactivate).
- **Landing sections**: old order was 1. Search functionality (Same as Landing Page), 2. Exclusive projects (CTA "Enquire Now"), 3. Explore properties in <City> (View Phone Number), 4. Projects in <City> (Show Interest), 5. Top cluster (Hidden, Phase 2), 6. Explore real estate in popular Cities, 7. About Keydemand: "Multiple videos only about Agent functionality", CTA "Book demo - Calendly Link", 8. Footer. New: detailed search block (5s carousel, mandatory City, etc.), Recent Searches, New Properties, Premium Projects (new), Exclusive projects CTA "Show Interest" (was "Enquire Now"), managed space in Explore Properties, About Keydemand "Request a Callback" (replaces Book demo).
- Old-only line: "Clicking on the Keydemand Logo will go back to the landing page".

---
## Version 2 - Keydemand team- Specific Page  [HISTORY — superseded by Version 2.0 Keydemand Team Specific Page - Registered]
**Source:** Google Doc · ID `1n6PzXkU9SDqkshGX5yj73_VcUxXfNSPA5I7KY7ZdM84` · owner pradeepa.pv@futuristglobal.com · created 2026-07-02 · modified 2026-07-02 · no comments · read coverage: 100% (2 inline images under Header "Demand card details" and 2.1 "My Tenant" not viewable → [image])

Content is nearly identical to "Keydemand team- Specific Page" (doc 5) minus its top link line, comments and a few rules (listed under doc 5). Despite the "Version 2" title it belongs to the older lineage, not to Version 2.0.

### Differences vs authoritative version
- Old-only Business Rules (quoted):
  - "They don't need to click on Request Phone Number while exploring or relevant demands from Brands or Tenants. They will have View Phone number as the CTA and can see it directly. (Only for Keydemand Team)"
  - "There will be no Image request properties **button will be greyed** for Keydemand team to request images for agent properties."
  - "Relevance for Keydemand, must be matched against only Brands, Tenants and not against the Agent properties or Agent Demand." (V2.0: matched with everyone)
  - "Keydemand team self-view my listing will have a filter that will be My listings (Demand and Property), Keydemand Listings (Others listing) to show names of the user who posted in Posted by (only in the Keydemand view)"
  - "The Keydemand team is the only party that can explore demands; demands will only be matched to relevant properties for others. (For Keydemand as well it will be matched against their demands but they also have an explicit showcase of demands)"
  - "Managed Space Demands will only be viewed by the Keydemand team (in Explore and relevancy) and cannot be viewed by other suppliers."
  - "Demands tagged as "High-Value" (based on Carpet Area and Location) are routed exclusively to the internal Keydemand team and will not be matched to Agents nor even showacased to them under their relevancy"
  - "If an Office Tenant's requested size exceeds a custom city-based threshold (e.g., 5,000 sq ft for Mumbai), the demand lead is automatically transferred to the Keydemand team (this custom threshold needs to be dynamic as per city basis)"
  - "My Listings Actions (KD Team): Keydemand teams can edit, delete, and view listing performance metrics per property in their 'My Listings' section."
  - "Keydemand Team Admin Dashboard Pipeline View (CRM-lite): … This will be discussed next week during Admin"
  - Image hiding: "The Keydemand team(the property lister/owner) can hide images from public view when uploading a property … ticking a "Do not show images" option during upload, which hides all images from potential leads. … other users … must click a "request for images" CTA. The listing agent then has the option to accept or reject the request. Applies to both Agent and Keydemand team."
  - **Property and Demand Posting** (old-only special condition): "No Limits or any special conditions during property and demand posting. The special condition is they have option to showcase who they want to show their listings (demand/property) to, if they do not select a user type then that user type wont be shown their listings and also not matched to their relevancy. Added as a field in PR sheet. Not visible at user end. While posting demands and properties, the Keydemand team will be able to choose who they want to show their listing and it will be user wise for all the listings."
  - Account Management: "Deactivating a profile will deactivate associated inventory, while deleting a profile will result in the permanent deletion of associated inventory." (V2.0: reassign listings first)
  - Notifications: "98 to 140 Rows in Notifications tab" + SharePoint link https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg
  - Projects: "If the user is registered > By clicking on show interest for any project > Details of the user will be sent as an enquiry > Name, User type, Mobile Number > City"
  - Relevancy: "When demands are matched against properties and properties against demands, the cards are displayed down. Also when they click Explore properties, similar properties in the same area will be displayed."
  - Leads Received Table: 1. Type of Request - Image request /Phone Number; 2. User Type (e.g., Agent/Keydemand team/brand); 3. Name; 4. Mobile Number; 5. Timestamp; 6. Action - Accept, Reject.
- Header (old): Explore Demands filter "S to Y in demand inotu fields tab" (SharePoint link …rtime=XeYhKVyU3kg); "Demand card details: For Keydemand they will not have CTA as Request Contact but View Phone number for Retail/F&B as well. Keydemand is the only team that can explicitly view phone numbers." [image]; Post property "BD to DQ - in Property and Project Input fields tab"; Post demand "ET to JJ- Demand input fields tab" (link …rtime=LDLDXwzD3kg); "6. AI - This will come in Phase 2 Locality Insights, Competing & Complementing, Other."; Notification "98 to 134 in notifications tab". V2.0 header has no spreadsheet references or AI item, and adds the explicit notification list.
- Hamburger Dashboard (old): Total Active Properties (relevant demands, leads received), Total Active Demands (Relevant properties, leads received), Leads/Enquires (Phone number received, Image Requests); "Must be adding Relevant Projects too - Under Total Active Demands"; "Phone number received > will have all the requests done by agents, brands, occupiers and Keydemand team; Image request received > … agents, brands, occupiers; Phone number viewed > … done to agents, brands, occupiers"; example "Total properties 150, Total leads 25, Total relevant demands 75 … Mahim property has 3 leads, Andheri property has 1 leads (newest first)".
- Old "3. My listings and Keydemand Listings": My Properties (PropertyId, Asset Class, City, Location; "Newest and unopened leads to be shown first as cards"), My Demands (DemandId, Asset Class, City, Location); "The bifurcation should be shown on top"; 3.1–3.4 listing/relevancy ordering rule: "newest first; however listings with relevancies would be shown first with a red dot notification" and new relevancy "highlighted … red dot over the number … latest one on top". V2.0 has no red-dot/ordering rules.
- Old "3.5 Projects Assigned" (quoted): "Projects can be assigned by the Admin team when they are adding the project, or when they edit the project, they can change add/change the project assigned Keydemand team … Assigned users can only view the projects and its leads; they cannot manage the project. … showcase the project as per self-view with project leads, download project, and share project information on it. Multiple users can be assigned to the same project, e.g., Himanshu and Nitesh … Fields: Project Id (clickable…), City | Name of the project (clickable…), Developer Name, Leads(Number) clickable and if new leads then with a red dot and latest first shown".
- Old 4/5 Post Property "Epic 005 - US -014" / Post demand "Epic 006 - US -019"; 6 Leads/Enquiries (6.1 Phone number received — Interest Received - Inbound; 6.2 Image request — team must approve before viewer sees images; 6.3 Phone number viewed — Interest shown - Outbound); 7 Favourites (Properties, Projects); 8 Alerts & Notifications: "Do you wish to receive Notifications? A toggle button can come here. New properties/demands added by them will be sent as a Whatsapp to self … here is a PDF for them to download. Only promotional messages can be stopped, they can't stop transactional messages. Eg messages related to relevancy, leads, interest received, phone number enquiries done, etc"; 9 Help: FAQ chatbot + contact@keydemand.in; 10 Logout.
- Old Body 2.1 **My Tenant** (old-only): "Enterprise brands and tenants assigned to the Keydemand team user. We use the word Tenant for both Brands and Tenants … Brands and Tenant will be assigned to Keydemand team from the admin … to an individual Keydemand user. We can change brand and tenant assigned … transfer the brand from one Keydemand user to another Keydemand user. All the demands on that brand/tenant will be automatically be assigned to the other Keydemand user when transferred. If you are assigned 50-60 brands - then how do we show that [image][image] Instead of my brands - my tenants that will be with Retail & FnB brands + Office users. Brand Name"
- Old 2.4 Phone number Received (old-only detail): fields Name, Mobile Number, Property/Demand/Project Id, User-Type, Timestamp; "Viewing a phone number is a passive event that requires no approval action."; two-way reveal quote ("If you view my number, I find out it was you — and I get your number too … lister is actively notified via WhatsApp …"); "The lead should be marked as "Unread" until it is clicked."
- Old 2.5 Image request (old-only): counters "XX Pending, XX Accepted, XX Rejected"; filters Newest First, Asset Class, Calender; User Type All Users / F&B Brand / Retail Brand / Agent / Tenant / Keydemand Team; fields Name, User Type, Company Name/User Name, Project/Property Id, City, Location, Date Requested, Status Badge (Accepted, Pending, Rejected), Action Buttons (Approve / Reject); rules: Justification (like Magic bricks), Default Visibility, Hiding Mechanism (hides all images in the listing), Image Preview Status applies to all users, "Request Time Limit: … does not expire … (the 72-hour nullification rule is not applied)"; Seeker's and Owner's journeys; acceptance message "Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further." (CTA View listing with images); rejection message "Request for viewing images has been rejected by the agent." (CTA view listing without images).
- Old 2.6 View Phone number (Interest Requested - Outbound): same fields; "No business rules apply to Keydemand team. They can view anyone's phone number (Even Brands)". 2.7/2.8 relevancy red-dot rules.
- Old Body 3 Project Interested flow: "Any user visits Keydemand.in > Views project > Submits an interest form > Project interest received > respective Keydemand team assigned will receive WhatsApp, notification and alerts … Admin team will receive notification and project lead under the project section and also on the dashboard"; fields Project Id | City | Name of the project | Developer Name | Leads(Number).
- Old Body 4 **Enterprise Solution Interest (Enterprise Leads)** (old-only routing): "This will be city-based; if in Mumbai, it will be sent to the Mumbai team. Everything will come to the Mumbai team, apart from Pune, Hyderabad, Chennai, Bengaluru interests … Brand (Retail & FnB): all the Enterprise Interest leads are going to come to the Mumbai Team only. For Office & Managed Spaces … city is Pune, the lead will be passed on to the Pune team and also to the admin team. If the new user is from City eg Jaipur, then the lead is sent to the Mumbai team, & same flow applies for an existing user." Fields: Date & time stamp | Company name | User Name | Phone number | City | Brand Type; Filter with search.
- Old Body 5 **Requirements more than 5K (High-Value Leads)** (old-only details): "(For all asset class except Managed offices)"; admin selects city and keeps min size; "Demands more than that minimum size will not be shown to the end audience but will only hit Keydemand from that specific city"; brand still sees relevant properties (e.g., limit 5000 Mumbai, demand 6000 sft); HIGH TICKET LEADS list: sizes editable city-wise; "manually opened up to agents by admin … (Cat listing level)"; city-wise leads to assigned users & master roster at admin end; cities B'lore, Hyd, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi; other cities' leads viewable by agents & KD; agent demands visible to other agents and KD irrespective of size; all KD members access all HTLs. Admin flow (Retail, FnB & Offices) min requirement (edit, add) for Mumbai, Pune, Bengaluru, Chennai, Hyderabad, **Indore**; "demands = or above that will only be sent to the Keydemand team"; example 20000 sft vs 15,000 limit Mumbai. Fields: Time stamp | Demand id | Asset class | Transaction Type | Carpet area | location | City | Posted By; Latest first; Demand id clickable; filters with search.
- Old landing: "3. Exclusive projects (Keydemand team do not need to show interest to any projects as its out own team, there would not be CTA but just showcase the project)" yet followed by Show Interest CTA text; "5. Developer projects" same note; "4. Explore properties" View Phone Number; "6. Top cluster - Hidden for Now"; "7. About Keydemand - Multiple videos only about Keydemand team functionality; CTA Book demo - Calendly Link: https://calendly.com/himanshu-keydemand/30min?month=2026-04&date=2026-04-03"; 8. Explore real estate in popular Cities; 9. Footer.

---
## Keydemand Team Specific Page - Registered  [HISTORY — superseded by Version 2.0 Keydemand Team Specific Page - Registered]
**Source:** Google Doc · ID `1WY7UGhRfw0_wHdLDbVc8IUv2iFVQTgKtHsHvDqUZw8M` · owner pradeepa.pv@futuristglobal.com · created 2026-05-13 · modified 2026-08-10 · no comments · read coverage: 100%

### Differences vs authoritative version
- Earliest, agent-template-derived draft. Business Rules contain only Property and Demand Posting (Office, Retail, F&B and managed space), Account Management, image-request display logic, and Notifications.
- Old-only **Account Management**: "**Delete Account:** A soft delete, where the backend can still retain user information and inventory listings. **Deactivate Account:** Requires confirmation via a dialog box. The account remains the same, but the subscription stops and cannot be reactivated." (V2.0: no front-end delete/deactivate; reassign listings first.)
- Old-only **Display logic for the image request status**: "Accepted: Show the images only to the requesting user. Pending: Display the status as "pending" on the card. Rejected: Hide the images and display a Call-to-Action (CTA) button for the user who made the request." (stated twice in the doc)
- Old Notifications list included "**Subscriptions**", which V2.0 doesn't have: "Demand Relevancy (Instant), Property Relevancy, Image Request, Phone number Request, Subscriptions, Marketing notifications, and Demand/Property Active Status (occurs once every 3 months)."
- Header: old "Post property - They **cannot** add a managed office and can add all other types of properties like Office, Retail and F&B" → V2.0 can add Managed space. Explore Properties/Demands had no description.
- Hamburger: Dashboard was only a link to "Keydemand Team- Dashboard 30062026 - Final" (https://docs.google.com/document/d/1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr/edit#heading=h.9wzh5o1sam8u); "Edit profile - Details will come from EPIC 2, US -006" with Delete (soft) / Deactivate (dialog; "Subscription stops too and cannot be reactivated(Subscription)"); My listings (Demand/Property Listings, Demand/Property Relevancy, Post Property Epic 005 US-014, Post demand Epic 006 US-019); Favourites (Properties, Projects); Alerts & Notifications (WhatsApp, Help contact@keydemand.in, FAQ chatbot); Logout.
- Body dashboard metrics were agent-worded (agent's own demands/properties, "Phone number requested - Number of phone number's asked on other listings", "Project Interested … favourities").
- Landing: Search (same as Landing Page) "CTA's will change as the user is registered and logged in"; Exclusive projects CTA "Enquire Now"; Explore properties in <City> View Phone Number; Projects in <City> Show Interest; Top cluster hidden (Phase 2); Explore popular cities; About Keydemand "Multiple videos only about Agent functionality", Book demo (Calendly); Footer.

---
## Keydemand team- Specific Page  [HISTORY — superseded by Version 2.0 Keydemand Team Specific Page - Registered]
**Source:** Google Doc · ID `1ltuysizKtddbyFNpYRs836Oh57TvwdSEz0QLM5sx2Ck` · owner pradeepa.pv@futuristglobal.com · created 2026-05-28 · modified 2026-07-29 · read coverage: 100% incl. 14 comment threads (2 inline images not viewable → [image])

### Differences vs authoritative version
Content is the same as "Version 2 - Keydemand team- Specific Page" (all differences listed there apply), plus:
- Top line (old-only): link https://docs.google.com/document/d/1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr/edit and "Check Above document and business rules as they are final". This points to the Dashboard docx as final.
- Image-request rule wording: "Image request to be removed as we will not allow Keydemand to request for agent image for properties **button will be greyed** …"
- Old-only rule (comment "Business rule added on June 22"): "If Keydemand uploads a property and has selected only to show it to Keydemand/Brand then these properties will only be shown to the brand and Keydemand, it should not be shown to users on the landing page of explore properties."
- Team capabilities old-only detail: "There would be filters to sort the inventory as well; filters shall be based on demand id/property id, name of the uploader, city, transaction type, asset class. Here there will be My listing and Keydemand listing kind of sort … (Phase 2)".
- Old-only: "The Keydemand team can upload Flex Properties, but they must be kept hidden from the public audience (Phase 2). Managed offices (Properties, demands)".
- Old-only: "Keydemand team Dashboard Components: The dashboard includes: My Listings, Large office space enquiries, Managed office space enquiries, Projects assigned & their leads, Listing leads (property & demand), Access to all properties & demands (Explore Demand), and AI layers." and "AI Layers: Provides Locality insights, Brand suggestions for a property, and competing/complementing properties. - Phase 2".
- Comment threads:
  - "New Business Rules added on June 12th" on the first rule block (View Phone Number … add project and developer next phase) — open.
  - "TBD - with Satish and Krishna" on "Relevance for Keydemand, must be matched against only Brands, Tenants…"; replies "Can we atleast sort it? we need answers." — resolved.
  - "Business rule added on June 22" on the Keydemand/Brand-only visibility rule — open.
  - Himanshu Bhiwandkar: "What is this? Can you please explain and post that I can answer" on Account Management; Pradeepa: "If they are going to get onboarded on the backend, do they have the option to edit, delete and deactivate?" — resolved.
  - "To be added in Figma" on Explore Demands (open), 3.5 Projects Assigned, Project Interested, Enterprise Solution Interest, Requirements more than 5K (resolved).
  - "@himanshu@keydemand.in Need data for these sections." and "To be added to Figma" on 2.1 My Tenant; "Just for pictorial representation" on the second image.
  - "What exactly are to be displayed in the page? Just the toggle?" on Alerts & Notifications — resolved.
  - "New business rule discussed on June 29th" on the HIGH TICKET LEADS list — open.

---
## Keydemand Team- Dashboard 30062026 - Final.docx  [HISTORY — superseded by Version 1.0 - Keydemand Team- Dashboard 30062026 - Final.docx]
**Source:** Word .docx · ID `1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr` · owner pradeepa.pv@futuristglobal.com · created 2026-06-30 · modified 2026-08-12 · read coverage: 100% (text + docx XML: 7 comments, 1 tracked change, decorative image)

### Differences vs authoritative version
- Text is effectively identical to Version 1.0. Differences:
  - Has the subtitle "(30th June 2026)" under "KD – Hamburger Menu"; V1.0 dropped it.
  - Enterprise Assigned list has "Managed Space — 10" once; V1.0 duplicates the line.
  - All Clients drill-down heading carries a tracked change by Himanshu Bhiwandkar: "No. of ~~Requirements~~ demands (list)"; V1.0 shows it accepted ("No. of demands (list)").
- Comments only in this doc (V1.0 keeps only Himanshu's "Ent. Account Demands" comment):
  - Sathish Reddy (2026-07-12) on "Lead Statusing…": "Need to see the UI in Admin App and User App"; reply Pradeepa PV (2026-07-14): "Enterprise leads need to be categorized( Open/Approved/Rejected) on the Dashboard to view for assigned Keydemand RM".
  - Himanshu Bhiwandkar (2026-07-08) on "Also, this # denotes Numbers": "krishna.c@futuristglobal.com this denotes number and # with _ denotes that its clickable".
  - Sathish Reddy (2026-07-02) on "Enterprise Users — 500": "Need few more details on this section"; reply Pradeepa PV (2026-07-14): "The dashboard should show the total number of enterprise accounts (for example, 500). It must divide this total into two groups: Assigned: The accounts you are managing, broken down by category: Retail & Office Brands, Office Tenants, and Managed Spaces. Assigned to Others(All): The accounts managed by the rest of the team."
  - Krishna Chaitanya (2026-07-13) on "Assigned Projects & All Projects should show the images in a list view approach": "Explain this."
  - Himanshu Bhiwandkar (2026-07-08) on "Ent. Account Demands": "krishna.c@futuristglobal.com this is for the Assigned Brands (Clients) for Keydemand Team (Other Brands) What they can see".
- Note: this unversioned file was modified later (2026-08-12) than V1.0 (2026-08-10). Per the authority rule (the "Version N.N" in the title wins), V1.0 is authoritative.

---
## Group-level notes
### Version history
- **Specific Page family.** Lineage: "Keydemand Team Specific Page - Registered" (created 2026-05-13, agent-template draft) → "Keydemand team- Specific Page" (created 2026-05-28, comment-driven rules June 12–29) → "Version 2 - Keydemand team- Specific Page" (2026-07-02, a clean copy of the former) → "Version 1.0 Keydemand Team Specific Page - Registered" (created 2026-08-10, restructured using the Dashboard docx business rules) → **"Version 2.0 Keydemand Team Specific Page - Registered"** (created 2026-09-28, modified 2026-10-06).
- "Version 2" and "Version 2.0" tie on version number, so the authority rule falls back to modified date: Version 2.0 (2026-10-06) beats Version 2 (2026-07-02). Content confirms it: "Version 2" belongs to the older lineage, and its title number is misleading.
- **Dashboard family.** "Version 1.0 - Keydemand Team- Dashboard 30062026 - Final.docx" is authoritative by its version number in the title. The unversioned "Keydemand Team- Dashboard 30062026 - Final.docx" is HISTORY, even though its modified date (2026-08-12) is later. Its text is the same apart from comments and one tracked change. The older doc 5 called the unversioned Dashboard docx "final".
- The two families overlap heavily. The Dashboard V1.0 business rules (sections 1–8) are an earlier copy of Specific Page V2.0 sections 1–7 and 9. Specific Page V2.0 is the later document (2026-10-06 vs 2026-08-10) and should prevail on overlapping rules.

### Conflicts across docs in this group
- **Inventory on KD user deactivate/delete.** Specific Page V2.0 [AUTH]: listings must be reassigned to another KD user before delete/deactivate. Dashboard V1.0 [AUTH], Specific Page V1.0, doc 3 and doc 5: deactivate → inventory deactivated; delete → inventory permanently removed. Doc 4: delete is a soft delete retaining inventory; deactivate stops subscription. The latest rule is Specific Page V2.0.
- **KD relevancy matching scope.** Specific Page V2.0 [AUTH]: matched with own postings, other KD members, agents, brands and tenants. Dashboard V1.0 [AUTH] and Specific Page V1.0: restricted solely to Brands and Tenants, not Agent properties/demands ("subject to final confirmation/TBD by Kartik"). Docs 3/5: same restriction ("TBD - with Satish and Krishna"). The latest rule is Specific Page V2.0.
- **HVL labels and counts.** Dashboard V1.0: "High Value Ticket — 50: Assigned 10 / Others 40". Specific Page V2.0: "High Value leads — 50: Assigned 10 / All 40", with All defined as the rest of the team. Side menu: "High Ticket Leads (My City/Overall)". The Dashboard has an "All Leads" table with Assigned to / Viewed by; Specific Page V2.0 Body 1.5 only lists Assigned fields.
- **HVL threshold and city lists.** Examples vary: >10,000 (Bangalore/Hyderabad), >5,000 (Mumbai), 5,000+ (generic), 8,000 (restaurant), 15,000 (Mumbai example, doc 3/5). Tier 1 list (both AUTH docs): Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi. Docs 3/5 admin threshold list includes Indore, which the AUTH docs class as Tier 2. Docs 3/5 exclude Managed offices from HVL; the AUTH docs say Office, Retail, F&B.
- **Enterprise lead statuses.** BR text: Approved/Rejected/Open. Drill-downs in both AUTH docs: Approved/Rejected/Pending. CRM-lite (Phase 2): New/In Discussion/Site Visit/Negotiation/Closed/Lost. Specific Page V2.0 Leads filters: New/Contacted/Qualified/Close.
- **Broker/agent monitoring.** Dashboard V1.0 has the "List of Brokers (External Agents)" table with Subscribed Yes/No/Expired. Specific Page V2.0 replaces it with "Property Agents" (Subscribed Yes/no, items listed as "Filters"). Both name the same drill-downs.
- **Menu structure.** Dashboard V1.0 menu: Dashboard, My Profile, Listings, Projects, Brands/Tenants, High Value Leads, Notifications, Enquiries, Shortlisted, List of Brokers, Sign out. Specific Page V2.0 hamburger: Dashboard, Edit profile, Saved, Notifications, Leads, Logout, with the other areas as Body dashboard tabs (Overview, Properties, Demands, Projects, Enterprise, High Value Leads, Property Agents).
- **Profile fields.** Dashboard V1.0: Name, Number, Email, Photo. Specific Page V2.0 adds Designation, Assigned city (Multiple) and a 13-item permission list.
- **Listing CTAs.** Dashboard V1.0 My listings Actions: Edit / Delete. Specific Page V2.0 Self cards: Edit, Deactivate, Delete.
- **Property leads drill-down.** Dashboard V1.0: Image Request + My contact viewed. Specific Page V2.0: Image Requests + Phone numbers viewed.
- **Enterprise Assigned demands drill-down.** Dashboard V1.0: Format, City, Relevancy, Leads, Date added. Specific Page V2.0: Demand ID (POC can edit/delete/deactivate), Asset Class, Transaction, City, Location, Size, Relevancy, Leads. The POC edit right also conflicts with the Posting Restriction rule (both AUTH docs).
- **Project interest CTAs for KD.** Docs 3/5: KD needs no Show Interest CTA on Exclusive/Developer projects. Specific Page V2.0: Premium Projects "Keydemand team can show interest", and Exclusive projects / Projects in <city> keep Show Interest. Docs 1/2/4 Exclusive projects CTA: "Enquire Now" (V1.0) vs "Show Interest" (V2.0).
- **About Keydemand CTA.** Older docs: Book demo (Calendly). Specific Page V2.0: Request a Callback (mobile-only mandatory).
- **Image request expiry.** Specific Page V1.0 "My Tasks": inbound contact requests nullify if not accepted within 72 hours. Docs 3/5: image requests do not expire (72-hour rule not applied). Specific Page V2.0 states neither.
- **Managed office posting.** Doc 4: KD "cannot add a managed office". All later docs: KD can add managed space/office properties and demands.
- **Listing audience selection.** Docs 3/5 let KD choose which user types see each listing, with KD/Brand-only listings hidden from the landing page. Neither AUTH doc has this rule, so it is unclear whether it was dropped or remains in force.
