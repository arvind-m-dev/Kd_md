# Cross-document conflicts, decisions needed & glossary

Scope: core business-rule groups G02–G12, authoritative documents only.

**Scope.** This chapter is built from the "Group-level notes" and "Open questions" sections of groups 02–12, plus targeted searches of the BR lines across groups. It covers clashes **between different groups**. Clashes inside one group are already listed in that group's notes and are repeated here only when another group adds a further position.

**How to read it.**
- "G04" means group file `04-requirements.md`, and so on.
- Authority follows `kb/00-header.md`: within a document family, the highest "Version N.N" wins. Between authoritative documents, the later-dated CR or decision wins.
- Key dates used below: CR "Final" sheet (G02, 2026-08-03); Product Requirements Oct 2 (G04, 2026-10-10); Version 1.0 Master Sheet (G05, 2026-10-08); Sep 16 field sheets (G06); Version 1.0 Landing (G08, 2026-10-15); Version 1.0 Enterprise and All User Journeys (G08, 2026-10-06); Version 1.1 Agent (G08, 2026-10-02); Version 1.0 occupier pages (G09, 2026-09-28 / 10-03); Version 2.0 KD Specific Page (G10, 2026-10-06); Version 2.0 Control Panel (G11, 2026-10-09); Roles guide doc 2 (G12, 2026-10-06).
- No document status assigned in a group file is changed here. Where this chapter doubts a group's in-group resolution, it says so as "Doubt:".

---

## Decisions needed (top priority)

**D-01 — Contact-request response window (4 working days vs 72 hours)**
- Sources disagree: G05 V1.0 Master says brands have 4 working days, excluding Sat/Sun (BR-MS-180), and that requests auto-drop at exactly 72 h (BR-MS-181). G08 Agent V1.1 says the same pair (BR-PG1-145 vs BR-PG1-146). G09 Retail/F&B V1.0 says the same pair (BR-PG2-031/032, BR-PG2-105/106). G12 says 4 working days only (BR-ROL-006). G04 says 72 h only (BR-REQ-112, BR-REQ-167), as do G06 (BR-FLD-145), G08 Agent Complete Journey (BR-PG1-227, BR-PG1-241). G03 adds a 24-hour reminder (BR-DQ-105/106).
- Current resolution under the authority rules: **unresolved.** Every latest authoritative doc states both values. 72 calendar hours always expires before 4 working days (G05 open question), so the 4-day window can never be reached.
- Question to confirm: Is the window 72 calendar hours or 4 working days, and should the other value be deleted everywhere?

**D-02 — Agent subscription price structure (bundles, ROI, combined price, subscriber contact cap)**
- Sources disagree:
  - G04 Oct 2: Metro ₹1000 / Non-Metro ₹750 per asset class per city, "Both" ₹2000 / ₹1500. ROI ₹1000 per asset class, Pan India ₹5000, with no "Both" price for either (BR-REQ-001/002/003).
  - G05 V1.0 and G08 V1.1: the same figures per bundle, with combined Metro ₹2000 / Non-Metro ₹1500 (BR-MS-090/091, BR-PG1-169).
  - G11 CP V2.0: "Rest of India ₹1,000 flat", Pan India ₹5,000 flat, no combined bundle (BR-ADM-050).
  - G03 Himanshu: three other price sets (Metro 1500 / Non-metro 1000; ₹1000 / ₹750 per city; ₹1000 per asset class) and **5 contact views per month per city × asset class for subscribers** (BR-DQ-085, BR-DQ-108). G05 says subscribers get **unlimited** contacts (BR-MS-029), and so does G04 (BR-REQ-170).
- Current resolution under the authority rules: G04/G05/G08 (October) agree on Metro, Non-Metro and Pan India and supersede G03 (March–June). The unlimited-contacts rule governs. **Still open:** the combined-bundle price (absent from G11 V2.0, the latest CP doc), whether ROI is per asset class or flat, and the billing period and GST (G04 open question).
- Question to confirm: Does a combined (Retail & F&B + Office) bundle price exist, and is ROI ₹1000 per bundle or flat?

**D-03 — Number of admin roles and the undefined "Ops User"**
- Sources disagree: G02 Final (BR-CR-004) and G11 V2.0 (BR-ADM-004) give 3 roles: Super Admin / Admin / Ops User. G02 CR Doc (BR-CR-279) and G11 "Super Admin, Normal Admin" (BR-ADM-088) give 2 roles. G02 30 Jun lists Admin groups A/B/C (BR-CR-355).
- Current resolution under the authority rules: 3 roles (V2.0, the highest version). However, "Ops User" has no defined permissions anywhere (G11 open question).
- Question to confirm: Which permissions does "Ops User" hold?

**D-04 — HTL/HVL thresholds: values, units, cities, inclusivity**
- Sources disagree:
  - Mumbai >5,000 sq ft and Bangalore/Hyderabad >10,000: G02 (BR-CR-261), G05 (BR-MS-176), G10 (BR-KDT-022).
  - Admin-editable per city: G12 (BR-HTL-001), G10 (BR-KDT-128).
  - Generic ">10,000": G11 (BR-ADM-032).
  - ">5,000 sq ft or >20 seats": G08 (BR-PG1-067), G12 (BR-ROL-065).
  - "[XYZ sq ft]": G04 (BR-REQ-136), G09 (BR-PG2-215).
  - "equal to or above": G03 (BR-DQ-048), against ">" elsewhere.
  - Indore is in the 30 Jun HVL list (BR-CR-352) but Tier 2 elsewhere (BR-KDT-029, BR-HTL-007).
- Current resolution under the authority rules: the thresholds are **admin-configurable per city, asset class and size** (G11 V2.0 HVL rules; G12 HTL). Tier 1 is 8 cities and excludes Indore. Mumbai 5k and BLR/HYD 10k are only examples. The default values for the other 6 Tier-1 cities, the seat threshold and inclusivity are **unresolved**.
- Question to confirm: What are the launch default thresholds for each of the 8 Tier-1 cities, is the comparison ">" or "≥", and is there a seat-based HTL threshold?

**D-05 — HVL manual unlock: who, when, to whom**
- Sources disagree: G05 (BR-MS-178) and G10 (BR-KDT-033/034) say the **Admin** unlocks after "3–4 days" and notifies only agents with matching properties. G12 HTL says the Admin unlocks after "**n** days" and the lead shows only in matching agents' Relevancy tab (BR-HTL-003/004). G11 V2.0 says the **Keydemand team** unlocks, notifies normal and KD agents (BR-ADM-037), and has a per-lead "Agent Access" toggle (BR-ADM-038).
- Current resolution under the authority rules: G11 V2.0 (2026-10-09) is the latest: the KD team (with the "Unlock leads" permission) unlocks, using the toggle. The unlock window is **undefined**.
- Question to confirm: Who may unlock an HTL (Admin only, or any KD member), and is there an automatic or recommended window (3–4 days)?

**D-06 — Can the POC / KD team post or edit an enterprise brand's demands?**
- Sources disagree:
  - **Cannot:** G02 Final (BR-CR-139), G08 Enterprise V1.0 Bulk Upload (BR-PG1-103), G10 V2.0 BR 5 (BR-KDT-047), G12 doc 1 and doc 2's KD section (BR-ROL-015, BR-ROL-019).
  - **Can:** G05 V1.0 (BR-MS-186), G08 Enterprise V1.0 Demand Mgmt (BR-PG1-085), G10 V2.0 drill-down (BR-KDT-099), G12 doc 2 Enterprise section (BR-ROL-063).
  - G11 V2.0 says enterprises log in and post using Format auto-fill (G11 note).
- Current resolution under the authority rules: **unresolved.** The latest docs (G08, G10, G12 of 6 Oct) each contain both statements.
- Question to confirm: May an assigned POC add, edit or deactivate an enterprise brand's demands on the front end, or only through the Control Panel bulk upload?

**D-07 — Can Retail/F&B brands explore Office properties?**
- Sources disagree: **No Office:** G02 Final (BR-CR-157, BR-CR-172, BR-CR-212). **Office allowed:** G05 V1.0 (BR-MS-160), G08 Enterprise V1.0 (BR-PG1-112) and G09 Retail/F&B V1.0 (BR-PG2-009, BR-PG2-083). None of them allows Managed Space.
- Current resolution under the authority rules: **Office allowed.** The October-dated authoritative page specs are later than the Final sheet of 3 Aug. Doubt: G02 group notes resolve this the other way inside G02 ("Final wins"). That is correct within G02 but superseded across groups.
- Question to confirm: Confirm that Retail/F&B brands (individual and enterprise) can explore Retail, F&B and Office, but not Managed Space.

**D-08 — Office Tenant posting Managed Space; "operators post only Managed Space"**
- Sources disagree:
  - Unconditional: G02 Final (BR-CR-165) and G12 doc 1 (BR-ROL-008).
  - Only if "Also interested in Managed Space" was ticked: G09 Office V1.0 (BR-PG2-153) and G12 doc 2 (BR-ROL-062).
  - Office only; the tick merely alerts the admin team: G05 V1.0 (BR-MS-021, US-001) and G02 CR Doc 13 Jul "Pending Rule" (G02 note).
  - G08 All User Journeys §8 says both (G08 note).
  - "Managed Space operators can post only Managed Space" (BR-CR-165, BR-PG2-199, BR-ROL-008) conflicts with "operators do not log in" (BR-CR-167, BR-PG2-202).
- Current resolution under the authority rules: **unresolved.** The latest (G12 doc 2 and G09) say "only if ticked", but G05 V1.0 (8 Oct) says office only. The "operator" wording is probably meant to read "Managed Space occupier/tenant" (G12 note), but that is unclear.
- Question to confirm: If an Office Tenant ticks "Also interested in Managed Office/Space", can they post a Managed Space demand themselves, or is the interest only routed to Keydemand?

**D-09 — Developer and Managed Space Operator login and onboarding**
- Sources disagree:
  - No login; enquiry form; admin onboards within 24 h: G05 V1.0 (BR-MS-022), G08 Landing V1.0 (BR-PG1-004/013), G09 MS V1.0 (BR-PG2-202), G02 Final (BR-CR-167).
  - Developers access dashboards and leads "from the backend": G11 doc 6 (BR-ADM-097).
  - Developers see projects on their dashboard: G06 (BR-FLD-174).
  - "List a Project" with a registration form via a radio button: G02 29 Jul (BR-CR-329).
  - Landing V1.0: the phone + OTP enquiry returns a registered number to the dashboard (G08 note).
  - G05 Phase 2 US-042 has a Developer Dashboard.
- Current resolution under the authority rules: G05 V1.0 says no front-end login, with projects added by Admin. But G11 doc 6 and G06 (BR-FLD-174) have developers accessing dashboards and leads.
- Question to confirm: In Phase 1, do Developers and MSOs have any login (even read-only to their profile and RM), or are they enquiry-form-only?

**D-10 — Listing moderation before going live**
- Sources disagree:
  - Pending → admin approval: G04 STORIES (BR-REQ-186/188/190), G05 Phase 2 US-055 (BR-MS-261).
  - "Admins … approve or moderate listings": G12 (BR-ROL-024).
  - G04 Oct 2 notification says "posted successfully… now live" (G04 note). G05 V1.0 has no gate. G11 V2.0 approval applies only to bulk uploads (BR-ADM-070).
- Current resolution under the authority rules: **no pre-moderation** for user-posted listings in Phase 1 (Oct 2 and V1.0). Moderation is Phase 2, apart from bulk-upload approval. This needs confirmation because of G12.
- Question to confirm: Do user-posted properties and demands go live instantly in Phase 1, with moderation only after the fact?

**D-11 — Demand inactivity: 60 days vs 90 days vs a 3-month check**
- Sources disagree:
  - Auto-"Inactive" after 60 days: G04 Access Permissions (BR-REQ-165), G05 V1.0 (BR-MS-185), G06 (BR-FLD-157), G08 Journey (BR-PG1-245), G11 V2.0 for bulk (BR-ADM-071), G12 (BR-ROL-059).
  - A 90-day "still available?" digest: G04 Oct 2 (BR-REQ-108).
  - An "Active Status check every 3 months": G09 (BR-PG2-056, BR-PG2-130, BR-PG2-188) and G05 (BR-MS-185).
- Current resolution under the authority rules: G04 resolved this in-group as "90-day prompt; 60-day unconfirmed". But G05 V1.0 (8 Oct) and G11 V2.0 (9 Oct) still apply 60-day expiry. **Needs business decision.** The two could coexist (60-day expiry plus a 90-day digest for older listings), but no doc says so.
- Question to confirm: Do demands auto-expire at 60 days, or only get a "still available?" prompt at 90 days / 3 months?

**D-12 — Legal entity name**
- Sources disagree: entity "Keydemand" (BR-CR-233) vs "Keyproperty" (BR-CR-262, BR-CR-215), all in G02.
- Current resolution under the authority rules: **unresolved.** G02 gives both names.
- Question to confirm: What legal entity name goes on the T&C and Privacy Policy?

**D-13 — Age gate and the consent checkbox**
- Sources disagree:
  - "No separate DOB field or checkbox": G02 (BR-CR-041).
  - Exact 18+ phrase "and a tick": G02 (BR-CR-045).
  - Mandatory T&C + "18 and above" checkbox: G05 V1.0 (BR-MS-012). G02 29 Jul: implemented.
- Current resolution under the authority rules: an 18+ checkbox exists (G05 V1.0; G02 29 Jul, implemented).
- Question to confirm: Is registration gated by an 18+ / T&C checkbox?

**D-14 — Email at registration and domain validation**
- Sources disagree:
  - "Remove email field completely": G02 Final (BR-CR-044).
  - Mandatory for Brands/Tenants, optional for Agents: G02 (BR-CR-047), G05 (BR-MS-063, BR-MS-123).
  - Domain validation (block @gmail): G05 V1.0 (BR-MS-123) vs "NOT enforced" in G02 Final (G02 note).
- Current resolution under the authority rules: mandatory for entities, optional for Agents (G05 V1.0 is later). Domain blocking is **unresolved**, because G05 V1.0 (8 Oct) is later than G02 Final (3 Aug) and re-asserts blocking.
- Question to confirm: Is "Official Email ID" mandatory for Brands/Tenants, and are generic domains (gmail etc.) blocked?

**D-15 — Refunds and mid-cycle cancellation**
- Sources disagree:
  - No refund on city cancellation: G05 (BR-MS-095), G08 V1.1 (BR-PG1-168).
  - Cancellations take effect next billing cycle: G12 (BR-ROL-040). G08 Journey: changes reflect on next month's bill (G08 note).
- Current resolution under the authority rules: no refund on city cancellation (G05, G08). The effective date of cancellation (immediate vs next cycle) is **unresolved**.
- Question to confirm: When an agent removes a city mid-cycle, does access end immediately or at cycle end?

**D-16 — Media size limits**
- Sources disagree:
  - Images <2 MB, video <5 MB: G04 Oct 2 (BR-REQ-013), G06 Sep 16 sheets (BR-FLD-036).
  - Images 5 MB, video 15 MB: G05 V1.0 (BR-MS-125), G04 "All Fields" block.
  - 5 MB ≥300 ppi, video 20 MB: G06 persona doc and G08 Journey (BR-PG1-226).
  - PDF 2 MB vs 5 MB (BR-REQ-034, BR-FLD-065).
- Current resolution under the authority rules: **unresolved.** G05 V1.0 (8 Oct) is later than the G06 sheets (16 Sep), but G04 Oct 2 (modified 10 Oct) agrees with G06.
- Question to confirm: What are the final per-file limits for images, videos and PDFs (2/5/2 MB or 5/15/5 MB)?

**D-17 — OC Status values**
- Sources disagree: **3 values** (Available / Not available / Under construction): G02 Final (BR-CR-020). **4 values** (Received / Applied / Not Available / Under Construction): G02 CR Doc (BR-CR-224), G04 Oct 2 (BR-REQ-028), G05 V1.0 (BR-MS-169), G06 Sep 16 (BR-FLD-056). G04 filters use "Received / Applied / Not Applicable" (G04 open question).
- Current resolution under the authority rules: **4 values.** These are in every later doc. Doubt: G02 group notes say "latest dated = 3 values". That holds within G02 but is superseded across groups.
- Question to confirm: Confirm the 4 OC values for property/project, and "OC Required Yes/No" for demands.

**D-18 — RERA mandatory or optional**
- Sources disagree: **Mandatory:** G02 Final (BR-CR-030), G02 30 Jun (BR-CR-354). **Optional:** G02 CR Doc (BR-CR-231), G05 V1.0 (BR-MS-194).
- Current resolution under the authority rules: **optional at project level.** G05 V1.0 (Oct) is later than G02 Final. G02 marked it unresolved in-group.
- Question to confirm: Confirm that project-level RERA is optional and that no RERA verification is required for agents.

**D-19 — Keydemand team relevancy scope**
- Sources disagree: **Brands and Tenants only:** G02 (BR-CR-130, BR-CR-266 "TBD by Kartik"), G10 Dashboard V1.0 (BR-KDT-132). **Also agents and other KD members:** G10 Specific Page V2.0 (BR-KDT-041) and G12 doc 2 (BR-ROL-071).
- Current resolution under the authority rules: G10 group notes take V2.0 (6 Oct) as the latest rule. The restriction is still stated in G02 and G10 Dashboard V1.0. **Needs decision.**
- Question to confirm: Are KD-posted listings matched against agent listings as well as brand/tenant listings?

**D-20 — KD member deactivation/deletion and their inventory**
- Sources disagree: soft-delete keeping inventory (G05 V1.0, BR-MS-049) vs mandatory handover to another KD user first (G10 V2.0, BR-KDT-006; G11 V2.0, BR-ADM-016/017).
- Current resolution under the authority rules: **handover first** (G10/G11 V2.0, the latest).
- Question to confirm: Must every listing be reassigned before a KD member is deactivated or deleted, and is the account then soft-deleted?

**D-21 — Managed Space minimum seats vs Enterprise trigger**
- Sources disagree: the Managed Space demand form accepts "only more than 20 seats" (G04, BR-REQ-066; G06, BR-FLD-029), yet requests >20 seats are routed to the Enterprise funnel (G05, BR-MS-166; G12, BR-ROL-066; G08, BR-PG1-067).
- Current resolution under the authority rules: **unresolved.** Taken together, these rules would make every individual Managed Space demand an Enterprise lead.
- Question to confirm: What is the minimum seat count for an individual Managed Space demand, and above what seat count does it become an Enterprise lead?

**D-22 — Agent free trial: 1 listing AND 1 demand, or 1 listing OR 1 demand**
- Sources disagree:
  - "or": G05 (BR-MS-017), G08 All User Journeys (BR-PG1-261), G04 Access Permissions (BR-REQ-156).
  - "and": G05 (BR-MS-089), G12 (BR-ROL-034), G08 Landing V1.0 (G08 note).
  - "1 listing maximum": G08 V1.1.
- Current resolution under the authority rules: **unresolved.** The latest docs (G08 Landing 15 Oct "and"; G08 All User Journeys 6 Oct "or") disagree.
- Question to confirm: Does a non-subscribed agent get one free property listing and one free demand, or one of either?

**D-23 — Lead / request status vocabulary**
- Sources disagree: Approved / Rejected / Open (G02 Final Sno 142; G10 BR 5; G12) vs Approved / Rejected / Pending (G02 13 Jul; G10 drill-downs) vs Pending / Approved / Rejected / Expired / Closed (G11, BR-ADM-076) vs New / Contacted / Qualified / Close (G10 filters) vs CRM-lite stages (Phase 2). G05/G08/G09 map expiry to "Rejected" (BR-MS-181, BR-PG1-146, BR-PG2-032), while G11 has "Expired".
- Current resolution under the authority rules: **unresolved.**
- Question to confirm: What is the single status list for contact/image/project leads, and does an expired request show as "Rejected" or "Expired"?

**D-24 — OTP length**
- Sources disagree: 4 digits (G08 Journey, BR-PG1-192; G04 STORIES US-003) vs "4 or 6" (G04, BR-REQ-149) vs 6 digits (G05 V1.0, BR-MS-061, BR-MS-051).
- Current resolution under the authority rules: **6 digits** (G05 V1.0 is the latest).
- Question to confirm: Confirm that the login OTP is 6 digits for all apps.

---

## Cross-document conflict register

| ID | Topic | Position A (source, BR) | Position B (source, BR) | Resolution under authority rule | Status |
|---|---|---|---|---|---|
| C-01 | Contact-request window | 4 working days excl. weekends (G05 BR-MS-180; G08 BR-PG1-145; G09 BR-PG2-031/105; G12 BR-ROL-006) | 72 h auto-nullify (G04 BR-REQ-112/167; G05 BR-MS-181; G06 BR-FLD-145; G08 BR-PG1-146/227/241; G09 BR-PG2-032/106) | Both in latest docs; unresolved (D-01) | Needs decision |
| C-02 | Reminder before expiry | 24 h reminder, then 72 h supplier message (G03 BR-DQ-105/106) | No reminder; 3 notification texts only (G09 persona table) | G09 V1.0 later; reminder dropped | Resolved-by-rule |
| C-03 | Who receives contact requests | Office/MS tenants get no contact requests, only passive views (G09 note; BR-PG2-161) | Occupier has 72 h to accept an agent's request (G06 BR-FLD-145; G08 BR-PG1-227) | G09 V1.0 later: only Retail/F&B brands accept/reject | Resolved-by-rule |
| C-04 | Brand/tenant contact-view cap | 5 views, 6th blocked (G02 BR-CR-161; G09 BR-PG2-164; G11 BR-ADM-026; G12 BR-ROL-004/011; G08 BR-PG1-055) | Prompt after 3–4, not blocked (G06 BR-FLD-140); office tenants unrestricted (G03 Himanshu note) | 5 (G05/G09 V1.0) | Resolved-by-rule |
| C-05 | Managed Space Tenant contact cap | Included in the 5-view cap (G05 US-038) | No cap stated; supplier is the KD team (G09 MS V1.0) | Unclear; G05 notes flag it | Needs decision |
| C-06 | Non-subscribed agent contact cap | 5 lifetime (G04 BR-REQ-156; G05 BR-MS-028; G08 BR-PG1-053/143; G12 BR-ROL-034) | "More than twice or thrice" (G08 Journey BR17; G06 note) | 5 lifetime | Resolved-by-rule |
| C-07 | Subscribed agent contact cap | Unlimited (G04 BR-REQ-170; G05 BR-MS-029) | 5 per month per city × asset class (G03 BR-DQ-085, BR-DQ-108) | Unlimited (G03 is oldest) | Resolved-by-rule |
| C-08 | Subscription prices | Metro 1000 / Non-Metro 750 / ROI 1000 / Pan India 5000; combined 2000/1500 (G04 BR-REQ-001–003; G05 BR-MS-090/091; G08 BR-PG1-169) | Metro 1500 / Non-metro 1000 per category, or 1000/750 per city, or 1000 per asset class (G03 note) | October docs (G04/G05/G08) | Resolved-by-rule |
| C-09 | Combined bundle and ROI pricing | Combined Metro ₹2000 / Non-Metro ₹1500; ROI per asset class (G04 BR-REQ-001/002; G05 BR-MS-091; G08 BR-PG1-169) | No combined bundle; ROI "₹1,000 flat" (G11 BR-ADM-050); Pro Plan omits ROI and combined (G08 BR-PG1-262; G12 BR-ROL-039) | Unresolved (D-02) | Needs decision |
| C-10 | Bundle composition | (Retail & F&B) and (Office) (G03 BR-DQ-077; G05 BR-MS-086; G08 BR-PG1-163) | "Office & Managed Offices" plan (G03 BR-DQ-108); agents cannot post Managed Space (G04 BR-REQ-010) | Office bundle excludes Managed Space (G05 V1.0) | Resolved-by-rule |
| C-11 | Metro city list | Metro = 19 cities incl. Kolkata (G04 BR-REQ-005); picker lists Kolkata (G05 BR-MS-108; G08 BR-PG1-205) | Metro = Mumbai, Pune, Delhi NCR, Bangalore, Hyderabad, Chennai only; Indore non-metro (G03 open question) | G04 City tab | Resolved-by-rule |
| C-12 | Mid-cycle additions | Charged prorated immediately (G03 BR-DQ-079; G05 BR-MS-094; G08 BR-PG1-167; G12 BR-ROL-040) | Reflected on next month's bill (G08 Journey, G08 note) | Immediate proration (V1.1, V1.0) | Resolved-by-rule |
| C-13 | Mid-cycle city cancellation | No refund; immediate (G05 BR-MS-095; G08 BR-PG1-168) | Takes effect next billing cycle (G12 BR-ROL-040) | Unresolved timing (D-15) | Needs decision |
| C-14 | Admin roles | 3: Super Admin/Admin/Ops User (G02 BR-CR-004; G11 BR-ADM-004) | 2 roles (G02 BR-CR-279; G11 BR-ADM-088); groups A/B/C (G02 BR-CR-355) | 3 roles by version; Ops User undefined (D-03) | Needs decision |
| C-15 | Granular admin permissions | Deferred to Phase 2 (G02 Sno 208; G11 V2.0 BR) | Per-action toggles defined: 27 toggles (G11 doc 4 BR-ADM-092, BR-ADM-075) | Unresolved: doc 4 defines toggles; G02 and V2.0 defer granularity | Needs decision |
| C-16 | Admin login factors | Email + password (G02 BR-CR-280; G11 BR-ADM-009) | "username and password" (G05 BR-MS-050; G11 BR-ADM-100) | V2.0: email + password; confirm | Needs decision |
| C-17 | HTL threshold values | Per-city admin config (G12 BR-HTL-001; G10 BR-KDT-128) with examples 5k Mumbai / 10k BLR-HYD (G02 BR-CR-261; G05 BR-MS-176; G10 BR-KDT-022) | Flat >5,000 sq ft (G06 BR-FLD-148; G08 BR-PG1-067); >10,000 (G11 BR-ADM-032); "XYZ" (G04 BR-REQ-136; G09 BR-PG2-215) | Admin-configurable; defaults unresolved (D-04) | Needs decision |
| C-18 | Seat-based threshold | >20 seats triggers enterprise (G08 BR-PG1-067; G12 BR-ROL-065/066; G05 BR-MS-166) | No seats in HTL doc (G12 HTL open question); HTL excludes Managed offices (G03 §3.4) | Unresolved (D-04, D-21) | Needs decision |
| C-19 | Threshold inclusivity | "Equal to or above" (G03 BR-DQ-048) | ">" / "exceeds" (G05 BR-MS-176; G10 BR-KDT-022) | Unresolved | Needs decision |
| C-20 | Indore | In the HVL city list (G02 BR-CR-352, 30 Jun; G10 docs 3/5) | Tier 2, open to all (G10 BR-KDT-029; G12 BR-HTL-007) | Tier 2 (later) | Resolved-by-rule |
| C-21 | HTL unlock actor and window | Admin after 3–4 days (G05 BR-MS-178; G10 BR-KDT-033); Admin after "n days" (G12 BR-HTL-003) | KD team unlocks; Agent Access toggle (G11 BR-ADM-037/038) | G11 V2.0; window undefined (D-05) | Needs decision |
| C-22 | Who is notified on unlock | Only agents with a matching property (G05 BR-MS-178; G10 BR-KDT-034; G12 BR-HTL-004) | Normal agents and KD agents (G11 BR-ADM-037) | Compatible: both via relevancy; G11 adds KD agents | Resolved-by-rule |
| C-23 | Agent-posted large demands | Only "massive" (>10,000 sq ft BLR) agent demands bypass the KD block (G02 BR-CR-088; G05 BR-MS-177; G08 BR-PG1-132) | All agent-posted requirements bypass HTL size limits (G12 BR-HTL-008) | Unclear trigger (G05 open question) | Needs decision |
| C-24 | HTL vs HVL naming | "HTL"/"High Ticket Leads" (G12 HTL doc; G05 EP-006; G10 side menu) | "HVL"/"High Value Leads/Ticket" (G05 US-039; G10; G11) | Same concept (see Glossary) | Resolved-by-rule |
| C-25 | Who can explore demands | KD team only (G05 BR-MS-159; G06 BR-FLD-158; G11 BR-ADM-106; G12 BR-ROL-018; G08 BR-PG1-236) | Admin can toggle an agent's "explore demands" (G02 BR-CR-090; G11 BR-ADM-090); developers/agents explore (G04 STORIES/Epics) | KD only; the toggle is the KD-member permission (G11 V2.0) | Resolved-by-rule |
| C-26 | Agents seeing demands via Relevancy vs the global directory | KD team only can search the global directory (G12 BR-ROL-018) | Tier-2 and agent-posted demands "visible to everyone under Relevancy" (G12 BR-HTL-007/008) | Consistent if Relevancy ≠ search (G12 note); confirm | Needs decision |
| C-27 | Retail/F&B explore Office | Not Office (G02 BR-CR-157/172/212) | Office allowed (G05 BR-MS-160; G08 BR-PG1-112; G09 BR-PG2-009/083) | Office allowed (D-07) | Resolved-by-rule |
| C-28 | Managed Space Tenant explore | Managed Space + Office (G09 MS Business Rules; G08 BR-PG1-270) | Managed Space only (G09 MS header) | Business rules (G09 note) | Resolved-by-rule |
| C-29 | Office Tenant posting Managed Space | Unconditional (G02 BR-CR-165; G12 BR-ROL-008) | Only if ticked (G09 BR-PG2-153; G12 BR-ROL-062) / office only, tick alerts admin (G05 BR-MS-021; G02 13 Jul) | Unresolved (D-08) | Needs decision |
| C-30 | "Managed Space operators post only Managed Space" | Operators post Managed Space (G02 BR-CR-165; G09 BR-PG2-199; G12 BR-ROL-008) | Operators never log in; supply added by KD (G02 BR-CR-167; G09 BR-PG2-202; G12 BR-ROL-025); "operators cannot post demands" (G08 note) | Likely means occupier (G12 note); confirm (D-08) | Needs decision |
| C-31 | Managed Space Tenant posting | Strictly Managed Space (G05 V1.0) | "Office and F&B demands only" (G06 persona doc, G06 open question) | G05 V1.0 | Resolved-by-rule |
| C-32 | Developer / MSO login | No login; enquiry form (G05 BR-MS-022; G08 BR-PG1-004/013; G09 BR-PG2-202; G02 BR-CR-167) | Backend dashboards for developers (G11 BR-ADM-097); developer dashboard (G06 BR-FLD-174; G05 Phase 2 US-042) | Unresolved (D-09) | Needs decision |
| C-33 | Project-listing entry point | "List your Project >>" dropdown → enquiry form (G02 BR-CR-244; G05 BR-MS-006; G08 BR-PG1-004; G12 BR-ROL-050) | "List a Project" with radio → registration form (G02 BR-CR-329, 29 Jul) | G08 Landing V1.0 (15 Oct) and G05 V1.0 are later: enquiry form | Resolved-by-rule |
| C-34 | Developers posting projects | Admin-only via backend (G04 Oct 2; G10 BR-KDT-136) | Developers add projects (G04 STORIES/Epics) | Admin-only | Resolved-by-rule |
| C-35 | POC editing enterprise demands | Cannot (G02 BR-CR-139; G08 BR-PG1-103; G10 BR-KDT-047; G12 BR-ROL-015/019) | Can (G05 BR-MS-186; G08 BR-PG1-085; G10 BR-KDT-099; G12 BR-ROL-063) | Unresolved (D-06) | Needs decision |
| C-36 | Enterprise self-posting | Enterprise does not post; POC uploads Excel (G03 "completely read-only?") | Enterprise users log in and post with Format auto-fill (G11 V2.0; G12 BR-ROL-014; G08 BR-PG1-085) | G11 V2.0 / G08 V1.0 | Resolved-by-rule |
| C-37 | Listing moderation | Pending → admin approval (G04 BR-REQ-186/188/190; G05 BR-MS-261 Phase 2; G12 BR-ROL-024) | Live immediately; only bulk uploads approved (G04 Oct 2; G05 V1.0; G11 BR-ADM-070) | No pre-moderation in Phase 1 (D-10) | Needs decision |
| C-38 | Demand inactivity | 60-day auto-inactive (G04 BR-REQ-165; G05 BR-MS-185; G06 BR-FLD-157; G08 BR-PG1-245; G11 BR-ADM-071; G12 BR-ROL-059) | 90-day "still available?" (G04 BR-REQ-108); 3-month check (G09 BR-PG2-056/130/188) | Unresolved (D-11) | Needs decision |
| C-39 | Agent account after non-renewal | Account and listings permanently deactivated at 90 days (G04 BR-REQ-171; G11 BR-ADM-102; G08 BR-PG1-200) | Listings active 3 months, then "Expired" and auto-deactivated; data kept; reactivatable (G03 BR-DQ-059/060; G05 BR-MS-097; G08 BR-PG1-173/174; G12 BR-ROL-041) | Data retained (V1.1/V1.0 later) | Resolved-by-rule |
| C-40 | Subscription after deactivation | Stops and cannot be reactivated (G05 US-007; G08 V1.1/Journey) | Benefits resume if reactivated within the period (G05 EP-001/002/004; G08) | Both in V1.0 and V1.1 | Needs decision |
| C-41 | Inventory on user deactivation | 3-month hibernation, then permanent removal (G05 US-007) | Paused/hidden; data preserved (G05 other sections; G09 shared rules) | Preserved (majority) | Needs decision |
| C-42 | KD member deletion | Soft-delete, inventory retained (G05 BR-MS-049) | Handover to another KD user first (G10 BR-KDT-006; G11 BR-ADM-016/017) | Handover (V2.0) | Resolved-by-rule |
| C-43 | KD relevancy scope | Brands and Tenants only (G02 BR-CR-130/266; G10 BR-KDT-132) | Also agents and KD members (G10 BR-KDT-041; G12 BR-ROL-071) | Unresolved (D-19) | Needs decision |
| C-44 | Relevancy fields | Asset Class, Carpet Area, Location, Transaction only (G05 BR-MS-173) | Weighted fields incl. ceiling height, floor, possession, fit-outs (G07 BR-REL-001/003/006/009) | G07 xlsx (relevancy spec, 14 Oct) | Resolved-by-rule |
| C-45 | Relevancy % display | Properties: % shown in KD drill-downs (G10 BR-KDT-097/158; G02 BR-CR-312) | Projects: no % (G05 BR-MS-148/173; G06 BR-FLD-167; G08 BR-PG1-247) | Consistent: % for property matches only | Resolved-by-rule |
| C-46 | Media limits | Images <2 MB, video <5 MB (G04 BR-REQ-013; G06 BR-FLD-036) | 5 MB / 15 MB (G05 BR-MS-125); 5 MB ≥300 ppi / 20 MB (G06 persona; G08 BR-PG1-226) | Unresolved (D-16) | Needs decision |
| C-47 | PDF limit | <2 MB (G04 BR-REQ-034; G06 BR-FLD-065) | <5 MB (Keydemand block, same BRs; floorplans G06 BR-FLD-085) | Unresolved | Needs decision |
| C-48 | OC Status | 3 values (G02 BR-CR-020) | 4 values (G02 BR-CR-224; G04 BR-REQ-028; G05 BR-MS-169; G06 BR-FLD-056) | 4 values (D-17) | Resolved-by-rule |
| C-49 | RERA | Mandatory (G02 BR-CR-030/354) | Optional (G02 BR-CR-231; G05 BR-MS-194) | Optional (D-18) | Resolved-by-rule |
| C-50 | Email at registration | Remove (G02 BR-CR-044) | Mandatory for entities, optional for agents (G02 BR-CR-047; G05 BR-MS-063/123) | Mandatory for entities (D-14) | Resolved-by-rule |
| C-51 | Email domain validation | Block @gmail (G05 BR-MS-123; G02 CR Doc) | Not enforced (G02 Final Sno 48) | Unresolved (D-14) | Needs decision |
| C-52 | Age consent | No DOB/checkbox (G02 BR-CR-041) | 18+ tick (G02 BR-CR-045; G05 BR-MS-012) | Checkbox (G05 V1.0; G02 29 Jul, implemented) (D-13) | Resolved-by-rule |
| C-53 | OTP length | 4 digits (G08 BR-PG1-192; G04 STORIES) / "4 or 6" (G04 BR-REQ-149) | 6 digits (G05 BR-MS-061) | 6 digits (D-24) | Resolved-by-rule |
| C-54 | Legal entity | "Keydemand" (G02 BR-CR-233) | "Keyproperty" (G02 BR-CR-262/215) | Unresolved (D-12) | Needs decision |
| C-55 | Chatbot | Not built for Phase 1 (G02 Final note); Phase 2 (G09 BR-PG2-131) | Self-help chatbot on help desk (G08 BR-PG1-179; G09 BR-PG2-057); Privacy Policy chatbot clause (G02 BR-CR-012/033) | Not in Phase 1; the Privacy Policy clause is for potential future integration (G02 BR-CR-012) | Resolved-by-rule |
| C-56 | Other interested locations | Up to 3 (G04 BR-REQ-058; G05 BR-MS-122; G06 BR-FLD-005/104; G12 BR-ROL-057) | At least 3 (G02 BR-CR-019/226); office 1 + up to 4 (G05 EP-006 BR 5; G08 BR-PG1-246; G12 BR-ROL-061) | Up to 3; office 4 unconfirmed | Needs decision |
| C-57 | Editable fields after posting | Asset Class, Transaction, City, Location locked (G05 EP-006 BR 4) | "All fields can be edited" CTA (G05 self-views); other locations and possession unlocked (G02 BR-CR-027) | Lock list is stricter (G02 note) | Resolved-by-rule |
| C-58 | Project categories | Standard / Premium / Exclusive (G02 BR-CR-150/196; G05 BR-MS-197; G10 BR-KDT-058/092) | Regular / Sponsored / Exclusive (G08 BR-PG1-251; G02 Final Sno 55/62); Exclusive / Premium / Common Project + Booster Featured/Exclusive/Sponsored (G11 V2.0) | Standard/Premium/Exclusive; G11 "Common" naming unconfirmed | Needs decision |
| C-59 | Sponsored → Premium | "Sponsored Projects" (G02 Final) | Renamed Premium (G08 BR-PG1-041; G02 CR Doc) | Premium | Resolved-by-rule |
| C-60 | Lead statuses | Approved/Rejected/Open (G02; G10 BR 5; G12) | Pending (G10 drill-down); Pending/Approved/Rejected/Expired/Closed (G11 BR-ADM-076); expiry = "Rejected" (G05 BR-MS-181; G08 BR-PG1-146; G09 BR-PG2-032) | Unresolved (D-23) | Needs decision |
| C-61 | Guest image visibility | Guests see property images unless hidden (G08 BR-PG1-010/065; G05 EP-001 BR 1) | Blurred / not visible to non-registered users (G03 BR-DQ-065; G06 BR-FLD-135; G08 Journey); guest CTAs open OTP (G12 BR-ROL-047) | Visible (G08 Landing V1.0 is newest) | Resolved-by-rule |
| C-62 | Demand card image (no logo) | Shuffle pool of five asset-class images (G02 BR-CR-025; G05 BR-MS-184) | One placeholder per asset class (G02 BR-CR-317; G09 BR-PG2-012; G07 BR-REL-045); enterprise end-use images (G07 BR-REL-046) | G07 (14 Oct): fixed asset-class image; end-use images for enterprise | Resolved-by-rule |
| C-63 | Agent free trial | 1 listing OR 1 demand (G05 BR-MS-017; G08 BR-PG1-261; G04 BR-REQ-156) | 1 listing AND 1 demand (G05 BR-MS-089; G12 BR-ROL-034; G08 Landing V1.0) | Unresolved (D-22) | Needs decision |
| C-64 | Managed Space seat floor vs Enterprise | Form accepts only >20 seats (G04 BR-REQ-066; G06 BR-FLD-029) | >20 seats → Enterprise funnel (G05 BR-MS-166; G12 BR-ROL-066) | Unresolved (D-21) | Needs decision |
| C-65 | Compare properties | 2–5 properties (G04 STORIES BR-REQ-194) | Phase 2 (G05 BR-MS-211) | Phase 2 | Resolved-by-rule |
| C-66 | Flex | Phase 2 (G04 BR-REQ-043; G06 BR-FLD-072) | Control Panel Flex centre template exists (G06 Control Panel note) | Phase 2; template unexplained | Needs decision |
| C-67 | Project lead recipients | RM + assigned KD team + admin (G03 Agent Gaps); KD RM + super-admin dashboard (G05 EP-009A) | Assigned KD team + Admin, no RM (G03 Notifications); + Developer/Operator (G05 EP-007 BR 7) | Unclear | Needs decision |
| C-68 | Exclusive project CTA | "Enquire Now" (G08 Journey; G10 V1.0) | "Show Interest" (G08 Landing V1.0, V1.1; G10 V2.0) | Show Interest | Resolved-by-rule |
| C-69 | RM vs POC naming | "RM" publicly displayed (G02 29 Jul) | "POC" brand-side, "Account Handler" backend; "RM" internal only (G05 BR-MS-069; G08 BR-PG1-092; G10 BR-KDT-062) | POC (Oct docs) | Resolved-by-rule |
| C-70 | BRM existence | "BRMs do not exist" (G02 29 Jul) | BRM persona (G02 BR-CR-198); BD broker monitoring (G10 BR-KDT-056; G12 BR-ROL-022) | BRM exists (G02 BR-CR-198; G10; G12) | Resolved-by-rule |
| C-71 | Registration email/OTP for Office Occupier | Enquiry form for Office Occupiers (G08 Landing BR) | 1 free demand after OTP registration (G08 All User Journeys; G08 Enterprise V1.0; G05 BR-MS-055/056) | OTP registration | Resolved-by-rule |

---

## Placeholders & undefined values

| # | Placeholder / undefined item | Where (group, BR or note) | What is missing |
|---|---|---|---|
| P-01 | "[XYZ sq ft]" HTL threshold | G04 BR-REQ-136; G08 Enterprise V1.0 (G08 open question); G09 BR-PG2-215 | Per-city values |
| P-02 | HTL default thresholds for 6 of the 8 Tier-1 cities | G12 HTL open question; G08 V1.1 open question | Chennai, Coimbatore, Pune, Gurgaon, Delhi (and Hyderabad outside examples) |
| P-03 | Manual unlock window "n number of days" / "3–4 days" | G12 BR-HTL-003; G05 BR-MS-178 | Exact number; configurable? |
| P-04 | "Ops User" admin role | G11 BR-ADM-004 (open question) | Any permissions |
| P-05 | "22 roles" | G11 doc 4 open question | Never enumerated |
| P-06 | Subscription billing period and GST | G04 open question (Subscription) | Monthly vs annual; GST |
| P-07 | "₹INR/Month" in agent messaging hook | G12 open question | Price value |
| P-08 | Notification daily cap value | G04 BR-REQ-111; G12 BR-NTF-011 | Number |
| P-09 | Daily digest send time and channel | G12 open question | Time, channel, recipients |
| P-10 | Enterprise Solution Lead SLA ("45 min left") | G11 open question | SLA definition |
| P-11 | Relevancy display threshold | G07 open question | Minimum % |
| P-12 | Property (non-project) size tolerance | G07 open question | ± % |
| P-13 | Similar-properties criteria | G07 open question | Definition |
| P-14 | Project relevancy weights | G07 open question (Project tab) | Weight columns empty |
| P-15 | Grace period after cancellation (erasure) | G04 STORIES US-012 "if applicable" | Length |
| P-16 | "Select City" on the Control Panel user form | G11 open question | Purpose |
| P-17 | Calendly link for callback | G09 open question | URL |
| P-18 | About Us page copy and metrics | G08 open question; G02 29 Jul (Kartik Iyer pending) | Real copy |
| P-19 | US-013, US-031–037 placeholders; US-018 "need more ideas" | G05 open question | Content |
| P-20 | Epic/Story numbers EP-000/US-000; Timeline column empty | G02 open question | Numbers, dates |
| P-21 | PRD v1 §9 consolidated TBD list (23 items) | G04 open question | Owners and decisions blank |
| P-22 | FAQ doc | G02 Sno 29 "FAQ might take some time" | Content |
| P-23 | Notification catalogue ("Notification Final") | G12 open question; G04 hidden tab | Lives outside G12; partly in G04 |
| P-24 | External SharePoint field workbook | G05, G09, G08 open questions | Field-level validation outside Drive |
| P-25 | Delete-account Google Form name | G09 open question (Office) | Truncated |
| P-26 | "Other Brands" in KD Enterprise view | G10 open question | Definition |
| P-27 | "LEFT" column in CP enterprise table | G11 open question | Definition |

---

## Glossary

| Term | Meaning on Keydemand (cite source) | Also called / old name |
|---|---|---|
| Keydemand V2 Phase 1 | The release covered by this KB: Web, Mobile (Android/iOS via one TypeScript codebase) and Admin apps (G12 BR-ROL-001) | V2 |
| User Portal | The front-end for agents, brands, tenants, KD team (G05 BR-MS-001) | Front end |
| Control Panel | The back-end admin console for user management, bulk uploads, subscriptions, HVL configuration; restricted to 4–5 core people (G05 BR-MS-001/003; G11 BR-ADM-003; G02 BR-CR-003) | Admin panel, Admin Console, Keydemand-Admin |
| Property | A supply listing (office, retail, F&B unit) posted by an agent or KD team (G06 Property & Project Input Fields; G04 P&P) | Listing |
| Demand | A space requirement posted by a brand, tenant, agent or KD team; front-end users cannot search demands (G05 BR-MS-159; G06 Demand Input fields) | Requirement, lead (when routed) |
| Project | A developer or Managed Space Operator development/centre, added only by Admin from the backend (G04 BR-REQ-045/048; G10 BR-KDT-136) | Developer project, Managed centre |
| Asset class | Retail, F&B, Office, Managed Space (Flex = Phase 2) (G06 BR-FLD-072; G04 BR-REQ-043) | Property type |
| Agent | External broker who lists properties/demands; free trial then subscription (G05 BR-MS-089; G08 BR-PG1-261) | Property Agent (renamed), Broker, Channel Partner |
| Trial Plan / Pro Member | Labels for unsubscribed vs paying agents (G05 BR-MS-101) | Free Plan; "Broker"/"Agent" labels deprecated |
| Brand – Retail | Occupier brand posting Retail demands only; 3 free demands (G09 persona table; G05 BR-MS-160) | Retail Brand |
| Brand – F&B | Occupier brand posting F&B demands only; 3 free demands (G09; G05 BR-MS-160) | F&B Brand |
| Office Tenant | Occupier posting Office demands; 1 free demand; 5 contact views (G09 BR-PG2-153/164) | Tenant (renamed), Office Occupier |
| Managed Space Tenant | Occupier seeking managed office seats; 1 demand; demands visible only to KD (G09 MS V1.0; G04 BR-REQ-068) | Managed Space Occupier (`managed_space_occupier`), Managed Office Tenant |
| Managed Space Operator (MSO) | Supply-side operator of managed centres; no self-login in Phase 1 rules; onboarded by Admin, like a Developer (G02 BR-CR-167; G09 BR-PG2-202; G12 BR-ROL-025) — see C-32 | Operator, Managed Office Operator |
| Developer | Builder whose projects are uploaded by Admin; enquiry form only (G05 BR-MS-022) | — |
| Enterprise | Brand/tenant account upgraded by Keydemand (after free quota, size threshold or self-selection); assigned POC; Formats; bulk upload (G03 BR-DQ-029; G08 BR-PG1-066/114; G12 BR-ROL-068) | Enterprise Solution, Enterprise user |
| Individual | Non-enterprise brand/tenant account (G11 permission matrix; G06 BR-FLD-119) | — |
| Formats | Admin-defined enterprise templates (fixed specs; only City/Location vary) (G11 BR-ADM-064/072) | Brand Formats |
| Keydemand Team (KD team) | Internal users onboarded only via backend, mobile + OTP login; can explore demands, post all asset classes, bypass paywalls (G10 BR-KDT-001/002/012; G12 BR-ROL-017/018/021) | KD member, Keydemand user |
| POC (Point of Contact) | KD member assigned to an enterprise account per city; "POC" brand-side, "Account Handler" backend (G05 BR-MS-069; G08 BR-PG1-092) | Account Handler, RM, TM |
| RM (Relationship Manager) | Internal term only; must not be shown to clients (G10 BR-KDT-062) | POC, Account Handler |
| BRM | Broker Relationship Manager: KD persona with read-only oversight of all subscribed external brokers (G02 BR-CR-198) | BD broker monitoring (G12 BR-ROL-022) |
| Super Admin | Control Panel role with full access; only one who can delete other admins (G11 matrix rows 2–3) | — |
| Admin | Control Panel role restricted to granted permissions (G11 matrix) | Standard Admin, Normal Admin |
| Ops User | Third Phase 1 admin role named but undefined (G11 BR-ADM-004) | — |
| HTL / HVL | High Ticket / High Value Lead: demand above a per-city/asset-class size threshold in a Tier-1 city; hidden from external agents and routed to the KD team (G12 BR-HTL-001/002; G10 BR-KDT-022; G11 BR-ADM-032) | High Ticket Leads, High Value Ticket, "Requirements more than 5K" (G03) |
| Tier 1 / Tier 2 (HTL) | Tier 1 = Bangalore, Hyderabad, Chennai, Coimbatore, Pune, Mumbai, Gurgaon, Delhi (HTL applies); Tier 2 (e.g. Jaipur, Indore) open to all (G12 BR-HTL-006/007; G10 BR-KDT-028/029) | — |
| Manual unlock | Releasing an HTL to the agent relevancy pool (G12 BR-HTL-003/004; G11 BR-ADM-037/038) | Agent Access toggle |
| Massive Demand Bypass | Agent-posted demand above threshold (e.g. >10,000 sq ft BLR) stays visible to agents (G05 BR-MS-177) | — |
| Metro / Non-metro / ROI / Pan India | Subscription coverage tiers: per-city Metro (₹1000) or Non-Metro (₹750), Rest of India, Pan India (₹5000) (G04 BR-REQ-001–005; G05 BR-MS-084/090) | Rest of Cities |
| Bundle | Subscription asset grouping: (Retail & F&B) and (Office) (G05 BR-MS-086; G08 BR-PG1-163) | Asset group |
| Contact unlock | Revealing a hidden contact number, subject to free limits or subscription (G05 BR-MS-028) | View Phone Number, Connects, contact reveal |
| Two-way reveal | When a user views a number, both parties receive each other's details via WhatsApp; no approval needed (G09 BR-PG2-161; G12 BR-ROL-009/010) | — |
| Contact request | Agent's request to connect on a brand's demand, needing brand Accept/Reject (G09 BR-PG2-031/032) — window see D-01 | Request Contact, connection request |
| Image request | Request to see hidden property images; never expires (G05 BR-MS-033; G08 BR-PG1-139) | Request for Images |
| Relevancy | Automated demand↔property/project matching with field weights per asset class (G07 BR-REL-001–019) | Matches, relevant demands/properties |
| Similar properties / projects | Related listings on a property/project page; similar projects Phase 2 (G07 BR-REL-021/022/026) | — |
| Carpet area vs built-up area | Carpet must be ≤ Built-up (G02 BR-CR-016); built-up required on Office, deleted on Retail/F&B forms (G06 BR-FLD-059/068); Efficiency = carpet ÷ super built-up (G06 BR-FLD-082) | Super built-up |
| OC | Occupancy Certificate: property "OC Status" (4 values, see D-17); demand "OC Required" Yes/No (G05 BR-MS-169) | OC available (V1) |
| RERA | Real-estate regulator registration number; optional at project level (G05 BR-MS-194); shown only for Agent/Developer (G04 BR-REQ-055) | Rera ID |
| Standard / Premium / Exclusive | Project categories; Premium = paid, city-specific slots; Exclusive = mandated to Keydemand (G05 BR-MS-197; G12 BR-ROL-023) | Regular / Sponsored / Exclusive (old); Common Project (G11) |
| Microsite | City- or asset-class-specific landing area for occupiers (G09 persona table) | — |
| Enterprise Solution | Upsell/onboarding path for brands/tenants to enterprise (G08 BR-PG1-066) | — |
| Leads / Enquiries | Leads = inbound (phone viewed, contact/image requests); Enquiries = outbound (projects enquired, numbers viewed, images requested) (G09 shared rules; G05 BR-MS-188) | "Leads received" (deprecated), contact inquiries |
| Show Interest | CTA to enquire on a project (G09 shared rules) | Enquire Now (old) |
| Bulk upload | Excel/CSV upload of listings/formats via Control Panel; ≤5 MB / 2,000 rows; approval before live (G11 BR-ADM-068/070; G06 BR-FLD-100) | — |
| Daily digest / daily cap | Bundled once-a-day notification; per-user limit on sends (G12 BR-NTF-011/014) | Daily Summary |
| Transactional vs promotional | Transactional WhatsApp (leads, relevancy) cannot be disabled; promotional can (G05 BR-MS-076; G06 BR-FLD-116) | — |
| CR | Change Request: business-rule changes logged in the CR register (G02 doc table) | — |
| UAT | User Acceptance Testing by the Keydemand business team (G02 BR-CR-206) | — |
| Grievance Officer | Legally required contact for complaints/takedown (G02 BR-CR-031) | — |
| Keyproperty | Candidate legal entity name (G02 BR-CR-262) — see D-12 | Keydemand |
| Interakt / MSG91 / Razorpay | WhatsApp/email notifications; SMS OTP; payments (G02 BR-CR-214) | — |
