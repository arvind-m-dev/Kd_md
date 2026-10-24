# 05 — Master Sheet Fields (Story-wise)

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL | Google Doc | `1cHdivqBmfSS08uMiRJd_otlDaD1acAg7yuXBKx8FM-0` | pradeepa.pv@futuristglobal.com | 2026-10-08 | AUTHORITATIVE (Phase 1) |
| 2 | Master Sheet Fields- Story wise - Phase 2 - FINAL -Epic 13 to 18 | Google Doc | `13kg6W0GHO_2SMKGQadXlFrz-McuKKL0_bQ79AuLp3pI` | pradeepa.pv@futuristglobal.com | 2026-07-06 | AUTHORITATIVE (Phase 2 scope — EP-013 to EP-018) |
| 3 | Master Sheet Fields- Story wise - Phase 1 - FINAL | Google Doc | `1bMWbCXa7y4FUAGeXfAGo_loEbwSziCebyOcXEP7p0R4` | pradeepa.pv@futuristglobal.com | 2026-09-07 | HISTORY (superseded by Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL) |
| 4 | Copy of Master Sheet Fields- Story wise - Phase 1 - | Google Doc | `1BuC0IvGeN7jzbX51qtu36QMiJ8V22KGA1MD4x38fv_c` | pradeepa.pv@futuristglobal.com | 2026-06-19 | HISTORY (superseded by Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL) |

---
## Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL  [AUTHORITATIVE]
**Source:** Google Doc · ID `1cHdivqBmfSS08uMiRJd_otlDaD1acAg7yuXBKx8FM-0` · owner pradeepa.pv@futuristglobal.com · created 2026-08-06, modified 2026-10-08 · tabs/sections read: single tab, all sections (General Rules, EP-001 to EP-013, EP-018 link, EP-19, User Specific Pages) + all 16 comment threads · read coverage: 100% (1,260 lines / 125,410 chars of text export read in full). Not read: the embedded images (`[Image: …]`) and the linked external SharePoint workbook / Google Docs / Google Form, which are referenced but are separate documents outside this group.

> Transcription notes: headings were re-levelled to fit this file (Epics = ####, Stories = #####). Google-Docs escape characters were removed. `_[comment ID]_` marks where a Drive comment thread is anchored; thread text is in the "Comment threads" table right after the content. `~~strikethrough~~` text is struck through in the source (removed flows), and is kept as-is. Field names ending in `\*` are mandatory in the source.

### Content

#### General Rules
###### Platform Portals & Separation of Duties
  - **System Demarcation:** The platform is strictly divided into two distinct environments: the regular Key Demand "User Portal" (front-end) and the administrative "Control Panel" (back-end).
  - **Key Demand User Portal Scope:** Front-end Keydemand agents are transactional users who utilize the platform to explore properties, post demands, and manage their assigned leads. They are strictly prohibited from onboarding new users or editing external user profiles.
  - **Control Panel Scope:** The Control Panel is restricted to a handful of core management/administrative staff (e.g., based in Mumbai). It provides a holistic overview of the platform, enabling user onboarding, bulk project/property uploads, subscription management, and analytics. 
EP- mean EPIC - An epic is a large goal or big idea
US- User Story - A story (or user story) is one small, actionable piece of that big idea
[Landing Page, About Us, Enterprise Solutions Page ](https://docs.google.com/document/d/1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc/edit?tab=t.0)
#### EP-001 — Authentication & Access Control
**Business Rules**
**1. Entry Point Convergence & Navigation Routing**
  - Unified Registration URL: All users arriving on the platform via paid Social Media Call-to-Actions (LinkedIn/Meta ads) or directly via keydemand.in must converge on the same registration URL.
  - "List your Project" Exclusivity: The "List your Project \>\>" CTA is hosted purely as a dropdown (Developer | Operator) on the global navigation navbar. Selecting either option opens a standard Enquiry Form. This entry point is completely removed from the login/sign-up pages to separate general users from commercial partners.
  - Guest Access (Unregistered User Flow):
      - Unregistered guest users are granted default read-only access to browse popular cities, project pages, and explore properties (including list details and images, unless the listing owner checked the "Do not show images" privacy box during upload).
      - Guests cannot open detailed property pages or view contact phone numbers.
      - Action-Based Login Gates: Unregistered guests must not be forced to sign up just to browse listings. The system must only trigger authentication/login modals when the guest clicks on high-intent actionable elements, specifically "View Phone Number", "Contact Us", or "Show Interest".
  - Tenant, Managed Office, F&B & Retail Microsite Redirection: Users acquired specifically from targeted social media CTAs are redirected, upon post-registration, to a city-specific Microsite which showcases localized listing relevancies and supply stats.
**2. User Registration, Onboarding, & Lead Capture**
  - Verification and Direct Flow Entry: All self-registering users (Agents, Brands, Office Tenants, and Managed Space Tenants) undergo mobile number verification via OTP. Immediately after OTP verification, they can proceed directly to fill out their personal/profile information.
  - Consent Gating: All user registration paths are strictly gated behind a mandatory, clickable Terms and Conditions (T&C) and "18 and above" age consent checkbox.
  - Registration Capture & Dropped-off Lead Flow:
      - Incomplete Profile Lead Capture: If a user verifies their mobile number via OTP during signup but abandons the flow before completing their profile, the system must instantly capture the verified mobile number as an actionable "lead" or "inquiry" in the backend control panel for manual outreach.
      - Resume Registration Hook: Returning dropped-off users who input their verified mobile number again must be met with a "resume registration" prompt (similar to an abandoned cart) rather than starting the signup flow from scratch.
  - State & City Selection Intent: The State and City selection fields presented in the initial registration flow serve strictly to capture targeted marketing data for the Keydemand admin team.
  - Profile Completion Trigger: If a registered user completes a posting but leaves registration details incomplete, the system must trigger a mandatory profile setup prompt on their second return visit.
  - Onboarding Paths and Free Quota Quotas by Role:
      - Agents: Onboard via mobile number, OTP, and profile details. The email address field is strictly optional (not mandatory) for Agent registration. Granted 1 free property listing or 1 free demand posting upon successful verification.
      - F&B / Retail Brands: Allowed to post demands directly. Granted 3 free demands total (1 initial demand submitted during the onboarding registration flow + 2 additional postings allowed post-registration) before they are pitched an Enterprise Solution.
      - Office Tenants (Occupiers): Allowed to post demands directly. Onboard via Transaction Type, Company Name, City, Location, Carpet Area, and a mandatory T&C checkbox. Granted exactly 1 free demand posting before being pitched the Enterprise Solution.
      - Managed Space Tenants: Onboard via Mobile number, OTP, Name, Company Name, City, Location, and Number of seats. Granted exactly 1 free demand posting before being pitched the Enterprise Solution.
      - Onboarding Cross-Interest Hook: If a tenant filling out standard onboarding demands ticks the box indicating they are "Also interested in Managed Office?", their inquiry details are routed instantly in the background to the Keydemand admin team, while standard office demand posting proceeds.
      - Developers and Managed Space Operators: They can self-register but do not need to log in. Their only user flow is the front-end Enquiry/Lead Form (soft registration). Once submitted, the Keydemand admin team manually onboards them behind the scenes within 24 hours.
**3. Role-Based Access Controls & Feature Permissions**
The platform maintains distinct feature visibility based on user authentication status and paid tiers:
  - Primary Active Portals: System login and dashboard access are strictly reserved for: Brands (Retail & F&B), Agents, Keydemand Internal Team, Office Occupiers (Tenants), and Managed Space Tenants. There is no front-end login or dashboard for Developers or Managed Space Operators.
  - Keydemand Internal Team Portal:
      - Keydemand team members are onboarded exclusively via the backend and log in using their registered mobile number and OTP.
      - Upon entering the OTP, Keydemand users are redirected straight to their home page/dashboard.
  - Non-Universal Navigation Visibility:
      - Adaptive Global Navbar: The navbar dynamically updates to hide irrelevant items. The Agent Subscription tab must be completely hidden on Brand, Developer, Tenant, or Managed Space Operator dashboards.
      - Free Listing Banner: The "Free Listing" navbar notification is displayed strictly to unregistered guests and is completely hidden from authenticated user dashboards.
      - Enterprise Solution Button: Displayed on the navbar for registered Brands, F&B, and Office Tenants, but collapses and disappears once their profile is upgraded to active "Enterprise" status.
  - Contact Unlock Limitations:
      - Non-Subscribed Agents: Restricted to 5 lifetime contact views/requests and 1 property listing. Attempting a 6th contact request triggers a subscription paywall: *"Kindly subscribe to continue"*. Rejections count toward their 5 lifetime free clicks limit.
      - Subscribed Agents: Granted unlimited contact requests and unlimited listings.
      - Registered, Non-Enterprise Brands: Allowed to view contact details up to 5 times on listings before triggering an Enterprise Solution upgrade prompt.
      - Registered, Non-Enterprise Office Tenants: Allowed to view contact details up to 5 times on listings before being blocked and prompted to upgrade to the Enterprise Solution.
  - Image Security Gating (Lister's Control):
      - Image Hiding Lock: A listing owner (Agent) can choose to "Do not show images" during upload.
      - Gated Image Requests: External seekers must be authenticated (logged in) to submit an image request. Submitting an image request automatically shares the requester's phone number with the lister.
      - Image Requests Expiry: Image approval/rejection status never expires (the 72-hour system nullification rule does not apply to image requests).
  - Enterprise Multi-User Accounts:
      - Independent Representative Access: Enterprise/Brand representatives log into the platform independently using their own unique mobile number and OTP.
      - Backend Sub-User Control: Enterprise brands cannot manage sub-users themselves; all sub-user additions, deletions, or role configurations must be processed via the Keydemand backend admin panel.
      - Colleague Data Access: Members under the same enterprise account can view each other's uploaded demands under "My Listings", but cannot edit, delete, or deactivate other members' listings.
      - Ownership Transfer: If an enterprise member leaves the brand, their listings and content must be manually transferred to another active user within the brand account via the admin panel before their original profile can be deleted.
  - Keydemand Internal Team Access:
      - Profile Read-Only Dashboards: Clicking on any user card from the team panel opens a strictly read-only view of that user's dashboard statistics.
      - Colleague Listings Read-Only Rule: Teams can view properties and demands uploaded by other team members under the "KD Listings" view, but are strictly restricted to editing only their own self-listings (My Listings).
      - Bypassing Contact Gates: Internal Keydemand users are provided with an explicit "View Phone Number" button, bypassing general user contact requests or paywall thresholds for direct, instant access.
      - Hidden Images Bypass: Keydemand teams can bypass the public "hidden image" lock on any listing, viewing all hidden photos overlaid with a system banner reading: *"Hidden to others"*.
      - Demand Exploration Exclusivity: The Keydemand team is the only authorized user group allowed to explore demand listings. "Managed Space" demands are visible exclusively to Keydemand.
**4. Account Lifecycle (Deactivation, Deletion, & Reactivation)**
  - Platform Deactivation Flow:
      - Popup Gated: Account deactivation is initiated via a profile button and requires confirmation via a pop-up dialogue box.
      - Inventory Impact: Deactivating a profile pauses and deactivates all associated inventory. All active property/demand listings are immediately hidden from public view, and the user is marked "Inactive" on the platform.
      - Subscription Suspension (Agents): Active subscriptions are suspended upon deactivation. If the agent reactivates within the original subscription timeframe, their active subscription benefits automatically resume for the remainder of their paid days. If reactivating outside of their original subscription window, they revert to a general registered user.
      - Listing Reactivation: Reactivating an account does not auto-publish listings; the user must manually reactivate each property and demand.
  - Platform Deletion Flow:
      - Verification: Users submit deletion requests by filling out a designated Google Form.
      - Manual Deletion Protocol: Upon receipt of the form, the admin must manually reach out to the user to finalise account deletion via the backend.
      - Inventory Impact: Deleting a profile results in the permanent deletion of all associated inventory.
  - Keydemand Team Soft-Delete (Colleagues): Deactivating or deleting Keydemand team members via the backend soft-deletes their platform profile, but historical user logs and inventory listings are retained for audit and tracking purposes.
##### US-001 — User Login
**Description**
As a user, I want to log in with a Mobile number and OTP so that I can access the platform. The admin panel will, however, have username and password. 
**Developer and Managed Space Operator flows are moved from login flow and added to Navbar where they can express interest to list their project. **
 _[comment AAAB4V1_wIE]_ The user will click the Login button/ any CTA and the following dialog will appear. 
  - Phone Number 
      - Country Code Field
          - Default Country Code
          - Drop Down
      - Enter Phone Number Field
      - Continue
  - Who do you identify as (If the number is not registered)
      - Agent
      - Retail Brand
      - F&B Brand
      - Office Tenant/Managed Space Tenant  
  - OTP (If they choose Agent, Retail Brand, F&B Brand, Tenant/Managed )
      - OTP Fields(Only 6 digits will be sent) 
      - Continue
The steps until here will be common for all. 
**If Agent is chosen**
Agents will proceed directly to fill out their personal information after OTP verification.
**Form Fields for Agent:**
**Set your profile picture, Full Name\*, Email id, Phone Number\*, Write about yourself, Cities\*, Asset Class\*, Transaction (Retail, Office, etc.), I agree to terms and conditions-tickbox**
  - # CTA
      - Save Progress
      - Submit
Welcome Screen
Text
  - CTA
      - Start Exploring(Clicking on this would be a user specific dashboard for that particular asset class and city.)
  - If they choose **Individual(Retail and F&B Brands)** - they can post a demand while completing the journey. It is mandatory
  - Mobile number 
  - OTP
  - Brand Name
  - Name\*
  - Asset Class\* - It can be prepopulated or removed 
  - Email \*
  - Transaction Type \*  
     Lease
      - Buy
  - City\*- Drop Down + Search
  - Location\* - Drop Down + Search
  - Carpet area in sq.ft\*
  - Possession needed\*
      - Immediate, In 3 months, In 6 months, After 6 months
  - Other interested Location
      - Drop Down + Search
  - Store Type\*
      - Highstreet
      - Mall
  - Floor\*
      - Ground, Any
  - Clear ceiling height
      - Number (in feet)
  - Frontage in feet
      - Number (in feet)
 
  - CTA
      - Post your requirement - Allows them to submit the demand 
      - Enquire for Enterprise Solution(If they click this - Submit a request for a callback, and a lead can go to the Keydemand admin panel. 
  - Tick - [Terms and Conditions ](https://keydemand.in/terms-and-condition)
Welcome Screen
Text
  - CTA
      - Start Exploring - (Clicking on this would be microsite for that particular asset class and city. Also to showcase relevant properties/ project here where users can show interest)
  - ~~If they choose ~~~~**Developer**~~
      - ~~Form Opens Up(All are mandatory) - Developer Registration~~
          - ~~Full Name\*~~
          - ~~Company Name\*~~
          - ~~Your Designation\*~~
          - ~~Select City\*~~
              - ~~Drop Down~~
          - ~~Official Email ID\*~~
          - ~~GST/CIN No\*: ~~
  - ~~CTA ~~
      - ~~Submit Button~~
      - ~~\> A whatsapp will be triggered that they need to wait for 24 hours to get any further updates.~~
  - ~~Tick - ~~[~~Terms and Conditions ~~](https://keydemand.in/terms-and-condition)
  - ~~Welcome Screen~~
~~Thank you for sharing the information, our team will reach out to you shortly.(He wouldnt have any account.)~~
  - ~~CTA ~~
      - ~~Got it, i’ll wait ~~
  - If they choose **Office Tenant/Managed Space Tenant **
      - Mobile Number -If unregistered, The user is asked to identify their role
      - The user gets to select from sub role to post a Office tenant or Managed Space Tenant - followed by OTP 
      - What best describes you
          - Office Tenant 
          - Managed Space Tenant  
          - CTA 
              - Continue
      - If selected Office Tenant the flow 1 
      - If selected Managed Space Tenant  flow 2
      - Form  - Flow 1  - Post your Space 
          - Check box - Office Tenant or Managed Space Tenant ( If **Office Tenant is chosen**, the following form must appear ) Selecting one option dynamically changes the subsequent mandatory form fields. 
          - Name\*  
          - Company Name\*  
          - Transaction Type\* – Lease/Buy  
          - City\* – Drop-down with text 
          - Location\* – Text with autofill 
          - Carpet Area\* – Text 
          - Other Interested locations 
          - Possession needed\*
              - Immediate, Within 3 months
  - Check box - Also interested in Managed Space Offices (information will be sent to the Keydemand team as a enquiry. )Keydemand team will receive an alert about the user interested in Managed Office Space if someone opts to click during office registration. The Office demand will be posted on on their account. The user will only be able to post office demand & not managed space demand.
  - 
  - CTA 
      - Post a requirement Button- they will click - no need of any tedious process
      - Enquire for Enterprise Solution(If they click this - Submit a request for a callback and a lead can go to the Keydemand admin panel.
  - Tick - [Terms and Conditions ](https://keydemand.in/terms-and-condition)
  - Form - Flow 2
      - Check box - Office Tenant or Managed Space Tenant ( If** Managed Space Tenant ** is chosen, the following form must appear ) Selecting one option dynamically changes the subsequent mandatory form fields
      - Name \*
      - Company Name\*
      - City\* – Drop down with text 
      - Transaction type\*-Lease
      - Location\* – Text with autofill 
      - Possession needed\*
          - Immediate, Within 3 months
      - Number of seats\* – Less than 20, More than 20
      - CTA 
          - Post a requirement button- they will click - 
          - Enquire for Enterprise Solution(If they click this - Submit a request for , a lead to the Keydemand admin panel and a regional representative will be sent (Keydemand team).
      - Tick - [Terms and Conditions ](https://keydemand.in/terms-and-condition)
Outcome for above-Occupiers
Filling these mandatory fields completes registration and automatically posts their first requirement (demand). To post a second demand, they will have to contact the platform
 ~~Welcome Screen~~
  - ~~CTA ~~
      - ~~Start Exploring (Relevancy in all the outcomes if there is any)~~
  - ~~If they choose~~~~** Managed Space Operator **~~
  - ~~Form Opens Up(All fields are mandatory) - Operator Enquiry Form ~~
      - ~~Full Name\*~~
      - ~~Company Name\*~~
      - ~~Your Designation\*~~
      - ~~Select City\*~~
          - ~~Drop Down~~
      - ~~Official Email ID\*~~
      - ~~Phone Number \*~~
      - ~~GST/CIN\*~~
          - ~~Text Field ~~
  - ~~Submit Button~~
      - ~~\> An email that triggers the email ID that they need to wait for 24 hours to get any further updates. ~~
  - ~~Tick - ~~[~~Terms and Conditions ~~](https://keydemand.in/terms-and-condition)
  - ~~Welcome Screen~~
~~Thank you for sharing the information, our team will reach out to you shortly.(He wouldn't have any account.)~~
  - ~~CTA ~~
      - ~~Got it, i’ll wait ~~
##### US-002 — User Sign-Up
**Description**
As a new user, I want to sign up with my details and select my role so that I can access the platform. - Applies only for Agent, Brand(F&B, Retail) and Office Tenant/Managed Space Tenant
Not for Developer/Managed Space Operator
Fields are placed on top for each flow. 
##### US-003 — OTP Verification
**Description**
As a user signing up or performing sensitive actions, I want to verify my identity via OTP so that my account is secure. OTP is for 6 digits.
  - Phone Number 
      - Country Code Field
          - Default Country Code
          - Drop Down
      - Enter Phone Number Field
      - Continue
  - OTP
      - OTP Fields
      - Continue
Wrong OTP - Clear error messages for wrong/expired OTP
Account created successfully
##### US-004 — User Logout
**Description**
As a logged-in user, I want to log out so that my session ends securely.
CTA - Logout 
#### EP-002 — User Profile Management _[comment AAAB3UHqOw8]_
##### US-006 — View My Profile - Everyone- as per Login
**Description**
As a logged-in user, I want to view my profile details so I can see my current information.’
**Business Rules**
**1. Profile Field Configurations & Editable States (Role-Specific)**
  - **Standard Profile Fields**: Every user profile page must track and display the following core fields under "User Info":
      - **Name**
      - **Verified Mobile Number** (non-editable on the front-end, locked to authentication OTP)
      - **Email Address** (Optional for Agents, mandatory for Brands/Tenants)
      - **Profile Picture / Logo**
  - **Operating City Selection (Agents)**: On the profile setup and edit pages, the **"Operating City"** selection field must be configured strictly as a **single-select dropdown** using a visual, city-selector layout.
  - **Identity Transparency Locks**:
      - **Agents**: The agent’s full name must always be dynamically pulled and displayed on the platform whenever they post a property or demand.
      - **Brands & Office Tenants**: The registered company or brand name must be dynamically pulled and clearly displayed on any demand listings they post.
  - **Enterprise Field Mapping Controls**: When an individual user account (Brand, Office Occupier, Managed Office Occupier) is upgraded to **Enterprise status**, edit access for certain fields is restricted.
      - **Carpet Area Auto-Fetch**: Enterprise profiles feature a **default carpet area** configuration mapping their brand's standard real estate format (e.g., McDonald's pre-configured default of 3,000–4,000 sq ft). This default area is automatically fetched and pre-populated when they post a new demand.
  - **Keydemand Internal Team Profile Fields**: Internal team profiles capture Name, Mobile Number, Email, Photo, and Roles & Permissions. No front-end deactivation or deletion buttons exist on their profile page; these actions are strictly restricted to backend administration.
**2. Enterprise Multi-User Profiles & Sub-User Management**
  - **Multi-User Account Sharing Access**: Enterprise accounts support multi-user access. This allows different regional representatives of the same brand to log into the platform independently using their own unique mobile numbers and OTPs under the centralized brand profile.
  - **Listing Edit Blocks (Colleague Lockdown)**: While all team members registered under a single Enterprise account can view each other's uploaded demands, they **cannot edit, delete, or manage listings posted by other colleagues**.
  - **Ownership Transfer Protocol (Member Exit)**: In the event of a change in user ownership (e.g., an enterprise representative leaving the brand), the administrator must **transfer all their active listings to another registered sub-user** (e.g., transferring Himanshu's listings to Pradeepa or Nitesh) before the exiting user's profile can be safely deleted.
  - **Strict Sub-User Control Restriction**: Enterprise brands/tenants possess **zero front-end authority** to add, edit, or manage sub-users. All sub-user profile configurations must be handled via the backend admin Control Panel.
**3. Point of Contact (POC) / Relationship Manager Display**
  - **Overarching Account-Level POC**: Enterprise brands/tenants are assigned a dedicated Keydemand Point of Contact (POC/Relationship Manager) at the city level. This role is referred to as **"POC" or "Point of Contact" brand-side**, and **"Account Handler" backend-side**.
  - **Relationship Manager (RM) Navbar Tab**: A dedicated "Relationship Manager" tab must be present in the enterprise dashboard side-menu.
  - **RM Card Details**: The RM profile card must display the following contact info for the assigned Keydemand representative:
      - **POC Name**
      - **POC Email**
      - **POC Phone Number**
      - **"Call Now" CTA Button**: Clicking this on mobile devices must instantly initiate a physical phone call.
  - **Multiple Assigned POCs Display Lock**: If multiple Keydemand team members are assigned to manage a single brand account, **only the first person assigned** will be publicly displayed on the brand’s dashboard profile.
**4. Profile Deactivation & Reactivation Logic**
  - **Deactivation Entry & Popup Gating**: Account deactivation is initiated via the profile page and requires confirmation through a mandatory popup dialog box.
  - **Platform Activity Pause (Public Blackout)**: Confirming deactivation immediately marks the user as **"Inactive"**. This pauses all account activity, and **all of their active property and demand listings are immediately hidden from public view**.
  - **Standard Reactivation Flow**: A deactivated user can return to the platform at any time. Clicking the **"Reactivate Account"** button on the homepage reactivates their profile.
  - **Listing Reactivation Logic**: Reactivating an account **does not auto-publish** previously active listings. The user must go to their dashboard and **manually select** which individual listings they want to bring live.
  - **Deactivation Subscription Rules (Agents Only)**:
      - **Auto-Suspension**: Active paid subscriptions are suspended immediately upon deactivation.
      - **In-Period Recovery**: If the agent reactivates **within** their original billing cycle, their active subscription benefits automatically resume for the remainder of their paid days.
      - **Out-of-Period Expiry**: If they reactivate **outside** of their original subscription window, they are reverted to a general registered, non-subscribed user and must go through the subscription flow again before taking active platform steps.
  - **Account Deactivation (Keydemand Team)**: Selecting deactivation for an internal Keydemand team member's profile via the backend deactivates the account but **retains user logs** for accountability and audit purposes.
**5. Profile Deletion Protocols**
  - **Deletion Form Gating**: Users cannot delete their accounts directly on the platform with a single click. They must submit an account deletion request by completing an integrated form.
  - **Manual Deletion SLA**: Upon receiving the deletion form, the Keydemand admin team must **manually reach out to the user to verify the request** before executing profile deletion via the backend.
  - **Symmetric Inventory Impact**: Deleting an authenticated profile results in the **permanent deletion of all associated property and demand inventory**.
  - **Account Deletion (Keydemand Team)**: Initiating deletion for a Keydemand team member's profile via the backend functions as a **soft delete**; the backend retains user info, history, and inventory logs to preserve the audit trail.
**6. Admin & Backend-Only Profile Controls**
  - **Enterprise Brand Deactivation Logic**: Deactivating an Enterprise account's brand from the backend admin portal immediately revokes the brand representative's portal access and **disables all of their active demands**.
  - **Enterprise Brand Reactivation Logic**: Reactivating a disabled brand in the backend reinstates the brand's profile but **does not auto-reactivate their previously active demands**.
**7. WhatsApp Notification & Alerts Consent Settings**
  - **Consent Toggle setting**: The Profile settings page must feature a clear **"Do you wish to receive Notifications?" WhatsApp toggle button**.
  - **Transactional Lock Rule**: The toggle button is strictly restricted to **promotional/marketing updates**. Users are **strictly blocked** from opting out of transactional WhatsApp messages (including matching relevancies, leads, interest alerts, and phone number enquiries).
  - **Self-Alert Posting confirmation**: Every time a user posts a new demand or property, the platform must trigger an automated WhatsApp alert to the user’s self-profile confirming the location details and sending a **PDF download link** of their listing.
Check **User Profile Tab **
**Columns - A to AB **
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=j_cY3hSs3kg>
##### US-007 — Edit My Profile
**Description**
As a logged-in user, I want to edit my personal details, company information, and contact preferences.
Same fields as above, only the following fields can be edited. **User Profile Tab **
Column name is - **Can Edit **
**Columns - D, J , P , V, AB**
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=j_cY3hSs3kg>
Fields that can be edited are mentioned in a separate column. 
Deactivate and Deletion of User Profile Accounts are for all types of users except for the Keydemand team. 
**Delete Account**: It will be a form where he will fill and then we shall receive his deletion request and once we receive that. We will reach out to them and delete the account for him. 
<https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform>
**Deactivate Account**: Requires confirmation via a dialog box. The account remains the same, but the subscription stops and cannot be reactivated. Deactivating your account pauses everything.
All your listings will be hidden, and you won't appear active on the platform. You can reactivate anytime — a "Reactivate account" button will be available on your home page when you return.
Once reactivated, your account will be marked as registered but not subscribed.
Note: If you deactivate during an active subscription, your subscription benefits will resume automatically — as long as you reactivate within your original subscription period.
If they re-activate outside the subscription flow then they will be a general registered user and has to go through the subscription process again or asked for subscription if they do any CTA activity.
Delete and Deactivate buttons are added to edit profile section 
Key Demand team are restricted from editing, deleting, or deactivating accounts via the front end, requiring all such actions to be managed at the back end.
Deactivating a profile will deactivate associated inventory, while deleting a profile will result in the permanent deletion of associated inventory. 
Agent,Individual users(Brand, Tenant, Managed Space Tenant) and Enterprise are authorized to delete and deactivate their profiles directly on the platform, although there are different impacts on their associated inventory and subscriptions. 
For account deletion, the user must first submit a request via a form; the Key Demand team then receives this request, contacts the user, and processes the account deletion, which results in the permanent removal of the profile and all associated inventory and the subscription is also permanently deleted. Deletion- this form open <https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform>
For deactivation, the user must confirm the action via a dialogue box; deactivating a profile stops the subscription, deactivates all associated inventory, and puts it into a three-month hibernation period before permanent removal, but the account itself remains the same, although the user would need to restart the subscription process if they wish to reactivate their subscription later.
#### EP-003 — Asset Class Framework _[comment AAAB2MnEGuM]_
##### US-009 — Asset Class Filter Selection in UI
**Description**
As a user, I want to select an asset class when listing or searching so that results are relevant to my needs. Defines the filtering logic for platform property/project search.
Updated Filters Fields are also here. 
**New Platform Requirement-Filter Tab , check Columns A to Y**
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
#### EP-004 — Subscription & Plan Management (Admin) _[comment AAAB2JAc1kI]_
##### US-010A — Define Subscription Plans
**Description**
As a Keydemand admin, I want to define subscription plans with features and pricing so that users can subscribe.
Currently we have Metro, Non-Metro, Rest of Cities and PAN India
**Business Rules**
**1. Target Audience & Core Plan Parameters**
  - **Agent-Exclusive Subscriptions**: Subscription plans on the platform are **strictly and exclusively for Agents**. 
  - **Asset Class Bundling**: Subscriptions are configured and sold strictly as two distinct, non-overlapping asset class bundles: **(Retail & F&B)** is one bundle, and **(Office)** is a separate bundle.
  - **Active Subscriber Privileges ("Pro Members")**: Agents with an active subscription (referred to in the system as **"Pro Members"**) are granted **unlimited listings, unlimited contact requests, full dashboard access, and automated transactional WhatsApp alerts**.
  - **Dynamic UI Restrictions on Listings**: While posting a property or demand, the platform's input dropdown selectors dynamically adjust. The agent is **only shown the specific cities and asset classes they have actively paid for**. For example, if an agent is subscribed to Mumbai only, the city selector must display only Mumbai. If subscribed to (Retail & F&B) but not (Office), only (Retail & F&B) will be selectable as the active asset class.
  - **Non-Subscribed Agent Limits**: Non-subscribed or trial agents are placed on a "Trial Plan" or "Free Plan" and are restricted to **exactly 1 free property listing, 1 free demand posting, and 5 lifetime contact phone number requests** before a paywall is triggered. Under this trial state, they can view up to 5 contact phone numbers directly.
**2. Subscription Pricing Matrix**
Pricing is calculated **per month, per asset class bundle, per city** based on the following matrix:
  - **Metro Cities**: **1,000 RS** per asset class per month.
  - **Non-Metro Cities**: **750 RS** per asset class per month.
  - **Rest of India**: **1,000 RS** per asset class per month (covering areas other than Metro and Non-Metro).
  - **PAN India Bundle**: **5,000 RS per month** per asset class bundle, granting access to every city in India.
  - **Combined Bundles (Retail + F&B AND Office)**:
      - *Metro Cities*: **2,000 RS** per city per month.
      - *Non-Metro Cities*: **1,500 RS** per city per month.
**3. Billing Cycles, Auto-Renewals, and Payments**
  - **30-Day Cycle**: Subscriptions are billed on a **regular monthly 30-day billing cycle**, counted from the exact calendar date the user first subscribes.
  - **Automatic Renewal**: Subscriptions are configured to **automatically renew and auto-charge** the payment method on file on the same date each month, requiring no manual action from the agent.
  - **Failed Auto-Payments**: If an automatic monthly payment fails to process, the system must dynamically render a prominent **"Renew"** button directly on the agent's subscription dashboard page to let them manually complete the transaction.
**4. Mid-Cycle Plan Adjustments (Proration Logic & Cancellations)**
  - **Mid-Cycle Additions**: Agents can add new cities or asset classes to their ongoing plan at any point. Any mid-month addition incurs an **immediate prorated charge** covering the remaining days of the current 30-day billing cycle. In the subsequent cycle, all cities and asset classes are billed together on the regular monthly date.
  - **Mid-Cycle Proration Formula (Example - Himanshu)**:
      - On *10 June*, the agent subscribes to 1 city + 1 asset class. Next renewal date: *10 July*.
      - On *15 July* (mid-cycle), the agent adds a second city. On this date, they are immediately charged:
        1.  The full monthly rate for the existing city/asset class (covering 10 July to 9 August).
        2.  A prorated rate for the new city, covering the remaining 25 days of the cycle (until 9 August).
      - From *9 August onwards*, both cities are bundled and billed together on their regular monthly billing cycle.
  - **Mid-Cycle City Cancellations**: Agents can cancel individual cities from their subscription mid-month, but **no refunds** will be issued for these mid-cycle cancellations.
**5. Subscription Expiry, Grace Period, and Data Preservation**
  - **Cancellation Timeline & Effective Date**: Agents can cancel their subscription at any time via their settings. Upon cancellation, auto-renewal stops immediately, but **premium access remains active until the end of the current paid billing cycle**. The cancellation officially takes effect starting from the *next* billing month.
  - **3-Month Listing Grace Period**: Once a subscription expires or is cancelled, all posted listings remain active and visible on the platform for **exactly 3 months**. During this period, the agent can view incoming leads and relevancy matches but **is strictly blocked from connecting with new users** unless they resubscribe.
  - **Deactivation after 3 Months**: If the subscription remains unpaid after the 3-month grace period of non-renewal, the agent's account status is set to "Expired", and **all of their active property and demand listings are automatically deactivated** and hidden from public view.
  - **Post-Deactivation Data Safety**: While listings are deactivated, **all historical listing data is kept safe** on the system.
  - **Manual Listing Reactivation**: When an agent resubscribes after deactivation, the system **does not auto-publish** listings; the agent must **manually select** which individual listings they want to bring live.
**6. Account Reactivation & Subscription Restoring Flow**
  - **Home Page Reactivation Entry**: Returning deactivated users will see a prominent **"Reactivate account"** button directly on the homepage.
  - **Registered but Unsubscribed Default**: Upon clicking reactivate, the user's account is successfully restored, but they are marked strictly as a **"registered but not subscribed user"**.
  - **CTA Subscription Paywall**: Reactivated users must complete the subscription flow, or they will be immediately blocked and prompted to subscribe the moment they attempt any paid CTA activity on the platform.
  - **Subscription Benefits Recovery Period (In-Period Reactivations)**: If an agent manually deactivates their account during an active subscription and subsequently reactivates it, their premium benefits will **automatically resume for the remainder of their paid cycle**, provided reactivation occurs *within* the original subscription period. If they reactivate outside that period, they revert to a general registered user.
**7. UI Configurations & Functional Dashboard Elements**
  - **Dedicated Subscription Dashboard**: A dedicated dashboard tab must be displayed for agents, featuring five active sub-views:
      - **My Plan**
      - **Next Renewal Date**
      - **Cancel Membership**
      - **Renew Membership**
      - **Customize Your Plan** (Restricted strictly to registered, non-subscribed agents to explain plans).
  - **Dashboard Status Rebranding (Nomenclature Overrides)**:
      - *Trial State*: Unsubscribed or trial agents must see a **"Trial Plan"** or **"Free Plan"** label on their dashboards with active usage counters (e.g., "Usage 0 of 1") rather than generic placeholder text.
      - *Paid State*: Active, paying subscribers must be clearly tagged as a **"Pro Member"**. All outdated terminology like "Broker" or "Agent" is deprecated in favor of this branding.
  - **Pricing Explainer Display**: The subscription dashboard must feature a clear visual pricing explainer outlining metro, non-metro, and bundle pricing to the agent.
**8. Automated WhatsApp and System Notification Rules**
  - **Setting Controls**: Agents can toggle their general WhatsApp notifications on or off via their dashboard settings page.
  - **Transactional Message Block**: The opt-out toggle is restricted strictly to promotional/marketing updates. Agents are **strictly blocked from disabling transactional WhatsApp messages** (including messages regarding matching relevancies, inbound leads, interest alerts, or phone number enquiries).
  - **Self-Alert Posting Confirmation**: Every time an agent adds a new property or demand, the platform must automatically trigger a WhatsApp confirmation message to their self-profile confirming the listing location and providing a **PDF download link** of their listing.
**9. Backend & Administrative Control Panel Rules**
  - **Immediate Frontend Pricing Updates: **Price changes updated by Admins in the Control Panel reflect on the front end immediately.
  - **Deferred Billing Impact: **For active users, updated pricing will only apply starting from their next billing cycle.
  - **No City Deletion (Phase 1): **The ability to delete cities from the system is strictly disabled in Phase 1 to prevent breaking active auto-pay/auto-renewal tokens for external WebApp users.
  - **Complimentary Access for Testing: **Admins can assign zero-charge testing subscriptions to agents from the backend. The admin enters the duration month-wise, and upon expiry, the account reverts to a payable status unless edited and extended from the backend.
  - **Tier Management:** Admins can edit prices and add cities under Metro, Non-Metro, Rest of India, and Pan India classifications. Pre-populated indicative cities within these tiers cannot be removed
**10. Invoicing & Razorpay Payment Integration**
  - **Native Payment Integration**: Razorpay payment screens must be embedded directly on a native subscription page, fully replacing third-party API pop-ups.
  - **Automated GST Invoices**: The system must automatically generate and provide **GST invoice PDFs** directly to the agent upon a successful subscription charge.
**Sample Invoice: **[**https://drive.google.com/file/d/1KPljeVP9SsDRb4eSnlnsIFSDk31iEPK-/view?usp=sharing**](https://drive.google.com/file/d/1KPljeVP9SsDRb4eSnlnsIFSDk31iEPK-/view?usp=sharing)
##### Select Property Type
##### US-011 — Activate Subscription
**Description**
As a user, I want to activate a subscription so that I can access premium features.
**Fields **
Choose Asset Classes and Cities 
Retail and F&B - Toggle Button 
Metro Cities - 1000/city - Multi Select
  - All
  - Mumbai
  - Delhi
  - Bengaluru
  - Chennai
  - Kolkata
  - Pune
  - Hyderabad
Non Metro Cities -750/city
  - F and G columns in <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
Rest of India -1000 INR-  Check Box 
  - J and K columns in <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
PAN India - 5000 INR - Check Box 
Office - Toggle Button 
Metro Cities - 1000/city - Multi Select
A, B, C, D columns in City (Metro & Non-metro) tab 
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
Non Metro Cities -750/city - Multi Select
  - F, G, H columns in City (Metro & Non-metro) tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
Rest of India - 1000 INR - Check Box 
  - J and K columns in City (Metro & Non-metro) tab 
  - <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
PAN India - 5000 INR - Check Box  
Bill Summary 
  - Subscription Summary
      - Metro Cities
      - Non-Metro Cities 
  - Invoice Summary 
      - Plan Total
      - GST
  - Total/Month 
      - Amount
  - CTA 
      - Confirm and Pay
What you will get (Feature Set):
  - Unlimited listings — Post both properties and requirements with no caps. 
  - Smart matching — Get automatically paired with buyers, tenants, or spaces that fit your criteria. 
  - Direct contact access — View verified phone numbers of matched leads instantly. 
  - Real-time lead alerts — Get notified the moment someone matches your listing or requirement. 
  - Unified dashboard — Track your listings, leads, and matches all in one place.
CTA
Proceed (Button): Save Plan
Start Subscription 
##### US-012 — Subscription Renewal & Expiry
**Description**
As a subscribed user, I want to renew my subscription before it expires and be notified of the upcoming expiry.
**STATE 1 - ACTIVE**
Plan Status & Title: My Plan 
Status Label: STATE 1 - ACTIVE
Plan Name: Pro Agent Plan (marked with an "Active" badge)
Plan Description: Full access · 4 cities · All asset classes
Button - Add/Manage Cities 
###### Selected Coverage
  - Category: METRO CITIES
  - City List & Specific Asset Classes:
      - Mumbai: F&B, Office
      - Bengaluru: F&B, Office
      - Delhi NCR: Office
###### What's Included (Features)
  - Unlimited Listings: Post properties & requirements with no caps
  - Smart Matching: Auto-paired with buyers, tenants, or developers
  - Direct contact access: View verified phone numbers of matched leads instantly.
  - Real-time Lead Alerts: Notified the moment someone matches your listing
  - Unified Dashboard: Track your listings, leads & performance
Call to Action
  - Primary Button: Renew Membership
  - Download Invoice
  - Manage Subscription
  - Cancel Membership
**STATE 2 - EXPIRING SOON**
  - Status Label: STATE 2 - EXPIRING SOON
  - Warning Icon: Clock/Timer icon
  - Header: Expiring Soon
  - Sub-text: Plan ends on [Date] (e.g., 2026-05-15)
  - Banner Message: Renew before expiry to keep city access, matched leads, and phone views without interruption.
###### Selected Coverage
  - Category Header 1: METRO CITIES (Count: 3)
  - City List (Metro): Mumbai, Bengaluru, Delhi NCR
  - Asset Tags: F&B, Office
  - Category Header 2: NON-METRO CITIES
  - City List (Non-Metro): Panaji
  - Asset Tags: Office
###### STATE 3 - EXPIRED
  - Status Label: STATE 3 - EXPIRED
  - Banner Category: SUBSCRIPTION STATUS
  - Main Header: Your subscription has expired
  - Sub-header: Plan ended on [Date] · Access paused
###### Coverage Context
  - Section Label: YOUR PREVIOUS COVERAGE
  - Category Header: SELECTED COVERAGE
  - Sub-category 1: METRO CITIES
      - Mumbai
      - Bengaluru
      - Delhi NCR
  - Sub-category 2: NON-METRO CITIES
      - Panaji
  - Asset Tags: F&B, Office
###### Reactivation Info
  - Message Header: Reactivate to unlock everything again
  - Message Sub-text: Same plan, same cities — instant restoration on payment.
###### CTA
  - Primary Button: Reactivate Plan
  - Secondary Button: Upgrade Plan first
**Sample Invoice: **[**https://drive.google.com/file/d/1KPljeVP9SsDRb4eSnlnsIFSDk31iEPK-/view?usp=sharing**](https://drive.google.com/file/d/1KPljeVP9SsDRb4eSnlnsIFSDk31iEPK-/view?usp=sharing)
##### US-013 — Feature Access Based on Plan
**Description**
As for the platform, I need to restrict certain features based on the user's subscription plan.
#### EP-005 — Property Listing Management _[comment AAAB2JAc1kQ]_ _[comment AAAB30p9A1E]_
##### US-014 — Add a Property
**Description**
As a Keydemand team, agent I want to add a property listing so that it is visible to potential buyers/tenants. 
**Property Business Rules **
**1. Posting Authorization, Quotas, & Permitted Asset Classes**
  - **Authorized Listers**: Only the **Keydemand Team** and **Agents** are permitted to list properties on the platform.
  - **Commercial Partner Exclusion**: **Developers** and **Managed Space Operators** are strictly prohibited from self-registering and posting properties directly.
      - *Developer Logic*: Developers are restricted from posting properties on the portal; their commercial projects must be uploaded via the backend Control Panel by the Keydemand Admin team.
      - *Operator Logic*: Managed Space Operators are strictly blocked from listing properties directly; their managed centers/hubs are treated as "Projects" and manually uploaded by the Admin team.
  - **Agent Posting Boundaries**:
      - Agents are permitted to upload and manage property listings strictly within the **Office, Retail, and F&B** asset classes. They are **completely blocked from posting Managed Space (Office) properties** (which is reserved exclusively for Keydemand Admins).
      - An agent's listing capability is strictly governed by the specific **asset classes they selected during registration** and their **active subscription tier**.
      - If an agent selected only a single asset class at registration, they are locked into posting listings of only that specific class. If they selected multiple, they must explicitly specify the asset class for each property upload.
  - **Free Listing Quota Restriction**: Non-subscribed agents are granted **exactly 1 free property listing** on the trial plan. Once this quota is exhausted, the free property listing option must automatically disappear from their dashboard view.
  - **UI Form Default Reset**: On any property form reset or page refresh, the default property type selector must automatically reset to **Office** (replacing the previous V1 Retail default).
**2. Technical Field Validations & Auto-Calculations**
  - **Permanent Identifiers**: The **Property ID** and **Project ID** are permanent, non-editable system tags that must remain clearly visible on both edit and details screens for tracking and reference.
  - **Automated Financial Formulations**: the **"Rate per sq. ft."** and the total **"Rent Amount"** are auto-calculated by the system:
      - Rate per sq. ft. (Carpet)\* = Quoted Rent/Carpet Area
      - Quoted Rent\* = Carpet Area \* Rate per sq ft 
  - **Transaction Parameter Restriction**: All standard property transaction types must default strictly and exclusively to **"Lease"**.
  - **Area Validation**: During entry, the system must enforce the validation rule that the **Carpet Area must strictly be less than or equal to the Built-up Area**.
  - **"Other Interested Locations" Multi-Entry**: The property form must support an "Other Interested Location" field across Retail, F&B, Office, and Managed Spaces, allowing up to **3 secondary locations** within the same city (strictly no radius/distance parameters).
  - **Official Email Field Identification**: The email field must be universally labeled as **"Official Email ID"** with strict domain-level validation enforced (actively blocking generic domains such as @gmail.com). This field is optional for Agents but strictly mandatory for all Brands and Tenants.
**3. Image Standards & Media Upload Rules**
  - **Standard Image Categorizations**: Uploaded images must be segmented and stored within three standardized folders: **"Interior"**, **"Exterior"**, and **"Front Side"**.
  - **File Size & Format Constraints**:
      - **Images**: Maximum file size is strictly capped at **5 MB** per image, in **JPEG or PNG** format.
      - **Videos**: Maximum file size is capped at **15 MB** per video, in **MP4 or MOV** format.
  - **Mandatory Image Uploads**: Users must upload **at least 1 image** in each of the three category fields ("Interior", "Exterior", "Front Side"), except when a video is being uploaded.
  - **Main Listing Thumbnail Auto-Selection**: The first image uploaded under the **"Front Side"** category will automatically display as the primary property card thumbnail. The upload screen must display a prominent informational note explaining this layout behavior to the user during media upload.
  - **Sample Image Previews**: The interface must display high-quality sample reference images during the media upload step so users understand the exact framing required.
  - **LinkedIn-Style Document Uploads**: For documents other than standard image and video files (e.g., floor plans, layout drawings, PDFs), the platform must adopt a **LinkedIn-style attachment tool**, allowing users to upload, custom-name, and manage their files independently.
**4. Privacy Controls & "Request for Images" Workflow**
  - **Secure Image Hiding ("Do not show images")**:
      - Listing owners (Agents and the Keydemand Team) can secure sensitive listings by checking a **"Do not show images"** option during upload. This completely hides all uploaded images from public view.
      - **Keydemand Team Bypass**: The "Do not show images" privacy block is overridden for internal team members; the Keydemand team can always view hidden images, overlaid with a system banner reading **"Hidden to others"**.
      - **Internal Thumbnail Visibility**: Property thumbnails remain fully visible in list views for the Keydemand team even if hidden from public or external view.
  - **Secure Image Request Seeker Journey**:
      - When images are locked, a **"Request for Images" CTA** is displayed to seekers.
      - **Authentication/Login Gate**: Requesters must be logged in to submit an image request. Clicks on this CTA automatically share the seeker's phone number with the listing owner.
      - **Uniform Status Constraints**: Image status changes apply to all users uniformly; agents cannot selectively toggle preview statuses (such as blurred vs. fully visible) for individual users.
      - **No Request Expiration**: Image requests and status changes **never expire**; the 72-hour system nullification rule is disabled for image requests, and they remain active on the profile until approved or rejected.
      - **Duplicate Click Prevention**: The system must block consecutive clicks on the image request CTA from duplicating requests, displaying an **"Already requested"** message to the seeker instead.
  - **Sourcing Conflict Prevention**: To prevent conflicts, the "View Image Request" CTA button is completely disabled or hidden for Keydemand team users when they view external agent properties.
  - **Image Request Display States**:
      - **Pending State**: Renders a **"Pending"** status badge on the card, and images remain locked.
      - **Accepted State**: Renders an **"Accepted"** badge with a **"View Images"** CTA. The requester receives the notification: *"Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further."*.
      - **Rejected State**: Renders a **"Rejected"** badge with a **"View Listing without Images"** CTA. The requester receives the notification: *"Request for viewing images has been rejected by the agent."*.
**5. Search, Filters, Mapping & Geolocation Integrations**
  - **Search Exclusion Logic**: "Explore Demands" and "Explore Properties" **cannot coexist in a single scrolling feed or unified search bar**. Their underlying filter logics are polar opposites.
      - *Search Deselect Trigger*: Selecting "Demands" in search filters must automatically deselect "Properties" and "Projects".
      - *Supply Cohabitation*: "Properties" and "Projects" both represent supply inventory and can be multi-selected and viewed together.
  - **Explore Redirect Priorities**: When redirecting to the explore page, the system must display Office first. If no active Office listings exist in that city, Retail listings are shown first.
  - **Filtered Range Selector**: The properties page must support size filter selections between precise ranges (e.g., 1000 to 2000 sq. ft.).
  - **Demand Map Block**: Maps are strictly excluded from demand cards; map integration is exclusive to Property detail views.
  - **Property Detail Map Integrations**: A property page must feature an interactive geolocation map showing:
      - An active **Leaflet** view.
      - A property location marker.
      - Dynamic nearby ecosystem markers (e.g., nearby banks, bus stops, restaurants, and shopping destinations, customized based on the property's asset class).
      - A clickable **"View Street View"** option, which opens a dedicated Street View overlay popup on the same page.
**6. Listing Visibility, Timelines, & Lifecycle Controls**
  - **Keydemand Team Restricted Visibility**: If Keydemand uploads a property and designates it "Keydemand/Brand" only, it must be **completely hidden from the public explore landing page**, remaining visible only to internal team members and logged-in Enterprise Brands.
  - **7-Day "New Property" Timeline**:
      - A property is classified as "New" strictly for **7 days** from its upload date.
      - The "New Properties" landing section is city-specific and dynamic. If the selected city has no properties uploaded within the last 7 days, the entire section collapses and is hidden.
  - **Response Locking & Editing Restrictions**:
      - Once a listing **receives an active response**, editing permissions lock.
      - Fields marked as **"Yes" (editable)** under Column A of the system sheet remain editable after a response; fields marked as **"No" (non-editable)** are permanently locked.
  - **Control Panel Editing Restrictions**: Listing edits within the administrative backend Control Panel are strictly restricted to **"Keydemand" and "Enterprise"** inventory.
  - **Symmetric Deactivation & Deletion Behaviors**:
      - **Deactivation Rule**: Deactivating a property must immediately remove it from the public marketplace and matching algorithms. All data remains fully preserved in the user’s dashboard for manual reactivation.
      - **Deletion Rule**: Deleting a profile permanently deletes all associated property inventory.
      - **Colleague Listings Lock**: Colleague properties displayed under the "KD Listings" view are strictly **Read-Only**. Users are blocked from editing, deactivating, or deleting another colleague's listing.
7\. Card Layout & Naming Conventions
  - **Display Logic for Property Listing Cards**:
      - **Listing Title**: Must display the **Project Name** if available. If absent, it must auto-generate a descriptive format: **[Store Type] [Asset Class] Property** (e.g., *Highstreet Retail Property*, *Office Property for Lease*).
      - **Posted By Label**: Renders the specific Agent's full name. If uploaded by the internal Keydemand team, it displays **"Keydemand"** to external audiences (though internally, team members see the name of the specific colleague who uploaded it).
  - **Clickable Property Cards**: Clicking anywhere on the background of a property card must open that specific property's page. All property IDs across dashboard list tables must be clickable and redirect directly to listings.
  - **Dashboard Manage Property CTA**: Users can see their own property under explore views, but the CTA must display as **"Manage Property"**.
  - **Hover Interaction States**:
      - **Standard Cards**: When hovering over a clickable property card, the background must light up (highlight in a green or blue shade). The four specific CTA buttons on the card (Relevancy, Edit, Detail, etc.) act independently and are excluded from this general card highlight rule.
      - **Information-Dense Cards**: Cards containing high volumes of text and data must utilize a subtle shadow rather than a color-changing background on hover to avoid overwhelming the user.
      - **Hidden Listings UI Treatment**: For property cards marked "hidden," the UI must not rely solely on an eye icon. An opacity shift (or similar visual treatment) must be applied to the photo area so details remain legible.
  - **Platform Export Formats**: PDF downloads generated from listing pages must **exactly mirror the frontend property layout** (displaying textual data and metadata first, followed by images and geolocation maps).
  - Projects should be matched against all relevant properties by using key input fields from both the project and the property to determine compatibility. Although a specific relevancy percentage will not be assigned, the matched projects must still be presented to users as demonstrably relevant options for their requirement.
**8. Dashboard Response Logging & Auditing**
  - **Live Impromptu Dashboard Listing**: All property responses, matches, and inbound actions are shown directly on the user's dashboard page as a list view (completely replacing the need for a separate email-like inbox).
  - **Dashboard Sorting Priorities**: Property list views must strictly sort to display **newest entries first** and prioritize listings with **unopened/unread leads** at the very top of the list.
  - **Relevancy Match Pushing**: Properties with active matches are automatically prioritized, pushed to the top of feed views, and flagged with a **red dot notification** over the counter.
  - **"User Contacted" Audit Metric**: The "User Contacted" metric on the dashboard must increment **exclusively** when the "View Phone Number" button is clicked.
  - **Outbound Contact Logs**: "Properties Contacted" logs on the Enterprise dashboard must capture the Property ID, associated photo, the name of the owner, the mobile number of the property owner, and the exact date/timestamp of contact for audit purposes.
  - **Lead Access Audit Trail**: Clicking the "View Contact" CTA unlocks the lead's mobile number, automatically updates the "Viewed" status (Yes/No), and maintains a timestamped "Viewed by" log tracking exactly which team member accessed it.
**Add a Property Form Flow**
1\. Asset Class Selection\*
Title: Post a Property
Sub Title: Option to upload retail, F&B, office and managed spaces
Your inventory is 100% secure and cant be accessed by other suppliers
Immediately access relevant opportunities available for your property
  - Retail
  - F&B
  - Office
If asset class is selected already- 
The form opens. The fields are in this sheet which will come as per transaction type, property type and who is doing it. 
Fields are in this sheet- 
**A to FO Columns in Property & Project Input Fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
This is the complete master list of fields for each property type and the **collection of input fields/data points required for uploading different types of property listings**. 
1\. All Fields filled in Green and marked with \* are mandatory fields 
2\. Upload Order, View Order, Edit Order, Overview, Input fields, and dropdown options are added 
A toggle button to be added for images - Request for Images
 CTA
  - Submit 
  - Cancel
##### US-015 — View Property Listing (Detail Page) _[comment AAAB14s71cg]_
**Description**
As any user, I want to view a property's full details as an external user
**View Property Listing Flow **
Fields are in this sheet- View order is mentioned 
**A to FO Columns in Property & Project Input Fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
 _[comment AAAB5qOEQyI]_ Property ID will get added as an additional field 
  - CTA 
      - Download
          - PDF gets downloaded
      - Save
          - Gets added to shortlist
      - Share
          - Email
          - Whatsapp 
  - CTA
      - View Phone Number (Visibility controlled by subscription)
          - Whoever Posted(Hyperlink) User can see the page. The user can View property by clicking each tile. 
##### US-015S — View My Properties (Self View)
**Description**
As a property owner/agent, I want to see all my listed properties with their status.
  - Asset Class: Retail/F&B/Office/Managed Spaces
Fields are in this sheet- View order is mentioned 
**A to FO Columns in Property & Project Input Fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
Property Id will get added as an additional field 
  -  _[comment AAAB5qOEQyk]_ CTA  (on top)
      - Deactivate
          - Property listing gets deactivated
      - Edit
          - Property listing can be edited 
      - Delete
          - Property listing can be deleted
  -  _[comment AAAB5qOEQyI]_ Download
      - PDF gets downloaded
  - Share
      - Email
      - Whatsapp 
  -  _[comment AAAB5qOEQyk]_ 
##### US-016 — Edit a Property
**Description**
As the property owner/agent, I want to edit my property listing to keep it accurate.
  - CTA  (on top)
      - Deactivate
          - Property listing gets deactivated
      - **Edit**
          - **Property listing can be edited **
      - Delete
          - Property listing can be deleted
Fields list is mentioned below. Edit order is mentioned here. 
**Property & Project Input Fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
##### US-017 — Delete a Property
**Description**
As the property owner/agent, I want to delete my listing when it's no longer needed.
  - CTA  (on top)
      - Deactivate
          - Property listing gets deactivated
      - Edit
          - Property listing can be edited 
      - **Delete**
          - **Property listing can be deleted**
Fields list is mentioned below. <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
Delete the listed property as per View My Properties (Self View)
##### US-018 — Property Status Management
**Description**
As a property owner, I want to manage my property's status (Active/Closed) to reflect its current availability.
  - CTA  (on top)
      - Deactivate
          - Property listing gets deactivated
      - Edit
          - Property listing can be edited 
      - Delete
          - Property listing can be deleted
Clicking on the toggle button opens up the View Property form(Self View) as given in US-015S (On the present website it is there, need more ideas) 
#### EP-006 — Demand Listing Management _[comment AAAB13VLJzU]_
Users can add, edit, view, and delete demand listings with lifecycle management.
Agents/Flex Space/Brand, Keydemand team can add demands. 
**Demand Business Rules **
**1. Global Terminology & Search Exclusivity**
  - **Search and Explore Separation**: **"Explore Demands" and "Explore Properties" cannot coexist in a single scrolling feed** or unified search bar. Their underlying filter mechanics are logically opposite and must operate as completely independent search functions.
  - **Dropdown Search Parameters**: Selecting "Demands" in the global search parameters must **automatically and instantly deselect "Properties" and "Projects"**.
  - **Demand Exploration Lock**: Standard front-end portal users (including Agents, Brands, and Tenants) are **strictly blocked from searching or exploring the demands directory**. Demand exploration is a privilege **restricted exclusively to the internal Keydemand team**. Front-end users are matched to demands solely via the backend relevancy engine.
**2. Posting Boundaries & Identity Rules (By Role)**
  - **Retail Brands**: Authorized to post **strictly Retail demands**. They are permitted to explore properties across Retail, F&B, and Office asset classes, but posting is locked strictly to their registered asset class.
  - **F&B Brands**: Authorized to post **strictly F&B demands**. They are permitted to explore Retail, F&B, and Office properties, but posting is locked strictly to their registered asset class.
  - **Office Tenants (Occupiers)**: Authorized to post both standard **Office** and **Managed Space** demands.
  - **Managed Space Tenants**: Authorized to post **strictly Managed Space** demands. They can explore both Managed Space and standard Office properties.
  - **Property Agents**: Authorized to post demands on behalf of clients, strictly governed by the specific **asset classes and cities they have paid for** under their active subscription tier. Agents are **strictly prohibited from posting Managed Space (Office) demands**.
  - **Keydemand Internal Team**: Authorized to post demands across all asset classes (**Office, Retail, F&B, and Managed Space**).
  - **Mandatory Company/Brand Identity**: When a Brand or Office Tenant posts a demand, the **official company or brand name must be dynamically displayed** on the listing.
  - **Agent Poster Visibility**: When an Agent posts a demand, the **Agent's full name** must be displayed.
  - **Keydemand Poster Visibility**: When a Keydemand team member posts a demand, the publisher name visible to the external audience must read strictly **"Keydemand"**. However, internally on the Keydemand dashboard, the system must display the exact name of the team member who uploaded it (e.g., *"Posted by Himanshu"*).
**3. Demand Posting Quotas & Enterprise Funnels**
  - **Property Agents (Trial state)**: Allowed **exactly 1 free demand posting** upon OTP registration.
  - **Individual Office Tenants**: Restricted to **exactly 1 free demand posting**. To post additional demands, they must be converted to an active Enterprise account.
  - **Individual Managed Space Tenants**: Restricted to **exactly 1 free demand posting** before being prompted to upgrade to an Enterprise Solution.
  - **Retail & F&B Brands**: Allowed **exactly 3 free demands total** (1 initial demand filled during onboarding registration + 2 additional demands posted post-registration). Posting a 4th demand automatically blocks the user and **triggers the Enterprise brand upgrade flow**.
  - **Enterprise Managed Space Trigger**: Tenants requesting a size exceeding **20 seats (bulk inventory)** are classified as Enterprise candidates and are immediately directed to the Enterprise onboarding funnel.
  - **Enterprise Demand Exemption**: Day-to-day operational requirements posted by existing, manually onboarded enterprise brands (e.g., Raymond, H&M) do not follow individual free posting limits or high-value routing rules.
**4. Form Field Validation & Data Constraints**
  - **Permanent Fields Lock**: Once a demand is successfully submitted, its core matching parameters are permanently locked to maintain data integrity. The user **can never edit the Asset Class, Transaction Type, City, or Location**.
  - **Editable "Yes" Fields**: Fields marked "Yes" (such as *Other interested locations*, *Possession needed*, and *Floor preference*) **remain fully editable** by the user even after they have received active matches or responses.
  - **Inbound OC Demand Validation**: While the "OC Status" field on property listings is standardized to 4 distinct states, the "OC Required" parameter in the Demand form must strictly remain a standard **boolean "Yes/No" selection**.
  - **Area Mathematical Validation**: The system must enforce a validation rule preventing submission if the **Carpet Area entered is greater than the Built-up Area**.
  - **Empty Field Suppression**: To keep details clean, **any demand field left empty by the poster must be automatically hidden** from the public UI card or detail page.
  - **Unique Identifier**: A non-editable, system-generated **Demand ID** (e.g., *DM-4001*) must be visibly displayed on all detailed cards and tables for tracking and support purposes.
**5. Location & Geolocation Mapping Logic**
  - **Location Multi-Entry (Secondary Localities)**: To allow broader matching, the Demand form must support an **"Other Interested Locations"** multi-entry field.
  - **Quantity Caps**:
      - *Office Tenants and Managed Space*: Can specify **1 primary location + up to 4 additional locations**.
      - *F&B, Retail,*: Can specify **1 primary location + up to 4 additional locations**.
  - **Localised Bounds**: All additional locations **must be within the same city** as the primary location; radius or distance-based parameters are strictly disabled.
  - **Maps Exclusion**: Geolocation maps are strictly **excluded from demand cards and detail pages** (maps are reserved exclusively for properties); demands represent intent and lack tangible media coordinates.
**6. Relevancy Matching & Grouping Engine**
  - **Compatibility Matching**: Projects and properties must be checked against demands by evaluating key compatibility fields (Asset Class, Carpet Area, Location, and Transaction Type) to dynamically populate "Matched Listings".
  - **Matched Projects**: While matched projects do not receive a specific relevancy percentage, they must be dynamically presented as options on the tenant's demand detail page.
  - **Relevancy Sorting**: Relevancies are highly dynamic and must be **sorted by "newest first"** by default.
  - **Relevancy Drill-Down Drawer**: Clicking on the total count of relevancies must open a view that breaks down exactly which Demand IDs match which specific property or project listings.
  - **Click-to-New-Tab**: To prevent users from losing their filtered place in lists, clicking on any property link or demand card from within a relevancy view **must open the destination page in a new browser tab**.
  - **Relevancy Priority Pushing**: Any demand listing with active, unviewed matches must be **automatically prioritized, pushed to the top of list feeds, and flagged with a red dot notification**. Clicking on the tab displays the latest matched properties at the top, marked with a red dot.
**7. High-Ticket Lead (HTL) Ecosystem for Demands**
  - **HTL Size Thresholds**: Demand requirements exceeding specific, city-based size limits are automatically categorized as High-Ticket Leads.
      - *Mumbai Market*: Demands exceeding **5,000 sq ft**.
      - *Bangalore & Hyderabad Markets*: Demands exceeding **10,000 sq ft**.
  - **Exclusive Internal Routing**: Demands flagged as HTLs are **completely hidden from the relevancy matching engines of external agents**. They are routed exclusively to the internal Keydemand team for offline servicing.
  - **Massive Demand Bypass**: If an *external agent* posts a massive demand (specifically exceeding **10,000 sq ft in Bangalore**), the system must **bypass the internal security block** and make it visible to other agents with matching properties.
  - **Admins' Manual Unlock Valve**: If the Keydemand internal team is unable to fulfill an HTL within **3–4 days**, the Admin can manually "unlock" the lead. This action publishes the demand to the public relevancy pool, triggering notifications strictly to agents holding direct matching properties.
**8. Contact Sharing, Disclosures, & Accept/Reject SLAs**
  - **Two-Way Reveal Mechanic (Office & Managed Space)**: Viewing a phone number is a passive event requiring no approval:
      - When an Office or Managed Space Tenant views a supplier’s number, **both parties instantly gain access to each other's contact details**.
      - The contact details are shared with the tenant via WhatsApp. Simultaneously, the property lister is sent a WhatsApp alert capturing the **Viewer's Name, User Type, Mobile Number, and the Property/Demand viewed**.
      - The lead is logged as **"Unread"** on the supplier’s dashboard until opened.
  - **Inbound Accept/Reject Actions (F&B and Retail Brands)**:
      - When external suppliers request to connect with a Retail/F&B Brand’s demand card, the Brand must manually click to **"Accept" or "Reject"** the request.
      - **SLA Working-Days Window**: The Brand has **4 working days** from the date/time of the request to action it. The system logic must **actively exclude Saturdays and Sundays** from this calculation.
      - **72-Hour Expiry Rule**: Any inbound request left unanswered after **exactly 72 hours** is automatically dropped, nullified, and moved to "Rejected" status.
  - **Outbound Notifications (Sent to Requesting Agent)**:
      - *Approved*: *"Your request to view phone number has been approved, kindly connect with them on \<number\>"*.
      - *Rejected*: *"Your request to view the number and connect has been disallowed"*.
      - *Dropped*: *"Your request to view number and connect has been unanswered and thus dropped"*.
**9. Visual Layout, Placeholders, & Expiry Lifecycles**
  - **Lean Layout Constraints**: Demand cards must be structurally lean, restricted to **approximately 15 fields maximum** (as opposed to property cards with 25–30 fields), completely omitting heavy media files or floor plan attachments.
  - **No Large Media on Demand Pages**: On detailed demand pages, **no large empty thumbnails or media placeholders are shown**, as demands represent requirements and lack tangible physical media.
  - **Card Logo/Avatar Logic**:
      - If a brand uploads a profile logo, it must display as a small avatar on the demand card.
      - If no brand logo is provided, the UI must **shuffle between a pool of high-quality, system-defined asset class images** (e.g., specific office or retail placeholders) to maintain a dynamic appearance. Only for enterprise users, end use images to be shown 
      - If an independent brand registers and has no logo, the card must show their initials (e.g., *"posted by Starbucks"* ) rather than displaying an empty image box.
  - **60-Day Auto-Deactivation**: Demands must automatically transition to **"Inactive" status after exactly 60 days** if not renewed, preventing the supply-side agents from chasing outdated requirements.
  - **Verification Cycles**: The system must run an automated check **once every 3 months** to verify if active demands are still valid.
**10. Enterprise Brand Formats & Bulk Uploads**
  - **Bulk Upload Restrictions**: Enterprise brands do not upload requirements manually. All enterprise requirements must be shared via Excel and **uploaded centrally from the backend Control Panel** by their POC/Keydemand RM.
  - **Keydemand Posting Lock**: Internal Keydemand team members assigned to manage a brand account **can post or edit demands on the front-end on that brand's behalf**.
  - **Template Formats**: Admins pre-feed "Formats" in the backend to act as constant templates where physical parameters (e.g., carpet area, store type, floor preference) are fixed, and only the City and Location act as variables.
  - **Format Auto-Fill Logic**: When an Enterprise user logs in and posts a demand, selecting their "Brand Name" (e.g., *Drive-thru*) must **automatically populate all pre-configured specs** into the demand form. The user only completes the specific city/location variables and retains editing rights over auto-filled values.
  - **Brand-Level Deactivation Bounds**:
      - *Deactivation*: Deactivating a brand under an Enterprise account immediately disables their portal access and **turns off all their active demands**.
      - *Reactivation*: Reactivating a brand account in the backend **only reinstates the brand account, not its previously deactivated demands** (these must be reactivated manually).
**11. Dashboard Slider Navigation Matrix**
When interactive demand cards on the live dashboard are triggered, they open detailed sliding side-panels with specific states:
  - **Your Listing - Demands Slider**: Displays the complete list of the brand's or tenant's active demands.
  - **Leads Received Slider**: Displays the total count of leads received per demand.
      - *Brand View*: Clicking the lead count opens **3 distinct sub-tabs** (Phone number viewed, Contact requests received, and Image requests).
      - *Office/Managed Space Tenant View*: Clicking the lead count opens a **single tab** tracking strictly **"Phone number viewed"**.
 
##### US-019 — Add a Demand
**Description**
As a brand/occupier or agent, I want to post a demand so that others can see what I'm looking for.
**Add a Demand Form Flow**
1\. Asset Class Selection - 
Title: Add a Demand\* 
Subheader: Post your Exact Requirement
You can choose to make certain fields mandatory
Immediately access relevant property options available for your requirement
  - Retail
  - F&B
  - Office
Fields are in this Excel: **A to JK columns in Demand Input fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
. CTA
  - Submit 
  - Cancel
##### US-020 — View Demand Listing (Detail Page)
**Description**
As any user, I want to view a demand's full details to understand the requirements.
Fields are in this Excel: **A to JK columns in Demand Input fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
  - CTA 
      - Download
          - PDF gets downloaded
      - Save
          - Gets added to shortlist
      - Share
          - Email
          - Whatsapp 
. CTA
  - Request Contact (F&B and Retail Brand)
  - View Phone Number(Office Occupier and Managed Space Tenant )
##### US-020S — View My Demands (Self View)
**Description**
As a demand owner, I want to see all my demands with their status.
1\. General 
  - Asset Class: Retail, F&B, Office, or Managed Space.(One of them will be selected)
Fields are in this Excel: **A to JK columns in Demand Input fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
  - CTA 
      - Deactivate Demand
          - Demands get deactivated
      - Edit
          - All fields can be edited 
      - Delete
          - Deletes the demand 
  -  _[comment AAAB5qOEQyI]_ Download
      - PDF gets downloaded
  - Share
      - Email
      - Whatsapp 
##### US-021 — Edit a Demand
**Description**
As the demand owner, I want to edit my demand to keep it accurate.
Fields are in this Excel: **Demand Input fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
  - CTA 
      - Deactivate Demand
          - Demands get deactivated
      - Edit
          - All fields can be edited 
      - Delete
          - Deletes the demand 
##### US-022 — Delete a Demand
**Description**
As the demand owner, I want to delete my demand when it's no longer relevant.
Fields are in this Excel: **Demand Input fields tab **<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg>
  - CTA 
      - Deactivate Demand
          - Demands get deactivated
      - Edit
          - All fields can be edited 
      - Delete
          - Deletes the demand 
Same fields as in US-019. 
##### US-023 — Demand Status Management (Open / Fulfilled)
**Description**
As a demand owner, I want to mark my demand as fulfilled when I've found what I need.
Clicking on the toggle button opens up the View Property form. They can edit/delete or deactivate the demand fields. 
#### EP-007 — Project Module _[comment AAAB13VLJzY]_
##### US-024 — Create a Project - Backend. Uploading on backend
**Description**
As a user/developer, I want to create a project that contains multiple property units so buyers can see the full offering.
**Project Business Rules**
**1. Administrative Posting Restrictions & Creation Controls**
  - **Administrative Sourcing Only**: Projects can **only be added, edited, or verified strictly via the backend Control Panel by the Keydemand Admin team**.
  - **Direct Post Prohibition**: External **Developers and Managed Space Operators are strictly prohibited from self-registering or uploading projects** through the frontend User Portal.
  - **Developer Property Upload Block**: Developers are prohibited from listing individual property cards on the platform; they are restricted exclusively to uploading **"Projects"** via the administrative backend.
  - **Managed Operator Property Upload Block**: Managed Space Operators are strictly restricted from uploading standard property cards. Their flexible centers or co-working hubs must be classified as **"Projects"** and added via the backend.
  - **Permanent Project ID Assignment**: Upon backend creation, the system must automatically generate and assign a **unique, permanent, and non-editable Project ID** to every project. This ID must remain fully visible on edit and details screens for future reference.
  - **RERA ID Optionality**: The backend project form must include an optional field to capture the project's **RERA ID** strictly at the project level (it is not a mandatory field).
**2. Developer & Managed Space Operator Backend Setup**
  - **Developer Onboarding Schema**: To successfully onboard a Developer via the backend Control Panel, the Admin must input:
      - *Developer Name*
      - *Upload Logo*
      - *Mobile Number*
      - *Contact Person Name*
      - *Operating Cities* (Multi-select dropdown)
      - *Asset Class* (Multi-select dropdown).
  - **Managed Space Operator Onboarding Schema**: To onboard a Managed Space Operator via the Control Panel, the Admin must input:
      - *Operator Name*
      - *Mobile Number*
      - *Contact Person Name*
      - *Operating Cities* (Multi-select dropdown)
      - *Asset Class*: Pre-selected by default to **"Managed Office Space"** and locked.
**3. Project Categorization & Promotional Rules**
All projects must be assigned to one of three categories within the database:
  - **Standard Projects**: General developer projects displayed in search results and subject to standard matching rules.
  - **Premium Projects**:
      - *Definition*: Paid developer advertisements that are **strictly city-specific**.
      - *Scarcity Lock*: Limited to a finite number of **3 to 5 slots per city** to maintain value.
      - *Dynamic Frontend Tabs*: The "Premium Projects" landing page section must feature dynamic city tabs that **only display cities where active premium projects are currently live** (e.g., if active premium projects exist in Nashik, a "Nashik" tab appears; if none exist, the tab disappears).
  - **Exclusive Projects **
      - *Definition*: Projects mandated solely to be taken care of by Keydemand.
      - *Global Presentation*: Featured prominently as a nationwide banner or carousel, completely **independent of city-specific logic**.
      - *Admin City Exclusivity Tab*: Static city tabs are completely disabled and removed for the Exclusive Projects landing section.
      - *Servicing SLA*: The internal Keydemand team is exclusively responsible for handling all follow-ups and contact requests for Exclusive projects.
  - **Search Visual Differentiation**: Frontend search result cards must utilize distinct visual markers (such as a **golden star, ribbon, or asterisk**) to easily differentiate standard properties, standard projects, premium (sponsored) projects, and exclusive projects.
**4. Managed Space Project Special Enforcements**
  - **Nesting Rules**: "Managed Space" is established strictly as an asset class nested entirely under the **"Projects" structure** rather than standard individual properties.
  - **Transaction Lock**: Transaction options for Managed Space projects are strictly restricted to **"Lease"** (with standard "Sale" and "Lead" parameters completely removed for this asset class).
  - **Managed Supply Exclusivity**: Managed Office projects can only be posted by Keydemand backend administrators and are completely blocked from being added by external property agents.
**5. Project Visibility & Display Scope**
  - **Self-View Rights**: Developers can view their own projects.
  - **General Seeker Rights**: Authenticated Agents, Brands, and Office Occupiers are authorized to view all public projects.
  - **Administrative Visibility Locks**:
      - **"Who Can See Your Project" Field**: This field is strictly visible on the Admin end during project upload and hidden from the user end.
      - **Brand-Specific Target Lock**: If an Admin assigns a project to a specific brand/user, **this project must be hidden from the public landing page** and displayed only on the home page/dashboard of that specific Brand (F&B, Retail, or Office).
      - **"Assign Keydemand POC" Field**: Visible strictly on the Admin end during upload to designate an internal relationship manager.
**6. Relevancy Matching & Compatibility Engine**
  - **Automatic Matching Check**: The system must automatically match projects against all posted user demands by evaluating key compatibility fields from both models (Example: Asset Class, Carpet Area, Location, and Transaction Type).
  - **Demand Deck Presentation**: Compatible projects must be presented to the brand/tenant as demonstrably relevant options under the "Relevant Projects" tab on their demand details page.
**7. Project Interest & Lead Capture Flows**
When a user clicks the **"Show Interest"** Call-to-Action (CTA) on a project card or project detail page, the system must trigger specific state behaviors based on their authentication status:
A. Logged-In Users Journey
  - **Button State Shift**: The "Show Interest" button instantly transitions to a read-only state displaying: **"Interest Shown on [Date/Timestamp]"**.
  - **Immediate Feedback**: Displays a success message popup: **"Thank you for showing interest"** (or *"Interest shown successfully"*).
  - **Enquiry Log**: The project record logged in the database is updated with user metadata. Users can submit unlimited inquiries across different projects.
B. Unregistered Guests / New Users Journey
  - **Authentication Gate**: The user is immediately prompted to input their mobile number for OTP verification.
  - **Existing User Recognition**: If the verified number matches an existing account, the user is logged in instantly and their interest is recorded under the Logged-In flow.
  - **Immediate Lead Capture**: If a new user completes the mobile OTP verification, the system must **instantly capture and log their phone number as a "guest inquiry" lead**, preventing lead loss even if they close their browser before completing the registration form.
  - **Post-OTP Form**: After OTP verification, the new user is prompted to complete a soft registration form capturing:
      - *Full Name*
      - *Email Address*
      - *User Type/Role* (Radio buttons: F&B Brand, Retail Brand, Property Agent, Tenant, Managed Space Occupier).
C. Lead Distribution Routing
  - When any user shows interest in a project, the captured lead must be routed simultaneously in the background to:
    1.  The **Developer/Operator** who owns the project listing.
    2.  The designated **Relationship Manager (RM)**.
    3.  The specific **Keydemand Team Member** assigned to that project (if applicable).
    4.  The **Platform Super Admin** dashboard.
**8. Project Search, Filters, & Navigation UI**
  - **Required Search Filters**: Under the Project search and explore lists, the system must provide these filter controls:
      - *Transaction Type*
      - *Project Size (sq. ft.)*
      - *Possession Date*
      - *Project Type* (Mandatory filter field)
      - *City*
      - *Location*
      - *Asset Class* (Mandatory filter field)
  - **Landing Page Filters**:
      - **Toggle Switch**: The landing page projects section must feature a toggle or filter mechanism to let users seamlessly switch views between **Office, Retail, F&B, and Managed Space projects**.
      - **"Explore" Popular Cities**: Clicking "Explore" on popular city cards must open all projects and properties matching that city's ID.
**9. Internal Tracking Metrics **
  - **Hidden Project Views Counter**: The backend system must maintain an active counter tracking total project page views. This metric is **exclusively for internal audits** and must remain completely hidden from frontend users.
  - **Enquiries Received Drill-down**: Clicking the enquiries metric on any project row within the team dashboard must open a granular list showing:
      - *User Type*
      - *User Name*
      - *Mobile Number*
      - *Email ID*
      - *Date/Timestamp of the Enquiry*
Last column in this sheet. **PROJECTS** - **GA to GF in Property & Project Input Fields tab **
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
  - CTA
      - Submit 
##### US-025 — View Project Page (Self and User View) -
**Description**
As any user, I want to view a project page with location, highlights, and all units.
For External User View - Front end 
Order is mentioned. **Property & Project Input Fields tab **
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
  - CTA 
      - Show Interest 
For Self View - Front End - after login, they can see. 
  - CTA 
  - Leads Received 
  - Type of Request - Image request /Phone Number
  - User Type (e.g., Agent/Keydemand team/brand) 
  - Name
  - Mobile Number
  - Timestamp
  - Action - Accept, Reject 
Order is mentioned. 
**Property & Project Input Fields tab **
<https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=XeYhKVyU3kg>
#### EP-008 — Property Discovery & Marketplace
Users can explore, filter, and discover properties post-login.
##### US-026 — Explore Properties Listing Page
**Description**
As a logged-in user, I want to browse a paginated listing of approved properties so I can discover available options.
 _[comment AAAB3GPEm28]_ Filters on left Panel - Depending on Asset Class chosen [**# US-009 — Asset Class Selection in UI**](?tab=t.0#heading=h.sci7g5149kyd)****
**Card Options**
**[Image: embedded image/screenshot in source — not readable via text export]**
##### US-027 — Filter Properties
**Description**
As a user, I want to filter properties by location, asset class, budget, area, and other criteria.
Same fields as above. US-026
##### US-028 — Compare Properties - Phase 2 _[comment AAAB13VLJ10]_
**Description -**
As a user, I want to compare 2–5 properties side by side. Same fields as US-026 But the comparison table must come through AI, so the client needs more time to think. Can it be pushed Phase 2 
As a user, I want to compare 2–5 properties side by side.
  - Properties
      - Empty State
          - \+ (Add Symbol)
              - Add Property Card 
  - Carousel. Same fields as in [US-026](https://docs.google.com/document/d/1VKq_8npEY_dm3aXkp-9fux-Owc1Y_5vNkcCJ-I0ibLU/edit?tab=t.0#heading=h.624opxai2a63)
What are expected fields down as a table? Can it be as in picture. 
[Image: embedded image/screenshot in source — not readable via text export]
#### EP-009 — Demand Discovery & Marketplace _[comment AAAB2Q5iE2g]_
Users can explore and filter demands.
##### US-029 — Explore Demands Listing Page _[comment AAAB4Ky9Z0A]_
**Description**
As a developer or agent, I want to browse approved demands to find potential clients.
Front-end users (including agents and brands) can no longer explore or search through demands. Demand exploration is now strictly restricted to the internal Key Demand team, and matching will occur entirely through backend relevancy logic.
[Image: embedded image/screenshot in source — not readable via text export]
##### US-030 — Filter Demands
**Description**
As a user, I want to filter demands by location, asset class, budget, and area.
New Platform Requirement-Filter Tab on  on PR sheet - <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=iWrCE2b-3kg>
Filters on Panel - Depending on Asset Class chosen [**# US-009 — Asset Class Selection in UI**](?tab=t.0#heading=h.sci7g5149kyd)
**NEW EPIC TO BE CREATED FOR PROPERTY DISCOVERY **
#### EP-009A - Project Discovery
Users can explore and filter projects on the Landing Page
Developers will no longer have a frontend login or registration flow; they will be strictly onboarded by the admin team via the backend. Developers are restricted to uploading "projects," not individual properties. 
Project leads generated on the platform will be routed directly to the Key Demand relationship manager and the super admin dashboard. Additionally, the backend will implement a counter to track project views, but this metric will be hidden from the end-users and used only internally.
In detail, Business rules already pasted in EP-007 - Projects Module 
##### US-060 - Explore Projects
Project Card details
**[Image: embedded image/screenshot in source — not readable via text export]**
##### US-061— Filter Projects
**Description**
As a user, I want to filter projects  by location, asset class, budget, and area.
Filters on left Panel - Depending on Asset Class chosen [**# US-009 — Asset Class Selection in UI**](?tab=t.0#heading=h.sci7g5149kyd)
#### EP-010 — Search & Filters _[comment AAAB2Q5iE20]_
Powerful keyword and structured search across properties, demands, and projects using Atlas Search.
**Business Rules **
**1. Search Exclusivity, Segregation, & Navigation Rules**.
  - **Supply Cohabitation**: **"Properties" and "Projects" both represent supply inventory** and are part of a bucket, permitted to be multi-selected, filtered, and viewed together. Demands can never be combined with these supply types.
  - **Demand Directory Search Blackout**: Front-end platform users—including Property Agents, F&B and Retail Brands, and standard Tenants—are **strictly blocked from searching, exploring, or browsing the demands directory**. Demand exploration is an exclusive privilege restricted to the internal Keydemand team.
**2. Geolocation Search & Keyword Search**
  - **Atlas Search Integration**: The platform utilizes **Atlas Search** to power a unified keyword and structured search engine across all active properties, demands, and projects.
  - **Search Bar (Locality and Keyword Search)**: Renders a primary search text input field labeled **"Enter Locality/Search"**. This input must support:
      - **Google Maps Geolocation integration**.
      - **Google location typing autocomplete** to enable highly accurate geographical coordinates and locality selection.
      - Contextual keyword search text input field supporting query inputs by **Project Name, Property Name, or unique system IDs** (e.g., Property ID, Project ID, Demand ID).
**3. Default Search Defaults & Fallback Routing**
  - **First-Time Default Market**: When a guest or new user visits the platform for the first time, the default city is established strictly as **Bengaluru (Bangalore)**.
  - **First-Time Default Parameters**: If a user clicks the "Search" CTA or enters the explore screen without manually selecting an asset class, the system must **automatically default search results to "Office" and "Lease"**.
  - **Closest Match Redirection (Karimnagar Bug Fix)**: If a user enters a search query for a location or city that has **zero active property listings** (e.g., Karimnagar), the search engine must:
      - **Automatically redirect** the search results view to the closest geographically connected city that contains active inventory.
      - Display a prominent **informational messaging banner** at the top of the search results page explaining the redirect to the user.
**4. "Select City" UI (BookMyShow-Style)**
  - **Clickable Top-Tier Buttons**: The search bar interface must initially display the top **7 to 10 connected cities as immediate, clickable visual buttons** on the screen.
  - **"Other City" Dialogue Gating**: A comprehensive, full-screen **BookMyShow-style dialogue box overlay** must trigger *only* if the user clicks the dedicated "other city" button.
  - **Dynamic, Inclusive City Dropdown Listing**: Rather than displaying a static A-Z index of all Indian cities, the City dropdown must show an **inclusive, dynamically updating list** of only those cities that currently have active, approved listings on the platform.
  - **Automated City Addition**: The moment a new property, project, or demand listing is approved in a city that previously had no inventory, that city's ID must **automatically append to the search dropdown menu**.
**5. Regional Consolidations & Metro sub-region Tooltips**
  - **Metro Regional Information Tooltips**: For macro-metropolitan regions (specifically **Mumbai/MMR, Delhi NCR, and Pune/PCMC**), the user interface must explicitly display which micro-markets and sub-regions are included in the search boundary:
      - *Desktop/Web UI*: Renders this micro-market breakdown via a **hover-over tooltip**.
      - *Mobile App UI*: Renders this breakdown via a **clickable "i" (info) information button**.
**6. Role-Based Dropdown Restrictions (Agent Subscriptions)**
  - **Dynamic UI Selection Restriction**: When an Agent is logged in, all city and asset class dropdown selectors across search, exploration, and posting forms must **dynamically adjust based on their active paid subscription tier**:
      - The Agent must **only be shown the specific cities and asset classes they have actively paid for**.
      - If an Agent is subscribed only to Mumbai (MMR), the city dropdown must display Mumbai only.
      - If an Agent is subscribed strictly to the (Retail & F&B) bundle but not (Office), the asset class selector must display and allow only (Retail & F&B).
**7. Structured Filters & Sorting Priorities**
  - **Reset Default State**: On any property form reset, search refresh, or page reload, the default property type selector must **automatically reset to "Office"** (officially replacing the legacy V1 Retail default).
  - **Precise Property Area Range Filters**: In the property directory, the filters column must support a size filter slider/range selector allowing users to input and select **highly precise ranges** (e.g., selecting strictly between **1,000 to 2,000 sq ft**) rather than wide, predefined categories.
  - **Landing Page Projects View Switcher**: The primary landing page projects section must feature a quick **toggle or tab-filter mechanism** allowing users to switch views between **Office, Retail, F&B, and Managed Space projects** with a single click.
  - **Explore Properties Default Priority**: When a user clicks "Explore Properties," the system must direct them to a list filtered by the asset classes selected during registration, prioritizing **Office listings first**. If no Office listings exist in the city, the view must fall back to display **Retail listings first**.
##### US-031 — Keyword Search
##### US-032 — City-Based Search
##### US-033 — Asset-Class-Based Search
##### US-034 — Project-Based Search
##### All user stories under this utilize the filter panel on the right side as mentioned in # [US-009 — Asset Class Selection in UI](?tab=t.0#heading=h.sci7g5149kyd)
#### EP-011 — Enquiry System
Users can raise enquiries on properties or demands, with notifications to the Keydemand team.
**Business Rules **
**1. Unified Lead & Enquiry Taxonomy**
  - **Lead Definition**: A "lead" is established as a **compound value** representing the sum of both direct contact inquiry requests and image requests.
  - **"User Contacted" Tracking Rule**: The "User Contacted" metric on the dashboard must increment **exclusively** when a user clicks the "View Phone Number" button, as offline physical calls cannot be tracked by the platform.
  - **Properties Contacted Log**: The "Properties Contacted" dashboard list must capture and display any property where a Brand/Tenant user has clicked a contact Call-to-Action (CTA), regardless of whether the property was found via direct exploration or matched via backend relevancy.
  - **Property Owner Labeling**: Under the Properties Contacted view, the field previously labeled "Added by" must be explicitly renamed to **"Name of property owner"**. This section must explicitly display:
      - *Property ID* with its primary thumbnail photo
      - *Name of the property owner*
      - *Mobile number of the property owner*
      - *Date/timestamp of contact*.
**2. Enquiring on a Property (Outbound Contacts & Two-Way Reveal)**
  - **Gated Contact Reveal**: Property supplier phone numbers are **never displayed in plain text** on the frontend. They are gated behind a "View Phone Number".
  - **Two-Way Reveal Mechanic**: Viewing a supplier's phone number is a passive event that requires no manual approval from the supplier:
      - When an Office Tenant, Brand, or Registered User clicks to view a property lister's contact number, **both parties instantly gain access to each other's contact information**.
      - The property contact details are instantly shared with the viewer via an **automated WhatsApp message**.
      - The property owner/lister instantly receives an **in-app lead notification and a WhatsApp alert**.
      - *Notification Fields Captured*: **Brand/Tenant Name, User Type, Mobile Number, and the specific Property ID viewed**.
  - **Unread Default Lead State**: New inbound leads received by property listers default strictly to an **"Unread"** state and must only change to **"Read"** once the lister clicks to open the lead details.
  - **Contact Unlock Limits & Paywalls**:
      - **Non-Enterprise Brands & Office Tenants**: Restricted to viewing a maximum of **5 supplier contact numbers** across the platform. Attempting a 6th view blocks the action and prompts them to connect for the Enterprise Solution.
      - **Non-Subscribed/Trial Agents**: Restricted to exactly **5 lifetime contact view clicks**. Attempting a 6th click triggers a subscription paywall displaying: *"Kindly subscribe to continue"*.
      - **Rejection Count Penalty**: If an Agent requests contact details from a Brand and the Brand rejects the connection, the request **still counts** as one of the Agent's 5 free lifetime clicks.
**3. Enquiring on a Demand (Contact Requests & Accept/Reject SLAs)**
  - **Inbound Request Tracking**: When an external user (Agent/Admin) requests a Brand’s contact details on their demand card, the Brand's dashboard tracks the request capturing: **Name, Mobile Number, Demand ID, User-Type, and a Timestamp**.
  - **Accept/Reject Brand Exclusivity**: The manual "Accept" and "Reject" contact request buttons apply **strictly and exclusively to Brands**. Office Tenants and Managed Space Tenants feature a direct, passive "View Phone Number" CTA instead, bypassing manual accept/reject dialogs.
  - **Brand SLA Response Window**: Brands are granted a strict timeline of **4 working days** from the date/time the request was sent to accept or reject a contact request. The system must **actively exclude Saturdays and Sundays** from this SLA calculation.
  - **72-Hour Expiry Lock**: If a contact request on a brand demand remains unanswered after **exactly 72 hours**, the request is automatically dropped, nullified, and moved to "Rejected" status by the system.
  - **Automated SLA Notifications**: Upon actioning a contact request (or upon expiry), the platform must send an automated notification to the requesting user:
      - *Approved*: *"Your request to view [Brand Name] phone number has been approved, kindly connect with them on [number]"*.
      - *Rejected*: *"Your request to view number and connect with the brand has been disallowed by the brand"*.
      - *Expired/Nullified*: *"Your request to view the number and connect with the brand has been unanswered by the brand and thus dropped"*.
**4. Project Enquiries & "Show Interest" Routing**
  - **Enquiry Response SLA**: Submitting an "Enquire Now" or "Send an Inquiry" form must trigger an automated email confirmation to the user within a **maximum of 24 hours**.
  - **Callback Button & Form Abandonment Block**: The "Request a Callback" form in the "About Keydemand" video section must configure **only the mobile number as a mandatory field** to reduce form abandonment; Name and Email fields are strictly optional.
  - **Calendly Demo Integration**: The "Send an Inquiry" or "Book a Demo" CTA must open a representative's native **Calendly link** allowing users to book live demo slots.
  - **"Show Interest" Lead Distribution Rules**: When any user submits a "Show Interest" form on a project, the captured lead must be automatically routed in the background to:
    1.  The **Developer/Operator** who uploaded the project
    2.  The designated Keydemand **Relationship Manager (RM)**
    3.  The **Keydemand Team Member** assigned to that specific project (if applicable)
    4.  The **Super Admin Control Panel**.
  - **"Shown Interest" Sticky Timestamp**: Once a logged-in user clicks "Show Interest," the button state must immediately freeze to display: **"Interest Shown on [Date/Timestamp]"**. This serves as a static visual recall and does not create separate dashboard listing duplicates.
**5. Admin, Keydemand Team, & Enterprise Enquiry Controls**
  - **Direct Contact Access (Keydemand Team)**: Internal Keydemand team members bypass all contact gates. They are provided with an explicit **"View Phone Number" CTA** on all listings for direct, instant access to brand, tenant, or supplier phone numbers.
  - **Lead Access Audit Trail**: Clicking the "View Requirement" or "View Phone Number" CTA on a high-value lead instantly unlocks the mobile number and automatically updates the Viewed status column to **"Yes"** alongside a timestamp.
  - **"Viewed by" Accountability Log**: A dedicated **"Viewed by"** column must maintain a timestamped history logging the exact names of the Keydemand team members who accessed any given lead.
  - **Enterprise-Brand Lead Statuses**: Leads received for Enterprise accounts-Brand are strictly categorized and filterable on the dashboard as: **Approved, Rejected, or Open**.
  - **Enterprise Button Lock**: Enterprise Tenant(Office and Managed) representatives **do not have** "Accept," "Reject," or "Image Request" buttons displayed for their inbound leads. The "Leads Open" CTA functions strictly to view the lead.
**6. Dashboard Slider Navigation ("View My Enquiries" UI Matrix)**
  - **Leads Received Metric (Dashboard)**: Clicking this opens all leads per demand:
      - *F&B & Retail Brands*: Clicking a demand's lead count opens **3 distinct tabs**: *Phone number viewed*, *Contact requests received* (with Accept/Reject buttons), and *Image requests*.
      - *Office & Managed Space Tenants*: Clicking a demand's lead count opens **1 tab** displaying strictly: *Phone number viewed*.
      - *Agents*: Clicking a property's lead count opens **2 tabs**: *Phone number viewed* and *Contact requests received*.
  - **Enquiries Received Card**: Opens all inbound enquiries:
      - *Brands & Agents*: Displays **2 tabs** (*Phone number viewed* and *Contact requests received* with Accept/Reject options).
      - *Office & Managed Space Tenants*: Displays **1 tab** (*Phone number viewed*).
  - **Enquiries Sent Card**: Opens a slider displaying all outbound enquiries:
      - *Tenants & Brands*: Tracks contacts viewed (phone numbers seen for properties and projects) and **Images Requested**.
      - *Agents*: Tracks **Projects Enquired**, **Contacts Requested** (which splits into *Contacts requested* vs. *Contacts viewed* across separate sub-tabs with Property/Demand filters), and **Images Requested**.
##### US-035 — Enquire on a Property (Brand/Buyer)
**Description**
As a brand or buyer, I want to enquire about a property so that Keydemand can facilitate follow-up.
Check landing page, respective user journey documents for more information
##### US-036 — Enquire on a Demand
**Description**
As a user, I want to enquire about a demand so I can connect with the buyer/Tenant or Managed Space Tenant 
Check landing page, respective user journey documents for more information
##### US-037 — View My Enquiries
**Description**
As a user, I want to view all enquiries I've sent and received.
Check Respective user journeys, Admin Panel document for more details 
#### EP-012 — Contact Unlocking
Mobile number visibility is controlled by subscription and permissions.
**Business Rules**
  - **System-Wide Default Hidden States**: All contact phone numbers and email addresses of property owners, demand posters, and seekers must be strictly masked for unregistered users and hidden by default across all listings, card formats, table list views, and detail pages.
  - **Actionable Permission Checks**: Clicking any contact unlock trigger (specifically **"View Phone Number"**, **"Request Contact"**, or **"Contact Us"**) must programmatically execute a series of background validation loops checking: (1) user authentication state, (2) registration profile completeness, (3) role type, (4) city-specific high-ticket size thresholds, (5) user-level permissions, and (6) remaining trial quotas or active subscription/enterprise status.
  - **Duplicate Click and Quota Protection**: The system must enforce direct prevent-inflation constraints that block multiple consecutive clicks by the same logged-in user on the same listing from duplicating connection request logs, incrementing view count metrics, or double-charging their trial click limits.
  - **Data Correlation and Connection ID Bindings**:
      - **Relevancy-Based Contact Unlocks**: If a Brand or Tenant user clicks to unlock the contact of a recommended listing from their matched relevancy dashboard, the platform must capture, link, and display both the **viewer's Demand ID** and the target's **Property ID** to maintain clean attribution tracking.
      - **Direct Exploration Unlocks**: If a user explores a listing directly (without a matched demand) and unlocks the phone number, the system must log strictly the **Property ID** (the Demand ID is bypassed).
      - **Inbound Property Lead Match Unlocks**: When an Agent views contact details from an inbound demand matched against their posted property, the database must bind and show them both the matching **Demand ID** and their own **Property ID**.
  - **Audit Trails & Accountability Logs**: Every successful unlock event must write a record to the system's tracking logs capturing: the viewer's ID and User Type, the target listing ID, the target owner's ID, and an exact timestamp.
US-038 — View Mobile Number (Property)
  - **Guest Access Gating (Action-Based Login Prompts)**: Unregistered guest users can browse property directories, detail summaries, and images. However, the exact moment they click **"View Phone Number"** or **"Contact Us"**, the system must halt progression and present the mobile OTP login/sign-up screen.
  - **Immediate Requirements Capture (Onboarding Gate)**: Immediately following a guest's successful OTP verification, they must proceed directly to fill out their profile details and post their **first active demand requirement** (which standardizes fields critical for backend relevancy matching) before the target property's contact number is revealed.
  - **Property Agent Free Limits & The 5-Click Cap**:
      - Non-subscribed or trial-state agents are strictly limited to exactly **5 lifetime contact requests/clicks** across the platform.
      - **The Rejection Quota Penalty**: If a trial-state agent requests a contact number and the listing owner rejects the connection, **this request still counts** as one of the agent's 5 free lifetime clicks.
      - **Subscription Redirection Paywall**: Attempting a 6th contact request must block disclosure and automatically redirect the agent to the native subscription selection screen, displaying the alert: **“Kindly subscribe to continue”**.
  - **Pro Member Unlimited Access Overrides**: Subscribed agents ("Pro Members") with an active, paid plan covering the matching city and asset class are granted **unlimited contact requests**.
  - **Lapsed/Expired Agents Block**: Agents whose subscriptions have lapsed past the 3-month grace period have their accounts deactivated and listings hidden. They are blocked from connecting with new users or unlocking contact numbers until they resubscribe.
  - **Brands & Individual Tenants 5-Click Cap**:
      - Registered, individual-tier (non-enterprise) Brands, Office Tenants, and Managed Space Tenants can view contact numbers directly on properties matching their requirements up to **exactly 5 times**.
      - **Enterprise Upsell Prompt**: Triggering a 6th view locks number visibility and opens an overlay modal prompting them to connect with the team and upgrade to the **Enterprise Solution** (designed as an incentive driver rather than a punitive block).
  - **Keydemand Internal Team Bypass Rules**: Internal Keydemand users bypass all connection request logs, trial caps, and paywall locks. They are provided with an explicit **"View Phone Number" CTA** on all listings for direct, instant access.
US-039 — View Mobile Number (Demand)
  - **Two-Way Reveal Mechanic (Office Tenants & Managed Space Tenants)**:
      - Viewing a contact number for an Office Tenant or Managed Space Tenant is a **passive event requiring no approval action** from the lister.
      - **Mutual Information Exchange**: The instant a seeker clicks the "View Phone Number" CTA, **both parties instantly gain access to each other's contact details**.
      - **Outbound WhatsApp Sharing**: The supplier's contact details are sent to the viewing tenant via WhatsApp.
      - **Inbound Lister Notification**: The property owner/lister instantly receives an in-app lead notification and a WhatsApp alert capturing the viewer's **Brand/Company Name, User Type, Mobile Number, and the specific Demand ID viewed**.
      - **Unread Default Lead State**: New inbound leads must default strictly to an **"Unread"** state on the lister's dashboard and only update to **"Read"** once clicked.
      - **Managed Space Tenant Routing**: When a Managed Space Tenant unlocks contact details, the notified supplier will always be the **internal Keydemand team**.
  - **Manual Connection Request Flow (F&B & Retail Brands)**:
      - F&B and Retail brand demand cards utilize a **"Request Contact"** CTA. External suppliers must submit a formal connection request, which logs a pending record on the Brand's dashboard containing: Name, Mobile, Demand ID, User Type, and a Timestamp.
      - **The 4-Working-Days Brand SLA**: The brand is granted exactly **4 working days** from the date/timestamp the request was logged to either accept or reject the contact request.
      - **SLA Calendar Exclusion Logic**: The system must build logic to **actively skip and exclude Saturdays and Sundays** from this SLA calculation.
      - **72-Hour Expiry Nullification Lock**: If a brand leaves an inbound contact request unanswered for **exactly 72 hours (calendar time)**, the request automatically expires. The system must automatically nullify the request and move the record status to "Rejected".
      - **Automated Outbound Status Notifications**: The system triggers automated system and WhatsApp notifications to the requesting user based on the brand's response or expiry:
          - **Approved State**: "Your request to view [Brand Name] phone number has been approved, kindly connect with them on \<number\>".
          - **Rejected State**: "Your request to view number and connect with the brand has been disallowed by the brand".
          - **Nullified/Expired State**: "Your request to view number and connect with the brand has been unanswered by the brand and thus dropped".
  - **High-Value Lead (HVL) Blackout Gating**:
      - Demands exceeding city-specific sq ft thresholds (e.g. \>10,000 sq ft in Bangalore/Hyderabad, \>5,000 sq ft in Mumbai) are categorized as HVLs.
      - HVL demands are **completely hidden from the relevancy matching engines of external agents** and are visible and unlockable exclusively by the internal Keydemand team and Admin.
      - **Admins' Manual Unlock Valve**: If the internal Keydemand team cannot service an HTL within **3–4 days**, the Admin can manually "unlock" the requirement. This pushes the lead into the public relevancy pool, triggering notifications strictly to external agents holding direct matching properties.
  - **Keydemand Team Accountability Trails**: Clicking "View Requirement" on an HVL unlocks the lead's mobile number, automatically updates the lead's viewed status to **"Yes"** in the database, and records a timestamped audit log capturing the exact **Keydemand team member's name** under the **"Viewed by"** audit column.
##### US-038 — View Mobile Number (Property)
**Description**
As a subscribed user, I want to see the property owner's contact number so I can reach them directly.
**Acceptance Criteria**
- [ ] Contact number hidden by default on property detail page
- [ ] "View Contact" button triggers subscription/permission check
- [ ] If authorized: number revealed
- [ ] If unauthorized: upgrade prompt shown
- [ ] Unlock action logged for analytics (Connects tracking)
- [ ] Unlock count limited by subscription plan
##### US-039 — View Mobile Number (Demand)
**Description**
As a subscribed user, I want to see the demand poster's contact number. Business rules are already defined in respective dashboard pages 
**Acceptance Criteria**
- [ ] Same flow as US-038 but on demand detail page
- [ ] Subscription check and limit enforcement
#### EP-013 — Relevancy Matching Engine
Properties shown relevant to demands and vice versa. Phase 1 = rule-based
##### US-040 — Rule-Based Property-to-Demand Matching
**Description**
As the platform, I want to match properties to demands based on location, area, budget, asset class, and city so users see relevant results.
**Acceptance Criteria**
- [ ] When a demand is created/approved, matching properties are identified
- [ ] When a property is created/approved, matching demands are identified
- [ ] Matching criteria: location overlap, budget within range, area within range, same asset class, same city
- [ ] Match scores calculated (simple weighted scoring)
- [ ] "Relevant Properties" section on demand detail page
- [ ] "Relevant Demands" section on property detail page
- [ ] Matching runs asynchronously via `demand-matcher` Lambda
**Tasks — SAT (Backend)**
- [ ] TASK-239 — Define matching rules and scoring logic in `packages/constants/`
- [ ] TASK-240 — Implement matching logic in `demand-matcher` Lambda
- [ ] TASK-241 — Store match results in v2 collection
- [ ] TASK-242 — Implement `GET /api/v2/demands/:id/relevant-properties` and `GET /api/v2/properties/:id/relevant-demands`
- [ ] TASK-246 — Write unit tests
**Tasks — KRI (Frontend)**
- [ ] TASK-243 — Build "Relevant Properties" section on demand detail page
- [ ] TASK-244 — Build "Relevant Demands" section on property detail page
**Tasks — SIT (ML/AI)**
- [ ] TASK-245 — Document ML scoring interface for Phase 2 upgrade path
#### EP-018 — Keydemand Admin Console
Keydemand team can manage users, moderate listings, manage featured/exclusive flags, and oversee platform operations.
**[https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp](https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp)**
#### EP-19 - Landing Page -Unregistered User: Property Discovery and Lead Capture Flow
This epic covers the foundational experience for all new users, how they explore listings and the mandatory steps required to proceed to deeper engagement (viewing contact details, showing interest, or posting).
##### US - 062 - Property Search and Exploration
As an unregistered user, I want to search for properties using mandatory City, Property Type, Transaction Type (Lease/Sales), and Locality filters so I can quickly narrow down relevant listings.
  - Bangalore is selected as the default test market and will be the primary city shown upon platform launch.
<https://docs.google.com/document/d/1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc/edit?tab=t.0>
Admin 
#### User Specific Pages
###### 1\. Agent Home Page/Specific Page - Registered
<https://docs.google.com/document/d/1_-y47KOc43wYJ2ConPhogkez9KM9L5OCI3lfjiP9ruM/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 7\. Keydemand team- Specific Page
<https://docs.google.com/document/d/1nVz-XohH3SKJdUITQN4jcrj80fLOpKN3QDwK4ZFLOos/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 2.Brand- F&B Home Page - Specific Page
<https://docs.google.com/document/d/1OUHdFtGTXUTWsZOG6aQ1lv57K0ttI6Ym3_7FqqfxNg4/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 3\. Brand - Retail Home Page- Specific Page-
<https://docs.google.com/document/d/1Lx_0064buDmM6a_rjawrnDLoO1s1dMtnGlPq5-uYGLU/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 4\. Office Tenant Home Page-Specific Page -
<https://docs.google.com/document/d/1yRm2NnqeeEoXf4gXDSB8lGBY7xnczSEHFrI886pO-QE/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 5\. Managed Space Tenant -Individual Home Page-Specific Page -
<https://docs.google.com/document/d/1cMCQsHDnGx4qFZFhseFxIWb8-TBtU9vBImi8oBCV2AA/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
###### 6\. Enterprise - Brand(F&B, Retail), Office Tenant, Managed Space Tenant -
###### The document has only specific business rules related to Enterprise user. Flows remain the same as above.
<https://docs.google.com/document/d/1AYt0SdmjORmTxSEIoZMczSxEQ05r2HUVELQGbCjD8LA/edit?tab=t.0>




#### Comment threads (all by Pradeepa PV)
| Comment ID | Anchored at | Status | Text (head post / replies) |
|---|---|---|---|
| AAAB4V1_wIE | US-001 "The user will click the Login button/ any CTA and the following dialog will appear." | RESOLVED | "Confirmed by Himanshu based on new flow." (2026-05-25) |
| AAAB3UHqOw8 | EP-002 heading | OPEN | "Confirmed by Himanshu" (2026-04-15) |
| AAAB2MnEGuM | EP-003 heading | RESOLVED | "FIELDS ARE WORK IN PROGRESS" (2026-04-10) |
| AAAB2JAc1kI | EP-004 heading | RESOLVED | "Figma screens are in progress. by Ram" (2026-05-19) |
| AAAB2JAc1kQ | EP-005 heading | RESOLVED | "Client Team are adding fields. WIP." · reply: "Added from client side. Need to validate with them" · reply: SharePoint workbook link |
| AAAB30p9A1E | EP-005 heading | RESOLVED | "Fields FInalized." (2026-08-25) |
| AAAB14s71cg | US-015 heading | RESOLVED | "To be done." (2026-03-17) |
| AAAB5qOEQyI | US-015 / US-015S / US-020S CTA blocks | RESOLVED | "@ramprasad.m@futuristglobal.com . These are the CTA's" |
| AAAB5qOEQyk | US-015S CTA (on top) block | RESOLVED | "These are the CTA's @ramprasad.m@futuristglobal.com" |
| AAAB13VLJzU | EP-006 heading | RESOLVED | "Client Team are adding fields. WIP." · reply: "Fields added . https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=UgC_aRqL3kg" |
| AAAB13VLJzY | EP-007 heading | RESOLVED | "Fields in Propvantage Sheet. Must be copied" |
| AAAB3GPEm28 | US-026 "Filters on left Panel" | RESOLVED | "Not yet finalized by Himanshu" |
| AAAB13VLJ10 | US-028 heading | OPEN | "Can be pushed to Phase 2" (2026-03-20) |
| AAAB2Q5iE2g | EP-009 heading | RESOLVED | "Card details only approved by client" |
| AAAB4Ky9Z0A | US-029 heading | RESOLVED | "New Business Rule. Demands cannot be explored" · reply: "Demand is under relevancy -" |
| AAAB2Q5iE20 | EP-010 heading | RESOLVED | "Fields finalised by Himanshu" |

### Business rules extracted

**General Rules / Platform**
- **BR-MS-001** — The platform is strictly divided into two environments: the Key Demand "User Portal" (front-end) and the administrative "Control Panel" (back-end). _(§ General Rules)_
- **BR-MS-002** — Front-end Keydemand agents are transactional users (explore properties, post demands, manage assigned leads) and are strictly prohibited from onboarding new users or editing external user profiles. _(§ General Rules)_
- **BR-MS-003** — The Control Panel is restricted to a handful of core management/administrative staff and provides user onboarding, bulk project/property uploads, subscription management and analytics. _(§ General Rules)_
- **BR-MS-004** — Terminology: "EP-" means Epic (a large goal); "US-" means User Story (one small actionable piece). _(§ General Rules)_

**EP-001 Authentication & Access Control**
- **BR-MS-005** — All users arriving via paid social CTAs (LinkedIn/Meta) or directly via keydemand.in must converge on the same registration URL. _(§ EP-001 BR 1)_
- **BR-MS-006** — "List your Project >>" CTA is a navbar dropdown only (Developer | Operator); selecting either opens a standard Enquiry Form; it is removed from login/sign-up pages. _(§ EP-001 BR 1)_
- **BR-MS-007** — Unregistered guests get read-only access to popular cities, project pages and explore properties (incl. list details and images unless the owner ticked "Do not show images"). _(§ EP-001 BR 1)_
- **BR-MS-008** — Guests cannot open detailed property pages or view contact phone numbers. _(§ EP-001 BR 1)_
- **BR-MS-009** — Guests must not be forced to sign up to browse; login modals trigger only on "View Phone Number", "Contact Us" or "Show Interest". _(§ EP-001 BR 1)_
- **BR-MS-010** — Tenant, Managed Office, F&B & Retail users acquired from targeted social CTAs are redirected post-registration to a city-specific Microsite showing localized relevancies and supply stats. _(§ EP-001 BR 1)_
- **BR-MS-011** — All self-registering users (Agents, Brands, Office Tenants, Managed Space Tenants) verify mobile via OTP and then proceed directly to profile information. _(§ EP-001 BR 2)_
- **BR-MS-012** — Every registration path is gated by a mandatory T&C and "18 and above" age consent checkbox. _(§ EP-001 BR 2)_
- **BR-MS-013** — If a user verifies mobile via OTP but abandons before completing the profile, the verified number is instantly captured as a "lead"/"inquiry" in the Control Panel for manual outreach. _(§ EP-001 BR 2)_
- **BR-MS-014** — A returning dropped-off user entering the verified number again sees a "resume registration" prompt, not a fresh signup. _(§ EP-001 BR 2)_
- **BR-MS-015** — State and City fields in initial registration are for targeted marketing data for the Keydemand admin team only. _(§ EP-001 BR 2)_
- **BR-MS-016** — If a registered user completes a posting but leaves registration details incomplete, a mandatory profile setup prompt triggers on their second return visit. _(§ EP-001 BR 2)_
- **BR-MS-017** — Agents onboard via mobile, OTP and profile details; email is optional; they get 1 free property listing or 1 free demand posting on verification. _(§ EP-001 BR 2)_
- **BR-MS-018** — F&B/Retail Brands get 3 free demands total (1 during onboarding + 2 post-registration) before being pitched Enterprise Solution. _(§ EP-001 BR 2; EP-006 BR 3)_
- **BR-MS-019** — Office Tenants onboard via Transaction Type, Company Name, City, Location, Carpet Area and mandatory T&C; exactly 1 free demand before Enterprise pitch. _(§ EP-001 BR 2)_
- **BR-MS-020** — Managed Space Tenants onboard via Mobile, OTP, Name, Company Name, City, Location, Number of seats; exactly 1 free demand before Enterprise pitch. _(§ EP-001 BR 2)_
- **BR-MS-021** — Ticking "Also interested in Managed Office?" during tenant onboarding routes the details to the Keydemand admin team in the background while the standard Office demand posting proceeds; the user can only post an Office demand, not a Managed Space demand. _(§ EP-001 BR 2; US-001 Flow 1)_
- **BR-MS-022** — Developers and Managed Space Operators do not log in; their only flow is the front-end Enquiry/Lead Form (soft registration); the admin team onboards them manually within 24 hours. _(§ EP-001 BR 2)_
- **BR-MS-023** — Login/dashboard access exists only for Brands (Retail & F&B), Agents, Keydemand Internal Team, Office Occupiers and Managed Space Tenants; none for Developers or Managed Space Operators. _(§ EP-001 BR 3)_
- **BR-MS-024** — Keydemand team members are onboarded only via the backend, log in with registered mobile + OTP, and land directly on their home page/dashboard. _(§ EP-001 BR 3)_
- **BR-MS-025** — The Agent Subscription tab is hidden on Brand, Developer, Tenant and Managed Space Operator dashboards. _(§ EP-001 BR 3)_
- **BR-MS-026** — The "Free Listing" navbar notification shows only to unregistered guests. _(§ EP-001 BR 3)_
- **BR-MS-027** — The Enterprise Solution navbar button shows for registered Brands, F&B and Office Tenants and disappears once upgraded to Enterprise. _(§ EP-001 BR 3)_
- **BR-MS-028** — Non-subscribed Agents: 5 lifetime contact views/requests and 1 property listing; a 6th contact request triggers paywall "Kindly subscribe to continue"; rejections count toward the 5. _(§ EP-001 BR 3; EP-011 BR 2; EP-012 US-038)_
- **BR-MS-029** — Subscribed Agents get unlimited contact requests and unlimited listings. _(§ EP-001 BR 3)_
- **BR-MS-030** — Registered non-Enterprise Brands and Office Tenants may view contact details up to 5 times; the 6th is blocked with an Enterprise Solution upgrade prompt. _(§ EP-001 BR 3; EP-011 BR 2)_
- **BR-MS-031** — Listing owner (Agent) can choose "Do not show images" at upload. _(§ EP-001 BR 3)_
- **BR-MS-032** — Image requests require login; submitting one automatically shares the requester's phone number with the lister. _(§ EP-001 BR 3; EP-005 BR 4)_
- **BR-MS-033** — Image request approval/rejection status never expires (72-hour nullification does not apply). _(§ EP-001 BR 3; EP-005 BR 4)_
- **BR-MS-034** — Enterprise representatives log in independently with their own mobile + OTP. _(§ EP-001 BR 3; EP-002 BR 2)_
- **BR-MS-035** — Enterprise brands cannot manage sub-users; all sub-user add/delete/role configuration is done in the backend admin panel. _(§ EP-001 BR 3; EP-002 BR 2)_
- **BR-MS-036** — Members of the same Enterprise account can view each other's demands under "My Listings" but cannot edit, delete or deactivate them. _(§ EP-001 BR 3; EP-002 BR 2)_
- **BR-MS-037** — When an Enterprise member leaves, their listings must be manually transferred to another active user in the brand via the admin panel before their profile can be deleted. _(§ EP-001 BR 3; EP-002 BR 2)_
- **BR-MS-038** — Keydemand team: clicking a user card in the team panel opens a strictly read-only view of that user's dashboard statistics. _(§ EP-001 BR 3)_
- **BR-MS-039** — Keydemand team can view colleagues' listings under "KD Listings" but can edit only their own (My Listings). _(§ EP-001 BR 3; EP-005 BR 6)_
- **BR-MS-040** — Keydemand users get an explicit "View Phone Number" button that bypasses contact requests and paywalls. _(§ EP-001 BR 3; EP-011 BR 5; US-038)_
- **BR-MS-041** — Keydemand team can see hidden images on any listing, overlaid with banner "Hidden to others". _(§ EP-001 BR 3; EP-005 BR 4)_
- **BR-MS-042** — Only the Keydemand team may explore demand listings; "Managed Space" demands are visible exclusively to Keydemand. _(§ EP-001 BR 3)_
- **BR-MS-043** — Account deactivation starts from a profile button and requires pop-up confirmation. _(§ EP-001 BR 4; EP-002 BR 4)_
- **BR-MS-044** — Deactivation hides all active property/demand listings immediately and marks the user "Inactive". _(§ EP-001 BR 4; EP-002 BR 4)_
- **BR-MS-045** — On deactivation an Agent's active subscription is suspended; reactivating within the original period resumes benefits for remaining paid days; reactivating outside reverts them to a general registered user. _(§ EP-001 BR 4; EP-002 BR 4; EP-004 BR 6)_
- **BR-MS-046** — Reactivating an account does not auto-publish listings; each must be manually reactivated. _(§ EP-001 BR 4; EP-002 BR 4)_
- **BR-MS-047** — Deletion requests are submitted via a designated Google Form (https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform); admin manually contacts the user and deletes via backend. _(§ EP-001 BR 4; US-007)_
- **BR-MS-048** — Deleting a profile permanently deletes all associated inventory (and the subscription). _(§ EP-001 BR 4; US-007)_
- **BR-MS-049** — Deactivating/deleting Keydemand team members via backend is a soft-delete; logs and inventory are retained for audit. _(§ EP-001 BR 4; EP-002 BR 4–5)_

**US-001 / US-002 / US-003 / US-004**
- **BR-MS-050** — Users log in with Mobile number + OTP; the admin panel uses username and password. _(§ US-001)_
- **BR-MS-051** — Login dialog: Country Code (default + dropdown), Phone Number, Continue; if unregistered, "Who do you identify as": Agent, Retail Brand, F&B Brand, Office Tenant/Managed Space Tenant; then OTP (6 digits) + Continue — common for all. _(§ US-001)_
- **BR-MS-052** — Agent profile fields: profile picture, Full Name\*, Email id, Phone Number\*, Write about yourself, Cities\*, Asset Class\*, Transaction (Retail, Office, etc.), T&C tickbox; CTAs Save Progress / Submit; Welcome screen CTA "Start Exploring" opens a user-specific dashboard for the asset class and city. _(§ US-001)_
- **BR-MS-053** — Retail/F&B Brand onboarding must include posting a demand (mandatory): Mobile, OTP, Brand Name, Name\*, Asset Class\* (prepopulated or removable), Email\*, Transaction Type\* (Lease/Buy), City\* (dropdown+search), Location\* (dropdown+search), Carpet area in sq.ft\*, Possession needed\* (Immediate / In 3 months / In 6 months / After 6 months), Other interested Location, Store Type\* (Highstreet/Mall), Floor\* (Ground/Any), Clear ceiling height (feet), Frontage (feet). _(§ US-001)_
- **BR-MS-054** — Brand onboarding CTAs: "Post your requirement" (submits demand) and "Enquire for Enterprise Solution" (callback request lead to admin panel); T&C tick required; Welcome CTA "Start Exploring" opens the asset-class/city microsite with relevant properties/projects. _(§ US-001)_
- **BR-MS-055** — Office Tenant/Managed Space Tenant: unregistered mobile → choose "What best describes you" (Office Tenant / Managed Space Tenant) → OTP; the selection dynamically changes mandatory fields. _(§ US-001)_
- **BR-MS-056** — Office Tenant form (Flow 1): Name\*, Company Name\*, Transaction Type\* (Lease/Buy), City\* (dropdown with text), Location\* (text with autofill), Carpet Area\*, Other Interested locations, Possession needed\* (Immediate / Within 3 months), checkbox "Also interested in Managed Space Offices", CTAs Post a requirement / Enquire for Enterprise Solution, T&C tick. _(§ US-001)_
- **BR-MS-057** — Managed Space Tenant form (Flow 2): Name\*, Company Name\*, City\*, Transaction type\* = Lease, Location\*, Possession needed\* (Immediate / Within 3 months), Number of seats\* (Less than 20 / More than 20), CTAs Post a requirement / Enquire for Enterprise Solution (lead to admin panel and a regional Keydemand representative), T&C tick. _(§ US-001)_
- **BR-MS-058** — Occupier registration completes by filling the mandatory fields and automatically posts their first demand; a second demand requires contacting the platform. _(§ US-001 Outcome)_
- **BR-MS-059** — Developer and Managed Space Operator registration forms are removed from the login flow (struck through) and moved to the navbar "express interest to list project". _(§ US-001)_
- **BR-MS-060** — Sign-up applies only to Agent, Brand (F&B, Retail) and Office Tenant/Managed Space Tenant; not Developer/Managed Space Operator. _(§ US-002)_
- **BR-MS-061** — OTP is 6 digits; clear error messages for wrong/expired OTP; success "Account created successfully". _(§ US-003)_
- **BR-MS-062** — Logout CTA label is "Logout". _(§ US-004)_

**EP-002 Profile**
- **BR-MS-063** — Every profile shows under "User Info": Name, Verified Mobile Number (non-editable, locked to OTP), Email Address (optional for Agents, mandatory for Brands/Tenants), Profile Picture/Logo. _(§ US-006 BR 1)_
- **BR-MS-064** — Agent "Operating City" field is a single-select dropdown with a visual city-selector layout. _(§ US-006 BR 1)_
- **BR-MS-065** — Agent's full name is displayed on every property/demand they post; Brands/Office Tenants' company/brand name is displayed on their demands. _(§ US-006 BR 1; EP-006 BR 2)_
- **BR-MS-066** — Upgrading an individual (Brand, Office Occupier, Managed Office Occupier) to Enterprise restricts edit access on certain fields. _(§ US-006 BR 1)_
- **BR-MS-067** — Enterprise profiles have a default carpet area (e.g., McDonald's 3,000–4,000 sq ft) auto-fetched into new demands. _(§ US-006 BR 1)_
- **BR-MS-068** — Keydemand team profile fields: Name, Mobile Number, Email, Photo, Roles & Permissions; no front-end deactivate/delete buttons. _(§ US-006 BR 1)_
- **BR-MS-069** — Enterprise brands/tenants get a city-level Keydemand POC — "POC"/"Point of Contact" brand-side, "Account Handler" backend-side. _(§ US-006 BR 3)_
- **BR-MS-070** — Enterprise dashboard side-menu has a "Relationship Manager" tab with POC Name, POC Email, POC Phone Number and "Call Now" CTA (initiates a phone call on mobile). _(§ US-006 BR 3)_
- **BR-MS-071** — If multiple POCs are assigned, only the first assigned is displayed. _(§ US-006 BR 3)_
- **BR-MS-072** — A deactivated user reactivates via a "Reactivate Account" button on the homepage. _(§ US-006 BR 4)_
- **BR-MS-073** — Out-of-period reactivated Agents must go through subscription again before taking active steps. _(§ US-006 BR 4)_
- **BR-MS-074** — Users cannot delete accounts with a single click; they submit an integrated deletion form, and admin verifies with the user before deleting. _(§ US-006 BR 5)_
- **BR-MS-075** — Backend deactivation of an Enterprise brand revokes portal access and disables all its active demands; reactivation reinstates the profile but not the demands. _(§ US-006 BR 6; EP-006 BR 10)_
- **BR-MS-076** — Profile settings have a WhatsApp toggle "Do you wish to receive Notifications?" limited to promotional/marketing messages; transactional WhatsApp (relevancies, leads, interest alerts, phone enquiries) cannot be opted out. _(§ US-006 BR 7; EP-004 BR 8)_
- **BR-MS-077** — Every new demand/property posting triggers a WhatsApp alert to the poster confirming location details with a PDF download link of the listing. _(§ US-006 BR 7; EP-004 BR 8)_
- **BR-MS-078** — Profile view fields are in the "User Profile" tab columns A–AB; editable fields are column "Can Edit" — columns D, J, P, V, AB. _(§ US-006, US-007)_
- **BR-MS-079** — Deactivate and Delete apply to all user types except the Keydemand team; Delete and Deactivate buttons are in the edit-profile section. _(§ US-007)_
- **BR-MS-080** — Keydemand team accounts cannot be edited, deleted or deactivated from the front end — backend only. _(§ US-007)_
- **BR-MS-081** — Agent, Individual users (Brand, Tenant, Managed Space Tenant) and Enterprise may delete and deactivate their profiles directly on the platform. _(§ US-007)_
- **BR-MS-082** — Deactivation stops the subscription, deactivates all associated inventory and puts it into a three-month hibernation period before permanent removal; the account itself remains. _(§ US-007)_

**EP-003 / EP-004 Subscriptions**
- **BR-MS-083** — Asset-class filter fields are defined in "New Platform Requirement-Filter" tab, columns A to Y. _(§ US-009)_
- **BR-MS-084** — Subscription tiers: Metro, Non-Metro, Rest of Cities (Rest of India) and PAN India. _(§ US-010A)_
- **BR-MS-085** — Subscriptions are exclusively for Agents. _(§ US-010A BR 1)_
- **BR-MS-086** — Subscriptions are sold as two non-overlapping bundles: (Retail & F&B) and (Office). _(§ US-010A BR 1)_
- **BR-MS-087** — Active subscribers ("Pro Members") get unlimited listings, unlimited contact requests, full dashboard access and automated transactional WhatsApp alerts. _(§ US-010A BR 1)_
- **BR-MS-088** — When posting, Agents see only the cities and asset classes they have paid for (e.g., Mumbai only; only Retail & F&B). This also applies to search/explore dropdowns. _(§ US-010A BR 1; EP-010 BR 6)_
- **BR-MS-089** — Non-subscribed/trial Agents ("Trial Plan"/"Free Plan"): exactly 1 free property listing, 1 free demand, 5 lifetime contact number requests. _(§ US-010A BR 1)_
- **BR-MS-090** — Pricing per month per asset-class bundle per city: Metro 1,000 RS; Non-Metro 750 RS; Rest of India 1,000 RS; PAN India 5,000 RS per bundle (all cities). _(§ US-010A BR 2)_
- **BR-MS-091** — Combined (Retail + F&B AND Office): Metro 2,000 RS per city/month; Non-Metro 1,500 RS per city/month. _(§ US-010A BR 2)_
- **BR-MS-092** — Billing is a 30-day cycle from the first subscription date, auto-renewing and auto-charging on the same date monthly. _(§ US-010A BR 3)_
- **BR-MS-093** — On failed auto-payment, a prominent "Renew" button shows on the subscription dashboard. _(§ US-010A BR 3)_
- **BR-MS-094** — Mid-cycle additions of cities/asset classes are charged immediately, prorated for remaining days, then billed together from the next cycle (worked example: 10 June subscribe; 15 July add city; full rate 10 July–9 Aug + 25-day prorate; from 9 Aug billed together). _(§ US-010A BR 4)_
- **BR-MS-095** — Mid-cycle city cancellations give no refund. _(§ US-010A BR 4)_
- **BR-MS-096** — Cancellation stops auto-renewal immediately; premium access stays until end of the paid cycle; takes effect from next billing month. _(§ US-010A BR 5)_
- **BR-MS-097** — After expiry/cancellation, listings stay active for exactly 3 months; the Agent sees leads and matches but cannot connect with new users unless resubscribed. _(§ US-010A BR 5)_
- **BR-MS-098** — After the 3-month grace period unpaid, status becomes "Expired" and all listings auto-deactivate (hidden); data is preserved; on resubscribe listings must be manually reactivated. _(§ US-010A BR 5)_
- **BR-MS-099** — Reactivated users are "registered but not subscribed" and are prompted to subscribe on any paid CTA. _(§ US-010A BR 6)_
- **BR-MS-100** — Subscription dashboard sub-views: My Plan, Next Renewal Date, Cancel Membership, Renew Membership, Customize Your Plan (only for registered non-subscribed agents). _(§ US-010A BR 7)_
- **BR-MS-101** — Unsubscribed agents see "Trial Plan"/"Free Plan" with usage counters (e.g., "Usage 0 of 1"); paying agents are tagged "Pro Member"; "Broker"/"Agent" labels are deprecated for this. _(§ US-010A BR 7)_
- **BR-MS-102** — The subscription dashboard shows a pricing explainer (metro, non-metro, bundle). _(§ US-010A BR 7)_
- **BR-MS-103** — Admin price changes reflect on the front end immediately but apply to active users only from their next billing cycle. _(§ US-010A BR 9)_
- **BR-MS-104** — City deletion is disabled in Phase 1 (to protect auto-pay tokens). _(§ US-010A BR 9)_
- **BR-MS-105** — Admins can assign zero-charge test subscriptions for a month-wise duration; on expiry the account reverts to payable unless extended. _(§ US-010A BR 9)_
- **BR-MS-106** — Admins can edit prices and add cities under Metro, Non-Metro, Rest of India, Pan India; pre-populated indicative cities cannot be removed. _(§ US-010A BR 9)_
- **BR-MS-107** — Razorpay payment screens are embedded natively on the subscription page (no third-party pop-ups); GST invoice PDFs are auto-generated on successful charge. _(§ US-010A BR 10)_
- **BR-MS-108** — Activate Subscription screen: per bundle (Retail and F&B toggle; Office toggle): Metro Cities 1000/city multi-select (All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad), Non-Metro 750/city multi-select, Rest of India 1000 INR checkbox, PAN India 5000 INR checkbox. _(§ US-011)_
- **BR-MS-109** — Bill Summary: Subscription Summary (Metro/Non-Metro Cities), Invoice Summary (Plan Total, GST), Total/Month amount, CTA "Confirm and Pay"; feature list shown; CTAs "Proceed (Button): Save Plan", "Start Subscription". _(§ US-011)_
- **BR-MS-110** — Subscription states: STATE 1 ACTIVE ("Pro Agent Plan" with "Active" badge; CTAs Renew Membership, Download Invoice, Manage Subscription, Cancel Membership; button Add/Manage Cities), STATE 2 EXPIRING SOON (clock icon, "Plan ends on [Date]", renew banner), STATE 3 EXPIRED ("Your subscription has expired", "Plan ended on [Date] · Access paused"; CTAs Reactivate Plan / Upgrade Plan first). _(§ US-012)_
- **BR-MS-111** — Features must be restricted based on the user's subscription plan. _(§ US-013)_

**EP-005 Property**
- **BR-MS-112** — Only the Keydemand Team and Agents may list properties. _(§ US-014 BR 1)_
- **BR-MS-113** — Developers and Managed Space Operators cannot self-register or post properties; their projects/centres are uploaded as "Projects" by Admin via the Control Panel. _(§ US-014 BR 1; EP-007 BR 1)_
- **BR-MS-114** — Agents may list only Office, Retail and F&B properties; Managed Space properties are Keydemand-Admin-only. _(§ US-014 BR 1)_
- **BR-MS-115** — Agent listing is governed by asset classes chosen at registration and active subscription; single asset class → only that class; multiple → must specify per upload. _(§ US-014 BR 1)_
- **BR-MS-116** — Non-subscribed agents have exactly 1 free property listing; once used, the free-listing option disappears from the dashboard. _(§ US-014 BR 1)_
- **BR-MS-117** — On form reset/page refresh the default property type is Office (replacing V1 Retail). _(§ US-014 BR 1; EP-010 BR 7)_
- **BR-MS-118** — Property ID and Project ID are permanent, non-editable and visible on edit and details screens. _(§ US-014 BR 2)_
- **BR-MS-119** — Rate per sq. ft. (Carpet)\* = Quoted Rent / Carpet Area; Quoted Rent\* = Carpet Area × Rate per sq ft (auto-calculated). _(§ US-014 BR 2)_
- **BR-MS-120** — Property transaction type defaults strictly to "Lease". _(§ US-014 BR 2)_
- **BR-MS-121** — Carpet Area must be ≤ Built-up Area. _(§ US-014 BR 2; EP-006 BR 4)_
- **BR-MS-122** — Property form "Other Interested Location" allows up to 3 secondary locations in the same city, no radius. _(§ US-014 BR 2)_
- **BR-MS-123** — Email field is labelled "Official Email ID" with domain validation blocking generic domains (e.g., @gmail.com); optional for Agents, mandatory for Brands and Tenants. _(§ US-014 BR 2)_
- **BR-MS-124** — Images are stored in three folders: "Interior", "Exterior", "Front Side"; at least 1 image each is mandatory unless a video is uploaded. _(§ US-014 BR 3)_
- **BR-MS-125** — Image max 5 MB (JPEG/PNG); video max 15 MB (MP4/MOV). _(§ US-014 BR 3)_
- **BR-MS-126** — First "Front Side" image is the card thumbnail; upload screen shows an informational note about this and sample reference images. _(§ US-014 BR 3)_
- **BR-MS-127** — Other documents (floor plans, PDFs) use a LinkedIn-style attachment tool with custom naming. _(§ US-014 BR 3)_
- **BR-MS-128** — Agents and Keydemand Team can tick "Do not show images" to hide all images publicly; Keydemand thumbnails remain visible internally in list views. _(§ US-014 BR 4)_
- **BR-MS-129** — Locked images show a "Request for Images" CTA; the property form has a toggle "Request for Images". _(§ US-014 BR 4; Add a Property Form Flow)_
- **BR-MS-130** — Image status applies uniformly to all users (no per-user blur/visible toggles). _(§ US-014 BR 4)_
- **BR-MS-131** — Repeated image-request clicks show "Already requested" and do not duplicate. _(§ US-014 BR 4)_
- **BR-MS-132** — "View Image Request" CTA is disabled/hidden for Keydemand users viewing external agent properties. _(§ US-014 BR 4)_
- **BR-MS-133** — Image request states: Pending (badge, locked), Accepted (badge + "View Images"; message "Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further."), Rejected (badge + "View Listing without Images"; message "Request for viewing images has been rejected by the agent."). _(§ US-014 BR 4)_
- **BR-MS-134** — Explore Demands and Explore Properties cannot share a feed or search bar; selecting "Demands" deselects "Properties" and "Projects"; Properties and Projects can be multi-selected together. _(§ US-014 BR 5; EP-006 BR 1; EP-010 BR 1)_
- **BR-MS-135** — Explore redirect shows Office first; if no Office listings in the city, Retail first. _(§ US-014 BR 5; EP-010 BR 7)_
- **BR-MS-136** — Property size filter supports precise ranges (e.g., 1,000–2,000 sq ft). _(§ US-014 BR 5; EP-010 BR 7)_
- **BR-MS-137** — Maps appear only on property detail pages (Leaflet view, location marker, asset-class-based nearby markers, "View Street View" popup on same page); never on demands. _(§ US-014 BR 5; EP-006 BR 5)_
- **BR-MS-138** — Keydemand property designated "Keydemand/Brand" only is hidden from the public explore page, visible only to internal team and logged-in Enterprise Brands. _(§ US-014 BR 6)_
- **BR-MS-139** — A property is "New" for 7 days from upload; the city-specific "New Properties" section collapses if none in the last 7 days. _(§ US-014 BR 6)_
- **BR-MS-140** — After a listing receives a response, fields marked "Yes" in column A stay editable and "No" fields are permanently locked. _(§ US-014 BR 6)_
- **BR-MS-141** — Control Panel listing edits are restricted to "Keydemand" and "Enterprise" inventory. _(§ US-014 BR 6)_
- **BR-MS-142** — Deactivating a property removes it from marketplace and matching while preserving data for manual reactivation. _(§ US-014 BR 6)_
- **BR-MS-143** — Property card title = Project Name, else "[Store Type] [Asset Class] Property"; Posted By = Agent's full name, or "Keydemand" externally (colleague name internally). _(§ US-014 BR 7)_
- **BR-MS-144** — Clicking anywhere on a property card opens the property page; all property IDs in dashboard tables are clickable. _(§ US-014 BR 7)_
- **BR-MS-145** — A user's own property in explore views shows CTA "Manage Property". _(§ US-014 BR 7)_
- **BR-MS-146** — Card hover: background highlight (green/blue) on standard cards, CTA buttons excluded; information-dense cards use a subtle shadow; hidden-listing cards use opacity shift on the photo area, not just an eye icon. _(§ US-014 BR 7)_
- **BR-MS-147** — PDF downloads mirror the front-end layout (text/metadata first, then images and maps). _(§ US-014 BR 7)_
- **BR-MS-148** — Projects are matched against properties using key input fields, shown as relevant without a relevancy percentage. _(§ US-014 BR 7)_
- **BR-MS-149** — All responses/matches show on the dashboard as a list (no separate inbox). _(§ US-014 BR 8)_
- **BR-MS-150** — Property lists sort newest first, with unread leads at the top; listings with active matches are pushed up with a red dot. _(§ US-014 BR 8)_
- **BR-MS-151** — "User Contacted" increments only on "View Phone Number" clicks. _(§ US-014 BR 8; EP-011 BR 1)_
- **BR-MS-152** — Enterprise "Properties Contacted" log captures Property ID, photo, owner name, owner mobile, date/timestamp. _(§ US-014 BR 8; EP-011 BR 1)_
- **BR-MS-153** — "View Contact" unlock updates "Viewed" (Yes/No) and a timestamped "Viewed by" log of the team member. _(§ US-014 BR 8; EP-011 BR 5)_
- **BR-MS-154** — Post a Property: asset class selection (Retail, F&B, Office); fields from "Property & Project Input Fields" tab columns A–FO, varying by transaction type, property type and poster; green + \* fields mandatory; CTAs Submit / Cancel. _(§ Add a Property Form Flow)_
- **BR-MS-155** — Property detail page (external) adds Property ID; CTAs Download (PDF), Save (shortlist), Share (Email, Whatsapp), View Phone Number (visibility by subscription); "Whoever Posted" is a hyperlink to the poster's page. _(§ US-015)_
- **BR-MS-156** — Self-view CTAs (on top): Deactivate, Edit, Delete; plus Download (PDF) and Share (Email, Whatsapp). Self-view asset class options: Retail/F&B/Office/Managed Spaces. _(§ US-015S, US-016, US-017, US-018)_
- **BR-MS-157** — Property status toggle (Active/Closed) opens the self-view form. _(§ US-018)_

**EP-006 Demand**
- **BR-MS-158** — Agents/Flex Space/Brand and Keydemand team can add demands. _(§ EP-006)_
- **BR-MS-159** — Front-end users (Agents, Brands, Tenants) cannot search/explore demands; matching to demands is only via backend relevancy. _(§ EP-006 BR 1; US-029; EP-010 BR 1)_
- **BR-MS-160** — Retail Brands post only Retail demands, F&B Brands only F&B; both may explore Retail, F&B and Office properties. _(§ EP-006 BR 2)_
- **BR-MS-161** — Office Tenants may post Office and Managed Space demands; Managed Space Tenants only Managed Space and may explore Managed Space and Office properties. _(§ EP-006 BR 2)_
- **BR-MS-162** — Agents post demands for clients within paid asset classes/cities and may not post Managed Space demands. _(§ EP-006 BR 2)_
- **BR-MS-163** — Keydemand team may post demands in Office, Retail, F&B and Managed Space. _(§ EP-006 BR 2)_
- **BR-MS-164** — Keydemand-posted demands show "Keydemand" externally and "Posted by <name>" internally. _(§ EP-006 BR 2)_
- **BR-MS-165** — Quotas: Agent trial 1 free demand; Office Tenant 1; Managed Space Tenant 1; Retail/F&B Brands 3, with the 4th triggering the Enterprise upgrade flow. _(§ EP-006 BR 3)_
- **BR-MS-166** — Managed Space requests > 20 seats are Enterprise candidates and go to the Enterprise onboarding funnel. _(§ EP-006 BR 3)_
- **BR-MS-167** — Existing manually-onboarded Enterprise brands are exempt from free-posting limits and high-value routing. _(§ EP-006 BR 3)_
- **BR-MS-168** — After submission, Asset Class, Transaction Type, City and Location of a demand can never be edited; "Yes" fields (e.g., Other interested locations, Possession needed, Floor preference) remain editable after matches. _(§ EP-006 BR 4)_
- **BR-MS-169** — Demand "OC Required" is Yes/No; property "OC Status" has 4 states. _(§ EP-006 BR 4)_
- **BR-MS-170** — Empty demand fields are hidden on cards/detail pages. _(§ EP-006 BR 4)_
- **BR-MS-171** — Every demand has a non-editable system Demand ID (e.g., DM-4001) visible on cards and tables. _(§ EP-006 BR 4)_
- **BR-MS-172** — Demand "Other Interested Locations": 1 primary + up to 4 additional (all asset classes), all in the same city, no radius. _(§ EP-006 BR 5)_
- **BR-MS-173** — Projects/properties are matched to demands on Asset Class, Carpet Area, Location, Transaction Type; matched projects shown without percentage; relevancies sort newest first. _(§ EP-006 BR 6)_
- **BR-MS-174** — Clicking a relevancy count opens a drill-down of which Demand IDs match which listings; links from relevancy views open in a new tab. _(§ EP-006 BR 6)_
- **BR-MS-175** — Demands with unviewed matches are pushed to top with a red dot; opening shows latest matches first. _(§ EP-006 BR 6)_
- **BR-MS-176** — HTL thresholds: Mumbai > 5,000 sq ft; Bangalore & Hyderabad > 10,000 sq ft; HTLs are hidden from external agents' relevancy and routed to the Keydemand team. _(§ EP-006 BR 7; US-039)_
- **BR-MS-177** — An external agent's demand > 10,000 sq ft in Bangalore bypasses the block and is visible to agents with matching properties. _(§ EP-006 BR 7)_
- **BR-MS-178** — If the Keydemand team cannot fulfil an HTL in 3–4 days, Admin can manually unlock it to the public relevancy pool, notifying only agents with direct matching properties. _(§ EP-006 BR 7; US-039)_
- **BR-MS-179** — Office/Managed Space two-way reveal: viewing a number needs no approval; both parties get each other's details; tenant receives details via WhatsApp; lister gets WhatsApp with Viewer's Name, User Type, Mobile, Property/Demand viewed; lead logged "Unread" until opened. _(§ EP-006 BR 8; EP-011 BR 2; US-039)_
- **BR-MS-180** — Retail/F&B Brands must manually Accept/Reject connection requests within 4 working days (Saturdays and Sundays excluded). _(§ EP-006 BR 8; EP-011 BR 3; US-039)_
- **BR-MS-181** — Requests unanswered after exactly 72 hours are auto-dropped and set to "Rejected". _(§ EP-006 BR 8; EP-011 BR 3; US-039)_
- **BR-MS-182** — Outbound notifications: Approved / Rejected / Dropped (EP-011 wording: "Your request to view [Brand Name] phone number has been approved, kindly connect with them on [number]"; "…has been disallowed by the brand"; "…has been unanswered by the brand and thus dropped"). _(§ EP-006 BR 8; EP-011 BR 3; US-039)_
- **BR-MS-183** — Demand cards are lean (~15 fields max vs 25–30 for property), no heavy media, no large empty thumbnails on detail pages. _(§ EP-006 BR 9)_
- **BR-MS-184** — Demand card avatar: brand logo if uploaded; else shuffle system asset-class images; Enterprise users show end-use images; independent brands without logo show initials. _(§ EP-006 BR 9)_
- **BR-MS-185** — Demands auto-become "Inactive" after exactly 60 days if not renewed; an automated validity check runs once every 3 months. _(§ EP-006 BR 9)_
- **BR-MS-186** — Enterprise requirements are shared via Excel and bulk-uploaded from the Control Panel by the POC/RM; assigned Keydemand members can post/edit demands on the front-end on the brand's behalf. _(§ EP-006 BR 10)_
- **BR-MS-187** — Admin "Formats" fix physical parameters (carpet area, store type, floor preference) with only City/Location variable; choosing the Brand Name format auto-fills specs, which the user may still edit. _(§ EP-006 BR 10)_
- **BR-MS-188** — Dashboard sliders: "Your Listing - Demands" lists active demands; "Leads Received" — Brand: 3 sub-tabs (Phone number viewed, Contact requests received, Image requests); Office/Managed Space Tenant: 1 tab (Phone number viewed). _(§ EP-006 BR 11)_
- **BR-MS-189** — Add a Demand: title "Add a Demand\*", subheader "Post your Exact Requirement"; asset class Retail, F&B, Office; fields from "Demand Input fields" tab A–JK; CTAs Submit / Cancel. _(§ US-019)_
- **BR-MS-190** — Demand detail CTAs: Download (PDF), Save (shortlist), Share (Email, Whatsapp); "Request Contact" for F&B and Retail Brand demands; "View Phone Number" for Office Occupier and Managed Space Tenant demands. _(§ US-020)_
- **BR-MS-191** — Self-view demand CTAs: Deactivate Demand, Edit ("All fields can be edited"), Delete; plus Download/Share. _(§ US-020S, US-021, US-022)_
- **BR-MS-192** — Demand status toggle (Open/Fulfilled) opens the view form with edit/delete/deactivate. _(§ US-023)_

**EP-007 Projects**
- **BR-MS-193** — Projects are added, edited or verified only via the backend Control Panel by the Keydemand Admin team. _(§ US-024 BR 1)_
- **BR-MS-194** — Each project gets a unique, permanent, non-editable Project ID visible on edit/detail screens; RERA ID is optional at project level. _(§ US-024 BR 1)_
- **BR-MS-195** — Developer onboarding fields: Developer Name, Upload Logo, Mobile Number, Contact Person Name, Operating Cities (multi-select), Asset Class (multi-select). _(§ US-024 BR 2)_
- **BR-MS-196** — Managed Space Operator onboarding: Operator Name, Mobile Number, Contact Person Name, Operating Cities (multi-select), Asset Class pre-selected and locked to "Managed Office Space". _(§ US-024 BR 2)_
- **BR-MS-197** — Project categories: Standard, Premium (paid, city-specific, 3–5 slots per city, dynamic city tabs only for cities with live premium projects), Exclusive (mandated to Keydemand, nationwide banner/carousel, no city tabs, Keydemand handles follow-up). _(§ US-024 BR 3)_
- **BR-MS-198** — Search cards use distinct markers (golden star, ribbon, asterisk) to differentiate standard properties, standard projects, premium projects and exclusive projects. _(§ US-024 BR 3)_
- **BR-MS-199** — Managed Space is nested under Projects only; transaction is "Lease" only; only backend admins may post Managed Office projects. _(§ US-024 BR 4)_
- **BR-MS-200** — Developers see their own projects; authenticated Agents, Brands and Office Occupiers see all public projects. _(§ US-024 BR 5)_
- **BR-MS-201** — "Who Can See Your Project" and "Assign Keydemand POC" fields are Admin-only; a project assigned to a specific brand is hidden from the public landing page and shown only on that brand's home page (F&B, Retail, Office). _(§ US-024 BR 5)_
- **BR-MS-202** — Projects are auto-matched to demands and shown under "Relevant Projects" on the demand detail page. _(§ US-024 BR 6)_
- **BR-MS-203** — Logged-in "Show Interest": button becomes read-only "Interest Shown on [Date/Timestamp]", success popup "Thank you for showing interest" (or "Interest shown successfully"), unlimited enquiries across projects, no duplicate dashboard listings. _(§ US-024 BR 7; EP-011 BR 4)_
- **BR-MS-204** — Guest "Show Interest": mobile OTP; existing number → logged in; new number captured instantly as "guest inquiry" lead; then soft registration form: Full Name, Email Address, User Type (F&B Brand, Retail Brand, Property Agent, Tenant, Managed Space Occupier). _(§ US-024 BR 7)_
- **BR-MS-205** — Project interest leads route to the Developer/Operator, the RM, the assigned Keydemand Team Member (if any) and the Super Admin dashboard. _(§ US-024 BR 7; EP-011 BR 4)_
- **BR-MS-206** — Project filters: Transaction Type, Project Size (sq. ft.), Possession Date, Project Type (mandatory), City, Location, Asset Class (mandatory); landing toggle Office/Retail/F&B/Managed Space; "Explore" on popular city opens all projects and properties for that city ID. _(§ US-024 BR 8; EP-010 BR 7)_
- **BR-MS-207** — A hidden project views counter is kept for internal audit only. _(§ US-024 BR 9; EP-009A)_
- **BR-MS-208** — Enquiries drill-down shows User Type, User Name, Mobile Number, Email ID, Date/Timestamp. Project fields: "Property & Project Input Fields" tab columns GA–GF; CTA Submit. _(§ US-024 BR 9)_
- **BR-MS-209** — Project page external CTA: Show Interest; self view shows Leads Received (Type of Request - Image request/Phone Number, User Type, Name, Mobile Number, Timestamp, Action Accept/Reject). _(§ US-025)_

**EP-008 – EP-010 Discovery & Search**
- **BR-MS-210** — Explore Properties is for logged-in users, paginated, approved properties, left-panel filters depend on asset class (US-009). _(§ US-026, US-027)_
- **BR-MS-211** — Compare Properties (2–5 side by side, AI comparison table) is marked Phase 2. _(§ US-028)_
- **BR-MS-212** — Atlas Search powers unified keyword and structured search; search bar "Enter Locality/Search" with Google Maps geolocation and autocomplete, and keyword search by Project Name, Property Name or IDs. _(§ EP-010 BR 2)_
- **BR-MS-213** — First-time default city is Bengaluru; default search without asset class is "Office" and "Lease". _(§ EP-010 BR 3; EP-19 US-062)_
- **BR-MS-214** — A search for a location with zero listings (e.g., Karimnagar) redirects to the closest connected city with inventory and shows an informational banner. _(§ EP-010 BR 3)_
- **BR-MS-215** — Select City: top 7–10 cities as buttons; full BookMyShow-style overlay only on "other city"; dropdown lists only cities with active approved listings, auto-appending a city when its first listing is approved. _(§ EP-010 BR 4)_
- **BR-MS-216** — Mumbai/MMR, Delhi NCR, Pune/PCMC show included micro-markets via hover tooltip (web) or "i" button (mobile). _(§ EP-010 BR 5)_
- **BR-MS-217** — Explore Properties defaults to registration asset classes, Office first, else Retail first. _(§ EP-010 BR 7)_

**EP-011 / EP-012 Enquiry & Contact Unlocking**
- **BR-MS-218** — A "lead" = contact inquiry requests + image requests. _(§ EP-011 BR 1)_
- **BR-MS-219** — "Properties Contacted" lists any property where a Brand/Tenant clicked a contact CTA, from exploration or relevancy; "Added by" is renamed "Name of property owner". _(§ EP-011 BR 1)_
- **BR-MS-220** — Supplier phone numbers are never shown in plain text; gated behind "View Phone Number". _(§ EP-011 BR 2)_
- **BR-MS-221** — New inbound leads default to "Unread" and become "Read" when opened. _(§ EP-011 BR 2; US-039)_
- **BR-MS-222** — Inbound brand demand requests record Name, Mobile, Demand ID, User-Type, Timestamp; Accept/Reject is exclusive to Brands; Office/Managed Space tenants use passive "View Phone Number". _(§ EP-011 BR 3)_
- **BR-MS-223** — "Enquire Now"/"Send an Inquiry" triggers an email confirmation within max 24 hours. _(§ EP-011 BR 4)_
- **BR-MS-224** — "Request a Callback" (About Keydemand video section): only mobile number mandatory; Name and Email optional. _(§ EP-011 BR 4)_
- **BR-MS-225** — "Send an Inquiry"/"Book a Demo" opens a representative's Calendly link. _(§ EP-011 BR 4)_
- **BR-MS-226** — Enterprise Brand leads are filterable as Approved, Rejected or Open; Enterprise Tenant (Office and Managed) reps have no Accept/Reject/Image Request buttons — "Leads Open" only views. _(§ EP-011 BR 5)_
- **BR-MS-227** — Leads Received tabs: F&B/Retail Brands 3 (Phone number viewed, Contact requests received w/ Accept/Reject, Image requests); Office/Managed Space Tenants 1 (Phone number viewed); Agents 2 (Phone number viewed, Contact requests received). _(§ EP-011 BR 6)_
- **BR-MS-228** — Enquiries Received: Brands & Agents 2 tabs; Office & Managed Space Tenants 1 tab. Enquiries Sent: Tenants & Brands track contacts viewed and Images Requested; Agents track Projects Enquired, Contacts Requested (sub-tabs Contacts requested vs Contacts viewed, Property/Demand filters), Images Requested. _(§ EP-011 BR 6)_
- **BR-MS-229** — All contact phone numbers and emails are masked for unregistered users and hidden by default everywhere. _(§ EP-012)_
- **BR-MS-230** — Contact unlock triggers ("View Phone Number", "Request Contact", "Contact Us") check: authentication, profile completeness, role, city HTL threshold, permissions, and trial quota / subscription / enterprise status. _(§ EP-012)_
- **BR-MS-231** — Repeat clicks by the same user on the same listing must not duplicate logs, increment view counts or consume trial clicks. _(§ EP-012)_
- **BR-MS-232** — Unlock attribution: relevancy unlock logs viewer's Demand ID + target Property ID; direct exploration logs Property ID only; agent inbound-match unlock shows Demand ID + own Property ID. _(§ EP-012)_
- **BR-MS-233** — Every unlock writes an audit record: viewer ID and User Type, target listing ID, owner ID, timestamp. _(§ EP-012)_
- **BR-MS-234** — Guest who clicks "View Phone Number"/"Contact Us" must complete OTP, profile, and post a first demand before the number is revealed. _(§ EP-012 US-038)_
- **BR-MS-235** — 6th contact attempt by a trial agent redirects to the native subscription selection screen with "Kindly subscribe to continue". _(§ EP-012 US-038)_
- **BR-MS-236** — Pro Members with a plan covering the matching city and asset class have unlimited contact requests. _(§ EP-012 US-038)_
- **BR-MS-237** — Agents lapsed past the 3-month grace period cannot connect or unlock numbers until resubscribed. _(§ EP-012 US-038)_
- **BR-MS-238** — Individual Brands, Office Tenants and Managed Space Tenants get 5 views on matching properties; the 6th opens an Enterprise upsell modal (incentive, not punitive). _(§ EP-012 US-038)_
- **BR-MS-239** — When a Managed Space Tenant unlocks contact, the notified supplier is always the internal Keydemand team. _(§ EP-012 US-039)_
- **BR-MS-240** — HVL demands are visible/unlockable only by the Keydemand team and Admin; "View Requirement" on an HVL sets viewed "Yes" and logs the team member under "Viewed by". _(§ EP-012 US-039)_
- **BR-MS-241** — US-038 acceptance: number hidden by default; "View Contact" triggers subscription/permission check; authorized → revealed; unauthorized → upgrade prompt; unlock logged (Connects tracking); unlock count limited by plan. US-039 same on demand page. _(§ US-038, US-039)_

**EP-013 / EP-19**
- **BR-MS-242** — Phase 1 relevancy is rule-based: on demand/property create/approve, matches are identified on location overlap, budget range, area range, same asset class, same city; simple weighted score; "Relevant Properties" on demand detail and "Relevant Demands" on property detail; runs async in `demand-matcher` Lambda. _(§ EP-013 US-040)_
- **BR-MS-243** — Unregistered users search with mandatory City, Property Type, Transaction Type (Lease/Sales) and Locality; Bangalore is the default test market at launch. _(§ EP-19 US-062)_

### Open questions / ambiguities in this doc
- **Detailed field lists live outside this doc.** They are in an external SharePoint workbook: User Profile tab A–AB, Filter tab A–Y, Property & Project Input Fields A–FO / GA–GF, Demand Input fields A–JK, and the City (Metro & Non-metro) tab. That workbook is not in this group, so field-level validation is not captured here.
- **Free quota for agents.** EP-001 BR 2 says agents get "1 free property listing **or** 1 free demand posting". EP-004 BR 1 and EP-006 BR 3 say "1 free property listing, 1 free demand posting" (both).
- **Agent subscription on deactivation.** US-007 says the account "remains the same, but the subscription stops and cannot be reactivated", and that once reactivated the user is "registered but not subscribed". The note right below it, and EP-001/EP-002/EP-004, say benefits resume if the user reactivates within the original period.
- **What deactivation does to inventory.** US-007 says deactivation puts inventory into a "three-month hibernation period before permanent removal". Other sections say data is preserved and the user can manually reactivate it. Nothing else mentions permanent removal.
- **HTL thresholds and the bypass.**
  - EP-006 BR 7 makes Bangalore demands over 10,000 sq ft HTLs, hidden from external agents. Its "Massive Demand Bypass" then makes an external agent's Bangalore demand over 10,000 sq ft visible to agents. The trigger for the bypass is unclear.
  - US-039 uses the term "HVL"; EP-006 uses "HTL".
  - The unlock window is a range, "3–4 days".
- **Who can post Managed Space demands.**
  - EP-006 BR 2 says Office Tenants may post both Office and Managed Space demands.
  - US-001 Flow 1 says an office-registered user "will only be able to post office demand & not managed space demand".
  - EP-001 says Managed Space demands are visible only to Keydemand.
- **Asset class options in Add Property / Add Demand.** Both forms list only Retail, F&B and Office. Self views (US-015S, US-020S) still list Managed Spaces/Managed Space.
- **Demand Edit CTA.** The self-view CTA text says "All fields can be edited" (US-020S/021/022). This contradicts EP-006 BR 4: Asset Class, Transaction Type, City and Location can never be edited.
- **Property "Other Interested Location" limit.** Property allows up to 3 secondary locations (US-014 BR 2); demand allows 1+4 (EP-006 BR 5). The property rule also mentions "Managed Spaces", which agents cannot post.
- **Who sees hidden images.** EP-001 BR 1 says guests may see images unless hidden. A "Keydemand/Brand only" property is visible to logged-in Enterprise Brands (US-014 BR 6). The exact visibility matrix is not tabulated.
- **Contact rules for Managed Space Tenants.** EP-001 BR 3 limits only Brands and Office Tenants to 5 views. US-038 adds Managed Space Tenants to the 5-view cap.
- **SLA overlap.** The 4-working-day SLA (weekends excluded) and the 72-hour calendar expiry overlap. 72 hours is always shorter, so in practice the 4-working-day window can never be reached.
- **Wording of request-outcome messages.** EP-006 BR 8 and EP-011/US-039 word them differently: generic vs. "[Brand Name]" / "…by the brand".
- **Project lead routing.** EP-009A says leads go to "the Key Demand relationship manager and the super admin dashboard". EP-007 BR 7 / EP-011 BR 4 add the Developer/Operator and the assigned team member.
- **Placeholder and unfinished items:**
  - US-013 Feature Access, US-031–US-034 and US-035–US-037 are placeholders that point to other docs ("Check landing page, respective user journey documents", "Admin Panel document").
  - US-018 says "need more ideas".
  - US-028 asks "What are expected fields down as a table?".
  - "NEW EPIC TO BE CREATED FOR PROPERTY DISCOVERY" is unresolved.
  - A heading "Select Property Type" has no content.
- **Comments still open:**
  - EP-002 "Confirmed by Himanshu".
  - US-028 "Can be pushed to Phase 2".
- **Filter panel position.** US-026/US-061 say "Filters on left Panel". The EP-010 footnote says "filter panel on the right side".
- **EP-018 here is only a link.** This doc reduces EP-018 to a link to https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp. EP-014 to EP-017 are absent; they are covered by the Phase 2 doc.
- **US-001 Brand form markers.** "Transaction Type\*" lists "Lease" without a bullet marker; this may be a formatting artifact.

---
## Master Sheet Fields- Story wise - Phase 2 - FINAL -Epic 13 to 18  [AUTHORITATIVE — Phase 2 scope]
**Source:** Google Doc · ID `13kg6W0GHO_2SMKGQadXlFrz-McuKKL0_bQ79AuLp3pI` · owner pradeepa.pv@futuristglobal.com · created 2026-04-08, modified 2026-07-06 · tabs/sections read: single tab, EP-013 to EP-018 (all stories); no comment threads returned · read coverage: 100% (~9 KB text export read in full).

> **PHASE 2.** Everything in this document is Phase 2 scope (Epics 13–18). Checkbox items are unchecked (`[ ]`) in the source.

### Content

#### EP-013 — Relevancy Matching Engine
Properties shown relevant to demands and vice versa. Phase 1 = rule-based; Phase 2 = AI/ML scoring.

##### US-040 — Rule-Based Property-to-Demand Matching
**Description**
As the platform, I want to match properties to demands based on location, area, budget, asset class, and city so users see relevant results.

**Acceptance Criteria**
- [ ] When a demand is created/approved, matching properties are identified
- [ ] When a property is created/approved, matching demands are identified
- [ ] Matching criteria: location overlap, budget within range, area within range, same asset class, same city
- [ ] Match scores calculated (simple weighted scoring)
- [ ] "Relevant Properties" section on demand detail page
- [ ] "Relevant Demands" section on property detail page
- [ ] Matching runs asynchronously via `demand-matcher` Lambda

**Tasks — SAT (Backend)**
- [ ] TASK-239 — Define matching rules and scoring logic in `packages/constants/`
- [ ] TASK-240 — Implement matching logic in `demand-matcher` Lambda
- [ ] TASK-241 — Store match results in v2 collection
- [ ] TASK-242 — Implement `GET /api/v2/demands/:id/relevant-properties` and `GET /api/v2/properties/:id/relevant-demands`
- [ ] TASK-246 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-243 — Build "Relevant Properties" section on demand detail page
- [ ] TASK-244 — Build "Relevant Demands" section on property detail page

**Tasks — SIT (ML/AI)**
- [ ] TASK-245 — Document ML scoring interface for Phase 2 upgrade path

#### EP-014 — Role-Specific Dashboards (End-User)
Each end-user role has a personalised dashboard showing their key metrics and activity.

##### US-041 — Brand/Occupier Dashboard
**Description**
As a brand/occupier, I want a dashboard showing my demands, relevant properties, connects, and activity.

**Acceptance Criteria**
- [ ] Sections: My Demands, Relevant Properties, Connects Received, Connects Viewed, Viewed Properties, Demand Performance (views/clicks), Featured Suggestions
- [ ] Summary cards with key counts
- [ ] Quick links to create demand, browse properties

**Tasks — SAT (Backend)**
- [ ] TASK-248 — Implement brand dashboard aggregation endpoint (or GraphQL query)
- [ ] TASK-250 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-249 — Build brand dashboard layout with summary cards and sections

##### US-042 — Developer Dashboard
**Description**
As a developer, I want a dashboard showing my properties, projects, enquiries, connects, and performance.

**Acceptance Criteria**
- [ ] Sections: My Properties, My Projects, Enquiries Received, Connects Received, Connects Viewed, Property Performance (views/clicks)

**Tasks — SAT (Backend)**
- [ ] TASK-252 — Implement developer dashboard aggregation endpoint
- [ ] TASK-254 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-253 — Build developer dashboard layout

##### US-043 — Agent Dashboard
**Description**
As an agent, I want a dashboard showing my listings, demands, leads, and enquiries.

**Acceptance Criteria**
- [ ] Sections: My Listings (properties), My Demands, Leads Generated, Enquiries Sent/Received

**Tasks — SAT (Backend)**
- [ ] TASK-331 — Implement agent dashboard aggregation endpoint
- [ ] TASK-333 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-332 — Build agent dashboard layout

Fields needed for Agent Dashboard
<https://docs.google.com/document/d/1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c/edit?pli=1&tab=t.0#heading=h.rdry2mqmyve>

#### EP-015 — Discovery Boosters (Featured & Exclusives)
Featured and exclusive listings get boosted visibility. Admin marks them (EP-018/US-057); end-user sees the result.

##### US-045 — Featured Properties & Demands
**Description**
As the platform, featured listings appear in dedicated sections and rank higher.

**Acceptance Criteria**
- [ ] Featured listings appear in dedicated "Featured" section on explore pages
- [ ] Featured badge visible on cards and detail pages
- [ ] Featured items rank higher in search results

**Tasks — SAT (Backend)**
- [ ] TASK-260 — Add `isFeatured` flag to property and demand schemas (if not done in US-057)
- [ ] TASK-261 — Update listing and search endpoints to prioritise featured items
- [ ] TASK-264 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-262 — Build featured section on property and demand explore pages
- [ ] TASK-263 — Build `FeaturedBadge` component in design system

##### US-046 — Exclusive Properties & Demands
**Description**
Exclusive listings are only available through Keydemand. Marked by admin, displayed to end-users.

**Acceptance Criteria**
- [ ] Exclusive badge on cards and detail pages
- [ ] Exclusive section on explore pages
- [ ] Exclusive listings may require subscription to view details

**Tasks — SAT (Backend)**
- [ ] TASK-266 — Add `isExclusive` flag to schemas (if not done in US-057)
- [ ] TASK-267 — Update endpoints for exclusive filtering
- [ ] TASK-269 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-268 — Build exclusive section and `ExclusiveBadge` component

#### EP-016 — Notifications & Engagement
Users receive timely notifications about enquiries, matches, and platform activity.

##### US-047 — In-App Notifications
**Description**
As a user, I want to receive in-app notifications for enquiries, matches, and updates.

**Acceptance Criteria**
- [ ] Notification bell in navigation with unread count
- [ ] Notification types: new enquiry, enquiry status update, demand match, listing approved/rejected, subscription expiry warning
- [ ] Notification panel/page with mark-as-read and clear
- [ ] Real-time delivery via SSE

**Tasks — SAT (Backend)**
- [ ] TASK-271 — Create v2 notification collection schema
- [ ] TASK-272 — Implement notification creation triggered by pubsub events
- [ ] TASK-273 — Implement `GET /api/v2/notifications` and `PATCH /api/v2/notifications/:id/read`
- [ ] TASK-274 — Implement SSE endpoint for real-time notification push
- [ ] TASK-278 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-275 — Build notification bell component in design system
- [ ] TASK-276 — Build notification panel/page
- [ ] TASK-277 — Wire to SSE for real-time updates

##### US-048 — WhatsApp Notifications
Type: User Story · Epic: EP-016 · Area: Backend · Frontend Owner: — · Backend Owner: SAT · Priority: P1 · Status: SAT: Not Started · Branch(es): (blank)

**Description**
As a user, I want to receive WhatsApp notifications for important events.

**Acceptance Criteria**
- [ ] WhatsApp notification for: new enquiry received, demand match found
- [ ] User can opt in/out via profile preferences
- [ ] Rate limiting to avoid spam

**Tasks — SAT (Backend)**
- [ ] TASK-280 — Integrate WhatsApp Business API (or placeholder for MVP)
- [ ] TASK-281 — Create WhatsApp notification templates
- [ ] TASK-282 — Wire `enquiry-notifier` Lambda to send WhatsApp messages
- [ ] TASK-283 — Write unit tests

#### EP-017 — Usability & Utilities
Core usability features that improve day-to-day user experience.

##### US-049 — Save / Bookmark Property
**Description**
As a user, I want to save properties for later viewing.

**Acceptance Criteria**
- [ ] Bookmark toggle on property cards and detail page
- [ ] "Saved Properties" page showing all bookmarked properties
- [ ] Persisted server-side (not just local storage)

**Tasks — SAT (Backend)**
- [ ] TASK-284 — Create bookmarks collection, implement `POST/DELETE /api/v2/bookmarks/properties/:id` and `GET /api/v2/bookmarks/properties`
- [ ] TASK-287 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-285 — Build bookmark toggle on property cards and detail page
- [ ] TASK-286 — Build "Saved Properties" page

##### US-050 — Save / Bookmark Demand
**Description**
As a user, I want to save demands for later viewing.

**Acceptance Criteria**
- [ ] Same as US-049 but for demands

**Tasks — SAT (Backend)**
- [ ] TASK-289 — Extend bookmarks for demands
- [ ] TASK-291 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-290 — Build bookmark toggle on demand cards and "Saved Demands" page

##### US-051 — Recently Viewed
**Description**
As a user, I want to see properties and demands I've recently viewed.

**Acceptance Criteria**
- [ ] "Recently Viewed" section on dashboard
- [ ] Also available as standalone page
- [ ] Tracks both properties and demands

**Tasks — SAT (Backend)**
- [ ] TASK-292 — Track view events, implement `GET /api/v2/users/me/recently-viewed`
- [ ] TASK-294 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-293 — Build "Recently Viewed" section on dashboard and as standalone page

##### US-052 — Report Incorrect Listing
**Description**
As a user, I want to report a listing that has incorrect information.

**Acceptance Criteria**
- [ ] "Report" button on property and demand detail pages
- [ ] Report form with reason selection and optional details
- [ ] Reports visible to admin in console

**Tasks — SAT (Backend)**
- [ ] TASK-295 — Implement `POST /api/v2/reports` for listing reports (visible to admin in console)
- [ ] TASK-297 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-296 — Build "Report" button and form on property/demand detail pages

##### US-053 — Help / Support Page
Type: User Story · Epic: EP-017 · Area: End-User · Frontend Owner: KRI · Backend Owner: — · Priority: P2 · Status: KRI: Not Started · Branch(es): (blank)

**Description**
As a user, I want a help page with FAQs and contact information.

**Acceptance Criteria**
- [ ] Static page with FAQ sections and contact details
- [ ] Accessible from navigation

**Tasks — KRI (Frontend)**
- [ ] TASK-299 — Build static help/support page with FAQ and contact information

#### EP-018 — Keydemand Admin Console
Keydemand team can manage users, moderate listings, manage featured/exclusive flags, and oversee platform operations.

##### US-044 — Keydemand Team Dashboard
**Description**
As a Keydemand admin, I want an operations dashboard to monitor platform activity, manage users, and oversee listings at a glance.

**Acceptance Criteria**
- [ ] Summary cards: total users, active listings, pending approvals count, open enquiries, active subscriptions
- [ ] Quick links to moderation queue, user management, listing management
- [ ] Recent activity feed (new signups, new listings, new enquiries)

**Tasks — SAT (Backend)**
- [ ] TASK-255 — Implement admin dashboard aggregation endpoint (summary counts + recent activity)
- [ ] TASK-257 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-256 — Build admin dashboard home page in `apps/admin-ui/`

##### US-054 — User Management (Admin)
**Description**
As a Keydemand admin, I want to manage all users — view, edit roles, activate/deactivate accounts.

**Acceptance Criteria**
- [ ] User list with search, filter by role, filter by status
- [ ] View user detail (profile, subscription, activity)
- [ ] Edit user role
- [ ] Activate/deactivate user
- [ ] Pagination on user list

**Tasks — SAT (Backend)**
- [ ] TASK-300 — Implement admin user management endpoints in `services/admin-services/`: `GET /api/v2/admin/users`, `GET /api/v2/admin/users/:id`, `PATCH /api/v2/admin/users/:id`
- [ ] TASK-302 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-301 — Build user management page in admin-ui (list with search/filter, detail view, edit role, toggle status)

##### US-055 — Listing Moderation (Approve / Reject)
**Description**
As a Keydemand admin, I want to approve or reject property and demand listings before they go live.

**Acceptance Criteria**
- [ ] Moderation queue showing pending listings (properties and demands)
- [ ] Approve/reject with optional reason
- [ ] Rejected listings notify the owner with reason
- [ ] Approved listings become searchable and visible in marketplace
- [ ] Moderation status: pending → approved / rejected
- [ ] Filter queue by asset class, type (property/demand), date

**Tasks — SAT (Backend)**
- [ ] TASK-304 — Add moderation status to property and demand schemas (pending, approved, rejected)
- [ ] TASK-305 — Implement moderation endpoints: `GET /api/v2/admin/moderation/pending`, `PATCH /api/v2/admin/moderation/:type/:id`
- [ ] TASK-306 — Publish moderation events (approved/rejected) via pubsub for notifications
- [ ] TASK-309 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-307 — Build moderation queue page in admin-ui
- [ ] TASK-308 — Build approve/reject flow with reason input

##### US-056 — Edit Any Listing (Admin)
**Description**
As a Keydemand admin, I want to edit any property or demand listing for corrections or quality control.

**Acceptance Criteria**
- [ ] Admin can edit any listing regardless of ownership
- [ ] Same edit form as end-user but accessible from admin-ui listing management
- [ ] Edit actions logged for audit

**Tasks — SAT (Backend)**
- [ ] TASK-311 — Allow admin role to bypass ownership check on PATCH endpoints
- [ ] TASK-313 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-312 — Enable edit functionality in admin-ui for any listing (reuse property/demand form components)

##### US-057 — Feature / Unfeature Listings (Admin)
**Description**
As a Keydemand admin, I want to mark listings as Featured or Exclusive.

**Acceptance Criteria**
- [ ] Toggle Featured flag on any property or demand
- [ ] Toggle Exclusive flag on any property or demand
- [ ] Changes reflected immediately in marketplace and search ranking

**Tasks — SAT (Backend)**
- [ ] TASK-315 — Implement `PATCH /api/v2/admin/listings/:type/:id/feature` (toggle featured/exclusive flags)
- [ ] TASK-317 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-316 — Build feature/exclusive toggle controls in admin listing management views

##### US-059 — Analytics Overview (Admin)
Type: User Story · Epic: EP-018 · Area: Admin · Frontend Owner: KRI · Backend Owner: SAT · Priority: P1 · Status: SAT: Not Started; KRI: Not Started · Branch(es): (blank)

**Description**
As a Keydemand admin, I want an analytics overview showing platform health metrics.

**Acceptance Criteria**
- [ ] Total users (by role), total listings (by status), total enquiries, total subscriptions
- [ ] Trends over time (daily/weekly/monthly)
- [ ] Lead quality indicators

**Tasks — SAT (Backend)**
- [ ] TASK-323 — Implement analytics aggregation endpoints in admin-services
- [ ] TASK-325 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-324 — Build analytics dashboard page in admin-ui with charts

### Business rules extracted (all Phase 2)
- **BR-MS-244** — (Phase 2) Phase 1 matching is rule-based; Phase 2 adds AI/ML scoring. A documented ML scoring interface must exist for the upgrade path. _(§ EP-013, TASK-245)_
- **BR-MS-245** — (Phase 2) When a demand is created or approved, matching properties are identified. When a property is created or approved, matching demands are identified. _(§ US-040)_
- **BR-MS-246** — (Phase 2) Matching criteria: location overlap, budget within range, area within range, same asset class, same city. The score is a simple weighted score. _(§ US-040)_
- **BR-MS-247** — (Phase 2) Matching runs asynchronously via the `demand-matcher` Lambda. Results are stored in a v2 collection and served by `GET /api/v2/demands/:id/relevant-properties` and `GET /api/v2/properties/:id/relevant-demands`. _(§ US-040)_
- **BR-MS-248** — (Phase 2) The Brand/Occupier dashboard has these sections: My Demands, Relevant Properties, Connects Received, Connects Viewed, Viewed Properties, Demand Performance (views/clicks), Featured Suggestions. It also has summary count cards and quick links to create a demand or browse properties. _(§ US-041)_
- **BR-MS-249** — (Phase 2) The Developer dashboard has these sections: My Properties, My Projects, Enquiries Received, Connects Received, Connects Viewed, Property Performance (views/clicks). _(§ US-042)_
- **BR-MS-250** — (Phase 2) The Agent dashboard has these sections: My Listings (properties), My Demands, Leads Generated, Enquiries Sent/Received. _(§ US-043)_
- **BR-MS-251** — (Phase 2) Featured listings appear in a dedicated "Featured" section on explore pages and show a Featured badge on cards and detail pages. They rank higher in search. The flag is `isFeatured`. _(§ US-045)_
- **BR-MS-252** — (Phase 2) Exclusive listings are available only through Keydemand. They show an Exclusive badge and have an Exclusive section on explore pages, and may require a subscription to view details. The flag is `isExclusive`. _(§ US-046)_
- **BR-MS-253** — (Phase 2) In-app notifications: a bell with unread count. Types are new enquiry, enquiry status update, demand match, listing approved/rejected, and subscription expiry warning. A panel lets users mark as read and clear. Delivery is real-time via SSE and creation is triggered by pubsub events. _(§ US-047)_
- **BR-MS-254** — (Phase 2) WhatsApp notifications go out for a new enquiry received and a demand match found. Users can opt in or out via profile preferences. Sending is rate-limited, via the `enquiry-notifier` Lambda (Priority P1). _(§ US-048)_
- **BR-MS-255** — (Phase 2) A bookmark toggle appears on property cards and the detail page. There is a "Saved Properties" page, and bookmarks are persisted server-side, not only in local storage. The same applies to demands, with a "Saved Demands" page. _(§ US-049, US-050)_
- **BR-MS-256** — (Phase 2) "Recently Viewed" tracks both properties and demands. It appears on the dashboard and as a standalone page. _(§ US-051)_
- **BR-MS-257** — (Phase 2) A "Report" button on property and demand detail pages opens a form with a reason and optional details. Reports are visible to admin in the console. _(§ US-052)_
- **BR-MS-258** — (Phase 2) A static Help/Support page with FAQ and contact details is accessible from navigation (Priority P2). _(§ US-053)_
- **BR-MS-259** — (Phase 2) The admin dashboard has summary cards: total users, active listings, pending approvals count, open enquiries, active subscriptions. It has quick links to the moderation queue, user management and listing management, plus a recent activity feed (signups, listings, enquiries). _(§ US-044)_
- **BR-MS-260** — (Phase 2) Admin user management: a paginated user list with search and filters by role and status. Admins can view user detail (profile, subscription, activity), edit the role, and activate or deactivate the user. _(§ US-054)_
- **BR-MS-261** — (Phase 2) Listing moderation: status goes pending → approved / rejected. Approve or reject takes an optional reason. Rejected listings notify the owner with the reason. Approved listings become searchable. The queue can be filtered by asset class, type and date. Events are published via pubsub. _(§ US-055)_
- **BR-MS-262** — (Phase 2) Admin can edit any listing regardless of ownership, using the same form. Edits are logged for audit, and the admin role bypasses the ownership check on PATCH. _(§ US-056)_
- **BR-MS-263** — (Phase 2) Admin can toggle the Featured and Exclusive flags on any property or demand. Changes show immediately in the marketplace and search ranking. _(§ US-057)_
- **BR-MS-264** — (Phase 2) The admin analytics overview shows users by role, listings by status, total enquiries and total subscriptions. It also shows trends (daily/weekly/monthly) and lead quality indicators (Priority P1). _(§ US-059)_

### Open questions / ambiguities in this doc
- **US-040 appears in both docs.** The Phase 1 V1.0 doc has the same US-040 under "Phase 1 = rule-based", so which phase the rule-based matcher is delivered in is ambiguous.
- **US-042 Developer Dashboard vs Phase 1 rules.** It assumes developers have a dashboard with "My Properties". This conflicts with the Phase 1 rules: developers have no front-end login and cannot post properties. The source also has a trailing space in the heading.
- **US-055 moderation vs Phase 1.** It requires admin approval before listings go live. Phase 1 rules never mention a moderation queue for user listings.
- **US-046 wording.** It says exclusive listings "may require subscription", which is not definitive.
- **US-048 opt-out vs Phase 1.** It allows full opt in/out of WhatsApp. Phase 1 blocks opting out of transactional WhatsApp, and US-048's types (new enquiry, demand match) are transactional.
- **Agent Dashboard field list.** It is in an external doc (link in US-043) that was not read here.
- **Numbering gaps.** US-058 and the TASK IDs 247/251/258/259/265/270/279/288/298/303/310/314/318–322/326–330 do not appear.

---
## Master Sheet Fields- Story wise - Phase 1 - FINAL  [HISTORY — superseded by Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL]
**Source:** Google Doc · ID `1bMWbCXa7y4FUAGeXfAGo_loEbwSziCebyOcXEP7p0R4` · owner pradeepa.pv@futuristglobal.com · created 2026-03-12, modified 2026-09-07 · single tab + 27 comment threads · read coverage: 100% (932 lines, all read; compared line-by-line against V1.0 with diff).

### Differences vs authoritative version
**Global / General Rules**
- The General Rules wording is the same apart from "Key Demand agents" → "Keydemand agents".
- The landing-page link changed: old https://docs.google.com/document/d/1gW6_NYr5I-GjGBtZE19K97o2bUorBqmlCmfWIyYGvRM/edit?tab=t.0#heading=h.rbfr7lulbf0d → new https://docs.google.com/document/d/1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc/edit?tab=t.0

**EP-001: an 11-point list replaced by the structured Business Rules sections 1–4 in V1.0.** The old list in full:
  1. "Agents will proceed directly to fill out their personal information after OTP verification."
  2. "Form Fields for Agent: Set your profile picture, Full Name, Email id, Phone Number, Write about yourself, Select states (dropdown), Cities, Property Type (Retail, Office, etc.), Save Progress button"
  3. "Developer and Managed Space Operator users will undergo a soft registration, followed by a manual onboarding process by the Key Demand admin team within 24 hours. Keydemand admin will onboard them. Post onboarding, they can explore - through mobile number and OTP." (V1.0: no login for them.)
  4. "Managed Space Tenants/Tenants are limited to only 1 free demand after which they are pitched an enterprise solution."
  5. "…retail and F&B brands to post requirements directly… limited to posting 3 requirements total before they are pitched an enterprise solution."
  6. "State and City selection in the initial registration flow is for targeted marketing for KeyDemand admin team."
  7. "If the Agent registers and has not subscribed, then he can post 1 free listing plus click "View number" 5 times only after that he will be redirected to subscription."
  8. "Keydemand team will also login using Mobile number and OTP. They are onboarded on the backend and have some extra privileges. Same screens as 1 and 3 on agent login. Once OTP is entered their home page opens."
  9. "If email address is mandatory for an Agent then they cannot post a property unless the Agent verifies his/her email address" — this exists only in the old doc. V1.0 makes Agent email optional.
  10. "Login is only for Brands, Agents, Keydemand team, Office occupier(Tenant), Managed Space Tenant and the rest remains the same- they will fills enquiry form and we receive it (This is an offline process) - for Developer and Managed space operator"
  11. "The only flow for developer and managed space operators is until the lead form. It is only registration. Once they register, there is no login for them."

**US-001 / US-003 / US-004**
- US-001 also had "(Agent/Developer/Keydemand/Brand)" after the description. It had the note "The developer will get in from the backend. Not the front end, they cannot explore anything. They will have just dashboards and leads." (comment: "Not in Phase 1 currently").
- V1.0 added the line "Developer and Managed Space Operator flows are moved from login flow and added to Navbar…".
- "Who do you identify as" also listed **Developer** and **Managed Space Operator**; V1.0 removed both.
- OTP: "Only 4 digits will be sent - 6 is proposed by" → V1.0 "Only 6 digits will be sent".
- US-003: "OTP is for 4 digits (6-digits is suggested by team for better security purposes)" → V1.0 "OTP is for 6 digits".
- Agent fields: old "Operating Cities\*, Asset Class\* (Retail, Office, Managed spaces, etc.)", no T&C tick → V1.0 "Cities\*, Asset Class\*, Transaction (Retail, Office, etc.), I agree to terms and conditions-tickbox". V1.0 also adds explicit CTA "Save Progress / Submit".
- Brand onboarding: V1.0 added the fields "Brand Name" and "Email \*". The brand CTA was "Submit - Allows them to submit the demand"; V1.0 renamed it "Post your requirement".
- The Developer Registration form and the Managed Space Operator Enquiry Form were live (not struck through) in the old doc. V1.0 strikes both out. Old content:
  - Developer: Full Name\*, Company Name\*, Your Designation\*, Select City\* (Drop Down), Official Email ID\*, GST/CIN No\*. Submit triggers a WhatsApp saying "they need to wait for 24 hours". Welcome: "Thank you for sharing the information, our team will reach out to you shortly." CTA "Got it, i'll wait".
  - Operator: the same fields plus Phone Number\* and GST/CIN\* text field; triggers an email about the 24-hour wait.
- The tenant-outcome Welcome Screen with "Start Exploring (Relevancy in all the outcomes if there is any)" was live; V1.0 strikes it out.
- US-004 had the note "Logout NOT SIGNOUT. - change it." V1.0 shows just "CTA - Logout".

**EP-002 / US-006**
- The old doc had no Business Rules 1–7. It had only:
  - "Only the following users can do this. Office Tenant / Managed Space Tenant Individual + Enterprise; Individual User Agent; Retail & F&B Individual; F&B and Retail - Enterprise Brands"
  - "Carpet Area - We would want a default carpet area for enterprise users, where the carpet area will be auto fetched from this while they post demand. Eg if mcd we already know that MCD requires a store for retail (3000-4000 sft)."

**US-009**
- The description lacked "Defines the filtering logic for platform property/project search."
- "Updated Fields are also here" → V1.0 "Updated Filters Fields are also here".

**EP-004 / US-010A**
- The old doc had a narrative list instead of V1.0 Business Rules 1–10. Old-only or different statements:
  - "To allow agents/users to view phone numbers of brands & developers only after taking a subscription" (comment: "Finalized by Himanshu").
  - "Rejected or restricted assets remain in the explore-only view."
  - "If both selected then to show F&B & Retail and Office space as asset class."
  - The pricing list is the same values: 1000 metro, 750 non-metro, Rest of India 1000, PAN India 5000, combined 2000/1500.
  - The customer-facing "Subscription life cycle: Your subscription, explained" text ("How billing works / If you cancel / If a payment fails / What happens to your listings after cancellation"). Its substance is the same as V1.0 BR 3/5.
- V1.0 adds:
  - the "Pro Member"/"Trial Plan" nomenclature
  - the WhatsApp rules (BR 8)
  - the admin rules: pricing effective next cycle, no city deletion in Phase 1, complimentary test subscriptions, tier management (BR 9)
  - Razorpay native and GST invoice PDFs (BR 10)
- V1.0 adds the "Sample Invoice" link under US-012 and an empty heading "Select Property Type".

**EP-005 / US-014**
- The old doc had a numbered 40-point list; V1.0 has Business Rules 1–8. Old-only or changed items:
  - #7: "A non-enterprise or non-subscribed user (such as an office user) who has viewed three or four contact numbers will be prompted to connect for an enterprise solution or a subscription." → V1.0 sets 5 views.
  - #8: "Non- registered users cannot view property images. (All images will be hidden from properties) Until they register…" → V1.0 EP-001 lets guests see images unless the owner hid them.
  - #4: the auto-calc logic was "Added… in the Product excel sheet under D68-69-70 row".
  - #12 / #23 conflicted internally: "#12 Once any property gets a response, the 'Yes' fields… can be edited" vs. "#23 'Yes' fields can not be edited after getting the response". V1.0 keeps "Yes = editable".
  - #16: the 'inbox' feature was removed for the new website.
  - #20: "If a registered agent requests contact details… A request is sent to the Occupier, who has 72 hours to accept or reject…"
  - #21: "A paywall will be implemented to prompt subscription if a registered agent requests contact details more than twice or thrice" → V1.0 sets 5 clicks.
  - #24 / #26: "Uploading Flex Property (Keydemand) - Create and keep the table, but do not give access to the audience." and "Flex Property (Keydemand) - This is to be done in Phase 2". These are only in the old doc.
  - #25: "Keydemand team members can access the inventory of other Keydemand members under their 'My Listings' tab, which must be filterable by username." → V1.0 uses the "KD Listings" view, read-only.
  - #27: "Office requirement if it is more than 5000 sq feet, it will come to Keydemand team and not on the platform".
  - #31: "Who can see your property field is not visible on the user end."
  - #34: "The 'View Responses' section is renamed to 'Leads Received' to improve clarity." Not repeated in V1.0.
  - #2 is a comment anchor: "A Managed Space operator cannot add a property but only from the backend through Keydemand admin team." (comment: "Phase 2").
- The old "Display Logic for Listing Cards" also defined **Demand Cards**:
  - Categories: Retail Demand, Office Demand, Managed Space Demand, F&B Demand.
  - Posted By: the specific Brand, Tenant or Agent name. If unavailable or hidden, use the category label (e.g., "Retail Brand" or "F&B Brand").
  - Property title examples also included "Office Property for Sale, Managed Property for Lease".
- V1.0 BR 1 adds: the 1 free listing quota disappearing, the Official Email ID domain validation, the "Other Interested Location" limit of 3, Sample Image Previews, Duplicate click "Already requested", the image request states and messages, the Keydemand-only visibility, the 7-day "New", the Control Panel edit restriction, the hover rules, and the dashboard sorting/audit rules (BR 8).
- Post a Property asset class list had **Managed Space**; V1.0 removed it.
- The US-015S self view had extra CTA "Leads Received" with: Type of Request - Image request/Phone Number, User Type, Name, Mobile Number, Timestamp, Action - Accept, Reject. The comment on it was "TBD - HImanshu". V1.0 removed this.

**EP-006 Demand**
- The old doc had a 19-point list plus a second list; V1.0 has Business Rules 1–11. Old-only or changed items:
  - #1: "The system must check the Carpet Area and Location during submission. These are tagged as 'High-Value' and routed exclusively to the internal Keydemand team."
  - #2: "Agents may receive a notification that a large demand exists in their area… they will just get to view that there are x number of demands in their area. Post your properties to get matched to the right demand." **Only in the old doc.**
  - #4: "Custom City-based threshold… (e.g., 5,000 sq ft for Mumbai) for Office Tenants…"
  - #6: "An essential bulk upload functionality, potentially using an Excel file, is required for enterprise users to post numerous demands simultaneously…" V1.0 says Enterprise doesn't upload manually; the POC bulk-uploads from the backend.
  - #7: "Managed Space Tenants (Tenants): Restricted to posting Office and F&B demands only. They are limited to posting only one demand…" → V1.0: "strictly Managed Space" demands.
  - #8: an Office tenant viewing a supplier's number is shared over WhatsApp "(please note only in the case of office)".
  - #9: "Registered, subscribed, and expired users must receive WhatsApp alerts for inbound leads and overall market summaries (e.g., the number of new demands added in a specific city)." **Only in the old doc.**
  - #12: "Agents/Suppliers only see demands that match their registered asset class and city."
  - #13: "When a supplier 'requests to connect' with a demand, the requester has 72 hours to accept…"
  - #14: "…Any demand where the tenant self-selects the 'Enterprise Solution' is immediately transferred to the Keydemand admin team for customized handling."
  - #15: real-time "Interested Properties"/"Matched Listings" on the demand detail page.
  - #17: "If a demand is being handled exclusively by the Keydemand team (high-value), the self-view should indicate 'Keydemand Team'". **Only in the old doc.**
  - #18: the Brand dashboard lists suppliers who requested contact.
  - #19: deactivate on fulfilment stops matching.
  - The second list: "Uploading Managed Space Demand (Keydemand) - …only be viewed by the Keydemand team (in Explore, relevancy)"; "Flex Demand (Keydemand) is to be done in Phase 2"; "If it is a office occupier requirement… CTA is View phone number"; "'View Responses' renamed to 'Leads Received'"; Office demand "max of 1+4 extra locations" (example Colaba, Nariman point, Worli, Mumbai Central); demand card image logic (brand image else auto by asset class; Enterprise format brand icon else end-use image).
- V1.0 adds: the HTL thresholds for Bangalore/Hyderabad, the Massive Demand Bypass, the Admin unlock valve, the 4-working-day SLA, the OC Yes/No rule, empty-field suppression, the Demand ID example DM-4001, the 60-day / 3-month checks, Formats auto-fill, and the dashboard sliders.
- US-019 had: "Office Tenant/Managed Space Tenant as they have posted 1 demand already while registering, then they will be told to contact Keydemand to post more demands." The Add Demand asset list included **Managed Space**; V1.0 removed both.
- US-020 had a "9. CTA – Leads Received" block (Type of Request - Phone Number, User Type, Name, Mobile Number, Timestamp, Action - Accept, Reject). V1.0 removed it.

**EP-007 Project**
- Under EP-007 the old doc had: "Only after user profile is created from backend, they can do this section. In V1 is seems a bit tedious. Ideas to be given to simplify - Satish/Krishna". Removed in V1.0.
- The old doc had an 18-point list; V1.0 has Business Rules 1–9. Old-only or changed items:
  - #4: "How many have viewed the project can be added. (Basic implementation)"
  - #9: categories "regular, sponsored, or exclusive" → V1.0 "Standard, Premium, Exclusive".
  - #10: "Sponsored Projects" → V1.0 "Premium Projects".
  - #8: Exclusive projects "often referred to as 'Keydemand managed projects'"; an unregistered lead goes to the admin portal and the RM.
  - #13, a full rationale on images:
    > "So the business rule is to hook the audience on images; we are still showing them the card details, and we want the user to at least provide a mobile number to us for them to begin exploring our platform. Hence, we want to blur property images and allow us to show project images. The other logic of property images shown is solely of an agent if they want to show images, as some users are not happy to showcase their images to the audience, but as our platform requires images, we will have to ask them to upload. Listing-wise, they can hide those images to show them to the end audience, and they can request images, similar to magic bricks. This helps Agents to upload more properties on the platform as their listings are secured. (Request-based approval)"
  - #17 / #18: the guest vs. registered interest flow; the CTA changes to "intrerest shown on this project on <date>".
- V1.0 adds:
  - the Developer and Operator onboarding schemas
  - RERA ID as optional
  - Premium dynamic city tabs
  - the Managed Space Lease-only rule
  - the guest OTP lead capture and soft-registration fields
  - the 4-way lead routing
  - the project filters
  - the enquiries drill-down

**EP-008 – EP-010**
- US-028 was titled "Compare Properties" without "- Phase 2".
- US-029's statement was bold. EP-009A said "Users can explore and filter projects uploaded by Developers" and repeated the interest flows. V1.0 says "on the Landing Page" and points to EP-007.
- The US-060 Project Card was a field list, replaced by an image in V1.0: Images, Transaction Type, Project Name, Project id, Project size in sq.ft, Total Carpet Area in sq.ft, Quoted Price - "Price on enquiry if price not given", Location, Possession Date, Project Type, Posted By, CTA - Show Interest.
- US-030 had "Filters on left Panel"; V1.0 adds the "New Platform Requirement-Filter Tab on PR sheet" link (rtime=iWrCE2b-3kg).
- EP-010 old rules, only in the old doc:
  - "Agent vs. Unauthenticated Search: Logged-in Keydemand team members can search for properties, projects, and demands via the homepage. Unauthenticated users are restricted to searching only for projects and properties."
  - "Search Results Display: …mix of properties and projects… 'View All' leads to a vertical list sorted by latest added date (newest first)."
  - "Independent Search Sections: The 'Quick Match and Search' section… will inherit the previously selected city… but operates independently."
  - "Search Filters: The asset class filter is to be changed from a radio button to a checkbox to support selecting multiple asset classes."
  - "Columns E to K" of the workbook.
- V1.0 replaces these with BR 1–7: Atlas, Bengaluru default, Karimnagar redirect, BookMyShow city UI, metro tooltips, agent dropdown restriction.

**EP-011 / EP-012**
- EP-011 said "…notifications to the Keydemand team.- **Emails**".
- The old doc had the generic product-requirement enquiry flow, **only in the old doc**:
  > "An enquiry button is visible on every approved property detail page. Clicking it opens a form where the user can leave an optional message and specify their preferred contact method — phone, email, or WhatsApp. When submitted, the enquiry is saved and linked to both the property and the enquiring user. A notification is sent to the assigned relationship manager and the admin team. The user sees a confirmation screen and the enquiry appears in their My Enquiries view."
  - The demand enquiry reused the same form.
  - "My Enquiries" had two paginated tabs, Sent and Received.
  - Form: Name, Email address, Phone number - Verify, "I am a (F&B/Retail/Agent/Tenant or Managed Space Occupier/Managed Space Operator)", Submit.
  - US-037 acceptance criteria: "My Enquiries" page with two tabs (Sent and Received), enquiry details/status/reference, pagination.
  - V1.0 replaces all of this with EP-011 BR 1–6 and pointers to the user-journey and Admin Panel docs.
- The old EP-012 had no business-rule block; V1.0 adds the whole EP-012 rules section and the US-038/US-039 rule blocks.
- The old US-038 narrative, **only in the old doc**:
  - "View Contact" checks the active subscription and the unlock allowance per period; otherwise an upgrade prompt.
  - The "Connects" metric.
  - For Agent: "View Number – If they are subscribed- Then number opens"; "Request Call Back – If they are subscribed, a message will go to the property owner from their dashboard".
  - If not subscribed: "Do you wish to Subscribe/Upgrade – Yes/No"; if Yes → US-011 (first-time) or US-012 (renewal/upgrade), "Form will open up. Payment will happen and continue through".
- The old US-039, **only in the old doc**: "Request Contact- If they are subscribed, Request goes to the sender inbox. Then if feel the connect is genuine they will get in touch with the agent or Developer."

**Tail / links**
- The EP-018 link changed: old https://docs.google.com/document/d/1CcjZcH6RU1G48AW47ZqjrcsoGfPOhlyy/edit → new https://docs.google.com/document/d/1TzelTFc-ie1E1pp1zFwMXDEAI8RGhvEA/edit#heading=h.5nyz4rb3wtbp
- EP-19 had "The entire page is finalized and" plus link 1gW6_NYr5I-… → V1.0 link 1QTO_ZrDd_….
- The user-specific page links all differ. Old links:
  - Agent: 1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c
  - Keydemand team: 1ltuysizKtddbyFNpYRs836Oh57TvwdSEz0QLM5sx2Ck and 1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr
  - F&B: 1ecSsc_fejBryLf9me0KeVMVDt7FhUp-vt1dfa8jek_8
  - Retail: 1sCmFhBF3cqiqbUpMKt5pIZGcj4SAF-p4S0nk3HqxOyI
  - Office Tenant: 1IZvh3VFhois8m7Suku3_Gxg0MBHKbLfAAJ_cpFYhuq4
  - Managed Space Tenant: 1m-GHd7uhRH9tNSi6FihHeJnaNO4aQcNzzTzTe9fSQ10
  - Enterprise: 1lLEjGwHduI2x73Z6bTMleJIZdMVJ3kA-wBZq3fxlLFU

**Comments only in the old doc**
- "Business rule confirmed on July 9th" (on US-014 #12).
- "Business rule added on Jun 29th" (on the Display Logic for Listing Cards).
- "Phase 2" (on "Managed Space operator cannot add a property…").
- "Not in Phase 1 currently" (on the developer backend note).
- "Business rules added on June 19th 2026" / "Business rules added on 19th June." (on the posted-by name rules).
- "New business rule added on 17th June 2016" (on demand card images).
- "Business rules added on 3rd June 2026" (on the subscription bundle rule).
- "need clarification from Himanshu" (on the mid-cycle city add/prorate rule).
- "Finalized by Himanshu" (on view phone numbers only after subscription).
- "TBD - HImanshu" (on the Leads Received CTA).

---
## Copy of Master Sheet Fields- Story wise - Phase 1 -  [HISTORY — superseded by Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL]
**Source:** Google Doc · ID `1BuC0IvGeN7jzbX51qtu36QMiJ8V22KGA1MD4x38fv_c` · owner pradeepa.pv@futuristglobal.com · created/modified 2026-06-19 · single tab + 21 comment threads · read coverage: 100% (902 lines; diffed against doc #3 and V1.0).

### Differences vs authoritative version
This is an earlier snapshot (19 June 2026) of doc #3. All of doc #3's differences from V1.0 above also apply here, except for the items below.

**Missing here (added later in doc #3 or V1.0)**
- The whole "General Rules / Platform Portals & Separation of Duties" block. The doc opens with only "EP- mean EPIC" / "US- User Story".
- The "Display Logic for Listing Cards" blocks under EP-005 and EP-006.
- The EP-018 heading and link.
- The "Admin" line.
- The extra Keydemand-team link 1Dck2ggJdwOHxreN5hV0DFrBndchuHbcr.
- The heading "Select Property Type".

**Earlier wording than doc #3 / V1.0**
- Agent profile: "Full Name, Email id, Phone Number, Write about yourself, Select states (dropdown), Cities, Asset Class (Retail, Office, Managed spaces, etc.)". There are no mandatory markers.
- Agent "Start Exploring": "Clicking on this would be a micrositebe a microsite for that particular asset class and city" → later "user specific dashboard".
- Office tenant checkbox: "( If **Tenant is chosen**…" → later "Office Tenant". It lacks the sentence "Keydemand team will receive an alert… The user will only be able to post office demand & not managed space demand."
- US-002: "Applies only for Agent and Office Tenant/Managed Office Tenant-" and "Not for Developer/Brand/Managed Space-" → V1.0 includes Brands and excludes only Developer/Managed Space Operator.
- US-007:
  - "Deactivate and Deletion… for all types of users except for enterprise accounts." → V1.0 "except for the Keydemand team".
  - "Enterprise users (Brand, Tenant, Managed Office Occupier) and the Key Demand team are restricted from editing, deleting, or deactivating accounts via the front end" → V1.0 restricts only the Keydemand team.
  - "Agent and Individual users… are authorized to delete and deactivate" → V1.0 adds Enterprise.
- US-014 description: "As a Keydemand team, agent, Managed space operator (Via backed through the keydemand admin team), I want to add a property listing…" → V1.0 drops the Managed space operator.
- US-014 #12: "'Yes' fields can not be edited after getting the response." → later "Yes fields… can be edited".
- US-014 #17: "Agents, Managed Space Operators, and the Keydemand Team all have the authority to delete or deactivate their own listings." → later drops Managed Space Operators.
- Demand #8: "CTA is View phone number, other details have Request phone number" → later "CTA is View phone number."

**Only in this doc**
- Under US-010A: "Decided to use a temporary email-based request workflow for subscription invoice downloads until an automated Razorpay integration is finalized." V1.0 instead mandates native Razorpay and auto GST invoice PDFs.

**Comments**
- Same as doc #3, minus the six June 19–July 9 comments, "Phase 2" and "Not in Phase 1 currently".

---
## Group-level notes
### Version history
1. **Copy of Master Sheet Fields- Story wise - Phase 1 -** (created/modified 2026-06-19). This is the earliest snapshot.
2. **Master Sheet Fields- Story wise - Phase 1 - FINAL** (created 2026-03-12, modified 2026-09-07). It is the copy's source doc, kept editing after the copy was taken: it has the General Rules, the display-logic blocks and comments dated 19 June – 9 July.
3. **Version 1.0 Master Sheet Fields- Story wise - Phase 1 - FINAL** (created 2026-08-06, modified 2026-10-08). AUTHORITATIVE for Phase 1. It is the only title with an explicit "Version 1.0" and also the latest modified date. It restructures every epic into numbered Business Rules sections.
4. **Master Sheet Fields- Story wise - Phase 2 - FINAL -Epic 13 to 18** (modified 2026-07-06) is a separate Phase 2 scope document, not a version of the Phase 1 doc. It is AUTHORITATIVE for EP-013 to EP-018, per the orchestrator instruction.

### Conflicts across docs in this group
- **Developer/Operator access.** V1.0 says no login, only an enquiry form via the navbar; old FINAL #3 said they "can explore - through mobile number and OTP" after onboarding; Phase 2 US-042 specifies a Developer Dashboard with "My Properties". → V1.0 is authoritative for Phase 1. Phase 2 US-042 contradicts Phase 1 rules.
- **OTP length.** V1.0 says 6 digits; old docs say 4 digits (6 proposed). → V1.0.
- **Contact view threshold for Brands/Office tenants.** V1.0 says 5 views; old docs say "three or four", or "more than twice or thrice" for agents. → V1.0.
- **Image visibility for guests.** V1.0 says guests can see images unless hidden; old docs say non-registered users cannot view property images. → V1.0.
- **Managed Space Tenant posting rights.** V1.0 says strictly Managed Space demands; old docs say "Office and F&B demands only". → V1.0.
- **Enterprise self-service deactivation/deletion.** V1.0 allows it on the platform; the Copy forbids it ("except for enterprise accounts"). → V1.0.
- **"Yes" fields after a response.** V1.0 says they stay editable; the Copy says they cannot be edited; doc #3 had both. → V1.0.
- **Subscription invoices.** V1.0 says native Razorpay and auto GST PDFs; the Copy says temporary email-based request workflow. → V1.0.
- **Project category names.** V1.0 uses Standard / Premium / Exclusive; old docs use regular / sponsored / exclusive. → V1.0.
- **Enterprise bulk upload.** V1.0 says only POC/RM uploads via the backend; the old docs describe a bulk upload capability "for enterprise users". → V1.0.
- **WhatsApp opt-out.**
  - Phase 2 US-048 lets the user opt in or out of WhatsApp notifications for enquiries and matches.
  - V1.0 blocks opt-out of transactional WhatsApp messages.
  - → The two docs conflict and need resolution.
- **US-040 phase.** It appears in both V1.0 (Phase 1) and the Phase 2 doc with identical criteria, so its delivery phase is ambiguous.
- **Listing moderation.** Phase 2 US-055 requires admin approval before listings go live; V1.0 contains no moderation gate for user-posted listings, though it does refer to "approved" listings in EP-010 BR 4. → Clarify.
