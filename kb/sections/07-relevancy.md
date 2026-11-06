# 07 — Relevancy / Matching Logic

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Relevancy Logics.xlsx | Excel (.xlsx), 5 tabs | `1u8vTa1tN7UAWQQgi-PXnAG2lels_N33M` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 2 | Properties and projects relavancy/similar matches | Google Sheet, 2 tabs | `1QNT9o_tREQro2OFa9uhx58ZDlJpGhKHpRWExI_FYIIU` | arvind.m@futuristglobal.com | 2026-10-10 | AUTHORITATIVE |
| 3 | Images for Demand -Relevancy and Enterprise End Use as discussed in Client call today(8th October) | Google Doc | `1To607MwaovFvLD7jj2spXYhhRPv_AsdaidcHvm8tof4` | pradeepa.pv@futuristglobal.com | 2026-10-14 | AUTHORITATIVE |
| 4 | Keydemand Relevancy — Business Guide - DO NOT TAKE. .docx | Word (.docx) | `1cM4ZE069Xb12FWrItTipiSOp6oKrPKfB` | pradeepa.pv@futuristglobal.com | 2026-10-06 | NON-AUTHORITATIVE (title says "DO NOT TAKE"; body says "DO NOT USE THIS DOCUMENT") |
| 5 | KeyDemand V2 Relevance Logic – Business Approval | Google Sheet, 4 tabs | `1pO37bzXWSkpT_-poaFu1XI73e1319ZWWzejLAt02Ur8` | sithara.j@futuristglobal.com | 2026-11-05 | AUTHORITATIVE (field-level V2 match scoring for Office, Retail, F&B, Managed Space; newer than Relevancy Logics.xlsx; added 2026-11-01; re-checked 2026-11-06) |
| 6 | PR-to-V2_Relevance_Implementation_Tracker | Google Sheet (1 tab) | `1H1GduVqzQnP-KT163CpRCPgpfCIH7NYqqos7VpaANHI` | sithara.j@futuristglobal.com | 2026-11-05 | AUTHORITATIVE (implementation tracker for the V2 relevance logic: PR vs V1 vs V2 schema, gaps, open questions and dated decisions per field; status and notes change often; added 2026-11-06) |

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
**Source:** Google Sheet · ID `1pO37bzXWSkpT_-poaFu1XI73e1319ZWWzejLAt02Ur8` · owner sithara.j@futuristglobal.com · created 2026-10-05, modified 2026-11-05 · tabs read: Office_V2_Relevance_Logic, Retail_V2_Relevance_Logic, F&B_V2_Relevance_Logic, Managed_Space_V2_Relevance_Logic (4 of 4) · comments: none · read coverage: 100% of cell text · added 2026-11-01 (2026-10-29 revision, xlsx export) · re-checked 2026-11-06 against the 2026-11-05 revision (Sheets API, all 4 tabs in full)

**Status note:** This is the field-level V2 relevance spec (demand ↔ property/supply) for Office, Retail, F&B and Managed Space. For each field it records the Approved V1 logic, the latest V2 business decision, the Sep 22, 2026 technical/backend confirmations (Sathish) and the Oct 27, 2026 business confirmation (Himanshu). It keeps the same field lists and block weights as *Relevancy Logics.xlsx* (2026-10-14) and adds the per-field scoring, so it is treated as AUTHORITATIVE and newer. Where the two disagree, see *Conflicts across docs in this group*. Project relevancy is out of scope here ("Demand–Project Relevance scope"); *Relevancy Logics.xlsx* still governs projects. The 2026-11-05 revision adds the Nov 3, 2026 technical discussion on Location (Backend/ML split) and the 05 Nov 2026 final confirmation that Store Type is Mandatory for F&B; see *Changes in the 2026-11-05 revision* below.

Notes on transcription: one `#####` block per sheet row. The table gives the Demand field, M/O, Weight, Effective Weight and Supply Field cells. The Comments, Match Score Interpretation, Examples and Latest Decision columns follow word for word. "(merged above)" marks a Weight cell merged with the first row's. Two unlabelled trailing columns on the Other Interested Location rows hold wrapper pseudo-code and are shown as text blocks.

### Content

#### Changes in the 2026-11-05 revision (re-checked 2026-11-06)
- **Office_V2_Relevance_Logic — Location + Other Interested Location (R6), "Latest Decision / Pending Clarification" column:** old → the cell ended with the "Weight: Latest live-sheet configuration confirmed — 80% total Mandatory weight …" line; new → one paragraph is appended after it: "\*\*Technical Discussion – Nov 3, 2026:\*\* Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML." (new rule BR-REL-162).
- **Retail_V2_Relevance_Logic — Location + Other Interested Location (R6), "Latest Decision / Pending Clarification" column:** old → the cell ended with the Oct 27 hierarchy example ("Bengaluru → Indiranagar → 100 Feet Road."); new → the same "Technical Discussion – Nov 3, 2026" paragraph is appended after it (BR-REL-162).
- **F&B_V2_Relevance_Logic — Location + Other Interested Location\* (R6), "Latest Decision / Pending Clarification" column:** old → the cell ended with the Oct 27 hierarchy example; new → the same "Technical Discussion – Nov 3, 2026" paragraph is appended after it (BR-REL-162).
- **Managed_Space_V2_Relevance_Logic — Location + Other Interested Location\* (R6), "Latest Decision / Pending Clarification" column:** old → the cell ended with the Oct 27 hierarchy example; new → the same "Technical Discussion – Nov 3, 2026" paragraph is appended after it (BR-REL-162).
- **F&B_V2_Relevance_Logic — Store type\* (R10), "Comments" column:** old → "F&B Live-Sheet Classification Note: In the latest F&B live relevance sheet, the Store Type M/O cell still shows O; however, Store Type is positioned within the Mandatory-field group and carries the 75% mandatory-group weight. With 8 Mandatory relevance fields, the effective Store Type weight is 75% ÷ 8 = 9.375% ≈ 9.38%. Therefore, the O is treated as a missed M/O cell update, and Store Type is treated as Mandatory for F&B in the V2 evolving logic." (it stood before the Sep 22 backend confirmation); new → that note is removed and, after the "Unexpected legacy/multi-value Store Type records …" paragraph, the cell now says "F&B Live-Sheet Classification – Final Confirmation (05 Nov 2026): Himanshu confirmed that Store Type is Mandatory (M) for F&B and corrected the live relevance sheet. With 8 Mandatory fields sharing 75% weightage equally, the effective Store Type weight is 9.375% (≈9.38%)." The M/O cell of this row reads M in the current sheet (the KB table already showed M). Weight value unchanged; BR-REL-156 updated.
- **Retail_V2_Relevance_Logic — Other interested location (R14), "Latest Decision / Pending Clarification" column:** old → "Location Dependency: No separate technical clarification remains for Other Interested Location. Any further change to its scoring will follow the pending final decision under the Location field regarding the Location hierarchy/fields and distance-based component."; new → "Location Dependency: The scoring applied to Primary Location and OIL will follow the final decision under the Location field."
- **F&B_V2_Relevance_Logic — Other interested location (R16), "Latest Decision / Pending Clarification" column:** old → "Location Dependency: The scoring applied to Primary Location and OIL will follow the final decision under the Location field. The Location levels/fields and distance-based component remain pending there."; new → the second sentence ("The Location levels/fields and distance-based component remain pending there.") is removed.
- **Managed_Space_V2_Relevance_Logic — Other interested locations (R9), "Latest Decision / Pending Clarification" column:** old → "Location Dependency: No separate technical clarification remains for Other Interested Location. The specific scoring applied to Primary Location and OIL will follow the final decision under the Location field. The Location levels/fields and distance-based component remain pending there."; new → the last sentence ("The Location levels/fields and distance-based component remain pending there.") is removed.

No rows or columns were added or removed (field rows: Office 8, Retail 12, F&B 14, Managed Space 7). All weights, M/O flags and Match Score values are the same as in the 2026-10-29 revision; every other cell is unchanged.

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

\*\*Technical Discussion – Nov 3, 2026:\*\*  

Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML.  

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

\*\*Technical Discussion – Nov 3, 2026:\*\*  

Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML.  

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

Location Dependency: The scoring applied to Primary Location and OIL will follow the final decision under the Location field.  

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

\*\*Technical Discussion – Nov 3, 2026:\*\*  

Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML.  

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

Technical / Backend Confirmation – Sep 22, 2026:  
Although Store Type is single-select in the latest PR, the V2 backend will continue storing Store Type as a list, with one Store Type value expected in the list. The existing wrapper approach can continue, converting the one-value Store Type list to the scalar Store Type value required by the relevance engine.  

Unexpected legacy/multi-value Store Type records, if still present after migration, will be reviewed separately. No multi-value Store Type scoring rule is currently defined.  

F&B Live-Sheet Classification – Final Confirmation (05 Nov 2026):  

Himanshu confirmed that Store Type is Mandatory (M) for F&B and corrected the live relevance sheet.  

With 8 Mandatory fields sharing 75% weightage equally, the effective Store Type weight is 9.375% (≈9.38%).  

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

Location Dependency: The scoring applied to Primary Location and OIL will follow the final decision under the Location field.  

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


#### Tab 4 — Managed_Space_V2_Relevance_Logic
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

\*\*Technical Discussion – Nov 3, 2026:\*\*  

Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML.  

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

Location Dependency: No separate technical clarification remains for Other Interested Location. The specific scoring applied to Primary Location and OIL will follow the final decision under the Location field.  

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
- **BR-REL-156** — Store Type is single-value exact match (1/0); demand "Any" matches Highstreet or Mall (1). It is Optional (5%) for Retail and Mandatory (M) for F&B: Himanshu confirmed this on 05 Nov 2026 and corrected the live sheet; 8 Mandatory fields share 75% equally, so the F&B Store Type weight is 9.375% (≈9.38%) (changed in the 2026-11-05 revision; was: Mandatory for F&B by inference only — the sheet said the live-sheet M/O cell still showed O and treated that as a missed cell update). _(§ Retail / F&B, Store type)_
- **BR-REL-157** — Frontage is a minimum: supply ≥ demand = 1; up to 15% below = 0.8; more than 15% below = 0. Demand not specified → excluded; demand specified but supply missing → 0. _(§ Retail / F&B, Frontage in feet)_
- **BR-REL-158** — F&B Cooking Type replaces the V1 gas-connection check: Electric→Electric 1, Electric→Gas 1, Gas→Gas 1, Gas→Electric 0, Either→Electric or Gas 1. Missing on either side → excluded. gasLineRequired has no role. _(§ F&B, Cooking Type)_
- **BR-REL-159** — F&B Non-veg: Demand Non-Veg Served vs Supply Non-Veg Allowed: Yes/Yes 1, Yes/No 0, No/Yes 1, No/No 1; demand specified but supply missing 0.8; demand not specified → excluded. True, False and missing must stay distinct. _(§ F&B, Non veg served)_
- **BR-REL-160** — Managed Space Number of Seats: supply numberOfSeats ≥ demand numberOfSeatsMin = 1, else 0. The 20-seat demand minimum is an input rule only. formats.* (totalSeats, availableSeats) are not used. _(§ Managed Space, Number of seats)_
- **BR-REL-161** — Managed Space relevance is Managed Space Demand ↔ Managed Space Centre; all Managed Space naming variants map to assetClass "managed-space". _(§ Managed Space, Asset Class)_
- **BR-REL-162** — Proposed Backend/ML split for Location (technical discussion of Nov 3, 2026; a proposal by Sathish, not recorded as a final decision): the Backend handles the initial eligibility filtering, the Location comparisons and the distance calculations for Primary Location and OIL, and passes the required information to ML. (new in the 2026-11-05 revision) _(§ all four tabs, Location + Other Interested Location, Latest Decision — Technical Discussion Nov 3, 2026)_

### Open questions / ambiguities in this doc
- Location: the backend has no separate "Area" level (only Locality and Micro-location), and on Sep 22 Sathish advised against real-time distance/API calls for every comparison. The 2026-11-05 revision adds his Nov 3 proposal that the Backend does the eligibility filtering, the Location comparisons and the distance calculations and passes the result to ML (BR-REL-162), but it is worded as a proposal: the sheet does not say it was accepted, nor what the Backend-to-ML input looks like. The OIL rows are still inconsistent: the F&B and Managed Space "Latest Decision" cells no longer say "pending" (and Retail's no longer says "pending final decision"), but the wrapper notes in the unlabelled column of all four OIL rows and the Managed Space OIL "Match Score Interpretation" cell still call the Location levels/fields and distance-based component "pending". (updated 2026-11-06)
- Carpet Area fallback field/order when demand carpetArea is missing is not finalized.
- Retail ↔ F&B cross-match display cutoff is not finalized (50% is temporary). No general display threshold is stated either.
- Managed Space: purpose of the demand field numberOfSeatsBucket is unknown (Sathish to check).
- Fitouts (Retail/F&B): which backend representation is used (categorical fitOutStatus vs Boolean fitoutsRequired/fitoutsAvailable, mostly empty) is to be revalidated after the V1→V2 migration.
- Non-veg: V2 data shows only True or missing, no explicit False; how "No" is stored must be verified after migration.
- Office: no Match Score is defined for a missing Supply Fitouts (not expected in the normal flow).
- Ceiling Height: the 0.8 lower-side bands leave gaps for non-integer demands (e.g. 14.5 ft) — which band applies is not stated.
- Retail Asset Class "Latest Decision" cell repeats its first sentence (copy/paste in the source).

---
## PR-to-V2_Relevance_Implementation_Tracker  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1H1GduVqzQnP-KT163CpRCPgpfCIH7NYqqos7VpaANHI` · owner sithara.j@futuristglobal.com · created 2026-08-05, modified 2026-11-05 · tabs read: PR-to-V2_Master_Implementation_Tracker (1 of 1; 17 rows × 20 columns: 1 header row, 15 field rows, 1 near-empty row; column U empty) · read coverage: 100% of cell values · added 2026-11-06

**Status note:** This is the per-field tracker that maps the Product Requirement (PR) representation of each relevance field to the approved V1 logic, the V1 MongoDB/wrapper mapping and the actual V2 schema, and records the gap, the required DB or wrapper change, the open business/technical questions and the dated discussion decisions (Himanshu = business, Sathish = backend, Sithara = ML side). It covers 15 fields: Asset Class, Transaction Type, City, Location, Possession, Other Interested Location, Carpet Area, Fitouts, Floor, Ceiling Height, Frontage, Store Type, Cooking Type / Gas Connection, Non-Veg Served, Number of Seats. The sheet does not spell out "PR"; from the text it is the product requirement / UI specification. It is the working log behind the *KeyDemand V2 Relevance Logic – Business Approval* sheet (same owner): the final per-field scores in that sheet are the outcome of the "Discussion Decision / Notes" column here, so the two should agree; this tracker adds backend field names, data-population counts, implementation status and pending items. The two business-comment columns (S, T) are empty. The numbered questions (1 to 42) in column O are the clarification items; most carry an answer in column R.

Notes on transcription: the sheet has one tab with 20 populated columns (A to T). The wide table is split into five tables (A to E) that each repeat the sheet row number and the Field column; every cell is kept. In-cell line breaks are shown as `<br>`. Sheet row 17 holds only a blank space in column K.

### Content
#### Tab — PR-to-V2_Master_Implementation_Tracker
##### Table A. Field, scope, objective and PR

| Sheet row | Field | Applicable Asset Classes | Field Category | Business Objective | PR Representation |
|---|---|---|---|---|---|
| 2 | Asset Class | Retail, Office, F&B, Managed Space | Core Common | Ensure each Demand is matched only with properties belonging to the appropriate business Asset Class. Asset Class acts as the primary eligibility filter before detailed relevance scoring begins. | Asset Class is captured as a single-select field on Demand and Property. The PR uses Retail, Office, F&B, and Managed Space / Managed Offices as business Asset Class values.<br><br>For Demand, the PR uses different labels depending on the journey:<br><br>- Managed Space<br>- Flex space<br>- Managed Office<br><br>For Supply, the PR also uses multiple labels:<br><br>-Managed office<br>- Managed Offices<br>- Pre-selected with Managed Office Space<br><br>So the PR itself does not appear to use one standardized Asset Class label across all Managed Space/Managed Office journeys.<br><br>Confirm whether Managed Space, Managed Office, Managed Offices, and the existing V1 value Flex Space represent the same Asset Class, and agree on one standard value or an approved mapping between them. |
| 3 | Transaction Type | Retail, Office, F&B, Managed Space | Core Common | Ensure that Demand is matched only with Properties having the same commercial Transaction Type. Transaction Type acts as a mandatory business eligibility criterion before detailed relevance evaluation. | Transaction Type is captured as a single-select field on both Demand and Property. <br><br>For Retail, Office, and F&B, the PR uses Buy on the Demand side and Sale on the Property side for purchase transactions, while Lease is used on both sides. <br><br>For Managed Space, the current PR primarily represents Lease transactions, with Property supporting Lease and Sale. |
| 4 | City | Retail, Office, F&B, Managed Space | Core Common | Ensure that Demand is matched with Properties in the required City before evaluating more detailed location preferences. City acts as the primary geographic eligibility criterion. | City is captured as a searchable single-select dropdown on both Demand and Property. <br><br>Users select a City from a standardized list rather than entering free text. |
| 5 | Location | Retail, Office, F&B, Managed Space | Core Common | Ensure that Demand is matched with geographically relevant Properties based on the approved Location relevance logic after City eligibility is satisfied. | Location is captured as a searchable single-select field on both Demand and Property. <br><br>Users search for and select a standardized location rather than entering unrestricted free text. |
| 6 | Possession | Retail, Office, F&B, Managed Space | Core Common | Evaluate whether the Property's available possession timeline satisfies the Demand's required possession timeline so that properties available within the required timeframe receive higher relevance. | Demand captures Possession Needed and Property captures Property Available. <br><br>From using single-select dropdowns with the standardized urgency buckets: Immediate, Within 3 months, Within 6 months, Within 9 months, and After 9 months. |
| 7 | Other Interested Location | Retail, Office, F&B, Managed Space | Core Common | Allow the Demand user to specify additional acceptable locations beyond the Primary Location so that Properties in secondary preferred locations can also be considered during relevance matching, while Primary Location remains the highest priority. | Demand captures Other Interested Locations using a searchable multi-select dropdown (up to 3 locations). <br><br>Property does not have a separate Other Interested Location field; Demand's Other Interested Locations are compared against the Property's Primary Location. |
| 8 | Carpet Area | Retail, Office, F&B | Shared | Ensure that the Property Carpet Area satisfies the Demand's required Carpet Area by using the approved range-based comparison while allowing approved business tolerance. | Demand captures Carpet Area as a numeric value. <br><br>Property captures Carpet Area as a numeric value. <br><br>During relevance evaluation, the Property Carpet Area is compared against the Demand Carpet Area requirement. |
| 9 | Fitouts | Retail, Office, F&B | Shared | Evaluate whether the Property's fitout condition satisfies the Demand's fitout requirement when determining relevance. | Retail and F&B: Demand captures Fitouts Required as a Yes/No radio button with single selection. Property captures Fitouts Available as a Yes/No radio button with single selection. <br><br>Office: Demand captures Fitouts Required as a single-select radio button with the supported values Furnished and Unfurnished. <br><br>Property captures Fitouts Status as a single-select radio button with the supported values Furnished, Unfurnished, and Developer/Landlord to do Fitout. |
| 10 | Floor | Retail, F&B | Shared | Ensure that the Property satisfies the Demand's preferred floor requirement while supporting business rules related to Store Type and operational suitability. | Demand: Floor Preference (Radio Button) – Ground, Any. <br><br>Property: Floor (Dropdown) – Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor. |
| 11 | Ceiling Height | Retail, F&B | Shared | Ensure that the Property's clear ceiling height satisfies the Demand's minimum ceiling-height requirement while supporting business suitability for Retail and F&B businesses requiring adequate vertical clearance. | Demand: Clear Ceiling Height (ft.) – Input: Number (in feet). <br><br>Property: Clear Ceiling Height (ft.) – Input: Number (in feet). |
| 12 | Frontage | Retail, F&B | Shared | Evaluate whether the Property's frontage satisfies the Demand's minimum frontage requirement while supporting adequate storefront visibility and business suitability for Retail and F&B properties. | Demand: Frontage (ft.) – Input: Number (in feet). <br><br>Property: Frontage (ft.) – Input: Number (in feet). |
| 13 | Store Type | Retail, F&B | Shared | Evaluate whether the Property's Store Type satisfies the Demand's preferred Store Type, ensuring compatibility between the business requirement and the property format. | Demand: Store Type – Input: Highstreet; Available values: Highstreet, Mall, Any;  Single-select. <br><br>Property: Store Type – Input: Highstreet; Available values: Highstreet, Mall; Single-select.       <br><br>Note:The earlier PR allowed multiple Demand Store Types |
| 14 | Cooking Type / Gas Connection | F&B | F&B Specific | Evaluate whether the Property's cooking infrastructure supports the Demand's required cooking setup. A Property should be considered suitable only when it supports the Cooking Type required by the F&B Demand. | Demand: Cooking Type (Single-select: Electric, Gas, Either). <br><br>Property: Cooking Type (Single-select: Electric, Gas). |
| 15 | Non-Veg Served | F&B | F&B Specific | Evaluate whether the Property supports non-vegetarian food operations when the Demand requires non-vegetarian food service. | Demand: Non-Veg Served (Radio Button, Single Select: Yes, No). <br><br>Property: Non-Veg Allowed (Radio Button, Single Select: Yes, No). |
| 16 | Number of Seats | Managed Space | Managed Space Specific | Evaluate whether the Property can accommodate the seating capacity required by the Demand. | Demand: Number of Seats (Numeric field; minimum value: 20 seats). <br><br>Property: Total Number of Seats (Numeric field representing the total seating capacity; e.g., 100 seats). |
| 17 |  |  |  |  |  |

##### Table B. V1 logic, V1 MongoDB, V1 wrapper, V2 schema

| Sheet row | Field | Approved V1 Relevance Logic | Current V1 MongoDB Representation | Current V1 Wrapper Mapping | Actual V2 Schema Representation |
|---|---|---|---|---|---|
| 2 | Asset Class | Strict exact match: Match = 1; Mismatch = 0. <br><br>A Property is eligible only when its Asset Class matches the Demand Asset Class. No partial scoring or cross-Asset-Class matching is included in the currently approved V1 logic. | Demand stores Asset Class through `propertyType`; Property stores `propertyTypeId`, which is resolved through the `propertytypes` master collection to obtain the business Asset Class. In the Managed Space workflow, the existing V1 value is represented as `Flex Space`. | The wrapper reads Demand `propertyType`, resolves Property `propertyTypeId` through the `propertytypes` master collection, and compares the resulting business Asset Class values. Managed Space currently depends on the mapping to `Flex Space`. | V2 stores Asset Class directly as the string field `assetClass` on both Demand (`v2_demands`) and Property (`v2_properties`). |
| 3 | Transaction Type | Strict exact match. Match = 1; Mismatch = 0.<br><br> A Property is eligible only when its Transaction Type exactly matches the Demand Transaction Type. No partial scoring or equivalent Transaction Type matching is included in the approved V1 logic. | Transaction Type is stored directly in both Demand and Property as `transactionType`. No master lookup or field transformation is used. | The wrapper reads `transactionType` directly from Demand and Property and performs a direct comparison without additional mapping or transformation. | V2 stores Transaction Type directly as the string field `transactionType` on both Demand (`v2_demands`) and Property (`v2_properties`). |
| 4 | City | Strict exact match. Match = 1; Mismatch = 0. <br><br>City is evaluated independently before detailed Location matching. No partial scoring is included. | City is stored within the broader `location` field on both Demand and Property rather than as a separate dedicated field. | The wrapper derives the relevance City from the `location` field on both Demand and Property before performing the City comparison. | V2 stores City directly as the string field `city` in both `v2_demands` and `v2_properties`. |
| 5 | Location | Retail, Office, and F&B use the approved V1 Location relevance logic, where an exact Location match receives a full score, approved parent-child or broader locality matches receive a partial score, and unrelated locations receive no score. | Location is stored in `microLocation.description` on both Demand and Property. | The MongoDB wrapper reads `microLocation.description` from both Demand and Property and maps it to the Location field used by the V1 relevance engine. | V2 stores Location in the `locality` field on both Demand and Property, with `city` maintained as a separate field. |
| 6 | Possession | Possession is evaluated using the approved urgency hierarchy.<br><br> Property availability earlier than or equal to the Demand requirement receives a full score, one urgency level later receives a partial score (0.8), two urgency levels later receives a lower partial score (0.5), and more than two urgency levels later receives no score (0). | Demand stores `possessionFrom`, while Property stores `possession`. | The MongoDB wrapper reads Demand `possessionFrom` and Property `possession`, converts both values into the approved urgency hierarchy, and applies the approved bucket-based scoring. | Both Demand and Property store the Possession field using the common `propertyAvailableFrom` field. |
| 7 | Other Interested Location | Other Interested Location is not part of the approved V1 relevance engine. <br><br>.The match score logic mentioned as “If it matches with the location critera then it should be given 0.9 so that it can be shown with a % drop “<br><br>During the current V1-to-V2 integration, support for this field depends on the approved V2 business requirements and implementation decisions. | Demand stores `otherInterestedLocation` as a structured location object containing location details (such as name, description, placeId, terms, and types), together with the `otherInterestedLocationRequired` flag. Property does not maintain a separate Other Interested Location field. | No V1 wrapper mapping exists because Other Interested Location is not part of the approved V1 relevance engine. | The V2 Demand schema stores `otherInterestedLocations` as an array of structured location objects (`city`, `locality`). <br><br>Property does not contain a corresponding Other Interested Location field and continues to provide its Primary Location (`city`, `locality`) for comparison. |
| 8 | Carpet Area | Compare the Property Carpet Area against the Demand Carpet Area range. <br><br>Assign a score of 1 when the Property Carpet Area lies within the Demand range, 0.8 when it lies within the approved tolerance, and 0 when it falls outside the permitted tolerance. | Demand stores carpetAreaMin and carpetAreaMax. Property stores carpetAreaMax, which is used for Carpet Area comparison in the approved V1 relevance engine. | The MongoDB wrapper maps Demand carpetAreaMin and carpetAreaMax to the relevance Carpet Area range and maps Property carpetAreaMax to the relevance Carpet Area value. | Demand stores Carpet Area as carpetAreaRange.min and carpetAreaRange.max. Property stores Carpet Area as carpetArea. <br><br>Data type: Integer. |
| 9 | Fitouts | Retail and F&B compare the Property's Fitouts availability against the Demand's Fitouts requirement using binary matching. <br><br>Office compares the Property's Fitouts category against the Demand's required Fitouts category. | Retail: Demand primarily stores 'fitOutsRequired'; 'fitOuts' is not populated. Property stores 'fitOuts'.<br>F&B: Demand stores 'fitOutsStatus'. Property stores 'fitOuts'.<br>Office: Demand and Property both store 'fitOuts' as categorical values. | Retail: Wrapper maps Demand 'fitOuts' and Property 'fitOuts'.<br><br>F&B: Wrapper maps Demand 'fitOutsStatus 'and Property 'fitOuts'.<br><br>Office: Wrapper maps Demand 'fitOuts' and Property 'fitOuts'. | Demand: 'fitOutStatus', 'fitoutsRequired'<br><br>Property: 'fitOutStatus', 'fitoutsAvailable'<br><br>Data Types: 'fitOutStatus' – String; <br><br>'fitoutsRequired' – Boolean; <br>'fitoutsAvailable' – Boolean. |
| 10 | Floor | Floor represents the physical location of the Property. <br><br>When Store Type is specified, Floor is evaluated together with Store Type using the approved Store Type–specific Floor matching rules. <br><br>When Store Type is not specified, Floor is evaluated independently using exact Floor matching. | Demand uses 'floor' to store Floor Preference and 'buildingStructure[0].label' to store Store Type. <br><br>Property uses 'additionalDetails.floor' to store the actual Floor and 'additionalDetails.buildingStructure' to store Store Type. | The MongoDB wrapper maps Demand 'floor 'and Property 'additionalDetails.floor', <br><br>and also maps Demand 'buildingStructure[0].label' and Property 'additionalDetails.buildingStructure' to apply the approved Store Type-specific Floor matching rules. | Demand: 'floorPreference' (String). <br><br>Property: 'floor' (String). |
| 11 | Ceiling Height | Ceiling Height is evaluated by comparing the Property's available clear ceiling height with the Demand's minimum required ceiling height. <br><br>Exact match scores 1, Property Ceiling Height greater than the Demand scores 0.8, and Property Ceiling Height less than the Demand scores 0. | Demand uses 'ceilingHeight' to store the minimum required ceiling height. Property uses 'ceilingHeight' to store the available clear ceiling height. The Demand schema also contains 'ceilingHeightRequired' (Boolean), which is not used by the approved V1 relevance logic. | The MongoDB wrapper directly compares Demand 'ceilingHeight' with Property 'ceilingHeight' using the approved V1 Ceiling Height relevance logic. <br><br>The Boolean field 'ceilingHeightRequired' is not part of the current wrapper implementation. | Demand: 'ceilingHeightMinFt' (Integer). <br><br>Property: 'ceilingHeightFt' (Integer). |
| 12 | Frontage | Frontage is evaluated by comparing the Property's available frontage with the Demand's minimum required frontage. <br><br>An exact frontage match scores 1. <br><br>If the Property frontage is unavailable or does not exactly match the Demand frontage, the score is 0.5. If the Demand does not specify a frontage requirement, the field is excluded from relevance scoring. | Demand uses 'frontage' to store the minimum required frontage. Property uses 'additionalDetails.frontAge' to store the available frontage. The Demand schema also contains 'frontageRequired' (Boolean), which is not used by the approved V1 relevance logic. | The MongoDB wrapper compares Demand 'frontage' with Property 'additionalDetails.frontAge' using the approved V1 Frontage relevance logic. The Boolean field 'frontageRequired' is not part of the current wrapper implementation. | Demand: 'frontageMinFt' (Integer). <br><br>Property: 'frontageFt' (Integer). |
| 13 | Store Type | Store Type is an optional field. If the Demand specifies a Store Type, the extracted Demand Store Type must exactly match the Property Store Type to receive a score of 1; otherwise, the score is 0. If the Demand does not specify a Store Type, the field is excluded from relevance scoring.<br><br>The earlier PR allowed multiple Demand Store Types, whereas the approved V1 relevance logic evaluated only a single Store Type. The PR has now been updated so that both Demand and Property use single-select Store Type, bringing the PR in line with the approved V1 relevance logic. | Demand stores Store Type in 'buildingStructure[].label'. The approved V1 relevance logic evaluates a single extracted Store Type. Property stores Store Type in 'additionalDetails.buildingStructure'. The Demand schema also contains 'buildingStructureRequired', which is not used by the approved V1 relevance logic. | The MongoDB wrapper extracts a single Demand Store Type from 'buildingStructure[].label' and compares it with Property 'additionalDetails.buildingStructure' using the approved V1 exact-match logic. The field 'buildingStructureRequired' is not part of the current wrapper implementation. | Demand: 'storeTypes' (List). <br><br>Property: 'storeType' (List). |
| 14 | Cooking Type / Gas Connection | Cooking Type is an optional relevance field. If the Demand specifies a Cooking Type, the Property is evaluated according to the approved V1 Cooking Type relevance rule. If the Demand does not specify a Cooking Type, the field is excluded from relevance scoring.<br><br>In the approved V1 relevance logic, the Demand Cooking Type is not directly compared with a Property Cooking Type. Instead, the evaluation is based on whether the required Gas Connection is available in the Property.<br><br>Scoring:<br><br>1 → The required Gas Connection is available in the Property.<br>0 → The required Gas Connection is not available in the Property. | No confirmed Demand Cooking Type or Property Gas Connection field was identified in the reviewed V1 F&B Demand or Property MongoDB records. <br><br>Although the approved V1 relevance logic compares Demand Cooking Type with Property Gas Connection availability, the reviewed V1 MongoDB assessment did not identify the corresponding fields used to implement this comparison. | No confirmed V1 wrapper mapping was identified for Cooking Type. The approved V1 relevance logic indicates a comparison between Demand Cooking Type and Property Gas Connection availability, but the reviewed V1 implementation did not identify the corresponding MongoDB fields or wrapper mapping. | Demand:<br> 'cookingTypes' (List), <br>'gasLineRequired' (Boolean). <br><br>Property:<br> 'cookingTypes' (List). <br>No confirmed Property Gas Connection field was identified in the reviewed V2 schema. |
| 15 | Non-Veg Served | Non-Veg Served is an optional field.<br><br>If the demand specifies “Non-veg served = Yes” and the property also allows non-veg, it is considered a match (score = 1).<br>If it does not match, it is a no match (score = 0).<br><br>If the Demand does not specify the requirement, exclude the field from relevance scoring. | No direct MongoDB field representing Non-Veg Served (Demand) or Non-Veg Allowed (Property) was identified in the reviewed V1 F&B MongoDB records. | No wrapper mapping was identified for Non-Veg Served or Non-Veg Allowed in the current V1 implementation. | Demand: 'nonVegServed '(Boolean). <br><br>Property: 'nonVegAllowed' (Boolean). |
| 16 | Number of Seats | Treat the Demand Number of Seats as the minimum seating requirement. Compare the numeric Demand seat requirement with the Property seat capacity. <br><br>If Property Seats ≥ Demand Seats, assign Match Score = 1. <br><br>If Property Seats < Demand Seats, assign Match Score = 0. <br><br>The latest PR uses a numeric input with a minimum value of 20 seats, replacing the earlier categorical seat ranges. | Demand: 'format.noOfSeat'. <br><br>Property: No Property-side Number of Seats field was identified in the reviewed V1 MongoDB records.. | Demand: 'format.noOfSeat'. <br><br>Property: No wrapper mapping was identified because a corresponding Property seat-count field could not be confirmed in the reviewed V1 MongoDB records. | Demand: 'numberOfSeatsMin', 'numberOfSeatsBucket'. <br><br>Property: 'numberOfSeats', 'formats.availableSeats', 'formats.totalSeats' |
| 17 |  |  |  |  |  |

##### Table C. V2 data, deviation, required DB and wrapper change

| Sheet row | Field | V2 Data Availability / Observation | PR-to-V2 Deviation / Implementation Gap | Required V2 Database Update | Required MongoDB Wrapper Change |
|---|---|---|---|---|---|
| 2 | Asset Class | `assetClass` is available in all reviewed Demand and Property records and uses the same string-based representation on both sides, supporting direct comparison without a Property Type lookup.<br><br>The distinct values in the updated V2 database are:<br><br>f-and-b<br>managed-space<br>office<br>retail<br><br>V2 Data Observation: assetClass is represented as a scalar string on both Demand and Supply. In the reviewed updated V2 data, Managed Space is consistently represented as managed-space. The field is fully populated across the reviewed Demand and Supply collections, with no missing, null, or empty-string values observed. | V2 Data Observation: The updated V2 database currently standardizes Managed Space records under the scalar assetClass = "managed-space" on both Demand and Supply, while the latest PR uses multiple business/UI labels across different Managed Space/Managed Office/Flex journeys.<br><br>Business / Technical Confirmation Needed: Confirm whether Managed Space, Flex Space, Managed Office, Managed Offices, and Managed Office Space are all intended to map to the canonical V2 backend Asset Class managed-space for relevance evaluation, rather than being treated as distinct Asset Classes. | No database update is required for the currently approved logic, provided V2 Asset Class values remain consistently populated and standardized. <br><br>Any approved equivalent-category mapping should be documented and handled through an agreed mapping approach. | Update the wrapper to read `assetClass` directly from the V2 Demand and Property collections instead of using the Property Type lookup. <br><br>If the business approves equivalence mappings between different Asset Class values (e.g., Retail ↔ F&B or Managed Office ↔ Flex Space), first update the approved relevance logic, then implement the approved mappings in the MongoDB wrapper. Since this changes the matching logic, regenerate the relevance data and perform the required validation or retraining before testing the updated implementation. |
| 3 | Transaction Type | The Transaction Type field is available in both Demand and Property, uses consistent business values (e.g., Buy, Lease), and has a consistent String datatype. The reviewed V2 data does not show the earlier V1 Buy vs Sale representation mismatch, thereby supporting the approved V1 exact-match relevance logic.<br><br>For Managed Space, the current PR primarily represents Lease on the Demand side, while some Supply/Property PR journeys provide Lease and Sale as possible values. However, in the reviewed updated V2 data, all 34 Managed Space Demands and all 18 Managed Space Supplies currently have transactionType = "lease". | No V2 schema gap is identified. <br><br>The implementation consideration is whether Buy and Sale should be treated as equivalent business transactions before applying the approved exact-match logic. | No database update is required for the current V1 relevance engine integration. <br><br>If business approves additional Transaction Type mappings, the supported values should remain standardized across Demand and Property. | The reviewed V2 database currently stores identical Transaction Type values (buy, lease) on both Demand and Property. Therefore, no normalization is required for the current integration. <br>If future V2 data or PR updates introduce Demand=Buy and Property=Sale, the required business-approved equivalence can be implemented through MongoDB wrapper normalization without changing the approved V1 relevance logic. |
| 4 | City | The dedicated `city` field is available in all reviewed Demand and Property records. <br><br>V2 provides a cleaner representation than V1 because City is no longer derived from a broader location field that may contain mixed geographic information. <br><br>The value `PAN_INDIA` is also present and requires separate business clarification. | No V2 schema gap is identified. <br><br>The main implementation change is to replace V1 City derivation from `location` with direct reading of the V2 `city` field. <br>The business behavior of `PAN_INDIA` remains undefined. | No database update is required for the current V2 schema. <br><br>Any approved handling of `PAN_INDIA` should be supported through agreed business rules rather than changing the stored City values. | Update the MongoDB wrapper to read `city` directly from the V2 Demand and Property records instead of deriving it from `location`. <br><br>No dataset regeneration is required for the current V1 integration. |
| 5 | Location | The V2 `locality` field is available on both Demand and Property. <br><br>However, `locality` contains mixed levels of geographic detail, inconsistent formats, case variations, aliases, trailing spaces, and apparent test/generated values. <br><br>V2 stores `city` and `locality` as separate fields, but Area and Micro-location are not represented separately and are instead combined within the free-text `locality` field. | No schema gap exists for integrating the existing V1 relevance engine through MongoDB wrapper changes. <br><br>However, the current `locality` field alone does not support the proposed hierarchy-based Location model without additional backend standardization. | No database update is required for the current V1 relevance engine integration. <br><br>Any future structured Location hierarchy should be introduced through a separate database enhancement. | Update the MongoDB wrapper to read the V2 `locality` field instead of `microLocation.description` while preserving the approved V1 Location behaviour. |
| 6 | Possession | The V2 `propertyAvailableFrom` field is available on both Demand and Property collections using the same standardized urgency values. <br><br>However, the field is not populated in all records, with missing values observed on both Demand and Property sides.<br><br>Demand: 80 / 92 (86.96%)<br>Property: 94 / 127 (74.02%) | No implementation gap exists for integrating the existing V1 relevance engine. <br><br>Update the MongoDB wrapper to use the common V2 `propertyAvailableFrom` field while preserving the approved urgency-based scoring logic. | No V2 database schema update is required for integrating the existing V1 relevance engine.. | Update the MongoDB wrapper to read the V2 `propertyAvailableFrom` field instead of the V1 `possessionFrom` and `possession` fields while preserving the approved urgency-based scoring logic. |
| 7 | Other Interested Location | The V2 'otherInterestedLocations' field is available on the Demand collection as an array of location objects containing 'city' and 'locality'. Property does not maintain a corresponding Other Interested Location field and continues to use its Primary Location for comparison. | Other Interested Location is introduced as a new PR requirement and is not supported by the current V1 relevance engine. | No V2 database schema update is required for integrating the existing V1 relevance engine. | No V1 wrapper mapping exists because Other Interested Location is not part of the approved V1 relevance engine. |
| 8 | Carpet Area | The V2 schema represents Demand Carpet Area as a structured minimum–maximum range and Property Carpet Area as a single integer value. Carpet Area data is available across Retail, Office, and F&B, with only minor missing values observed. | No V2 schema gap exists for integrating the existing V1 relevance engine. <br><br>The MongoDB wrapper mappings must be updated to use the corresponding V2 Carpet Area fields while preserving the approved range-based comparison logic. Any proposed tolerance changes remain subject to business approval. | No V2 database schema update is required for integrating the existing V1 relevance engine. | Update the MongoDB wrapper to read Demand carpetAreaRange.min and carpetAreaRange.max and Property carpetArea while preserving the approved range-based comparison logic. |
| 9 | Fitouts | fitOutStatus is populated in 43 of 92 Demand records and 84 of 127 Property records. <br><br>fitoutsRequired and fitoutsAvailable are present in the schema but are sparsely populated. <br><br>The current V2 schema represents Fitouts primarily through fitOutStatus on both Demand and Property. <br><br>The detailed Office Fitout categories used by the approved V1 relevance logic, such as Bare Shell, Warm Shell, Fully Furnished, Semi Furnished, and Owner to do Fitout, were not found in the reviewed V2 data.<br> V2 instead uses a simplified Fitouts representation through fitOutStatus, with Demand values furnished and unfurnished, and Property values furnished, unfurnished, and landlord_fitout. | The V2 Fitouts schema is common across Retail, Office, and F&B, but the approved V1 interpretation and current V1 field mappings differ by asset class. <br><br>Retail and F&B use binary requirement-versus-availability logic, while Office uses categorical Fitouts matching. <br><br>Retail Demand primarily populates 'fitOutsRequired', <br><br>F&B Demand uses 'fitOutsStatus', and Office uses categorical 'fitOuts' on both Demand and Property. <br><br>In V2, 'fitOutStatus' is the primary populated field, while 'fitoutsRequired' and  'fitoutsAvailable' are sparsely populated. <br><br>Additionally, the detailed Office Fitout categories required by the approved V1 relevance logic were not found in the reviewed V2 data. | Finalize the V2 Fitouts field mappings and ensure the required Fitouts fields are available and consistently populated to support integration of the existing V1 relevance engine. | Update the MongoDB wrapper to use the finalized V2 Fitouts field mappings for each asset class. |
| 10 | Floor | Demand stores Floor Preference values (e.g., ground, any, 1_to_5, 5_to_10), <br><br>while Property stores actual Floor values (e.g., basement, ground, upper_ground, 1st_floor, 2nd_floor, 3rd_floor, above_3rd_floor). <br><br>Floor data is available on both Demand and Property, but Demand and Property use different value representations that require business-approved mapping before comparison.<br><br>For Retail, the Demand floorPreference values are ground and any. On the Property side, floor contains values such as ground, upper_ground, 1st_floor, 2nd_floor, 3rd_floor, above_3rd_floor, and basement.<br><br>For F&B, the Demand also uses ground and any, while the Property contains values such as ground, upper_ground, 1st_floor, above_3rd_floor, and basement.<br><br>The 1_to_5 and 5_to_10 Demand preferences actually belong to Office, not Retail or F&B. And in the reviewed V2 data, Office Properties do not currently have populated floor values. Since Floor is not part of the current Office relevance fields, I am keeping that separate from the Retail and F&B Floor discussion. <br><br>Property-side Floor data is also not available for all records.<br><br>Demand records with floorPreference: 69 / 92<br>Property records with floor: 54 / 127 | The approved V1 relevance logic evaluates Floor together with Store Type using Store Type-specific matching rules. <br>The current V2 relevance logic proposes direct Floor matching without explicitly incorporating the approved Store Type-dependent rules. <br><br>Business confirmation is required to determine whether the existing Store Type dependency should be retained. Additionally, Demand and Property use different Floor value representations, requiring business-approved mapping before comparison. | Finalize the V2 Floor field mappings, ensure the required Floor data is consistently populated, and finalize the business-approved mapping between Demand Floor preferences and Property Floor values. | Update the MongoDB wrapper to use V2 'floorPreference' and 'floor', preserve the approved Store Type-dependent Floor logic, and apply the finalized business-approved mapping between Demand Floor preferences and Property Floor values during relevance evaluation. |
| 11 | Ceiling Height | Demand stores the minimum required ceiling height, while Property stores the available clear ceiling height. Both fields remain numeric and are directly comparable. The V2 schema supports the approved V1 relevance logic without structural changes, although Ceiling Height data is currently populated only for a subset of V2 Demand and Property records (Demand: 33/92; Property: 56/127). | The approved V1 relevance logic compares Ceiling Height using the existing scoring rules (Exact = 1, Property > Demand = 0.8, Property < Demand = 0). <br><br>The current V2 relevance logic proposes revised scoring with a +30% upper tolerance and a score of 0.9 for properties within the tolerance range. <br><br>Business confirmation is required before replacing the approved V1 scoring logic. | No V2 database schema update is required. The existing V2 Ceiling Height fields support the approved V1 relevance logic. | Update the MongoDB wrapper to use V2 'ceilingHeightMinFt' and 'ceilingHeightFt' while preserving the approved V1 Ceiling Height relevance logic until any revised V2 scoring rules are approved. |
| 12 | Frontage | Demand stores the minimum required frontage, while Property stores the available frontage. Both fields are numeric integers and directly comparable. The V2 schema supports the approved V1 relevance logic without structural changes, although Frontage data is currently populated only for a subset of V2 Demand and Property records (Demand: 34/92; Property: 48/127). | The approved V1 relevance logic evaluates Frontage using exact-match scoring (Exact = 1; Property Frontage unavailable or not exactly matching = 0.5). The current V2 fields support the approved V1 implementation. However, we need business confirmation on whether to retain this scoring or revise it so that Properties with Frontage greater than or equal to the Demand's minimum Frontage receive a higher score than non-matching or missing values. | No V2 database schema update is required. The existing V2 Frontage fields support the approved V1 relevance logic. <br><br>Improve the completeness of Frontage data population in V2. | Update the MongoDB wrapper to use V2 'frontageMinFt' and 'frontageFt' while preserving the approved V1 Frontage relevance logic until any revised business scoring rules are approved. |
| 13 | Store Type | The current V2 schema supports list-based Store Type representation for both Demand and Property. This reflects the earlier PR, where Demand Store Type was defined as a multi-select field. However, the latest PR has been updated so that both Demand and Property are single-select.<br><br>In the reviewed V2 data, the Property Store Type is represented as a one-element list whenever it is populated. On the Demand side, most populated records contain a single Store Type, while 11 reviewed records contain two Store Types, reflecting the earlier multi-select design. Store Type data is currently populated only for a subset of the reviewed V2 records (Demand: 51/92; Property: 60/127). | The current V2 schema and existing data still reflect the earlier multi-select Demand Store Type design, while the latest PR now defines Store Type as single-select on both Demand and Property. The approved V1 relevance logic also evaluates a single Store Type using exact matching. Therefore, the remaining implementation gap is to align the V2 Store Type representation/data with the latest single-select requirement and define how existing V2 Demand records containing multiple Store Types should be handled. | Align the current V2 Store Type representation with the latest PR, which defines Store Type as a single-select field for both Demand and Property. Existing V2 Demand records containing multiple Store Type values should be standardized according to the finalized business decision.<br><br>Retain only the approved V2 Store Type values and define the business-approved mapping for legacy V1 Store Type values (such as Independent Building, Mixed Use, Kiosks, and Store-in-store) if they continue to participate in relevance evaluation. | Update the MongoDB wrapper to read Store Type from the V2 storeTypes and storeType fields and map the V2 representation to the single Store Type format expected by the approved V1 relevance logic. Existing V2 Demand records containing multiple Store Types should be handled according to the agreed V2 alignment approach. |
| 14 | Cooking Type / Gas Connection | Cooking Type is currently observed only for the F&B asset class, which is consistent with the latest PR.<br><br>The current V2 schema introduces cookingTypes on both the Demand and Property sides. Although the latest PR defines Cooking Type as a single-select field, the current V2 schema stores cookingTypes as a list, (may be reflecting the earlier multi-select design). <br><br>In the reviewed V2 data, both Demand and Property contain records with one or two Cooking Type values.<br><br>The observed cookingTypes values on both Demand and Property are electric and gas. Cooking Type is populated only for a subset of the reviewed records (Demand: 15/92; Property: 24/127).<br><br>V2 also introduces the Demand-side boolean field gasLineRequired, which is populated only as True in the reviewed data. No corresponding Property-side field representing Gas Connection or Gas Line Required was identified.<br><br>Since the approved V1 relevance logic compares Demand Cooking Type with Property Gas Connection availability, business clarification is required to determine which V2 field(s) should represent the approved Property Gas Connection concept for future relevance evaluation. | The PR represents Cooking Type on both Demand and Property, whereas the approved F&B relevance logic compares Demand Cooking Type with Property Gas Connection availability.<br> Although the latest PR defines Cooking Type as a single-select field, the current V2 schema still stores cookingTypes as a list, reflecting the earlier multi-select design, and the reviewed V2 data contains records with one or two Cooking Type values on both Demand and Property. <br>In addition, the reviewed V2 schema contains cookingTypes and gasLineRequired on the Demand side, but only cookingTypes on the Property side; no Property field representing Gas Connection was identified. Therefore, the approved F&B Cooking Type relevance logic cannot be directly implemented until the Property-side representation and the corresponding business matching rule are finalized. | Align the current V2 cookingTypes representation with the latest PR, which defines Cooking Type as a single-select field for both Demand and Property. Existing V2 records containing multiple Cooking Type values should be standardized according to the finalized business decision.<br><br>If Property cookingTypes is approved as the representation for the approved Cooking Type relevance logic, no additional Property field is required. Otherwise, if Property Gas Connection availability must continue to be evaluated separately, an existing Property field should be identified or a standardized Property-side Gas Connection field should be introduced. | Add new F&B-specific wrapper logic to read and normalize the approved V2 Cooking Type field(s) and calculate Cooking Type compatibility. <br><br>This is a new field-level implementation because the Retail-based relevance engine currently used for F&B does not include Cooking Type. The final wrapper logic depends on business confirmation of the approved V2 representation and matching rule. |
| 15 | Non-Veg Served | Non-Veg fields are currently observed only for the F&B asset class, which is consistent with the latest PR. The reviewed V2 schema introduces nonVegServed on the Demand side and nonVegAllowed on the Property side. <br><br>Although the latest PR represents these fields as single-select Yes/No values, the V2 schema stores them as Boolean (True/False) values, which are functionally equivalent. The fields are populated only for a subset of the reviewed V2 records (Demand: 15/92; Property: 22/127).<br><br> In the reviewed data, only True values were observed; no explicit False values were found. Therefore, additional validation is required to confirm whether False represents an explicit business value or whether missing (null) values indicate "No" or "Not Specified." | The PR represents the field as Yes/No, while V2 stores it as Boolean (True/False). This is a representation difference only and does not require a logic change, provided the backend consistently maps Yes ↔ True and No ↔ False. | No major V2 database schema update is required. The existing Boolean fields nonVegServed (Demand) and nonVegAllowed (Property) are functionally equivalent to the latest PR Yes/No representation. <br><br>However, the handling of explicit False values and missing (null) values should be finalized and consistently represented in the V2 data. | Add new F&B-specific wrapper logic to read Demand 'nonVegServed' and Property 'nonVegAllowed' and apply the approved compatibility rule. If Demand does not specify the requirement, exclude the field from relevance scoring. The wrapper must distinguish 'false' from a missing value. |
| 16 | Number of Seats | Number of Seats is currently observed only for the Managed Space asset class. <br><br>The reviewed V2 schema represents the Demand requirement using both 'numberOfSeatsMin' (integer) and 'numberOfSeatsBucket'(categorical bucket). <br><br>On the Property side, seat information is represented using both the top-level 'numberOfSeats' field and the nested 'formats' array ('availableSeats', 'totalSeats', 'pricePerSeat'). <br><br>Seat-related data is available only for a very small subset of the reviewed V2 records (Demand: 1 record; Property: 1 'numberOfSeats' record and 2 'formats' records), which is insufficient to validate all expected business scenarios and representations.<br><br>Top-level numberOfSeats<br><br>Distinct values: [50]<br><br>formats.availableSeats<br><br>Distinct values: [6, 18, 25, 30, 60, 80]<br><br>formats.totalSeats<br><br>Distinct values: [8, 30, 40, 50, 60, 80] | The approved relevance logic expects a single numeric Demand seat requirement and a single Property seat count for comparison. However, the reviewed V2 schema currently provides multiple Demand representations (numberOfSeatsMin, numberOfSeatsBucket) and multiple Property representations (numberOfSeats, formats.availableSeats, formats.totalSeats). The authoritative Demand and Property fields for relevance evaluation have not yet been finalized. | No immediate V2 database schema update is required. <br><br>The authoritative Demand field (numberOfSeatsMin or numberOfSeatsBucket) and the authoritative Property seat representation (numberOfSeats, formats.availableSeats, or formats.totalSeats) should be finalized through business and backend agreement. If multiple Property representations are retained, a clear precedence or selection rule should be defined before relevance implementation. | Implement V2 wrapper logic to read the business-approved Demand and Property seat fields and apply the approved seat comparison logic. <br><br>If multiple Property seat fields are retained, implement the agreed precedence or selection logic before relevance scoring. |
| 17 |  |  |  |  |  |

##### Table D. Prerequisite, clarifications and risk

| Sheet row | Field | Data Dependency / Prerequisite | Business Clarification / Decision Needed | Technical Clarification / Decision Needed | Risk / Concern |
|---|---|---|---|---|---|
| 2 | Asset Class | `assetClass` should be available and consistently populated on both Demand and Property. If different Asset Class values are approved to represent the same business category, the agreed mappings should be documented before implementation. | For Asset Class, the PR uses terms such as Managed Space Operator, Managed Office, and Flex Property in different places.<br>However, in the latest V2 database, the Asset Class representation itself is consistent.<br>Both Demand and Property currently use the same four Asset Class values: Retail, Office, F&B, and Managed Space.<br>So from the relevance-engine perspective, I don't see a mapping issue in the current V2 data. We can use the V2 Asset Class value directly for matching.<br><br>1. Confirm that 'managed-space' is the standard Asset Class value intended for relevance, and that terms such as Managed Office or Flex Property used elsewhere in the PR are business/UI terminology rather than additional Asset Class values that need separate relevance handling.<br><br>2. Confirm whether Asset Class should permanently remain a strict exact-match criterion or whether business-approved mappings between related Asset Classes (e.g., Retail ↔ F&B or Managed Office ↔ Flex Space) should be supported. | If business approves Asset Class equivalence, decide whether it should be handled through MongoDB wrapper mapping or another implementation approach, and whether equivalent Asset Classes should receive a full or partial match. | If Asset Class values are inconsistent, or if approved business mappings are not implemented correctly, valid Demand–Property pairs may be incorrectly rejected or scored. |
| 3 | Transaction Type | Final business-approved Transaction Type values and any approved equivalent mappings must be confirmed before implementation. | Identified a potential issue from the PR because purchase transactions were represented as Buy on the Demand side and Sale on the Property side.  If those values reached the relevance engine as Buy versus Sale, an exact match would fail even though they represent the same business transaction.<br><br>However, in the latest V2 database review, I am not seeing that Buy-versus-Sale mismatch in the actual stored data. The Demand and Property representation is currently consistent, which supports continuing with the approved exact-match logic.<br><br> 3. Confirm that this consistent representation is intentional and will remain the standard for V2. | If Buy and Sale are approved as equivalent, decide whether the equivalence should be handled through MongoDB wrapper normalization or another implementation approach. | Without normalization, valid purchase matches may be excluded because Demand uses Buy while Property uses Sale. Incorrect or uncontrolled mappings may also create invalid matches. |
| 4 | City | The V2 `city` field must remain consistently populated on both Demand and Property. <br><br>Any special City values, including `PAN_INDIA`, must be business-approved before special handling is implemented. | 4. Confirm how `PAN_INDIA` should be treated when it appears on the Demand side, Property side, or both, including whether it should receive a full match, partial match, or no special handling. | If business approves special handling for `PAN_INDIA`, decide whether it should be implemented through configurable wrapper logic or another comparison approach. | Undefined `PAN_INDIA` behaviour may lead to inconsistent City matching. <br><br>Missing or inconsistent City values may also exclude valid matches. |
| 5 | Location | The V2 `locality` field must remain consistently populated on both Demand and Property. <br><br>Future hierarchy-based matching depends on standardized geographic data. | 5.Decide whether hierarchy-based Location matching should replace the current approach, how City, Location, and Other Interested Location should contribute to the final relevance score, <br>6. whether different geographic levels should receive different scores, <br>7. and how Other Interested Location should participate in scoring. | The backend team indicated that a Google Address Picker and revised location model are under consideration. <br><br>If approved, decide how the standardized location hierarchy should be represented . | Inconsistent or free-text locality values may reduce matching accuracy. <br><br>Future hierarchy-based matching cannot be reliably implemented until standardized geographic data becomes available. |
| 6 | Possession | The V2 `propertyAvailableFrom` field must be available on both Demand and Property. <br><br>If the field is missing, the MongoDB wrapper should follow the approved business rule for handling missing values during relevance evaluation. | For Retail, I noticed that the proposed V2 relevance logic reduces the Possession weight from 10% to 5%.<br><br>8. Is the Possession field considered less important now from a business perspective, or was the weight reduced mainly to accommodate the newly added relevance fields, such as Other Interested Location, while keeping the total weight at 100%?<br><br>9. Since `possessionFromRequired` is marked True for almost all Retail Demand records inV1, confirm whether Possession should continue to be treated as an optional field. But, The V2 schema does not use a field named possessionFromRequired; <br><br>10. If a Demand specifies a Possession requirement but the corresponding Property has no `propertyAvailableFrom` value, decide whether the field should receive a score of 0, be excluded from scoring, or follow another approved business rule. | Confirm whether using `propertyAvailableFrom` on the Demand collection to represent the business concept "Possession Needed" is intentional.If not, decide whether the Demand field should be renamed to better reflect its business meaning in a future schema update, while maintaining compatibility with the current implementation. | Missing `propertyAvailableFrom` values may affect relevance evaluation if not handled consistently. <br><br>Business and technical decisions on missing-value handling should be finalized before implementation. |
| 7 | Other Interested Location | The V2 `otherInterestedLocations` field must be available on the Demand collection, and the Property's Primary Location (`city`, `locality`) must be available for comparison. | 11. Confirm whether a Property matching an Other Interested Location should receive a reduced Location score (for example, 0.9) compared with a Primary Location match. <br><br>12. Confirm whether Other Interested Location should extend the existing Location score or be treated as a separate weighted field. <br><br>13. If multiple Other Interested Locations match, decide whether only the highest applicable score should be used. | Confirm how future standardized location structures (for example, Google Address Picker or location hierarchy) should be used for both Primary Location and Other Interested Location. | Location relevance may be overrepresented if City, Primary Location, and Other Interested Location contribute independently to the final relevance score. The interaction between these location-related fields should be finalized before implementation to avoid duplicate scoring. |
| 8 | Carpet Area | The V2 Demand carpetAreaRange.min and carpetAreaRange.max fields and the Property carpetArea field must be available for relevance evaluation. | 14. Confirm whether the proposed upper tolerance should be increased from +10% to +20% while retaining the lower tolerance at −10%, <br><br>15. and whether the revised tolerance should apply consistently across Retail, Office, and F&B. | Confirm that carpetAreaRange.min, carpetAreaRange.max, and carpetArea are the finalized V2 fields for Carpet Area relevance scoring. | Incorrect Carpet Area field mappings or inconsistent tolerance settings may affect relevance scoring consistency across asset classes. |
| 9 | Fitouts | The finalized V2 Fitouts field mappings, required data population, and standardized value representations must be available before integrating and testing the existing V1 relevance engine with the V2 database. | Confirm the V2 Fitouts matching logic and field mapping by asset class.<br><br>16.Retail & F&B: Confirm whether the approved V1 requirement-versus-availability (Yes/No) matching logic should continue in V2. V2 contains both "fitOutStatus" and the Boolean "fitoutsRequired / fitoutsAvailable" fields; however, the Boolean fields are almost entirely unpopulated, while "fitOutStatus" has substantially better population. If the Yes/No logic continues, confirm whether relevance should use "fitoutsRequired / fitoutsAvailable" as indicated by the PR, or whether "fitOutStatus" is intended to represent Fitouts for these asset classes going forward.<br><br>17. Also confirm the business meaning of Demand `fitoutsRequired = False`: does it mean **Fitouts are simply not required / there is no Fitouts restriction**, in which case the field should be excluded from relevance scoring, or does it mean the Demand **specifically requires a Property without Fitouts**?<br><br>This confirmation is required before finalizing the Demand-side wrapper treatment of `fitoutsRequired = False`.<br><br>18. Office: Confirm whether the detailed V1 Fitout categories should be retained/mapped to V2 or replaced by matching based on the simplified V2 values (furnished, unfurnished, landlord_fitout), and define the approved Demand–Property matching behaviour accordingly. For example, clarify how V1 categories such as Bare Shell, Warm Shell, Fully Furnished, Semi Furnished, and Owner to do Fitout should map to the V2 values, and whether combinations such as Demand unfurnished vs Property landlord_fitout should receive a full, partial, or no match.<br><br>### Office `landlord_fitout`<br><br>19. For Office, confirm how Property/Demand `fitOutStatus = landlord_fitout` should participate in relevance matching.<br><br>Specifically, confirm the approved match behaviour between `landlord_fitout` and the other Office Fitout categories such as `furnished` and `unfurnished`.<br><br>For example:<br><br>20.- Should `landlord_fitout` match only another `landlord_fitout` value?<br>21. - Should `landlord_fitout` be treated as equivalent to `furnished` or `unfurnished` in any case?<br>22. - Should combinations such as Demand `unfurnished` vs Property `landlord_fitout` receive a full match, partial match, or no match?<br><br>This clarification is required before introducing any category-equivalence or special matchscore handling for `landlord_fitout`. | Confirm which V2 Fitouts fields should be used for each asset class, define the required value normalization rules, and  we need to define how the approved Office Fitout categories (such as Bare Shell, Warm Shell, Fully Furnished, Semi Furnished, and Owner to do Fitout) will be mapped to the available V2 values. | If the V2 Fitout representation is not aligned with the finalized asset-class-specific matching logic, Fitout relevance scores may not reflect the intended business behaviour. |
| 10 | Floor | The finalized V2 Floor field mappings, required Floor data population, business-approved Floor value mapping, and standardized Store Type values must be available before integrating and testing the existing V1 relevance engine with the V2 database. | For Retail and F&B, confirm how the V2 Demand 'floorPreference' should be evaluated against the Property’s actual floor. Specifically:<br><br>      23. - When Demand 'floorPreference = any', should every populated Property Floor receive a full match?<br>      24. -When Demand 'floorPreference = ground', should only Property 'ground' receive a full match, or should any other Property Floor category, such as 'upper_ground', also be considered a full or partial match?<br><br>25. Also confirm whether these V2 Floor values should continue to follow the approved V1 Store Type-dependent Floor rules, or whether any revised Floor matching behaviour is intended for V2.<br><br>26. If the Store Type dependency continues, how should the V1 Store Type values that are not currently represented in V2 be handled? | Once the business mapping is approved, should the Demand Floor Preference–to–Property Floor comparison be implemented through the relevance/backend mapping logic, or is any change to the current V2 Floor representation required? | Incorrect Store Type mapping, incorrect Floor value mapping, or incomplete Floor data may result in incorrect relevance scoring during V1-to-V2 integration. |
| 11 | Ceiling Height | V2 Ceiling Height data ('ceilingHeightMinFt' and 'ceilingHeightFt') must be available for Demand and Property records before integrating and testing the existing V1 relevance engine with the V2 database. | 27. Confirm whether the proposed V2 Ceiling Height scoring logic (including the +30% upper tolerance and revised scores) should replace the approved V1 scoring logic. <br><br>28. Confirm how unusually high Ceiling Height values should be handled during relevance evaluation. | Confirm whether 'ceilingHeightRequired' (Which is in V1) is intended only as a UI/validation indicator or whether it should have any role in future relevance evaluation. | Adopting unapproved scoring changes, incomplete Ceiling Height data, or unrealistic Ceiling Height values may result in incorrect relevance scoring. |
| 12 | Frontage | V2 Frontage data ('frontageMinFt' and 'frontageFt') must be available for Demand and Property records before integrating and testing the existing V1 relevance engine with the V2 database. | 29. Confirm whether the approved V1 Frontage scoring should be retained or revised so that Properties with frontage greater than or equal to the Demand's minimum frontage receive a higher score than non-matching or missing values. <br><br> For example, if the Demand requires a minimum Frontage of 20 ft, should a Property with 25 ft Frontage receive a better match score than a Property with 15 ft Frontage or a Property where Frontage is missing?<br><br>30. Also confirm how missing Property Frontage should be scored when the Demand specifies a Frontage requirement. | Confirm whether 'frontageRequired'(which is in V1) is intended only as a UI/validation indicator or whether it should have any role in future relevance evaluation. | Unapproved changes to the approved V1 scoring logic may affect relevance consistency. <br>Partial V2 Frontage data availability and inconsistent or unrealistic Frontage values may also impact relevance results. |
| 13 | Store Type | V2 Store Type data (storeTypes and storeType) must be available and standardized before integrating and testing the existing V1 relevance engine with the V2 database. Since the latest PR defines Store Type as single-select on both Demand and Property, the existing V2 Demand records containing multiple Store Types require an agreed alignment approach before implementation. | 31. Confirm whether the approved V1 single Store Type matching should continue in V2, now that both Demand and Property are represented as single-select fields in the latest PR.<br><br>32. Confirm how V1 Store Type values such as Independent Building, Mixed Use, Kiosks, and Store-in-store should be handled during V1-to-V2 migration, since the current V2 representation currently contains only High Street and Mall.<br><br>33. Confirm whether the approved V1 dependency between Store Type and Floor should continue in V2, or whether Store Type and Floor should be evaluated independently. | Confirm the V1-to-V2 Store Type value mapping and normalization rules required for the MongoDB wrapper and relevance engine.<br><br>Define the Store Type value normalization and mapping rules between V1 and V2.<br><br>Confirm whether 'buildingStructureRequired'(Which is in V1) is only a UI/validation field or should have any role in relevance scoring. | Failure to align the current V2 Store Type representation with the latest PR, or changes to the approved Store Type–Floor dependency without business approval, may alter the approved V1 relevance results. Incorrect V1-to-V2 Store Type mapping or handling of existing multi-value Demand records may also lead to inaccurate relevance scores. |
| 14 | Cooking Type / Gas Connection | Business confirmation is required to finalize whether Cooking Type relevance should use Property cookingTypes or a separate Property Gas Connection representation. Based on the approved business decision, the required Property-side field(s) must be available, and Cooking Type values must be consistently populated and standardized in V2 before implementation and testing. | 34.Confirm whether Cooking Type relevance should compare Demand and Property 'cookingTypes' directly, or continue to depend on Property Gas Connection availability as defined in the approved F&B relevance logic.<br><br>35. Confirm how the PR Demand value 'Either' should be represented and evaluated in V2, since the reviewed V2 data currently contains only 'gas' and 'electric'.<br><br>36. Confirm whether the current list-based 'cookingTypes' representation in V2 should continue to be supported, or whether it should be aligned with the latest PR, where Cooking Type is defined as a single-select field for both Demand and Property. | Identify the V2 Property field representing Gas Connection if the approved business logic continues to require it.<br><br>After the business decision is finalized, update the MongoDB wrapper to read the approved V2 Cooking Type representation (single-select or list-based) and implement the finalized matching logic. | Implementing Cooking Type relevance without confirming the approved V2 representation and business matching rule could produce relevance scores that differ from the approved F&B relevance logic.<br><br>Incorrect handling of the PR value 'Either', the current list-based V2 cookingTypes representation, existing multi-value Cooking Type records, or the Property Gas Connection representation may also result in inconsistent or incorrect relevance scoring. |
| 15 | Non-Veg Served | No major V2 database schema update is required. The existing Boolean fields nonVegServed (Demand) and nonVegAllowed (Property) are functionally equivalent to the latest PR Yes/No representation. <br><br>However, the handling of explicit False values and missing (null) values should be finalized and consistently represented in the V2 data. | 37. Confirm how this field should be evaluated when the Demand specifies 'nonVegServed = True', but the corresponding Property 'nonVegAllowed 'value is missing.<br><br>38. Specifically, should a missing Property value be treated as “not specified / unavailable” and therefore excluded from relevance scoring, or should it be treated as “Non-Veg not allowed” and receive a score of '0'?<br><br>39. Also confirm whether an explicit Property value of 'False', when the Demand requires Non-Veg (True), should be treated as a definite non-match with a score of 0. | No major technical clarification is required at this stage.<br><br> Once the business meaning of missing versus explicit False is finalized, the wrapper can implement the approved behaviour while preserving the optional-field logic. <br><br>The PR represents the field as Yes/No, while V2 stores it as Boolean (True/False). This is a representation difference only and does not require a logic change, provided the backend consistently maps Yes ↔ True and No ↔ False. | Incorrect handling of missing Property values may produce relevance scores that differ from the approved business logic. The absence of explicit False values in the reviewed V2 data also limits validation of all expected business scenarios and edge cases. |
| 16 | Number of Seats | Business and backend confirmation is required to finalize the authoritative Demand and Property seat fields for relevance evaluation. <br><br>The selected fields should then be consistently populated with numeric seat values before implementation, testing, and validation. | 40. confirm whether 'numberOfSeatsMin' or 'numberOfSeatsBucket' is the authoritative Demand field for relevance evaluation.<br><br> 41. confirm whether Property seat availability should be evaluated using the top-level 'numberOfSeats' field or the seat information within the formats array ('availableSeats' and/or 'totalSeats').<br><br>42. If the 'formats' array is used,  confirm which seat value ('availableSeats' or 'totalSeats') should participate in relevance evaluation and how the appropriate format should be selected when multiple formats are available for a Property. | Once the business representation is finalized, we need to define how the V2 wrapper should read the approved Demand and Property seat fields while preserving the approved relevance logic.<br><br>If multiple Property seat representations continue to exist, we need to define the precedence or selection logic before performing the relevance comparison | Selecting an incorrect Demand or Property seat representation may produce inaccurate relevance scores. Multiple Property seat representations and dual Demand seat representations may lead to inconsistent implementation if the authoritative fields and comparison logic are not finalized before development. The limited availability of seat-related data in the reviewed V2 dataset also restricts validation of all expected business scenarios. |
| 17 |  |  |  |  |  |

##### Table E. Discussion Decision / Notes and business comments

| Sheet row | Field | Discussion Decision / Notes | Business comment_1 | Business comment_2 |
|---|---|---|---|---|
| 2 | Asset Class | Business Discussion / Decision<br><br>Himanshu clarified the corresponding Demand and Supply structure for each Asset Class:<br><br>- Retail → Retail Demand / Retail Property<br>- F&B → F&B Demand / F&B Property<br>- Managed Space → Managed Space Demand / Managed Space Centre, where Centre represents the managed-office projects/properties available on KeyDemand.<br><br>For Managed Space, this establishes Managed Space as the common business Asset Class, with different naming for the Demand and Supply-side entities rather than separate relevance Asset Classes.<br><br>Latest Business Decision – Sep 18, 2026 Discussion<br><br>Retail ↔ F&B cross-Asset-Class matching is allowed in both directions:<br><br>- Retail Demand ↔ F&B Property → Asset Class Match Score = 1<br>- F&B Demand ↔ Retail Property → Asset Class Match Score = 1<br><br>The Asset Class difference itself should therefore not exclude a Retail/F&B pair.<br><br>Cross-Asset-Class matching is not intended for Office ↔ Retail or Office ↔ Managed Space / Managed Office.<br><br>For Managed Space, the intended relevance pairing is Managed Space Demand ↔ Managed Space Centre; no separate Office ↔ Managed Space cross-match is defined.<br><br>Latest Business Confirmation – Sep 18, 2026: Retail ↔ F&B Cross-Matching<br><br>For a Retail ↔ F&B cross-match, relevance will be calculated using the common Mandatory relevance fields plus Store Type:<br><br>- Asset Class<br>- Transaction Type<br>- City<br>- Location + Other Interested Location<br>- Carpet Area<br>- Floor<br>- Ceiling Height<br>- Store Type<br><br>Asset-class-specific Optional relevance fields are not included in the Retail ↔ F&B cross-match calculation.<br><br>Each applicable field will use its respective finalized V2 Match Score logic, including partial Match Scores where applicable. All fields are not required to have Match Score = 1.<br><br>Retail Demand ↔ F&B Property and F&B Demand ↔ Retail Property will receive Asset Class Match Score = 1.<br><br>V2 PR / Data Observation<br><br>The latest PR uses multiple Managed Space-related labels across different Demand and Supply journeys, including Managed Space, Flex Space, Managed Office, Managed Offices, and Managed Office Space.<br><br>In the freshly reviewed V2 database, however, assetClass is consistently represented as the scalar value managed-space on both Demand and Supply. The reviewed data contains 34 Managed Space Demands and 18 Managed Space Supplies, with no missing, null, or empty assetClass values observed.<br><br>This indicates that the current V2 backend is already using a common managed-space representation despite the different labels appearing across PR/UI journeys.<br><br>Technical / Backend Confirmation – Managed Space – Sep 22, 2026<br><br>Sathish confirmed that the different Managed Space-related business/PR/UI naming should use the common Managed Space backend representation for relevance. The current V2 database uses assetClass = "managed-space" on both Demand and Supply.<br><br>Therefore, these naming variations will not be treated as separate Asset Class categories or separate ML features. The relevance layer will use the standardized managed-space representation for Managed Space Demand ↔ Managed Space Centre relevance.<br><br>Technical / Backend Confirmation – Retail ↔ F&B – Sep 22, 2026<br><br>The V2 database continues to retain Retail and F&B as separate Asset Classes (retail and f-and-b).<br><br>During the Sep 22 technical discussion, the confirmed Retail ↔ F&B business cross-match logic and applicable field set were explained to Sathish. No additional backend dependency/change was identified by Sathish for supporting this cross-match.<br><br>The relevance implementation can therefore proceed with the confirmed Retail ↔ F&B cross-match logic, using the applicable common Mandatory relevance fields plus Store Type and excluding the asset-class-specific Optional fields as confirmed by Business.<br><br>Downstream Display / Filtering – Retail ↔ F&B – Sep 22, 2026<br><br>Sathish confirmed that a separate configurable cutoff can be maintained for Retail ↔ F&B cross-matched results and that the downstream cutoff can be configured once the final percentage is provided by Business.<br><br>Sathish mentioned 50% as a temporary value for the time being, but this is not the final business-approved cutoff and can be changed later.<br><br>Business to finalize the Retail ↔ F&B cross-match display cutoff. Once finalized, Sathish can configure the corresponding downstream filtering.<br><br>ML / Implementation Impact<br><br>The reviewed V2 data currently uses standardized Asset Class values: retail, office, f-and-b, and managed-space.<br><br>For Managed Space, the standardized backend representation managed-space will be used for Managed Space Demand ↔ Managed Space Centre relevance. Sathish confirmed the common Managed Space backend representation during the Sep 22 technical discussion.<br><br>For Retail ↔ F&B, Asset Class Match Score = 1 in both directions. The cross-match relevance calculation will use the confirmed common Mandatory relevance fields plus Store Type: Asset Class, Transaction Type, City, Location + Other Interested Location, Carpet Area, Floor, Ceiling Height, and Store Type. Asset-class-specific Optional relevance fields will not be included.<br><br>Each applicable field will use its finalized V2 Match Score logic, including partial Match Scores where applicable; all fields are not required to have Match Score = 1. This confirmed logic will be used for Stage-1 labelled-data generation and subsequent ML training.<br><br>The existing V1 Retail engine uses strict Asset Class equality; therefore, the V2 relevance implementation will require an explicit Retail ↔ F&B cross-match rule rather than treating the Asset Class difference as a mismatch.<br><br>No additional backend dependency/change for supporting the Retail ↔ F&B cross-match was identified by Sathish during the Sep 22 technical discussion. |  |  |
| 3 | Transaction Type | Business Discussion: Himanshu asked Sithara to verify whether any Retail Demand records with Transaction Type 'Buy' are actually present in the V1 database.<br><br>ML Verification: Sithara checked the V1 Retail Demand data and found 0 records with 'transactionType = Buy'. This confirms that 'Buy' is not present in the reviewed V1 Retail Demand records. The database result alone does not indicate why it is absent.<br><br>Technical / Backend Clarification – V1 Historical Question – Sep 22, 2026:<br>The V1 historical Buy representation was discussed with Sathish. He indicated that the relevant implementation/documentation is available in the existing codebase and can be referred to if needed. No further clarification is required for the current V2 relevance implementation, as this historical V1 point does not affect the confirmed V2 Transaction Type handling.<br><br>****<br><br>Latest Business Decision:<br>Himanshu confirmed the intended Transaction Type matching rule:<br><br>Demand Buy + Property Sale = full match (1)<br>Demand Lease + Property Lease = full match (1)<br>Cross/incompatible outcomes = mismatch (0)<br><br>Therefore, Transaction Type matching should follow business transaction equivalence, with Buy on Demand corresponding to Sale on Property for purchase transactions.<br><br>For Managed Space, Himanshu confirmed that Buy/Purchase will not be supported under the current V2 requirement. Managed Space currently supports Lease only. If Buy/Purchase is introduced for Managed Space in the future, the corresponding relevance logic can be defined at that stage.<br><br>Technical / Backend Confirmation – Sep 22, 2026:<br><br>Sathish confirmed that the current V2 backend representation for purchase transactions will continue to use Buy, including on the Supply side. The business/UI terminology may use Sale, but Sathish clarified that Buy and Sale represent the same purchase transaction context and that the backend representation will not be changed solely to match the UI wording.<br><br>Therefore, the relevance implementation should use the existing V2 backend Transaction Type representation. No backend field change or Buy ↔ Sale wrapper conversion is required solely because the business/PR terminology uses Buy on Demand and Sale on Supply.<br><br>From the ML side: Use the current V2 backend Transaction Type representation directly for relevance processing. No Buy ↔ Sale normalization is required in the MongoDB wrapper solely to reconcile the UI/business terminology. The approved business equivalence remains documented as Demand Buy ↔ Supply Sale = full match, while the backend continues with its existing Buy representation.<br><br>*** |  |  |
| 4 | City | Business Discussion / Decision: Himanshu confirmed that PAN_INDIA is only a subscription-based option and should not be treated as an actual City value for relevance matching. Relevance matching should be based on the actual City and Location, not on PAN_INDIA.<br><br>For City relevance, the existing exact-match interpretation therefore continues:<br><br>Same City → 1<br>Different City → 0<br><br>Technical / Backend Confirmation – Sep 22, 2026:<br><br>Sathish confirmed that relevance matching should use the actual City associated with the Demand and Supply. PAN_INDIA is a subscription-level option and should not be treated as the City for relevance matching.<br><br>The PAN_INDIA / India values observed in some of the previously reviewed V2 records were identified as early/test data and should not be considered as the intended current representation for City relevance.<br><br>From the ML side: No special PAN_INDIA match-score logic is required. City relevance should continue to use the actual Demand and Supply City values with the approved exact-match rule. |  |  |
| 5 | Location | Business Discussion / Decision<br><br>Himanshu confirmed that V2 Location matching will consider Micro-location, Area, and City, with the following Match Score Interpretation:<br><br>Same Micro-location → 1<br>Different Micro-location but same Area → 1<br><br>For a different Area within the same City, distance/radius-based scoring will apply:<br><br>≤ 1 km → 0.8<br><br>1 km to ≤ 2 km → 0.7<br>2 km to ≤ 3 km → 0.6<br>3 km to ≤ 4 km → 0.5<br>4 km to ≤ 5 km → 0.3<br>5 km → 0<br><br>Different City → 0, and the Property should not be considered/shown as a Location match.<br><br>Himanshu also confirmed that the same Location hierarchy and Match Score Interpretation applies to both Primary Location and Other Interested Location. Other Interested Location will be merged with Location and will no longer have a separate relevance impact.<br><br>Property ranking will be based on the final relevance percentage, irrespective of whether the Location match is through Primary Location or Other Interested Location. If multiple Properties have the same final relevance percentage, the most recently uploaded Property will rank first.<br><br>Latest Business Confirmation – Distance Bands<br><br>Himanshu confirmed the exact distance-band interpretation above, including > 5 km within the same City → Match Score 0. No further business clarification is pending on the distance bands.<br><br>Latest Business Confirmation – Sep 18, 2026: Primary Location + Other Interested Locations<br><br>Himanshu confirmed that the Property Location should be evaluated against the Primary Location and each Other Interested Location using the same confirmed Location Match Score logic.<br><br>The highest Match Score obtained across Primary Location and Other Interested Locations will be used as the single final Location Match Score.<br><br>Primary Location and Other Interested Locations have equal priority for this calculation.<br><br>Example:<br>Primary Location Match Score → 0.5<br>Other Interested Location 1 → 1<br>Other Interested Location 2 → 0.7<br>Final Location Match Score → 1<br><br>Technical / Backend Clarification – Sep 22, 2026:<br>The finalized business Location logic was reviewed with Sathish from the technical/backend perspective.<br><br>Sathish clarified that the current V2 backend does not maintain Area as a separate Location level in the way represented in the business logic. From the backend perspective, Location/Locality represents the main location, while Micro-location represents a sub-location under it. Therefore, a separate Area field should not be introduced into the relevance implementation based on the current backend structure.<br><br>Sathish also clarified that distance can technically be calculated using Google/location services; however, calculating distance through an external API call on the fly for every Demand–Supply relevance comparison would introduce excessive processing/dependency. He therefore advised not to implement the distance-based Match Score calculation at this stage.<br><br>Earlier V2 Location records with inconsistent/free-text locality values were also discussed. Sathish explained that these relate to the earlier stage before Google integration; Location data is expected to be more standardized following the Google integration.<br><br>Client Call Update – Sep 22, 2026<br><br>Sathish raised the distance-based Location relevance logic during the Sep 22 client call. He explained that implementing the kilometre-based comparison would require real-time distance/API processing between the Demand preferred location and available Supply locations, which he considered unnecessarily heavy for relevance processing.<br><br>Sathish therefore recommended avoiding the distance-based calculation, although he confirmed that it is technically possible to implement.<br><br>Karthik agreed to review the point further. No revised Location Match Score logic was finalized during the client call.<br><br>Technical / Backend Confirmation – Primary Location + Other Interested Location – Sep 22, 2026:<br><br>Sathish confirmed that Primary Location and Other Interested Location will continue to be stored separately in the backend. They will not be merged into a single database field.<br><br>The relevance layer/MongoDB wrapper can retrieve the Primary Location and Other Interested Locations separately and apply the finalized business aggregation logic across them.<br><br>Confirmed Business Decision – Himanshu Oct 27<br><br>Area refers to Location/Locality.<br><br>Confirmed hierarchy:<br>City → Location/Locality → Micro-location.<br><br>Example:<br>Bengaluru → Indiranagar → 100 Feet Road.<br><br>**Technical / Backend Discussion – Nov 3, 2026:**<br><br>Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and Other Interested Locations (OIL), passing the required information to ML.<br><br>The exact Backend-to-ML Location input structure and MongoDB wrapper integration will be finalized in a subsequent technical discussion, following the V2 field-readiness analysis.<br><br>**From the ML Side – Updated Nov 3, 2026**<br><br>The September 18 Business-approved Location hierarchy, distance-band Match Scores, and Primary Location + Other Interested Location (OIL) maximum-score aggregation remain the confirmed business logic.<br><br>Primary Location and OIL will be evaluated using the same Location Match Score rules, with the highest score selected as the single final Location Match Score.<br><br>During the Nov 3 technical discussion, Sathish proposed that Backend handle initial eligibility filtering, Location comparisons and distance calculations for Primary Location and OIL, passing the required information to ML. ML can then apply the approved Location Match Score rules using these inputs.<br><br>The earlier September 22 concern about implementing distance calculations within ML is therefore addressed at the proposed responsibility level.<br><br>**Pending technical confirmation:** The Backend-to-ML Location comparison inputs, alignment of pre-ML filtering with the approved Location rules, and MongoDB wrapper integration will be finalized after the V2 field-readiness analysis.<br><br>Sathish will confirm the technical approach before proceeding with Business sign-off. |  |  |
| 6 | Possession | Business Discussion / Decision<br><br>Himanshu confirmed that the approved urgency-based Possession Match Score logic will continue in V2 using the five Possession buckets:<br><br>Immediate → Within 3 months → Within 6 months → Within 9 months → After 9 months<br><br>The confirmed Match Score Interpretation is:<br><br>Property available at the same time as or earlier than the Demand requirement → 1<br>Property available one bucket later → 0.8<br>Property available two buckets later → 0.5<br>Property available more than two buckets later → 0<br><br>For example, if the Demand requirement is Within 9 months, a Property available Immediate, Within 3 months, Within 6 months, or Within 9 months receives 1, while a Property available After 9 months receives 0.8.<br><br>The business terminology is to be standardized as “Possession” on both Demand and Property.<br><br>Latest Business Decision<br><br>Himanshu confirmed that Possession is an Optional relevance field for Retail, F&B, and Office, with a 5% relevance weight.<br><br>This Optional classification applies to the relevance configuration/weighting and does not mean that Possession is optional during data entry.<br><br>Himanshu separately confirmed that Demand and Property will always provide the Possession value/date, as it is a compulsory field while creating both Demand and Property. Therefore, missing Possession values are not expected in the intended V2 flow, and no separate missing-value Match Score treatment is required for the current implementation.<br><br>For Managed Space, the already-established relevance configuration remains unchanged, where Possession is one of the Mandatory relevance fields.<br><br>Technical / Backend Confirmation – Sep 22, 2026<br><br>Sathish confirmed that “Possession” is the business/UI terminology, while the existing V2 backend field propertyAvailableFrom can continue to be used on both Demand and Supply.<br><br>No backend field rename or additional MongoDB wrapper change is required solely for the terminology standardization. The relevance implementation can continue using propertyAvailableFrom for the Possession logic.<br><br>From the ML side<br><br>The confirmed Possession Match Score logic remains 1 / 0.8 / 0.5 / 0.<br><br>For Retail, F&B, and Office, the relevance configuration should use Possession as an Optional field with 5% weight. Since Possession is compulsory during Demand and Supply creation, no missing-value scoring rule is required for the intended V2 flow.<br><br>For Managed Space, the existing Mandatory relevance-field configuration remains unchanged. |  |  |
| 7 | Other Interested Location | Business Discussion / Decision<br><br>Himanshu confirmed that Other Interested Location will be merged with Primary Location for relevance evaluation and will no longer be treated as a separate weighted relevance field or use the earlier separate 0.9 Match Score.<br><br>The same finalized Location Match Score logic will apply when evaluating a Supply against either the Primary Location or an Other Interested Location. Therefore, the Location hierarchy/distance-based scoring finalized under the Location field will also govern Other Interested Location matches.<br><br>Himanshu further clarified that an Other Interested Location match does not receive any negative treatment simply because it comes from an additional location. If the result from an Other Interested Location is higher than the result from the Primary Location, the corresponding Supply can be showcased higher.<br><br>Latest Business Confirmation – Sep 18, 2026: Primary Location + Other Interested Locations<br><br>Himanshu confirmed that the Supply should be evaluated against the Primary Location and each Other Interested Location using the same finalized Location Match Score logic.<br><br>The highest resulting Match Score will be used as the single final Location Match Score.<br><br>Primary Location and Other Interested Locations have equal priority in this calculation.<br><br>Example:<br>Primary Location Match Score → 0.5<br>Other Interested Location 1 Match Score → 1<br>Other Interested Location 2 Match Score → 0.7<br>Final Location Match Score → 1<br><br>Technical / Backend Confirmation – Sep 22, 2026<br><br>Sathish confirmed that Primary Location and Other Interested Locations will continue to remain separate in the V2 backend. Primary Location is stored separately from otherInterestedLocations[]; they will not be merged into a single backend field.<br><br>For relevance implementation, the MongoDB wrapper can retrieve the Primary Location and all Other Interested Locations separately and expose them in a consistent structure so that the same finalized Location Match Score logic can be applied to each.<br><br>**Location Technical Update – Nov 3, 2026**<br><br>Following the discussion with Sathish, Backend can handle Location comparisons and distance calculations for both Primary Location and Other Interested Locations (OIL), passing the required information to ML.<br><br>This addresses the earlier September 22 concern about performing distance calculations within ML. The exact Backend-to-ML input structure and MongoDB wrapper integration will be discussed separately after the V2 field-readiness analysis.<br><br>**From the ML Side – Updated Nov 3, 2026**<br><br>Other Interested Location remains part of the unified Location relevance feature, without a separate weight or Match Score multiplier.<br><br>For each Demand–Supply pair, the same September 18 Business-approved Location Match Score rules will be applied to Primary Location and every OIL. The highest resulting score will be used as the single final Location Match Score.<br><br>Backend will retain Primary Location and OIL as separate fields. Based on the November 3 discussion, Backend can provide the geographic comparison and distance information needed for ML scoring, subject to final technical confirmation of the input structure.<br><br>Implementation Approach – Confirmed Backend Structure<br><br>Backend remains separate:<br><br>locality = Primary Location<br>otherInterestedLocations[] = Other Interested Locations<br><br>Wrapper: Read Primary Location and all Other Interested Locations and expose them in a consistent structure for relevance processing.<br><br>Relevance Engine: Apply the same applicable Location scoring function to the Supply Location against Primary Location and each Other Interested Location, then take the highest Match Score as the single final Location Match Score.<br><br>Conceptually:<br><br>Wrapper → [Primary, OIL1, OIL2]<br>Relevance Engine → score each → max(score) → one Location Match Score<br><br>The Business-approved distance-based scoring rules remain applicable. The Backend-to-ML geographic inputs and wrapper integration will be finalized in the next technical implementation discussion. |  |  |
| 8 | Carpet Area | Business Discussion / Decision<br><br>Himanshu confirmed that the Demand-Carpet-Area-based variance table will be used for V2 relevance across Office, Retail, and F&B. The applicable lower and upper variance percentages are determined by the Demand Carpet Area band.<br><br>Confirmed V2 Carpet Area Variance Bands:<br><br>≤ 500 sq. ft.: Lower 10% \| Upper 50%<br>501–1,000: Lower 10% \| Upper 25%<br>1,001–2,000: Lower 10% \| Upper 20%<br>2,001–4,000: Lower 10% \| Upper 20%<br>4,001–6,000: Lower 10% \| Upper 15%<br>6,001–10,000: Lower 5% \| Upper 15%<br>10,001–15,000: Lower 5% \| Upper 10%<br>15,001–25,000: Lower 10% \| Upper 15%<br>≥ 25,001: Lower 15% \| Upper 20%<br><br>Himanshu also confirmed that 500 sq. ft. is included in the first band (≤ 500 sq. ft.).<br><br>Match Score Interpretation:<br><br>1 → Supply Carpet Area falls within the applicable lower and upper variance limits.<br>0 → Supply Carpet Area falls outside the applicable variance limits.<br><br>Examples:<br><br>Demand = 5,000 sq. ft. → Lower 10%, Upper 15% → acceptable Supply range = 4,500–5,750 sq. ft.<br><br>Demand = 10,000 sq. ft. → Lower 5%, Upper 15% → acceptable Supply range = 9,500–11,500 sq. ft.<br><br>The latest PR defines Demand Carpet Area as a single numeric value, which directly maps a Demand value to one of the confirmed V2 variance bands.<br><br>Earlier reviewed V2 data represented Demand Carpet Area through carpetAreaRange.min and carpetAreaRange.max, while Supply used a single numeric carpetArea. <br><br>Latest Business Clarification: Himanshu confirmed that Property Carpet Area will be a single numeric value, while Project Carpet Area may be represented as a range.<br><br>For the current Demand–Property Relevancy scope, Property Carpet Area should therefore be evaluated as a single numeric value. Project Carpet Area range handling belongs to the separate Demand–Project Relevancy scope.<br><br>Technical / Backend Clarification – Revalidation Completed<br><br>Sathish confirmed that both CarpetArea and CarpetAreaRange are available on the Demand side and provided a freshly restored keydemand_v2_dev database for revalidation.<br><br>The refreshed Dev DB was revalidated across Retail, Office, and F&B.<br><br>Demand-side findings:<br>- Both carpetArea and carpetAreaRange are present whenever Carpet Area is populated.<br>- Across all populated reviewed records:<br>  carpetArea = carpetAreaRange.min = carpetAreaRange.max.<br>- No true min–max Demand ranges were found.<br>- No mismatch was found between carpetArea and carpetAreaRange.<br>- Records with missing Carpet Area had both representations missing.<br><br>Supply-side findings:<br>- Supply consistently uses the single numeric carpetArea.<br>- No carpetAreaRange representation was found on the Supply side.<br>- No Supply Carpet Area was missing in the reviewed Retail, Office, and F&B records.<br><br>Therefore, the earlier Demand min–max data ambiguity is not present in the freshly restored Dev DB. The current Demand data effectively represents a single Carpet Area value, while retaining both scalar and range fields.<br><br>V1 Relevance-Engine Integration<br><br>The approved V1 Carpet Area logic remains range-based:<br><br>1 → Supply Carpet Area lies within the Demand Carpet Area range.<br>0.8 → Supply Carpet Area lies within ±10% variance of the Demand range, applied to both lower and upper bounds.<br>0 → Supply Carpet Area falls outside the ±10% variance.<br><br>For the existing V1 relevance-engine integration, the V2 carpetAreaRange.min and carpetAreaRange.max fields can continue to be mapped through the MongoDB wrapper to the Demand min/max inputs used by the approved V1 engine.<br><br>The refreshed Dev DB retains these fields, and their current values are equal. Therefore, the existing V1 range-based engine can continue without changing the approved V1 Carpet Area scoring logic.<br><br>Technical / Backend Confirmation – Demand Carpet Area – Sep 22, 2026<br><br>Sathish confirmed that, since the currently available Demand-side carpetArea, carpetAreaRange.min, and carpetAreaRange.max values are equivalent in the reviewed V2 data, the V2 relevance implementation can use carpetArea as the primary Demand Carpet Area input.<br><br>Sathish also advised keeping fallback handling in case the primary Carpet Area value is unavailable. For example, an available Carpet Area representation such as carpetAreaRange.min could be considered as a fallback. The exact fallback field/order was not explicitly finalized during the discussion and can be confirmed based on the available Carpet Area representation in the final migrated V2 data.<br><br>ML / Implementation Impact<br><br>V2 Carpet Area scoring will use the business-confirmed Demand-area-based variance bands with binary 1/0 scoring across Office, Retail, and F&B.<br><br>For the current Demand–Property Relevancy, Supply/Property Carpet Area will be treated as a single numeric value. On the Demand side, carpetArea can be used as the primary Carpet Area input for V2 relevance and Stage-1 labelled-data generation.<br><br>Fallback handling should be retained if the primary Demand carpetArea value is unavailable—for example, using an available Carpet Area representation such as carpetAreaRange.min. The exact fallback field/order can be finalized after reviewing the migrated V2 data. |  |  |
| 9 | Fitouts | Business Discussion / Decision<br><br>Himanshu confirmed that the Fitouts representation and Match Score Interpretation differ by asset class.<br><br>Office<br><br>Future V2 Office Fitouts logic will use only:<br><br>-Furnished<br>- Unfurnished<br>- Developer/Landlord to do Fitout<br><br>The detailed V1 Fitouts categories will not be carried forward into the future V2 Office logic.<br><br>Confirmed Office Match Score Interpretation:<br><br>- Demand Furnished + Supply Furnished → 1<br>- Demand Furnished + Supply Unfurnished → 0<br>- Demand Furnished + Supply Developer/Landlord to do Fitout → 1<br>- Demand Unfurnished + Supply Furnished → 0<br>- Demand Unfurnished + Supply Unfurnished → 1<br>- Demand Unfurnished + Supply Developer/Landlord to do Fitout → 1<br><br>Retail & F&B<br><br>Fitouts will use Fitout Required Yes/No logic:<br><br>- Demand Yes + Supply Yes → 1<br>- Demand Yes + Supply No → 0<br>- Demand No + Supply Yes → 0<br>- Demand No + Supply No → 1<br><br>Business Clarification – Confirmed:  <br><br>For Retail and F&B, when Demand Fitouts Required = No, it means the Demand specifically requires a Supply without Fitouts; it does not mean that the Demand has no Fitouts preference. <br>Therefore, Supply No = 1 and Supply Yes = 0.<br><br>A missing/not-provided Fitouts value is different from an explicit No selection and should be handled separately as a missing value.<br><br>Latest Business Confirmation – Sep 18, 2026: Missing / Not-Provided Fitouts<br><br>- Demand Fitouts missing/not provided: Fitouts should be excluded from the relevance calculation.<br><br>- Retail & F&B: If Demand Fitouts is provided but Property Fitouts is missing/not provided, Fitouts should also be excluded from the relevance calculation rather than assigning a 0 or partial Match Score.<br><br>- Office: Property Fitouts is expected to be a compulsory input; therefore, Demand Fitouts provided + Property Fitouts missing is not expected in the normal flow.<br><br>Technical / Backend Clarification – Sep 22, 2026<br><br>The V2 assessment identified two Fitouts representations: categorical fitOutStatus and Boolean fitoutsRequired / fitoutsAvailable. In the reviewed V2 data, fitOutStatus is populated across Retail, Office, and F&B, while the Boolean fields are largely unpopulated.<br><br>During the Sep 22 discussion, Sathish emphasized that Fitouts is an Optional relevance field and that the implementation should appropriately handle whether the relevant Fitouts value is available or not available.<br><br>From the ML Side<br><br>The asset-class-specific Fitouts Match Score logic is confirmed for Office, Retail, and F&B.<br><br>For V2 relevance:<br><br>If Demand Fitouts is missing/not provided, exclude Fitouts from the relevance calculation.<br>If Demand Fitouts is provided, apply the confirmed asset-class-specific Fitouts Match Score.<br>For Retail and F&B, if Property Fitouts is missing/not provided, exclude Fitouts from the relevance calculation.<br>For Office, Property Fitouts is expected to be compulsory, so a missing Property Fitouts value is not expected in the normal flow.<br>Final implementation depends on confirmation of the V2 backend field representation. |  |  |
| 10 | Floor | Business Discussion / Decision<br><br>Himanshu confirmed that Floor continues to be evaluated together with Store Type in V2.<br><br>Demand Floor = Ground + Store Type = High Street:<br><br>- Supply Ground → 1<br>- Supply Upper Ground → 1<br>- All other Supply Floors → 0<br><br>Demand Floor = Ground + Store Type = Mall:<br><br>- Supply Basement → 0<br>- Supply Ground → 1<br>- Supply Upper Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor → 1<br><br>Demand Floor = Any:<br>Demand can match across all available Supply Floors. Where Store Type is selected on the Demand, Store Type must still be considered during matching.<br><br>Latest V2 Store Type Decision:<br>Himanshu clarified that the earlier V1 Store Type outcomes will not continue as-is in V2. The V2 Floor–Store Type logic will use Mall and High Street.<br><br>This latest clarification supersedes the earlier understanding that all approved V1 Store Type-dependent Floor outcomes would continue unchanged in V2.<br><br>Technical / Backend<br><br>V2 provides Demand Floor through floorPreference and Supply Floor through floor. These fields can be used for the V2 Floor Match Score implementation together with the applicable Demand Store Type.<br><br>No additional Floor-specific backend clarification is currently required. The relevance implementation should apply the confirmed V2 Floor–Store Type logic using these values.<br><br>From the ML side<br><br>Future V2 Floor scoring should use the confirmed Mall / High Street Store Type-dependent Floor outcomes above. The previous V1 Store Type outcome combinations should not be carried forward into the V2 Stage-1 labelled-data generation logic.<br><br>Floor will continue to produce a single Floor Match Score based on the applicable combination of Demand Floor preference, Demand Store Type, and Supply Floor. |  |  |
| 11 | Ceiling Height | Business Discussion / Decision<br><br>Himanshu confirmed the V2 Ceiling Height scoring approach, including both the previously discussed +30% upper variance and the latest lower-side variance logic.<br><br>Confirmed V2 Match-Score Logic:<br><br>Upper-side logic:<br><br>Supply Ceiling Height equal to the Demand requirement or up to 30% above Demand → 1<br>Supply Ceiling Height more than 30% above Demand → 0.5<br><br>Lower-side logic:<br><br>Demand Ceiling Height ≤14 ft → Supply up to 1 ft lower than Demand → 0.8<br>Demand Ceiling Height 15–20 ft → Supply up to 2 ft lower than Demand → 0.8<br>Demand Ceiling Height ≥21 ft → Supply up to 3 ft lower than Demand → 0.8<br><br>Latest Business Confirmation: Himanshu confirmed the lower-side Ceiling Height variance outcomes:<br><br>- Demand Ceiling Height ≤14 ft → Supply up to 1 ft lower → 0.8<br>- Demand Ceiling Height 15–20 ft → Supply up to 2 ft lower → 0.8<br>- Demand Ceiling Height ≥21 ft → Supply up to 3 ft lower → 0.8<br><br>Supply Ceiling Height falling below the applicable permitted lower-side variance receives 0.<br><br>Therefore, the confirmed V2 Ceiling Height Match Scores are 1 / 0.8 / 0.5 / 0.<br><br>Examples:<br><br>Demand = 14 ft<br>Supply = 13 ft → 0.8<br>Supply = 14 ft → 1<br><br>Demand = 18 ft<br>Supply = 16–17 ft → 0.8<br>Supply = 18 ft → 1<br><br>Demand = 31 ft<br>Supply = 28–30 ft → 0.8<br>Supply = 31 ft → 1<br>Supply < 28 ft → 0<br><br>Upper-Variance Example:<br><br>Demand = 10 ft<br>30% upper variance → upper full-match limit = 13 ft<br><br>Supply = 10–13 ft → 1<br>Supply > 13 ft → 0.5<br><br>This confirms that the earlier example of Supply = 16 ft for Demand = 10 ft falls outside the +30% full-match range and therefore receives 0.5.<br><br>Superseded Earlier Logic:<br><br>The latest confirmed V2 rule supersedes:<br><br>- Approved V1: 1 / 0.8 / 0, where any Supply above Demand received 0.8.<br>- April 23 proposed V2: 1 / 0.9 / 0 with +30% upper variance.<br>- The earlier interim V2 interpretation of 0 / 1 / 0.5, because the latest clarification introduces 0.8 for Supply values within the permitted lower-side variance.<br><br>Technical / Backend Confirmation<br><br>No additional backend clarification is currently required. V2 provides Demand Ceiling Height through ceilingHeightMinFt and Supply Ceiling Height through ceilingHeightFt, which provide the numeric values required to apply the confirmed V2 Ceiling Height Match Score logic.<br><br>ML / Implementation Impact:<br><br>Implement the V2 Ceiling Height Match Score using the confirmed lower- and upper-side rules:<br><br>- Below applicable lower limit → 0<br>- Within applicable lower variance but below Demand → 0.8<br>- Demand through +30% upper limit → 1<br>- Above +30% upper limit → 0.5<br><br>The resulting Ceiling Height Match Score will be combined with the assigned Ceiling Height weight when calculating its contribution to the final relevance score. |  |  |
| 12 | Frontage | Business Discussion / Decision<br><br>Himanshu confirmed that the V2 Frontage logic will differ from the approved V1 exact-match approach.<br><br>For V2:<br><br>- Supply Frontage equal to or greater than the Demand required Frontage → Match Score = 1<br>- Supply Frontage up to 15% below the Demand requirement → Match Score = 0.8<br>- Supply Frontage more than 15% below the Demand requirement → Match Score = 0<br><br>As Frontage is an Optional relevance field, if the Demand does not specify Frontage, the field is excluded from the applicable relevance calculation in line with the common relevance-scoring approach.<br><br>Latest Business Confirmation<br><br>Himanshu confirmed:<br><br>Supply Frontage ≥ Demand requirement → 1<br>Supply Frontage up to 15% below Demand requirement → 0.8<br>Supply Frontage more than 15% below Demand requirement → 0<br>If Demand Frontage is specified but Property Frontage is missing → 0<br><br>So there is no remaining Frontage business clarification.<br>Technical / Backend<br><br>No immediate backend clarification is required for the confirmed Frontage scoring logic.<br><br>From the ML side<br><br>The V2 Frontage Match Score is confirmed as 1 / 0.8 / 0 based on whether Property Frontage meets/exceeds the Demand requirement or falls within/outside the 15% lower tolerance.<br><br>If Demand Frontage is specified and Property Frontage is missing, assign Match Score = 0. If Demand Frontage is not specified, exclude Frontage from the applicable relevance calculation. |  |  |
| 13 | Store Type | Business Discussion / Decision<br><br>Himanshu confirmed that V2 Store Type scoring will use single-value exact matching:<br><br>- Demand Store Type = Supply Store Type → Match Score = 1<br>- Demand Store Type ≠ Supply Store Type → Match Score = 0<br><br>Himanshu also confirmed that Store Type will be specified on the Demand side as one of the confirmed input fields.<br><br>The Store Type–Floor dependency remains applicable in V2 and should follow the latest confirmed V2 Floor–Store Type logic.<br><br>Himanshu further clarified that the V1 dataset will be updated to the finalized V2 Store Type fields/values during data upload. Therefore, legacy V1 Store Type values outside the finalized V2 values do not require separate relevance-side mapping.<br><br>Latest Business Confirmation<br><br>Himanshu confirmed the handling of Demand Store Type = Any:<br><br>Demand = Any + Supply = Highstreet → Match Score = 1<br>Demand = Any + Supply = Mall → Match Score = 1<br><br>Asset-Class Classification / Weight:  <br><br>- Retail: Store Type is Optional (O) with 5% weight as per the latest live relevance sheet.<br>- F&B: Store Type is Mandatory (M) and is included within the 75% mandatory-field group. With 8 mandatory relevance fields, the effective Store Type weight is 75% ÷ 8 = 9.375% ≈ 9.38%.<br><br>F&B Live-Sheet Classification – Final Confirmation (05 Nov 2026):<br><br>Himanshu confirmed that Store Type is Mandatory (M) for F&B and corrected the live relevance sheet. With 8 Mandatory fields sharing 75% weightage equally, the effective Store Type weight for F&B is 9.375% (≈9.38%).<br><br>Technical / Backend Decision<br><br>Sathish confirmed that although the latest PR defines Store Type as single-select for both Demand and Supply, the V2 backend will continue to store Store Type as a list, with one Store Type value expected in the list.<br><br>For the completed V1 relevance-engine integration, the MongoDB wrapper converts a one-value V2 Store Type list into the scalar Store Type value required by the existing V1 engine.<br><br>Existing multi-value Demand Store Type records were observed from the earlier multi-select design. Under the finalized V2 design, the expected representation is a single Store Type value within the backend list.<br><br>Technical / Backend Confirmation – Sep 22, 2026<br><br>Sathish confirmed that the existing Store Type wrapper approach can continue for the finalized V2 design. The backend Store Type field remains list-based, with one value expected in the list, and the wrapper can continue converting the single-value list to the scalar Store Type value required by the relevance engine.<br><br>From the ML Side<br><br>V2 Store Type scoring is confirmed as binary exact matching: same Store Type = 1; different Store Type = 0.<br><br>For Demand Store Type = Any, Supply Store Type = Highstreet or Mall receives Match Score = 1, as business-confirmed.<br><br>The Store Type–Floor dependency should follow the latest confirmed V2 Floor–Store Type logic.<br><br>Future V2 relevance/ML should use the finalized single-select Store Type values. The expected backend representation is a one-value Store Type list, which the wrapper will convert to a scalar value before relevance scoring. Unexpected legacy/multi-value records, if still present after migration, can be reviewed separately rather than introducing a multi-value Store Type scoring rule. |  |  |
| 14 | Cooking Type / Gas Connection | Business Discussion / Decision<br><br>Future F&B Cooking Type relevance will use a direct Demand Cooking Type → Supply Cooking Type comparison following the latest PR:<br><br>- Demand Electric → Supply Electric = 1<br>- Demand Electric → Supply Gas = 1<br>- Demand Gas → Supply Gas = 1<br>- Demand Gas → Supply Electric = 0<br>- Demand Either → Supply Electric or Gas = 1<br><br>The earlier Electric → Gas = 0 rule is superseded. Himanshu confirmed that Electric → Gas = 1, as a Demand requiring Electric would also be acceptable with Gas, and instructed that the updated PR rules should be followed.<br><br>Either is the standardized Demand value from the latest PR and replaces the earlier discussion term Any.<br><br>If Demand Cooking Type is not specified → exclude Cooking Type from the applicable relevance calculation.<br><br>Latest Business Confirmation – Sep 18, 2026: Missing Supply Cooking Type<br><br>Himanshu confirmed that if Demand Cooking Type is specified but Supply Cooking Type is missing/not provided, Cooking Type should be excluded from the relevance calculation, rather than assigning a reduced Match Score.<br><br>Therefore:<br><br>- Demand Cooking Type missing/not provided → exclude Cooking Type<br>- Demand specified + Supply missing/not provided → exclude Cooking Type<br>- Demand specified + Supply specified → apply the confirmed Cooking Type Match Score matrix<br><br>Technical / Backend Confirmation – Sep 22, 2026<br><br>Although the latest PR defines Cooking Type as single-select, the V2 backend intentionally retains cookingTypes as a list for future flexibility. Sathish confirmed that, under the current requirement, the list is expected to contain a single Cooking Type value, and the existing wrapper approach can continue by converting the single-value list to the corresponding scalar Cooking Type before relevance matching.<br><br>Therefore, the list-based backend representation is not a PR-to-V2 gap when it contains the expected single value.<br><br>Demand also contains gasLineRequired; however, the confirmed V2 Cooking Type relevance logic uses cookingTypes for direct Demand–Supply matching, and no relevance role for gasLineRequired is currently defined.<br><br>Technical / Backend Clarification – Legacy Multi-Value Records<br><br>The finalized V2 Cooking Type design is single-select, and the expected backend representation is therefore a single value within cookingTypes.<br><br>From the ML Side<br>Cooking Type will be generated as a field-level Match Score feature using the confirmed Demand Cooking Type → Supply Cooking Type matrix.<br><br>For Stage-1 labelled-data generation:<br><br>- Demand Cooking Type missing/not provided → exclude Cooking Type from the applicable relevance calculation.<br>- Demand specified + Supply specified → generate the Cooking Type Match Score using the confirmed matrix.<br>- Demand specified + Supply missing/not provided → exclude Cooking Type from the applicable relevance calculation.<br><br>For the expected current V2 single-select representation, the wrapper can convert the one-value cookingTypes list to a scalar before applying the Match Score logic. Any unexpected legacy multi-value records remaining after migration should be reviewed separately before deciding their relevance treatment. |  |  |
| 15 | Non-Veg Served | Business Discussion / Decision<br><br>The latest PR defines:<br><br>- Demand Non-Veg Served: single-select Yes / No<br>- Supply Non-Veg Allowed: single-select Yes / No<br><br>Himanshu confirmed the V2 matching behaviour:<br><br>- Demand Yes + Supply Yes → 1<br>- Demand Yes + Supply No → 0<br>- Demand No + Supply Yes → 1<br>- Demand No + Supply No → 1<br><br>Therefore, a Supply that allows Non-Veg can match both Demand Yes and Demand No. A Supply that does not allow Non-Veg cannot match a Demand requiring Non-Veg, but can match Demand No.<br><br>Missing Supply Value – Latest Business Decision<br><br>Himanshu further confirmed that when Demand Non-Veg Served is specified but Supply Non-Veg Allowed is missing/not provided, the field should receive a Match Score of 0.8, rather than 1 or 0. The Supply can therefore still remain relevant based on the other matching criteria.<br><br>- Demand Yes + Supply Missing → 0.8<br>- Demand No + Supply Missing → 0.8<br><br>If Demand Non-Veg Served is not specified, the field is excluded from relevance scoring under the optional-field approach.<br><br>V2 Data Availability / Observation<br><br>Non-Veg fields are currently observed only for the F&B asset class, consistent with the latest PR. The reviewed V2 schema contains Demand nonVegServed and Supply nonVegAllowed.<br><br>Although the latest PR represents these fields as single-select Yes/No, the V2 schema stores them as Boolean True/False, which is functionally compatible with the PR representation.<br><br>In the reviewed V2 data, the fields were populated only for a subset of records (Demand: 15/92; Supply: 22/127). Only True values were observed; no explicit False values were found.<br><br>Therefore, the reviewed data alone does not yet confirm whether an explicit No is stored as False, or whether some current missing/null values may represent No or Not Specified.<br><br>Earlier Business Clarification – Resolved by Latest PR<br><br>An earlier business discussion referred to Veg, Non-Veg, and Any Demand scenarios. This created a representation question because the V2 Demand field nonVegServed is Boolean and can directly represent only two states.<br><br>The latest PR now defines Demand Non-Veg Served as Yes / No, so the final V2 relevance logic should follow the latest PR representation rather than treating Veg / Non-Veg / Any as three separate Demand values.<br><br>Technical / Backend Clarification – Sep 22, 2026<br><br>The latest PR defines Non-Veg Served / Allowed as Yes / No, while the V2 backend uses Boolean fields:<br><br>Demand → nonVegServed<br>Supply → nonVegAllowed<br><br>The reviewed V2 data currently contains True and missing/null values, while explicit False values were not observed in the reviewed records.<br><br>During the Sep 22 technical discussion, the distinction between explicit False and missing/null was raised with Sathish.  Sathish advised reassessing the data after the V1→V2 migration and identifying any remaining data/backend requirements at that stage.<br><br>From the ML side<br><br>The V2 Non-Veg Match Score logic is business-confirmed as 1 / 0 / 0.8, depending on the Demand–Supply combination.<br><br>The relevance implementation must distinguish three states where applicable:<br><br>-True / Yes<br>-False / No<br>-Missing / Null<br><br>These states must not be combined or defaulted because they can produce different relevance outcomes. <br>The final backend mapping of explicit No (False) versus missing/null should be confirmed after reviewing the migrated V1→V2 data. |  |  |
| 16 | Number of Seats | Business Discussion / Decision<br><br>Himanshu clarified that Managed Space is project-based, and Number of Seats should be evaluated against the Supply seating capacity.<br><br>The latest PR defines:<br><br>- Demand: Number of Seats — numeric field, minimum input value 20 seats.<br>- Supply: Total Number of Seats — numeric field representing total seating capacity.<br><br>Latest Business Clarification: Himanshu confirmed that the Demand-side minimum input is 20 seats. On the Supply side, there is no lower/upper seat range; Supply has a single Number of Seats value, and ideally this value will not be 0.<br><br>V1 Reference / Latest V2 Business Confirmation – Sep 18, 2026<br><br>V1 uses:<br><br>Supply Seats ≥ Demand Seats → Match Score = 1<br>Supply Seats < Demand Seats → Match Score = 0<br><br>The Number of Seats Match Score logic remains:<br><br>Supply Number of Seats ≥ Demand Number of Seats → 1<br>Supply Number of Seats < Demand Number of Seats → 0<br><br>Himanshu confirmed this interpretation on Sep 18, including the example:<br><br>Demand = 60 seats, Supply = 50 seats → Match Score = 0<br><br>The minimum value of 20 seats is a Demand input requirement and does not introduce a separate Match Score condition.<br><br>V2 Data Observation<br><br>The V1-style comparison works directly for one representation found in the current V2 data:<br><br>Demand: numberOfSeatsMin = 25<br>Supply: numberOfSeats = 50<br><br>→ 50 ≥ 25 → Match Score = 1<br><br>The reviewed V2 data also contains mixed seat representations:<br><br>Demand: numberOfSeatsMin in one record and numberOfSeatsBucket = "less_than_20" in another.<br><br>Supply: top-level numberOfSeats in one record, while some other records also contain formats.totalSeats and formats.availableSeats.<br><br>- One reviewed Supply contains multiple formats with totalSeats / availableSeats values of 40/25, 30/18, 8/6, and 60/60.<br><br>Latest Technical Decision – Sathish:<br><br> Sathish confirmed that formats.* should not be considered for the Managed Space Number of Seats relevance implementation.<br><br>Therefore, formats.totalSeats and formats.availableSeats are excluded from the relevance field selection and Match Score calculation.<br><br>Technical / Backend Clarification – Sep 22, 2026<br><br>The current working V2 field mapping for Number of Seats relevance is:<br><br>Demand → numberOfSeatsMin<br>Supply → numberOfSeats<br><br>Sathish has already confirmed that formats.*, including formats.totalSeats and formats.availableSeats, should not be used for the Number of Seats relevance calculation.<br><br>During the Sep 22 discussion, the additional Demand field numberOfSeatsBucket was raised with Sathish. Sathish indicated that he needs to check what this field represents, and its role was not finalized during the discussion.<br><br>From the ML Side<br><br>The Number of Seats Match Score logic is now business-confirmed:<br><br>Supply Number of Seats ≥ Demand Number of Seats → 1<br>Supply Number of Seats < Demand Number of Seats → 0<br><br>The Demand minimum input value of 20 seats does not introduce a separate Match Score condition.<br><br>formats.* will not be used as relevance inputs, based on Sathish's technical confirmation.<br><br>The current working field mapping is Demand numberOfSeatsMin against Supply numberOfSeats. The remaining technical point is to confirm the purpose and relevance, if any, of numberOfSeatsBucket before finalizing the Number of Seats field mapping for Stage-1 implementation. |  |  |
| 17 |  |  |  |  |

### Business rules extracted
- **BR-REL-163** — Asset Class and Managed Space data: the V2 backend stores `assetClass` as a scalar string on both `v2_demands` and `v2_properties` (values retail, office, f-and-b, managed-space), fully populated; the wrapper reads it directly instead of the V1 Property Type lookup (V1 `Flex Space`). The reviewed data held 34 Managed Space Demands and 18 Managed Space Supplies, all with transactionType lease. Sathish (Sep 22, 2026): the Managed Space name variants (Managed Space, Flex Space, Managed Office, Managed Offices, Managed Office Space) are not separate Asset Classes or separate ML features. _(§ tracker row 2 / V2 schema, Discussion Decision)_
- **BR-REL-164** — Retail ↔ F&B cross-match implementation (Sep 22, 2026): an explicit cross-match rule is needed because the V1 Retail engine uses strict Asset Class equality. Each applicable field uses its own finalized V2 Match Score including partial scores (not every field must be 1). Sathish identified no extra backend dependency. The logic is used for Stage-1 labelled-data generation and ML training. _(§ tracker row 2 / Discussion Decision, ML / Implementation Impact)_
- **BR-REL-165** — Transaction Type implementation: the wrapper uses the backend value directly (backend keeps "Buy" for purchase, also on the Supply side; "Sale" is UI wording); no Buy ↔ Sale normalization in the MongoDB wrapper. The equivalence Demand Buy ↔ Supply Sale = full match stays documented as business logic. _(§ tracker row 3 / Discussion Decision)_
- **BR-REL-166** — City implementation: the wrapper reads the V2 `city` field directly on Demand and Property (V1 derived it from `location`). No special PAN_INDIA match logic; PAN_INDIA / India values seen in some earlier V2 records were early/test data. _(§ tracker row 4 / Required MongoDB Wrapper Change, Discussion Decision)_
- **BR-REL-167** — Location and OIL data wiring: V2 `locality` = Primary Location (V1 `microLocation.description`), Demand `otherInterestedLocations[]` = array of {city, locality} objects (PR: searchable multi-select, up to 3). Property has no OIL field. Backend keeps both separate; the wrapper exposes [Primary, OIL1, OIL2, ...] and the relevance engine scores each and takes max(score) as the one Location Match Score. _(§ tracker rows 5 and 7 / V2 schema, Discussion Decision)_
- **BR-REL-168** — Ranking: Properties are ranked by the final relevance percentage, irrespective of whether the Location match came from Primary Location or Other Interested Location. If several Properties have the same final relevance percentage, the most recently uploaded Property ranks first. (Himanshu) _(§ tracker row 5 / Discussion Decision)_
- **BR-REL-169** — Location distance status: Sathish (Sep 22, 2026) advised against implementing the kilometre-based Match Score because it needs real-time distance/API calls per Demand–Supply pair, although technically possible; at the Sep 22 client call Karthik agreed to review and no revised Location Match Score was finalized. On Nov 3, 2026 Sathish proposed that Backend does eligibility filtering, Location comparisons and distance calculation (see BR-REL-162); the Backend-to-ML input structure and wrapper integration are to be decided after the V2 field-readiness analysis, and Sathish will confirm the technical approach before Business sign-off. Business-side the distance bands (BR-REL-147) stand with no business clarification pending. _(§ tracker row 5 / Discussion Decision)_
- **BR-REL-170** — Possession implementation: backend field `propertyAvailableFrom` stays on both Demand and Supply ("Possession" is business/UI wording; no rename, no extra wrapper change). Possession is compulsory when creating Demand and Property, so no missing-value Match Score rule is required for the current implementation. Retail weight is 5% (the tracker records the V1 weight as 10%). Managed Space keeps Possession as Mandatory. _(§ tracker row 6 / Discussion Decision, Business Clarification)_
- **BR-REL-171** — Carpet Area inputs: Property Carpet Area is a single numeric value (`carpetArea`); a range is only for Project Carpet Area, which belongs to the separate Demand–Project scope. The refreshed Dev DB showed Demand carpetArea = carpetAreaRange.min = carpetAreaRange.max in every populated record, so no real Demand ranges exist. V2 scoring is binary 1/0 over the variance bands (BR-REL-149), replacing the approved V1 logic of 1 inside the range, 0.8 within ±10%, 0 outside. _(§ tracker row 8 / Discussion Decision)_
- **BR-REL-172** — Fitouts missing-value handling (Sep 18, 2026): Demand Fitouts missing → Fitouts excluded from the calculation; Retail/F&B Demand provided + Property missing → excluded (not 0 or partial); Office Property Fitouts is compulsory so that case is not expected. Retail/F&B Demand "No" means the Demand requires a Supply without Fitouts. Final implementation depends on the V2 backend representation: categorical `fitOutStatus` (populated 43 of 92 Demands, 84 of 127 Properties) versus Boolean `fitoutsRequired` / `fitoutsAvailable` (sparse). Sathish stressed Fitouts is an Optional field. _(§ tracker row 9 / Discussion Decision)_
- **BR-REL-173** — Floor and Store Type: the V2 Floor logic uses only Mall and High Street Store Types; the V1 Store Type outcome combinations are not carried into V2 or into Stage-1 labelled-data generation (supersedes the earlier "V1 Store Type outcomes continue" understanding). Backend fields: Demand `floorPreference`, Supply `floor`; no further Floor backend clarification needed; Floor gives one Floor Match Score. Floor is populated for 69 of 92 Demands and 54 of 127 Properties. _(§ tracker row 10 / Discussion Decision)_
- **BR-REL-174** — Ceiling Height implementation: fields Demand `ceilingHeightMinFt`, Supply `ceilingHeightFt` (integers); Match Scores 1 / 0.8 / 0.5 / 0. The rule supersedes the V1 logic (1 / 0.8 / 0), the April 23 proposal (1 / 0.9 / 0 with +30%) and an interim 0 / 1 / 0.5 reading. Example: Demand 10 ft → full-match limit 13 ft; Supply 16 ft → 0.5. The V1 Boolean `ceilingHeightRequired` has no role in the logic. _(§ tracker row 11 / Discussion Decision, Technical Clarification)_
- **BR-REL-175** — Frontage implementation: fields Demand `frontageMinFt`, Supply `frontageFt`; supersedes the V1 exact-match logic (exact 1, else 0.5). No Frontage business clarification remains. The V1 Boolean `frontageRequired` has no role in the logic. _(§ tracker row 12 / Discussion Decision)_
- **BR-REL-176** — Store Type implementation: backend keeps `storeTypes` (Demand) and `storeType` (Property) as lists with one expected value; the wrapper converts the one-value list to a scalar before scoring. Legacy V1 Store Types (Independent Building, Mixed Use, Kiosks, Store-in-store) need no relevance-side mapping because the V1 dataset is updated to the V2 values at data upload. Unexpected multi-value legacy records (11 Demand records seen) are reviewed separately; no multi-value scoring rule. _(§ tracker row 13 / Discussion Decision)_
- **BR-REL-177** — Cooking Type implementation: backend keeps `cookingTypes` as a list for future flexibility with one expected value, converted to a scalar by the wrapper; "Either" is the standard Demand value (replaces the discussion term "Any"); Electric → Gas = 1 supersedes the earlier 0. Demand `gasLineRequired` has no relevance role and no Property gas-connection field is needed. Unexpected multi-value records are reviewed separately. _(§ tracker row 14 / Discussion Decision)_
- **BR-REL-178** — Non-Veg implementation: the earlier Veg / Non-Veg / Any discussion is replaced by the PR's Yes / No for Demand `nonVegServed` and Supply `nonVegAllowed` (Booleans). True, False and missing must stay three distinct states; Sathish advised reassessing explicit-False versus missing after the V1→V2 migration. Only True values were seen (Demand 15 of 92, Supply 22 of 127). _(§ tracker row 15 / Discussion Decision)_
- **BR-REL-179** — Number of Seats implementation: working mapping Demand `numberOfSeatsMin` → Supply `numberOfSeats`; Supply has a single seat value (no range, ideally not 0); `formats.*` excluded by Sathish; Demand minimum input of 20 is not a score condition. Seat data is almost empty in the reviewed V2 data (1 Demand; 1 Property numberOfSeats; 2 formats records). _(§ tracker row 16 / Discussion Decision, V2 Data Availability)_

### Open questions / ambiguities in this doc
- Location distance (BR-REL-169): Sathish's Sep 22 advice not to implement the km-based score, Karthik's review and the Nov 3 Backend proposal are not resolved in the tracker; the Backend-to-ML input structure and the Business sign-off are pending after the V2 field-readiness analysis. Yet the same cell says "No further business clarification is pending on the distance bands".
- Location row distance bands list "5 km → 0" (without > or ≤) in the first block; a later line says "> 5 km within the same City → Match Score 0". The boundary at exactly 5 km (4 km to ≤ 5 km = 0.3) is therefore unclear in the first block.
- Retail ↔ F&B cross-match display cutoff: Business has not finalized it; 50% is Sathish's temporary value (BR-REL-142).
- Carpet Area: the exact fallback field/order if Demand carpetArea is missing is not finalized; the cell still contains the older "V1 Relevance-Engine Integration" paragraph (1 / 0.8 / 0 with ±10%) next to the confirmed V2 binary 1/0 bands, which can be misread as current.
- Fitouts: which backend representation to use (fitOutStatus versus the Boolean fields) is pending; Office `landlord_fitout` equivalence questions (19 to 22) are answered only through the confirmed Office matrix (Developer/Landlord to do Fitout scores 1 against Furnished and Unfurnished Demand); Office missing Supply Fitouts has no Match Score.
- Non-Veg: the backend mapping of explicit No (False) versus missing/null is to be confirmed after migration.
- Number of Seats: the purpose of Demand `numberOfSeatsBucket` is still unknown (Sathish to check).
- Question 28 (unusually high Ceiling Height values) and the technical questions on whether `ceilingHeightRequired`, `frontageRequired` and `buildingStructureRequired` have any relevance role have no recorded answer in the Notes column. Question 9 (`possessionFromRequired` not in V2) is answered only indirectly (Possession is Optional for relevance but compulsory for data entry).
- Floor row: the V2 Demand `floorPreference` values 1_to_5 / 5_to_10 belong to Office, which has no Floor relevance field; Office Properties have no populated floor values.
- Store Type (Retail 5% Optional vs F&B Mandatory 9.375%) was corrected in the live sheet on 05 Nov 2026; the older Relevancy Logics.xlsx still lists F&B Store type as Optional (see Conflicts).
- The tracker has no entry for Demand–Project relevance and no row for Price; the business-comment columns S and T are empty.

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
- *PR-to-V2_Relevance_Implementation_Tracker* (gsheet, owner sithara.j, created 2026-08-05, modified 2026-11-05; added 2026-11-06) is the working log behind the Business Approval sheet (same owner). Its "Discussion Decision / Notes" column holds the dated business (Himanshu), backend (Sathish) and ML-side statements that the Business Approval sheet condenses into per-field scores; the tracker adds backend field names, data-population counts and pending items. It is AUTHORITATIVE for implementation status and field mapping; on scoring the Business Approval sheet and the tracker should match (they do, except for the Location distance status below). Relevancy Logics.xlsx (2026-10-14) is older than both and still governs project relevancy.
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
- **Location distance bands: confirmed or not?** Business Approval sheet (BR-REL-147) and the tracker's business statements confirm the km-based bands (<=1 km 0.8 ... 4-5 km 0.3, >5 km 0); the tracker also records that Sathish advised not implementing distance scoring (Sep 22, 2026), that no revised Location logic was finalized at the Sep 22 client call, and that the Nov 3 proposal (BR-REL-162, BR-REL-169) leaves the Backend-to-ML input and Business sign-off pending. → Business rule is authoritative; implementation status unresolved.
