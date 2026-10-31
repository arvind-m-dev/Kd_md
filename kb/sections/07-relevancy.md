# 07 — Relevancy / Matching Logic

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Relevancy Logics.xlsx | Excel (.xlsx), 5 tabs | `1u8vTa1tN7UAWQQgi-PXnAG2lels_N33M` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 2 | Properties and projects relavancy/similar matches | Google Sheet, 2 tabs | `1QNT9o_tREQro2OFa9uhx58ZDlJpGhKHpRWExI_FYIIU` | arvind.m@futuristglobal.com | 2026-10-10 | AUTHORITATIVE |
| 3 | Images for Demand -Relevancy and Enterprise End Use as discussed in Client call today(8th October) | Google Doc | `1To607MwaovFvLD7jj2spXYhhRPv_AsdaidcHvm8tof4` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 4 | Keydemand Relevancy — Business Guide - DO NOT TAKE. .docx | Word (.docx) | `1cM4ZE069Xb12FWrItTipiSOp6oKrPKfB` | pradeepa.pv@futuristglobal.com | 2026-10-06 | NON-AUTHORITATIVE (title says "DO NOT TAKE"; body says "DO NOT USE THIS DOCUMENT") |
| 5 | KeyDemand V2 Relevance Logic – Business Approval | Google Sheet, 4 tabs | `1pO37bzXWSkpT_-poaFu1XI73e1319ZWWzejLAt02Ur8` | sithara.j@futuristglobal.com | 2026-10-29 | AUTHORITATIVE (field-level V2 match scoring for Office, Retail, F&B, Managed Space; newer than Relevancy Logics.xlsx; added 2026-11-01) |

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
## KeyDemand V2 Relevance Logic – Business Approval  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1pO37bzXWSkpT_-poaFu1XI73e1319ZWWzejLAt02Ur8` · owner sithara.j@futuristglobal.com · created 2026-10-05, modified 2026-10-29 · tabs read: Office_V2_Relevance_Logic, Retail_V2_Relevance_Logic, F&B_V2_Relevance_Logic, Managed_Space_V2_Relevance_Logic (4 of 4) · comments: none · read coverage: 100% of cell text (xlsx export) · added 2026-11-01

**Status note:** This is the field-level V2 relevance spec (demand ↔ property/supply) for Office, Retail, F&B and Managed Space. For each field it records the Approved V1 logic, the latest V2 business decision, the Sep 22, 2026 technical/backend confirmations (Sathish) and the Oct 27, 2026 business confirmation (Himanshu). It keeps the same field lists and block weights as *Relevancy Logics.xlsx* (2026-10-14) and adds the per-field scoring, so it is treated as AUTHORITATIVE and newer. Where the two disagree, see *Conflicts across docs in this group*. Project relevancy is out of scope here ("Demand–Project Relevance scope"); *Relevancy Logics.xlsx* still governs projects.

Notes on transcription: one `#####` block per sheet row. The table gives the Demand field, M/O, Weight, Effective Weight and Supply Field cells. The Comments, Match Score Interpretation, Examples and Latest Decision columns follow word for word. "(merged above)" marks a Weight cell merged with the first row's. Two unlabelled trailing columns on the Other Interested Location rows hold wrapper pseudo-code and are shown as text blocks.

### Content

#### Tab 1 — Office_V2_Relevance_Logic
**Title (R1):** OFFICE DEMAND & SUPPLY RELEVANCY

##### Asset Class
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Asset Class | M | Latest live sheet: 80% total for mandatory fields | Latest live sheet: 80% / 5 = 16% | Asset Class |

**Comments:**

Approved V1: Asset Class will automatically match from the backend and should correspond to the Demand Asset Class; match score is 1 or 0.  

Latest V2 Confirmation: Office continues to use strict exact Asset Class matching. Office cross-matching with Retail, F&B, or Managed Space / Managed Office is not intended. Retail ↔ F&B cross-Asset-Class matching is a confirmed V2 exception and does not apply to Office.  

Technical / Backend Confirmation – Sep 22, 2026: The Office Asset Class continues to use the standardized V2 backend value office. The confirmed Retail ↔ F&B cross-match is a separate V2 exception and does not apply to Office. No additional backend dependency/change was identified for the Office Asset Class logic.  

**Match Score Interpretation:**

Approved V1:  

Office Demand + Office Supply → Match Score = 1  
Office Demand + Non-Office Supply → Match Score = 0  

Latest V2 Confirmation:  

Office retains strict Asset Class matching:  

- Office Demand + Office Supply → 1
- Office Demand + Retail Supply → 0
- Office Demand + F&B Supply → 0
- Office Demand + Managed Space Supply → 0

**Examples:**

Approved V1 – Strict Exact Match  

Example 1:  
Demand: Office  
Supply: Office  
→ Match Score = 1  

Example 2:  
Demand: Office  
Supply: Retail  
→ Match Score = 0  

Example 3:  
Demand: Office  
Supply: F&B  
→ Match Score = 0  

Example 4:  
Demand: Office  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

Latest V2 Decision / Discussion  

Example 5:  
Demand: Office  
Supply: Office  
→ Match Score = 1  

Example 6:  
Demand: Office  
Supply: Retail  
→ Match Score = 0  

Example 7:  
Demand: Office  
Supply: F&B  
→ Match Score = 0  

Example 8:  
Demand: Office  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

**Latest Decision / Pending Clarification:**

Latest Decision: Office Asset Class remains an exact-match criterion. Cross-matching with Retail, F&B, or Managed Space / Managed Office is not intended. The confirmed Retail ↔ F&B cross-match is a separate V2 exception and does not apply to Office.  

Technical / Backend Confirmation – Sep 22, 2026: The standardized V2 backend Asset Class value for Office is office. No additional backend dependency/change was identified for the Office Asset Class logic.  

Pending Clarification: None for Office Asset Class.  

Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight across 5 Mandatory fields, giving 16% effective weight per Mandatory field.  

##### Transaction Type
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Transaction Type | M | (merged above) | Latest live sheet: 80% / 5 = 16% | Transaction Type |

**Comments:**

Approved V1 : Transaction Type should correspond between Demand and Supply and is evaluated using a 1 or 0 match score.  

Latest V2 Decision: Demand Buy + Supply Sale represents the same purchase transaction and should be treated as a valid/full match. Demand Lease + Supply Lease is also a valid/full match. Other incompatible Demand–Supply Transaction Type combinations should not match.  

Technical / Backend Confirmation – Sep 22, 2026: The current V2 backend continues to use Buy for purchase transactions, including on the Supply side. Sale is the business/UI terminology for the corresponding purchase transaction. No backend field change or Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

**Match Score Interpretation:**

Approved V1:  
Exact Transaction Type match = 1; mismatch = 0.  

Latest V2 Business Rule:  
1 → Purchase transaction on Demand corresponds to purchase transaction on Supply  
1 → Demand Lease corresponds to Supply Lease  
0 → Purchase transaction on Demand with Supply Lease  
0 → Demand Lease with purchase transaction on Supply  

Current intended PR representation:  
Demand Buy ↔ Supply Sale = 1  

Technical / Backend Confirmation – Sep 22, 2026:  
The V2 backend uses Buy for purchase transactions on both Demand and Supply. Therefore, the relevance implementation will use the existing backend Transaction Type representation directly. No Buy ↔ Sale wrapper conversion is required solely to reconcile the business/UI terminology.  

**Examples:**

Approved V1 – Strict Exact Match  

Example 1:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 2:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Latest V2 – Business Transaction Equivalence  

Example 3:  
Demand: Buy  
Supply: Sale  
→ Match Score = 1  

Example 4:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 5:  
Demand: Buy  
Supply: Lease  
→ Match Score = 0  

Example 6:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Technical Note – Sep 22, 2026: The examples above represent the confirmed business/UI Transaction Type equivalence. In the current V2 backend, purchase transactions continue to use Buy, including on the Supply side. The relevance implementation will use the existing backend representation directly; no Buy ↔ Sale wrapper conversion is required solely for terminology.  

**Latest Decision / Pending Clarification:**

Latest Decision: Demand Buy + Supply Sale = 1; Demand Lease + Supply Lease = 1; incompatible combinations = 0.  

Technical / Backend Confirmation – Sep 22, 2026: The current V2 backend continues to use Buy for purchase transactions, including on the Supply side. Sale is business/UI terminology for the corresponding purchase transaction. The relevance implementation will use the existing backend representation directly; no Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

Pending Clarification: None for Office Transaction Type.  

Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight across 5 Mandatory fields, giving 16% effective weight per Mandatory field.  

##### City
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| City | M | (merged above) | Latest live sheet: 80% / 5 = 16%. | City |

**Comments:**

Approved V1: Demand City should match the Supply City and is evaluated using a 1 or 0 match score.  
Latest V2 Decision: City continues to use exact matching based on the actual Demand and Supply City. PAN_INDIA is subscription-related only and should not be treated as a City value for relevance matching. Relevance matching should use the actual City.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as a City value for relevance matching. The PAN_INDIA / India values observed in previously reviewed V2 records were identified as early/test data and are not the intended current representation for City relevance.  

**Match Score Interpretation:**

Approved V1 / Latest V2:  
1 → Demand City exactly matches Supply City  
0 → Demand City does not match Supply City  

PAN_INDIA → Not applicable as a relevance City value  

**Examples:**

Approved V1 / Latest V2 – Exact City Match  

Example 1:  
Demand: Bangalore  
Supply: Bangalore  
→ Match Score = 1  

Example 2:  
Demand: Bangalore  
Supply: Hyderabad  
→ Match Score = 0  

Example 3:  
Demand: Mumbai  
Supply: Navi Mumbai  
→ Match Score = 0  

V2 PAN_INDIA Handling  

Example 4:  
Demand City: PAN_INDIA  
→ Do not use as a City value for relevance matching; actual Demand City should be used..  

**Latest Decision / Pending Clarification:**

Latest Decision: City continues to use exact matching based on the actual Demand and Supply City: same City = 1, different City = 0. PAN_INDIA is subscription-related only and should not be used as a City value for relevance matching.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. The PAN_INDIA / India values observed in previously reviewed V2 records were identified as early/test data and are not the intended current representation for City relevance.  

Pending Clarification: None for Office City.  

Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight across 5 Mandatory fields, giving 16% effective weight per Mandatory field.  

##### Location + Other Interested Location
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Location + Other Interested Location | M | (merged above) | Latest live sheet: 80% / 5 = 16%. | Location |

**Comments:**

Approved V1: Location matching follows a hierarchical/broader-locality approach. An exact Location match receives a full Match Score of 1. Where the Demand specifies a more specific location (e.g., a road/micro-location) and the Supply matches the approved broader locality containing that location, it receives a partial Match Score of 0.5. Where the Supply Location falls within the Demand's broader requested locality, it receives a full Match Score of 1. Unrelated locations receive a Match Score of 0.  

Example: Demand = DP Road, Kothrud and Supply = Kothrud → 0.5; Demand = Kothrud and Supply = DP Road, Kothrud → 1.  

Latest V2 Decision: Location matching will use Micro-location, Area, City, and distance/radius-based logic. Same Micro-location and different Micro-location within the same Area both receive a full Match Score of 1. For different Areas within the same City, the Match Score will decrease based on distance up to 5 km. Different City receives 0 and should not be considered/shown as a Location match.  

The same Location Match Score logic applies to both Primary Location and Other Interested Location. Other Interested Location is merged into Location and does not have a separate relevance impact.  

Latest Business Confirmation – Sep 18, 2026: Supply Location is evaluated against the Demand Primary Location and each Other Interested Location using the same Location Match Score logic. The highest Match Score obtained across Primary Location and all Other Interested Locations is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Clarification – Sep 22, 2026: Sathish clarified that the current V2 backend does not maintain Area as a separate Location level as represented in the business logic. From the backend perspective, Location/Locality is the main location and Micro-location is the sub-location. Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately by the relevance layer/MongoDB wrapper for application of the confirmed max-score aggregation.  

Sathish also confirmed that distance calculation is technically possible using Google/location services, but advised against performing real-time distance/API calculation for every Demand–Supply comparison at this stage because of the additional processing/dependency.  

**Match Score Interpretation:**

Approved V1:  

1 → Supply Location exactly matches the Demand Location, or the Supply is at a more specific location within the Demand's broader requested locality.  

0.5 → Demand specifies a more specific location, while the Supply matches the approved broader locality containing that Demand Location.  

0 → Supply Location does not match or fall within an approved geographic relationship with the Demand Location.  

Latest V2:  

Business clarification: Area = Location/Locality.  

Geographic hierarchy: City → Location/Locality → Micro-location.  

Same Micro-location → 1  

Different Micro-location but same  Location/Locality → 1  

Different  Location/Locality but same City → distance-based Match Score:  

≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  

2 km to ≤ 3 km → 0.6  

3 km to ≤ 4 km → 0.5  

4 km to ≤ 5 km → 0.3  

> 5 km → 0  

Different City → 0; Supply should not match/showcase.  

The same Location Match Score Interpretation applies to both Primary Location and Other Interested Location.  

**Examples:**

Approved V1 Examples:  

Example 1 – Exact match  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
Match Score = 1  

Example 2 – Demand more specific, Supply broader  
Demand: DP Road, Kothrud, Pune  
Supply: Kothrud, Pune  
Match Score = 0.5  

Example 3 – Demand broader, Supply more specific  
Demand: Kothrud, Pune  
Supply: DP Road, Kothrud, Pune  
Match Score = 1  

Example 4 – Unrelated Location  
Demand: DP Road, Kothrud, Pune  
Supply: Baner, Pune  
Match Score = 0  

Latest V2 Examples  

Example 1: Same Micro-location  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2: Different Micro-location, Same Area  
Demand Micro-location: DP Road, Kothrud, Pune  
Supply Micro-location: Karve Road, Kothrud, Pune  
Area: Kothrud  
→ Match Score = 1  

Example 3: Different Area, Same City  
Demand Location: Kothrud, Pune  
Supply Location: Baner, Pune  
→ Different Areas within the same City  
→ Match Score = distance-based score (0.8 / 0.7 / 0.6 / 0.5 / 0.3 depending on distance up to 5 km)  

Example 4: Different City  
Demand Location: Kothrud, Pune  
Supply Location: Andheri, Mumbai  
→ Match Score = 0  

Example 5: Different Area, Same City – More than 5 km  

Demand Location: Area A, Pune  
Supply Location: Area B, Pune  
Distance: > 5 km  

→ Match Score = 0  

Example 6: Primary + Other Interested Location  

Demand Primary Location: Kothrud, Pune  
Demand Other Interested Location: Baner, Pune  
Supply Location: Baner, Pune  

Against Primary Location (Kothrud):  
Supply is in a different Area within the same City.  
→ Match Score = distance-based score depending on distance  

Against Other Interested Location (Baner):  
Supply matches the Other Interested Location.  
→ Match Score = 1  

The same V2 Location Match Score logic applies to both Primary Location and Other Interested Location.  

Primary Location match → 0.5  
Other Interested Location 1 match → 1  
Other Interested Location 2 match → 0.7  

Final Location Match Score → 1  

The highest Match Score across Primary Location and all Other Interested Locations is used as the single final Location Match Score.  

**Latest Decision / Pending Clarification:**

Latest Business Decision: V2 Location matching uses the confirmed Micro-location, Area, City and distance/radius-based business logic:  

Same Micro-location → 1  
Different Micro-location but same Area → 1  
Different Area within same City → distance-based Match Score  
≤ 1 km → 0.8  
1 km to ≤ 2 km → 0.7  
2 km to ≤ 3 km → 0.6  
3 km to ≤ 4 km → 0.5  
4 km to ≤ 5 km → 0.3  

5 km → 0  
Different City → 0  

Supply Location is evaluated against Demand Primary Location and each Other Interested Location using the same Location logic. The highest Match Score is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority; OIL has no separate relevance weight.  

Technical / Backend Clarification – Sep 22, 2026: Sathish clarified that the backend does not maintain Area as a separate Location level. Location/Locality represents the main location and Micro-location the sub-location. Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately by the relevance layer/MongoDB wrapper for application of the confirmed max-score aggregation.  

Distance calculation is technically possible using Google/location services; however, Sathish recommended avoiding real-time distance/API calculation for every Demand–Supply comparison at this stage because of the additional processing/dependency.  

Confirmed Business Decision – Himanshu Oct 27  

Area refers to Location/Locality.  

Confirmed hierarchy:  
City → Location/Locality → Micro-location.  

Example:  
Bengaluru → Indiranagar → 100 Feet Road.  

Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight across 5 Mandatory fields, giving 16% effective weight for Location + Other Interested Location.  

##### Carpet Area (sq. ft.)
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Carpet Area (sq. ft.) | M | (merged above) | Latest live sheet: 80% / 5 = 16% | Carpet Area (sq. ft.) |

**Comments:**

Approved V1:  
1 → Supply Carpet Area lies within the demanded Carpet Area range.  
0.8 → Supply Carpet Area lies within ±10% variance of the demanded range, applied to both the lower and upper bounds.  
0 → Supply Carpet Area falls outside the ±10% variance.  

Later V2 Discussion: The tolerance was proposed to change to -10% on the lower side and +20% on the upper side of the demanded Carpet Area range, with the variance applied to both the bottom and high range values.  

Latest V2 Decision: This fixed-tolerance approach has now been replaced by the Demand-area-based variance-band logic. The applicable lower and upper variance percentages depend on the Demand Carpet Area band. Supply Carpet Area within the applicable variance limits receives Match Score = 1; outside the limits receives Match Score = 0. The same approach applies to Office, Retail, and F&B.  

Representation / Revalidation Status: The latest PR defines Demand Carpet Area as a single numeric value. The freshly restored V2 Dev DB was revalidated across Office, Retail, and F&B and currently provides both carpetArea and carpetAreaRange on the Demand side. Whenever populated, carpetArea = carpetAreaRange.min = carpetAreaRange.max. Supply consistently uses single numeric carpetArea.  

The earlier data-level min–max ambiguity is therefore not present in the refreshed Dev DB.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that, since the currently available Demand-side carpetArea, carpetAreaRange.min, and carpetAreaRange.max values are equivalent in the reviewed V2 data, carpetArea can be used as the primary Demand Carpet Area input for V2 relevance.  

Fallback handling should be retained if the primary carpetArea value is unavailable. An available Carpet Area representation such as carpetAreaRange.min may be considered as a fallback; however, the exact fallback field/order was not explicitly finalized and will be confirmed based on the final migrated V2 data.  

**Match Score Interpretation:**

Approved V1:  
1 → Supply Carpet Area lies within the demanded Carpet Area range.  
0.8 → Supply Carpet Area lies within ±10% variance of the demanded range, applied to both lower and upper bounds.  
0 → Supply Carpet Area falls outside the ±10% variance.  

Latest V2:  
The applicable lower and upper variance limits are determined by the Demand Carpet Area band:  

Confirmed V2 Carpet Area Variance Bands:  

≤ 500 sq. ft.: Lower 10% | Upper 50%  
501–1,000: Lower 10% | Upper 25%  
1,001–2,000: Lower 10% | Upper 20%  
2,001–4,000: Lower 10% | Upper 20%  
4,001–6,000: Lower 10% | Upper 15%  
6,001–10,000: Lower 5% | Upper 15%  
10,001–15,000: Lower 5% | Upper 10%  
15,001–25,000: Lower 10% | Upper 15%  
≥ 25,001: Lower 15% | Upper 20%  

1 → Supply Carpet Area falls within the applicable lower and upper variance limits.  
0 → Supply Carpet Area falls outside the applicable lower and upper variance limits.  

So 0.8 is no longer part of the latest V2 Carpet Area Match Score logic.  

Technical / Representation Status: Dev DB revalidation is complete. Demand currently provides both carpetArea and carpetAreaRange, with carpetArea = carpetAreaRange.min = carpetAreaRange.max in all reviewed populated records; Supply uses single numeric carpetArea.  

Technical / Backend Confirmation – Sep 22, 2026: Demand carpetArea can be used as the primary Carpet Area input for V2 relevance and Stage-1 labelled-data generation. Fallback handling will be retained if the primary value is unavailable; the exact fallback field/order will be finalized after review of the migrated V2 data.  

**Examples:**

Approved V1 Examples  

Example 1 – Within Demand requirement  

Demand: 1,000 sq. ft.  
Supply: 1,000 sq. ft.  
→ Match Score = 1  

Example 2 – Within ±10% tolerance  

Demand: 1,000 sq. ft.  
Supply: 950 sq. ft.  
→ Match Score = 0.8  

Example 3 – Within ±10% tolerance  

Demand: 1,000 sq. ft.  
Supply: 1,100 sq. ft.  
→ Match Score = 0.8  

Example 4 – Outside tolerance  

Demand: 1,000 sq. ft.  
Supply: 850 sq. ft.  
→ Match Score = 0  

Example 5 – Outside tolerance  

Demand: 1,000 sq. ft.  
Supply: 1,200 sq. ft.  
→ Match Score = 0  

Note: Range-Based Demand Handling  

Demand: 1,000–1,200 sq. ft.  

Supply: 1,100 sq. ft. → Match Score = 1  
Supply: 950 sq. ft. → Match Score = 0.8  
Supply: 1,300 sq. ft. → Match Score = 0.8  
Supply: 850 sq. ft. → Match Score = 0  

Latest V2 – Confirmed Examples  

Example 1 – Demand = 5,000 sq. ft.  

Applicable variance: Lower 10%, Upper 15%  
Acceptable Supply range: 4,500–5,750 sq. ft.  

Supply: 4,500 sq. ft. → Match Score = 1  
Supply: 5,750 sq. ft. → Match Score = 1  
Supply: 4,400 sq. ft. → Match Score = 0  
Supply: 5,800 sq. ft. → Match Score = 0  

Example 2 – Demand = 10,000 sq. ft.  

Applicable variance: Lower 5%, Upper 15%  
Acceptable Supply range: 9,500–11,500 sq. ft.  

Supply: 9,500 sq. ft. → Match Score = 1  
Supply: 11,500 sq. ft. → Match Score = 1  
Supply: 9,400 sq. ft. → Match Score = 0  
Supply: 11,600 sq. ft. → Match Score = 0  

V2 Representation / Revalidation Status:  
The refreshed V2 Dev DB contains both carpetArea and carpetAreaRange on Demand. In all reviewed populated records:  

carpetArea = carpetAreaRange.min = carpetAreaRange.max  

Supply consistently uses single numeric carpetArea.  

Technical Confirmation – Sep 22, 2026: Demand carpetArea can be used as the primary V2 relevance and Stage-1 Carpet Area input. If unavailable, fallback handling should be applied; the exact fallback field/order remains to be finalized after migrated-data review.  

**Latest Decision / Pending Clarification:**

Latest Decision: V2 Carpet Area uses the confirmed Demand-area-based variance bands across Office, Retail, and F&B. The applicable lower and upper variance percentages are determined by the Demand Carpet Area band. Supply Carpet Area within the applicable limits → Match Score = 1; outside the limits → Match Score = 0. The V1 partial Match Score of 0.8 is not used in the latest V2 logic.  

Supply Carpet Area is a single numeric value. Project Carpet Area range handling belongs to the separate Demand–Project Relevance scope.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that Demand carpetArea can be used as the primary Demand Carpet Area input for V2 relevance. In the reviewed refreshed Dev DB, populated carpetArea, carpetAreaRange.min, and carpetAreaRange.max values are equivalent, while Supply uses a single numeric carpetArea.  

Pending: If primary Demand carpetArea is unavailable, fallback handling should be retained. An available representation such as carpetAreaRange.min may be considered; however, the exact fallback field/order will be finalized after reviewing the migrated V2 data.  

Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight across 5 Mandatory fields, giving 16% effective weight for Carpet Area.  

##### Possession
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Possession | O | Latest live sheet: 20% total for optional fields | Latest Office live sheet: 5% | Possession |

**Comments:**

Approved V1 :  

Possession used an urgency-based comparison between the Demand's required possession timeline and the Supply's availability timeline. Supply available at the required time or earlier received a full match, while progressively later availability received a lower Match Score.  

Latest V2 Decision:  
The same urgency-based approach continues using five standardized Possession buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply available at the same time or earlier than required receives a full match; later availability is scored according to how many buckets later it falls.  

V2 Representation: Business terminology is standardized as Possession on both Demand and Supply. The reviewed V2 backend currently represents Possession using propertyAvailableFrom on both sides.  

Latest Business Confirmation: For Office, Possession is an Optional relevance field with 5% weight. Possession remains a compulsory input when creating Demand and Supply, so missing Possession is not expected in the intended business flow. “Optional” refers to its relevance classification, not whether the user is required to provide the input.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that Possession is the standardized business/UI terminology, while the existing V2 backend field propertyAvailableFrom can continue to be used on both Demand and Supply. No backend field rename or additional MongoDB wrapper change is required solely for this terminology standardization.  

**Match Score Interpretation:**

Approved V1:  

1 → Supply is available at the same time as or earlier than the Demand Possession requirement.  
0.8 → Supply is available one Possession bucket later than the Demand requirement.  
0.5 → Supply is available two Possession buckets later than the Demand requirement.  
0 → Supply is available more than two Possession buckets later than the Demand requirement.  

Latest V2:  

The Approved V1 urgency-based Match Score Interpretation is retained and confirmed using the five V2 Possession buckets:  

Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months  

1 → Supply available at the same time or earlier than Demand requirement  
0.8 → Supply available one bucket later  
0.5 → Supply available two buckets later  
0 → Supply available more than two buckets later  

**Examples:**

Approved V1 / Confirmed V2 Examples:  

Example 1:  
Demand: Immediate  
Supply: Immediate  
→ Match Score = 1  

Example 2:  
Demand: Within 3 months  
Supply: Immediate  
→ Match Score = 1  

Example 3:  
Demand: Immediate  
Supply: Within 3 months  
→ Match Score = 0.8  

Example 4:  
Demand: Immediate  
Supply: Within 6 months  
→ Match Score = 0.5  

Example 5:  
Demand: Immediate  
Supply: Within 9 months  
→ Match Score = 0  

Example 6 – Latest business-confirmed scenario:  
Demand: Within 9 months  
Supply: Immediate / Within 3 months / Within 6 months / Within 9 months  
→ Match Score = 1  

Demand: Within 9 months  
Supply: After 9 months  
→ Match Score = 0.8  

**Latest Decision / Pending Clarification:**

Latest Decision:  
The five Possession buckets remain:  
Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months.  

Supply available in the same bucket or earlier than the Demand requirement → 1  
One bucket later → 0.8  
Two buckets later → 0.5  
More than two buckets later → 0  

For Office, Possession is confirmed as an Optional relevance field with 5% weight. Possession remains a compulsory input when creating Demand and Supply; therefore, missing values are not expected in the intended business flow. Optional refers to the relevance classification, not the data-entry requirement.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that Possession is the business/UI terminology, while the existing V2 backend field propertyAvailableFrom can continue to be used on both Demand and Supply. No backend field rename or additional MongoDB wrapper change is required solely for the terminology standardization.  

Pending Clarification: None for Office Possession.  

Weight: Latest Office live-sheet configuration confirmed — 5%.  

##### Fitouts
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Fitouts | O | (merged above) | Latest live sheet: Fitouts = 15% | Fitouts Status |

**Comments:**

Latest V2 Decision: Office Fitouts will use only Furnished, Unfurnished, and Developer/Landlord to do Fitout. The detailed V1 furnishing categories will not be carried forward.  

Missing / Not Provided: If Demand Fitouts is missing/not provided, Fitouts is excluded from the relevance calculation. Office Supply Fitouts is expected to be a compulsory input; therefore, a missing Supply Fitouts value is not expected in the normal flow.  

Technical / Backend Clarification – Sep 22, 2026: The reviewed V2 data contains categorical fitOutStatus and Boolean fitoutsRequired / fitoutsAvailable fields. fitOutStatus is populated in the reviewed data, while the Boolean fields are largely unpopulated. Sathish reiterated that Fitouts is an Optional relevance field.  

**Match Score Interpretation:**

Approved V1:  
Matching was based on the detailed Office furnishing categories.  

Latest V2:  

1 → Demand Furnished + Supply Furnished  
0 → Demand Furnished + Supply Unfurnished  
1 → Demand Furnished + Supply Developer/Landlord to do Fitout  

0 → Demand Unfurnished + Supply Furnished  
1 → Demand Unfurnished + Supply Unfurnished  
1 → Demand Unfurnished + Supply Developer/Landlord to do Fitout  

Missing / Not Provided:  

If Demand Fitouts is missing/not provided → exclude Fitouts from the relevance calculation.  

For Office, Supply Fitouts is expected to be compulsory, so a missing Supply Fitouts value is not expected in the normal flow. No separate Match Score treatment for this abnormal case has been business-confirmed.  

**Examples:**

Approved V1 Examples: Retained in Office_V1_Approved.  

Confirmed V2  Examples:  

Example 1:  
Demand: Furnished  
Supply: Furnished  
→ Match Score = 1  

Example 2:  
Demand: Furnished  
Supply: Unfurnished  
→ Match Score = 0  

Example 3:  
Demand: Furnished  
Supply: Developer/Landlord to do Fitout  
→ Match Score = 1  

Example 4:  
Demand: Unfurnished  
Supply: Furnished  
→ Match Score = 0  

Example 5:  
Demand: Unfurnished  
Supply: Unfurnished  
→ Match Score = 1  

Example 6:  
Demand: Unfurnished  
Supply: Developer/Landlord to do Fitout  
→ Match Score = 1  

Example 7 – Demand Fitouts Not Provided  
Demand: Fitouts not provided  
→ Exclude Fitouts from the relevance calculation  

**Latest Decision / Pending Clarification:**

Latest Decision: Future V2 Office Fitouts logic will use only Furnished, Unfurnished, and Developer/Landlord to do Fitout. The detailed V1 Fitouts categories will not be carried forward.  

Confirmed Match Score:  
Demand Furnished + Supply Furnished → 1  
Demand Furnished + Supply Unfurnished → 0  
Demand Furnished + Supply Developer/Landlord to do Fitout → 1  
Demand Unfurnished + Supply Furnished → 0  
Demand Unfurnished + Supply Unfurnished → 1  
Demand Unfurnished + Supply Developer/Landlord to do Fitout → 1  

Missing / Not Provided: If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. For Office, Supply Fitouts is expected to be compulsory, so a missing Supply Fitouts value is not expected in the normal flow.  

Technical / Backend Clarification – Sep 22, 2026: The reviewed V2 data contains categorical fitOutStatus and Boolean fitoutsRequired / fitoutsAvailable fields. fitOutStatus is populated in the reviewed data, while the Boolean fields are largely unpopulated. Sathish reiterated that Fitouts is an Optional relevance field.  

Weight: Latest Office live sheet confirms Fitouts = 15% as an Optional relevance field.  

##### Other interested location
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Other interested location | N/A – Merged into Location | No separate weight – merged with Location | No separate effective weight – contributes through Location | Location |

**Comments:**

Approved V1: Other Interested Location was not part of the approved V1 Office relevance engine.  

Earlier V2 Proposal: Other Interested Location was introduced as an additional Demand-location preference and was initially considered for separate relevance treatment, including a proposed 0.9 Match Score.  

Latest V2 Decision: Other Interested Location is merged with Primary Location for relevance evaluation and will not have a separate weight or separate Match Score. The earlier 0.9 treatment is superseded. A Supply matched through an Other Interested Location will be evaluated using the same Location hierarchy/distance-based logic as a Primary Location match.  

Latest Business Confirmation – Sep 18, 2026: Supply Location is evaluated against the Demand Primary Location and each Other Interested Location using the same finalized Location Match Score logic. The highest resulting Match Score is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that Primary Location and Other Interested Locations remain separate in the V2 backend. Primary Location is stored separately from otherInterestedLocations[]. For relevance implementation, the wrapper can retrieve the Primary Location and all Other Interested Locations separately so that the same finalized Location Match Score logic can be applied to each.  

Location Dependency: Any change to the Location hierarchy/fields or distance-based component will follow the final decision under the Location field. No separate technical clarification remains for Other Interested Location.  

**Match Score Interpretation:**

Latest V2 Decision:  
Primary Location and Other Interested Locations use the same Location Match Score logic.  

The Supply Location is evaluated against:  

- Primary Location, and
- each Other Interested Location.

The highest Match Score obtained is used as the single final Location Match Score.  

Primary Location and Other Interested Locations have equal priority.  

The earlier separate 0.9 OIL Match Score is removed.  

**Examples:**

Earlier V2 Proposal – Superseded:  
Primary Location = Kothrud  
Other Interested Location = Baner  
Supply Location = Baner  
OIL Match Score → 0.9 (earlier proposal)  

Latest V2: The separate 0.9 OIL treatment is removed. Supply Location = Baner is evaluated against OIL = Baner using the same V2 Location Match Score logic as Primary Location → 1.  

Primary + OIL Consolidation:  
Primary Location Match Score → 0.5  
OIL Match Score → 1.0  
Final Location Match Score → 1.0  

Multiple OILs:  
Primary Location → 0.5  
OIL 1 → 0.7  
OIL 2 → 1.0  
Final Location Match Score → 1.0  

**Latest Decision / Pending Clarification:**

Latest Decision:  
Other Interested Location is merged with Primary Location for relevance evaluation and no longer has a separate relevance weight, separate Match Score, or separate ML feature. The earlier separate 0.9 OIL Match Score is superseded.  

Supply Location is evaluated against the Demand Primary Location and each Other Interested Location using the same finalized Location Match Score logic. The highest resulting Match Score is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Example:  
Primary Location Match Score → 0.5  
OIL 1 Match Score → 1  
OIL 2 Match Score → 0.7  
Final Location Match Score → 1  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that Primary Location and Other Interested Locations remain separate in the V2 backend. Primary Location is stored separately from otherInterestedLocations[]. The wrapper can retrieve both separately for relevance processing.  

Location Dependency: No separate technical clarification remains for Other Interested Location. The same applicable Location scoring logic will be used for Primary Location and each OIL, and any subsequent change will follow the final decision under the Location field regarding the Location hierarchy/fields and distance-based component.  

**Implementation reference 1 (unlabelled column):**

    Confirmed Current Wrapper / Relevance-Engine Implementation – Sep 22, 2026:
    
    V2 keeps Primary Location and Other Interested Locations separately:
    
    Example V2 Demand
    
    demand = {
        "locality": "Andheri",
        "otherInterestedLocations": ["Bandra", "Powai"]
    }
    
    MongoDB Wrapper
    primary_location = demand.get("locality")
    oil_locations = demand.get("otherInterestedLocations") or []
    demand_locations = []
    if primary_location:
        demand_locations.append(primary_location)
    demand_locations.extend(oil_locations)
    
    Result:
    demand_locations = ["Andheri", "Bandra", "Powai"]
    The wrapper therefore converts the separate inputs into one consistent collection for relevance processing:
    Primary Location + OILs
    ↓
    ["Andheri", "Bandra", "Powai"]
    The relevance engine evaluates the Supply Location against the Primary Location and each Other Interested Location using the same applicable Location scoring logic:
    scores = []
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    final_location_score = max(scores)
    
    Example:
    scores = [0.5, 0.7, 1.0]
    final_location_score = max(scores)
    # final_location_score = 1.0
    
    Conceptually:
    Wrapper → [Primary, OIL1, OIL2]
    Relevance Engine → score each using the same applicable Location logic → max() → one final Location Match Score
    
    Note: Primary Location and Other Interested Locations have equal priority for relevance evaluation. The final scoring applied to each follows the finalized applicable Location logic. The distance-based component remains dependent on the pending Location decision.

**Implementation reference 2 (unlabelled column):**

    Future / Alternative Backend Reference – Not Current V2 Implementation:
    
    The current V2 backend keeps Primary Location and Other Interested Locations separately. The following is retained only as a reference in case the backend representation changes to a unified Location list in the future.
    
    If V2 were to provide Primary Location and Other Interested Locations as one unified list, for example:
    demand = {
        "locations": ["Andheri", "Bandra", "Powai"]
    }
    then the wrapper would not need to separately retrieve Primary Location and otherInterestedLocations[] and combine them.
    
    MongoDB Wrapper
    demand_locations = demand.get("locations") or []
    
    Result:
    demand_locations = ["Andheri", "Bandra", "Powai"]
    The relevance engine could still use the same conceptual approach:
    scores = []
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    final_location_score = max(scores)
    
    Conceptually:
    V2 Backend → [Primary, OIL1, OIL2]
    Wrapper → [Primary, OIL1, OIL2]
    Relevance Engine → score each using the same applicable Location logic → max() → one final Location Match Score

**Relevance Scoring Framework & Eligibility Rules:**

All fields explicitly specified in the demand are considered in relevance scoring.  

For each such field, a match score is assigned according to the approved field-level business logic.  

- Exact matches receive full score.
- Partial matches receive reduced score where business logic allows.
- Non-matches receive zero score.

The final relevance score is computed as a weighted and normalized combination of the match scores across all demand-specified fields.  


#### Tab 2 — Retail_V2_Relevance_Logic
**Title (R1):** RETAIL DEMAND & SUPPLY RELEVANCY

##### Asset Class
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Asset Class | M | Latest live sheet: 80% total for mandatory fields | Latest live sheet: 80% / 7 ≈ 11.43% | Asset Class |

**Comments:**

Approved V1: Asset Class uses strict exact matching. Demand and Supply must have the same Asset Class; same Asset Class receives full match and a different Asset Class receives no match.  

Latest V2 Decision: Retail ↔ F&B cross-Asset-Class matching is permitted in both directions. Retail Demand → F&B Supply and F&B Demand → Retail Supply receive Asset Class Match Score = 1. Office and Managed Space remain outside this Retail ↔ F&B cross-match exception.  

Latest Business Confirmation – Sep 18, 2026: For Retail ↔ F&B cross-matching, relevance will be calculated using the confirmed common Mandatory relevance fields plus Store Type: Asset Class, Transaction Type, City, Location + Other Interested Location, Carpet Area, Floor, Ceiling Height, and Store Type. Asset-class-specific Optional relevance fields are excluded. Each applicable field will use its finalized V2 Match Score logic, including partial Match Scores where applicable; all fields are not required to have Match Score = 1.  

Technical / Backend Confirmation – Sep 22, 2026: Retail and F&B remain separate V2 backend Asset Classes (retail and f-and-b). No additional backend dependency/change was identified by Sathish for supporting the confirmed Retail ↔ F&B cross-match.  

**Match Score Interpretation:**

Approved V1:  
Asset Class uses strict exact matching:  

- Demand Asset Class = Supply Asset Class → 1
- Demand Asset Class ≠ Supply Asset Class → 0

Latest V2 Decision – Retail ↔ F&B Exception:  
V2 retains same-Asset-Class matching and introduces a confirmed Retail ↔ F&B cross-match exception:  

- Retail Demand + Retail Supply → 1
- Retail Demand + F&B Supply → 1
- F&B Demand + F&B Supply → 1
- F&B Demand + Retail Supply → 1

Retail ↔ F&B cross-matching does not extend to Office or Managed Space.  
Therefore:  

- Retail Demand + Office Supply → 0
- Retail Demand + Managed Space Supply → 0
- F&B Demand + Office Supply → 0
- F&B Demand + Managed Space Supply → 0

Cross-Match Relevance:  
For a Retail ↔ F&B pair, Asset Class receives Match Score 1. The pair is then evaluated using the confirmed common Mandatory relevance fields plus Store Type, with each applicable field using its finalized V2 Match Score logic. Asset-class-specific Optional relevance fields are excluded from the cross-match calculation.  

**Examples:**

Approved V1 – Strict Exact Match  

Example 1:  
Demand: Retail  
Supply: Retail  
→ Match Score = 1  

Example 2:  
Demand: Retail  
Supply: F&B  
→ Match Score = 0  

Example 3:  
Demand: Retail  
Supply: Office  
→ Match Score = 0  

Example 4:  
Demand: Retail  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

Latest V2 Decision / Discussion – Retail ↔ F&B Cross-Match  

Example 5:  
Demand: Retail  
Supply: Retail  
→ Match Score = 1  

Example 6:  
Demand: Retail  
Supply: F&B  
→ Cross-match allowed  
→ Asset Class Match Score = 1  

Example 7:  
Demand: F&B  
Supply: Retail  
→ Cross-match allowed  
→ Asset Class Match Score = 1  

Example 8:  
Demand: Retail  
Supply: Office  
→ Match Score = 0  

Example 9:  
Demand: Retail  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

**Latest Decision / Pending Clarification:**

Latest Decision: Retail ↔ F&B cross-matching is allowed in both directions, with Asset Class Match Latest Decision: Retail ↔ F&B cross-matching is allowed in both directions, with Asset Class Match Score = 1 for Retail Demand ↔ F&B Supply and F&B Demand ↔ Retail Supply.  

For Retail ↔ F&B cross-matching, relevance will be calculated using the common Mandatory relevance fields plus Store Type: Asset Class, Transaction Type, City, Location + OIL, Carpet Area, Floor, Ceiling Height, and Store Type. Asset-class-specific Optional relevance fields are excluded. Each applicable field uses its respective finalized V2 Match Score logic, including partial Match Scores where applicable.  

Latest Live-Sheet Weight Update: Mandatory-field total weight changed from 75% to 80%. With 7 Mandatory Retail fields, effective Asset Class weight changes from 75% / 7 ≈ 10.71% to 80% / 7 ≈ 11.43%.  

Technical / Backend Confirmation – Sep 22, 2026: The V2 backend continues to retain Retail and F&B as separate Asset Classes (retail and f-and-b). No additional backend dependency/change was identified by Sathish for supporting the confirmed Retail ↔ F&B cross-match.  

Business Decision – Downstream Display Cutoff: Business has not yet finalized the Retail ↔ F&B cross-match display cutoff. Sathish confirmed that a separate configurable cutoff can be maintained once the final percentage is provided. The 50% mentioned during the Sep 22 discussion is temporary and is not the final business-approved cutoff.  

##### Transaction type
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Transaction type | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | Transcation type |

**Comments:**

Approved V1: Transaction Type should correspond between Demand and Supply and is evaluated using a 1 or 0 Match Score.  

Latest V2 Decision: Demand Buy + Supply Sale represents the same purchase transaction and should be treated as a valid/full match. Demand Lease + Supply Lease is also a valid/full match. Other incompatible Demand–Supply Transaction Type combinations should not match.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the current V2 backend representation for purchase transactions will continue to use Buy, including on the Supply side. Sale may be used as the business/UI terminology, but Buy and Sale represent the same purchase transaction context. No backend field change or Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

**Match Score Interpretation:**

Approved V1:  
Exact Transaction Type match = 1; mismatch = 0.  

Latest V2 Business Rule:  
1 → Purchase transaction on Demand corresponds to purchase transaction on Supply  
1 → Demand Lease corresponds to Supply Lease  
0 → Purchase transaction on Demand with Supply Lease  
0 → Demand Lease with purchase transaction on Supply  

Current intended PR representation:  
Demand Buy ↔ Supply Sale = 1  

Backend Implementation: The V2 backend continues to use Buy for purchase transactions on both Demand and Supply. Therefore, relevance processing uses the existing backend Transaction Type representation directly. Sale represents the equivalent business/UI terminology for the Supply-side purchase transaction.  

**Examples:**

Approved V1 – Strict Exact Match  

Example 1:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 2:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Latest V2 – Business Transaction Equivalence  

Example 3:  
Demand: Buy  
Supply: Sale  
→ Match Score = 1  

Example 4:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 5:  
Demand: Buy  
Supply: Lease  
→ Match Score = 0  

Example 6:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Technical / Backend Confirmation – Sep 22, 2026: The examples above show the confirmed business equivalence of Demand Buy ↔ Supply Sale. In the current V2 backend, purchase transactions continue to use Buy, including on the Supply side; no Buy ↔ Sale wrapper conversion is required solely for terminology.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
Demand Buy + Supply Sale = 1; Demand Lease + Supply Lease = 1; incompatible combinations = 0.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the current V2 backend representation for purchase transactions will continue to use Buy, including on the Supply side. Sale may be used as the business/UI terminology for the same purchase transaction context. No backend field change or Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

ML / Implementation: Use the current V2 backend Transaction Type representation directly for relevance processing. No Buy ↔ Sale normalization is required in the MongoDB wrapper solely to reconcile the UI/business terminology.  

Latest Live-Sheet Weight Update:  
Mandatory-field total weight changed from 75% to 80%. With 7 mandatory Retail fields, the effective Transaction Type weight changes from 75% / 7 ≈ 10.71% to 80% / 7 ≈ 11.43%.  

##### City
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| City | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | City |

**Comments:**

Approved V1: City should match between Demand and Supply and is evaluated using a 1 or 0 Match Score.  

Latest V2 Decision: The exact City match logic continues. PAN_INDIA is a subscription-based option and is not treated as a City for relevance matching; relevance should use the actual Demand and Supply City.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values observed in previously reviewed V2 records were identified as early/test data and are not the intended current representation for City relevance.  

**Match Score Interpretation:**

Approved V1 / Latest V2:  
1 → Demand City exactly matches Supply City  
0 → Demand City does not match Supply City  

PAN_INDIA is not evaluated as a City and does not receive a City Match Score; the actual Demand and Supply City should be used for matching.  

**Examples:**

Approved V1 / Latest V2 – Exact City Match  

Example 1:  
Demand: Bangalore  
Supply: Bangalore  
→ Match Score = 1  

Example 2:  
Demand: Bangalore  
Supply: Hyderabad  
→ Match Score = 0  

Example 3:  
Demand: Mumbai  
Supply: Navi Mumbai  
→ Match Score = 0  

V2 PAN_INDIA Handling  
Example 4 – PAN_INDIA:  
Demand selection includes: PAN_INDIA  
Actual Demand City: Bengaluru  
Supply City: Bengaluru  
→ City matching should use Bengaluru, not PAN_INDIA  
→ Match Score = 1  

**Latest Decision / Pending Clarification:**

Latest Decision: City continues with exact matching in V2: same City = 1; different City = 0. PAN_INDIA is a subscription-based option, not a City, and should not be used for City relevance matching. The actual Demand and Supply City should be evaluated.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values previously observed in V2 were identified as early/test data and are not the intended current City representation.  

ML / Implementation: Use the actual Demand and Supply City values with the existing exact-match rule. No special PAN_INDIA Match Score logic is required.  

Latest Live-Sheet Weight Update:  
Latest live sheet: Mandatory group = 80%  
Effective City weight = 80% ÷ 7 ≈ 11.43%  

##### Location + Other Interested Location
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Location + Other Interested Location | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | Location |

**Comments:**

Approved V1: Location matching follows a hierarchical/broader-locality approach. An exact Location match receives a full Match Score of 1. Where the Demand specifies a more specific location (e.g., a road/micro-location) and the Supply matches the approved broader locality containing that location, it receives a partial Match Score of 0.5. Where the Supply Location falls within the Demand's broader requested locality, it receives a full Match Score of 1. Unrelated locations receive a Match Score of 0.  

Example: Demand = DP Road, Kothrud and Supply = Kothrud → 0.5; Demand = Kothrud and Supply = DP Road, Kothrud → 1.  

Latest V2 Decision: Location matching will use Micro-location, Area, City, and distance/radius-based logic. Same Micro-location and different Micro-location within the same Area both receive a full Match Score of 1. For different Areas within the same City, the Match Score will decrease based on distance up to 5 km. Different City receives 0 and should not be considered/shown as a Location match.  

The same Location Match Score logic applies to both Primary Location and Other Interested Location. Other Interested Location is merged into Location and does not have a separate relevance impact.  

Latest Business Confirmation – Sep 18, 2026: Primary Location and each Other Interested Location are evaluated using the same applicable Location logic. The highest Match Score across them is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Clarification – Sep 22, 2026: Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately by the wrapper for max-score aggregation. The backend uses Location/Locality as the main location and Micro-location as the sub-location; Area is not maintained as a separate Location level.  

**Match Score Interpretation:**

Approved V1:  

1 → Supply Location exactly matches the Demand Location, or the Supply is at a more specific location within the Demand's broader requested locality.  

0.5 → Demand specifies a more specific location, while the Supply matches the approved broader locality containing that Demand Location.  

0 → Supply Location does not match or fall within an approved geographic relationship with the Demand Location.  

Latest V2:  

Business clarification: Area = Location/Locality.  

Geographic hierarchy: City → Location/Locality → Micro-location.  

Same Micro-location → 1  

Different Micro-location but same  Location/Locality → 1  

Different  Location/Locality but same City → distance-based Match Score:  

≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  

2 km to ≤ 3 km → 0.6  

3 km to ≤ 4 km → 0.5  

4 km to ≤ 5 km → 0.3  

> 5 km → 0  

Different City → 0; Supply should not match/showcase.  

The same Location Match Score Interpretation applies to both Primary Location and Other Interested Location.  

**Examples:**

Approved V1 Examples:  

Example 1 – Exact match  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
Match Score = 1  

Example 2 – Demand more specific, Supply broader  
Demand: DP Road, Kothrud, Pune  
Supply: Kothrud, Pune  
Match Score = 0.5  

Example 3 – Demand broader, Supply more specific  
Demand: Kothrud, Pune  
Supply: DP Road, Kothrud, Pune  
Match Score = 1  

Example 4 – Unrelated Location  
Demand: DP Road, Kothrud, Pune  
Supply: Baner, Pune  
Match Score = 0  

Latest V2 Examples  

Example 1: Same Micro-location  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2: Different Micro-location, Same Area  
Demand Micro-location: DP Road, Kothrud, Pune  
Supply Micro-location: Karve Road, Kothrud, Pune  
Area: Kothrud  
→ Match Score = 1  

Example 3: Different Area, Same City  
Demand Location: Kothrud, Pune  
Supply Location: Baner, Pune  
→ Different Areas within the same City  
→ Match Score = distance-based score (0.8 / 0.7 / 0.6 / 0.5 / 0.3 depending on distance up to 5 km)  

Example 4: Different City  
Demand Location: Kothrud, Pune  
Supply Location: Andheri, Mumbai  
→ Match Score = 0  

Example 5 – Different Area, Same City, More Than 5 km  
Demand Location: Area A, Pune  
Supply Location: Area B, Pune  
Distance: >5 km  
→ Match Score = 0  

Example 6 – Primary Location + Other Interested Location  

Demand Primary Location: Kothrud, Pune  
Demand OIL: Baner, Pune  
Supply Location: Baner, Pune  

Against Primary Location (Kothrud):  
→ Different Area within same City  
→ Distance-based Match Score  

Against OIL (Baner):  
→ Location Match Score = 1  

The same V2 Location Match Score logic applies to Primary Location and OIL.  

Latest Business Confirmation – Sep 18, 2026: Use the highest Match Score across Primary Location and all Other Interested Locations. Therefore, in Example 6, Final Location Match Score = 1.  

**Latest Decision / Pending Clarification:**

Latest Decision: V2 Location matching will use Micro-location, Area, City and distance/radius-based logic.  

Same Micro-location → 1  
Different Micro-location but same Area → 1  
Different Area but same City → distance-based scoring:  
≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  
2 km to ≤ 3 km → 0.6  
3 km to ≤ 4 km → 0.5  
4 km to ≤ 5 km → 0.3  
5 km → 0  

Different City → 0 and should not be considered/shown as a Location match.  

The same Location hierarchy and Match Score Interpretation applies to both Primary Location and Other Interested Location. Other Interested Location is merged into Location and has no separate relevance weight.  

Latest Live-Sheet Weight Update:  
Mandatory-field total weight changed from 75% to 80%. With 7 mandatory Retail fields, the effective Location weight changes from 75% / 7 ≈ 10.71% to 80% / 7 ≈ 11.43%.  

Latest Business Decision: V2 Location logic uses the confirmed Location hierarchy/distance-band Match Scores, with the same logic applied to Primary Location and Other Interested Locations.  

Latest Business Confirmation – Sep 18, 2026: Evaluate Supply Location against Primary Location and each Other Interested Location. Use the highest resulting Match Score as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Clarification – Sep 22, 2026: Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately for relevance evaluation. The current backend uses Location/Locality as the main location and Micro-location as the sub-location; Area is not maintained as a separate Location level. Sathish advised against implementing the distance-based calculation at this stage because it would require additional real-time API processing.  

Confirmed Business Decision – Himanshu Oct 27  

Area refers to Location/Locality.  

Confirmed hierarchy:  
City → Location/Locality → Micro-location.  

Example:  
Bengaluru → Indiranagar → 100 Feet Road.  

##### Carpet Area (sq. ft.)
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Carpet Area (sq. ft.) | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | Carpet Area (sq. ft.) |

**Comments:**

Approved V1:  
1 → Supply Carpet Area lies within the demanded Carpet Area range.  
0.8 → Supply Carpet Area lies within ±10% variance of the demanded range, applied to both the lower and upper bounds.  
0 → Supply Carpet Area falls outside the ±10% variance.  

Later V2 Discussion: The tolerance was proposed to change to -10% on the lower side and +20% on the upper side of the demanded Carpet Area range, with the variance applied to both the bottom and high range values.  

Latest V2 Decision: This fixed-tolerance approach has now been replaced by the Demand-area-based variance-band logic. The applicable lower and upper variance percentages depend on the Demand Carpet Area band. Supply Carpet Area within the applicable variance limits receives Match Score = 1; outside the limits receives Match Score = 0. The same approach applies to Office, Retail, and F&B.  

Representation / Revalidation Status: The latest PR defines Demand Carpet Area as a single numeric value. The freshly restored V2 Dev DB was revalidated across Retail, Office, and F&B and currently provides both carpetArea and carpetAreaRange on the Demand side. Whenever populated, carpetArea = carpetAreaRange.min = carpetAreaRange.max. Supply consistently uses single numeric carpetArea.  

The earlier data-level min–max ambiguity is therefore not present in the refreshed Dev DB.  

Technical / Backend Confirmation – Sep 22, 2026: carpetArea is confirmed as the primary Demand Carpet Area input for V2 relevance. Fallback handling should be retained if the primary value is unavailable. The exact fallback field/order will be finalized after reviewing the migrated V2 data.  

**Match Score Interpretation:**

Approved V1:  
1 → Supply Carpet Area lies within the demanded Carpet Area range.  
0.8 → Supply Carpet Area lies within ±10% variance of the demanded range, applied to both lower and upper bounds.  
0 → Supply Carpet Area falls outside the ±10% variance.  

Latest V2:  
The applicable lower and upper variance limits are determined by the Demand Carpet Area band:  

Confirmed V2 Carpet Area Variance Bands:  

≤ 500 sq. ft.: Lower 10% | Upper 50%  
501–1,000: Lower 10% | Upper 25%  
1,001–2,000: Lower 10% | Upper 20%  
2,001–4,000: Lower 10% | Upper 20%  
4,001–6,000: Lower 10% | Upper 15%  
6,001–10,000: Lower 5% | Upper 15%  
10,001–15,000: Lower 5% | Upper 10%  
15,001–25,000: Lower 10% | Upper 15%  
≥ 25,001: Lower 15% | Upper 20%  

1 → Supply Carpet Area falls within the applicable lower and upper variance limits.  
0 → Supply Carpet Area falls outside the applicable lower and upper variance limits.  

So 0.8 is no longer part of the latest V2 Carpet Area Match Score logic.  

Technical / Representation Status: Dev DB revalidation is complete. Demand currently provides both carpetArea and carpetAreaRange, with carpetArea = min = max whenever populated; Supply uses single numeric carpetArea. The confirmed V2 variance-band logic remains unchanged.  

Technical / Backend Confirmation – Sep 22, 2026: carpetArea is the primary Demand Carpet Area input for V2 relevance. If carpetArea is unavailable, fallback handling should be retained using an available Carpet Area representation. The exact fallback field/order will be finalized after reviewing the migrated V2 data.  

**Examples:**

Approved V1 Examples  

Example 1 – Within Demand requirement  

Demand: 1,000 sq. ft.  
Supply: 1,000 sq. ft.  
→ Match Score = 1  

Example 2 – Within ±10% tolerance  

Demand: 1,000 sq. ft.  
Supply: 950 sq. ft.  
→ Match Score = 0.8  

Example 3 – Within ±10% tolerance  

Demand: 1,000 sq. ft.  
Supply: 1,100 sq. ft.  
→ Match Score = 0.8  

Example 4 – Outside tolerance  

Demand: 1,000 sq. ft.  
Supply: 850 sq. ft.  
→ Match Score = 0  

Example 5 – Outside tolerance  

Demand: 1,000 sq. ft.  
Supply: 1,200 sq. ft.  
→ Match Score = 0  

Note: Range-Based Demand Handling  

Demand: 1,000–1,200 sq. ft.  

Supply: 1,100 sq. ft. → Match Score = 1  
Supply: 950 sq. ft. → Match Score = 0.8  
Supply: 1,300 sq. ft. → Match Score = 0.8  
Supply: 850 sq. ft. → Match Score = 0  

Latest V2 – Confirmed Examples  

Example 1 – Demand = 5,000 sq. ft.  

Applicable variance: Lower 10%, Upper 15%  
Acceptable Supply range: 4,500–5,750 sq. ft.  

Supply: 4,500 sq. ft. → Match Score = 1  
Supply: 5,750 sq. ft. → Match Score = 1  
Supply: 4,400 sq. ft. → Match Score = 0  
Supply: 5,800 sq. ft. → Match Score = 0  

Example 2 – Demand = 10,000 sq. ft.  

Applicable variance: Lower 5%, Upper 15%  
Acceptable Supply range: 9,500–11,500 sq. ft.  

Supply: 9,500 sq. ft. → Match Score = 1  
Supply: 11,500 sq. ft. → Match Score = 1  
Supply: 9,400 sq. ft. → Match Score = 0  
Supply: 11,600 sq. ft. → Match Score = 0  

V2 Representation / Technical Confirmation – Sep 22, 2026:  

The refreshed V2 Dev DB contains both carpetArea and carpetAreaRange on populated Demand records, with carpetArea = carpetAreaRange.min = carpetAreaRange.max in the reviewed data.  

No true Demand min–max ranges or mismatches were found.  

For V2 relevance, carpetArea is confirmed as the primary Demand Carpet Area input. Fallback handling will be retained if the primary value is unavailable; the exact fallback field/order will be finalized after reviewing the migrated V2 data.  

Supply uses the single numeric carpetArea.  

**Latest Decision / Pending Clarification:**

Latest Decision  

V2 Carpet Area will use the confirmed Demand-area-based variance bands across Retail, Office, and F&B. The applicable lower and upper variance percentages depend on the Demand Carpet Area band. Supply Carpet Area within the applicable variance limits receives Match Score = 1; outside the limits receives 0. The V1 fixed ±10% tolerance and 0.8 partial Match Score are not used in the latest V2 logic.  

Technical / Backend Confirmation – Revalidation Completed:  
The refreshed V2 Dev DB was revalidated across Retail, Office, and F&B. On populated Demand records, both carpetArea and carpetAreaRange are present, with carpetArea = carpetAreaRange.min = carpetAreaRange.max. No true Demand min–max ranges or mismatches were found. Supply consistently uses the single numeric carpetArea.  

Technical / Backend Confirmation – Sep 22, 2026:  
carpetArea is confirmed as the primary Demand Carpet Area input for V2 relevance and Stage-1 labelled-data generation. Fallback handling should be retained if the primary value is unavailable.  

Remaining Implementation Point:  
The exact fallback field/order will be finalized after reviewing the migrated V2 data.  

V1 Integration: The approved V1 range-based Carpet Area logic remains unchanged. carpetAreaRange.min/max remain available for the existing V1 wrapper mapping.  

Latest Live-Sheet Weight Update  

Retail mandatory-field total changed from 75% to 80%. With 7 mandatory fields, the effective Carpet Area weight changes from 75% / 7 ≈ 10.71% to 80% / 7 ≈ 11.43%.  

##### Ceiling Height (ft.)
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Ceiling Height (ft.) | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | Ceiling Height (ft.) |

**Comments:**

Approved V1:  
Supply Ceiling Height exactly equal to the Demand Ceiling Height receives 1.  
Supply Ceiling Height greater than Demand receives 0.8.  
Supply Ceiling Height below Demand receives 0.  

Earlier V2 Discussion:  
The Ceiling Height logic was proposed to introduce a +30% upper variance from the Demand Ceiling Height. An earlier April 23 proposal considered 1 / 0.9 / 0 scoring, which was subsequently revised during further business discussion.  

Latest V2 Decision:  
Ceiling Height now uses both lower-side tolerance and +30% upper variance.  

Supply below Demand but within the permitted lower variance → 0.8  
Supply equal to Demand or up to 30% above Demand → 1  
Supply more than 30% above Demand → 0.5  
Supply below the applicable permitted lower-side variance → 0  

The permitted lower variance depends on the Demand Ceiling Height:  

Demand ≤14 ft → up to 1 ft lower  
Demand 15–20 ft → up to 2 ft lower  
Demand ≥21 ft → up to 3 ft lower  

This latest decision supersedes the earlier V1 and proposed V2 Ceiling Height scoring interpretations.  

**Match Score Interpretation:**

Approved V1:  

1 → Supply Ceiling Height is exactly equal to Demand Ceiling Height.  

0.8 → Supply Ceiling Height is greater than Demand Ceiling Height.  

0 → Supply Ceiling Height is less than Demand Ceiling Height.  

Latest V2:  

1 → Supply Ceiling Height is equal to Demand or up to 30% above Demand.  

0.8 → Supply Ceiling Height is below Demand but remains within the applicable permitted lower variance:  

- Demand ≤14 ft → up to 1 ft lower
- Demand 15–20 ft → up to 2 ft lower
- Demand ≥21 ft → up to 3 ft lower

0.5 → Supply Ceiling Height is more than 30% above Demand.  

0 → Supply Ceiling Height falls below the applicable permitted lower-side variance.  

**Examples:**

Approved V1 Examples  

Example 1 – Exact match  
Demand: 12 ft  
Supply: 12 ft  
→ Match Score = 1  

Example 2 – Supply above Demand  
Demand: 12 ft  
Supply: 14 ft  
→ Match Score = 0.8  

Example 3 – Supply below Demand  
Demand: 12 ft  
Supply: 10 ft  
→ Match Score = 0  

Latest V2 Examples  

Example 1 – 1 ft lower variance  

Demand: 14 ft  
Permitted lower variance: 1 ft  

Supply: 13 ft → 0.8  
Supply: 14 ft → 1  
Supply: 12 ft → 0  

Example 2 – 2 ft lower variance  

Demand: 18 ft  
Permitted lower variance: 2 ft  

Supply: 16 ft → 0.8  
Supply: 17 ft → 0.8  
Supply: 18 ft → 1  
Supply: 15 ft → 0  

Example 3 – 3 ft lower variance  

Demand: 25 ft  
Permitted lower variance: 3 ft  

Supply: 22–24 ft → 0.8  
Supply: 25 ft → 1  
Supply: 21 ft → 0  

Example 4 – +30% upper variance  

Demand: 10 ft  
30% upper variance = 3 ft  
Upper full-match limit = 13 ft  

Supply: 10–13 ft → 1  
Supply: >13 ft → 0.5  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Ceiling Height uses Demand-dependent lower-side tolerance together with a +30% upper variance:  

- Demand ≤14 ft → Supply up to 1 ft lower → 0.8
- Demand 15–20 ft → Supply up to 2 ft lower → 0.8
- Demand ≥21 ft → Supply up to 3 ft lower → 0.8
- Supply below the applicable permitted lower-side variance → 0
- Supply equal to Demand or up to 30% above Demand → 1
- Supply more than 30% above Demand → 0.5

This supersedes the Approved V1 and earlier proposed/interim V2 Ceiling Height scoring interpretations.  

Technical / Backend:  
V2 provides Demand Ceiling Height through ceilingHeightMinFt and Supply Ceiling Height through ceilingHeightFt. These numeric values support the confirmed V2 Ceiling Height Match Score logic. No additional Ceiling Height-specific backend clarification is currently required.  

Weight:  
Latest live sheet mandatory-field total = 80%. With 7 mandatory fields, effective Ceiling Height weight = 80% ÷ 7 ≈ 11.43%.  

##### Floor
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Floor | M | (merged above) | Latest live sheet: 80% / 7 ≈ 11.43% | Floor |

**Comments:**

Approved V1:  

Floor represents the physical placement of the store within the Supply. When Store Type is specified, Floor is evaluated together with Store Type using the approved V1 Store-Type-specific Floor matching rules. When Store Type is not specified, Floor is evaluated independently using exact Floor matching.  

Earlier V2 Discussion:  

The latest live sheet proposed Floor as a mandatory 1 / 0 outcome and continued to associate Floor evaluation with Store Type. Initial business clarification indicated that the V1 Store Type dependency would continue in V2.  

Latest V2 Decision:  

Floor continues to be evaluated together with Store Type, but the earlier V1 Store Type outcomes will not continue as-is. The V2 Floor–Store Type logic is based on High Street and Mall.  

- Ground + High Street: Supply Ground or Upper Ground → 1; all other Supply Floors → 0

- Ground + Mall: Supply Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor or Above 3rd Floor → 1; Basement → 0

- Any Floor: can match across all available Supply Floors; where Store Type is specified, Store Type must still be considered during matching.

**Match Score Interpretation:**

Approved V1:  

Floor Match Score depends on whether Store Type is specified.  

When Store Type = High Street:  

1 → Demand Ground + Supply Ground; Demand Any + Supply Any; or a specific Demand Floor exactly matches Supply Floor.  
0 → Supply Floor does not satisfy the applicable High Street Floor condition.  

When Store Type = Mall:  

1 → Demand Ground + Supply Ground; Demand Any + Supply Any; or a specified upper Demand Floor is satisfied by Supply Ground, Upper Ground, or the same specified Floor.  
0 → Supply Floor does not satisfy the applicable Mall Floor condition.  

When Store Type is not specified:  

1 → Supply Floor satisfies the Demand Floor condition.  
0 → Supply Floor does not satisfy the Demand Floor condition.  

Latest V2:  

Demand Floor = Ground + Store Type = High Street  

1 → Supply Floor = Ground or Upper Ground  
0 → All other Supply Floors  

Demand Floor = Ground + Store Type = Mall  

1 → Supply Floor = Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor, or Above 3rd Floor  
0 → Supply Floor = Basement  

Demand Floor = Any  

1 → Any available Supply Floor can satisfy the Floor requirement.  
Where Store Type is specified, Store Type must still be considered separately during matching.  

**Examples:**

Approved V1:  

Example 1 – High Street, Ground Floor match  
Demand: Store Type = High Street, Floor = Ground  
Supply: Floor = Ground  
→ Match Score = 1  

Example 2 – High Street, Floor mismatch  
Demand: Store Type = High Street, Floor = Ground  
Supply: Floor = 1st Floor  
→ Match Score = 0  

Example 3 – Mall, specified upper Floor  
Demand: Store Type = Mall, Floor = 1st Floor  
Supply: Floor = Upper Ground  
→ Match Score = 1  

Example 4 – Store Type not specified, exact Floor match  
Demand: Store Type = Not Specified, Floor = Ground  
Supply: Floor = Ground  
→ Match Score = 1  

Latest V2:  

Example 1 – Ground + High Street / Ground Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = Ground  
→ Floor Match Score = 1  

Example 2 – Ground + High Street / Upper Ground Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = Upper Ground  
→ Floor Match Score = 1  

Example 3 – Ground + High Street / Higher Floor Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = 1st Floor  
→ Floor Match Score = 0  

Example 4 – Ground + Mall / Ground Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = Ground  
→ Floor Match Score = 1  

Example 5 – Ground + Mall / Higher Floor Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = 2nd Floor  
→ Floor Match Score = 1  

Example 6 – Ground + Mall / Basement Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = Basement  
→ Floor Match Score = 0  

Example 7 – Any Floor  
Demand: Floor = Any, Store Type = High Street  
Supply: Floor = 2nd Floor  
→ Floor requirement is satisfied (Floor Match Score = 1); Store Type must still be evaluated according to the applicable Store Type logic.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Floor continues to be evaluated together with Store Type, but the earlier V1 Store Type outcomes will not continue as-is. The confirmed V2 Floor–Store Type logic is based on High Street and Mall:  

- Ground + High Street: Supply Ground or Upper Ground → 1; all other Supply Floors → 0
- Ground + Mall: Supply Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor or Above 3rd Floor → 1; Basement → 0
- Any Floor: can match across all available Supply Floors; where Store Type is selected, Store Type must still be considered during matching.

Technical / Backend:  
V2 provides Demand Floor through floorPreference and Supply Floor through floor. These fields can be used for the V2 Floor Match Score implementation together with the applicable Demand Store Type. No additional Floor-specific backend clarification is currently required.  

Weight:  
Latest live sheet mandatory-field total = 80%. With 7 mandatory fields, effective Floor weight = 80% ÷ 7 ≈ 11.43%.  

##### Fitouts required
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Fitouts required | O | Latest live sheet: 5% | Latest live sheet: 5% | Fitouts available |

**Comments:**

Approved V1: Retail Fitouts used binary requirement-versus-availability matching, with Fitouts evaluated based on whether the Demand required Fitouts and whether Fitouts were available on the Supply.  
Latest V2 Decision: Retail will use Fitout Required Yes/No on Demand and Fitout Available Yes/No on Supply, with the confirmed Yes/No combination-specific Match Score Interpretation.  

For Retail, Demand Fitouts Required = No means the Demand specifically requires a Supply without Fitouts; it does not mean that the Demand has no Fitouts preference. Therefore, Demand No + Supply No = 1 and Demand No + Supply Yes = 0.  

A missing/not-provided Fitouts value is different from an explicit No. If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. If Demand Fitouts is provided but Supply Fitouts is missing/not provided, also exclude Fitouts from the relevance calculation.  

**Match Score Interpretation:**

Approved V1:  

1 → Demand Fitout Required = Yes AND Supply Fitout Available = Yes  

0 → Demand Fitout Required = Yes AND Supply Fitout Available = No  

If Demand Fitout Required is not specified, the field is excluded from relevance scoring.  

Latest V2:  

1 →  

Demand Fitout Required = Yes AND Supply Fitout Available = Yes  
Demand Fitout Required = No AND Supply Fitout Available = No  

0 →  

Demand Fitout Required = Yes AND Supply Fitout Available = No  
Demand Fitout Required = No AND Supply Fitout Available = Yes  

Missing / Not Provided:  
If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation.  
If Demand Fitouts is provided but Supply Fitouts is missing/not provided, exclude Fitouts from the relevance calculation.  

**Examples:**

Approved V1:  

Example 1 – Fitouts Required and Available  
Demand: Fitouts Required = Yes  
Supply: Fitouts Available = Yes  
→ Match Score = 1  

Example 2 – Fitouts Required but Not Available  
Demand: Fitouts Required = Yes  
Supply: Fitouts Available = No  
→ Match Score = 0  

Latest V2:  

Example 1 – Yes / Yes  
Demand: Fitouts Required = Yes  
Supply: Fitouts Available = Yes  
→ Match Score = 1  

Example 2 – Yes / No  
Demand: Fitouts Required = Yes  
Supply: Fitouts Available = No  
→ Match Score = 0  

Example 3 – No / Yes  
Demand: Fitouts Required = No  
Supply: Fitouts Available = Yes  
→ Match Score = 0  

Example 4 – No / No  
Demand: Fitouts Required = No  
Supply: Fitouts Available = No  
→ Match Score = 1  

Example 5 – Missing / Not Provided:  
Demand Fitouts missing/not provided → exclude Fitouts from the relevance calculation.  
Demand Fitouts provided + Supply Fitouts missing/not provided → exclude Fitouts from the relevance calculation.  

**Latest Decision / Pending Clarification:**

Latest Business Decision:  
Retail Fitouts uses Fitout Required Yes/No on Demand and Fitout Available Yes/No on Supply:  
Demand Yes + Supply Yes → 1  
Demand Yes + Supply No → 0  
Demand No + Supply Yes → 0  
Demand No + Supply No → 1  
Demand Fitouts Required = No is an explicit requirement for a Supply without Fitouts; it is not equivalent to missing/not provided.  

Missing / Not Provided – Sep 18, 2026:  
If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. If Demand Fitouts is provided but Supply Fitouts is missing/not provided, also exclude Fitouts from the relevance calculation.  

Technical / Backend Status – Sep 22, 2026:  
The reviewed V2 data contains categorical fitOutStatus and Boolean fitoutsRequired / fitoutsAvailable. fitOutStatus is populated, while the Boolean fields are largely unpopulated. The applicable Fitouts representation will be revalidated against the migrated V1→V2 data before Stage-1 implementation.  

##### Possession
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Possession | O | Latest live sheet: 5% | Latest live sheet: 5% | Possession |

**Comments:**

Approved V1:  
Possession used an urgency-based comparison between the Demand's required possession timeline and the Supply's availability timeline. Supply available at the required time or earlier received a full match, while progressively later availability received a lower Match Score.  

Latest V2 Decision:  
The same urgency-based approach continues using five standardized Possession buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply available at the same time or earlier than required receives a full match; later availability is scored according to how many buckets later it falls.  

V2 Representation: Business terminology is standardized as Possession on both Demand and Supply. The reviewed V2 backend currently represents Possession using propertyAvailableFrom on both sides.  

Technical / Backend Confirmation – Sep 22, 2026: “Possession” is the standardized business/UI terminology. The existing V2 backend field propertyAvailableFrom will continue to be used on both Demand and Supply. No backend field rename or additional MongoDB wrapper change is required solely for this terminology standardization.  

**Match Score Interpretation:**

Approved V1:  

1 → Supply is available at the same time as or earlier than the Demand Possession requirement.  
0.8 → Supply is available one Possession bucket later than the Demand requirement.  
0.5 → Supply is available two Possession buckets later than the Demand requirement.  
0 → Supply is available more than two Possession buckets later than the Demand requirement.  

Latest V2:  

The Approved V1 urgency-based Match Score Interpretation is retained and confirmed using the five V2 Possession buckets:  

Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months  

1 → Supply available at the same time or earlier than Demand requirement  
0.8 → Supply available one bucket later  
0.5 → Supply available two buckets later  
0 → Supply available more than two buckets later  

**Examples:**

Approved V1 / Confirmed V2 Examples:  

Example 1:  
Demand: Immediate  
Supply: Immediate  
→ Match Score = 1  

Example 2:  
Demand: Within 3 months  
Supply: Immediate  
→ Match Score = 1  

Example 3:  
Demand: Immediate  
Supply: Within 3 months  
→ Match Score = 0.8  

Example 4:  
Demand: Immediate  
Supply: Within 6 months  
→ Match Score = 0.5  

Example 5:  
Demand: Immediate  
Supply: Within 9 months  
→ Match Score = 0  

Example 6 – Latest business-confirmed scenario:  
Demand: Within 9 months  
Supply: Immediate / Within 3 months / Within 6 months / Within 9 months  
→ Match Score = 1  

Demand: Within 9 months  
Supply: After 9 months  
→ Match Score = 0.8  

**Latest Decision / Pending Clarification:**

Latest Decision:  

The Approved V1 urgency-based Possession Match Score logic is retained and confirmed for V2 using the five buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months, with scores 1 / 0.8 / 0.5 / 0 based on how much later the Supply is available than the Demand requirement.  

For Retail, Possession is confirmed as an Optional relevance field with 5% weight. This Optional classification applies to relevance configuration only; Possession remains compulsory during both Demand and Supply creation. Therefore, no separate missing-value Match Score treatment is required for the intended V2 flow.  

Technical / Backend Confirmation – Sep 22, 2026:  
The business/UI terminology is standardized as Possession, while the V2 backend will continue using propertyAvailableFrom on both Demand and Supply. No backend field rename or additional MongoDB wrapper change is required solely for the terminology standardization.  

##### Frontage in feet
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Frontage in feet | O | Latest live sheet: 5% | Latest live sheet: 5% | Frontage in feet |

**Comments:**

Approved V1:  

Frontage uses exact-match scoring when the Demand specifies a minimum Frontage. An exact Supply Frontage match receives full score, while a non-exact or missing Supply Frontage receives a reduced score. If Demand Frontage is not specified, the field is excluded from relevance scoring.  

Latest V2 Decision:  
Frontage is treated as a minimum requirement. Supply Frontage equal to or greater than the Demand requirement receives a Match Score of 1. Supply Frontage up to 15% below the Demand requirement receives 0.8, and Supply Frontage more than 15% below the Demand requirement receives 0.  

If Demand Frontage is not specified, Frontage is excluded from the applicable relevance calculation. If Demand Frontage is specified but Supply Frontage is missing, Match Score = 0.  

**Match Score Interpretation:**

Approved V1:  

1 → Demand specifies Frontage and Supply Frontage exactly matches the Demand requirement.  
0.5 → Demand specifies Frontage and Supply Frontage is non-exact or missing.  
Field excluded → Demand Frontage is not specified.  

Latest V2:  

1 → Supply Frontage is equal to or greater than the Demand requirement.  
0.8 → Supply Frontage is up to 15% below the Demand requirement.  
0 → Supply Frontage is more than 15% below the Demand requirement.  
0 → Demand Frontage is specified but Supply Frontage is missing.  
Field excluded → Demand Frontage is not specified.  

**Examples:**

Approved V1 Examples:  

Example 1 – Exact Match:  
Demand: 20 ft  
Supply: 20 ft  
→ Match Score = 1  

Example 2 – Non-Exact Match:  
Demand: 20 ft  
Supply: 25 ft  
→ Match Score = 0.5  

Example 3 – Below Demand:  
Demand: 20 ft  
Supply: 15 ft  
→ Match Score = 0.5  

Example 4 – Supply Missing:  
Demand: 20 ft  
Supply: Missing  
→ Match Score = 0.5  

Example 5 – Demand Not Specified:  
Demand: Not specified  
→ Frontage excluded from relevance scoring.  

Latest V2 Examples:  

Example 1 – Supply Meets Demand:  
Demand: 20 ft  
Supply: 20 ft  
→ Match Score = 1  

Example 2 – Supply Exceeds Demand:  
Demand: 20 ft  
Supply: 25 ft  
→ Match Score = 1  

Example 3 – 15% Below Demand:  
Demand: 20 ft  
Supply: 17 ft  
→ Match Score = 0.8  

Example 4 – More Than 15% Below Demand:  
Demand: 20 ft  
Supply: 16 ft  
→ Match Score = 0  

Example 5 – Supply Missing:  
Demand: 20 ft  
Supply: Missing  
→ Match Score = 0  

Example 6 – Demand Not Specified:  
Demand: Not specified  
→ Frontage excluded from relevance scoring.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Frontage is treated as a minimum requirement:  

- Supply Frontage ≥ Demand requirement → 1
- Supply Frontage up to 15% below Demand requirement → 0.8
- Supply Frontage more than 15% below Demand requirement → 0

If Demand Frontage is not specified, Frontage is excluded from the applicable relevance calculation. If Demand Frontage is specified but Supply Frontage is missing, Match Score = 0.  

Technical / Backend:  
No immediate backend clarification is required for the confirmed Frontage scoring logic.  

Weight:  
Frontage remains an Optional relevance field with 5% weight in the latest Retail live sheet.  

##### Store type
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Store type | O | Latest live sheet: 5% | Latest live sheet: 5% | Store type |

**Comments:**

Approved V1:  
Store Type is evaluated using exact matching. When Demand specifies a Store Type, the Demand and Supply Store Types must match for a full match; otherwise, the Store Type Match Score is 0. If Demand does not specify Store Type, the field is excluded from scoring.  

Earlier V2 Discussion:  
The earlier PR supported multiple Demand Store Types, while the relevance logic evaluated a single Store Type. The latest PR has changed Store Type to single-select for both Demand and Supply.  

Latest V2 Decision:  
Store Type continues with binary exact matching:  

- Demand Store Type = Supply Store Type → 1
- Demand Store Type ≠ Supply Store Type → 0

Himanshu confirmed that Store Type will be specified on the Demand side as a confirmed input field. The Store Type–Floor dependency remains applicable and should follow the latest confirmed V2 Floor–Store Type logic.  

The latest PR defines Demand Store Type values as Highstreet, Mall, and Any, while Supply supports Highstreet and Mall.  

Latest Business Confirmation:  
Demand Store Type = Any + Supply Highstreet → 1  
Demand Store Type = Any + Supply Mall → 1  

Latest Live-Sheet Classification:  
Store Type remains Optional (O) with 5% weight for Retail. Store Type being specified on the Demand side is an input/data-entry requirement and does not change its relevance classification from Optional to Mandatory.  

Data Alignment Note:  
Himanshu confirmed that legacy V1 Store Type data will be updated to align with the finalized V2 Store Type fields/values during data upload. Therefore, legacy V1 values outside the finalized V2 values do not require separate relevance-side mapping.  

**Match Score Interpretation:**

Approved V1:  

Demand Store Type = Supply Store Type → 1  
Demand Store Type ≠ Supply Store Type → 0  
Demand Store Type not specified → excluded from scoring  

Latest V2 Decision:  

Demand Store Type = Supply Store Type → 1  
Demand Store Type ≠ Supply Store Type → 0  
Demand Store Type = Any + Supply Store Type = Highstreet or Mall → 1  

Store Type is a confirmed input field, but it is Optional in the relevance configuration.  
Store Type–Floor dependency follows the latest confirmed V2 Floor–Store Type logic.  

**Examples:**

Approved V1 Examples  

Example 1 – Exact High Street match  
Demand: Store Type = Highstreet  
Supply: Store Type = Highstreet  
→ Match Score = 1  

Example 2 – Exact Mall match  
Demand: Store Type = Mall  
Supply: Store Type = Mall  
→ Match Score = 1  

Example 3 – Store Type mismatch  
Demand: Store Type = Highstreet  
Supply: Store Type = Mall  
→ Match Score = 0  

Example 4 – Store Type not specified  
Demand: Store Type = Not Specified  
→ Store Type is excluded from scoring  
Latest V2 Examples  

Example 1 – Exact High Street match  
Demand: Store Type = Highstreet  
Supply: Store Type = Highstreet  
→ Store Type Match Score = 1  

Example 2 – Exact Mall match  
Demand: Store Type = Mall  
Supply: Store Type = Mall  
→ Store Type Match Score = 1  

Example 3 – Store Type mismatch  
Demand: Store Type = Highstreet  
Supply: Store Type = Mall  
→ Store Type Match Score = 0  

Example 4 – Demand Store Type = Any  
Demand: Store Type = Any  
Supply: Store Type = Highstreet  
→ Store Type Match Score = 1  

Demand: Store Type = Any  
Supply: Store Type = Mall  
→ Store Type Match Score = 1  

Floor Dependency Note:  
Where Floor and Store Type are evaluated together, the applicable confirmed V2 Floor–Store Type logic must also be applied.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Store Type uses single-value binary matching:  

- Demand Store Type = Supply Store Type → 1
- Demand Store Type ≠ Supply Store Type → 0
- Demand Store Type = Any + Supply Store Type = Highstreet → 1
- Demand Store Type = Any + Supply Store Type = Mall → 1

Store Type remains Optional (O) with 5% weight for Retail. Store Type being specified on the Demand side is an input/data-entry requirement and does not make it a Mandatory relevance field. The Store Type–Floor dependency follows the latest confirmed V2 Floor–Store Type logic.  

Technical / Backend Confirmation – Sep 22, 2026:  
Store Type remains list-based in the V2 backend, with one value expected in the list. Sathish confirmed that the existing wrapper approach can continue, converting the one-value Store Type list to the scalar value required by the relevance engine.  

Data Alignment:  
Legacy V1 Store Type values outside the finalized V2 values will be aligned during data upload; no separate relevance-side mapping is required.  

Post-Migration Review:  
Unexpected legacy/multi-value Store Type records, if still present after migration, will be reviewed separately. No multi-value Store Type scoring rule is currently defined.  

##### Other interested location
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Other interested location | Merged with Location | No separate weight – merged with Location | No separate weight – merged with Location |  |

**Comments:**

Approved V1: Other Interested Location was not part of the approved V1 Retail relevance engine.  

Earlier V2 Proposal: Other Interested Location was introduced as an additional Demand-location preference and was initially considered for separate relevance treatment, including a proposed 0.9 Match Score.  

Latest V2 Decision: Other Interested Location is merged with Primary Location for relevance evaluation and will not have a separate weight or separate Match Score. The earlier 0.9 treatment is superseded. A Supply matched through an Other Interested Location will be evaluated using the same Location hierarchy/distance-based logic as a Primary Location match.  

**Match Score Interpretation:**

Approved V1: Not applicable – Other Interested Location was not part of the approved V1 relevance engine.  

Earlier V2 Discussion: OIL matching the Location criteria → 0.9.  

Latest V2 Decision: Other Interested Location has no separate Match Score. Each OIL is evaluated against the Supply Location using the same finalized V2 Location Match Score logic as Primary Location:  

Same Micro-location → 1  
Different Micro-location but same Area → 1  
Different Area but same City → distance-based Location Match Score  
Different City → 0  

The earlier separate 0.9 OIL Match Score is superseded.  

Implementation: Evaluate the Supply against Primary Location and each OIL using the same applicable Location logic, and use the highest resulting score as the single final Location Match Score.  

**Examples:**

Earlier V2 Proposal – Superseded:  
Primary Location = Kothrud  
Other Interested Location = Baner  
Supply Location = Baner  
OIL Match Score → 0.9 (earlier proposal)  

Latest V2: The separate 0.9 OIL treatment is removed. Supply Location = Baner is evaluated against OIL = Baner using the same V2 Location Match Score logic as Primary Location → 1.  

Primary + OIL Consolidation:  
Primary Location Match Score → 0.5  
OIL Match Score → 1.0  
Final Location Match Score → 1.0  

Multiple OILs:  
Primary Location → 0.5  
OIL 1 → 0.7  
OIL 2 → 1.0  
Final Location Match Score → 1.0  

**Latest Decision / Pending Clarification:**

Latest Decision: Other Interested Location is merged with Primary Location for relevance evaluation and will no longer have a separate weight, separate Match Score, or separate impact on the final relevance percentage. The earlier proposed 0.9 OIL Match Score is superseded. Primary Location and Other Interested Locations will use the same finalized V2 Location hierarchy/distance-based Match Score logic.  

Implementation Understanding: Evaluate the Supply against the Primary Location and each Other Interested Location using the same Location Match Score logic, and use the highest resulting score as the single final Location Match Score. Example: Primary Location → 0.5; OIL → 1.0; Final Location Match Score → 1.0.  

Latest Business Confirmation – Sep 18, 2026: Primary Location and each Other Interested Location are evaluated using the same applicable Location Match Score logic. The highest resulting Match Score is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Confirmation – Sep 22, 2026: Primary Location and Other Interested Locations remain separate in the V2 backend: locality represents Primary Location and otherInterestedLocations[] represents Other Interested Locations. The wrapper can retrieve them separately and expose them in a consistent structure for relevance processing.  

Location Dependency: No separate technical clarification remains for Other Interested Location. Any further change to its scoring will follow the pending final decision under the Location field regarding the Location hierarchy/fields and distance-based component.  

**Implementation reference 1 (unlabelled column):**

    Confirmed Current Wrapper / Relevance-Engine Implementation – Sep 22, 2026:
    V2 keeps Primary Location and Other Interested Locations separately:
    
    # Example V2 Demand
    demand = {
        "locality": "Andheri",
        "otherInterestedLocations": ["Bandra", "Powai"]
    }
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    primary_location = demand.get("locality")
    oil_locations = demand.get("otherInterestedLocations") or []
    
    demand_locations = []
    
    if primary_location:
        demand_locations.append(primary_location)
    
    demand_locations.extend(oil_locations)
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    The wrapper therefore converts the separate inputs into one consistent collection for the Location matching function:
    
    Primary Location + OILs
            ↓
    ["Andheri", "Bandra", "Powai"]
    
    Then the relevance engine evaluates the Supply Location against the Primary Location and each Other Interested Location using the same finalized applicable Location Match Score logic:
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    For example:
    
    scores = [0.5, 0.7, 1.0]
    
    final_location_score = max(scores)
    
    # final_location_score = 1.0
    
    So conceptually:
    
    Wrapper
    Primary + OIL1 + OIL2
            ↓
    [Primary, OIL1, OIL2]
    
    Relevance Engine
            ↓
    score each using same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0
    
    
    Note: The Primary Location + Other Interested Location aggregation approach and use of the highest Match Score are confirmed. The specific Location scoring applied within location_match() will follow the final V2 Location decision, including the pending confirmation on the Location levels/fields and distance-based component.
    
    Primary + OILs → score each → max(scores) → one final Location Match Score

**Implementation reference 2 (unlabelled column):**

    Future Reference / Alternative Backend Scenario – Not Current Implementation:
    As of the Sep 22, 2026 technical confirmation, V2 keeps Primary Location (locality) and Other Interested Locations (otherInterestedLocations[]) as separate backend fields. Therefore, the scenario below is not applicable to the current implementation. It is retained only as a reference in case the backend is changed in the future to provide Primary Location and Other Interested Locations as one unified list.
    
    
    If V2 does not keep Primary Location and OIL separately and instead already provides them as one unified list, for example:
    
    demand = {
        "locations": ["Andheri", "Bandra", "Powai"]
    }
    
    then the wrapper becomes simpler:
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    demand_locations = demand.get("locations") or []
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    There is no need for the wrapper to separately read Primary Location and otherInterestedLocations[] and combine them.
    
    The relevance engine can still use exactly the same approach:
    
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    Conceptually:
    
    V2 Backend
    [Primary, OIL1, OIL2]
            ↓
    Wrapper
    [Primary, OIL1, OIL2]
            ↓
    Relevance Engine
    score each using the same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0

**Relevance Scoring Framework & Eligibility Rules:**

All fields explicitly specified in the demand are considered in relevance scoring.  

For each such field, a match score is assigned according to the approved field-level business logic.  

- Exact matches receive full score.
- Partial matches receive reduced score where business logic allows.
- Non-matches receive zero score.

The final relevance score is computed as a weighted and normalized combination of the match scores across all demand-specified fields.  


#### Tab 3 — F&B_V2_Relevance_Logic
**Title (R1):** F&B DEMAND & SUPPLY RELEVANCY

##### Asset Class
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Asset Class | M | Latest live sheet: Mandatory group = 75% | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Asset Class |

**Comments:**

Approved V1: Asset Class uses strict exact matching. Demand and Supply must have the same Asset Class; same Asset Class receives full match and a different Asset Class receives no match.  

Latest V2 Decision: Retail ↔ F&B cross-Asset-Class matching is permitted in both directions. Retail Demand → F&B Supply and F&B Demand → Retail Supply receive Asset Class Match Score = 1. Office and Managed Space remain outside this Retail ↔ F&B cross-match exception.  

Latest Business Confirmation – Sep 18, 2026: For Retail ↔ F&B cross-matching, relevance will be calculated using the confirmed common Mandatory relevance fields plus Store Type: Asset Class, Transaction Type, City, Location + Other Interested Location, Carpet Area, Floor, Ceiling Height, and Store Type. Asset-class-specific Optional relevance fields are excluded. Each applicable field will use its finalized V2 Match Score logic, including partial Match Scores where applicable; all fields are not required to have Match Score = 1.  

Technical / Backend Confirmation – Sep 22, 2026: Retail and F&B remain separate V2 backend Asset Classes (retail and f-and-b). No additional backend dependency/change was identified by Sathish for supporting the confirmed Retail ↔ F&B cross-match.  

**Match Score Interpretation:**

V1 Reference:  
Asset Class uses strict exact matching:  

- Demand Asset Class = Supply Asset Class → 1
- Demand Asset Class ≠ Supply Asset Class → 0

Latest V2 Decision – Retail ↔ F&B Exception:  
V2 retains same-Asset-Class matching and introduces a confirmed Retail ↔ F&B cross-match exception:  

- Retail Demand + Retail Supply → 1
- Retail Demand + F&B Supply → 1
- F&B Demand + F&B Supply → 1
- F&B Demand + Retail Supply → 1

Retail ↔ F&B cross-matching does not extend to Office or Managed Space.  
Therefore:  

- Retail Demand + Office Supply → 0
- Retail Demand + Managed Space Supply → 0
- F&B Demand + Office Supply → 0
- F&B Demand + Managed Space Supply → 0

Cross-Match Relevance:  
For a Retail ↔ F&B pair, Asset Class receives Match Score 1. The pair is then evaluated using the confirmed common Mandatory relevance fields plus Store Type, with each applicable field using its finalized V2 Match Score logic. Asset-class-specific Optional relevance fields are excluded from the cross-match calculation.  

**Examples:**

V1 Reference – Strict Exact Match  

Example 1:  
Demand: F&B  
Supply: F&B  
→ Match Score = 1  

Example 2:  
Demand: F&B  
Supply: Retail  
→ Match Score = 0  

Example 3:  
Demand: F&B  
Supply: Office  
→ Match Score = 0  

Example 4:  
Demand: F&B  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

Latest V2 Decision / Discussion – Retail ↔ F&B Cross-Match  

Example 5:  
Demand: F&B  
Supply: F&B  
→ Match Score = 1  

Example 6:  
Demand: F&B  
Supply: Retail  
→ Cross-match allowed  
→ Asset Class Match Score = 1  
Example 7:  
Demand: Retail  
Supply: F&B  
→ Cross-match allowed  
→ Asset Class Match Score = 1  
Example 8:  
Demand: F&B  
Supply: Office  
→ Match Score = 0  

Example 9:  
Demand: F&B  
Supply: Managed Space / Managed Office  
→ Match Score = 0  

**Latest Decision / Pending Clarification:**

Latest Decision: Retail ↔ F&B cross-matching is allowed in both directions, with Asset Class Match Score = 1 for F&B Demand ↔ Retail Supply and Retail Demand ↔ F&B Supply.  

For Retail ↔ F&B cross-matching, relevance will be calculated using the common Mandatory relevance fields plus Store Type: Asset Class, Transaction Type, City, Location + OIL, Carpet Area, Floor, Ceiling Height, and Store Type. Asset-class-specific Optional relevance fields are excluded. Each applicable field uses its respective finalized V2 Match Score logic, including partial Match Scores where applicable.  

Technical / Backend Confirmation – Sep 22, 2026: The V2 backend continues to retain Retail and F&B as separate Asset Classes (retail and f-and-b). No additional backend dependency/change was identified by Sathish for supporting the confirmed Retail ↔ F&B cross-match.  

Business Decision – Downstream Display Cutoff: Business has not yet finalized the Retail ↔ F&B cross-match display cutoff. Sathish confirmed that a separate configurable cutoff can be maintained once the final percentage is provided. The 50% mentioned during the Sep 22 discussion is temporary and is not the final business-approved cutoff.  

##### Transcation type
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Transcation type | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Transcation type |

**Comments:**

V1 Reference: Transaction Type uses strict exact matching between Demand and Supply.  

Latest V2 Decision: Transaction Type should follow business transaction equivalence: Demand Buy ↔ Supply Sale and Demand Lease ↔ Supply Lease are valid matches. Incompatible transaction combinations are non-matches.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the current V2 backend representation for purchase transactions will continue to use Buy, including on the Supply side. Sale may be used as the business/UI terminology, but Buy and Sale represent the same purchase transaction context. No backend field change or Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

**Match Score Interpretation:**

V1 Reference: Exact Transaction Type match = 1; mismatch = 0.  

Latest V2 Business Rule:  
Demand Buy + Supply Sale → 1  
Demand Lease + Supply Lease → 1  
Demand Buy + Supply Lease → 0  
Demand Lease + Supply Sale → 0  

Backend Representation: The current V2 backend uses Buy for purchase transactions, including on the Supply side. Sale is the corresponding business/UI terminology for the Supply-side purchase transaction.  

**Examples:**

Approved V1 – Strict Exact Match  

Example 1:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 2:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Latest V2 – Business Transaction Equivalence  

Example 3:  
Demand: Buy  
Supply: Sale  
→ Match Score = 1  

Example 4:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 5:  
Demand: Buy  
Supply: Lease  
→ Match Score = 0  

Example 6:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Technical / Backend Confirmation – Sep 22, 2026: The V2 examples above show the confirmed business equivalence of Demand Buy ↔ Supply Sale. In the current V2 backend, purchase transactions continue to use Buy, including on the Supply side.  

**Latest Decision / Pending Clarification:**

Latest Decision: Demand Buy ↔ Supply Sale = 1 and Demand Lease ↔ Supply Lease = 1. Incompatible Transaction Type combinations = 0. The Match Score remains binary (1/0).  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the current V2 backend representation for purchase transactions will continue to use Buy, including on the Supply side. Sale may be used as the business/UI terminology for the same purchase transaction context. No backend field change or Buy ↔ Sale wrapper conversion is required solely because of this terminology difference.  

ML / Implementation: Use the current V2 backend Transaction Type representation directly for relevance processing. No Buy ↔ Sale normalization is required in the MongoDB wrapper solely to reconcile the UI/business terminology.  

##### City
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| City | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | City |

**Comments:**

V1 Reference: City uses strict exact matching between Demand and Supply.  

Latest V2 Decision: The exact City match logic continues. PAN_INDIA is a subscription-based option and is not treated as a City for relevance matching; relevance should use the actual Demand and Supply City.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values observed in previously reviewed V2 records were identified as early/test data and are not the intended current representation for City relevance.  

**Match Score Interpretation:**

V1 Reference / Latest V2:  
1 → Demand City exactly matches Supply City  
0 → Demand City does not match Supply City  

PAN_INDIA is not evaluated as a City and does not receive a City Match Score; the actual Demand and Supply City should be used for matching.  

**Examples:**

V1 Reference / Latest V2 – Exact City Match  

Example 1:  
Demand: Bangalore  
Supply: Bangalore  
→ Match Score = 1  

Example 2:  
Demand: Bangalore  
Supply: Hyderabad  
→ Match Score = 0  

Example 3:  
Demand: Mumbai  
Supply: Navi Mumbai  
→ Match Score = 0  

V2 PAN_INDIA Handling  
Example 4 – PAN_INDIA:  
Demand selection includes: PAN_INDIA  
Actual Demand City: Bengaluru  
Supply City: Bengaluru  
→ City matching should use Bengaluru, not PAN_INDIA  
→ Match Score = 1  

**Latest Decision / Pending Clarification:**

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values previously observed in V2 were identified as early/test data and are not the intended current City representation.  

ML / Implementation: Use the actual Demand and Supply City values with the existing exact-match rule. No special PAN_INDIA Match Score logic is required.  

##### Location + Other Interested Location*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Location + Other Interested Location* | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Location |

**Comments:**

V1 Reference: Location matching follows a hierarchical/broader-locality approach. An exact Location match receives a full Match Score of 1. Where the Demand specifies a more specific location (e.g., a road/micro-location) and the Supply matches the broader locality containing that location, it receives a partial Match Score of 0.5. Where the Supply Location falls within the Demand's broader requested locality, it receives a full Match Score of 1. Unrelated locations receive a Match Score of 0.  

Example: Demand = DP Road, Kothrud and Supply = Kothrud → 0.5; Demand = Kothrud and Supply = DP Road, Kothrud → 1.  

Latest V2 Decision: Location matching will use Micro-location, Area, City, and distance/radius-based logic. Same Micro-location and different Micro-location within the same Area both receive a full Match Score of 1. For different Areas within the same City, the Match Score decreases based on distance up to 5 km. Different City receives 0 and should not be considered/shown as a Location match.  

The same Location Match Score logic applies to both Primary Location and Other Interested Locations (OIL). OIL is merged into Location and does not have a separate relevance impact.  

Latest Business Confirmation – Sep 18, 2026: Primary Location and each Other Interested Location are evaluated using the same applicable Location logic. The highest Match Score across them is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Clarification – Sep 22, 2026: Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately by the wrapper for max-score aggregation. The backend uses Location/Locality as the main location and Micro-location as the sub-location; Area is not maintained as a separate Location level.  

**Match Score Interpretation:**

V1 Reference:  

1 → Supply Location exactly matches the Demand Location, or the Supply is at a more specific location within the Demand's broader requested locality.  

0.5 → Demand specifies a more specific location, while the Supply matches the approved broader locality containing that Demand Location.  

0 → Supply Location does not match or fall within an approved geographic relationship with the Demand Location.  

Latest V2:  

Business clarification: Area = Location/Locality.  

Geographic hierarchy: City → Location/Locality → Micro-location.  

Same Micro-location → 1  

Different Micro-location but same  Location/Locality → 1  

Different  Location/Locality but same City → distance-based Match Score:  

≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  

2 km to ≤ 3 km → 0.6  

3 km to ≤ 4 km → 0.5  

4 km to ≤ 5 km → 0.3  

> 5 km → 0  

Different City → 0; Supply should not match/showcase.  

The same Location Match Score Interpretation applies to both Primary Location and Other Interested Location.  

**Examples:**

V1 Reference Examples  

Example 1 – Exact Match  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2 – Demand More Specific, Supply Broader  
Demand: DP Road, Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 0.5  

Example 3 – Demand Broader, Supply More Specific  
Demand: Kothrud, Pune  
Supply: DP Road, Kothrud, Pune  
→ Match Score = 1  

Example 4 – Unrelated Location  
Demand: DP Road, Kothrud, Pune  
Supply: Baner, Pune  
→ Match Score = 0  

Latest V2 Examples  

Example 1 – Same Micro-location  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2 – Different Micro-location, Same Area  
Demand Micro-location: DP Road, Kothrud, Pune  
Supply Micro-location: Karve Road, Kothrud, Pune  
Area: Kothrud  
→ Match Score = 1  

Example 3 – Different Area, Same City  
Demand Location: Kothrud, Pune  
Supply Location: Baner, Pune  
→ Different Areas within the same City  
→ Match Score = distance-based score (0.8 / 0.7 / 0.6 / 0.5 / 0.3 depending on distance up to 5 km)  

Example 4 – Different City  
Demand Location: Kothrud, Pune  
Supply Location: Andheri, Mumbai  
→ Match Score = 0  
→ Supply should not match/showcase.  

Example 5 – Different Area, Same City, More Than 5 km  
Demand Location: Area A, Pune  
Supply Location: Area B, Pune  
Distance: >5 km  
→ Match Score = 0  
Example 6 – Primary Location + Other Interested Location  

Demand Primary Location: Kothrud, Pune  
Demand OIL: Baner, Pune  
Supply Location: Baner, Pune  

Against Primary Location (Kothrud):  
→ Different Area within same City  
→ Distance-based Match Score  

Against OIL (Baner):  
→ Location Match Score = 1  

The same V2 Location Match Score logic applies to Primary Location and OIL.  

Latest Business Confirmation – Sep 18, 2026: Use the highest Match Score across Primary Location and all Other Interested Locations. Therefore, in Example 6, Final Location Match Score = 1.  

**Latest Decision / Pending Clarification:**

Latest Decision: V2 Location matching will use Micro-location, Area, City and distance/radius-based logic.  

Same Micro-location → 1  
Different Micro-location but same Area → 1  
Different Area but same City → distance-based scoring:  

≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  
2 km to ≤ 3 km → 0.6  
3 km to ≤ 4 km → 0.5  
4 km to ≤ 5 km → 0.3  
5 km → 0  

Different City → 0 and should not be considered/shown as a Location match.  

The same Location hierarchy and Match Score Interpretation applies to both Primary Location and Other Interested Location. Other Interested Location is merged into Location and has no separate relevance weight.  

Latest Business Confirmation – Sep 18, 2026: Primary Location and each Other Interested Location are evaluated using the same applicable Location logic. The highest Match Score across them is used as the single final Location Match Score. Primary Location and Other Interested Locations have equal priority.  

Technical / Backend Clarification – Sep 22, 2026: Primary Location and Other Interested Locations remain separate backend fields and can be retrieved separately for relevance evaluation. The current backend uses Location/Locality as the main location and Micro-location as the sub-location; Area is not maintained as a separate Location level. Sathish advised against implementing the distance-based calculation at this stage because it would require additional real-time API processing.  

Confirmed Business Decision – Himanshu Oct 27  

Area refers to Location/Locality.  

Confirmed hierarchy:  
City → Location/Locality → Micro-location.  

Example:  
Bengaluru → Indiranagar → 100 Feet Road.  

##### Carpet area in sq.ft*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Carpet area in sq.ft* | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Carpet area in square feet |

**Comments:**

Latest Decision:  
V2 Carpet Area will use the confirmed Demand-area-based variance bands across F&B, Retail, and Office. The applicable lower and upper variance percentages depend on the Demand Carpet Area band. Supply Carpet Area within the applicable variance limits receives Match Score = 1; outside the limits receives 0. The V1 Reference fixed ±10% tolerance and 0.8 partial Match Score are not used in the latest V2 logic.  

PR-to-V2 Representation Observation:  
The latest PR defines Demand Carpet Area as a single numeric value, which directly maps a Demand value to one of the confirmed V2 variance bands. Earlier reviewed V2 data represented Demand Carpet Area as a min–max range (carpetAreaRange.min/max), creating a representation gap because the confirmed variance-band logic is based on a single Demand Carpet Area value.  

Future / Conditional Note: If true min–max Demand Carpet Area ranges are introduced in future, an additional business rule will be required because the min and max values may fall into different Demand Carpet Area bands.  

Technical / Backend Confirmation – Sep 22, 2026:  
The refreshed V2 Dev DB revalidation confirmed that Demand carpetArea, carpetAreaRange.min, and carpetAreaRange.max are equal whenever populated, while Supply uses a single numeric carpetArea. Sathish confirmed that carpetArea can be used as the primary Demand Carpet Area input for V2 relevance. Fallback handling should be retained if the primary value is unavailable; the exact fallback field/order can be finalized after reviewing the migrated V2 data.  

Latest Live-Sheet Weight:  
F&B mandatory-field total = 75%. With 8 mandatory fields, effective Carpet Area weight = 75% ÷ 8 = 9.375% ≈ 9.38%.  

**Match Score Interpretation:**

V1 Reference:  

If Demand is a single value:  

1 → Supply Carpet Area exactly matches Demand.  
0.8 → Supply Carpet Area is within ±10% of Demand.  
0 → Supply Carpet Area is outside the ±10% tolerance.  

If Demand is a range:  

1 → Supply Carpet Area lies within the demanded range.  
0.8 → Supply Carpet Area lies within ±10% variance of the demanded range boundaries.  
0 → Supply Carpet Area falls outside the ±10% tolerance.  

Latest V2 Decision:  

The fixed ±10% tolerance and 0.8 partial Match Score are replaced by the confirmed Demand-area-based variance bands:  

≤500 sq. ft. → Lower 10% | Upper 50%  
501–1,000 → Lower 10% | Upper 25%  
1,001–2,000 → Lower 10% | Upper 20%  
2,001–4,000 → Lower 10% | Upper 20%  
4,001–6,000 → Lower 10% | Upper 15%  
6,001–10,000 → Lower 5% | Upper 15%  
10,001–15,000 → Lower 5% | Upper 10%  
15,001–25,000 → Lower 10% | Upper 15%  
≥25,001 → Lower 15% | Upper 20%  

V2 Match Score:  

1 → Supply Carpet Area falls within the applicable lower and upper variance limits.  
0 → Supply Carpet Area falls outside the applicable variance limits.  

No 0.8 partial Match Score applies in the latest V2 logic.  

Technical / Representation Status: Dev DB revalidation is complete. Demand currently provides both carpetArea and carpetAreaRange, with carpetArea = min = max whenever populated; Supply uses single numeric carpetArea. carpetArea is confirmed as the primary Demand input for V2 relevance. Fallback handling will be retained if the primary value is unavailable, with the exact fallback field/order to be finalized after migrated V2 data review.  

**Examples:**

V1 Reference – Single-Value Demand:  

Example 1:  
Demand: 1,000 sq. ft.  
Supply: 1,000 sq. ft.  
→ Match Score = 1  

Example 2:  
Demand: 1,000 sq. ft.  
Supply: 950 sq. ft.  
→ Match Score = 0.8  

Example 3:  
Demand: 1,000 sq. ft.  
Supply: 1,100 sq. ft.  
→ Match Score = 0.8  

Example 4:  
Demand: 1,000 sq. ft.  
Supply: 850 sq. ft.  
→ Match Score = 0  

Example 5:  
Demand: 1,000 sq. ft.  
Supply: 1,200 sq. ft.  
→ Match Score = 0  

V1 Reference – Range-Based Demand:  

Demand: 1,000–1,200 sq. ft.  

Supply: 1,100 sq. ft. → Match Score = 1  
Supply: 950 sq. ft. → Match Score = 0.8  
Supply: 1,300 sq. ft. → Match Score = 0.8  
Supply: 850 sq. ft. → Match Score = 0  

Latest V2 Examples:  

Example 1:  
Demand: 5,000 sq. ft.  
Applicable band: 4,001–6,000 → Lower 10%, Upper 15%  
Acceptable Supply range: 4,500–5,750 sq. ft.  
→ Supply within this range = 1; outside = 0  

Example 2:  
Demand: 10,000 sq. ft.  
Applicable band: 6,001–10,000 → Lower 5%, Upper 15%  
Acceptable Supply range: 9,500–11,500 sq. ft.  
→ Supply within this range = 1; outside = 0  

Updated Technical Status – Sep 22, 2026:  
Revalidation confirmed that carpetArea = carpetAreaRange.min = carpetAreaRange.max whenever populated in the reviewed V2 data. Sathish confirmed carpetArea as the primary Demand Carpet Area input for V2 relevance. If the primary value is unavailable, fallback handling will be retained; the exact fallback field/order will be finalized after reviewing the migrated V2 data.  

Future / Conditional Note – If True Min–Max Ranges Are Introduced:  
If a true min–max Demand Carpet Area representation is supported in future, an additional rule will be required to determine how the confirmed variance bands should be applied. For example, if Demand Carpet Area = 5,000–7,000 sq. ft., 5,000 falls in the 4,001–6,000 band (Lower 10%, Upper 15%), while 7,000 falls in the 6,001–10,000 band (Lower 5%, Upper 15%). Therefore, a true min–max representation would require clarification on which variance band should determine the acceptable Supply Carpet Area range and resulting V2 Match Score (1/0).  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Carpet Area will use the confirmed Demand-area-based variance bands across F&B, Retail, and Office. The applicable lower and upper variance percentages depend on the Demand Carpet Area band. Supply Carpet Area within the applicable variance limits receives Match Score = 1; outside the limits receives Match Score = 0. The F&B V1 Reference fixed ±10% tolerance and 0.8 partial Match Score are not used in the latest V2 logic.  

Latest Live-Sheet Weight:  
F&B mandatory-field total = 75%. With 8 mandatory fields, the effective Carpet Area weight = 75% ÷ 8 = 9.375% ≈ 9.38%.  

Technical / Backend Confirmation – Sep 22, 2026:  
The refreshed V2 Dev DB confirms that Demand carpetArea, carpetAreaRange.min, and carpetAreaRange.max are equivalent whenever populated. Supply uses single numeric carpetArea. Sathish confirmed carpetArea as the primary Demand Carpet Area input for V2 relevance.  

Remaining Implementation Point:  
Fallback handling should be retained if the primary Demand carpetArea is unavailable. The exact fallback field/order will be finalized after reviewing the migrated V2 data.  

##### Floor Preference*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Floor Preference* | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Floor |

**Comments:**

V1 Reference:  

Floor represents the physical placement of the store within the Supply. When Store Type is specified, Floor is evaluated together with Store Type using the V1 Reference Store-Type-specific Floor matching rules. When Store Type is not specified, Floor is evaluated independently using exact Floor matching.  

Earlier V2 Discussion:  

The latest live sheet proposed Floor as a mandatory 1 / 0 outcome and continued to associate Floor evaluation with Store Type. Initial business clarification indicated that the V1 Store Type dependency would continue in V2.  

Latest V2 Decision:  

Floor continues to be evaluated together with Store Type, but the earlier V1 Store Type outcomes will not continue as-is. The V2 Floor–Store Type logic is based on High Street and Mall.  

- Ground + High Street: Supply Ground or Upper Ground → 1; all other Supply Floors → 0
- Ground + Mall: Supply Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor or Above 3rd Floor → 1; Basement → 0
- Any Floor: Can match across all available Supply Floors; where Store Type is specified, Store Type must still be considered during matching.

**Match Score Interpretation:**

V1 Reference:  

Floor Match Score depends on whether Store Type is specified.  

When Store Type = High Street:  

1 → Demand Ground + Supply Ground; Demand Any + Supply Any; or a specific Demand Floor exactly matches Supply Floor.  
0 → Supply Floor does not satisfy the applicable High Street Floor condition.  

When Store Type = Mall:  

1 → Demand Ground + Supply Ground; Demand Any + Supply Any; or a specified upper Demand Floor is satisfied by Supply Ground, Upper Ground, or the same specified Floor.  
0 → Supply Floor does not satisfy the applicable Mall Floor condition.  

When Store Type is not specified:  

1 → Supply Floor satisfies the Demand Floor condition.  
0 → Supply Floor does not satisfy the Demand Floor condition.  

Latest V2:  

Demand Floor = Ground + Store Type = High Street  

1 → Supply Floor = Ground or Upper Ground  
0 → All other Supply Floors  

Demand Floor = Ground + Store Type = Mall  

1 → Supply Floor = Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor, or Above 3rd Floor  
0 → Supply Floor = Basement  

Demand Floor = Any  

1 → Any available Supply Floor can satisfy the Floor requirement.  
Where Store Type is specified, Store Type must still be considered separately during matching.  

**Examples:**

V1 Reference:  

Example 1 – High Street, Ground Floor match  
Demand: Store Type = High Street, Floor = Ground  
Supply: Floor = Ground  
→ Match Score = 1  

Example 2 – High Street, Floor mismatch  
Demand: Store Type = High Street, Floor = Ground  
Supply: Floor = 1st Floor  
→ Match Score = 0  

Example 3 – Mall, specified upper Floor  
Demand: Store Type = Mall, Floor = 1st Floor  
Supply: Floor = Upper Ground  
→ Match Score = 1  

Example 4 – Store Type not specified, exact Floor match  
Demand: Store Type = Not Specified, Floor = Ground  
Supply: Floor = Ground  
→ Match Score = 1  

Latest V2:  

Example 1 – Ground + High Street / Ground Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = Ground  
→ Floor Match Score = 1  

Example 2 – Ground + High Street / Upper Ground Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = Upper Ground  
→ Floor Match Score = 1  

Example 3 – Ground + High Street / Higher Floor Supply  
Demand: Floor = Ground, Store Type = High Street  
Supply: Floor = 1st Floor  
→ Floor Match Score = 0  

Example 4 – Ground + Mall / Ground Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = Ground  
→ Floor Match Score = 1  

Example 5 – Ground + Mall / Higher Floor Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = 2nd Floor  
→ Floor Match Score = 1  

Example 6 – Ground + Mall / Basement Supply  
Demand: Floor = Ground, Store Type = Mall  
Supply: Floor = Basement  
→ Floor Match Score = 0  

Example 7 – Any Floor  
Demand: Floor = Any, Store Type = High Street  
Supply: Floor = 2nd Floor  
→ Floor requirement is satisfied (Floor Match Score = 1); Store Type must still be evaluated according to the applicable Store Type logic.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Floor continues to be evaluated together with Store Type, but the earlier V1 Reference Store Type outcomes will not continue as-is. The confirmed V2 Floor–Store Type logic is based on High Street and Mall:  

- Ground + High Street: Supply Ground or Upper Ground → 1; all other Supply Floors → 0

- Ground + Mall: Supply Ground, Upper Ground, 1st Floor, 2nd Floor, 3rd Floor or Above 3rd Floor → 1; Basement → 0

- Any Floor: can match across all available Supply Floors; where Store Type is selected, Store Type must still be considered during matching.

Technical / Backend:  
V2 provides Demand Floor through floorPreference and Supply Floor through floor. These fields can be used for the V2 Floor Match Score implementation together with the applicable Demand Store Type. No additional Floor-specific backend clarification is currently required.  

Latest Live-Sheet Weight:  
Mandatory-field total remains 75% across 8 mandatory fields; effective Floor weight = 75% ÷ 8 = 9.375% ≈ 9.38%.  

##### Clear ceiling height
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Clear ceiling height | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Ceiling height in feet |

**Comments:**

V1 Reference:  
Supply Ceiling Height exactly equal to the Demand Ceiling Height receives 1.  
Supply Ceiling Height greater than Demand receives 0.8.  
Supply Ceiling Height below Demand receives 0.  

Earlier V2 Discussion:  
The Ceiling Height logic was proposed to introduce a +30% upper variance from the Demand Ceiling Height. An earlier April 23 proposal considered 1 / 0.9 / 0 scoring, which was subsequently revised during further business discussion.  

Latest V2 Decision:  
Ceiling Height now uses both lower-side tolerance and +30% upper variance.  

Supply below Demand but within the permitted lower variance → 0.8  
Supply equal to Demand or up to 30% above Demand → 1  
Supply more than 30% above Demand → 0.5  
Supply below the applicable permitted lower-side variance → 0  

The permitted lower variance depends on the Demand Ceiling Height:  

Demand ≤14 ft → up to 1 ft lower  
Demand 15–20 ft → up to 2 ft lower  
Demand ≥21 ft → up to 3 ft lower  

This latest decision supersedes the earlier V1 Reference and proposed V2 Ceiling Height scoring interpretations.  

**Match Score Interpretation:**

V1 Reference:  

1 → Supply Ceiling Height exactly equals the Demand Ceiling Height.  

0.8 → Supply Ceiling Height is greater than the Demand Ceiling Height.  

0 → Supply Ceiling Height is lower than the Demand Ceiling Height.  

Latest V2:  

0.8 → Supply Ceiling Height is below Demand but within the permitted lower-side variance:  

- Demand ≤14 ft → up to 1 ft lower

- Demand 15–20 ft → up to 2 ft lower

- Demand ≥21 ft → up to 3 ft lower

1 → Supply Ceiling Height is equal to Demand or up to 30% above Demand.  

0.5 → Supply Ceiling Height is more than 30% above Demand.  

0 → Supply Ceiling Height is below the applicable permitted lower-side variance.  

**Examples:**

V1 Reference Examples  

Example 1 – Exact match  
Demand: 12 ft  
Supply: 12 ft  
→ Match Score = 1  

Example 2 – Supply above Demand  
Demand: 12 ft  
Supply: 14 ft  
→ Match Score = 0.8  

Example 3 – Supply below Demand  
Demand: 12 ft  
Supply: 10 ft  
→ Match Score = 0  

Latest V2 Examples  

Example 1 – 1 ft lower variance  

Demand: 14 ft  
Permitted lower variance: 1 ft  

Supply: 13 ft → 0.8  
Supply: 14 ft → 1  
Supply: 12 ft → 0  

Example 2 – 2 ft lower variance  

Demand: 18 ft  
Permitted lower variance: 2 ft  

Supply: 16 ft → 0.8  
Supply: 17 ft → 0.8  
Supply: 18 ft → 1  
Supply: 15 ft → 0  
Example 3 – 3 ft lower variance  

Demand: 25 ft  
Permitted lower variance: 3 ft  

Supply: 22–24 ft → 0.8  
Supply: 25 ft → 1  
Supply: 21 ft → 0  

Example 4 – +30% upper variance  

Demand: 10 ft  
30% upper variance = 3 ft  
Upper full-match limit = 13 ft  

Supply: 10–13 ft → 1  
Supply: >13 ft → 0.5  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Ceiling Height uses Demand-dependent lower-side tolerance together with a +30% upper variance:  

- Demand ≤14 ft → up to 1 ft lower receives 0.8

- Demand 15–20 ft → up to 2 ft lower receives 0.8

- Demand ≥21 ft → up to 3 ft lower receives 0.8

- Supply below the applicable permitted lower-side variance → 0

- Supply equal to Demand or up to 30% above Demand → 1

- Supply more than 30% above Demand → 0.5

This supersedes the F&B V1 Reference and earlier proposed/interim V2 Ceiling Height scoring interpretations.  

Technical / Backend:  
V2 provides Demand Ceiling Height through ceilingHeightMinFt and Supply Ceiling Height through ceilingHeightFt. These numeric values support the confirmed V2 Ceiling Height Match Score logic. No additional Ceiling Height-specific backend clarification is currently required.  

Latest Live-Sheet Weight:  
Mandatory-field total remains 75% across 8 mandatory fields; effective Ceiling Height weight = 75% ÷ 8 = 9.375% ≈ 9.38%.  

##### Store type*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Store type* | M | (merged above) | Latest live sheet: 9.38% per mandatory field (75% ÷ 8 = 9.375% ≈ 9.38%) | Store type |

**Comments:**

V1 Reference:  
Store Type is evaluated using exact matching. Demand and Supply Store Types must match for a full match; otherwise, the Store Type Match Score is 0. Store Type is a mandatory relevance field for F&B.  

Earlier V2 Discussion:  
The earlier PR supported multiple Demand Store Types, while the relevance logic evaluated a single Store Type. The latest PR has changed Store Type to single-select for both Demand and Supply.  

Latest V2 Decision:  

Store Type continues with binary exact matching:  

- Demand Store Type = Supply Store Type → 1
- Demand Store Type ≠ Supply Store Type → 0

Demand Store Type = Any is also confirmed:  

- Demand Any + Supply Highstreet → 1
- Demand Any + Supply Mall → 1

Store Type is a confirmed Demand input field and is Mandatory for F&B relevance. The Store Type–Floor dependency remains applicable and follows the latest confirmed V2 Floor–Store Type logic.  

F&B Live-Sheet Classification Note:  
In the latest F&B live relevance sheet, the Store Type M/O cell still shows O; however, Store Type is positioned within the Mandatory-field group and carries the 75% mandatory-group weight. With 8 Mandatory relevance fields, the effective Store Type weight is 75% ÷ 8 = 9.375% ≈ 9.38%. Therefore, the O is treated as a missed M/O cell update, and Store Type is treated as Mandatory for F&B in the V2 evolving logic.  

Technical / Backend Confirmation – Sep 22, 2026:  
Although Store Type is single-select in the latest PR, the V2 backend will continue storing Store Type as a list, with one Store Type value expected in the list. The existing wrapper approach can continue, converting the one-value Store Type list to the scalar Store Type value required by the relevance engine.  

Unexpected legacy/multi-value Store Type records, if still present after migration, will be reviewed separately. No multi-value Store Type scoring rule is currently defined.  

Data Alignment Note:  
Himanshu confirmed that legacy V1 Store Type data will be updated to align with the finalized V2 Store Type fields/values during data upload. Therefore, legacy V1 values outside the finalized V2 values do not require separate relevance-side mapping.  

**Match Score Interpretation:**

Approved V1:  

Demand Store Type = Supply Store Type → 1  
Demand Store Type ≠ Supply Store Type → 0  
Demand Store Type not specified → excluded from scoring  

Latest V2 Decision:  

Demand Store Type = Supply Store Type → 1  
Demand Store Type ≠ Supply Store Type → 0  
Demand Store Type = Any + Supply Store Type = Highstreet or Mall → 1  
Store Type is a confirmed input field and Mandatory in the relevance configuration.  
Store Type–Floor dependency follows the latest confirmed V2 Floor–Store Type logic.  

**Examples:**

V1 Reference Examples  

Example 1 – Exact High Street match  
Demand: Store Type = Highstreet  
Supply: Store Type = Highstreet  
→ Match Score = 1  

Example 2 – Exact Mall match  
Demand: Store Type = Mall  
Supply: Store Type = Mall  
→ Match Score = 1  

Example 3 – Store Type mismatch  
Demand: Store Type = Highstreet  
Supply: Store Type = Mall  
→ Match Score = 0  

Example 4 – Store Type not specified  
Demand: Store Type = Not Specified  
→ Store Type is excluded from scoring  

Latest V2 Examples  

Example 1 – Exact High Street match  
Demand: Store Type = Highstreet  
Supply: Store Type = Highstreet  
→ Store Type Match Score = 1  

Example 2 – Exact Mall match  
Demand: Store Type = Mall  
Supply: Store Type = Mall  
→ Store Type Match Score = 1  

Example 3 – Store Type mismatch  
Demand: Store Type = Highstreet  
Supply: Store Type = Mall  
→ Store Type Match Score = 0  

Example 4 – Demand Store Type = Any  

Demand: Store Type = Any  
Supply: Store Type = Highstreet  
→ Store Type Match Score = 1  

Demand: Store Type = Any  
Supply: Store Type = Mall  
→ Store Type Match Score = 1  

Floor Dependency Note:  
Where Floor and Store Type are evaluated together, the applicable confirmed V2 Floor–Store Type logic must also be applied.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
Store Type retains binary exact matching in V2: same Store Type → 1; different Store Type → 0. Demand Store Type = Any matches Supply Highstreet or Mall with Match Score = 1.  

The latest PR defines Store Type as single-select for both Demand and Supply. Store Type is a Mandatory relevance field for F&B, and the Store Type–Floor dependency continues using the latest confirmed V2 Floor–Store Type logic.  

Technical / Backend Confirmation – Sep 22, 2026:  
V2 will continue storing Store Type as a list, with one value expected. The existing wrapper approach can continue converting the one-value list to the scalar Store Type value required by the relevance engine. Unexpected legacy/multi-value records, if still present after migration, will be reviewed separately.  

Pending Clarification: None currently identified for Store Type.  

##### Fitouts required
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Fitouts required | O | 5% | Latest live sheet: 5% | Fitouts available |

**Comments:**

V1 Reference: F&B Fitouts used binary requirement-versus-availability matching, with Fitouts evaluated based on whether the Demand required Fitouts and whether Fitouts were available on the Supply. If the Demand did not specify a Fitouts requirement, the field was excluded from relevance scoring.  

Latest V2 Decision: F&B will use Fitout Required Yes/No on Demand and Fitout Available Yes/No on Supply, with the confirmed Yes/No combination-specific Match Score Interpretation.  

For F&B, Demand Fitouts Required = No means the Demand specifically requires a Supply without Fitouts; it does not mean that the Demand has no Fitouts preference. Therefore, Demand No + Supply No = 1 and Demand No + Supply Yes = 0.  

A missing/not-provided Fitouts value is different from an explicit No. If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. If Demand Fitouts is provided but Supply Fitouts is missing/not provided, also exclude Fitouts from the relevance calculation.  

**Match Score Interpretation:**

V1 Reference:  

1 → Demand Fitout Required = Yes AND Supply Fitout Available = Yes  

0 → Demand Fitout Required = Yes AND Supply Fitout Available = No  

If Demand Fitout Required is not specified, the field is excluded from relevance scoring.  

Latest V2:  

1 →  

Demand Fitout Required = Yes AND Supply Fitout Available = Yes  
Demand Fitout Required = No AND Supply Fitout Available = No  

0 →  

Demand Fitout Required = Yes AND Supply Fitout Available = No  
Demand Fitout Required = No AND Supply Fitout Available = Yes  

Missing / Not Provided:  
If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. If Demand Fitouts is provided but Supply Fitouts is missing/not provided, exclude Fitouts from the relevance calculation.  

**Examples:**

V1 Reference  

Example 1: Demand Yes + Supply Yes → 1  
Example 2: Demand Yes + Supply No → 0  
Example 3: Demand not specified → Fitouts excluded from relevance scoring  

Latest V2  

Example 1: Demand Yes + Supply Yes → 1  
Example 2: Demand Yes + Supply No → 0  
Example 3: Demand No + Supply Yes → 0  
Example 4: Demand No + Supply No → 1  
Example 5 – Missing / Not Provided:  
Demand Fitouts missing/not provided → exclude Fitouts from the relevance calculation.  
Demand Fitouts provided + Supply Fitouts missing/not provided → exclude Fitouts from the relevance calculation.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
Latest Business Decision:  
F&B Fitouts uses Fitout Required Yes/No on Demand and Fitout Available Yes/No on Supply:  
Demand Yes + Supply Yes → 1  
Demand Yes + Supply No → 0  
Demand No + Supply Yes → 0  
Demand No + Supply No → 1  
Demand Fitouts Required = No is an explicit requirement for a Supply without Fitouts; it is not equivalent to missing/not provided.  

Missing / Not Provided – Sep 18, 2026:  
If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation. If Demand Fitouts is provided but Supply Fitouts is missing/not provided, also exclude Fitouts from the relevance calculation.  

Technical / Backend Status – Sep 22, 2026:  
The reviewed V2 data contains categorical fitOutStatus and Boolean fitoutsRequired / fitoutsAvailable. fitOutStatus is populated, while the Boolean fields are largely unpopulated. The applicable Fitouts representation will be revalidated against the migrated V1→V2 data before Stage-1 implementation.  

Weight:  
Fitouts remains an Optional relevance field with 5% weight in the latest F&B live sheet.  

##### Possession
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Possession | O | 5% | Latest live sheet: 5% | Possession |

**Comments:**

V1 Reference:  
Possession used an urgency-based comparison between the Demand's required possession timeline and the Supply's availability timeline. Supply available at the required time or earlier received a full match, while progressively later availability received a lower Match Score.  

Latest V2 Decision:  
The same urgency-based approach continues using five standardized Possession buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply available at the same time or earlier than required receives a full match; later availability is scored according to how many buckets later it falls.  

V2 Representation: Business terminology is standardized as Possession on both Demand and Supply. The reviewed V2 backend currently represents Possession using propertyAvailableFrom on both sides.  

Technical / Backend Confirmation – Sep 22, 2026: “Possession” is the standardized business/UI terminology, while the existing V2 backend field propertyAvailableFrom will continue to be used on both Demand and Supply. No backend field rename or additional MongoDB wrapper change is required solely for the terminology standardization.  

**Match Score Interpretation:**

V1 Reference:  
Possession was evaluated using the urgency order:  
Immediate → Within 3 months → Within 6 months → Within 9 months  

-Supply available at the same time or earlier than Demand → 1  

- Supply available 1 bucket later → 0.8
- Supply available 2 buckets later → 0.5
- Supply available more than 2 buckets later → 0

Latest V2 Decision:  
The same urgency-based scoring continues using five standardized Possession buckets:  
Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months  

- Supply available at the same time or earlier than Demand → 1
- Supply available 1 bucket later → 0.8
- Supply available 2 buckets later → 0.5
- Supply available more than 2 buckets later → 0

**Examples:**

V1 Reference / Confirmed V2 Examples:  

Example 1:  
Demand: Immediate  
Supply: Immediate  
→ Match Score = 1  

Example 2:  
Demand: Within 3 months  
Supply: Immediate  
→ Match Score = 1  

Example 3:  
Demand: Immediate  
Supply: Within 3 months  
→ Match Score = 0.8  

Example 4:  
Demand: Immediate  
Supply: Within 6 months  
→ Match Score = 0.5  

Example 5:  
Demand: Immediate  
Supply: Within 9 months  
→ Match Score = 0  

Example 6 – Latest business-confirmed scenario:  
Demand: Within 9 months  
Supply: Immediate / Within 3 months / Within 6 months / Within 9 months  
→ Match Score = 1  

Demand: Within 9 months  
Supply: After 9 months  
→ Match Score = 0.8  

**Latest Decision / Pending Clarification:**

Latest Decision:  
F&B V2 Possession will use five standardized buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months.  

The urgency-based Match Score logic is confirmed: Supply available in the same bucket or earlier → 1; 1 bucket later → 0.8; 2 buckets later → 0.5; more than 2 buckets later → 0.  

Possession is compulsory during both Demand and Supply creation. For F&B relevance scoring, the latest live sheet defines Possession as an Optional field with 5% weight.  

Possession is compulsory during both Demand and Supply creation. For F&B relevance scoring, Possession is confirmed as an Optional field with 5% weight. The Optional relevance classification and compulsory data-entry requirement are therefore treated separately. Since Possession is compulsory during creation, no separate missing-value Match Score treatment is required for the intended V2 flow.  

Technical / Backend Confirmation – Sep 22, 2026: The V2 backend will continue using propertyAvailableFrom on both Demand and Supply, while Possession remains the standardized business/UI terminology. No backend field rename or additional MongoDB wrapper change is required solely for this terminology standardization.  

##### Frontage in feet
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Frontage in feet | O | 5% | Latest live sheet: 5% | Frontage in feet |

**Comments:**

V1 Reference:  
F&B Frontage compared the Supply's available frontage with the Demand's minimum required frontage. An exact match received 1, while a non-exact or unavailable Supply Frontage received 0.5. If the Demand did not specify Frontage, the field was excluded from relevance scoring.  

Latest V2 Decision:  
Frontage changes to a minimum-requirement-based approach. Supply Frontage equal to or greater than the Demand requirement receives 1, Supply Frontage up to 15% below the Demand requirement receives 0.8, and Supply Frontage more than 15% below the Demand requirement receives 0.  

If Demand Frontage is not specified, Frontage is excluded from the applicable relevance calculation. If Demand Frontage is specified but Supply Frontage is missing, Match Score = 0.  

**Match Score Interpretation:**

V1 Reference:  

- Demand specifies Frontage and Supply Frontage exactly matches Demand → 1
- Demand specifies Frontage and Supply Frontage does not exactly match or is unavailable → 0.5
- Demand does not specify Frontage → Field excluded from relevance scoring

Latest V2 Decision:  

- Supply Frontage equal to or greater than Demand requirement → 1
- Supply Frontage up to 15% below Demand requirement → 0.8
- Supply Frontage more than 15% below Demand requirement → 0
- Demand specifies Frontage but Supply Frontage is missing/not available → 0
- Demand does not specify Frontage → Field excluded from the applicable relevance calculation

**Examples:**

V1 Reference Examples:  

Example 1 – Exact Match:  
Demand: 20 ft  
Supply: 20 ft  
→ Match Score = 1  

Example 2 – Non-Exact Match:  
Demand: 20 ft  
Supply: 25 ft  
→ Match Score = 0.5  

Example 3 – Below Demand:  
Demand: 20 ft  
Supply: 15 ft  
→ Match Score = 0.5  

Example 4 – Supply Missing:  
Demand: 20 ft  
Supply: Missing  
→ Match Score = 0.5  

Example 5 – Demand Not Specified:  
Demand: Not specified  
→ Frontage excluded from relevance scoring.  

Latest V2 Examples:  

Example 1 – Supply Meets Demand:  
Demand: 20 ft  
Supply: 20 ft  
→ Match Score = 1  

Example 2 – Supply Exceeds Demand:  
Demand: 20 ft  
Supply: 25 ft  
→ Match Score = 1  

Example 3 – 15% Below Demand:  
Demand: 20 ft  
Supply: 17 ft  
→ Match Score = 0.8  

Example 4 – More Than 15% Below Demand:  
Demand: 20 ft  
Supply: 16 ft  
→ Match Score = 0  

Example 5 – Supply Missing:  
Demand: 20 ft  
Supply: Missing  
→ Match Score = 0  

Example 6 – Demand Not Specified:  
Demand: Not specified  
→ Frontage excluded from relevance scoring.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
V2 Frontage is treated as a minimum requirement:  

- Supply Frontage ≥ Demand requirement → 1
- Supply Frontage up to 15% below Demand requirement → 0.8
- Supply Frontage more than 15% below Demand requirement → 0

If Demand Frontage is not specified, Frontage is excluded from the applicable relevance calculation. If Demand Frontage is specified but Supply Frontage is missing/not available, Match Score = 0.  

Technical / Backend:  
No immediate backend clarification is required for the confirmed Frontage scoring logic.  

Weight:  
Frontage remains an Optional relevance field with 5% weight in the latest F&B live sheet.  

##### Cooking Type
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Cooking Type | O | 5% | Latest live sheet: 5% | Cooking Type |

**Comments:**

V1 Reference: F&B Cooking Type relevance was evaluated based on whether the required Supply Gas Connection was available. If the Demand specified Cooking Type, required Gas Connection available → Match Score = 1; required Gas Connection unavailable → Match Score = 0. If Demand Cooking Type was not specified, the field was excluded from relevance scoring.  

Latest V2 Decision: Cooking Type will be evaluated by directly comparing Demand Cooking Type with Supply Cooking Type, replacing the V1 Reference Gas Connection availability approach. Demand values are Electric, Gas, or Either; Supply values are Electric or Gas. Electric Demand matches Electric or Gas Supply; Gas Demand matches only Gas Supply; Either Demand matches Electric or Gas Supply.  

Missing-Value Handling – Confirmed Sep 18, 2026:  
If Demand Cooking Type is missing/not provided, exclude Cooking Type from the applicable relevance calculation. If Demand Cooking Type is specified but Supply Cooking Type is missing/not provided, also exclude Cooking Type from the applicable relevance calculation. When both Demand and Supply Cooking Type are specified, apply the confirmed V2 Cooking Type Match Score logic.  

Technical / Backend Confirmation – Sep 22, 2026:  
Although Cooking Type is single-select in the latest PR, V2 intentionally stores cookingTypes as a list for future flexibility. Under the current requirement, one Cooking Type value is expected in the list, and the existing wrapper can convert the one-value list to the corresponding scalar value before relevance matching.  

Demand also contains gasLineRequired; however, no relevance role for gasLineRequired is currently defined  

**Match Score Interpretation:**

V1 Reference:  
If Demand specifies Cooking Type:  

Required Supply Gas Connection available → 1  
Required Supply Gas Connection not available → 0  

If Demand does not specify Cooking Type → Cooking Type excluded from relevance scoring  

Latest V2 Decision:  

Demand Electric → Supply Electric = 1  
Demand Electric → Supply Gas = 1  
Demand Gas → Supply Gas = 1  
Demand Gas → Supply Electric = 0  
Demand Either → Supply Electric or Gas = 1  

Business Rationale: For Demand Electric → Supply Gas, Himanshu confirmed Match Score = 1 because a Supply with Gas is considered suitable for an Electric Demand, based on the business assumption that Electric would also be available where Gas is available.  

Missing-value handling:  

Demand Cooking Type not specified → Cooking Type excluded from relevance scoring.  
Demand Cooking Type specified + Supply Cooking Type missing/not provided → Cooking Type excluded from the applicable relevance calculation.  

**Examples:**

V1 Reference Examples:  

Example 1:  
Demand Cooking Type specified  
Supply: Required Gas Connection available  
→ Match Score = 1  

Example 2:  
Demand Cooking Type specified  
Supply: Required Gas Connection not available  
→ Match Score = 0  

Example 3:  
Demand Cooking Type not specified  
→ Cooking Type excluded from relevance scoring  

Latest V2 Examples:  

Example 1:  
Demand: Electric  
Supply: Electric  
→ Match Score = 1  

Example 2:  
Demand: Electric  
Supply: Gas  
→ Match Score = 1  

Reason: Supply with Gas is considered suitable for an Electric Demand because Electric is assumed to also be available.  

Example 3:  
Demand: Gas  
Supply: Gas  
→ Match Score = 1  

Example 4:  
Demand: Gas  
Supply: Electric  
→ Match Score = 0  

Example 5:  
Demand: Either  
Supply: Electric or Gas  
→ Match Score = 1  

Example 6:  
Demand Cooking Type not specified  
→ Cooking Type excluded from relevance scoring  

Example 7 – Missing Supply Value:  
Demand: Gas  
Supply: Cooking Type not provided  
→ Cooking Type excluded from the applicable relevance calculation.  

**Latest Decision / Pending Clarification:**

Latest Decision:  
F&B V2 Cooking Type uses direct Demand–Supply Cooking Type matching, replacing the V1 Reference Gas Connection availability approach.  
Confirmed scoring: Electric → Electric = 1; Electric → Gas = 1; Gas → Gas = 1; Gas → Electric = 0; Either → Electric or Gas = 1.  
Cooking Type remains Optional with 5% weight.  

Missing-Value Handling – Confirmed Sep 18, 2026:  
Demand Cooking Type missing/not provided → exclude Cooking Type from the applicable relevance calculation.  
Demand specified + Supply Cooking Type missing/not provided → exclude Cooking Type from the applicable relevance calculation.  

Technical / Backend Confirmation – Sep 22, 2026:  
V2 intentionally stores cookingTypes as a list, with one value expected under the current single-select requirement. The existing wrapper converts the one-value list to a scalar before relevance matching.gasLineRequired currently has no defined role in the Cooking Type relevance logic.  

Post-Migration Data Review:  
Any unexpected legacy multi-value cookingTypes records remaining after migration will be reviewed separately before deciding their relevance treatment. No multi-value scoring rule is currently defined.  

Pending Clarification: None currently identified for the confirmed Cooking Type relevance logic.  

##### Non veg served
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Non veg served | O | 5% | Latest live sheet: 5% | Non-veg allowed |

**Comments:**

V1 Reference: Non-Veg Served was an Optional F&B relevance field. If Demand Non-Veg Served = Yes, Supply allowing Non-Veg received Match Score = 1 and Supply not allowing Non-Veg received Match Score = 0. If Demand did not specify the field, it was excluded from relevance scoring.  

Latest V2 Decision: Demand Non-Veg Served and Supply Non-Veg Allowed use Yes/No values. The confirmed matching logic is:  

Demand Non-Veg Served = Yes + Supply Non-Veg Allowed = Yes → 1  
Demand Non-Veg Served = Yes + Supply Non-Veg Allowed = No → 0  
Demand Non-Veg Served = No + Supply Non-Veg Allowed = Yes → 1  
Demand Non-Veg Served = No + Supply Non-Veg Allowed = No → 1  
Demand specified + Supply Non-Veg Allowed missing/not provided → 0.8  
Demand Non-Veg Served not specified → field excluded from relevance scoring  

V2 Data / Technical Observation:  
The latest PR represents Demand Non-Veg Served and Supply Non-Veg Allowed as Yes/No, while V2 stores nonVegServed and nonVegAllowed as Boolean fields. In the reviewed V2 data, only True and missing/null values were observed; no explicit False values were found.  

Technical / Backend Clarification – Sep 22, 2026:  
The distinction between explicit False and missing/null was raised with Sathish. Sathish advised reassessing the data after the V1→V2 migration and identifying any remaining data/backend requirements at that stage. Until then, True, False, and missing/null must remain distinct and missing/null must not be defaulted to False.  

**Match Score Interpretation:**

V1 Reference:  
If Demand Non-Veg Served = Yes:  

Supply Non-Veg Allowed = Yes → 1  
Supply Non-Veg Allowed = No → 0  

If Demand Non-Veg Served is not specified → Non-Veg field excluded from relevance scoring  

Latest V2 Decision:  

Demand Non-Veg Served = Yes + Supply Non-Veg Allowed = Yes → 1  
Demand Non-Veg Served = Yes + Supply Non-Veg Allowed = No → 0  
Demand Non-Veg Served = No + Supply Non-Veg Allowed = Yes → 1  
Demand Non-Veg Served = No + Supply Non-Veg Allowed = No → 1  
Demand Non-Veg Served = Yes + Supply Non-Veg Allowed = Missing/Not Provided → 0.8  
Demand Non-Veg Served = No + Supply Non-Veg Allowed = Missing/Not Provided → 0.8  

If Demand Non-Veg Served is not specified → Non-Veg field excluded from relevance scoring.  

**Examples:**

V1 Reference Examples:  

Example 1:  
Demand: Non-Veg Served = Yes  
Supply: Non-Veg Allowed = Yes  
→ Match Score = 1  

Example 2:  
Demand: Non-Veg Served = Yes  
Supply: Non-Veg Allowed = No  
→ Match Score = 0  

Example 3:  
Demand: Non-Veg Served = Not Specified  
→ Field excluded from relevance scoring  

Latest V2 Examples:  

Example 1:  
Demand: Non-Veg Served = Yes  
Supply: Non-Veg Allowed = Yes  
→ Match Score = 1  

Example 2:  
Demand: Non-Veg Served = Yes  
Supply: Non-Veg Allowed = No  
→ Match Score = 0  

Example 3:  
Demand: Non-Veg Served = No  
Supply: Non-Veg Allowed = Yes  
→ Match Score = 1  

Example 4:  
Demand: Non-Veg Served = No  
Supply: Non-Veg Allowed = No  
→ Match Score = 1  

Example 5 — Supply Value Missing:  
Demand: Non-Veg Served = Yes  
Supply: Non-Veg Allowed = Missing/Not Provided  
→ Match Score = 0.8  

Example 6 — Supply Value Missing:  
Demand: Non-Veg Served = No  
Supply: Non-Veg Allowed = Missing/Not Provided  
→ Match Score = 0.8  

Example 7 — Demand Not Specified:  
Demand: Non-Veg Served = Not Specified  
→ Field excluded from relevance scoring  

**Latest Decision / Pending Clarification:**

Latest Decision:  
F&B V2 Non-Veg relevance will use Demand Non-Veg Served (Yes/No) against Supply Non-Veg Allowed (Yes/No). Confirmed Match Score logic:  

- Demand Yes + Supply Yes → 1
- Demand Yes + Supply No → 0
- Demand No + Supply Yes → 1
- Demand No + Supply No → 1
- Demand specified + Supply missing/not provided → 0.8
- Demand not specified → field excluded from relevance scoring

The earlier Veg / Non-Veg / Any discussion is superseded by the latest PR Yes/No representation. Non-Veg Served remains Optional with 5% weight.  

V2 Data Observation:  
The latest PR uses Yes/No, while V2 stores Demand nonVegServed and Supply nonVegAllowed as Boolean fields. In the reviewed V2 data, only True and missing/null values were observed; no explicit False values were found.  

Technical / Backend Clarification – Sep 22, 2026:  
The distinction between explicit False and missing/null was raised with Sathish. Sathish advised reassessing the data after the V1→V2 migration and identifying any remaining data/backend requirements at that stage.  

Post-Migration Verification:  
Verify whether explicit No is represented as False for both Demand nonVegServed and Supply nonVegAllowed, and whether missing/null represents unavailable/not-specified data rather than No. True, False, and missing/null must remain distinct because they can produce different relevance outcomes.  

##### Other interested location
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Other interested location | N/A – Merged with Location | No separate weight – merged with Location | No separate weight – included within Location | Location |

**Comments:**

V1 Reference: Other Interested Location was not a separate F&B relevance field/weight.  

Latest V2 Decision: Other Interested Location is merged with Primary Location for relevance evaluation and is no longer treated as a separate weighted relevance field. A Supply matched through an Other Interested Location will be evaluated using the same Location hierarchy/distance-based Match Score logic as a Primary Location match. An OIL match does not receive the earlier separate 0.9 treatment or any other penalty simply because it comes from an additional location.  

Evaluate the Supply Location against the Demand Primary Location and each Other Interested Location using the same Location logic, and use the highest resulting score as the single final Location Match Score.  

**Match Score Interpretation:**

V1 Reference: Not applicable – Other Interested Location was not part of the F&B V1 Reference relevance logic.  

Earlier V2 Discussion: OIL matching the Location criteria → 0.9.  

Latest V2 Decision: Other Interested Location has no separate Match Score. Each OIL is evaluated against the Supply Location using the same finalized V2 Location Match Score logic as Primary Location:  

- Same Micro-location → 1
- Different Micro-location but same Area → 1
- Different Area but same City → distance-based Location Match Score
- Different City → 0

The earlier separate 0.9 OIL Match Score is superseded.  

Evaluate Primary Location and each OIL using the above Location logic and use the highest resulting score as the single final Location Match Score.  

**Examples:**

V1 Reference: Not applicable – Other Interested Location was not part of the F&B V1 Reference relevance logic.  

Earlier V2 Example:  
OIL matches Location criteria → 0.9  
(Superseded by latest V2 decision)  

Latest V2 Examples:  

Example 1 – OIL gives the better match:  
Primary Location Match Score = 0.5  
OIL Match Score = 1.0  
→ Final Location Match Score = 1.0  

Example 2 – Primary Location gives the better match:  
Primary Location Match Score = 1.0  
OIL Match Score = 0.7  
→ Final Location Match Score = 1.0  

Example 3 – Multiple OILs:  
Primary Location Match Score = 0.5  
OIL 1 Match Score = 0.7  
OIL 2 Match Score = 1.0  
→ Final Location Match Score = 1.0  

Example 4 – All locations are in a different City:  
Primary Location Match Score = 0  
OIL Match Score(s) = 0  
→ Final Location Match Score = 0  

**Latest Decision / Pending Clarification:**

Latest Decision: Other Interested Location is merged with Primary Location for relevance evaluation and will no longer have a separate weight, separate Match Score, or separate impact on the final relevance percentage. The earlier proposed 0.9 OIL Match Score is superseded.  

Primary Location and each Other Interested Location have equal priority. The Supply Location is evaluated against each using the same finalized applicable Location Match Score logic, and the highest resulting Match Score is used as the single final Location Match Score.  

Technical / Backend Confirmation – Sep 22, 2026: Primary Location and Other Interested Locations remain separate in the V2 backend (locality and otherInterestedLocations[]). The wrapper can retrieve them separately and expose them in a consistent structure for relevance processing. No separate technical clarification remains for Other Interested Location.  

Location Dependency: The scoring applied to Primary Location and OIL will follow the final decision under the Location field. The Location levels/fields and distance-based component remain pending there.  

**Implementation reference 1 (unlabelled column):**

    Confirmed Current Wrapper / Relevance-Engine Implementation – Sep 22, 2026: 
    If V2 keeps Primary Location and OIL separately:
    
    # Example V2 Demand
    demand = {
        "locality": "Andheri",
        "otherInterestedLocations": ["Bandra", "Powai"]
    }
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    primary_location = demand.get("locality")
    oil_locations = demand.get("otherInterestedLocations") or []
    
    demand_locations = []
    
    if primary_location:
        demand_locations.append(primary_location)
    
    demand_locations.extend(oil_locations)
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    The wrapper therefore converts the separate inputs into one consistent collection for the Location matching function:
    
    Primary Location + OILs
            ↓
    ["Andheri", "Bandra", "Powai"]
    
    Then the relevance engine evaluates the Supply Location against the Primary Location and each Other Interested Location using the same finalized applicable Location Match Score logic:
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    For example:
    
    scores = [0.5, 0.7, 1.0]
    
    final_location_score = max(scores)
    
    # final_location_score = 1.0
    
    So conceptually:
    
    Wrapper
    Primary + OIL1 + OIL2
            ↓
    [Primary, OIL1, OIL2]
    
    Relevance Engine
            ↓
    score each using same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0
    
    Note: The Primary Location + Other Interested Location aggregation approach and use of the highest Match Score are confirmed. The specific scoring within location_match() will follow the final V2 Location decision, including the pending Location levels/fields and distance-based component.

**Implementation reference 2 (unlabelled column):**

    Future / Alternative Backend Reference – Not Current V2 Implementation:
    The current V2 backend keeps Primary Location and Other Interested Locations separately. The following is retained only as a reference in case the backend representation changes to a unified Location list in the future.
    
    If V2 does not keep Primary Location and OIL separately and instead already provides them as one unified list, for example:
    
    demand = {
        "locations": ["Andheri", "Bandra", "Powai"]
    }
    
    then the wrapper becomes simpler:
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    demand_locations = demand.get("locations") or []
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    There is no need for the wrapper to separately read Primary Location and otherInterestedLocations[] and combine them.
    
    The relevance engine can still use exactly the same approach:
    
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    Conceptually:
    
    V2 Backend
    [Primary, OIL1, OIL2]
            ↓
    Wrapper
    [Primary, OIL1, OIL2]
            ↓
    Relevance Engine
    score each using the same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0

**Relevance Scoring Framework & Eligibility Rules:**

All fields explicitly specified in the demand are considered in relevance scoring.  

For each such field, a match score is assigned according to the approved field-level business logic.  

- Exact matches receive full score.
- Partial matches receive reduced score where business logic allows.
- Non-matches receive zero score.

The final relevance score is computed as a weighted and normalized combination of the match scores across all demand-specified fields.  


#### Tab 4 — Managed_Space_V2_Relevance_Logi
**Title (R1):** Manged Office Demand & Supply Relevancy

##### Asset Class
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Asset Class | M | 100% | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field | Asset Class |

**Comments:**

V1 Reference: Managed Space Asset Class was treated as a strict eligibility field. Demand and Supply Asset Class should be equal; matching Asset Class → Match Score 1, different Asset Class → 0.  

Latest V2 Decision: Managed Space relevance is structured as Managed Space Demand ↔ Managed Space Centre. Asset Class remains a Mandatory relevance field, with no cross-Asset-Class matching intended between Office and Managed Space / Managed Office. The updated V2 database currently represents both Managed Space Demand and Supply consistently as assetClass = "managed-space".  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the different Managed Space-related business/PR/UI naming will use the common Managed Space backend representation for relevance. The current V2 database uses assetClass = "managed-space" on both Demand and Supply. These naming variations will not be treated as separate Asset Class categories.  

**Match Score Interpretation:**

V1 Reference:  

Demand Asset Class exactly matches Supply Asset Class → 1  
Demand Asset Class does not match Supply Asset Class → 0  

Latest V2 Decision:  

Managed Space Demand ↔ Managed Space Centre → Asset Class Match Score = 1, when both represent the Managed Space Asset Class.  
Managed Space ↔ different Asset Class (for example, Office or Retail) → 0  
No cross-Asset-Class exception is currently defined for Managed Space.  

Technical / Backend Confirmation – Sep 22, 2026: Managed Space Demand and Managed Space Supply use the common backend representation assetClass = "managed-space". The different Managed Space-related business/PR/UI labels are not treated as different Asset Classes for relevance.  

**Examples:**

V1 Reference Examples:  

Example 1:  
Demand Asset Class: Managed Space  
Supply Asset Class: Managed Space  
→ Match Score = 1  

Example 2:  
Demand Asset Class: Managed Space  
Supply Asset Class: Office  
→ Match Score = 0  

Example 3:  
Demand Asset Class: Managed Space  
Supply Asset Class: Retail  
→ Match Score = 0  

Latest V2 Examples:  

Example 1 – Intended Managed Space Pairing:  
Demand: Managed Space Demand  
Supply: Managed Space Centre  
Backend Asset Class: managed-space ↔ managed-space  
→ Match Score = 1  

Example 2:  
Managed Space Demand + Office Supply  
→ Match Score = 0  

Example 3:  
Managed Space Demand + Retail Supply  
→ Match Score = 0  

Example 4:  
Managed Space Demand + F&B Supply  
→ Match Score = 0  

Technical / Backend Confirmation – Sep 22, 2026:  
Managed Space-related business/PR/UI naming variations use the common backend Asset Class representation managed-space; they are not treated as separate Asset Classes for relevance.  

**Latest Decision / Pending Clarification:**

Latest Decision: Managed Space Asset Class remains a Mandatory relevance field. The confirmed business structure is Managed Space Demand ↔ Managed Space Centre. Matching Managed Space Asset Class → 1; different Asset Class → 0. No cross-Asset-Class matching exception is defined for Managed Space. The updated V2 data represents both Managed Space Demand and Supply consistently as the scalar assetClass = "managed-space".  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that the different Managed Space-related business/PR/UI naming uses the common Managed Space backend representation for relevance. The current V2 database uses assetClass = "managed-space" on both Demand and Supply. These naming variations are not treated as separate Asset Class categories or separate ML features.  

Implementation Impact: No Asset Class Match Score logic change is required for Managed Space. The standardized managed-space backend representation will be used for Managed Space Demand ↔ Managed Space Centre relevance: managed-space ↔ managed-space → 1; different Asset Class → 0.  

##### Transaction type*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Transaction type* | M | (merged above) | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field | Transaction type* |

**Comments:**

V1 Reference: Transaction Type was treated as a mandatory eligibility field requiring an exact Demand–Supply match. Same Transaction Type → Match Score = 1; different Transaction Type → 0.  

Latest V2 Decision: Transaction Type remains Mandatory for Managed Space. Under the current V2 requirement, Managed Space supports Lease only. Therefore, Managed Space Demand Lease + Supply Lease → Match Score = 1. Buy/Purchase is not supported for Managed Space under the current V2 requirement. If Buy/Purchase is introduced in the future, the corresponding relevance logic can be defined at that stage.  

V2 Data Observation: In the reviewed updated V2 data, all 34 Managed Space Demands and all 18 Managed Space Supplies currently have transactionType = "lease".  

**Match Score Interpretation:**

V1 Reference:  
Exact Transaction Type match → 1  
Transaction Type mismatch → 0  

Latest V2 Decision – Managed Space:  
Managed Space currently supports Lease only.  
Demand Lease + Supply Lease → 1.  

Buy/Purchase is not supported under the current V2 Managed Space requirement. If introduced in the future, the corresponding relevance logic will be defined at that stage.  

**Examples:**

V1 Reference Examples:  

Example 1:  
Demand: Lease  
Supply: Lease  
→ Match Score = 1  

Example 2:  
Demand: Lease  
Supply: Sale  
→ Match Score = 0  

Latest V2 Example:  

Demand: Lease  
Supply: Lease  
→ Match Score = 1  

This reflects the currently reviewed V2 data, where Managed Space Demand and Supply records use lease.  

**Latest Decision / Pending Clarification:**

Latest Business Decision: Managed Space Transaction Type remains a Mandatory relevance field. Under the current V2 requirement, Managed Space supports Lease only. Demand Lease + Supply Lease → Match Score = 1. Buy/Purchase is not supported for Managed Space under the current V2 requirement. If Buy/Purchase is introduced in the future, the corresponding relevance logic can be defined at that stage.  

V2 Data Validation: All 34 reviewed Managed Space Demands and all 18 Managed Space Supplies currently have transactionType = "lease".  

ML / Implementation: Use the current V2 backend Transaction Type representation directly. No Buy ↔ Sale normalization is required for Managed Space.  

##### City*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| City* | M | (merged above) | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field | City* |

**Comments:**

V1 Reference: City uses strict exact matching between Demand and Supply.  

Latest V2 Decision: The exact City match logic continues. PAN_INDIA is a subscription-based option and is not treated as a City for relevance matching; relevance should use the actual Demand and Supply City.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values observed in previously reviewed V2 records were identified as early/test data and are not the intended current representation for City relevance.  

**Match Score Interpretation:**

V1 Reference / Latest V2:  

1 → Demand City exactly matches Supply City  
0 → Demand City does not match Supply City  

PAN_INDIA is not evaluated as a City and does not receive a City Match Score; the actual Demand and Supply City should be used for matching.  

**Examples:**

V1 Reference / Latest V2 – Exact City Match  

Example 1:  
Demand: Bangalore  
Supply: Bangalore  
→ Match Score = 1  

Example 2:  
Demand: Bangalore  
Supply: Hyderabad  
→ Match Score = 0  

Example 3:  
Demand: Mumbai  
Supply: Navi Mumbai  
→ Match Score = 0  

V2 PAN_INDIA Handling  

Example 4 – PAN_INDIA:  
Demand subscription option: PAN_INDIA  
Actual Demand City: Bengaluru  
Supply City: Bengaluru  
→ City matching should use Bengaluru, not PAN_INDIA  
→ Match Score = 1  

**Latest Decision / Pending Clarification:**

Latest Decision: City continues with exact matching in V2: same City = 1; different City = 0. PAN_INDIA is a subscription-based option, not a City, and should not be used for City relevance matching. The actual Demand and Supply City should be evaluated.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching. The PAN_INDIA / India values previously observed in V2 were identified as early/test data and are not the intended current City representation.  

ML / Implementation: Use the actual Demand and Supply City values with the existing exact-match rule. No special PAN_INDIA Match Score logic is required.  

##### Location + Other Interested Location*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Location + Other Interested Location* | M | (merged above) | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field. | Location* |

**Comments:**

V1 Reference: Location matching follows a hierarchical/broader-locality approach. An exact Location match receives a full Match Score of 1. Where the Demand specifies a more specific location (e.g., a road/micro-location) and the Supply matches the approved broader locality containing that location, it receives a partial Match Score of 0.5. Where the Supply Location falls within the Demand's broader requested locality, it receives a full Match Score of 1. Unrelated locations receive a Match Score of 0.  

Example: Demand = DP Road, Kothrud and Supply = Kothrud → 0.5; Demand = Kothrud and Supply = DP Road, Kothrud → 1.  

Latest V2 Decision: Location matching will use Micro-location, Area, City, and distance/radius-based logic. Same Micro-location and different Micro-location within the same Area both receive a full Match Score of 1. For different Areas within the same City, the Match Score will decrease based on distance up to 5 km. Different City receives 0 and should not be considered/shown as a Location match.  

The same Location Match Score logic applies to both Primary Location and Other Interested Location. Other Interested Location is merged into Location and does not have a separate relevance impact.  

Technical / Backend Confirmation – Sep 22, 2026: Primary Location and Other Interested Locations remain separate backend fields. The relevance layer/wrapper can retrieve them separately, evaluate each using the finalized Location logic, and use the highest Match Score as the single final Location Match Score.  

The current V2 backend does not maintain Area as a separate Location level. Location/Locality represents the main location, while Micro-location represents a sub-location.  

**Match Score Interpretation:**

V1 Reference:  

1 → Supply Location exactly matches the Demand Location, or the Supply is at a more specific location within the Demand's broader requested locality.  

0.5 → Demand specifies a more specific location, while the Supply matches the approved broader locality containing that Demand Location.  

0 → Supply Location does not match or fall within an approved geographic relationship with the Demand Location.  

Latest V2:  

Business clarification: Area = Location/Locality.  

Geographic hierarchy: City → Location/Locality → Micro-location.  

Same Micro-location → 1  

Different Micro-location but same  Location/Locality → 1  

Different  Location/Locality but same City → distance-based Match Score:  

≤ 1 km → 0.8  

1 km to ≤ 2 km → 0.7  

2 km to ≤ 3 km → 0.6  

3 km to ≤ 4 km → 0.5  

4 km to ≤ 5 km → 0.3  

> 5 km → 0  

Different City → 0; Supply should not match/showcase.  

The same Location Match Score Interpretation applies to both Primary Location and Other Interested Location.  

**Examples:**

V1 Reference Examples  

Example 1 – Exact Match  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2 – Demand More Specific, Supply Broader  
Demand: DP Road, Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 0.5  

Example 3 – Demand Broader, Supply More Specific  
Demand: Kothrud, Pune  
Supply: DP Road, Kothrud, Pune  
→ Match Score = 1  

Example 4 – Unrelated Location  
Demand: DP Road, Kothrud, Pune  
Supply: Baner, Pune  
→ Match Score = 0  

Latest V2 Examples  

Example 1 – Same Micro-location  
Demand: Kothrud, Pune  
Supply: Kothrud, Pune  
→ Match Score = 1  

Example 2 – Different Micro-location, Same Area  
Demand Micro-location: DP Road, Kothrud, Pune  
Supply Micro-location: Karve Road, Kothrud, Pune  
Area: Kothrud  
→ Match Score = 1  

Example 3 – Different Area, Same City  
Demand Location: Kothrud, Pune  
Supply Location: Baner, Pune  
→ Different Areas within the same City  
→ Match Score = distance-based score (0.8 / 0.7 / 0.6 / 0.5 / 0.3 depending on distance up to 5 km)  

Example 4 – Different City  
Demand Location: Kothrud, Pune  
Supply Location: Andheri, Mumbai  
→ Match Score = 0  
→ Supply should not match/showcase.  

Example 5 – Different Area, Same City, More Than 5 km  
Demand Location: Area A, Pune  
Supply Location: Area B, Pune  
Distance: >5 km  
→ Match Score = 0  

Example 6 – Primary Location + Other Interested Location  

Demand Primary Location: Kothrud, Pune  
Demand OIL: Baner, Pune  
Supply Location: Baner, Pune  

Against Primary Location (Kothrud):  
→ Different Area within same City  
→ Distance-based Match Score  

Against OIL (Baner):  
→ Location Match Score = 1  

The same V2 Location Match Score logic applies to Primary Location and OIL.  

Latest Business / Technical Confirmation: Use the highest Match Score across Primary Location and all Other Interested Locations. Therefore, in this example, Final Location Match Score = 1.  

**Latest Decision / Pending Clarification:**

Latest Decision: V2 Location matching is currently defined using Micro-location, Area, City and distance/radius-based logic.  
Same Micro-location → 1  
Different Micro-location but same Area → 1  
Different Area but same City → distance-based scoring:  
≤ 1 km → 0.8  
1 km to ≤ 2 km → 0.7  
2 km to ≤ 3 km → 0.6  
3 km to ≤ 4 km → 0.5  
4 km to ≤ 5 km → 0.3  
5 km → 0  
Different City → 0.  

Primary Location + OIL Confirmation: Primary Location and each Other Interested Location use the same Location Match Score logic. The highest Match Score across them is used as the single final Location Match Score. Primary Location and OIL have equal priority and remain separate backend fields.  

Latest Live-Sheet Weight: Location remains Mandatory. OIL is merged into Location with no separate relevance weight. The 6 mandatory Managed Space relevance fields collectively represent 100%, giving Location an effective weight of 16.67%.  

Confirmed Business Decision – Himanshu Oct 27  

Area refers to Location/Locality.  

Confirmed hierarchy:  
City → Location/Locality → Micro-location.  

Example:  
Bengaluru → Indiranagar → 100 Feet Road.  

##### Possession
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Possession | M | (merged above) | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field. | Possession |

**Comments:**

V1 Reference:  
Possession used an urgency-based comparison between the Demand's required possession timeline and the Supply's availability timeline. Supply available at the required time or earlier received a full match, while progressively later availability received a lower Match Score.  

Latest V2 Decision:  
The same urgency-based approach continues using five standardized Possession buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply available at the same time or earlier than required receives a full match; later availability is scored according to how many buckets later it falls.  

V2 Representation: Business terminology is standardized as Possession on both Demand and Supply. The reviewed V2 backend currently represents Possession using propertyAvailableFrom on both sides.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that propertyAvailableFrom can continue to be used on both Demand and Supply for Possession. “Possession” remains the business/UI terminology. No backend field rename or additional MongoDB wrapper change is required solely for this terminology standardization.  

**Match Score Interpretation:**

V1 Reference:  
Possession was evaluated using the urgency order:  
Immediate → Within 3 months → Within 6 months → Within 9 months  

-Supply available at the same time or earlier than Demand → 1  

- Supply available 1 bucket later → 0.8
- Supply available 2 buckets later → 0.5
- Supply available more than 2 buckets later → 0

Latest V2 Decision:  
The same urgency-based scoring continues using five standardized Possession buckets:  
Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months  

- Supply available at the same time or earlier than Demand → 1
- Supply available 1 bucket later → 0.8
- Supply available 2 buckets later → 0.5
- Supply available more than 2 buckets later → 0

**Examples:**

V1 Reference / Confirmed V2 Examples:  

Example 1:  
Demand: Immediate  
Supply: Immediate  
→ Match Score = 1  

Example 2:  
Demand: Within 3 months  
Supply: Immediate  
→ Match Score = 1  

Example 3:  
Demand: Immediate  
Supply: Within 3 months  
→ Match Score = 0.8  

Example 4:  
Demand: Immediate  
Supply: Within 6 months  
→ Match Score = 0.5  

Example 5:  
Demand: Immediate  
Supply: Within 9 months  
→ Match Score = 0  

Example 6 – Latest business-confirmed scenario:  
Demand: Within 9 months  
Supply: Immediate / Within 3 months / Within 6 months / Within 9 months  
→ Match Score = 1  

Demand: Within 9 months  
Supply: After 9 months  
→ Match Score = 0.8  

**Latest Decision / Pending Clarification:**

Latest Decision: Possession remains a Mandatory relevance field for Managed Space. The existing urgency-based Match Score logic continues in V2 using five standardized buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply available in the same bucket or earlier than Demand → 1; 1 bucket later → 0.8; 2 buckets later → 0.5; more than 2 buckets later → 0.  

Business terminology is standardized as Possession on both Demand and Supply. The latest Managed Space live sheet confirms Possession as one of the 6 mandatory relevance fields, giving an effective weight of 16.67%.  

Technical / Backend Confirmation – Sep 22, 2026: Sathish confirmed that propertyAvailableFrom can continue to be used on both Demand and Supply for Possession. No backend field rename or additional MongoDB wrapper change is required solely for the terminology standardization.  

##### Number of seats*
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Number of seats* | M | (merged above) | 100% ÷ 6 mandatory relevance fields = 16.67% effective weight per field. | Number of seats* |

**Comments:**

V1 Reference:  
Number of Seats follows a capacity-based comparison. Supply Number of Seats can be equal to or greater than the Demand requirement.  

Latest V2 Decision:  
Managed Space is project-based, and Demand Number of Seats is evaluated against the Supply seating capacity. The latest PR defines Demand Number of Seats as a numeric field with a minimum input value of 20 seats and Supply Total Number of Seats as a single numeric value representing total seating capacity.  

The confirmed Match Score logic remains:  
Supply Number of Seats ≥ Demand Number of Seats → 1  
Supply Number of Seats < Demand Number of Seats → 0  

The Demand-side minimum input value of 20 seats is an input requirement only and does not introduce a separate Match Score condition.  

Technical / Backend Confirmation:  
The current working V2 field mapping is Demand numberOfSeatsMin → Supply numberOfSeats.  

Sathish confirmed that formats.*, including formats.totalSeats and formats.availableSeats, should not be used for Number of Seats relevance.  

Technical / Backend Clarification – Sep 22, 2026:  
The additional Demand field numberOfSeatsBucket was raised with Sathish. Its purpose and relevance role were not finalized during the discussion and remain to be clarified.  

**Match Score Interpretation:**

V1 Reference:  
1 → Supply Number of Seats ≥ Demand Number of Seats.  
0 → Supply Number of Seats < Demand Number of Seats.  

Latest V2 Decision:  

1 → Supply Number of Seats ≥ Demand Number of Seats  
0 → Supply Number of Seats < Demand Number of Seats  

The minimum Demand input value of 20 seats is an input requirement and does not introduce a separate Match Score condition.  

**Examples:**

V1 Reference / Confirmed V2 Match Logic Examples:  

Demand = 25, Supply = 50 → 1  
Demand = 50, Supply = 50 → 1  
Demand = 60, Supply = 50 → 0  

Current V2 Field Representation Example:  

Demand numberOfSeatsMin = 25  
Supply numberOfSeats = 50  
→ 50 ≥ 25 → Match Score = 1  

**Latest Decision / Pending Clarification:**

Latest Decision:  

Managed Space Number of Seats remains Mandatory. The latest live-sheet weight is 100% across 6 mandatory relevance fields → 16.67% effective weight per field.  

Demand Number of Seats is evaluated against the Supply seating capacity.  

The confirmed Match Score logic is:  
Supply Number of Seats ≥ Demand Number of Seats → 1  
Supply Number of Seats < Demand Number of Seats → 0  

The Demand-side minimum input value of 20 seats is an input requirement only and does not introduce a separate Match Score condition.  

Technical / Backend Confirmation:  
The current working V2 field mapping is Demand numberOfSeatsMin → Supply numberOfSeats. Sathish confirmed that formats.*, including formats.totalSeats and formats.availableSeats, should not be used for Number of Seats relevance.  

Pending Technical Clarification – Sep 22, 2026:  
The additional Demand field numberOfSeatsBucket was raised with Sathish. Sathish indicated that he needs to check what this field represents. Its purpose and relevance role, if any, remain to be clarified before finalizing the Number of Seats field mapping for Stage-1 implementation.  

##### Other interested locations
| Demand field | M/O | Weight (%) | Effective Weight (%) | Supply Field |
|---|---|---|---|---|
| Other interested locations | N/A – Merged with Location | No separate weight – merged with Location | No separate weight – included within Location | Location |

**Comments:**

V1 Reference:  
Other Interested Location was not part of the V1 relevance engine. An earlier reference proposed a separate optional 5% weight and 0.9 Match Score when an OIL matched the Location criteria.  

Latest V2 Decision:  
Other Interested Location is merged with Primary Location for relevance evaluation and is no longer a separate weighted relevance field. The earlier separate 5% weight and 0.9 Match Score are removed.  

The same finalized Location Match Score logic applies when evaluating Supply Location against either the Demand Primary Location or any Other Interested Location. An OIL match is not penalized simply because it is an additional location.  

Technical / Backend Confirmation – Sep 22, 2026: Primary Location and Other Interested Locations remain separate in the V2 backend (locality and otherInterestedLocations[]). The wrapper can retrieve them separately and expose them in a consistent structure for relevance processing. The Supply Location is evaluated against the Primary Location and each Other Interested Location, and the highest resulting Match Score is used as the single final Location Match Score.  

**Match Score Interpretation:**

V1 Reference: Not applicable – Other Interested Location was not part of the F&B V1 Reference relevance logic.  

Earlier V2 Discussion: OIL matching the Location criteria → 0.9.  

Latest V2 Decision: Other Interested Location has no separate Match Score. Each OIL is evaluated against the Supply Location using the same finalized V2 Location Match Score logic as Primary Location:  

- Same Micro-location → 1
- Different Micro-location but same Area → 1
- Different Area but same City → distance-based Location Match Score
- Different City → 0

The earlier separate 0.9 OIL Match Score is superseded.  

Current V2 Status: Primary Location and each Other Interested Location are evaluated using the same applicable Location Match Score logic, and the highest resulting score becomes the single final Location Match Score. The specific Location scoring applied will follow the final decision under the Location field, where the Location levels/fields and distance-based component remain pending.  

**Examples:**

V1 Reference: Not applicable – Other Interested Location was not part of the F&B V1 Reference relevance logic.  

Earlier V2 Example:  
OIL matches Location criteria → 0.9  
(Superseded by latest V2 decision)  

Latest V2 Examples:  

Example 1 – OIL gives the better match:  
Primary Location Match Score = 0.5  
OIL Match Score = 1.0  
→ Final Location Match Score = 1.0  

Example 2 – Primary Location gives the better match:  
Primary Location Match Score = 1.0  
OIL Match Score = 0.7  
→ Final Location Match Score = 1.0  

Example 3 – Multiple OILs:  
Primary Location Match Score = 0.5  
OIL 1 Match Score = 0.7  
OIL 2 Match Score = 1.0  
→ Final Location Match Score = 1.0  

Example 4 – All locations are in a different City:  
Primary Location Match Score = 0  
OIL Match Score(s) = 0  
→ Final Location Match Score = 0  

**Latest Decision / Pending Clarification:**

Latest Decision: Other Interested Location is merged with Primary Location for relevance evaluation and will no longer have a separate weight, separate Match Score, or separate impact on the final relevance percentage. The earlier proposed 0.9 OIL Match Score is superseded. Primary Location and Other Interested Locations will use the same finalized V2 Location hierarchy/distance-based Match Score logic.  

Technical / Backend Confirmation – Sep 22, 2026: Primary Location and Other Interested Locations remain separate in the V2 backend (locality and otherInterestedLocations[]). The wrapper can retrieve them separately and expose them in a consistent structure for relevance processing. The Supply Location is evaluated against the Primary Location and each Other Interested Location using the same applicable Location scoring, and the highest resulting Match Score is used as the single final Location Match Score.  

Location Dependency: No separate technical clarification remains for Other Interested Location. The specific scoring applied to Primary Location and OIL will follow the final decision under the Location field. The Location levels/fields and distance-based component remain pending there.  

**Implementation reference 1 (unlabelled column):**

    Confirmed Current Wrapper / Relevance-Engine Implementation – Sep 22, 2026:
    V2 keeps Primary Location and OIL separately:
    
    # Example V2 Demand
    demand = {
        "locality": "Andheri",
        "otherInterestedLocations": ["Bandra", "Powai"]
    }
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    primary_location = demand.get("locality")
    oil_locations = demand.get("otherInterestedLocations") or []
    
    demand_locations = []
    
    if primary_location:
        demand_locations.append(primary_location)
    
    demand_locations.extend(oil_locations)
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    The wrapper therefore converts the separate inputs into one consistent collection for the Location matching function:
    
    Primary Location + OILs
            ↓
    ["Andheri", "Bandra", "Powai"]
    
    Then the relevance engine can evaluate every Demand location using the same Location function:
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    For example:
    
    scores = [0.5, 0.7, 1.0]
    
    final_location_score = max(scores)
    
    # final_location_score = 1.0
    
    So conceptually:
    
    Wrapper
    Primary + OIL1 + OIL2
            ↓
    [Primary, OIL1, OIL2]
    
    Relevance Engine
            ↓
    score each using same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0
    
    Note: The Primary Location + Other Interested Location aggregation approach and use of the highest Match Score are confirmed. The specific scoring within location_match() will follow the final V2 Location decision, including the pending Location levels/fields and distance-based component.

**Implementation reference 2 (unlabelled column):**

    Future / Alternative Backend Reference – Not Current V2 Implementation:
    The current V2 backend keeps Primary Location and Other Interested Locations separately. The following is retained only as a reference in case the backend representation changes to a unified Location list in the future.
    
    If V2 does not keep Primary Location and OIL separately and instead already provides them as one unified list, for example:
    
    demand = {
        "locations": ["Andheri", "Bandra", "Powai"]
    }
    
    then the wrapper becomes simpler:
    
    # -------------------------
    # MongoDB Wrapper
    # -------------------------
    
    demand_locations = demand.get("locations") or []
    
    # Result:
    # demand_locations = ["Andheri", "Bandra", "Powai"]
    
    There is no need for the wrapper to separately read Primary Location and otherInterestedLocations[] and combine them.
    
    The relevance engine can still use exactly the same approach:
    
    scores = []
    
    for demand_location in demand_locations:
        score = location_match(
            demand_location,
            supply_location
        )
        scores.append(score)
    
    final_location_score = max(scores)
    
    Conceptually:
    
    V2 Backend
    [Primary, OIL1, OIL2]
            ↓
    Wrapper
    [Primary, OIL1, OIL2]
            ↓
    Relevance Engine
    score each using the same Location logic
            ↓
    [0.5, 0.7, 1.0]
            ↓
    max()
            ↓
    Final Location Match Score = 1.0

**Relevance Scoring Framework & Eligibility Rules:**

All fields explicitly specified in the demand are considered in relevance scoring.  

For each such field, a match score is assigned according to the approved field-level business logic.  

- Exact matches receive full score.
- Partial matches receive reduced score where business logic allows.
- Non-matches receive zero score.

The final relevance score is computed as a weighted and normalized combination of the match scores across all demand-specified fields.

### Business rules extracted
- **BR-REL-135** — Relevance scoring framework (all four tabs): every field explicitly specified in the demand is scored with its approved field-level logic; exact match = full score, partial match = reduced score where the logic allows, non-match = 0. The final relevance score is a weighted, normalized combination of the match scores across all demand-specified fields. _(§ Relevance Scoring Framework & Eligibility Rules)_
- **BR-REL-136** — Office weights: 5 mandatory fields (Asset Class, Transaction Type, City, Location + Other Interested Location, Carpet Area) share 80%, i.e. 16% each. Optional: Possession 5%, Fitouts 15%. _(§ Office_V2_Relevance_Logic)_
- **BR-REL-137** — Retail weights: 7 mandatory fields (Asset Class, Transaction type, City, Location + OIL, Carpet Area, Ceiling Height, Floor) share 80%, ≈11.43% each (changed from 75% / 7 ≈ 10.71%). Optional at 5% each: Fitouts required, Possession, Frontage, Store type. _(§ Retail_V2_Relevance_Logic)_
- **BR-REL-138** — F&B weights: 8 mandatory fields (Asset Class, Transaction type, City, Location + OIL, Carpet area, Floor Preference, Clear ceiling height, Store type) share 75%, ≈9.38% each. Optional at 5% each: Fitouts required, Possession, Frontage, Cooking Type, Non veg served. _(§ F&B_V2_Relevance_Logic)_
- **BR-REL-139** — Managed Space weights: 6 mandatory fields (Asset Class, Transaction type, City, Location + OIL, Possession, Number of seats) share 100%, ≈16.67% each. No optional fields. _(§ Managed_Space_V2_Relevance_Logic)_
- **BR-REL-140** — Asset Class is exact match (1/0). Office and Managed Space never cross-match with any other asset class. _(§ Office / Managed Space, Asset Class)_
- **BR-REL-141** — Retail ↔ F&B cross-matching is allowed in both directions with Asset Class score 1. A cross-match is scored only on the common mandatory fields plus Store Type (Asset Class, Transaction Type, City, Location + OIL, Carpet Area, Floor, Ceiling Height, Store Type); asset-class-specific optional fields are excluded. _(§ Retail / F&B, Asset Class — Sep 18, 2026)_
- **BR-REL-142** — The Retail ↔ F&B cross-match display cutoff is not finalized; it will be a separate configurable cutoff. The 50% mentioned on Sep 22 is temporary. _(§ Retail, Asset Class)_
- **BR-REL-143** — Transaction Type: Demand Buy + Supply Sale = 1; Demand Lease + Supply Lease = 1; any other combination = 0. The backend uses "Buy" on both sides ("Sale" is UI wording), so no Buy↔Sale conversion is needed. _(§ Office / Retail / F&B, Transaction Type)_
- **BR-REL-144** — Managed Space supports Lease only: Demand Lease + Supply Lease = 1. Buy/Purchase is not supported for Managed Space in the current V2 requirement. _(§ Managed Space, Transaction type)_
- **BR-REL-145** — City is exact match (same = 1, different = 0, e.g. Mumbai vs Navi Mumbai = 0). PAN_INDIA is a subscription option, not a City, and is never used for City matching; the actual Demand and Supply City is used. _(§ all tabs, City)_
- **BR-REL-146** — Location hierarchy is City → Location/Locality (= "Area") → Micro-location, e.g. Bengaluru → Indiranagar → 100 Feet Road. _(§ Location — Himanshu, Oct 27, 2026)_
- **BR-REL-147** — Location score: same Micro-location = 1; different Micro-location in the same Location/Locality = 1; different Locality in the same City is scored by distance (≤1 km 0.8; 1–2 km 0.7; 2–3 km 0.6; 3–4 km 0.5; 4–5 km 0.3; >5 km 0); different City = 0 and the supply is not shown as a match. _(§ all tabs, Location + Other Interested Location)_
- **BR-REL-148** — Other Interested Location (OIL) is merged into Location: no separate weight or score (the earlier 0.9 OIL score and 5% weight are removed). Supply Location is scored against the primary Location and each OIL with the same logic; the highest score is the final Location score. Primary and OIL have equal priority. _(§ all tabs, Other interested location — Sep 18, 2026)_
- **BR-REL-149** — Carpet Area (Office, Retail, F&B) uses demand-area variance bands; supply inside the band = 1, outside = 0 (the V1 partial 0.8 is dropped). Bands (lower % / upper %): ≤500 sq ft 10/50; 501–1,000 10/25; 1,001–2,000 10/20; 2,001–4,000 10/20; 4,001–6,000 10/15; 6,001–10,000 5/15; 10,001–15,000 5/10; 15,001–25,000 10/15; ≥25,001 15/20. Example: demand 5,000 → 4,500–5,750 matches. _(§ Office / Retail / F&B, Carpet Area)_
- **BR-REL-150** — Demand carpetArea is the primary Carpet Area input; a fallback (e.g. carpetAreaRange.min) is retained if it is missing, but the fallback field/order is still to be finalized after the migrated-data review. _(§ Carpet Area, Sep 22, 2026)_
- **BR-REL-151** — Possession buckets: Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months. Supply same bucket or earlier = 1; one bucket later = 0.8; two later = 0.5; more = 0. Backend field: propertyAvailableFrom on both sides. Possession is Optional for relevance in Office/Retail/F&B (5%) but always a compulsory input; it is Mandatory for Managed Space. _(§ all tabs, Possession)_
- **BR-REL-152** — Office Fitouts uses only Furnished, Unfurnished, Developer/Landlord to do Fitout: Furnished→Furnished 1, Furnished→Unfurnished 0, Furnished→Developer/Landlord 1, Unfurnished→Furnished 0, Unfurnished→Unfurnished 1, Unfurnished→Developer/Landlord 1. If the demand gives no Fitouts, the field is excluded. _(§ Office, Fitouts)_
- **BR-REL-153** — Retail/F&B Fitouts: Demand Fitout Required Yes/No vs Supply Fitout Available Yes/No: Yes/Yes 1, Yes/No 0, No/Yes 0, No/No 1. "No" is an explicit requirement, not "missing". If either side is missing, the field is excluded. _(§ Retail / F&B, Fitouts required — Sep 18, 2026)_
- **BR-REL-154** — Ceiling Height (Retail, F&B): supply equal to or up to 30% above demand = 1; more than 30% above = 0.5; slightly lower = 0.8 within a demand-dependent allowance (demand ≤14 ft: up to 1 ft lower; 15–20 ft: up to 2 ft; ≥21 ft: up to 3 ft); lower than that = 0. _(§ Retail / F&B, Ceiling Height)_
- **BR-REL-155** — Floor is scored with Store Type: Ground + High Street matches supply Ground or Upper Ground only (1; else 0); Ground + Mall matches Ground, Upper Ground, 1st, 2nd, 3rd or Above 3rd (1; Basement 0); "Any Floor" matches all floors, but a selected Store Type is still applied. _(§ Retail / F&B, Floor)_
- **BR-REL-156** — Store Type is single-value exact match (1/0); demand "Any" matches Highstreet or Mall (1). It is Optional (5%) for Retail and Mandatory for F&B. _(§ Retail / F&B, Store type)_
- **BR-REL-157** — Frontage is a minimum: supply ≥ demand = 1; up to 15% below = 0.8; more than 15% below = 0. Demand not specified → excluded; demand specified but supply missing → 0. _(§ Retail / F&B, Frontage in feet)_
- **BR-REL-158** — F&B Cooking Type replaces the V1 gas-connection check: Electric→Electric 1, Electric→Gas 1, Gas→Gas 1, Gas→Electric 0, Either→Electric or Gas 1. Missing on either side → excluded. gasLineRequired has no role. _(§ F&B, Cooking Type)_
- **BR-REL-159** — F&B Non-veg: Demand Non-Veg Served vs Supply Non-Veg Allowed: Yes/Yes 1, Yes/No 0, No/Yes 1, No/No 1; demand specified but supply missing 0.8; demand not specified → excluded. True, False and missing must stay distinct. _(§ F&B, Non veg served)_
- **BR-REL-160** — Managed Space Number of Seats: supply numberOfSeats ≥ demand numberOfSeatsMin = 1, else 0. The 20-seat demand minimum is an input rule only. formats.* (totalSeats, availableSeats) are not used. _(§ Managed Space, Number of seats)_
- **BR-REL-161** — Managed Space relevance is Managed Space Demand ↔ Managed Space Centre; all Managed Space naming variants map to assetClass "managed-space". _(§ Managed Space, Asset Class)_

### Open questions / ambiguities in this doc
- Location: the backend has no separate "Area" level (only Locality and Micro-location), and Sathish advised against real-time distance/API calls for every comparison. How the distance bands will be computed is not settled; the Office/F&B OIL rows still call the distance component "pending" while the Location rows call it confirmed.
- Carpet Area fallback field/order when demand carpetArea is missing is not finalized.
- Retail ↔ F&B cross-match display cutoff is not finalized (50% is temporary). No general display threshold is stated either.
- Managed Space: purpose of the demand field numberOfSeatsBucket is unknown (Sathish to check).
- Fitouts (Retail/F&B): which backend representation is used (categorical fitOutStatus vs Boolean fitoutsRequired/fitoutsAvailable, mostly empty) is to be revalidated after the V1→V2 migration.
- Non-veg: V2 data shows only True or missing, no explicit False; how "No" is stored must be verified after migration.
- Office: no Match Score is defined for a missing Supply Fitouts (not expected in the normal flow).
- Ceiling Height: the 0.8 lower-side bands leave gaps for non-integer demands (e.g. 14.5 ft) — which band applies is not stated.
- Retail Asset Class "Latest Decision" cell repeats its first sentence (copy/paste in the source).

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
- *KeyDemand V2 Relevance Logic – Business Approval* (gsheet, owner sithara.j, modified 2026-10-29; added 2026-11-01) is the newest relevancy doc. It keeps the asset-class field lists and block weights of Relevancy Logics.xlsx and adds field-level match scoring, backend field mapping (Sep 22) and the Location hierarchy confirmation (Oct 27). Both are AUTHORITATIVE; the Business Approval sheet wins on property relevancy scoring, Relevancy Logics.xlsx still governs project relevancy.
- The Business Guide (2026-10-06) predates them and is NON-AUTHORITATIVE by its "DO NOT TAKE" title; its inline KD comments reject the price-based v2 model and redirect to Relevancy Logics.xlsx.

### Conflicts across docs in this group
- **Price in score:** Guide scores price 25 pts; Relevancy Logics.xlsx has no price; KD comments: price never a component. → Authoritative: no price (xlsx).
- **Weights:** Guide 30/25/25/15/5; xlsx per-asset-class field weights (80/5×4; 80/5/15; 75/5×5; 100). → Authoritative: xlsx.
- **Display threshold:** Guide 40%; KD comment in Guide "50% or above"; xlsx silent; Business Approval sheet: Retail ↔ F&B cross-match cutoff not finalized, "50% … is temporary". → Unresolved.
- **Location scope:** Guide region-wide/city matching; KD + xlsx project tab: area/micro-locality based, nearby areas as suggestions. → Authoritative: xlsx (Location\* + other interested location, mandatory).
- **Size tolerance:** Guide 10% / +25%; xlsx project rule −10% / +20% or within min–max; Business Approval sheet (properties): demand-area variance bands from 10%/50% (≤500 sq ft) to 15%/20% (≥25,001), 1/0 scoring. → Authoritative: Business Approval sheet for properties (BR-REL-149); xlsx for projects.
- **Similar projects:** Guide lists projects for demands (no similar-projects concept); gsheet: similar projects on project page = Phase 2, nearby localities only; relevant projects for a self-posted demand = Phase 1 (Yes). → Authoritative: gsheet.
- **Relevant demands visibility:** Guide: property owner + KD team. Gsheet: relevant demands shown on self-posted property only; KD team viewing a property not their own sees only similar properties, no relevant demands. → Authoritative: gsheet.
- **F&B Store type:** Relevancy Logics.xlsx: Store type\* is Optional with no weight (BR-REL-008); Business Approval sheet: Store type is one of 8 Mandatory F&B fields at ≈9.38% (BR-REL-138/156). → Business Approval sheet (newer, 2026-10-29); confirm with the business.
- **Other interested location:** earlier proposals gave OIL a separate 0.9 score (and 5% weight in one reference); Business Approval sheet merges OIL into Location with max-score aggregation (BR-REL-148). Consistent with xlsx "Location\* + other interested location". → Business Approval sheet.
- **Optional fields missing on the supply side:** xlsx: "If the optional data is required from the demand side and missing in property then the % should be reducted" (BR-REL-012); Business Approval sheet: field-specific — Fitouts and Cooking Type are excluded when supply is missing, Frontage scores 0, Non-veg scores 0.8 (BR-REL-153/157/158/159). → Business Approval sheet (field-level and newer).
