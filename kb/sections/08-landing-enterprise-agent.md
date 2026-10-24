# 08 — Landing, Enterprise & Agent Pages + User Journeys

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Version 1.0 - Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us | Google Doc | `1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc` | pradeepa.pv@futuristglobal.com | 2026-10-15 | AUTHORITATIVE |
| 2 | Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us | Google Doc | `1gW6_NYr5I-GjGBtZE19K97o2bUorBqmlCmfWIyYGvRM` | pradeepa.pv@futuristglobal.com | 2026-08-05 | HISTORY (superseded by Version 1.0 - Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us) |
| 3 | Version 1.0 Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier | Google Doc | `1AYt0SdmjORmTxSEIoZMczSxEQ05r2HUVELQGbCjD8LA` | pradeepa.pv@futuristglobal.com | 2026-10-06 | AUTHORITATIVE |
| 4 | Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier | Google Doc | `1lLEjGwHduI2x73Z6bTMleJIZdMVJ3kA-wBZq3fxlLFU` | pradeepa.pv@futuristglobal.com | 2026-07-01 | HISTORY (superseded by Version 1.0 Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier) |
| 5 | Version 1.1 Agent Home Page/Specific Page - Registered | Google Doc | `1_-y47KOc43wYJ2ConPhogkez9KM9L5OCI3lfjiP9ruM` | pradeepa.pv@futuristglobal.com | 2026-10-02 | AUTHORITATIVE |
| 6 | Agent Home Page/Specific Page - Registered | Google Doc | `1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c` | pradeepa.pv@futuristglobal.com | 2026-08-05 | HISTORY (superseded by Version 1.1 Agent Home Page/Specific Page - Registered) |
| 7 | Agent Complete Journey | Google Doc | `15ye940_Uc0X5ojhbzDtZUsC02JIpd3PxpOXB1xZhb-U` | pradeepa.pv@futuristglobal.com | 2026-06-09 | AUTHORITATIVE (for the agent journey; its embedded "Agent Specific Home Page" section is an older snapshot — the agent home page itself is superseded by doc #5) |
| 8 | All User Journeys in Keydemand V2 | Google Doc | `1lyX8vwFoW48XPY6L6QjtH-DQT0f60Zw0D2ZYmIU7X4U` | pradeepa.pv@futuristglobal.com | 2026-10-06 | AUTHORITATIVE |

---
## Version 1.0 - Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us  [AUTHORITATIVE]
**Source:** Google Doc · ID `1QTO_ZrDd_Z3Z-UdeJDuqYQjkUSHjUiPDeJoMpv2cnCc` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-15 · sections read: Landing Page / Business Rules (all sub-groups), Nav bar, Hero Section, Premium Projects, Exclusive Projects, Explore Properties in <City>, Explore Projects in <City>, Top Clusters In City, Explore Real Estate in Popular Indian Cities, About Keydemand - Book a Demo, Clients & Testimonials, Footer, Enterprise Solutions Page, About Us Page, plus all 22 comment threads · read coverage: 100% (one inline `[image]` under "Explore Properties in <City>" could not be seen)

### Content

**Landing Page**

#### Business Rules & also design implementation

**Core Platform & Navbar Navigation Rules**
- Non-Universal Navbar: The Navbar adapts to specific logged-in user types. For example, the Agent Subscription option must be completely hidden on Brand, Developer, or Managed Office-specific dashboards.
- Navbar Buttons & Entry Points: The confirmed Navbar elements are: Keydemand Logo, Agent Subscription, List a Property, Post a Property, Post a Demand, and Enterprise Solution.
- "List your Project >>" Navbar Integration: A dedicated "List your Project >>" button is integrated into the Navbar. Clicking it triggers a dropdown containing Developer | Operator. Selecting either option opens a standard Enquiry Form. Crucially, this entry point is entirely removed from the login/sign-up page.
- Agent Home Page Promotional Hook: A "1 free listing" notification must be highlighted on the Agent Home page (either in the Navbar or first fold) for new users. This promotion applies broadly to all user roles that have property listing capabilities.
- Incentive Flow Order: To maximise conversion, the "one free listing" reward must be displayed via a pre-wall popup or graphic *before* users enter the registration flow, rather than presenting it post-registration.

**User Onboarding, Authentication, & Access Rules**
- Guest Access (Property Details & Images): Unregistered (guest) users are granted default access to view property details and images. Images are only hidden if explicitly marked by the posting agent or Keydemand to be withheld.
- Action-Based Registration Prompts (CTA Restrictions): Guest users must not be forced to sign up just to browse. Registration prompts should only trigger when a guest clicks on high-intent actionable elements, specifically "View Phone Number" or "Contact Us".
- Onboarding Journeys by Role (Post a Property):
  - Agents: Register via mobile number, OTP, and profile details. On onboarding, they are granted 1 free listing.
  - Developers and Managed Space Operators: Must fill out a dedicated Enquiry Form.
- Onboarding Journeys by Role (Post a Demand):
  - Agents: Allowed 1 free demand posting after OTP registration.
  - Tenants / Managed Space Occupiers: Allowed 1 free demand posting after OTP registration.
  - F&B / Retail Brands: Allowed 3 free demands post OTP registration
  - Developers/ Office Occupiers: Must fill out a dedicated Enquiry Form.
- Onboarding Cross-Interest Rule: If a tenant filling out onboarding requirements ticks a box indicating they are also interested in managed spaces, their details are instantly routed to the Keydemand admin team.
- "Show Interest" Conversion:
  - When a guest clicks "Show Interest", they must authenticate via mobile OTP.
  - Existing registered users are logged in instantly.
  - New users are saved as a "guest inquiry" and prompted to input their full name, email, and role after OTP verification. These guest inquiries can later be manually converted to registered profiles by the admin team if verified.
- Profile Completion Trigger: On their second platform visit, users who have completed a posting but missed registration details must be prompted to finish their profile setup.

**Search, Maps, & Location Logic**
- Default Market Configuration: Bengaluru (Bangalore) is the default test market and the primary city shown when a user visits the platform for the first time. Office is the default property type, and Lease is the default transaction type.
- Fallback Search Behaviour: If a user clicks "Search" without selecting an asset class, the system defaults the search parameters to Office and Lease.
- "Select City" UI (BookMyShow-Style): The search bar initially displays the top 7 to 10 connected cities as clickable buttons. Clicking "other city" opens a complete BookMyShow-style dialogue box.
- Dynamic, Inclusive City Dropdown: The mandatory City dropdown must only list cities that currently have active property listings on the platform. If a property is added to a new city, that city must automatically be added to the dropdown list.
- Closest Match Redirection: If a user searches for a location that currently has no active properties (e.g., Karimnagar), the platform must automatically redirect the search results to the closest city with available inventory, displaying a messaging banner explaining the redirect.
- Map Integration: Google Maps is integrated into the search and typing interface for highly accurate locality selection.
- Recent Searches: For returning users, the platform displays cards showing previous searches, capturing City, Location, and Transaction Type.

**Property, Project, & Cluster Listing Rules**
- Visibility Restrictions: If Keydemand uploads a property and designates it to be shown only to "Keydemand/Brand", it must be completely hidden from the public/agents, explore landing page and remain visible only to brands and Keydemand.
- Strict "New Property" Timeline: A property is classified as "new" strictly for 7 days from its upload date. The "New Properties" section is city-specific and dynamic; if a selected city has no properties added within the last 7 days, the entire section collapses and is hidden.
- Store Type Classifications: Listed properties are categorized under: Highstreet, Independent Building, Mall, Mixed Use, Kiosks, Store-in-store, or Highway store.
- Sponsored to Premium Projects Transition: Sponsored projects are renamed to Premium Projects.
- Dynamic Premium Project Tabs: Static city tabs are removed from the Exclusive Projects section. Instead, Premium Projects must feature dynamic city tabs that only display specific cities where active premium projects exist (e.g., if a project is in Nashik, show a "Nashik" city tab; if none exist in a city, that tab disappears).
- Projects Filter Toggle: A toggle/filtering mechanism on the main landing page projects section allows users to seamlessly switch views between Office, Retail, FNB, and Managed Space projects.
- Cluster Cards Details: "Top Clusters In City" cards must capture: Market Tier (Premium, Mid-Range, Affordable), Average/Expected Rent, Transportation connectivity (Metro/Train), and distance matrices to Airports, Bus Stops, Restaurants, Hotels, and Major Brands. - Phase 2

**Paywalls, Limits, & Subscription Rules**
- Agent Limits & Paywall: Non-subscribed agents are limited to 5 contact views or 1 property listing, after which a paywall is triggered. Non-subscribed agents can view up to 5 contact phone numbers directly.
- Brand & Tenant Contact Access: Registered brands and tenants can view contact phone numbers directly on listings, up to 5 contacts. 1 demand for free office/managed space. And 3 demand for free for Brand-Retail and F&B. They will be prompted to upgrade to enterprise.
- Agent Subscription Status Labels: Redundant placeholder text on agent dashboards must be replaced with live status labels (e.g., "Free Plan," "Trial Plan," "Usage 0 of 1") alongside a clear "Subscribe Now for unlimited access" CTA.
- Free Listing Expiry: Free listings are limited by asset class and automatically expire once the user's allocated quota is exhausted.

**Enterprise Solutions Rules**
- Enterprise Upsell Triggers:
  - Office Tenants and Managed Space Occupier: Automatically pitched the Enterprise Solution after 1 demand listing is completed.
    > [Comment AAACF7BXSN0 — RESOLVED, Patrick Bairipaka, 2026-08-25]: "Kindly Change / Update -- Operators cannot post - operators only manages and they are from backend. Only Occupiers post demand that too only 1 demand then enterprise"
  - Retail and F&B Brands: Automatically pitched the Enterprise Solution after 3 demand listings are completed.
- Target Enterprise Audience: Intended specifically for brands, F&B, or office occupiers with requirements exceeding 5,000 square feet, or managed spaces requiring more than 20 seats (bulk inventory).
- Onboarding & UI: If a user enquires or clicks on the Enterprise Solution, the system must display an acknowledgement page confirming the team will reach out. Once enrolled, their portal status shows as active.
- Enterprise Account Features: Dedicated dashboard access with centralized mandate tracking, transaction support from shortlisting to LOI, catchment and footprint analysis, unlimited listings, multi-user regional account access, and AI-driven property recommendations.

**Leads, Enquiries, & Feedback Rules**
- Lead Distribution Logic: When a user submits "Show Interest" on a project, the lead must be routed simultaneously to:
  1. The Developer who posted the project
  2. The designated Relationship Manager
  3. The Keydemand team member assigned to the project
  4. Platform Admin
- "Show Interest" Feedback: Clicking "Show Interest" as a logged-in user changes the button state to "Interest Shown" with the timestamp, alongside a success message popup. Users are allowed unlimited inquiries across different projects.
- Enquiry Response SLA: The "Enquire Now" form triggers a 24-hour wait-time auto-email response to the user.
- Low-Abandonment Callback Option: A "Request a callback" button must sit alongside the "Send an inquiry" option in the About Video section. To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory.

**Client Testimonials & Static Footer Rules**
- Testimonial Star Ratings Removal: Star ratings must be completely removed from the testimonial cards. Testimonial lengths are capped strictly between 30 to 50 words.
- Client Marquee Logos: Static client sections must explicitly include names and logos for "Office Tenant" and "Managed Office Spaces", alongside F&B, Retail, Developers, and Malls.
- Interactive Demo CTA: "Send an Enquiry" calls-to-action must open a specific Calendly link for booking demo slots.

**Navigation & CTAs**
- Dashboard Subscription Text: Remove placeholder text on the agent dashboard/profile pages and replace it with accurate status labels (e.g., "Free Plan," "Trial Plan," "Usage 0 of 1") and a "Subscribe Now for unlimited access" call to action.
- Landing Page City Tabs: Remove static city tabs from the exclusive projects section. Make the city tabs for Premium projects dynamic, so they only display cities with active project inventory.
- Default Search Bug: Fix the bug where the default city selection does not automatically default to Bangalore.
- Google Maps Integration: Integrate Google Maps into the search/typing functionality for accurate locality selection (to be evaluated for performance impact).
- Dashboard Cleanup: Remove the redundant "lead management" section from the agent dashboard to prevent duplication and realign the fourth tab on the dashboard.
- Client Logos: Add the names and logos for "Office Tenant" and "Managed Office Spaces" to the static client section on the landing page.

**Search & Map Logic**
- Add a "Request a callback" button alongside the "Book a demo" option in the About Keydemand video section. This should only capture the mobile number (do not make name/email mandatory to reduce abandonment).
- Add a "List your Project >>" button on the Navbar.
  - Clicking it should reveal a dropdown with Developer | Operator options.
  - Selecting either should open an Enquiry Form.
  - Remove this entry point from the login/sign-up page.
- City Defaults: If a user searches for a location without active properties (e.g., Karimnagar), the system should default to the closest city with available inventory, accompanied by a messaging banner explaining the redirect.
- The "Premium Projects" section must feature dynamic city tabs that only display the specific cities where current premium projects are active. (e.g., if a project is in Nashik, show a "Nashik" city tab).
- Change "Book a demo" text to "Send an inquiry" in the About section. Add two provided logos (Office Tenant, Managed Office) to the client marquee.
- Add a toggle or filter mechanism within the main projects section of the landing page to allow users to switch views between Office, Retail, FNB, and Managed Space projects.

#### Nav bar
- Keydemand Logo
- Explore Properties
- Post a Property
- Post a Demand
- List a Property
- Agent Subscription
- Enterprise Solution

> [Comment AAAB2rxNwCc — RESOLVED, Pradeepa PV]: "Not as buttons. As placeholders just like housing.com. Order is this." Reply: "Order is this . Agent Subscription, Enterprise Solution on the left. Post a Property and Post a Demand on the right."

- **Explore Properties** - Unregistered and registered users can both explore properties and if they click on view number, will be told to login in case of an unregistered user.
- **Agent Subscription** - It will open the subscription page where users can select plans and subscribe. Once their plan is selected, the user will be asked if they are an agent and only then will they be signed in and confirmed to get onboarded. If they are other users, it will allow the user to go on their respective journey.
  > [Comment AAAB2rxNwBE — OPEN, Pradeepa PV]: "https://jam.dev/c/658c5c8f-cd67-466a-9396-2be52661c894 this would be the flow"
- **Enterprise Solution** - Button
  > dedicated page along with the information on Enterprise Solution. Will be offered to brands and F&B. Retail all locations. It will be a separate page with details
  > [Comment AAAB2R0iLwY — RESOLVED]: "to be confirmed. We need fields on what to be showcased."

  The "Enterprise Solution" button is one of the confirmed right-hand elements on the navbar. The Enterprise Solution feature is intended for specific users with large requirements and is expected to provide:
  Target Users: A brand, retail or office occupier with a requirement exceeding 5,000 square feet, or for managed space requirements that are more than 20 seats (bulk inventory).
  **Expected Service:**
  - End-to-end handholding.
  - Defining the outcome and everything in the journey for the brand or occupier.
  - Finding the best place and providing required options.

  They can use this button to enquire.
- **Post a Property** - Button - There will be a form - Epic 1 Story 1 —
  They will be asked who they are. "I identify as"
  If they are agent, they can register (Mobile number, OTP and profile information) and after registration, they can do 1 free posting.
  If they are managed space operator/Developer, they will be asked to fill out the enquiry form.
- **Post a Demand** - Button - There will be a form - Epic 1 Story 1 —
  They will be asked about who they are - Agent/F&B/Retail Brand/Office Occupier/Managed Space Operator
  If they are agent - they can register and post 1 free posting.
  If they are tenant/Managed Space Occupier they can post 1 free demand. After logging in, to post another demand, they will have to become enterprise.
  If they are F&B/Retail Brand - they can post 1 demand and post registration 2 more. To post the next demand, they will have to come enterprise
  Office Occupier/Managed Space Occupier - they will be asked to fill the soft registration page
- **List a Property**
  A dedicated "List your Project >>" button is integrated into the Navbar. Clicking it triggers a dropdown containing Developer | Operator. Selecting either option opens a standard Enquiry Form. Crucially, this entry point is entirely removed from the login/sign-up page.
  Clicking on this opens a form - asking for phone number, and OTP verification
  Once OTP is verified
  - If it is a registered number, it will go back to their dashboard
  - If it is an unregistered number, it will ask who we are

  Form:
  - Please enter your phone number :
  - Text: What would you like to list?
  - Radio Buttons
    1. Developer — List your residential or commercial projects
    2. Space Operator — List your managed / co-working spaces
  - Full Name
  - Company Name:
  - Designation:
  - Official Email-Id:
  - Phone no:
  - Select City: (Drop down)
  - GST no:
  - Agree to terms and conditions
  - CTA: Submit

#### Hero Section
The banner on the landing page need to be auto carousel for 5s -
- Header
  - Title
  - Sub Header
- Explore Property
  > [Comment AAAB2rxNwBo — RESOLVED]: "why this ?" · [Comment AAAB2rxNwCA — RESOLVED]: "Remove it in FIGMA"
- City * (Mandatory)
  - Drop Down
    - Metro cities followed by All cities in India (A-Z)
      > [Comment AAAB4sVdLmU — OPEN]: "@sathish.r@futuristglobal.com"

    Instead of a complete list - show only a inclusive list which has properties listed on the platform and any new property listed in the new city can automatically be added to the list.
    If the user search without any asset class and clicks search, user will get search outcome as office and lease.
    Feature Placement: The "Select City" feature must initially display the top 7 to 10 connected cities as clickable buttons on the search bar. The full BookMyShow-style dialogue box should only appear if the user selects "other city".
    > [Comment AAAB30rYMdw — RESOLVED]: "FIGMA NEEDED" · John Abraham: "change in design requested and needs to be determined by Himanshu and Krishna before design" · Pradeepa PV: "Both wanted" · John Abraham: "Yes."
- Asset Class
  - Office
  - Retail
  - F&B
  - Managed Office Property
  - Flex Office Property - Phase 2
- Transaction Type
  - Lease
  - Sales
  > [Comment AAAB3LJ51hY — RESOLVED]: "Change in FIGMA"
- Search Bar
  - Enter Locality/Search - Multi-use search bar (Should have Google location), Project name, property name.
  > [Comment AAACE8udNQM — RESOLVED, 2026-09-28]: "TBD with client later."
  > [Comment AAAB2rxNwCE — RESOLVED]: "Search Property by Location can be the placeholder."
- Before login
  > [Comment AAAB214VBRQ — RESOLVED]: "FIGMA will be needed." Reply: "Must have. @ramprasad.m@futuristglobal.com This is to be implemented."

  Everyone can see only property - Information cards will be displayed along with cities, once they click on the property - it will show login screen, where they identify themselves and move forward.
  > [Comment AAAB24a5dew — RESOLVED]: "TBD" · "This was not in png file. need to discuss."

  When a user searches for a city by name, it should display the city's properties and projects.
- Search CTA
  - Blank state
  - Filtered state

When the user comes in the next time, his previous searches, aka recent searches and new searches, are shown

Recent Searches
- City
- Location
- Transaction Type

New Properties
- Property/Property Name
- Store Type
- Location
- Carpet Area
- City
- Quoted Rent

#### Premium Projects
- Premium Projects - Premium projects worth a look
- Cities - Metro
  - Project Card
    - Transaction Type
    - Total Photos/Video
    - Add to Wishlist
    - Label - Premium
    - Project Name
    - Project id
    - Total Project size in sq.ft
    - Location
    - Possession Date
    - Project Type
    - Quoted Price
    - Posted by
- CTA
  - Show Interest
  - Ref #Show Interest
    - A detailed view of the project page opens, where they can also show interest in the inner page.
    - Project detail page opens
    - If Non-Subscribed then fill form (lead form)
      - Form
        - Mobile Number
          - Enter OTP
        - Name
        - Email address
        - I am a (F&B/Retail/Agent/Tenant or Managed Space Occupier/Managed Space Operator)
      - Submit

**Flow for "Show Interest"**
- **User Journey (Logged-in):** If a user clicks "Show Interest," the button changes to "Interest Shown" along with the date.
- **User Journey (Guest/New User):**
  - When a guest clicks "Show Interest," they are prompted to enter their mobile number.
  - They must undergo OTP verification.
  - If they are an existing registered user, they are logged in automatically.
  - If they are a new user, they are treated as a "guest inquiry" initially. They will be prompted to provide further details (full name, email, role) *after* OTP verification.
  - Guest inquiries can be converted to registered users later by the team via the admin panel if deemed genuine.
- **Dashboard Representation:**
  - The dashboard will include a section for "Projects Enquired" to track user interest.
  - Sorting for these projects will be date-based (latest first).
- **Flexibility:** Users are not restricted to a single inquiry; they can send multiple inquiries for different projects without limitations.

- Recent Searches
  - Card Details
    - City
    - Location
    - Transaction Type
      - Lease
      - Sell
- New Properties in <City>
  Business Rule: 7-Day Window: A property is strictly defined as "new" only if it has been added within the last 7 days.
  City-Specific & Dynamic: The "New Properties" section is strictly city-specific. It must also be dynamic and collapsible; if there are no new properties for the selected city in the last 7 days, the section will not appear. The content will not be there, if there isnt any new property.
  - Store type
  - Location
  - Possesion
  - Carpet Area
  - Price Range
    - If lease - it will be quoted rent
    - if sell - it will be quoted price
- Footer
  - Business Facts Banner - Data will be changed on the backend along with placements header and footer.

Chat can be integrated later. - Phase 2

#### Exclusive Projects
When user click on this - they can go to project detailed page
> [Comment AAAB2orCTOw — RESOLVED]: "Without registering, can they do that?"

- Header
  - Title
  - Sub-header
- Projects
- Transaction Type
- Total Photos/Video
- Add to Wishlist
- Label - Exclusive
- Project Name
- Project id
- Total Project size in sq.ft
- Location
- Possession Date
- Project Type
- Quoted Price
- Posted by
- CTA
  - Show Interest
- CTA
  - Show Interest
  - Ref #Show Interest — identical to Premium Projects (project detail page opens; if Non-Subscribed then lead form: Mobile Number → Enter OTP, Name, Email address, I am a (F&B/Retail/Agent/Tenant or Managed Space Occupier/Managed Space Operator); Submit)

**Flow for "Show Interest"** — identical text to the Premium Projects flow above (Logged-in → "Interest Shown" + date; Guest → mobile + OTP; existing user auto-login; new user = "guest inquiry" then full name/email/role after OTP; admin may convert guest inquiries; dashboard "Projects Enquired" section sorted latest first; unlimited inquiries across projects).

Success Message - Interest shown successfully
End Outcome: Lead will go to the person who posted this, the relationship manager and assigned user to the project (Keydemand team, if assigned) and Admin.

#### Explore Properties in <City>
> [Comment AAAB2orCTLo — RESOLVED, on "Properties"]: "What will be the header"

- Header
  - Title
  - Sub-header
- Cities - Metros (btn)
- Asset Classes
  - All
  - Office
  - Brand
  - F&B
- Properties

[Image: Explore Properties section design screenshot]

For Non-Registered User
**View Phone Number**
Will ask the user to log in/sign up, asking to identify as. Once identified as retail, FnB, tenant, managed space, agent
They will be asked for onboarding + requirements directly
Once the posting is done, 2nd time user arrives, we will ask them to fill in the profile details if missed any.
For Office Tenant and Managed spaces, after that one demand, we pitch for Enterprise Solutions
If, while filling the onboarding requirement, tenants tick the box as also interested in managed spaces, then the user details are sent to the Keydemand admin team.
For agents, after 1 listing or 5 contacts viewed, we put a paywall
For retail and F&B, we pitch an enterprise solution after 3 demand listings or 5 contacts viewed. For office and managed space, we pitch an enterprise solution after 1 demand listings or 5 contacts viewed.
For the developer and managed space operator, an enquiry form is filled out and sent to the Keydemand admin team.
Registered User - They can view the phone number there itself.
Agent (Non Subscribed) - 5 times (He can view there itself) -
Brands and Tenants - if registered can view the phone number there itself
But if they click on Properties, they can see the page and images. If they want a detailed view, they will have to go to login process.
- View All Properties

#### Explore Projects in <City>
- Header
  - Title
  - Sub-header
- Cities - Metro
- Asset Classes
  - All
  - Office
  - Brand
  - F&B
  - Managed Space
- Developer Projects
- Transaction Type
- Total Photos/Video
- Add to Wishlist
- Project Name
- Project id
- Total Project size in sq.ft
- Location
- Possession Date
- Project Type
- Quoted Price
- Posted by
- CTA
  - Show Interest
  - Ref #Show Interest
    - A detailed view of the project page opens, where they can also show interest in the inner page.
    - Project detail page opens
    - If Non-Subscribed then fill form (lead form)
      - Form
        - Name
        - Email address
        - Phone number - Verify
        - I am a (F&B/Retail/Agent/Tenant or Managed Space Occupier/Managed Space Operator)
      - Submit

**Flow for "Show Interest"** — identical text to the Premium Projects flow above.

End Outcome: Lead will go to the developer who posted this, the relationship manager and the assigned user to the project (Keydemand team, if assigned) and Admin.

#### Top Clusters In City
> [Comment AAAB29IJ6zk — OPEN, 2026-08-04]: "Phase 2"

- Header
  - Title
  - Sub-header
- City
  - Mumbai - If Mumbai is chosen (City with icons)
  - Delhi
  - Bengaluru
  - Chennai
  - Kolkata
  - Pune
- Locality
  - BKC, Nariman Point, Andheri, Thane, Navi Mumbai
- Property Type Filter
  - Office
  - Retail
  - F&B
- Carousel
  - Cluster Card
    - End-User Type
    - Location Name
    - Location
    - Information chips
    - Market Tier
      - Premium
      - Mid-Range
      - Affordable
    - Average Rent/Expected Rent
    - Transportation
      - Metro/Train > Distance
      - Airport > Distance
      - Bus/ > Distance
    - Food and Stay
      - Restaurants > Distance > No of Restaurants
      - Hotels > Distance > No of Hotels
    - Ecosystem
      - List of Major Brands nearby

#### Explore Real Estate in Popular Indian Cities
- Header
  - Title
  - Sub-header
- City Filter
  > [Comment AAAB3z6cG-4 — RESOLVED]: "this is to be city type filter to be added @ramprasad.m@futuristglobal.com"
  - Mumbai
  - Delhi
  - Bengaluru
  - Chennai
  - Kolkata
  - Pune
  - Hyderabad

Replace existing images from this folder: <https://drive.google.com/drive/folders/1HuYqJEbh-cfITM-ba7vjYAVXXRd5MYyu>

- Carousal
  - Office Card — City Name — Total properties: 9999
  - Retail Card — City Name — Total Properties: 9999
  - F&B Card — City Name — Total Properties: 9999
  - Managed Offices — City Name — Total Properties: 9999

CTA
- Explore - It should open the properties list page as per the city

**If not registered**
It will take the user to the property list page along with images. Only when clicking on View Number/Request number - it must prompt the user to register

#### About Keydemand - Book a Demo
- Header
  - Title
  - Sub-header
- Video Player: Large central video with play button
  > [Comment AAAB29IJ6y4 — RESOLVED]: "Options are to be given. Suggested by our Ui/UX team"

  (Multiple videos on how Keydemand works - Agents, Brands, Developers and Managed Space Operators)
  This can be done only when the Agent dashboard is ready - so they will use it once we give them
- CTA
  - Request a Callback - To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory.
  - Form Fields
    - Name
    - Email
    - Phone number
    - I am - User types

#### Clients & Testimonials
- Header
  - Title - Our Clientele
    > [Comment AAAB29IJ6zc — RESOLVED]: "Bifurcate and show us on how it can be done. FIgma"

    It should be a section as below. F&B Brands/Retail Brands/Office Brands/Developers/Malls. Also, add the names and logos for "Office Tenant" and "Managed Office Spaces"
    > [Comment AAAB2oy6ZfI — RESOLVED]: "did not quite understand"
- Sub-header
- Client Logos
  The brands will be populated later from the database
  > [Comment AAAB3CP18TY — RESOLVED]: "Take existing from keydemand. Later we can populate from database"

In Testimonials - rating to be removed.
- Testimonials
  - Title
  - Sub-header
  - Carousel
    - Testimonial Card
      - Rating - To be removed. No need of any stars.
      - Testimonial (30 to 50 words)
      - Profile
        - Profile Image
        - Name
        - Designation
        - Company

#### Footer
- Title
- Sub-header
- CTA
  - Download on App Store — Ref #AppStore
  - Download on Google Play — Ref #GooglePlayStore
- App Image

Footer
- Title
- Sub-header
- Social Media Icons
  - Facebook — Ref #KD FacebookPage
  - Twitter — Ref #KD TwitterPage
  - Instagram — Ref #KD InstagramPage
  - LinkedIn — Ref #KD LinkedInPage
  - Youtube — Ref #KD YoutubePage
- Explore
  - Properties — Ref #PropertiesPage
  - Demand — Ref #Demand
  - List a Property — Ref #ListAProperty
  - List s Demand — Ref #ListADemand
  > [Comment AAAB3LJ51hc — RESOLVED]: "to be updated in figma"
- Keydemand
  - About Us — Ref #AboutUsPage
  - Privacy Policy — Ref #PrivacyPolicyPage
  - Terms & Conditions — Ref #T&CPage
  - FAQ's — Ref #FAQPage
  - Investor Relations — Ref #IRPage
- Contact Us
  - Book a Demo
  - Address
  - Email Id
  - Phone number

#### Enterprise Solutions Page
#### KEYDEMAND ENTERPRISE
##### Everything your business needs to expand across India — in one place
Keydemand's Enterprise Solution gives your real estate and business development team the platform, intelligence, and support to find the right spaces — faster, across India.
###### Key Metrics
- **6000+** Properties
- **250Mn+** sq. ft. Inventory
- **100+** Managed Office Centres
- **150+** Projects
- **100+** Developers
##### OUR SOLUTION
###### Real Estate Management & Discovery
One enterprise platform for your entire PAN India expansion — discovery, intelligence, transactions and team access.
- **Unlimited Listings:** Add unlimited requirements across cities and formats.
- **Dashboard & Platform Access:** A centralised command centre for your entire expansion pipeline — requirements, matches, shortlists and responses, all in one view.
- **Multiple User Access:** Give access to your business development team across cities, all under one enterprise account.
- **Transaction Assistance:** Dedicated support through the deal lifecycle — from shortlisting to opening. Our team works with you to close faster and smarter.
- **Locality Insights & Analysis (COMING SOON):** Deep catchment data and micro-market reports — so every location decision is backed by data.
- **AI Powered Recommendations (COMING SOON):** AI-matched property suggestions based on your brand's mandate, expansion history and catchment preferences — surfaced proactively.
##### COVERAGE MODEL
###### Built for every format your business requires
From high-street retail to logistics — one account covers it all.
- Retail Brands
- Corporate HQ
- Managed Portfolios
- Logistics Parks
- Regional Hubs
##### ENTERPRISE
###### Enquire for Enterprise Solution
- A dedicated relationship manager for your account
##### Download Our App
One app for every stakeholder. Explore commercial spaces at your fingertips.
###### Keydemand Overview
India's first commercial real estate platform. Connecting businesses with perfect commercial spaces through AI-powered recommendations.
##### Contact & Location Details
- **Address:** 72, 7th floor, Nariman Bhavan, 227, Backbay Reclamation, Nariman Point, Mumbai, Maharashtra 400021
- **Email:** contact@keydemand.in
- **Phone:** +91 89766 13166

© 2026 Keydemand. All rights reserved.

#### About Us Page
"Here is the complete text content extracted from the page:" — the About Us page content in V1.0 is the same Enterprise page text, with these different metrics:
###### Key Metrics (About Us page)
- **8,000+** Properties
- **25Mn+** sq. ft. Inventory
- **100+** Managed Office Centres
- **150+** Projects
- **180+** Developers

All other text (KEYDEMAND ENTERPRISE heading, "Everything your business needs to expand across India — in one place", intro paragraph, OUR SOLUTION with the six bullets incl. two "(COMING SOON)", COVERAGE MODEL five formats, ENTERPRISE "Enquire for Enterprise Solution — A dedicated relationship manager for your account", Download Our App, Keydemand Overview, Contact & Location Details with same address/email/phone, © 2026) is word-for-word identical to the Enterprise Solutions Page above.

### Business rules extracted
- **BR-PG1-001** — The Navbar is not universal; it adapts to the logged-in user type. Agent Subscription must be completely hidden on Brand, Developer, or Managed Office-specific dashboards. _(§ Core Platform & Navbar)_
- **BR-PG1-002** — Confirmed Navbar elements: Keydemand Logo, Agent Subscription, List a Property, Post a Property, Post a Demand, Enterprise Solution (Nav bar section also lists Explore Properties). _(§ Core Platform & Navbar; § Nav bar)_
- **BR-PG1-003** — Navbar items are rendered as placeholders (like housing.com), not buttons; order: Agent Subscription, Enterprise Solution on the left; Post a Property and Post a Demand on the right. _(§ Nav bar, comment AAAB2rxNwCc)_
- **BR-PG1-004** — "List your Project >>" button on the Navbar opens a dropdown Developer | Operator; selecting either opens a standard Enquiry Form. _(§ Core Platform & Navbar)_
- **BR-PG1-005** — The "List your Project" entry point is removed entirely from the login/sign-up page. _(§ Core Platform & Navbar)_
- **BR-PG1-006** — List a Property flow: phone number + OTP verification; registered number → returns to their dashboard; unregistered number → asked "What would you like to list?" (Developer — List your residential or commercial projects / Space Operator — List your managed / co-working spaces). _(§ Nav bar › List a Property)_
- **BR-PG1-007** — List a Property enquiry form fields: Full Name, Company Name, Designation, Official Email-Id, Phone no, Select City (dropdown), GST no, Agree to terms and conditions; CTA "Submit". _(§ Nav bar › List a Property)_
- **BR-PG1-008** — A "1 free listing" notification must be highlighted on the Agent Home page (Navbar or first fold) for new users; applies to all roles with property listing capabilities. _(§ Core Platform & Navbar)_
- **BR-PG1-009** — The "one free listing" reward must be shown via a pre-wall popup/graphic before the user enters registration, not post-registration. _(§ Core Platform & Navbar)_
- **BR-PG1-010** — Guests can view property details and images by default; images are hidden only if explicitly marked to be withheld by the posting agent or Keydemand. _(§ User Onboarding)_
- **BR-PG1-011** — Guests must not be forced to sign up to browse; registration prompts trigger only on high-intent actions "View Phone Number" or "Contact Us". _(§ User Onboarding)_
- **BR-PG1-012** — Post a Property — Agents: register via mobile number, OTP and profile details; granted 1 free listing on onboarding. _(§ User Onboarding; § Nav bar)_
- **BR-PG1-013** — Post a Property — Developers and Managed Space Operators must fill out a dedicated Enquiry Form. _(§ User Onboarding; § Nav bar)_
- **BR-PG1-014** — Post a Demand — Agents: 1 free demand posting after OTP registration. _(§ User Onboarding)_
- **BR-PG1-015** — Post a Demand — Tenants / Managed Space Occupiers: 1 free demand posting after OTP registration; to post another demand after logging in, they must become enterprise. _(§ User Onboarding; § Nav bar)_
- **BR-PG1-016** — Post a Demand — F&B / Retail Brands: 3 free demands post OTP registration (1 demand + 2 more post registration); the next demand requires enterprise. _(§ User Onboarding; § Nav bar)_
- **BR-PG1-017** — Post a Demand — Developers / Office Occupiers must fill out a dedicated Enquiry Form (Nav bar section: Office Occupier/Managed Space Occupier are asked to fill the soft registration page). _(§ User Onboarding; § Nav bar)_
- **BR-PG1-018** — Post a Demand role selector: Agent / F&B / Retail Brand / Office Occupier / Managed Space Operator. _(§ Nav bar › Post a Demand)_
- **BR-PG1-019** — If a tenant ticks "also interested in managed spaces" during onboarding requirements, their details are instantly routed to the Keydemand admin team. _(§ User Onboarding; § Explore Properties)_
- **BR-PG1-020** — Guest "Show Interest": must authenticate via mobile OTP; existing registered users are logged in instantly/automatically. _(§ User Onboarding; § Flow for Show Interest)_
- **BR-PG1-021** — New users clicking Show Interest are saved as a "guest inquiry" and prompted for full name, email and role after OTP verification. _(§ Flow for Show Interest)_
- **BR-PG1-022** — Guest inquiries can be manually converted to registered profiles by the admin team via the admin panel if verified/deemed genuine. _(§ Flow for Show Interest)_
- **BR-PG1-023** — On the second platform visit, users who completed a posting but missed registration details must be prompted to finish profile setup. _(§ User Onboarding; § Explore Properties)_
- **BR-PG1-024** — Bengaluru (Bangalore) is the default test market and first-visit primary city; default property type Office; default transaction type Lease. _(§ Search, Maps & Location)_
- **BR-PG1-025** — Clicking Search without an asset class defaults search to Office and Lease. _(§ Search; § Hero Section)_
- **BR-PG1-026** — Select City shows top 7 to 10 connected cities as clickable buttons; the full BookMyShow-style dialogue only opens on "other city". _(§ Search; § Hero Section)_
- **BR-PG1-027** — City (Mandatory) dropdown lists only cities with active property listings; a city is auto-added when a property is added in a new city. _(§ Search; § Hero Section)_
- **BR-PG1-028** — Searching a location with no active properties (e.g., Karimnagar) auto-redirects results to the closest city with inventory and shows a messaging banner explaining the redirect. _(§ Search; § Search & Map Logic)_
- **BR-PG1-029** — Google Maps is integrated in the search/typing interface for locality selection (to be evaluated for performance impact). _(§ Search; § Navigation & CTAs)_
- **BR-PG1-030** — Returning users see Recent Searches cards with City, Location, Transaction Type (Lease / Sell). _(§ Search; § Hero Section; § Premium Projects)_
- **BR-PG1-031** — Fix the bug where the default city selection does not default to Bangalore. _(§ Navigation & CTAs)_
- **BR-PG1-032** — Hero banner auto-carousel every 5s. _(§ Hero Section)_
- **BR-PG1-033** — Hero search: City* (mandatory); Asset Class options Office, Retail, F&B, Managed Office Property, Flex Office Property (Phase 2); Transaction Type Lease / Sales; multi-use search bar (Google location, project name, property name). _(§ Hero Section)_
- **BR-PG1-034** — Searching a city by name displays the city's properties and projects. _(§ Hero Section)_
- **BR-PG1-035** — Search CTA has Blank state and Filtered state. _(§ Hero Section)_
- **BR-PG1-036** — Before login: property information cards are displayed along with cities; clicking a property shows the login screen where users identify themselves. _(§ Hero Section › Before login)_
- **BR-PG1-037** — Properties uploaded by Keydemand marked "Keydemand/Brand" only must be completely hidden from public/agents and the explore landing page; visible only to brands and Keydemand. _(§ Property, Project & Cluster)_
- **BR-PG1-038** — A property is "new" strictly for 7 days from upload; the "New Properties in <City>" section is city-specific, dynamic and collapses/hides when no property was added in the selected city in the last 7 days. _(§ Property, Project & Cluster; § Premium Projects)_
- **BR-PG1-039** — New Properties card fields: Property/Property Name, Store Type, Location, Carpet Area, City, Quoted Rent; section fields also Possession and Price Range (lease → quoted rent; sell → quoted price). _(§ Hero Section; § Premium Projects)_
- **BR-PG1-040** — Store Type values: Highstreet, Independent Building, Mall, Mixed Use, Kiosks, Store-in-store, Highway store. _(§ Property, Project & Cluster)_
- **BR-PG1-041** — Sponsored projects are renamed Premium Projects. _(§ Property, Project & Cluster)_
- **BR-PG1-042** — Static city tabs are removed from Exclusive Projects; Premium Projects has dynamic city tabs showing only cities with active premium projects (e.g., Nashik); a tab disappears when none exist. _(§ Property, Project & Cluster; § Navigation & CTAs)_
- **BR-PG1-043** — Landing projects section has a toggle/filter to switch between Office, Retail, FNB and Managed Space projects. _(§ Property, Project & Cluster)_
- **BR-PG1-044** — Premium/Exclusive project card fields: Transaction Type, Total Photos/Video, Add to Wishlist, Label (Premium / Exclusive), Project Name, Project id, Total Project size in sq.ft, Location, Possession Date, Project Type, Quoted Price, Posted by; CTA Show Interest. _(§ Premium Projects; § Exclusive Projects)_
- **BR-PG1-045** — Show Interest opens the project detail page (interest can also be shown on the inner page); if Non-Subscribed, a lead form is filled: Mobile Number + Enter OTP, Name, Email address, I am a (F&B/Retail/Agent/Tenant or Managed Space Occupier/Managed Space Operator), Submit. _(§ Premium Projects; § Exclusive Projects)_
- **BR-PG1-046** — Logged-in Show Interest changes the button to "Interest Shown" with date/timestamp and shows a success popup "Interest shown successfully". _(§ Leads; § Flow for Show Interest; § Exclusive Projects)_
- **BR-PG1-047** — Users can send unlimited inquiries across different projects. _(§ Leads; § Flow for Show Interest)_
- **BR-PG1-048** — The dashboard includes a "Projects Enquired" section, sorted date-based (latest first). _(§ Flow for Show Interest)_
- **BR-PG1-049** — Project Show Interest leads are routed simultaneously to: the Developer/person who posted the project, the designated Relationship Manager, the Keydemand team member assigned to the project (if assigned), and Platform Admin. _(§ Leads; § Exclusive / Explore Projects End Outcome)_
- **BR-PG1-050** — Exclusive Projects: clicking takes the user to the project detail page. _(§ Exclusive Projects)_
- **BR-PG1-051** — Explore Properties in <City>: Cities - Metros (btn); Asset Classes All, Office, Brand, F&B; "View All Properties". _(§ Explore Properties in <City>)_
- **BR-PG1-052** — Non-registered user clicking View Phone Number is asked to log in/sign up and identify as retail, FnB, tenant, managed space or agent, then asked for onboarding + requirements directly. _(§ Explore Properties)_
- **BR-PG1-053** — Agents (non-subscribed) hit a paywall after 1 listing or 5 contacts viewed; they can view up to 5 phone numbers directly. _(§ Paywalls; § Explore Properties)_
- **BR-PG1-054** — Retail and F&B are pitched Enterprise after 3 demand listings or 5 contacts viewed; Office and Managed Space after 1 demand listing or 5 contacts viewed. _(§ Explore Properties; § Enterprise Upsell Triggers)_
- **BR-PG1-055** — Registered brands and tenants can view contact phone numbers directly on listings, up to 5 contacts. _(§ Paywalls)_
- **BR-PG1-056** — Developer and managed space operator enquiry forms are sent to the Keydemand admin team. _(§ Explore Properties)_
- **BR-PG1-057** — Registered users can view the phone number on the listing itself. _(§ Explore Properties)_
- **BR-PG1-058** — Clicking Properties shows the page and images; a detailed view requires the login process. _(§ Explore Properties)_
- **BR-PG1-059** — Agent dashboard placeholder text is replaced with live status labels ("Free Plan", "Trial Plan", "Usage 0 of 1") plus a "Subscribe Now for unlimited access" CTA. _(§ Paywalls; § Navigation & CTAs)_
- **BR-PG1-060** — Free listings are limited by asset class and expire automatically once the allocated quota is exhausted. _(§ Paywalls)_
- **BR-PG1-061** — Remove the redundant "lead management" section from the agent dashboard and realign the fourth tab. _(§ Navigation & CTAs)_
- **BR-PG1-062** — Explore Projects in <City>: Asset Classes All, Office, Brand, F&B, Managed Space; Developer Projects card fields as project card (without Label); lead form: Name, Email address, Phone number - Verify, I am a (…). _(§ Explore Projects in <City>)_
- **BR-PG1-063** — Top Clusters In City is Phase 2; card captures End-User Type, Location Name, Location, Information chips, Market Tier (Premium / Mid-Range / Affordable), Average/Expected Rent, Transportation distances (Metro/Train, Airport, Bus), Food and Stay (Restaurants distance + count, Hotels distance + count), Ecosystem (major brands nearby). Cities: Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune; Property Type Filter Office, Retail, F&B. _(§ Top Clusters; comment AAAB29IJ6zk)_
- **BR-PG1-064** — Explore Real Estate in Popular Indian Cities: City filter Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad; carousel cards Office / Retail / F&B / Managed Offices each with City Name and Total properties; images replaced from the given Drive folder. _(§ Explore Real Estate)_
- **BR-PG1-065** — "Explore" CTA opens the properties list page for that city; unregistered users see the list with images and are prompted to register only on View Number/Request number. _(§ Explore Real Estate)_
- **BR-PG1-066** — Enterprise is pitched to Office Tenants and Managed Space Occupiers automatically after 1 demand listing, and to Retail and F&B brands after 3 demand listings. _(§ Enterprise Upsell Triggers)_
- **BR-PG1-067** — Enterprise target audience: brands, F&B, retail or office occupiers with requirements exceeding 5,000 sq ft, or managed space requirements of more than 20 seats (bulk inventory). _(§ Enterprise Solutions Rules; § Nav bar)_
- **BR-PG1-068** — Enquiring/clicking Enterprise Solution shows an acknowledgement page that the team will reach out; once enrolled, portal status shows active. _(§ Enterprise Solutions Rules)_
- **BR-PG1-069** — Enterprise account features: dedicated dashboard with centralized mandate tracking, transaction support from shortlisting to LOI, catchment and footprint analysis, unlimited listings, multi-user regional account access, AI-driven property recommendations. _(§ Enterprise Solutions Rules)_
- **BR-PG1-070** — Enterprise Solution expected service: end-to-end handholding, defining the outcome and journey, finding the best place and providing options; offered to brands, F&B and Retail, all locations, on a separate page. _(§ Nav bar)_
- **BR-PG1-071** — The "Enquire Now" form triggers an auto-email informing the user of a 24-hour wait time. _(§ Leads)_
- **BR-PG1-072** — "Request a callback" sits alongside "Send an inquiry" / "Book a demo" in the About video section and captures only the mobile number; name and email must not be mandatory. _(§ Leads; § Search & Map Logic; § About Keydemand)_
- **BR-PG1-073** — Rename "Book a demo" to "Send an inquiry" in the About section. _(§ Search & Map Logic)_
- **BR-PG1-074** — "Send an Enquiry" CTAs open a specific Calendly link for booking demo slots. _(§ Client Testimonials & Static Footer)_
- **BR-PG1-075** — About Keydemand video: large central video with play button; multiple videos on how Keydemand works (Agents, Brands, Developers, Managed Space Operators); only once the Agent dashboard is ready. _(§ About Keydemand)_
- **BR-PG1-076** — Testimonial cards have no star ratings; testimonial length 30 to 50 words; profile shows Profile Image, Name, Designation, Company. _(§ Client Testimonials; § Clients & Testimonials)_
- **BR-PG1-077** — Client section "Our Clientele" bifurcated F&B Brands / Retail Brands / Office Brands / Developers / Malls, plus names and logos for "Office Tenant" and "Managed Office Spaces"; brands later populated from database (initially take existing from Keydemand). _(§ Clients & Testimonials)_
- **BR-PG1-078** — Business Facts Banner data is changed from the backend along with header and footer placements. _(§ Premium Projects › Footer)_
- **BR-PG1-079** — Chat integration is Phase 2. _(§ Premium Projects)_
- **BR-PG1-080** — Footer: App Store / Google Play CTAs + app image; social icons Facebook, Twitter, Instagram, LinkedIn, Youtube; Explore links Properties, Demand, List a Property, List a Demand; Keydemand links About Us, Privacy Policy, Terms & Conditions, FAQ's, Investor Relations; Contact Us: Book a Demo, Address, Email Id, Phone number. _(§ Footer)_
- **BR-PG1-081** — Enterprise Solutions page content: heading "KEYDEMAND ENTERPRISE"; metrics 6000+ Properties, 250Mn+ sq. ft., 100+ Managed Office Centres, 150+ Projects, 100+ Developers; six solution features where "Locality Insights & Analysis" and "AI Powered Recommendations" are "COMING SOON"; coverage model Retail Brands, Corporate HQ, Managed Portfolios, Logistics Parks, Regional Hubs; "Enquire for Enterprise Solution" with dedicated relationship manager; contact address/email contact@keydemand.in/phone +91 89766 13166. _(§ Enterprise Solutions Page)_
- **BR-PG1-082** — About Us page metrics: 8,000+ Properties, 25Mn+ sq. ft. Inventory, 100+ Managed Office Centres, 150+ Projects, 180+ Developers. _(§ About Us Page)_
- **BR-PG1-083** — Agent Subscription navbar item opens the subscription page; after plan selection the user is asked if they are an agent, then signed in and onboarded; other user types continue their own journeys. _(§ Nav bar)_
- **BR-PG1-084** — Explore Properties: unregistered and registered users can both explore; unregistered users clicking view number are told to login. _(§ Nav bar)_

### Open questions / ambiguities in this doc
- OPEN comment AAACF7BXSN0 was resolved but the text still says "Office Tenants and Managed Space Occupier", and "Post a Demand" still lists "Managed Space Operator" as a role, contrary to the comment "Operators cannot post - operators only manages and they are from backend".
- Office Occupier demand onboarding is stated three ways: "Developers/ Office Occupiers: Must fill out a dedicated Enquiry Form"; "tenant/Managed Space Occupier … can post 1 free demand"; "Office Occupier/Managed Space Occupier - they will be asked to fill the soft registration page".
- Navbar list differs between the Business Rules (no Explore Properties) and the Nav bar section (includes Explore Properties); "List a Property" heading describes the "List your Project >>" button.
- About section: "Request a Callback … only captures the mobile number" but form fields listed are Name, Email, Phone number, I am. Also "Book a demo" vs "Send an inquiry" vs "Request a callback" vs "Send an Enquiry → Calendly" are overlapping CTAs.
- About Us Page content is a copy of the Enterprise Solutions page with different metrics (8,000+ vs 6000+, 25Mn+ vs 250Mn+, 180+ vs 100+ developers) — likely a placeholder; real About Us copy exists only in the HISTORY doc.
- Search bar scope "TBD with client later" (comment AAACE8udNQM, resolved 2026-09-28).
- OPEN comments: AAAB4sVdLmU (@sathish.r on city dropdown), AAAB2rxNwBE (jam.dev flow for Agent Subscription), AAAB29IJ6zk (Top Clusters = Phase 2).
- Explore Properties asset class filter shows "Brand" as an asset class (All/Office/Brand/F&B) — no Retail or Managed Space; unclear if "Brand" means Retail.
- Guest access: "Guest users … default access to view property details and images" vs "Before login … once they click on the property - it will show login screen" vs "If they want a detailed view, they will have to go to login process".
- "Dashboard Cleanup: remove lead management section" conflicts with Agent V1.1 which keeps a Leads section.
- Show-interest lead form for Premium/Exclusive uses Mobile+OTP first; Explore Projects form uses Name, Email, Phone - Verify (field order differs).

---
## Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us  [HISTORY — superseded by Version 1.0 - Landing Page Main- Unregistered User Flow, Enterprise Solutions Page, About Us]
**Source:** Google Doc · ID `1gW6_NYr5I-GjGBtZE19K97o2bUorBqmlCmfWIyYGvRM` · owner pradeepa.pv@futuristglobal.com · modified 2026-08-05 · sections read: all (Business rules preamble, Nav bar, Hero Section, Exclusive Projects, Explore Properties, Projects, Top Clusters, About Keydemand, Explore Real Estate, Clients & Testimonials, Book a Demo, Footer, Enterprise Solutions, About Us) + 26 comment threads · read coverage: 100% (inline images not visible)

### Differences vs authoritative version
- **Live link only in old doc:** "Live link: https://du15yseakf0ik.cloudfront.net/".
- **Business rules preamble (old)** was short prose, not the categorised rule list. Old-only text: "If Brands or Tenant/Managed Office Occupier enquires or clicks on Enterprise Solution we have to ensure that we need to showcase that they have enquired about Enterprise Solution and the team will connect with them shortly. Once the user is enrolled for the Enterprise Solution, we can show it as active or something." (V1.0 rephrases as acknowledgement page.) The Keydemand/Brand visibility rule carried the comment "Business rule added on June 22" (OPEN).
- **Navbar (old):** Keydemand Logo, Agent Subscription, Post a Property, Post a Demand, Enterprise Solution, plus "Login/Sign Up → Epic 1, Story 1" (link https://docs.google.com/document/u/0/d/1Zr29uIY_Oll6fZSXVYAI1jTXR1Jrmn9Henj_t7XQrmc/edit). No Explore Properties, no List a Property / "List your Project >>" (added in V1.0). Old: "This would be the journey https://jam.dev/c/658c5c8f-cd67-466a-9396-2be52661c894".
- **Enterprise button (old)** added "–We need to decide what fields come here".
- **Post a Property (old):** Developer → enquiry form; "Managed Space operator, they will get soft registration home page(Name,email,company name, city…and click submit)." → V1.0: managed space operator/Developer both fill the enquiry form.
- **Post a Demand (old):** Agent → 1 free posting; tenant/Managed Space Occupier → register and post 1 free demand; "If they are F&B/Retail Brand/Office Occupier/Managed Space Occupier -they will be asked to fill the soft registration page (Name,email,company name, city…and click submit)." → V1.0: F&B/Retail get 1 + 2 more free demands (3), enterprise after that.
- **Hero:** "auto carousal 5s" same. Old extra line: "Adopt a BookMyShow-style approach for search results, particularly for city/region selection." Old label "Property Type" (Office, Retail, F&B, Managed Office Property, Flex Office Property) → V1.0 "Asset Class" with Flex Office = Phase 2. Old search bar only "Multi-use search bar (Should have Google location)" → V1.0 adds Project name, property name.
- **Before login (old):** "Everyone can see only property - Information cards will be displayed along with cities, **but no image**." → V1.0 removed "but no image".
- **New Properties (old)** lacked Carpet Area in the hero list.
- **AD cards (old only):** "AD - Multiple AD cards with scrollers. Minimum 1 , maximum 5 with left and right arrows and cursor on the bottom. It will feature a scroller or a cursor at the bottom to indicate multiple scrollable ads, similar to a credit card stack." (comment: "We can give more options- @ramprasad.m") — removed in V1.0.
- **Featured Listing / Sponsored (old only)** → became Premium Projects. Old card: Total Photos, Video, Label (Star Icon - sponsored), Project Name, Location (Ref #OnClick: "Project Detail page should open with location -map small view"), Project Type (Mall, Independent Building, Tech Park-), Area of Project(sqft), Unit Size Range, Project Status (Under construction — "When it will be ready MM/YYYY(Ex:May 2026)"; Ready to Move), Developer Name, CTA Show Interest. Old lead form order: Name, Email address, Phone number- Verify, I am a (…). V1.0 premium card fields differ (Transaction Type, Add to Wishlist, Label - Premium, Project id, Total Project size, Possession Date, Quoted Price, Posted by) and the form starts with Mobile Number + OTP.
- **Store type values** were listed under New Properties in old; **Possession values (old only): "Immediate", "Within 3 Months."**
- **Old only:** "A floater to show they can scroll up".
- **Chat later** — old had no "Phase 2" tag.
- **Exclusive Projects (old card):** Transaction Type (Lease/Sell), Images, Video, Image Slider Function, Project Name, Project id, Size of Project, Location, Possession, Project Type, Quoted Rent/Price, Price Range (lease → quoted rent, sell → quoted price). V1.0 replaces with Total Photos/Video, Add to Wishlist, Label - Exclusive, Total Project size in sq.ft, Possession Date, Quoted Price, Posted by. End Outcome old: "Lead will go to the developer who posted this…" → V1.0 "the person who posted this…".
- **Explore Properties (old):** "Images will be shown"; enterprise pitch for retail/F&B "after 3 demand listings." (no "or 5 contacts viewed"; no office/managed space sentence); "But if they click on Properties, they can see the page **but with no images**." → V1.0 "can see the page and images". Old had no Cities/Asset Class filters.
- **Projects (old):** header "Projects" (no city), fields Built Up Area(sqft), Possession, Price Range; ended "Same as sponsored". V1.0 → "Explore Projects in <City>" with Cities and Asset Classes (All, Office, Brand, F&B, Managed Space), Project id, Total Project size, Possession Date, Quoted Price, Posted by.
- **About Keydemand (old):** CTA "Schedule a Demo" (comment "Calendly integration to be done. Backend", OPEN) → "A Calendly link for one of the representatives will open up, where users can book a slot for the demo." https://calendly.com/himanshu-keydemand/30min?month=2026-04&date=2026-04-03 ; and "Enquire Now — Will ask the user who they are and post that the Enquiry form will be filled with details." Form: Full Name, Company Name, Your Designation, Select Cty (Drop Down), Official Email ID, Phone Number, Submit Button "> An email that triggers that they need to wait for 24 hours to get any further updates." → V1.0 replaced with "Request a Callback" + form Name/Email/Phone/I am.
- **Explore Real Estate (old):** "If not registered — It will take the user to the property list page but the images should be hidden." → V1.0 "along with images. Only when clicking on View Number/Request number - it must prompt the user to register". Old had no image-folder replacement instruction.
- **Clients (old only):** "How it is currently on the website [image] When they click view all - the current page should open [image]" (comment: "Take all logos and put here. Developer will be doing it." / "TBDone."). Old lacked "Office Tenant" / "Managed Office Spaces" logos.
- **Book a Demo section (old only):** Header Title/Sub-header; CTA "Schedule a Demo" (Calendly link above); "Call us Now - Remove this button"; Details: Phone Number, Email Address. Removed in V1.0.
- **Enterprise Solutions (old) — entirely different copy:** "Everything your brand needs to expand across India — in one place. Keydemand Enterprise gives your real estate and expansion team the platform, intelligence and support to find the right spaces, faster across Pan-India". CTAs "Contact Strategy Team", "See all Features". The Solution: Dashboard & platform access ("mandates, matches, shortlists and deal status all in one view"); Transaction assistance ("from shortlisting to LOI"); Locality insights & analysis ("Deep catchment data, footfall intelligence, co-tenancy analysis and micro-market reports"); Unlimited listings ("No caps. List every property, every format and every city requirement your brand needs — without worrying about quotas or limits."); Multiple user access ("across cities and regions"); Property recommendations (AI-matched). "Ready to expand smarter? Join brands already using Keydemand Enterprise to find the right spaces — faster, with better data and dedicated support." **CTA - Enquire for Enterprise Solution** form: Name, Organization, Official Id, City, CTA "Submit Enquiry". **CTA - Book a Demo** → Calendly link. V1.0 has no enquiry form fields, adds metrics, coverage model, "COMING SOON" tags, "shortlisting to opening".
- **About Us (old only, full text):** "#1 Commercial Real Estate Platform for all stakeholders. KeyDemand was built on a simple belief — that finding the right commercial space should start with what you need, not what's available. We flipped the model." Stakeholders: Brands, Agents, Office Occupiers, Developers, Managed Space Operators. CTA: Explore Properties, Enterprise Solutions. Stats: "26Mn+ sq.ft Property Listings", "1100+ Channel Partners", "xx+ Malls". Our Mission: "To make commercial real estate discovery transparent, fast, and demand-driven — enabling every business, from a first-time café owner to a Fortune 500 company, to find their perfect space with zero friction." Our Vision: "To become the definitive intelligence layer for India's commercial real estate market — where data, demand signals, and verified supply converge to power smarter investment and occupancy decisions." Our Values: 1. Transparency "No information asymmetry. Every mandate is verified, every listing is real, every match is relevant. No guesswork, no hidden agendas." 2. Simplicity "Commercial real estate has been complicated for too long. We exist to make it simple — for brands, developers, brokers and occupiers alike." 3. Speed "A 90-day search should take 2 days. A vacant GLA should find a tenant before it goes dark. We move fast because the market doesn't wait." 4. Trust "Every stakeholder on Keydemand is verified. Every mandate is active. Every connection made on the platform is backed by data, not assumptions." 5. Inclusivity "From Tier 1 metros to Tier 6 towns — commercial real estate opportunity should not be limited by geography. We cover multiple cities because India's growth isn't limited to a few." 6. Innovation "We didn't build another listing site. We built a demand-led, phygital platform because the old way wasn't working. We keep building what the market needs next." → V1.0 About Us replaced by Enterprise-style copy.
- **Rules in V1.0 not in old:** List your Project >> dropdown; 1 free listing hook + pre-wall popup; action-based registration prompts; closest-city redirect (Karimnagar); Google Maps; dynamic Premium tabs (Nashik); projects filter toggle; agent status labels; dashboard cleanup; request-a-callback; Calendly on "Send an Enquiry"; 3 free brand demands; contacts-viewed upsell trigger; enterprise 5,000 sq ft / 20 seats listed as a rule; lead routing to 4 parties as a rule.
- Old-only comments: "Can this be the form?" (Enquire form), "TBD" (Calendly), "Not in the png file? should this be there ?" (sponsored card labels).

---
## Version 1.0 Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier  [AUTHORITATIVE]
**Source:** Google Doc · ID `1AYt0SdmjORmTxSEIoZMczSxEQ05r2HUVELQGbCjD8LA` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-06 · sections read: Business Rules: Enterprise Accounts, Enterprise Account Management Flow, Extra Field, HAMBURGER, Business Rules (1. Brand Enterprise, 2. Office Tenant Enterprise, 3. Managed Space Occupier) · no comments · read coverage: 100% (linked SharePoint sheet tabs and linked Google Docs not opened — out of scope)

### Content

#### Business Rules: Enterprise Accounts
- **Demand Management:** Enterprise users may independently add, edit, delete, or deactivate their demands. They may also request assistance from a POC for all the above. So POC can add/edit/delete/deactive.
- **Multi-User Access & Listings:** Team members cannot edit, delete, or manage listings posted by other members under the same account.
- **Ownership Transfer:** In the event of a change in user ownership (e.g., a member leaving), content must be transferred to another user within the brand account before the original profile can be deleted.
- **Exclusive Projects:** All Enterprise user types (F&B, Retail, Tenant, and Managed Office) are authorised to express interest in Exclusive Projects via the CTA.
- **Requirement Thresholds:** Enterprise users may post requirements below the threshold; however, the established threshold rules for bypassing external agent visibility remain unchanged.
- **Account Deactivation/Deletion:** Requests for account deactivation or permanent deletion must follow the same protocols as individual user accounts.
- **Enterprise Demands when uploaded:** If a brand/tenant icon is added during upload, show the image under the demand card; otherwise, use the end user-provided icon.
- **POC Assignment:** Enterprise/Brand users are assigned specific POC's at account level for their city. Standardised backend representation as "Account Handler" and brand-side representation as Point of Contact or "POC". They do not require a separate backend access portal; they use the standard frontend.
- If multiple Keydemand team members are assigned to one brand account, only the first person assigned will be publicly displayed as the designated POC on the brand's dashboard
- **High-Value Lead (HVL) Exemption:** Day-to-day operational requirements posted by existing, onboarded enterprise brands (e.g., Raymond, H&M) are not categorized as high-value leads and do not follow the strict RM-only routing

**Enterprise Account Management Flow**
Once an individual user (Brands, Office Occupier and Managed Office Occupiers) is upgraded to Enterprise status—typically after they hit their free posting limit or have high-value/large-scale requirements—their account will be managed under these rules:

**Editing Access:** The Enterprise user retains their original login credentials and full autonomy to edit, delete, and manage their requirements and profiles. Instead of sharing one login, each representative logs into the platform independently using their own unique mobile number and One-Time Password (OTP)

**Notification:** 162 to 182 Rows - Notification Tab — [https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg](https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg)

**Handholding Approach:** Both the POC team and the enterprise user can manage the account simultaneously ("you take help or you can do it on your own").

**Profile Update:** The existing profile will be updated to an Enterprise account status (shifting from a free user to an Enterprise user). But the edit access for certain fields will be changed.
S to AB - User Profile Tab — Sheet for reference: <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=am_I1jDB3kg>

| Note (boxed table in source) |
| :- |
| Carpet Area - We would want a default carpet area for enterprise users, where the carpet area will be auto-fetched from this while they post a demand. e.g., if MCD, we already know that MCD requires a retail store (3000-4000 sft). |

**External Blackout:** Large-sized Enterprise requirements will not be visible in the relevancy feeds of external suppliers or agents; they will be exclusively accessible to the Keydemand internal team.

**Upload Demands:** Same as Individual journey.
BP to DG under the Demand Input Fields tab — <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=OkV3aO_33kg>

**Bulk Upload:** Existing enterprise brands typically share Excel files with their RM, who uploads them via the Keydemand Admin Control Panel. Enterprise requirements must be bulk uploaded centrally through the Admin panel; Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf.

**Format/Template Logic:** A "Format" acts as a template where parameters like parking and square footage remain constant, while City/Location vary. Format naming must be explicit per brand model (e.g., "Drive-thru", "Food Court"); generic names like "Format 1" are prohibited. The first mandatory identifier when adding a new format in the control panel is "Brand Name".

**Multi-User Access & Sub-user Management:** Enterprise accounts feature multi-user access capability. However, Enterprise brands/tenants cannot manage sub-users themselves; all sub-user management must be handled via the Key Demand backend admin panel.
Under multi-user, the users' uploads can be transferred from one user to another, e.g., if Himanshu, Nitesh and Pradeepa are from a Brand and they uploaded demand. All of them can see each other's demands but cannot edit. If Himanshu leaves the Brand, then we can transfer the demands of Himanshu to either Pradeepa or Nitesh.

#### Extra Field
Under all 4 users - We have an additional field in the Hamburger profile with the following information. They are hand-held by the relationship manager to manage their account. The following details can come.

#### HAMBURGER
**9. Relationship Manager:** The Relationship Manager/Team Manager (RM/TM) tab in the enterprise navbar will feature basic contact information for the assigned Keydemand representative.
**Card Details**
- Your Point of Contact(POC)
- Name
- Email
- Contact
- CTA - Call Now Button (On mobile, will lead to call action)

#### Business Rules
**1. Brand Enterprise (Retail & F&B)**

**Sources & Trigger Conditions**
- **Entry Points:** A brand enters the Enterprise journey if an individual user explicitly requests the "Enterprise Solution" from their dashboard/flow, submits a direct website enquiry, or is sourced offline by the Keydemand team.

**Onboarding Journey (Offline-to-Platform)**
- **Offline Handholding:** Enterprise onboarding can also be led by the Keydemand team offline.
- **Requirement Collection:** Space requirements and brand parameters are collected offline rather than through the self-serve platform.
- **Account & Page Creation:** The Keydemand Admin team creates the account on the platform and builds the "Brand page" on their behalf, uploading required formats, sizes, and a list of preferred locations.
- **Multi-User Setup:** The Admin team provisions multi-user access for the enterprise account if applicable.

**Enterprise Features & Capabilities**
- **Dedicated Support:** The brand is assigned a dedicated Keydemand Point of Contact or "POC".
- **AI Layer Access:** Enterprise brands receive access to advanced AI locality insights, which include competing/complementing brand analysis and other micro-market data. - Phase 2
- **Baseline Access:** The enterprise account retains all standard features available to an individual brand user.

Once their free limit is done, their profiles get converted to Enterprise profiles from Individual. The other flows remain the same. They can edit their profiles with limited fields once converted to Enterprise.

**Asset Class Exploration & Posting:**
- F&B and Retail can explore F&B, Retail, and Office classes. They can post only on their Asset Classes.

Enterprise brands can have multiple users under a single brand profile to accommodate different representatives handling different regions. The system grants these representatives "separate access"
User Profile Fields: S to W, and Y to AB <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TyqvsAHN3kg>
Brand- F&B Home Page - Updated <https://docs.google.com/document/d/1OUHdFtGTXUTWsZOG6aQ1lv57K0ttI6Ym3_7FqqfxNg4/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
Brand-Retail Home Page- Updated <https://docs.google.com/document/d/1Lx_0064buDmM6a_rjawrnDLoO1s1dMtnGlPq5-uYGLU/edit?tab=t.0#heading=h.6rkpcmxsrdvh>
**Notification:** 162 to 182 Rows — [https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg](https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg)

**2. Office Tenant Enterprise**

**Sources & Trigger Conditions**
- **Self-Selection:** An individual office tenant can trigger this journey by requesting the "Enterprise Solution" during registration or from their dashboard.
- **Automated Size Threshold Trigger:** If a tenant inputs a requirement size that exceeds a custom defined threshold (e.g., XYZ sq ft for a specific city), the system automatically escalates them to the Enterprise journey.

**Handling & Visibility Rules (The Blackout Rule)**
- **Internal Routing:** When the enterprise trigger is hit, the Keydemand regional representative is immediately notified and a central log is maintained in the KD admin dashboard.
- **Strict Agent Blackout:** Large-size enterprise requirements are **NOT** visible in external supplier or agent relevancy feeds. The requirement is exclusively accessible to the Keydemand internal team.

**Enterprise Features & Capabilities**
- **Dedicated Support:** The tenant is assigned a dedicated POC for end-to-end handholding.
- **AI Layer Access:** The tenant receives AI-generated locality reports. [Phase 2]
- **Team Access:** Multi-user access is granted if applicable, along with all features of an individual Office Tenant role

**Office & Managed Space Restrictions:**
- Exploration: Both Office Tenants and Managed Space occupiers can explore Office and Managed Space.
- Posting: Office Tenants can post Office and Managed Space (only if ticket during registration process). Managed Space occupiers can post ONLY Managed Space.

Tenant Home Page-Specific Page <https://docs.google.com/document/d/1yRm2NnqeeEoXf4gXDSB8lGBY7xnczSEHFrI886pO-QE/edit?tab=t.0#heading=h.6rkpcmxsrdvh>

**3. Managed Space Occupier (Special Rules)**

**Visibility & Routing Rules**
- **Complete External Blackout:** If a tenant explicitly opts for "Managed Space" during their requirement capture, the requirement is immediately restricted. It is visible **ONLY** to the internal Keydemand team and is strictly hidden from all external agents or independent managed space operators.

**Supply & Interaction Rules**
- **Exclusive Supply Control:** Managed Office supply is explicitly restricted on the supply side as well. It can **ONLY** be added to the platform by the Keydemand team, not by external agents or operators directly.
- **Feature Parity:** The user features and support for managed office accounts are handled similarly to those of a standard Enterprise Office Tenant user.

Managed Space Occupier-Individual Home Page-Specific Page [https://docs.google.com/document/d/1cMCQsHDnGx4qFZFhseFxIWb8-TBtU9vBImi8oBCV2AA/edit?tab=t.0#heading=h.6rkpcmxsrdvh](https://docs.google.com/document/d/1cMCQsHDnGx4qFZFhseFxIWb8-TBtU9vBImi8oBCV2AA/edit?tab=t.0#heading=h.6rkpcmxsrdvh)

### Business rules extracted
- **BR-PG1-085** — Enterprise users may independently add, edit, delete or deactivate their demands, and may request a POC's assistance; the POC can add/edit/delete/deactivate on their behalf. _(§ Business Rules: Enterprise Accounts › Demand Management)_
- **BR-PG1-086** — Team members under the same enterprise account cannot edit, delete or manage listings posted by other members (they can see each other's demands). _(§ Multi-User Access & Listings; § Multi-User Access & Sub-user Management)_
- **BR-PG1-087** — When a member leaves, their content must be transferred to another user in the brand account before the original profile can be deleted. _(§ Ownership Transfer)_
- **BR-PG1-088** — All Enterprise user types (F&B, Retail, Tenant, Managed Office) can express interest in Exclusive Projects via the CTA. _(§ Exclusive Projects)_
- **BR-PG1-089** — Enterprise users may post requirements below the threshold; threshold rules for bypassing external agent visibility remain unchanged. _(§ Requirement Thresholds)_
- **BR-PG1-090** — Enterprise account deactivation/deletion follows the same protocols as individual accounts. _(§ Account Deactivation/Deletion)_
- **BR-PG1-091** — If a brand/tenant icon is added during demand upload, show it under the demand card; otherwise use the end-user-provided icon. _(§ Enterprise Demands when uploaded)_
- **BR-PG1-092** — Enterprise/Brand users are assigned POCs at account level per city; backend label "Account Handler", brand-side label "Point of Contact"/"POC"; POCs use the standard frontend, no separate backend portal. _(§ POC Assignment)_
- **BR-PG1-093** — If several Keydemand members are assigned to one brand account, only the first assigned is publicly displayed as POC on the brand's dashboard. _(§ POC Assignment)_
- **BR-PG1-094** — Day-to-day requirements from existing onboarded enterprise brands (e.g., Raymond, H&M) are not High-Value Leads and do not follow strict RM-only routing. _(§ HVL Exemption)_
- **BR-PG1-095** — Individual users (Brands, Office Occupier, Managed Office Occupiers) are upgraded to Enterprise typically after hitting their free posting limit or having high-value/large-scale requirements; the profile is converted from Individual to Enterprise and other flows remain the same. _(§ Enterprise Account Management Flow; § 1. Brand Enterprise)_
- **BR-PG1-096** — Enterprise users keep their original login; each representative logs in independently with their own mobile number + OTP (no shared login). _(§ Editing Access)_
- **BR-PG1-097** — Enterprise notifications are defined in rows 162–182 of the Notification tab of the referenced sheet. _(§ Notification)_
- **BR-PG1-098** — POC team and the enterprise user can manage the account simultaneously. _(§ Handholding Approach)_
- **BR-PG1-099** — After conversion, edit access for certain profile fields changes (User Profile tab columns S–AB); enterprise users can edit their profiles with limited fields. _(§ Profile Update; § 1. Brand Enterprise)_
- **BR-PG1-100** — Enterprise users get a default carpet area that is auto-fetched when posting a demand (e.g., MCD → retail store 3000–4000 sft). _(§ Profile Update note)_
- **BR-PG1-101** — Large-sized enterprise requirements are not visible in external supplier/agent relevancy feeds; only the Keydemand internal team can access them. _(§ External Blackout; § 2. Strict Agent Blackout)_
- **BR-PG1-102** — Enterprise demand upload follows the Individual journey (Demand Input Fields tab columns BP–DG). _(§ Upload Demands)_
- **BR-PG1-103** — Enterprise bulk requirements (Excel shared with RM) are bulk uploaded centrally via the Keydemand Admin Control Panel; Keydemand users assigned to a brand cannot post or edit demands on that brand's behalf. _(§ Bulk Upload)_
- **BR-PG1-104** — A "Format" is a template where parameters like parking and sq ft stay constant and City/Location vary; format names must be explicit per brand model (e.g., "Drive-thru", "Food Court"); generic names like "Format 1" are prohibited; "Brand Name" is the first mandatory identifier when adding a format in the control panel. _(§ Format/Template Logic)_
- **BR-PG1-105** — Enterprise brands/tenants cannot manage sub-users themselves; sub-user management is handled only via the Keydemand backend admin panel. _(§ Multi-User Access & Sub-user Management)_
- **BR-PG1-106** — A departing member's demands can be transferred to another member of the same brand. _(§ Multi-User Access & Sub-user Management)_
- **BR-PG1-107** — All 4 enterprise user types get an extra Hamburger item "9. Relationship Manager" (RM/TM tab) showing a card "Your Point of Contact(POC)": Name, Email, Contact, CTA "Call Now" (on mobile triggers a call). _(§ Extra Field; § HAMBURGER)_
- **BR-PG1-108** — Brand enterprise entry points: user requests "Enterprise Solution" from dashboard/flow, direct website enquiry, or offline sourcing by Keydemand. _(§ 1. Sources & Trigger Conditions)_
- **BR-PG1-109** — Offline onboarding: requirements collected offline; Keydemand Admin creates the account and builds the "Brand page" (formats, sizes, preferred locations) and provisions multi-user access if applicable. _(§ 1. Onboarding Journey)_
- **BR-PG1-110** — Enterprise brands are assigned a dedicated Keydemand POC; enterprise accounts retain all standard individual brand features. _(§ 1. Enterprise Features)_
- **BR-PG1-111** — AI locality insights (competing/complementing brand analysis, micro-market data) for brands and AI-generated locality reports for tenants are Phase 2. _(§ 1 & 2 AI Layer Access)_
- **BR-PG1-112** — F&B and Retail enterprise brands can explore F&B, Retail and Office classes but post only in their own asset class. _(§ Asset Class Exploration & Posting)_
- **BR-PG1-113** — Enterprise brands can have multiple users under one brand profile (different regions), each with "separate access". _(§ 1. Brand Enterprise)_
- **BR-PG1-114** — Office tenant enterprise triggers: self-selection of "Enterprise Solution" during registration or from dashboard; or automated escalation when requirement size exceeds a custom city-specific threshold (e.g., XYZ sq ft). _(§ 2. Sources & Trigger Conditions)_
- **BR-PG1-115** — When the enterprise trigger is hit, the Keydemand regional representative is notified immediately and a central log is kept in the KD admin dashboard. _(§ 2. Internal Routing)_
- **BR-PG1-116** — Enterprise office tenants get a dedicated POC for end-to-end handholding and multi-user access if applicable, plus all individual Office Tenant features. _(§ 2. Enterprise Features)_
- **BR-PG1-117** — Office Tenants and Managed Space occupiers can explore Office and Managed Space. _(§ Office & Managed Space Restrictions)_
- **BR-PG1-118** — Office Tenants can post Office, and Managed Space only if ticked during registration; Managed Space occupiers can post ONLY Managed Space. _(§ Office & Managed Space Restrictions)_
- **BR-PG1-119** — If a tenant opts for "Managed Space" during requirement capture, the requirement is visible ONLY to the internal Keydemand team and hidden from all external agents and independent managed space operators. _(§ 3. Complete External Blackout)_
- **BR-PG1-120** — Managed Office supply can ONLY be added by the Keydemand team, not by external agents or operators. _(§ 3. Exclusive Supply Control)_
- **BR-PG1-121** — Managed office accounts get the same features/support as a standard Enterprise Office Tenant. _(§ 3. Feature Parity)_

### Open questions / ambiguities in this doc
- Internal contradiction: "POC can add/edit/delete/deactive" (Demand Management) vs "Key Demand users assigned to a brand cannot post or edit demands on that brand's behalf" (Bulk Upload).
- Hamburger tab still titled "Relationship Manager"/"RM/TM" while card text and rules switched to "POC"; HVL exemption still references "RM-only routing".
- Office tenant threshold is "XYZ sq ft" (placeholder), not defined here.
- "Under all 4 users" — the four users are not enumerated (presumably F&B, Retail, Office Tenant, Managed Space Occupier).
- Fields and notifications are delegated to an external SharePoint sheet (rows 162–182; columns S–AB, S–W & Y–AB, BP–DG) not included in this group.
- "only if ticket during registration process" — typo for "ticked".

---
## Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier  [HISTORY — superseded by Version 1.0 Enterprise - Brand(F&B, Retail), Tenant, Managed Space Occupier]
**Source:** Google Doc · ID `1lLEjGwHduI2x73Z6bTMleJIZdMVJ3kA-wBZq3fxlLFU` · owner pradeepa.pv@futuristglobal.com · modified 2026-07-01 · all sections read · no comments · read coverage: 100%

### Differences vs authoritative version
- **Demand Management:** old "They may also request assistance from a Relationship Manager (RM) for demand deletion." → new: assistance from a POC for all actions; POC can add/edit/delete/deactivate.
- **Naming:** old brand-side label "Relationship Manager" → new "Point of Contact"/"POC". Old-only rule: "\"RM\" is simply any Key Demand team member (like Krishna or Sathish) assigned to a specific brand. They do not require a separate backend access portal; they use the standard frontend". New adds per-city account-level assignment and "first assigned person shown as POC".
- **HVL Exemption** (Raymond, H&M) — new only.
- **Handholding:** "RM team" → "POC team".
- **Upload Demands (old only, full):** "Upon transitioning to enterprise status, Brands gain the ability to manage multiple sub-brands. During the upload process, users can first select the specific Brand from their portfolio before proceeding to the standard data tables used by individual Brands. This workflow ensures that demands are accurately categorised and posted under the correct brand identity." → new: "Same as Individual journey." Sheet link rtime changed (S2wM0NjH3kg → OkV3aO_33kg).
- **Bulk Upload (old, full):** "To manage large requirements for enterprise users, such as McDonald's with thousands of requirements, a bulk upload functionality, possibly via an Excel file, is required to streamline the process for the key demand team. The system should allow the upload of pre-filled data, where asset class and requirement size are constant, and only cities need to be selected for bulk posting" → new: Excel shared with RM, uploaded centrally via Admin Control Panel; KD users cannot post/edit on brand's behalf.
- **Format/Template Logic** — new only.
- **Multi-User Access (old):** "allowing multiple team members to log in and access the same account and dashboard without being restricted by specific roles" → new: sub-users cannot be self-managed; admin panel only.
- **Hamburger card:** "Your Relationship Manager" → "Your Point of Contact(POC)".
- **Brand dedicated support:** "dedicated Keydemand Relationship Manager (RM) or Transaction Manager (TM)" → "dedicated Keydemand Point of Contact or POC". Office tenant: "dedicated RM or TM" → "dedicated POC".
- **AI Layer for brands:** old had no Phase tag → new "- Phase 2".
- **Regions example (old only):** "different representatives handling different regions (e.g., East, West, North, and South)".
- **Asset Class Exploration & Posting** and **Office & Managed Space Restrictions** sections — new only.
- **Linked home page docs changed:** old Brand-F&B https://docs.google.com/document/d/1ecSsc_fejBryLf9me0KeVMVDt7FhUp-vt1dfa8jek_8/edit?tab=t.0 ; Brand-Retail https://docs.google.com/document/d/1sCmFhBF3cqiqbUpMKt5pIZGcj4SAF-p4S0nk3HqxOyI/edit?tab=t.0 ; Tenant https://docs.google.com/document/d/1IZvh3VFhois8m7Suku3_Gxg0MBHKbLfAAJ_cpFYhuq4/edit?tab=t.0 ; Managed Space Occupier https://docs.google.com/document/d/1m-GHd7uhRH9tNSi6FihHeJnaNO4aQcNzzTzTe9fSQ10/edit?tab=t.0 → all replaced by "Updated" docs in V1.0.

---
## Version 1.1 Agent Home Page/Specific Page - Registered  [AUTHORITATIVE]
**Source:** Google Doc · ID `1_-y47KOc43wYJ2ConPhogkez9KM9L5OCI3lfjiP9ruM` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-02 · sections read: Business Rules (all sub-groups), Access & Permissions, Header - NavBar, Hamburger(Profile), Body (1–10), 1 comment thread · read coverage: 100% (linked sheets/invoice PDF not opened)

### Content

#### Business Rules

**Global Navigation, Branding, & User Onboarding**
- **Non-Universal Global Navbar**: The navbar adaptively changes according to user-specific pages and is not universal.
- **"Free Listing" Navbar Option**: The "Free Listing" option is displayed in the dropdown menu strictly for unregistered (guest) users and is excluded from all other user journeys.
- **Agent Subscription Entry Point**: Shown on the navbar specifically to unregistered agents or registered agents who have not subscribed. Selecting a plan redirects the user to the subscription page; the system then confirms if they are an agent and prompts them to sign in and onboard.
- **Explore Properties Redirection**: Clicking "Explore Properties" redirects users directly to the explore listings page with the active asset class selected.
  - *Default Priority*: If Retail, F&B, and Office are selected, the system must display Office first. If no Office listings exist, Retail listings are displayed first.
  - *Transaction Restriction*: All transaction types default strictly to **"lease"**.
- **Profile Operating City UI**: On the profile setup page, the "Operating City" selection field is configured as a single-select dropdown utilizing a visual layout resembling the landing page city selector.
- **Agent Transparency**: The agent's full name must always be displayed clearly on the platform whenever they post a property or a demand.

**Property & Demand Posting Controls**
- **Managed Office Restriction**: Agents are strictly prohibited from posting managed office properties or managed office demands.
- **Permitted Asset Classes**: Agents are allowed to upload and manage listings for **Office, Retail, and F&B** properties and demands.
- **Free Listing Quota Expiry**: Free listing options are limited based on their respective asset classes and must automatically disappear from the user's dashboard once their allocated quota is exhausted.

**High-End Demands & Keydemand Exclusivity Logic**
- **High-Ticket Thresholds (HTL) Restriction**: Agents are restricted from viewing demands (posted by tenants/brands/Keydemand) that fall within city-specific high-ticket thresholds (HTLs).
  - *Matching Logic*: These high-end demands are completely hidden from the agent's external relevancy matching.
  - *Reciprocal Visibility*: Although hidden from the agent, the original poster of the high-end demand retains full visibility of the agent's matching property and can initiate contact directly.
- **Massive Demand Bypass**: If an external agent uploads a massive demand (specifically exceeding **10,000 sq ft in Bangalore**), it automatically bypasses the "Keydemand exclusive" security block, making it visible to other agents with matching properties.

**Image Visibility, Hiding, & Image Requests Logic**
- **Default Visibility**: By default, property images are visible to registered users after registration.
- **Hiding Images (Lister's Control)**: To secure listings, the property lister (Agent) can hide all property images from public view by ticking the "Do not show images" option during upload. If a listing owner selects "Do not show images", external users cannot view them. However, Keydemand teams can always see these images, overlaid with a banner reading "Hidden to others".
- **Uniform Application**: The agent cannot selectively change image preview visibility (such as setting it to blurred/masked vs. fully visible) for specific users; whatever status is set applies to all users uniformly.
- **Duplicate Click Prevention**: The system must block multiple consecutive clicks by the same user on a single property card from incrementing the view count. Instead, an **"Already requested"** message is displayed.
- **Seeker's Request Flow**:
  - **Prerequisite Login**: When a viewing user requests locked/hidden images, they must be logged in. Initiating this request automatically shares their phone number with the listing owner.
  - **Notification & Action**: The supplying listing agent gets notified of the request, reviews the seeker's profile, and clicks to Approve or Reject.
  - **No Expiration**: Image requests and status changes do not expire (the 72-hour nullification rule is not applied to image requests); requests remain active on the profile until approved.
- **Image Request Status & Card Display States**:
  - **Pending State**: The status badge on the card displays as "Pending".
  - **Accepted State**: The locked images are revealed strictly to the requesting user. Upon owner approval, the listing images and the owner's phone number both become visible. The requester receives the notification: *"Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further."* with a CTA to view that specific listing with images.
  - **Rejected State**: Images remain hidden, and the card displays a CTA button for the requesting user. The requester receives the notification: *"Request for viewing images has been rejected by the agent."* with a CTA to view the listing without images.

**Outbound Phone Number Requests (Interest Requested)**
- **Request & Click Tracking**: Outbound requests capture Name, Mobile Number, Property/Demand/Project ID, User Type, Timestamp, Status (Accepted, Pending, Rejected), and Contact Details (visible only if approved).
- **Office Exception**: The manual accept/reject option applies only to Brands. Office cards feature a direct "View Phone number" CTA on demand cards instead.
- **Free Lifetime Clicks Cap**: Non-subscribed agents are restricted to **5 free lifetime clicks/requests** for contact numbers.
  - *Rejection Penalty*: If a brand rejects an agent's request to view their contact number, that request still counts as one of the agent's 5 free lifetime clicks.
  - *Subscription Paywall*: Attempting a 6th request triggers a paywall prompting them to subscribe with the message: *"Kindly subscribe to continue"*.
- **Supplier SLA Time Limit**: The supplying brand has **4 working days** (excluding Saturdays and Sundays) to see and either accept or reject the request.
- **Expired Status**: Any request left unanswered by the brand after **72 hours** is automatically dropped, nullified, and marked under "Rejected" status.
- **Outbound Notifications (Sent to Requesting Agent)**:
  - *Approved*: *"Your request to view phone number has been approved, kindly connect with them on "*.
  - *Rejected*: *"Your request to view number and connect with the brand has been disallowed by the brand"*.
  - *Nullified/Expired*: *"Your request to view number and connect with the brand has been unanswered by the brand and thus dropped"*.

**Live Agent Dashboard & Relevancy Matching**
- **Live Dashboard Metrics**: Displays a live, impromptu dashboard summarizing the agent's active footprint:
  - **Demand Listings Summary**: Total number of the agent's own demands.
  - **Property Listings Summary**: Total number of the agent's own properties.
  - **Image Requests Summary**: Total count of inbound image requests received by the agent.
- **My Listings Filters & Sorting**:
  - *Properties & Demands search filters*: Search by PropertyId, Title, Location, Asset Class, City, and Status (Active/Deactivated).
  - *Sorting rules*: Sort by newest first, most leads, and recent matches. Unopened/newest leads must display first on the card views.
- **New Relevancy Highlights**:
  - *Demand & Property Listings Order*: Listings are ordered newest first, but any listings with active relevancies are automatically pushed to the top and flagged with a red dot notification.
  - *Demand & Property Relevancy Tabs*: When a new property-to-demand or demand-to-property match is found, a red dot notification appears over the count. Clicking it displays the latest matched listings at the top of the feed, highlighted with a red dot.
- **Inbound Image Requests Received Management**:
  - Categorized by status badges: Pending, Accepted, or Rejected.
  - Filters: Newest First, Asset Class, and Calendar.
  - Supports tracking requests across user types: All Users, F&B Brand, Retail Brand, Agent, Tenant, and Keydemand Team.
- **Outbound Image Requests (Requested by Agent)**:
  - Summarizes sent requests.
  - *Fields tracked*: Property ID (clickable and redirectable to the listing), Asset Class, City, Location, Transaction Type, Posted By, and Date Requested.
  - *Actionable CTAs*: Shows "View Images" (listing with images) if Accepted, "Pending" if unanswered, and "View Listing without Images" if Rejected.
- **Favourites Folder**: Separates favorited properties and projects, displaying them as card decks.

**Project Interactions**
- **Project Inquiries & Soft Onboarding**: Agents can submit interest in Exclusive projects or general projects via the project card CTA.
  - *Logged-Out Guests*: Submitting interest triggers an enquiry form containing Name, User Type, Mobile, and Email, which acts as a soft onboarding registration.
  - *Logged-In Users*: Clicking "Show Interest" automatically transmits pre-filled details (Name, User Type, Mobile Number, City, Email) directly as an official enquiry.
  - *Interest Success State*: Displays the confirmation message: *"Thank you for showing interest"*.
- **"Shown Interest" Sticky Recall**: Once an agent has shown interest in a project, the "Show Interest" button on the project details page updates with a historic timestamp: *"You have already shown interest on so and so date"*. This interaction does not create a separate dashboard tab.

**Account Lifecycle (Deactivation, Deletion & Reactivation)**
- **Account Deletion (Manual Admin Flow)**:
  - Agents submit a deletion form located under the Profile page.
  - Upon receipt of the form, the Keydemand team must manually reach out to the agent to finalize account deletion.
- **Account Deactivation**:
  - Deactivation is located under the Profile page and requires confirmation via a pop-up dialogue box.
  - Deactivating your profile completely pauses activity: all active property/demand listings are immediately hidden from public view, and the agent is marked inactive on the platform.
  - The active subscription is suspended upon deactivation.
- **Account Reactivation**:
  - Agents can reactivate their profile at any time by clicking the "Reactivate account" button on the home page when they return.
    - listings reactivation rule*: Reactivating the account does not auto-publish listings; the agent must manually activate each of their deactivated property and demand listings.
  - *Subscription Recovery Period*: If the agent reactivates **within** the original subscription timeframe, their active subscription benefits automatically resume for the remainder of their paid days.
  - *Registered/Unsubscribed Default*: If they reactivate **outside** of their original subscription window, they are reverted to a general registered (non-subscribed) user and must go through the subscription flow again or subscribe upon clicking any paid CTA.

**Subscription, Billing, & Notifications**

1. Subscription Structure & Posting Constraints
- **Target Audience**: Subscriptions are **strictly and exclusively for Agents**.
- **Asset Class Bundles**: Asset classes are divided into two distinct bundles: **(Retail & F&B)** and **(Office)**.
- **Subscribed Privileges**: Active subscribers receive **unlimited listings, unlimited contact requests, full dashboard access, and WhatsApp alerts**.
- **Dynamic Posting Controls**: While posting a property or demand, the dropdown menus are dynamically restricted. The agent is **only shown the specific cities and asset classes they have actively paid for** (e.g., if they only subscribe to Mumbai, only Mumbai will be selectable in the city dropdown).

2. Billing Cycles & Mid-Cycle Proration
- **30-Day Cycle**: Billing runs on a **regular monthly 30-day cycle**, auto-charging on the same date each month from the initial signup date.
- **Mid-Cycle Additions**: Agents can add new cities or asset classes mid-month. Mid-month additions are charged a **prorated amount immediately** to cover the remaining days of the current cycle.
- **City Cancellations**: Agents can cancel individual cities mid-cycle, but **no refunds** are issued for those cancellations.
- **The Mid-Cycle Example (Himanshu)**:
  - **10 June**: Himanshu subscribes to 1 city + 1 asset class. Next billing date: 10 July.
  - **15 July (Mid-Cycle)**: He adds a second city. He is immediately charged:
    1. The full monthly rate for his first city/asset class (covering 10 July to 9 August).
    2. A prorated rate for the second city covering the remaining 25 days of the cycle (until 9 August).
  - **9 August onwards**: Both cities are bundled and billed together on his regular monthly cycle.

3. Subscription Pricing Matrix
Pricing is calculated **per month, per asset class** based on location type:

| Location type | Price |
|---|---|
| Metro Cities | 1,000 RS |
| Non-Metro Cities | 750 RS |
| Rest of India (excluding Metro/Non-Metro) | 1,000 RS |
| PAN India (all cities across India) | 5,000 RS |
| Combined Bundle (Retail + F&B **and** Office) — Metro Cities | 2,000 RS per city |
| Combined Bundle (Retail + F&B **and** Office) — Non-Metro Cities | 1,500 RS per city |

**4. Subscription Screen & Payments**
The subscription dashboard must feature the following interactive options and showcase clear explanatory pricing:
1. **My Plan**
2. **Next Renewal Date**
3. **Cancel Membership**
4. **Renew Membership**
5. **Customize Your Plan**
- **Failed Auto-Payments**: If an automatic monthly payment fails, a dedicated **"Renew"** button will dynamically render on the user's subscription page to let them manually complete the payment.

**5. Cancellation, Expiry, & The 3-Month Grace Period**
- **Cancellation Timeline**: Members can cancel anytime from their settings. Auto-renewal stops immediately, but **premium access remains active until the current billing cycle ends**. The cancellation officially registers for the *next* billing month (not the current paid month).
- **3-Month Grace Period**: Once a subscription lapses or is cancelled, the listings stay active on the platform for **exactly 3 months**. During this period, the agent can view incoming leads and relevancy matches, but **cannot connect with new users** unless they resubscribe.
- **Deactivation**: If the subscription remains unpaid after 3 months of non-renewal, the account is marked "Expired", and **all listings are automatically deactivated**.
- **Data Safety**: Active listings data is kept perfectly safe during deactivation. To bring listings back live, the user must resubscribe and then **manually select which listings they want to reactivate**.

**6. Returning User Reactivation Flow**
- **Reactivate Button**: Returning users will see a **"Reactivate account"** button directly on the homepage.
- **Unsubscribed Default**: Upon clicking reactivate, they are marked as a **"registered but not subscribed user"**.
- **CTA Paywall**: The reactivated user must complete the subscription flow, or they will be immediately prompted to subscribe the moment they attempt any paid call-to-action (CTA) activity on the platform.
- **Subscription Dashboard**: Dedicated dashboard tab with sub-views for "My Plan", "Next Renewal Date", "Cancel Membership", "Renew Membership", and "Customize your plan" (the latter is restricted to registered, non-subscribed agents).
- **Premium Member Rebranding (Overriding Nomenclature)**:
  - *Trial State*: Unsubscribed agents see a **"Trial Plan"** label on their dashboards with the free listing offer.
  - *Paid State*: Subscribed agents are tagged as **"Pro Member"** (this premium branding replaces outdated labels like "Broker" or "Agent").
- **Invoicing**: The platform must automatically generate and provide GST invoices directly to agents upon successful subscription.
- **Native Payment Integration**: Razorpay payment screens must be embedded directly on a native subscription page, fully replacing third-party API pop-ups.
- **WhatsApp Notification Rules**:
  - Agents can toggle notifications on or off via a dashboard setting.
  - When an agent lists a property/demand, the platform automatically texts a confirmation to the agent containing the location details and a PDF download link of their listing.
  - *Transactional Message Block*: Only promotional updates can be opted out of. Transactional messages (e.g., matching relevancies, inbound leads, interest alerts, phone number inquiries) cannot be disabled.
- **Help Desk**: Standard contact routes to contact@keydemand.in along with a self-help chatbot utilizing default website FAQs.

**Access & Permissions for each type of Agent**
① Non-registered · ② Registered, not subscribed · ③ Subscribed · ④ Expired

| Capability | ① Non-registered | ② Registered, not subscribed | ③ Subscribed | ④ Expired | Notes |
|---|---|---|---|---|---|
| Access landing page | Yes | Yes | Yes | Yes | |
| Explore properties | Yes (limited) | Yes | Yes | Yes | Access for ① is limited |
| Open property page | — | Yes | Yes | — | |
| Open project page | Yes | Yes | Yes | Yes | |
| CTA to contact (view number) | — | Yes (5 requests max) | Yes (unlimited) | — | |
| Subscribe now | Yes | Yes | — | Yes | |
| Dashboard | — | Yes | Yes | Yes (may be read-only) | |
| Profile | — | Yes | Yes | Yes | |
| Post property/demand | — | Yes (1 listing max) | Yes (unlimited) | — | |
| WhatsApp alerts | — | Yes | Yes | Yes | Provides inbound leads and a summary |

**A Short summary of the above**
- Non-registered: Agents who have never registered can access the landing page, open project pages, and explore properties, though their access is limited meaning the CTA will tell them to register or subscribe.
- Registered — not subscribed: An agent who is registered but has no active subscription receives 1 free listing and 5 contact requests, gains access to the property page, and will be shown a prompt to subscribe.
- Subscribed: An agent with an active subscription, defined by city and asset class, is granted unlimited listings and contact requests, full dashboard access, and WhatsApp alerts.
- Expired subscription: When an agent's subscription lapses, they have no active actions, and their account and listings will be deactivated after 3 months of nonrenewal.

For Agents - The name must be displayed when they post a property or demand

#### Header - NavBar
1. **Keydemand logo**
2. **Agent Subscription** - To be shown to non registered, registered agent but not subscribed. It will open the subscription page where user can select plans and subscribe. Once their plan is selected, the user will be asked if they are an agent, and only then will they be prompted to sign in and confirm to get onboarded.
   Invoice pdf example: [https://propvantageproptech-my.sharepoint.com/:i:/g/personal/himanshu_keydemand_in/IQCdv3TM1wvCQaoKJpxeqDVGAYNkTp1DCjnz0AYadc9tUko?e=r8L0bk](https://propvantageproptech-my.sharepoint.com/:i:/g/personal/himanshu_keydemand_in/IQCdv3TM1wvCQaoKJpxeqDVGAYNkTp1DCjnz0AYadc9tUko?e=r8L0bk) ; https://acrobat.adobe.com/id/urn:aaid:sc:AP:64a69ad3-99e7-4c9c-896b-b71da9128a4f
3. **Explore Properties:** Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show office first and if there is no office then to show retail property first. All transcation type would be lease
4. **Post property** - They cannot add a managed office and can add all other types of properties like Office, Retail and F&B. To secure listings, the property lister (Agent) can hide all property images from public view by ticking the "Do not show images" option during upload.
   A to BB - Property & Project Input Fields <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=LDLDXwzD3kg&activeCell=%27Property%20%26%20Project%20Input%20Fields%27!A1>
5. **Post demand** - They cannot add a managed office demand and can add all other types of properties like Office, Retail and F&B
   A to BB - Demand Input Fields Tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=LDLDXwzD3kg&activeCell=%27Demand%20Input%20Fields%27!A1>
6. **Notification** - 1 to 52 Rows [https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg&activeCell=%27Notification%27!A1](https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=TaKqyyuW3kg&activeCell=%27Notification%27!A1)

#### Hamburger(Profile)
**1. Dashboard**
The following are the fields that come under My Properties and My Demands under All Listing
- My Properties filters that can come: Search - PropertyId, title, location; Asset Class; City; Status-Active/Deactivated; Sort by - Newest first, most leads, recent matches. Newest and unopened leads to be shown first as cards
- My Demands filters that can come: Search - PropertyId, title, location; Asset Class; City; Status-Active/Deactivated; Sort by - Newest first, most leads, recent matches

Fields: **Overview**, **Properties**, **Demands**, **Leads**, **Enquiries**
- Overview - Has separate headers where clicking on each takes us to Properties, Demands, Leads, Enquiries along with Notifications are the bottom where clicking them takes us to each place.
- Properties - Has a list of all properties
- Demands - Has a list of all demands
- Leads - Has Image requests - received from brands and tenants; Phone number viewed - Shows what agent has seen of brands, tenants and Keydemand team
- Enquiries - has the following
  - Projects enquired - which has the list of projects that the agent has enquired
  - Numbers you have viewed - refers to the numbers that the agent has viewed for brands, tenants and Keydemand members
  - Contacts Requests - will have all the requests done to brands for their listing
  - Images Requested - will have all the requests done to agents, Keydemand team

**2. Profile** - Details will come from EPIC 2, US -006. A to E in User Profile Tab <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=LDLDXwzD3kg&activeCell=%27User%20Profile%27!A1>
Under profile the delete account and deactivate account button is to be placed
- **Delete Account**: It will be a form that he will fill and then we shall receive his deletion request and once we receive that. We will reach out to the agent and delete the account for him
- **Deactivate Account**: Requires confirmation via a dialog box. The account remains the same, but the subscription stops and cannot be reactivated. Deactivating your account pauses everything.
  All your listings will be hidden, and you won't appear active on the platform. You can reactivate anytime — a "Reactivate account" button will be available on your home page when you return.
  Once reactivated, your account will be marked as registered but not subscribed.
  Note: If you deactivate during an active subscription, your subscription benefits will resume automatically — as long as you reactivate within your original subscription period.
  If they re-activate outside the subscription flow then they will be a general registered user and has to go through the subscription process again or asked for a subscription if they do any CTA activity.

**3. Saved**
- **3.1 Properties** - Properties chosen as Favourites will appear here as cards.
- **3.2 Projects** - Projects chosen as Favourites will appear here as cards.
- 3.3 Demands - Demands chosen as Favourites will appear here as cards.

**4. Alerts & Notifications**
Notifications with redirections
- **All**
- **Unread**
- **WhatsApp** - About Notifications, if they want to stop receiving messages. "Do you wish to receive Notifications?" A toggle button.
  New properties/demands added by them will be sent as a Whatsapp to self informing that they have added a new property in xyz location and here is a PDF for them to download.
  Only promotional messages can be stopped, they can't stop transactional messages. Eg messages related to relevancy, leads, interest received, phone number enquiries done, etc
- **Help** - contact@keydemand.in
- **FAQ** - With Chatbot - Self Help - For now, take from website

**5. Subscription**
- 5.1 My plan --- Epic 004 - US -010A
- 5.2 Next renewal date - Epic 004 - US -011
- 5.3 Cancel membership - Epic 004 - US -012
- 5.4 Renew membership - Epic 004 - US -012
- 5.5 Customize your plan - Epic 004 - US -010A - Only if the user is registered and not subscribed

**6. Logout**

#### Body
**1. Search functionality** - Same as in Landing Page

**2. Dashboard**
It must be a live, impromptu dashboard with all the necessary information about **our listings.**

**2.1 Demand Listings** - A summary of the total number of the agent's own demands
Demand Listings - They can see their own demands. This would show the total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
Demand Card: Size of, Demand Id, Asset Class, TransactionType, City, Location, Relevancy, Leads, Date Posted, CTA - Edit, Deactivate, Delete

**2.2 Property Listings** - A summary of the total number of the agent's own property listings
This would show total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
Property Card: Size of, Property Id, Asset Class, TransactionType, City, Location, Relevancy, Leads, Date Posted, Posted by -
> [Comment AAAB9ERYvBc — RESOLVED, Pradeepa PV, anchored on 2.2 through Image request requested]: "@himanshu@keydemand.in Please check this part. Must the rejections be a part of the Notifications too,"

**2.3 Leads**
**Phone number viewed** - Number of users who have viewed the agent's phone number (Interest Received - Inbound)
Data Fields:
- Name
- Mobile Number
- Property/Demand/Project Id
- User-Type - I am a (F&B/Retail/Agent/Tenant/Managed Space Occupier/Managed Space Operator/Keydemand team)
- Timestamp
- Card - clicking on this takes us to the detailed page: Property/Demand Id, Asset Class, Name of property, City, Location, Quoted Price

Business Rule
- Viewing a phone number is a passive event that requires no approval action.
- **"If you view my number, I find out it was you — and I get your number too. It's a two-way reveal triggered by a one-way action. The viewer initiates, but both parties end up with each other's contact details, and the lister is actively notified via WhatsApp. Name, User type (Brand, Agent etc), Mobile number & which property/demand did you view the number from.**
- The lead should be marked as "Unread" until it is clicked.

**Image request** - The total *number* of image requests received by the agent. The listing agent must approve the request before the viewing agent can see the images.
Image Request Data Fields — the following data fields are used to track each image request in the "Image Requests Management" section (under Interest Received and Interest Requested):
- Image Requests Received: XX Pending, XX Accepted, XX Rejected
- Filters - Newest First; Filters - Asset Class; Filter - Calender
- User Type: All Users, F&B Brand, Retail Brand, Agent, Tenant, Keydemand Team
- Image request fields: Name, User Type, Company Name/User Name, Project/Property Id, City, Location, Date Requested, Status Badge (Accepted, Pending, Rejected), Action Buttons (Approve / Reject)

Business Rules and User Flow
- Justification for Hiding Images: Certain agents may not showcase images of the property they have uploaded; this is similar to competitors (Magic bricks).
- Default Visibility: Post-registration images of properties will be shown. However, if an Agent has hidden images, users must request to view them.
- Hiding Mechanism: The property lister (Agent) can hide a previously uploaded property image from public view. Doing so hides all images in that specific listing.
- Image Preview Status: The Agent cannot change the status of the image preview (e.g., set to blurred/masked or fully visible) for specific users; it will be applied to all users.
- Request Time Limit: A request or status change does not expire after a set time limit (the 72-hour nullification rule is not applied); the request remains active in the profile until it is approved.
- Seeker's Journey (Requesting Agent): Views a property listing with a hidden image → Clicks on the "request for images" Call-to-Action (CTA) → Gets approved and notified → Can view the image.
- Property Owner's Journey (Supplying Agent): Uploads a property with images hidden → Gets notified when another user views an image request → Reviews the seeker's profile → Approves or rejects the request.
- Notification on Acceptance (to Requester): Message: "Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further." CTA: (View listing with images) (That specific listing)
- Notification on Rejection (to Requester): Message: "Request for viewing images has been rejected by the agent." CTA: (view listing without images)

**2.4 Enquiries**
**Project Interested** - Projects that the agent has shown interest in. Whenever the user shows interest, registered or logged in - that recall should be mentioned on the CTA is You have already shown interest on so and so date. Clicking on this slider opens: Name of project, Project Id, Posted by, Location, City, Possession, Listed on; Clicking on - View Listing opens the detailed page

**Numbers viewed** - Numbers viewed on other agent, Keydemand team listings, brand/office tenant
- Name, Mobile Number, Demand id, User-Type - I am a (F&B/Retail/Agent/Tenant//Keydemand team), Timestamp
- Card - clicking on this takes us to the detailed page: Property/Demand Id, Asset Class, Name of property, City, Location, Quoted Price, CTA - Call

**Contacts requested** - Number of phone numbers asked on other listings (Interest Requested - Outbound)
Data Fields: Name; Mobile Number; Property/Demand/Project Id; User-Type (F&B/Retail/Agent/Tenant/Managed Space Occupier/Managed Space Operator/Keydemand team); Timestamp; Status (Accepted, Pending, Rejected); Contact Details (Visible *only* if approved)
Business Rules
- Accept/Reject applies only to Brands and not to Office as their CTA is Request Contact for demand cards
- Free Clicks Limit: If a request for a contact number is rejected by the brand, it still counts as one of the user's 5 free lifetime clicks (based on the CTA clicked).
- Approval/Rejection Time Limit: The brand/supplier has 4 working days from the date/time the request was sent to see/accept/reject the request (logic building is used to skip Saturday and Sunday).
- Tracking Status: The Agent's outbound request dashboard must track status as Accepted, Pending, or Rejected.
- Expired Status: Expired requests (unanswered after 72 hours) will fall under the Rejected status.
- Subscription Limit: If an Agent reaches the 5-request limit and attempts a 6th request, the Call-to-Action (CTA) will prompt them to subscribe with the message: "Kindly subscribe to continue".
Notifications (Sent to Requester)
- Accepted by the Brand: "Your request to view <Brand Name> phone number has been approved, kindly connect with them on <number>".
- Rejected by the Brand: "Your request to view number and connect with the brand has been disallowed by the brand".
- Nullified/Expired (No response within 72 hours): "Your request to view number and connect with the brand has been unanswered by the brand and thus dropped"

**Image request requested** > The total *number* of image requests sent by the agent to see similar properties. (Image Interest Requested - Outbound)
Image requested fields: Property Id - must be clickable and redirectable; Asset Class; City; Location; Transaction Type; Posted By; Date Requested
- If Request Accepted — Label: Accepted; CTA View Images - This will show the Property listing with images
- Label: Pending
- Label: Rejected; CTA View Listing without Images - This will show the Property listing without images

**Property Relevancy** - Listing presented to the agent's demand. Any new relevancy should be highlighted or notification mark should appear with a red dot over the number and once the agent clicks on it, they should be able to view latest one on top marked with the red dot as latest or highlighted as latest.
**Demand Relevancy** - Demands presented to agent's property. Any new relevancy should be highlighted, or a notification mark should appear with a red dot over the number, and once the agent clicks on it, they should be able to view the latest one on top, marked with the red dot as the latest or highlighted as the latest.

**Dashboard Slider Interactions**
- **Leads Received**: To see a list of leads received, click "Leads Received." The slider will open and display the respective received leads for properties and demands. When clicked on number of leads for demands, then it opens 2 tabs. It consists of contact enquiries and image requests. For contact enquiries, it opens 2 tabs, just image requests and phone numbers viewed.
  - **Phone numbers viewed:** To see a list of phone numbers click "Phone numbers viewed" The slider will open and display the numbers viewed.
  - **Image Requests**: To see a list of image requests, click "Image Requests." The slider will open and display the image requests. Can accept or reject requests.
- **Enquiries have Projects Enquired, Numbers viewed, Contacts Requested, Images Requests**.
  - **Projects Enquired:** To see a list of projects enquired, click "Projects Enquired." The slider will open and display the projects enquired.
  - **Numbers Viewed:** It will open numbers viewed of agent, keydemand team and tenant.
  - **Contacts Requested**: To see a list of contacts requested, click "Contacts Requested."
  - **Images Requested**: To see a list of images requested, click "Images Requested." The slider will open and display the images requested.
- **Your Listing - Properties**: To see the full list of your properties, click "Your Listing - Properties." The slider will open and display the list of properties.
- **Your Listing - Demands**: To see the full list of your demands, click "Your Listing - Demands." The slider will open and display the list of demands.

The following are the same sections as on the Landing page. CTA's will change as the user is registered and logged in.
The banner on the landing page need to be auto carousel for 5s -
- Header: Title, Sub Header
- Explore Property
- City * (Mandatory) — Drop Down — Metro cities followed by All cities in India (A-Z)
- Asset Class: Office, Retail, F&B
- Transaction Type: Lease, Sales
- Search Bar: Enter Locality/Search - Multi-use search bar (Should have Google location), Project name, property name.
When a user searches for a city by name, it should display the city's properties and projects.
- Search CTA: Blank state, Filtered state
When the user comes in the next time, his previous searches, aka recent searches and new searches, are shown
- **Recent Searches**: City, Location, Transaction Type
- **New Properties**: Property/Property Name, Store Type, Location, City, Carpet Area, Quoted Rent

**3. Premium Projects** — **Agents can show interest by filling in the CTA**. CTA - Show Interest - A pre-filled form that can go from his profile: Name, Mobile, Email, User Type. Message shown: Thank you for showing interest
**4. Exclusive projects** — **Agents can show interest by filling in the CTA**. CTA - Show Interest - pre-filled form: Name, Mobile, Email, User Type. Message shown: Thank you for showing interest
**5. Explore Properties in <city>** — CTA - View Phone Number, where the number will be shown
**6. Explore Projects in <city>** — CTA - Show Interest - pre-filled form: Name, Mobile, Email, User Type. Message shown: Thank you for showing interest
**7. Top cluster in <city>** - Hidden for Now - Phase 2
**8. Explore real estate in popular Cities** — CTA - Explore - Opens all properties/projects as per the city chosen
**9. About Keydemand** - Multiple videos only about Agent functionality
- CTA
  - Request a Callback - To prevent abandonment, this button only captures the mobile number; name and email must not be mandatory.
  - Form Fields: Name, Email, Phone number, I am - User types, Message
**10. Footer** — Same as in the landing page

### Business rules extracted
- **BR-PG1-122** — The agent navbar is not universal; it changes per user-specific page. _(§ Global Navigation)_
- **BR-PG1-123** — The "Free Listing" navbar dropdown option is shown only to unregistered (guest) users and excluded from all other journeys. _(§ Global Navigation)_
- **BR-PG1-124** — Agent Subscription navbar item is shown only to unregistered agents or registered-but-unsubscribed agents; plan selection → subscription page → confirm agent → sign in and onboard. _(§ Global Navigation; § NavBar 2)_
- **BR-PG1-125** — Explore Properties redirects to the explore page with the active asset class; if Retail, F&B and Office are selected show Office first, else Retail first; transaction type defaults strictly to "lease". _(§ Global Navigation; § NavBar 3)_
- **BR-PG1-126** — Profile "Operating City" is a single-select dropdown styled like the landing page city selector. _(§ Global Navigation)_
- **BR-PG1-127** — The agent's full name must be displayed whenever they post a property or demand. _(§ Global Navigation; § Access summary)_
- **BR-PG1-128** — Agents cannot post managed office properties or demands; they may post Office, Retail and F&B. _(§ Posting Controls; § NavBar 4–5)_
- **BR-PG1-129** — Free listing options are limited per asset class and disappear from the dashboard once the quota is exhausted. _(§ Posting Controls)_
- **BR-PG1-130** — Agents cannot view demands (by tenants/brands/Keydemand) within city-specific high-ticket thresholds (HTLs); these are hidden from agent relevancy matching. _(§ High-End Demands)_
- **BR-PG1-131** — The poster of a high-end demand still sees the agent's matching property and can initiate contact. _(§ High-End Demands)_
- **BR-PG1-132** — A demand uploaded by an external agent exceeding 10,000 sq ft in Bangalore bypasses the "Keydemand exclusive" block and is visible to other agents with matching properties. _(§ High-End Demands)_
- **BR-PG1-133** — Property images are visible to registered users by default after registration. _(§ Image Visibility)_
- **BR-PG1-134** — Ticking "Do not show images" on upload hides all images of that listing from external users; Keydemand teams always see them with a "Hidden to others" banner overlay. _(§ Image Visibility)_
- **BR-PG1-135** — Image visibility status applies uniformly to all users; no per-user blurred/masked/visible setting. _(§ Image Visibility)_
- **BR-PG1-136** — Repeated consecutive clicks by the same user on a single property card must not increment the view count; show "Already requested". _(§ Image Visibility)_
- **BR-PG1-137** — Requesting hidden images requires login and automatically shares the requester's phone number with the listing owner. _(§ Seeker's Request Flow)_
- **BR-PG1-138** — The listing agent is notified of an image request, reviews the seeker's profile and Approves or Rejects. _(§ Seeker's Request Flow)_
- **BR-PG1-139** — Image requests never expire (72-hour nullification does not apply); they remain active until approved. _(§ Seeker's Request Flow; § 2.3)_
- **BR-PG1-140** — Image request card states: Pending → badge "Pending"; Accepted → images revealed only to the requester plus owner's phone number visible, notification "Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further." with CTA view listing with images; Rejected → images stay hidden, CTA button shown, notification "Request for viewing images has been rejected by the agent." with CTA view listing without images. _(§ Image Request Status)_
- **BR-PG1-141** — Outbound phone-number requests capture Name, Mobile Number, Property/Demand/Project ID, User Type, Timestamp, Status (Accepted/Pending/Rejected), and Contact Details (only if approved). _(§ Outbound Phone Number Requests; § Contacts requested)_
- **BR-PG1-142** — Manual accept/reject of phone-number requests applies only to Brands; Office demand cards have a direct "View Phone number" CTA. _(§ Office Exception)_
- **BR-PG1-143** — Non-subscribed agents get 5 free lifetime contact clicks/requests; a brand-rejected request still counts toward the 5. _(§ Free Lifetime Clicks Cap)_
- **BR-PG1-144** — A 6th contact request by a non-subscribed agent triggers a paywall with "Kindly subscribe to continue". _(§ Free Lifetime Clicks Cap)_
- **BR-PG1-145** — The supplying brand has 4 working days (excluding Saturday and Sunday) to accept or reject a contact request. _(§ Supplier SLA)_
- **BR-PG1-146** — A contact request unanswered after 72 hours is automatically dropped/nullified and shown as "Rejected". _(§ Expired Status)_
- **BR-PG1-147** — Outbound notifications to requesting agent: Approved "Your request to view <Brand Name> phone number has been approved, kindly connect with them on <number>"; Rejected "Your request to view number and connect with the brand has been disallowed by the brand"; Expired "Your request to view number and connect with the brand has been unanswered by the brand and thus dropped". _(§ Outbound Notifications; § Contacts requested)_
- **BR-PG1-148** — Live dashboard shows Demand Listings total, Property Listings total, and inbound Image Requests total. _(§ Live Dashboard Metrics)_
- **BR-PG1-149** — My Listings filters: search by PropertyId/Title/Location; Asset Class; City; Status (Active/Deactivated); sort by newest first, most leads, recent matches; unopened/newest leads first. _(§ My Listings Filters; § Hamburger 1)_
- **BR-PG1-150** — Listings ordered newest first, but listings with active relevancies are pushed to the top with a red dot. _(§ New Relevancy Highlights)_
- **BR-PG1-151** — New property↔demand matches show a red dot over the count; clicking shows latest matches on top, highlighted with a red dot. _(§ New Relevancy Highlights; § Property/Demand Relevancy)_
- **BR-PG1-152** — Inbound image requests: status badges Pending/Accepted/Rejected (counts "XX Pending, XX Accepted, XX Rejected"); filters Newest First, Asset Class, Calendar; user type filter All Users, F&B Brand, Retail Brand, Agent, Tenant, Keydemand Team; fields Name, User Type, Company Name/User Name, Project/Property Id, City, Location, Date Requested, Status Badge, Approve/Reject buttons. _(§ Inbound Image Requests; § 2.3)_
- **BR-PG1-153** — Outbound image requests track Property ID (clickable/redirectable), Asset Class, City, Location, Transaction Type, Posted By, Date Requested; CTAs: Accepted → "View Images", Pending → "Pending", Rejected → "View Listing without Images". _(§ Outbound Image Requests; § Image request requested)_
- **BR-PG1-154** — Favourites ("Saved") separate Properties, Projects and Demands, shown as cards. _(§ Favourites Folder; § Hamburger 3)_
- **BR-PG1-155** — Logged-out guests showing interest in a project fill an enquiry form (Name, User Type, Mobile, Email) which is a soft onboarding registration. _(§ Project Interactions)_
- **BR-PG1-156** — Logged-in Show Interest sends pre-filled Name, User Type, Mobile Number, City, Email as an official enquiry; success message "Thank you for showing interest". _(§ Project Interactions; § Body 3–6)_
- **BR-PG1-157** — After showing interest, the project's button shows "You have already shown interest on so and so date"; this does not create a separate dashboard tab. _(§ "Shown Interest" Sticky Recall)_
- **BR-PG1-158** — Account deletion: agent submits a deletion form under Profile; Keydemand team manually contacts the agent to finalise deletion. _(§ Account Lifecycle; § Hamburger 2)_
- **BR-PG1-159** — Deactivation is under Profile with a confirmation pop-up; it hides all active listings immediately, marks the agent inactive and suspends the active subscription. _(§ Account Lifecycle)_
- **BR-PG1-160** — A "Reactivate account" button is shown on the home page to returning deactivated agents; reactivation does not auto-publish listings — each must be manually reactivated. _(§ Account Reactivation)_
- **BR-PG1-161** — Reactivating within the original subscription period resumes subscription benefits for the remaining paid days; reactivating outside it reverts the agent to registered-not-subscribed, prompted to subscribe on any paid CTA. _(§ Account Reactivation; § 6)_
- **BR-PG1-162** — Subscriptions are exclusively for Agents. _(§ Subscription Structure)_
- **BR-PG1-163** — Asset classes are sold in two bundles: (Retail & F&B) and (Office). _(§ Subscription Structure)_
- **BR-PG1-164** — Subscribers get unlimited listings, unlimited contact requests, full dashboard access and WhatsApp alerts. _(§ Subscription Structure)_
- **BR-PG1-165** — When posting, city and asset class dropdowns show only the cities/asset classes the agent has paid for. _(§ Dynamic Posting Controls)_
- **BR-PG1-166** — Billing is a monthly 30-day cycle auto-charged on the same date each month from signup. _(§ Billing Cycles)_
- **BR-PG1-167** — Mid-cycle additions of cities/asset classes are charged a prorated amount immediately for the remaining days; from the next cycle they are billed together (Himanshu example: 10 June signup; 15 July add city → full rate 10 Jul–9 Aug for city 1 + 25-day prorate for city 2; bundled from 9 Aug). _(§ Mid-Cycle Proration)_
- **BR-PG1-168** — Individual cities can be cancelled mid-cycle with no refund. _(§ City Cancellations)_
- **BR-PG1-169** — Pricing per month per asset class: Metro 1,000 RS; Non-Metro 750 RS; Rest of India 1,000 RS; PAN India 5,000 RS; combined (Retail + F&B and Office) Metro 2,000 RS/city, Non-Metro 1,500 RS/city. _(§ Pricing Matrix)_
- **BR-PG1-170** — Subscription screen options: My Plan, Next Renewal Date, Cancel Membership, Renew Membership, Customize Your Plan (Customize only for registered, non-subscribed agents). _(§ 4; § 6; § Hamburger 5)_
- **BR-PG1-171** — On failed auto-payment a "Renew" button renders on the subscription page for manual payment. _(§ Failed Auto-Payments)_
- **BR-PG1-172** — Cancellation stops auto-renewal immediately; premium access continues until the current cycle ends; cancellation takes effect from the next billing month. _(§ 5 Cancellation)_
- **BR-PG1-173** — After lapse/cancellation, listings stay active exactly 3 months; agent can view leads and relevancy matches but cannot connect with new users unless resubscribed. _(§ 5 Grace Period)_
- **BR-PG1-174** — After 3 months unpaid, account is marked "Expired" and all listings are auto-deactivated; data is kept; after resubscribing the user manually selects listings to reactivate. _(§ 5 Deactivation / Data Safety)_
- **BR-PG1-175** — Unsubscribed agents see a "Trial Plan" label with the free listing offer; subscribed agents are tagged "Pro Member" (replacing "Broker"/"Agent"). _(§ Premium Member Rebranding)_
- **BR-PG1-176** — GST invoices are auto-generated and provided upon successful subscription. _(§ Invoicing)_
- **BR-PG1-177** — Razorpay payment screens are embedded natively on the subscription page, replacing third-party pop-ups. _(§ Native Payment Integration)_
- **BR-PG1-178** — WhatsApp: agents can toggle notifications; listing a property/demand triggers a WhatsApp confirmation with location details and a PDF download link; only promotional messages can be opted out — transactional (relevancies, leads, interest alerts, phone number inquiries) cannot. _(§ WhatsApp Notification Rules; § Hamburger 4)_
- **BR-PG1-179** — Help desk routes to contact@keydemand.in plus a self-help chatbot using website FAQs. _(§ Help Desk; § Hamburger 4)_
- **BR-PG1-180** — Agent state permissions per the Access & Permissions table (①–④), incl. open property page only for ②③; contact CTA ② max 5 / ③ unlimited; post ② max 1 / ③ unlimited; dashboard ④ may be read-only; WhatsApp alerts for ②③④. _(§ Access & Permissions)_
- **BR-PG1-181** — Agent notifications are defined in rows 1–52 of the Notification tab of the referenced sheet. _(§ NavBar 6)_
- **BR-PG1-182** — Agent dashboard tabs: Overview, Properties, Demands, Leads, Enquiries; Overview has headers linking to each and notifications at the bottom. _(§ Hamburger 1)_
- **BR-PG1-183** — Leads = image requests received (from brands and tenants) + phone numbers viewed; Enquiries = Projects enquired, Numbers you have viewed, Contacts Requests (to brands), Images Requested (to agents, Keydemand team). _(§ Hamburger 1; § Dashboard Slider Interactions)_
- **BR-PG1-184** — Demand card: Size, Demand Id, Asset Class, Transaction Type, City, Location, Relevancy, Leads, Date Posted, CTAs Edit/Deactivate/Delete. Property card: Size, Property Id, Asset Class, Transaction Type, City, Location, Relevancy, Leads, Date Posted, Posted by. _(§ Body 2.1–2.2)_
- **BR-PG1-185** — Viewing a phone number is passive (no approval): two-way reveal — viewer gets the number, lister is notified via WhatsApp with the viewer's Name, User type, Mobile number and the property/demand viewed. _(§ 2.3 Leads)_
- **BR-PG1-186** — Inbound phone-number leads are marked "Unread" until clicked. _(§ 2.3 Leads)_
- **BR-PG1-187** — Project Interested slider shows Name of project, Project Id, Posted by, Location, City, Possession, Listed on; "View Listing" opens the detail page. _(§ 2.4 Enquiries)_
- **BR-PG1-188** — Numbers viewed list: Name, Mobile Number, Demand id, User-Type, Timestamp; card with Property/Demand Id, Asset Class, Name of property, City, Location, Quoted Price, CTA Call. _(§ 2.4 Enquiries)_
- **BR-PG1-189** — Agent home page reuses landing sections with logged-in CTAs: Premium/Exclusive/Explore Projects → Show Interest pre-filled (Name, Mobile, Email, User Type); Explore Properties → View Phone Number shows the number; Explore real estate → Explore opens properties/projects for city; Top cluster hidden (Phase 2); About Keydemand videos only about Agent functionality with Request a Callback (form Name, Email, Phone number, I am, Message); Footer same as landing. _(§ Body 3–10)_
- **BR-PG1-190** — Agent home hero search Asset Class options are Office, Retail, F&B only. _(§ Body, landing sections)_

### Open questions / ambiguities in this doc
- Deactivate Account text says "the subscription stops and cannot be reactivated" yet the Note says benefits resume if reactivated within the original period.
- Approved-request notification in Business Rules lacks the brand name/number ("…kindly connect with them on ") while the Contacts requested section has "<Brand Name> … <number>".
- 4-working-day SLA vs 72-hour auto-nullification for the same contact request are both stated.
- 2.2 Property Listings says "total number of demands added" (copy-paste error for properties).
- "Project Interested … does not create a separate dashboard tab" (Business Rules) vs Dashboard › Enquiries › "Projects enquired" slider.
- Request a Callback "only captures the mobile number" but lists Name, Email, Phone number, I am, Message.
- Resolved comment AAAB9ERYvBc asked whether rejections must be part of Notifications — answer not recorded.
- "Leads Received … For contact enquiries, it opens 2 tabs, just image requests and phone numbers viewed" — nesting unclear.
- Expired-state Dashboard "may be read-only" — not decided.
- HTL thresholds are "city-specific" but values not given in this doc (only the 10,000 sq ft Bangalore bypass).

---
## Agent Home Page/Specific Page - Registered  [HISTORY — superseded by Version 1.1 Agent Home Page/Specific Page - Registered]
**Source:** Google Doc · ID `1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c` · owner pradeepa.pv@futuristglobal.com · modified 2026-08-05 · all sections read + 3 comment threads · read coverage: 100%

### Differences vs authoritative version
- **Business Rules** in old were brief prose; V1.1 rewrote into categorised rules and added: Operating City single-select, HTL restriction & 10,000 sq ft Bangalore bypass, "Hidden to others" overlay for Keydemand team, duplicate-click "Already requested", requester phone auto-shared on image request, owner phone visible on approval, Office exception, Supplier SLA, full Subscription/Billing/Pricing/Proration/Grace-period/Rebranding ("Trial Plan", "Pro Member")/GST invoice/Razorpay rules, invoice PDF example link.
- Old navbar rule: "Free Listing - To be shown only for unregistered users" (comment AAACEjtU-Mc by Mangalarapu Arvind: "unsubscribed", resolved) — V1.1 keeps "unregistered (guest)".
- **Delete Account form link (old only):** https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform
- Old reactivation text: "(If the user reactivates within the subscription time frame then the user will be able to get the benefits of subscribed number of days as he has reactived within the timeframe, but the user has to manually activate their listings as it will be deactivaed." — same intent in V1.1.
- **Old "Display logic for the image request status"** (Accepted: show images only to requester; Pending: "pending" on card; Rejected: hide images + CTA) — kept in V1.1 as Image Request Status.
- **Old Notifications:** "Finalized sheet is this 1 to 52 - Notification Tab".
- **Old Projects rule:** registered → details sent as enquiry "Name, User type, Mobile Number > City" → V1.1 adds Email.
- **Relevancy (old only):** "When demands are matched against properties and properties against demands, the cards are displayed down. Also when they click Explore properties, similar properties in the same area will be displayed."
- **Leads Received Table (old only; comment "To be confirmed with Himanshu", resolved):** 1. Type of Request - Image request /Phone Number; 2. User Type (e.g., Agent/Keydemand team/brand); 3. Name; 4. Mobile Number; 5. Timestamp; 6. Action - Accept, Reject.
- **Old Hamburger order:** 1. Dashboard (Active Properties → relevant demands(Number), leads received(Number); Active Demands → Relevant properties(Number), leads received(Number); Enquiries Received → Contact Enquiries(Number), Image Requests(Number); Enquiries Sent → Contacts requested, Images Requested, Projects Enquired (Number); "under relevant properties there would be projects too that could be matched"; Leads/Enquiries list of phone/image requests received/requested), 2. Edit profile, 3. Dashboard>My listings (3.1–3.4), 4. Favourites (Properties, Projects only — no Demands), 5. Alerts & Notifications, 6. Subscription, 7. Logout → V1.1: 1. Dashboard (Overview/Properties/Demands/Leads/Enquiries), 2. Profile, 3. Saved (adds 3.3 Demands), 4. Alerts & Notifications, 5. Subscription, 6. Logout.
- **Old body numbering:** 2.3 Phone number viewed, 2.4 Image request, 2.5 Phone number requested, 2.6 Image request requested, 2.7 Property Relevancy, 2.8 Demand Relevancy, 2.9 Project Interested ("No separate section on Dashboard") → V1.1 groups into 2.3 Leads and 2.4 Enquiries, adds demand/property card fields, lead card fields, Numbers viewed list, Project Interested slider fields, Dashboard Slider Interactions.
- Old phone-number-viewed fields lacked the detail card; old image request fields identical.
- **Old landing sections on agent home:** 3. Exclusive projects, 4. Explore Properties ("(Designer has made that arrangement right?) It can be shown on the card as well, if its viewed. (Please show me the design)"), 5. Projects, 6. Top cluster (Hidden for Now), 7. About Keydemand with CTA "Book demo" Calendly https://calendly.com/himanshu-keydemand/30min?month=2026-04&date=2026-04-03 , 8. Explore real estate, 9. Footer → V1.1 adds hero/search block, Premium Projects, "in <city>" titles, Top cluster tagged Phase 2, About CTA changed to Request a Callback with form.
- Old Leads Received table had "Action - Accept, Reject" for both image and phone requests; V1.1 makes phone-number viewing passive (no approval) except brand contact requests.

---
## Agent Complete Journey  [AUTHORITATIVE — journey]
**Source:** Google Doc · ID `15ye940_Uc0X5ojhbzDtZUsC02JIpd3PxpOXB1xZhb-U` · owner pradeepa.pv@futuristglobal.com · modified 2026-06-09 · sections read: Login Flow, Form Fields for Agent, Add/Edit/Delete/Deactivate Profile, Subscription & Plan Management (My Plan Fields, Subscription Renewal & Expiry states 1–3), Search and Filters, Property Management, Demand Management, Project Management, Agent Specific Home Page (Business Rules, Access & Permissions, Header - NavBar, Notifications content, Hamburger(Profile), Body) + 6 comment threads · read coverage: 100% of text (722 lines, read in full from the saved tool result); ~20 inline `[image]` dashboard mock-ups could not be seen

### Content

#### Login Flow
**Business Rules**
1. Agents will proceed directly to fill out their personal information after OTP verification.
2. Form Fields for Agent: Set your profile picture, Full Name, Email id, Phone Number, Write about yourself, Select states (dropdown), Cities, Property Type (Retail, Office, etc.), Save Progress button
3. If the user registers and has not subscribed, then he can post 1 free listing plus click "View number" 5 times, only after that he will be redirected to the subscription.
4. State and City selection in the initial registration flow is for targeted marketing for KeyDemand admin team.
5. If email address is mandatory for an Agent then they cannot post a property unless the Agent verifies his/her email address

The user will click the Login button/ any CTA and the following dialog will appear.
- Phone Number
  - Country Code Field
    - Default Country Code
    - Drop Down
  - Enter Phone Number Field
  - Continue
- Who do you identify as (If the number is not registered)
  - Agent
- OTP (If they choose Agent)
  - OTP Fields (Only 4 digits will be sent) - 6 is proposed by team
  - Continue

#### Form Fields for Agent:
- Add Profile Picture
- Full Name
- Email ID
- Phone Number
- About Yourself
- Select States: (Dropdown)
- Cities
- Asset Class
  - Retail
  - Office
  - F&B
- CTA
  - Save Progress
  - Submit

Welcome Screen
- Text
- CTA
  - Start Exploring (Clicking on this would be a microsite for that particular asset class and city.)

#### Add/Edit/Delete/Deactivate Profile
**Agent (Non-Registered / Registered / Subscribed / Expired)**
1. Logs into the platform via Mobile Number + OTP.
2. Navigates to "My Profile".
3. Adds data fields. Cannot edit mobile number and Asset class
4. Delete Account: It will be a form where he will fill and then we shall receive his deletion request and once we receive that. We will reach out to the agent and delete the account for him <https://docs.google.com/forms/d/e/1FAIpQLSc-2pndr25phz8erbuZ9DXZq_Ny2SPxw2-6OCGTj-uzzZwyLg/viewform>
   > [Comment AAAB8AlWRDI — RESOLVED, John Abraham]: "What happens when agent wants to create another account with same user information, when the previous information is still in the database" · Pradeepa PV: "Reactivation and Deletion Rules?"
5. Deactivate Account: Requires confirmation via a dialog box. The account remains the same, but the subscription stops and cannot be reactivated. **Deactivating your account pauses everything.**
   > [Comment AAAB8AlWRDE — RESOLVED, John Abraham]: "Can the reactivation be done from the admin end when customer decides to reactivate his account."

   Once profile is deactivated, All your listings will be hidden, and you won't appear active on the platform. You can reactivate anytime — a "Reactivate account" button will be available on your home page when you return.
   Once reactivated, your account will be marked as registered but not subscribed.
   **Note:** If you deactivate during an active subscription, your subscription benefits will resume automatically — as long as you reactivate within your original subscription period.
   If they re-activate outside the subscription flow then they will be a general registered user and has to go through the subscription process again or asked for subscription if they do any CTA activity.
6. **Edge Cases & Business Rule Enforcement:**
   - **Non-Registered:** Cannot access or create a profile.
   - **Registered / Subscribed:** Can edit Profile Picture (max 5MB), Name, Email, Transaction Type, City, State, Company Name, Designation, Experience, About yourself, and WhatsApp notifications. Mobile number and Asset Class remain locked.
   - **Expired:** Account functions are paused. They have "no active actions," and their profile and associated listings will be completely deactivated after 3 months of non-renewal.
     > [Comment AAAB8AoqNYA — RESOLVED, John Abraham]: "Once a account is expired on the end of a month, will there be a grace period? If yes, How many days? If no, then what all features will be disabled for the next 3 months before the account will be deactivated? Once deactivated will they still have the profile in the database to login and click on reactivate their account or is there any other way to reach out to the keydemand team to reactivate account?"

#### Subscription & Plan Management
**Business Rules**
- Subscription is only for Agents. They can add/manage cities to the ongoing subscription plan and the amount will reflect on the next month's bill.
  > [Comment AAAB6Sl7MWo — RESOLVED, John Abraham]: "If the invoice fir the added cities is being charged he next month, then there will be 2 transactions for the added city in the invoice of the next month creating a confusion among the agents who purchased the plan. Making this a credit based billing system initially unlike the prepaid plan that we are in right now. Need to come up with an alternate method to not create panic among agents."
- To allow agents/users to view phone numbers of brands & developers only after taking a subscription
- Subscriptions are structured by city and asset class.
- Only 1 listing & 5 contact requests will be given free to agents before subscribing.
- Rejected or restricted assets remain in the explore-only view.
- If a subscribed agent cancels or lets their subscription expire, their account will be set to deactivate after 3 months, and their posted listings will no longer be shown to the audience.
- Agents can add cities under subscription where they can edit and add more while the subscription is on-going (during the time of ongoing subscription). They will be charged with the newly added cities in the next few months, with the amount being as per the selected city/asset class. And same if they want to remove the cities.
  > [Comment AAAB6Sl7MWs — RESOLVED, John Abraham]: "What happens when a city is removed from the listing in the current charged invoice, Will there be a refund or any mode of repayment or credit to redeem in the next invoice?"
- The delete subscription will be under the subscription screen, where they will be able to cancel the subscription. The cancellation of the subscription will be from next month and not for the same month.
- Subscribed: An agent with an active subscription, defined by city and asset class, is granted unlimited listings and contact requests, full dashboard access, and WhatsApp alerts.
- Expired subscription: When an agent's subscription lapses, they have no active actions, and their account, along with their listings, will be deactivated after 3 months of non-renewal.
- Customising your plan is done only when the user is registered and not subscribed.
- Subscription Flows are the following
  - My plan
  - Next renewal date
  - Cancel membership
  - Renew membership
  - Customize your plan
  > [Comment AAAB6Sl7MWw — OPEN, John Abraham]: "Should upgrading also be a part of this?" · Pradeepa PV: "Customize your plan/ Renew is that only John. Once they click customize- it goes to My plan and the flow will continue from there."
- To showcase pricing here to explain to the user what the pricing would be
  - 1000rs per asset class and per metro city
  - 750rs per asset class and per non-metro city
  - Rest of India - 1000/Per asset class (Other than Metro and Non-Metro Cities)
  - PAN India - 5000/per month - per asset class (Every City in India)
  - (Retail + FnB & Office) Metro = 2000 per city and (Retail + FnB & Office) Non Metro = 1500 per city
- Flow for Subscription
  - Subscription life cycle: Your subscription, explained
  - How billing works
  - Your subscription is billed monthly and auto-charged on the same date each month. You don't need to do anything — it renews automatically.
  - If you cancel, You can cancel anytime from your account settings. Auto-renewal stops immediately, but you'll continue to enjoy full premium access until the end of your current billing cycle.
  - If a payment fails or If your auto-payment doesn't go through, we will give a button of renew on the users subscription page, where they can renew it.
  - What happens to your listings after cancellation
  - After your last successful payment, all your listings stay active on the platform for 3 months. This gives you time to view all your leads and relevancy but cannot connect with new users, the user has to resubscribe for not losing visibility.
  - After those 3 months, all your listings will be deactivated. To bring them back live, simply resubscribe — your data stays safe with us in the meantime. The user needs to manually select all the listings to make it active.

**My Plan Fields**
Choose Asset Classes and Cities

| Asset group | Option | Price | Control | Values |
|---|---|---|---|---|
| Retail and F&B | (Toggle Button) | — | Toggle | — |
| Retail and F&B | Metro Cities | 1000/city | Multi Select | All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad |
| Retail and F&B | Non Metro Cities | 750/city | (not stated) | F and G columns in sheet <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=rJVz6vW63kg> |
| Retail and F&B | Rest of India | 1000 INR | Check Box | J and K columns in same sheet |
| Retail and F&B | PAN India | 5000 INR | Check Box | Every City in India |
| Office | (Toggle Button) | — | Toggle | — |
| Office | Metro Cities | 1000/city | Multi Select | All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad |
| Office | Non Metro Cities | 750/city | Multi Select | F and G columns in same sheet |
| Office | Rest of India | 1000 INR | Check Box | J and K columns in same sheet |
| Office | PAN India | 5000 INR | Check Box | Every City in India |

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
- Proceed (Button): Save Plan
- Start Subscription

##### Subscription Renewal & Expiry
**STATE 1 - ACTIVE**
- Plan Status & Title: My Plan
- Status Label: STATE 1 - ACTIVE
- Plan Name: Pro Agent Plan (marked with an "Active" badge)
- Plan Description: Full access · 4 cities · All asset classes
- Button - Add/Manage Cities
- Selected Coverage
  - Category: METRO CITIES
  - City List & Specific Asset Classes: Mumbai: F&B, Office; Bengaluru: F&B, Office; Delhi NCR: Office
- What's Included (Features)
  - Unlimited Listings: Post properties & requirements with no caps
  - Smart Matching: Auto-paired with buyers, tenants, or developers
  - Direct contact access: View verified phone numbers of matched leads instantly.
  - Real-time Lead Alerts: Notified the moment someone matches your listing
  - Unified Dashboard: Track your listings, leads & performance
- Call to Action
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
- Selected Coverage
  - Category Header 1: METRO CITIES (Count: 3)
  - City List (Metro): Mumbai, Bengaluru, Delhi NCR
  - Asset Tags: F&B, Office
  - Category Header 2: NON-METRO CITIES
  - City List (Non-Metro): Panaji
  - Asset Tags: Office

**STATE 3 - EXPIRED**
- Status Label: STATE 3 - EXPIRED
- Banner Category: SUBSCRIPTION STATUS
- Main Header: Your subscription has expired
- Sub-header: Plan ended on [Date] · Access paused
- Coverage Context
  - Section Label: YOUR PREVIOUS COVERAGE
  - Category Header: SELECTED COVERAGE
  - Sub-category 1: METRO CITIES — Mumbai, Bengaluru, Delhi NCR
  - Sub-category 2: NON-METRO CITIES — Panaji
  - Asset Tags: F&B, Office
- Reactivation Info
  - Message Header: Reactivate to unlock everything again
  - Message Sub-text: Same plan, same cities — instant restoration on payment.
- CTA
  - Primary Button: Reactivate Plan
  - Secondary Button: Upgrade Plan first

#### Search and Filters
**Business Rules**
- **Agent vs. Unauthenticated Search:** Logged-in agents can search for properties, projects via the homepage. Unauthenticated users can too but images of properties will not be displayed.
- **Search Results Display:** The primary search results will display a mix of properties and projects, and the "View All" button will lead to a vertical list sorted by the latest added date (newest first).
- **Independent Search Sections:** The 'Quick Match and Search' section further down the homepage, will inherit the previously selected city as a starting point but operates independently for that specific page block.
- **Search Filters:** The asset class filter is to be changed from a radio button to a checkbox to support selecting multiple asset classes.
- Bangalore is selected as the default test market and will be the primary city shown upon platform launch.

#### Property Management
**Business Rules**
1. The property must align with the asset classes and cities the agent selected during registration.
2. The "Rate per sq. ft." and the total "Rent Amount" are auto-calculated, meaning if you enter the area and the price, the system will fill in the totals automatically. Added logic in the PR excel sheet under D68-69-70 row.
3. Rate per sq. ft. (Carpet)* = Quoted Rent/Carpet Area
4. Quoted Rent* = Carpet Area*Rate per sq ft
5. Non- registered users cannot view property images. (All images will be hidden from properties) Until they register. Post registration images of properties will be shown but if there are any properties where images are hidden from the users and request for property images is mentioned have to request for images to be viewed)
6. On any form reset or page refresh, the default property type must be set to Office (replacing the V1 Retail default).
7. An agent can upload only office/retail and F&B property. - (They cannot add a managed space property). An agent's ability to post properties is strictly dictated by the asset classes (e.g., retail, office) they select during registration and their active subscription tier.
8. For property uploads, if an agent selected only a single asset class during registration, they can only post properties of that type. If they selected multiple asset classes, they must specify the asset class when posting.
9. "Yes" fields can not be edited after getting the response.
10. Only for property - For uploading "other documents" besides images and videos, the platform will adopt a functionality similar to LinkedIn, allowing users to upload and name their files.
11. One image must be mandatory in each field, except for video uploads. This means that when they upload an image, we are allowing them to hide the image from other users, where the other party can request images, where the supplier will have an option to accept/reject the request for image permission.
12. A design decision was made to entirely remove the 'inbox' feature for the new website which was discussed on. Moving forward, all property responses will be showcased directly within the dashboard or the property's self-view area, presenting responses as a clear list on the page rather than navigating to a separate inbox.
13. Agents have the authority to delete or deactivate their own listings.
14. Property ID and Project ID should be added as a **non-editable visible tag** on the demand detail page or property card.
15. The standardised naming convention for property images should be **"interior" "exterior" and "Front Side"**, just like in V1. Each property image should be under 5 mb. Format: Jpg, png. If the "Do not show images" option was ticked during upload, the property view must hide all images from potential leads.
    1. Each property video should be under 20 mb. Format : mp4
    2. Image resolution should be at least 300 pixels per inch (ppi)
    3. Note: First image of front side categories will be displayed as main image (In the design, we need to mention while uploading that this will be your 1st image to showcase)
16. If a registered agent requests contact details, they must log in/register. A request is sent to the Occupier, who has 72 hours to accept or reject the connection. If they do not respond, the request is automatically nullified with a rejection message.
17. A **paywall** will be implemented to prompt subscription if a registered agent requests contact details more than twice or thrice, serving to monetise persistent activity.
18. Deactivation must immediately remove the property from the public marketplace and "potential buyer" matching algorithms, but keep the data accessible in the user's dashboard for reactivation.
19. "Yes" fields can not be edited after getting the response
20. Office requirement if it is more than 5000 sq feet, it will come to Keydemand team and not on the platform.
21. For property uploads, if an agent selected only a single asset class during registration, they can only post properties of that type. If they selected multiple asset classes, they must specify the asset class when posting.
22. There is no map in demand but only in property. The property map is nothing but a map of the location of property, also it will have a leaflet and also (view street view) (Map view) Property location marker, nearby bank, nearby busstop, nearby restaurant, shopping destinations etc based on the asset class), only street view will open a pop-up of street view on the same page rest user can view everything on the map

**Agent (Registered vs. Subscribed)**
1. Click "Post a Property" on the Dashboard.
2. Selects the Asset Class (Retail, F&B, or Office). Must align exactly with what was selected during registration.
3. Inputs Mandatory Details
4. Inputs "Rent Amount". The system auto-calculates the "Rate per sq. ft." and "Total Rent".
5. Uploads Property Images & Videos. Must provide an "interior," "exterior," and "Front Side" image. Can toggle "Request for Images" to hide media from other users.
6. Clicks Submit. The property receives a permanent, non-editable Property ID.
7. **Edge Cases & Business Rule Enforcement:**
   - **Registered (Unsubscribed) Limit:** Can only list exactly **1 free property**. Attempting to post a second triggers the subscription paywall.
   - **Subscribed Privilege:** Can post unlimited listings. The property must align with the asset classes and cities the agent selected during registration.
   - **Asset Lock:** Agents are strictly prohibited from uploading "Managed Space" properties. This is exclusively handled by Keydemand.
   - **Data Lock:** All "Yes" fields (e.g., Amenities, Washroom Available) become permanently locked and non-editable the moment the listing receives its first response.
   - **Media Constraints:** Images must be max 5MB (JPG/PNG, minimum 300 ppi), and Videos max 20MB (MP4).

Fields - Columns A to BB <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=tkgGaxq63kg>

**View Property Listing Flow - External View**
Fields are in this sheet - View order is mentioned in Field - Columns A to BB (same link). Property ID will get added as an additional field
- CTA
  - Download — PDF gets downloaded
  - Save — Gets added to shortlist
  - Share — Email, Whatsapp
- CTA
  - View Phone number

**View My Properties (Self View)** — View order is mentioned in Field - Columns A to BB (same link)
- CTA (on top)
  - Deactivate — Property listing gets deactivated
  - Edit — Property listing can be edited
  - Delete — Property listing can be deleted
- CTA (at bottom)
  - View Response

**Edit a Property** — CTA Edit: Property listing can be edited
**Delete a Property** — CTA (on top) Delete: Property listing can be deleted
**Deactivate a Property** — CTA Deactivate: Property listing gets deactivated

#### Demand Management
**Business Rules**
1. The system must check the Carpet Area and Location during submission. These are tagged as "High-Value" and routed exclusively to the internal Keydemand team.
2. Agents may receive a notification that a large demand exists in their area to keep them engaged without the CTA. This is to engage with the audience for them to post more properties, they will just get to view that there are x number of demands in their area. Post your properties to get matched to the right demand.
3. Nobody can explore demands anymore except for the Keydemand team. It will be matched to the relevant property.
4. Custom City-based threshold for the requested square footage (e.g., 5,000 sq ft for Mumbai) for Office Tenants. If the requested size exceeds this threshold, the demand lead must be automatically transferred to the Key Demand team and not to an agency.
5. An essential bulk upload functionality, potentially using an Excel file, is required for enterprise users to post numerous demands simultaneously, especially when the asset class and requirement details remain constant across multiple cities.
6. Registered, subscribed, and expired users must receive WhatsApp alerts for inbound leads and overall market summaries (e.g., the number of new demands added in a specific city).
7. Agents: Can post demands on behalf of clients, subject to their subscription asset classes and cities.
8. Just like properties, demand responses and matches must be viewed directly on the Dashboard or a dedicated "Matches" tab. There is no separate inbox.
9. Agents/Suppliers only see demands that match their registered asset class and city.
10. When a supplier "requests to connect" with a demand, the requester has 72 hours to accept. If no action is taken within 72 hours, the request is automatically nullified with a system-generated rejection.
11. High value demands uploaded based on city and area validation wont be matched across to the Agent and will be sent to Keydemand team. Any demand where the tenant self-selects the 'Enterprise Solution' is immediately transferred to the Keydemand admin team for customized handling.
12. The requester (tenant side) must see a real-time list of "Interested Properties" or "Matched Listings" directly on the demand detail page.
13. A non-editable, unique Demand ID must be visible for support and tracking.
14. If a demand is being handled exclusively by the Keydemand team (high-value), the self-view should indicate "Assigned to Keydemand Specialist."
15. Users can deactivate a demand once the requirement is fulfilled or no longer valid. Deactivation stops all new matching algorithms. Demands should automatically move to "Inactive" after a set period (e.g., 60 days) if not renewed, to ensure the "Supply" side isn't chasing old leads.
16. "Yes" fields can not be edited after getting the response.
17. Front-end users (including agents and brands) can no longer explore or search through demands. Demand exploration is now strictly restricted to the internal Key Demand team, and matching will occur entirely through backend relevancy logic for agents it will be only F&B, Retail, Office.
18. If a subscribed agent cancels or lets their subscription expire, their account will be set to deactivate after 3 months, and their posted listings will no longer be shown to the audience.
19. While uploading office demand the user will have option to have a fixed location and other interested location where they will get the relevancy of properties based on the locations selected. Eg they want an office in Colaba, Nariman point, Worli and Mumbai Central. So a max of 1+4 extra locations can be added while uploading the office requirement.
20. Projects should be matched against all posted demands by using key input fields from both the project and the demand to determine compatibility. Although a specific relevancy percentage will not be assigned, the matched projects must still be presented to users as demonstrably relevant options for their requirement.
21. Flex Demand (Keydemand) is to be done in Phase 2
22. If it is an office occupier requirement that is being posted, CTA is View phone number, other details have Request phone number

**Agent (Subscribed vs. Expired)**
1. Clicks "Add a Demand" on the dashboard.
2. Inputs all mandatory and non-mandatory fields as per demand, like for example Asset Class, Transaction Type, City, and Location.
3. Users can input 1 fixed Location plus up to 4 "Other interested locations".
4. Clicks Submit. The demand is assigned a unique Demand ID.
5. Receives a WhatsApp alert regarding a newly pushed matching demand.
6. View the demand card (Transaction Type, Carpet Area, City, Location, Possession).
7. Clicks "Request Contact" to view the demand poster's number.
8. **Edge Cases & Business Rule Enforcement:**
   - **The Blackout Rule:** Agents **cannot search or explore demands** manually. They only view demands pushed to them via backend relevancy algorithms matching their registered cities/asset classes.
   - **72-Hour SLA:** When an agent clicks "Request to Connect," the demand poster has exactly 72 hours to accept. If ignored, the request auto-nullifies with a rejection.
   - **Expired Agents:** Cannot view pushed demands or request contact.

Fields - Columns A to AR <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=tkgGaxq63kg>

**View Demand Listing Flow - External View** — Fields in sheet; view order in Field - Columns A to BB (same link). Demand ID will get added as an additional field
- CTA: Download (PDF gets downloaded); Save (Gets added to shortlist); Share (Email, Whatsapp)
- CTA: View Phone number

**View My Demands (Self View)** — view order Columns A to BB
- CTA (on top): Deactivate — "Property listing gets deactivated"; Edit — "Property listing can be edited"; Delete — "Property listing can be deleted" (source text says "Property" here)
- CTA (at bottom): View Response

**Edit a Demand** — CTA Edit: Demand listing can be edited
**Delete a Demand** — CTA (on top) Delete: Demand listing can be deleted
**Deactivate a Demand** — CTA Deactivate: Demand listing gets deactivated

#### Project Management
Agent
1. Navigates to the Exclusive Projects, Developer projects from the Landing Page/Individual home pages. Or in case of unregistered users, they can also click on sponsored projects in the hero section too.
2. Filters projects by Location, Asset Class, and transaction type
3. View the Project Detail Page (Brochures, Floorplans, Built-Up Area, Possession Date).
4. Click "Show Interest" or "WhatsApp".
5. Admin Flags: Projects must be categorized in the admin panel using flags as regular, sponsored, or exclusive.
6. Sponsored Projects: These are developer-paid advertisements that must be city-specific and strictly limited to a finite number of slots (e.g., 3 to 5 slots per city) to maintain their value.
7. Exclusive Projects: These are projects mandated solely to Keydemand and will be featured prominently as a nationwide banner or carousel, independent of city-specific logic.
8. Visual Distinctions: Search results must use distinct visual markers (like a golden star, ribbon, or asterisk) to easily differentiate between standard properties, regular projects, sponsored projects, and exclusive projects.
9. So the business rule is to hook the audience on images, we are still showing them the card details and we want users to atleast provide a mobile number to us for them to begin exploring our platform. Hence we want to blur property images and okay to show project images. The other logic of property images shown is solely of an agent if they want to show images, as some users are not happy to showcase their image to audience but as our platform requires images we will have to ask them to upload but listsing wise they can hide those images to show it to the end audience and they can request for images, similar to magic bricks. This helps Agents to upload more properties on the platform as their listings are secured. (Request based approval)
10. The user is not a registered user > clicks on project interest > will be asked to fill a form > details will be sent to RM of that project, Keydemand team assigned to the project, admin team as a lead and it will also be stored under the project. Details of what will be asked while filling the form is already shared.
11. User who is a registered user > clicks on project interested > automatically details will be captured and the CTA will be changed to intrerest shown on this project on <date>, similarly details for this will be sent as above.

Fields - Columns GA to GF <https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQA7lwMPt_rKSZcvx6gHkl3QAYozrjBnvR6pysLA8WAw7Ik?rtime=tkgGaxq63kg>

#### Agent Specific Home Page
"Currently updating this document which contains only the content for Agent Specific Home Page. Will keep updating as corrections are being made- last update - 31st May 2026 5:21 PM. Corrections and additions are still happening." <https://docs.google.com/document/d/1hMFKk7T7oil3VkOzd3XaU0gnL5Bp7gDGC0ypQCy4N8c/edit?pli=1&tab=t.0>

This section is a snapshot of the (now HISTORY) "Agent Home Page/Specific Page - Registered" doc. Text identical to that doc / to V1.1 is noted as such; text unique to this snapshot is transcribed in full.

**Business Rules** — NavBar Free Listing (unregistered only; navbar not universal; free listing limited per asset class and disappears after quota), Property and Demand Posting (no managed office; Office/Retail/F&B), Explore redirection (Office first, else Retail; all lease), "Do not show images" hiding and "request for images" CTA, Account Management (Delete form link; Reactivate/Deactivate text), Display logic for image request status (Accepted/Pending/Rejected) — identical to the HISTORY agent doc.

**Notifications (unique wording):** Include Demand Relevancy (Instant), Property Relevancy, Image Request, Phone number Request, Subscriptions, Marketing notifications, and Demand/Property Active Status (occurs once every 3 months).

**Exclusive Projects / Projects / Relevancy** — identical to HISTORY agent doc (unregistered → form = soft registration; registered → Name, User type, Mobile Number > City sent as enquiry; matched cards displayed down; Explore properties shows similar properties in same area).

**Properties and Demands (unique):** "What fields do you want in View Response. Please let us know how." — Name, Mobile, Email, User Type

**Access & Permissions for each type of Agent** and **A Short summary of above** — identical to V1.1 table/summary. "For Agents - The name must be displayed…" not present here.

**Header - NavBar:** 1. Keydemand logo; 2. Agent Subscription (non registered, registered-not-subscribed; plan → asked if agent → sign in/onboard); 3. Explore Properties (Office first, else Retail; all lease); 4. Post property (no managed office; Office, Retail, F&B); 5. Post demand (no managed office demand); 6. **Notification - All notifications with redirections (unique):**
- Demand Relevancy - Instant (if solo) if many then to be sent as a bulk as a summary
- Property Relevancy - Instant
- Image Request - Instant
- Phone number Request - Instant
- Subscriptions - 3 days prior & on same day
- Marketing notifications - from Keydemand end
- New Projects Uploaded - Instant & to the new users it will be bulk
- Demand/Property Active Status (3 Months once) (logic base, if they mention or click if its active then to keep the listing active if selected not active then to deactivate it

**Notifications content that can come (unique; `<>` means variable):**
- **Demand relevancy:** "Brands are actively looking for space in <Mumbai> — <25> new requirements added today or this week. The more of your inventory that's live on Keydemand, the more matches brands can find. Upload now →"
  - (Summary based weekly) "13 properties matched your listings this week! Tap to view all →"
- **Image Request:** Accepted by the supplier? → (View listing with images) "Request for viewing image has been approved by the agent, you may view the images and contact the agent to discuss further." CTA (That specific listing). Rejected by the supplier? → (view listing without images) "Request for viewing images has been rejected by the agent." CTA (That specific listing) without images
- **Property Relevancy:** (Multiple match) "3 matches on your <ORR listing>" / "Occupier looking for Office space just matched your listing. Tap to review all →"; (Solo match) "1 match on your <ORR listing>" / "Occupier looking for office space just matched your listing. Tap to review all →"; (Summary based weekly) "13 demands matched your listings this week! Tap to review all →"
- **Phone number request:** Accepted by the brand? "(Your request to view <Brand Name> phone number has been approved, kindly connect with them on <number>)"; Rejected by the brand? "(Your request to view number and connect with the brand has been disallowed by the brand)"; Nullified/Expired (no response within 72 hours)? "Is it 72 hours?" "(Your request to view number and connect with the brand has been unanswered by the brand and thus dropped)"

**Hamburger(Profile)**
1. **Dashboard** [Image: dashboard mock-up] — Fields: Total Active Properties (relevant demands, leads received); Total Active Demands (relevant demands, leads received); Leads/Enquires (Contact Requests, Image Requests). Total Active Properties will have relevant demands & leads received (phone numbers viewed). Total Active Demands will have relevant properties & leads received (phone numbers viewed). (under relevant properties there would be projects too that could be matched). Leads/Enquires: Phone number request received > all requests done by agents, brands, occupiers, Keydemand team; Image request received > same; Phone number requested > all requests done to agents, brands, occupiers, Keydemand team; Image number requested > same.
   Example of a property card when clicked on, it will show demands, leads — Property Card List [Image] — CTA - XX Demands, XX leads — [Image: representation]; "When clicked on (8) demand relevancy numbers on either <demand> <Property> its just a representation" [Images ×4]; "When clicked on leads the outcome shown at bottom, just the representation" [Image].
   Example of a demand card when clicked on, either total demands, it will show properties, leads [Image] — CTA - XX Properties, XX leads — [Images ×3 relevancy representation]; leads outcome [Image].
   "Go to 5. Leads/Enquiries in Hamburger for more details on leads"
2. **Edit profile** - Details will come from EPIC 2, US -006. Under profile the delete account and deactivate account is to be placed. Delete Account (form, link above) / Deactivate Account — same text as V1.1.
3. **My listings** — Demand Listings / Property Listings (newest first; relevancies first with red dot) / Demand Relevancy / Property Relevancy (red dot, latest on top). **Post Property -- Epic 005 - US -014**; **Post demand -- Epic 006 - US -019**
4. **Subscription** — My plan (Epic 004 - US -010A); Next renewal date (Epic 004 - US -011); Cancel membership (Epic 004 - US -012); Renew membership (Epic 004 - US -012); Customize your plan (Epic 004 - US -010A - Only if the user is registered and not subscribed)
5. **Leads/Enquiries** - Make a page
   - Phone number viewed - (Interest Received - Inbound) Number of phone numbers asked on other listings
   - Image request: The total number of image requests received by the agent. The listing agent must approve the request before the viewing agent can see the images.
   - Phone number requested - (Interest Requested - Outbound) Number of phone numbers asked on other listings
   - Image request requested - (Image Interest Requested - Outbound) The total number of image requests sent by the agent to see similar properties.
   - For business rules and fields - see Body > 2. Dashboard >
6. **Favourites** — Properties; Projects (as cards)
7. **Alerts & Notifications** — WhatsApp toggle "Do you wish to receive Notifications?" ("A toggle button can come here."); self-WhatsApp with PDF on new listing; only promotional can be stopped. **Unique:** "Notification Categorization: WhatsApp and SMS notifications are split into two categories: "Transactional" and "Promotional"." "Consent & Toggles: Transactional messages (e.g., lead alerts, inventory activities, subscriptions) are mandatory for business continuity. Users will be provided a settings header with toggles allowing them to opt out of Promotional messages (e.g., new platform opportunities)"
8. **Help** - contact@keydemand.in; **FAQ** - With Chatbot - Self Help - For now, take from website
9. **Logout**

**Body**
1. Search functionality - Same as in Landing Page
2. Dashboard — live impromptu dashboard about our listings. Demand Listings / Property Listings (same text) [Images]. "When clicked on (8) demand relevancy numbers … Can have just card information (Already done in demand and property flows)" [Images].
   - **Phone number viewed** (Interest Received - Inbound) — Filter - All Properties / Each Property name — Data Fields: Name, **Email id**, Mobile Number, Property/Demand/Project Id, User-Type - I am a (F&B/Retail/Agent/Tenant/Managed Space Occupier/Managed Space Operator/Keydemand team), Timestamp. Business Rule: passive event, two-way reveal (same quote), lead "Unread" until clicked.
   - **Image request** [Image] — Image Requests Received: XX Pending, XX Accepted, XX Rejected; Filter - All Properties / Each Property name; **Bulk Approve Verified**; User Type (All Users, F&B Brand, Retail Brand, Agent, Tenant, Keydemand Team); Table listing fields: Name, User Type, Company Name, **Designation**, **Project/Property Name**, City, Location, Date Requested, Status Badge (Accepted, Pending, Rejected), Action Buttons (Approve / Reject). Business Rules and User Flow — same as V1.1 (owner "Gets notified on image request view by another user").
   - **Phone number requested** (Interest Requested - Outbound) — Data Fields: Name, Email id, Mobile Number, User Type, Date Requested, Status (Accepted, Pending, Rejected), Contact Details (Visible only if approved). Business Rules: rejected request counts toward 5 free lifetime clicks; brand/supplier has 4 working days (skip Saturday and Sunday); track Accepted/Pending/Rejected; expired (unanswered after 72 hours) → Rejected; 6th request → "Kindly subscribe to continue". Notifications: same three messages as V1.1.
   - **Image request requested** (Image Interest Requested - Outbound) — Table listing: Project/Property Name, Asset Class, Location, Transaction Type, Posted By, Date Requested; Accepted → "View Images"; Pending; Rejected → "View Listing without Images". **Unique:** "This to be shown on the card itself that they have requested and when the request is accepted they will see the view phone number button (differentiator). Also in the hamburger menu there will be an Enquiries section in that we will add Image requests done by me where this will be stored. We do not want that to be shown on the dashboard yet."
   - Property Relevancy / Demand Relevancy — red-dot text same as V1.1.
   - **Project Interested** - Projects that the agent has shown interest in or chosen as favourites (CTA for project is show interest)
3. **Exclusive projects** — CTA - **Enquire Now** - A pre-filled form that can go from his profile: Name, Mobile, Email, User Type; Message shown: Thank you for showing interest
4. **Explore properties** — CTA - View Phone Number, where the number will be shown. "(Designer has made that arrangement right?) It can be shown on the card as well, if its viewed. (Please show me the design)"
5. **Projects** — CTA - Show Interest - pre-filled form: Name, Mobile, Email, User Type; Thank you for showing interest
6. **Top cluster in <city>** - Hidden for Now
7. **About Keydemand** - Multiple videos only about Agent functionality; CTA - Book demo - Calendly Link https://calendly.com/himanshu-keydemand/30min?month=2026-04&date=2026-04-03
8. **Explore real estate in popular Cities** — CTA - Explore - Opens all properties/projects as per the city chosen
9. **Footer** — Same as in Landing page


#### Agent Specific Home Page — verbatim snapshot text (verification fill)
Verbatim source lines from the Agent Complete Journey snapshot that the summary above paraphrases.

##### Agent Specific Home Page

##### Business Rules
**NavBar:** Free Listing - To be shown only for unregistered users. This drop down will not be an option for any other journeys. The Navbar will not be universal. It will change as per user specific pages. Free listing is also limited as per the asset class and must disappear after their quota is over.
**Property and Demand Posting:** Agents cannot add a managed office property or managed office demand. They can add Office, Retail, and F\&B properties and demands.
Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show Office first and if there is no office then to show retail property first. All transaction types would be lease.
The **Agent** (the property lister/owner) can hide images from public view when uploading a property and want to keep their listings secured. Hiding images is done by ticking a **"Do not show images"** option during upload, which hides **all** images from potential leads. When an Agent chooses to hide images, other users (the viewing agent/seeker) must click a "request for images" Call-to-Action (CTA). The listing agent then has the option to accept or reject the request.
  - **Reactivate/Deactivate Account:** Requires confirmation via a dialog box. The account remains the same, but the subscription stops and cannot be reactivated. (If the user reactivates within the subscription time frame then the user will be able to get the benefits of subscribed number of days as he has reactived within the timeframe, but the user has to manually activate their listings as it will be deactivaed.
**Display logic for the image request status**
1.  **Request State: Accepted:** Show the images only to the requesting user.
2.  **Request State: Pending:** Display the status as "pending" on the card.
3.  **Request State: Rejected:** Hide the images and display a Call-to-Action (CTA) button for the user who made the request.
The visibility of images on a listing card, following a user's image request, is determined by the request's status.
Agents can show interest in Exclusive projects by filling in details in the CTA. (Not just exclusive projects but all the projects on Keydemand) (If the agent is not registered \> they will have to fill form to submit as an enquiry but this will be a soft registration for the user on the platform.
**If the user is registered \> By clicking on show interest for any project \> Details of the user will be sent as an enquiry \> Name, User type, Mobile Number \> City
When demands are matched against properties and properties against demands, the cards are displayed down. Also when they click Explore properties, similar properties in the same area will be displayed.
  - **Access landing page:** Available to all agent states: ① Non-registered, ② Registered—not subscribed, ③ Subscribed, and ④ Expired.
  - **Explore properties:** Available to all agent states: ① Non-registered, ② Registered—not subscribed, ③ Subscribed, and ④ Expired. The access for Non-registered agents (①) is limited.
  - **Open property page:** Available to ② Registered—not subscribed and ③ Subscribed.
  - **Open project page:** Available to all agent states: ① Non-registered, ② Registered—not subscribed, ③ Subscribed, and ④ Expired.
  - **CTA to contact (view number):** Available to ② Registered—not subscribed, and ③ Subscribed. The limit for state ② is 5 requests maximum, while state ③ has unlimited contact requests.
  - **Subscribe now:** Available to ① Non-registered, ② Registered—not subscribed, and ④ Expired.
  - **Dashboard:** Available to ② Registered—not subscribed, ③ Subscribed, and ④ Expired. Access for state ④ may be read-only.
  - **Profile:** Available to ② Registered—not subscribed, ③ Subscribed, and ④ Expired.
  - **Post property/demand:** Available to ② Registered—not subscribed, and ③ Subscribed. State ② is limited to 1 listing maximum, while state ③ Subscribed has unlimited listings.
  - **WhatsApp alerts:** Available to ② Registered—not subscribed, ③ Subscribed, and ④ Expired. This feature provides inbound leads and a summary.
  - Non-registered: Agents who have never registered can access the landing page, open project pages, and explore properties, though their access is limited meaning the CTA will tell them to register or subscribe.
  - Registered — not subscribed: An agent who is registered but has no active subscription receives 1 free listing and 5 contact requests, gains access to the property page, and will be shown a prompt to subscribe.

##### Header - NavBar
**2. Agent Subscription** -To be shown to non registered, registered agent but not subscribed.
It will open the subscription page where user can select plans and subscribe. Once their plan is selected, the user will be asked if they are an agent, and only then will they be prompted to sign in and confirm to get onboarded.
**3. Explore Properties:** Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show office first and if there is no office then to show retail property first. All transcation type would be lease
**4. Post property** - They cannot add a managed office and can add all other types of properties like Office, Retail and F\&B
**5. Post demand** - They cannot add a managed office demand and can add all other types of properties like Office, Retail and F\&B

##### Hamburger(Profile)
  - Phone number request received \> will have all the requests done by agents, brands, occupiers, Keydemand team
  - Image request received \> will have all the requests done by agents, brands, occupiers, Keydemand team
  - Phone number requested \> will have all the requests done to agents, brands, occupiers, Keydemand team
  - Image number requested \> will have all the requests done to agents, brands, occupiers, Keydemand team
Representation of the above in image format
**Demand Listings**- They can see their own demands. This would show the total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
**Property Listings**  - They can see their property listings. This would show total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
**Demand Relevancy** - They can see demand relevancy to their property listings
Any new relevancy should be highlighted, or a notification mark should appear with a red dot over the number, and once the agent clicks on it, they should be able to view the latest one on top, marked with the red dot as the latest or highlighted as the latest.
**Property Relevancy** - They can see property relevancy to their demand listings
Any new relevancy should be highlighted or notification mark should appear with a red dot over the number and once when the agent clicks on it, they should be able to view latest one on top marked with the red dot as latest or highlighted as latest.
**Properties** - Properties chosen as Favourites will appear here as cards.
**Projects** - Projects chosen as Favourites will appear here as cards.
**WhatsApp** - About Notifications, if they want to stop receiving messages.
New properties/demands added by them will be sent as a Whatsapp to self informing that they have added a new property in xyz location and here is a PDF for them to download.
Only promotional messages can be stopped, they can't stop transactional messages. Eg messages related to relevancy, leads, interest received, phone number enquiries done, etc

##### Body
It must be a live impromptu dashboard with all the necessary information about **our listings.**
**Demand Listings** -A summary of the total number of the agent’s own demands
Demand Listings- They can see their own demands. This would show the total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
**Property Listings**  - A summary of the total number of the agent’s own property listings
This would show total number of demands added by that agent across asset classes. These demands would be in an order of newest first, however listings with relevancies would be shown first with a red dot notification.
**Phone number viewed** - Number of users who have viewed the agent’s phone number
  - Viewing a phone number is a passive event that requires no approval action.
**"If you view my number, I find out it was you — and I get your number too. It's a two-way reveal triggered by a one-way action. The viewer initiates, but both parties end up with each other's contact details, and the lister is actively notified via WhatsApp. Name, User type (Brand, Agent etc), Mobile number & which property/demand did you view the number from.**
  - The lead should be marked as "Unread" until it is clicked.
Image Request Data Fields
The following data fields are used to track each image request in the "Image Requests Management" section (under Interest Received and Interest Requested):
  - Justification for Hiding Images: Certain agents may not showcase images of the property they have uploaded; this is similar to competitors (Magic bricks).
  - Default Visibility: Post-registration images of properties will be shown. However, if an Agent has hidden images, users must request to view them.
  - Hiding Mechanism: The property lister (Agent) can hide a previously uploaded property image from public view. Doing so hides all images in that specific listing.
  - Image Preview Status: The Agent cannot change the status of the image preview (e.g., set to blurred/masked or fully visible) for specific users; it will be applied to all users.
  - Request Time Limit: A request or status change does not expire after a set time limit (the 72-hour nullification rule is not applied); the request remains active in the profile until it is approved.
  - Seeker’s Journey (Requesting Agent)
      - Views a property listing with a hidden image.
      - Clicks on the "request for images" Call-to-Action (CTA).
      - Gets approved and notified.
      - Can view the image.
  - Property Owner’s Journey (Supplying Agent):
      - Uploads a property with images hidden.
      - Reviews the seeker's profile.
      - Approves or rejects the request.
  - Notification on Acceptance (to Requester):
      - CTA: (View listing with images) (That specific listing)
  - Notification on Rejection (to Requester):
      - CTA: (view listing without images)
  - Free Clicks Limit: If a request for a contact number is rejected by the brand, it still counts as one of the user's 5 free lifetime clicks (based on the CTA clicked).
  - Approval/Rejection Time Limit: The brand/supplier has 4 working days from the date/time the request was sent to see/accept/reject the request (logic building is used to skip Saturday and Sunday).
  - Tracking Status: The Agent's outbound request dashboard must track status as Accepted, Pending, or Rejected.
  - Expired Status: Expired requests (unanswered after 72 hours) will fall under the Rejected status.
  - Subscription Limit: If an Agent reaches the 5-request limit and attempts a 6th request, the Call-to-Action (CTA) will prompt them to subscribe with the message: "Kindly subscribe to continue".
Notifications (Sent to Requester)
Table listing that will go
View Images - This will show the Property listing with images
View Listing without Images - This will show the Property listing without images
**Property Relevancy** - Listing presented to the agent’s demand
Any new relevancy should be highlighted or notification mark should appear with a red dot over the number and once when the agent clicks on it, they should be able to view latest one on top marked with the red dot as latest or highlighted as latest.
**Demand Relevancy** -Demands presented to agent’s property
Any new relevancy should be highlighted, or a notification mark should appear with a red dot over the number, and once the agent clicks on it, they should be able to view the latest one on top, marked with the red dot as the latest or highlighted as the latest.
The following are the same sections as on the Landing page
CTA’s will change as the user is registered and logged in
**Agents can show interest by filling in the CTA**

### Business rules extracted
- **BR-PG1-191** — Login dialog: Phone Number with Country Code (default + dropdown), Enter Phone Number, Continue; unregistered numbers are asked "Who do you identify as" (Agent); then OTP + Continue. _(§ Login Flow)_
- **BR-PG1-192** — OTP is 4 digits (6 proposed by the team). _(§ Login Flow)_
- **BR-PG1-193** — After OTP verification agents go directly to the personal info form: Add Profile Picture, Full Name, Email ID, Phone Number, About Yourself, Select States (dropdown), Cities, Asset Class (Retail, Office, F&B); CTAs Save Progress, Submit. _(§ Login Flow; § Form Fields for Agent)_
- **BR-PG1-194** — State and City in registration are for targeted marketing by the KeyDemand admin team. _(§ Login Flow BR4)_
- **BR-PG1-195** — If email is mandatory for an Agent, the agent cannot post a property until the email is verified. _(§ Login Flow BR5)_
- **BR-PG1-196** — Welcome screen CTA "Start Exploring" opens a microsite for the agent's asset class and city. _(§ Welcome Screen)_
- **BR-PG1-197** — Registered-not-subscribed agents get 1 free listing + 5 "View number" clicks, then are redirected to subscription. _(§ Login Flow BR3; § Subscription BR)_
- **BR-PG1-198** — Non-registered agents cannot access or create a profile. _(§ Profile Edge Cases)_
- **BR-PG1-199** — Registered/Subscribed agents can edit Profile Picture (max 5MB), Name, Email, Transaction Type, City, State, Company Name, Designation, Experience, About yourself, WhatsApp notifications; Mobile number and Asset Class are locked. _(§ Profile Edge Cases)_
- **BR-PG1-200** — Expired agents have no active actions; profile and listings are fully deactivated after 3 months of non-renewal. _(§ Profile Edge Cases; § Subscription BR)_
- **BR-PG1-201** — Agents can add/manage/remove cities on an ongoing subscription; the amount reflects on the next month's bill (per this doc). _(§ Subscription BR)_
- **BR-PG1-202** — Viewing phone numbers of brands & developers requires a subscription (beyond free allowance). _(§ Subscription BR)_
- **BR-PG1-203** — Rejected or restricted assets remain in the explore-only view. _(§ Subscription BR)_
- **BR-PG1-204** — Cancel subscription is on the subscription screen; cancellation takes effect from next month, not the current month. _(§ Subscription BR)_
- **BR-PG1-205** — My Plan: per asset group (Retail and F&B toggle; Office toggle) choose Metro Cities 1000/city multi-select (All, Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune, Hyderabad), Non Metro 750/city, Rest of India 1000 INR checkbox, PAN India 5000 INR checkbox. _(§ My Plan Fields)_
- **BR-PG1-206** — Bill Summary shows Subscription Summary (Metro/Non-Metro), Invoice Summary (Plan Total, GST), Total/Month amount, CTA "Confirm and Pay"; plan CTAs "Save Plan", "Start Subscription". _(§ My Plan Fields)_
- **BR-PG1-207** — Subscription feature set shown: Unlimited listings, Smart matching, Direct contact access, Real-time lead alerts, Unified dashboard. _(§ My Plan Fields)_
- **BR-PG1-208** — My Plan State 1 ACTIVE: "Pro Agent Plan" with "Active" badge, description, Add/Manage Cities, selected coverage, features; CTAs Renew Membership (primary), Download Invoice, Manage Subscription, Cancel Membership. _(§ Subscription Renewal & Expiry)_
- **BR-PG1-209** — State 2 EXPIRING SOON: clock icon, "Expiring Soon", "Plan ends on [Date]", banner "Renew before expiry to keep city access, matched leads, and phone views without interruption.", coverage by Metro/Non-Metro with asset tags. _(§ Subscription Renewal & Expiry)_
- **BR-PG1-210** — State 3 EXPIRED: "Your subscription has expired", "Plan ended on [Date] · Access paused", previous coverage, "Reactivate to unlock everything again" / "Same plan, same cities — instant restoration on payment.", CTAs Reactivate Plan (primary), Upgrade Plan first. _(§ Subscription Renewal & Expiry)_
- **BR-PG1-211** — Unauthenticated users can search properties/projects but property images are not displayed. _(§ Search and Filters)_
- **BR-PG1-212** — Search results mix properties and projects; "View All" opens a vertical list sorted newest first. _(§ Search and Filters)_
- **BR-PG1-213** — 'Quick Match and Search' section inherits the previously selected city but operates independently. _(§ Search and Filters)_
- **BR-PG1-214** — Asset class search filter changes from radio button to checkbox (multi-select). _(§ Search and Filters)_
- **BR-PG1-215** — Property must align with asset classes and cities selected at registration (and the active subscription tier); single asset class → only that type; multiple → must specify when posting. _(§ Property Management BR1, 7, 8, 21)_
- **BR-PG1-216** — Rate per sq. ft. (Carpet) = Quoted Rent / Carpet Area; Quoted Rent = Carpet Area × Rate per sq ft; auto-calculated (PR sheet D68–70). _(§ Property Management BR2–4)_
- **BR-PG1-217** — Non-registered users cannot view property images until they register; after registration images show unless hidden by the lister (then request required). _(§ Property Management BR5)_
- **BR-PG1-218** — Default property type on form reset/refresh is Office (replacing V1 Retail default). _(§ Property Management BR6)_
- **BR-PG1-219** — Agents cannot upload Managed Space properties (Keydemand only). _(§ Property Management BR7; Edge cases)_
- **BR-PG1-220** — "Yes" fields (e.g., Amenities, Washroom Available) become non-editable once the listing receives its first response. _(§ Property Management BR9, 19; Data Lock; Demand BR16)_
- **BR-PG1-221** — Property "other documents" upload works like LinkedIn (upload and name files). _(§ Property Management BR10)_
- **BR-PG1-222** — One image is mandatory per image field (not video); images can be hidden and requested with accept/reject. _(§ Property Management BR11)_
- **BR-PG1-223** — No inbox; property/demand responses are shown in the dashboard or self-view (or "Matches" tab) as a list. _(§ Property BR12; Demand BR8)_
- **BR-PG1-224** — Agents can delete or deactivate their own listings. _(§ Property Management BR13)_
- **BR-PG1-225** — Property ID / Project ID / Demand ID are permanent, non-editable visible tags. _(§ Property BR14; step 6; Demand BR13)_
- **BR-PG1-226** — Image categories "interior", "exterior", "Front Side" (all required); images < 5 MB JPG/PNG, ≥ 300 ppi; video < 20 MB MP4; first Front Side image is the main image (design must say so at upload). _(§ Property BR15; Media Constraints)_
- **BR-PG1-227** — Property contact request to an Occupier: 72 hours to accept/reject; else auto-nullified with rejection message. _(§ Property BR16)_
- **BR-PG1-228** — Paywall if a registered agent requests contact details "more than twice or thrice". _(§ Property BR17)_
- **BR-PG1-229** — Deactivating a property removes it immediately from the public marketplace and matching, keeping data in the dashboard for reactivation. _(§ Property BR18)_
- **BR-PG1-230** — Office requirement > 5000 sq ft goes to the Keydemand team, not the platform. _(§ Property BR20)_
- **BR-PG1-231** — Map only on property (not demand): location marker, leaflet, nearby bank, bus stop, restaurant, shopping etc. by asset class; street view opens as a same-page pop-up. _(§ Property BR22)_
- **BR-PG1-232** — Registered-unsubscribed agents can list exactly 1 free property; a second attempt triggers the paywall; subscribed = unlimited. _(§ Property Edge Cases)_
- **BR-PG1-233** — External listing view CTAs: Download (PDF), Save (shortlist), Share (Email, Whatsapp), View Phone number; Self view CTAs: Deactivate, Edit, Delete (top), View Response (bottom). _(§ View Property/Demand flows)_
- **BR-PG1-234** — Demand Carpet Area and Location are checked at submission; high-value demands are routed exclusively to the Keydemand team and not matched to agents. _(§ Demand BR1, 11)_
- **BR-PG1-235** — Agents may get a no-CTA notification that x demands exist in their area, to prompt property posting. _(§ Demand BR2)_
- **BR-PG1-236** — Only the Keydemand team can explore/search demands; front-end users (agents, brands) get matches via backend relevancy (agents: F&B, Retail, Office only). _(§ Demand BR3, 17; Blackout Rule)_
- **BR-PG1-237** — Office tenant city threshold (e.g., 5,000 sq ft Mumbai): exceeding demands are transferred to Keydemand, not an agency. _(§ Demand BR4)_
- **BR-PG1-238** — Enterprise bulk demand upload via Excel is required. _(§ Demand BR5)_
- **BR-PG1-239** — Registered, subscribed and expired users get WhatsApp alerts for inbound leads and market summaries. _(§ Demand BR6)_
- **BR-PG1-240** — Agents can post demands for clients within their subscription asset classes and cities; they see only demands matching their registered asset class and city. _(§ Demand BR7, 9)_
- **BR-PG1-241** — Supplier "request to connect" on a demand: poster has 72 hours; otherwise auto-nullified with system rejection. _(§ Demand BR10; 72-Hour SLA)_
- **BR-PG1-242** — A tenant self-selecting 'Enterprise Solution' on a demand transfers it immediately to the Keydemand admin team. _(§ Demand BR11)_
- **BR-PG1-243** — Demand detail page shows the requester a real-time list of "Interested Properties"/"Matched Listings". _(§ Demand BR12)_
- **BR-PG1-244** — High-value demands handled by Keydemand show "Assigned to Keydemand Specialist." in self-view. _(§ Demand BR14)_
- **BR-PG1-245** — Demand deactivation stops matching; demands auto-move to "Inactive" after a set period (e.g., 60 days) if not renewed. _(§ Demand BR15)_
- **BR-PG1-246** — Office demand: 1 fixed location + up to 4 other interested locations. _(§ Demand BR19; Agent step 3)_
- **BR-PG1-247** — Projects are matched against all demands using key fields; no relevancy percentage shown. _(§ Demand BR20)_
- **BR-PG1-248** — Flex Demand (Keydemand) is Phase 2. _(§ Demand BR21)_
- **BR-PG1-249** — Office occupier demand CTA is "View phone number"; others "Request phone number". _(§ Demand BR22)_
- **BR-PG1-250** — Expired agents cannot view pushed demands or request contact. _(§ Demand Edge Cases)_
- **BR-PG1-251** — Projects are flagged in admin as regular, sponsored or exclusive; sponsored = developer-paid, city-specific, limited slots (e.g., 3–5 per city); exclusive = mandated solely to Keydemand, nationwide banner/carousel independent of city. _(§ Project Management 5–7)_
- **BR-PG1-252** — Distinct visual markers (golden star, ribbon, asterisk) differentiate standard properties, regular, sponsored and exclusive projects. _(§ Project Management 8)_
- **BR-PG1-253** — Property images are blurred for unregistered users while project images are shown, to capture a mobile number. _(§ Project Management 9)_
- **BR-PG1-254** — Project page: filters Location, Asset Class, transaction type; detail shows Brochures, Floorplans, Built-Up Area, Possession Date; CTAs "Show Interest" or "WhatsApp". _(§ Project Management 1–4)_
- **BR-PG1-255** — Unregistered project interest → form → lead to project RM, assigned Keydemand team, admin, stored under the project; registered → auto-captured, CTA "interest shown on this project on <date>". _(§ Project Management 10–11)_
- **BR-PG1-256** — Agent notification timing: Demand Relevancy instant (bulk summary if many); Property Relevancy, Image Request, Phone number Request instant; Subscriptions 3 days prior & same day; Marketing from Keydemand; New Projects Uploaded instant (bulk to new users); Demand/Property Active Status once every 3 months (keep active or deactivate per response). _(§ Agent Specific Home Page › NavBar 6)_
- **BR-PG1-257** — Notification templates for demand relevancy, property relevancy (solo/multiple/weekly), image request and phone number request as transcribed. _(§ Notifications content)_
- **BR-PG1-258** — WhatsApp/SMS notifications are categorised Transactional (mandatory) vs Promotional (opt-out toggles). _(§ Hamburger 7)_
- **BR-PG1-259** — Image requests received support "Bulk Approve Verified" and a per-property filter. _(§ Body › Image request)_
- **BR-PG1-260** — Outbound image request status is shown on the card itself; on acceptance the card shows a view phone number button; stored in Hamburger › Enquiries, not on the dashboard yet. _(§ Body › Image request requested)_
- **BR-PG1-278** — NavBar "Free Listing" is shown only to unregistered users and is not an option in any other journey; the navbar is not universal and changes per user-specific page; free listing is limited per asset class and disappears once the quota is over. _(§ Agent Specific Home Page › Business Rules)_
- **BR-PG1-279** — Explore Properties redirects straight to the explore page for the user's selected asset class; if Retail, F&B and Office are selected show Office first, else Retail; all transaction types default to lease. _(§ Agent Specific Home Page › Business Rules; Header 3)_
- **BR-PG1-280** — Image request display: Accepted → images shown only to the requesting user; Pending → "pending" shown on the card; Rejected → images stay hidden and a CTA is shown to the requester. Image requests do not expire (72-hour nullification not applied) and the preview status applies uniformly to all users. _(§ Display logic for the image request status; Body › Image request)_
- **BR-PG1-281** — Phone number viewed is a passive event needing no approval; it is a two-way reveal — the lister gets the viewer's Name, User type, Mobile number and the property/demand viewed, and is notified via WhatsApp; the lead stays "Unread" until clicked. _(§ Body › Phone number viewed)_
- **BR-PG1-282** — Outbound phone number requests: a brand rejection still counts toward the 5 free lifetime clicks; brand/supplier has 4 working days (skipping Saturday and Sunday) to accept/reject; requests unanswered after 72 hours fall under Rejected; a 6th request prompts "Kindly subscribe to continue". _(§ Body › Phone number requested)_
- **BR-PG1-283** — Delete Account is a form; on receipt the Keydemand team reaches out to the agent and deletes the account. Deactivate Account needs dialog confirmation, hides all listings and marks the agent inactive; "Reactivate account" on the home page returns them as registered-not-subscribed — within the original subscription period benefits resume (listings must be manually reactivated), outside it they must subscribe again or are prompted on any CTA. _(§ Account Management; Hamburger 2)_
- **BR-PG1-284** — Agent access by state (① Non-registered, ② Registered-not-subscribed, ③ Subscribed, ④ Expired): landing page, explore properties (limited for ①) and project page — all; property page and contact CTA — ②③ (② max 5 requests, ③ unlimited); Subscribe now — ①②④; Dashboard — ②③④ (④ may be read-only); Profile — ②③④; Post property/demand — ②③ (② 1 listing, ③ unlimited); WhatsApp alerts — ②③④. _(§ Access & Permissions for each type of Agent)_

### Open questions / ambiguities in this doc
- OTP length 4 vs 6 unresolved.
- OPEN comment AAAB6Sl7MWw: whether upgrading is part of subscription flows (answer: Customize/Renew covers it).
- Resolved comments (no recorded answer): refunds/credits when a city is removed; double charge confusion for added cities; grace period on expiry; re-registering with same info; admin-side reactivation.
- Mid-cycle billing here ("next month's bill"/"next few months") contradicts V1.1 (immediate proration).
- Property BR17 paywall "more than twice or thrice" contradicts 5 free contacts elsewhere.
- Demand self-view CTAs say "Property listing gets deactivated" (copy error).
- Property BR16 (72h to Occupier) and Demand BR10 vs V1.1 4-working-day brand SLA.
- "Project Interested" also includes "chosen as favourites" here.
- Agent Specific Home Page section self-declares as in-progress (last update 31 May 2026).
- Notification "Nullified/Expired … Is it 72 hours?" — open question in text.
- Exclusive project CTA "Enquire Now" vs "Show Interest" elsewhere.

---
## All User Journeys in Keydemand V2  [AUTHORITATIVE]
**Source:** Google Doc · ID `1lyX8vwFoW48XPY6L6QjtH-DQT0f60Zw0D2ZYmIU7X4U` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-06 · sections read: 1–12 (all user types) · no comments · read coverage: 100%

### Content

#### 1. Property Agent
- **What They Can Do:**
  - **List Properties & Demands:** Upload commercial property inventory and client space requirements across Office, Retail, and F&B asset classes.
  - **Trial Allowance:** Use a free trial plan with 1 property listing or 1 demand posting, and 5 lifetime contact reveals.
  - **Pro Subscription Upgrades:** Subscribe to a paid Pro Plan (Metro ₹1,000/mo, Non-Metro ₹750/mo, PAN India ₹5,000/mo) for unlimited property listings, unlimited contact reveals, and automated real-time WhatsApp lead alerts.
  - **Privacy Control:** Hide listing photos behind "Do Not Show Images" approval gates to protect direct sourcing.
  - **Match Management:** View automated property-demand matches and manage inbound contact/image requests on their dashboard.
- **What They Cannot Do:**
  - Cannot post Managed Space properties or Managed Space demands.
  - Cannot search or explore the global Demands Directory (matching happens automatically via backend relevancy).
  - Cannot view High-Ticket Demands exceeding city size thresholds (unless unlocked by Admins or posted by external agents >10,000 sq ft in Bangalore).
  - Cannot post or edit listings in cities or asset classes outside their active subscription/selection.

#### 2. Brand — Retail (Individual)
- **What They Can Do:**
  - **Post Expansion Demands:** Post up to 3 free Retail space requirements (1 during onboarding + 2 post-registration).
  - **Explore Supply:** Browse and search commercial listings across Retail, F&B, and Office asset classes.
  - **Direct Contacts:** View up to 5 property contacts directly (sharing details over WhatsApp).
  - **SLA Control:** Accept or reject inbound agent connection requests on their demands within a 4-working-days SLA window.
- **What They Cannot Do:**
  - Cannot post F&B, Office, or Managed Space demands.
  - Cannot post a 4th demand without upgrading to an Enterprise plan.
  - Cannot search or explore the global Demands Directory.
  - Cannot post property supply listings.

#### 3. Brand — F&B (Individual)
- **What They Can Do:**
  - **Post Expansion Demands:** Post up to 3 free F&B space requirements (1 during onboarding + 2 post-registration).
  - **Explore Supply:** Browse commercial property listings across F&B, Retail, and Office asset classes.
  - **Direct Contacts:** View up to 5 property contacts directly (sharing details over WhatsApp).
  - **SLA Control:** Accept or reject inbound agent connection requests on their demands within a 4-working-days SLA window.
- **What They Cannot Do:**
  - Cannot post Retail, Office, or Managed Space demands. Cannot post a 4th demand without upgrading to an Enterprise plan.
  - Cannot search or explore the global Demands Directory.
  - Cannot post property supply listings.

#### 4. Office Tenant (Individual)
- **What They Can Do:**
  - **Post Office Search:** Post 1 free Office space demand (with an option to indicate interest in Managed Space during onboarding).
  - **Explore Supply:** Search properties and developer projects across Office and Managed Space categories.
  - **Two-Way Reveal:** Click "View Phone Number" to instantly trigger a two-way contact exchange via WhatsApp (sharing landlord details with the tenant and tenant details with the landlord without manual approval delays).
  - **Direct Unlocks:** View up to 5 property contacts directly.
- **What They Cannot Do:**
  - Cannot post Retail or F&B demands, nor post property supply listings. But if they opt for Managed Supply during registration, they can post Managed Space too.
  - Cannot post a 2nd demand without upgrading to an Enterprise plan.
  - Cannot search or explore the global Demands Directory.
  - Demands exceeding high-value size thresholds (e.g., 5,000 sq ft in Mumbai) bypass public agent feeds and route exclusively to Keydemand.

#### 5. Managed Space Tenant / Occupier (Individual)
- **What They Can Do:**
  - **Post Seat Requirements:** Post 1 free Managed Space seat/workspace requirement.
  - **Explore Workspace Supply:** Search coworking hubs, operator centers, and Office properties.
  - **Two-Way Reveal:** View property contacts via instant Two-Way Reveal (routing details directly to Keydemand / space operators).
- **What They Cannot Do:**
  - Cannot post Office, Retail, or F&B demands, nor post property supply listings.
  - Cannot post a 2nd demand or requirements >20 seats without upgrading to an Enterprise plan.
  - Posted requirements are strictly hidden from external agents/operators and visible **only** to the internal Keydemand team.
  - Cannot search or explore the global Demands Directory.

#### 6. Enterprise Brand — Retail
- **What They Can Do:**
  - **Corporate Portal Access:** Log in via unique mobile numbers & OTP for regional expansion representatives under a single corporate brand account.
  - **Auto-Fill Formats:** Use pre-configured brand templates (store format, carpet area, frontage) to deploy multi-city requirements in seconds.
  - **Centralized Tracking:** Access dedicated Point of Contact (POC) details, multi-user demand tracking, and CRM lead statuses (Approved/Rejected/Open).
  - **Bulk Uploads:** Share bulk expansion sheets via Excel with their assigned Keydemand Relationship Manager (RM) for Control Panel uploads.
  - **Explore Supply:** Browse Retail, F&B, and Office property listings.
  - POC can do edits, delete, and deactivate on their behalf
- **What They Cannot Do:**
  - Cannot post F&B or Office demands.
  - Representatives cannot self-manage sub-user accounts or edit demands posted by other team members (managed via Admin Control Panel).
  - Requirements bypass public agent feeds entirely for private blackout servicing

#### 7. Enterprise Brand — F&B
- **What They Can Do:**
  - **Corporate Portal Access:** Log in via individual representative mobile numbers & OTP under a unified corporate brand account.
  - **Auto-Fill Formats:** Use pre-set F&B templates (seating, kitchen, utility specs) to post requirements across multiple locations.
  - **Centralized Tracking:** View assigned Keydemand POC details, multi-user demand tracking, and portfolio metrics.
  - **Bulk Uploads:** Submit multi-city requirements via Excel to their Keydemand RM for central upload.
  - POC can do edits, delete, and deactivate on their behalf
  - **Explore Supply:** Browse F&B, Retail, and Office property supply.
- **What They Cannot Do:**
  - Cannot post Retail or Office demands.
  - Representatives cannot manage sub-user accounts or edit colleague postings directly.
  - Requirements bypass public agent feeds for private, offline servicing.

#### 8. Enterprise Office Tenant
- **What They Can Do:**
  - **Corporate Expansion Access:** Access multi-user regional team logins under a single corporate organization.
  - **Post Requirements:** Post large-scale Office and Managed Space demands (If opted for during registration) via direct entry or bulk Excel upload with their assigned Keydemand RM.
  - POC can do edits, delete, and deactivate on their behalf
  - **Explore Supply:** Search Office and Managed Space properties and projects.
  - **Portfolio Tools:** Access dedicated POC handholding, workspace analytics.
- **What They Cannot Do:**
  - Cannot post Retail or F&B, managed space office demands.
  - Cannot self-manage sub-user accounts on the front end.
  - Large-ticket requirements bypass public agent feeds and are serviced privately by Keydemand.

#### 9. Enterprise Managed Office Tenant
- **What They Can Do:**
  - **Bulk Seat Search:** Access corporate portal logins for team seat requirements (>20 seats).
  - **Post Requirements:** Post Managed Space demands with dedicated POC assistance and bulk upload support.
  - **Explore Supply:** Search Managed Space hubs, flex centers, and Office properties.
  - POC can do edits, delete, and deactivate on their behalf
- **What They Cannot Do:**
  - Cannot post Retail or F&B demands.
  - Requirements are completely blacked out from external agents/operators and accessible **only** to Keydemand's internal execution team.
  - Cannot self-manage sub-users or edit colleague postings directly.

#### 10. Keydemand Team (Internal Execution Team)
- **What They Can Do:**
  - **Exclusive Directory Search:** **The ONLY user group authorized to search, filter, and explore the global Demands Directory**.
  - **Advanced Overseer Access:** Bypass hidden image locks (viewing photos overlaid with "Hidden to others") and bypass contact paywalls.
  - **Full Inventory Capabilities:** Post and manage properties and demands across all asset classes (Office, Retail, F&B, Managed Space).
  - **Lead & High-Ticket Management:** Manage High-Ticket Leads (HTLs), Exclusive Projects, and assigned Enterprise accounts.
  - **Broker Monitoring:** Audit onboarded broker activity (requirements added, contact attempts, missed calls) via a monitoring panel.
- **What They Cannot Do:**
  - Cannot edit, delete, or deactivate user profiles via the front-end (must be executed via backend Control Panel).
  - Cannot edit or delete colleague listings (Read-Only access to colleagues' data under "KD Listings").
  - Cannot post or edit demands on behalf of Enterprise brands via front-end (must use backend Control Panel bulk upload).

#### 11. Developer
- **What They Can Do:**
  - **Feature Projects:** Display commercial or residential real estate developments as "Projects" (Standard, Premium/Sponsored, or Exclusive) across target cities.
  - **Receive Direct Leads:** Receive project inquiry leads routed directly to their contact person, assigned Keydemand RM
  - **View Projects:** View their published project pages on the platform.
- **What They Cannot Do:**
  - **No Front-End Login/Registration:** Onboarded strictly offline via the backend Control Panel by Keydemand Admins.
  - **Cannot Post Individual Property Cards:** Restricted strictly to uploading multi-unit "Projects".
  - Cannot self-upload or edit project data directly on the front-end.

#### 12. Managed Space Operator
- **What They Can Do:**
  - **Feature Centers & Hubs:** List flexible coworking centers, serviced offices, and workspace hubs as "Projects" under the Managed Space asset class.
  - **Receive Seat Leads:** Receive direct center inquiries and seat leads routed to their designated team and Keydemand RMs.
- **What They Cannot Do:**
  - **No Front-End Login/Registration:** Onboarded offline via the backend Control Panel by Keydemand Admins.
  - **Cannot List Standard Individual Properties:** Restricted strictly to listing center/hub "Projects".
  - Cannot post space demands or self-upload listings directly on the front-end.

### Business rules extracted
- **BR-PG1-261** — Agent: lists properties and demands in Office, Retail, F&B only; free trial = 1 property listing or 1 demand posting + 5 lifetime contact reveals. _(§ 1)_
- **BR-PG1-262** — Agent Pro Plan: Metro ₹1,000/mo, Non-Metro ₹750/mo, PAN India ₹5,000/mo → unlimited listings, unlimited contact reveals, real-time WhatsApp lead alerts. _(§ 1)_
- **BR-PG1-263** — Agents cannot view High-Ticket Demands over city thresholds unless unlocked by Admins or posted by external agents >10,000 sq ft in Bangalore. _(§ 1)_
- **BR-PG1-264** — Agents cannot post/edit listings outside their active subscription/selection cities and asset classes. _(§ 1)_
- **BR-PG1-265** — No front-end user except the Keydemand team can search/explore the global Demands Directory. _(§ 1–9; § 10)_
- **BR-PG1-266** — Individual Retail brand: up to 3 free Retail demands (1 onboarding + 2 post-registration); explore Retail, F&B, Office; view up to 5 property contacts (shared over WhatsApp); cannot post F&B/Office/Managed Space demands, a 4th demand (needs Enterprise) or property listings. _(§ 2)_
- **BR-PG1-267** — Individual F&B brand: same as Retail but posts only F&B demands. _(§ 3)_
- **BR-PG1-268** — Individual brands accept/reject inbound agent connection requests within a 4-working-day SLA. _(§ 2–3)_
- **BR-PG1-269** — Individual Office Tenant: 1 free Office demand (Managed Space interest option at onboarding; may post Managed Space if opted); explore Office and Managed Space properties and projects; "View Phone Number" triggers instant two-way WhatsApp contact exchange with no approval; up to 5 contacts; 2nd demand needs Enterprise; demands above thresholds (e.g., 5,000 sq ft Mumbai) route only to Keydemand. _(§ 4)_
- **BR-PG1-270** — Individual Managed Space Occupier: 1 free seat requirement; explore coworking hubs, operator centres and Office; two-way reveal routed to Keydemand/operators; a 2nd demand or >20 seats needs Enterprise; requirements visible only to Keydemand. _(§ 5)_
- **BR-PG1-271** — Enterprise brands: per-representative mobile + OTP login under one brand account; brand format templates (Retail: store format, carpet area, frontage; F&B: seating, kitchen, utility specs); POC details, multi-user demand tracking, CRM lead statuses Approved/Rejected/Open; Excel bulk uploads via RM; POC can edit/delete/deactivate on their behalf; cannot self-manage sub-users or edit colleagues' demands; requirements bypass public agent feeds. _(§ 6–7)_
- **BR-PG1-272** — Enterprise Office Tenant: multi-user regional logins; post large Office (and Managed Space if opted) demands directly or via bulk Excel with RM; POC handholding and workspace analytics; no front-end sub-user management; large-ticket requirements serviced privately. _(§ 8)_
- **BR-PG1-273** — Enterprise Managed Office Tenant: team seat requirements >20 seats; Managed Space demands with POC and bulk upload; explore Managed Space hubs, flex centres, Office; fully blacked out from external agents/operators. _(§ 9)_
- **BR-PG1-274** — Keydemand Team: bypass hidden image locks (with "Hidden to others") and contact paywalls; post/manage properties and demands in all asset classes; manage HTLs, Exclusive Projects, assigned Enterprise accounts; audit broker activity (requirements added, contact attempts, missed calls) via a monitoring panel. _(§ 10)_
- **BR-PG1-275** — Keydemand Team cannot edit/delete/deactivate user profiles on the front end (Control Panel only), cannot edit/delete colleague listings (read-only under "KD Listings"), and cannot post/edit Enterprise brand demands on the front end (Control Panel bulk upload only). _(§ 10)_
- **BR-PG1-276** — Developers have no front-end login/registration (onboarded offline via Control Panel); they feature Projects (Standard, Premium/Sponsored, Exclusive), receive leads to their contact person and assigned RM, view their project pages; cannot post property cards or self-upload/edit project data. _(§ 11)_
- **BR-PG1-277** — Managed Space Operators have no front-end login (onboarded offline); list centres/hubs as Projects under Managed Space; receive seat leads to their team and Keydemand RMs; cannot list standard properties, post demands or self-upload. _(§ 12)_

### Open questions / ambiguities in this doc
- Enterprise Office Tenant: "Post … Office and Managed Space demands (If opted…)" vs "Cannot post Retail or F&B, managed space office demands" — contradictory.
- Agent Pro Plan omits Rest of India (₹1,000) and combined bundle prices given in Agent V1.1.
- "unless unlocked by Admins" for High-Ticket Demands — unlock mechanism not specified elsewhere.
- "POC can do edits, delete, and deactivate on their behalf" vs Keydemand Team "Cannot post or edit demands on behalf of Enterprise brands via front-end".
- Developer/Operator "No Front-End Login/Registration" vs Landing V1.0 "List your Project >>" form with phone + OTP and "registered number → dashboard".

---
## Group-level notes

### Version history
- Landing: "Version 1.0 - Landing Page Main…" (modified 2026-10-15) supersedes the untitled-version "Landing Page Main…" (modified 2026-08-05) — decided by "Version 1.0" in title and later date.
- Enterprise: "Version 1.0 Enterprise…" (2026-10-06) supersedes "Enterprise…" (2026-07-01) — version in title and later date.
- Agent home: "Version 1.1 Agent Home Page/Specific Page - Registered" (2026-10-02) supersedes "Agent Home Page/Specific Page - Registered" (2026-08-05) — version in title and later date.
- "Agent Complete Journey" (2026-06-09) is authoritative for the agent journey (login, profile, subscription, property, demand, project flows) per orchestrator; its embedded "Agent Specific Home Page" section is a 31 May 2026 snapshot of the old agent home doc and is superseded by V1.1 where they differ.
- "All User Journeys in Keydemand V2" (2026-10-06) is the newest cross-role summary.

### Conflicts across docs in this group
- **Contact-request SLA:** Agent V1.1 & All User Journeys: brand has 4 working days (excl. Sat/Sun); same V1.1 also auto-nullifies at 72 hours; Agent Complete Journey: 72 hours (occupier/demand poster). Unresolved — V1.1 is authoritative but self-contradictory.
- **Agent free contact limit:** 5 lifetime (Landing V1.0, Agent V1.1, All User Journeys, Journey Subscription BR) vs "more than twice or thrice" (Agent Complete Journey Property BR17). 5 is authoritative.
- **Agent trial:** Landing V1.0: 1 free property listing AND 1 free demand posting; All User Journeys: "1 property listing or 1 demand posting"; V1.1: "1 listing maximum".
- **Mid-cycle city additions:** Agent V1.1: prorated charge immediately, no refunds on city cancellation; Agent Complete Journey: amount reflects on next month's bill ("next few months"), "same if they want to remove". V1.1 authoritative.
- **Unregistered image visibility:** Landing V1.0: guests see property images by default (hidden only if lister/Keydemand withholds); Agent Complete Journey: non-registered users cannot view property images / images blurred, project images shown; Search rule: unauthenticated users see no property images; Agent V1.1 access table: non-registered cannot open property page. Landing V1.0 (newest) reverses the older "no images" stance, but the journey doc was not updated.
- **High-value thresholds:** Landing V1.0 enterprise target >5,000 sq ft / >20 seats; Journey: office >5,000 sq ft goes to Keydemand; All User Journeys: e.g. 5,000 sq ft Mumbai; Enterprise V1.0: "XYZ sq ft" custom per city; Agent V1.1/All User Journeys: agent-posted demand >10,000 sq ft in Bangalore bypasses the Keydemand-exclusive block.
- **Developer / Managed Space Operator onboarding:** Landing V1.0: enquiry form via "List your Project >>" with phone + OTP, registered number returns to dashboard; All User Journeys: no front-end login/registration, onboarded offline via Control Panel.
- **Office Occupier demand entry:** Landing V1.0 BR: "Developers/ Office Occupiers: Must fill out a dedicated Enquiry Form" and also "soft registration page"; All User Journeys & Enterprise V1.0: Office Tenant posts 1 free demand after OTP registration.
- **Operators posting demands:** Landing V1.0 Post a Demand role list includes "Managed Space Operator"; resolved comment and All User Journeys say operators cannot post demands.
- **Enterprise demand editing by Keydemand/POC:** Enterprise V1.0 & All User Journeys: "POC can add/edit/delete/deactivate"; Enterprise V1.0 Bulk Upload & All User Journeys §10: Keydemand users cannot post or edit demands on an enterprise brand's behalf on the front end.
- **Enterprise Office Tenant managed-space posting:** Enterprise V1.0 allows Managed Space if ticked; All User Journeys §8 both allows and forbids it.
- **Account deactivation and subscription:** "subscription stops and cannot be reactivated" vs "benefits resume if reactivated within original period" (Agent V1.1, Journey, old agent doc).
- **Agent dashboard leads:** Landing V1.0 says remove the redundant "lead management" section from the agent dashboard; Agent V1.1 keeps Leads and Enquiries tabs.
- **Project interest on dashboard:** Landing V1.0: dashboard has a "Projects Enquired" section; Agent V1.1 BR: "does not create a separate dashboard tab" but V1.1 dashboard Enquiries lists Projects enquired.
- **About section CTA:** Landing V1.0 "Request a Callback" (mobile only, but form lists more fields) and "Send an Enquiry → Calendly"; Agent Complete Journey/old agent: "Book demo" Calendly; Agent V1.1: Request a Callback with Name, Email, Phone, I am, Message.
- **Exclusive project CTA label:** "Show Interest" (Landing V1.0, Agent V1.1) vs "Enquire Now" (Agent Complete Journey home page section).
- **Enterprise metrics:** Enterprise Solutions page 6000+ properties / 250Mn+ sq ft / 100+ developers vs About Us page 8,000+ / 25Mn+ / 180+; old About Us: 26Mn+ sq ft, 1100+ Channel Partners.
- **Demand inactivity:** Journey: auto-"Inactive" after e.g. 60 days if not renewed vs Journey home-page notification: Active Status check every 3 months.
- **Expired agent:** V1.1 dashboard "may be read-only" and WhatsApp alerts available to ④; Journey: expired agents cannot view pushed demands or request contact, "no active actions"; Demand BR6 says expired users still get WhatsApp alerts.
- **OTP length:** 4 digits (6 proposed) — only in the Journey doc; not settled.
