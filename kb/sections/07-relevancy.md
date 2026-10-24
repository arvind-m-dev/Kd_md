# 07 — Relevancy / Matching Logic

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Relevancy Logics.xlsx | Excel (.xlsx), 5 tabs | `1u8vTa1tN7UAWQQgi-PXnAG2lels_N33M` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 2 | Properties and projects relavancy/similar matches | Google Sheet, 2 tabs | `1QNT9o_tREQro2OFa9uhx58ZDlJpGhKHpRWExI_FYIIU` | arvind.m@futuristglobal.com | 2026-10-10 | AUTHORITATIVE |
| 3 | Images for Demand -Relevancy and Enterprise End Use as discussed in Client call today(8th October) | Google Doc | `1To607MwaovFvLD7jj2spXYhhRPv_AsdaidcHvm8tof4` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 4 | Keydemand Relevancy — Business Guide - DO NOT TAKE. .docx | Word (.docx) | `1cM4ZE069Xb12FWrItTipiSOp6oKrPKfB` | pradeepa.pv@futuristglobal.com | 2026-10-06 | NON-AUTHORITATIVE (title says "DO NOT TAKE"; body says "DO NOT USE THIS DOCUMENT") |

---
## Relevancy Logics.xlsx  [AUTHORITATIVE]
**Source:** Excel .xlsx · ID `1u8vTa1tN7UAWQQgi-PXnAG2lels_N33M` · owner pradeepa.pv@futuristglobal.com · created 2026-10-14, modified 2026-10-14 · tabs read: Retail Relevancy, Office Relevancy, F&B Relevancy, Managed Office, Project Relvancy (5 of 5) · read coverage: 100% of cell text (read via Drive text export; column positions reconstructed from the comma-separated export — see open questions for the one stray "." cell)

### Content

#### Tab: Retail Relevancy
**RETAIL DEMAND & SUPPLY RELEVANCY**

| Demand fields | M/O | Weight | Supply Field |
|---|---|---|---|
| *(header group)* | | **80%** | |
| Asset Class | M | | Asset Class |
| Transcation type | M | | Transcation type |
| City | M | | City |
| Location\* + other interested location | M | | Location |
| Carpet Area (sq. ft.)\* | M | | Carpet Area (sq. ft.)\* |
| Ceiling Height (ft.)\* | M | | Ceiling Height (ft.)\* |
| Floor | M | | Floor |
| Fitouts required | O | 5% | Fitouts available |
| Possession needed | O | 5% | Property available from |
| Frontage in feet | O | 5% | Frontage (ft.) |
| Store type | O | 5% | Store type |

(Source layout: the "80%" sits in the header row "Demand fields, , 80%, Supply Field", i.e. the mandatory block together carries 80%; the four optional fields carry 5% each = 100% total.)

- M- stands for mandatory
- O- stands for optional

Comments:
> "For optional data sets - if its missing from the demand then the property % should not be reduced. If the optional data is required from the demand side and missing in property then the % should be reducted"

#### Tab: Office Relevancy
**Office Demand and Property Relevancy**

| Demand Fields Office | % bifurcation | Property Fields Office |
|---|---|---|
| Asset Class | 80% | Asset Class |
| Transaction Type | | Transaction Type |
| City | | City |
| Location\* + other interested location | | Location |
| Carpet Area | | Carpet Area (sq. ft.)\* |
| Possession needed\* | 5% | Property available from |
| Fitouts | 15% | Fitouts Status\* |

(80% shown against Asset Class covers the block Asset Class → Carpet Area; 80 + 5 + 15 = 100%. No M/O column on this tab, though the M/O legend is present.)

- M- stands for mandatory
- O- stands for optional

Comments:
> "For optional data sets - if its missing from the demand then the property % should not be reduced. If the optional data is required from the demand side and missing in property then the % should be reducted"

#### Tab: F&B Relevancy
**F&B DEMAND & SUPPLY RELEVANCY**

| Demand fields | M/O | Weight | Supply Field |
|---|---|---|---|
| Asset Class | M | **75%** | Asset Class |
| Transcation type | M | | Transcation type |
| City | M | | City |
| Location\* + other interested location | M | | Location |
| Carpet area in sq.ft\* | M | | Carpet area in square feet |
| Floor Preference\* | M | | Floor |
| Clear ceiling height | M | | Ceiling height in feet |
| Store type\* | O | *(blank)* | Store type |
| Fitouts required | O | 5% | Fitouts available |
| Possession needed\* | O | 5% | Property available from |
| Frontage in feet | O | 5% | Frontage in feet |
| Cooking Type | O | 5% | Gas connection |
| Non veg served | O | 5% | Non-veg allowed |

(75% for the mandatory block + 5 × 5% optional = 100%. Store type\* is marked O but has no weight.)

- M- stands for mandatory
- O- stands for optional

Comments:
> "For optional data sets - if its missing from the demand then the property % should not be reduced. If the optional data is required from the demand side and missing in property then the % should be reducted"

#### Tab: Managed Office
**Manged Office Demand & Supply Relevancy**

| Demand fields | M/O | Weight | Supply Field |
|---|---|---|---|
| Asset Class | M | **100%** | Asset Class |
| Transaction type\* | M | | Transaction type\* |
| City\* | M | | City\* |
| Location\* + other interested location | M | | Location\* |
| Possession needed\* | M | | Property Available From\* |
| Number of seats\* | M | | Number of seats\* |

- M- stands for mandatory
- O- stands for optional

#### Tab: Project Relvancy
**RETAIL / F&B/ Office/ Managed Spaces DEMAND & Project RELEVANCY**

| Demand fields | Weight (%) | Effective Weight (%) | Comments | Project Field | M/O | Comments |
|---|---|---|---|---|---|---|
| Asset Class | | | The asset class will automatically match from the backend and it should equal to what the demand is put and will have a weightage of 1 or 0. Also to consider that the asset class could be all three for a single project or even it could be multiple asset class under one project | Retail/F&B/Office/Managed Offices | M | In this there could be a probability that the asset class can be multiple in that case the project match could come for all the asset classes for their relevancy |
| Transaction Type | | | Transaction type will always be equal to the property. Similarly 1 or 0 weightage | Lease/Sale | M | |
| City | | | It should match the exact location of the given requirement | City | M | |
| Location | | | "It can be of an area and exact (i.e micro locality, area and city related outcomes)" | Location | M | |
| Carpet Area | | | It should match with the carpet area if lesser than 10% varience on the lower and 20% on the above and it covered between the total carpet area of the project. Eg the project can have min and maximum range in the carpet area i.e 1000 sft to 20000 sft so in this case any requirement in between this can be a match for the requirements | Unit Size Min /Unit Size Max | M | Whatever required range (size) comes under project range size |

- M- stands for mandatory
- O- stands for optional

(Weight (%) and Effective Weight (%) columns are empty for every row.)

### Business rules extracted
- **BR-REL-001** — Retail demand ↔ property relevancy: mandatory fields Asset Class, Transcation type, City, Location\* + other interested location (vs Location), Carpet Area (sq. ft.)\*, Ceiling Height (ft.)\*, Floor together carry 80%. _(§ Retail Relevancy)_
- **BR-REL-002** — Retail optional fields carry 5% each: Fitouts required ↔ Fitouts available; Possession needed ↔ Property available from; Frontage in feet ↔ Frontage (ft.); Store type ↔ Store type. _(§ Retail Relevancy)_
- **BR-REL-003** — Office demand ↔ property relevancy: Asset Class, Transaction Type, City, Location\* + other interested location (vs Location), Carpet Area (vs Carpet Area (sq. ft.)\*) carry 80%. _(§ Office Relevancy)_
- **BR-REL-004** — Office: Possession needed\* ↔ Property available from = 5%. _(§ Office Relevancy)_
- **BR-REL-005** — Office: Fitouts ↔ Fitouts Status\* = 15%. _(§ Office Relevancy)_
- **BR-REL-006** — F&B demand ↔ supply relevancy: mandatory Asset Class, Transcation type, City, Location\* + other interested location, Carpet area in sq.ft\* (vs Carpet area in square feet), Floor Preference\* (vs Floor), Clear ceiling height (vs Ceiling height in feet) carry 75%. _(§ F&B Relevancy)_
- **BR-REL-007** — F&B optional fields at 5% each: Fitouts required ↔ Fitouts available; Possession needed\* ↔ Property available from; Frontage in feet ↔ Frontage in feet; Cooking Type ↔ Gas connection; Non veg served ↔ Non-veg allowed. _(§ F&B Relevancy)_
- **BR-REL-008** — F&B: Store type\* ↔ Store type is optional (O) with no weight assigned. _(§ F&B Relevancy)_
- **BR-REL-009** — Managed Office demand ↔ supply relevancy: all fields mandatory and together 100%: Asset Class, Transaction type\*, City\*, Location\* + other interested location (vs Location\*), Possession needed\* (vs Property Available From\*), Number of seats\*. _(§ Managed Office)_
- **BR-REL-010** — Demand Location matching includes the demand's "other interested location(s)" in addition to the primary Location (Retail, Office, F&B, Managed Office). _(§ all four asset-class tabs)_
- **BR-REL-011** — "For optional data sets - if its missing from the demand then the property % should not be reduced." _(§ Comments, Retail/Office/F&B)_
- **BR-REL-012** — "If the optional data is required from the demand side and missing in property then the % should be reducted." _(§ Comments, Retail/Office/F&B)_
- **BR-REL-013** — Project relevancy applies to RETAIL / F&B / Office / Managed Spaces demands. _(§ Project Relvancy title)_
- **BR-REL-014** — Project: Asset Class auto-matches from the backend, must equal the demand's asset class, weightage 1 or 0 (Mandatory). _(§ Project Relvancy, Asset Class)_
- **BR-REL-015** — Project: a single project can have multiple asset classes (could be all three); the project then can match for all its asset classes for their relevancy. _(§ Project Relvancy, Asset Class comments)_
- **BR-REL-016** — Project: Transaction Type (Lease/Sale) "will always be equal to the property", 1 or 0 weightage (Mandatory). _(§ Project Relvancy, Transaction Type)_
- **BR-REL-017** — Project: City "should match the exact location of the given requirement" (Mandatory). _(§ Project Relvancy, City)_
- **BR-REL-018** — Project: Location "can be of an area and exact (i.e micro locality, area and city related outcomes)" (Mandatory). _(§ Project Relvancy, Location)_
- **BR-REL-019** — Project: Carpet Area matches if within 10% variance below and 20% above, and covered within the project's total carpet area range (Unit Size Min / Unit Size Max) — e.g. project range 1000 sft to 20000 sft: any requirement in between is a match (Mandatory). _(§ Project Relvancy, Carpet Area)_
- **BR-REL-020** — Project: "Whatever required range (size) comes under project range size" is a match. _(§ Project Relvancy, Carpet Area project comment)_

### Open questions / ambiguities in this doc
- How the 80% / 75% / 100% block weight is split across individual mandatory fields is not stated (one block number only). Are mandatory fields pass/fail filters or scored?
- Office tab has no M/O column, yet shows the M/O legend and the optional-data comment; which Office fields are optional is not stated (only by implication: Possession 5%, Fitouts 15%).
- F&B "Store type\*" is O but has an asterisk and no weight; Retail Store type is 5%.
- Retail tab mandatory field "Floor" vs F&B "Floor Preference\*" — matching logic for floor (exact? ranges?) not defined.
- Project tab: Weight (%) and Effective Weight (%) columns are empty; no % is defined for projects. No optional fields listed for projects.
- Project tab: City comment says "match the exact location"; Carpet Area comment combines a ±10%/+20% variance rule with a "within min–max range" rule — which applies (or both) is unclear.
- Size tolerance for property relevancy (non-project) is not defined in this file.
- Retail tab: the export shows a stray "." in a trailing cell on the Carpet Area and Ceiling Height rows (meaning unknown, likely junk).
- No display threshold (minimum % to show) is stated in this file.

---
## Properties and projects relavancy/similar matches  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1QNT9o_tREQro2OFa9uhx58ZDlJpGhKHpRWExI_FYIIU` · owner arvind.m@futuristglobal.com · created 2026-10-07, modified 2026-10-10 · tabs read: relavancys (A1:D35), Sheet2 (A1:J35), plus 6 comment threads · read coverage: 100%

### Content

#### Tab: relavancys
Columns: **page | selection | show/match | Business comment- Yes/No**

**agent**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any propertry | shows similar properties | Yes |
| explore projects | open any project | Show similar projects - Discussed we can add only in Phase 2 | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted property | shows relavant demands match to asset class | Yes |
| dashboard | open a self posted demad | shows the relavant properties / shows the relavant projects | Yes |

**Brand-retail**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any propertry | shows similar properties | Yes |
| explore projects | open any project | Show similar projects - Discussed we can add only in Phase 2 | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted demad | shows the relavant properties / shows the relavant projects | Yes |

**Brand-F&B**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any property | shows similar properties | yes |
| explore projects | open any project | Show similar projects - Discussed we can add only in Phase 2 | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted demad | shows the relavant properties / shows the relavant projects | Yes |

**office tenants**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any property | shows similar properties | Yes |
| explore projects | open any project | Show similar projects - Discussed we can add only in Phase 2 | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted demand | shows the relavant properties / shows the relavant projects | Yes |

**managed space**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any property | shows similar properties | Yes |
| explore projects | open any project | *(blank)* | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted demand | shows the relavant properties / shows the relavant projects | Yes |

**Keydemand team**
| page | selection | show/match | Business comment- Yes/No |
|---|---|---|---|
| explore properties | open any propertry | shows similar properties | Yes . If the property is not of their own then no relevant demands to be shown. Only similar properties to be shown. |
| explore demands | open any demand | shows the relavant properties / shows the relavant projects | Yes |
| explore projects | open any project | Show similar projects - Discussed we can add only in Phase 2 | Show similar projects nearby localities only(Phase 2) |
| dashboard | open a self posted property | shows relavant demands match to assect class | Yes |
| dashboard | open a self posted demand | shows the relavant properties / shows the relavant projects- can be agent/self/brand and tenant | Yes |

**Comments on this tab** (all by "Keydemand Developer", 2026-10-07):
| Anchor | Comment | Status |
|---|---|---|
| C4 (agent / explore projects) | Show similar projects (nearby localities only) | RESOLVED (empty reply by Pradeepa PV) |
| C10 (Brand-retail / explore projects) | Show similar projects (nearby localities only) | OPEN |
| C15 (Brand-F&B / explore projects) | Show similar projects (nearby localities only) | OPEN |
| C21 (office tenants / explore projects) | Show similar projects (nearby localities only) | OPEN |
| C31 (Keydemand team / explore properties) | If the property is not of their own then no relevant demands to be shown. Only similar properties to be shown. | OPEN |
| C33 (Keydemand team / explore projects) | Show similar projects (nearby localities only) | OPEN |

#### Tab: Sheet2
(This tab is an unrelated copy of a form-field spec, not relevancy logic. Transcribed in full for completeness.)

Title (merged D1:E1): **Uploading Retail Property Lease (For Agent)** · I1 (merged): **17-06-2026** · I2 (merged): **Himanshu**

| Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu (type) | Himanshu (format) |
|---|---|---|---|---|---|---|---|---|---|
| | | | **Primary details** | | | | | | |
| Yes | 1 | 11 | Images & Videos\* | Media(images and videos) | | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added; Image - JPEG, JPG, PNG; Video - MP4, MOV; Size: Image - less than 2MB each, Video: Less than 5MB each |
| Yes | 2 | 3 | Project Name | Text | | | | Text box | Alpha numeric |
| Yes | 3 | 6 | About Property / Project\* | Text | | | | Text box | Alpha numeric |
| No | 4 | 1 | Asset Class\* | Retail | | | New | Radio button | Single select |
| No | 5 | 4 | City\* | Drop Down + Search | | | | Search with auto fill | Single city selection |
| No | 6 | 5 | Location\* | Text + Autofill | | | | Search with auto fill | Single location selection |
| No | 7 | 2 | Transaction Type\* | Lease | Lease, Sale | | | Radio button | Single select |
| Yes | 8 | 7 | Carpet Area (sq. ft.)\* | Number | | 3,125 sq.ft. | | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| Yes | 9 | 9 | Rate per sq. ft. (Carpet)\* | Number | | Auto calculated if Rent Amount\* is provided | New | Number with suffix | ₹85 per sft |
| Yes | 10 | 8 | Quoted Rent\* | Number | | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| Yes | 11 | 10 | Property Available From\* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months | | | Drop Down | Single select |
| Yes | 12 | 12 | Store Type\* | Highstreet | Highstreet, Mall | | | Radio button | Single select |
| | | | **Property Specifications** | | | | | | |
| Yes | 13 | 14 | Floor\* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor | | | Drop Down | Single select |
| Yes | 14 | 13 | Clear Ceiling Height (ft.)\* | Number | | 12 Ft | | Text box with suffix | Only Numbers Eg. 11 ft |
| Yes | 15 | 15 | Frontage (ft.)\* | Number | | 22 Ft | | Text box with suffix | Only Numbers Eg. 11 ft |
| Yes | 16 | 17 | Mezzanine Available | Yes | Yes, No | | | Radio button | Single select |
| Yes | 17 | 16 | Washroom Available\* | Yes | Yes, No | | | Radio button | Single select |
| Yes | 18 | 19 | Fitouts Available | Yes | Yes, No | | | Radio button | Single select |
| Yes | 19 | 20 | Parking Available | Yes | Yes, No | | | Radio button | Single select |
| Yes | 20 | 18 | OC Status\* | Received | Received, Applied, Not Available, Under Construction | | | Drop Down | Single select |
| Yes | 21 | 21 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | | | Tick box | Multi Select |
| | | | **Commercials & Financials** | | | | | | |
| Yes | 22 | 22 | Deposit in Months | Number | | | | Text box with suffix | Only Numbers Eg. 11 months |
| Yes | 23 | 23 | CAM / Maintenance Charges | Number (Enter Total Amount) | | | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| Yes | 24 | 24 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| Yes | 25 | 25 | Lease Tenure in Years | Number | | | | Text box with suffix | Only Numbers Eg. 11 years |
| Yes | 26 | 26 | Lock-in Period | Number | | Lock-in period cannot be greater than lease tenure years | | Text box with suffix | Only Numbers Eg. 11 years |
| | | | **Location & Connectivity** | | | | | | |
| Yes | 27 | 27 | Google Location | Drop Down + Search | | | | Drop Down + Search | Map with location search and leaflet |
| Yes | 28 | 28 | Other Documents | Media | | | New | Media (PDF) | Less than 2MB |
| Yes | 29 | 29 | Add Video URL | URL (Could be from Youtube or Vimeo) | | | | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |

### Business rules extracted
- **BR-REL-021** — Agent: Explore properties → open any property → shows similar properties (Yes). _(§ relavancys, agent)_
- **BR-REL-022** — Agent: Explore projects → open any project → similar projects only in Phase 2; business: "Show similar projects nearby localities only(Phase 2)". _(§ relavancys, agent)_
- **BR-REL-023** — Agent: Dashboard → open a self posted property → shows relevant demands matched to asset class (Yes). _(§ relavancys, agent)_
- **BR-REL-024** — Agent: Dashboard → open a self posted demand → shows the relevant properties and the relevant projects (Yes). _(§ relavancys, agent)_
- **BR-REL-025** — Brand-retail: Explore properties → open any property → shows similar properties (Yes). _(§ relavancys, Brand-retail)_
- **BR-REL-026** — Brand-retail: Explore projects → similar projects Phase 2 only, nearby localities only. _(§ relavancys, Brand-retail)_
- **BR-REL-027** — Brand-retail: Dashboard → open a self posted demand → shows relevant properties and relevant projects (Yes). _(§ relavancys, Brand-retail)_
- **BR-REL-028** — Brand-F&B: Explore properties → open any property → shows similar properties (yes). _(§ relavancys, Brand-F&B)_
- **BR-REL-029** — Brand-F&B: Explore projects → similar projects Phase 2 only, nearby localities only. _(§ relavancys, Brand-F&B)_
- **BR-REL-030** — Brand-F&B: Dashboard → open a self posted demand → shows relevant properties and relevant projects (Yes). _(§ relavancys, Brand-F&B)_
- **BR-REL-031** — Office tenants: Explore properties → open any property → shows similar properties (Yes). _(§ relavancys, office tenants)_
- **BR-REL-032** — Office tenants: Explore projects → similar projects Phase 2 only, nearby localities only. _(§ relavancys, office tenants)_
- **BR-REL-033** — Office tenants: Dashboard → open a self posted demand → shows relevant properties and relevant projects (Yes). _(§ relavancys, office tenants)_
- **BR-REL-034** — Managed space: Explore properties → open any property → shows similar properties (Yes). _(§ relavancys, managed space)_
- **BR-REL-035** — Managed space: Explore projects → open any project → "Show similar projects nearby localities only(Phase 2)" (show/match cell blank). _(§ relavancys, managed space)_
- **BR-REL-036** — Managed space: Dashboard → open a self posted demand → shows relevant properties and relevant projects (Yes). _(§ relavancys, managed space)_
- **BR-REL-037** — Keydemand team: Explore properties → open any property → shows similar properties; "If the property is not of their own then no relevant demands to be shown. Only similar properties to be shown." _(§ relavancys, Keydemand team; comment C31)_
- **BR-REL-038** — Keydemand team: Explore demands → open any demand → shows the relevant properties and relevant projects (Yes). _(§ relavancys, Keydemand team)_
- **BR-REL-039** — Keydemand team: Explore projects → similar projects Phase 2 only, nearby localities only. _(§ relavancys, Keydemand team)_
- **BR-REL-040** — Keydemand team: Dashboard → open a self posted property → shows relevant demands matched to asset class (Yes). _(§ relavancys, Keydemand team)_
- **BR-REL-041** — Keydemand team: Dashboard → open a self posted demand → shows relevant properties and relevant projects, which "can be agent/self/brand and tenant" (Yes). _(§ relavancys, Keydemand team)_
- **BR-REL-042** — "Similar projects" (on any project detail page, all roles) is Phase 2 scope, and limited to nearby localities only. _(§ relavancys, all explore-projects rows + comments C4/C10/C15/C21/C33)_
- **BR-REL-043** — Relevant demands are shown only on a user's self-posted property (Dashboard), and are matched to asset class; brand/tenant/managed-space roles have no self-posted-property row. _(§ relavancys)_
- **BR-REL-044** — (Sheet2, form spec, not relevancy) Uploading Retail Property Lease (For Agent): fields, order, types and validations as in the Sheet2 table, including: Lock-in period cannot be greater than lease tenure years; Image JPEG/JPG/PNG < 2MB each, Video MP4/MOV < 5MB each; Other Documents PDF < 2MB; Rate per sq. ft. auto-calculated if Rent Amount provided and Quoted Rent auto-calculated if rate provided; Asset Class, City, Location, Transaction Type not editable. _(§ Sheet2)_

### Open questions / ambiguities in this doc
- Agent's explore-projects business comment says Phase 2, while the agent row's comment thread (C4) is RESOLVED with an empty reply — unclear if resolution means agreed.
- Managed space explore-projects "show/match" cell is blank (only business comment present).
- Brand-retail / Brand-F&B / office tenants / managed space have no "dashboard → open a self posted property" row (they post demands only?) — confirm.
- "Similar properties" criteria (what makes properties "similar") are not defined anywhere in this group's authoritative docs; only demand↔property relevancy is defined in Relevancy Logics.xlsx.
- Keydemand team "explore demands" row: does it apply to any demand (not only self-posted)? The sheet says "open any demand".
- Sheet2 is a stray retail-lease form spec (dated 17-06-2026, "Himanshu"); the Amenities list contains "Lift" twice.

---
## Images for Demand -Relevancy and Enterprise End Use as discussed in Client call today(8th October)  [AUTHORITATIVE]
**Source:** Google Doc · ID `1To607MwaovFvLD7jj2spXYhhRPv_AsdaidcHvm8tof4` · owner pradeepa.pv@futuristglobal.com · created 2026-10-08, modified 2026-10-14 · sections read: whole doc (no comments) · read coverage: 100% (linked images/folders themselves were not opened — outside scope)

### Content
Use the following images to show for Demand Card Relevancy
1. For F&B — <https://drive.google.com/open?id=1rJ-dOREezqFw49lj-yO5FR6RIjrspJB7&usp=drive_copy>
2. For Retail — <https://drive.google.com/open?id=1PBJQnYZ-0qUBDv_dkxc111KcCgiZqREk&usp=drive_copy>
3. For Office — <https://drive.google.com/open?id=1P-bsZ3uAfpBwPU8RJ1_1RSkrjAWiZofv&usp=drive_copy>
4. For Managed Office — <https://drive.google.com/open?id=1HRDHt6Rel4PPYCA9qZ7B5O3SfyAA1dDw&usp=drive_copy>
5. End Use Images Enterprise - Retail — <https://drive.google.com/drive/folders/14qctvAvn9VPpar38Eq670ixw1mvuQNzX>
6. End Use Images Enterprise - F&B — <https://drive.google.com/drive/folders/1RK5NHp_sk5Bjma9v7knS5UC4TGIzfLXe>

[Image: linked assets not viewed — demand-card images per asset class and Enterprise end-use image folders]

### Business rules extracted
- **BR-REL-045** — Demand cards in relevancy lists show an asset-class image: F&B, Retail, Office and Managed Office each use their designated image (links above). _(§ items 1–4)_
- **BR-REL-046** — Enterprise end-use images come from the designated folders: Retail (folder 14qctvAvn9VPpar38Eq670ixw1mvuQNzX) and F&B (folder 1RK5NHp_sk5Bjma9v7knS5UC4TGIzfLXe). _(§ items 5–6)_

### Open questions / ambiguities in this doc
- No Enterprise end-use images listed for Office or Managed Office.
- How an end-use image is chosen from the folder (by end-use selection?) is not stated.

---
## Keydemand Relevancy — Business Guide - DO NOT TAKE. .docx  [NON-AUTHORITATIVE — title "DO NOT TAKE"; body "DO NOT USE THIS DOCUMENT"]
**Source:** Word .docx · ID `1cM4ZE069Xb12FWrItTipiSOp6oKrPKfB` · owner pradeepa.pv@futuristglobal.com · created 2026-10-05, modified 2026-10-06 · sections read: header, FYI, §1–§12 incl. all tables and inline KD comments · read coverage: 100% of text (any embedded images not viewable)

Header: "For: the business and product team, for sign-off before the Production release (October 2026). Covers: the relevancy logic in the release branch. Decision requested: approve the v2 scorer for Production (§10)." It states scores were produced by running Keydemand's actual scoring code on illustrative listings. It contains inline business ("KD") comments that push back on the engineering proposal; those comments are listed separately below because they align with the authoritative docs.

FYI block (business): "Relevancy is a functionality that matches the requirement with a precision and suggests with a percentage that is equivalent to what the requirement needs." It points to the relevancy sheet "Relevancy Logics.xlsx" (SharePoint link: https://propvantageproptech-my.sharepoint.com/:x:/g/personal/himanshu_keydemand_in/IQDE7QLIF9t0QbaVoDwjX8p7AXLB4L9aP7ZZYpWUnQ7QijQ?e=k4FaTX).

### Rules in this doc (FLAGGED — NON-AUTHORITATIVE, do not implement)
- **BR-REL-101** [NON-AUTH] — For every live property, find fitting demands; for every live demand, find fitting properties and projects; each pair gets a % Match. _(§1)_
- **BR-REL-102** [NON-AUTH] — Two steps: (1) eligibility — both live, same transaction (lease/buy), compatible asset class, same city/location/region, viewer allowed to see demand; (2) score out of 100. _(§1, §3)_
- **BR-REL-103** [NON-AUTH] — v2 score weights: Location 30 · Size 25 · Price 25 · Requirements 15 · Freshness 5. _(§1, §4, §11)_
- **BR-REL-104** [NON-AUTH] — Show threshold 40% (text also shows "50% 40" — struck/edited). Pairs ≥ 40% shown, best first. _(§1, §4 rule 5, §9, §11)_
- **BR-REL-105** [NON-AUTH] — v1 scorer (locality, size, price, demand age) kept as fallback switchable in minutes via one setting applied to three backend services. _(§1, §10)_
- **BR-REL-106** [NON-AUTH] — Regions treated as one market: Delhi NCR (Delhi, Faridabad, Gurgaon, Noida, Ghaziabad); Mumbai MMR (Mumbai, Thane, Kalyan-Dombivali, Vasai-Virar, Mira-Bhayandar, Bhiwandi, Panvel, Ulhasnagar); Goa (Panaji, Margao, Mapusa, Marmagao); Pune (Pune, Pimpri-Chinchwad). Every other city is its own market. _(§1, §3 Regions)_
- **BR-REL-107** [NON-AUTH] — Managed space: seat count and price per seat compared. _(§1)_
- **BR-REL-108** [NON-AUTH] — Cheaper is never worse: price below budget gets full price marks. _(§1)_
- **BR-REL-109** [NON-AUTH] — Cards show 0–100% % Match. _(§1)_
- **BR-REL-110** [NON-AUTH] — Daily digest 18:00 IST never announces a demand to someone not allowed to see it, nor hidden/expired listings; announces each newly published listing once, to owners of matching listings, within its first 48 hours; KD member who posted both listings never notified; developers and managed-space operators excluded from digest (managed by Relationship Manager). Messages: "New properties match your demand" / "New demands match your property". _(§1, §2, §8)_
- **BR-REL-111** [NON-AUTH] — A listing's relevancy badge equals the number of matches the same viewer sees in its list; dashboard counts each matching listing once even if it fits several of the user's listings; red dot on dashboard. _(§1, §2)_
- **BR-REL-112** [NON-AUTH] — City must be a city Keydemand serves; "Goa", "NCR", "MMR", "PMR" rejected as regions; Bangalore/Gurugram/Mysuru saved as Bengaluru/Gurgaon/Mysore; misspelt/foreign city rejected with clear message; region towns saved under region's main city (e.g. Gurgaon saved as Delhi). _(§1, §3 City rule)_
- **BR-REL-113** [NON-AUTH] — Where relevancy appears: Property page → Relevant demands (owner + KD team); Demand page → Relevant properties & projects (owner + KD team); Dashboard counts and red dot (every user with listings); KD/BRM dashboard (matches per demand added up per client); Control Panel (admin, all audiences); Daily digest; My Listings → Sort by recent matches. A listing's relevancy list is private to its owner and the KD team. _(§2)_
- **BR-REL-114** [NON-AUTH] — Both listings live: approved, active, not deleted; demand not expired (demands run 60 days); property not hidden from marketplace. _(§3)_
- **BR-REL-115** [NON-AUTH] — Compatible classes (v2): F&B demand ↔ retail unit; office ↔ managed both ways; retail demand never offered F&B unit; compatible-class score = 85% of same-class. Seats ↔ area at 75 sq.ft per seat; price per seat not compared with rent per sq.ft. _(§3, §4 rule 3, §11)_
- **BR-REL-116** [NON-AUTH] — User never sees own listings as matches (KD team exception); colleagues at same company can match. _(§3, §8)_
- **BR-REL-117** [NON-AUTH] — Demand visibility: Web demands visible to agents and KD team; Control Panel can limit a demand to KD team; High-Value Leads auto-hidden from agents (lists, counts, digest); appears to agents once opened. _(§3, §8, §11)_
- **BR-REL-118** [NON-AUTH] — Candidate limit 500 per listing: same locality first, then city, then region. _(§3, §11)_
- **BR-REL-119** [NON-AUTH] — Location points: same locality 30; locality named within the other (e.g. "Koramangala" / "Koramangala 5th Block") 22; map pins within 1 km 30, 3 km 22, 5 km 15; other interested location 20; same city 8; same region different city 4; best one counts. _(§4)_
- **BR-REL-120** [NON-AUTH] — Size: area in sq.ft or seats; within 10% full marks, reducing steadily to zero at a further 25% away. _(§4, §11)_
- **BR-REL-121** [NON-AUTH] — Price: rent per sq.ft (lease), total price (buy), price per seat (managed); at/below budget full; above budget reduces to zero at 25% over, 35% if negotiable. _(§4, §11)_
- **BR-REL-122** [NON-AUTH] — Requirements (15): share of the demand's stated requirements the property meets; unstated requirements left out. _(§4)_
- **BR-REL-123** [NON-AUTH] — Freshness (5): full for new listings, reducing to zero over 30 days; tie-breaker only. _(§4, §8, §11)_
- **BR-REL-124** [NON-AUTH] — Fields a form does not ask for are excluded and score re-based; field asked but left blank scores zero. _(§4 rule 1)_
- **BR-REL-125** [NON-AUTH] — Location alone never enough: if size and price both comparable and neither fits, pair hidden; if neither comparable, only same-locality or nearby pairs shown. _(§4 rule 2, §8)_
- **BR-REL-126** [NON-AUTH] — Deal-breakers cap score at 15% (never shown/counted/announced); only stated property facts can be deal-breakers. Retail/F&B: single store type mismatch (high street vs mall); ground-floor wanted but unit upper floor. F&B also: non-veg served vs unit forbids non-veg. Office: none. _(§4 rule 4, §6, §11)_
- **BR-REL-127** [NON-AUTH] — Map distance: straight-line great-circle between two pins; bands 1/3/5 km; ignore missing pin, pin outside India, city-centre-only pin; needs both pins. _(§4, §8)_
- **BR-REL-128** [NON-AUTH] — Ground floor: Ground and Upper ground = ground; Lower ground = half credit. _(§8, §11)_
- **BR-REL-129** [NON-AUTH] — Requirements per class — Retail: store type, ground floor, frontage, ceiling height, washroom, parking, mezzanine, fit-outs, availability date, OC, lease tenure, lock-in. F&B: retail's plus cooking type (gas/electric), non-veg, gas line (kitchen/non-veg not counted for retail units). Office: floor band, fit-out, cabins, meeting rooms, industries, washroom, car and bike parking, ceiling height, building age, OC, availability date, lease tenure, lock-in. Managed: car/bike parking, availability date, lock-in, workspace types. _(§6)_
- **BR-REL-130** [NON-AUTH] — Form notes: Web retail-lease demand form has no rent budget (price excluded); retail-buy asks budget; office-tenant form asks rent budget, agent/brand office forms do not; Web managed occupier form asks seats not per-seat budget; Control Panel demands include per-seat budget. _(§6)_
- **BR-REL-131** [NON-AUTH] — Managed: more seats than needed is a full fit; fewer seats shown with lower size marks, ranked lower. _(§6.4, §8)_
- **BR-REL-132** [NON-AUTH] — Projects: listed best-fit order without % Match or cut-off; must have project type suiting asset class (retail & F&B → retail or mixed-use; office & managed → office or mixed-use), same transaction, city in demand's region, active, visible; order by locality, quoted rate vs budget, seats, freshness; ties → exclusive, sponsored, featured first. Example (Whitefield office tenant, ₹90/sq.ft budget): Whitefield ₹85 = 1st; Hebbal ₹85 = 2nd; Whitefield ₹120 = 3rd. _(§7)_
- **BR-REL-133** [NON-AUTH] — "Sector 18" Noida vs Gurgaon treated as same region not same locality (56% when size fits); Powai interested location example 86%. _(§8)_
- **BR-REL-134** [NON-AUTH] — Threshold calibration from UAT (571 live demands, 5,346 pairs): ≥35% → 2,457; ≥40% (chosen) → 1,857; ≥45% → 1,252; ≥50% → 861; v1 (30 points) → 3,356. _(§9)_

Worked examples recorded in this doc (v2 score with parts location/size/price/requirements/freshness; v1): R1 99% (30/25/–/15/4) v1 66%; R2 Thane 65% (4/25/–/15/4) v1 34%; R3 mall 1st floor 15% deal-breaker v1 73%; R4 2,600 sq.ft 39% v1 36%; R5 ₹2.6 Cr vs ₹3 Cr 99% v1 100%; R6 ₹3.45 Cr 82% (price 10/25) v1 84%; R7 no budget 70% (price 0) v1 73%; F1 99% (30/25/–/15/4) v1 64%; F2 retail unit 67% v1 not found; F3 veg-only 15% v1 73%; F4 Koramangala 5th Block 88% (location 22) v1 42%; O1 99% (30/25/25/15/4) v1 95%; O2 Gachibowli 3.1 km 60% (15/25/10/6/4) v1 51%; O3 managed 70 seats 46% v1 not found; O4 agent demand 99% (30/25/–/–/4) v1 67%; M1 99% v1 100%; M2 32 seats 76% (size 5/25) v1 71%; M3 99% v1 73%; M4 office 3,500 sq.ft 54% v1 not found; M5 Pimpri-Chinchwad 69% (location 4) v1 73%; E4 city+locality only 21% v1 9%.

### Business (KD) comments embedded in this doc — these reject parts of the proposal
- §1: "Price is never a relevancy component. Kindly check the above document for relevancy logics." / "(Pricing was never in the scoring)" / "Well match is something that is fit as per the relevance logics, there the % would be as per the requirement."
- §1 Regions: "No that's now how the demand and supply can work, unless it is a requirement by occupier. We can always show the nearby projects across Thane, that would cover Thane E, Thane W (Majiwada, Kolshet Road, and Ghodbunder Road) or an extent to Kalva, Dombivli where projects are there and it's a suggestion not match."
- §1 Managed space: "In most of the cases you wont receive the price from demand side, it would only be the count that they have. We don't want to unnecessary dip the % of relevancy"
- §1 Cheaper is never worse: "We are not mapping the pricing to relevancy. As we ourself don't get budget from the brands most of the times. Incase of Managed Offices, we are not matching them on the basis of pricing but seats required."
- §1 Accurate % Match: "50% or above"
- §1 Safe daily digest: "OK"
- §1 Real cities only: "So we will be taking Panjim, Ponda, Vasco etc are cities and we will take cities from there when posted by demand or properties or projects"
- §3 Same city or region: "The relevancy should be on the basis of same area not the city. Cause in city there could be 100s of projects but in the area it could be specific of the project. Eg if a deman is for Altamount Road, Cumballa Hill then the projects woud be nearby to altamount and its vicinities not the whole mumbai." / "But user also searched by specific area and that is something we can spread our horizons by providing them with nearby projects and properties."
- §3 Candidate limit: "Same area and nearby area is fine, but city would come with a larger horizon."
- §4 Price: "We dont get buget from demands. So this would eventually give you a zero points." / "The price is always discussed over the call and its on negotiable terms"
- §5 table has an empty "Comments KD" column.

### Differences vs authoritative docs
- **Scoring model:** Guide uses Location 30 / Size 25 / Price 25 / Requirements 15 / Freshness 5. Relevancy Logics.xlsx uses per-asset-class field weights (Retail 80% mandatory + 4×5%; Office 80/5/15; F&B 75% + 5×5%; Managed 100%) and has **no price, no freshness, no map-distance** component.
- **Price:** Guide scores price (25 pts). Authoritative xlsx has no price field; KD comments say "Price is never a relevancy component".
- **Threshold:** Guide = 40%. KD comment = "50% or above". xlsx states no threshold.
- **Location:** Guide treats whole regions (Thane ↔ Mumbai) as same market and city as a match tier (8 pts). xlsx: Location\* + other interested location is mandatory; KD comment: relevancy is by same area, not city; region towns only as "suggestion not match"; project tab: Location "of an area and exact (micro locality, area and city)".
- **Size tolerance:** Guide = full within 10%, zero at a further 25%. xlsx (projects) = 10% below / 20% above, or within project Unit Size Min/Max. No property size tolerance in xlsx.
- **Managed office:** Guide compares seats + price per seat. xlsx: Asset Class, Transaction, City, Location, Possession, Number of seats (100%); KD: not on pricing, seats only.
- **Retail mandatory fields:** xlsx makes Ceiling Height and Floor mandatory and Store type optional (5%); Guide treats store type and ground floor as deal-breakers and ceiling height/floor as "requirements".
- **Office:** xlsx Fitouts 15%, Possession 5%; Guide lists many office requirements (cabins, meeting rooms, industries, building age, etc.) not in xlsx.
- **F&B:** xlsx Cooking Type ↔ Gas connection, Non veg served ↔ Non-veg allowed are optional 5% each; Guide makes non-veg a deal-breaker (15% cap).
- **Compatible classes / deal-breakers / freshness / candidate limit / digest / regions / city normalisation / v1–v2 switch:** only in the Guide; not in any authoritative doc.
- **Projects:** Guide: no % Match, best-fit order, project type includes "mixed-use", tie-break by exclusive/sponsored/featured. xlsx: mandatory Asset Class (1/0, multiple asset classes per project), Transaction (1/0), City, Location, Carpet Area within range — weight columns empty. Gsheet: "similar projects" are Phase 2, nearby localities only.
- **Goa cities:** Guide lists Panaji, Margao, Mapusa, Marmagao; KD comment says Panjim, Ponda, Vasco etc.

---
## Group-level notes
### Version history
- No versioned duplicates in this group. Relevancy Logics.xlsx (modified 2026-10-14) is the latest relevancy-logic spec and is the sheet the business points to in the Guide's FYI block. The gsheet (2026-10-10) covers *where* relevancy/similar matches show per role; the image gdoc (2026-10-14) covers demand-card imagery. All three are AUTHORITATIVE and complementary.
- The Business Guide (2026-10-06) predates them and is NON-AUTHORITATIVE by its "DO NOT TAKE" title; its inline KD comments reject the price-based v2 model and redirect to Relevancy Logics.xlsx.

### Conflicts across docs in this group
- **Price in score:** Guide scores price 25 pts; Relevancy Logics.xlsx has no price; KD comments: price never a component. → Authoritative: no price (xlsx).
- **Weights:** Guide 30/25/25/15/5; xlsx per-asset-class field weights (80/5×4; 80/5/15; 75/5×5; 100). → Authoritative: xlsx.
- **Display threshold:** Guide 40%; KD comment in Guide "50% or above"; xlsx silent. → Unresolved; 50% is the business's stated view but not in an authoritative doc.
- **Location scope:** Guide region-wide/city matching; KD + xlsx project tab: area/micro-locality based, nearby areas as suggestions. → Authoritative: xlsx (Location\* + other interested location, mandatory).
- **Size tolerance:** Guide 10% / +25%; xlsx project rule −10% / +20% or within min–max. → Authoritative: xlsx for projects; properties undefined.
- **Similar projects:** Guide lists projects for demands (no similar-projects concept); gsheet: similar projects on project page = Phase 2, nearby localities only; relevant projects for a self-posted demand = Phase 1 (Yes). → Authoritative: gsheet.
- **Relevant demands visibility:** Guide: property owner + KD team. Gsheet: relevant demands shown on self-posted property only; KD team viewing a property not their own sees only similar properties, no relevant demands. → Authoritative: gsheet.
