# 11 — Control Panel & Admin

> **VERSION CONFLICT — user to confirm.** `Control Panel V2.1 -0 Keydemand.docx` (ID `1CcjZcH6RU1G48AW47ZqjrcsoGfPOhlyy`) has a **newer modified date (2026-10-14)** than the authoritative `Version 2.0 Control Panel V2.1 -0 .docx` (2026-10-09), but it is unversioned and was **created earlier (2026-07-03)**. Read in full, its structure is an **older draft** of the Control Panel spec: it has the old navigation, no Bulk Uploads, no Enquiries tabs, no Insights dashboard, no Role templates and no Pending handovers. Treat it as HISTORY. However, it contains these items that are **not in Version 2.0, or that contradict it**. Each one may be a later decision:
> 1. **Phase 1 admin roles:** Keydemand.docx says **two** roles ("Super Admin" and "Admin"). V2.0 says **three** ("Super Admin", "Admin" and "Ops User"). The authoritative "Super Admin, Normal Admin" doc also says two.
> 2. **KD member permissions:** Keydemand.docx says *"Assigned Brands & Tenants (Remove it as discussed with Krishna)"* and *"Tagged Projects (Remove it as discussed with Krishna)"*, and adds "Other Brands & Tenants". V2.0 **keeps** both "Assigned Brands & Tenants" and "Tagged Projects", and uses "Keydemand Brands & Tenants" in place of "Other Brands & Tenants".
> 3. **Listing edit scope:** Keydemand.docx adds *"Admin will have the option to edit Keydemand and Enterprise listings that are done by them. As these are the users for whom we have onboarded and uploaded."* It also says *"Edit should only be there for Keydemand inventory"* on the Property table. V2.0 says only *"Editing capabilities … should only be enabled for 'Keydemand' and 'Enterprise' inventory."*
> 4. **Control Panel Users as a permission:** Keydemand.docx marks it *"Control Panel Users?(Next Phase)"* with "Add user/remove user, Assign roles". V2.0 makes "Control Panel Users — Manage" a Phase 1 permission.
> 5. **Content Management, Enquiries and Site Down** are listed as modules with sub-items: About us, FAQ, T&C, Privacy Policy, Banners, Clients, Testimonials; Developer, Managed Space Operator and Enterprise Solution enquiries. V2.0 drops Content Management from the navigation but keeps "Content — Manage" in the permission list.
>
> The full diff is in the Keydemand.docx section below. **Ask the user which of items 1–4 is current.**

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Version 2.0 Control Panel V2.1 -0 .docx | docx | `1Kv7FiKdeRP53F0vYiV8THEdMNrlvgSM4` | pradeepa.pv@futuristglobal.com | 2026-10-09 | AUTHORITATIVE |
| 2 | Version 1.0 Control Panel V2.1 -0.docx | docx | `1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA` | pradeepa.pv@futuristglobal.com | 2026-10-04 | HISTORY (superseded by Version 2.0 Control Panel V2.1 -0) — note: content is actually the Phase 1 platform BRD (EP-001…EP-019), not a Control Panel spec |
| 3 | Control Panel V2.1 -0 Keydemand.docx | docx | `1CcjZcH6RU1G48AW47ZqjrcsoGfPOhlyy` | pradeepa.pv@futuristglobal.com | 2026-10-14 | HISTORY (superseded by Version 2.0 Control Panel V2.1 -0). **VERSION CONFLICT, user to confirm** (see top) |
| 4 | Super Admin, Normal Admin what they can do | gdoc | `1qh1Uh-T8MWhGs2WumwpJY8mzXv3v9UhEVE2N4vp2cak` | pradeepa.pv@futuristglobal.com | 2026-08-27 | AUTHORITATIVE |
| 5 | Keydemand Admin | gdoc | `1drGbp4uUpXFFrLQka8Vfg1s2HIR7QlJgg7iM1AwNomg` | pradeepa.pv@futuristglobal.com | 2026-06-11 | AUTHORITATIVE |
| 6 | Overview of Keydemand Backend and Admin Control - Phase 1 | gdoc | `1tJjfwBQiPdCqbkNC172vcMam7uSjZwZq2AFbpv_qMnQ` | pradeepa.pv@futuristglobal.com | 2026-05-19 | AUTHORITATIVE |
| 6a | KeyDemand Daily Summary.pdf (linked from doc 5) | pdf | `1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452` | — | — | Referenced attachment of doc 5. Read to define the admin email content |

---
## Version 2.0 Control Panel V2.1 -0 .docx  [AUTHORITATIVE]
**Source:** docx · ID `1Kv7FiKdeRP53F0vYiV8THEdMNrlvgSM4` · pradeepa.pv@futuristglobal.com · modified 2026-10-09 · sections read: Business Rules; KD Control Panel nav; Home; 1. Management (1.1 User Management, 1.2 Enterprise, 1.3 Listing Management incl. Bulk Uploads, 1.4 Subscription Mgmt, 1.5 HVL); 2. Administration (Control Panel Users, Enquiries); 3. Insights (Dashboard, Analytics, Site Down) · read coverage: 100% of the extracted text. Embedded images and screenshots are not visible in the text export (the file is 793 KB). Docx comments are not available through the read tool.

### Content

#### Business Rules

**Platform Architecture & Environment Separation**
- **Strict Access Separation:** The platform must be strictly demarcated into two environments: the "Control Panel" (Admin portal) and the "User Portal".
- **Operational Demarcation:** 100% of day-to-day business operations (Sales, Business Development, Broker Management) must happen exclusively within the User Portal (Keydemand Team Dashboard), not the backend Control Panel.
- **Control Panel Access Limits:** The Control Panel is dedicated to the user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core people (Kartik, Sudanshu, Himanshu, Nitesh, and tech admins).

**Admin Roles & Permissions**
- **Phase 1 Roles:** For the initial launch, enforce strictly three primary administrative roles in the Control Panel: "Super Admin", "Admin", and "Ops User".
- **Super Admin Privileges:** The Super Admin role must possess the highest system privileges, including the specific authority to delete or remove other Admins from the system.
- **Dynamic Role Creation:** The system must include functionality allowing the core admin team to create new internal user roles dynamically and toggle their access permissions across the platform.
- **Deferred Granular Permissions:** Highly granular, module-level permission toggles (e.g., manually unchecking specific view/edit/delete rights for internal admins) must be deferred to Phase 2 development to prevent over-engineering.
- Note: Check the possibilities of the dynamic access provision from the admin user while onboarding the other users(lower than his permissions level)
- **Admin Login Protocol:** Admin account creation requires a name, an email ID, and a set of permissions. Login operates via email and password, triggering a one-time password sent to the registered email upon creation, with options to change and reset passwords.
- **Complimentary Access for Testing:** Admins can assign zero-charge subscriptions to agents from the backend (e.g., to test agent journey access).

**Agent Onboarding & Front-End Privileges**
- **Mandatory Onboarding Fields:** Adding an agent requires: Name, Mobile Number, Email ID, Designation, Experience, WhatsApp On/Off, Profile Picture, Asset Class, Transaction Type, My City, and Company Name.
- **Default Front-End Permissions:** "Dashboard" access and "Explore Property" access must be set as default, non-removable permissions for all new Key Demand users.
- **Complimentary Access for Testing:** Admins can assign zero-charge subscriptions to agents from the backend (e.g., to test agent journey access).

**Keydemand Team Onboarding & Front-End Privileges**
- **No Self-Registration:** The Keydemand team is restricted from self-registering from the user portal; they must be added manually from the backend Control Panel by an Admin.
- **Mandatory Onboarding Fields:** When an Admin adds a Keydemand team, they must input their name, mobile number, email, designation, and specific city.
- **Default Front-End Permissions:** "Dashboard" access and "Explore Property" access must be set as default, non-removable permissions for all keydemand user roles.
- **Configurable Front-End Permissions:** Admins can selectively toggle a Keydemand team's ability to explore demands, post properties/demands, access broker management, view Keydemand listings, and view assigned enterprise brands.
- **Deactivation and Deletion of Keydemand team:** Yes, the listings needs to be assigned to another KD team user before they delete the account or deactivate

**Listing & Inventory Management**
- **"My Listings" CRUD Privileges:** Key Demand users must be granted full Create, Read, Update, and Delete (CRUD) privileges strictly over the properties and demands they have personally posted.
- **"Key Demand Listings" (Colleague Data):** Properties and demands posted by other Key Demand team members must be strictly "Read-Only" for colleagues; users cannot edit, delete, or deactivate another colleague's listings.
- **Control Panel Editing Limits:** Editing capabilities within the Listing Management Control Panel should only be enabled for "Keydemand" and "Enterprise" inventory.

**Enterprise Brand & Tenant Logic**
- **Enterprise Login:** Enterprise users (e.g., ABFRL) login using their registered mobile numbers.
- **Demand Auto-Fill Logic:** When an Enterprise user posts a demand and selects a Brand Name, the system must auto-fill all pre-configured brand information maintained in the backend format based on the brand format selection. The user only needs to complete the remaining mandatory or specific fields and should be able to edit the pre-populated field values.
- **Brand Image Display Logic:** If a brand logo/image is uploaded in the backend, it must display as the demand image. If no brand image is available, the system must default to displaying the selected "end-use" image.
- **Brand Deactivation Rule:** Admins can deactivate a brand under an Enterprise account. Upon deactivation, the brand immediately loses login access, and all its active demands must be disabled immediately.
- **Brand Reactivation Rule:** If an Admin reactivates a previously disabled brand, the system must only reinstate the brand account, not its previously active demands.
- **Brand & Tenant Contact View Limit:** Individual brands and tenants can view a maximum of 5 contact phone numbers across listings. Upon reaching this limit, the platform must display a prompt encouraging them to upgrade to Enterprise Solutions for unlimited access.

**Developer & Managed Space Operator Backend Setup**
- **Developer Onboarding Fields:** To add a Developer from the Control Panel, the Admin must input: Developer Name, Upload Logo, Mobile Number, Contact Name, Cities (multi-select), and Asset Class (multi-select).
- **Operator Onboarding Fields:** To add a Managed Space Operator, the Admin inputs: Operator Name, Mobile Number, Contact Name, and Cities (multi-select). The Asset Class is pre-selected by default to Managed Office Space.
- **Project Categorisation:** Added projects must be manually assigned to a category: Exclusive, Premium, or Common Project.

**High-Value Leads (HVL) & Relevancy Rules**
- **Demand Size Limit Logic:** The system must hide high-sq-ft demands (e.g., >10,000 sq ft) from standard users/agents and route them directly to the Keydemand team. HVL is only for demands
- **Size Configuration Feature:** The Admin portal must include a feature to dynamically control and configure these size limits per specific metro city. Not just size but also the city, asset class and size as written in the document below.
- **HVL Unopened Marker:** Unopened leads must be visually marked with a red dot in the platform.
- **HVL Unlock Notification:** If the Keydemand team unlocks an HVL requirement, the system must notify normal agents too besides to key demand agents who possess relevant properties based on relevancy matching.
- **HVL Notification Mediums:** Notifications for new leads must go out via both email and WhatsApp to the assigned users.
- **HVL Customisation:** The HVL section must be highly customizable, allowing edits for each city, asset class, size range, and assigned Keydemand team members from the Admin Panel.
- **Visibility Rules:**
  - All KD team members must be able to access/view all high-value leads.
  - Demands added by agents must be visible to other agents (under relevancy), regardless of size constraints.
  - Leads from other cities can be viewed by agents and the entire Keydemand team (under relevancy), irrespective of size.

**Subscription, Pricing & City Management**
- **Immediate Frontend Pricing Updates:** Price changes made by Admins via the Control Panel must reflect on the front end immediately.
- **Deferred Billing Cycle Impact:** For active users, updated subscription prices will only take effect and bill starting from their next billing cycle.
- **No City Deletion (Phase 1):** The ability to "Delete" a city from the system is strictly disabled for Phase 1 to prevent catastrophic system conflicts for external agents(WebApp users) with active auto-pay/auto-renewal tokens.
- **Tier Management:** Admins can edit subscription prices and add new cities to specific categorisations (Class A/Metros, Class B/Non-metros, Class C/Rest of India, Class D/Pan India).
- **Indicative Cities Protection:** Existing indicative cities pre-populated within the tiers must not be removed from their respective categories.

**Card Identification, User Tags & Layout Controls**
- **Card Identification & User Tags:** All property and project cards must display clear identification tags distinguishing whether a listing was posted by an Agent or a Direct Owner.
- **CTA Repositioning on Cards:** Calls to Action (CTAs) on detailed cards must be prominently positioned in both the top and bottom folds to ensure seamless user engagement without excessive scrolling.
- **Audit Trail & Viewed-By Logs:** The backend must maintain a timestamped audit trail recording every instance a Keydemand team member accesses or views high-value leads or specific client requirements.

**V1 to V2 Platform Transition Actions**
- **Automated Migration:** All active V1 users must be automatically migrated to the new V2 platform.
- **Complimentary Transition Access:** At the time of go-live, the Admin team must manually use the Control Panel to assign 3 months of complimentary Pan-India access to all migrated V1 users.

**Data Management, Exports, & Analytics**
- **CSV Exports:** The Control Panel must support two master CSV downloads:
  - **User Management CSV:** Downloads the complete directory of users across the platform.
  - **Listing Level CSV:** Downloads all properties, demands, and projects.
- **Analytics Sync:** Google Analytics tracking (Daily, Weekly, and Monthly data points) will be embedded into the User Dashboards. Full synchronization within the Admin Control Panel is deferred to Phase 2 development.

#### KD – CONTROL PANEL (navigation)
- **Overview**
  - Home
- **Management**
  - User Management
    - Property agents
    - Retail & F&B Brands
    - Office & Managed Space Tenants
    - Developers
    - Managed Space Operators
    - Keydemand Team
  - Enterprise
    - Retail & F&B Brands
    - Office & Managed Space Tenants
  - Listing Management
    - Properties
    - Demands
    - Projects
  - Subscription Mgmt
    - City management
    - Edit pricing
  - High Value Leads (HVL)
    - Leads
    - Cities
- **Administration**
  - Control Panel Users
  - Enquiries
    - Marketing Enquiries
    - Listing Leads
    - Deletion Requests
- **Insights**
  - Dashboard
  - Analytics- Phase 2
  - Site Down (Phase 2)

#### Home
A snapshot of the entire dashboard with each of the following sections clickable will be shown.

#### 1. Management

##### 1.1 User Management
Every link is clickable and it opens appropriate pages when clicked.

###### Property agents
Filters: Search (By Name, City, Id); City; Subscription; Source; Sort

| Sr.No | Agent Name | City | Subscribed | Subscription details | Properties added | Demands added | Leads received | Enquiries sent | Reg. date | Source / Mode |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Text | Text | Yes / No / Expired | View | # | # | # | # | DD/MM/YY | Mode / organic |
| 2 | Text | Text | Yes / No / Expired | View | # | # | # | # | DD/MM/YY | Mode / organic |

Clicking on Agent Name opens this page:

**User Profile Card:** Avatar Initials; Name; Role; Phone; Email; Location; Registration Date; Acquisition Type; Subscription Status; Actions: Edit, Deactivate, Delete.

If subscription status is not active, a button appears where the admin can assign subscription free of cost. The grant form:
- **Retail and F&B**
  - Metro Cities - 1000/city - Multi Select: All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad
  - Non Metro Cities -750/city: F and G columns in <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
- **Office**
  - Metro Cities - 1000/city - Multi Select: All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad
  - Non Metro Cities -750/city - Multi Select: F and G columns in <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
  - Rest of India - 1000 INR - Check Box: J and K columns in <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
  - PAN India - 5000 INR - Check Box
- **Bill Summary:** Subscription Summary (Metro Cities, Non-Metro Cities); Invoice Summary (Agent, Duration, Starts, Expires, Coverage)
- **CTA:** Grant Subscription; Back

**Tabs & Filter Controls:** Metric Tabs: Relevancy (26), Leads (5); Search Input Field (Search); City Filter Dropdown (City); Asset Class Filter Dropdown (Asset Class); Sort Filter Dropdown (Sort)

- **Post Property:** clicking on this opens the page where they can add. Fields: A to BM Columns in Property & Project Input Fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>. This is the complete master list of fields for each property type and the collection of input fields/data points required for uploading different types of property listings.
- **Post Demand:** clicking on this opens the page where they can add. Fields are in this Excel: A to BM columns in Demand Input fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>

**Overview Metric Tabs:** Properties (7), Demands (7), Leads (59), Enquiries (26)

*Properties*

| # | PROPERTY ID | ASSET CLASS | TRANSACTION | CITY | LOCATION | SIZE (SQ FT) | RELEVANCY | LEADS |
|---|---|---|---|---|---|---|---|---|

Clicking on Property id: Complete Property Details Page opens with download pdf, edit, deactivate and delete buttons.
- Relevancy table: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Leads table: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Image Requests
- Enquiries table: Outbound; TYPE: Project Interested, Numbers viewed, Contacts requested. Columns: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

*Demands*

| # | DEMAND ID | ASSET CLASS | TRANSACTION | CITY | LOCATION | SIZE (SQ FT) | RELEVANCY | LEADS |
|---|---|---|---|---|---|---|---|---|

Clicking on demand id opens the detailed page with download pdf, edit, deactivate and delete.
- Relevancy, Property table: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects table: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH | (sic, "PROJECT ID" twice)
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests
- Enquiries: Outbound; TYPE: Project Interested, Numbers viewed, Contacts requested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

*LEADS*: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests

*Enquiries*: Outbound; TYPE: Project Interested, Numbers viewed, Contacts requested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

###### Retail & F&B Brands
Adding Retail and F&B tenant from Control Panel. They will have each individual section where they can see below information.

**Button: Add Brand.** Clicking on this opens a form with: Kind (Individual/Enterprise); Asset Class; Company/Brand name; Logo; About; City; User name; Mobile number; Email id. CTA: Cancel, Create Brand.

Filters: Search, City, Sort. Tabs: Retail and F&B.

**Brands Table**

| S no | Brand | Demands | Contacted | Relevancy | Reg. date | Status | Action |
|---|---|---|---|---|---|---|---|

Clicking on Brand Name opens:

**Brand Profile Card: "Arrow"** (example): Brand / Tenant Name: Arrow; Tags: F&B | Individual; Contact Name: Rahul Menon; Phone Number: +91 9700000000; Email: arrow@brand.com; Location: Delhi NCR; Onboarding Type: Manual. CTA: Convert to Enterprise. CTA: Edit, Deactivate, Delete.

**Summary Metrics:** Demands: 4; Properties Contacted: 27; Leads:

**Post Demand:** clicking on this opens the page where they can add. Fields are in this Excel: BW to BX columns in Demand Input fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>

*Demands*: | # | DEMAND ID | ASSET CLASS | TRANSACTION | CITY | LOCATION | SIZE (SQ FT) | RELEVANCY | LEADS |
Clicking on demand id opens the detailed page with download pdf, edit, deactivate and delete.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number viewed
- Enquiries: Outbound; TYPE: Project Interested, Numbers viewed, Imagesrequested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

*LEADS*: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number viewed.
*Enquiries*: Outbound; TYPE: Project Interested, Numbers viewed, Contacts requested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

**F&B Table**: | S no | Brand | Demands | Contacted | Relevancy | Reg. date | Status | Action |. Similar Flow as the above.

###### Office & Managed Space Tenants
They will have each individual section where they can see below information.

Adding office tenant & managed space tenants from Control Panel: Company name; User name; Mobile number; Email id; Asset Class; Transaction Type; City; Company Picture/Upload Logo. CTA: Cancel, Create Tenant.

Filter & Search Controls: Search Input Field (Search by company, contact, city or ID...); Filter Tabs: Office (14), Managed Space (12); Status; City Dropdown (City); Sort Dropdown (Sort)

| # | COMPANY / TENANT | DEMANDS | CONTACTED | RELEVANCY | REG. DATE | STATUS | ACTION |
|---|---|---|---|---|---|---|---|

When clicked on Company/Tenant:

**Tenant Profile Card: "Zoho"** (example): Brand / Tenant Name: Zoho; Tags: Office | Individual; Contact Name: Rahul Menon; Phone Number: +91 9800000000; Email: zoho@company.com; Location: Mumbai; Onboarding Type: Manual. Action Buttons: Convert to Enterprise, Edit, Deactivate, Delete.

**High-Level Summary Metrics:** Demands: 9; Properties Contacted: 15; Leads

**Post Demand:** clicking on this opens the page where they can add. Fields are in this Excel: EE to FS columns in Demand Input fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>

*Demands Table*: | # | DEMAND ID | TRANSACTION TYPE | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | RELEVANCY | LEADS |. Clicking on demand id opens the detailed list.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Phone number viewed
- Enquiries: Outbound; TYPE: Project Interested, Numbers viewed, Images requested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

*LEADS*: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Phone number viewed.
*Enquiries*: Outbound; TYPE: Project Interested, Numbers viewed, Contacts requested; | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |

###### Developers
**Add Developer Button** form: Developer name; Upload Logo; Mobile Number; Name; Email; Company; Designation; City:; GST:. CTA: Cancel, Add Developer.

Search, Filters: Status, City, Sort.

| # | DEVELOPER | CITIES | ASSET CLASS | PROJECTS | REG. DATE | ACTION |
|---|---|---|---|---|---|---|

Clicking on Developer goes to the **Developer Details Card:** Developer name; Upload Logo; Mobile Number; Name; Email; Company; Designation; GST Number; City. Action Buttons: Edit, Deactivate, Delete.

| # | PROJECT NAME | CITY | LOCATION | PROJECT TYPE | ASSET CLASS | SIZE (SQ FT) | TRANSACTION | OC STATUS | ASSIGNED TO | LEADS | RELEVANCY |
|---|---|---|---|---|---|---|---|---|---|---|---|

Clicking on Project id will open the detailed page. CTA Buttons: Edit, Booster, Delete.

**Booster modal** (opens when Booster is clicked): Checkboxes: Featured, Exclusive, Sponsored; Featured until: DD/MM/YYYY; Assigned to KD POC: choose from dropdown. CTA: Save Booster, Cancel.

Relevant Demands Table: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | MATCH |. Clicking on demand id will open the detailed page.

Leads, Contact Requests Table: | NAME | ROLE | COMPANY | TYPE | PHONE | DATE | STATUS |

###### Managed Space Operators
**CTA: Add Managed Space Operators** form: Name; Phone/Mobile Number; Email; Company; Designation; Company (sic, listed twice); City; GST/CIN. CTA: Cancel, Add Operator.

Filter & Search Controls: Search Input Field (Search by operator, contact or city...); Status; City Dropdown (City); Sort Dropdown (Sort)

**Managed Spaces Table**

| # | OPERATORS | CITIES | ASSET CLASS | CENTRES | REG. DATE | SOURCE | ACTIONS |
|---|---|---|---|---|---|---|---|

Clicking on Operator id opens the **Operator Details Card:** Operator Initials / Logo; Name; Phone/Mobile Number; Email; Company; Designation; Company; City; GST/CIN. Action Buttons: Edit, Deactivate, Delete.

Section Header & Controls: Section Title & Count (Managed Centres 4); Action Button (+ Add Centre); Search Input Field (Search by centre or city…); Filters Dropdown (Filters); Sort Dropdown (Sort)

**Managed Centre Table**

| # | CENTRE NAME | CITY | LOCATION | WORKSPACE SOLUTION | SEATS | TRANSACTION | AVAILABILITY | LEADS | RELEVANCY |
|---|---|---|---|---|---|---|---|---|---|

Clicking on Centre Name: Main Title (Collab Space 1); Subtitle (Awfis Space Solutions · Pune); Action Buttons (PDF, Edit, Booster, Delete). The complete Managed Centre Details Card opens with Relevancy and Leads.

Additional Information that is to be added: **Promotion & Assignment**: Category; Boosters; Keydemand POC.

- Leads Table columns: #, Name, Company, Type, City, Received, Status
- Relevancy table columns: Demand ID, Asset Class, City, Location, Size (sq ft), Posted On, Match

###### Keydemand Team
Search & Controls: Search Input: Search by name, phone, designation or city…; Filter Dropdowns: City, Sort, status-active/inactive.

- **Button: Add Keydemand member**
- **Button: Pending handovers.** Work of departed Keydemand members that an admin is holding. Hand each one to an active member — their accounts, listings, assignments and pending enquiries move together.

**Adding Keydemand members and permissions from Control Panel:** Name; Mobile Number; Profile Picture; Email id; Designation; City; Assigned city (Multiple). Assign Permissions from below:
- Dashboard (Will be there constand, but whatever permissions are given from below will only be reflected on it)
- Explore Property
- Explore Demand
- Post Property
- Post Demand
- List of Brokers
- My listings
- Keydemand listings
- Assigned Brands & Tenants
- Keydemand Brands & Tenants
- Tagged Projects
- All Projects
- High Value Leads
- Notification or Enquiries

CTA: Cancel, Create Member

**Button: Roles and Permissions**
- Role Template Fields: Role / Sub-Role Name; Permissions Count; Role Type (e.g., Built-in); Action Button (Edit template)
- Permission Toggle Fields: Dashboard; Explore Property; Explore Demand; Post Property; Post Demand; Broker Management; My Listings; Keydemand Listings; Assigned Brands & Tenants; Keydemand Brands & Tenants; Tagged Projects; All Projects; High Value Leads; Notifications / Enquiries

When you click **Edit Template**: Role Template Details: Role Template Name; Permissions Counter / Total Selected. Groups:
- Overview: Dashboard; Notifications / Enquiries
- Explore: Explore Property; Explore Demand
- Post: Post Property; Post Demand
- Listings: My Listings; Keydemand Listings
- Projects: Tagged Projects; All Projects
- Brands & Tenants: Assigned Brands & Tenants; Keydemand Brands & Tenants
- Brokers & Leads: Broker Management; High Value Leads
- Actions: Clear all; Cancel; Save template

**3. Keydemand Team Table**

| # | NAME | PROPERTIES | DEMANDS | PROJECTS | ENTERPRISE | HIGH VALUE TICKETS | ACTION |
|---|---|---|---|---|---|---|---|

Clicking on Name opens the **Team Member Profile Card:** Name (Rohan Kulkarni); Status Tag (Active); Phone Number (+91 9810000000); Email Address (rohan.kulkarni@keydemand.in); Location (Pune); Role / Designation (Relationship Manager); Action Buttons (Edit, Deactivate, Delete).

Access Permissions Section: Permission Count (ACCESS PERMISSIONS · 9 OF 14); Action Button (Manage access); Active Permission Badges (Explore Property, Explore Demand, Post Demand, List of Brokers, Keydemand Listings, Assigned Brands & Tenants, Tagged Projects, All Projects, Notifications / Enquiries).

Overview Metric Cards: Properties (18); Demands (30); Projects (2); Enterprise (5); High Value Leads (3)

Metric Tabs & Search Controls: Filter Tabs: Properties (18), Demands (30), Projects (2), Enterprise (5), High-Value Leads (3); Search Input Field (Search by ID or city…); City Dropdown; Asset Class Dropdown; Sort Dropdown

*Properties tab*: | # | PROPERTY ID | ASSET CLASS | TRANSACTION | CITY | LOCATION | ADDED ON | RELEVANCY | LEADS |. Clicking on Property id opens the complete Property page.
- Relevancy: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | MATCH |
- Leads: Phone Numbers Viewed; Image Requests
  - Phone Numbers Viewed Table: | NAME | ROLE | PHONE | DATE |
  - Image Requests Table: | NAME | ROLE | PHONE | DATE | STATUS |

*Demands tab*: Metric Tabs & Controls: Relevancy (13), Leads (5), Search, City, Asset Class, Sort.
| # | DEMAND ID | ASSET CLASS | TRANSACTION | CITY | LOCATION | SIZE (SQ FT) | RELEVANCY | LEADS |. Clicking on demand id opens the detailed demand page.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT NAME | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads, Contact Requests Table: | NAME | ROLE | PHONE | DATE | STATUS |

*Projects tab*: Search by project, developer or city…; Category; City; Sort.
| # | PROJECT NAME | DEVELOPER NAME | CITY | LOCATION | ASSET CLASS | SIZE | CATEGORY | ASSIGNED TO | RELEVANCY | ENQUIRIES |
Clicking on Project Name: Main Title (Prestige Tech Park 1); Subtitle (Phoenix Mills · Delhi NCR); Action Button (Edit). The detailed Project Details Card opens. Metric Tabs: Leads (14), Relevancy (42).
- Leads: | NAME | COMPANY | TYPE | CITY | RECEIVED | STATUS | ROLE | CAPTURED ON |
- Relevancy: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE | POSTED ON | MATCH |

*Enterprise tab*: Search Input Field (Search by brand name…); Sort Dropdown.
| # | ACCOUNT/BRAND NAME | TYPE | ASSET CLASS | CITY | STATUS |
Clicking on Brand name opens the detailed brand page with edit, delete and deactivate.

**Brand Profile Card: "ABFRL"** (example): Brand Name: ABFRL; Tags: Retail | Enterprise; Visibility Note: Brand name visible to users; Contact Name: Rahul Menon; Phone Number: +91 9900000000; Email: abfrl@enterprise.com; Location: Mumbai; Created on:. Action Buttons: Convert to Individual. Buttons: Edit, Deactivate, Delete.

Relationship Manager & About Brand: Relationship Manager: None (+ Add Relationship Manager action available). About Brand: "ABFRL is a leading retail brand actively expanding its footprint across India through KeyDemand." (Edit action available)

Brand Users (1). Action: + Add User.

| NAME | MOBILE NUMBER | EMAIL |
|---|---|---|
| Rahul Menon | +91 9900000000 | abfrl@enterprise.com |

**Formats (3).** Add Format: you can add multiple formats that will be pre-fed for the brands, and users can select one while uploading the demand. The inputs below are pre-fed when they select the brand as a format. When Add format is clicked, the following information is asked for. Action Button: + Add Format.

Add Format Fields:
- Format Identity: Format Name; End Use; Brand Image URL
- Primary Details: Asset Class; Transaction Type; Carpet Area (sq.ft); Possession Needed; City
- Requirements: Floor Preference; Store Type; Ceiling Height (ft); Frontage (ft); Occupancy Certificate Required - Yes/No
- Additional Details
- CTA: Create format, cancel

**Demands Table.** Selected Tab: Demands (8) | Other Tab: Properties contacted (40) | Leads
| # | DEMAND id | TRANSACTION TYPE | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | RELEVANCY | LEADS |
Clicking on demand id opens the detailed listing page with relevancy and leads.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | MATCH | SIZE (SQ FT) | POSTED ON |
- Relevancy, Projects: | PROJECT NAME | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads, Contact Requests: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number viewed

**Properties Contacted:** | # | PROPERTY ID | ASSET CLASS | TRANSACTION TYPE | CITY | LOCATION | SIZE (SQ FT) |. Clicking on Property id opens the detailed property page.
- Relevancy: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Image Requests

When a user uploads a demand under an Enterprise account (e.g., ABFRL), they can log in using their registered mobile number.

While posting a demand:
- The user first selects the Brand Name (e.g., Arrow) or Allen Solly etc.
- Once the brand is selected, all pre-configured brand information maintained in the backend under(Format) will be auto-filled.
- The user only needs to complete the remaining mandatory fields and any additional information specific to that requirement.

Brand Image Logic:
- If a brand logo/image has been uploaded in the backend, it should be displayed as the demand image.
- If no brand image is available, the selected end-use image should be displayed instead.
- End use images are in this drive link: <https://drive.google.com/drive/folders/1tLzp1TPq7mAbEqZMl-4g_OLCEHYI_08W>

Brand Deactivation:
- The admin should have the option to deactivate a brand under an Enterprise account.
- Once deactivated, the brand will no longer be able to log in, and all its active demands should be disabled immediately. It should also have an option to activate as well which will re-instate the brand only and not the demands.

*High-Value Leads (within the KD member profile, as placed in the source)*:
- Filters & Controls: Asset Class Filters (All, Retail, F&B, Office); City Filter Dropdown; Add Rule Button, which opens:
  - Mandatory Fields (✱): City; Asset class; Min size (sq.ft); Assign to
  - Non-Mandatory Fields: Max size (sq.ft); Transaction
  - CTA: Cancel, Create Rule
- Table Columns / Fields: S.NO; CITY; ASSET CLASS; CARPET AREA (SQ.FT); ASSIGNED TO; CREATED ON; ACTIONS
- Clicking on City opens the HVL City tab. This is where a HVL is assigned.

##### 1.2 Enterprise

###### Retail & F&B Brands
Adding Retail and F&B tenant from Control Panel. They will have each individual section where they can see below information.

Button: Add Brand opens: Kind (Individual/Enterprise); Asset Class; Company/Brand name; Logo; About; City; User name; Mobile number; Email id. CTA: Cancel, Create Brand. Filters: Search, City, Sort. Tabs: Retail and F&B.

Brands Table: | S no | Brand | Demands | Contacted | Relevancy | Reg. date | Status | Action |

Clicking on Brand Name opens the **Brand Profile Card: "Arrow"**: Brand / Tenant Name: Arrow; Tags: F&B | Individual (sic, under Enterprise); Contact Name: Rahul Menon; Phone Number: +91 9700000000; Email: arrow@brand.com; Location: Delhi NCR; Created on:. CTA: Convert to Individual. CTA: Edit, Deactivate, Delete. Assigned Relationship Manager: None (+ Add Relationship Manager action).

About Brand: "ABFRL is a leading retail brand actively expanding its footprint across India through KeyDemand." (Edit action available)

Brand Users (1). Action: + Add User. | NAME | MOBILE NUMBER | EMAIL |, with the row Rahul Menon | +91 9900000000 | abfrl@enterprise.com

**Formats (3).** The Add Format text is the same as above. + Add Format. Fields: Format Identity (Format Name, End Use, Brand Image URL); Primary Details (Asset Class, Transaction Type, Carpet Area (sq.ft), Possession Needed, City); Requirements (Floor Preference, Store Type, Ceiling Height (ft), Frontage (ft)); Additional Details. CTA: Create format, cancel. *(The "Occupancy Certificate Required - Yes/No" field present in the KD-team Enterprise view is not listed here.)*

Summary Metrics: Demands: 4; Properties Contacted: 27; Leads:

Post Demand: Fields are in this Excel: BW to BX columns in Demand Input fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>

Demands: | # | DEMAND ID | TRANSACTION | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | RELEVANCY | LEADS |
Clicking on demand id opens the detailed page with download pdf, edit, deactivate and delete. Clicking on each relevant related property ID and project id opens the project detailed list.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number viewed

F&B Table: | S no | Brand | Demands | Contacted | Relevancy | Reg. date | Status | Action |. Similar Flow as the above.

###### Office & Managed Space Tenants
They will have each individual section where they can see below information. Adding office tenant & managed space tenants from Control Panel ("Office and Managed Space"):
- CTA: Ad Office Tenant (sic). Form: Company name; User name; Mobile number; Email id; Brand Name; Asset Class; Transaction Type; City; Company Picture/Upload Logo. CTA: Cancel, Create Tenant.

Filter & Search Controls: Search (Search by company, contact, city or ID...); Filter Tabs: Office (14), Managed Space (12); Status; City; Sort

| # | COMPANY / TENANT | DEMANDS | CONTACTED | RELEVANCY | LEFT | REG. DATE | STATUS | ACTION |
|---|---|---|---|---|---|---|---|---|

When clicked on Company/Tenant, the **Tenant Profile Card: "Zoho"** opens: Brand / Tenant Name: Zoho; Tags: Office | Individual; Contact Name: Rahul Menon; Phone Number: +91 9800000000; Email: zoho@company.com; Location: Mumbai; Registration Date; Assigned Relationship Manager: None (+ Add Relationship Manager action available). Action Buttons: Convert to Individual, Edit, Deactivate, Delete. Action: + Add User. | NAME | MOBILE NUMBER | EMAIL |

High-Level Summary Metrics: Demands: 9; Properties Contacted: 15; Leads

Post Demand: Fields are in this Excel: EE to FS columns in Demand Input fields tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>

Demands Table: | # | DEMAND ID | TRANSACTION TYPE | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | RELEVANCY | LEADS |. Clicking on demand id opens the detailed list.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH | Posted on |
- Leads: | # | NAME | TYPE | CITY | Requested | STATUS | PHONE | TIMESTAMP |. TYPE: Phone number viewed

Similar for Managed Space.

##### 1.3 Listing Management
All inventory, demands and projects added on Keydemand will be shown here where we can view, edit, deactivate, delete from here. Filters to be added for each to simplify search.

###### Properties
Filter & Search Controls: Search Input Field (Search by ID, city, locality or user…); Asset Class Dropdown; City Dropdown; Sort Dropdown; Inventory Filter Tabs: All (64), Agent (32), Keydemand (32)

| # | PROP ID | ASSET CLASS | CITY | LOCALITY | CARPET AREA | USER TYPE | USER NAME | ADDED ON | RELEVANCY | LEADS | ACTION |
|---|---|---|---|---|---|---|---|---|---|---|---|

Clicking on prop id opens a page with edit, deactivate, delete, pdf.
- Relevancy: | DEMAND ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | POSTED ON | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Image Requests

###### Demands
Filter & Search Controls: Search Input Field (Search by ID, city, locality or user…); User Type Dropdown (All user types); Asset Class Dropdown; City Dropdown; Sort Dropdown

| # | DEMAND ID | ASSET CLASS | CITY | LOCAtion | CARPET AREA | SEATS | USER TYPE | USER | ADDED ON | RELEVANCY | LEADS | ACTION |
|---|---|---|---|---|---|---|---|---|---|---|---|---|

Clicking on demand id opens the detailed page with download pdf, edit, deactivate and delete.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number Viewed

###### Projects
Search by developer, project or city…; Fiters (sic): Category, City, Assigned To, Status, Sort

**Developer**

| Project Id | Project Name | Developer name | City | Location | Asset class | Size | Category | Assigned to | Relevancy | Enquiries | Action |
|---|---|---|---|---|---|---|---|---|---|---|---|
| # | | | | | | | | | | | View \| Edit \| Delete |

Clicking on project name opens the details listing page. Action Buttons: Edit, Delete, pdf, booster. Metric Tabs: Relevancy (22), Leads (15).
- Relevancy Table: | DEMAND ID | ASSET CLASS | CITY | LOCATION | Posted on | SIZE (SQ FT) | MATCH |
- Leads Table: | # | Name | Company | Type | City | Received | Status |

###### Bulk Uploads
Action Buttons: Business rules; New upload.
- CTA **Business Rules**: a slider opens with all the latest business rules for Demands, Properties, Projects, Centres, Common.
- CTA **New Upload**

Section Tabs: New upload (Active tab); Pending review; Templates & Samples; History

**New Uploads**
- Demands: Requirements for brands, tenants, agents or the Keydemand team. HVL rules apply on approval. CTA: Upload Demand
- Properties: Retail, F&B and office listings for an agent or the Keydemand team. CTA: Upload Property
- Projects: Developer projects — property type is a column per row. CTA: Upload projects
- Centres: Managed office or flex centres for a managed-space operator. CTA: Upload centres

**Pending Review**
- Tabs/Status Filters: Pending review, Blocked, Approved, and Rejected
- Type Filter: Dropdown to filter by listing type: Property, Demand, Project
- Checkboxes/Toggles: Images missing, HVL only (High Value Leads)

**Templates & Samples.** The Templates & Samples tab on the [Bulk Upload](https://admin-uat-v2.keydemand.in/listings/bulk-upload) page organizes downloadable templates into three main sections. Each one has options to view samples, download spreadsheets (.xlsx or .csv), preview fields, or start an upload:
- **Demands**: Space requirements posted by brands, tenants, agents, or the Keydemand team.
  - Demand · Retail · Lease (brand) (3 sample rows)
  - Demand · Retail · Buy (brand) (2 sample rows)
  - Demand · F&B · Lease (brand) (2 sample rows)
  - Demand · Office · Lease (tenant) (1 sample row)
  - Demand · Office · Buy (tenant) (1 sample row)
  - Demand · Managed Space · Lease (1 sample row)
  - Demand · Retail · Lease (agent) (1 sample row)
  - Demand · Enterprise Format mode (3 sample rows — Format: only City and Location change per row)
- **Properties**: Retail, F&B, and office listings posted by agents or the Keydemand team.
  - Property · Retail · Lease (2 sample rows)
  - Property · Retail · Sale (1 sample row)
  - Property · F&B · Lease (2 sample rows)
  - Property · F&B · Sale (1 sample row)
  - Property · Office · Lease (1 sample row)
  - Property · Office · Sale (1 sample row)
- **Projects & Centres**: Developer projects and managed-space centres posted for an operator.
  - Project · Developer · Office (1 sample row)
  - Project · Developer · Retail / Mixed use (1 sample row)
  - Centre · Managed office (1 sample row)
  - Centre · Flex (multiple formats) (1 sample row)
- For each entry listed above, you can access actions such as [Sample], [Template .xlsx], [.csv], [Preview fields], and [Start upload].
- Validation document for bulk upload summary and forms: <https://docs.google.com/spreadsheets/d/1sDfBmuKUh_Q21_SSudXkGKDHdalGwklK4iPAyQLEfNk/edit?gid=1215127467#gid=1215127467>

**When clicked on Upload properties: New Bulk Upload.** Steps Bar: 1 Configure, 2 Upload, 3 Validate, 4 Preview, 5 Create for review, 6 Review & approve

1. **Configure** ("What are you uploading?")
   - Create: Demand, Property, Project, Centre
   - Asset class: Retail, F&B, Office, Managed Space
   - Transaction: Lease, Buy
   - Post as: Brand, Agent, Keydemand Team
   - Search Brand: Search bar (with a list of brand profiles such as "K4 Brand outsider", "K4 Brand holder", "QA352 Brand", etc.)
   - Actions: Blank template: Download .xlsx, Download .csv, Preview fields; Continue (Button)
   - Information Panel: **What will happen**: Details about approval workflows, 60-day expiry rules, and routing rules for High Value Leads across cities (Mumbai, Pune, Delhi, Hyderabad, Bengaluru). **Need a sample?**: Downloadable sample templates (Sample, Template .xlsx, .csv, Preview fields) for: Demand · Retail · Lease (brand); Demand · Retail · Lease (agent); Demand · Enterprise Format mode
   - Once we select the continue button after selecting the brand →
2. **Upload**
   - Header: Upload your file
   - Configuration Summary: Demand · Retail · Lease · Brand · posted as K4 Brand
   - File Dropzone: "Drag & drop your .xlsx or .csv here"; "or browse" (Link to open file explorer)
   - File constraints: up to 5 MB · 2,000 rows
   - Action Buttons: [← Back] (Returns to the Configure step); [↑ Upload & validate] (Currently inactive; activates once a file is selected)
3. **Validate**
   - Alert/Status Box: "No issues — every row passed."
   - Filters & Toggles: Tabs: All (2), Valid (2), Warnings (0), Errors (0), Duplicates (0); Toggle: HVL only
   - Data Table columns: ROW, STATUS, SUMMARY, ISSUES; Row Data; Pagination
   - Action Buttons (Bottom): Download error file; Re-upload fixed file; Revalidate; Cancel job; Create demands for review → (CTA Primary Action)
4. **Preview**
   - Modal Fields & Toggles: Include rows with warnings; Include duplicates
   - Action Buttons: Cancel; Create
5. **Create for review**
   - Tabs / Filters: Pending review; Blocked; Approved; Rejected
   - Action Buttons: Select all on this page; Reject selected; Approve selected; Approve all eligible
   - Table Columns: Checkbox (Select); ID; Listing; Posted As; Flags; Issues; State
6. **Review & approve**: Once we approve, it goes live. We can edit it too later on.

Templates & Samples: Are all listed here. <https://docs.google.com/spreadsheets/d/1vE8L1BGFQOthubB4WFlAoFe5faDaUVOBCSZfPwzqq08/edit?gid=0#gid=0>

##### 1.4 Subscription Mgmt
**City management.** Can edit and manage cities & prices on the asset classes. Eg. Adding more cities under metro cities or removing cities from non-metro. Pricing can be edited for each asset classes and Cities (Metro, Non-metro, Rest of India & Pan India).

Primary Action: **+ Add City**. Form Fields: City; State; Classification *: Metro | Non-metro | ROI. CTA: Cancel; Add City.

Navigation Tabs & Search Controls: View Tabs: Cities (Active) | Price Management; Search Input: Search by city or state…; Status: Active, Inactive, All.

Fields are in this sheet: <https://docs.google.com/spreadsheets/d/1CZxTS5kCzHTRa5W1GKa3i_yLs1zeGtr8I0QZTBu3RIE/edit?gid=1769794005#gid=1769794005>

**Cities Table**: | S.NO | CITY | STATE | REGION | STATUS | ACTION |

**Pricing**

*Retail & F&B*. Category Scope: Shops, restaurants, cafes

| CLASSIFICATION | RATE | BILLING TYPE | DESCRIPTION / EXAMPLE |
|---|---|---|---|
| METRO CITIES | ₹1,000 /month | per city / asset | e.g. Mumbai + Office |
| NON METRO CITIES | ₹750 /month | per city / asset | e.g. Jaipur + F&B |
| REST OF INDIA | ₹1,000 flat | flat · rest of India | All cities beyond metro & tier 2 |
| PAN INDIA | ₹5,000 flat | flat / asset class | All cities · 1 flat charge |

*Office*. Category Scope: Offices, co-working spaces

| CLASSIFICATION | RATE | BILLING TYPE | DESCRIPTION / EXAMPLE |
|---|---|---|---|
| METRO CITIES | ₹1,000 /month | per city / asset | e.g. Mumbai + Office |
| NON METRO CITIES | ₹750 /month | per city / asset | e.g. Jaipur + F&B |
| REST OF INDIA | ₹1,000 flat | flat · rest of India | All cities beyond metro & tier 2 |
| PAN INDIA | ₹5,000 flat | flat / asset class | All cities · 1 flat charge |

Note: the x cities are indicative and not to be removed from the category

##### 1.5 High Value Leads (HVL)
Tabs: Leads; Cities. Search Input Field (Search by ID, city or location…)

**Leads**

| # | DEMAND NAME | LEAD ID | LISTING TYPE | CITY | LOCATION | ASSET CLASS | SIZE (SQ.FT) | CREATED ON | ASSINED TO | AGENT ACCESS - Toggle- Yes/No | STATUS |
|---|---|---|---|---|---|---|---|---|---|---|---|

Clicking on demand id opens the detailed page with download pdf, edit, deactivate and delete.
- Relevancy, Property: | PROPERTY ID | ASSET CLASS | CITY | LOCATION | SIZE (SQ FT) | MATCH | POSTED ON |
- Relevancy, Projects: | PROJECT ID | PROJECT ID | ASSET CLASS | CITY | LOCATION | MATCH |
- Leads: | # | NAME | TYPE | CITY | STATUS | PHONE | TIMESTAMP |. TYPE: Contact Requests; Phone number viewed

**Cities Tab**
- Asset Class Filters (All, Retail, F&B, Office); City Filter Dropdown; Add Rule Button, which opens:
  - Mandatory Fields (✱): City; Asset class; Min size (sq.ft); Assign to
  - Non-Mandatory Fields: Max size (sq.ft); Transaction
  - CTA: Cancel, Create Rule
- Table Columns: S.NO; CITY; ASSET CLASS; CARPET AREA (SQ.FT); ASSIGNED TO; CREATED ON; ACTIONS

#### 2. Administration

##### Control Panel Users
Admin Types and Permission. Adding another user to the control panel requires the details below and also permissions.
- Medium of login is email ID and password; will have the option to change password and reset password
- When an account is created a one time password is shared with the team on registered email where they can change and store the password.
- We can add more admin users with different permissions and combinations

Main Title (Control Panel Users); Subtitle (Internal admins with access to this backend · 5 users); Action Button (+ Add User)

| S.NO | NAME | EMAIL ID | ROLE | PERMISSIONS | ACTION |
|---|---|---|---|---|---|

**Add Users modal.** Title: Add Control Panel User; Subtitle: Name, email & permissions; Close Icon (✕)
- Account Section:
  - Name *: Text Input (Placeholder: e.g. Himanshu Bhiwandkar)
  - Email ID *: Text Input (Placeholder: <name@keydemand.in>)
  - Select City:
  - One-time password: Information note ("A temporary password is emailed on creation; the user resets it on first login.")
- Permissions Section:
  - Dashboard: View
  - User Management: View; Add; Edit; Delete; Enable / disable
  - Listing Management: View; Edit; Delete; Enable / disable
  - Projects: View; Add; Edit; Delete
  - Bulk Upload: Bulk upload; Review & approve bulk uploads
  - Subscription Management: Manage cities; Edit pricing
  - High Value Leads: Manage rules; Toggle cities; Unlock leads; View leads
  - Formats: Manage
  - Enquiries: View; Manage
  - Control Panel Users: Manage
  - Analytics: View
  - Content: Manage
- Modal Actions: Cancel Button; Create & send password Button
- A temporary password is sent to his account. He will then login to his account and then set a username and password.

Table: Name; Email ID; Permissions / Missions (sic); Status; Action: Edit/Deactivate/Delete

##### Enquiries
**Marketing Enquiries**
- Filters & Controls: Search by name, phone or company...; Status; City; Sort; Tabs (Enterprise, All)
- Table Columns: NAME; TYPE; CITY; MESSAGE; RECEIVED; STATUS

**Listing Leads**
- Search by name, phone or company...; Type; City; Sort; Received
- Status Tabs (All, Pending, Approved, Rejected, Expired, Closed)
- Table Columns: RAISED BY; TYPE (Project interest, image request, contact request); LISTING; CITY; RECEIVED; EXPIRES; STATUS

**Deletion Requests**
- Buttons & Actions: Log email request
- Filters & Controls: Search by name, phone, email or company...; Type; City; Sort
- Status Tabs (Pending, Processed, Declined, Withdrawn)
- Table Columns: ACCOUNT; TYPE; CITY; REASON; REQUESTED; STATUS

#### 3. Insights

##### Dashboard
Filters & Controls ("ilters" in source): Window (Today, Last 7 days, Last 30 days); Keydemand Team Member Dropdown; Hide/Show Secondary; Hide/Show Detail

**Primary Outcome Metrics:** High Value Leads; Enterprise User Enquiries; Project Leads; Keydemand Team; Enterprise Enquiries by Persona (Developers, Managed Operators, Retail Brands, F&B Brands, Office Occupiers, Managed Occupiers)

**Secondary Outcome Metrics:** Subscriptions — Active; Subscriptions — Expired; Total Users; Leads; Properties; Demands; Projects; Marketing Enquiries; Deleted Properties; Account Deletions

**Detailed Breakdown Fields:**
- Users by Role: Agents, Brands, Office Tenants, Managed Occupiers, Developers, Managed Operators, Keydemand Team
- Agents Breakdown: Total Agents, Subscribed, Registered, Expired, Agents by State, Subscription Mix
- Tenants Breakdown: Total Tenants (Individual, Enterprise), Individual Tenants (Office, Managed Space), Enterprise Tenants (Brands)
- Developers & Managed Operators: Total Developers, Managed Operators, Total Active Projects
- Keydemand Breakdown: Total KD Members, Active Properties Uploaded, Active Demands Uploaded
- Enquiries Breakdown: Total, New, Contacted, Closed, Latest Enquiries List
- Listings Breakdown:
  - Properties Uploaded (Active, Pending Moderation, Asset Class: Retail, Office, F&B, Managed Office)
  - Demands Uploaded (Active, Pending Moderation, Asset Class: Retail, Office, F&B, Managed Office)
  - Projects (Active, Total, Enquiries Received, Relevant Demands)

##### Analytics- Phase 2
(no content)

##### Site Down (Phase 2)
(no content)

### Business rules extracted
- **BR-ADM-001** — The platform must be strictly demarcated into two environments: the "Control Panel" (Admin portal) and the "User Portal". _(§ Business Rules › Platform Architecture)_
- **BR-ADM-002** — 100% of day-to-day business operations (Sales, Business Development, Broker Management) must happen exclusively within the User Portal (Keydemand Team Dashboard), not the backend Control Panel. _(§ Platform Architecture)_
- **BR-ADM-003** — The Control Panel is dedicated to user management, bulk uploads, platform oversight, and configuring high-value leads, and must only be accessible to 4-5 core people (Kartik, Sudanshu, Himanshu, Nitesh, and tech admins). _(§ Platform Architecture)_
- **BR-ADM-004** — Phase 1 enforces strictly three primary administrative roles in the Control Panel: "Super Admin", "Admin", and "Ops User". _(§ Admin Roles & Permissions)_ — conflicts with doc 3 and doc 4 (two roles)
- **BR-ADM-005** — The Super Admin role possesses the highest system privileges, including the authority to delete or remove other Admins. _(§ Admin Roles & Permissions)_
- **BR-ADM-006** — The system must allow the core admin team to create new internal user roles dynamically and toggle their access permissions across the platform. _(§ Admin Roles & Permissions)_
- **BR-ADM-007** — Highly granular, module-level permission toggles (e.g., unchecking specific view/edit/delete rights for internal admins) are deferred to Phase 2. _(§ Admin Roles & Permissions)_ — conflicts with the Add Control Panel User modal, which lists granular toggles (BR-ADM-075)
- **BR-ADM-008** — Admin account creation requires a name, an email ID, and a set of permissions. _(§ Admin Login Protocol)_
- **BR-ADM-009** — Admin login is via email and password. On creation, a one-time/temporary password is emailed to the registered email, and the user resets it on first login. Change-password and reset-password options exist. _(§ Admin Login Protocol; § Control Panel Users)_
- **BR-ADM-010** — Admins can assign zero-charge (complimentary) subscriptions to agents from the backend (e.g., to test agent journey access). _(§ Admin Roles; § Agent Onboarding)_
- **BR-ADM-011** — Adding an agent requires: Name, Mobile Number, Email ID, Designation, Experience, WhatsApp On/Off, Profile Picture, Asset Class, Transaction Type, My City, and Company Name. _(§ Agent Onboarding)_
- **BR-ADM-012** — "Dashboard" and "Explore Property" are default, non-removable permissions for all new Key Demand users / all keydemand user roles. _(§ Agent Onboarding; § Keydemand Team Onboarding)_
- **BR-ADM-013** — The Keydemand team cannot self-register from the user portal. They must be added manually from the backend Control Panel by an Admin. _(§ Keydemand Team Onboarding)_
- **BR-ADM-014** — Adding a Keydemand team member requires name, mobile number, email, designation and specific city. The Add form also captures Profile Picture and Assigned city (Multiple). _(§ Keydemand Team Onboarding; § 1.1 Keydemand Team)_
- **BR-ADM-015** — Admins can selectively toggle a Keydemand team member's ability to explore demands, post properties/demands, access broker management, view Keydemand listings, and view assigned enterprise brands. _(§ Keydemand Team Onboarding)_
- **BR-ADM-016** — Before a Keydemand team member's account is deleted or deactivated, their listings must be assigned to another KD team user. _(§ Keydemand Team Onboarding)_
- **BR-ADM-017** — "Pending handovers" holds the work of departed KD members. An admin hands each item to an active member, and the member's accounts, listings, assignments and pending enquiries move together. _(§ 1.1 Keydemand Team)_
- **BR-ADM-018** — Key Demand users have full CRUD strictly over the properties and demands they personally posted ("My Listings"). _(§ Listing & Inventory)_
- **BR-ADM-019** — Listings posted by other KD team members are strictly Read-Only for colleagues. Users cannot edit, delete or deactivate a colleague's listings. _(§ Listing & Inventory)_
- **BR-ADM-020** — In Control Panel Listing Management, editing is enabled only for "Keydemand" and "Enterprise" inventory. _(§ Listing & Inventory)_
- **BR-ADM-021** — Enterprise users (e.g., ABFRL) log in using their registered mobile numbers. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-022** — When an Enterprise user posts a demand and selects a Brand Name, the system auto-fills all pre-configured brand information from the backend Format. The user completes the remaining mandatory/specific fields and can edit the pre-populated values. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-023** — If a brand logo/image is uploaded in the backend, it is displayed as the demand image. Otherwise the selected "end-use" image is displayed. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-024** — Admins can deactivate a brand under an Enterprise account. On deactivation the brand immediately loses login access and all its active demands are disabled immediately. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-025** — Reactivating a previously disabled brand reinstates only the brand account, not its previously active demands. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-026** — Individual brands and tenants can view a maximum of 5 contact phone numbers across listings. On reaching the limit, a prompt to upgrade to Enterprise Solutions (unlimited access) is shown. _(§ Enterprise Brand & Tenant Logic)_
- **BR-ADM-027** — Adding a Developer (Business Rules) requires: Developer Name, Upload Logo, Mobile Number, Contact Name, Cities (multi-select), Asset Class (multi-select). The Add Developer form also lists Email, Company, Designation, City and GST. _(§ Developer & MSO Backend Setup; § 1.1 Developers)_
- **BR-ADM-028** — Adding a Managed Space Operator requires: Operator Name, Mobile Number, Contact Name, Cities (multi-select). Asset Class is pre-selected to Managed Office Space. The Add Operator form also lists Email, Company, Designation and GST/CIN. _(§ Developer & MSO Backend Setup; § 1.1 MSO)_
- **BR-ADM-029** — Added projects must be manually assigned to a category: Exclusive, Premium, or Common Project. _(§ Developer & MSO Backend Setup)_
- **BR-ADM-030** — The Project Booster modal offers checkboxes Featured / Exclusive / Sponsored, a "Featured until" date (DD/MM/YYYY), and "Assigned to KD POC" (dropdown), with Save Booster / Cancel. _(§ 1.1 Developers)_
- **BR-ADM-031** — Managed centres carry Promotion & Assignment data: Category, Boosters, Keydemand POC. _(§ 1.1 MSO)_
- **BR-ADM-032** — High-sq-ft demands (e.g., >10,000 sq ft) are hidden from standard users/agents and routed directly to the Keydemand team. _(§ HVL)_
- **BR-ADM-033** — HVL applies only to demands. _(§ HVL)_
- **BR-ADM-034** — The Admin portal must let admins dynamically configure HVL thresholds per city, asset class and size. _(§ HVL)_
- **BR-ADM-035** — An HVL rule's mandatory fields are City, Asset class, Min size (sq.ft) and Assign to. Max size (sq.ft) and Transaction are optional. CTAs: Cancel, Create Rule. _(§ 1.5 HVL › Cities)_
- **BR-ADM-036** — Unopened HVL leads must be marked with a red dot. _(§ HVL)_
- **BR-ADM-037** — When the Keydemand team unlocks an HVL requirement, the system notifies normal agents (as well as KD agents) who hold relevant properties based on relevancy matching. _(§ HVL)_
- **BR-ADM-038** — The HVL Leads table has an "AGENT ACCESS" Yes/No toggle per lead. _(§ 1.5 HVL › Leads)_
- **BR-ADM-039** — Notifications for new HVL leads go to the assigned users by both email and WhatsApp. _(§ HVL)_
- **BR-ADM-040** — The HVL section is customizable per city, asset class, size range and assigned KD team members from the Admin Panel. _(§ HVL)_
- **BR-ADM-041** — All KD team members can access/view all high-value leads. _(§ HVL Visibility Rules)_
- **BR-ADM-042** — Demands added by agents are visible to other agents (under relevancy) regardless of size. _(§ HVL Visibility Rules)_
- **BR-ADM-043** — Leads from other cities can be viewed by agents and the entire KD team (under relevancy) irrespective of size. _(§ HVL Visibility Rules)_
- **BR-ADM-044** — Price changes made in the Control Panel reflect on the front end immediately. _(§ Subscription, Pricing & City)_
- **BR-ADM-045** — For active users, updated subscription prices take effect from their next billing cycle. _(§ Subscription, Pricing & City)_
- **BR-ADM-046** — Deleting a city is strictly disabled in Phase 1 (to protect active auto-pay/auto-renewal tokens). _(§ Subscription, Pricing & City)_
- **BR-ADM-047** — Admins can edit subscription prices and add cities to Class A/Metros, Class B/Non-metros, Class C/Rest of India, Class D/Pan India. _(§ Tier Management)_
- **BR-ADM-048** — Pre-populated indicative cities must not be removed from their categories. _(§ Subscription; § 1.4 Note)_
- **BR-ADM-049** — Add City form: City, State, Classification * (Metro | Non-metro | ROI). City status values: Active, Inactive, All. _(§ 1.4)_
- **BR-ADM-050** — Pricing (Retail & F&B and Office alike): Metro ₹1,000/month per city/asset; Non Metro ₹750/month per city/asset; Rest of India ₹1,000 flat; Pan India ₹5,000 flat per asset class. _(§ 1.4 Pricing)_
- **BR-ADM-051** — All property and project cards show a tag distinguishing Agent vs Direct Owner listings. _(§ Card Identification)_
- **BR-ADM-052** — CTAs on detailed cards are positioned in both the top and bottom folds. _(§ Card Identification)_
- **BR-ADM-053** — The backend keeps a timestamped audit trail of every instance a KD team member accesses/views high-value leads or specific client requirements. _(§ Audit Trail)_
- **BR-ADM-054** — All active V1 users are automatically migrated to V2. _(§ V1 to V2)_
- **BR-ADM-055** — At go-live, the Admin team manually assigns 3 months of complimentary Pan-India access to all migrated V1 users via the Control Panel. _(§ V1 to V2)_
- **BR-ADM-056** — The Control Panel supports two master CSV downloads: a User Management CSV (all users) and a Listing Level CSV (all properties, demands, projects). _(§ Data Management)_
- **BR-ADM-057** — Google Analytics (Daily/Weekly/Monthly) is embedded into User Dashboards. Full Admin Control Panel sync is deferred to Phase 2. Analytics and Site Down are Phase 2. _(§ Data Management; § Nav)_
- **BR-ADM-058** — The Home page shows a snapshot of the whole dashboard with each section clickable. _(§ Home)_
- **BR-ADM-059** — If an agent's subscription status is not active, the admin sees a button to assign a subscription free of cost. The grant form covers Retail & F&B / Office × Metro (₹1000/city, multi-select) / Non-Metro (₹750/city) / Rest of India (₹1000, checkbox) / PAN India (₹5000, checkbox), with a Bill Summary (Agent, Duration, Starts, Expires, Coverage) and the CTA "Grant Subscription". _(§ 1.1 Property agents)_
- **BR-ADM-060** — Agent profile actions: Edit, Deactivate, Delete. Property/demand detail pages in the Control Panel offer download pdf, edit, deactivate and delete. _(§ 1.1)_
- **BR-ADM-061** — The Add Brand form includes Kind (Individual/Enterprise), Asset Class, Company/Brand name, Logo, About, City, User name, Mobile number, Email id. _(§ 1.1 / 1.2 Retail & F&B)_
- **BR-ADM-062** — Individual brand/tenant profiles have "Convert to Enterprise". Enterprise profiles have "Convert to Individual". _(§ 1.1, § 1.2)_
- **BR-ADM-063** — Enterprise brand/tenant profiles support "+ Add Relationship Manager" (selected from KD users) and "+ Add User" (brand users: Name, Mobile Number, Email). _(§ 1.2)_
- **BR-ADM-064** — Admins can add multiple Formats per enterprise brand. Format fields: Format Name, End Use, Brand Image URL, Asset Class, Transaction Type, Carpet Area (sq.ft), Possession Needed, City, Floor Preference, Store Type, Ceiling Height (ft), Frontage (ft), [Occupancy Certificate Required Yes/No], Additional Details. _(§ 1.1 KD Enterprise tab; § 1.2)_
- **BR-ADM-065** — Listing Management lists all inventory, demands and projects, with view, edit, deactivate and delete, plus filters. The Properties tabs are All / Agent / Keydemand. _(§ 1.3)_
- **BR-ADM-066** — Project filters: Category, City, Assigned To, Status, Sort. Project actions: View | Edit | Delete (detail page: Edit, Delete, pdf, booster). _(§ 1.3 Projects)_
- **BR-ADM-067** — Bulk upload types: Demand, Property, Project, Centre. Asset class: Retail, F&B, Office, Managed Space. Transaction: Lease, Buy. Post as: Brand, Agent, Keydemand Team. _(§ Bulk Uploads › Configure)_
- **BR-ADM-068** — Bulk upload file: .xlsx or .csv, up to 5 MB and 2,000 rows. "Upload & validate" is inactive until a file is selected. _(§ Bulk Uploads › Upload)_
- **BR-ADM-069** — Bulk upload flow: 1 Configure → 2 Upload → 3 Validate → 4 Preview → 5 Create for review → 6 Review & approve. Rows are classified Valid / Warnings / Errors / Duplicates. Preview lets the admin include rows with warnings and include duplicates. _(§ Bulk Uploads)_
- **BR-ADM-070** — Bulk-uploaded listings go live only once approved. The review states are Pending review, Blocked, Approved and Rejected, and the actions are Approve selected / Reject selected / Approve all eligible. Approved listings can be edited later. _(§ Bulk Uploads › 5–6)_
- **BR-ADM-071** — HVL rules apply to bulk-uploaded demands on approval. The 60-day expiry rules apply. _(§ Bulk Uploads)_
- **BR-ADM-072** — Enterprise Format mode bulk template: only City and Location change per row. _(§ Templates & Samples)_
- **BR-ADM-073** — Pending review filters: type (Property, Demand, Project), "Images missing", "HVL only". _(§ Bulk Uploads › Pending Review)_
- **BR-ADM-074** — Control Panel Users table columns: S.NO, NAME, EMAIL ID, ROLE, PERMISSIONS, ACTION. Actions: Edit/Deactivate/Delete. _(§ Control Panel Users)_
- **BR-ADM-075** — Add Control Panel User fields: Name * (text), Email ID * (text), Select City. Permission toggles: Dashboard(View); User Management(View, Add, Edit, Delete, Enable/disable); Listing Management(View, Edit, Delete, Enable/disable); Projects(View, Add, Edit, Delete); Bulk Upload(Bulk upload, Review & approve bulk uploads); Subscription Management(Manage cities, Edit pricing); High Value Leads(Manage rules, Toggle cities, Unlock leads, View leads); Formats(Manage); Enquiries(View, Manage); Control Panel Users(Manage); Analytics(View); Content(Manage). Primary CTA: "Create & send password". _(§ Control Panel Users)_
- **BR-ADM-076** — Listing Leads types: Project interest, image request, contact request. Statuses: All, Pending, Approved, Rejected, Expired, Closed. _(§ Enquiries › Listing Leads)_
- **BR-ADM-077** — Deletion Requests statuses: Pending, Processed, Declined, Withdrawn. Admin can "Log email request". _(§ Enquiries › Deletion Requests)_
- **BR-ADM-078** — Marketing Enquiries tabs: Enterprise, All. Columns: NAME, TYPE, CITY, MESSAGE, RECEIVED, STATUS. _(§ Enquiries)_
- **BR-ADM-079** — The Insights Dashboard window filter has Today / Last 7 days / Last 30 days, plus a KD member filter. The metrics are as listed (primary, secondary, breakdowns). _(§ 3 Insights)_
- **BR-ADM-080** — The Keydemand member permission set has 14 toggles: Dashboard, Explore Property, Explore Demand, Post Property, Post Demand, Broker Management/List of Brokers, My Listings, Keydemand Listings, Assigned Brands & Tenants, Keydemand Brands & Tenants, Tagged Projects, All Projects, High Value Leads, Notifications/Enquiries. Dashboard is always present and reflects only the granted permissions. _(§ 1.1 Keydemand Team)_
- **BR-ADM-081** — Role templates (Role/Sub-Role Name, Permissions Count, Role Type e.g. Built-in) can be edited via "Edit template" (Clear all / Cancel / Save template). _(§ 1.1 Roles and Permissions)_

### Open questions / ambiguities in this doc
- **"Ops User"** role is named as a third Phase 1 role, but no permissions or capabilities are defined anywhere.
- Business rules defer "granular, module-level permission toggles" to Phase 2, yet the Add Control Panel User modal and the UAT page (doc 4) already show per-action toggles (27 permissions).
- "Note: Check the possibilities of the dynamic access provision from the admin user while onboarding the other users(lower than his permissions level)" is unresolved.
- Default permission "for all new Key Demand users" appears under *Agent* Onboarding. It is unclear whether this means agents or the KD team.
- HVL threshold example ">10,000 sq ft" vs per-city configuration. No defaults listed (doc 2 says Mumbai >5,000; Bangalore/Hyderabad >10,000).
- Project category naming is inconsistent: "Exclusive, Premium, Common Project" (rules); "Featured, Exclusive, Sponsored" (Booster); doc 2 uses "Standard/Premium/Exclusive".
- The Developer/MSO forms in the UI list extra fields (Email, Company, Designation, GST) that the Business Rules don't list. The MSO form lists "Company" twice.
- The Rest of India price is "₹1,000 flat" in the pricing table but "1000 INR checkbox" on the grant form. Retail & F&B grant form omits Rest of India / PAN India options (only Office lists them). Possibly an omission.
- The Enterprise "Arrow" profile is tagged "F&B | Individual" yet shows "Convert to Individual". The Office Enterprise "Zoho" is tagged "Individual" with "Convert to Individual". Looks like copy errors.
- "PROJECT ID | PROJECT ID" duplicated column headers in multiple relevancy tables (vs "PROJECT NAME | PROJECT ID" elsewhere).
- The Office & Managed Space tenants (Enterprise) table has a "LEFT" column with no definition.
- HVL "Add Rule" block appears both inside the KD-member Enterprise section and under 1.5 HVL › Cities. The placement looks accidental.
- Control Panel Users: "He will then login … and then set a username and password", but login is by email ID. It is unclear whether a username exists.
- The "Select City" field on the Control Panel user form has no stated purpose.
- The source says "Site Down" is Phase 2, while doc 4 lists "Site Down: Toggle" as a live permission.
- The Managed Space project table (present in doc 3) is missing from V2.0 Listing Management › Projects. Only the Developer table is given.

---
## Super Admin, Normal Admin what they can do  [AUTHORITATIVE]
**Source:** gdoc · ID `1qh1Uh-T8MWhGs2WumwpJY8mzXv3v9UhEVE2N4vp2cak` · pradeepa.pv@futuristglobal.com · modified 2026-08-27 · sections read: role table, Role Details & Context, Fields on the UAT Page, What a Super Admin Can Do, Manage User Modal, What a Regular / Standard Admin Can Do, comparison table · read coverage: 100% (no comments present)

### Content

| Role | Primary Capabilities |
|---|---|
| **Super Admin** | Possesses the highest system privileges, including the authority to delete or remove other Admins from the system and full access to all modules. [1] |
| **Admin** | Manages day-to-day backend operations, including user management (adding/deleting/editing agents, tenants, developers, operators), listing management, subscription/city management, and handling High-Value Leads (HVL). [1] |
| **Normal User (Agent/Tenant/Enterprise)** | Operates within the "User Portal" (not the Control Panel). Capabilities include managing their own listings ("My Listings"), exploring properties/demands, and viewing relevant leads, depending on permissions configured by Admins. [1] |

[1] = citation link to https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit (the Version 1.0 Control Panel doc)

**Role Details & Context**
- **Administrative Access:** The Control Panel is restricted to 4-5 core people (Kartik, Sudanshu, Himanshu, Nitesh, and tech admins). Phase 1 enforces strictly two primary roles: "Super Admin" and "Admin". [1]
- **Normal User Constraints:**
  - **Keydemand Team:** Restricted from self-registering; must be added manually by an Admin. They have default "Dashboard" and "Explore Property" permissions. [1]
  - **Agent/Tenant Permissions:** Admins can selectively toggle an agent's ability to explore demands, post properties/demands, and access broker management. [1]
  - **Listing Visibility:** Key Demand users have CRUD privileges for their own listings. Other colleagues' listings are "Read-Only". [1]

**Fields on the UAT Page**
- **User Management Modal Fields**
- **Account Details**: Name (text input), Email ID (fixed/read-only), and City (text input).
- **Permission Controls**: Toggleable permissions across 11 modules:
  - *Dashboard*: View
  - *User Management*: View, Add, Edit, Delete, Enable / disable
  - *Listing Management*: View, Edit, Delete, Enable / disable
  - *Projects*: View, Add, Edit, Delete
  - *Subscription Management*: Manage cities, Edit pricing
  - *High Value Leads*: Manage rules, Toggle cities, Unlock leads, View leads
  - *Formats*: Manage
  - *Enquiries*: View, Manage
  - *Control Panel Users*: Manage
  - *Analytics*: View
  - *Content*: Manage
  - *Site Down*: Toggle

**What a Super Admin Can Do**
A Super Admin holds unrestricted backend access with all **27 out of 27 permissions** enabled across the platform:
- **User & Role Administration**: Create, edit, deactivate, or remove backend control panel users, and manage account access across 22 roles including Agents, Retail Brands, Managed Tenants, Developers, and Keydemand Team members.
- **Property & Listing Operations**: Add, update, view, or delete property listings and development projects.
- **Lead & Subscription Control**: Edit pricing structures, manage supported cities, set rules for High Value Leads (HVL), view lead data, and unlock premium leads.
- **System & Content Management**: Handle incoming customer enquiries, review platform analytics, edit site content, and toggle emergency system settings like "Site Down" mode.

**Manage User Modal**
- **Account Section**:
  - *Name*: Editable text field for the user's name.
  - *Email ID*: Read-only text field (cannot be edited after account creation).
  - *City*: Editable text field for location.
- **Permissions Section**: Selectable permission toggles broken down across 11 modules: (same list as above: Dashboard: View; User Management: View, Add, Edit, Delete, Enable / disable; Listing Management: View, Edit, Delete, Enable / disable; Projects: View, Add, Edit, Delete; Subscription Management: Manage cities, Edit pricing; High Value Leads: Manage rules, Toggle cities, Unlock leads, View leads; Formats: Manage; Enquiries: View, Manage; Control Panel Users: Manage; Analytics: View; Content: Manage; Site Down: Toggle)

**What a Regular / Standard Admin Can Do**
A standard admin user operates with granular, role-based access rather than full platform control:
- **Role-Restricted Workflows**: They can only view or interact with the specific modules enabled for them out of the 27 total permissions (for example, the user selected in the screenshot only has 3 permissions: viewing the Dashboard and viewing/adding Users). [Image: screenshot of a user with 3 permissions, not visible]
- **Specific Operational Tasks**: Depending on their granted permissions, they can be restricted to limited tasks like creating listings, handling customer enquiries, or viewing analytics without modifying global settings.
- **Limited Administrative Access**: Standard users generally cannot manage other internal control panel users, change subscription pricing, edit site content, or toggle critical controls like "Site Down" unless explicitly granted those individual permissions by a Super Admin.

| Feature / Capability | Super Admin | Standard Admin (Regular Admin) | Normal User (Agent / Tenant / Enterprise / Keydemand Team) |
|---|---|---|---|
| **System Access & Portal** | Unrestricted, full access to the Control Panel. | Granular, role-restricted backend access to the Control Panel. | Restricted entirely to the **"User Portal"** (cannot access the Control Panel). |
| **Permissions Configuration** | Holds all **27 out of 27 permissions** enabled across the platform. | Role-based; operates with restricted permissions, only interacting with modules enabled for them. | Access is determined and toggled by Admins (e.g., permission to explore demands, post properties, or access broker management). |
| **User & Role Administration** | **Create, edit, deactivate, or remove** backend control panel users (including deleting other Admins) and manage access across 22 roles. | **Limited user management** (adding/deleting/editing agents, tenants, developers, operators) but cannot manage other internal control panel users. | **No administrative privileges**. Keydemand Team members cannot self-register and must be added manually by an Admin. |
| **Property & Listing Operations** | Full authority to add, update, view, or delete any property listings and development projects. | Manage listings (view, edit, delete, enable/disable) depending on the specific modules enabled for their account. | Keydemand users have **CRUD privileges only for their own listings** ("My Listings"), while other colleagues' listings are strictly **"Read-Only"**. |
| **Lead & Subscription Control** | Edit pricing structures, manage supported cities, set rules for High Value Leads (HVL), and unlock premium leads. | Access to subscription/city management and HVL handling is restricted unless explicitly granted by a Super Admin. | Explore properties/demands and view relevant leads based on the permissions configured by the Admins. |
| **System & Content Management** | Handle enquiries, review analytics, edit site content, and toggle emergency controls like **"Site Down"** mode. | Cannot change pricing, edit site content, or toggle **"Site Down"** unless explicitly granted permissions. | No system or content management capabilities. |

### Business rules extracted
- **BR-ADM-082** — Super Admin has the highest privileges, including authority to delete/remove other Admins, and full access to all modules. _(§ role table)_
- **BR-ADM-083** — Super Admin holds all 27 of 27 permissions. _(§ What a Super Admin Can Do)_
- **BR-ADM-084** — Super Admin can create, edit, deactivate or remove backend control panel users and manage account access across 22 roles. _(§ What a Super Admin Can Do)_
- **BR-ADM-085** — Admin manages day-to-day backend operations: user management (add/delete/edit agents, tenants, developers, operators), listing management, subscription/city management and HVL handling. _(§ role table)_
- **BR-ADM-086** — A Standard Admin can only view or interact with the modules enabled for them out of the 27 permissions. _(§ Regular / Standard Admin)_
- **BR-ADM-087** — A Standard Admin cannot manage other internal control panel users, change subscription pricing, edit site content or toggle "Site Down" unless explicitly granted those permissions by a Super Admin. _(§ Regular / Standard Admin; comparison table)_
- **BR-ADM-088** — Phase 1 enforces strictly two primary roles: "Super Admin" and "Admin". _(§ Role Details & Context)_ — conflicts with BR-ADM-004
- **BR-ADM-089** — Normal Users (Agent/Tenant/Enterprise/KD Team) operate only in the User Portal and cannot access the Control Panel. _(§ comparison table)_
- **BR-ADM-090** — Admins can selectively toggle an agent's ability to explore demands, post properties/demands and access broker management. _(§ Role Details & Context)_ — conflicts with doc 6 / doc 2, where demand exploration is KD-team-exclusive
- **BR-ADM-091** — In the Manage User modal, Email ID is read-only (cannot be edited after account creation). Name and City are editable. _(§ Manage User Modal)_
- **BR-ADM-092** — The Control Panel user permission set is 11–12 modules: Dashboard(View); User Mgmt(View, Add, Edit, Delete, Enable/disable); Listing Mgmt(View, Edit, Delete, Enable/disable); Projects(View, Add, Edit, Delete); Subscription(Manage cities, Edit pricing); HVL(Manage rules, Toggle cities, Unlock leads, View leads); Formats(Manage); Enquiries(View, Manage); Control Panel Users(Manage); Analytics(View); Content(Manage); Site Down(Toggle). These total 27 toggles. _(§ Fields on the UAT Page)_

### Open questions / ambiguities in this doc
- It says "11 modules" but lists 12 (Dashboard, User Mgmt, Listing Mgmt, Projects, Subscription, HVL, Formats, Enquiries, Control Panel Users, Analytics, Content, Site Down). The 12 sum to 27 toggles (1+5+4+4+2+4+1+2+1+1+1+1). V2.0 adds "Bulk Upload" (2 toggles) and drops "Site Down", which also gives 27.
- "22 roles" is not enumerated anywhere.
- Citations point to the Version 1.0 Control Panel doc (`1TzelTFc…`), but the current text of that docx does not contain these statements. They appear in V2.0 and Keydemand.docx instead.
- The "Admin" row says Admin can add/delete users, but the Standard Admin text says those abilities depend on granted permissions. It is unclear whether "Admin" is a fixed role or a permission set.

---
## Keydemand Admin  [AUTHORITATIVE]
**Source:** gdoc · ID `1drGbp4uUpXFFrLQka8Vfg1s2HIR7QlJgg7iM1AwNomg` · pradeepa.pv@futuristglobal.com · modified 2026-06-11 · sections read: whole doc (2 lines) + linked PDF "KeyDemand Daily Summary.pdf" (`1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452`, 2 pages) · read coverage: 100% (no comments)

### Content
[KeyDemand Daily Summary.pdf](https://drive.google.com/file/d/1UBbIFk4jDgHOXmAXl3gvS9RjfiPsW452/view?usp=drive_link)

Admin email notifications are to be sent in the morning and in the evening with all this information. If any of the information is not there, then do not show that information.

**Linked PDF: KeyDemand Daily Summary (sample email mock, rendered 11/06/2026 16:10)**
- Header: KEYDEMAND · END OF DAY SUMMARY · #CRESIMPLIFIED · "Here's what happened today." · Wednesday, 10 June 2026 · Platform Activity Digest
- **TODAY AT A GLANCE:** 7 New Enquiries · 3 New Subscribers · 2 High Value Demands · 4 Deletions / Deactivations · 1 Account Deleted
- **NEW ENQUIRIES**
  - New Developer Enquiry (3 today): Prestige Group · Mumbai · Commercial tower — 2.4L sq.ft · 10:24 AM · View →; Brigade Group · Bengaluru · IT Park — 85,000 sq.ft · 2:11 PM · View →; Embassy REIT · Pune · Business park — 1.1L sq.ft · 4:48 PM · View →
  - New Operator Enquiry (2 today): Awfis Space Solutions · Bengaluru · Managed office — 12,000 sq.ft · 9:05 AM · View →; WeWork India · Hyderabad · Flex office — 8,500 sq.ft · 3:30 PM · View →
- **USERS & SUBSCRIPTIONS**
  - NEW SUBSCRIBED USERS (3): Rajesh Kumar · Agent · Pro; Meera Retail Pvt Ltd · Brand · Basic; Sundar Spaces · Developer · Pro; View All Subscribers →
  - EXPIRED USERS (2): Ankit Brokers · Agent · Expired 9 Jun; FreshBite Foods · F&B · Expired 8 Jun; View All Expired →
- **HIGH PRIORITY: ACTION NEEDED**
  - Enterprise Solution Leads (2 unassigned), Assign Now →: Tata Consultancy Services · Bengaluru · 3 cities · Office · 2,00,000 sq.ft · ₹85/sq.ft · Submitted 11:30 AM · No RM assigned; Zomato Corporate · Mumbai · 2 cities · F&B · 45,000 sq.ft · ₹120/sq.ft · Submitted 3:00 PM · SLA: 45 min left
  - New Project Leads (5 today), View All →: Godrej BKC — Tower B · Mumbai · 3 leads; Manyata Tech Park Phase 3 · Bengaluru · 1 lead; Vaishnavi Tech Square · Bengaluru · 1 lead
  - HIGH VALUE DEMANDS (2): Infosys BPM 1.5L sq.ft · ₹90/sq.ft · Pune; HDFC AMC 80,000 sq.ft · ₹110/sq.ft · BKC; View Demands →
  - MANAGED OFFICE DEMANDS (4): Groww Technologies 150 seats · Bengaluru; PharmEasy 80 seats · Mumbai; +2 more; View Demands →
- **DELETIONS & DEACTIVATIONS**
  - Deleted Properties (2): Shop #12, Bandra West · Amit Realty; Office Fl.4, ORR · KD Listed; View Log →
  - Deleted Demands (1): Retail 2000 sq.ft, Koramangala · Brand User; View Log →
  - Deactivated Properties (3): Commercial Space, Whitefield; Retail Unit, Andheri West; +1 more; View Log →
  - Deactivated Demands (2): Office 5000 sq.ft, NCR · Paused; F&B 1200 sq.ft, Hyderabad · Paused; View Log →
  - ACCOUNT DELETION: Sharma Properties Pvt Ltd · Agent · Account Deleted at 6:14 PM · 12 listings removed · 3 active demands removed · View Record →
- Footer: VIEW FULL DASHBOARD · Download Today's Report as PDF · KEYDEMAND #CRESIMPLIFIED · India's First CRE Platform · This is an automated summary email. · Manage Preferences · Unsubscribe

### Business rules extracted
- **BR-ADM-093** — Admin summary email notifications are sent twice daily, in the morning and in the evening. _(§ Keydemand Admin)_
- **BR-ADM-094** — The admin summary email contains the sections from the Daily Summary mock: Today at a glance; New Enquiries (Developer, Operator); Users & Subscriptions (New Subscribed, Expired); High Priority Action Needed (Enterprise Solution Leads with unassigned/RM/SLA, New Project Leads, High Value Demands, Managed Office Demands); Deletions & Deactivations (Deleted Properties/Demands, Deactivated Properties/Demands, Account Deletion); View full dashboard; Download Today's Report as PDF. _(§ linked PDF)_
- **BR-ADM-095** — If any piece of information has no data, that section/information is not shown in the email. _(§ Keydemand Admin)_

### Open questions / ambiguities in this doc
- The mock is titled "End of Day Summary", but the rule says morning + evening. The content of the morning edition is undefined.
- Mock lists "Sundar Spaces · Developer · Pro" and "Meera Retail · Brand · Basic" as subscribers. This conflicts with subscriptions being agent-only (doc 2 EP-004), and there is no "Basic" plan defined.
- "SLA: 45 min left" for Enterprise Solution Leads implies an SLA that is not defined in this group.
- Recipients (which admins / roles) are not specified. "Manage Preferences · Unsubscribe" is implied but undefined.

---
## Overview of Keydemand Backend and Admin Control - Phase 1  [AUTHORITATIVE]
**Source:** gdoc · ID `1tJjfwBQiPdCqbkNC172vcMam7uSjZwZq2AFbpv_qMnQ` · pradeepa.pv@futuristglobal.com · modified 2026-05-19 · sections read: admin-onboarded roles; Epic Wise Feature Dependency on Admin (table); Review of Admin-Controlled Examples; Role-Based Admin Action Items (table) · read coverage: 100% (no comments)

### Content
The roles that can be added only using the Admin panel or require a manual backend onboarding process by the Keydemand admin team are:
- **Developer**: Users undergo a soft registration, but a *manual onboarding process by the Key Demand admin team* is required within 24 hours. The admin team *strictly onboards developers via the backend*.
- **Managed Space Operator**: Users undergo a soft registration, followed by a *manual onboarding process by the Key Demand admin team* within 24 hours.
- **Keydemand Team** (Internal User): These users are *onboarded on the backend* and have extra privileges.
- **Enterprise Accounts** (Brand Enterprise and Office Enterprise): The Key Demand team does account creation on the platform after an online/offline-sourced lead and onboarding flow.

**Epic Wise Feature Dependency on Admin.** The following features can be enabled, managed, or executed by the Keydemand admin team, or via the platform backend. I have listed them, Epic-wise, with details for Phase 1.

| Epic/Module | Admin-Exclusive Feature/Action | Details/Restriction |
|---|---|---|
| **Authentication & Access Control** (EP-001) | **Manual Onboarding (Developer & Managed Space Operator)** | Users undergo soft registration but require manual onboarding by the Key Demand admin team within 24 hours. |
| | **Developer Login and Access** | Developers are restricted from the front-end; they can *only* access dashboards and leads from the backend. |
| | **Internal User Access & Privileges** | Keydemand team members are onboarded on the backend and have extra privileges. |
| | **Admin Panel Login** | The admin panel is the only entry point using a username and password (all other users use mobile number and OTP). |
| **Subscription & Plan Management** (EP-004) | **Defining Subscription Plans** | The Keydemand admin defines subscription plans, features, pricing, city structure, and city-to-pricing allocation. [4] |
| | **Account Deactivation Logic** | Implementing the logic to set a subscribed agent's account and posted listings to deactivate after 3 months of non-renewal. [4] |
| **Property Listing Management** (EP-005) | **Managed Space Operator Listing** | Managed Space Operators cannot add properties directly; their listings are only added from the **backend through the Keydemand admin team**. |
| | **Flex Property Listing** | Uploading Flex Property is exclusively handled by the Keydemand team. (It is pushed to Phase 2) |
| | **Internal Inventory Access** | Keydemand team members can access the inventory of other Keydemand members under "My Listings," which is filterable by username. |
| **Demand Listing Management** (EP-006) | **Demand Discovery Restriction** | Front-end users (agents/brands) can no longer explore or search demands; exploration is strictly restricted to the internal Key Demand team. |
| | **High-Value Demand Routing** | The system automatically checks Carpet Area and Location during demand submission, tags it as "High-Value," and routes it exclusively to the **internal Keydemand team**, hiding it from external agents. |
| | **Managed Space Demand Upload** | Managed Space Demand requirements posted by the Keydemand admin team are only viewed by the Keydemand team (in Explore/relevancy). |
| **Project Module** (EP-007) | **Project Creation and Upload** | Developers no longer post individual properties; project uploading is handled by the Keydemand admin team on the backend. |
| | **Project Verification and Editing** | The Keydemand Admin team has the right to add, verify, or edit projects on behalf of developers. |
| | **Project Lead Routing** | Project leads are routed directly to the Key Demand relationship manager and the super admin dashboard. |
| | **Project View Tracking** | The backend implements a counter to track project views, which is hidden from end-users and used only internally. |
| **Lead & Enquiry Management** (EP-011) | **Enterprise Account Creation** | Creation of Brand Enterprise and Office Enterprise accounts is done by the Keydemand admin team following an offline onboarding flow. |
| | **Lead Transfer (Enterprise Solution)** | Any user who self-selects 'Enquire for Enterprise Solution' on a property or demand form has their lead automatically transferred to the Keydemand admin team. |
| **General** | **Targeted Marketing** | The KeyDemand admin team uses the State and City data provided during agent registration for targeted marketing. |

**Review of Admin-Controlled Examples**
- **Project Creation (US-024):** *Definition:* Project creation is an admin-exclusive, backend-only feature. Developers are restricted from the front end, only accessing dashboards and leads post-registration.
- **Onboarding:** *Admin-Controlled Onboarding:* The key admin-controlled onboarding process applies to the **Developer** and **Managed Space Operator** roles. These users complete a soft registration but require a subsequent **manual onboarding process by the Key Demand admin team** before they can explore the platform. The **Keydemand team** itself is also "onboarded on the backend".
- **Location of Features:** All identified V2 administrative features are consistently stated to be executed on the **backend** (e.g., project upload, high-value lead routing, managed space supply listing) and accessed via the **admin panel**, which uses a username and password login.

**Role-Based Admin Action Items**

| Role | Admin Control/Action | Area of Control |
|---|---|---|
| **Developer** | Manual onboarding by the Key Demand admin team is required after soft registration. | Authentication & Access Control |
| | Uploading of projects is handled entirely by the Keydemand Admin team. | Project Management (Backend) |
| | The Super Admin team has the right to add, verify, or edit projects on their behalf. | Project Management (Backend) |
| **Managed Space Operator** | Manual onboarding by the Key Demand admin team is required after soft registration. | Authentication & Access Control |
| | Cannot add properties directly; managed office supply is added *only* by the Keydemand admin team. | Property Listing Management |
| **Agent** | Is the target for marketing based on State and City data provided during registration. | Targeted Marketing |
| | Subscription plans (features, pricing, and city coverage) are defined and managed by the Keydemand admin. | Subscription Management |
| **Retail & F&B Brands / Tenants / Managed Space Occupiers** | Leads generated when users "Enquire for Enterprise Solution" are routed to the Keydemand admin panel. | High-Value Lead Routing |
| | Demands exceeding a city-based threshold for size ("High-Value" demands) are routed exclusively to the internal Keydemand team and hidden from external agents. | Demand Management |
| | Creation of Brand/Office **Enterprise Accounts** on the platform is performed by the Keydemand admin team. | Authentication & Access Control |
| **Keydemand Team** | Is onboarded on the backend and granted extra privileges. | Access Control (Internal) |
| | Has the exclusive right to explore and search through all demands (Front-end users are restricted). | Demand Discovery Control |
| | Can access the inventory/listings of other Keydemand team members (filterable by username). | Inventory Access (Internal) |

### Business rules extracted
- **BR-ADM-096** — Developers and Managed Space Operators soft-register and must be manually onboarded by the KD admin team within 24 hours. Developers are onboarded strictly via the backend. _(§ intro; EP-001)_
- **BR-ADM-097** — Developers are restricted from the front-end. They can only access dashboards and leads from the backend. _(§ EP-001)_
- **BR-ADM-098** — Keydemand team members are onboarded on the backend and have extra privileges. _(§ intro; EP-001)_
- **BR-ADM-099** — Enterprise accounts (Brand Enterprise, Office Enterprise) are created by the KD team/admin after an online/offline-sourced lead and onboarding flow. _(§ intro; EP-011)_
- **BR-ADM-100** — The admin panel is the only entry point using username and password. All other users use mobile number + OTP. _(§ EP-001)_
- **BR-ADM-101** — The KD admin defines subscription plans, features, pricing, city structure and city-to-pricing allocation. _(§ EP-004)_
- **BR-ADM-102** — A subscribed agent's account and posted listings are deactivated after 3 months of non-renewal. _(§ EP-004)_
- **BR-ADM-103** — Managed Space Operators cannot add properties directly. Their listings are added only from the backend by the KD admin team. _(§ EP-005)_
- **BR-ADM-104** — Flex Property upload is exclusively by the KD team and is pushed to Phase 2. _(§ EP-005)_
- **BR-ADM-105** — KD team members can access other KD members' inventory under "My Listings", filterable by username. _(§ EP-005)_
- **BR-ADM-106** — Front-end users (agents/brands) cannot explore or search demands. Demand exploration is restricted to the internal KD team. _(§ EP-006)_
- **BR-ADM-107** — On demand submission the system checks Carpet Area and Location, tags the demand "High-Value", and routes it exclusively to the internal KD team, hidden from external agents. _(§ EP-006)_
- **BR-ADM-108** — Managed Space demands posted by the KD admin team are viewed only by the KD team (Explore/relevancy). _(§ EP-006)_
- **BR-ADM-109** — Project upload is handled by the KD admin team on the backend. The KD Admin / Super Admin team can add, verify or edit projects on behalf of developers. _(§ EP-007; Role table)_
- **BR-ADM-110** — Project leads are routed to the KD relationship manager and the super admin dashboard. _(§ EP-007)_
- **BR-ADM-111** — A backend counter tracks project views. It is hidden from end-users and used only internally. _(§ EP-007)_
- **BR-ADM-112** — Any user who selects "Enquire for Enterprise Solution" on a property or demand form has their lead automatically transferred to the KD admin team / admin panel. _(§ EP-011)_
- **BR-ADM-113** — The KD admin team uses agents' State and City registration data for targeted marketing. _(§ General)_

### Open questions / ambiguities in this doc
- "Admin panel … username and password" vs V2.0 "email ID and password". Is the username the email?
- "Developers … can only access dashboards and leads from the backend" vs doc 2 "There is no front-end login or dashboard for Developers". The type of developer access is unclear.
- "access the inventory of other Keydemand members under 'My Listings'" vs V2.0, where colleague listings are under "Keydemand Listings" and are Read-Only.
- [4] citation marker has no visible target.

---
## Version 1.0 Control Panel V2.1 -0.docx  [HISTORY — superseded by Version 2.0 Control Panel V2.1 -0 .docx]
**Source:** docx · ID `1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA` · pradeepa.pv@futuristglobal.com · created 2026-08-12 · modified 2026-10-04 · read coverage: 100% of extracted text (1,257 non-empty lines: General Rules, EP-001…EP-013, EP-018, EP-19, User Specific Pages). Images not visible. Inline comment anchors exist (e.g. AAAB4V1_wIE, AAAB3UHqOw8) but comment text is not exported for docx.

**Important finding:** despite its title, this file is **not** an earlier Control Panel spec. It is the **Phase 1 platform BRD** (Epics EP-001 Authentication … EP-019 Landing Page, with user stories US-001…US-062). Its "EP-018 — Keydemand Admin Console" section contains only one sentence and a link to *itself* (`https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp`). The "Super Admin, Normal Admin" doc also cites this ID for Control-Panel statements that the current file no longer contains. This suggests the file content was **overwritten / replaced** with the BRD. Non-admin BRD content (login flows, forms, search, relevancy, etc.) is assumed to be covered by the BRD group, and only admin/control-panel-relevant content is diffed here.

### Differences vs authoritative version
**Exists only in V1.0 (admin-relevant), quoted:**
- General Rules: *"Key Demand User Portal Scope: Front-end Keydemand agents are transactional users who utilize the platform to explore properties, post demands, and manage their assigned leads. They are strictly prohibited from onboarding new users or editing external user profiles."* and *"Control Panel Scope: The Control Panel is restricted to a handful of core management/administrative staff (e.g., based in Mumbai). It provides a holistic overview of the platform, enabling user onboarding, bulk project/property uploads, subscription management, and analytics."*
- EP-001: *"Incomplete Profile Lead Capture: If a user verifies their mobile number via OTP during signup but abandons the flow before completing their profile, the system must instantly capture the verified mobile number as an actionable 'lead' or 'inquiry' in the backend control panel for manual outreach."*
- EP-001: *"Onboarding Cross-Interest Hook: … 'Also interested in Managed Office?', their inquiry details are routed instantly in the background to the Keydemand admin team…"*
- EP-001 / EP-002: *"Backend Sub-User Control: Enterprise brands cannot manage sub-users themselves; all sub-user additions, deletions, or role configurations must be processed via the Keydemand backend admin panel."* and *"Ownership Transfer: If an enterprise member leaves the brand, their listings and content must be manually transferred to another active user within the brand account via the admin panel before their original profile can be deleted."*
- EP-001: *"Platform Deletion Flow: Users submit deletion requests by filling out a designated Google Form. … the admin must manually reach out to the user to finalise account deletion via the backend."* Form: https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform (V2.0 has this only as the "Deletion Requests" tab with "Log email request".)
- EP-001 / EP-002: *"Keydemand Team Soft-Delete (Colleagues): Deactivating or deleting Keydemand team members via the backend soft-deletes their platform profile, but historical user logs and inventory listings are retained for audit and tracking purposes."* (V2.0 adds the handover requirement instead.)
- EP-002: *"Keydemand Internal Team Profile Fields: Internal team profiles capture Name, Mobile Number, Email, Photo, and Roles & Permissions. No front-end deactivation or deletion buttons exist on their profile page; these actions are strictly restricted to backend administration."*
- EP-002: POC/RM: *"Multiple Assigned POCs Display Lock: If multiple Keydemand team members are assigned to manage a single brand account, only the first person assigned will be publicly displayed on the brand's dashboard profile."* The role is called "POC" brand-side and "Account Handler" backend-side.
- EP-002 (US-007): Deactivation *"… puts it into a three-month hibernation period before permanent removal"*.
- EP-004 §9 Backend & Administrative Control Panel Rules: same as V2.0, plus *"Complimentary Access for Testing: … The admin enters the duration month-wise, and upon expiry, the account reverts to a payable status unless edited and extended from the backend."* Also *"Combined Bundles (Retail + F&B AND Office): Metro 2,000 RS per city per month; Non-Metro 1,500 RS per city per month."* (absent from V2.0 pricing table)
- EP-004 pricing: Rest of India *"1,000 RS per asset class per month"* (V1.0) → V2.0 "₹1,000 flat · rest of India". PAN India *"5,000 RS per month per asset class bundle"* (V1.0) → V2.0 "₹5,000 flat / asset class".
- EP-005: *"Keydemand Team Restricted Visibility: If Keydemand uploads a property and designates it 'Keydemand/Brand' only, it must be completely hidden from the public explore landing page…"*. *"Posted By Label: … displays 'Keydemand' to external audiences (though internally, team members see the name of the specific colleague who uploaded it)."*
- EP-005 / EP-011 / EP-012: *"Lead Access Audit Trail: Clicking the 'View Contact' CTA unlocks the lead's mobile number, automatically updates the 'Viewed' status (Yes/No), and maintains a timestamped 'Viewed by' log tracking exactly which team member accessed it."* (V2.0 keeps a shorter audit-trail rule plus a "Viewed by" column in doc 3's HVL table.)
- EP-006 §7 HTL: *"Mumbai Market: Demands exceeding 5,000 sq ft. Bangalore & Hyderabad Markets: Demands exceeding 10,000 sq ft."* *"Massive Demand Bypass: If an external agent posts a massive demand (specifically exceeding 10,000 sq ft in Bangalore), the system must bypass the internal security block and make it visible to other agents with matching properties."* *"Admins' Manual Unlock Valve: If the Keydemand internal team is unable to fulfill an HTL within 3–4 days, the Admin can manually 'unlock' the lead. This action publishes the demand to the public relevancy pool, triggering notifications strictly to agents holding direct matching properties."* (V2.0: unlock by "Keydemand team", notifies agents incl. normal agents; no 3–4 day SLA; terminology HTL→HVL.)
- EP-006 §10: *"Bulk Upload Restrictions: Enterprise brands do not upload requirements manually. All enterprise requirements must be shared via Excel and uploaded centrally from the backend Control Panel by their POC/Keydemand RM."* *"Keydemand Posting Lock: Internal Keydemand team members assigned to manage a brand account can post or edit demands on the front-end on that brand's behalf."* *"Template Formats: Admins pre-feed 'Formats' in the backend to act as constant templates where physical parameters … are fixed, and only the City and Location act as variables."* Note: V2.0 Business Rules say enterprise users log in and post demands themselves.
- EP-006 §3: *"Enterprise Demand Exemption: Day-to-day operational requirements posted by existing, manually onboarded enterprise brands (e.g., Raymond, H&M) do not follow individual free posting limits or high-value routing rules."*
- EP-007: *"Administrative Sourcing Only: Projects can only be added, edited, or verified strictly via the backend Control Panel by the Keydemand Admin team."* *"Permanent Project ID … non-editable"*. *"RERA ID Optionality"* (optional, project-level). Developer schema: Developer Name, Upload Logo, Mobile Number, Contact Person Name, Operating Cities (multi), Asset Class (multi). MSO schema: Operator Name, Mobile Number, Contact Person Name, Operating Cities (multi), Asset Class pre-selected "Managed Office Space" **and locked**.
- EP-007 categories: **Standard / Premium / Exclusive**. *"Premium Projects: Paid developer advertisements that are strictly city-specific. Scarcity Lock: Limited to a finite number of 3 to 5 slots per city."* *"Exclusive Projects: Projects mandated solely to be taken care of by Keydemand … nationwide banner or carousel … The internal Keydemand team is exclusively responsible for handling all follow-ups and contact requests."* (V2.0: Exclusive / Premium / Common Project; Booster: Featured / Exclusive / Sponsored.)
- EP-007 §5: *"'Who Can See Your Project' Field: This field is strictly visible on the Admin end during project upload and hidden from the user end."* *"Brand-Specific Target Lock: If an Admin assigns a project to a specific brand/user, this project must be hidden from the public landing page and displayed only on the home page/dashboard of that specific Brand (F&B, Retail, or Office)."* *"'Assign Keydemand POC' Field: Visible strictly on the Admin end during upload."* (V2.0 only has "Assigned to KD POC" in Booster; "Who Can See Your Project" is absent.)
- EP-007 §7C / EP-011 §4: Show-Interest leads are routed to (1) Developer/Operator, (2) RM, (3) assigned KD member, (4) **Platform Super Admin dashboard / Super Admin Control Panel**.
- EP-007 §4: *"Managed Office projects can only be posted by Keydemand backend administrators"*; Managed Space transaction locked to "Lease".
- EP-011 §5: Enterprise-Brand lead statuses **Approved, Rejected, Open**. *"Enterprise Tenant (Office and Managed) representatives do not have 'Accept,' 'Reject,' or 'Image Request' buttons."*
- EP-012: *"HVL demands are … visible and unlockable exclusively by the internal Keydemand team and Admin."*
- EP-018 — Keydemand Admin Console: *"Keydemand team can manage users, moderate listings, manage featured/exclusive flags, and oversee platform operations."* (link to self)

**Changed (V1.0 → V2.0):**
- Phase 1 admin roles: not stated in V1.0 → V2.0 "Super Admin, Admin, Ops User".
- KD member deletion: soft-delete with retained logs → must hand over listings to another KD user before delete/deactivate (Pending handovers).
- HVL unlock: Admin, after 3–4 days, notifies only agents with direct matching properties → KD team unlock; notify normal agents and KD agents with relevant properties; per-lead "Agent Access" toggle.
- Thresholds: hard-coded Mumbai >5,000 and Bangalore/Hyderabad >10,000 → configurable HVL rules per city/asset class/min-max size/transaction/assignee.
- Enterprise demands: uploaded by POC/RM from backend via Excel → enterprise users log in by mobile and post demands with Format auto-fill, plus Bulk Upload "Enterprise Format mode".
- Project categories: Standard/Premium/Exclusive → Exclusive/Premium/Common Project.

**Removed in V2.0 (present only in V1.0):** Combined-bundle pricing (2,000 / 1,500), Premium 3–5 slots per city, "Who Can See Your Project", Brand-specific project target lock, Multiple-POC display rule, RERA ID, KD soft-delete audit retention, 3-month hibernation on deactivation.

---
## Control Panel V2.1 -0 Keydemand.docx  [HISTORY — superseded by Version 2.0 Control Panel V2.1 -0 .docx — VERSION CONFLICT, user to confirm]
**Source:** docx · ID `1CcjZcH6RU1G48AW47ZqjrcsoGfPOhlyy` · pradeepa.pv@futuristglobal.com · created 2026-07-03 · modified 2026-10-14 · read coverage: 100% of extracted text (Business Rules; KD – Control Panel nav; Dashboard; User Management; Listing Management; Subscription Management; High Value Leads; Analytics; Control Panel Users; Admin Users). Images not visible (the source text says "This is an example and not an actual rep of what we need" next to an image). Docx comments are not exported.

**Version decision:** It is unversioned, created earliest (2026-07-03), and its structure is a predecessor of V2.0: Business Rules ≈ a subset of V2.0's, older nav, older tables. Modified 2026-10-14 is newer than V2.0 (2026-10-09). Because it contains statements that contradict V2.0 (listed at the top of this file), it is flagged as a **VERSION CONFLICT**. It is treated as HISTORY until the user confirms.

### Differences vs authoritative version
**Contradicts V2.0, possibly newer decisions (user to confirm):**
- *"Phase 1 Roles: For the initial launch, enforce strictly two primary administrative roles in the Control Panel: 'Super Admin' and 'Admin'."* (V2.0: three, adding "Ops User".)
- KD member permissions: *"Assigned Brands & Tenants (Remove it as discussed with Krishna)"*, *"Other Brands & Tenants"*, *"Tagged Projects (Remove it as discussed with Krishna)"*. (V2.0 keeps Assigned Brands & Tenants and Tagged Projects, and has "Keydemand Brands & Tenants".)
- *"Control Panel Editing Limits: Editing capabilities within the Listing Management Control Panel should only be enabled for 'Keydemand' and its associated 'Enterprise' inventory. Admin will have the option to edit Keydemand and Enterprise listings that are done by them. As these are the users for whom we have onboarded and uploaded."* Also, on the Property table: *"Edit should only be there for Keydemand inventory"*, and Listing Mgmt: *"Can only edit Keydemand and Enterprise listings and demands"*.
- Control Panel Users permission list ends with *"Control Panel Users?(Next Phase) — Add user/remove user; Assign roles"*. V2.0 has "Control Panel Users: Manage" in Phase 1.

**Exists only in Keydemand.docx (quoted / listed in full):**
- *"Download csv file under user management where it will allow admin to download users across. Also to download csv file for Listing level where we can download properties, demands and projects"* (V2.0 has the same in reworded form.)
- **Navigation (old):** Dashboard (User level, Listing level, Analytics); User Management (Agents, Retail Tenants, F&B Tenants, Office Tenants, Managed space Tenants, Enterprise Retail Tenants, Enterprise F&B Tenants, Enterprise Office Tenants, Enterprise Managed space Tenants, Developers, Managed Space Operators, Keydemand Team); Listing Management (Properties, Demands, Projects); Subscription Management (City management, Edit pricing); High Value Leads (Rules based on city, asset class and KD team; Enable city or deactivate; Unlocking leads to agents; Central database of all leads); Analytics; Control Panel Users (Add user, Assign roles); **Content Management (Next Phase)** (Keydemand statistics, About us, FAQ, Terms and conditions, Privacy Policy, Banners Uploading, Clients, Testimonials); **Enquiries** (Developer Enquiries, Managed Space Operator Enquiries, Enterprise Solution Enquiries); Site Down (Next Phase).
- **Dashboard › User Level:** Agents (Total Active Agents, Subscribed Agents, Registered Agents; Properties Uploaded: Retail, Office, F&B; Demands Uploaded: Retail, Office, F&B); Total Active Tenants (Individual + Enterprise): Tenants (F&B, Retail, Office, Managed Office), Enterprise Tenants (F&B, Retail, Office, Managed Office), Demands Uploaded (Retail, Office, F&B, Managed Office); Developers (Total Active Developers, Total Active Projects); Managed Operators (Total Active Managed Operator, Total Active Managed Office projects); Keydemand (Total Active Keydemand Members; Active Properties uploaded: Retail, Office, F&B, Managed Office; Active demands uploaded: Retail, Office, F&B, Managed Office); Active Users - From Google Analytics (Daily, Weekly, Monthly).
- **Dashboard › Listing Level:** Total Active Properties (Retail, F&B, Office, Managed Office Properties; Relevancy across all and leads); Total Active Demands (same sub-items; "Relevancy across all and leads"); Total Active Projects (Enquiries received for the project; Relevant Demands for the projects).
- **User Management NOTE:** *"We will be able to add demands and properties and projects for enterprise users, Keydemand users, Developers and Managed Space Operators under their profile respectively where we will have the option to add, edit, deactivate and delete inventory, demands and projects."*
- **Agents (Add from Control Panel):** Name, Mobile Number, Email id, Asset Class, Transaction Type, My City, Company Name, Designation, Experience, WhatsApp On/Off, Profile Picture. *"Subscription can be assigned to the agent and it shouldn't be charged. Eg. If to test agent journey need an access we can add a subscription for him from the admin without any charges. Give it month wise where I will write the number of months and give access."* *"We will provide subscriptions to agents where control panel users can add and manage their subscriptions. (This is going to be a free-of-cost subscription)"* *"Subscription duration need not be 1 month when done from control panel. Upon expiry of duration, it would be payable unless edited and extended from backend. Show whatever cities are assigned. If Pan India is assigned, then show Pan India."* Agent table rows have no header row in source: `1 | Text | Text | Yes / No / Expired | View | # | # | # | # | DD/MM/YY | Mode / organic`.
- **Retail & F&B Tenant (Individual):** fields Company/Brand name, User name, Mobile number, Email id, Asset Class, Transaction Type, City, WhatsApp On/Off, Brand Picture; *"Option to switch them to Enterprise Retail or F&B Tenants"*. Table: | Sr.no | Brand/Tenant Name | No. of Demands | Properties contacted by me | Leads – Approved | Leads – Rejected | Leads – Pending | Relevancy | RegDate | Source/ mode | Action (View \| Edit \| Delete \| Deactivate/Activate) |.
- **Office Tenant (Individual) & Managed Space Tenants:** Company name, User name, Mobile number, Email id, Asset Class, Transaction Type, City, WhatsApp On/Off, Company Picture; *"Option to switch them to Enterprise Office Tenant or Managed Office Tenant"*. Table: | Sr.no | Brand/Tenant Name | No. of Demands | Properties contacted | Leads | Relevancy | Reg date | Source/mode | Action (View \| Edit \| Delete \| Deactivate/Activate) |.
- **Enterprise Retail & F&B Tenants:** *"We can assign relationship manager to the enterprise users by selecting it from the list of Keydemand Users."* Fields: Brand Name: ABFRL*; About brand*; Name; Mobile number; Add another user (Name + Mobile number); Asset Class: Retail*. **Add Format fields:** Brand name*, Brand picture*, End use*, Transaction Type*, Carpet Area*, Store type, Floor Preference*, Possession needed*, OC required. Examples: *Format 1*: Louis Philippe; Brand picture less than 1mb; End use (not to be shown at user end) based on this image to be chosen; Lease; 4000 sq.ft. *Format 2*: Arrow; Lease; City: Mumbai, Delhi (Can add multiple); 2000 sq.ft. *Format 3*: Arrow Outlet; Lease; City: Mumbai, Bengaluru; 7000 sq.ft. (V2.0 Format fields differ: adds Format Name, Brand Image URL, Asset Class, City, Ceiling Height, Frontage, Additional Details; mandatory asterisks are dropped; the "<1 MB brand picture" limit and the "End use not shown at user end" note exist only here.)
- **Developer & MSO (Add):** Developer name, Mobile Number, Name, Cities (multi-select), Asset Class (multi-select), Add project (fields from PR sheet, Developer). MSO: Operator name, Mobile Number, Name, Cities (Multiple), Asset Class pre-selected to Managed Office Space, Add project option (PR sheet, MSO), **Assign Category – (Exclusive, Premium, Common Project)**. Table: Developer name / Operator Name | Projects | Centres | Leads | Onboarded date | Add, edit, view, delete, deactivate. *"Projects & Centres to be numbered and clickable that will redirect to the project page. Developer name to be clickable to view and manage their profile."*
- **Keydemand Members:** Name, Mobile Number, Email id, Designation, City, Assigned city (Multiple). Permissions: Dashboard (constant), Explore Property, Explore Demand, Post Property, Post Demand, List of Brokers, My listings, Keydemand listings, Assigned Brands & Tenants (Remove…Krishna), Other Brands & Tenants, Tagged Projects (Remove…Krishna), All Projects, High Value Leads, Notification or Enquiries. (No Profile Picture, no Role templates, no Pending handovers.)
- **Listing Management › Property table:** | Prop ID | Asset Class | City | Locality | Carpet Area | User Type | User Name | Added on | Relevancy | Leads | Actions (View/ Inactive/Active/Delete/Edit) |. Filter by User type, user name, asset class, city; Search box (search by anything); Sort.
- **Demand › Individual Demands:** | Demand id | Asset Class | City | Locality | Carpet Area | Number of Seats | User Type | Added on | Relevancy | Leads | Actions (View/ Inactive/Active/Edit) |. Note: **no Delete** for individual demands.
- **Enterprise Demands:** | Demand id | Asset Class | City | Locality | Format | Carpet Area | Number of Seats | Client Name | User Type | Added on | Relevancy | Leads | Actions (View/ Inactive/Active/edit/delete) |.
- **Project:** Toggle between Developer | Managed Office Space. Developer table as V2.0. **Managed Space table:** | Project ID | Centre Name | Operator Name | City | Location | Category | Assigned to | Relevancy | Enquiries | Action (View \| Edit \| Delete) |. Filters: Operator/Developer name, city, category, assigned to; Search box; Sort. **"Category - Standard, Premium, Exclusive"** (conflicts with "Exclusive, Premium, Common Project" in the same doc).
- **Subscription Management:** same text as V2.0 1.4 (no Add City form, no pricing table).
- **High Value Leads list:** | Time stamp | City | Asset Class | Size of Requirement | Assigned to | Viewed by (Name of KD team with timestamp) | Actions (View, Unlock to Agents) |. *"IMP Points (Sort + Filter + Search box) and unopened lead to be marked with red dot."* *"If we unlock the HVL requirement then the agents who have relevant properties will be notified on the relevancy."* Customize: *"…allowing edits for each city, asset class, size range, and the assigned Keydemand team members(multiple). The 'Assign To' field should display a dropdown list of Keydemand team members. We should be able to add and remove cities."* (V2.0 drops the "Viewed by" column and "Unlock to Agents" action in favour of an "Agent Access" toggle.)
- **Analytics:** *"Google Analytics to be shown with below data: Daily, Weekly, Monthly. This will also be reflected on the dashboard."* (V2.0 defers this to Phase 2.)
- **Control Panel Users:** example Name: Himanshu Bhiwandkar; Email: Himanshu@Keydemand.in. Permission module list = the old nav list with *"(view, add, edit, delete, disable)"* on User Management and Listing Management. **Admin Users table:** | Sr.No | Name | Email id | Permissions | Action |, row 1: Himanshu Bhiwandkar | himanshu@Keydemand.in | Manage | Disable/Delete. *"On clicking Manage, it will open the permissions given to the user, and we can edit/add from there."*

**In V2.0 but missing from Keydemand.docx:** Ops User role; Agent Onboarding rules block; KD handover-before-delete rule; My Listings CRUD / colleague read-only rules; 5-contact-view limit; Developer/MSO onboarding rules block; "HVL is only for demands"; card tags / CTA repositioning / audit trail rules; Analytics sync deferral; Overview/Home; separate Enterprise section; all profile-card detail pages; Booster; Managed Centres; Role templates; Pending handovers; Bulk Uploads (entire); Add City form and pricing table; HVL Cities/Add Rule; Bulk Upload permissions; Enquiries (Marketing, Listing Leads, Deletion Requests); Insights Dashboard.

---
## Group-level notes

### Version history
- **Control Panel family:** `Version 2.0 Control Panel V2.1 -0 .docx` (created 2026-09-30, modified 2026-10-09) is AUTHORITATIVE because it has the highest "Version N.N" in its title. `Version 1.0 …` (2026-10-04) is HISTORY by the same rule. In content, however, it is the platform BRD, not a Control Panel draft. `Control Panel V2.1 -0 Keydemand.docx` has no version number. Its modified date (2026-10-14) is the newest, but its creation date (2026-07-03) and its structure show it is the oldest Control Panel draft. It is HISTORY with a **VERSION CONFLICT** flag, because it has a few contradicting statements that could be later edits (two roles; remove Assigned Brands & Tenants / Tagged Projects; edit only own KD/Enterprise listings; Control Panel Users next phase).
- **Admin docs:** These three gdocs (2026-05-19, 2026-06-11, 2026-08-27) are separate topics, not versions of each other. All are AUTHORITATIVE for their scope. Where they conflict with V2.0 (newer, 2026-10-09), V2.0 is the more recent statement.

### Conflicts across docs in this group
- **Number of Phase 1 admin roles:** V2.0 says 3 (Super Admin, Admin, Ops User). "Super Admin, Normal Admin" doc and Keydemand.docx say 2 (Super Admin, Admin). V2.0 is authoritative by version, but it is unconfirmed, and Ops User is undefined.
- **Granular admin permissions:** V2.0 Business Rules defer granular module-level toggles to Phase 2. The V2.0 Add-User modal and the "Super Admin, Normal Admin" doc (UAT page) both have per-action toggles (27 permissions), with Standard Admins restricted to granted ones. The UI and UAT evidence suggests the granular toggles are built.
- **Permission catalogue:** The "Super Admin, Normal Admin" doc has 12 modules with Site Down: Toggle and no Bulk Upload. V2.0 has Bulk Upload (Bulk upload; Review & approve) and no Site Down (Site Down is Phase 2). V2.0 is authoritative.
- **Admin login credential:** Doc 6 says "username and password". V2.0 says "email ID and password", with a temporary password on creation and a reset on first login. V2.0 also says "set a username and password" after the first login.
- **Demand exploration by agents:** The "Super Admin, Normal Admin" doc says Admins can toggle an *agent's* ability to explore demands. Doc 6 and doc 2 say front-end users cannot explore demands (KD team only). V2.0 lists Explore Demand only as a KD-member permission.
- **Colleague listings:** Doc 6 says KD members access other members' inventory under "My Listings" (filterable by username). V2.0 and doc 4 say colleague listings are Read-Only under "Keydemand Listings", with CRUD only on own.
- **KD member deletion:** Doc 2 says soft-delete, with logs and inventory retained. V2.0 says listings must first be handed over to another KD user (Pending handovers). Keydemand.docx is silent.
- **HVL unlock:** Doc 2 says Admin unlocks after 3–4 days, notifying only agents with direct matches, with fixed thresholds (Mumbai >5,000; BLR/HYD >10,000). Keydemand.docx says "Unlock to Agents" action, with agents with relevant properties notified. V2.0 says KD team unlocks, notifies normal and KD agents, with a per-lead "Agent Access" toggle and configurable rules. V2.0 is authoritative.
- **Project categories:** Doc 2 says Standard/Premium/Exclusive. Keydemand.docx says both "Exclusive, Premium, Common Project" and "Standard, Premium, Exclusive". V2.0 says Exclusive/Premium/Common Project (rules), Booster Featured/Exclusive/Sponsored.
- **Enterprise demand posting:** Doc 2 says enterprise brands do not upload manually; the POC/RM uploads Excel from the backend. V2.0 says enterprise users log in by mobile and post with Format auto-fill, and Bulk Upload also supports Enterprise Format mode.
- **Developer access:** Doc 6 says developers access dashboards and leads "from the backend". Doc 2 says there is no front-end login or dashboard for Developers/MSOs. V2.0 has no developer login.
- **Pricing:** Doc 2 has combined bundles (Metro ₹2,000, Non-Metro ₹1,500) and Rest of India "per asset class per month". V2.0 has no combined bundle and Rest of India "₹1,000 flat".
- **Admin email subscriptions (doc 5 mock):** It shows Developer and Brand subscribers ("Pro", "Basic"). Doc 2 says subscriptions are agent-only.

### Permissions matrix (action × role)
Legend: **Y** = allowed · **G** = only if that permission is granted (by Super Admin) · **N** = not allowed · **—** = not applicable / not stated. Sources: V2.0 (doc 1), Super Admin/Normal Admin (doc 4), Backend Overview (doc 6), V1.0 BRD (doc 2, history).

| # | Action | Super Admin | Admin (Standard) | Ops User | Keydemand Team (User Portal) | Agent | Individual Brand / Tenant | Enterprise user | Developer / MSO | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Access Control Panel (email+password login) | Y | Y (restricted modules) | Y? (undefined) | N | N | N | N | N | doc 1, doc 4 |
| 2 | Create / edit / deactivate / delete Control Panel users | Y | G ("Control Panel Users: Manage"); "generally cannot" | — | N | N | N | N | N | doc 1, doc 4 |
| 3 | Delete / remove other Admins | Y (exclusive) | N | — | N | N | N | N | N | doc 1, doc 4 |
| 4 | Create internal roles dynamically / edit KD role templates | Y | G | — | N | N | N | N | N | doc 1 |
| 5 | View Dashboard / Insights | Y | G (Dashboard: View) | — | own front-end dashboard (default, non-removable) | own | own | own | N (doc 2) / backend dashboard (doc 6) | doc 1, 4, 6 |
| 6 | User Mgmt: view/add/edit/delete/enable-disable agents, tenants, brands, developers, MSOs, KD team | Y | G (per action) | — | N | N | N | N | N | doc 1, 4 |
| 7 | Onboard KD team member (no self-registration) | Y | G | — | N | N | N | N | N | doc 1, 6 |
| 8 | Toggle KD member front-end permissions (Explore Demand, Post, Broker Mgmt, KD Listings, Brands & Tenants, Projects, HVL, Enquiries) | Y | G | — | N | N | N | N | N | doc 1 |
| 9 | Hand over departed KD member's work (Pending handovers) | Y | G | — | N | N | N | N | N | doc 1 |
| 10 | Create Enterprise account / convert Individual↔Enterprise | Y | G | — | N (doc 6 says "KD team does account creation", via admin) | N | N | N | N | doc 1, 6 |
| 11 | Add enterprise sub-users / assign Relationship Manager | Y | G | — | N | N | N | N (zero front-end authority, doc 2) | N | doc 1, 2 |
| 12 | Manage enterprise brand Formats | Y | G (Formats: Manage) | — | N | N | N | N (uses them when posting) | N | doc 1, 4 |
| 13 | Deactivate / reactivate enterprise brand | Y | G | — | N | N | N | N | N | doc 1 |
| 14 | Assign complimentary (₹0) subscription to an agent / 3-month Pan-India for migrated V1 users | Y | G | — | N | N | N | N | N | doc 1 |
| 15 | Listing Mgmt: view all properties/demands/projects | Y | G (View) | — | Explore Property (default); Explore Demand (G; KD-only) | explore properties only | explore properties only | explore properties only | N | doc 1, 6 |
| 16 | Listing Mgmt: edit listings | Y (KD and Enterprise inventory only) | G (KD and Enterprise only) | — | own listings only (My Listings CRUD); colleagues' Read-Only | own | own | own (colleagues' Read-Only, doc 2) | N | doc 1, 4 |
| 17 | Listing Mgmt: deactivate / delete any listing | Y | G | — | own only | own | own | own | N | doc 1, 4 |
| 18 | Create / edit / verify / delete projects; Booster; assign KD POC | Y | G (Projects: View/Add/Edit/Delete) | — | N (view All/Tagged Projects if G) | N | N | N | N (backend upload only by admin) | doc 1, 4, 6 |
| 19 | Add Managed Space centres / MSO supply | Y | G | — | N | N (blocked) | N | N | N | doc 1, 6 |
| 20 | Bulk upload; review & approve bulk uploads | Y | G (two separate toggles) | — | N | N | N | N | N | doc 1 |
| 21 | Subscription: manage cities (add; no delete in Phase 1) | Y | G (Manage cities) | — | N | N | N | N | N | doc 1, 4 |
| 22 | Subscription: edit pricing | Y | G (Edit pricing) | — | N | N | N | N | N | doc 1, 4 |
| 23 | HVL: manage rules (city, asset class, min/max size, transaction, assignee) | Y | G (Manage rules) | — | N | N | N | N | N | doc 1, 4 |
| 24 | HVL: toggle cities | Y | G | — | N | N | N | N | N | doc 4 |
| 25 | HVL: view leads | Y | G (View leads) | — | Y (all KD members see all HVLs) | N (hidden) | N | N | N | doc 1, 4 |
| 26 | HVL: unlock to agents / Agent Access toggle | Y | G (Unlock leads) | — | Y per V2.0 rule ("If the Keydemand team unlocks…") | N | N | N | N | doc 1, 4 (doc 2: Admin) |
| 27 | Enquiries: view / manage (Marketing, Listing Leads, Deletion Requests) | Y | G (View / Manage) | — | Notifications/Enquiries (G, front-end) | N | N | N | N | doc 1, 4 |
| 28 | Analytics: view | Y | G | — | N | N | N | N | N | doc 1, 4 (Phase 2) |
| 29 | Content: manage | Y | G | — | N | N | N | N | N | doc 1, 4 (Next Phase in doc 3) |
| 30 | Site Down: toggle | Y | G | — | N | N | N | N | N | doc 4 (Phase 2 per doc 1) |
| 31 | CSV export (users / listings) | Y | — (not mapped to a permission) | — | N | N | N | N | N | doc 1 |
| 32 | Receive twice-daily admin summary email | — (recipients unspecified) | — | — | — | — | — | — | — | doc 5 |
