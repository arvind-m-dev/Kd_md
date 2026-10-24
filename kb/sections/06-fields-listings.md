# 06 — Input Fields, Cards, Bulk Upload & Listing Management

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Demand Input fields - September 16 | Google Sheet (1 tab: "Demand Input fields") | 1wxriATtu4B7pXm8_UdVmq-qNivcOhwRyp4lgKmYd7fo | pradeepa.pv@futuristglobal.com | 2026-09-16 | AUTHORITATIVE |
| 2 | Property & Project Input Fields - September 16th | Google Sheet (1 tab: "Property & Project Input Fields") | 1xf8Efoa0GhJgfxSnUBeW9w6L3jntJziUbzmhQdtpsmQ | pradeepa.pv@futuristglobal.com | 2026-09-16 | AUTHORITATIVE |
| 3 | Property And Demand, Project Card Details | Google Doc | 1gRsyx7gDMAnGbpxdF7twjQKMDNLcfivT0RSidB2XsYE | pradeepa.pv@futuristglobal.com | 2026-10-08 | AUTHORITATIVE |
| 4 | Data set for Bulk Upload.xlsx | Excel (.xlsx, 1 tab: "Sheet1") | 1KCoNi_zjVIVAo80Vjqvn5TXkqxBlfjRI | pradeepa.pv@futuristglobal.com | 2026-08-18 | AUTHORITATIVE (reference/master data) |
| 5 | Control Panel Bulk Upload Fields | Google Sheet (1 tab: "Control Panel - Bulk Upload Fields") | 1vE8L1BGFQOthubB4WFlAoFe5faDaUVOBCSZfPwzqq08 | pradeepa.pv@futuristglobal.com | 2026-10-04 | AUTHORITATIVE |
| 6 | Profile Management, Property, Demand and Project Listing Management as per User Persona | Google Doc (2 resolved comment threads) | 1TB9a3t7dnWahn2csV1BoAeDguX8vpF8NbU2iX5RVh6Y | pradeepa.pv@futuristglobal.com | 2026-06-01 | AUTHORITATIVE (oldest doc in group; where it conflicts with the Sep/Oct field sheets on field-level detail, see Conflicts) |

Reading conventions used below for the two input-field sheets:
- Each sheet has a single tab laid out as many side-by-side blocks (one block per upload form). Each block is transcribed as its own table, in sheet order, with the sheet row number (`R<n>`) kept for traceability.
- Column headers are the sheet's own. The sheet has two extra columns per block headed only by the reviewer annotation **"Himanshu"** with the date **"17-06-2026"**; their content is the UI control type and the UI validation/format, so they are labelled `UI Control (Himanshu 17-06-2026)` and `UI Validation (Himanshu 17-06-2026)`. Columns with no header in the sheet are labelled `(unlabeled col n)`.
- `*` after a field name in the "Overview" column is the source's mandatory marker. "Can be edited-Yes/No" is whether the field can be edited after posting.
- "View Page Order" = position on the listing view/detail page; "Add/Upload Form Order" = position on the add/upload form.
- Cell text is kept verbatim (including the source's typos, e.g. "Conditionig", "Retal", "pacakage", "Posession").

---
## Demand Input fields - September 16  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1wxriATtu4B7pXm8_UdVmq-qNivcOhwRyp4lgKmYd7fo` · owner pradeepa.pv@futuristglobal.com · modified 2026-09-16 · tabs read: "Demand Input fields" (A1:IS1000; 28 populated rows × 250 cols, 22 form blocks) · read coverage: 100%

### Content
Row 1 holds the block (form) titles; cell H1 holds the date "17-06-2026" and H2 holds "Himanshu" (reviewer annotation for the UI control/validation columns). Row 2 holds the column headers of each block.

Forms in sheet order: Retail Demand Lease (Agent) · F&B Demand Lease (Agent) · F&B Buy Demand (F&B Agent) · Retail Demand Buy (Agent) · Office Demand Lease (Agent) · Office Demand Buy (Agents) · Retail Lease Demand (Retail Brand) · F&B Lease Demand (F&B Brand) · F&B Buy Demand (F&B Brand) · F&B and Retail Demand (Lease/Buy) for Individual Brands · Retail Demand Buy (Retail Brand) · Office Demand Lease (Office Tenant) · Office Demand Buy (Office Tenant) · Managed Space Demand (Managed Office) · Retail Lease Demand (Keydemand) · F&B Demand Lease (Keydemand) · F&B Buy Demand (F&B Keydemand) · Retail Buy Demand (Keydemand) · Office Lease Demand (Keydemand) · Office Buy Demand (Keydemand) · Flex Demand (Keydemand) - Phase 2 · Managed Space Demand (Keydemand).

#### Uploading Retail Demand Lease (for Agent)

_Cols H–I carry the reviewer annotation header "17-06-2026" / "Himanshu" (UI control and UI validation); they are merged into this table._

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R6 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R7 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single location selection |
| R8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R11 | Yes | 8 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R12 | Yes | 9 | 10 | Additional Demand Details | Text |  |  | Text box | alpha numeric allowed |
| R13 | Yes | 10 | 9 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R14 |  |  |  | Additional Details |  |  |  |  |  |
| R15 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R16 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| R18 |  |  |  | Amenities |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| R20 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| R21 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| R24 |  |  |  | Transaction |  |  |  |  |  |
| R25 | Yes | 19 | 19 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R26 | Yes | 20 | 20 | Lockin period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Demand Lease (For Agent)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  |  | Entire new asset class |  |  |
| R4 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R5 | No | 2 | 3 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R6 | No | 3 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R7 | Yes | 4 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R8 | No | 5 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate |  |  |  | Drop Down | Single select |
| R11 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any |  | Multi Select | Radio button | Single select |
| R12 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R13 | Yes | 10 | 10 | Additional Demand Details | Text |  |  |  | Text box | alpha numeric allowed |
| R14 |  |  |  | Additional Details |  |  |  |  |  |  |
| R15 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R16 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button | Radio button |
| R18 |  |  |  | Amenities |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R20 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  | Multi Select | Radio button | Single select |
| R22 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  | Multi Select | Tick box | Multi Select |
| R23 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either |  |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R25 |  |  |  | Transaction |  |  |  |  |  |  |
| R26 | Yes | 20 | 20 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R27 | Yes | 21 | 21 | Lock-in Period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less |  | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Buy Demand (For F&B Agent)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| R6 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| R7 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R11 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| R12 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R13 | Yes | 10 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R14 |  |  |  | Additional Details |  |  |  |  |  |  |
| R15 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R16 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| R18 |  |  |  | Amenities |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R20 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R23 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R25 |  |  |  | Documents |  |  |  |  |  |  |
| R26 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Uploading Retail Demand Buy For Agent

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| R6 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R7 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R11 | Yes | 8 | 8 | Budget | Number |  |  | Number |  |
| R12 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R13 | Yes | 10 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R14 | Yes | 11 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R15 |  |  |  | Additional Details |  |  |  |  |  |
| R16 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |
| R20 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| R21 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |

#### Uploading Office Demand Lease (For Agent)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R6 | No | 3 | 3 | City* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R7 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R11 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R12 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R13 |  |  |  | Additional Details |  |  |  |  |  |
| R14 | Yes | 10 | 10 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| R15 |  |  |  | Amenities |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| R17 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| R18 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| R19 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| R20 | Yes | 15 | 15 | Amenities required | Fire sensors | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| R21 |  |  |  | Transaction |  |  |  |  |  |
| R22 | Yes | 16 | 16 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R23 | Yes | 17 | 17 | Lockin period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading Office Demand Buy (For Agents)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| R6 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R7 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R10 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R11 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R12 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R13 |  |  |  | Additional Details |  |  |  |  |  |
| R14 | Yes | 10 | 10 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| R15 |  |  |  | Amenities |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| R17 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| R18 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| R19 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| R20 | Yes | 15 | 15 | Amenities required | AC | drop Down | Multi Select | Tick box | Multi Select |

#### Uploading Retal Lease Demand (For Retail Brand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | (unlabeled col 8) | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |  |
| R4 |  |  |  | Select Brand (Formats) |  |  | Only for Enterprise Brands with multiple brands |  |  |  |
| R5 | No | 1 | 1 | Asset Class* | Retail |  |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction type* | Lease |  |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R12 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R13 | Yes | 9 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R14 | Yes | 10 | 9 | Floor Preference* | Ground | Ground, Any |  |  | Radio button | Single select |
| R15 |  |  |  | Additional Details |  |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 13 | 13 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |  |
| R20 | Yes | 14 | 14 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R23 | Yes |  |  | Transaction |  |  |  |  |  |  |
| R24 | Yes | 17 | 17 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R25 | Yes | 18 | 18 | Lockin period | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Lease Demand (For F&B Brand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| R4 |  |  |  | Select Brand (Formats) |  |  |  | Only for Enterprise Brands with multiple brands |  |  |
| R5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search | Lease |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R12 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| R13 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R14 | Yes | 9 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R15 |  |  |  | Additional Details |  |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |  |
| R20 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R24 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| R25 | Yes | 18 | 18 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R26 |  |  |  | Transaction |  |  |  |  |  |  |
| R27 | Yes | 20 | 20 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R28 | Yes | 21 | 21 | Lock-in Period | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Buy Demand (For F&B Brand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| R4 |  |  |  | Select Brand (Formats) |  |  |  | Only for Enterprise Brands with multiple brands |  |  |
| R5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R12 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| R13 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R14 | Yes | 10 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R15 |  |  |  | Additional Details |  |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |  |
| R20 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R24 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| R25 | Yes | 18 | 18 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R26 |  |  |  | Documents |  |  |  |  |  |  |
| R27 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Uploading F&B and Retail Demand (Lease/Buy) for Individual Brands

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 | No | 1 | 1 | Asset Class* | Retail /F&B |  |  | Radio button | Single select |
| R4 | No | 2 | 2 | Transaction type* | Lease/Buy |  |  | Radio button | Single select |
| R5 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R6 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R7 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R8 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R9 | Yes | 7 | 7 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R10 | Yes | 8 | 8 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R11 | Yes | 9 | 9 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R12 | Yes | 10 | 10 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| R14 | Quick journey when they come in - quick turnaround |  |  |  |  |  |  |  |  |

#### Uploading Retail Demand Buy (For Retail Brand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 |  |  |  | Select Brand (Formats) |  |  | Only for Enterprise Brands with multiple brands |  |  |
| R5 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R12 | Yes | 8 | 8 | Budget | Number |  |  | Number with commas & suffix |  |
| R13 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R14 | Yes | 10 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R15 | Yes | 11 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R16 |  |  |  | Additional Details |  |  |  |  |  |
| R17 | Yes | 12 | 12 | Clear Ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R19 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button |
| R20 |  |  |  | Amenities |  |  |  |  |  |
| R21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| R24 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| R25 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| R26 |  |  |  | Documents |  |  |  |  |  |
| R27 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  | Tick box | Multi Select |

#### Uploading Office Demand Lease (Office Tenant)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary Details |  |  |  |  |  |
| R5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested locations | Text+Autofil |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 8 | Budget | Number |  |  | Number |  |
| R12 | Yes | 8 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R13 | Yes | 9 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R14 | Yes | 10 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R15 |  |  |  | Additional Details |  |  |  |  |  |
| R16 | Yes | 11 | 11 | Age of property | 5 - 10 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any |  | Drop Down | Single select |
| R17 |  |  |  | Amenities |  |  |  |  |  |
| R18 | Yes | 12 | 12 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| R19 | Yes | 13 | 13 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| R20 | Yes | 14 | 14 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| R23 |  |  |  | Transaction |  |  |  |  |  |
| R24 | Yes | 17 | 17 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R25 | Yes | 18 | 18 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R26 |  |  |  | Documents |  |  |  |  |  |
| R27 | Yes | 19 | 19 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  | Tick box | Multi Select |

#### Uploading Office Demand Buy (Office Tenant)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary Details |  |  |  |  |  |
| R5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| R6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| R7 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 5 | 5 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R12 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R13 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R14 |  |  |  | Additional Details |  |  |  |  |  |
| R15 | Yes | 10 | 10 | Age of property | Less than 5 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any |  | Drop Down | Single select |
| R16 |  |  |  | Amenities |  |  |  |  |  |
| R17 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| R18 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| R19 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| R20 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| R22 |  |  |  | Documents |  |  |  |  |  |
| R23 | Yes | 16 | 16 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses | Floor Plan, Autocad, Fire NOC, Other Licenses | Tick box | Multi Select |

#### Uploading Managed Space Demand (Managed Office)

_The first three columns (Can be edited / View Page Order / Add/Upload Form Order) of this block sit under the previous block's title area in the sheet (cols EV–EX); merged here._

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|
| R3 | No | 1 | 1 | Asset Class* | Managed Space |  | Radio button | Single select |
| R4 | No | 2 | 2 | Transaction type* | Lease |  | Radio button | Single select |
| R5 | No | 3 | 3 | City* | Dropdown plus search |  | Search with auto fill | Single city selection |
| R6 | Yes | 4 | 4 | Other interested locations | Drop Down + Search |  | Search with auto fill | Multiple locations can be added upto 3 |
| R7 | No | 5 | 5 | Location* | Drop Down + Search |  | Search with auto fill | Single city selection |
| R8 | Yes | 6 | 6 | Possession needed* | Within 3 months | Immediate, Within 3 months | Drop Down | Single select |
| R9 | Yes | 7 | 7 | Number of seats* | Number field | Number fields (only accept more than 20 seats) | Number |  |
| R11 | This would not be shown to any users except Keydemand team |  |  |  |  |  |  |  |
| R12 | These requirements will be sent to KD team and Admin team as a requirement |  |  |  |  |  |  |  |
| R14 | Quick journey when they come in - quick turnaround |  |  |  | Property cam charges from office side |  |  |  |

#### Uploading Retail Lease Demand for (Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| R7 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R12 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R13 | Yes | 10 | 11 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R14 | Yes | 11 | 10 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R15 |  |  |  | Additional Details |  |  |  |  |  |
| R16 | Yes | 12 | 12 | Clear ceiling height | Number (In feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Frontage in feet | Number (In feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |
| R20 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| R21 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| R25 |  |  |  | Transaction |  |  |  |  |  |
| R26 | Yes | 20 | 20 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R27 | Yes | 21 | 21 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Demand Lease (For Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  |  | Entire new asset class |  |  |
| R4 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent |  | Not visible at user end | Not visible at user end |  |
| R7 | No | 4 | 4 | City * | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Text |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R12 | Yes | 10 | 10 | Floor Preference* | Ground | Ground, Any |  | Multi Select | Radio button | Single select |
| R13 | Yes | 9 | 9 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R14 | Yes | 11 | 11 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R15 |  |  |  | Additional Details |  |  |  |  |  |  |
| R16 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 14 | 14 | Store Type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |  |
| R20 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 19 | 19 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 17 | 17 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  | Multi Select | Tick box | Multi Select |
| R24 | Yes | 18 | 18 | Cooking Type Required | Electric | Electric, Gas |  | Multi Select | Radio button | Single select |
| R25 | Yes | 20 | 20 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R26 |  |  |  | Transaction |  |  |  |  |  |  |
| R27 | Yes | 21 | 21 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R28 | Yes | 22 | 22 | Lock-in Period | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |

#### Uploading F&B Buy Demand (For F&B Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent |  | Not visible at user end | Not visible at user end |  |
| R7 | No | 4 | 4 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 9 | 9 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R12 | Yes | 8 | 8 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| R13 | Yes | 10 | 10 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| R14 | Yes | 11 | 11 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| R15 |  |  |  | Additional Details |  |  |  |  |  |  |
| R16 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R17 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 14 | 14 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| R19 |  |  |  | Amenities |  |  |  |  |  |  |
| R20 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| R21 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 19 | 19 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 17 | 17 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R24 | Yes | 18 | 18 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| R25 | Yes | 20 | 20 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| R26 |  |  |  | Documents |  |  |  |  |  |  |
| R27 | Yes | 21 | 21 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Uploading Retail Buy Demand (Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| R7 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R12 | Yes | 9 | 9 | Budget | Number |  |  | Number |  |
| R13 | Yes | 10 | 10 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R14 | Yes | 11 | 12 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R15 | Yes | 12 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| R16 |  |  |  | Additional Details |  |  |  |  |  |
| R17 | Yes | 13 | 13 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R18 | Yes | 14 | 14 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R19 | Yes | 15 | 15 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| R20 |  |  |  | Amenities |  |  |  |  |  |
| R21 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| R25 | Yes | 20 | 20 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |

#### Uploading Office Lease Demand (Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |  |  |  |
| R4 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| R7 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| R12 | Yes | 9 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R13 | Yes | 10 | 10 | OC required | Yes | Yes, No |  | Radio button | Single select |
| R14 |  |  |  | Transaction |  |  |  |  |  |
| R15 | Yes | 11 | 11 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R16 | Yes | 12 | 12 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R17 |  |  |  | Additional Details |  |  |  |  |  |
| R18 | Yes | 13 | 13 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| R19 |  |  |  | Amenities |  |  |  |  |  |
| R20 | Yes | 14 | 14 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| R21 | Yes | 15 | 15 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| R23 | Yes | 17 | 17 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| R24 | Yes | 18 | 18 | Amenities required | Fire sensors | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |

#### Uploading Office Buy Demand (Keydemand)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|
| R3 |  |  |  | Primary Details |  |  |
| R4 | No | 1 | 1 | Asset Class* | Radio button | Single select |
| R5 | No | 2 | 2 | Transaction type* | Radio button | Single select |
| R6 | Yes | 3 | 3 | Who can see your demand* | Not visible at user end |  |
| R7 | No | 4 | 4 | City* | Search with auto fill | Single city selection |
| R8 | No | 5 | 5 | Location* | Search with auto fill | Single city selection |
| R9 | Yes | 6 | 6 | Other interested locations | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | Yes | 7 | 7 | Carpet area in sq.ft* | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R11 | Yes | 8 | 9 | Possession needed* | Drop Down | Single select |
| R12 | Yes | 9 | 8 | Additional demand details | Text box | alpha numeric allowed |
| R13 | Yes | 10 | 10 | OC required | Radio button | Single select |
| R14 |  |  |  | Additional Details |  |  |
| R15 | Yes | 11 | 11 | Age of property | Drop Down | Single select |
| R16 |  |  |  | Amenities |  |  |
| R17 | Yes | 12 | 12 | Toilet Required | Radio button | Single select |
| R18 | Yes | 13 | 13 | Car Parking Required | Radio button | Single select |
| R19 | Yes | 14 | 14 | Bike Parking required | Radio button | Single select |
| R20 | Yes | 15 | 15 | Fitout Status | Radio button | Single select |
| R21 | Yes | 16 | 16 | Amenities required | Tick box | Multi Select |

#### Uploading Flex Demand (Keydemand) - Phase 2

| Row | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|
| R3 |  | Primary Details |  |  |  |  |  |
| R4 | 1 | Asset Class* | Flex space |  |  | Radio button | Single select |
| R5 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| R6 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| R7 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R8 | 5 | Location* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R9 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R10 | 8 | Possession needed* | Immediate | Immediate, Within 3 months |  | Drop Down | Single select |
| R11 | 7 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| R12 |  | Flex Space Formats |  |  |  |  |  |
| R13 | 9 | No. of Seats For Flexi Desk | Number |  |  |  |  |
| R14 | 10 | Budget/Per seat | Number |  |  |  |  |
| R15 | 11 | No. of Seats For Dedicated Desk | Number |  |  |  |  |
| R16 | 12 | Budget/Per seat | Number |  |  |  |  |
| R17 | 13 | No. of Seats For Meeting Room | Number |  |  |  |  |
| R18 | 14 | Budget/Per seat | Number |  |  |  |  |
| R19 | 15 | No. of Seats For Cabins | Number |  |  |  |  |
| R20 | 16 | Budget/Per seat | Number |  |  |  |  |
| R21 | 17 | No. of Seats For Managed Office | Number |  |  |  |  |
| R22 | 18 | Budget/Per seat | Number |  |  |  |  |
| R23 |  | Amenities |  |  |  |  |  |
| R24 | 19 | Amenities required | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi. |  |  |  |
| R25 |  | Additional Details |  |  | Multi Select |  |  |
| R26 | 20 | Bike Parking required | Yes |  |  |  |  |
| R27 | 21 | Car Parking Required | Yes |  |  |  |  |

#### Uploading Managed Space Demand (Keydemand )

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|
| R3 | No | 1 | 1 | Asset Class* | Managed Space |  |  | Radio button | Single select |
| R4 | No | 2 | 3 | Transaction type* | Lease |  |  | Radio button | Single select |
| R5 | No | 3 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| R6 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| R7 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| R8 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months |  | Drop Down | Single select |
| R9 | Yes | 8 | 8 | Number of seats* | Number field | Number fields (only accept more than 20 seats) |  | Number |  |
| R10 | Yes | 4 | 2 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| R12 |  | These requirements posted by Keydemand team will only be viewed by other Keydemand team (in Explore, relevancy) and no other suppliers can view them. |  |  |  |  |  |  |  |
| R13 |  | These requirements will be sent to other KD team and Admin team as a requirement |  |  |  |  |  |  |  |


### Business rules extracted
_Demand forms (Agent, Brand, Office Tenant, Managed Space, Keydemand)._
- **BR-FLD-001** — Asset Class* is mandatory on every demand form, shown as a Radio button (Single select), and cannot be edited after posting ("Can be edited" = No). _(§ every block, Asset Class* row)_
- **BR-FLD-002** — Transaction type* is mandatory, Radio button (Single select), not editable after posting; values are Lease or Buy as fixed by the form (Retail/F&B/Office: Lease or Buy; Managed Space and Flex: Lease). _(§ all blocks)_
- **BR-FLD-003** — City* is mandatory, "Search with auto fill", Single city selection, not editable after posting. _(§ all blocks)_
- **BR-FLD-004** — Location* is mandatory, "Search with auto fill", single selection, not editable after posting. _(§ all blocks; UI Validation says "Single location selection" in Retail Demand Lease (Agent) and "Single city selection" in most others)_
- **BR-FLD-005** — "Other interested Location(s)" is optional, editable, Search with auto fill; "Multiple locations can be added upto 3". _(§ all blocks except Flex)_
- **BR-FLD-006** — Carpet area in sq.ft* is mandatory and editable on Retail, F&B and Office demands; UI is "Number with commas & suffix", Indian digit grouping, e.g. "2,500 sft, 25,000 sft, 1,00,000 sft". _(§ Carpet area rows)_
- **BR-FLD-007** — Possession needed* is mandatory, editable, Drop Down single select with options Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months (default shown: Immediate) for Retail/F&B/Office demands. _(§ Possession rows)_
- **BR-FLD-008** — For Managed Space demands, Possession needed* options are only Immediate, Within 3 months (Managed Office form default "Within 3 months"; Keydemand form default "Immediate"). _(§ Managed Space Demand blocks R8)_
- **BR-FLD-009** — OC required is optional, editable, Radio button Yes/No (default Yes). _(§ OC required rows)_
- **BR-FLD-010** — Additional Demand Details is optional, editable, Text box, "alpha numeric allowed". _(§ Additional demand details rows)_
- **BR-FLD-011** — Floor Preference* is mandatory on Retail and F&B demands, Radio button single select, options Ground, Any (default Ground). _(§ Floor Preference rows)_
- **BR-FLD-012** — Clear ceiling height and Frontage in feet are optional, editable "Text box with suffix", "Only Numbers Eg. 11 ft". _(§ Retail/F&B Additional Details)_
- **BR-FLD-013** — Store type* is mandatory on Retail and F&B demands, Radio button, options Highstreet, Mall, Any (default Highstreet). _(§ Store type rows)_
- **BR-FLD-014** — Toilet required, Fitouts required, Parking required and Mezzanine required (where present) are optional Radio button Yes/No (default Yes). _(§ Amenities sections)_
- **BR-FLD-015** — Retail and F&B "Amenities required" is an optional Tick box Multi Select from: AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Signage, Vastu Compliance, Visitor's Parking (default Power backup; most blocks list "Lift" twice). _(§ Amenities required rows)_
- **BR-FLD-016** — Office "Amenities required" is an optional Tick box Multi Select from: AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking. _(§ Office blocks)_
- **BR-FLD-017** — Lease tenure in years is optional, "Text box with suffix", "Only Numbers Eg. 11 years" (Lease demands only). _(§ Transaction sections)_
- **BR-FLD-018** — Lock-in period is optional, numeric with years suffix; "Lock-in period cannot be more than lease period, It can be equal or less". _(§ Retail Demand Lease (Agent) R26; F&B Demand Lease (Agent) R27; Office Demand Lease (Agent) R23)_
- **BR-FLD-019** — F&B demands are an "Entire new asset class" in V2. _(§ F&B blocks R3 "V2 New Fields")_
- **BR-FLD-020** — F&B demands add Cooking Type (Radio button single select; Electric, Gas, Either; default Electric) and Non-Veg Served (Yes/No). In F&B Demand Lease (For Keydemand) the field is "Cooking Type Required" with options Electric, Gas only. _(§ F&B blocks)_
- **BR-FLD-021** — Buy demands for F&B (Agent, Brand, Keydemand), Retail Buy (Retail Brand) and Office Buy/Lease (Office Tenant) carry an optional "Required Documents" Tick box Multi Select: Floor Plan, Autocad, Fire NOC, Other Licenses (default Floor Plan). _(§ Documents sections)_
- **BR-FLD-022** — Retail Buy demands (Agent, Retail Brand, Keydemand) and Office Demand Lease (Office Tenant) have an optional numeric "Budget" field (UI "Number" / "Number with commas & suffix"). _(§ Budget rows)_
- **BR-FLD-023** — Office demands do not ask Floor Preference, Store type, ceiling height or frontage; they ask Age of property, Toilet Required, Car Parking Required, Bike Parking required, Fitout Status (Unfurnished, Furnished; default Unfurnished) and Amenities required. _(§ Office blocks)_
- **BR-FLD-024** — Office "Age of property" for Agent and Keydemand forms: Drop Down single select, options Any, Less than 5 Years, 5 - 10 Years, Above 10 Years. _(§ Office Demand Lease/Buy (Agent) R14; Office Lease Demand (Keydemand) R18)_
- **BR-FLD-025** — Office "Age of property" for Office Tenant forms: options Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any. _(§ Office Tenant blocks)_
- **BR-FLD-026** — "Select Brand (Formats)" appears at the top of Brand demand forms "Only for Enterprise Brands with multiple brands". _(§ Retail Lease/Buy (Retail Brand) R4; F&B Lease/Buy (F&B Brand) R4)_
- **BR-FLD-027** — Individual Brands (Retail/F&B, Lease/Buy) use a short form: Asset Class*, Transaction type*, City*, Location*, Other interested Location, Carpet area*, Floor Preference*, Clear ceiling height, Frontage, Store type*; intent "Quick journey when they come in - quick turnaround". _(§ F&B and Retail Demand for Individual Brands)_
- **BR-FLD-028** — Keydemand demand forms add "Who can see your demand*" (Multi Select of Developer, Keydemand, Agent), which is "Not visible at user end". _(§ Keydemand blocks R6/R10)_
- **BR-FLD-029** — Managed Space demand "Number of seats*" is a mandatory number that must "only accept more than 20 seats". _(§ Managed Space blocks R9)_
- **BR-FLD-030** — Managed Space demand (Managed Office) is not shown to any users except the Keydemand team, and the requirement is sent to the KD team and Admin team. _(§ Managed Space Demand (Managed Office) R11–R12)_
- **BR-FLD-031** — Managed Space demands posted by the Keydemand team "will only be viewed by other Keydemand team (in Explore, relevancy) and no other suppliers can view them", and are sent to other KD team and Admin team as a requirement. _(§ Managed Space Demand (Keydemand) R12–R13)_
- **BR-FLD-032** — Flex Demand (Keydemand) is Phase 2. Its form has Flex Space Formats: No. of Seats and Budget/Per seat for each of Flexi Desk, Dedicated Desk, Meeting Room, Cabins, Managed Office; amenities from the flex list (24/7 security … WiFi); Bike/Car Parking required. _(§ Flex Demand block)_
- **BR-FLD-033** — Possession needed for Flex demand: Immediate, Within 3 months. _(§ Flex R10)_
- **BR-FLD-034** — Fields with "Can be edited" = No (Asset Class, Transaction type, City, Location) are locked after posting; all other demand fields are editable (Yes). _(§ column A of each block)_
- **BR-FLD-035** — View-page order and add/upload-form order differ for some fields (e.g. Additional Demand Details and Floor Preference swap; OC required before/after Possession), and each form must follow its own two orderings. _(§ View Page Order / Add/Upload Form Order columns)_

### Open questions / ambiguities in this doc
- Location* UI validation says "Single city selection" in most blocks; only Retail Demand Lease (Agent) says "Single location selection". Probably a copy error.
- Lock-in ≤ lease tenure rule is written only on three Agent lease forms; it is not written on Brand, Office Tenant or Keydemand lease forms. Should it apply to all?
- Several rows put "Multi Select" in "V2 New Fields"/"Additional Info" for single-select fields (Floor Preference, Cooking Type, Parking required), while the UI columns say Radio button / Single select.
- Office Demand Buy (For Agents) Amenities "Drop Down" column says only "drop Down" (no option list).
- Office Buy Demand (Keydemand) block has only order/UI columns: no Input Fields, Drop Down values or defaults.
- Retail Lease Demand (For Retail Brand): the "Transaction" section header row has "Yes" in "Can be edited", and Lease tenure/Lock-in carry no lock-in validation note.
- F&B Lease Demand (For F&B Brand): "Other interested Location" Drop Down column says "Lease" (looks like a stray value). Additional demand details has View Page Order 9, which duplicates Floor Preference's 9.
- F&B Demand Lease (For Keydemand): Carpet area input type is "Text", where other forms say "Number".
- F&B Buy Demand (For F&B Keydemand): Possession (view 9) and Floor Preference (view 8) are out of order compared with the other F&B forms.
- Managed Space Demand (Managed Office): note "Property cam charges from office side" (R14) has no context.
- Flex Demand: Additional Details "Multi Select" sits under a section header, and Bike/Car parking have no options listed.
- Default "Who can see your demand*" differs: Developer (Retail Lease KD, F&B Lease KD, Flex, Managed Space KD) vs Keydemand (F&B Buy KD, Retail Buy KD, Office Lease KD).

---
## Property & Project Input Fields - September 16th  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1xf8Efoa0GhJgfxSnUBeW9w6L3jntJziUbzmhQdtpsmQ` · owner pradeepa.pv@futuristglobal.com · modified 2026-09-16 · tabs read: "Property & Project Input Fields" (A1:FV1000; 65 populated rows × 178 cols, 16 form blocks plus V1→V2 rename and deleted-field sub-tables) · read coverage: 100%

### Content
Row 1 holds group banners: **FOR AGENTS** (col D), **KEYDEMAND** (col BR), **Managed Space Operator** (col FB), **Developer Projects Lease/Sale- backend** (col FR). Row 2 holds the form titles, each with the reviewer date "17-06-2026". Row 3 holds the column headers. Within many blocks, lower rows carry two sub-tables: "Deleted Fields (from V1)" and "On Website- V1 → New Field Name-V2" (V1→V2 renames). They are shown below each main table.

#### Group: FOR AGENTS

##### Uploading Retail Property Lease (For Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media(images and videos) |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Text + Autofill |  |  |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| R12 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  | 3,125 sq.ft. |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| R14 | Yes | 10 | 8 | Quoted Rent* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R16 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R19 | Yes | 14 | 13 | Clear Ceiling Height (ft.)* | Number |  | 12 Ft |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R20 | Yes | 15 | 15 | Frontage (ft.)* | Number |  | 22 Ft |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 17 | 16 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R26 | Yes | 21 | 21 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R27 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R28 | Yes | 22 | 22 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R29 | Yes | 23 | 23 | CAM / Maintenance Charges | Number (Enter Total Amount) |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R30 | Yes | 24 | 24 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R31 | Yes | 25 | 25 | Lease Tenure in Years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R32 | Yes | 26 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R33 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R34 | Yes | 27 | 27 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R35 | Yes | 28 | 28 | Other Documents | Media |  |  | New | Media (PDF) | Less than 2MB |
| R36 | Yes | 29 | 29 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R39 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| R40 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R41 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| R42 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R43 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R44 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R45 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R46 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R47 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R48 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R49 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R53 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R55 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R56 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| R57 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R58 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R59 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R60 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R61 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R62 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| R63 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| R64 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading F&B Property Lease (For Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* |  |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Lease | Lease |  |  | Radio button | Single select |
| R12 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| R14 | Yes | 10 | 8 | Quoted Rent* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R16 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R19 | Yes | 14 | 14 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R20 | Yes | 15 | 15 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 16 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 19 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R25 | Yes | 20 | 21 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R26 | Yes | 21 | 20 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| R27 | Yes | 22 | 22 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes | 23 | 23 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R30 | Yes | 24 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R31 | Yes | 25 | 26 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R32 | Yes | 26 | 24 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R33 | Yes | 27 | 25 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R34 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R35 | Yes | 28 | 28 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R36 | Yes | 29 | 29 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R37 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| R39 |  |  |  | Hide Images | Toggle-Yes/No |  |  |  |  |  |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R40 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| R41 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R42 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| R43 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R44 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R45 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R46 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R47 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R48 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R49 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R50 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R52 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R54 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R55 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| R56 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R57 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R58 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R59 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R60 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R61 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| R62 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| R63 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading F&B Property Sale (For Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Property & Project Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | 0 |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Sale |  |  |  | Radio button | Single select |
| R12 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| R14 | Yes | 10 | 8 | Quoted Price* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R16 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R19 | Yes | 14 | 14 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R20 | Yes | 15 | 15 | Frontage (ft.) | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 16 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 17 | 17 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 19 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R25 | Yes | 20 | 21 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R26 | Yes | 21 | 20 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| R27 | Yes | 22 | 22 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes | 23 | 23 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R30 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R31 | Yes | 24 | 24 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R32 | Yes | 25 | 25 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R33 | Yes | 26 | 26 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Property & Project Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R36 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R37 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R38 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R39 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R40 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| R41 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| R42 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| R43 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| R44 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R45 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R47 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R49 |  |  |  | Location | Locality* |  |  |  |  |  |
| R50 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R51 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R52 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R53 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R54 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R55 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R56 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R57 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| R58 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading Retail Property Sale (Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Drop Down + Search |  | Location |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| R12 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 8 | Quoted Price* | Number |  | Auto calculated if 'Rate per sq. ft.' amount is provided | New | Number with suffix | ₹85,000 per month |
| R14 | Yes | 10 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if 'Sale' amount is provided | New - Rate per square feet on carpet area* | Number with suffix | ₹85 per sft |
| R15 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R16 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R19 | Yes | 14 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R20 | Yes | 15 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| R22 | Yes | 17 | 18 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 14 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 20 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R26 | Yes | 21 | 21 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R27 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R28 | Yes | 22 | 22 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R29 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R30 | Yes | 23 | 23 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R31 | Yes | 24 | 24 | Other Documents | Media |  |  | New | Media (PDF) | Less than 2MB |
| R32 | Yes | 25 | 25 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R34 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R35 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R36 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R37 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R38 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| R39 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| R40 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| R41 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| R42 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R43 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R46 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R48 |  |  |  | Location | Locality* |  |  |  |  |  |
| R49 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R50 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R51 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R52 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R53 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R54 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R55 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R56 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| R57 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading Office Property Lease (Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Let user ask for Images | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Text + Autofill |  | Location |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| R12 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 8 | Built up Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Quoted Rent* | Number |  | Auto calculated if Rate amount is provided | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Lease is provide | New | Number with suffix | ₹85 per sft |
| R16 | Yes | 12 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| R19 | Yes | 14 | 16 | Fitouts status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R21 | Yes | 16 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R22 | Yes | 17 | 14 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| R23 | Yes | 18 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R24 | Yes | 19 | 20 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| R25 | Yes | 20 | 21 | Meeting Room | Number |  |  |  | Number with prefix | Eg.10 |
| R26 | Yes | 21 | 13 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| R27 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R28 | Yes | 22 | 22 | Deposit in months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R29 | Yes | 23 | 25 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R30 | Yes | 24 | 23 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R31 | Yes | 25 | 24 | Rent escalation | Every Year | Every Year, Every 3 Year |  | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R32 | Yes | 26 | 26 | CAM / Maintenance Charges | Number |  |  |  | Number with suffix | Only Numbers Eg. ₹850 per month |
| R33 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R34 | Yes | 27 | 27 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R35 | Yes | 28 | 28 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R36 | Yes | 29 | 29 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R40 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R41 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R42 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| R43 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| R44 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R45 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R46 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R47 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R48 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R49 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R50 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R53 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R54 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| R55 |  |  |  | Location | Locality* |  |  |  |  |  |
| R56 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R57 |  |  |  | Built-up Area in square feet | Built up Area (sq. ft.) |  |  |  |  |  |
| R58 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| R59 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| R60 |  |  |  | Fitouts Status | Fitouts status |  |  |  |  |  |
| R61 |  |  |  | Bike Parking Allotted | Bike Parking |  |  |  |  |  |
| R62 |  |  |  | Car Parking Allotted | Car Parking |  |  |  |  |  |
| R63 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R64 |  |  |  | Meeting rooms | Meeting Room |  |  |  |  |  |
| R65 |  |  |  | Documents | Other Documents |  |  |  |  |  |

##### Uploading Office Property Sale (Agent) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details | Overview |  |  |  |  |  |
| R5 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| R9 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| R11 | No | 7 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| R12 | Yes | 8 | 8 | Built up Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R13 | Yes | 9 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Quoted Price* | Number |  | Auto calculated if rate per sq. ft. amount is provided | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Sale Price* is provide | New | Number with suffix | ₹85 per sft |
| R16 | Yes | 12 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R18 | Yes | 13 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| R19 | Yes | 14 | 16 | Fitouts Status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R21 | Yes | 16 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R22 | Yes | 17 | 14 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| R23 | Yes | 18 | 19 | Meeting rooms | Number |  |  |  | Number with prefix | Eg.10 |
| R24 | Yes | 19 | 20 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| R25 | Yes | 20 | 13 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R26 | Yes | 21 | 21 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| R27 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R28 | Yes |  |  | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R29 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R30 | Yes | 22 | 22 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R31 | Yes | 23 | 23 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R32 | Yes | 24 | 24 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R35 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R36 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R37 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| R38 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| R39 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R40 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R41 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R42 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R43 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R44 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R45 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R46 |  |  | 11 | Available Floor number | Text |  |  |  |  |  |
| R52 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R53 |  |  |  | Property Images/Videos | Images & Videos* |  |  |  |  |  |
| R54 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| R55 |  |  |  | Locality* | Location |  |  |  |  |  |
| R56 |  |  |  | Built-up Area in square feet | Built up Area (sq. ft.) |  |  |  |  |  |
| R57 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R58 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R59 |  |  |  | Property Available From* | Property Available From* |  |  |  |  |  |
| R60 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| R61 |  |  |  | Fitouts Status | Fitouts Status |  |  |  |  |  |
| R62 |  |  |  | Bike Parking Allotted | Bike Parking |  |  |  |  |  |
| R63 |  |  |  | Car Parking Allotted | Car Parking |  |  |  |  |  |
| R64 |  |  |  | Meeting rooms | Meeting rooms |  |  |  |  |  |
| R65 |  |  |  | Cabins | Cabins |  |  |  |  |  |

#### Group: KEYDEMAND

##### Uploading Retail Property Lease (For Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| R9 | Yes | 5 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Single select |
| R10 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R11 | No | 7 | 6 | Location* | Text + Autofill |  |  |  | Search with auto fill | Single location selection |
| R12 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Quoted Rent* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85 per sft |
| R16 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 16 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 17 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R22 | Yes | 17 | 18 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 19 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 20 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 21 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R26 | Yes | 21 | 15 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R27 | Yes | 22 | 22 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes | 23 | 24 | Rent escalation | Every Year | Every Year, Every 3 Year | With percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R30 | Yes | 24 | 23 | Deposit in months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R31 | Yes | 25 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R32 | Yes | 26 | 25 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R33 | Yes | 27 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R34 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R35 | Yes | 28 | 28 | Google Location | Drop down with search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R36 | Yes | 29 | 29 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| R37 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R40 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R41 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R42 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| R43 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R44 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R45 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R46 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R47 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R48 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R49 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R50 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R56 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R57 |  |  |  | Locality* | Location |  |  |  |  |  |
| R58 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R59 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| R60 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R61 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R62 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R63 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R64 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R65 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |

##### Uploading F&B Property Lease (For Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Let user ask for Images | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| R9 | No | 5 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | Yes | 6 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent |  | Not visible at user end (This option should be default no, they can change it if wish to) | Drop Down | Multi Select |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R12 | No | 8 | 2 | Transaction Type* | Lease | Lease |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 10 | Rate per sq. ft. (Carpet)* | Number eg. (₹80 per sq.ft) |  | If not provided then to calculate it by applying logic as below <br> Quoted Rent divided by carpet area | New | Number with suffix | ₹85 per sft |
| R15 | Yes | 11 | 9 | Quoted Rent* | Number eg. (₹2,75,000) |  | If not provided then to calculate it by applying logic as below <br> Carpet Area x Rate per sq.ft | New | Number with suffix | ₹85,000 per month |
| R16 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R22 | Yes | 17 | 17 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R26 | Yes | 21 | 22 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R27 | Yes | 22 | 21 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| R28 | Yes | 23 | 23 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| R29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R30 | Yes | 24 | 24 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R31 | Yes | 25 | 28 | CAM / Maintenance Charges | Number eg. (₹72 per sft) |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R32 | Yes | 26 | 27 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R33 | Yes | 27 | 25 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R34 | Yes | 28 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R35 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R36 | Yes | 29 | 29 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R37 | Yes | 30 | 30 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R38 | Yes | 31 | 31 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R40 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| R41 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R42 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| R43 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R44 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R45 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R46 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R47 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R48 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R49 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R50 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R53 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R55 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R56 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| R57 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R58 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R59 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| R60 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R61 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R62 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| R63 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| R64 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading F&B Property Sale (For Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Property & Project Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | 0 |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| R9 | No | 5 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 | Yes | 6 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent |  | Not visible at user end (This option should be default no, they can change it if wish to) | Drop Down | Multi Select |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| R12 | No | 8 | 2 | Transaction Type* | Sale |  |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| R15 | Yes | 11 | 9 | Quoted Price* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| R16 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R22 | Yes | 17 | 17 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| R26 | Yes | 21 | 22 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R27 | Yes | 22 | 21 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| R28 | Yes | 23 | 23 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| R29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R30 | Yes | 24 | 24 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R31 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R32 | Yes | 25 | 25 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R33 | Yes | 26 | 26 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| R34 | Yes | 27 | 27 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |

##### Uploading Office Property Lease (Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 13 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  | Images/Videos |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property/Project* | Text |  | (Brief Description) |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| R9 | Yes | 5 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| R10 | No | 6 | 5 | City* | Drop down with search |  |  |  | Search with auto fill | Single city selection |
| R11 | No | 7 | 6 | Location* | Drop down with search |  |  |  | Search with auto fill | Single city selection |
| R12 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Built up Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R15 | Yes | 11 | 10 | Quoted Rent* | Number |  | Auto calculated if rate per sq.ft is provided | New | Number with suffix | ₹85,000 per month |
| R16 | Yes | 12 | 11 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if lease is provided | New | Number with suffix | ₹85 per sft |
| R17 | Yes | 13 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R19 | Yes | 14 | 15 | Fitout status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 16 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| R21 | Yes | 16 | 17 | Bike parking allotted* | Number |  |  |  | Number with prefix | Eg.10 |
| R22 | Yes | 17 | 18 | Car parking allotted* | Number |  |  |  | Number with prefix | Eg.10 |
| R23 | Yes | 18 | 21 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| R24 | Yes | 19 | 19 | Meeting rooms (numbers) | Number |  |  |  | Number with prefix | Eg.10 |
| R25 | Yes | 20 | 20 | Cabins (numbers) | Number |  |  |  | Number with prefix | Eg.10 |
| R26 | Yes | 21 | 14 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| R27 | Yes | 22 | 22 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes | 23 | 23 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R30 | Yes | 24 | 24 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 years |
| R31 | Yes | 25 | 25 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11 years |
| R32 | Yes | 26 | 26 | Rent escalation | Every Year | Every Year, Every 3 Year | With percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| R33 | Yes | 27 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R34 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R35 | Yes | 28 | 28 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R36 | Yes | 29 | 29 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| R37 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R42 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R43 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R44 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| R45 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| R46 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R47 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R48 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R49 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R50 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R51 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R52 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R54 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R56 |  |  |  | Locality* | Location |  |  |  |  |  |
| R57 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R58 |  |  |  | Builtup Area In Square Feet | Built up Area (sq. ft.) |  |  |  |  |  |
| R59 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R60 |  |  |  | Toilet Available | Washroom available |  |  |  |  |  |
| R61 |  |  |  | Bike parking allotted | Bike parking allotted |  |  |  |  |  |
| R62 |  |  |  | Available Floor number | Floor Number |  |  |  |  |  |
| R63 |  |  |  | Meeting rooms | Meeting rooms (numbers) |  |  |  |  |  |
| R64 |  |  |  | Cabins | Cabins (numbers) |  |  |  |  |  |
| R65 |  |  |  | OC available | OC Status* |  |  |  |  |  |

##### Uploading Retail Property Sale (Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| R9 | Yes | 5 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| R10 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R12 | No | 8 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Quoted Price* | Number |  |  | New | Number with suffix | ₹85,000 per month |
| R15 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  |  | New | Number with suffix | ₹85 per sft |
| R16 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R17 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| R19 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| R20 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R21 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| R22 | Yes | 17 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| R23 | Yes | 18 | 18 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| R24 | Yes | 19 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| R25 | Yes | 20 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| R26 | Yes | 21 | 21 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| R27 | Yes | 22 | 22 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes | 23 | 23 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R30 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| R31 | Yes | 24 | 24 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R32 | Yes | 25 | 25 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| R33 | Yes | 26 | 26 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R37 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R38 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| R39 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R40 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R41 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| R42 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| R43 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| R44 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| R45 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R46 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R48 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R50 |  |  |  | Locality* | Location |  |  |  |  |  |
| R51 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R52 |  |  |  | Builtup Area In Square Feet | Built up Area (sq. ft.) |  |  |  |  |  |
| R53 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R54 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| R55 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| R56 |  |  |  | Toilet avaliable | Washroom Available |  |  |  |  |  |
| R57 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| R58 |  |  |  | OC available | OC Status* |  |  |  |  |  |

##### Uploading Office Property Sale (Keydemand) (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details |  |  |  |  |  |  |
| R5 | Yes | 1 | 13 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| R9 | Yes | 5 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| R10 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R12 | No | 8 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R14 | Yes | 10 | 9 | Built up Area(sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| R15 | Yes | 11 | 10 | Quoted Price* | Number |  | Auto calculated if rate per sq. ft. amount is provided | New | Number with suffix | ₹85,000 per month |
| R16 | Yes | 12 | 11 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Sale Price* is provide | New | Number with suffix | ₹85 per sft |
| R17 | Yes | 13 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| R18 |  |  |  | Property Specifications |  |  |  |  | Radio button | Single select |
| R19 | Yes | 14 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| R20 | Yes | 15 | 16 | Fitouts Status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| R21 | Yes | 16 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R22 | Yes | 17 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| R23 | Yes | 18 | 19 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  | New | Drop Down | Single select |
| R24 | Yes | 19 | 14 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| R25 | Yes | 20 | 20 | Amenities | Cafeteria/Food court | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| R26 | Yes | 21 | 21 | Meeting Room | Number |  |  |  | Number with prefix | Eg.10 |
| R27 | Yes | 22 | 22 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| R28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| R29 | Yes |  |  | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| R30 | Yes | 23 | 23 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R31 | Yes | 24 | 24 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| R32 | Yes | 25 | 25 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R34 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R35 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| R36 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| R37 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| R38 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| R39 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| R40 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| R41 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| R42 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| R43 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| R44 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| R46 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R48 |  |  |  | Locality* | Location |  |  |  |  |  |
| R49 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| R50 |  |  |  | Builtup Area In Square Feet | Built up Area(sq. ft.) |  |  |  |  |  |
| R51 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| R52 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| R53 |  |  |  | Fitouts Status | Fitouts Status |  |  |  |  |  |
| R54 |  |  |  | Bike parking allotted | Bike Parking |  |  |  |  |  |
| R55 |  |  |  | Car parking allotted | Car Parking |  |  |  |  |  |
| R56 |  |  |  | Available Floor number | Floor Number |  |  |  |  |  |
| R57 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| R58 |  |  |  | Amenities available | Amenities |  |  |  |  |  |

##### Uploading Flex Property (Keydemand) - Phase 2 (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary details | Primary Details |  |  |  |  |  |
| R5 | Yes | 1 | 9 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| R7 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| R8 | No | 4 | 1 | Asset Class* | Managed office |  |  |  | Radio button | Single select |
| R9 | Yes | 5 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| R10 | No | 6 | 5 | City* | Drop Down + Search |  |  | New | Search with auto fill | Single city selection |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R12 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| R13 | Yes | 9 | 8 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |
| R14 |  |  |  | Flex Space Formats |  |  |  |  |  |  |
| R15 | Yes | 10 | 10 | Rate per seat for Flexi Desk* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| R16 | Yes | 11 | 11 | Rate per seat for Dedicated Desk* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| R17 | Yes | 12 | 12 | Rate per seat for Meeting Room* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| R18 | Yes | 13 | 13 | Rate per seat for Cabins* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| R19 | Yes | 14 | 14 | Rate per seat for Managed Office* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| R20 |  |  |  | Additional Details |  |  |  |  |  |  |
| R21 | Yes | 15 | 15 | Business Hours | Fixed timings | Fixed timings, 24 hours |  |  | Radio button | Single select |
| R22 | Yes | 16 | 16 | Bike Parking | Payable | Payable, Included, Unavailable | Payable, Included, Unavailable |  | Drop Down | Single select |
| R23 | Yes | 17 | 17 | Car parking | Payable | Payable, Included, Unavailable |  |  | Drop Down | Single select |
| R24 | Yes | 18 | 18 | Floor Number | Number |  | New |  | Drop Down | Single select |
| R25 | Yes | 19 | 19 | Age of property | Less than 5 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years |  |  | Drop Down | Single select |
| R26 | Yes | 20 | 20 | Nearest Connectivity | Railway Station | Railway Station, Bus Station, Metro Station |  |  | Drop Down | Single select |
| R27 | Yes | 21 | 21 | Amenities* | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi |  |  | Tick box | Multi Select |
| R28 | Yes | 22 | 22 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| R29 |  |  |  | Documents |  |  |  |  |  |  |
| R30 | Yes | 23 | 23 | Brochure | Media |  |  |  | Media (PDF) | Less than 2MB |
| R31 | Yes | 24 | 24 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |


_Sub-table in the same block:_


| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R38 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| R39 |  |  | 1 | Rate per seat for Flexi Desk | Number |  |  |  |  |  |
| R40 |  |  | 2 | Rate per seat for Dedicated Desk | Number |  |  |  |  |  |
| R41 |  |  | 3 | Rate per seat for Meeting Room | Number |  |  |  |  |  |
| R42 |  |  | 4 | Rate per seat for Cabins | Number |  |  |  |  |  |
| R43 |  |  | 5 | Rate per seat for Managed Office | Number |  |  |  |  |  |
| R44 |  |  | 6 | pin code | text |  |  |  |  |  |
| R45 |  |  | 7 | Floor Number | text |  |  |  |  |  |
| R50 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| R51 |  |  |  | Property Images/Videos | Images & Videos* |  |  |  |  |  |
| R52 |  |  |  | Project Name / Building Name | Project Name |  |  |  |  |  |
| R53 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| R54 |  |  |  | Locality* | Location* |  |  |  |  |  |
| R55 |  |  |  | Property Available From* | Property Available From* |  |  |  |  |  |
| R56 |  |  |  | Rate per seat (Specific to format) | Price per seat |  |  |  |  |  |
| R57 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

##### Uploading Managed Office Property (Keydemand) As project now - frontend (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) | (unlabeled col 11) | (unlabeled col 12) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R4 |  |  |  | Primary Details |  |  |  |  |  |  |  |  |
| R5 | Yes | 1 | 9 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |  |  |
| R6 | Yes | 2 | 4 | Managed Centres* | Text |  |  |  | Text box | Alpha numeric |  |  |
| R7 | Yes | 3 | 3 | Who can see your property* | Enterprise Buyer | Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |  |  |
| R8 | Yes | 4 | 7 | About Centre* | Text |  |  |  | Text box | Alpha numeric |  |  |
| R9 | No | 5 | 2 | Transaction Type* | Lease | Lease |  | New | Radio button | Single select |  |  |
| R10 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |  |  |
| R11 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |  |  |
| R12 | No | 8 | 1 | Asset Class* | Managed Offices | Managed Offices, Managed Space | Drop Down | New | Radio button | Single select |  |  |
| R13 | Yes | 9 | 8 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |  |  |
| R14 |  |  |  | Managed Office Format |  |  |  |  |  |  |  |  |
| R15 | Yes | 10 | 10 | Number of seats* | Number |  |  | New | Number with prefix | 100 seats |  |  |
| R16 | Yes | 11 | 11 | Team size* | Number |  |  | New | Number with prefix | 50 members |  |  |
| R17 | Yes | 12 | 12 | Lock-in period* | Number |  |  |  | Text box with prefix | Only Numbers Eg. 11 years |  |  |
| R18 | Yes | 13 | 13 | Price per seat* | Number |  |  | New | Number with prefix | ₹1,850 per seat |  |  |
| R19 |  |  |  | Additional Details |  |  |  |  |  |  |  | Primary |
| R20 | Yes | 14 | 14 | Workspace Solution | Ready to Move | Ready to Move, Curated Built to Suit | Drop Down | New | Drop Down | Multi Select |  |  |
| R21 | Yes | 15 | 15 | Business Days and Hours | Start time - End time and tick box for days | Start time - End time <br> Day tick box (5 days a week) (6 days a week) | Drop Down |  | Start time - End time | (9:00 am - 19:00 pm) |  |  |
| R22 | Yes | 16 | 16 | Amenities | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi |  |  | Tick box | Multi Select |  |  |
| R23 | Yes | 17 | 17 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |  |  |
| R24 |  |  |  | Documents |  |  |  |  |  |  |  |  |
| R25 | Yes | 18 | 18 | Brochure | Media |  |  |  | Media (PDF) | Less than 2MB |  |  |
| R26 | Yes | 19 | 19 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |  |  |

#### Group: Managed Space Operator

##### Uploading Managed Office Space Project (Managed Space Operator) - backend (reviewer date: 17-06-2026)

| Row | Can be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | UI Control (Himanshu 17-06-2026) | UI Validation (Himanshu 17-06-2026) |
|---|---|---|---|---|---|---|---|---|---|---|
| R4 | Can be edit through Admin panel only |  |  | Primary Details |  |  |  |  |  |  |
| R5 |  | 1 | 15 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior |  | Media (Image + Video) | Multiple Images can be added <br> Image - JPEG, JPG, PNG, <br> Video - MP4, MOV<br> Size: Image - less than 2MB each, Video: Less than 5MB each |
| R6 |  | 2 | 5 | Managed Centres* | Text |  |  |  | Text box | Alpha numeric |
| R7 |  | 3 | 6 | About Centre* | Text |  |  |  | Text box | Alpha numeric |
| R8 |  | 4 | 2 | Transaction Type* | Lease | Pre-selected |  | New | Radio button | Single select |
| R9 |  | 5 | 3 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R10 |  | 6 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| R11 |  | 7 | 1 | Asset Class* | Pre-selected with Managed Office Space | Managed Office Space | Drop Down | New | Radio button | Single select |
| R12 |  | 8 | 7 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |
| R13 |  | 9 | 8 | Workspace Solution | Ready to Move | Ready to Move, Curated Built to Suit | Drop Down | New | Drop Down | Multi Select |
| R14 |  |  |  | Managed Office Format |  |  |  |  |  |  |
| R15 |  | 10 | 9 | Total Number of seats* | Number |  |  | New | Number with prefix | 100 seats |
| R16 |  | 11 | 10 | Meeting Rooms | Radio Button | Yes/No |  | New | Radio button | 50 members |
| R17 |  | 12 | 11 | Minimum Lock-in period* | Number |  |  |  | Text box with prefix | Only Numbers Eg. 11 years |
| R18 |  | 13 | 12 | Price per seat* | <Number> per seat/month |  | Per seat/month | New | Number with prefix | ₹1,850 per seat/month |
| R19 |  |  |  | Additional Details |  |  |  |  |  |  |
| R20 |  | 14 | 13 | Business Days and Hours | Start time - End time and tick box for days | Start time - End time <br> Day tick box (5 days a week) (6 days a week) | Drop Down |  | Start time - End time | (9:00 am - 19:00 pm) |
| R21 |  | 15 | 14 | Existing Tenants | Text box |  | Drop Down |  | Drop Down | Eg.10 |
| R22 |  | 16 | 16 | Amenities | 24/7 security, Cafeteria, Conference rooms, Event spaces, Game lounge, IT Services, Mail and pacakage handling, Concierge, Outdoor space, Pantry, Car Parking, Bike Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Projector, Quiet space, Server rooms, Wellness room, Prayer room, WiFi | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Event spaces, Game lounge, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Wellness room, Whiteboard, WiFi | Drop Down |  | Tick box | Eg.10 |
| R23 |  | 17 | 17 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Single select |
| R24 |  |  |  | Documents |  |  |  |  |  | Multi Select |
| R25 |  | 18 | 18 | Brochure | Media |  |  |  | Media (PDF) | Map with location search and leaflet |
| R26 |  |  |  | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo |  |
| R27 |  | 19 | 19 | Assign Keydemand POC | Select from KD team user | Multiple users can be selected |  |  |  | Less than 2MB |
| R28 |  |  |  |  |  |  |  |  |  | On clicking will be routed to Youtube or Vimeo |
| R33 |  |  |  | These are entirely new - so no new /renaming is done |  |  |  |  |  |  |

#### Group: Developer Projects Lease/Sale- backend

##### Developer Projects Lease/Sale- backend

| Row | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | Can be edited-Yes/No |
|---|---|---|---|---|---|---|---|
| R3 |  |  | Primary Details |  |  |  |  |
| R4 | 1 | 21 | Images & Videos* | Media |  |  | Entire projects can be edit through Admin only |
| R5 | 2 | 6 | Project Name* | Text |  | Same as V1- Front Side, Interior, Exterior |  |
| R6 | 3 | 5 | Developer Name* | Text |  |  |  |
| R7 | 4 | 3 | City* | Drop Down + Search |  |  |  |
| R8 | 5 | 4 | Location* | Drop Down + Search |  |  |  |
| R9 | 6 | 7 | Project Type* | Drop Down | IT Parks(IT/ITES), Mixed Use, Office Building, Mall, Highstreet |  |  |
| R10 | 7 | 9 | Unit Size Min* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| R11 | 8 | 10 | Unit Size Max* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| R12 | 9 | 8 | Total Project Size in sq.ft* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| R13 | 10 | 1 | Asset Class* | Drop Down | Retail + F&B / Mixed Use / Office | Changing it from F&B to Mixed Use (relevancy for this would be from retail, f&b & offices) For retail + fnb it will showcase relevancy for both |  |
| R14 | 11 | 12 | Efficiency* | Number with % | The area which is given you to use for example if your property size is 1000sft super built up and your carpet area is 500 sft then the efficiency is 50% |  |  |
| R15 | 12 | 13 | Project Status* | Drop Down | Ready to Move, Under Construction |  |  |
| R16 | 13 | 14 | Posession Date* | MM/YY |  |  |  |
| R17 | 14 | 11 | About Project* | Text |  |  |  |
| R18 | 15 | 16 | Total No of Parkings Available | Number |  |  |  |
| R19 | 16 | 2 | Transaction Type* | Lease | Lease, Sale |  |  |
| R20 | 17 | 17 | Number of Buildings/Towers | Number |  |  |  |
| R21 | 18 | 18 | Rera Id | Text |  |  |  |
| R22 | 19 | 19 | Quoted Price / Quoted Rent | Number | ₹1,00,000 /sft or ₹150 /sft | For lease (Quoted Rent) For Sale (Quoted Price) if not given Request for price |  |
| R23 | 20 | 15 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  |
| R25 | 21 | 20 | Feature & Amenities* | Drop Down | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Event spaces, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, WiFi |  |  |
| R26 | 22 | 22 | Brochure | Media |  |  |  |
| R27 | 23 | 23 | Google Location* | Drop Down + Search |  |  |  |
| R28 | 24 | 24 | Age of Project | Less than 5 years | Less than 5 years, 5 - 10 years, Above 10 years |  |  |
| R29 | 25 | 25 | Floorplans available | Media | Media | PDF, JPEG,PNG less than 5mb (Multi-upload) |  |
| R30 |  |  | User Tagging |  |  |  |  |
| R31 | 26 | 26 | Assign Keydemand POC | Drop Down | Kavan Nanaiah, Deepali, Shamli, Sohel, Nilesh, Ajay, Akhil, Raja, Yash, Prakash, Shanker, Ramesh, Dhanbal, Chetna Bhanushali, Sabeer Basha, Navaneeth, Jeevan, Rohith, Prasad Babu, Arun | This field only should visible at the Admin end while uploading project, and not at the user end |  |


_Sub-table in the same block:_


| Row | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | Can be edited-Yes/No |
|---|---|---|---|---|---|---|---|
| R47 |  |  | Deleted Fields from V1 | Input Field |  |  |  |
| R48 |  |  | Pincode | Text |  |  |  |
| R50 |  |  | On Website- V1 | New Field Name-V2 |  |  |  |
| R51 |  |  | Assign Physical Team POC | Assign Keydemand POC |  |  |  |
| R52 |  |  | About Project | Project Description |  |  |  |
| R53 |  |  | CAM Charges | CAM / Maintenance Charges (if applicable) |  |  |  |
| R60 |  |  |  |  |  |  | Insurance, Agriculture, Automobile, Aviation, Banking, Chemical, Consumer Durables, Defence, E-Commerce, Electronics, Energy, Engineering, Financial Services, FMCG, Healthcare, Infrastructure, IT and BPM, Manufacturing, Media and Entertainment, Oil and Gas, Other, Pharmaceuticals, Real Estate, Science and Technology, Services, Startup, Telecommunications, Textile, Tourism and Hospitality |


### Business rules extracted
_Property forms (Agent, Keydemand), Managed Office/Flex, Managed Space Operator project, Developer projects._
- **BR-FLD-036** — Images & Videos* is mandatory on every property/project form: "Media (Image + Video)", "Multiple Images can be added", Image formats JPEG, JPG, PNG; Video formats MP4, MOV; "Image - less than 2MB each, Video: Less than 5MB each". _(§ every block R5)_
- **BR-FLD-037** — Image categories are "Same as V1- Front Side, Interior, Exterior". _(§ Images & Videos* Additional Info)_
- **BR-FLD-038** — A "Hide Images-Toggle - Yes/No" is new in V2 on property forms. Office Property Lease (Agent) and F&B Property Lease (For Keydemand) describe it as "Let user ask for Images". _(§ V2 New Fields on Images row)_
- **BR-FLD-039** — Project Name is optional, Text box, Alpha numeric. _(§ Project Name rows)_
- **BR-FLD-040** — About Property / Project* is mandatory, Text box, Alpha numeric. _(§ About Property rows)_
- **BR-FLD-041** — Asset Class* (Retail / F&B / Office) is mandatory, Radio button single select, not editable after posting, and is a V2 "New" field on the property form. _(§ Asset Class rows)_
- **BR-FLD-042** — City* and Location* are mandatory, Search with auto fill, single selection, not editable after posting. _(§ City/Location rows)_
- **BR-FLD-043** — Transaction Type* is mandatory, Radio button single select, not editable after posting (Lease or Sale). _(§ Transaction Type rows)_
- **BR-FLD-044** — Carpet Area (sq. ft.)* is mandatory, "Number with commas & suffix" (e.g. 2,500 sft; 25,000 sft; 1,00,000 sft). _(§ Carpet Area rows)_
- **BR-FLD-045** — Rate per sq. ft. (Carpet)* is mandatory, "Number with suffix" (e.g. ₹85 per sft), and is auto-calculated when the Rent/Sale amount is given. _(§ Rate rows)_
- **BR-FLD-046** — Quoted Rent* (lease) is mandatory, "Number with suffix" (e.g. ₹85,000 per month), and is auto-calculated when the rate is given. _(§ Quoted Rent rows)_
- **BR-FLD-047** — Quoted Price* (sale) is mandatory and auto-calculated if 'Rate per sq. ft.' is provided; Rate is auto-calculated if the Sale amount/Sale Price is provided. _(§ Retail Property Sale (Agent) R13–R14; Office Property Sale (Agent) R14–R15; Office Property Sale (Keydemand) R15–R16)_
- **BR-FLD-048** — Calculation logic: if Rate per sq. ft. is not provided, Rate = Quoted Rent ÷ Carpet Area; if Quoted Rent is not provided, Quoted Rent = Carpet Area × Rate per sq.ft. _(§ F&B Property Lease (For Keydemand) R14–R15)_
- **BR-FLD-049** — Property Available From* is mandatory, Drop Down single select: Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months (Retail/F&B/Office). _(§ Property Available From rows)_
- **BR-FLD-050** — Property Available From* for Flex and Managed Office properties is a Radio button with options Immediate, 3 Months. _(§ Flex R13; Managed Office R13; MSO R12)_
- **BR-FLD-051** — Store Type* (Retail/F&B property) is mandatory, Radio button, options Highstreet, Mall. _(§ Store Type rows)_
- **BR-FLD-052** — Floor* (Retail/F&B property) is mandatory, Drop Down: Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor. _(§ Floor* rows)_
- **BR-FLD-053** — Office property Floor is optional, Drop Down: 1 to 5, 5 to 10, 10 to 15, Above 15. _(§ Office blocks)_
- **BR-FLD-054** — Clear Ceiling Height (ft.)* is mandatory on Retail/F&B properties ("Only Numbers Eg. 11 ft"). Frontage (ft.)* is mandatory except on F&B Property Sale (For Agent), where "Frontage (ft.)" has no asterisk. _(§ Property Specifications)_
- **BR-FLD-055** — Washroom Available* is mandatory (Yes/No) on Retail Lease/Sale properties and optional on F&B properties. Mezzanine Available (Retail only), Fitouts Available and Parking Available are optional Yes/No radios. _(§ Retail/F&B specs)_
- **BR-FLD-056** — OC Status* is mandatory, single select: Received, Applied, Not Available, Under Construction (a Drop Down for Agent forms; a Radio button on some Keydemand forms). _(§ OC Status rows)_
- **BR-FLD-057** — Retail/F&B property Amenities: optional Tick box Multi Select from AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking. _(§ Amenities rows)_
- **BR-FLD-058** — F&B properties add Cooking Type (Electric, Gas) and Non-Veg Allowed (Yes/No), both new in V2. _(§ F&B blocks)_
- **BR-FLD-059** — Office properties require Built up Area (sq. ft.)*, Washroom Count*, Fitouts status* (Furnished, Unfurnished, Developer/Landlord to do fitout), Bike Parking* and Car Parking* (counts, "Number with prefix Eg.10"). Meeting Room and Cabins counts are optional. _(§ Office blocks)_
- **BR-FLD-060** — Deposit in Months is optional numeric (Lease forms only). _(§ Commercials)_
- **BR-FLD-061** — CAM / Maintenance Charges is optional, new in V2, "Number (Enter Total Amount)", e.g. ₹850 per month. _(§ Commercials)_
- **BR-FLD-062** — Rent Escalation (lease only) is new in V2: Drop Down Every Year / Every 3 Year plus a percentage text box, e.g. "Every Year 5%". _(§ Rent Escalation rows)_
- **BR-FLD-063** — Lease Tenure in Years is optional numeric. "Lock-in period cannot be greater than lease tenure years". _(§ Lease property blocks)_
- **BR-FLD-064** — Google Location is a "Drop Down + Search" with "Map with location search and leaflet". _(§ Location & Connectivity)_
- **BR-FLD-065** — Other Documents (property) is "Media (PDF)", "Less than 2MB" (new in V2). Keydemand forms add "File Name (Upload file should be less than 5MB in PDF format)". _(§ Other Documents rows)_
- **BR-FLD-066** — Add Video URL accepts a YouTube or Vimeo URL; "On clicking will be routed to Youtube or Vimeo". _(§ Add Video URL rows)_
- **BR-FLD-067** — Sale property forms (Retail/F&B/Office Sale) have no Deposit, Rent Escalation, Lease Tenure or Lock-in fields; the only Commercials field is CAM / Maintenance Charges. _(§ Sale blocks)_
- **BR-FLD-068** — Fields deleted from V1 on Retail/F&B property forms: Builtup Area in square feet*, Ownership (Individual or Investor, Developer; lease forms only), Brokerage in days (7/14/21/30 days, Negotiable), Age of property, Floorplans/Autocad/Fire NOC/Other licenses available (Media), Pin Code, Negotiable (Tick). _(§ Deleted Fields sub-tables)_
- **BR-FLD-069** — Fields deleted from V1 on Office property forms: Brokerage in days, Ideal For, Total floors, Age of property, Floorplans/Autocad/Fire NOC/Other licenses available, Pin Code, Negotiable, plus "Available Floor number" (Office Sale Agent). _(§ Office Deleted Fields)_
- **BR-FLD-070** — V1→V2 renames include: Carpet Area in square feet → Carpet Area (sq. ft.)*; Rate per square feet on carpet area → Rate per sq. ft. (Carpet)*; Minimum clear ceiling height in feet → Ceiling Height (ft.)*; Toilet available → Washroom Available; Number of parking spaces → Parking Available; OC available → OC Status*; Floorplans / Autocad / Fire NOC / Other Licenses → Other Documents; Video URL → Add Video URL; Location → Locality*; Bike/Car Parking Allotted → Bike/Car Parking; Meeting rooms → Meeting Room(s). _(§ On Website- V1 sub-tables)_
- **BR-FLD-071** — Keydemand property forms add "Who can see your property*" with options Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent (default shown "Enterprise Buyer"). It is "Not visible at user end", and "This option should be default no, they can change it if wish to". _(§ Keydemand blocks R9/R10)_
- **BR-FLD-072** — Flex Property (Keydemand) is Phase 2. It has Flex Space Formats Rate per seat* for Flexi Desk, Dedicated Desk, Meeting Room, Cabins, Managed Office ("At least one" required; e.g. ₹1,850 per seat), Business Hours (Fixed timings, 24 hours), Bike/Car Parking (Payable, Included, Unavailable), Floor Number, Age of property, Nearest Connectivity (Railway Station, Bus Station, Metro Station), Amenities*, Google Location, Brochure (PDF < 2MB) and Add Video URL. _(§ Flex block)_
- **BR-FLD-073** — Managed Office Property (Keydemand) is now handled "As project now - frontend". Fields: Images & Videos*, Managed Centres*, Who can see your property*, About Centre*, Transaction Type* (Lease), City*, Location*, Asset Class* (Managed Offices, Managed Space), Property Available From*, Number of seats*, Team size*, Lock-in period*, Price per seat*, Workspace Solution (Ready to Move, Curated Built to Suit; Multi Select), Business Days and Hours (Start–End time + day tick box 5 or 6 days a week, e.g. 9:00 am - 19:00 pm), Amenities, Google Location, Brochure, Add Video URL. _(§ Managed Office block)_
- **BR-FLD-074** — Managed Office Space Project (Managed Space Operator) is backend only: "Can be edit through Admin panel only". Transaction Type is pre-selected Lease; Asset Class is pre-selected Managed Office Space. _(§ MSO block R4, R8, R11)_
- **BR-FLD-075** — MSO project fields include Total Number of seats*, Meeting Rooms (Yes/No), Minimum Lock-in period*, Price per seat* (<Number> per seat/month), Business Days and Hours, Existing Tenants, Amenities, Google Location, Brochure, Add Video URL, and Assign Keydemand POC ("Select from KD team user", "Multiple users can be selected"). _(§ MSO block)_
- **BR-FLD-076** — MSO project fields "are entirely new - so no new /renaming is done". _(§ MSO R33)_
- **BR-FLD-077** — Developer Projects (Lease/Sale) are backend only: "Entire projects can be edit through Admin only". _(§ Developer Projects R4)_
- **BR-FLD-078** — Developer project mandatory fields: Images & Videos*, Project Name*, Developer Name*, City*, Location*, Project Type*, Unit Size Min*, Unit Size Max*, Total Project Size in sq.ft*, Asset Class*, Efficiency*, Project Status*, Posession Date* (MM/YY), About Project*, Transaction Type*, OC Status*, Feature & Amenities*, Google Location*. _(§ Developer Projects)_
- **BR-FLD-079** — Project Type options: IT Parks(IT/ITES), Mixed Use, Office Building, Mall, Highstreet. _(§ Developer Projects R9)_
- **BR-FLD-080** — Unit Size Min/Max and Total Project Size are "Number in sft with drop down" for carpet vs built-up area (e.g. "2,50,000 sft on carpet area, 2,50,000 sft on built-up area"). _(§ R10–R12)_
- **BR-FLD-081** — Project Asset Class options are Retail + F&B / Mixed Use / Office. F&B changes to Mixed Use, whose relevancy comes from retail, F&B and offices; "For retail + fnb it will showcase relevancy for both". _(§ R13)_
- **BR-FLD-082** — Efficiency* is a "Number with %": usable (carpet) area as a share of super built-up area (1000 sft super built-up with 500 sft carpet = 50%). _(§ R14)_
- **BR-FLD-083** — Project Status* options are Ready to Move and Under Construction. _(§ R15)_
- **BR-FLD-084** — Quoted Price / Quoted Rent (project) is optional, e.g. ₹1,00,000 /sft or ₹150 /sft. Lease shows Quoted Rent and Sale shows Quoted Price; "if not given Request for price". _(§ R22)_
- **BR-FLD-085** — Project Age of Project options are Less than 5 years, 5 - 10 years, Above 10 years. Floorplans accept PDF, JPEG, PNG under 5 MB (multi-upload). _(§ R28–R29)_
- **BR-FLD-086** — Assign Keydemand POC (project) is a Drop Down of KD team members. "This field only should visible at the Admin end while uploading project, and not at the user end". _(§ R31)_
- **BR-FLD-087** — Developer project V1→V2 renames: Assign Physical Team POC → Assign Keydemand POC; About Project → Project Description; CAM Charges → CAM / Maintenance Charges (if applicable). Pincode is deleted. _(§ R47–R53)_
- **BR-FLD-088** — Industries master list: Insurance, Agriculture, Automobile, Aviation, Banking, Chemical, Consumer Durables, Defence, E-Commerce, Electronics, Energy, Engineering, Financial Services, FMCG, Healthcare, Infrastructure, IT and BPM, Manufacturing, Media and Entertainment, Oil and Gas, Other, Pharmaceuticals, Real Estate, Science and Technology, Services, Startup, Telecommunications, Textile, Tourism and Hospitality. _(§ Developer block R60)_
- **BR-FLD-089** — On property forms, Images & Videos* is View Page Order 1 but Add/Upload Form Order 11–15. Asset Class is Form Order 1 and Transaction Type is Form Order 2. _(§ order columns)_

### Open questions / ambiguities in this doc
- "Who can see your property*" default "Enterprise Buyer" is not in its own option list. The note says the "option should be default no", and the control is Single select on Retail Property Lease (KD) but Multi Select elsewhere.
- Sale forms reuse the example "₹85,000 per month" for Quoted Price, and the Rate note on Sale forms still says "Auto calculated if Rent Amount* is provided".
- Deposit in Months uses the example "Only Numbers Eg. 11 years".
- Other Documents: UI validation says "Less than 2MB", while Keydemand Additional Info says "less than 5MB in PDF format".
- F&B Property Sale (Agent and Keydemand): the Images UI-validation cell shows "0" (formula/empty error) instead of the format/size text.
- Office Property Sale (Agent) and Office Property Sale (Keydemand): CAM / Maintenance Charges has no order numbers.
- Office Property Sale (Keydemand): the "Property Specifications" header row carries "Radio button | Single select" (stray).
- Flex Property: Asset Class value is "Managed office". Floor Number V2 shows "New" but it is also listed under Deleted Fields, as are all five Rate-per-seat fields.
- MSO backend block: from R16 the UI Control/Validation cells are shifted by one or two rows (Meeting Rooms validation "50 members", Existing Tenants/Amenities validation "Eg.10", Brochure validation "Map with location search and leaflet", Assign POC "Less than 2MB"). Add Video URL has no order numbers. The Amenities "Input Fields" (default) column lists a different set (adds Concierge, Car Parking, Bike Parking, Prayer room; omits Cleaning services, Lift, Onsite staff, Professional and Social Events, Whiteboard) from the Drop Down column.
- Developer Projects block: "Same as V1- Front Side, Interior, Exterior" sits on the Project Name row (likely meant for Images). The "Can be edited" column is used for notes. Feature & Amenities is typed "Drop Down" but is a multi-option list.
- Developer Projects: the Industries list (R60) has no field label in this block.
- Location UI validation "Single city selection" appears on many Location* rows.
- Washroom Available is mandatory on Retail property but not on F&B property (the F&B Lease Agent V1→V2 map says "Washroom Available" without *).

---
## Property And Demand, Project Card Details  [AUTHORITATIVE]
**Source:** Google Doc · ID `1gRsyx7gDMAnGbpxdF7twjQKMDNLcfivT0RSidB2XsYE` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-08 · sections read: Property Cards, Demand Cards, Project Cards -Developer, Project Card - Managed Operator · read coverage: 100% (no comments)

### Content
#### Property Cards
| Retail property | F&B | Office | Managed Office Property |
|---|---|---|---|
| Transaction Type | Transaction Type | Transaction Type | Transaction Type |
| Images | Images | Images | Images |
| Property id | Property id | Property id | Property id |
| Carpet Area | Carpet Area | Carpet Area | City |
| City | City | City | Location |
| Location | Location | Location | Number of seats |
| Total Rent | Total Rent | Fit-out | Team size |
| Possession | Possession | Possession | Lock-in period |
| Floor | Floor | Total Rent | Price per seat |
| Store type | Store type | Posted by | Business Hours |
| Posted by | Posted by | Posted on | Property Available |
| Posted on | Posted on |  | Posted by |
|  |  |  | Posted on |
| CTA - View Phone Number | CTA - View Phone Number | CTA - View Phone Number | CTA - Show Interest |

#### Demand Cards
| Retail demand | F&B demand | Office demand | Managed Office Demand |
|---|---|---|---|
| Transaction Type | Transaction Type | Transaction Type | Transaction Type |
| Demand id | Demand id | Demand id | Demand id |
| Carpet Area required | Carpet Area required | Carpet Area required | City |
| City | City | City | Location |
| Location | Location | Location | Number of seats required |
| Possession | Possession | Possession | Team size |
| Posted by | Posted by | Fit-out status | Lock-in period |
| Posted on | Posted on | OC | Posted By |
|  |  | Posted by | Posted On |
|  |  | Posted on |  |
| CTA - Request Contact | CTA - Request Contact | CTA - View Phone Number | CTA - View Phone Number |

#### Project Cards -Developer
| Project Cards -Developer |
|---|
| Asset Class |
| Images |
| Transaction Type |
| Project Name |
| Project id |
| Total Project size in sq.ft |
| Quoted Price |
| Location |
| Possession Date |
| Project Type |
| Posted By |
| CTA -  Show Interest |

#### Project Card - Managed Operator
| Project Card - Managed Operator |
|---|
| Asset Class |
| Transaction Type |
| Images |
| Property id |
| City |
| Location |
| Number of seats |
| Price per seat |
| Property Available From |
| Posted by |
| Posted on |
| CTA - Show Interest |

### Business rules extracted
- **BR-FLD-090** — Retail and F&B property cards show, in order: Transaction Type, Images, Property id, Carpet Area, City, Location, Total Rent, Possession, Floor, Store type, Posted by, Posted on; CTA "View Phone Number". _(§ Property Cards)_
- **BR-FLD-091** — Office property cards show Transaction Type, Images, Property id, Carpet Area, City, Location, Fit-out, Possession, Total Rent, Posted by, Posted on; CTA "View Phone Number". _(§ Property Cards)_
- **BR-FLD-092** — Managed Office Property cards show Transaction Type, Images, Property id, City, Location, Number of seats, Team size, Lock-in period, Price per seat, Business Hours, Property Available, Posted by, Posted on; CTA "Show Interest". _(§ Property Cards)_
- **BR-FLD-093** — Retail and F&B demand cards show Transaction Type, Demand id, Carpet Area required, City, Location, Possession, Posted by, Posted on; CTA "Request Contact". _(§ Demand Cards)_
- **BR-FLD-094** — Office demand cards show Transaction Type, Demand id, Carpet Area required, City, Location, Possession, Fit-out status, OC, Posted by, Posted on; CTA "View Phone Number". _(§ Demand Cards)_
- **BR-FLD-095** — Managed Office Demand cards show Transaction Type, Demand id, City, Location, Number of seats required, Team size, Lock-in period, Posted By, Posted On; CTA "View Phone Number". _(§ Demand Cards)_
- **BR-FLD-096** — Developer project cards show Asset Class, Images, Transaction Type, Project Name, Project id, Total Project size in sq.ft, Quoted Price, Location, Possession Date, Project Type, Posted By; CTA "Show Interest". _(§ Project Cards -Developer)_
- **BR-FLD-097** — Managed Operator project cards show Asset Class, Transaction Type, Images, Property id, City, Location, Number of seats, Price per seat, Property Available From, Posted by, Posted on; CTA "Show Interest". _(§ Project Card - Managed Operator)_

### Open questions / ambiguities in this doc
- Cards use "Total Rent" while the input form field is "Quoted Rent*". Sale properties have no card variant (no "Quoted Price" on property cards).
- Managed Office Demand card shows "Team size" and "Lock-in period", but the Managed Space demand input form (Demand sheet) has no Team size or Lock-in field.
- The Office demand card shows "Fit-out status" and "OC", but the Office demand form field is "OC required" (a requirement, not a status).
- Project cards show only "Quoted Price" even for lease projects (the input sheet uses Quoted Rent for lease). The case where no price is given ("Request for price") is not shown.
- The Developer project card has no City (only Location) and no Posted on.

---
## Data set for Bulk Upload.xlsx  [AUTHORITATIVE]
**Source:** Excel .xlsx · ID `1KCoNi_zjVIVAo80Vjqvn5TXkqxBlfjRI` · owner pradeepa.pv@futuristglobal.com · modified 2026-08-18 · tabs read: Sheet1 (only worksheet in the workbook, checked against the xlsx package listing) · read coverage: 100% (105 data rows + header)

### Content
Sheet1 has columns Region, State, City, Location. All rows are transcribed verbatim, including spellings. `_(blank)_` = empty Location cell.

| # | Region | State | City | Location |
|---|---|---|---|---|
| 1 | West | Maharashtra | Pune | Baner Main Rd |
| 2 | West | Maharashtra | Pune | Baner Highway Side |
| 3 | West | Maharashtra | Pune | Hinjewadi Phase 1 Near Terminal 1 |
| 4 | West | Maharashtra | Pune | Wakad Highway Near VJ City |
| 5 | West | Maharashtra | Pune | Punawale Near Zudio |
| 6 | West | Maharashtra | Nashik | Gangapur Rd |
| 7 | West | Maharashtra | Nagpur | Wardha Rd |
| 8 | West | Maharashtra | Nagpur | W High Court Rd |
| 9 | West | Maharashtra | Kolhapur | Tarabai Park |
| 10 | West | Maharashtra | Kolhapur | Kalwa Naka |
| 11 | West | Maharashtra | Aurangabad | Nr Prozone Mall |
| 12 | West | Gujarat | Ahmedabad | Vastral |
| 13 | West | Gujarat | Ahmedabad | Chandkheda (Upcoming Lulu) |
| 14 | West | Gujarat | Ahmedabad | Nikol |
| 15 | West | Gujarat | Ahmedabad | Vaishnodevi Circle |
| 16 | West | Gujarat | Gandhinagar | _(blank)_ |
| 17 | West | Gujarat | Jamnagar | RRL Mall |
| 18 | West | Gujarat | Rajkot | 150 Ft Ring Road |
| 19 | West | Gujarat | Vapi | Daman Main Rd |
| 20 | West | Madhya Pradesh | Bhopal | Hoshngabad Rd |
| 21 | South | Goa | Margaao | Margao Bypass |
| 22 | South | Karnataka | Bangalore | Airport Road |
| 23 | South | Karnataka | Bangalore | Marathalli |
| 24 | South | Karnataka | Bangalore | HRBR Layout |
| 25 | South | Karnataka | Bangalore | Mysore Road |
| 26 | South | Karnataka | Bangalore | OMR |
| 27 | South | Karnataka | Bangalore | Electronic City |
| 28 | South | Karnataka | Bangalore | Kanakpura Road |
| 29 | South | Karnataka | Bangalore | Rajaji Nagar |
| 30 | South | Karnataka | Bangalore | RR Nagar |
| 31 | South | Karnataka | Bangalore | Tumkur Road |
| 32 | South | Telengana | Hyderabad | Tirmulgerry |
| 33 | South | Telengana | Hyderabad | Tellapur |
| 34 | South | Telengana | Hyderabad | Kompally |
| 35 | South | Telengana | Hyderabad | Attapur |
| 36 | South | Telengana | Hyderabad | Kokapet |
| 37 | South | Telengana | Hyderabad | AS Rao Nagar |
| 38 | South | Telengana | Hyderabad | Bundlaguda (Suncity) |
| 39 | South | TamilNadu | Chennai | ECR |
| 40 | South | TamilNadu | Chennai | Porur |
| 41 | South | TamilNadu | Chennai | GST Road |
| 42 | South | TamilNadu | Chennai | Ambatur |
| 43 | South | TamilNadu | Salem | Bypass Road |
| 44 | South | TamilNadu | Trichy | Karur Bypass |
| 45 | South | TamilNadu | Erode | Brough Rd/Perandurai Rd |
| 46 | South | TamilNadu | Madurai | Bypass Road |
| 47 | South | Kerala | Trivandrum | MG Road/ Kowdiar |
| 48 | South | Kerala | Calicut | Mavoor Road |
| 49 | North | Uttar Pradesh | Delhi NCR | Sec 18 |
| 50 | North | Uttar Pradesh | Delhi NCR | Grt Noida W |
| 51 | North | Uttar Pradesh | Delhi NCR | Sec 104/ Sec 10 |
| 52 | North | Uttar Pradesh | Delhi NCR | Sec 72 |
| 53 | North | Uttar Pradesh | Lucknow | _(blank)_ |
| 54 | North | Uttar Pradesh | Varanasi | _(blank)_ |
| 55 | North | Uttar Pradesh | Ghaziabad | _(blank)_ |
| 56 | North | Uttarakhand | Dehradun | Rajpura Rd |
| 57 | North | Uttarakhand | Haldwani | _(blank)_ |
| 58 | North | Himachal Pradesh | Shimla | _(blank)_ |
| 59 | North | Haryana | Delhi NCR | Golf Course Rd |
| 60 | North | Haryana | Delhi NCR | MG Rd |
| 61 | North | Haryana | Delhi NCR | Gaur City |
| 62 | North | Haryana | Delhi NCR | Dwarka E Way |
| 63 | North | Haryana | Delhi NCR | Sec 82 |
| 64 | North | Haryana | Sonipat | _(blank)_ |
| 65 | North | Haryana | Panchkula | _(blank)_ |
| 66 | North | Haryana | Faridabad | Sec 20 |
| 67 | North | Delhi/NCR | New Delhi | Ghitorni/Sultanpur |
| 68 | North | Delhi/NCR | New Delhi | Dwarka |
| 69 | North | Delhi/NCR | New Delhi | Southex |
| 70 | North | Delhi/NCR | New Delhi | Lajpat Nagar |
| 71 | North | Delhi/NCR | New Delhi | Pashcim Vihar |
| 72 | North | Delhi/NCR | New Delhi | Rohini |
| 73 | North | Punjab | Mohali/Chandigarh | Airport Road/Chandigarh Sec 17 |
| 74 | North | Punjab | Ludhiana | _(blank)_ |
| 75 | North | Punjab | Jalandhar | _(blank)_ |
| 76 | North | Punjab | Amritsar | _(blank)_ |
| 77 | North | Rajasthan | Jaipur | _(blank)_ |
| 78 | North | Rajasthan | Udaipur | _(blank)_ |
| 79 | North | Rajasthan | Jodhpur | _(blank)_ |
| 80 | East | West Bengal | Kolkata | Jessore Rd |
| 81 | East | West Bengal | Kolkata | Topsia |
| 82 | East | West Bengal | Kolkata | Madhyamgram/Barasat |
| 83 | East | West Bengal | Kolkata | Salt Lake |
| 84 | East | West Bengal | Kolkata | Bhavanipur |
| 85 | East | West Bengal | Kolkata | Serampore |
| 86 | East | West Bengal | Kolkata | Dumdum |
| 87 | East | West Bengal | Kolkata | Braboure Rd |
| 88 | East | West Bengal | Kolkata | Bosepukur Rd |
| 89 | East | West Bengal | Kolkata | Dhakuria |
| 90 | East | West Bengal | Kolkata | Millenium City Park |
| 91 | East | Assam | Siliguri | Sevoke Rd |
| 92 | East | Orrissa | Bhubaneshwar | Cuttak Road |
| 93 | East | Orrissa | Bhubaneshwar | Patiya Rd |
| 94 | East | Orrissa | Bhubaneshwar | Janpath Rd |
| 95 | East | Assam | Guwahati | GS Road |
| 96 | East | Assam | Guwahati | Bhuban Road Uzan Bazaar |
| 97 | East | Assam | Guwahati | Baruah Road Sundarpur |
| 98 | East | Assam | Guwahati | Chairali |
| 99 | East | Chhatishgarh | Raipur | VIP Road |
| 100 | East | CHhatishgarh | Raipur | Telibandha |
| 101 | East | CHhatishgarh | Raipur | Mouva Rd |
| 102 | East | Jharkhand | Ranchi | Hazaribaug Raod |
| 103 | East | Jharkhand | Ranchi | Radium Road |
| 104 | East | Jharkhand | Ranchi | Khandagiri |
| 105 | East | West Bengal | Kolkata | Kankurgachi |

### Business rules extracted
- **BR-FLD-098** — The bulk-upload master location data set is organised as Region → State → City → Location; Region values are West, South, North, East. _(§ Sheet1 header)_
- **BR-FLD-099** — The data set contains 105 Region/State/City/Location rows (West 20, South 28, North 31, East 26); some cities have no specific Location (blank). _(§ Sheet1)_

### Open questions / ambiguities in this doc
- Blank Location for Gandhinagar, Lucknow, Varanasi, Ghaziabad, Haldwani, Shimla, Sonipat, Panchkula, Ludhiana, Jalandhar, Amritsar, Jaipur, Udaipur, Jodhpur. Is a city-only row valid for bulk upload?
- Possible data errors: Siliguri listed under Assam (it is in West Bengal); Khandagiri listed under Ranchi, Jharkhand (it is in Bhubaneswar); "Delhi NCR" city listed under both Uttar Pradesh and Haryana, and "New Delhi" under "Delhi/NCR".
- Spelling variants that would break exact matching: "Telengana", "Orrissa", "Chhatishgarh" vs "CHhatishgarh", "Margaao", "Marathalli", "Ambatur", "Hoshngabad", "Hazaribaug Raod", "Pashcim Vihar", "Braboure Rd", "Cuttak Road".
- The row "Kolkata, Kankurgachi" sits after the Ranchi rows, out of grouping order.
- Bangalore "OMR" (Old Mahabalipuram Road is a Chennai road) may be a mistake.

---
## Control Panel Bulk Upload Fields  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1vE8L1BGFQOthubB4WFlAoFe5faDaUVOBCSZfPwzqq08` · owner pradeepa.pv@futuristglobal.com · modified 2026-10-04 · tabs read: "Control Panel - Bulk Upload Fields" (A1:AA1001; 40 rows populated, 18 template columns A–R) · read coverage: 100%

### Content
Row 1 lists 18 bulk-upload templates. Row 3 = "Mandatory Fields (✱):", Row 4 = mandatory field list per template. Row 6 = "Non-Mandatory Fields:", Row 8 = non-mandatory list per template. For column F (Managed Space demand), the non-mandatory list continues one field per row in rows 10–40.

| Col | Template | Mandatory Fields (✱) | Non-Mandatory Fields |
|---|---|---|---|
| A | Demand · Retail · Lease · Brand | City; Locality; Carpet Area (sq.ft); Possession Needed; Store Type | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Rent per sq.ft From (₹); Rent per sq.ft To (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Negotiable; OC Required; Floor Preference; Min Frontage (ft); Min Ceiling Height (ft); Washroom Required; Parking Required; Mezzanine Required; Fit-outs Required; Fit-out Status; Amenities; Who Can See; Show Brand Name; Additional Details |
| B | Demand · Retail · Buy · Brand | City; Locality; Carpet Area (sq.ft); Possession Needed; Store Type | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Total Budget From (₹); Total Budget To (₹); Negotiable; OC Required; Floor Preference; Min Frontage (ft); Min Ceiling Height (ft); Washroom Required; Parking Required; Mezzanine Required; Fit-outs Required; Fit-out Status; Amenities; Who Can See; Show Brand Name; Additional Details |
| C | Demand · F&B · Lease (brand) | City; Locality; Carpet Area (sq.ft); Possession Needed; Store Type | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Rent per sq.ft From (₹); Rent per sq.ft To (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Negotiable; OC Required; Floor Preference; Min Frontage (ft); Min Ceiling Height (ft); Washroom Required; Parking Required; Mezzanine Required; Fit-outs Required; Fit-out Status; Cooking Type; Non-Veg Served; Power Load Required; Exhaust / Ventilation Required; Water Supply & Drainage Required; Gas Line Required; Fire NOC / Sprinkler Required; AC Provision Required; Grease Trap / STP Required; Amenities; Who Can See; Show Brand Name; Additional Details |
| D | Demand · Office · Lease (tenant) | City; Locality; Carpet Area (sq.ft); Possession Needed | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Rent per sq.ft From (₹); Rent per sq.ft To (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Negotiable; OC Required; Floor Preference; Min Cabins; Min Meeting Rooms; Min Ceiling Height (ft); Washroom Required; Bike Parking Required; Car Parking Required; Fit-out Status; Industries; Age of Property; Amenities; Who Can See; Additional Details |
| E | Demand · Office · Buy · Office Tenant | City; Locality; Carpet Area (sq.ft); Possession Needed | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Total Budget From (₹); Total Budget To (₹); Negotiable; OC Required; Floor Preference; Min Cabins; Min Meeting Rooms; Min Ceiling Height (ft); Washroom Required; Bike Parking Required; Car Parking Required; Fit-out Status; Industries; Amenities; Who Can See; Additional Details |
| F | Demand · Managed Space · Lease · Managed Space Tenant | City; Locality; Number of Seats | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Budget per Seat From (₹); Budget per Seat To (₹); Interested in Flex also; Bike Parking Required; Car Parking Required; Amenities; Who Can See; Additional Details _(rows 8, 10–40)_ |
| G | Demand · Enterprise Format mode | City; Locality | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area (sq.ft) (Filled by the Format); Carpet Area Max (sq.ft); Rent per sq.ft From (₹); Rent per sq.ft To (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Negotiable; Possession Needed (Filled by the Format); OC Required (Filled by the Format); Store Type (Filled by the Format); Floor Preference (Filled by the Format); Min Frontage (ft); Min Ceiling Height (ft); Washroom Required; Parking Required; Mezzanine Required; Fit-outs Required; Fit-out Status; Amenities; Who Can See; Show Brand Name; Additional Details |
| H | Demand · Retail · Lease · Agent | City; Locality; Carpet Area (sq.ft); Possession Needed; Store Type | Poster Phone; External Ref; Google Map Link; Pincode; Other Location 1; Other Location 2; Other Location 3; Carpet Area Max (sq.ft); Rent per sq.ft From (₹); Rent per sq.ft To (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Negotiable; OC Required; Floor Preference; Min Frontage (ft); Min Ceiling Height (ft); Washroom Required; Parking Required; Mezzanine Required; Fit-outs Required; Fit-out Status; Amenities; Who Can See; Additional Details |
| I | Property · Retail · Lease | Description; City; Locality; Carpet Area (sq.ft); Quoted Rent (₹ per month); Rate per sq.ft (₹); Available From; OC Status; Store Type; Floor; Ceiling Height (ft); Frontage (ft); Washroom Available | Poster Phone; External Ref; Project Name; Google Map Link; Pincode; Built-up Area (sq.ft); Security Deposit (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Rent Escalation; Escalation %; CAM Charges (₹); Negotiable; Parking Available; Mezzanine Available; Fit-outs Available; Signage Allowed; Amenities; Who Can See; Hide Images; Images - Interior; Images - Exterior; Images - Front Side; Video Link; Project ID |
| J | Property · Retail · Sale/Buy | Description; City; Locality; Carpet Area (sq.ft); Sale Price (₹); Available From; OC Status; Store Type; Floor; Ceiling Height (ft); Frontage (ft); Washroom Available | _(empty)_ |
| K | Property · F&B · Lease | Description; City; Locality; Carpet Area (sq.ft); Quoted Rent (₹ per month); Rate per sq.ft (₹); Available From; OC Status; Store Type; Floor; Ceiling Height (ft); Frontage (ft) | Poster Phone; External Ref; Project Name; Google Map Link; Pincode; Built-up Area (sq.ft); Security Deposit (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Rent Escalation; Escalation %; CAM Charges (₹); Negotiable; Washroom Available; Parking Available; Mezzanine Available; Fit-outs Available; Signage Allowed; Cooking Type; Non-Veg Allowed; Amenities; Who Can See; Hide Images; Images - Interior; Images - Exterior; Images - Front Side; Video Link; Project ID |
| L | Property · F&B · Buy | Description; City; Locality; Carpet Area (sq.ft); Sale Price (₹); Available From; OC Status; Store Type; Floor; Ceiling Height (ft); Frontage (ft) | Poster Phone; External Ref; Project Name; Google Map Link; Pincode; Built-up Area (sq.ft); CAM Charges (₹); Negotiable; Washroom Available; Parking Available; Mezzanine Available; Fit-outs Available; Signage Allowed; Cooking Type; Non-Veg Allowed; Amenities; Who Can See; Hide Images; Images - Interior; Images - Exterior; Images - Front Side; Video Link; Project ID |
| M | Property · Office · Lease | Description; City; Locality; Carpet Area (sq.ft); Built-up Area (sq.ft); Quoted Rent (₹ per month); Rate per sq.ft (₹); Available From; Floor; Washrooms; Fit-out Status; Bike Parking (count); Car Parking (count) | Poster Phone; External Ref; Project Name; Google Map Link; Pincode; Security Deposit (₹); Lease Tenure (years); Lock-in Period (years); Rent Free Period (months); Rent Escalation; Escalation %; CAM Charges (₹); Negotiable; OC Status; Total Floors; Cabins; Meeting Rooms; Industries; Amenities; Who Can See; Hide Images; Images - Interior; Images - Exterior; Images - Front Side; Video Link; Project ID |
| N | Property · Office · Buy | Description; City; Locality; Carpet Area (sq.ft); Built-up Area (sq.ft); Available From; Floor; Washrooms; Fit-out Status; Bike Parking (count); Car Parking (count) | Poster Phone; External Ref; Project Name; Google Map Link; Pincode; Sale Price (₹); Negotiable; OC Status; Total Floors; Cabins; Meeting Rooms; Industries; Amenities; Who Can See; Hide Images; Images - Interior; Images - Exterior; Images - Front Side; Video Link; Project ID |
| O | Project · Lease · Developer · Office | Project Name; Property Type; Project Type; Project Status; City; Locality; Description; Project Size (sq.ft); Unit Size From (sq.ft); Unit Size To (sq.ft); Efficiency (%); Possession (MM/YYYY); OC Status; Amenities | Developer Phone; External Ref; RERA ID; Google Map Link; Pincode; Address; State; Developer Name; Quoted Rate (₹ per sq.ft); Total Built-up Area (sq.ft); Total Carpet Area (sq.ft); Buildings; Units Available; Parkings Available; Industries; Nearest Connectivity; Age of Property; Keydemand POC (email or phone); Tag Property IDs; Images - Exterior; Images - Interior; Images - Front Side; Brochure Link; Video Link |
| P | Project · Buy -Retail / Mixed use | Project Name; Property Type; Project Type; Project Status; City; Locality; Description; Project Size (sq.ft); Unit Size From (sq.ft); Unit Size To (sq.ft); Efficiency (%); Possession (MM/YYYY); OC Status; Amenities | _(same list as column O)_ Developer Phone; External Ref; RERA ID; Google Map Link; Pincode; Address; State; Developer Name; Quoted Rate (₹ per sq.ft); Total Built-up Area (sq.ft); Total Carpet Area (sq.ft); Buildings; Units Available; Parkings Available; Industries; Nearest Connectivity; Age of Property; Keydemand POC (email or phone); Tag Property IDs; Images - Exterior; Images - Interior; Images - Front Side; Brochure Link; Video Link |
| Q | Centre · Managed office - Lease | Centre Name; City; Locality; Number of Seats; Price per Seat (₹) | Operator Phone; External Ref; Google Map Link; Pincode; Address; Description; Lock-in Period (months); Space Condition; Business Days & Hours; Parking; Team Size; Floor Number; Nearest Connectivity; Available From (DD/MM/YYYY); Amenities; Keydemand POC (email or phone); Images - Exterior; Images - Interior; Images - Front Side |
| R | Centre · Flex (multiple formats) | Centre Name; City; Locality; "(Note: You must provide Seats and Price for at least one format offered)" | Operator Phone; External Ref; Google Map Link; Pincode; Address; Description; Hot Desk Seats; Hot Desk Price per Seat (₹); Dedicated Desk Seats; Dedicated Desk Price per Seat (₹); Private Cabin Seats; Private Cabin Price per Seat (₹); Custom Build Seats; Custom Build Price per Seat (₹); Day Pass Price (₹); Meeting Room Price per Hour (₹); Lock-in Period (months); Space Condition; Business Days & Hours; Parking; Floor Number; Nearest Connectivity; Available From (DD/MM/YYYY); Amenities; Keydemand POC (email or phone); Images - Exterior; Images - Interior; Images - Front Side |

### Business rules extracted
- **BR-FLD-100** — The Control Panel bulk upload supports 18 templates: 8 Demand (Retail Lease Brand, Retail Buy Brand, F&B Lease brand, Office Lease tenant, Office Buy Office Tenant, Managed Space Lease tenant, Enterprise Format mode, Retail Lease Agent), 6 Property (Retail Lease, Retail Sale/Buy, F&B Lease, F&B Buy, Office Lease, Office Buy), 2 Project (Lease Developer Office; Buy Retail/Mixed use) and 2 Centre (Managed office Lease; Flex multiple formats). _(§ Row 1)_
- **BR-FLD-101** — Retail/F&B demand bulk rows require City, Locality, Carpet Area (sq.ft), Possession Needed and Store Type. Office demand rows require City, Locality, Carpet Area (sq.ft) and Possession Needed. _(§ Row 4 A–E, H)_
- **BR-FLD-102** — Managed Space demand bulk rows require City, Locality and Number of Seats. _(§ F4)_
- **BR-FLD-103** — Enterprise Format mode demand rows require only City and Locality. Carpet Area, Possession Needed, OC Required, Store Type and Floor Preference are "Filled by the Format". _(§ G4, G8)_
- **BR-FLD-104** — Demand bulk templates allow up to 3 other locations (Other Location 1–3) and min/max ranges (Carpet Area Max; Rent per sq.ft From/To or Total Budget From/To; Budget per Seat From/To for Managed Space). _(§ Row 8)_
- **BR-FLD-105** — Brand demand templates (Retail Lease/Buy, F&B Lease, Enterprise Format) carry a "Show Brand Name" option. The Agent and Office templates do not. _(§ Row 8)_
- **BR-FLD-106** — F&B lease demand bulk adds F&B infrastructure flags: Cooking Type, Non-Veg Served, Power Load Required, Exhaust / Ventilation Required, Water Supply & Drainage Required, Gas Line Required, Fire NOC / Sprinkler Required, AC Provision Required, Grease Trap / STP Required. _(§ C8)_
- **BR-FLD-107** — Managed Space demand bulk includes an "Interested in Flex also" flag. _(§ F28)_
- **BR-FLD-108** — Property bulk rows require Description, City, Locality and Carpet Area plus price: Lease rows need Quoted Rent (₹ per month) and Rate per sq.ft (₹); Retail/F&B Sale rows need Sale Price (₹). Rows also need Available From and, for Retail/F&B, OC Status, Store Type, Floor, Ceiling Height and Frontage. Retail adds Washroom Available. _(§ I4–L4)_
- **BR-FLD-109** — Office property bulk rows require Description, City, Locality, Carpet Area, Built-up Area, Available From, Floor, Washrooms, Fit-out Status, Bike Parking (count) and Car Parking (count). Lease also requires Quoted Rent and Rate per sq.ft. _(§ M4–N4)_
- **BR-FLD-110** — Property bulk images are given per category: Images - Interior, Images - Exterior, Images - Front Side, plus Hide Images, Video Link and Project ID (to link a property to a project). _(§ I8, K8–N8)_
- **BR-FLD-111** — Project bulk rows require Project Name, Property Type, Project Type, Project Status, City, Locality, Description, Project Size (sq.ft), Unit Size From/To (sq.ft), Efficiency (%), Possession (MM/YYYY), OC Status and Amenities. _(§ O4–P4)_
- **BR-FLD-112** — Project bulk rows can carry Keydemand POC (email or phone) and Tag Property IDs. _(§ O8–P8)_
- **BR-FLD-113** — Managed office centre rows require Centre Name, City, Locality, Number of Seats and Price per Seat (₹). _(§ Q4)_
- **BR-FLD-114** — Flex centre rows require Centre Name, City and Locality, and "You must provide Seats and Price for at least one format offered" (Hot Desk, Dedicated Desk, Private Cabin, Custom Build). _(§ R4, R8)_
- **BR-FLD-115** — Dates in centre bulk use DD/MM/YYYY (Available From); project possession uses MM/YYYY; Lock-in for centres is in months. Lock-in for demand/property is in years. _(§ Row 8)_

### Open questions / ambiguities in this doc
- Column J (Property · Retail · Sale/Buy) has no non-mandatory list (empty cell).
- Office Buy property (N) has Sale Price only as non-mandatory, but the input sheet makes Quoted Price* mandatory. OC Status is non-mandatory for Office properties here but mandatory (OC Status*) in the input sheet.
- The Flex centre template exists in the Control Panel, but the input sheet and the Listing Management doc say Flex is Phase 2.
- Flex formats differ: Control Panel uses Hot Desk / Dedicated Desk / Private Cabin / Custom Build + Day Pass + Meeting Room per hour. The input sheet uses Flexi Desk / Dedicated Desk / Meeting Room / Cabins / Managed Office.
- "Property Type" (mandatory for projects) is not defined in the input sheet.
- Fields in the bulk templates but absent from the input forms: Rent Free Period, Signage Allowed, Security Deposit (₹), Total Floors, Industries (Office property/demand), Min Cabins/Meeting Rooms, Space Condition, Address/State, External Ref, Poster Phone.
- Templates for F&B Buy demand, Office demand by Agent, Keydemand-posted demands and Office Lease/Buy by Agent are not listed separately.

---
## Profile Management, Property, Demand and Project Listing Management as per User Persona  [AUTHORITATIVE]
**Source:** Google Doc · ID `1TB9a3t7dnWahn2csV1BoAeDguX8vpF8NbU2iX5RVh6Y` · owner pradeepa.pv@futuristglobal.com · modified 2026-06-01 · sections read: 1 Profile Management (1.1–1.3, Role of Keydemand Admin Team), 2 Property Management (2.1–2.3, General Business Rules 1–27), 3 Demand Management (3.1–3.3, General Business Rules 1–20 + 1–7), 4 Project Management (4.1, Keydemand Admin, 4.3 Developer, Business Rules 1–9), 2 resolved comment threads · read coverage: 100%

### Content
#### **1. Profile Management (Add/Edit Info)**
Notification Categorization: WhatsApp and SMS notifications are split into two categories: "Transactional" and "Promotional".

Consent & Toggles: Transactional messages (e.g., lead alerts, inventory activities, subscriptions) are mandatory for business continuity. Users will be provided a settings header with toggles allowing them to opt out of Promotional messages (e.g., new platform opportunities)

Enterprise users and the Key Demand team are restricted from editing, deleting, or deactivating accounts via the front end, requiring all such actions to be managed at the back end.

Deactivating a profile will deactivate associated inventory, while deleting a profile will result in the permanent deletion of associated inventory.

Only the following users can do this.
- **Office Tenant / Managed Space Occupier (Individual + Enterprise)**
- **Individual User Agent**
- **Retail & F&B (Individual)**
- **F&B and Retail - (Enterprise Brands)**

**1.1 Office Tenant / Managed Space Occupier (Individual + Enterprise) and Retail & F&B (Individual)**
1. User logs into the platform via Mobile Number + OTP.
2. Navigates to the Dashboard and clicks "My Profile".
3. Modifies allowable data fields.
4. Saves changes to update the database.
5. **Edge Cases & Business Rule Enforcement:**
   - **Fields Editable:** Upload profile/brand picture (max 5MB JPG/PNG), Name, Email, Transaction Type, City, Company Name, About yourself, and WhatsApp notifications (On/Off toggle).
   - **Locked Fields:** Mobile number and Asset Class are strictly locked and cannot be edited post-registration.

**1.2 F&B and Retail Brands (Enterprise)**
1. Logs into the platform via Mobile Number + OTP.
2. Navigates to the Dashboard to view profile details.
3. Must contact the assigned Keydemand Relationship Manager (RM) for major corporate profile modifications.
4. **Edge Cases & Business Rule Enforcement:**
   - **Fields Editable:** Only the "WhatsApp notifications" toggle is editable.
   - **Locked Fields:** Upload brand picture, Account Handler Details, Brand Name, About brand, User Name, User mobile number, Asset Class, Transaction Type, City, and Carpet Area are strictly locked. Enterprise profiles are centrally managed to maintain data integrity.

**1.3 Agent (Non-Registered / Registered / Subscribed / Expired)**
1. Logs into the platform via Mobile Number + OTP.
2. Navigates to "My Profile".
3. Modifies professional data fields.
4. **Edge Cases & Business Rule Enforcement:**
   - **Non-Registered:** Cannot access or create a profile.
   - **Registered / Subscribed:** Can edit Profile Picture (max 5MB), Name, Email, Transaction Type, City, Company Name, Designation, Experience, About yourself, and WhatsApp notifications. Mobile number and Asset Class remain locked.
   - **Expired:** Account functions are paused. They have "no active actions," and their profile and associated listings will be completely deactivated after 3 months of non-renewal.

**Role of Keydemand Admin Team**
- The Keydemand admin team does not manually approve every individual profile change. However, Developer and Managed Space Operator profiles bypass the front-end profile creation entirely; they submit a soft registration and are manually onboarded and created by the Keydemand Admin team within 24 hours.
- (Keydemand has created a form where they fill the enquiry form and the Keydemand admin team gets the enquiry, where they onboard Developer and Manage space operator.

#### **2. Property Management**
**Personas Who Can List Properties:** Subscribed Agents, Registered Agents (limited), and the Keydemand Team and Managed Space Operators.
Brands, Tenants, and Developers do NOT list individual properties on the front-end.

**2.1 Agent (Registered vs. Subscribed)**
1. Clicks "Post a Property" on the Dashboard.
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

**2.2: Keydemand Team (Transaction Team)**
1. Similar as agent flow. From Steps 1 to 6 as listed above. Can access inventory of other KD team members under 'My Listings'

Role of Keydemand Admin
1. He will get data as enquiry, add a property to anybody's account(Keydemand agent or agent) Fills in data on behalf of Managed Space Operators or high-value Enterprise sellers.
1. Can apply visibility toggles (e.g., Enterprise Buyer, Keydemand, Agent) to hide exclusive listings from the general marketplace.
2. **Verification Flow:** V2 does not enforce a manual "draft-to-publish" step-by-step verification queue for agents; agents self-publish. However, the Keydemand admin has global access to "My Listings" to audit, edit, deactivate, or delete any listing that violates marketplace quality.

**2.3: Managed Space Operator**
1. A Managed Space operator cannot add a property but only from the backend through Keydemand admin team. They fill the online form as an operator and the Keydemand admin will onboard them. The Keydemand admin see what their property are, etc and then Keydemand admin will create their profile and upload it to Keydemand
2. It's the Keydemand Admin team who does the onboarding of any new users. Keydemand team is a transaction team that procures property or looks after any demands, etc.

**General Business Rules**
1. Only the Keydemand team and Agent are allowed to list a property. The property must align with the asset classes and cities the agent selected during registration.
2. A Managed Space operator cannot add a property, but only from the backend through Keydemand admin team.
3. Business logic - Developers no longer post properties on the platform. It's only the project that will be posted from the keydemand admin team on the backend.
4. The "Rate per sq. ft." and the total "Rent Amount" are auto-calculated, meaning if you enter the area and the price, the system will fill in the totals automatically. Added logic in the Product Excel sheet under D68-69-70 row
5. A non-enterprise or non-subscribed user (such as an office user) who has viewed three or four contact numbers will be prompted to connect for an enterprise solution or a subscription. (This is not to block them but to encourage them to become an enterprise member.)
6. Non- registered users cannot view property images. (All images will be hidden from properties) Until they register. Post registration images of properties will be shown but if there are any properties where images are hidden from the users and request for property images is mentioned have to request images to be viewed)
7. On any form reset or page refresh, the default property type must be set to Office (replacing the V1 Retail default).
8. An agent can upload only office/retail and F&B property. - (They cannot add a managed space property). An agent's ability to post properties is strictly dictated by the asset classes (e.g., retail, office) they select during registration and their active subscription tier.
9. For property uploads, if an agent selected only a single asset class during registration, they can only post properties of that type. If they selected multiple asset classes, they must specify the asset class when posting.
10. "Yes" fields can not be edited after getting the response.
11. Only for property - For uploading "other documents" besides images and videos, the platform will adopt a functionality similar to LinkedIn, allowing users to upload and name their files.
12. Property ID and Project ID are permanent, non-editable tags that must remain visible on the edit screen for reference.
13. One image must be mandatory in each field, except for video uploads. This means that when they upload an image, we are allowing them to hide the image from other users, where the other party can request images, where the supplier will have an option to accept/reject the request for image permission.
14. A design decision was made to entirely remove the 'inbox' feature for the new website, which was discussed on. Moving forward, all property responses will be showcased directly within the dashboard or the property's self-view area, presenting responses as a clear list on the page rather than navigating to a separate inbox.
15. Agents, Managed Space Operators, and the Keydemand Team all have the authority to delete or deactivate their own listings.
16. Property ID and Project ID should be added as a **non-editable visible tag** on the demand detail page or property card. (Same as point no 14)
17. The standardised naming convention for property images should be **"interior" "exterior" and "Front Side"**, just like in V1. Each property image should be under 5 mb. Format: Jpg, png. If the "Do not show images" option was ticked during upload, the property view must hide all images from potential leads.
    1. Each property video should be under 20 mb. Format : mp4
    2. Image resolution should be at least 300 pixels per inch (ppi)
    3. Note: First image of front side categories will be displayed as main image (In the design, we need to mention while uploading that this will be your 1st image to showcase)
18. If a registered agent requests contact details, they must log in/register. A request is sent to the Occupier, who has 72 hours to accept or reject the connection. If they do not respond, the request is automatically nullified with a rejection message.
19. A **paywall** will be implemented to prompt subscription if a registered agent requests contact details more than twice or thrice, serving to monetise persistent activity.
20. Deactivation must immediately remove the property from the public marketplace and "potential buyer" matching algorithms, but keep the data accessible in the user's dashboard for reactivation.
21. "Yes" fields can not be edited after getting the response
22. Uploading Flex Property (Keydemand) - Create and keep the table, but do not give access to the audience.
23. Keydemand team members can access the inventory of other Keydemand members under their "My Listings" tab, which must be filterable by username.
24. Flex Property (Keydemand) - This is to be done in Phase 2
25. Office requirement if it is more than 5000 will come to Keydemand and not on the platform
26. For property uploads, if an agent selected only a single asset class during registration, they can only post properties of that type. If they selected multiple asset classes, they must specify the asset class when posting.
27. There is no map in demand but only in property. The property map is nothing but a map of the location of property, also it will have a leaflet and also (view street view) (Map view) Property location marker, nearby bank, nearby bustop, nearby restaurant, shopping destinations etc based on the asset class), only street view will open a pop-up of street view on the same page rest user can view everthing on the map

#### **3. Demand Management**
**Personas Who Can List Demands**: Retail & F&B Brands, Office Tenants, Agents on behalf of their client and the Keydemand Team
For both Brand and Office Enterprise, the requirements are collected offline by the Keydemand (KD) team or Keydemand admin team. The Keydemand admin team then creates the account on the platform and uploads the requirements.
Developers and Managed Space Operators do NOT add demands on the front-end.

**3.1: Brand (Individual/Enterprise) & Office Tenant (Individual/Enterprise)**
1. Clicks "Add a Demand" on the dashboard.
2. Inputs all mandatory and non-mandatory fields as per demand, like for example Asset Class, Transaction Type, City, and Location.
3. Users can input 1 fixed Location plus up to 4 "Other interested locations".
4. Clicks Submit. The demand is assigned a unique Demand ID.
5. **Edge Cases & Business Rule Enforcement:**
   - **Brand Limits:** Retail & F&B Brands get exactly **3 free requirements**. The 4th triggers an enterprise paywall.
   - **Tenant Limits:** Managed Space Occupiers / Office Tenants are limited to exactly **1 free demand**.
   - **High-Value Routing Rule:** If the requested Carpet Area exceeds a custom city threshold (e.g., 5,000 sq ft), the demand is immediately tagged as "High-Value" and hidden from agents. It routes exclusively to the internal Keydemand team.
   - **Expiry Rule:** Demands automatically move to "Inactive" status after 60 days if not renewed.

**3.2 : Agent (Subscribed vs. Expired)**
1. Same flow as above from Step 1 to 4
2. Receives a WhatsApp alert regarding a newly pushed matching demand.
3. View the demand card (Transaction Type, Carpet Area, City, Location, Possession).
4. Clicks "Request Contact" to view the demand poster's number.
5. **Edge Cases & Business Rule Enforcement:**
   - **The Blackout Rule:** Agents **cannot search or explore demands** manually. They only view demands pushed to them via backend relevancy algorithms matching their registered cities/asset classes.
   - **72-Hour SLA:** When an agent clicks "Request to Connect," the demand poster has exactly 72 hours to accept. If ignored, the request auto-nullifies with a rejection.
   - **Expired Agents:** Cannot view pushed demands or request contact.

**3:3: Keydemand Team**
1. Same flow as above from Step 1 to 4
2. Utilises the exclusive "Explore Demands" on the front end to view all platform demands.
3. Identifies and gets auto-routed "High-Value" demands.
4. Clicks "Add a Demand" on the dashboard.
5. Inputs all mandatory and non-mandatory fields
6. Clicks Submit. The demand is assigned a unique Demand ID.
7. Can see Relevant properties and contact them.
8. Edge Cases & Business Rule Enforcement? _[comment AAAB7BZZY2Y, Himanshu Bhiwandkar, RESOLVED: "Project leads and Enterprise solution leads too"]_
   1. They also get assigned project leads and enterprise solution leads

**General Business Rules**
1. The system must check the Carpet Area and Location during submission. These are tagged as "High-Value" and routed exclusively to the internal Keydemand team.
2. Agents may receive a notification that a large demand exists in their area to keep them engaged, without the CTA
3. Nobody can explore demands anymore except for the Keydemand team. It will be matched to the relevant property.
4. Custom City-based threshold for the requested square footage (e.g., 5,000 sq ft for Mumbai) for Office Tenants. If the requested size exceeds this threshold, the demand lead must be automatically transferred to the Key Demand team and not to an agency.
5. Retail & F&B Brands: Can onboard directly. They are allowed 3 free requirements. Upon the 4th, the system triggers an enterprise sales pitch/paywall.
6. An essential bulk upload functionality, potentially using an Excel file, is required for enterprise users to post numerous demands simultaneously, especially when the asset class and requirement details remain constant across multiple cities.
7. Managed Space Occupiers (Tenants): Restricted to posting Office and F&B demands only. They are limited to posting only one demand. If they wish to post more, they must opt for the customised enterprise package.
8. When an office tenant views a supplier's phone number, the contact number will be shared over WhatsApp with the tenant, and the supplier will be simultaneously notified about the inquiry. (Please note only in the case of office)
9. Registered, subscribed, and expired users must receive WhatsApp alerts for inbound leads and overall market summaries (e.g., the number of new demands added in a specific city).
10. Agents: Can post demands on behalf of clients, subject to their subscription asset classes and cities.
11. Just like properties, demand responses and matches must be viewed directly on the Dashboard or a dedicated "Matches" tab. There is no separate inbox.
12. Agents/Suppliers only see demands that match their registered asset class and city.
13. When a supplier "requests to connect" with a demand, the requester has 72 hours to accept. If no action is taken within 72 hours, the request is automatically nullified with a system-generated rejection.
14. High value demands uploaded based on city and area validation wont be matched across to the Agent and will be sent to Keydemand team. Any demand where the tenant self-selects the 'Enterprise Solution' is immediately transferred to the Keydemand admin team for customised handling.
15. One image must be mandatory in each field, except for video uploads.
16. The requester(tenant side) must see a real-time list of "Interested Properties" or "Matched Listings" directly on the demand detail page.
17. A non-editable, unique Demand ID must be visible for support and tracking.
18. If a demand is being handled exclusively by the Keydemand team (high-value), the self-view should indicate "Assigned to Keydemand Specialist."
19. The Brand dashboard must display the list of suppliers who have requested contact details, as brands have the authority to accept or reject these requests.
20. Users can deactivate a demand once the requirement is fulfilled or no longer valid. Deactivation stops all new matching algorithms.

Demands should automatically move to "Inactive" after a set period (e.g., 60 days) if not renewed, to ensure the "Supply" side isn't chasing old leads.
1. "Yes" fields can not be edited after getting the response.
2. Uploading Managed Space Demand (Keydemand ) - These requirements posted by the Keydemand admin team will only be viewed by the Keydemand team (in Explore, relevancy), and no other suppliers can view them.
3. Front-end users (including agents and brands) can no longer explore or search through demands. Demand exploration is now strictly restricted to the internal Key Demand team, and matching will occur entirely through backend relevancy logic for agents it will be only F&B, Retail, Office.
4. If a subscribed agent cancels or lets their subscription expire, their account will be set to deactivate after 3 months, and their posted listings will no longer be shown to the audience.
5. While uploading office demand the user will have option to have a fixed location and other interested locations where they will get the relevance of properties based on the locations selected. Eg they want an office in Colaba, Nariman Point, Worli and Mumbai Central. So a max of 1+4 extra locations can be added while uploading the office requirement.
6. Projects should be matched against all posted demands by using key input fields from both the project and the demand to determine compatibility. Although a specific relevancy percentage will not be assigned, the matched projects must still be presented to users as demonstrably relevant options for their requirement.
7. Flex Demand (Keydemand) is to be done in Phase 2

#### **4. Project Management**
*Note: Based on Epic 7 documentation, the platform acts as a discovery marketplace for Projects. Projects denote large developments (IT Parks, Malls) uploaded by Developers.*
**Personas Who Can List Projects**: Projects are added exclusively by the Keydemand admin team on behalf of developers. There must be a company page created and then a project
Brands, agents and office occupiers (tenants) can see projects.

**4.1: Agents, Tenants and Brands (All Sub-types)**
1. Navigates to the Exclusive Projects, Developer projects from the Landing Page/Individual home pages. Or in case of unregistered users, they can also click on sponsored projects in the hero section too.
2. Filters projects by Location, Asset Class, and transaction type
3. View the Project Detail Page (Brochures, Floorplans, Built-Up Area, Possession Date).
4. Clicks "Show Interest" or "WhatsApp".
5. **Edge Cases & Business Rule Enforcement:**
   - **Managed vs Enterprise Tenants:** Both take the same UI action ("Show Interest"). They can only view public details. They cannot see internal metrics like page views or backend leads.

**Keydemand Admin** _[steps 1–4 carry comment AAAB7BZZY2U, Himanshu Bhiwandkar, RESOLVED: "If the developer is not onboarded the onboard the developer, then create the project page. Eg first we need to form a company for the developer and then create the project page as per V1."]_
1. Logs into the Admin Portal to create a Project on behalf of a Developer.
2. Inputs mandatory and non-mandatory fields.
3. Assigns a Keydemand POC (e.g., Deepali, Sohel) and who can see your Project\*, like Brand and agent, from an internal dropdown. POC can see enquiries if they are assigned.
4. Clicks submit to generate a non-editable Project ID.

**4.3: Developer**
If the developer is not onboarded then the Keydemand admin on receiving enquiry will onboard the developer, then first they will form a company for the developer from backend and only then can they create the project page by clicking Add project on the admin side. Once project details are filled, they are visible on Developer dashboard.

Business Rules
1. Developers post projects only; they no longer post individual properties. Only the Keydemand admin team can upload. Front-end, they cannot upload.
2. The process of uploading a project is handled entirely by the backend Super Admin team. The internal Super Admin team has the right to add, verify, or edit projects on behalf of developers.
3. Project leads generated will be routed directly to the Key Demand relationship manager and the super admin dashboard.
4. How many have viewed the project can be added. (Basic implementation)
5. Every project must be assigned a unique, non-editable Project ID upon creation.
6. Who can view projects - self-view - developer can view. Other users- agent/brand/office occupier can view
7. Projects should be matched against all posted demands by using key input fields from both the project and the demand to determine compatibility. Although a specific relevancy percentage will not be assigned, the matched projects must still be presented to users as demonstrably relevant options for their requirement.
8. For Exclusive Projects, the Keydemand internal team handles all follow-up and contact with the interested leads. These projects are often referred to as "Keydemand managed projects". The distinction centres on how leads are processed. When an unregistered user submits a lead form to show interest in an Exclusive Project, the lead is automatically routed to the admin portal, the respective developer, and the assigned relationship manager.
9. User is not a registered user > clicks on project interest > will be asked to fill a form > details will be sent to RM of that project, Keydemand team assigned to the project, admin team as a lead and it will also be stored under the project. Details of what will be asked while filling the form is already shared.
   1. User who is a registered user > clicks on project interested > automatically details will be captured and the CTA will be changed to intrerest shown on this project on \<date\>, similarly details for this will be sent as above.

### Business rules extracted
- **BR-FLD-116** — WhatsApp and SMS notifications are split into "Transactional" (mandatory; e.g. lead alerts, inventory activities, subscriptions) and "Promotional" (users can opt out via toggles in a settings header). _(§ 1)_
- **BR-FLD-117** — Enterprise users and the Keydemand team cannot edit, delete or deactivate accounts from the front end; these actions are back-end only. _(§ 1)_
- **BR-FLD-118** — Deactivating a profile deactivates its inventory; deleting a profile permanently deletes its inventory. _(§ 1)_
- **BR-FLD-119** — Front-end profile add/edit is available only to Office Tenant / Managed Space Occupier (Individual + Enterprise), Individual User Agent, Retail & F&B (Individual), and F&B and Retail Enterprise Brands. _(§ 1)_
- **BR-FLD-120** — Login is by Mobile Number + OTP. _(§ 1.1–1.3)_
- **BR-FLD-121** — Tenant/Occupier and Individual Brand profiles can edit: profile/brand picture (max 5MB JPG/PNG), Name, Email, Transaction Type, City, Company Name, About yourself, WhatsApp notifications toggle. Mobile number and Asset Class are locked after registration. _(§ 1.1)_
- **BR-FLD-122** — Enterprise Brand profiles can edit only the "WhatsApp notifications" toggle. Brand picture, Account Handler Details, Brand Name, About brand, User Name, User mobile number, Asset Class, Transaction Type, City and Carpet Area are locked; changes go through the assigned Keydemand RM. _(§ 1.2)_
- **BR-FLD-123** — Non-registered agents cannot access or create a profile. Registered/Subscribed agents can edit Profile Picture (max 5MB), Name, Email, Transaction Type, City, Company Name, Designation, Experience, About yourself and WhatsApp notifications; Mobile number and Asset Class are locked. _(§ 1.3)_
- **BR-FLD-124** — Expired agents have no active actions; their profile and listings are fully deactivated after 3 months of non-renewal. _(§ 1.3; Demand GBR 4)_
- **BR-FLD-125** — Profile changes are not manually approved. Developer and Managed Space Operator profiles are created by the Keydemand Admin team within 24 hours of a soft registration or enquiry form. _(§ Role of Keydemand Admin Team)_
- **BR-FLD-126** — Only Agents (registered, limited; subscribed) and the Keydemand team list properties on the front end. Managed Space Operator properties are uploaded from the backend by the Keydemand admin. Brands, Tenants and Developers do not list properties. _(§ 2, GBR 1–3)_
- **BR-FLD-127** — The property Asset Class must match the agent's registration. An agent with one registered asset class can only post that type; with several, the agent must choose when posting. _(§ 2.1 step 2; GBR 8, 9, 26)_
- **BR-FLD-128** — A registered (unsubscribed) agent can list exactly 1 free property; a second attempt triggers the subscription paywall. Subscribed agents have unlimited listings within their registered asset classes and cities. _(§ 2.1)_
- **BR-FLD-129** — Agents cannot upload Managed Space properties. _(§ 2.1 Asset Lock; GBR 8)_
- **BR-FLD-130** — All "Yes" fields (e.g. Amenities, Washroom Available) become permanently non-editable once the listing gets its first response. The same applies to demands. _(§ 2.1 Data Lock; GBR 10, 21; Demand rule 1)_
- **BR-FLD-131** — Rate per sq. ft. and total Rent Amount are auto-calculated from area and price. _(§ 2.1 step 4; GBR 4)_
- **BR-FLD-132** — Interior, exterior and Front Side images are required (one image mandatory per category; video optional). The first Front Side image is the main image, and the upload UI must say so. _(§ 2.1 step 5; GBR 13, 17)_
- **BR-FLD-133** — Media limits per this doc: images max 5MB, JPG/PNG, at least 300 ppi; videos max 20MB, MP4. _(§ 2.1; GBR 17)_
- **BR-FLD-134** — A supplier can hide images ("Request for Images" / "Do not show images"). Viewers then request images and the supplier accepts or rejects the request. _(§ GBR 13, 17)_
- **BR-FLD-135** — Non-registered users cannot see any property images. After registration, images show unless hidden by the supplier. _(§ GBR 6)_
- **BR-FLD-136** — On submit, a property gets a permanent, non-editable Property ID (and a project gets a Project ID). The ID stays visible on the edit screen and as a tag on cards and detail pages. _(§ 2.1 step 6; GBR 12, 16)_
- **BR-FLD-137** — There is no draft-to-publish verification queue; agents self-publish. The Keydemand admin can audit, edit, deactivate or delete any listing via "My Listings". _(§ 2.2)_
- **BR-FLD-138** — The Keydemand admin can add a property to any account (KD agent or agent) and apply visibility toggles (Enterprise Buyer, Keydemand, Agent) to hide exclusive listings. _(§ 2.2)_
- **BR-FLD-139** — Keydemand team members can see other KD members' inventory under "My Listings", filterable by username. _(§ 2.2; GBR 23)_
- **BR-FLD-140** — A non-enterprise or non-subscribed user who has viewed 3–4 contact numbers is prompted toward an enterprise solution or subscription. This prompts the user but does not block them. _(§ GBR 5)_
- **BR-FLD-141** — On any form reset or page refresh, the default property type is Office (V1 defaulted to Retail). _(§ GBR 7)_
- **BR-FLD-142** — "Other documents" upload (property only) works like LinkedIn: the user uploads a file and names it. _(§ GBR 11)_
- **BR-FLD-143** — There is no inbox. Property and demand responses appear in the dashboard or self-view (or a "Matches" tab) as a list. _(§ GBR 14; Demand GBR 11)_
- **BR-FLD-144** — Agents, Managed Space Operators and the Keydemand team can delete or deactivate their own listings. Deactivation removes the listing from the marketplace and matching, but it stays in the dashboard for reactivation. _(§ GBR 15, 20)_
- **BR-FLD-145** — A contact request from a registered agent requires login/registration. The Occupier has 72 hours to accept or reject; with no response, the request auto-nullifies with a rejection message. _(§ GBR 18; 3.2; Demand GBR 13)_
- **BR-FLD-146** — A subscription paywall appears when a registered agent requests contact details more than twice or thrice. _(§ GBR 19)_
- **BR-FLD-147** — Flex Property (Keydemand) is Phase 2: create and keep the table, but do not give the audience access. _(§ GBR 22, 24)_
- **BR-FLD-148** — Office requirements above 5,000 sq ft go to Keydemand, not the platform. _(§ GBR 25)_
- **BR-FLD-149** — Demands have no map. Property has a map (leaflet) with a location marker and nearby bank, bus stop, restaurant and shopping by asset class. Street view opens a pop-up on the same page. _(§ GBR 27)_
- **BR-FLD-150** — Demands can be listed by Retail & F&B Brands, Office Tenants, Agents (for clients, within their subscription asset classes/cities) and the Keydemand team. Enterprise Brand/Office demands are collected offline and uploaded by KD/admin. Developers and Managed Space Operators do not add demands. _(§ 3; GBR 10)_
- **BR-FLD-151** — A demand allows 1 fixed Location plus up to 4 "Other interested locations" (max 1+4). _(§ 3.1 step 3; Demand rule 5)_
- **BR-FLD-152** — On submit, a demand gets a unique, non-editable Demand ID, which is visible for support and tracking. _(§ 3.1 step 4; GBR 17)_
- **BR-FLD-153** — Retail & F&B Brands get exactly 3 free requirements; the 4th triggers an enterprise paywall or sales pitch. _(§ 3.1; GBR 5)_
- **BR-FLD-154** — Managed Space Occupiers / Office Tenants get exactly 1 free demand; more requires the customised enterprise package. Managed Space Occupiers can post only Office and F&B demands. _(§ 3.1; GBR 7)_
- **BR-FLD-155** — High-value routing: if Carpet Area exceeds a custom city threshold (e.g. 5,000 sq ft for Mumbai, office tenants), the demand is tagged "High-Value", hidden from agents and routed only to the Keydemand team. The poster's self-view shows "Assigned to Keydemand Specialist". _(§ 3.1; GBR 1, 4, 14, 18)_
- **BR-FLD-156** — A demand whose tenant self-selects "Enterprise Solution" goes immediately to the Keydemand admin team. _(§ Demand GBR 14)_
- **BR-FLD-157** — Demands move to "Inactive" automatically after 60 days if not renewed. _(§ 3.1; GBR 20 note)_
- **BR-FLD-158** — Agents cannot search or explore demands. They see only demands pushed by backend relevancy matching their registered city and asset class (F&B, Retail, Office only), and get a WhatsApp alert for each. _(§ 3.2; GBR 3, 12; rule 3)_
- **BR-FLD-159** — Expired agents cannot view pushed demands or request contact. _(§ 3.2)_
- **BR-FLD-160** — Agents may be notified that a large demand exists in their area, without a CTA. _(§ GBR 2)_
- **BR-FLD-161** — Only the Keydemand team has "Explore Demands". The team also receives high-value demands, project leads and enterprise solution leads. _(§ 3.3; comment AAAB7BZZY2Y)_
- **BR-FLD-162** — Enterprise users need bulk demand upload (e.g. Excel), especially when the same requirement covers several cities. _(§ GBR 6)_
- **BR-FLD-163** — Office only: when an office tenant views a supplier's phone number, the number is sent to the tenant on WhatsApp and the supplier is notified. _(§ GBR 8)_
- **BR-FLD-164** — Registered, subscribed and expired users receive WhatsApp alerts for inbound leads and market summaries (e.g. new demands per city). _(§ GBR 9)_
- **BR-FLD-165** — The demand detail page shows the requester a real-time list of "Interested Properties" / "Matched Listings". The Brand dashboard lists suppliers who requested contact, and the brand can accept or reject each. _(§ GBR 16, 19)_
- **BR-FLD-166** — Deactivating a demand stops all new matching. _(§ GBR 20)_
- **BR-FLD-167** — Projects are matched to all demands on key input fields from both sides; no relevancy percentage is shown, but matches are presented as relevant. _(§ Demand rule 6; Project rule 7)_
- **BR-FLD-168** — Flex Demand (Keydemand) is Phase 2. _(§ Demand rule 7)_
- **BR-FLD-169** — Only the Keydemand admin / Super Admin team adds, verifies or edits projects, on behalf of developers, after creating the developer's company page. Developers cannot upload from the front end. _(§ 4; 4.3; rules 1–2; comment AAAB7BZZY2U)_
- **BR-FLD-170** — When creating a project, the admin assigns a Keydemand POC and "who can see your Project*" (e.g. Brand, agent) from an internal dropdown. Assigned POCs can see enquiries. Submit generates a non-editable Project ID. _(§ Keydemand Admin)_
- **BR-FLD-171** — Brands, agents and office occupiers can browse Exclusive/Developer projects, filter by Location, Asset Class and transaction type, view details (Brochures, Floorplans, Built-Up Area, Possession Date) and click "Show Interest" or "WhatsApp". Unregistered users can open sponsored projects from the hero section. _(§ 4.1)_
- **BR-FLD-172** — Tenants see only public project details, never internal metrics such as page views or backend leads. _(§ 4.1)_
- **BR-FLD-173** — Project leads go to the Keydemand RM and the super admin dashboard. For Exclusive ("Keydemand managed") projects, an unregistered user's lead goes to the admin portal, the developer and the assigned RM. _(§ rules 3, 8)_
- **BR-FLD-174** — Project view count may be added (basic). Developers see their projects on their dashboard. _(§ 4.3; rules 4, 6)_
- **BR-FLD-175** — "Show interest" from an unregistered user opens a form; details go to the project's RM, the assigned KD team and admin as a lead, and are stored under the project. For a registered user, details are captured automatically and the CTA changes to "interest shown on this project on <date>". _(§ rule 9)_

### Open questions / ambiguities in this doc
- 3.3 step 8 heading "Edge Cases & Business Rule Enforcement?" ends with a question mark (resolved comment: "Project leads and Enterprise solution leads too").
- "Rent Amount" input auto-calculates "Rate per sq. ft." and "Total Rent", which also refers to "Added logic in the Product Excel sheet under D68-69-70 row" (that sheet is not in this group).
- Paywall thresholds are vague: "three or four contact numbers"; "more than twice or thrice".
- GBR 16 says "(Same as point no 14)" but point 14 is about the inbox; it probably means point 12.
- Managed Space Occupiers "restricted to posting Office and F&B demands only" seems odd (Managed Space demand would be expected).
- The demand rules use 72 hours both for the "demand poster" and for the "requester" to accept (Demand GBR 13 wording).
- Duplicated rules: GBR 9/26 and GBR 10/21.

---
## Group-level notes
### Version history
- No document in this group is a version of another; there are no "Version N.N" titles and no "DO NOT TAKE" docs. All six are AUTHORITATIVE for their own scope.
- Recency: Card Details (2026-10-08) > Control Panel Bulk Upload Fields (2026-10-04) > Demand Input fields and Property & Project Input Fields (both 2026-09-16, titles dated "September 16") > Data set for Bulk Upload (2026-08-18) > Profile/Listing Management per Persona (2026-06-01). The two input-field sheets carry reviewer annotations dated 17-06-2026 ("Himanshu").
- Where field-level detail conflicts, the newer field sheets (Sep 16) and Control Panel (Oct 4) are later than the Jun 1 persona doc. The persona doc still holds the workflow/permission rules that the sheets do not cover.

### Conflicts across docs in this group
- **Media size/format:** Persona doc says images ≤5MB JPG/PNG ≥300 ppi, videos ≤20MB MP4. The Input sheets (newer) say images <2MB JPEG/JPG/PNG, videos <5MB MP4/MOV. Profile pictures are max 5MB (persona doc only).
- **Other interested locations:** Persona doc allows 1 + up to 4. The Demand Input sheet says "upto 3", and the Control Panel has Other Location 1–3 (newer docs = 3).
- **Rate/Rent auto-calc:** Persona doc says the user enters "Rent Amount" and the system computes Rate and "Total Rent". The Property sheet computes in both directions (Rate = Rent ÷ Carpet; Rent = Carpet × Rate). Cards display "Total Rent" while the form field is "Quoted Rent*".
- **Flex:** Persona doc and both input sheets mark Flex property/demand as Phase 2 (table created, no audience access). The Control Panel (Oct 4) includes a "Centre · Flex (multiple formats)" bulk template with different format names (Hot Desk/Private Cabin/Custom Build/Day Pass).
- **Managed space minimum:** The Demand sheet accepts only "more than 20 seats". Neither the persona doc nor the Control Panel states this minimum.
- **Mandatory flags (bulk vs form):** Office Sale property: Quoted Price* is mandatory in the form but Sale Price is non-mandatory in the Control Panel. OC Status* is mandatory on office forms but non-mandatory in the Control Panel. Projects: Control Panel requires "Property Type" (not in the form). Possession is MM/YYYY in the Control Panel vs MM/YY in the form. Unit Size From/To vs Unit Size Min/Max.
- **Visibility ("Who can see"):** Persona doc toggles are Enterprise Buyer, Keydemand, Agent. The Property sheet options are Office Tenant Occupier, Enterprise Tenant Occupier, Keydemand, Agent (default "Enterprise Buyer"). Demand options are Developer, Keydemand, Agent. In the Control Panel, "Who Can See" is available on all demand/property templates, including Brand/Tenant/Agent ones, while the input sheet shows it only on Keydemand forms ("Not visible at user end").
- **Office high-value threshold:** Persona doc gives 5,000 sq ft (custom per city, e.g. Mumbai). No input or bulk doc implements the threshold.
- **Managed Office demand card vs form:** The card shows Team size and Lock-in period, which the Managed Space demand form does not capture.
- **Lock-in units:** Months for centres (Control Panel); years for property/demand (forms and Control Panel).
