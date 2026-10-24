# Cross-document conflicts, decisions needed & glossary

**Scope.** This chapter is built from the "Group-level notes" and "Open questions" sections of groups 01–15, plus targeted searches of the BR lines across groups. It covers clashes **between different groups**. Clashes inside one group are already listed in that group's notes and are repeated here only when another group adds a further position.

**How to read it.**
- "G04" means group file `04-requirements.md`, and so on.
- Authority follows `kb/00-header.md`: within a document family, the highest "Version N.N" wins. Between authoritative documents, the later-dated CR or decision wins.
- Key dates used below: Delivery Plan Register (G01, modified 2026-10-22); CR "Final" sheet (G02, 2026-08-03); Product Requirements Oct 2 (G04, 2026-10-10); Version 1.0 Master Sheet (G05, 2026-10-08); Sep 16 field sheets (G06); Version 1.0 Landing (G08, 2026-10-15); Version 1.0 Enterprise and All User Journeys (G08, 2026-10-06); Version 1.1 Agent (G08, 2026-10-02); Version 1.0 occupier pages (G09, 2026-09-28 / 10-03); Version 2.0 KD Specific Page (G10, 2026-10-06); Version 2.0 Control Panel (G11, 2026-10-09); Roles guide doc 2 (G12, 2026-10-06); Privacy Policy and T&C drafts (G13, 2026-07-28); compliance briefs (G13, 2026-06-23).
- The Register rows carry CR text that was often written months before the sheet's modified date. Where a resolution rests only on the Register's date, this is said explicitly.
- No document status assigned in a group file is changed here. Where this chapter doubts a group's in-group resolution, it says so as "Doubt:".

---

## Decisions needed (top priority)

**D-01 — Contact-request response window (4 working days vs 72 hours)**
- Sources disagree: G05 V1.0 Master says brands have 4 working days, excluding Sat/Sun (BR-MS-180), and that requests auto-drop at exactly 72 h (BR-MS-181). G08 Agent V1.1 says the same pair (BR-PG1-145 vs BR-PG1-146). G09 Retail/F&B V1.0 says the same pair (BR-PG2-031/032, BR-PG2-105/106). G12 says 4 working days only (BR-ROL-006). G04 says 72 h only (BR-REQ-112, BR-REQ-167), as do G06 (BR-FLD-145), G08 Agent Complete Journey (BR-PG1-227, BR-PG1-241) and G13 (BR-LEG-145: "enquiries after 72 hours"). G03 adds a 24-hour reminder (BR-DQ-105/106).
- Current resolution under the authority rules: **unresolved.** Every latest authoritative doc states both values. 72 calendar hours always expires before 4 working days (G05 open question), so the 4-day window can never be reached.
- Question to confirm: Is the window 72 calendar hours or 4 working days, and should the other value be deleted everywhere?

**D-02 — Agent subscription price structure (bundles, ROI, combined price, subscriber contact cap)**
- Sources disagree:
  - G04 Oct 2: Metro ₹1000 / Non-Metro ₹750 per asset class per city, "Both" ₹2000 / ₹1500. ROI ₹1000 per asset class, Pan India ₹5000, with no "Both" price for either (BR-REQ-001/002/003).
  - G05 V1.0 and G08 V1.1: the same figures per bundle, with combined Metro ₹2000 / Non-Metro ₹1500 (BR-MS-090/091, BR-PG1-169).
  - G11 CP V2.0: "Rest of India ₹1,000 flat", Pan India ₹5,000 flat, no combined bundle (BR-ADM-050).
  - G03 Himanshu: three other price sets (Metro 1500 / Non-metro 1000; ₹1000 / ₹750 per city; ₹1000 per asset class) and **5 contact views per month per city × asset class for subscribers** (BR-DQ-085, BR-DQ-108). G05 says subscribers get **unlimited** contacts (BR-MS-029), and so does G04 (BR-REQ-170).
  - G15 admin pricing tiers are "Metro / Tier cities / ROI / Pan India" (BR-TC-045). G04 says the admin label is "Non Metro City", not "Tier 2" (BR-REQ-008).
  - G14 messaging says "₹1,000/mo (Per bundle)" (BR-TRK-082).
- Current resolution under the authority rules: G04/G05/G08 (October) agree on Metro, Non-Metro and Pan India and supersede G03 (March–June). The unlimited-contacts rule governs. **Still open:** the combined-bundle price (absent from G11 V2.0, the latest CP doc), whether ROI is per asset class or flat, the billing period and GST (G04 open question), and the tier label.
- Question to confirm: Does a combined (Retail & F&B + Office) bundle price exist, is ROI ₹1000 per bundle or flat, and is "Tier cities" the same as "Non-Metro"?

**D-03 — iOS payment path**
- Sources disagree:
  - G05 V1.0: native Razorpay with auto GST invoices (G05 note). G12: "checkout via native Razorpay" (BR-ROL-039).
  - G14 Mapping: payment confirmed by "Razorpay/Apple IAP", with a "web-checkout flow discussed for iOS" (G14 note). G14 UTM spec defers subscription_builder "until the iOS payment flow is finalized" (BR-TRK-019).
  - G15: the Razorpay test tab has 32 IDs but no steps, and "Confirm and Pay" redirects to junk text (G15 open questions).
- Current resolution under the authority rules: **unresolved — needs business decision.**
- Question to confirm: On iOS, do agents pay via Apple In-App Purchase, Razorpay in-app, or an external web checkout?

**D-04 — Go-live date and V1 user migration / complimentary access**
- Sources disagree:
  - G01 Delivery Tracker: final cutover on 23 Oct migrates **all** V1 users with 3 months of complimentary Pan-India access (BR-DEL-002, BR-DEL-010).
  - G01 Register: S.no. 73 is "To Do — business will assign if needed"; S.no. 214 is "Only routing and selected migration" (G01 note).
  - G02 Final: Go-Live 6 Nov 2026, UAT sign-off 30 Oct (BR-CR-206); the admin team manually assigns 3 months to all migrated users (BR-CR-011).
  - G11 V2.0: manual assignment to all (BR-ADM-055).
  - G14: "23 Oct launch set" (BR-TRK-019).
- Current resolution under the authority rules: the date resolves to the Delivery Plan (2026-10-22, latest), i.e. **23 Oct**. The migration scope is **unresolved**: G01 group notes treat the Register status as the latest word, and that says selective.
- Question to confirm: Are all V1 users migrated with 3 months of Pan-India access, or only selected users at the business's discretion?

**D-05 — Number of admin roles and the undefined "Ops User"**
- Sources disagree: the G01 Register (BR-DEL-117), G02 Final (BR-CR-004) and G11 V2.0 (BR-ADM-004) give 3 roles: Super Admin / Admin / Ops User. G02 CR Doc (BR-CR-279), G11 "Super Admin, Normal Admin" (BR-ADM-088) and Keydemand.docx give 2 roles. G01 SIT, i.e. the build, has Super Admin (30 permissions) / Admin (28) / **Contributor** (9) (BR-DEL-312). G02 30 Jun lists Admin groups A/B/C (BR-CR-355).
- Current resolution under the authority rules: 3 roles (V2.0, the highest version). However, "Ops User" has no defined permissions anywhere (G11 open question), and the built role is called "Contributor".
- Question to confirm: Is "Ops User" the same as SIT's "Contributor" (9 permissions), and which permissions does it hold?

**D-06 — HTL/HVL thresholds: values, units, cities, inclusivity**
- Sources disagree:
  - Mumbai >5,000 sq ft and Bangalore/Hyderabad >10,000: G02 (BR-CR-261), G05 (BR-MS-176), G10 (BR-KDT-022).
  - Admin-editable per city: G12 (BR-HTL-001), G10 (BR-KDT-128).
  - Generic ">10,000": G11 (BR-ADM-032).
  - ">5,000 sq ft or >20 seats": G08 (BR-PG1-067), G12 (BR-ROL-065), G14 (BR-TRK-046).
  - ">10,000 for handholding": G14 (BR-TRK-084).
  - "[XYZ sq ft]": G04 (BR-REQ-136), G09 (BR-PG2-215).
  - "equal to or above": G03 (BR-DQ-048), against ">" elsewhere.
  - Indore is in the 30 Jun HVL list (BR-CR-352) but Tier 2 elsewhere (BR-KDT-029, BR-HTL-007).
- Current resolution under the authority rules: the thresholds are **admin-configurable per city, asset class and size** (G11 V2.0 HVL rules; G12 HTL). Tier 1 is 8 cities and excludes Indore. Mumbai 5k and BLR/HYD 10k are only examples. The default values for the other 6 Tier-1 cities, the seat threshold and inclusivity are **unresolved**.
- Question to confirm: What are the launch default thresholds for each of the 8 Tier-1 cities, is the comparison ">" or "≥", and is there a seat-based HTL threshold?

**D-07 — HVL manual unlock: who, when, to whom**
- Sources disagree: G05 (BR-MS-178) and G10 (BR-KDT-033/034) say the **Admin** unlocks after "3–4 days" and notifies only agents with matching properties. G12 HTL says the Admin unlocks after "**n** days" and the lead shows only in matching agents' Relevancy tab (BR-HTL-003/004). G11 V2.0 says the **Keydemand team** unlocks, notifies normal and KD agents (BR-ADM-037), and has a per-lead "Agent Access" toggle (BR-ADM-038).
- Current resolution under the authority rules: G11 V2.0 (2026-10-09) is the latest: the KD team (with the "Unlock leads" permission) unlocks, using the toggle. The unlock window is **undefined**.
- Question to confirm: Who may unlock an HTL (Admin only, or any KD member), and is there an automatic or recommended window (3–4 days)?

**D-08 — Can the POC / KD team post or edit an enterprise brand's demands?**
- Sources disagree:
  - **Cannot:** G02 Final (BR-CR-139), G08 Enterprise V1.0 Bulk Upload (BR-PG1-103), G10 V2.0 BR 5 (BR-KDT-047), G12 doc 1 and doc 2's KD section (BR-ROL-015, BR-ROL-019).
  - **Can:** G05 V1.0 (BR-MS-186), G08 Enterprise V1.0 Demand Mgmt (BR-PG1-085), G10 V2.0 drill-down (BR-KDT-099), G12 doc 2 Enterprise section (BR-ROL-063).
  - G11 doc 2 says enterprises never upload, only the POC does via the backend; G11 V2.0 says enterprises log in and post using Format auto-fill (G11 note).
- Current resolution under the authority rules: **unresolved.** The latest docs (G08, G10, G12 of 6 Oct) each contain both statements.
- Question to confirm: May an assigned POC add, edit or deactivate an enterprise brand's demands on the front end, or only through the Control Panel bulk upload?

**D-09 — Can Retail/F&B brands explore Office properties?**
- Sources disagree: **No Office:** G02 Final (BR-CR-157, BR-CR-172, BR-CR-212) and G01 Effort Summary (BR-DEL-041). **Office allowed:** G01 Register S.no. 166 (BR-DEL-173), G05 V1.0 (BR-MS-160), G08 Enterprise V1.0 (BR-PG1-112) and G09 Retail/F&B V1.0 (BR-PG2-009, BR-PG2-083). None of them allows Managed Space.
- Current resolution under the authority rules: **Office allowed.** The October-dated authoritative page specs and the Register are later than the Final sheet of 3 Aug. Doubt: G02 group notes resolve this the other way inside G02 ("Final wins"). That is correct within G02 but superseded across groups.
- Question to confirm: Confirm that Retail/F&B brands (individual and enterprise) can explore Retail, F&B and Office, but not Managed Space.

**D-10 — Office Tenant posting Managed Space; "operators post only Managed Space"**
- Sources disagree:
  - Unconditional: G02 Final (BR-CR-165) and G12 doc 1 (BR-ROL-008).
  - Only if "Also interested in Managed Space" was ticked: G09 Office V1.0 (BR-PG2-153) and G12 doc 2 (BR-ROL-062).
  - Office only; the tick merely alerts the admin team: G05 V1.0 (BR-MS-021, US-001) and G02 CR Doc 13 Jul "Pending Rule" (G02 note).
  - G08 All User Journeys §8 says both (G08 note).
  - "Managed Space operators can post only Managed Space" (BR-CR-165, BR-PG2-199, BR-ROL-008) conflicts with "operators do not log in" (BR-CR-167, BR-PG2-202).
- Current resolution under the authority rules: **unresolved.** The latest (G12 doc 2 and G09) say "only if ticked", but G05 V1.0 (8 Oct) says office only. The "operator" wording is probably meant to read "Managed Space occupier/tenant" (G12 note), but that is unclear.
- Question to confirm: If an Office Tenant ticks "Also interested in Managed Office/Space", can they post a Managed Space demand themselves, or is the interest only routed to Keydemand?

**D-11 — Developer and Managed Space Operator login and onboarding**
- Sources disagree:
  - No login; enquiry form; admin onboards within 24 h: G05 V1.0 (BR-MS-022), G08 Landing V1.0 (BR-PG1-004/013), G09 MS V1.0 (BR-PG2-202), G02 Final (BR-CR-167), G11 doc 2.
  - Developers access dashboards and leads "from the backend": G11 doc 6 (BR-ADM-097).
  - Developers see projects on their dashboard: G06 (BR-FLD-174).
  - "List a Project" with a registration form via a radio button: G02 29 Jul (BR-CR-329).
  - Landing V1.0: the phone + OTP enquiry returns a registered number to the dashboard (G08 note).
  - G01 UAT: an approved developer can log in and post projects; an MSO is gated by "pending review" (BR-DEL-279, BR-DEL-321). G01 SIT: the developer is "RM-only".
  - G15: MSO signup/login is "Yet to be implemented".
  - G05 Phase 2 US-042 has a Developer Dashboard.
- Current resolution under the authority rules: the G01 Register (S.no. 119/170) and G05 V1.0 say no front-end login, with projects added by Admin. But the UAT/SIT builds include a developer login.
- Question to confirm: In Phase 1, do Developers and MSOs have any login (even read-only to their profile and RM), or are they enquiry-form-only?

**D-12 — Listing moderation before going live**
- Sources disagree:
  - Pending → admin approval: G04 STORIES (BR-REQ-186/188/190), G05 Phase 2 US-055 (BR-MS-261) and the G01 old tracker (BR-DEL-288).
  - "Admins … approve or moderate listings": G12 (BR-ROL-024).
  - Moderation rules with an audit reason (P1): G13 (BR-LEG-197).
  - G04 Oct 2 notification says "posted successfully… now live" (G04 note). G05 V1.0 has no gate. G11 V2.0 approval applies only to bulk uploads (BR-ADM-070).
- Current resolution under the authority rules: **no pre-moderation** for user-posted listings in Phase 1 (Oct 2 and V1.0). Moderation is Phase 2, apart from bulk-upload approval. This needs confirmation because of G12 and G13.
- Question to confirm: Do user-posted properties and demands go live instantly in Phase 1, with moderation only after the fact?

**D-13 — Demand inactivity: 60 days vs 90 days vs a 3-month check**
- Sources disagree:
  - Auto-"Inactive" after 60 days: G04 Access Permissions (BR-REQ-165), G05 V1.0 (BR-MS-185), G06 (BR-FLD-157), G08 Journey (BR-PG1-245), G11 V2.0 for bulk (BR-ADM-071), G12 (BR-ROL-059).
  - A 90-day "still available?" digest: G04 Oct 2 (BR-REQ-108).
  - An "Active Status check every 3 months": G09 (BR-PG2-056, BR-PG2-130, BR-PG2-188) and G05 (BR-MS-185).
- Current resolution under the authority rules: G04 resolved this in-group as "90-day prompt; 60-day unconfirmed". But G05 V1.0 (8 Oct) and G11 V2.0 (9 Oct) still apply 60-day expiry. **Needs business decision.** The two could coexist (60-day expiry plus a 90-day digest for older listings), but no doc says so.
- Question to confirm: Do demands auto-expire at 60 days, or only get a "still available?" prompt at 90 days / 3 months?

**D-14 — Legal entity name, address and Grievance Officer**
- Sources disagree:
  - Entity: "Keydemand" (BR-CR-233); "Keyproperty" (BR-CR-262, BR-CR-215, BR-DEL-046); "**Propvantage Proptech Private Limited**" (G13 PP, BR-LEG-001, BR-LEG-044).
  - Address: PP gives Colaba; T&C gives Nariman Point (G13 note).
  - Grievance Officer: the PP names Kartik Iyer (BR-LEG-044). The T&C names none (G13 note). The G01 Register asks "who will be doing it?" (G01 open question, CR S.no. 209).
- Current resolution under the authority rules: **unresolved.** The legal drafts (G13) are the latest wording source, but they disagree with each other and with the CR sheets.
- Question to confirm: What legal entity and registered address go on the T&C and Privacy Policy, and is Kartik Iyer the published Grievance Officer in both?

**D-15 — Cookies / tracking, sub-processors and data location**
- Sources disagree:
  - G13 brief: "token-based auth, **not tracking cookies**" (BR-LEG-129). PP: Google Analytics cookies with opt-out (BR-LEG-023).
  - G14 implements GA4/GTM and the AppsFlyer SDK (G14 notes). G01/G02/G11: Google Analytics in the user dashboard (BR-DEL-127, BR-CR-197, BR-ADM-057).
  - Sub-processor list: Razorpay, MSG91, Interakt, AWS, MongoDB, V1 (BR-LEG-160, BR-LEG-173). It omits Google/Firebase and AppsFlyer (G01 BR-DEL-045, G14). PP §9 adds AI/chatbot and fraud vendors (BR-LEG-029).
  - Data: "all data stays in India" (G13 #4) vs PP §12 cross-border consent; G02 "data residency" in scope (BR-CR-215).
- Current resolution under the authority rules: **unresolved — needs a legal decision.** The product build (G14) contradicts the compliance brief.
- Question to confirm: Will the platform disclose GA4, AppsFlyer and Firebase tracking (cookie/consent banner, sub-processor list), and is there any processing outside India?

**D-16 — Age gate and the consent checkbox**
- Sources disagree:
  - "No separate DOB field or checkbox": G01 (BR-DEL-077), G02 (BR-CR-041).
  - Exact 18+ phrase "and a tick": G02 (BR-CR-045), G01 Effort (BR-DEL-021).
  - Mandatory T&C + "18 and above" checkbox: G05 V1.0 (BR-MS-012). G02 29 Jul: implemented.
  - G13: the checkbox is **auto-ticked** today and must become a real checkbox with separate privacy and marketing consent (BR-LEG-174, BR-LEG-183). Age handling is "to decide". The PP says the platform is not for under-18s; the T&C lets minors browse via a guardian.
- Current resolution under the authority rules: an 18+ checkbox exists (G05 V1.0; 29 Jul). Whether it is unticked by default and split into privacy and marketing consent is **unresolved**.
- Question to confirm: Is registration gated by an unticked 18+ / T&C checkbox, with a separate opt-in for marketing?

**D-17 — Email at registration and domain validation**
- Sources disagree:
  - "Remove email field completely": G02 Final (BR-CR-044), marked "WRONG" and struck in G01 (BR-DEL-080).
  - Mandatory for Brands/Tenants, optional for Agents: G01 (BR-DEL-019), G02 (BR-CR-047), G05 (BR-MS-063, BR-MS-123).
  - Email optional for everyone: G13 (BR-LEG-130).
  - Domain validation (block @gmail): G05 V1.0 (BR-MS-123) vs "NOT enforced" in G02 Final (G02 note).
- Current resolution under the authority rules: mandatory for entities, optional for Agents (G05 V1.0 is later; the G01 Register strikes the removal). Domain blocking is **unresolved**, because G05 V1.0 (8 Oct) is later than G02 Final (3 Aug) and re-asserts blocking.
- Question to confirm: Is "Official Email ID" mandatory for Brands/Tenants, and are generic domains (gmail etc.) blocked?

**D-18 — Refunds and mid-cycle cancellation**
- Sources disagree:
  - No refund on city cancellation: G05 (BR-MS-095), G08 V1.1 (BR-PG1-168).
  - T&C: no refunds under any circumstances (BR-LEG-077, BR-LEG-078).
  - G13 compliance: "clear refund/cancellation terms" required (G13 note).
  - Cancellations take effect next billing cycle: G12 (BR-ROL-040). G08 Journey: changes reflect on next month's bill (G08 note).
- Current resolution under the authority rules: no refund (product and legal docs agree). The effective date of cancellation (immediate vs next cycle) is **unresolved**, and legal must confirm that a blanket no-refund is acceptable.
- Question to confirm: When an agent removes a city mid-cycle, does access end immediately or at cycle end, and does counsel accept "no refund ever"?

**D-19 — Media size limits**
- Sources disagree:
  - Images <2 MB, video <5 MB: G04 Oct 2 (BR-REQ-013), G06 Sep 16 sheets (BR-FLD-036).
  - Images 5 MB, video 15 MB: G05 V1.0 (BR-MS-125), G04 "All Fields" block.
  - 5 MB ≥300 ppi, video 20 MB: G06 persona doc and G08 Journey (BR-PG1-226).
  - PDF 2 MB vs 5 MB (BR-REQ-034, BR-FLD-065).
- Current resolution under the authority rules: **unresolved.** G05 V1.0 (8 Oct) is later than the G06 sheets (16 Sep), but G04 Oct 2 (modified 10 Oct) agrees with G06.
- Question to confirm: What are the final per-file limits for images, videos and PDFs (2/5/2 MB or 5/15/5 MB)?

**D-20 — OC Status values**
- Sources disagree: **3 values** (Available / Not available / Under construction): G02 Final (BR-CR-020) and G01 Effort Summary (BR-DEL-016). **4 values** (Received / Applied / Not Available / Under Construction): G01 Register S.no. 10 (BR-DEL-059), G02 CR Doc (BR-CR-224), G04 Oct 2 (BR-REQ-028), G05 V1.0 (BR-MS-169), G06 Sep 16 (BR-FLD-056). G04 filters use "Received / Applied / Not Applicable" (G04 open question).
- Current resolution under the authority rules: **4 values.** These are in every later doc and in the build forms. Doubt: G02 group notes say "latest dated = 3 values". That holds within G02 but is superseded across groups.
- Question to confirm: Confirm the 4 OC values for property/project, and "OC Required Yes/No" for demands.

**D-21 — RERA mandatory or optional**
- Sources disagree: **Mandatory:** G02 Final (BR-CR-030), G02 30 Jun (BR-CR-354), G01 Effort (BR-DEL-017). **Optional:** G01 Register (BR-DEL-070, "Before it was … mandatory"), G02 CR Doc (BR-CR-231), G05 V1.0 (BR-MS-194).
- Current resolution under the authority rules: **optional at project level.** The G01 Register edit and G05 V1.0 (Oct) are later than G02 Final. G02 marked it unresolved in-group.
- Question to confirm: Confirm that project-level RERA is optional and that no RERA verification is required for agents.

**D-22 — Keydemand team relevancy scope**
- Sources disagree: **Brands and Tenants only:** G01 Register S.no. 103 (BR-DEL-201, BR-DEL-037), G02 (BR-CR-130, BR-CR-266 "TBD by Kartik"), G10 Dashboard V1.0 (BR-KDT-132). **Also agents and other KD members:** G10 Specific Page V2.0 (BR-KDT-041) and G12 doc 2 (BR-ROL-071).
- Current resolution under the authority rules: G10 group notes take V2.0 (6 Oct) as the latest rule. But the G01 Register (modified 22 Oct) still carries the restriction, with SIT "In-Progress" (G01 open question). **Needs decision.**
- Question to confirm: Are KD-posted listings matched against agent listings as well as brand/tenant listings?

**D-23 — KD member deactivation/deletion and their inventory**
- Sources disagree: soft-delete keeping inventory (G05 V1.0, BR-MS-049; G11 doc 2) vs mandatory handover to another KD user first (G10 V2.0, BR-KDT-006; G11 V2.0, BR-ADM-016/017) vs deactivate hides and delete removes inventory (G01, BR-DEL-043).
- Current resolution under the authority rules: **handover first** (G10/G11 V2.0, the latest).
- Question to confirm: Must every listing be reassigned before a KD member is deactivated or deleted, and is the account then soft-deleted?

**D-24 — Managed Space minimum seats vs Enterprise trigger**
- Sources disagree: the Managed Space demand form accepts "only more than 20 seats" (G04, BR-REQ-066; G06, BR-FLD-029), yet requests >20 seats are routed to the Enterprise funnel (G05, BR-MS-166; G12, BR-ROL-066; G08, BR-PG1-067; G14, BR-TRK-046).
- Current resolution under the authority rules: **unresolved.** Taken together, these rules would make every individual Managed Space demand an Enterprise lead.
- Question to confirm: What is the minimum seat count for an individual Managed Space demand, and above what seat count does it become an Enterprise lead?

**D-25 — Agent free trial: 1 listing AND 1 demand, or 1 listing OR 1 demand**
- Sources disagree:
  - "or": G05 (BR-MS-017), G08 All User Journeys (BR-PG1-261), G04 Access Permissions (BR-REQ-156).
  - "and": G05 (BR-MS-089), G12 (BR-ROL-034), G08 Landing V1.0 (G08 note).
  - "1 listing maximum": G08 V1.1.
  - "1 Free Listing + 5 unlocks": G14 (BR-TRK-078).
- Current resolution under the authority rules: **unresolved.** The latest docs (G08 Landing 15 Oct "and"; G08 All User Journeys 6 Oct "or") disagree.
- Question to confirm: Does a non-subscribed agent get one free property listing and one free demand, or one of either?

**D-26 — Notification opt-out vs consent withdrawal**
- Sources disagree: transactional WhatsApp cannot be disabled and only promotional can (G05 V1.0, BR-MS-076; G06, BR-FLD-116; G08, BR-PG1-258; G09, BR-PG2-054) vs full opt-in/out (G05 Phase 2 US-048, BR-MS-254) vs DPDP withdrawal "as easy as giving" and granular preferences (G13, BR-LEG-202; G13 note) vs PP withdrawal by email only (BR-LEG-010).
- Current resolution under the authority rules: Phase 1 = promotional-only opt-out (G05 V1.0). Whether this satisfies the G13 compliance requirements is **unresolved**.
- Question to confirm: Is "transactional WhatsApp cannot be turned off" acceptable to counsel, and will consent withdrawal be in-app?

**D-27 — Relevancy display threshold, property size tolerance and price**
- Sources disagree: G07 xlsx defines field weights but no display threshold and no property size tolerance (G07 open questions). The NON-AUTH Guide says 40%, a KD comment says "50% or above", and the Guide scores price, which KD rejects (G07 note). G05 V1.0 says matching uses only Asset Class, Carpet Area, Location and Transaction Type (BR-MS-173), while G07 adds ceiling height, floor, possession and fit-outs (BR-REL-001/003/006). G10 shows "Relevancy %" (BR-KDT-097).
- Current resolution under the authority rules: G07 xlsx governs the weights. The threshold and property tolerance are **undefined**.
- Question to confirm: What minimum relevancy % is displayed (50%?), and what carpet-area tolerance applies to property (non-project) matching?

**D-28 — Lead / request status vocabulary**
- Sources disagree: Approved / Rejected / Open (G02 Final Sno 142; G10 BR 5; G12) vs Approved / Rejected / Pending (G02 13 Jul; G10 drill-downs; G15) vs Pending / Approved / Rejected / Expired / Closed (G11, BR-ADM-076) vs New / Contacted / Qualified / Close (G10 filters) vs CRM-lite stages (Phase 2). G05/G08/G09 map expiry to "Rejected" (BR-MS-181, BR-PG1-146, BR-PG2-032), while G11 has "Expired".
- Current resolution under the authority rules: **unresolved.**
- Question to confirm: What is the single status list for contact/image/project leads, and does an expired request show as "Rejected" or "Expired"?

**D-29 — Control Panel document version conflict and mislabelling**
- Sources disagree: G11 marks "Version 2.0 Control Panel V2.1-0" (2026-10-09) AUTHORITATIVE. "Version 1.0 Control Panel V2.1-0" is HISTORY, but its content is the Phase 1 platform BRD (EP-001…EP-019), not a Control Panel spec. "Control Panel V2.1-0 Keydemand.docx" is newest by modified date (2026-10-14), but is the oldest draft and is flagged VERSION CONFLICT (two roles; Control Panel Users next phase). G05 links EP-018 to the Version 1.0 doc (`1TzelTFc…`) (G05 open question). G11 doc 4 cites the Version 1.0 doc for statements found only in V2.0 and Keydemand.docx (G11 open question).
- Current resolution under the authority rules: V2.0 is authoritative (highest version). The 14-Oct edits to Keydemand.docx are **unconfirmed**.
- Question to confirm: Were the 14-Oct edits to "Control Panel V2.1-0 Keydemand.docx" (two roles, edit only own KD/Enterprise listings) intended to override V2.0? Should "Version 1.0 Control Panel" be renamed as the BRD?

**D-30 — OTP length**
- Sources disagree: 4 digits (G08 Journey, BR-PG1-192; G04 STORIES US-003) vs "4 or 6" (G04, BR-REQ-149) vs 6 digits (G05 V1.0, BR-MS-061, BR-MS-051).
- Current resolution under the authority rules: **6 digits** (G05 V1.0 is the latest). G13 adds rate limits of 3 requests per 5 minutes and 5 attempts (BR-LEG-134).
- Question to confirm: Confirm that the login OTP is 6 digits for all apps.

---

## Cross-document conflict register

| ID | Topic | Position A (source, BR) | Position B (source, BR) | Resolution under authority rule | Status |
|---|---|---|---|---|---|
| C-01 | Contact-request window | 4 working days excl. weekends (G05 BR-MS-180; G08 BR-PG1-145; G09 BR-PG2-031/105; G12 BR-ROL-006) | 72 h auto-nullify (G04 BR-REQ-112/167; G05 BR-MS-181; G06 BR-FLD-145; G08 BR-PG1-146/227/241; G09 BR-PG2-032/106; G13 BR-LEG-145) | Both in latest docs; unresolved (D-01) | Needs decision |
| C-02 | Reminder before expiry | 24 h reminder, then 72 h supplier message (G03 BR-DQ-105/106) | No reminder; 3 notification texts only (G09 persona table) | G09 V1.0 later; reminder dropped | Resolved-by-rule |
| C-03 | Who receives contact requests | Office/MS tenants get no contact requests, only passive views (G09 note; BR-PG2-161) | Occupier has 72 h to accept an agent's request (G06 BR-FLD-145; G08 BR-PG1-227) | G09 V1.0 later: only Retail/F&B brands accept/reject | Resolved-by-rule |
| C-04 | Brand/tenant contact-view cap | 5 views, 6th blocked (G01 BR-DEL-040/153; G02 BR-CR-161; G09 BR-PG2-164; G11 BR-ADM-026; G12 BR-ROL-004/011; G08 BR-PG1-055) | Prompt after 3–4, not blocked (G06 BR-FLD-140); UI text says 3 (G01 hidden tab); office tenants unrestricted (G03 Himanshu note) | 5 (G05/G09 V1.0 and G01 Register) | Resolved-by-rule |
| C-05 | Managed Space Tenant contact cap | Included in the 5-view cap (G05 US-038) | No cap stated; supplier is the KD team (G09 MS V1.0) | Unclear; G05 notes flag it | Needs decision |
| C-06 | Non-subscribed agent contact cap | 5 lifetime (G04 BR-REQ-156; G05 BR-MS-028; G08 BR-PG1-053/143; G12 BR-ROL-034; G14 BR-TRK-033/034) | "More than twice or thrice" (G08 Journey BR17; G06 note); seed says "3 free contacts used" (G01 BR-DEL-291) | 5 lifetime | Resolved-by-rule |
| C-07 | Subscribed agent contact cap | Unlimited (G04 BR-REQ-170; G05 BR-MS-029; G14 BR-TRK-086) | 5 per month per city × asset class (G03 BR-DQ-085, BR-DQ-108) | Unlimited (G03 is oldest) | Resolved-by-rule |
| C-08 | Subscription prices | Metro 1000 / Non-Metro 750 / ROI 1000 / Pan India 5000; combined 2000/1500 (G04 BR-REQ-001–003; G05 BR-MS-090/091; G08 BR-PG1-169) | Metro 1500 / Non-metro 1000 per category, or 1000/750 per city, or 1000 per asset class (G03 note) | October docs (G04/G05/G08) | Resolved-by-rule |
| C-09 | Combined bundle and ROI pricing | Combined Metro ₹2000 / Non-Metro ₹1500; ROI per asset class (G04 BR-REQ-001/002; G05 BR-MS-091; G08 BR-PG1-169) | No combined bundle; ROI "₹1,000 flat" (G11 BR-ADM-050); Pro Plan omits ROI and combined (G08 BR-PG1-262; G12 BR-ROL-039; G14 BR-TRK-087) | Unresolved (D-02) | Needs decision |
| C-10 | Bundle composition | (Retail & F&B) and (Office) (G03 BR-DQ-077; G05 BR-MS-086; G08 BR-PG1-163) | "Office & Managed Offices" plan (G03 BR-DQ-108; G15 agent-mobile flow, G15 note); agents cannot post Managed Space (G04 BR-REQ-010) | Office bundle excludes Managed Space (G05 V1.0) | Resolved-by-rule |
| C-11 | Tier labels | Metro / Non-Metro / ROI / Pan India (G04 BR-REQ-005/008; G05 BR-MS-084) | Admin edits "Tier cities" (G15 BR-TC-045); "Tier 2" used for HTL (G12 BR-HTL-007) | Pricing label is "Non Metro City" (G04 bug #55); HTL Tier 1/2 is a separate concept | Resolved-by-rule |
| C-12 | Metro city list | Metro = 19 cities incl. Kolkata (G04 BR-REQ-005); picker lists Kolkata (G05 BR-MS-108; G08 BR-PG1-205) | Metro = Mumbai, Pune, Delhi NCR, Bangalore, Hyderabad, Chennai only; Indore non-metro (G03 open question) | G04 City tab | Resolved-by-rule |
| C-13 | Mid-cycle additions | Charged prorated immediately (G03 BR-DQ-079; G05 BR-MS-094; G08 BR-PG1-167; G14 BR-TRK-089; G12 BR-ROL-040) | Reflected on next month's bill (G08 Journey, G08 note) | Immediate proration (V1.1, V1.0) | Resolved-by-rule |
| C-14 | Mid-cycle city cancellation | No refund; immediate (G05 BR-MS-095; G08 BR-PG1-168) | Takes effect next billing cycle (G12 BR-ROL-040) | Unresolved timing (D-18) | Needs decision |
| C-15 | Refund policy | No refund ever (G13 T&C BR-LEG-061/077/078/105; G05 BR-MS-095) | Clear refund/cancellation terms required (G13 compliance, G13 note) | Legal to confirm (D-18) | Needs decision |
| C-16 | iOS payment | Native Razorpay (G05 V1.0; G12 BR-ROL-039; G14 messaging) | Apple IAP / web checkout pending (G14 Mapping; BR-TRK-019) | Unresolved (D-03) | Needs decision |
| C-17 | Daily summary subscribers | Subscriptions are agent-only (G11 doc 2; G01 Register) | Mock shows "Developer · Pro" and "Brand · Basic" subscribers (G01 BR-DEL-327/328 pdf; G11 doc 5) | Mock uses sample data (G01 status note); agent-only | Resolved-by-rule |
| C-18 | Go-live date | 23 Oct cutover (G01 BR-DEL-002/010; G14 BR-TRK-019) | 6 Nov go-live, UAT sign-off 30 Oct (G02 BR-CR-206) | Delivery Plan (22 Oct) is latest | Resolved-by-rule |
| C-19 | V1 migration and complimentary access | All V1 users get 3 months Pan-India (G01 BR-DEL-010/156; G02 BR-CR-011/209; G11 BR-ADM-055) | "Assign if needed" / "selected migration" (G01 Register S.no. 73/214) | Unresolved (D-04) | Needs decision |
| C-20 | Admin roles | 3: Super Admin/Admin/Ops User (G01 BR-DEL-117; G02 BR-CR-004; G11 BR-ADM-004) | 2 roles (G02 BR-CR-279; G11 BR-ADM-088); built as Contributor (G01 BR-DEL-312); groups A/B/C (G02 BR-CR-355) | 3 roles by version; Ops User undefined (D-05) | Needs decision |
| C-21 | Granular admin permissions | Deferred to Phase 2 (G02 Sno 208; G11 V2.0 BR) | Per-action toggles built: 27 toggles (G11 doc 4 BR-ADM-092, BR-ADM-075); SIT 30/28/9 permissions (G01 BR-DEL-312) | Build has toggles; the counts 27 vs 30 don't match | Needs decision |
| C-22 | Admin login factors | Email + password (G02 BR-CR-280; G11 BR-ADM-009; G01 UAT BR-DEL-277) | + email OTP (G01 SIT BR-DEL-311); "username and password" (G05 BR-MS-050; G11 BR-ADM-100) | V2.0: email + password; SIT adds OTP; confirm | Needs decision |
| C-23 | HTL threshold values | Per-city admin config (G12 BR-HTL-001; G10 BR-KDT-128) with examples 5k Mumbai / 10k BLR-HYD (G02 BR-CR-261; G05 BR-MS-176; G10 BR-KDT-022) | Flat >5,000 sq ft (G06 BR-FLD-148; G08 BR-PG1-067); >10,000 (G11 BR-ADM-032; G14 BR-TRK-084); "XYZ" (G04 BR-REQ-136; G09 BR-PG2-215) | Admin-configurable; defaults unresolved (D-06) | Needs decision |
| C-24 | Seat-based threshold | >20 seats triggers enterprise (G08 BR-PG1-067; G12 BR-ROL-065/066; G14 BR-TRK-046; G05 BR-MS-166) | No seats in HTL doc (G12 HTL open question); HTL excludes Managed offices (G03 §3.4) | Unresolved (D-06, D-24) | Needs decision |
| C-25 | Threshold inclusivity | "Equal to or above" (G03 BR-DQ-048) | ">" / "exceeds" (G05 BR-MS-176; G10 BR-KDT-022) | Unresolved | Needs decision |
| C-26 | Indore | In the HVL city list (G02 BR-CR-352, 30 Jun; G10 docs 3/5) | Tier 2, open to all (G10 BR-KDT-029; G12 BR-HTL-007) | Tier 2 (later) | Resolved-by-rule |
| C-27 | HTL unlock actor and window | Admin after 3–4 days (G05 BR-MS-178; G10 BR-KDT-033); Admin after "n days" (G12 BR-HTL-003) | KD team unlocks; Agent Access toggle (G11 BR-ADM-037/038) | G11 V2.0; window undefined (D-07) | Needs decision |
| C-28 | Who is notified on unlock | Only agents with a matching property (G05 BR-MS-178; G10 BR-KDT-034; G12 BR-HTL-004) | Normal agents and KD agents (G11 BR-ADM-037) | Compatible: both via relevancy; G11 adds KD agents | Resolved-by-rule |
| C-29 | Agent-posted large demands | Only "massive" (>10,000 sq ft BLR) agent demands bypass the KD block (G01 BR-DEL-234; G02 BR-CR-088; G05 BR-MS-177; G08 BR-PG1-132) | All agent-posted requirements bypass HTL size limits (G12 BR-HTL-008) | Unclear trigger (G05 open question) | Needs decision |
| C-30 | HTL vs HVL naming | "HTL"/"High Ticket Leads" (G12 HTL doc; G05 EP-006; G10 side menu) | "HVL"/"High Value Leads/Ticket" (G05 US-039; G10; G11) | Same concept (see Glossary) | Resolved-by-rule |
| C-31 | Who can explore demands | KD team only (G05 BR-MS-159; G06 BR-FLD-158; G11 BR-ADM-106; G12 BR-ROL-018; G08 BR-PG1-236) | Admin can toggle an agent's "explore demands" (G02 BR-CR-090; G11 BR-ADM-090); developers/agents explore (G04 STORIES/Epics) | KD only; the toggle is the KD-member permission (G11 V2.0) | Resolved-by-rule |
| C-32 | Agents seeing demands via Relevancy vs the global directory | KD team only can search the global directory (G12 BR-ROL-018) | Tier-2 and agent-posted demands "visible to everyone under Relevancy" (G12 BR-HTL-007/008) | Consistent if Relevancy ≠ search (G12 note); confirm | Needs decision |
| C-33 | Retail/F&B explore Office | Not Office (G02 BR-CR-157/172/212; G01 BR-DEL-041) | Office allowed (G01 BR-DEL-173; G05 BR-MS-160; G08 BR-PG1-112; G09 BR-PG2-009/083) | Office allowed (D-09) | Resolved-by-rule |
| C-34 | Managed Space Tenant explore | Managed Space + Office (G09 MS Business Rules; G01 BR-DEL-041; G08 BR-PG1-270) | Managed Space only (G09 MS header) | Business rules (G09 note) | Resolved-by-rule |
| C-35 | Office Tenant posting Managed Space | Unconditional (G02 BR-CR-165; G12 BR-ROL-008) | Only if ticked (G09 BR-PG2-153; G12 BR-ROL-062) / office only, tick alerts admin (G05 BR-MS-021; G02 13 Jul) | Unresolved (D-10) | Needs decision |
| C-36 | "Managed Space operators post only Managed Space" | Operators post Managed Space (G02 BR-CR-165; G09 BR-PG2-199; G12 BR-ROL-008) | Operators never log in; supply added by KD (G02 BR-CR-167; G09 BR-PG2-202; G12 BR-ROL-025); "operators cannot post demands" (G08 note) | Likely means occupier (G12 note); confirm (D-10) | Needs decision |
| C-37 | Managed Space Tenant posting | Strictly Managed Space (G05 V1.0) | "Office and F&B demands only" (G06 persona doc, G06 open question) | G05 V1.0 | Resolved-by-rule |
| C-38 | Developer / MSO login | No login; enquiry form (G05 BR-MS-022; G08 BR-PG1-004/013; G09 BR-PG2-202; G02 BR-CR-167) | Approved developer logs in and posts projects; MSO pending/approved (G01 BR-DEL-279/321); backend dashboards (G11 BR-ADM-097); developer dashboard (G06 BR-FLD-174; G05 Phase 2 US-042) | Unresolved (D-11) | Needs decision |
| C-39 | Project-listing entry point | "List your Project >>" dropdown → enquiry form (G01 BR-DEL-108; G02 BR-CR-244; G05 BR-MS-006; G08 BR-PG1-004; G12 BR-ROL-050) | "List a Project" with radio → registration form (G02 BR-CR-329, 29 Jul) | G08 Landing V1.0 (15 Oct) and G05 V1.0 are later: enquiry form | Resolved-by-rule |
| C-40 | Developers posting projects | Admin-only via backend (G04 Oct 2; G01 Register S.no. 119; G10 BR-KDT-136) | Developers add projects (G04 STORIES/Epics; G01 UAT BR-DEL-321) | Admin-only | Resolved-by-rule |
| C-41 | POC editing enterprise demands | Cannot (G02 BR-CR-139; G08 BR-PG1-103; G10 BR-KDT-047; G12 BR-ROL-015/019) | Can (G05 BR-MS-186; G08 BR-PG1-085; G10 BR-KDT-099; G12 BR-ROL-063) | Unresolved (D-08) | Needs decision |
| C-42 | Enterprise self-posting | Enterprise does not post; POC uploads Excel (G11 doc 2; G03 "completely read-only?") | Enterprise users log in and post with Format auto-fill (G11 V2.0; G12 BR-ROL-014; G08 BR-PG1-085) | G11 V2.0 / G08 V1.0 | Resolved-by-rule |
| C-43 | Enterprise self-deactivation | Forbidden for enterprise (G05 Copy, history) | Allowed; same protocol as individuals (G05 V1.0; G08 BR-PG1-090) | Allowed | Resolved-by-rule |
| C-44 | Listing moderation | Pending → admin approval (G04 BR-REQ-186/188/190; G05 BR-MS-261 Phase 2; G01 BR-DEL-288; G12 BR-ROL-024; G13 BR-LEG-197) | Live immediately; only bulk uploads approved (G04 Oct 2; G05 V1.0; G11 BR-ADM-070) | No pre-moderation in Phase 1 (D-12) | Needs decision |
| C-45 | Demand inactivity | 60-day auto-inactive (G04 BR-REQ-165; G05 BR-MS-185; G06 BR-FLD-157; G08 BR-PG1-245; G11 BR-ADM-071; G12 BR-ROL-059) | 90-day "still available?" (G04 BR-REQ-108); 3-month check (G09 BR-PG2-056/130/188) | Unresolved (D-13) | Needs decision |
| C-46 | Agent account after non-renewal | Account and listings permanently deactivated at 90 days (G04 BR-REQ-171; G11 BR-ADM-102; G08 BR-PG1-200) | Listings active 3 months, then "Expired" and auto-deactivated; data kept; reactivatable (G03 BR-DQ-059/060; G05 BR-MS-097; G08 BR-PG1-173/174; G12 BR-ROL-041) | Data retained (V1.1/V1.0 later) | Resolved-by-rule |
| C-47 | Subscription after deactivation | Stops and cannot be reactivated (G05 US-007; G08 V1.1/Journey) | Benefits resume if reactivated within the period (G05 EP-001/002/004; G08) | Both in V1.0 and V1.1 | Needs decision |
| C-48 | Inventory on user deactivation | 3-month hibernation, then permanent removal (G05 US-007) | Paused/hidden; data preserved (G05 other sections; G09 shared rules; G01 BR-DEL-043) | Preserved (majority) | Needs decision |
| C-49 | KD member deletion | Soft-delete, inventory retained (G05 BR-MS-049; G11 doc 2) | Handover to another KD user first (G10 BR-KDT-006; G11 BR-ADM-016/017) | Handover (V2.0) | Resolved-by-rule |
| C-50 | KD relevancy scope | Brands and Tenants only (G01 BR-DEL-037/201; G02 BR-CR-130/266; G10 BR-KDT-132) | Also agents and KD members (G10 BR-KDT-041; G12 BR-ROL-071) | Unresolved (D-22) | Needs decision |
| C-51 | Relevancy fields | Asset Class, Carpet Area, Location, Transaction only (G05 BR-MS-173) | Weighted fields incl. ceiling height, floor, possession, fit-outs (G07 BR-REL-001/003/006/009) | G07 xlsx (relevancy spec, 14 Oct) | Resolved-by-rule |
| C-52 | Relevancy % display | Properties: % shown in KD drill-downs (G10 BR-KDT-097/158; G02 BR-CR-312) | Projects: no % (G05 BR-MS-148/173; G06 BR-FLD-167; G08 BR-PG1-247) | Consistent: % for property matches only | Resolved-by-rule |
| C-53 | Relevancy threshold and price | NON-AUTH Guide 40%, price scored (G07) | KD comment "50% or above", no price (G07); remarketing "matching budget" (G12 BR-NTF-008) | No price in score; threshold undefined (D-27) | Needs decision |
| C-54 | Media limits | Images <2 MB, video <5 MB (G04 BR-REQ-013; G06 BR-FLD-036) | 5 MB / 15 MB (G05 BR-MS-125); 5 MB ≥300 ppi / 20 MB (G06 persona; G08 BR-PG1-226) | Unresolved (D-19) | Needs decision |
| C-55 | PDF limit | <2 MB (G04 BR-REQ-034; G06 BR-FLD-065) | <5 MB (Keydemand block, same BRs; floorplans G06 BR-FLD-085) | Unresolved | Needs decision |
| C-56 | OC Status | 3 values (G02 BR-CR-020; G01 BR-DEL-016) | 4 values (G01 BR-DEL-059; G02 BR-CR-224; G04 BR-REQ-028; G05 BR-MS-169; G06 BR-FLD-056) | 4 values (D-20) | Resolved-by-rule |
| C-57 | RERA | Mandatory (G02 BR-CR-030/354; G01 BR-DEL-017) | Optional (G01 BR-DEL-070; G02 BR-CR-231; G05 BR-MS-194) | Optional (D-21) | Resolved-by-rule |
| C-58 | Email at registration | Remove (G02 BR-CR-044; G01 Effort R5) | Mandatory for entities, optional for agents (G01 BR-DEL-019; G05 BR-MS-063/123); optional for all (G13 BR-LEG-130) | Mandatory for entities (D-17) | Resolved-by-rule |
| C-59 | Email domain validation | Block @gmail (G05 BR-MS-123; G02 CR Doc) | Not enforced (G02 Final Sno 48) | Unresolved (D-17) | Needs decision |
| C-60 | Age consent | No DOB/checkbox (G01 BR-DEL-077; G02 BR-CR-041) | 18+ tick (G02 BR-CR-045; G05 BR-MS-012; G01 BR-DEL-021); auto-ticked today (G13 BR-LEG-174) | Checkbox; default state unresolved (D-16) | Needs decision |
| C-61 | Under-18 policy | Not intended for under-18s (G13 PP §4.4) | Minors browse via guardian (G13 T&C §5); "to decide" (G13 compliance) | Unresolved | Needs decision |
| C-62 | OTP length | 4 digits (G08 BR-PG1-192; G04 STORIES) / "4 or 6" (G04 BR-REQ-149) | 6 digits (G05 BR-MS-061) | 6 digits (D-30) | Resolved-by-rule |
| C-63 | Legal entity | "Keydemand" (G02 BR-CR-233) / "Keyproperty" (G02 BR-CR-262/215; G01 BR-DEL-046) | "Propvantage Proptech Private Limited" (G13 BR-LEG-001/044) | Unresolved (D-14) | Needs decision |
| C-64 | Grievance Officer | Named: Kartik Iyer (G13 PP BR-LEG-044) | Owner open ("who will be doing it?", G01 CR S.no. 209); not in T&C (G13) | Unresolved (D-14) | Needs decision |
| C-65 | Tracking / cookies | No tracking cookies (G13 BR-LEG-129) | GA4/GTM + AppsFlyer (G14 notes); GA in dashboards (G01 BR-DEL-127; G02 BR-CR-197; G11 BR-ADM-057); PP GA cookies (G13 BR-LEG-023) | Unresolved (D-15) | Needs decision |
| C-66 | Sub-processors | Razorpay, MSG91, Interakt, AWS, MongoDB, V1 (G13 BR-LEG-160/173) | Firebase push/Crashlytics (G01 BR-DEL-045); AppsFlyer, GA4 (G14); AI/chatbot/fraud vendors (G13 BR-LEG-029) | Unresolved (D-15) | Needs decision |
| C-67 | Data location | All data stays in India (G13 #4); AWS ap-south-1 (G13 BR-LEG-160) | PP §12 consent to transfer outside India (G13); data residency in CR scope (G02 BR-CR-215) | Unresolved (D-15) | Needs decision |
| C-68 | Consent model | Use of platform = consent (G13 BR-LEG-007); account creation = consent to contact-sharing and notifications (G13 BR-LEG-067) | Explicit unticked checkbox, separate marketing consent (G13 BR-LEG-183) | Compliance drives the build (G13 note) | Needs decision |
| C-69 | Notification opt-out | Promotional-only opt-out (G05 BR-MS-076; G06 BR-FLD-116; G08 BR-PG1-258; G09 BR-PG2-054) | Full opt-in/out (G05 BR-MS-254 Phase 2); granular preferences, easy withdrawal (G13 BR-LEG-202) | Phase 1 promotional-only (D-26) | Needs decision |
| C-70 | Chatbot | Not built for Phase 1 (G02 Final note); Phase 2 (G09 BR-PG2-131) | Self-help chatbot on help desk (G08 BR-PG1-179; G09 BR-PG2-057); T&C §3 chatbot (G13 BR-LEG-060); PP chatbot clause (G01 BR-DEL-262; G02 BR-CR-012/033) | Not in Phase 1; legal text is forward-looking | Resolved-by-rule |
| C-71 | Other interested locations | Up to 3 (G01 BR-DEL-058; G04 BR-REQ-058; G05 BR-MS-122; G06 BR-FLD-005/104; G12 BR-ROL-057) | At least 3 (G02 BR-CR-019/226); office 1 + up to 4 (G05 EP-006 BR 5; G08 BR-PG1-246; G12 BR-ROL-061) | Up to 3; office 4 unconfirmed | Needs decision |
| C-72 | Editable fields after posting | Asset Class, Transaction, City, Location locked (G05 EP-006 BR 4) | "All fields can be edited" CTA (G05 self-views); other locations and possession unlocked (G01 BR-DEL-067; G02 BR-CR-027) | Lock list is stricter (G02 note) | Resolved-by-rule |
| C-73 | Project categories | Standard / Premium / Exclusive (G02 BR-CR-150/196; G05 BR-MS-197; G10 BR-KDT-058/092) | Regular / Sponsored / Exclusive (G08 BR-PG1-251; G02 Final Sno 55/62); Exclusive / Premium / Common Project + Booster Featured/Exclusive/Sponsored (G11 V2.0) | Standard/Premium/Exclusive; G11 "Common" naming unconfirmed | Needs decision |
| C-74 | Sponsored → Premium | "Sponsored Projects" (G02 Final; G01 BR-DEL-023) | Renamed Premium (G08 BR-PG1-041; G02 CR Doc) | Premium | Resolved-by-rule |
| C-75 | Lead statuses | Approved/Rejected/Open (G02; G10 BR 5; G12) | Pending (G10 drill-down; G15); Pending/Approved/Rejected/Expired/Closed (G11 BR-ADM-076); expiry = "Rejected" (G05 BR-MS-181; G08 BR-PG1-146; G09 BR-PG2-032) | Unresolved (D-28) | Needs decision |
| C-76 | Guest image visibility | Guests see property images unless hidden (G08 BR-PG1-010/065; G05 EP-001 BR 1) | Blurred / not visible to non-registered users (G03 BR-DQ-065; G06 BR-FLD-135; G08 Journey); guest CTAs open OTP (G12 BR-ROL-047) | Visible (G08 Landing V1.0 is newest) | Resolved-by-rule |
| C-77 | Demand card image (no logo) | Shuffle pool of five asset-class images (G02 BR-CR-025; G05 BR-MS-184) | One placeholder per asset class (G02 BR-CR-317; G09 BR-PG2-012; G07 BR-REL-045); enterprise end-use images (G01 BR-DEL-065; G07 BR-REL-046) | G07 (14 Oct): fixed asset-class image; end-use images for enterprise | Resolved-by-rule |
| C-78 | Agent free trial | 1 listing OR 1 demand (G05 BR-MS-017; G08 BR-PG1-261; G04 BR-REQ-156) | 1 listing AND 1 demand (G05 BR-MS-089; G12 BR-ROL-034; G08 Landing V1.0) | Unresolved (D-25) | Needs decision |
| C-79 | Agent onboarding asset classes | Agents work in Retail, F&B, Office (G04 BR-REQ-084; G08 BR-PG1-261); cannot post Managed Space (G04 BR-REQ-010) | Self-onboarding offers Retail / Office / Managed Spaces, no F&B (G15 note) | G04/G08; G15 build/test gap | Needs decision |
| C-80 | Managed Space seat floor vs Enterprise | Form accepts only >20 seats (G04 BR-REQ-066; G06 BR-FLD-029) | >20 seats → Enterprise funnel (G05 BR-MS-166; G12 BR-ROL-066; G14 BR-TRK-046) | Unresolved (D-24) | Needs decision |
| C-81 | Compare properties | 2–5 properties (G04 STORIES BR-REQ-194) | Phase 2 (G05 BR-MS-211) | Phase 2 | Resolved-by-rule |
| C-82 | Flex | Phase 2 (G04 BR-REQ-043; G06 BR-FLD-072) | Control Panel Flex centre template exists (G06 Control Panel note) | Phase 2; template unexplained | Needs decision |
| C-83 | Project lead recipients | RM + assigned KD team + admin (G03 Agent Gaps); KD RM + super-admin dashboard (G05 EP-009A) | Assigned KD team + Admin, no RM (G03 Notifications); + Developer/Operator (G05 EP-007 BR 7) | Unclear | Needs decision |
| C-84 | Exclusive project CTA | "Enquire Now" (G08 Journey; G10 V1.0) | "Show Interest" (G08 Landing V1.0, V1.1; G10 V2.0) | Show Interest | Resolved-by-rule |
| C-85 | RM vs POC naming | "RM" publicly displayed (G02 29 Jul) | "POC" brand-side, "Account Handler" backend; "RM" internal only (G01 BR-DEL-014; G05 BR-MS-069; G08 BR-PG1-092; G10 BR-KDT-062) | POC (Oct docs) | Resolved-by-rule |
| C-86 | BRM existence | "BRMs do not exist" (G02 29 Jul) | BRM persona (G01 BR-DEL-228; G02 BR-CR-198); SIT KD sub-role "BRM" (G01 BR-DEL-316); BD broker monitoring (G10 BR-KDT-056; G12 BR-ROL-022) | BRM exists (Register and SIT build) | Resolved-by-rule |
| C-87 | Notification daily cap | Per-user daily cap exists (G12 BR-NTF-011; G04 BR-REQ-105) | Value never stated (G04 BR-REQ-111) | Undefined | Needs decision |
| C-88 | Registration email/OTP for Office Occupier | Enquiry form for Office Occupiers (G08 Landing BR) | 1 free demand after OTP registration (G08 All User Journeys; G08 Enterprise V1.0; G05 BR-MS-055/056) | OTP registration | Resolved-by-rule |
| C-89 | Firebase Crashlytics | Firebase Crashlytics + push (G01 BR-DEL-045) | "Crashlytics is not needed" (G01 Register S.no. 207) | Register status | Needs decision |
| C-90 | Admin listing delete confirmation | User-side delete always confirmed (G15 user sheet) | Admin deletes projects with no confirmation (G15 admin sheet) | Unspecified | Needs decision |

---

## Placeholders & undefined values

| # | Placeholder / undefined item | Where (group, BR or note) | What is missing |
|---|---|---|---|
| P-01 | "[XYZ sq ft]" HTL threshold | G04 BR-REQ-136; G08 Enterprise V1.0 (G08 open question); G09 BR-PG2-215 | Per-city values |
| P-02 | HTL default thresholds for 6 of the 8 Tier-1 cities | G12 HTL open question; G08 V1.1 open question | Chennai, Coimbatore, Pune, Gurgaon, Delhi (and Hyderabad outside examples) |
| P-03 | Manual unlock window "n number of days" / "3–4 days" | G12 BR-HTL-003; G05 BR-MS-178 | Exact number; configurable? |
| P-04 | "Ops User" admin role | G11 BR-ADM-004 (open question); G01 BR-DEL-117 | Any permissions |
| P-05 | "22 roles" | G11 doc 4 open question | Never enumerated |
| P-06 | "Tier cities" pricing tier | G15 BR-TC-045 | Mapping to Non-metro |
| P-07 | Subscription billing period and GST | G04 open question (Subscription) | Monthly vs annual; GST |
| P-08 | "₹1,000\*" asterisk and "bundle" in messaging | G14 open question | Footnote text |
| P-09 | "₹INR/Month" in agent messaging hook | G12 open question | Price value |
| P-10 | Razorpay test cases RP-01…RP-32 | G15 open question | Steps and expected results empty |
| P-11 | "Confirm and Pay" → "mummy adagale" | G15 open question (row 1399) | Payment redirect target |
| P-12 | Manage Space Operator signup/login tests | G15 open question | "Yet to be implemented" |
| P-13 | Analytics admin test tab | G15 open question | Empty |
| P-14 | Notification daily cap value | G04 BR-REQ-111; G12 BR-NTF-011 | Number |
| P-15 | Daily digest send time and channel | G12 open question; G01 open question (Daily Summary) | Time, channel, recipients |
| P-16 | Enterprise Solution Lead SLA ("45 min left") | G01 / G11 open questions | SLA definition |
| P-17 | Relevancy display threshold | G07 open question | Minimum % |
| P-18 | Property (non-project) size tolerance | G07 open question | ± % |
| P-19 | Similar-properties criteria | G07 open question | Definition |
| P-20 | Project relevancy weights | G07 open question (Project tab) | Weight columns empty |
| P-21 | Grace period after cancellation (erasure) | G13 BR / note #8; G04 STORIES US-012 "if applicable" | Length |
| P-22 | Privacy Policy and T&C dates `[•]` | G13 doc table | Effective / last-updated dates |
| P-23 | T&C §3 chatbot "(OR)" alternative | G13 open question | Legal choice |
| P-24 | T&C free limits "as may be determined" | G13 note #11 | Numbers (product: see C-04, C-06, C-78) |
| P-25 | T&C §5 "levy penalty" | G13 open question | Amount and mechanism |
| P-26 | Takedown SLA | G13 To-Do #5 | Value |
| P-27 | Monitoring thresholds "___" (API p95, DB connections, queue) | G01 open question (On-call sheet) | Values |
| P-28 | "High-ticket threshold" in Event Docket | G14 open question | Value |
| P-29 | Event properties / parameters | G14 open question | None defined |
| P-30 | AppsFlyer Dev Key / App ID; deep-link routes | G14 open question | Pending dev confirmation |
| P-31 | "Select City" on the Control Panel user form | G11 open question | Purpose |
| P-32 | Calendly link for callback | G09 open question | URL |
| P-33 | About Us page copy and metrics | G08 open question; G02 29 Jul (Kartik Iyer pending) | Real copy |
| P-34 | US-013, US-031–037 placeholders; US-018 "need more ideas" | G05 open question | Content |
| P-35 | Epic/Story numbers EP-000/US-000; Timeline column empty | G02 open question | Numbers, dates |
| P-36 | PRD v1 §9 consolidated TBD list (23 items) | G04 open question | Owners and decisions blank |
| P-37 | FAQ doc | G01 doc table (UNREADABLE); G02 Sno 29 "FAQ might take some time" | Content |
| P-38 | Notification catalogue ("Notification Final") | G12 open question; G04 hidden tab | Lives outside G12; partly in G04 |
| P-39 | External SharePoint field workbook | G05, G09, G08 open questions | Field-level validation outside Drive |
| P-40 | Delete-account Google Form name | G09 open question (Office) | Truncated |
| P-41 | "Other Brands" in KD Enterprise view | G10 open question | Definition |
| P-42 | "LEFT" column in CP enterprise table | G11 open question | Definition |
| P-43 | "TG1" in tracking | G14 open question | Definition |
| P-44 | Admin Escalation L3 vs P2 target (2 h vs 8–16 h) | G01 open question | Consistent SLA |
| P-45 | Unique governmental ID in PP §4.1 | G13 open question | Which ID (RERA? PAN?) |

---

## Glossary

| Term | Meaning on Keydemand (cite source) | Also called / old name |
|---|---|---|
| Keydemand V2 Phase 1 | The release covered by this KB: Web, Mobile (Android/iOS via one TypeScript codebase) and Admin apps (G12 BR-ROL-001; G01 Delivery Plan) | V2 |
| User Portal | The front-end for agents, brands, tenants, KD team (G05 BR-MS-001) | Front end |
| Control Panel | The back-end admin console for user management, bulk uploads, subscriptions, HVL configuration; restricted to 4–5 core people (G05 BR-MS-001/003; G11 BR-ADM-003; G02 BR-CR-003) | Admin panel, Admin Console, Keydemand-Admin |
| Property | A supply listing (office, retail, F&B unit) posted by an agent or KD team (G06 Property & Project Input Fields; G04 P&P) | Listing |
| Demand | A space requirement posted by a brand, tenant, agent or KD team; front-end users cannot search demands (G05 BR-MS-159; G06 Demand Input fields) | Requirement, lead (when routed) |
| Project | A developer or Managed Space Operator development/centre, added only by Admin from the backend (G04 BR-REQ-045/048; G10 BR-KDT-136) | Developer project, Managed centre |
| Asset class | Retail, F&B, Office, Managed Space (Flex = Phase 2) (G06 BR-FLD-072; G04 BR-REQ-043) | Property type |
| Agent | External broker who lists properties/demands; free trial then subscription (G05 BR-MS-089; G08 BR-PG1-261) | Property Agent (renamed, G01 BR-DEL-050), Broker, Channel Partner |
| Trial Plan / Pro Member | Labels for unsubscribed vs paying agents (G01 BR-DEL-159; G05 BR-MS-101) | Free Plan; "Broker"/"Agent" labels deprecated |
| Brand – Retail | Occupier brand posting Retail demands only; 3 free demands (G09 persona table; G05 BR-MS-160) | Retail Brand |
| Brand – F&B | Occupier brand posting F&B demands only; 3 free demands (G09; G05 BR-MS-160) | F&B Brand |
| Office Tenant | Occupier posting Office demands; 1 free demand; 5 contact views (G09 BR-PG2-153/164) | Tenant (renamed, G01 BR-DEL-050), Office Occupier |
| Managed Space Tenant | Occupier seeking managed office seats; 1 demand; demands visible only to KD (G09 MS V1.0; G04 BR-REQ-068) | Managed Space Occupier (`managed_space_occupier`), Managed Office Tenant |
| Managed Space Operator (MSO) | Supply-side operator of managed centres; no self-login in Phase 1 rules; onboarded by Admin, like a Developer (G02 BR-CR-167; G09 BR-PG2-202; G12 BR-ROL-025) — see C-38 | Operator, Managed Office Operator |
| Developer | Builder whose projects are uploaded by Admin; enquiry form only (G05 BR-MS-022) — UAT build differs (G01 BR-DEL-321) | — |
| Enterprise | Brand/tenant account upgraded by Keydemand (after free quota, size threshold or self-selection); assigned POC; Formats; bulk upload (G03 BR-DQ-029; G08 BR-PG1-066/114; G12 BR-ROL-068) | Enterprise Solution, Enterprise user |
| Individual | Non-enterprise brand/tenant account (G11 permission matrix; G06 BR-FLD-119) | — |
| Formats | Admin-defined enterprise templates (fixed specs; only City/Location vary) (G01 BR-DEL-044; G11 BR-ADM-064/072) | Brand Formats |
| Keydemand Team (KD team) | Internal users onboarded only via backend, mobile + OTP login; can explore demands, post all asset classes, bypass paywalls (G10 BR-KDT-001/002/012; G12 BR-ROL-017/018/021) | KD member, Keydemand user, Keydemand agent (SIT sub-role, G01 BR-DEL-316) |
| POC (Point of Contact) | KD member assigned to an enterprise account per city; "POC" brand-side, "Account Handler" backend (G05 BR-MS-069; G08 BR-PG1-092) | Account Handler, RM, TM |
| RM (Relationship Manager) | Internal term only; must not be shown to clients (G10 BR-KDT-062; G01 BR-DEL-014) | POC, Account Handler |
| BRM | Broker Relationship Manager: KD persona with read-only oversight of all subscribed external brokers (G01 BR-DEL-228/229; G02 BR-CR-198) | BD broker monitoring (G12 BR-ROL-022) |
| Super Admin | Control Panel role with full access; only one who can delete other admins (G11 matrix rows 2–3; G01 BR-DEL-312 "30 perms") | — |
| Admin | Control Panel role restricted to granted permissions (G11 matrix; G01 BR-DEL-312 "28") | Standard Admin, Normal Admin |
| Ops User | Third Phase 1 admin role named but undefined (G11 BR-ADM-004; G01 BR-DEL-117) | Possibly "Contributor" in SIT (G01 BR-DEL-312) — unclear |
| Contributor | SIT admin role with 9 permissions (G01 BR-DEL-312) | Possibly Ops User — unclear |
| HTL / HVL | High Ticket / High Value Lead: demand above a per-city/asset-class size threshold in a Tier-1 city; hidden from external agents and routed to the KD team (G12 BR-HTL-001/002; G10 BR-KDT-022; G11 BR-ADM-032) | High Ticket Leads, High Value Ticket, "Requirements more than 5K" (G03) |
| Tier 1 / Tier 2 (HTL) | Tier 1 = Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi (HTL applies); Tier 2 (e.g. Jaipur, Indore) open to all (G12 BR-HTL-006/007; G10 BR-KDT-028/029) | — |
| Manual unlock | Releasing an HTL to the agent relevancy pool (G12 BR-HTL-003/004; G11 BR-ADM-037/038) | Agent Access toggle |
| Massive Demand Bypass | Agent-posted demand above threshold (e.g. >10,000 sq ft BLR) stays visible to agents (G01 BR-DEL-234; G05 BR-MS-177) | — |
| Metro / Non-metro / ROI / Pan India | Subscription coverage tiers: per-city Metro (₹1000) or Non-Metro (₹750), Rest of India, Pan India (₹5000) (G04 BR-REQ-001–005; G05 BR-MS-084/090) | "Tier cities" (G15), Rest of Cities |
| Bundle | Subscription asset grouping: (Retail & F&B) and (Office) (G05 BR-MS-086; G08 BR-PG1-163) | Asset group |
| Contact unlock | Revealing a hidden contact number, subject to free limits or subscription (G13 BR-LEG-141; G05 BR-MS-028) | View Phone Number, Connects, contact reveal |
| Two-way reveal | When a user views a number, both parties receive each other's details via WhatsApp; no approval needed (G09 BR-PG2-161; G12 BR-ROL-009/010) | Two-Way Unlocks (G14 BR-TRK-026) |
| Contact request | Agent's request to connect on a brand's demand, needing brand Accept/Reject (G09 BR-PG2-031/032) — window see D-01 | Request Contact, connection request |
| Image request | Request to see hidden property images; never expires (G05 BR-MS-033; G08 BR-PG1-139) | Request for Images |
| Relevancy | Automated demand↔property/project matching with field weights per asset class (G07 BR-REL-001–019) | Matches, relevant demands/properties |
| Similar properties / projects | Related listings on a property/project page; similar projects Phase 2 (G07 BR-REL-021/022/026) | — |
| Carpet area vs built-up area | Carpet must be ≤ Built-up (G02 BR-CR-016); built-up required on Office, deleted on Retail/F&B forms (G06 BR-FLD-059/068); Efficiency = carpet ÷ super built-up (G06 BR-FLD-082) | Super built-up |
| OC | Occupancy Certificate: property "OC Status" (4 values, see D-20); demand "OC Required" Yes/No (G05 BR-MS-169) | OC available (V1) |
| RERA | Real-estate regulator registration number; optional at project level (G05 BR-MS-194); shown only for Agent/Developer (G04 BR-REQ-055); T&C disclaimer (G13 BR-LEG-112) | Rera ID |
| Standard / Premium / Exclusive | Project categories; Premium = paid, city-specific slots; Exclusive = mandated to Keydemand (G05 BR-MS-197; G12 BR-ROL-023) | Regular / Sponsored / Exclusive (old); Common Project (G11) |
| Microsite | City- or asset-class-specific landing area for occupiers (G09 persona table) | — |
| Enterprise Solution | Upsell/onboarding path for brands/tenants to enterprise (G08 BR-PG1-066) | — |
| Leads / Enquiries | Leads = inbound (phone viewed, contact/image requests); Enquiries = outbound (projects enquired, numbers viewed, images requested) (G09 shared rules; G05 BR-MS-188) | "Leads received" (deprecated), contact inquiries |
| Show Interest | CTA to enquire on a project (G09 shared rules) | Enquire Now (old) |
| Bulk upload | Excel/CSV upload of listings/formats via Control Panel; ≤5 MB / 2,000 rows; approval before live (G11 BR-ADM-068/070; G06 BR-FLD-100) | — |
| Daily digest / daily cap | Bundled once-a-day notification; per-user limit on sends (G12 BR-NTF-011/014) | Daily Summary |
| Transactional vs promotional | Transactional WhatsApp (leads, relevancy) cannot be disabled; promotional can (G05 BR-MS-076; G06 BR-FLD-116) | — |
| CR | Change Request: business-rule changes logged in the CR register (G02 doc table; G01 Register "Ongoing plus CRs & New Features") | — |
| SIT | System Integration Testing stage/environment (G01 BR-DEL-008; V2 SIT Environment Details) | — |
| UAT | User Acceptance Testing by the Keydemand business team (G01 BR-DEL-009; G02 BR-CR-206) | — |
| Build 1–4 | Dependency-linked delivery increments (G01 BR-DEL-001/002; G15 version note) | — |
| Grievance Officer | Legally required contact for complaints/takedown; PP names Kartik Iyer (G13 BR-LEG-044; G02 BR-CR-031) | — |
| Keyproperty / Propvantage Proptech | Candidate legal entity names (G02 BR-CR-262; G13 BR-LEG-001) — see D-14 | Keydemand |
| Interakt / MSG91 / Razorpay | WhatsApp/email notifications; SMS OTP; payments (G02 BR-CR-214; G13 BR-LEG-173) | — |
| AppsFlyer OneLink | Attribution and deep-link tool for app installs (G14 notes) | — |
