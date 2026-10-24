# 14 — Analytics/Event Tracking, UTM/OneLink & Marketing Messaging

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Keydemand_UTM_OneLink_Spec.docx | Word (.docx) | `16u-PIo6K-PNJBDsowATlG8nrLSaYgNjh` | pradeepa.pv@futuristglobal.com | 2026-09-23 | AUTHORITATIVE |
| 2 | Keydemand_Event_Tracking_Docket.docx | Word (.docx) | `10bcWoWHj1jMBlhl9rWs1J9mHkfjaFKhD` | pradeepa.pv@futuristglobal.com | 2026-09-22 | AUTHORITATIVE (event list; destinations/channels are refined by doc 3) |
| 3 | Keydemand_Tracking_Implementation_Mapping.docx | Word (.docx) | `1_b3oo-U9VZs7yJtwpmSMzjsnAZ1L9uQD` | pradeepa.pv@futuristglobal.com | 2026-09-23 | AUTHORITATIVE |
| 4 | Keydemand Mktg Messaging Framework | Google Sheet (4 tabs) | `1o933swzZB3kMwpF1gGgYMFRfZCG0UXNKe6dOWZzpQ0k` | anand@futuristglobal.com | 2026-10-12 | AUTHORITATIVE (working draft; contains reviewer remarks such as "Reword", "To be rephrased") |

---
## Keydemand_UTM_OneLink_Spec.docx  [AUTHORITATIVE]
**Source:** Word .docx · ID `16u-PIo6K-PNJBDsowATlG8nrLSaYgNjh` · owner pradeepa.pv@futuristglobal.com · modified 2026-09-23 · sections read: Title/Purpose, A, B, C, "What we need back from dev team" · read coverage: 100%

### Content
# Tracking Codes & Deep-Link Spec

Keydemand V2 — Bengaluru Relaunch | Prepared by VF Interactive for Futurist Global (Krishna Chaitanya)

Purpose: one handoff covering both tracking-code systems VF Interactive will use for Keydemand campaigns. Section A (UTMs) is for our own reference only — nothing to build. Section B and C (OneLink + deep-link routes) need Krishna's team to register the routes inside the app so AppsFlyer can route users to the right screen after install or open.

## A. UTM Naming Convention — Web Links (Reference Only)

Applies to any link pointing at keydemand.in — organic posts, paid social, email, WhatsApp. GA4 reads these natively; no app or dev work involved. Listed here so Futurist Global recognizes them in GA4/GTM reporting and so naming stays consistent if their team ever builds a landing page variant.

| Parameter | Allowed values / pattern | Example |
|---|---|---|
| utm_source | meta, google, linkedin, whatsapp, email, chatgpt | utm_source=meta |
| utm_medium | cpc (paid search), paid_social, organic_social, email, whatsapp, referral | utm_medium=paid_social |
| utm_campaign | keydemand_blore_{objective}_{monyy} — e.g. launch, retarget-v1, agent-acq | utm_campaign=keydemand_blore_launch_oct26 |
| utm_content | Creative/ad variant identifier — {format}-{variant} | utm_content=carousel-v2 |
| utm_term | Search only — the matched keyword | utm_term=commercial+office+space+bengaluru |

## B. OneLink Template — App-Install & Open Attribution

OneLink is AppsFlyer's own link product for app-install attribution and deep linking — separate from UTMs. One base template is created once during the AppsFlyer SDK integration (Section A of the Tracking Implementation Mapping); every campaign link is a parameterized version of it.

| Parameter | What it is | Example |
|---|---|---|
| Base OneLink URL | Issued by AppsFlyer once the OneLink template is created during MMP setup (one template, reused across channels) | https://keydemand.onelink.me/xxxx |
| pid (media source) | Same values as utm_source — keeps web and app attribution consistent for reporting | pid=meta_int |
| c (campaign) | Same naming pattern as utm_campaign | c=keydemand_blore_launch_oct26 |
| af_channel | Placement within the source — feed, stories, search, display | af_channel=stories |
| af_ad / af_adset | Ad and ad-set names, for creative-level attribution in AppsFlyer | af_ad=carousel-v2 |
| deep_link_value | Internal route key — tells the app which screen to open post-install/open (see Section C) | deep_link_value=listing_detail |
| deep_link_sub1 | Optional — the specific ID for that route (e.g. listing ID, city slug) | deep_link_sub1=blr-koramangala-104 |

## C. Deep-Link Destinations — For Krishna's Team to Register

This is the actual dev dependency: each route below needs to exist as a recognized deep link inside the Capacitor app (both fresh-install and already-installed cases), so the AppsFlyer SDK can hand off the deep_link_value to the right in-app screen.

| Screen / destination | deep_link_value key | Notes for dev team |
|---|---|---|
| Home / city landing (Bengaluru) | city_home | Default fallback if no other value is passed — should already be the app's normal entry route. |
| Listing / project detail page | listing_detail | Needs deep_link_sub1 = listing ID. Used for retargeting and performance ads promoting a specific listing. |
| Search results — filtered | search_filtered | Params for locality, asset class, budget range passed via additional sub-params. Used for broad-intent campaigns. |
| Agent / Pro Plan upgrade screen | pro_plan_upgrade | Used for agent-acquisition campaigns (agents/brokers audience). Confirm this route works pre- and post-login. |
| Subscription / listing-builder screen | subscription_builder | Only relevant once the iOS payment flow is finalized — flagged for later, not needed for the 23 Oct launch set. |
| OTP / registration screen | register | Used for referral and early-access links driving new sign-ups. |
| Existing-user re-engagement (My Listings) | my_listings | Used for V1-customer win-back campaigns (Retention audience). |

### What we need back from dev team
1. Confirmation that each route in Section C exists (or can be added) as an app deep link, with the key names above — or their preferred key names, as long as they're shared back.
2. Confirmation that deferred deep linking is handled for both cases: user doesn't have the app yet (install → open → route) and user already has it (direct open → route).
3. The AppsFlyer Dev Key and App ID for the OneLink template — this is separate from the account-access requisition and can be shared directly with the dev team doing the SDK integration. _(No key values are present in the doc.)_
4. Point of contact at VF Interactive: Kishor | kishor@viralfever.in

### Business rules extracted
- **BR-TRK-001** — UTM convention applies to any link pointing at keydemand.in — organic posts, paid social, email, WhatsApp. _(§ A)_
- **BR-TRK-002** — UTMs are reference only; GA4 reads them natively; no app or dev work involved. _(§ Purpose, A)_
- **BR-TRK-003** — utm_source allowed values: meta, google, linkedin, whatsapp, email, chatgpt. _(§ A)_
- **BR-TRK-004** — utm_medium allowed values: cpc (paid search), paid_social, organic_social, email, whatsapp, referral. _(§ A)_
- **BR-TRK-005** — utm_campaign pattern: keydemand_blore_{objective}_{monyy}; objective examples launch, retarget-v1, agent-acq (e.g. keydemand_blore_launch_oct26). _(§ A)_
- **BR-TRK-006** — utm_content = creative/ad variant identifier, pattern {format}-{variant} (e.g. carousel-v2). _(§ A)_
- **BR-TRK-007** — utm_term is used for Search only — the matched keyword. _(§ A)_
- **BR-TRK-008** — OneLink is separate from UTMs; one base OneLink template is created once during AppsFlyer SDK integration and reused across channels; every campaign link is a parameterized version of it. _(§ B)_
- **BR-TRK-009** — Base OneLink URL is issued by AppsFlyer (format https://keydemand.onelink.me/xxxx). _(§ B)_
- **BR-TRK-010** — OneLink pid uses the same values as utm_source; c uses the same naming pattern as utm_campaign. _(§ B)_
- **BR-TRK-011** — af_channel = placement within source: feed, stories, search, display. _(§ B)_
- **BR-TRK-012** — af_ad / af_adset carry ad and ad-set names for creative-level attribution. _(§ B)_
- **BR-TRK-013** — deep_link_value is the internal route key telling the app which screen to open post-install/open; deep_link_sub1 is optional and carries the specific ID for that route (listing ID, city slug). _(§ B)_
- **BR-TRK-014** — Each Section C route must exist as a recognized deep link in the Capacitor app for both fresh-install and already-installed cases. _(§ C)_
- **BR-TRK-015** — city_home (Home / city landing, Bengaluru) is the default fallback when no other deep_link_value is passed and should be the app's normal entry route. _(§ C)_
- **BR-TRK-016** — listing_detail requires deep_link_sub1 = listing ID; used for retargeting and performance ads for a specific listing. _(§ C)_
- **BR-TRK-017** — search_filtered receives locality, asset class, budget range via additional sub-params; used for broad-intent campaigns. _(§ C)_
- **BR-TRK-018** — pro_plan_upgrade (Agent / Pro Plan upgrade screen) is used for agent-acquisition campaigns and must work both pre- and post-login. _(§ C)_
- **BR-TRK-019** — subscription_builder is only relevant once the iOS payment flow is finalized — not needed for the 23 Oct launch set. _(§ C)_
- **BR-TRK-020** — register (OTP / registration screen) is used for referral and early-access links driving new sign-ups. _(§ C)_
- **BR-TRK-021** — my_listings (My Listings) is used for V1-customer win-back campaigns (Retention audience). _(§ C)_
- **BR-TRK-022** — Deferred deep linking must be handled for: install → open → route, and direct open → route. _(§ What we need back, 2)_
- **BR-TRK-023** — Dev team may use their own route key names provided they are shared back to VF Interactive. _(§ What we need back, 1)_
- **BR-TRK-024** — AppsFlyer Dev Key and App ID are shared directly with the SDK-integration dev team, separate from the account-access requisition. _(§ What we need back, 3)_

### Open questions / ambiguities in this doc
- pid is said to use "Same values as utm_source" but the example is `pid=meta_int` (utm_source value is `meta`). Which is correct?
- utm_campaign uses underscores as delimiters, but example objectives (`retarget-v1`, `agent-acq`) contain hyphens. Is a mixed delimiter intended?
- search_filtered "additional sub-params" are not named (deep_link_sub2…?), and the budget-range format is undefined.
- Pending dev confirmations: route existence/key names, deferred deep linking in both cases, AppsFlyer Dev Key and App ID.
- "Section A of the Tracking Implementation Mapping" is referenced, but that doc has no section labelled for SDK setup (its "A." is Acquisition events).

---
## Keydemand_Event_Tracking_Docket.docx  [AUTHORITATIVE]
**Source:** Word .docx · ID `10bcWoWHj1jMBlhl9rWs1J9mHkfjaFKhD` · owner pradeepa.pv@futuristglobal.com · modified 2026-09-22 · sections read: intro, A–H, footnote, "What we need back" · read coverage: 100%

### Content
# Keydemand V2 — Event Tracking Docket

Prepared by VF Interactive for Futurist Global | 18 September 2026

This is the event list requested at the 15 September alignment meeting, built from the user roles, CTAs, and journeys in the Reference Guide shared by Pradeepa. Ask: please mark each event as trackable via existing web tags (GA4/GTM/Meta Pixel, given the WebView-based build) or as requiring native/backend handling, in the last column — feel free to edit this table directly. Events marked with an asterisk (\*) map directly to a conversion metric already named in the Reference Guide, so please treat those as highest priority to confirm first.

Note: the docket defines no per-event properties/parameters and no separate platform column. The only platform context is "WebView-based build" and the "Trackable via web tags? (confirm)" column (blank = not yet confirmed).

## A. Acquisition — Web-to-App Handoff
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| App Store / Play Store Link Clicked | User clicks [Download on Google Play] / [Download on App Store] footer CTA on the web platform. | Yes |
| App Install | App downloaded and installed on device. | |
| App First Open | First launch of the app after install. | |

## B. Registration & Authentication
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| High-Intent Action Attempted (Guest) | Unregistered user clicks [View Phone Number] / [Contact Us] / [Request Images] / [Show Interest]. | |
| OTP Modal Opened | Mobile OTP verification modal is triggered. | |
| OTP Verified (Registration Completed) \* | Guest becomes a Registered User. | |
| OTP Modal Abandoned | Modal opened but not completed — named in the Reference Guide as a retargeting trigger (SMS/WhatsApp remarketing). | |

## C. Registered User — First Actions
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| First Demand / Listing Posted \* | First requirement or property/listing submitted by a newly registered user, any persona. | |
| Free Allowance 80% Used | In-app notification trigger named in the Reference Guide (e.g. 4 of 5 free contacts used). | |
| Quota / Paywall Hit | 5th contact reveal, or 1st/3rd demand limit reached depending on persona. | |

## D. Property Agent
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| Property Listing Posted | [Post Property] submitted. | |
| Demand Posted (Agent) | [Post Demand] submitted on behalf of a client. | |
| Subscribe to Pro Plan Clicked | [Subscribe to Pro Plan] clicked, opening Razorpay checkout. | |
| Subscription Payment Completed \* | Razorpay checkout succeeds. | |
| Subscription Payment Failed | Razorpay checkout fails. | |
| Renew Membership Clicked | [Renew Membership] clicked. | |
| Cancel Membership Clicked | [Cancel Membership] clicked. | |
| Reactivate Account Clicked | [Reactivate Account] clicked on an expired/deactivated account. | |
| Mid-Cycle City Added/Removed | Subscription coverage modified mid-cycle. | |

## E. Brand — Retail & F&B
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| Retail / F&B Demand Posted \* | [Post Retail Demand] / [Post F&B Requirement] submitted. | |
| Connection Request Received | Inbound agent/supplier connection request logged against a demand (needs timestamp for SLA tracking). | |
| Connection Request Accepted \* | [Accept Connection Request] clicked, within the 4-working-day SLA. | |
| Connection Request Rejected | [Reject Connection Request] clicked. | |
| Enterprise Upgrade Prompt Triggered | 4th demand posting attempted. | |

## F. Tenant — Office & Managed Space
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| Office / Managed Space Requirement Posted \* | [Post Office Requirement] / [Post Managed Space Search] submitted. | |
| View Phone Number Clicked (Tenant) | [View Phone Number] clicked on a property listing. | |
| Two-Way Reveal Completed \* | Tenant and property owner contact details exchanged simultaneously. | |
| Enterprise Auto-Route Triggered | Requirement exceeds >20 seats or >5,000 sq ft threshold. | |

## G. Enterprise
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| Enterprise Solution Enquiry Submitted \* | [Enquire for Enterprise Solution] / [Submit Enterprise RFP] submitted. | |
| High-Ticket Demand Submitted | Demand exceeds high-ticket threshold — triggers immediate Keydemand outreach per the Reference Guide. | |

## H. Cross-Cutting Engagement
| Event | Trigger / Description | Trackable via web tags? (confirm) |
|---|---|---|
| Search Performed | Filters used: City, Locality, Asset Class, Transaction Type. | |
| Listing / Project Viewed | Property or project detail page viewed. | |
| Show Interest Clicked | [Show Interest] clicked on a project card. | |
| Request a Callback Submitted | [Request a Callback] form submitted. | |
| Book a Demo / Send an Enquiry Clicked | Calendly link opened. | |

\* Maps directly to a conversion metric already named in the Reference Guide (e.g. Guest-to-Registered Conversion Rate, Trial-to-Paid Conversion Rate, SLA Response Rate, Two-Way Unlocks, Qualified Enterprise Lead Rate).

What we need back from Futurist Global:
1. Mark each event as trackable via existing web tags (GA4/GTM/Meta Pixel) or as requiring native/backend handling.
2. Confirm the App Install and App First Open events specifically — these are the two that sit outside any WebView content and are the actual crux of the AppsFlyer/MMP discussion.
3. Once logging is configured, we'll validate end-to-end using the test personas already shared (Amit Patel, Rajesh Kumar, Vikram Mehta, Sara Khan).

### Business rules extracted
- **BR-TRK-025** — Starred (\*) events are highest priority to confirm: OTP Verified (Registration Completed), First Demand / Listing Posted, Subscription Payment Completed, Retail / F&B Demand Posted, Connection Request Accepted, Office / Managed Space Requirement Posted, Two-Way Reveal Completed, Enterprise Solution Enquiry Submitted. _(§ intro, footnote)_
- **BR-TRK-026** — Conversion metrics named: Guest-to-Registered Conversion Rate, Trial-to-Paid Conversion Rate, SLA Response Rate, Two-Way Unlocks, Qualified Enterprise Lead Rate. _(§ footnote)_
- **BR-TRK-027** — App Store / Play Store Link Clicked fires when the user clicks [Download on Google Play] / [Download on App Store] footer CTA on the web platform; trackable via web tags = Yes. _(§ A)_
- **BR-TRK-028** — App Install = app downloaded and installed; App First Open = first launch after install; both sit outside WebView content. _(§ A, need-back 2)_
- **BR-TRK-029** — High-Intent Action Attempted (Guest) fires when an unregistered user clicks [View Phone Number] / [Contact Us] / [Request Images] / [Show Interest]. _(§ B)_
- **BR-TRK-030** — OTP Modal Opened fires when the mobile OTP verification modal is triggered; OTP Verified fires when a Guest becomes a Registered User. _(§ B)_
- **BR-TRK-031** — OTP Modal Abandoned = modal opened but not completed; it is a retargeting trigger (SMS/WhatsApp remarketing). _(§ B)_
- **BR-TRK-032** — First Demand / Listing Posted = first requirement or property/listing submitted by a newly registered user, any persona. _(§ C)_
- **BR-TRK-033** — Free Allowance 80% Used is an in-app notification trigger (e.g. 4 of 5 free contacts used). _(§ C)_
- **BR-TRK-034** — Quota / Paywall Hit = 5th contact reveal, or 1st/3rd demand limit reached depending on persona. _(§ C)_
- **BR-TRK-035** — Property Agent events: Property Listing Posted ([Post Property] submitted); Demand Posted (Agent) ([Post Demand] submitted on behalf of a client). _(§ D)_
- **BR-TRK-036** — Subscribe to Pro Plan Clicked = [Subscribe to Pro Plan] clicked, opening Razorpay checkout; Subscription Payment Completed / Failed = Razorpay checkout succeeds / fails. _(§ D)_
- **BR-TRK-037** — Renew Membership Clicked, Cancel Membership Clicked, Reactivate Account Clicked (on an expired/deactivated account) are tracked as separate events. _(§ D)_
- **BR-TRK-038** — Mid-Cycle City Added/Removed fires when subscription coverage is modified mid-cycle. _(§ D)_
- **BR-TRK-039** — Retail / F&B Demand Posted = [Post Retail Demand] / [Post F&B Requirement] submitted. _(§ E)_
- **BR-TRK-040** — Connection Request Received is logged against a demand and needs a timestamp for SLA tracking. _(§ E)_
- **BR-TRK-041** — Connection Request Accepted = [Accept Connection Request] clicked, within the 4-working-day SLA; Rejected = [Reject Connection Request] clicked. _(§ E)_
- **BR-TRK-042** — Enterprise Upgrade Prompt Triggered fires when a 4th demand posting is attempted (Brand). _(§ E)_
- **BR-TRK-043** — Office / Managed Space Requirement Posted = [Post Office Requirement] / [Post Managed Space Search] submitted. _(§ F)_
- **BR-TRK-044** — View Phone Number Clicked (Tenant) = [View Phone Number] clicked on a property listing. _(§ F)_
- **BR-TRK-045** — Two-Way Reveal Completed = Tenant and property owner contact details exchanged simultaneously. _(§ F)_
- **BR-TRK-046** — Enterprise Auto-Route Triggered when a requirement exceeds >20 seats or >5,000 sq ft. _(§ F)_
- **BR-TRK-047** — Enterprise Solution Enquiry Submitted = [Enquire for Enterprise Solution] / [Submit Enterprise RFP] submitted. _(§ G)_
- **BR-TRK-048** — High-Ticket Demand Submitted fires when a demand exceeds the high-ticket threshold and triggers immediate Keydemand outreach. _(§ G)_
- **BR-TRK-049** — Search Performed captures filters: City, Locality, Asset Class, Transaction Type. _(§ H)_
- **BR-TRK-050** — Listing / Project Viewed = property or project detail page viewed; Show Interest Clicked = [Show Interest] on a project card. _(§ H)_
- **BR-TRK-051** — Request a Callback Submitted = [Request a Callback] form submitted; Book a Demo / Send an Enquiry Clicked = Calendly link opened. _(§ H)_
- **BR-TRK-052** — End-to-end validation uses test personas Amit Patel, Rajesh Kumar, Vikram Mehta, Sara Khan. _(§ need-back 3)_

### Open questions / ambiguities in this doc
- The "Trackable via web tags?" column is blank for every event except App Store / Play Store Link Clicked (Yes) — Futurist Global still has to mark each event.
- No event properties/parameters (e.g. persona, city, listing ID, plan) are defined for any event.
- "High-ticket threshold" value is not defined.
- Quota / Paywall Hit "1st/3rd demand limit depending on persona" — which persona has which limit is not stated here; Enterprise Upgrade Prompt fires on the 4th demand (consistent with a 3-demand limit for Brand).
- "Free Allowance 80% Used" example (4 of 5) is 80% of contacts only; listings/demands thresholds unspecified.
- Subscription payment described as Razorpay only; iOS payment path not addressed here.

---
## Keydemand_Tracking_Implementation_Mapping.docx  [AUTHORITATIVE]
**Source:** Word .docx · ID `1_b3oo-U9VZs7yJtwpmSMzjsnAZ1L9uQD` · owner pradeepa.pv@futuristglobal.com · modified 2026-09-23 · sections read: header, tech stack, note, legend, mapping table A–H, implementation channels · read coverage: 100%

### Content
# Tracking Implementation Mapping

Keydemand V2 — AppsFlyer + GA4/GTM | Prepared by VF Interactive for Futurist Global

Tech stack: TypeScript mono repo (Svelte/SvelteKit + Capacitor), GraphQL/REST, Fastify (Node.js) backend. AppsFlyer's official Capacitor plugin bridges the native iOS/Android SDKs into the SvelteKit codebase.

Important: AppsFlyer's own glossary defines a "conversion" as covering both attributed installs and in-app events — please confirm directly with AppsFlyer whether every in-app event consumes the 12,000 free-conversion pool, or only a defined set. Either way, the events below are split so only genuinely valuable milestones go to AppsFlyer; everything high-frequency stays in GA4/GTM, which is unmetered.

Legend: ● AppsFlyer conversion (worth the spend) ● GA4/GTM only (free, unlimited)

| Event | Destination | AppsFlyer Event Name | Implementation Channel | Note |
|---|---|---|---|---|
| **A. Acquisition — Web-to-App Handoff** | | | | |
| App Store / Play Store Link Clicked | AppsFlyer | OneLink click (attribution) | OneLink (web) | Not a logged event — this is the attribution link itself. |
| App Install | AppsFlyer | af install (automatic) | Automatic SDK capture | Core paid-media conversion. No code needed beyond SDK init. |
| App First Open | AppsFlyer | First launch (automatic) | Automatic SDK capture | Fires with SDK init on first session. |
| **B. Registration & Authentication** | | | | |
| High-Intent Action Attempted (Guest) | GA4/GTM | — | Web tag (GTM) | Pre-registration, often on web before install. |
| OTP Modal Opened | GA4/GTM | — | Client SDK / GTM | Low value for ad optimization — skip AppsFlyer. |
| OTP Verified (Registration Completed) | AppsFlyer | af_complete_registration | Client SDK (Capacitor plugin) | Key milestone — standard AppsFlyer event, maps cleanly to Meta/Google campaign optimization. |
| OTP Modal Abandoned | GA4/GTM | — | Client SDK / GTM | Retargeting-audience trigger, not an AppsFlyer conversion. |
| **C. Registered User — First Actions (Activation)** | | | | |
| First Demand / Listing Posted | AppsFlyer | first_listing_posted (custom) | Client SDK (Capacitor plugin) | The Activation-stage milestone — worth the spend. |
| Free Allowance 80% Used | GA4/GTM | — | Backend log / GTM | In-app notification trigger, not ad-attribution-relevant. |
| Quota / Paywall Hit | GA4/GTM | — | Client SDK / GTM | Useful for retargeting audiences, not an AppsFlyer conversion. |
| **D. Property Agent** | | | | |
| Property Listing Posted | AppsFlyer | listing_posted (custom) | Client SDK (Capacitor plugin) | Supply-side activation signal. |
| Demand Posted (Agent) | AppsFlyer | demand_posted (custom) | Client SDK (Capacitor plugin) | |
| Subscribe to Pro Plan Clicked | GA4/GTM | — | Client SDK / GTM | Intent signal, not the revenue event itself. |
| Subscription Payment Completed | AppsFlyer | af_subscribe (standard) | Server-to-Server (Fastify backend) | Fires from the backend once Razorpay/Apple IAP confirms payment — matches the web-checkout flow discussed for iOS. |
| Subscription Payment Failed | GA4/GTM | — | Backend log / GTM | |
| Renew / Cancel / Reactivate Account | GA4/GTM | — | Backend log / GTM | Lifecycle events — only worth AppsFlyer if running renewal-specific re-engagement campaigns. |
| Mid-Cycle City Added/Removed | GA4/GTM | — | Backend log | |
| **E. Brand — Retail & F&B** | | | | |
| Retail / F&B Demand Posted | AppsFlyer | demand_posted_retail (custom) | Client SDK (Capacitor plugin) | |
| Connection Request Received / Accepted / Rejected | GA4/GTM | — | Backend log / GTM | SLA tracking — internal ops metric, not ad optimization. |
| Enterprise Upgrade Prompt Triggered | GA4/GTM | — | Client SDK / GTM | |
| **F. Tenant — Office & Managed Space** | | | | |
| Office / Managed Space Requirement Posted | AppsFlyer | requirement_posted (custom) | Client SDK (Capacitor plugin) | TG1's equivalent Activation milestone. |
| View Phone Number Clicked | GA4/GTM | — | Client SDK / GTM | High-frequency — keep out of AppsFlyer to protect the conversion budget. |
| Two-Way Reveal Completed | GA4/GTM | — | Client SDK / GTM | The real "match made" moment, but high volume — monitor before promoting to an AppsFlyer event. |
| Enterprise Auto-Route Triggered | GA4/GTM | — | Backend log | |
| **G. Enterprise** | | | | |
| Enterprise Solution Enquiry Submitted | AppsFlyer | enterprise_enquiry (custom) | Client SDK (Capacitor plugin) | High value, low volume — good candidate. |
| High-Ticket Demand Submitted | GA4/GTM | — | Backend log / GTM | |
| **H. Cross-Cutting Engagement** | | | | |
| Search Performed | GA4/GTM | — | Client SDK / GTM | Very high frequency — do not send to AppsFlyer. |
| Listing / Project Viewed | GA4/GTM | — | Client SDK / GTM | Same — GA4 only. |
| Show Interest Clicked | GA4/GTM | — | Client SDK / GTM | |
| Request a Callback Submitted | AppsFlyer | callback_requested (custom) | Client SDK (Capacitor plugin) | Decent lead-quality signal, moderate volume. |
| Book a Demo / Send an Enquiry Clicked | GA4/GTM | — | Client SDK / GTM | |

Three implementation channels used above:
1. Automatic SDK capture — install, first open, session events fire on their own once the SDK is initialized.
2. Client SDK (Capacitor plugin) — in-app milestones logged from the SvelteKit/Capacitor code via the AppsFlyer Capacitor plugin's event call.
3. Server-to-Server (S2S) — posted directly from the Fastify backend for events that complete outside the app (e.g. web-based payment confirmation via webhook).

### Business rules extracted
- **BR-TRK-053** — Tech stack for tracking: TypeScript mono repo (Svelte/SvelteKit + Capacitor), GraphQL/REST, Fastify (Node.js) backend; AppsFlyer's official Capacitor plugin bridges native iOS/Android SDKs into SvelteKit. _(§ Tech stack)_
- **BR-TRK-054** — Only genuinely valuable milestones go to AppsFlyer; everything high-frequency stays in GA4/GTM (unmetered). _(§ Important)_
- **BR-TRK-055** — AppsFlyer free tier has a 12,000 free-conversion pool; whether every in-app event consumes it is to be confirmed with AppsFlyer. _(§ Important)_
- **BR-TRK-056** — App Store / Play Store Link Clicked → AppsFlyer OneLink click (attribution), OneLink (web); not a logged event. _(§ A)_
- **BR-TRK-057** — App Install → AppsFlyer "af install (automatic)", automatic SDK capture, no code beyond SDK init; App First Open → "First launch (automatic)", fires with SDK init on first session. _(§ A)_
- **BR-TRK-058** — OTP Verified (Registration Completed) → AppsFlyer `af_complete_registration` (standard), Client SDK (Capacitor plugin). _(§ B)_
- **BR-TRK-059** — High-Intent Action Attempted (Guest) → GA4/GTM via Web tag (GTM); OTP Modal Opened and OTP Modal Abandoned → GA4/GTM via Client SDK / GTM, not AppsFlyer. _(§ B)_
- **BR-TRK-060** — First Demand / Listing Posted → AppsFlyer `first_listing_posted` (custom), Client SDK. _(§ C)_
- **BR-TRK-061** — Free Allowance 80% Used → GA4/GTM via Backend log / GTM; Quota / Paywall Hit → GA4/GTM via Client SDK / GTM. _(§ C)_
- **BR-TRK-062** — Property Listing Posted → AppsFlyer `listing_posted` (custom); Demand Posted (Agent) → AppsFlyer `demand_posted` (custom); both Client SDK. _(§ D)_
- **BR-TRK-063** — Subscribe to Pro Plan Clicked → GA4/GTM only (intent, not revenue). _(§ D)_
- **BR-TRK-064** — Subscription Payment Completed → AppsFlyer `af_subscribe` (standard) sent Server-to-Server from the Fastify backend once Razorpay/Apple IAP confirms payment. _(§ D)_
- **BR-TRK-065** — Subscription Payment Failed, Renew / Cancel / Reactivate Account → GA4/GTM via Backend log / GTM; Mid-Cycle City Added/Removed → GA4/GTM via Backend log. Lifecycle events go to AppsFlyer only if running renewal-specific re-engagement campaigns. _(§ D)_
- **BR-TRK-066** — Retail / F&B Demand Posted → AppsFlyer `demand_posted_retail` (custom), Client SDK. _(§ E)_
- **BR-TRK-067** — Connection Request Received / Accepted / Rejected → GA4/GTM via Backend log / GTM (internal SLA ops metric); Enterprise Upgrade Prompt Triggered → GA4/GTM via Client SDK / GTM. _(§ E)_
- **BR-TRK-068** — Office / Managed Space Requirement Posted → AppsFlyer `requirement_posted` (custom), Client SDK (TG1's Activation milestone). _(§ F)_
- **BR-TRK-069** — View Phone Number Clicked and Two-Way Reveal Completed → GA4/GTM via Client SDK / GTM; Two-Way Reveal to be monitored before promoting to an AppsFlyer event. Enterprise Auto-Route Triggered → GA4/GTM via Backend log. _(§ F)_
- **BR-TRK-070** — Enterprise Solution Enquiry Submitted → AppsFlyer `enterprise_enquiry` (custom), Client SDK. High-Ticket Demand Submitted → GA4/GTM via Backend log / GTM. _(§ G)_
- **BR-TRK-071** — Search Performed, Listing / Project Viewed, Show Interest Clicked, Book a Demo / Send an Enquiry Clicked → GA4/GTM via Client SDK / GTM; Search and Listing View must not be sent to AppsFlyer. _(§ H)_
- **BR-TRK-072** — Request a Callback Submitted → AppsFlyer `callback_requested` (custom), Client SDK. _(§ H)_
- **BR-TRK-073** — Three implementation channels: (1) Automatic SDK capture (install, first open, session events); (2) Client SDK (Capacitor plugin) event call from SvelteKit/Capacitor code; (3) Server-to-Server from Fastify for events completing outside the app (e.g. web payment confirmation via webhook). _(§ channels)_

### Open questions / ambiguities in this doc
- Whether every in-app event consumes the 12,000 free-conversion pool is unconfirmed (to be asked to AppsFlyer).
- Two-Way Reveal Completed: "monitor before promoting to an AppsFlyer event" — promotion criteria/volume threshold undefined.
- Subscription Payment Completed mentions "Razorpay/Apple IAP" and "web-checkout flow discussed for iOS" — the iOS payment path is not final (see UTM spec: subscription_builder deferred).
- "TG1" is used without definition (presumably Tenant target group 1).
- AppsFlyer is listed as destination for App Store / Play Store Link Clicked but it is "not a logged event", so no GA4 event is defined for the web footer click.

---
## Keydemand Mktg Messaging Framework  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1o933swzZB3kMwpF1gGgYMFRfZCG0UXNKe6dOWZzpQ0k` · owner anand@futuristglobal.com · modified 2026-10-12 · tabs read: Sheet1 (rows 1–110, all populated rows; grid 1092 rows), Sheet2 (rows 1–33), Ads-Set2 (rows 1–15), Videos (rows 1–80) · read coverage: 100% of populated cells

### Content

#### Tab: Sheet1 — "Performance Marketing Messaging Framework - BLORE"
Columns: Funnel Stage | Audience | Objective | Message | Action | (col G: unlabelled flag; "N" on 3 rows). Blank cells under Funnel Stage/Audience/Objective carry the value from above. Row numbers are sheet rows.

**Awareness — Existing V1 Customers**

| Row | Funnel Stage | Audience | Objective | Message | Action |
|---|---|---|---|---|---|
| 5 | Awareness | Existing V1 Customers | They know about Keydemand. Need to be told about the new platform. | Create emails for RMs to share with their clients, Send emails to Brokers in Blore, Send emails to enterprise customers + Whatsapp | Explore platform |
| 6 | | | They know about Keydemand. Need to be told about the new platform. | https://docs.google.com/document/d/1KX6YjxiY67tcm68Gu5mtTgKhLKMatt-fk7cWz0XTx9k/edit?tab=t.0 | |

**Awareness — Office seekers in Blore** (Objective: Create awareness abt Keydemand)

| Row | Message | Action | Col G |
|---|---|---|---|
| 8 | Only platform for commercial real estate | Explore platform | |
| 9 | Explore 2 Mn+ of office space in Blore | Explore platform | |
| 10 | Explore offices in growing areas in Blore | Explore platform | |
| 11 | \<Hennur\> is the new office destination in Blore | Explore offices | |
| 12 | From 20 to 2000 plug & play seats | Explore managed offices | |
| 13 | Explore offices with dedicated parking | Explore platform | |
| 14 | From independent office spaces to tech parks | Explore platform | |
| 15 | From start-ups to GCCs | Explore office spaces | |
| 16 | From 2000 sft to 200,000 sft office spaces | Explore platform | |
| 17 | Discover office spaces near metros | Explore platform | |
| 18 | Save your team commute time. Discover offices near metros. | Explore platform | |
| 19 | Make work easier. Discover offices near lifestyle areas. | Explore platform | |
| 20 | Discover offices near residential areas. | Explore platform | |
| 21 | Set-up an office where your talent is. | Explore office spaces | |
| 22 | Find office with 3 easy steps. Sign-up > Explore > Connect | Explore office spaces | N |
| 23 | All kinds of office places can be found at Keydemand | Explore office spaces | N |
| 24 | Lease up next year? The search starts now, not then. | Post a requirement | N |
| 25 | 9 months to lease expiry is when you should be looking. | Explore platform | |
| 27 | From 20-seat startup flex desks to 200k sq. ft. GCC headquarters. Keydemand has your back | | |
| 28 | Plug-and-Play Managed Offices & Flex Workspaces for Growing Teams in Bengaluru | | |
| 29 | From 20 to 2,000 seats / Bare-shell or managed flex? We've got you covered | | |
| 30 | Set up your office where your Bengaluru talent actually lives. | | |
| 31 | Cut your Bengaluru office search from weeks to days with direct matching on Keydemand | | |
| 32 | Hennur is Bengaluru's new office destination. / Access verified office spaces across growing tech corridors. | | |
| 33 | Looking for office space in Bengaluru? Skip unverified listings. Find Your Office on Keydemand | | |
| 34 | Discover office spaces near Bengaluru metros / Slash commute times. | | |
| 35 | From startups to GCCs: India's No 1 dedicated commercial CRE platform. | | |
| 36 | Stop chasing unverified brokers. Get direct Bengaluru matches. | | |
| 37 | Stop searching residential-first portals. Switch to India's dedicated CRE platform. | | |
| 38 | Scaling in Bengaluru? Access 2M+ sq. ft. of prime office inventory instantly on Keydeman _(sic)_ | | |
| 39 | Modular flex spaces or enterprise-grade tech parks, find both on Keydemand. | | |

**Awareness — Agents/ Brokers** (Objective row 40: Connect with brokers in Blore)

| Row | Objective | Message | Action |
|---|---|---|---|
| 40 | Connect with brokers in Blore | Emails & Whatsapp to database talking about the platform and benefits | |
| 41 | | Looking for an office space in Bengaluru but couldn't find the right fit? Drop your space requirement here and let our team match you with verified options. | |
| 42 | Whatsapp Message | Close Bengaluru CRE Deals 2x Faster! / List your commercial inventory on Keydemand V2 and get direct occupier matches sent straight to your WhatsApp. / Start with 1 Free Listing + 5 Direct Contact Unlocks! / [Claim Your Free Listing Now] | |
| 45 | Create awareness abt Keydemand | _(blank)_ | Download App |
| 46 | | _(blank)_ | Download App |
| 47 | | Relevant matching for your inventory. | Download App |
| 48 | | Work with large developers to match your client needs. | Download App |
| 49 | | Add your space requirements. | Download App |
| 50 | | Work with start-ups to GCCs | Download App |
| 52 | | The only platform built 100% for commercial real estate—zero residential noise. | |
| 53 | | Commercial real estate matching simplified for modern businesses. | |
| 54 | | List your commercial inventory in minutes and reach verified corporate tenants. | |
| 55 | | Stop waiting for leads / Get matched directly to active space requirements. | |
| 56 | | Stop searching residential portals for corporate workspace. / Hennur to ORR: We've got them covered | |
| 57 | | Tell us your headcount and budget. Keydemand will match you with verified office inventory. | |
| 58 | | Skip offline back-and-forth / Compare Bengaluru office options in one place. | |
| 59 | | Post Commercial Inventory. / Match Real Corporate Demand. | |

**Retargeting — Office seeker** (Objective: Clicked on ad, Did not register)

| Row | Message | Action |
|---|---|---|
| 61 | \<Southwest Airlines\> found a 1Mn Sft space in 3 days. | Explore platform |
| 62 | Are you looking at anything specific? Allow us to find it for you. | Explore platform |
| 63 | Did not find a space that suits you? Drop a requirement. | Explore platform |
| 64 | Did not find a space that suits you? Talk to our RM | Explore platform |
| 65 | Closed 100+ office spaces in Blore | Explore platform |
| 66 | Still searching for Bengaluru office space? / Skip the browsing. / Drop your headcount and get matched with verified inventory instantly. | |
| 67 | 100+ Bengaluru office spaces matched. Yours is next. / Tell us what you need, and we'll connect you directly on Keydemand | |
| 68 | Can't find the right office layout? / Talk to a Keydemand specialist for curated options across ORR, Whitefield, and CBD. | |
| 69 | Looking for pre-fitted office floors in Bengaluru? We have off-market options ready for immediate move-in. | |
| 70 | Looking for something specific? Access unlisted flex and bare-shell spaces across ORR, Whitefield, and CBD only on Keydemand | |
| 71 | Skip the search grid. Connect directly with a dedicated Bengaluru CRE advisor to handle shortlisting. | |
| 72 | Tell us your preferred location and timeline; we'll send 3 verified options straight to your inbox. Connect today | |

**Retargeting — Agents** (Objective: _(blank; inherits "Clicked on ad, Did not register")_)

| Row | Message | Action |
|---|---|---|
| 73 | Relevancy | |
| 74 | Leads/ Views | |
| 75 | Stop scrolling for deals / Let our engine match your property directly to demands | |
| 76 | Stop wasting hours on dead directories / Get real-time matches sent straight to your Inbox | |
| 77 | 100% verified commercial leads delivered straight to your WhatsApp. Zero broker delays, zero cold calling | |
| 78 | Stop rival agents from stealing your inventory. Control who views your property photos with one click. | |
| 79 | Why pay per lead? Upgrade to Pro Member for ₹1,000\*/mo(Per bundle) and Unlock unlimited Tenant/Brand contacts | |
| 80 | Your inventory. Your rules. / or / Tired of rival agents taking credit for your exclusive listings? / Protect your listings. Keydemand's Gated Image Access lets you lock property visuals behind an approval gate. | |

**Conversion — Office seeker** (Objective: High-intent users, ready to sign-up)

| Row | Message | Action |
|---|---|---|
| 81 | We are adding 10 new spaces everyday | Register now |
| 82 | Found what you're looking for yet? Can we help? | |
| 83 | Did not find a space that suits you? Talk to our RM | |
| 84 | Registration benefits | |
| 85 | From 20 plug-and-play seats to 200,000 sq. ft. tech park floors. / Access fresh office listings updated daily with zero broker noise. | |
| 86 | Tired of scrolling outdated property feeds? / Receive real-time match alerts the moment a matching office goes live. | |
| 87 | Need an office near a metro to cut commute times? / Compare verified options across Bengaluru's top tech hubs with total pricing transparency. | |
| 88 | Haven't Found what you're looking for yet? / Get Instant Matches against verified Bengaluru Office Spaces. | |
| 89 | Need a specialized space or >10,000 sq. ft. in Bengaluru? / Skip public feeds. Get end-to-end handholding with us | |
| 90 | Did not find an office that suits your expansion? / Get end-to-end support from our Strategy team [Request RM Callback] | |
| 92 | Why register on Keydemand? / 100% Verified Landlord & Tenant Profiles. / Instant Two-Way WhatsApp Contact Exchange. / Real-Time Relevancy Matching & Alerts. / [Verify OTP & Get Started] | |

**Conversion — Agents** (Objective: _(blank)_; theme "Subscriptions")

| Row | Message |
|---|---|
| 94 | Subscriptions |
| 95 | Upgrade to "Pro Member" for ₹1,000/month / Unlimited Property & Demand Listings. / Unlimited Direct Occupier Contact Reveals. / Automated Real-time Transactional WhatsApp Lead Alerts. / Image Privacy Controls to secure your direct sourcing. / [Become a Pro Member] |
| 96 | Stop paying per lead. / Get unlimited commercial office leads and direct tenant matches across Bengaluru for one flat monthly fee. / [Claim Pro Access] |
| 97 | Unlimited listings, Unlimited lead reveals. / Upgrade to Pro Member for ₹1,000/mo and stop paying per lead / [Upgrade to Pro] |
| 98 | Scale your CRE inventory with zero listing caps. / Post unlimited Office, Retail, and F&B properties across Bengaluru. / [Claim Unlimited Listings] |
| 99 | One flat fee, infinite opportunities. List unlimited properties and unlock unlimited occupier contacts for ₹1,000/month. [Become a Pro Member] |
| 100 | Zero delays, zero missed deals. Receive instant WhatsApp notifications on views for your contact details. [Get Live Lead Alerts] |
| 101 | Flat monthly pricing built for high-performing Agents. / Choose Metro (₹1,000/mo), Non-Metro (₹750/mo), or PAN India (₹5,000/mo). / [Select Your Plan] |
| 102 | No long-term lock-in. / Flexible 30-day billing cycles give you complete freedom to scale your city coverage anytime. / [Start 30-Day Pro Cycle] |

**Retention — Office seeker** (Objective: Signed-up Users)

| Row | Message |
|---|---|
| 103 | Upsell, Refer, Enterprise |

**Retention — Agents**

| Row | Message |
|---|---|
| 105 | Subscriptions, Explore other cities, other asset classes |
| 106 | Add new cities or asset bundles anytime. / Instant mid-month upgrades with automated prorated charges ensure zero double-billing. |
| 107 | Go nationwide with the PAN India Pro Plan (₹5,000/mo). / List and Access Demands/Commercial properties across top Indian metros. |
| 108 | Add new cities or asset bundles anytime. / Instant mid-month upgrades with automated prorated charges ensure zero double-billing. _(duplicate of row 106)_ |
| 109 | Scaling beyond Bengaluru? / Explore verified commercial supply and demands across Mumbai, Hyderabad, Pune, and Delhi-NCR. |
| 110 | From single-city trial agent to PAN India Pro Member. / Upgrade your account in 60 seconds via Razorpay and unlock direct contacts nationwide. |

#### Tab: Sheet2 — "Prelaunch Ad Messages"
Columns: # | Headline | Subhead | CTA | (col E: reviewer remark, unlabelled)

| # | Headline | Subhead | CTA | Remark |
|---|---|---|---|---|
| 1 | Stop scrolling 3BHKs for Offices. | India's dedicated Commercial Real Estate platform. Launching soon. | Register your Interest | Header is a bit of a thinker. ppl wouldn't relate to the message of exisitng platforms offer residences primarily and we offer commercial. |
| 2 | Hennur is the new ORR. | Explore Bengaluru's emerging office hotspots. Only on Keydemand. | Register your Interest | |
| 3 | To scale your office space, look north. | Hennur & North Bengaluru office spaces. Coming soon to Keydemand. | Register your Interest | |
| 4 | 20 seats or a 200,000 sft office. | One platform for every Bengaluru office requirement. Coming soon. | Register your Interest | |
| 5 | Is your talent is in \<Indiranagar\>? \<Whitefield\>? \<North Bengaluru\>? \<HSR\>? | Find offices near them. Listing soon on Keydemand. | Register your Interest | Would there be multiple locality wise campaigns? |
| 6 | Find an office near a metro. Not near madness. | Discover Bengaluru offices that cut commute times. Only on Keydemand. | Register your Interest | Do we physically identify belts with good metro connectivity and complie them in a page/search result? |
| 7 | Plug. Play. Scale. | Bengaluru's best managed offices, all in one place. Launching soon. | Register your Interest | |
| 8 | No hidden costs. No surprises. | Bengaluru's most transparent commercial real estate platform. Coming soon. | Register your Interest | |
| 9 | Office in Indiranagar, Whitefield, or Hennur | Every Bengaluru micro-market. One platform. Launching soon. | Register your Interest | |
| 10 | Commercial real estate. Zero residential noise. | India's dedicated Commercial Real Estate platform. Launching soon. | Register your Interest | To be rephrased |
| 11 | An office location is now a CEO-level decision. | Bengaluru's first platform built for strategic commercial real estate. | Register your Interest | Can we hire right people here, can we retain them, can our leaders and clients fly in and out easily, would this location still be competitive in 2032? |
| 12 | If you lose talent, you lose the war. | Find offices near Bengaluru's best talent. | Register your Interest | |
| 13 | Don't ignore your second biggest cost. | Find office rentals that align with your growth and balance sheet. | Register your Interest | Reword |
| 14 | HR, this one's for you! | Bengaluru's dedicated commercial real estate platform for people-first offices. | Register your Interest | |
| 15 | Founders don't have the time for this. | Bengaluru's fastest way to find an office. Launching soon. | Register your Interest | Reword |
| 16 | Grade A+ or nothing. | Bengaluru's best commercial inventory, in one place. Launching soon. | Register your Interest | Change |
| 17 | A bad lease will haunt you for years. | Bengaluru's most transparent commercial real estate platform. Launching soon. | Register your Interest | Reword |
| 18 | Find a workspace that works for you. | Discover an office space that matches your ambition. Launching soon. | Register your Interest | |
| 19 | Your next office. Your next chapter. | Bengaluru's dedicated platform for growing companies. Launching soon. | Register your Interest | |
| 20 | Your office is your talent strategy. | Bengaluru's dedicated commercial real estate platform for people-first offices. | Register your Interest | |
| 21 | From first desk to full campus. | Bengaluru offices for every stage. Listing soon on Keydemand. | | |
| 22 | Find your office fast and find it right. | India's dedicated Commercial Real Estate platform. Launching soon. | | |
| 23 | For every stage. For every scale. | Bengaluru's dedicated Commercial Real Estate platform. Launching soon. | | |
| 24 | Office hunting shouldn't feel like a gamble. | Bengaluru's dedicated Commercial Real Estate platform. Launching soon. | | |
| 25 | Every office. Every size. One platform. | Bengaluru's dedicated Commercial Real Estate platform. Launching soon. | | |
| 26 | Your team shouldn't dread Mondays. | Discover Bengaluru offices that cut commute times. Listing soon on Keydemand. | | |
| 27 | Search for the right office on the right platform. | India's dedicated Commercial Real Estate platform. Launching soon. | | |
| 28 | Expanding or consolidating, we've got your back. | Office spaces from 20 seats to 200,000 sft. Listing soon on Keydemand. | | |
| 29 | Cheap offices always end up costing more. | Bengaluru's most transparent commercial real estate platform. Coming soon. | | |

#### Tab: Ads-Set2 — "Ad Set 2"
Columns: # | Headline | Subhead | Primary Text | Post Headline | LinkedIn Post Text. Hashtags kept verbatim.

**1**
- Headline: An office location is now a CEO-level decision.
- Subhead: Find the right office for your talent on the right platform. Keydemand. Launching soon.
- Primary Text: Hiring. Retention. Client access. Long-term relevance. / Four things a lease decision quietly decides. / Keydemand. Strategic commercial real estate for Bengaluru. Launching soon.
- Post Headline: Your office address is not a facilities decision anymore
- LinkedIn Post Text:
  > An office location used to be a facilities decision.
  >
  > Somewhere between the lease, the commute, and the carpet area, it stopped being one.
  >
  > Today, the address decides whether you can hire the right people. Whether they stay. Whether your leadership and clients can reach you without a two-hour detour. Whether the location still holds up five years from now.
  >
  > These are not real estate questions. These are business questions.
  >
  > Keydemand is Bengaluru's first platform built for strategic commercial real estate.
  >
  > All new Keydemand. Launching soon.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

**2**
- Headline: Find a workspace that works for you.
- Subhead: Discover an office space that matches your growth needs. Launching soon.
- Primary Text: An office that fits your team. Your commute. Your growth. / Not one you settle for. / Find a workspace that works for you. Listing soon on Keydemand.
- Post Headline: Let the right office space find you.
- LinkedIn Post Text:
  > Most offices aren't chosen. They're settled for.
  >
  > The lease was convenient. The timeline was tight. Someone shared it.
  >
  > Two years later, your team is commuting two hours and your meeting rooms are always full.
  >
  > Keydemand helps you find a Bengaluru workspace that matches your growth plan, not a plan B.
  >
  > All new Keydemand. Launching soon.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

**3**
- Headline: Your office is your talent strategy.
- Subhead: Bengaluru's dedicated commercial real estate platform for people-first offices.
- Primary Text: A bad location can do great harm to a good team. This is about to change. Keydemand. Bengaluru's platform for people-first offices. Launching soon.
- Post Headline: Finding the right office space shouldn't be a chore.
- LinkedIn Post Text:
  > Nobody needs convincing that the office matters.
  >
  > You've watched a good hire leave over a two-hour commute. You've signed a lease you regretted by month three.
  >
  > The problem was never awareness. It was access. The right spaces were never visible, and the ones that were visible were never right.
  >
  > Keydemand is India's first CRE platform built for people-first offices. Not because you need the argument made again. Because you need the search to actually work.
  >
  > All new Keydemand. Launching soon.
  >
  > #CRESimplified #TalentStrategy #Bengaluru #OfficeSpace

**4**
- Headline: For every stage. For every scale.
- Subhead: Bengaluru's dedicated Commercial Real Estate platform. Launching soon.
- Primary Text: 20 seats or 200,000 sft. / Every stage. Every scale. One platform. / Keydemand. Launching soon in Bengaluru.
- Post Headline: Find offices that match your scale.
- LinkedIn Post Text:
  > Your first office and your fifth office don't look anything alike.
  >
  > Neither does a 20-seat startup and a 2,000-seat GCC.
  >
  > Keydemand is India's dedicated commercial real estate platform. From first desk to full campus.
  >
  > All new Keydemand. Launching soon.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

**5**
- Headline: Search for the right office on the right platform.
- Subhead: India's dedicated Commercial Real Estate platform. Launching soon.
- Primary Text: Wrong platform. Wrong results. / Right platform. Right office. / Keydemand, India's dedicated commercial real estate platform. Launching soon in Bengaluru.
- Post Headline: Right platform. Right office.
- LinkedIn Post Text:
  > Searching for an office on a generic portal is like searching for fast fashion on a furniture site.
  >
  > You know how that goes.
  >
  > Keydemand is India's dedicated commercial real estate platform. Built for commercial spaces, only commercial spaces.
  >
  > All new Keydemand. Launching soon in Bengaluru.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

**6**
- Headline: Expanding or consolidating, we've got your back.
- Subhead: Office spaces from 20 seats to 200,000 sft. Listing soon on Keydemand.
- Primary Text: Doubling your team or right-sizing your floorplate. / Growing up or scaling down. / Office spaces from 20 seats to 200,000 sft. Listing soon on Keydemand.
- Post Headline: Growth-ready, scale-ready office spaces.
- LinkedIn Post Text:
  > One team is outgrowing its co-working desks. Another is hunting for a 40,000 sft floor in Whitefield. A third needs a campus and has no idea where to start.
  >
  > Different problems. One platform that solves all three - Keydemand.
  >
  > Office spaces from 20 seats to 200,000 sft, across Bengaluru.
  >
  > All new Keydemand. Launching soon.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

**7**
- Headline: Making rent your first priority may cost you more.
- Subhead: Search among office spaces that match other key criteria. Keydemand. Launching soon.
- Primary Text: A low rent in the wrong location isn't a saving. It's a longer commute, a harder hire, and a lease you'll regret. / Search among office spaces that match what actually matters. Listing soon on Keydemand.
- Post Headline: Location first, all else next.
- LinkedIn Post Text:
  > Making rent your first priority may cost you more.
  >
  > It narrows your search before it begins. You rule out the right micro-market because it's ₹20 higher per sq. ft. You settle for a location your team resents. You optimise for a line item and pay for it elsewhere.
  >
  > Rent matters. It just shouldn't lead.
  >
  > Search among office spaces that match every key criterion.
  >
  > Office spaces from 20 seats to 200,000 sft, across every Bengaluru micro-market. All new Keydemand. Launching soon.
  >
  > #CRESimplified #CommercialRealEstate #Bengaluru #OfficeSpace

#### Tab: Videos
**Videos for Promotion** (col A Cohort / col B Messages) and **How to Videos on Website** (col E, with col F notes)

| Cohort | Messages (Videos for Promotion) | How to Videos on Website | Note |
|---|---|---|---|
| Generic Master — For Website & LinkedIn | About the platform | How to filter listings | We will use these for promotions after launching generic videos |
| | Keydemand is for everyone | How to list a property | |
| | All types of spaces | How to post a demand | |
| | Find your match | How to Sign-up and Pick a User Type | |
| | List a property | How to Subscribe, Upgrade & Manage, What will you get | |
| | Complimentary listing | How to manage your listings or demands | |
| | Post a demand | How to respond to an enquiry | |
| | Complimentary demand request | How is your inventory secured | |
| | Get notified | How to use your dashboard | |
| | Dashboard previews and reports | How to avail complimentary listings | |
| | Enterprise plans | How to upgrade to Enterprise | |
| For Campaign Promo — Office seekers | About the platform | Keydemand for Agents | Mobile, take a video or photos of a property and list it on Keydemand |
| | (blank) | Keydemand for Office Tenants | |
| | All types of office spaces | Keydemand for Retail Tenants | |
| | Find your match | Keydemand for Managed Space Operators | |
| | Post a demand | Keydemand for Developers | |
| | Complimentary demand | | |
| | View and connect with 5 contacts | | |
| | Get notified | | |
| | Dashboard previews and reports | | |
| Other Messages — Platform Familiarity | Easy search, easy to use | | |
| | Relevant listings (Relevancy logic) | | |
| | Easy to post a Demand | | |
| | Filter by number of seats | | |

**Generic Master Video Script** (verbatim, line breaks as in source; parentheses are visual directions)

> Finding the right commercial space / Was never about awareness / It was access.
>
> The right spaces were never visible. / And the ones that were visible / Were never right.
>
> Keydemand is here to change this. / Meet India's dedicated commercial real estate platform.
>
> One platform. Every stakeholder. / Office Tenants. Retail Brands. Developers. Managed Space Operators. Property Consultants. / All under one roof. (Stock Images from Adobe Stock - Indian faces)
>
> Looking for an office? (Landing Page Screen) / A managed space? / Retail spaces or F&B? / Find the ones that fit. On Keydemand.
>
> Post a demand. (Demand Screen) / Get matched by relevancy.
>
> List a property in minutes. (Listing Screen) / Directly from your phone.
>
> Get instant alerts. (Alert message on WhatsApp) / On every match. Every enquiry. / Review it all in one dashboard. (Dashboard)
>
> And when you need more / Sign up as an Enterprise (Enterprise screen) / Get personalised support.
>
> Offices. Managed Spaces. Retail and F&B. / Across India.
>
> Keydemand / #CRESimplified / India's dedicated commercial real estate platform. / Get matched.

### Business rules extracted
- **BR-TRK-074** — Messaging framework is organised by Funnel Stage (Awareness, Retargeting, Conversion, Retention) × Audience (Existing V1 Customers, Office seekers, Agents/Brokers). _(§ Sheet1 header)_
- **BR-TRK-075** — Existing V1 Customers (Awareness) are reached by emails for RMs to share with clients, emails to Brokers in Blore, emails to enterprise customers + WhatsApp; CTA "Explore platform". _(§ Sheet1 r5)_
- **BR-TRK-076** — Office seeker Awareness CTAs: "Explore platform", "Explore offices", "Explore managed offices", "Explore office spaces", "Post a requirement". _(§ Sheet1 r8–25)_
- **BR-TRK-077** — Messages flagged "N" in col G: "Find office with 3 easy steps. Sign-up > Explore > Connect", "All kinds of office places can be found at Keydemand", "Lease up next year? The search starts now, not then." _(§ Sheet1 r22–24)_
- **BR-TRK-078** — Agent/Broker WhatsApp offer: "Start with 1 Free Listing + 5 Direct Contact Unlocks!" CTA [Claim Your Free Listing Now]. _(§ Sheet1 r42)_
- **BR-TRK-079** — Agent Awareness CTA is "Download App". _(§ Sheet1 r45–50)_
- **BR-TRK-080** — Retargeting (Office seeker) audience = clicked on ad, did not register; CTA "Explore platform". _(§ Sheet1 r61–65)_
- **BR-TRK-081** — Agents retargeting themes: Relevancy; Leads/Views; WhatsApp-delivered verified leads; Gated Image Access (lock property visuals behind an approval gate; control who views property photos). _(§ Sheet1 r73–80)_
- **BR-TRK-082** — Pro Member price messaged as ₹1,000\*/mo (Per bundle), unlocking unlimited Tenant/Brand contacts. _(§ Sheet1 r79)_
- **BR-TRK-083** — Conversion (Office seeker) audience = high-intent users, ready to sign-up; CTA "Register now"; claim "We are adding 10 new spaces everyday". _(§ Sheet1 r81)_
- **BR-TRK-084** — Office seekers needing a specialized space or >10,000 sq. ft. are offered end-to-end handholding; expansion seekers offered [Request RM Callback]. _(§ Sheet1 r89–90)_
- **BR-TRK-085** — Registration benefits: 100% Verified Landlord & Tenant Profiles; Instant Two-Way WhatsApp Contact Exchange; Real-Time Relevancy Matching & Alerts; CTA [Verify OTP & Get Started]. _(§ Sheet1 r92)_
- **BR-TRK-086** — Pro Member (₹1,000/month) benefits: Unlimited Property & Demand Listings; Unlimited Direct Occupier Contact Reveals; Automated Real-time Transactional WhatsApp Lead Alerts; Image Privacy Controls. _(§ Sheet1 r95)_
- **BR-TRK-087** — Agent plan prices: Metro ₹1,000/mo, Non-Metro ₹750/mo, PAN India ₹5,000/mo. _(§ Sheet1 r101, r107)_
- **BR-TRK-088** — Billing: no long-term lock-in; flexible 30-day billing cycles. _(§ Sheet1 r102)_
- **BR-TRK-089** — Cities or asset bundles can be added anytime with instant mid-month upgrades and automated prorated charges (zero double-billing). _(§ Sheet1 r106, r108)_
- **BR-TRK-090** — Pro Member receives instant WhatsApp notifications on views of their contact details. _(§ Sheet1 r100)_
- **BR-TRK-091** — Upgrade via Razorpay ("in 60 seconds"); expansion cities messaged: Mumbai, Hyderabad, Pune, Delhi-NCR. _(§ Sheet1 r109–110)_
- **BR-TRK-092** — Retention (Office seeker, signed-up users) themes: Upsell, Refer, Enterprise. Retention (Agents): Subscriptions, Explore other cities, other asset classes. _(§ Sheet1 r103, r105)_
- **BR-TRK-093** — Prelaunch ads CTA is "Register your Interest" (rows 1–20). _(§ Sheet2)_
- **BR-TRK-094** — LinkedIn posts carry hashtags #CRESimplified plus #CommercialRealEstate / #TalentStrategy, #Bengaluru, #OfficeSpace and the line "All new Keydemand. Launching soon." _(§ Ads-Set2)_
- **BR-TRK-095** — Office-seeker promo messaging: complimentary demand; view and connect with 5 contacts. _(§ Videos)_
- **BR-TRK-096** — "How to" website videos required: filter listings; list a property; post a demand; Sign-up and Pick a User Type; Subscribe, Upgrade & Manage; manage listings or demands; respond to an enquiry; how inventory is secured; use dashboard; avail complimentary listings; upgrade to Enterprise; plus persona videos for Agents, Office Tenants, Retail Tenants, Managed Space Operators, Developers. _(§ Videos col E)_
- **BR-TRK-097** — Platform stakeholders named: Office Tenants, Retail Brands, Developers, Managed Space Operators, Property Consultants; asset types: Offices, Managed Spaces, Retail and F&B. _(§ Videos script)_
- **BR-TRK-098** — Brand tagline: "#CRESimplified"; positioning "India's dedicated commercial real estate platform"; sign-off "Get matched." _(§ Videos script)_

### Open questions / ambiguities in this doc
- Col G "N" flag on Sheet1 rows 22–24 has no header — meaning (Not approved? No?) unknown.
- Sheet1 rows 45–46 have CTA "Download App" with blank message.
- Row 41 (under Agents/Brokers) is an office-seeker message ("Looking for an office space… Drop your space requirement") — likely misplaced.
- Placeholders in angle brackets (\<Hennur\>, \<Southwest Airlines\>, \<Indiranagar\>…) — variable locality/client names; "Southwest Airlines found a 1Mn Sft space in 3 days" needs factual verification.
- "₹1,000\*/mo(Per bundle)" — asterisk footnote not defined; "bundle" not defined in this sheet.
- Row 108 duplicates row 106.
- Typos: "Keydeman" (r38), "exisitng", "complie", "Is your talent is in".
- Sheet2 reviewer remarks pending: #1 header concern; #5 "Would there be multiple locality wise campaigns?"; #6 "Do we physically identify belts with good metro connectivity and complie them in a page/search result?"; #10 "To be rephrased"; #11 question list; #13, #15, #17 "Reword"; #16 "Change".
- Sheet2 rows 21–29 have no CTA.
- Claims to substantiate: "2 Mn+ / 2M+ sq. ft.", "Closed 100+ office spaces in Blore", "India's No 1", "first platform", "10 new spaces everyday", "off-market options".
- Ads-Set2 #3 says "India's first CRE platform" while other copy says "Bengaluru's first platform" — inconsistent claim.

---
## Group-level notes
### Version history
- No duplicate versions in this group; all four are AUTHORITATIVE. The Event Tracking Docket (18 Sep 2026, modified 22 Sep) is the source event list; the Tracking Implementation Mapping (modified 23 Sep) assigns destination/AppsFlyer name/channel to the same events and supersedes the docket's open "trackable via web tags?" column for routing. The UTM/OneLink Spec (23 Sep) references the Mapping for SDK setup.

### Conflicts across docs in this group
- Docket marks App Store / Play Store Link Clicked as trackable via web tags = "Yes"; Mapping routes it to AppsFlyer OneLink click and says it is "Not a logged event". Mapping is the later, implementation doc.
- Docket stars Connection Request Accepted and Two-Way Reveal Completed as top-priority conversion metrics; Mapping sends both only to GA4/GTM (not AppsFlyer conversions).
- Docket lists Renew Membership, Cancel Membership, Reactivate Account as three separate events, and Connection Request Received/Accepted/Rejected as three; Mapping collapses each set into a single row — event naming granularity for GA4 is unresolved.
- Subscription Payment Completed: Docket = "Razorpay checkout succeeds"; Mapping = backend S2S once "Razorpay/Apple IAP" confirms; UTM Spec defers subscription_builder until iOS payment flow is finalized; messaging says upgrade "via Razorpay". iOS payment method unresolved.
- Mapping event name `first_listing_posted` covers "First Demand / Listing Posted" (demand or listing) — name implies listing only.
- Messaging prices (Metro ₹1,000, Non-Metro ₹750, PAN India ₹5,000/mo; "per bundle") and free allowances (1 Free Listing + 5 Contact Unlocks; 5 contacts) should be checked against product/pricing docs in other groups; Docket's "4 of 5 free contacts" and "5th contact reveal" paywall are consistent with 5 free contacts.
- Docket Enterprise Auto-Route threshold ">20 seats or >5,000 sq ft" vs messaging "specialized space or >10,000 sq. ft." for end-to-end handholding — different thresholds (may be different features).
- UTM Spec pid "Same values as utm_source" vs example `pid=meta_int`.
