# 04 — Product Requirements, Stories & Epics

## Documents in this group
| # | Title | Type | Drive ID | Owner | Modified | Status |
|---|---|---|---|---|---|---|
| 1 | Product Requirments (1)-FINAL OCT 2 | Google Sheet (14 tabs) | `1CZxTS5kCzHTRa5W1GKa3i_yLs1zeGtr8I0QZTBu3RIE` | pradeepa.pv@futuristglobal.com | 2026-10-10 | AUTHORITATIVE (latest requirements list; wins every conflict) |
| 2 | Keydemand_PRD_v1 08-04-2026 (1).docx | Word .docx | `1Zby45ttZtQAzPYelmLgR1f_pb3LTtRAu` | pradeepa.pv@futuristglobal.com | 2026-06-23 | AUTHORITATIVE (base PRD; overridden where Oct 2 sheet differs — overrides flagged ⚠OVERRIDDEN) |
| 3 | Access Permissions: V1 PRD and Phase 1 Master Document | Google Doc | `1fxNIgdpporQQzqyFONONkBnWdsrcJsWeqleq5NycX-A` | pradeepa.pv@futuristglobal.com | 2026-05-20 | AUTHORITATIVE (permissions synthesis; yields to Oct 2 sheet on conflict) |
| 4 | STORIES | Google Doc | `1mu6LvvT48_YYalvQ1eEEyUOkou4vxiJx9ZYm6vgWIoo` | pradeepa.pv@futuristglobal.com | 2026-04-08 | AUTHORITATIVE as the only user-story backlog — but written from doc #6 (v2 "Product Requirements", Mar 2026); many ACs are overridden by #1/#2/#3 (flagged) |
| 5 | Epics | Google Doc | `1AvBwlAm-7olxkqe4AwqYKI5hv__adTE-qtsMG64U3is` | pradeepa.pv@futuristglobal.com | 2026-03-13 | AUTHORITATIVE as the only epic index (same caveat as #4) |
| 6 | Product Requirements | Google Doc | `1cItzZ2AKsqzt3UnOi9RYMs3eaDO2-UxluhGCVwyLUMc` | pradeepa.pv@futuristglobal.com | 2026-03-19 | HISTORY (superseded by Product Requirments (1)-FINAL OCT 2 and Keydemand_PRD_v1) |

Legend used below: **⚠OVERRIDDEN** = rule in a base/older doc that the Oct 2 sheet (or a later authoritative doc) changes. Cell references (e.g. `BB13`) are spreadsheet cells. `<br>` inside table cells = a line break in the source cell.

---
## Product Requirments (1)-FINAL OCT 2  [AUTHORITATIVE]
**Source:** Google Sheet · ID `1CZxTS5kCzHTRa5W1GKa3i_yLs1zeGtr8I0QZTBu3RIE` · owner pradeepa.pv@futuristglobal.com · created 2026-10-04, modified 2026-10-10 · tabs read (14, in order): Subscription; City (Metro & Non-metro); Property Input Fields (2) *(hidden tab)*; Property Input Fields (3) *(hidden tab)*; Demand Input fields; Property & Project Input Fields; New Platform Requirement-Filter; User Profile; Card Details; User Dashboard; Clientele; Notification *(hidden tab)*; Notification Final; Build 1 Bugs · cell comments read (7, via xlsx export) · read coverage: 100% of every tab, every row/column (values pulled via Sheets API; cross-checked byte-for-byte against an xlsx export).

**Transcription method:** visible tabs are transcribed in full below. Wide input-field tabs place many forms side by side; each form (a run of columns separated by an empty column) is shown as its own table, with the original column letters and row numbers. The two hidden tabs "Property Input Fields (2)" and "(3)" are earlier drafts of the visible "Property & Project Input Fields" tab (no 17-06-2026 / "Himanshu"/"V2 New Fields" review columns; still contain Developer property forms marked "Remove", and multi-unit "range" forms); per the brief they are treated as in-sheet HISTORY: every value that does not also appear in the current tab is quoted in full in §"Hidden tabs — differences". The hidden "Notification" tab is superseded by "Notification Final" but holds much content found nowhere else (per-role message texts, admin e-mails, 72-hour rule), so it is transcribed in full.

**Cell comments in the sheet (all of them):**
| Tab | Cell | Comment |
|---|---|---|
| Property Input Fields (2) *(hidden)* | JS2 | "Add header for this table" |
| Property Input Fields (3) *(hidden)* | GS2 | "Add header for this table" |
| Property & Project Input Fields | BB13 | "Carpet area should not be more than Built up area" (Office Property Lease (Agent) – Built up Area) |
| Property & Project Input Fields | BM14 | "Carpet area should not be more than Built up area" (Office Property Sale (Agent)) |
| Property & Project Input Fields | DF14 | "Carpet area should not be more than Built up area" (Office Property Lease (Keydemand)) |
| Property & Project Input Fields | DQ14 | "Carpet area should not be more than Built up area" (Retail Property Sale (Keydemand)) |
| Property & Project Input Fields | EB14 | "Carpet area should not be more than Built up area" (Office Property Sale (Keydemand)) |
| Build 1 Bugs | H137 | "Rohit Karekar:" (author tag, no text) |

### Content

#### Tab: Subscription


#### Subscription — Columns A–E: (untitled block)

| Row | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 |  | Metro (Per Asset Class Per City) | Non-Metro (Per Asset Class Per City) | ROI (Per Asset Class) | Pan India |
| 2 | Retail & FnB | 1000 | 750 | 1000 | 5000 |
| 3 | Office | 1000 | 750 | 1000 | 5000 |
| 4 | Both | 2000 | 1500 |  |  |

#### Tab: City (Metro & Non-metro)
Source layout: three side-by-side tables (Metro A–D, Non-metro F–I, ROI K–M), header rows 2–3.
**Metro cities** (cols A–D)

| # | Name of City | State | Classification | Combination |
|---|---|---|---|---|
| 1 | Mumbai | Maharashtra | Metro | MMR |
| 2 | Delhi | Delhi | Metro | NCR |
| 3 | Bengaluru | Karnataka | Metro |  |
| 4 | Chennai | Tamil Nadu | Metro |  |
| 5 | Kolkata | West Bengal | Metro |  |
| 6 | Pune City | Maharashtra | Metro | Pune |
| 7 | Pimpri-Chinchwad | Maharashtra | Metro | Pune |
| 8 | Hyderabad | Telangana | Metro |  |
| 9 | Thane | Maharashtra | Metro | MMR |
| 10 | Faridabad | Haryana | Metro | NCR |
| 11 | Kalyan-Dombivali | Maharashtra | Metro | MMR |
| 12 | Vasai-Virar | Maharashtra | Metro | MMR |
| 13 | Gurgaon | Haryana | Metro | NCR |
| 14 | Mira-Bhayandar | Maharashtra | Metro | MMR |
| 15 | Bhiwandi | Maharashtra | Metro | MMR |
| 16 | Noida | Uttar Pradesh | Metro | NCR |
| 17 | Panvel | Maharashtra | Metro | MMR |
| 18 | Ulhasnagar | Maharashtra | Metro | MMR |
| 19 | Ghaziabad | Uttar Pradesh | Metro | NCR |
| 20 | Consider combination for clubbing of cities when user buys the subscription. But while posting they will be able to see all the cities that are clubbed |  |  |  |

**Non-metro cities** (cols F–I)

| # | Name of City | State | Combination | Classification |
|---|---|---|---|---|
| 1 | Ahmedabad | Gujarat |  | Non-metro |
| 2 | Jaipur | Rajasthan |  | Non-metro |
| 3 | Surat | Gujarat |  | Non-metro |
| 4 | Lucknow | Uttar Pradesh |  | Non-metro |
| 5 | Nagpur | Maharashtra |  | Non-metro |
| 6 | Patna | Bihar |  | Non-metro |
| 7 | Indore | Madhya Pradesh |  | Non-metro |
| 8 | Bhopal | Madhya Pradesh |  | Non-metro |
| 9 | Visakhapatnam | Andhra Pradesh |  | Non-metro |
| 10 | Vadodara | Gujarat |  | Non-metro |
| 11 | Nashik | Maharashtra |  | Non-metro |
| 12 | Raipur | Chhattisgarh |  | Non-metro |
| 13 | Coimbatore | Tamil Nadu |  | Non-metro |
| 14 | Vijayawada | Andhra Pradesh |  | Non-metro |
| 15 | Guwahati | Assam |  | Non-metro |
| 16 | Chandigarh | Chandigarh |  | Non-metro |
| 17 | Ranchi | Jharkhand |  | Non-metro |
| 18 | Bhubaneswar | Odisha |  | Non-metro |
| 19 | Thiruvananthapuram | Kerala |  | Non-metro |
| 20 | Kochi | Kerala |  | Non-metro |
| 21 | Dehradun | Uttarakhand |  | Non-metro |
| 22 | Mysore | Karnataka |  | Non-metro |
| 23 | Marmagao | Goa | Goa | Non-metro |
| 24 | Panaji | Goa | Goa | Non-metro |
| 25 | Margao | Goa | Goa | Non-metro |
| 26 | Mapusa | Goa | Goa | Non-metro |

**Note (cell A31):** Consider combination for clubbing of cities when user buys the subscription. But while posting they will be able to see all the cities that are clubbed

**Stray cell:** Q19 = "S"

**Rest of India (ROI) cities** (cols K–M; 1173 rows; Classification = "ROI" on every row). Rendered 4 city/state pairs per line to save space, in source row order:

| # | City (State) | # | City (State) | # | City (State) | # | City (State) |
|---|---|---|---|---|---|---|---|
| 1 | Kanpur (Uttar Pradesh) | 2 | Firozabad (Uttar Pradesh) | 3 | Ludhiana (Punjab) | 4 | Rajkot (Gujarat) |
| 5 | Agra (Uttar Pradesh) | 6 | Siliguri (West Bengal) | 7 | Patiala (Punjab) | 8 | Meerut (Uttar Pradesh) |
| 9 | Varanasi (Uttar Pradesh) | 10 | Srinagar (Jammu and Kashmir) | 11 | Dhanbad (Jharkhand) | 12 | Jodhpur (Rajasthan) |
| 13 | Amritsar (Punjab) | 14 | Allahabad (Uttar Pradesh) | 15 | Jabalpur (Madhya Pradesh) | 16 | Gwalior (Madhya Pradesh) |
| 17 | Madurai (Tamil Nadu) | 18 | Hubli-Dharwad (Karnataka) | 19 | Amroha (Uttar Pradesh) | 20 | Moradabad (Uttar Pradesh) |
| 21 | Aligarh (Uttar Pradesh) | 22 | Solapur (Maharashtra) | 23 | Jalandhar (Punjab) | 24 | Tiruchirappalli (Tamil Nadu) |
| 25 | Salem (Tamil Nadu) | 26 | Warangal (Telangana) | 27 | Saharanpur (Uttar Pradesh) | 28 | Guntur (Andhra Pradesh) |
| 29 | Amravati (Maharashtra) | 30 | Bikaner (Rajasthan) | 31 | Jamshedpur (Jharkhand) | 32 | Bhilai Nagar (Chhattisgarh) |
| 33 | Cuttack (Odisha) | 34 | Udaipur (Rajasthan) | 35 | Bhavnagar (Gujarat) | 36 | Asansol (West Bengal) |
| 37 | Nanded-Waghala (Maharashtra) | 38 | Ajmer (Rajasthan) | 39 | Jamnagar (Gujarat) | 40 | Ujjain (Madhya Pradesh) |
| 41 | Sangli (Maharashtra) | 42 | Loni (Uttar Pradesh) | 43 | Jhansi (Uttar Pradesh) | 44 | Pondicherry (Puducherry) |
| 45 | Nellore (Andhra Pradesh) | 46 | Jammu (Jammu and Kashmir) | 47 | Belagavi (Karnataka) | 48 | Raurkela (Odisha) |
| 49 | Mangaluru (Karnataka) | 50 | Tirunelveli (Tamil Nadu) | 51 | Malegaon (Maharashtra) | 52 | Gaya (Bihar) |
| 53 | Tiruppur (Tamil Nadu) | 54 | Davanagere (Karnataka) | 55 | Kozhikode (Kerala) | 56 | Akola (Maharashtra) |
| 57 | Kurnool (Andhra Pradesh) | 58 | Bokaro Steel City (Jharkhand) | 59 | Rajahmundry (Andhra Pradesh) | 60 | Ballari (Karnataka) |
| 61 | Agartala (Tripura) | 62 | Bhagalpur (Bihar) | 63 | Latur (Maharashtra) | 64 | Dhule (Maharashtra) |
| 65 | Korba (Chhattisgarh) | 66 | Bhilwara (Rajasthan) | 67 | Brahmapur (Odisha) | 68 | Muzaffarpur (Bihar) |
| 69 | Ahmednagar (Maharashtra) | 70 | Kollam (Kerala) | 71 | Raghunathganj (West Bengal) | 72 | Bilaspur (Chhattisgarh) |
| 73 | Shahjahanpur (Uttar Pradesh) | 74 | Thrissur (Kerala) | 75 | Alwar (Rajasthan) | 76 | Kakinada (Andhra Pradesh) |
| 77 | Nizamabad (Telangana) | 78 | Sagar (Madhya Pradesh) | 79 | Tumkur (Karnataka) | 80 | Hisar (Haryana) |
| 81 | Rohtak (Haryana) | 82 | Panipat (Haryana) | 83 | Darbhanga (Bihar) | 84 | Kharagpur (West Bengal) |
| 85 | Aizawl (Mizoram) | 86 | Ichalkaranji (Maharashtra) | 87 | Tirupati (Andhra Pradesh) | 88 | Karnal (Haryana) |
| 89 | Bathinda (Punjab) | 90 | Rampur (Uttar Pradesh) | 91 | Shivamogga (Karnataka) | 92 | Ratlam (Madhya Pradesh) |
| 93 | Modinagar (Uttar Pradesh) | 94 | Durg (Chhattisgarh) | 95 | Shillong (Meghalaya) | 96 | Imphal (Manipur) |
| 97 | Hapur (Uttar Pradesh) | 98 | Ranipet (Tamil Nadu) | 99 | Anantapur (Andhra Pradesh) | 100 | Arrah (Bihar) |
| 101 | Karimnagar (Telangana) | 102 | Parbhani (Maharashtra) | 103 | Etawah (Uttar Pradesh) | 104 | Bharatpur (Rajasthan) |
| 105 | Begusarai (Bihar) | 106 | New Delhi (Delhi) | 107 | Chhapra (Bihar) | 108 | Kadapa (Andhra Pradesh) |
| 109 | Ramagundam (Telangana) | 110 | Pali (Rajasthan) | 111 | Satna (Madhya Pradesh) | 112 | Vizianagaram (Andhra Pradesh) |
| 113 | Katihar (Bihar) | 114 | Hardwar (Uttarakhand) | 115 | Sonipat (Haryana) | 116 | Nagercoil (Tamil Nadu) |
| 117 | Thanjavur (Tamil Nadu) | 118 | Murwara (Katni) (Madhya Pradesh) | 119 | Naihati (West Bengal) | 120 | Sambhal (Uttar Pradesh) |
| 121 | Nadiad (Gujarat) | 122 | Yamunanagar (Haryana) | 123 | English Bazar (West Bengal) | 124 | Eluru (Andhra Pradesh) |
| 125 | Munger (Bihar) | 126 | Panchkula (Haryana) | 127 | Raayachuru (Karnataka) | 128 | Deoghar (Jharkhand) |
| 129 | Ongole (Andhra Pradesh) | 130 | Nandyal (Andhra Pradesh) | 131 | Morena (Madhya Pradesh) | 132 | Bhiwani (Haryana) |
| 133 | Porbandar (Gujarat) | 134 | Palakkad (Kerala) | 135 | Anand (Gujarat) | 136 | Purnia (Bihar) |
| 137 | Baharampur (West Bengal) | 138 | Barmer (Rajasthan) | 139 | Morvi (Gujarat) | 140 | Orai (Uttar Pradesh) |
| 141 | Bahraich (Uttar Pradesh) | 142 | Sikar (Rajasthan) | 143 | Vellore (Tamil Nadu) | 144 | Singrauli (Madhya Pradesh) |
| 145 | Khammam (Telangana) | 146 | Mahesana (Gujarat) | 147 | Silchar (Assam) | 148 | Sambalpur (Odisha) |
| 149 | Rewa (Madhya Pradesh) | 150 | Unnao (Uttar Pradesh) | 151 | Hugli-Chinsurah (West Bengal) | 152 | Raiganj (West Bengal) |
| 153 | Phusro (Jharkhand) | 154 | Adityapur (Jharkhand) | 155 | Alappuzha (Kerala) | 156 | Bahadurgarh (Haryana) |
| 157 | Machilipatnam (Andhra Pradesh) | 158 | Rae Bareli (Uttar Pradesh) | 159 | Jalpaiguri (West Bengal) | 160 | Bharuch (Gujarat) |
| 161 | Pathankot (Punjab) | 162 | Hoshiarpur (Punjab) | 163 | Baramula (Jammu and Kashmir) | 164 | Adoni (Andhra Pradesh) |
| 165 | Jind (Haryana) | 166 | Tonk (Rajasthan) | 167 | Tenali (Andhra Pradesh) | 168 | Kancheepuram (Tamil Nadu) |
| 169 | Vapi (Gujarat) | 170 | Sirsa (Haryana) | 171 | Navsari (Gujarat) | 172 | Mahbubnagar (Telangana) |
| 173 | Puri (Odisha) | 174 | Robertson Pet (Karnataka) | 175 | Erode (Tamil Nadu) | 176 | Batala (Punjab) |
| 177 | Haldwani-cum-Kathgodam (Uttarakhand) | 178 | Vidisha (Madhya Pradesh) | 179 | Saharsa (Bihar) | 180 | Thanesar (Haryana) |
| 181 | Chittoor (Andhra Pradesh) | 182 | Veraval (Gujarat) | 183 | Lakhimpur (Uttar Pradesh) | 184 | Sitapur (Uttar Pradesh) |
| 185 | Hindupur (Andhra Pradesh) | 186 | Santipur (West Bengal) | 187 | Balurghat (West Bengal) | 188 | Ganjbasoda (Madhya Pradesh) |
| 189 | Moga (Punjab) | 190 | Proddatur (Andhra Pradesh) | 191 | Srinagar (Uttarakhand) | 192 | Medinipur (West Bengal) |
| 193 | Habra (West Bengal) | 194 | Sasaram (Bihar) | 195 | Hajipur (Bihar) | 196 | Bhuj (Gujarat) |
| 197 | Shivpuri (Madhya Pradesh) | 198 | Ranaghat (West Bengal) | 199 | Shimla (Himachal Pradesh) | 200 | Tiruvannamalai (Tamil Nadu) |
| 201 | Kaithal (Haryana) | 202 | Rajnandgaon (Chhattisgarh) | 203 | Godhra (Gujarat) | 204 | Hazaribag (Jharkhand) |
| 205 | Bhimavaram (Andhra Pradesh) | 206 | Mandsaur (Madhya Pradesh) | 207 | Dibrugarh (Assam) | 208 | Kolar (Karnataka) |
| 209 | Bankura (West Bengal) | 210 | Mandya (Karnataka) | 211 | Dehri-on-Sone (Bihar) | 212 | Madanapalle (Andhra Pradesh) |
| 213 | Malerkotla (Punjab) | 214 | Lalitpur (Uttar Pradesh) | 215 | Bettiah (Bihar) | 216 | Pollachi (Tamil Nadu) |
| 217 | Khanna (Punjab) | 218 | Neemuch (Madhya Pradesh) | 219 | Palwal (Haryana) | 220 | Palanpur (Gujarat) |
| 221 | Guntakal (Andhra Pradesh) | 222 | Nabadwip (West Bengal) | 223 | Udupi (Karnataka) | 224 | Jagdalpur (Chhattisgarh) |
| 225 | Motihari (Bihar) | 226 | Pilibhit (Uttar Pradesh) | 227 | Dimapur (Nagaland) | 228 | Mohali (Punjab) |
| 229 | Sadulpur (Rajasthan) | 230 | Rajapalayam (Tamil Nadu) | 231 | Dharmavaram (Andhra Pradesh) | 232 | Kashipur (Uttarakhand) |
| 233 | Sivakasi (Tamil Nadu) | 234 | Darjiling (West Bengal) | 235 | Chikkamagaluru (Karnataka) | 236 | Gudivada (Andhra Pradesh) |
| 237 | Baleshwar Town (Odisha) | 238 | Mancherial (Telangana) | 239 | Srikakulam (Andhra Pradesh) | 240 | Adilabad (Telangana) |
| 241 | Yavatmal (Maharashtra) | 242 | Barnala (Punjab) | 243 | Nagaon (Assam) | 244 | Narasaraopet (Andhra Pradesh) |
| 245 | Raigarh (Chhattisgarh) | 246 | Roorkee (Uttarakhand) | 247 | Valsad (Gujarat) | 248 | Ambikapur (Chhattisgarh) |
| 249 | Giridih (Jharkhand) | 250 | Chandausi (Uttar Pradesh) | 251 | Purulia (West Bengal) | 252 | Patan (Gujarat) |
| 253 | Bagaha (Bihar) | 254 | Hardoi (Uttar Pradesh) | 255 | Achalpur (Maharashtra) | 256 | Osmanabad (Maharashtra) |
| 257 | Deesa (Gujarat) | 258 | Nandurbar (Maharashtra) | 259 | Azamgarh (Uttar Pradesh) | 260 | Ramgarh (Jharkhand) |
| 261 | Firozpur (Punjab) | 262 | Baripada Town (Odisha) | 263 | Karwar (Karnataka) | 264 | Siwan (Bihar) |
| 265 | Rajampet (Andhra Pradesh) | 266 | Pudukkottai (Tamil Nadu) | 267 | Anantnag (Jammu and Kashmir) | 268 | Tadpatri (Andhra Pradesh) |
| 269 | Satara (Maharashtra) | 270 | Bhadrak (Odisha) | 271 | Kishanganj (Bihar) | 272 | Suryapet (Telangana) |
| 273 | Wardha (Maharashtra) | 274 | Ranebennuru (Karnataka) | 275 | Amreli (Gujarat) | 276 | Neyveli (TS) (Tamil Nadu) |
| 277 | Jamalpur (Bihar) | 278 | Udgir (Maharashtra) | 279 | Tadepalligudem (Andhra Pradesh) | 280 | Nagapattinam (Tamil Nadu) |
| 281 | Buxar (Bihar) | 282 | Aurangabad (Maharashtra) | 283 | Jehanabad (Bihar) | 284 | Phagwara (Punjab) |
| 285 | Khair (Uttar Pradesh) | 286 | Sawai Madhopur (Rajasthan) | 287 | Kapurthala (Punjab) | 288 | Chilakaluripet (Andhra Pradesh) |
| 289 | Aurangabad (Bihar) | 290 | Malappuram (Kerala) | 291 | Rewari (Haryana) | 292 | Nagaur (Rajasthan) |
| 293 | Sultanpur (Uttar Pradesh) | 294 | Nagda (Madhya Pradesh) | 295 | Port Blair (Andaman and Nicobar Islands) | 296 | Lakhisarai (Bihar) |
| 297 | Tinsukia (Assam) | 298 | Itarsi (Madhya Pradesh) | 299 | Kohima (Nagaland) | 300 | Balangir (Odisha) |
| 301 | Nawada (Bihar) | 302 | Jharsuguda (Odisha) | 303 | Jagtial (Telangana) | 304 | Viluppuram (Tamil Nadu) |
| 305 | Amalner (Maharashtra) | 306 | Zirakpur (Punjab) | 307 | Tanda (Uttar Pradesh) | 308 | Tiruchengode (Tamil Nadu) |
| 309 | Nagina (Uttar Pradesh) | 310 | Yemmiganur (Andhra Pradesh) | 311 | Vaniyambadi (Tamil Nadu) | 312 | Sarni (Madhya Pradesh) |
| 313 | Theni Allinagaram (Tamil Nadu) | 314 | Akot (Maharashtra) | 315 | Sehore (Madhya Pradesh) | 316 | Mhow Cantonment (Madhya Pradesh) |
| 317 | Kot Kapura (Punjab) | 318 | Makrana (Rajasthan) | 319 | Pandharpur (Maharashtra) | 320 | Miryalaguda (Telangana) |
| 321 | Shamli (Uttar Pradesh) | 322 | Seoni (Madhya Pradesh) | 323 | Ranibennur (Karnataka) | 324 | Kadiri (Andhra Pradesh) |
| 325 | Shrirampur (Maharashtra) | 326 | Rudrapur (Uttarakhand) | 327 | Parli (Maharashtra) | 328 | Najibabad (Uttar Pradesh) |
| 329 | Nirmal (Telangana) | 330 | Udhagamandalam (Tamil Nadu) | 331 | Shikohabad (Uttar Pradesh) | 332 | Jhumri Tilaiya (Jharkhand) |
| 333 | Aruppukkottai (Tamil Nadu) | 334 | Ponnani (Kerala) | 335 | Jamui (Bihar) | 336 | Sitamarhi (Bihar) |
| 337 | Chirala (Andhra Pradesh) | 338 | Anjar (Gujarat) | 339 | Karaikal (Puducherry) | 340 | Hansi (Haryana) |
| 341 | Anakapalle (Andhra Pradesh) | 342 | Mahasamund (Chhattisgarh) | 343 | Faridkot (Punjab) | 344 | Saunda (Jharkhand) |
| 345 | Dhoraji (Gujarat) | 346 | Paramakudi (Tamil Nadu) | 347 | Balaghat (Madhya Pradesh) | 348 | Sujangarh (Rajasthan) |
| 349 | Khambhat (Gujarat) | 350 | Muktsar (Punjab) | 351 | Rajpura (Punjab) | 352 | Kavali (Andhra Pradesh) |
| 353 | Dhamtari (Chhattisgarh) | 354 | Ashok Nagar (Madhya Pradesh) | 355 | Sardarshahar (Rajasthan) | 356 | Mahuva (Gujarat) |
| 357 | Bargarh (Odisha) | 358 | Kamareddy (Telangana) | 359 | Sahibganj (Jharkhand) | 360 | Kothagudem (Telangana) |
| 361 | Ramanagaram (Karnataka) | 362 | Gokak (Karnataka) | 363 | Tikamgarh (Madhya Pradesh) | 364 | Araria (Bihar) |
| 365 | Rishikesh (Uttarakhand) | 366 | Shahdol (Madhya Pradesh) | 367 | Medininagar (Daltonganj) (Jharkhand) | 368 | Arakkonam (Tamil Nadu) |
| 369 | Washim (Maharashtra) | 370 | Sangrur (Punjab) | 371 | Bodhan (Telangana) | 372 | Fazilka (Punjab) |
| 373 | Palacole (Andhra Pradesh) | 374 | Keshod (Gujarat) | 375 | Sullurpeta (Andhra Pradesh) | 376 | Wadhwan (Gujarat) |
| 377 | Gurdaspur (Punjab) | 378 | Vatakara (Kerala) | 379 | Tura (Meghalaya) | 380 | Narnaul (Haryana) |
| 381 | Kharar (Punjab) | 382 | Yadgir (Karnataka) | 383 | Ambejogai (Maharashtra) | 384 | Ankleshwar (Gujarat) |
| 385 | Savarkundla (Gujarat) | 386 | Paradip (Odisha) | 387 | Virudhachalam (Tamil Nadu) | 388 | Kanhangad (Kerala) |
| 389 | Kadi (Gujarat) | 390 | Srivilliputhur (Tamil Nadu) | 391 | Gobindgarh (Punjab) | 392 | Tindivanam (Tamil Nadu) |
| 393 | Mansa (Punjab) | 394 | Taliparamba (Kerala) | 395 | Manmad (Maharashtra) | 396 | Tanuku (Andhra Pradesh) |
| 397 | Rayachoti (Andhra Pradesh) | 398 | Virudhunagar (Tamil Nadu) | 399 | Koyilandy (Kerala) | 400 | Jorhat (Assam) |
| 401 | Karur (Tamil Nadu) | 402 | Valparai (Tamil Nadu) | 403 | Srikalahasti (Andhra Pradesh) | 404 | Neyyattinkara (Kerala) |
| 405 | Bapatla (Andhra Pradesh) | 406 | Fatehabad (Haryana) | 407 | Malout (Punjab) | 408 | Sankarankovil (Tamil Nadu) |
| 409 | Tenkasi (Tamil Nadu) | 410 | Ratnagiri (Maharashtra) | 411 | Rabkavi Banhatti (Karnataka) | 412 | Sikandrabad (Uttar Pradesh) |
| 413 | Chaibasa (Jharkhand) | 414 | Chirmiri (Chhattisgarh) | 415 | Palwancha (Telangana) | 416 | Bhawanipatna (Odisha) |
| 417 | Kayamkulam (Kerala) | 418 | Pithampur (Madhya Pradesh) | 419 | Nabha (Punjab) | 420 | Shahabad, Hardoi (Uttar Pradesh) |
| 421 | Dhenkanal (Odisha) | 422 | Uran Islampur (Maharashtra) | 423 | Gopalganj (Bihar) | 424 | Bongaigaon City (Assam) |
| 425 | Palani (Tamil Nadu) | 426 | Pusad (Maharashtra) | 427 | Sopore (Jammu and Kashmir) | 428 | Pilkhuwa (Uttar Pradesh) |
| 429 | Tarn Taran (Punjab) | 430 | Renukoot (Uttar Pradesh) | 431 | Mandamarri (Telangana) | 432 | Shahabad (Karnataka) |
| 433 | Barbil (Odisha) | 434 | Koratla (Telangana) | 435 | Madhubani (Bihar) | 436 | Arambagh (West Bengal) |
| 437 | Gohana (Haryana) | 438 | Ladnu (Rajasthan) | 439 | Pattukkottai (Tamil Nadu) | 440 | Sirsi (Karnataka) |
| 441 | Sircilla (Telangana) | 442 | Tamluk (West Bengal) | 443 | Jagraon (Punjab) | 444 | AlipurdUrban Agglomerationr (West Bengal) |
| 445 | Alirajpur (Madhya Pradesh) | 446 | Tandur (Telangana) | 447 | Naidupet (Andhra Pradesh) | 448 | Tirupathur (Tamil Nadu) |
| 449 | Tohana (Haryana) | 450 | Ratangarh (Rajasthan) | 451 | Dhubri (Assam) | 452 | Masaurhi (Bihar) |
| 453 | Visnagar (Gujarat) | 454 | Vrindavan (Uttar Pradesh) | 455 | Nokha (Rajasthan) | 456 | Nagari (Andhra Pradesh) |
| 457 | Narwana (Haryana) | 458 | Ramanathapuram (Tamil Nadu) | 459 | Ujhani (Uttar Pradesh) | 460 | Samastipur (Bihar) |
| 461 | Laharpur (Uttar Pradesh) | 462 | Sangamner (Maharashtra) | 463 | Nimbahera (Rajasthan) | 464 | Siddipet (Telangana) |
| 465 | Suri (West Bengal) | 466 | Diphu (Assam) | 467 | Jhargram (West Bengal) | 468 | Shirpur-Warwade (Maharashtra) |
| 469 | Tilhar (Uttar Pradesh) | 470 | Sindhnur (Karnataka) | 471 | Udumalaipettai (Tamil Nadu) | 472 | Malkapur (Maharashtra) |
| 473 | Wanaparthy (Telangana) | 474 | Gudur (Andhra Pradesh) | 475 | Kendujhar (Odisha) | 476 | Mandla (Madhya Pradesh) |
| 477 | Mandi (Himachal Pradesh) | 478 | Nedumangad (Kerala) | 479 | North Lakhimpur (Assam) | 480 | Vinukonda (Andhra Pradesh) |
| 481 | Tiptur (Karnataka) | 482 | Gobichettipalayam (Tamil Nadu) | 483 | Sunabeda (Odisha) | 484 | Wani (Maharashtra) |
| 485 | Upleta (Gujarat) | 486 | Narasapuram (Andhra Pradesh) | 487 | Nuzvid (Andhra Pradesh) | 488 | Tezpur (Assam) |
| 489 | Una (Gujarat) | 490 | Markapur (Andhra Pradesh) | 491 | Sheopur (Madhya Pradesh) | 492 | Thiruvarur (Tamil Nadu) |
| 493 | Sidhpur (Gujarat) | 494 | Sahaswan (Uttar Pradesh) | 495 | Suratgarh (Rajasthan) | 496 | Shajapur (Madhya Pradesh) |
| 497 | Rayagada (Odisha) | 498 | Lonavla (Maharashtra) | 499 | Ponnur (Andhra Pradesh) | 500 | Kagaznagar (Telangana) |
| 501 | Gadwal (Telangana) | 502 | Bhatapara (Chhattisgarh) | 503 | Kandukur (Andhra Pradesh) | 504 | Sangareddy (Telangana) |
| 505 | Unjha (Gujarat) | 506 | Lunglei (Mizoram) | 507 | Karimganj (Assam) | 508 | Kannur (Kerala) |
| 509 | Bobbili (Andhra Pradesh) | 510 | Mokameh (Bihar) | 511 | Talegaon Dabhade (Maharashtra) | 512 | Anjangaon (Maharashtra) |
| 513 | Mangrol (Gujarat) | 514 | Sunam (Punjab) | 515 | Gangarampur (West Bengal) | 516 | Thiruvallur (Tamil Nadu) |
| 517 | Tirur (Kerala) | 518 | Rath (Uttar Pradesh) | 519 | Jatani (Odisha) | 520 | Viramgam (Gujarat) |
| 521 | Rajsamand (Rajasthan) | 522 | Yanam (Puducherry) | 523 | Kottayam (Kerala) | 524 | Panruti (Tamil Nadu) |
| 525 | Dhuri (Punjab) | 526 | Namakkal (Tamil Nadu) | 527 | Kasaragod (Kerala) | 528 | Modasa (Gujarat) |
| 529 | Rayadurg (Andhra Pradesh) | 530 | Supaul (Bihar) | 531 | Kunnamkulam (Kerala) | 532 | Umred (Maharashtra) |
| 533 | Bellampalle (Telangana) | 534 | Sibsagar (Assam) | 535 | Mandi Dabwali (Haryana) | 536 | Ottappalam (Kerala) |
| 537 | Dumraon (Bihar) | 538 | Samalkot (Andhra Pradesh) | 539 | Jaggaiahpet (Andhra Pradesh) | 540 | Goalpara (Assam) |
| 541 | Tuni (Andhra Pradesh) | 542 | Lachhmangarh (Rajasthan) | 543 | Bhongir (Telangana) | 544 | Amalapuram (Andhra Pradesh) |
| 545 | Firozpur Cantt. (Punjab) | 546 | Vikarabad (Telangana) | 547 | Thiruvalla (Kerala) | 548 | Sherkot (Uttar Pradesh) |
| 549 | Palghar (Maharashtra) | 550 | Shegaon (Maharashtra) | 551 | Jangaon (Telangana) | 552 | Bheemunipatnam (Andhra Pradesh) |
| 553 | Panna (Madhya Pradesh) | 554 | Thodupuzha (Kerala) | 555 | KathUrban Agglomeration (Jammu and Kashmir) | 556 | Palitana (Gujarat) |
| 557 | Arwal (Bihar) | 558 | Venkatagiri (Andhra Pradesh) | 559 | Kalpi (Uttar Pradesh) | 560 | Rajgarh (Churu) (Rajasthan) |
| 561 | Sattenapalle (Andhra Pradesh) | 562 | Arsikere (Karnataka) | 563 | Ozar (Maharashtra) | 564 | Thirumangalam (Tamil Nadu) |
| 565 | Petlad (Gujarat) | 566 | Nasirabad (Rajasthan) | 567 | Phaltan (Maharashtra) | 568 | Rampurhat (West Bengal) |
| 569 | Nanjangud (Karnataka) | 570 | Forbesganj (Bihar) | 571 | Tundla (Uttar Pradesh) | 572 | BhabUrban Agglomeration (Bihar) |
| 573 | Sagara (Karnataka) | 574 | Pithapuram (Andhra Pradesh) | 575 | Sira (Karnataka) | 576 | Bhadrachalam (Telangana) |
| 577 | Charkhi Dadri (Haryana) | 578 | Chatra (Jharkhand) | 579 | Palasa Kasibugga (Andhra Pradesh) | 580 | Nohar (Rajasthan) |
| 581 | Yevla (Maharashtra) | 582 | Sirhind Fatehgarh Sahib (Punjab) | 583 | Bhainsa (Telangana) | 584 | Parvathipuram (Andhra Pradesh) |
| 585 | Shahade (Maharashtra) | 586 | Chalakudy (Kerala) | 587 | Narkatiaganj (Bihar) | 588 | Kapadvanj (Gujarat) |
| 589 | Macherla (Andhra Pradesh) | 590 | Raghogarh-Vijaypur (Madhya Pradesh) | 591 | Rupnagar (Punjab) | 592 | Naugachhia (Bihar) |
| 593 | Sendhwa (Madhya Pradesh) | 594 | Byasanagar (Odisha) | 595 | Sandila (Uttar Pradesh) | 596 | Gooty (Andhra Pradesh) |
| 597 | Salur (Andhra Pradesh) | 598 | Nanpara (Uttar Pradesh) | 599 | Sardhana (Uttar Pradesh) | 600 | Vita (Maharashtra) |
| 601 | Gumia (Jharkhand) | 602 | Puttur (Karnataka) | 603 | Jalandhar Cantt. (Punjab) | 604 | Nehtaur (Uttar Pradesh) |
| 605 | Changanassery (Kerala) | 606 | Mandapeta (Andhra Pradesh) | 607 | Dumka (Jharkhand) | 608 | Seohara (Uttar Pradesh) |
| 609 | Umarkhed (Maharashtra) | 610 | Madhupur (Jharkhand) | 611 | Vikramasingapuram (Tamil Nadu) | 612 | Punalur (Kerala) |
| 613 | Kendrapara (Odisha) | 614 | Sihor (Gujarat) | 615 | Nellikuppam (Tamil Nadu) | 616 | Samana (Punjab) |
| 617 | Warora (Maharashtra) | 618 | Nilambur (Kerala) | 619 | Rasipuram (Tamil Nadu) | 620 | Ramnagar (Uttarakhand) |
| 621 | Jammalamadugu (Andhra Pradesh) | 622 | Nawanshahr (Punjab) | 623 | Thoubal (Manipur) | 624 | Athni (Karnataka) |
| 625 | Cherthala (Kerala) | 626 | Sidhi (Madhya Pradesh) | 627 | Farooqnagar (Telangana) | 628 | Peddapuram (Andhra Pradesh) |
| 629 | Chirkunda (Jharkhand) | 630 | Pachora (Maharashtra) | 631 | Madhepura (Bihar) | 632 | Pithoragarh (Uttarakhand) |
| 633 | Tumsar (Maharashtra) | 634 | Phalodi (Rajasthan) | 635 | Tiruttani (Tamil Nadu) | 636 | Rampura Phul (Punjab) |
| 637 | Perinthalmanna (Kerala) | 638 | Padrauna (Uttar Pradesh) | 639 | Pipariya (Madhya Pradesh) | 640 | Dalli-Rajhara (Chhattisgarh) |
| 641 | Punganur (Andhra Pradesh) | 642 | Mattannur (Kerala) | 643 | Mathura (Uttar Pradesh) | 644 | Thakurdwara (Uttar Pradesh) |
| 645 | Nandivaram-Guduvancheri (Tamil Nadu) | 646 | Mulbagal (Karnataka) | 647 | Manjlegaon (Maharashtra) | 648 | Wankaner (Gujarat) |
| 649 | Sillod (Maharashtra) | 650 | Nidadavole (Andhra Pradesh) | 651 | Surapura (Karnataka) | 652 | Rajagangapur (Odisha) |
| 653 | Sheikhpura (Bihar) | 654 | Parlakhemundi (Odisha) | 655 | Kalimpong (West Bengal) | 656 | Siruguppa (Karnataka) |
| 657 | Arvi (Maharashtra) | 658 | Limbdi (Gujarat) | 659 | Barpeta (Assam) | 660 | Manglaur (Uttarakhand) |
| 661 | Repalle (Andhra Pradesh) | 662 | Mudhol (Karnataka) | 663 | Shujalpur (Madhya Pradesh) | 664 | Mandvi (Gujarat) |
| 665 | Thangadh (Gujarat) | 666 | Sironj (Madhya Pradesh) | 667 | Nandura (Maharashtra) | 668 | Shoranur (Kerala) |
| 669 | Nathdwara (Rajasthan) | 670 | Periyakulam (Tamil Nadu) | 671 | Sultanganj (Bihar) | 672 | Medak (Telangana) |
| 673 | Narayanpet (Telangana) | 674 | Raxaul Bazar (Bihar) | 675 | Rajauri (Jammu and Kashmir) | 676 | Pernampattu (Tamil Nadu) |
| 677 | Nainital (Uttarakhand) | 678 | Ramachandrapuram (Andhra Pradesh) | 679 | Vaijapur (Maharashtra) | 680 | Nangal (Punjab) |
| 681 | Sidlaghatta (Karnataka) | 682 | Punch (Jammu and Kashmir) | 683 | Pandhurna (Madhya Pradesh) | 684 | Wadgaon Road (Maharashtra) |
| 685 | Talcher (Odisha) | 686 | Varkala (Kerala) | 687 | Pilani (Rajasthan) | 688 | Nowgong (Madhya Pradesh) |
| 689 | Naila Janjgir (Chhattisgarh) | 690 | Vellakoil (Tamil Nadu) | 691 | Merta City (Rajasthan) | 692 | Sivaganga (Tamil Nadu) |
| 693 | Mandideep (Madhya Pradesh) | 694 | Sailu (Maharashtra) | 695 | Vyara (Gujarat) | 696 | Kovvur (Andhra Pradesh) |
| 697 | Vadalur (Tamil Nadu) | 698 | Nawabganj (Uttar Pradesh) | 699 | Padra (Gujarat) | 700 | Sainthia (West Bengal) |
| 701 | Siana (Uttar Pradesh) | 702 | Shahpur (Karnataka) | 703 | Sojat (Rajasthan) | 704 | Noorpur (Uttar Pradesh) |
| 705 | Paravoor (Kerala) | 706 | Murtijapur (Maharashtra) | 707 | Ramnagar (Bihar) | 708 | Sundargarh (Odisha) |
| 709 | Taki (West Bengal) | 710 | Saundatti-Yellamma (Karnataka) | 711 | Pathanamthitta (Kerala) | 712 | Wadi (Karnataka) |
| 713 | Rameshwaram (Tamil Nadu) | 714 | Tasgaon (Maharashtra) | 715 | Sikandra Rao (Uttar Pradesh) | 716 | Sihora (Madhya Pradesh) |
| 717 | Tiruvethipuram (Tamil Nadu) | 718 | Tiruvuru (Andhra Pradesh) | 719 | Mehkar (Maharashtra) | 720 | Peringathur (Kerala) |
| 721 | Perambalur (Tamil Nadu) | 722 | Manvi (Karnataka) | 723 | Zunheboto (Nagaland) | 724 | Mahnar Bazar (Bihar) |
| 725 | Attingal (Kerala) | 726 | Shahbad (Haryana) | 727 | Puranpur (Uttar Pradesh) | 728 | Nelamangala (Karnataka) |
| 729 | Nakodar (Punjab) | 730 | Lunawada (Gujarat) | 731 | Murshidabad (West Bengal) | 732 | Mahe (Puducherry) |
| 733 | Lanka (Assam) | 734 | Rudauli (Uttar Pradesh) | 735 | Tuensang (Nagaland) | 736 | Lakshmeshwar (Karnataka) |
| 737 | Zira (Punjab) | 738 | Yawal (Maharashtra) | 739 | Thana Bhawan (Uttar Pradesh) | 740 | Ramdurg (Karnataka) |
| 741 | Pulgaon (Maharashtra) | 742 | Sadasivpet (Telangana) | 743 | Nargund (Karnataka) | 744 | Neem-Ka-Thana (Rajasthan) |
| 745 | Memari (West Bengal) | 746 | Nilanga (Maharashtra) | 747 | Naharlagun (Arunachal Pradesh) | 748 | Pakaur (Jharkhand) |
| 749 | Wai (Maharashtra) | 750 | Tarikere (Karnataka) | 751 | Malavalli (Karnataka) | 752 | Raisen (Madhya Pradesh) |
| 753 | Lahar (Madhya Pradesh) | 754 | Uravakonda (Andhra Pradesh) | 755 | Savanur (Karnataka) | 756 | Sirohi (Rajasthan) |
| 757 | Udhampur (Jammu and Kashmir) | 758 | Umarga (Maharashtra) | 759 | Pratapgarh (Rajasthan) | 760 | Lingsugur (Karnataka) |
| 761 | Usilampatti (Tamil Nadu) | 762 | Palia Kalan (Uttar Pradesh) | 763 | Wokha (Nagaland) | 764 | Rajpipla (Gujarat) |
| 765 | Vijayapura (Karnataka) | 766 | Rawatbhata (Rajasthan) | 767 | Sangaria (Rajasthan) | 768 | Paithan (Maharashtra) |
| 769 | Rahuri (Maharashtra) | 770 | Patti (Punjab) | 771 | Zaidpur (Uttar Pradesh) | 772 | Lalsot (Rajasthan) |
| 773 | Maihar (Madhya Pradesh) | 774 | Vedaranyam (Tamil Nadu) | 775 | Nawapur (Maharashtra) | 776 | Solan (Himachal Pradesh) |
| 777 | Vapi (Gujarat) | 778 | Sanawad (Madhya Pradesh) | 779 | Warisaliganj (Bihar) | 780 | Revelganj (Bihar) |
| 781 | Sabalgarh (Madhya Pradesh) | 782 | Tuljapur (Maharashtra) | 783 | Simdega (Jharkhand) | 784 | Musabani (Jharkhand) |
| 785 | Kodungallur (Kerala) | 786 | Phulabani (Odisha) | 787 | Umreth (Gujarat) | 788 | Narsipatnam (Andhra Pradesh) |
| 789 | Nautanwa (Uttar Pradesh) | 790 | Rajgir (Bihar) | 791 | Yellandu (Telangana) | 792 | Sathyamangalam (Tamil Nadu) |
| 793 | Pilibanga (Rajasthan) | 794 | Morshi (Maharashtra) | 795 | Pehowa (Haryana) | 796 | Sonepur (Bihar) |
| 797 | Pappinisseri (Kerala) | 798 | Zamania (Uttar Pradesh) | 799 | Mihijam (Jharkhand) | 800 | Purna (Maharashtra) |
| 801 | Puliyankudi (Tamil Nadu) | 802 | Shikarpur, Bulandshahr (Uttar Pradesh) | 803 | Umaria (Madhya Pradesh) | 804 | Porsa (Madhya Pradesh) |
| 805 | Naugawan Sadat (Uttar Pradesh) | 806 | Fatehpur Sikri (Uttar Pradesh) | 807 | Manuguru (Telangana) | 808 | Udaipur (Tripura) |
| 809 | Pipar City (Rajasthan) | 810 | Pattamundai (Odisha) | 811 | Nanjikottai (Tamil Nadu) | 812 | Taranagar (Rajasthan) |
| 813 | Yerraguntla (Andhra Pradesh) | 814 | Satana (Maharashtra) | 815 | Sherghati (Bihar) | 816 | Sankeshwara (Karnataka) |
| 817 | Madikeri (Karnataka) | 818 | Thuraiyur (Tamil Nadu) | 819 | Sanand (Gujarat) | 820 | Rajula (Gujarat) |
| 821 | Kyathampalle (Telangana) | 822 | Shahabad, Rampur (Uttar Pradesh) | 823 | Tilda Newra (Chhattisgarh) | 824 | Narsinghgarh (Madhya Pradesh) |
| 825 | Chittur-Thathamangalam (Kerala) | 826 | Malaj Khand (Madhya Pradesh) | 827 | Sarangpur (Madhya Pradesh) | 828 | Robertsganj (Uttar Pradesh) |
| 829 | Sirkali (Tamil Nadu) | 830 | Radhanpur (Gujarat) | 831 | Tiruchendur (Tamil Nadu) | 832 | Utraula (Uttar Pradesh) |
| 833 | Patratu (Jharkhand) | 834 | Vijainagar, Ajmer (Rajasthan) | 835 | Periyasemur (Tamil Nadu) | 836 | Pathri (Maharashtra) |
| 837 | Sadabad (Uttar Pradesh) | 838 | Talikota (Karnataka) | 839 | Sinnar (Maharashtra) | 840 | Mungeli (Chhattisgarh) |
| 841 | Sedam (Karnataka) | 842 | Shikaripur (Karnataka) | 843 | Sumerpur (Rajasthan) | 844 | Sattur (Tamil Nadu) |
| 845 | Sugauli (Bihar) | 846 | Lumding (Assam) | 847 | Vandavasi (Tamil Nadu) | 848 | Titlagarh (Odisha) |
| 849 | Uchgaon (Maharashtra) | 850 | Mokokchung (Nagaland) | 851 | Paschim Punropara (West Bengal) | 852 | Sagwara (Rajasthan) |
| 853 | Ramganj Mandi (Rajasthan) | 854 | Tarakeswar (West Bengal) | 855 | Mahalingapura (Karnataka) | 856 | Dharmanagar (Tripura) |
| 857 | Mahemdabad (Gujarat) | 858 | Manendragarh (Chhattisgarh) | 859 | Uran (Maharashtra) | 860 | Tharamangalam (Tamil Nadu) |
| 861 | Tirukkoyilur (Tamil Nadu) | 862 | Pen (Maharashtra) | 863 | Makhdumpur (Bihar) | 864 | Maner (Bihar) |
| 865 | Oddanchatram (Tamil Nadu) | 866 | Palladam (Tamil Nadu) | 867 | Mundi (Madhya Pradesh) | 868 | Nabarangapur (Odisha) |
| 869 | Mudalagi (Karnataka) | 870 | Samalkha (Haryana) | 871 | Nepanagar (Madhya Pradesh) | 872 | Karjat (Maharashtra) |
| 873 | Ranavav (Gujarat) | 874 | Pedana (Andhra Pradesh) | 875 | Pinjore (Haryana) | 876 | Lakheri (Rajasthan) |
| 877 | Pasan (Madhya Pradesh) | 878 | Puttur (Andhra Pradesh) | 879 | Vadakkuvalliyur (Tamil Nadu) | 880 | Tirukalukundram (Tamil Nadu) |
| 881 | Mahidpur (Madhya Pradesh) | 882 | Mussoorie (Uttarakhand) | 883 | Muvattupuzha (Kerala) | 884 | Rasra (Uttar Pradesh) |
| 885 | Udaipurwati (Rajasthan) | 886 | Manwath (Maharashtra) | 887 | Adoor (Kerala) | 888 | Uthamapalayam (Tamil Nadu) |
| 889 | Partur (Maharashtra) | 890 | Nahan (Himachal Pradesh) | 891 | Ladwa (Haryana) | 892 | Mankachar (Assam) |
| 893 | Nongstoin (Meghalaya) | 894 | Losal (Rajasthan) | 895 | Sri Madhopur (Rajasthan) | 896 | Ramngarh (Rajasthan) |
| 897 | Mavelikkara (Kerala) | 898 | Rawatsar (Rajasthan) | 899 | Rajakhera (Rajasthan) | 900 | Lar (Uttar Pradesh) |
| 901 | Lal Gopalganj Nindaura (Uttar Pradesh) | 902 | Muddebihal (Karnataka) | 903 | Sirsaganj (Uttar Pradesh) | 904 | Shahpura (Rajasthan) |
| 905 | Surandai (Tamil Nadu) | 906 | Sangole (Maharashtra) | 907 | Pavagada (Karnataka) | 908 | Tharad (Gujarat) |
| 909 | Mansa (Gujarat) | 910 | Umbergaon (Gujarat) | 911 | Mavoor (Kerala) | 912 | Nalbari (Assam) |
| 913 | Talaja (Gujarat) | 914 | Malur (Karnataka) | 915 | Mangrulpir (Maharashtra) | 916 | Soro (Odisha) |
| 917 | Shahpura (Rajasthan) | 918 | Vadnagar (Gujarat) | 919 | Raisinghnagar (Rajasthan) | 920 | Sindhagi (Karnataka) |
| 921 | Sanduru (Karnataka) | 922 | Sohna (Haryana) | 923 | Manavadar (Gujarat) | 924 | Pihani (Uttar Pradesh) |
| 925 | Safidon (Haryana) | 926 | Risod (Maharashtra) | 927 | Rosera (Bihar) | 928 | Sankari (Tamil Nadu) |
| 929 | Malpura (Rajasthan) | 930 | Sonamukhi (West Bengal) | 931 | Shamsabad, Agra (Uttar Pradesh) | 932 | Nokha (Bihar) |
| 933 | PandUrban Agglomeration (West Bengal) | 934 | Mainaguri (West Bengal) | 935 | Afzalpur (Karnataka) | 936 | Shirur (Maharashtra) |
| 937 | Salaya (Gujarat) | 938 | Shenkottai (Tamil Nadu) | 939 | Pratapgarh (Tripura) | 940 | Vadipatti (Tamil Nadu) |
| 941 | Nagarkurnool (Telangana) | 942 | Savner (Maharashtra) | 943 | Sasvad (Maharashtra) | 944 | Rudrapur (Uttar Pradesh) |
| 945 | Soron (Uttar Pradesh) | 946 | Sholingur (Tamil Nadu) | 947 | Pandharkaoda (Maharashtra) | 948 | Perumbavoor (Kerala) |
| 949 | Maddur (Karnataka) | 950 | Nadbai (Rajasthan) | 951 | Talode (Maharashtra) | 952 | Shrigonda (Maharashtra) |
| 953 | Madhugiri (Karnataka) | 954 | Tekkalakote (Karnataka) | 955 | Seoni-Malwa (Madhya Pradesh) | 956 | Shirdi (Maharashtra) |
| 957 | SUrban Agglomerationr (Uttar Pradesh) | 958 | Terdal (Karnataka) | 959 | Raver (Maharashtra) | 960 | Tirupathur (Tamil Nadu) |
| 961 | Taraori (Haryana) | 962 | Mukhed (Maharashtra) | 963 | Manachanallur (Tamil Nadu) | 964 | Rehli (Madhya Pradesh) |
| 965 | Sanchore (Rajasthan) | 966 | Rajura (Maharashtra) | 967 | Piro (Bihar) | 968 | Mudabidri (Karnataka) |
| 969 | Vadgaon Kasba (Maharashtra) | 970 | Nagar (Rajasthan) | 971 | Vijapur (Gujarat) | 972 | Viswanatham (Tamil Nadu) |
| 973 | Polur (Tamil Nadu) | 974 | Panagudi (Tamil Nadu) | 975 | Manawar (Madhya Pradesh) | 976 | Tehri (Uttarakhand) |
| 977 | Samdhan (Uttar Pradesh) | 978 | Pardi (Gujarat) | 979 | Rahatgarh (Madhya Pradesh) | 980 | Panagar (Madhya Pradesh) |
| 981 | Uthiramerur (Tamil Nadu) | 982 | Tirora (Maharashtra) | 983 | Rangia (Assam) | 984 | Sahjanwa (Uttar Pradesh) |
| 985 | Wara Seoni (Madhya Pradesh) | 986 | Magadi (Karnataka) | 987 | Rajgarh (Alwar) (Rajasthan) | 988 | Rafiganj (Bihar) |
| 989 | Tarana (Madhya Pradesh) | 990 | Rampur Maniharan (Uttar Pradesh) | 991 | Sheoganj (Rajasthan) | 992 | Raikot (Punjab) |
| 993 | Pauri (Uttarakhand) | 994 | Sumerpur (Uttar Pradesh) | 995 | Navalgund (Karnataka) | 996 | Shahganj (Uttar Pradesh) |
| 997 | Marhaura (Bihar) | 998 | Tulsipur (Uttar Pradesh) | 999 | Sadri (Rajasthan) | 1000 | Thiruthuraipoondi (Tamil Nadu) |
| 1001 | Shiggaon (Karnataka) | 1002 | Pallapatti (Tamil Nadu) | 1003 | Mahendragarh (Haryana) | 1004 | Sausar (Madhya Pradesh) |
| 1005 | Ponneri (Tamil Nadu) | 1006 | Mahad (Maharashtra) | 1007 | Lohardaga (Jharkhand) | 1008 | Tirwaganj (Uttar Pradesh) |
| 1009 | Margherita (Assam) | 1010 | Sundarnagar (Himachal Pradesh) | 1011 | Rajgarh (Madhya Pradesh) | 1012 | Mangaldoi (Assam) |
| 1013 | Renigunta (Andhra Pradesh) | 1014 | Longowal (Punjab) | 1015 | Ratia (Haryana) | 1016 | Lalgudi (Tamil Nadu) |
| 1017 | Shrirangapattana (Karnataka) | 1018 | Niwari (Madhya Pradesh) | 1019 | Natham (Tamil Nadu) | 1020 | Unnamalaikadai (Tamil Nadu) |
| 1021 | PurqUrban Agglomerationzi (Uttar Pradesh) | 1022 | Shamsabad, Farrukhabad (Uttar Pradesh) | 1023 | Mirganj (Bihar) | 1024 | Todaraisingh (Rajasthan) |
| 1025 | Warhapur (Uttar Pradesh) | 1026 | Rajam (Andhra Pradesh) | 1027 | Urmar Tanda (Punjab) | 1028 | Lonar (Maharashtra) |
| 1029 | Powayan (Uttar Pradesh) | 1030 | P.N.Patti (Tamil Nadu) | 1031 | Palampur (Himachal Pradesh) | 1032 | Srisailam Project (Right Flank Colony) Township (Andhra Pradesh) |
| 1033 | Sindagi (Karnataka) | 1034 | Sandi (Uttar Pradesh) | 1035 | Vaikom (Kerala) | 1036 | Malda (West Bengal) |
| 1037 | Tharangambadi (Tamil Nadu) | 1038 | Sakaleshapura (Karnataka) | 1039 | Lalganj (Bihar) | 1040 | Malkangiri (Odisha) |
| 1041 | Rapar (Gujarat) | 1042 | Mauganj (Madhya Pradesh) | 1043 | Todabhim (Rajasthan) | 1044 | Srinivaspur (Karnataka) |
| 1045 | Murliganj (Bihar) | 1046 | Reengus (Rajasthan) | 1047 | Sawantwadi (Maharashtra) | 1048 | Tittakudi (Tamil Nadu) |
| 1049 | Lilong (Manipur) | 1050 | Rajaldesar (Rajasthan) | 1051 | Pathardi (Maharashtra) | 1052 | Achhnera (Uttar Pradesh) |
| 1053 | Pacode (Tamil Nadu) | 1054 | Naraura (Uttar Pradesh) | 1055 | Nakur (Uttar Pradesh) | 1056 | Palai (Kerala) |
| 1057 | Morinda, India (Punjab) | 1058 | Manasa (Madhya Pradesh) | 1059 | Nainpur (Madhya Pradesh) | 1060 | Sahaspur (Uttar Pradesh) |
| 1061 | Pauni (Maharashtra) | 1062 | Prithvipur (Madhya Pradesh) | 1063 | Ramtek (Maharashtra) | 1064 | Silapathar (Assam) |
| 1065 | Songadh (Gujarat) | 1066 | Safipur (Uttar Pradesh) | 1067 | Sohagpur (Madhya Pradesh) | 1068 | Mul (Maharashtra) |
| 1069 | Sadulshahar (Rajasthan) | 1070 | Phillaur (Punjab) | 1071 | Sambhar (Rajasthan) | 1072 | Prantij (Rajasthan) |
| 1073 | Nagla (Uttarakhand) | 1074 | Pattran (Punjab) | 1075 | Mount Abu (Rajasthan) | 1076 | Reoti (Uttar Pradesh) |
| 1077 | Tenu dam-cum-Kathhara (Jharkhand) | 1078 | Panchla (West Bengal) | 1079 | Sitarganj (Uttarakhand) | 1080 | Pasighat (Arunachal Pradesh) |
| 1081 | Motipur (Bihar) | 1082 | O' Valley (Tamil Nadu) | 1083 | Raghunathpur (West Bengal) | 1084 | Suriyampalayam (Tamil Nadu) |
| 1085 | Qadian (Punjab) | 1086 | Rairangpur (Odisha) | 1087 | Silvassa (Dadra and Nagar Haveli) | 1088 | Nowrozabad (Khodargama) (Madhya Pradesh) |
| 1089 | Mangrol (Rajasthan) | 1090 | Soyagaon (Maharashtra) | 1091 | Sujanpur (Punjab) | 1092 | Manihari (Bihar) |
| 1093 | Sikanderpur (Uttar Pradesh) | 1094 | Mangalvedhe (Maharashtra) | 1095 | Phulera (Rajasthan) | 1096 | Ron (Karnataka) |
| 1097 | Sholavandan (Tamil Nadu) | 1098 | Saidpur (Uttar Pradesh) | 1099 | Shamgarh (Madhya Pradesh) | 1100 | Thammampatti (Tamil Nadu) |
| 1101 | Maharajpur (Madhya Pradesh) | 1102 | Multai (Madhya Pradesh) | 1103 | Mukerian (Punjab) | 1104 | Sirsi (Uttar Pradesh) |
| 1105 | Purwa (Uttar Pradesh) | 1106 | Sheohar (Bihar) | 1107 | Namagiripettai (Tamil Nadu) | 1108 | Parasi (Uttar Pradesh) |
| 1109 | Lathi (Gujarat) | 1110 | Lalganj (Uttar Pradesh) | 1111 | Narkhed (Maharashtra) | 1112 | Mathabhanga (West Bengal) |
| 1113 | Shendurjana (Maharashtra) | 1114 | Peravurani (Tamil Nadu) | 1115 | Mariani (Assam) | 1116 | Phulpur (Uttar Pradesh) |
| 1117 | Rania (Haryana) | 1118 | Pali (Madhya Pradesh) | 1119 | Pachore (Madhya Pradesh) | 1120 | Parangipettai (Tamil Nadu) |
| 1121 | Pudupattinam (Tamil Nadu) | 1122 | Panniyannur (Kerala) | 1123 | Maharajganj (Bihar) | 1124 | Rau (Madhya Pradesh) |
| 1125 | Monoharpur (West Bengal) | 1126 | Mandawa (Rajasthan) | 1127 | Marigaon (Assam) | 1128 | Pallikonda (Tamil Nadu) |
| 1129 | Pindwara (Rajasthan) | 1130 | Shishgarh (Uttar Pradesh) | 1131 | Patur (Maharashtra) | 1132 | Mayang Imphal (Manipur) |
| 1133 | Mhowgaon (Madhya Pradesh) | 1134 | Guruvayoor (Kerala) | 1135 | Mhaswad (Maharashtra) | 1136 | Sahawar (Uttar Pradesh) |
| 1137 | Sivagiri (Tamil Nadu) | 1138 | Mundargi (Karnataka) | 1139 | Punjaipugalur (Tamil Nadu) | 1140 | Kailasahar (Tripura) |
| 1141 | Samthar (Uttar Pradesh) | 1142 | Sakti (Chhattisgarh) | 1143 | Sadalagi (Karnataka) | 1144 | Silao (Bihar) |
| 1145 | Mandalgarh (Rajasthan) | 1146 | Loha (Maharashtra) | 1147 | Pukhrayan (Uttar Pradesh) | 1148 | Padmanabhapuram (Tamil Nadu) |
| 1149 | Belonia (Tripura) | 1150 | Saiha (Mizoram) | 1151 | Srirampore (West Bengal) | 1152 | Talwara (Punjab) |
| 1153 | Puthuppally (Kerala) | 1154 | Khowai (Tripura) | 1155 | Vijaypur (Madhya Pradesh) | 1156 | Takhatgarh (Rajasthan) |
| 1157 | Thirupuvanam (Tamil Nadu) | 1158 | Adra (West Bengal) | 1159 | Piriyapatna (Karnataka) | 1160 | Obra (Uttar Pradesh) |
| 1161 | Adalaj (Gujarat) | 1162 | Nandgaon (Maharashtra) | 1163 | Barh (Bihar) | 1164 | Chhapra (Gujarat) |
| 1165 | Panamattom (Kerala) | 1166 | Niwai (Uttar Pradesh) | 1167 | Bageshwar (Uttarakhand) | 1168 | Tarbha (Odisha) |
| 1169 | Adyar (Karnataka) | 1170 | Narsinghgarh (Madhya Pradesh) | 1171 | Warud (Maharashtra) | 1172 | Asarganj (Bihar) |
| 1173 | Sarsod (Haryana) |  |  |  |  |  |  |

#### Tab: Property Input Fields (2) — hidden tab, in-sheet HISTORY
Earlier draft of the property forms. Form list (row 3): Agent Retail Lease, F&B Lease, F&B Sale, Retail Sale, Office Lease, Office Sale; DEVELOPERS: Retail Lease Single Unit, Retail Sale Single Unit, Retail Sale Multiple Unit, F&B Lease, F&B Sale, Retail Lease Multiple Unit, Office Lease Single/Multiple Unit, Office Sale Single/Multiple Unit, Managed Office Property Lease — every Developer form titled "…Remove"; KEYDEMAND: Retail/Office Lease/Sale Single & Multiple Unit, Managed Property Lease; Managed Space Operator: Managed Office Property, Flex Space; Developer Project Lease/Sale; reference 'All Fields' lists; Developer Projects.

#### Tab: Property Input Fields (3) — hidden tab, in-sheet HISTORY
Second draft: Developer property forms removed; KD multi-unit lease forms marked "Remove"; adds Uploading Flex Property Lease (Keydemand); otherwise as (2). Differences of both hidden tabs vs the current tab follow.

**Text present only in hidden tab "Property Input Fields (2)" (not anywhere in "Property & Project Input Fields")** — 83 distinct values, quoted in full with cell refs:

- "DEVELOPERS" — BB2
- "Developer Project Lease/Sale" — HY2
- "Uploading Retail Property Lease Single Unit (For Developers) Remove" — BB3
- "Uploading Retail Property Sale Single Unit (For Developers)Remove" — BI3
- "Uploading Retail Property Sale Multiple Unit (For Developers) Remove" — BQ3
- "Uploading F&B Property Lease (For Developers) Remove" — BZ3
- "Uploading F&B Property Sale (For Developers) Remove" — CI3
- "Uploading Retail Property Lease Multiple Unit (For Developers) Remove" — CR3
- "Uploading Office Property Lease Single Unit (Developer)Remove" — CZ3
- "Uploading Office Property Lease Multiple Unit (Developer) Remove" — DH3
- "Uploading Office Property Sale Single Unit (Developer) Remove" — DP3
- "Uploading Office Property Sale Multiple Unit (Developer) Remove" — DX3
- "Uploading Managed Office Property Lease (Developer) Remove" — EF3
- "Uploading Retail Property Lease Single Unit (For Keydemand)" — EN3
- "Uploading Retail Property Lease Multiple Unit (For Keydemand)" — EV3
- "Uploading Office Property Lease Single Unit (Keydemand)" — FD3
- "Uploading Office Property Lease Multiple Unit (For Keydemand)" — FL3
- "Uploading Retail Property Sale Single Unit (Keydemand)" — FT3
- "Uploading Retail Property Sale Multiple Unit (Keydemand)" — GB3
- "Uploading Office Property Sale Single Unit (Keydemand)" — GJ3
- "Uploading Office Property Sale Multiple Unit (Keydemand)" — GR3
- "Uploading Managed Property Lease (Keydemand)" — GZ3
- "Uploading Managed Office Property (Managed Space Operator)" — HH3
- "Developer Projects" — JO3
- "Flex Space" — HQ9
- "Enterprise Buyer" — EO10, EW10, FE10, FM10, FU10, GC10, GK10, GS10, HA10
- "Enterprise Buyer, Keydemand, Agent" — EP10, EX10, FF10, FN10, FV10, GD10, GL10, GT10, HB10
- "Transaction Type Lease*" — D12, L12, T12
- "Carpet Area Range in square feet*" — DX12, BR13, CR13, EV14, FL14, GB14, GR14
- "Model*" — HH12
- "Min-Max" — BS13, CS13, DI13, BS14, CS14, DI14, EW14, FM14, GC14, GS14, DY15, EW15 …(+20 more)
- "Carpet Area Range in Square Feet*" — DH13
- "Sale Price*" — DX13, AC14, BJ14, BR14, CI14, T15, AS15, DP15, FT16, GJ16
- "Carpet Area (sq. ft.)* (Single unit)" — BB14, BC55, CA55
- "Rent Amount*" — BZ14, D15, L15
- "Auto calculated if rate per sq.ft. is provide" — CA14, CJ14
- "Rent in Range*" — CR14, DH14, EV15
- "Number of Units*" — DX14, BR15, CR15, DH15, EV16, FL16, GB16, GR16
- "Lease Amount*" — AK15, CZ15, EN15
- "Rent*" — BB15
- "If multiple options are selected, the user can upload multiple rent ranges; otherwise, a single value can be used." — EY15
- "Lease Price in Range*" — FL15
- "Sale Price* in Range*" — GB15, GR15
- "Independent Building, Highstreet, Mall, Mixed Use, Kiosks, Store-in-Store" — CB16, CK16, F17, N17, V17, AE17, BL17, BD18, BT18, CT18, EP18, EX19 …(+2 more)
- "Lease Price*" — FD16
- "Basement, Lower Ground, Upper Ground, Ground, 1st Floor, 2nd Foor, 3rd Floor, 4th Floor, 5th Floor, Above 5" — N18, V18, F19, CT19, EP19, FV20, BD27
- "Basement, Lower Ground, Upper Ground, Ground, 1st Floor,2nd Foor, 3rd Floor, 4th Floor, 5th Floor, Above 5" — AE18, BL18, BT19
- "Fitout status (Furnished)*" — DX18
- "Unfurnished, Furnished" — AM20
- "Floor in Range" — BR20, CR20
- "Floor to Floor" — BS20, CS20, DY22, DI23, FM24, GS24, EW28, GC28
- "Space Condition" — EF20, HH20
- "Ready to move, Warm shell" — EH20
- "Ready to Move, Warm Shell" — HJ20
- "Texxt" — EO21, EO22
- "Ceiling Height in Range*" — CR22, EV24
- "Floor Range" — DX22, DH23, FL24, GR24, EV28, GB28, DY55, GS57, DI58, FM61, GC61, EW67
- "Frontage in Range" — CR23, EV26, CS60, EW66
- "Ceiling Height in Range (ft.)*" — GB24
- "Less than 5 Years, 5 - 10 Years, Beyond 10 Years" — HJ24
- "AC, Cafeteria/Food court, Lift,Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking" — DB25, DJ25, DZ27, DR28
- "AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled,Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking" — CB26, CK26, CT29
- "Frontage in Range (ft.)" — GB26, GC58
- "Lift" — DY27
- "Deposit Range in months" — DH29, DI61
- "Upload" — EG29
- "CCTV Surveillance" — GC29
- "Deposit Range in Months" — CR31, EV32, CS64, EW70
- "(Number with percentage)" — CC32, CU33
- "Dropdown + Text" — EY32
- "The outcome will be in 2 boxes wherever is mentioned as "Range"" — DH35, EV40, CR41, FL41
- "CAM / Maintenance" — FM36
- "Individual/Mutliple" — CI49, BB51, BZ51
- "Radio buttons" — CJ49, BC51, CA51
- "Carpet Area range in square feet" — BR51, GR51
- "Carpet Area Range in square feet" — BS51, GS51
- "Rate per sq. ft. in Range" — DY51, GS52, DI53, GC56, CS58, FM60, EW61
- "On Website" — BB54
- "Ceiling Height in Range (ft.)" — GC57
- "Ceiling Height in Range" — CS59, EW65
- "Property Type" — BZ63
- "Bike/Car parking allotted" — EV64
- "Property Images & Videos*" — CR68, BZ69

**Text present only in hidden tab "Property Input Fields (3)" (not anywhere in "Property & Project Input Fields")** — 55 distinct values, quoted in full with cell refs:

- "Developer Project Lease/Sale" — EZ2
- "Uploading Retail Property Lease Single Unit (For Keydemand)" — BG3
- "Uploading Retail Property Lease Multiple Unit (For Keydemand) Remove" — BP3
- "Uploading Office Property Lease Single Unit (Keydemand)" — BY3
- "Uploading Office Property Lease Multiple Unit (For Keydemand) Remove" — CH3
- "Uploading Retail Property Sale Single Unit (Keydemand)" — CQ3
- "Uploading Retail Property Sale Multiple Unit (Keydemand)" — CZ3
- "Uploading Office Property Sale Single Unit (Keydemand)" — DI3
- "Uploading Office Property Sale Multiple Unit (Keydemand)" — DR3
- "Uploading Flex Property Lease (Keydemand)" — EA3
- "Uploading Managed Office Property (Managed Space Operator)" — EJ3
- "Developer Projects" — GP3
- "Flex Space" — ES9
- "Enterprise Buyer" — BH10, BQ10, BZ10, CI10, CR10, DA10, DJ10, DS10, EB10
- "Enterprise Buyer, Keydemand, Agent" — BI10, BR10, CA10, CJ10, CS10, DB10, DK10, DT10, EC10
- "Transaction Type Lease*" — D12, M12, V12
- "Model*" — EJ12
- "Sale Price*" — AE14, V15, AW15, CQ16, DI16
- "Carpet Area Range in square feet*" — BP14, CH14, CZ14, DR14
- "Min-Max" — BQ14, CI14, DA14, DS14, BQ15, CI15, DA15, DS15, BQ17, CI17, DA17, DS17 …(+5 more)
- "Rent Amount*" — D15, M15
- "Lease Amount*" — AN15, BG15
- "Rent in Range*" — BP15
- "If multiple options are selected, the user can upload multiple rent ranges; otherwise, a single value can be used." — BS15
- "Lease Price in Range*" — CH15
- "Sale Price* in Range*" — CZ15, DR15
- "Retail/F&B/Office" — GR15
- "Number of Units*" — BP16, CH16, CZ16, DR16
- "Lease Price*" — BY16
- "Basement, Lower Ground, Upper Ground, Ground, 1st Floor, 2nd Foor, 3rd Floor, 4th Floor, 5th Floor, Above 5" — O18, X18, F19, BI19, CS20
- "Basement, Lower Ground, Upper Ground, Ground, 1st Floor,2nd Foor, 3rd Floor, 4th Floor, 5th Floor, Above 5" — AG18
- "Unfurnished, Furnished" — AP20
- "Space Condition" — EJ20
- "Ready to Move, Warm Shell" — EL20
- "Texxt" — BH21, BH22
- "Ceiling Height in Range*" — BP24
- "Floor Range" — CH24, DR24, BP28, CZ28, DS57, CI61, DA61, BQ67
- "Floor to Floor" — CI24, DS24, BQ28, DA28
- "Ceiling Height in Range (ft.)*" — CZ24
- "Less than 5 Years, 5 - 10 Years, Beyond 10 Years" — EL24
- "Frontage in Range" — BP26, BQ66
- "Frontage in Range (ft.)" — CZ26, DA58
- "CCTV Surveillance" — DA29
- ""Yes" fields can not be editable after got the response" — EG30, DX33, S34, AB34, AT34, DF34, DO34, CN36, AK37, A38, J38, BD39 …(+4 more)
- "Deposit Range in Months" — BP32, BQ70
- "Dropdown + Text" — BS32
- "CAM / Maintenance" — CI36
- "Who can see your Project*" — GP38
- "The outcome will be in 2 boxes wherever is mentioned as "Range"" — BP40, CH41
- "Carpet Area range in square feet" — DR51
- "Carpet Area Range in square feet" — DS51
- "Rate per sq. ft. in Range" — DS52, DA56, CI60, BQ61
- "Ceiling Height in Range (ft.)" — DA57
- "Bike/Car parking allotted" — BP64
- "Ceiling Height in Range" — BQ65

#### Tab: Demand Input fields
Row 1 = user group, row 2 = form title (+ review date 17-06-2026 in H2), row 3 = column headers.

#### Demand Input fields — Columns A–I: Agent / Uploading Retail Demand Lease (for Agent)

| Row | A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent |  |  |  |  |  |  |  |  |
| 2 | Uploading Retail Demand Lease (for Agent) |  |  |  |  |  |  | 17-06-2026 |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | Himanshu |  |
| 4 |  |  |  | Primary details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 7 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single location selection |
| 9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 12 | Yes | 8 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 13 | Yes | 9 | 10 | Additional Demand Details | Text |  |  | Text box | alpha numeric allowed |
| 14 | Yes | 10 | 9 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 15 |  |  |  | Additional Details |  |  |  |  |  |
| 16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| 19 |  |  |  | Amenities |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| 25 |  |  |  | Transaction |  |  |  |  |  |
| 26 | Yes | 19 | 19 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 27 | Yes | 20 | 20 | Lockin period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less | Text box with suffix | Only Numbers Eg. 11  years |
| 33 |  |  |  | Deleted Fields |  |  |  |  |  |
| 34 |  |  |  | Pincode |  |  |  |  |  |
| 35 |  |  |  | End use |  |  |  |  |  |
| 36 |  |  |  | Rent Budget per sq.ft |  |  |  |  |  |
| 37 |  |  |  | Add Brand Name |  |  |  |  |  |
| 38 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 39 |  |  |  | Ownership |  |  |  |  |  |
| 40 |  |  |  | Age of property |  |  |  |  |  |
| 41 |  |  |  | Required Documents |  |  |  |  |  |
| 42 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 43 |  |  |  | Preferred floor | Floor Preference* |  |  |  |  |
| 44 |  |  |  | Other amenities required | Amenities required |  |  |  |  |
| 45 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 46 |  |  |  | Minimum clear ceiling height in feet | Clear ceiling height |  |  |  |  |
| 47 |  |  |  | Minimum Frontage in feet | Minimum Frontage |  |  |  |  |
| 61 | Demands Office-End Use |  |  |  | Retail End use | FnB |  |  |  |
| 62 | Insurance |  |  |  | Automative showroom | Fine Dining |  |  |  |
| 63 | Agriculture |  |  |  | Banks/ATM | Quick Service Restaurants (QSR) & Fast Food |  |  |  |
| 64 | Automobile |  |  |  | Kiosk | Cafés & Bistros |  |  |  |
| 65 | Aviation |  |  |  | Clinic/Diagnostic center | Pubs, Bars & Lounges |  |  |  |
| 66 | Banking |  |  |  | Clothing store | Banquets & Event Catering |  |  |  |
| 67 | Chemical |  |  |  | Cosmetics store | Cloud Kitchens |  |  |  |
| 68 | Consumer Durables |  |  |  | Electronic store | Cafe |  |  |  |
| 69 | Defence |  |  |  | Footwear store | Restaurant |  |  |  |
| 70 | E-Commerce |  |  |  | Gyms and Fitness Studios |  |  |  |  |
| 71 | Electronics |  |  |  | Jewellery store |  |  |  |  |
| 72 | Energy |  |  |  | Salon |  |  |  |  |
| 73 | Engineering |  |  |  | Pharmacy/Wellness |  |  |  |  |
| 74 | Financial Services |  |  |  | Supermarkets |  |  |  |  |
| 75 | FMCG |  |  |  | Pet Grooming & Daycare |  |  |  |  |
| 76 | Healthcare |  |  |  | Indoor Sports Centers |  |  |  |  |
| 77 | Infrastructure |  |  |  | Entertainment Arcades |  |  |  |  |
| 78 | IT and BPM |  |  |  | Variety store |  |  |  |  |
| 79 | Manufacturing |  |  |  | Home decor |  |  |  |  |
| 80 | Media and Entertainment |  |  |  | Gamezone |  |  |  |  |
| 81 | Oil and Gas |  |  |  | Stationary |  |  |  |  |
| 82 | Other |  |  |  | Cinema |  |  |  |  |
| 83 | Pharmaceuticals |  |  |  | Sports wear |  |  |  |  |
| 84 | Real Estate |  |  |  | Eye wear |  |  |  |  |
| 85 | Science and Technology |  |  |  | Accessories |  |  |  |  |
| 86 | Services |  |  |  | Watch |  |  |  |  |
| 87 | Startup |  |  |  |  |  |  |  |  |
| 88 | Telecommunications |  |  |  |  |  |  |  |  |
| 89 | Textile |  |  |  |  |  |  |  |  |
| 90 | Tourism and Hospitality |  |  |  |  |  |  |  |  |
| 91 | QSR |  |  |  |  |  |  |  |  |
| 92 | Variety stores |  |  |  |  |  |  |  |  |
| 93 | Home Decor |  |  |  |  |  |  |  |  |
| 94 | Game Zone |  |  |  |  |  |  |  |  |
| 95 | Stationery |  |  |  |  |  |  |  |  |
| 96 | Cinema |  |  |  |  |  |  |  |  |
| 97 | Sports Wear |  |  |  |  |  |  |  |  |
| 98 | Eye wear |  |  |  |  |  |  |  |  |
| 99 | Accesorries |  |  |  |  |  |  |  |  |
| 100 | Watch |  |  |  |  |  |  |  |  |

#### Demand Input fields — Columns K–T: Agent / Uploading F&B Demand Lease (For Agent)

| Row | K | L | M | N | O | P | Q | R | S | T |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Agent |  |  |  |  |  |  |
| 2 | Uploading F&B Demand Lease (For Agent) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields |  |  |
| 4 |  |  |  | Primary details |  |  |  | Entire new asset class |  |  |
| 5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 6 | No | 2 | 3 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 7 | No | 3 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 8 | Yes | 4 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 9 | No | 5 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate |  |  |  | Drop Down | Single select |
| 12 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any |  | Multi Select | Radio button | Single select |
| 13 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 14 | Yes | 10 | 10 | Additional Demand Details | Text |  |  |  | Text box | alpha numeric allowed |
| 15 |  |  |  | Additional Details |  |  |  |  |  |  |
| 16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button | Radio button |
| 19 |  |  |  | Amenities |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  | Multi Select | Radio button | Single select |
| 23 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  | Multi Select | Tick box | Multi Select |
| 24 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either |  |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 26 |  |  |  | Transaction |  |  |  |  |  |  |
| 27 | Yes | 20 | 20 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 28 | Yes | 21 | 21 | Lock-in Period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less |  | Text box with suffix | Only Numbers Eg. 11  years |

#### Demand Input fields — Columns V–AE: Agent / Uploading F&B Buy Demand (For F&B Agent)

| Row | V | W | X | Y | Z | AA | AB | AC | AD | AE |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent |  |  |  |  |  |  |  |  |  |
| 2 | Uploading F&B Buy Demand (For F&B Agent) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info |  |  |
| 4 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| 7 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| 8 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 12 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| 13 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 14 | Yes | 10 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| 15 |  |  |  | Additional Details |  |  |  |  |  |  |
| 16 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 17 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| 19 |  |  |  | Amenities |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| 24 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 26 |  |  |  | Documents |  |  |  |  |  |  |
| 27 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Demand Input fields — Columns AG–AO: Agent / Uploading Retail Demand Buy For Agent

| Row | AG | AH | AI | AJ | AK | AL | AM | AN | AO |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Agent |  |  |  |  |  |
| 2 | Uploading Retail Demand Buy For Agent |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 7 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 12 | Yes | 8 | 8 | Budget | Number |  |  | Number |  |
| 13 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 14 | Yes | 10 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 15 | Yes | 11 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 16 |  |  |  | Additional Details |  |  |  |  |  |
| 17 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |
| 21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| 32 |  |  |  | Deleted Fields |  |  |  |  |  |
| 33 |  |  |  | Pincode |  |  |  |  |  |
| 35 |  |  |  | Built up Area |  |  |  |  |  |
| 36 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 37 |  |  |  | Age of property |  |  |  |  |  |
| 38 |  |  |  | Required Documents |  |  |  |  |  |
| 39 |  |  |  | Add Brand Name |  |  |  |  |  |
| 43 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 44 |  |  |  | Preferred floor | Floor Preference* |  |  |  |  |
| 45 |  |  |  | Other amenities required | Amenities required |  |  |  |  |
| 46 |  |  |  | Rate budget Per square feet on carpet area | Budget |  |  |  |  |
| 47 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |

#### Demand Input fields — Columns AR–AZ: Agent / Uploading Office Demand Lease (For Agent)

| Row | AR | AS | AT | AU | AV | AW | AX | AY | AZ |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Agent |  |  |  |  |  |
| 2 | Uploading Office Demand Lease (For Agent) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 7 | No | 3 | 3 | City* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 12 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 13 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 14 |  |  |  | Additional Details |  |  |  |  |  |
| 15 | Yes | 10 | 10 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| 16 |  |  |  | Amenities |  |  |  |  |  |
| 17 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 18 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 19 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 20 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Amenities required | Fire sensors | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 22 |  |  |  | Transaction |  |  |  |  |  |
| 23 | Yes | 16 | 16 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 24 | Yes | 17 | 17 | Lockin period | Number |  | Lock-in period cannot be more than lease period, It can be equal or less | Text box with suffix | Only Numbers Eg. 11  years |
| 29 |  |  | Deleted Fields |  |  |  |  |  |  |
| 30 |  |  | Pincode |  |  |  |  |  |  |
| 32 |  |  | Rent Budget per sq.ft |  |  |  |  |  |  |
| 33 |  |  | Rate per sq. ft. / (Carpet) Autofilled when user provides rent amount and carpet area |  |  |  |  |  |  |
| 34 |  |  | Floor Preference* |  |  |  |  |  |  |
| 35 |  |  | Add Brand Name |  |  |  |  |  |  |
| 36 |  |  | Willing to pay brokerage? |  |  |  |  |  |  |
| 37 |  |  | Required Documents |  |  |  |  |  |  |
| 39 |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 40 |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |  |
| 41 |  |  | Possession needed* from | Possession needed* |  |  |  |  |  |
| 42 |  |  | Fit-out Status | Fitout Status |  |  |  |  |  |
| 47 |  |  |  | Demands Office-End Use |  |  |  |  |  |
| 48 |  |  |  | Insurance |  |  |  |  |  |
| 49 |  |  |  | Agriculture |  |  |  |  |  |
| 50 |  |  |  | Automobile |  |  |  |  |  |
| 51 |  |  |  | Aviation |  |  |  |  |  |
| 52 |  |  |  | Banking |  |  |  |  |  |
| 53 |  |  |  | Chemical |  |  |  |  |  |
| 54 |  |  |  | Consumer Durables |  |  |  |  |  |
| 55 |  |  |  | Defence |  |  |  |  |  |
| 56 |  |  |  | E-Commerce |  |  |  |  |  |
| 57 |  |  |  | Electronics |  |  |  |  |  |
| 58 |  |  |  | Energy |  |  |  |  |  |
| 59 |  |  |  | Engineering |  |  |  |  |  |
| 60 |  |  |  | Financial Services |  |  |  |  |  |
| 61 |  |  |  | FMCG |  |  |  |  |  |
| 62 |  |  |  | Healthcare |  |  |  |  |  |
| 63 |  |  |  | Infrastructure |  |  |  |  |  |
| 64 |  |  |  | IT and BPM |  |  |  |  |  |
| 65 |  |  |  | Manufacturing |  |  |  |  |  |
| 66 |  |  |  | Media and Entertainment |  |  |  |  |  |
| 67 |  |  |  | Oil and Gas |  |  |  |  |  |
| 68 |  |  |  | Other |  |  |  |  |  |
| 69 |  |  |  | Pharmaceuticals |  |  |  |  |  |
| 70 |  |  |  | Real Estate |  |  |  |  |  |
| 71 |  |  |  | Science and Technology |  |  |  |  |  |
| 72 |  |  |  | Services |  |  |  |  |  |
| 73 |  |  |  | Startup |  |  |  |  |  |
| 74 |  |  |  | Telecommunications |  |  |  |  |  |
| 75 |  |  |  | Textile |  |  |  |  |  |
| 76 |  |  |  | Tourism and Hospitality |  |  |  |  |  |

#### Demand Input fields — Columns BC–BK: Agent / Uploading Office Demand Buy (For Agents)

| Row | BC | BD | BE | BF | BG | BH | BI | BJ | BK |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Agent |  |  |  |  |  |
| 2 | Uploading Office Demand Buy (For Agents) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 7 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 8 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 9 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 10 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 11 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 12 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 13 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 14 |  |  |  | Additional Details |  |  |  |  |  |
| 15 | Yes | 10 | 10 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| 16 |  |  |  | Amenities |  |  |  |  |  |
| 17 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 18 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 19 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 20 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 27 |  |  |  | Deleted Fields |  |  |  |  |  |
| 28 |  |  |  | Pincode |  |  |  |  |  |
| 30 |  |  |  | Built up Area in sq.ft |  |  |  |  |  |
| 31 |  |  |  | End Use |  |  |  |  |  |
| 32 |  |  |  | Rate per sq. ft. / (Carpet) Autofilled when user provides rent amount and carpet area |  |  |  |  |  |
| 33 |  |  |  | Floor |  |  |  |  |  |
| 34 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 35 |  |  |  | Required Documents |  |  |  |  |  |
| 38 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 39 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |
| 40 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 41 |  |  |  | Rent budget per square feet on carpet area | Rent Budget per sq.ft |  |  |  |  |
| 42 |  |  |  | Fit-out Status | Fitout Status |  |  |  |  |

#### Demand Input fields — Columns BN–BU: Agent (Remove) / Flex Lease

| Row | BN | BO | BP | BQ | BR | BS | BT | BU |
|---|---|---|---|---|---|---|---|---|
| 1 |  | Agent (Remove) |  |  |  |  |  |  |
| 2 |  | Flex Lease |  |  |  |  |  |  |
| 3 |  |  |  | Drop Down | Add/Upload Form Order | View Page Order | Can  be edited-Yes/No | Additional |
| 4 | Primary Details | Property type* | Managed Office |  | 2 |  |  |  |
| 5 |  | Transaction type* | Lease |  | 1 |  |  |  |
| 6 |  | City* | Dropdown plus search |  | 3 |  |  |  |
| 7 |  | Pincode | 6 Digit Number |  | 4 |  |  |  |
| 8 |  | Location* | Text |  | 5 |  |  |  |
| 9 |  | Possession needed* | Immediate | Immediate, Within 3 Months | 6 |  |  |  |
| 10 |  | Add Company Name | Text box |  | 7 |  |  |  |
| 11 | Formats (Adding one format mandatory) | Dedicated desk | Number of seats |  | 8 |  |  |  |
| 12 |  | Budget per seat | Min - Max |  | 9 |  |  |  |
| 13 |  | Flexi desk | Number of seats |  | 10 |  |  |  |
| 14 |  | Budget per seat | Min - Max |  | 11 |  |  |  |
| 15 |  | Meeting rooms | Number of seats |  | 12 |  |  |  |
| 16 |  | Budget per seat | Min - Max |  | 13 |  |  |  |
| 17 |  | Managed Offices | Number of seats |  | 14 |  |  |  |
| 18 |  | Budget per seat | Min - Max |  | 15 |  |  |  |
| 19 |  | Cabins | Number of seats |  | 16 |  |  |  |
| 20 |  | Budget per seat | Min - Max |  | 17 |  |  |  |
| 21 | Additional Details | Amenities required | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and Pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi | 18 |  |  |  |
| 22 |  | Bike parking required | Yes | Yes, No | 19 |  |  |  |
| 23 |  | Car parking required | Yes | Yes, No | 20 |  |  |  |
| 24 |  | Other/Additional information | Text box |  | 21 |  |  |  |
| 27 |  | Deleted Fields |  |  |  |  |  |  |
| 28 |  | Pincode |  |  |  |  |  |  |
| 29 |  | Other interested Location*s |  |  |  |  |  |  |
| 33 |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 34 |  | Needed From | Possession needed* |  |  |  |  |  |
| 35 |  | Other Requirements/Additional Information | Other/Additional information |  |  |  |  |  |
| 40 |  | 24/7 security |  |  |  |  |  |  |
| 41 |  | Cafeteria/Food court |  |  |  |  |  |  |
| 42 |  | Cleaning services |  |  |  |  |  |  |
| 43 |  | Conference rooms |  |  |  |  |  |  |
| 44 |  | Enhanced Hvac Standards |  |  |  |  |  |  |
| 45 |  | Event spaces |  |  |  |  |  |  |
| 46 |  | F & B market |  |  |  |  |  |  |
| 47 |  | Game lounge |  |  |  |  |  |  |
| 48 |  | Hand sanitzers |  |  |  |  |  |  |
| 49 |  | IT Services |  |  |  |  |  |  |
| 50 |  | Lift |  |  |  |  |  |  |
| 51 |  | Mail and pacakage handling |  |  |  |  |  |  |
| 52 |  | Onsite staff |  |  |  |  |  |  |
| 53 |  | Outdoor space |  |  |  |  |  |  |
| 54 |  | Pantry |  |  |  |  |  |  |
| 55 |  | Parking |  |  |  |  |  |  |
| 56 |  | Pet-friendly |  |  |  |  |  |  |
| 57 |  | Phone booths |  |  |  |  |  |  |
| 58 |  | Power backup |  |  |  |  |  |  |
| 59 |  | Printing and Stationary |  |  |  |  |  |  |
| 60 |  | Professional and Social Events |  |  |  |  |  |  |
| 61 |  | Projector |  |  |  |  |  |  |
| 62 |  | Quiet space |  |  |  |  |  |  |
| 63 |  | Server rooms |  |  |  |  |  |  |
| 64 |  | Washroom |  |  |  |  |  |  |
| 65 |  | Wellness room |  |  |  |  |  |  |
| 66 |  | Whiteboard |  |  |  |  |  |  |
| 67 |  | WiFi |  |  |  |  |  |  |

#### Demand Input fields — Columns BW–CC: Brand / Uploading Retal Lease Demand (For Retail Brand)

| Row | BW | BX | BY | BZ | CA | CB | CC |
|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  | Brand |  |  |
| 2 | Uploading Retal Lease Demand (For Retail Brand) |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |
| 4 |  |  |  | Primary Details |  |  |  |
| 5 |  |  |  | Select Brand (Formats) |  |  | Only for Enterprise Brands with multiple brands |
| 6 | No | 1 | 1 | Asset Class* | Retail |  |  |
| 7 | No | 2 | 2 | Transaction type* | Lease |  |  |
| 8 | No | 3 | 3 | City* | Dropdown plus search |  |  |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  |
| 10 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |
| 12 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |
| 13 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |
| 14 | Yes | 9 | 10 | Additional demand details | Text |  |  |
| 15 | Yes | 10 | 9 | Floor Preference* | Ground | Ground, Any |  |
| 16 |  |  |  | Additional Details |  |  |  |
| 17 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |
| 18 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |
| 19 | Yes | 13 | 13 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button |
| 20 |  |  |  | Amenities |  |  |  |
| 21 | Yes | 14 | 14 | Fitouts required | Yes | Yes, No |  |
| 22 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |
| 23 | Yes | 16 | 16 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |
| 24 | Yes |  |  | Transaction |  |  |  |
| 25 | Yes | 17 | 17 | Lease tenure in years | Number |  |  |
| 26 | Yes | 18 | 18 | Lockin period | Number |  |  |
| 32 | When they are onboarded and then click post a demand, these may come |  |  |  |  |  |  |
| 37 |  |  |  |  | Deleted Fields |  |  |
| 38 |  |  |  |  | Pincode |  |  |
| 40 |  |  |  |  | End use |  |  |
| 41 |  |  |  |  | Rent Budget per sq.ft |  |  |
| 42 |  |  |  |  | Add Brand Name |  |  |
| 43 |  |  |  |  | Willing to pay brokerage? |  |  |
| 44 |  |  |  |  | Ownership |  |  |
| 45 |  |  |  |  | Age of property |  |  |
| 46 |  |  |  |  | Required Documents |  |  |
| 48 |  |  |  |  | On Website- V1 | New Field Name-V2 |  |
| 49 |  |  |  |  | Possession needed* from | Possession needed* |  |
| 50 |  |  |  |  | Preferred floor | Floor |  |
| 51 |  |  |  |  | Other amenities required | Amenities required |  |
| 52 |  |  |  |  | Minimum clear ceiling height in feet | Clear ceiling height |  |
| 53 |  |  |  |  | Minimum Frontage in feet | Frontage |  |

#### Demand Input fields — Columns CE–CF: (untitled block)

| Row | CE | CF |
|---|---|---|
| 6 | Radio button | Single select |
| 7 | Radio button | Single select |
| 8 | Search with auto fill | Single city selection |
| 9 | Search with auto fill | Single city selection |
| 10 | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Drop Down | Single select |
| 13 | Radio button | Single select |
| 14 | Text box | alpha numeric allowed |
| 15 | Radio button | Single select |
| 17 | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Radio button | Radio button |
| 21 | Radio button | Single select |
| 22 | Radio button | Single select |
| 23 | Tick box | Multi Select |
| 25 | Text box with suffix | Only Numbers Eg. 11  years |
| 26 | Text box with suffix | Only Numbers Eg. 11  years |

#### Demand Input fields — Columns CI–CR: Brand / Uploading F&B Lease Demand (For F&B Brand)

| Row | CI | CJ | CK | CL | CM | CN | CO | CP | CQ | CR |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Brand |  |  |  |  |  |  |  |  |  |
| 2 | Uploading F&B Lease Demand (For F&B Brand) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info |  |  |
| 4 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| 5 |  |  |  | Select Brand (Formats) |  |  |  | Only for Enterprise Brands with multiple brands |  |  |
| 6 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 7 | No | 2 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| 8 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 5 | 5 | Other interested Location | Drop Down + Search | Lease |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 13 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| 14 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 15 | Yes | 9 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| 16 |  |  |  | Additional Details |  |  |  |  |  |  |
| 17 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |  |
| 21 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| 25 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| 26 | Yes | 18 | 18 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 27 |  |  |  | Transaction |  |  |  |  |  |  |
| 28 | Yes | 20 | 20 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 29 | Yes | 21 | 21 | Lock-in Period | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |

#### Demand Input fields — Columns CU–DD: Brand / Uploading F&B Buy Demand (For F&B Brand)

| Row | CU | CV | CW | CX | CY | CZ | DA | DB | DC | DD |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Brand |  |  |  |  |  |  |  |  |  |
| 2 | Uploading F&B Buy Demand (For F&B Brand) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info |  |  |
| 4 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| 5 |  |  |  | Select Brand (Formats) |  |  |  | Only for Enterprise Brands with multiple brands |  |  |
| 6 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 7 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| 8 | No | 3 | 3 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 13 | Yes | 9 | 9 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| 14 | Yes | 8 | 8 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 15 | Yes | 10 | 10 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| 16 |  |  |  | Additional Details |  |  |  |  |  |  |
| 17 | Yes | 11 | 11 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 12 | 12 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |  |
| 21 | Yes | 14 | 14 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| 25 | Yes | 17 | 17 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| 26 | Yes | 18 | 18 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 27 |  |  |  | Documents |  |  |  |  |  |  |
| 28 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Demand Input fields — Columns DG–DO: Brand Individual Demand - During Login- Quick Journey / Uploading F&B and Retail Demand (Lease/Buy) for Individual Brands

| Row | DG | DH | DI | DJ | DK | DL | DM | DN | DO |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Brand Individual Demand - During Login- Quick Journey |  |  |  |  |  |
| 2 | Uploading F&B and Retail Demand (Lease/Buy) for Individual Brands |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 | No | 1 | 1 | Asset Class* | Retail /F&B |  |  | Radio button | Single select |
| 5 | No | 2 | 2 | Transaction type* | Lease/Buy |  |  | Radio button | Single select |
| 6 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 7 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 8 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 9 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 10 | Yes | 7 | 7 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 11 | Yes | 8 | 8 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 12 | Yes | 9 | 9 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 13 | Yes | 10 | 10 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| 15 | Quick journey when they come in - quick turnaround |  |  |  |  |  |  |  |  |

#### Demand Input fields — Columns DR–DZ: Brand / Uploading Retail Demand Buy (For Retail Brand)

| Row | DR | DS | DT | DU | DV | DW | DX | DY | DZ |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Brand |  |  |  |  |  |
| 2 | Uploading Retail Demand Buy (For Retail Brand) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 |  |  |  | Select Brand (Formats) |  |  | Only for Enterprise Brands with multiple brands |  |  |
| 6 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| 7 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 8 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 5 | 5 | Other interested Location | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 8 | 8 | Budget | Number |  |  | Number with commas & suffix |  |
| 14 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 15 | Yes | 10 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 16 | Yes | 11 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 17 |  |  |  | Additional Details |  |  |  |  |  |
| 18 | Yes | 12 | 12 | Clear Ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 20 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button |
| 21 |  |  |  | Amenities |  |  |  |  |  |
| 22 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| 25 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| 26 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| 27 |  |  |  | Documents |  |  |  |  |  |
| 28 | Yes | 20 | 20 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  | Tick box | Multi Select |
| 38 |  |  |  | Deleted Fields |  |  |  |  |  |
| 39 |  |  |  | Pincode |  |  |  |  |  |
| 41 |  |  |  | Built up Area |  |  |  |  |  |
| 42 |  |  |  | Add Brand Name |  |  |  |  |  |
| 43 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 44 |  |  |  | Age of property |  |  |  |  |  |
| 47 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 48 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 49 |  |  |  | Preferred floor | Floor |  |  |  |  |
| 50 |  |  |  | Other amenities required | Amenities required |  |  |  |  |
| 51 |  |  |  | Rent budget per square feet on carpet area | Budget |  |  |  |  |
| 52 |  |  |  | Minimum clear ceiling height in feet | Clear ceiling height |  |  |  |  |
| 53 |  |  |  | Minimum Frontage in feet | Frontage |  |  |  |  |

#### Demand Input fields — Columns EE–EM: Office Tenant / Uploading Office Demand Lease (Office Tenant)

| Row | EE | EF | EG | EH | EI | EJ | EK | EL | EM |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Office Tenant |  |  |  |  |  |
| 2 | Uploading Office Demand Lease (Office Tenant) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop down | Additional Info |  |  |
| 5 |  |  |  | Primary Details |  |  |  |  |  |
| 6 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 7 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 8 | No | 3 | 3 | City* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 5 | 5 | Other interested locations | Text+Autofil |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 7 | 8 | Budget | Number |  |  | Number |  |
| 13 | Yes | 8 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 14 | Yes | 9 | 10 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 15 | Yes | 10 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 16 |  |  |  | Additional Details |  |  |  |  |  |
| 17 | Yes | 11 | 11 | Age of property | 5 - 10 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any |  | Drop Down | Single select |
| 18 |  |  |  | Amenities |  |  |  |  |  |
| 19 | Yes | 12 | 12 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 20 | Yes | 13 | 13 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 21 | Yes | 14 | 14 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 22 | Yes | 15 | 15 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 24 |  |  |  | Transaction |  |  |  |  |  |
| 25 | Yes | 17 | 17 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 26 | Yes | 18 | 18 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 27 |  |  |  | Documents |  |  |  |  |  |
| 28 | Yes | 19 | 19 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  | Tick box | Multi Select |
| 33 | "Yes" fields can not be editable after got the response |  |  | Deleted Fields |  |  |  |  |  |
| 34 |  |  |  | Pincode |  |  |  |  |  |
| 36 |  |  |  | Rent Budget per sq.ft |  |  |  |  |  |
| 37 |  |  |  | Rate per sq. ft. / (Carpet) Autofilled when user provides rent amount and carpet area |  |  |  |  |  |
| 38 |  |  |  | Floor Preference* |  |  |  |  |  |
| 39 |  |  |  | Add Brand Name |  |  |  |  |  |
| 40 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 41 |  |  |  | Required Documents |  |  |  |  |  |
| 44 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 45 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |
| 46 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 47 |  |  |  | Rent budget per square feet on carpet area | Rent Budget per sq.ft |  |  |  |  |
| 48 |  |  |  | Fit-out Status | Fitout Status |  |  |  |  |
| 49 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |

#### Demand Input fields — Columns EP–EX: Office Tenant / Uploading Office Demand Buy (Office Tenant)

| Row | EP | EQ | ER | ES | ET | EU | EV | EW | EX |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Office Tenant |  |  |  |  |  |
| 2 | Uploading Office Demand Buy (Office Tenant) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop down | Additional Info |  |  |
| 5 |  |  |  | Primary Details |  |  |  |  |  |
| 6 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 7 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 8 | No | 3 | 3 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 4 | 4 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 5 | 5 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 6 | 6 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 8 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 14 | Yes | 9 | 8 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 15 |  |  |  | Additional Details |  |  |  |  |  |
| 16 | Yes | 10 | 10 | Age of property | Less than 5 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any |  | Drop Down | Single select |
| 17 |  |  |  | Amenities |  |  |  |  |  |
| 18 | Yes | 11 | 11 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 19 | Yes | 12 | 12 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 20 | Yes | 13 | 13 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 21 | Yes | 14 | 14 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 22 | Yes | 15 | 15 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 23 |  |  |  | Documents |  |  |  |  |  |
| 24 | Yes | 16 | 16 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses | Floor Plan, Autocad, Fire NOC, Other Licenses | Tick box | Multi Select |
| 28 |  |  |  | Deleted Fields |  |  |  |  |  |
| 29 |  |  |  | Pincode |  |  |  |  |  |
| 30 |  |  |  | Other interested Location*s |  |  |  |  |  |
| 33 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 34 |  |  |  | Possession needed from* | Possession needed* |  |  |  |  |
| 35 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |
| 36 |  |  |  | Rent budget per square feet on carpet area | Rent Budget per sq.ft |  |  |  |  |
| 37 |  |  |  | Fit-out Status | Fitout Status |  |  |  |  |

#### Demand Input fields — Columns FB–FI: Brand / Flex Tenant / Drop Down / Add/Upload Form Order / View Page Order / Can  be edited-Yes/No / Additional

| Row | FB | FC | FD | FE | FF | FG | FH | FI |
|---|---|---|---|---|---|---|---|---|
| 1 |  | Brand |  |  |  |  |  |  |
| 2 |  | Flex Tenant |  | Drop Down | Add/Upload Form Order | View Page Order | Can  be edited-Yes/No | Additional |
| 3 |  | Show Brand | Check Box for Yes/No |  | 1 | 1 | Yes |  |
| 4 | Primary Details | Property type* | Flex Space |  | 2 | 2 | No |  |
| 5 |  | Transaction type* | Lease |  | 3 | 3 | No |  |
| 6 |  | City* | Dropdown plus search |  | 4 | 4 | No |  |
| 7 |  | Location* | Text |  | 6 | 5 | No |  |
| 8 |  | Possession needed* | Immediate | Immediate, Within 3 months | 5 | 6 | No |  |
| 9 |  |  |  |  | 7 | 7 |  |  |
| 11 | Formats (Adding one format mandatory) | Dedicated desk | Number of seats |  | 9 | 8 |  |  |
| 12 |  | Budget per seat | Min - Max |  | 10 | 9 |  |  |
| 13 |  | Flexi desk | Number of seats |  | 11 | 10 |  |  |
| 14 |  | Budget per seat | Min - Max |  | 12 | 11 |  |  |
| 15 |  | Meeting rooms | Number of seats |  | 13 | 12 |  |  |
| 16 |  | Budget per seat | Min - Max |  | 14 | 13 |  |  |
| 17 |  | Managed Offices | Number of seats |  | 15 | 14 |  |  |
| 18 |  | Budget per seat | Min - Max |  | 16 | 15 |  |  |
| 19 |  | Cabins | Number of seats |  | 17 | 16 |  |  |
| 20 |  | Budget per seat | Min - Max |  | 18 | 17 |  |  |
| 21 | Additional Details | Amenities required | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and Pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi | 19 | 18 |  |  |
| 22 |  | Bike parking required | Yes/No | Yes, No | 20 | 19 |  |  |
| 23 |  | Car parking required | Yes/No | Yes, No | 21 | 20 |  |  |
| 24 |  | Other/Additional information | Text box |  | 8 | 21 |  |  |
| 26 |  | Deleted Fields |  |  |  |  |  |  |
| 27 |  | Pincode |  |  |  |  |  |  |
| 28 |  | Other interested Location*s |  |  |  |  |  |  |
| 30 |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 31 |  | Needed From | Possession needed* |  |  |  |  |  |
| 32 |  | Other Requirements/Additional Information | Other/Additional information |  |  |  |  |  |

#### Demand Input fields — Columns FL–FS: Managed Space Occupier - During Login- Quick Journey + Detailed Journey / Uploading Managed Space Demand (Managed Office)

| Row | FL | FM | FN | FO | FP | FQ | FR | FS |
|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Managed Space Occupier - During Login- Quick Journey + Detailed Journey |  |  |  |  |
| 2 |  |  |  | Uploading Managed Space Demand (Managed Office) |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down |  |  |
| 4 | No | 1 | 1 | Asset Class* | Managed Space |  | Radio button | Single select |
| 5 | No | 2 | 2 | Transaction type* | Lease |  | Radio button | Single select |
| 6 | No | 3 | 3 | City* | Dropdown plus search |  | Search with auto fill | Single city selection |
| 7 | Yes | 4 | 4 | Other interested locations | Drop Down + Search |  | Search with auto fill | Multiple locations can be added upto 3 |
| 8 | No | 5 | 5 | Location* | Drop Down + Search |  | Search with auto fill | Single city selection |
| 9 | Yes | 6 | 6 | Possession needed* | Within 3 months | Immediate, Within 3 months | Drop Down | Single select |
| 10 | Yes | 7 | 7 | Number of seats* | Number field | Number fields (only accept more than 20 seats) | Number |  |
| 12 | This would not be shown to any users except Keydemand team |  |  |  |  |  |  |  |
| 13 | These requirements will be sent to KD team and Admin team as a requirement |  |  |  |  |  |  |  |
| 15 | Quick journey when they come in - quick turnaround |  |  |  | Property cam charges from office side |  |  |  |

#### Demand Input fields — Columns FV–GD: Keydemand / Uploading Retail Lease Demand for (Keydemand)

| Row | FV | FW | FX | FY | FZ | GA | GB | GC | GD |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Keydemand |  |  |  |  |  |
| 2 | Uploading Retail Lease Demand for (Keydemand) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 9 | 9 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 14 | Yes | 10 | 11 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 15 | Yes | 11 | 10 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 16 |  |  |  | Additional Details |  |  |  |  |  |
| 17 | Yes | 12 | 12 | Clear ceiling height | Number (In feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Frontage in feet | Number (In feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 14 | 14 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |
| 21 | Yes | 15 | 15 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| 26 |  |  |  | Transaction |  |  |  |  |  |
| 27 | Yes | 20 | 20 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 28 | Yes | 21 | 21 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 32 |  |  |  | Deleted Fields |  |  |  |  |  |
| 33 |  |  |  | Pincode |  |  |  |  |  |
| 35 |  |  |  | End use |  |  |  |  |  |
| 36 |  |  |  | Rent Budget per sq.ft |  |  |  |  |  |
| 37 |  |  |  | Add Brand Name |  |  |  |  |  |
| 38 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 39 |  |  |  | Ownership |  |  |  |  |  |
| 40 |  |  |  | Age of property |  |  |  |  |  |
| 41 |  |  |  | Required Documents |  |  |  |  |  |
| 43 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 44 |  |  |  | Preferred floor | Floor Preference* |  |  |  |  |
| 45 |  |  |  | Other amenities required | Amenities required |  |  |  |  |
| 46 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 47 |  |  |  | Minimum clear ceiling height in feet | Clear ceiling height |  |  |  |  |
| 48 |  |  |  | Minimum Frontage in feet | Minimum Frontage |  |  |  |  |

#### Demand Input fields — Columns GH–GQ: Keydemand / Uploading F&B Demand Lease (For Keydemand)

| Row | GH | GI | GJ | GK | GL | GM | GN | GO | GP | GQ |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  | Keydemand |  |  |  |  |  |  |
| 2 | Uploading F&B Demand Lease (For Keydemand) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields |  |  |
| 4 |  |  |  | Primary details |  |  |  | Entire new asset class |  |  |
| 5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction Type * | Lease | Lease |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent |  | Not visible at user end | Not visible at user end |  |
| 8 | No | 4 | 4 | City * | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Text |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 13 | Yes | 10 | 10 | Floor Preference* | Ground | Ground, Any |  | Multi Select | Radio button | Single select |
| 14 | Yes | 9 | 9 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 15 | Yes | 11 | 11 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| 16 |  |  |  | Additional Details |  |  |  |  |  |  |
| 17 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 14 | 14 | Store Type* | Highstreet | Highstreet, Mall, Any |  | Radio button | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |  |
| 21 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 19 | 19 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 17 | 17 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  | Multi Select | Tick box | Multi Select |
| 25 | Yes | 18 | 18 | Cooking Type Required | Electric | Electric, Gas |  | Multi Select | Radio button | Single select |
| 26 | Yes | 20 | 20 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 27 |  |  |  | Transaction |  |  |  |  |  |  |
| 28 | Yes | 21 | 21 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 29 | Yes | 22 | 22 | Lock-in Period | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |

#### Demand Input fields — Columns GU–HD: Keydemand / Uploading F&B Buy Demand (For F&B Keydemand)

| Row | GU | GV | GW | GX | GY | GZ | HA | HB | HC | HD |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Keydemand |  |  |  |  |  |  |  |  |  |
| 2 | Uploading F&B Buy Demand (For F&B Keydemand) |  |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | V2 New Fields | Additional Info |  |  |
| 4 |  |  |  | Primary details |  |  | Entire new asset class |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | F&B |  |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction Type * | Buy | Buy |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent |  | Not visible at user end | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested Location | Drop Down + Search |  |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 9 | 9 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 13 | Yes | 8 | 8 | Floor Preference* | Ground | Ground, Any | Multi Select |  | Radio button | Single select |
| 14 | Yes | 10 | 10 | OC required | Yes | Yes, No |  |  | Radio button | Single select |
| 15 | Yes | 11 | 11 | Additional demand details | Text |  |  |  | Text box | alpha numeric allowed |
| 16 |  |  |  | Additional Details |  |  |  |  |  |  |
| 17 | Yes | 12 | 12 | Clear ceiling height | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 18 | Yes | 13 | 13 | Frontage in feet | Number (in feet) |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 14 | 14 | Store Type* | Highstreet | Highstreet, Mall, Any | Radio button |  | Radio button | Radio button |
| 20 |  |  |  | Amenities |  |  |  |  |  |  |
| 21 | Yes | 15 | 15 | Toilet required | Yes | Yes, No |  |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 19 | 19 | Parking required | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 17 | 17 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| 25 | Yes | 18 | 18 | Cooking Type | Electric | Electric, Gas, Either | Multi Select |  | Radio button | Single select |
| 26 | Yes | 20 | 20 | Non-Veg Served | Yes | Yes, No |  |  | Radio button | Single select |
| 27 |  |  |  | Documents |  |  |  |  |  |  |
| 28 | Yes | 21 | 21 | Required Documents | Floor Plan | Floor Plan, Autocad, Fire NOC, Other Licenses |  |  | Tick box | Multi Select |

#### Demand Input fields — Columns HH–HP: Keydemand / Uploading Retail Buy Demand (Keydemand)

| Row | HH | HI | HJ | HK | HL | HM | HN | HO | HP |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  | Keydemand |  |  |  |  |  |  |
| 2 | Uploading Retail Buy Demand (Keydemand) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Retail |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 9 | 9 | Budget | Number |  |  | Number |  |
| 14 | Yes | 10 | 10 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 15 | Yes | 11 | 12 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 16 | Yes | 12 | 11 | Floor Preference* | Ground | Ground, Any |  | Radio button | Single select |
| 17 |  |  |  | Additional Details |  |  |  |  |  |
| 18 | Yes | 13 | 13 | Clear ceiling height | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 19 | Yes | 14 | 14 | Frontage in feet | Number (in feet) |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 20 | Yes | 15 | 15 | Store type* | Highstreet | Highstreet, Mall, Any | Radio button | Radio button | Radio button |
| 21 |  |  |  | Amenities |  |  |  |  |  |
| 22 | Yes | 16 | 16 | Fitouts required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Toilet required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Parking required | Yes | Yes, No |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Mezzanine required | Yes | Yes, No |  | Radio button | Single select |
| 26 | Yes | 20 | 20 | Amenities required | Power backup | AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select | Tick box | Multi Select |
| 29 |  |  |  | Deleted Fields |  |  |  |  |  |
| 30 |  |  |  | Pincode |  |  |  |  |  |
| 32 |  |  |  | Built up Area |  |  |  |  |  |
| 33 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 34 |  |  |  | Age of property |  |  |  |  |  |
| 35 |  |  |  | Required Documents |  |  |  |  |  |
| 36 |  |  |  | Add Brand Name |  |  |  |  |  |
| 40 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 41 |  |  |  | Preferred floor | Floor Preference* |  |  |  |  |
| 42 |  |  |  | Other amenities required | Amenities required |  |  |  |  |
| 43 |  |  |  | Rate budget Per square feet on carpet area | Budget |  |  |  |  |
| 44 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |

#### Demand Input fields — Columns HS–IA: Keydemand / Uploading Office Lease Demand (Keydemand)

| Row | HS | HT | HU | HV | HW | HX | HY | HZ | IA |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Keydemand |  |  |  |  |  |  |  |  |
| 2 | Uploading Office Lease Demand (Keydemand) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 8 | 8 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 9 | 9 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 14 | Yes | 10 | 10 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 15 |  |  |  | Transaction |  |  |  |  |  |
| 16 | Yes | 11 | 11 | Lease tenure in years | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 17 | Yes | 12 | 12 | Lockin period | Number |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 18 |  |  |  | Additional Details |  |  |  |  |  |
| 19 | Yes | 13 | 13 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| 20 |  |  |  | Amenities |  |  |  |  |  |
| 21 | Yes | 14 | 14 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 22 | Yes | 15 | 15 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 24 | Yes | 17 | 17 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 25 | Yes | 18 | 18 | Amenities required | Fire sensors | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 27 |  |  |  | Deleted Fields |  |  |  |  |  |
| 28 |  |  |  | Pincode |  |  |  |  |  |
| 30 |  |  |  | Rent Budget per sq.ft |  |  |  |  |  |
| 31 |  |  |  | Rate per sq. ft. / (Carpet) Autofilled when user provides rent amount and carpet area |  |  |  |  |  |
| 32 |  |  |  | Floor Preference* |  |  |  |  |  |
| 33 |  |  |  | Add Brand Name |  |  |  |  |  |
| 34 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 35 |  |  |  | Required Documents |  |  |  |  |  |
| 37 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 38 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |
| 39 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 40 |  |  |  | Fit-out Status | Fitout Status |  |  |  |  |

#### Demand Input fields — Columns IE–IM: Keydemand / Uploading Office Buy Demand (Keydemand)

| Row | IE | IF | IG | IH | II | IJ | IK | IL | IM |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Keydemand |  |  |  |  |  |  |  |  |
| 2 | Uploading Office Buy Demand (Keydemand) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Office |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Buy |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Keydemand | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 10 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | Yes | 7 | 7 | Carpet area in sq.ft* | Number |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 12 | Yes | 8 | 9 | Possession needed* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Drop Down | Single select |
| 13 | Yes | 9 | 8 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 14 | Yes | 10 | 10 | OC required | Yes | Yes, No |  | Radio button | Single select |
| 15 |  |  |  | Additional Details |  |  |  |  |  |
| 16 | Yes | 11 | 11 | Age of property | Less than 5 Years | Any, Less than 5 Years, 5 - 10 Years, Above 10 Years |  | Drop Down | Single select |
| 17 |  |  |  | Amenities |  |  |  |  |  |
| 18 | Yes | 12 | 12 | Toilet Required | Yes | Yes, No |  | Radio button | Single select |
| 19 | Yes | 13 | 13 | Car Parking Required | Yes | Yes, No |  | Radio button | Single select |
| 20 | Yes | 14 | 14 | Bike Parking required | Yes | Yes, No |  | Radio button | Single select |
| 21 | Yes | 15 | 15 | Fitout Status | Unfurnished | Unfurnished, Furnished |  | Radio button | Single select |
| 22 | Yes | 16 | 16 | Amenities required | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | Multi Select | Tick box | Multi Select |
| 27 |  |  |  | Deleted Fields |  |  |  |  |  |
| 28 |  |  |  | Pincode |  |  |  |  |  |
| 30 |  |  |  | Built up Area in sq.ft |  |  |  |  |  |
| 31 |  |  |  | End Use |  |  |  |  |  |
| 32 |  |  |  | Rate per sq. ft. / (Carpet) Autofilled when user provides rent amount and carpet area |  |  |  |  |  |
| 33 |  |  |  | Floor |  |  |  |  |  |
| 34 |  |  |  | Willing to pay brokerage? |  |  |  |  |  |
| 35 |  |  |  | Required Documents |  |  |  |  |  |
| 38 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 39 |  |  |  | Carpet Area range in square feet | Carpet area in sq.ft* |  |  |  |  |
| 40 |  |  |  | Possession needed* from | Possession needed* |  |  |  |  |
| 41 |  |  |  | Rent budget per square feet on carpet area | Rent Budget per sq.ft |  |  |  |  |
| 42 |  |  |  | Fit-out Status | Fitout Status |  |  |  |  |

#### Demand Input fields — Columns IQ–IY: Keydemand / Uploading Flex Demand (Keydemand) - Phase 2

| Row | IQ | IR | IS | IT | IU | IV | IW | IX | IY |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Keydemand |  |  |  |  |  |  |  |  |
| 2 | Uploading Flex Demand (Keydemand) - Phase 2 |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 |  |  |  | Primary Details |  |  |  |  |  |
| 5 | No | 1 | 1 | Asset Class* | Flex space |  |  | Radio button | Single select |
| 6 | No | 2 | 2 | Transaction type* | Lease |  |  | Radio button | Single select |
| 7 | Yes | 3 | 3 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 8 | No | 4 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 9 | No | 5 | 5 | Location* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 10 | No | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 11 | No | 7 | 8 | Possession needed* | Immediate | Immediate, Within 3 months |  | Drop Down | Single select |
| 12 | Yes | 8 | 7 | Additional demand details | Text |  |  | Text box | alpha numeric allowed |
| 13 |  |  |  | Flex Space Formats |  |  |  |  |  |
| 14 | Yes | 9 | 9 | No. of Seats For Flexi Desk | Number |  |  |  |  |
| 15 | Yes | 10 | 10 | Budget/Per seat | Number |  |  |  |  |
| 16 | Yes | 11 | 11 | No. of Seats For Dedicated Desk | Number |  |  |  |  |
| 17 | Yes | 12 | 12 | Budget/Per seat | Number |  |  |  |  |
| 18 | Yes | 13 | 13 | No. of Seats For Meeting Room | Number |  |  |  |  |
| 19 | Yes | 14 | 14 | Budget/Per seat | Number |  |  |  |  |
| 20 | Yes | 15 | 15 | No. of Seats For Cabins | Number |  |  |  |  |
| 21 | Yes | 16 | 16 | Budget/Per seat | Number |  |  |  |  |
| 22 | Yes | 17 | 17 | No. of Seats For Managed Office | Number |  |  |  |  |
| 23 | Yes | 18 | 18 | Budget/Per seat | Number |  |  |  |  |
| 24 |  |  |  | Amenities |  |  |  |  |  |
| 25 | Yes | 19 | 19 | Amenities required | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi. |  |  |  |
| 26 |  |  |  | Additional Details |  |  | Multi Select |  |  |
| 27 | Yes | 20 | 20 | Bike Parking required | Yes |  |  |  |  |
| 28 | Yes | 21 | 21 | Car Parking Required | Yes |  |  |  |  |
| 29 | "Yes" fields can not be editable after got the response |  |  |  |  |  |  |  |  |
| 33 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |
| 34 |  |  |  | Needed From | Possession needed |  |  |  |  |

#### Demand Input fields — Columns JC–JK: Keydemand / Uploading Managed Space Demand (Keydemand )

| Row | JC | JD | JE | JF | JG | JH | JI | JJ | JK |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  | Keydemand |  |  |  |  |  |  |
| 2 | Uploading Managed Space Demand (Keydemand ) |  |  |  |  |  |  |  |  |
| 3 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info |  |  |
| 4 | No | 1 | 1 | Asset Class* | Managed Space |  |  | Radio button | Single select |
| 5 | No | 2 | 3 | Transaction type* | Lease |  |  | Radio button | Single select |
| 6 | No | 3 | 4 | City* | Dropdown plus search |  |  | Search with auto fill | Single city selection |
| 7 | No | 5 | 5 | Location* | Drop Down + Search |  |  | Search with auto fill | Single city selection |
| 8 | Yes | 6 | 6 | Other interested locations | Drop Down + Search |  |  | Search with auto fill | Multiple locations can be added upto 3 |
| 9 | Yes | 7 | 7 | Possession needed* | Immediate | Immediate, Within 3 months |  | Drop Down | Single select |
| 10 | Yes | 8 | 8 | Number of seats* | Number field | Number fields (only accept more than 20 seats) |  | Number |  |
| 11 | Yes | 4 | 2 | Who can see your demand* | Developer | Developer, Keydemand, Agent | Multi Select | Not visible at user end |  |
| 13 |  | These requirements posted by Keydemand team will only be viewed by other Keydemand team (in Explore, relevancy) and no other suppliers can view them. |  |  |  |  |  |  |  |
| 14 |  | These requirements will be sent to other KD team and Admin team as a requirement |  |  |  |  |  |  |  |

#### Demand Input fields — Columns PP–PT: Agent / F&B

| Row | PP | PQ | PR | PS | PT |
|---|---|---|---|---|---|
| 1 |  | Agent |  |  |  |
| 2 |  | F&B |  |  |  |
| 4 | Primary details | Transaction type* | Single selection | Options:<br>Lease<br>Buy<br>Revenue/MG Revenue |  |
| 5 |  | City* | Dropdown | Options:<br>Mumbai<br>Pune<br>Nashik |  |
| 6 |  | Show brand name | Checkbox & Select | Tick the box and select the Brand Name | Not in the case of Agents |
| 7 |  | Location* | Text with autofill | Write the Location* name |  |
| 8 |  | Pincode | Text | Write the pincode (6 number restrictions) | Only numbers are allowed, alphabets entered, error to show (only numbers allowed) |
| 9 |  | Other interested Location*s | Text with autofill. Multi-options | Write the Location* name |  |
| 10 |  | Carpet area in square feet | Text with range | Enter Min and Max as Range |  |
| 11 |  | Possession needed* from | Single selection | Options:<br>Immediate<br>Within 3 months<br>Within 6 months<br>Within 9 months<br>After 9 months |  |
| 12 |  | End use | Dropdown | Options:<br>QSR, Café, Fine Dining, Casual Dining, Bar & Lounge, Cloud Kitchen |  |
| 13 |  | Rent budget per square feet on carpet area | Text with range | Enter Min and Max as Range |  |
| 14 |  | Preferred floor | Dropdown | Options:<br>Basement<br>Lower ground<br>Ground<br>Upper Ground<br>1st<br>Any |  |
| 15 |  | OC required | Single selection | Options:<br>Yes<br>No |  |
| 16 |  | Property images required | Checkbox | Tick the box if required |  |
| 17 |  | Property videos required | Checkbox | Tick the box if required |  |
| 18 |  | Additional demand details | Text | Write Text |  |
| 19 | Additional details | Minimum Ceiling height in feet | Text | Enter number |  |
| 21 |  | Minimum Frontage in feet | Text | Enter number |  |
| 23 |  | Store type | Dropdown | Options:<br>Standalone/Independent building<br>Mall<br>Mixed use<br>High Street<br>Kiosks<br>Store-in-store | High Street, Mall, Standalone, Food Court, Transit Hub, IT Park, Airport, Highway, Kiosk |
| 25 |  | Ownership | Dropdown | Options:<br>Individual or Investor<br>Developer<br>Any |  |
| 26 |  | Age of property | Dropdown | Options:<br>Under Construction<br>Less than 5 years<br>5-10 years<br>10-20 years<br>Above 20 years<br>Any |  |
| 27 | Amenities | Mezzanine required | Checkbox | Yes , No |  |
| 28 |  | Fitouts required | Checkbox | Yes , No |  |
| 29 |  | Toilet required | Checkbox | Yes , No |  |
| 30 |  | Parking required | Checkbox | Yes , No |  |
| 31 |  | Other amenities required | Dropdown | Select amenities from the list |  |
| 32 |  | Lease tenure in years | Text | Enter number |  |
| 33 | Transaction | Lockin period | Text | Enter number |  |
| 34 |  | Fit-out/Rent free period | Dropdown | Options:<br>1-2 months<br>2-4 months<br>4-6 months<br>Over 6 months |  |
| 35 |  | Willing to pay brokerage? | Single selection | Yes , No |  |
| 36 |  | Floorplans Required | Multi selection | Selection |  |
| 37 |  | Autocad Required | Multi selection | Selection |  |
| 38 | Documents | Fire NOC Required | Multi selection | Selection |  |
| 39 |  | Other licenses | Multi selection | Selection |  |
| 40 |  | Power Load Requirement | Button | Yes , No |  |
| 41 |  | Exhaust / Ventilation Duct Availability | Button | Yes , No |  |
| 42 | Operational Requirements | Water Supply & Drainage Facility | Button | Yes , No |  |
| 43 |  | Power Load Requirement (e.g., 50 kW – critical for kitchens) | Button | Yes , No |  |
| 44 |  | Exhaust/Ventilation Duct Requirement | Button | Yes , No |  |
| 45 |  | Chimney/Exhaust Shaft Length Permitted | Button | Yes , No |  |
| 46 |  | Water Supply & Drainage Availability | Button | Yes , No |  |
| 47 |  | Gas Line Connectivity (if needed) | Button | Yes , No |  |
| 48 |  | Fire NOC & Sprinkler System | Button | Yes , No |  |
| 49 |  | AC Provision (Centralized or Split AC option) | Button | Yes , No |  |
| 50 |  | Grease Trap & STP (mandatory in malls & many municipalities) | Button | Yes , No |  |
| 51 |  | Licensing Permissions Feasibility | Multiple Selection | (FSSAI, liquor license if applicable, fire NOC) |  |
| 52 |  | Preferred Adjacencies | Multiple Selection | (near multiplex, IT parks, other F&B clusters, colleges, etc.) |  |
| 53 |  | Footfall Expectation | Multiple Selection | (daily/weekly, if they have data from market research) | Only when selected as Mall |
| 54 |  | Design/Layout Preferences | Multiple Selection | (open terrace, drive-thru option, etc.) |  |
| 55 |  | Expansion Model | Multiple Selection | (company-owned, franchise, JV, etc.) |  |

#### Tab: Property & Project Input Fields (current, reviewed 17-06-2026)
Row 2 = user group, row 3 = form title (+ review date), row 4 = column headers. Columns 'Himanshu'/next column hold the reviewer's input type and validation notes.

#### Property & Project Input Fields — Columns A–J: FOR AGENTS / Uploading Retail Property Lease (For Agent)

| Row | A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|---|
| 2 |  |  |  | FOR AGENTS |  |  |  |  |  |  |
| 3 |  |  |  | Uploading Retail Property Lease (For Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Fields | Input Fields | Fields Params | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* |  | Media(images and videos) | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* |  | Retail |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Text + Autofill |  |  |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  | 3,125 sq.ft. |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| 15 | Yes | 10 | 8 | Quoted Rent* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 17 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 20 | Yes | 14 | 13 | Clear Ceiling Height (ft.)* | Number |  | 12 Ft |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 21 | Yes | 15 | 15 | Frontage (ft.)* | Number |  | 22 Ft |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 17 | 16 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 27 | Yes | 21 | 21 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 29 | Yes | 22 | 22 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 30 | Yes | 23 | 23 | CAM / Maintenance Charges | Number (Enter Total Amount) |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 31 | Yes | 24 | 24 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 32 | Yes | 25 | 25 | Lease Tenure in Years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 33 | Yes | 26 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 34 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 35 | Yes | 27 | 27 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 36 | Yes | 28 | 28 | Other Documents |  | Media |  | New | Media (PDF) | Less than 2MB |
| 37 | Yes | 29 | 29 | Add Video URL |  | URL (Could be from Youtube or Vimeo) |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 40 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| 41 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 42 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| 43 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 44 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 45 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 46 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 47 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 48 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 49 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 50 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 54 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 56 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 57 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| 58 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 59 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 60 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 61 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 62 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 63 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| 64 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| 65 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |
| 68 |  |  |  | Autofilled when user provides rent amount and carpet area |  |  |  |  |  |  |
| 69 |  |  |  | Rent amount | Quoted Rent | Rate psf on carpet area | Carpet Area |  |  |  |
| 70 |  |  |  | Auto calculated on the basis of carpet area/rent psf | 300000 | 200 | 1500 |  |  |  |

#### Property & Project Input Fields — Columns L–U: Uploading F&B Property Lease (For Agent)

| Row | L | M | N | O | P | Q | R | S | T | U |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading F&B Property Lease (For Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* |  |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Lease | Lease |  |  | Radio button | Single select |
| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| 15 | Yes | 10 | 8 | Quoted Rent* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 17 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 20 | Yes | 14 | 14 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 21 | Yes | 15 | 15 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 16 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 19 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 26 | Yes | 20 | 21 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 27 | Yes | 21 | 20 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| 28 | Yes | 22 | 22 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes | 23 | 23 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 31 | Yes | 24 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 32 | Yes | 25 | 26 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 33 | Yes | 26 | 24 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 34 | Yes | 27 | 25 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 35 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 36 | Yes | 28 | 28 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 37 | Yes | 29 | 29 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 38 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 40 |  |  |  | Hide Images | Toggle-Yes/No |  |  |  |  |  |
| 41 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| 42 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 43 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| 44 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 45 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 46 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 47 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 48 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 49 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 50 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 51 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 53 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 55 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 56 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| 57 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 58 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 59 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 60 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 61 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 62 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| 63 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| 64 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns W–AF: Uploading F&B Property Sale (For Agent)

| Row | W | X | Y | Z | AA | AB | AC | AD | AE | AF |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading F&B Property Sale (For Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Property & Project Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | 0 |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Sale |  |  |  | Radio button | Single select |
| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| 15 | Yes | 10 | 8 | Quoted Price* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 17 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 20 | Yes | 14 | 14 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 21 | Yes | 15 | 15 | Frontage (ft.) | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 16 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 17 | 17 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 19 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 18 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 26 | Yes | 20 | 21 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 27 | Yes | 21 | 20 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| 28 | Yes | 22 | 22 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes | 23 | 23 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 31 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 32 | Yes | 24 | 24 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 33 | Yes | 25 | 25 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 34 | Yes | 26 | 26 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 37 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 38 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 39 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 40 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 41 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| 42 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| 43 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| 44 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| 45 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 46 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 48 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 50 |  |  |  | Location | Locality* |  |  |  |  |  |
| 51 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 52 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 53 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 54 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 55 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 56 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 57 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 58 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| 59 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns AH–AQ: Uploading Retail Property Sale (Agent)

| Row | AH | AI | AJ | AK | AL | AM | AN | AO | AP | AQ |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Retail Property Sale (Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Drop Down + Search |  | Location |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 8 | Quoted Price* | Number |  | Auto calculated if 'Rate per sq. ft.' amount is provided | New | Number with suffix | ₹85,000 per month |
| 15 | Yes | 10 | 9 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if 'Sale' amount is provided | New - Rate per square feet on carpet area* | Number with suffix | ₹85 per sft |
| 16 | Yes | 11 | 10 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 17 | Yes | 12 | 12 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 13 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 20 | Yes | 14 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 21 | Yes | 15 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| 23 | Yes | 17 | 18 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 14 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 20 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 27 | Yes | 21 | 21 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 29 | Yes | 22 | 22 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 30 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 31 | Yes | 23 | 23 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 32 | Yes | 24 | 24 | Other Documents | Media |  |  | New | Media (PDF) | Less than 2MB |
| 33 | Yes | 25 | 25 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 35 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 36 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 37 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 38 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 39 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| 40 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| 41 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| 42 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| 43 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 44 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 47 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 49 |  |  |  | Location | Locality* |  |  |  |  |  |
| 50 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 51 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 52 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 53 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 54 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 55 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 56 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 57 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| 58 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns AS–BB: Uploading Office Property Lease (Agent)

| Row | AS | AT | AU | AV | AW | AX | AY | AZ | BA | BB |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Office Property Lease (Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Let user ask for Images | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Text + Autofill |  | Location |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| 13 | Yes | 8 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 8 | Built up Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Quoted Rent* | Number |  | Auto calculated if Rate amount is provided | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Lease is provide | New | Number with suffix | ₹85 per sft |
| 17 | Yes | 12 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| 20 | Yes | 14 | 16 | Fitouts status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 22 | Yes | 16 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 23 | Yes | 17 | 14 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| 24 | Yes | 18 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 25 | Yes | 19 | 20 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| 26 | Yes | 20 | 21 | Meeting Room | Number |  |  |  | Number with prefix | Eg.10 |
| 27 | Yes | 21 | 13 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| 28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 29 | Yes | 22 | 22 | Deposit in months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 30 | Yes | 23 | 25 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 31 | Yes | 24 | 23 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 32 | Yes | 25 | 24 | Rent escalation | Every Year | Every Year, Every 3 Year |  | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 33 | Yes | 26 | 26 | CAM / Maintenance Charges | Number |  |  |  | Number with suffix | Only Numbers Eg. ₹850 per month |
| 34 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 35 | Yes | 27 | 27 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 36 | Yes | 28 | 28 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 37 | Yes | 29 | 29 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 41 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 42 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 43 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| 44 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| 45 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 46 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 47 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 48 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 49 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 50 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 51 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 54 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 55 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| 56 |  |  |  | Location | Locality* |  |  |  |  |  |
| 57 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 58 |  |  |  | Built-up Area in square feet | Built up Area (sq. ft.) |  |  |  |  |  |
| 59 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| 60 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| 61 |  |  |  | Fitouts Status | Fitouts status |  |  |  |  |  |
| 62 |  |  |  | Bike Parking Allotted | Bike Parking |  |  |  |  |  |
| 63 |  |  |  | Car Parking Allotted | Car Parking |  |  |  |  |  |
| 64 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 65 |  |  |  | Meeting rooms | Meeting Room |  |  |  |  |  |
| 66 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| 67 |  |  |  | Rent escalation | Received, Applied, Not Applicable |  |  |  |  |  |

#### Property & Project Input Fields — Columns BD–BM: Uploading Office Property Sale (Agent)

| Row | BD | BE | BF | BG | BH | BI | BJ | BK | BL | BM |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Office Property Sale (Agent) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details | Overview |  |  |  |  |  |
| 6 | Yes | 1 | 11 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 3 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 6 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| 10 | No | 5 | 4 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | No | 6 | 5 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| 12 | No | 7 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| 13 | Yes | 8 | 8 | Built up Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 14 | Yes | 9 | 7 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Quoted Price* | Number |  | Auto calculated if rate per sq. ft. amount is provided | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Sale Price* is provide | New | Number with suffix | ₹85 per sft |
| 17 | Yes | 12 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 19 | Yes | 13 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| 20 | Yes | 14 | 16 | Fitouts Status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 22 | Yes | 16 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 23 | Yes | 17 | 14 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| 24 | Yes | 18 | 19 | Meeting rooms | Number |  |  |  | Number with prefix | Eg.10 |
| 25 | Yes | 19 | 20 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| 26 | Yes | 20 | 13 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 27 | Yes | 21 | 21 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| 28 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 29 | Yes |  |  | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 30 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 31 | Yes | 22 | 22 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 32 | Yes | 23 | 23 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 33 | Yes | 24 | 24 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 36 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 37 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 38 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| 39 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| 40 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 41 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 42 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 43 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 44 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 45 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 46 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 47 |  |  | 11 | Available Floor number | Text |  |  |  |  |  |
| 53 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 54 |  |  |  | Property Images/Videos | Images & Videos* |  |  |  |  |  |
| 55 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| 56 |  |  |  | Locality* | Location |  |  |  |  |  |
| 57 |  |  |  | Built-up Area in square feet | Built up Area (sq. ft.) |  |  |  |  |  |
| 58 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 59 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 60 |  |  |  | Property Available From* | Property Available From* |  |  |  |  |  |
| 61 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| 62 |  |  |  | Fitouts Status | Fitouts Status |  |  |  |  |  |
| 63 |  |  |  | Bike Parking Allotted | Bike Parking |  |  |  |  |  |
| 64 |  |  |  | Car Parking Allotted | Car Parking |  |  |  |  |  |
| 65 |  |  |  | Meeting rooms | Meeting rooms |  |  |  |  |  |
| 66 |  |  |  | Cabins | Cabins |  |  |  |  |  |
| 67 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 68 |  |  |  | Documents | Other Documents |  |  |  |  |  |
| 69 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns BO–BX: KEYDEMAND / Uploading Retail Property Lease (For Keydemand)

| Row | BO | BP | BQ | BR | BS | BT | BU | BV | BW | BX |
|---|---|---|---|---|---|---|---|---|---|---|
| 2 |  |  |  | KEYDEMAND |  |  |  |  |  |  |
| 3 |  |  |  | Uploading Retail Property Lease (For Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| 10 | Yes | 5 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Single select |
| 11 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Text + Autofill |  |  |  | Search with auto fill | Single location selection |
| 13 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Quoted Rent* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85 per sft |
| 17 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 16 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 17 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 23 | Yes | 17 | 18 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 19 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 20 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 21 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 27 | Yes | 21 | 15 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 28 | Yes | 22 | 22 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | Multi Select |  | Tick box | Multi Select |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes | 23 | 24 | Rent escalation | Every Year | Every Year, Every 3 Year | With percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 31 | Yes | 24 | 23 | Deposit in months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 32 | Yes | 25 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 33 | Yes | 26 | 25 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 34 | Yes | 27 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 35 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 36 | Yes | 28 | 28 | Google Location | Drop down with search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 37 | Yes | 29 | 29 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| 38 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 41 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 42 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 43 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| 44 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 45 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 46 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 47 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 48 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 49 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 50 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 51 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 57 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 58 |  |  |  | Locality* | Location |  |  |  |  |  |
| 59 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 60 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| 61 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 62 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 63 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 64 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 65 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 66 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| 67 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| 68 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |
| 69 |  |  |  | Additional Details / Transaction | Commercials & Financials |  |  |  |  |  |

#### Property & Project Input Fields — Columns CA–CJ: Uploading F&B Property Lease (For Keydemand)

| Row | CA | CB | CC | CD | CE | CF | CG | CH | CI | CJ |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading F&B Property Lease (For Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Let user ask for Images | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| 10 | No | 5 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | Yes | 6 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent |  | Not visible at user end (This option should be default no, they can change it if wish to) | Drop Down | Multi Select |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 2 | Transaction Type* | Lease | Lease |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 10 | Rate per sq. ft. (Carpet)* | Number eg. (₹80 per sq.ft) |  | If not provided then to calculate it by applying logic as below <br>Quoted Rent divided by carpet area | New | Number with suffix | ₹85 per sft |
| 16 | Yes | 11 | 9 | Quoted Rent* | Number eg. (₹2,75,000) |  | If not provided then to calculate it by applying logic as below <br>Carpet Area x Rate per sq.ft | New | Number with suffix | ₹85,000 per month |
| 17 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 23 | Yes | 17 | 17 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 27 | Yes | 21 | 22 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 28 | Yes | 22 | 21 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| 29 | Yes | 23 | 23 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| 30 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 31 | Yes | 24 | 24 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 32 | Yes | 25 | 28 | CAM / Maintenance Charges | Number eg. (₹72 per sft) |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 33 | Yes | 26 | 27 | Rent Escalation | Every Year | Every Year, Every 3 Year | Number with percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 34 | Yes | 27 | 25 | Lease Tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 35 | Yes | 28 | 26 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 36 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 37 | Yes | 29 | 29 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 38 | Yes | 30 | 30 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 39 | Yes | 31 | 31 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 41 |  |  |  | Deleted Fields | Input Fields |  |  |  |  |  |
| 42 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 43 |  |  | 2 | Ownership | Individual or Investor, Developer |  |  |  |  |  |
| 44 |  |  | 3 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 45 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 46 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 47 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 48 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 49 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 50 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 51 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 54 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 56 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 57 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. (Carpet)* |  |  |  |  |  |
| 58 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 59 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 60 |  |  |  | Toilet available | Washroom Available |  |  |  |  |  |
| 61 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 62 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 63 |  |  |  | Lease tenure In years | Lease Tenure in Years |  |  |  |  |  |
| 64 |  |  |  | Floorplans / Autocad / Fire NOC / Other Licenses | Other Documents |  |  |  |  |  |
| 65 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns CL–CU: Uploading F&B Property Sale (For Keydemand)

| Row | CL | CM | CN | CO | CP | CQ | CR | CS | CT | CU |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading F&B Property Sale (For Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Property & Project Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | 0 |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property / Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | F&B |  |  | New | Radio button | Single select |
| 10 | No | 5 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 | Yes | 6 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent |  | Not visible at user end (This option should be default no, they can change it if wish to) | Drop Down | Multi Select |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single location selection |
| 13 | No | 8 | 2 | Transaction Type* | Sale |  |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 10 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Rent Amount* is provided | New | Number with suffix | ₹85 per sft |
| 16 | Yes | 11 | 9 | Quoted Price* | Number |  | Auto calculated if rate is provide | New | Number with suffix | ₹85,000 per month |
| 17 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 23 | Yes | 17 | 17 | Washroom Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 19 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Drop Down | Single select |
| 27 | Yes | 21 | 22 | Amenities | Power backup | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 28 | Yes | 22 | 21 | Cooking Type | Electric | Electric, Gas |  | New | Radio button | Single select |
| 29 | Yes | 23 | 23 | Non-Veg Allowed | Yes | Yes, No |  | New | Radio button | Single select |
| 30 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 31 | Yes | 24 | 24 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 32 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 33 | Yes | 25 | 25 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 34 | Yes | 26 | 26 | Other Documents | Media |  |  |  | Media (PDF) | Less than 2MB |
| 35 | Yes | 27 | 27 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |

#### Property & Project Input Fields — Columns CW–DF: Uploading Office Property Lease (Keydemand)

| Row | CW | CX | CY | CZ | DA | DB | DC | DD | DE | DF |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Office Property Lease (Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 13 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  | Images/Videos |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property/Project* | Text |  | (Brief Description) |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| 10 | Yes | 5 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| 11 | No | 6 | 5 | City* | Drop down with search |  |  |  | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Drop down with search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Built up Area  (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 16 | Yes | 11 | 10 | Quoted Rent* | Number |  | Auto calculated if rate per sq.ft is provided | New | Number with suffix | ₹85,000 per month |
| 17 | Yes | 12 | 11 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if lease is provided | New | Number with suffix | ₹85 per sft |
| 18 | Yes | 13 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 20 | Yes | 14 | 15 | Fitout status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 16 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| 22 | Yes | 16 | 17 | Bike parking allotted* | Number |  |  |  | Number with prefix | Eg.10 |
| 23 | Yes | 17 | 18 | Car parking allotted* | Number |  |  |  | Number with prefix | Eg.10 |
| 24 | Yes | 18 | 21 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  |  | Drop Down | Single select |
| 25 | Yes | 19 | 19 | Meeting rooms (numbers) | Number |  |  |  | Number with prefix | Eg.10 |
| 26 | Yes | 20 | 20 | Cabins (numbers) | Number |  |  |  | Number with prefix | Eg.10 |
| 27 | Yes | 21 | 14 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| 28 | Yes | 22 | 22 | Amenities | AC | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes | 23 | 23 | Deposit in Months | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 31 | Yes | 24 | 24 | Lease tenure in years | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11  years |
| 32 | Yes | 25 | 25 | Lock-in Period | Number |  | Lock-in period cannot be greater than lease tenure years |  | Text box with suffix | Only Numbers Eg. 11  years |
| 33 | Yes | 26 | 26 | Rent escalation | Every Year | Every Year, Every 3 Year | With percentage | New | Drop Down with text box and suffix | Single select, Eg Every Year 5% |
| 34 | Yes | 27 | 27 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 35 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 36 | Yes | 28 | 28 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 37 | Yes | 29 | 29 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| 38 | Yes | 30 | 30 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 43 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 44 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 45 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| 46 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| 47 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 48 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 49 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 50 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 51 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 52 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 53 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 55 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 57 |  |  |  | Locality* | Location |  |  |  |  |  |
| 58 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 59 |  |  |  | Builtup Area In Square Feet | Built up Area (sq. ft.) |  |  |  |  |  |
| 60 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 61 |  |  |  | Toilet Available | Washroom available |  |  |  |  |  |
| 62 |  |  |  | Bike parking allotted | Bike parking allotted |  |  |  |  |  |
| 63 |  |  |  | Available Floor number | Floor Number |  |  |  |  |  |
| 64 |  |  |  | Meeting rooms | Meeting rooms (numbers) |  |  |  |  |  |
| 65 |  |  |  | Cabins | Cabins (numbers) |  |  |  |  |  |
| 66 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 67 |  |  |  | Amenities available | Amenities |  |  |  |  |  |

#### Property & Project Input Fields — Columns DH–DQ: Uploading Retail Property Sale (Keydemand)

| Row | DH | DI | DJ | DK | DL | DM | DN | DO | DP | DQ |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Retail Property Sale (Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 12 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Retail |  |  | New | Radio button | Single select |
| 10 | Yes | 5 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| 11 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Quoted Price* | Number |  |  | New | Number with suffix | ₹85,000 per month |
| 16 | Yes | 11 | 10 | Rate per sq. ft. (Carpet)* | Number |  |  | New | Number with suffix | ₹85 per sft |
| 17 | Yes | 12 | 11 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 18 | Yes | 13 | 13 | Store Type* | Highstreet | Highstreet, Mall |  |  | Radio button | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  |  |  |
| 20 | Yes | 14 | 14 | Floor* | Basement | Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  | Drop Down | Single select |
| 21 | Yes | 15 | 15 | Clear Ceiling Height (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 22 | Yes | 16 | 16 | Frontage (ft.)* | Number |  |  |  | Text box with suffix | Only Numbers Eg. 11 ft |
| 23 | Yes | 17 | 17 | Mezzanine Available | Yes | Yes, No |  |  | Radio button | Single select |
| 24 | Yes | 18 | 18 | Washroom Available* | Yes | Yes, No |  |  | Radio button | Single select |
| 25 | Yes | 19 | 19 | Fitouts Available | Yes | Yes, No |  |  | Radio button | Single select |
| 26 | Yes | 20 | 20 | Parking Available | Yes | Yes, No |  |  | Radio button | Single select |
| 27 | Yes | 21 | 21 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| 28 | Yes | 22 | 22 | Amenities | Facilities For Disabled | AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |  |  | Tick box | Multi Select |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes | 23 | 23 | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 31 |  |  |  | Location & Connectivity |  |  |  |  |  |  |
| 32 | Yes | 24 | 24 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 33 | Yes | 25 | 25 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| 34 | Yes | 26 | 26 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 38 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 39 |  |  | 1 | Builtup Area in square feet * | Text |  |  |  |  |  |
| 40 |  |  | 2 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 41 |  |  | 3 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 42 |  |  | 4 | Floorplans available | Media |  |  |  |  |  |
| 43 |  |  | 5 | Autocad available | Media |  |  |  |  |  |
| 44 |  |  | 6 | Fire NOC available | Media |  |  |  |  |  |
| 45 |  |  | 7 | Other licenses available | Media |  |  |  |  |  |
| 46 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 47 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 49 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 51 |  |  |  | Locality* | Location |  |  |  |  |  |
| 52 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 53 |  |  |  | Builtup Area In Square Feet | Built up Area (sq. ft.) |  |  |  |  |  |
| 54 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 55 |  |  |  | Minimum clear ceiling height in feet | Ceiling Height (ft.)* |  |  |  |  |  |
| 56 |  |  |  | Frontage in feet | Frontage (ft.) |  |  |  |  |  |
| 57 |  |  |  | Toilet avaliable | Washroom Available |  |  |  |  |  |
| 58 |  |  |  | Number of parking spaces | Parking Available |  |  |  |  |  |
| 59 |  |  |  | OC available | OC Status* |  |  |  |  |  |

#### Property & Project Input Fields — Columns DS–EB: Uploading Office Property Sale  (Keydemand)

| Row | DS | DT | DU | DV | DW | DX | DY | DZ | EA | EB |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Office Property Sale  (Keydemand) |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details |  |  |  |  |  |  |
| 6 | Yes | 1 | 13 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Office |  |  | New | Radio button | Single select |
| 10 | Yes | 5 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| 11 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 2 | Transaction Type* | Sale | Lease, Sale |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Carpet Area (sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 15 | Yes | 10 | 9 | Built up Area(sq. ft.)* | Number |  |  |  | Number with commas & suffix | Eg 2,500 sft, 25,000 sft, 1,00,000 sft |
| 16 | Yes | 11 | 10 | Quoted Price* | Number |  | Auto calculated if rate per sq. ft. amount is provided | New | Number with suffix | ₹85,000 per month |
| 17 | Yes | 12 | 11 | Rate per sq. ft. (Carpet)* | Number |  | Auto calculated if Sale Price* is provide | New | Number with suffix | ₹85 per sft |
| 18 | Yes | 13 | 12 | Property Available From* | Immediate | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  | Drop Down | Single select |
| 19 |  |  |  | Property Specifications |  |  |  |  | Radio button | Single select |
| 20 | Yes | 14 | 15 | Washroom Count* | Number |  |  |  | Number with prefix | Eg.10 |
| 21 | Yes | 15 | 16 | Fitouts Status* | Furnished | Furnished, Unfurnished, Developer/Landlord to do fitout |  |  | Drop Down | Single select |
| 22 | Yes | 16 | 17 | Bike Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 23 | Yes | 17 | 18 | Car Parking* | Number |  |  |  | Number with prefix | Eg.10 |
| 24 | Yes | 18 | 19 | Floor | 1 to 5 | 1 to 5, 5 to 10, 10 to 15, Above 15 |  | New | Drop Down | Single select |
| 25 | Yes | 19 | 14 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  | Radio button | Single select |
| 26 | Yes | 20 | 20 | Amenities | Cafeteria/Food court | AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking |  |  | Tick box | Multi Select |
| 27 | Yes | 21 | 21 | Meeting Room | Number |  |  |  | Number with prefix | Eg.10 |
| 28 | Yes | 22 | 22 | Cabins | Number |  |  |  | Number with prefix | Eg.10 |
| 29 |  |  |  | Commercials & Financials |  |  |  |  |  |  |
| 30 | Yes |  |  | CAM / Maintenance Charges | Number |  |  | New | Number with suffix | Only Numbers Eg. ₹850 per month |
| 31 | Yes | 23 | 23 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 32 | Yes | 24 | 24 | Other Documents | Media |  | File Name (Upload file should be less than 5MB in PDF format) |  | Media (PDF) | Less than 2MB |
| 33 | Yes | 25 | 25 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 35 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 36 |  |  | 1 | Brokerage in days | 7 days, 14 days, 21 days, 30 days, Negotiable |  |  |  |  |  |
| 37 |  |  | 2 | Ideal For | Text |  |  |  |  |  |
| 38 |  |  | 3 | Total floors | Text |  |  |  |  |  |
| 39 |  |  | 4 | Age of property | Less than 5 years, 5-10 years, 10-20 years, Above 20 years |  |  |  |  |  |
| 40 |  |  | 5 | Floorplans available | Media |  |  |  |  |  |
| 41 |  |  | 6 | Autocad available | Media |  |  |  |  |  |
| 42 |  |  | 7 | Fire NOC available | Media |  |  |  |  |  |
| 43 |  |  | 8 | Other licenses available | Media |  |  |  |  |  |
| 44 |  |  | 9 | Pin Code | Text |  |  |  |  |  |
| 45 |  |  | 10 | Negotiable | Tick |  |  |  |  |  |
| 47 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 49 |  |  |  | Locality* | Location |  |  |  |  |  |
| 50 |  |  |  | Carpet Area in square feet | Carpet Area (sq. ft.)* |  |  |  |  |  |
| 51 |  |  |  | Builtup Area In Square Feet | Built up Area(sq. ft.) |  |  |  |  |  |
| 52 |  |  |  | Rate per square feet on carpet area | Rate per sq. ft. |  |  |  |  |  |
| 53 |  |  |  | Toilet Available | Washroom Available |  |  |  |  |  |
| 54 |  |  |  | Fitouts Status | Fitouts Status |  |  |  |  |  |
| 55 |  |  |  | Bike parking allotted | Bike Parking |  |  |  |  |  |
| 56 |  |  |  | Car parking allotted | Car Parking |  |  |  |  |  |
| 57 |  |  |  | Available Floor number | Floor Number |  |  |  |  |  |
| 58 |  |  |  | OC available | OC Status* |  |  |  |  |  |
| 59 |  |  |  | Amenities available | Amenities |  |  |  |  |  |

#### Property & Project Input Fields — Columns ED–EM: Uploading Flex Property (Keydemand) - Phase 2

| Row | ED | EE | EF | EG | EH | EI | EJ | EK | EL | EM |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  | Uploading Flex Property (Keydemand) - Phase 2 |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary details | Primary Details |  |  |  |  |  |
| 6 | Yes | 1 | 9 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Project Name | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 7 | About Property/Project* | Text |  |  |  | Text box | Alpha numeric |
| 9 | No | 4 | 1 | Asset Class* | Managed office |  |  |  | Radio button | Single select |
| 10 | Yes | 5 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| 11 | No | 6 | 5 | City* | Drop Down + Search |  |  | New | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 2 | Transaction Type* | Lease | Lease, Sale |  |  | Radio button | Single select |
| 14 | Yes | 9 | 8 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |
| 15 |  |  |  | Flex Space Formats |  |  |  |  |  |  |
| 16 | Yes | 10 | 10 | Rate per seat for Flexi Desk* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| 17 | Yes | 11 | 11 | Rate per seat for Dedicated Desk* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| 18 | Yes | 12 | 12 | Rate per seat for Meeting Room* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| 19 | Yes | 13 | 13 | Rate per seat for Cabins* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| 20 | Yes | 14 | 14 | Rate per seat for Managed Office* | Number |  | At least one |  | Number with prefix | ₹1,850 per seat |
| 21 |  |  |  | Additional Details |  |  |  |  |  |  |
| 22 | Yes | 15 | 15 | Business Hours | Fixed timings | Fixed timings, 24 hours |  |  | Radio button | Single select |
| 23 | Yes | 16 | 16 | Bike Parking | Payable | Payable, Included, Unavailable | Payable, Included, Unavailable |  | Drop Down | Single select |
| 24 | Yes | 17 | 17 | Car parking | Payable | Payable, Included, Unavailable |  |  | Drop Down | Single select |
| 25 | Yes | 18 | 18 | Floor Number | Number |  | New |  | Drop Down | Single select |
| 26 | Yes | 19 | 19 | Age of property | Less than 5 Years | Less than 5 Years, 5 - 10 Years,  10 - 20 Years, Above 20 Years |  |  | Drop Down | Single select |
| 27 | Yes | 20 | 20 | Nearest Connectivity | Railway Station | Railway Station, Bus Station, Metro Station |  |  | Drop Down | Single select |
| 28 | Yes | 21 | 21 | Amenities* | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi |  |  | Tick box | Multi Select |
| 29 | Yes | 22 | 22 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 30 |  |  |  | Documents |  |  |  |  |  |  |
| 31 | Yes | 23 | 23 | Brochure | Media |  |  |  | Media (PDF) | Less than 2MB |
| 32 | Yes | 24 | 24 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |
| 39 |  |  |  | Deleted Fields from V1 | Input Fields |  |  |  |  |  |
| 40 |  |  | 1 | Rate per seat for Flexi Desk | Number |  |  |  |  |  |
| 41 |  |  | 2 | Rate per seat for Dedicated Desk | Number |  |  |  |  |  |
| 42 |  |  | 3 | Rate per seat for Meeting Room | Number |  |  |  |  |  |
| 43 |  |  | 4 | Rate per seat for Cabins | Number |  |  |  |  |  |
| 44 |  |  | 5 | Rate per seat for Managed Office | Number |  |  |  |  |  |
| 45 |  |  | 6 | pin code | text |  |  |  |  |  |
| 46 |  |  | 7 | Floor Number | text |  |  |  |  |  |
| 51 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |  |  |
| 52 |  |  |  | Property Images/Videos | Images & Videos* |  |  |  |  |  |
| 53 |  |  |  | Project Name / Building Name | Project Name |  |  |  |  |  |
| 54 |  |  |  | About Project/Property | About Property / Project* |  |  |  |  |  |
| 55 |  |  |  | Locality* | Location* |  |  |  |  |  |
| 56 |  |  |  | Property Available From* | Property Available From* |  |  |  |  |  |
| 57 |  |  |  | Rate per seat (Specific to format) | Price per seat |  |  |  |  |  |
| 58 |  |  |  | Video URL | Add Video URL |  |  |  |  |  |

#### Property & Project Input Fields — Columns EO–EX: Uploading  Managed Office Property (Keydemand)	As project now - frontend

| Row | EO | EP | EQ | ER | ES | ET | EU | EV | EW | EX |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 | Uploading  Managed Office Property (Keydemand)	As project now - frontend |  |  |  |  |  |  |  | 17-06-2026 |  |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  |  |  | Primary Details |  |  |  |  |  |  |
| 6 | Yes | 1 | 9 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior | Hide Images-Toggle - Yes/No | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 | Yes | 2 | 4 | Managed Centres* | Text |  |  |  | Text box | Alpha numeric |
| 8 | Yes | 3 | 3 | Who can see your property* | Office Tenant Occupier | Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent | Not visible at user end | This option should be default no, they can change it if wish to | Drop Down | Multi Select |
| 9 | Yes | 4 | 7 | About Centre* | Text |  |  |  | Text box | Alpha numeric |
| 10 | No | 5 | 2 | Transaction Type* | Lease | Lease |  | New | Radio button | Single select |
| 11 | No | 6 | 5 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 12 | No | 7 | 6 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 13 | No | 8 | 1 | Asset Class* | Managed Offices | Managed Offices, Managed Space | Drop Down | New | Radio button | Single select |
| 14 | Yes | 9 | 8 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |
| 15 |  |  |  | Managed Office Format |  |  |  |  |  |  |
| 16 | Yes | 10 | 10 | Number of seats* | Number |  |  | New | Number with prefix | 100 seats |
| 17 | Yes | 11 | 11 | Team size* | Number |  |  | New | Number with prefix | 50 members |
| 18 | Yes | 12 | 12 | Lock-in period* | Number |  |  |  | Text box with prefix | Only Numbers Eg. 11  years |
| 19 | Yes | 13 | 13 | Price per seat* | Number |  |  | New | Number with prefix | ₹1,850 per seat |
| 20 |  |  |  | Additional Details |  |  |  |  |  |  |
| 21 | Yes | 14 | 14 | Workspace Solution | Ready to Move | Ready to Move, Curated Built to Suit | Drop Down | New | Drop Down | Multi Select |
| 22 | Yes | 15 | 15 | Business Days and Hours | Start time - End time and tick box for days | Start time - End time <br>Day tick box (5 days a week) (6 days a week) | Drop Down |  | Start time - End time | (9:00 am - 19:00 pm) |
| 23 | Yes | 16 | 16 | Amenities | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi |  |  | Tick box | Multi Select |
| 24 | Yes | 17 | 17 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Map with location search and leaflet |
| 25 |  |  |  | Documents |  |  |  |  |  |  |
| 26 | Yes | 18 | 18 | Brochure | Media |  |  |  | Media (PDF) | Less than 2MB |
| 27 | Yes | 19 | 19 | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo | On clicking will be routed to Youtube or Vimeo |

#### Property & Project Input Fields — Columns EZ–FJ: Managed Space Operator / Uploading  Managed Office Space Project (Managed Space Operator)	 - backend

| Row | EZ | FA | FB | FC | FD | FE | FF | FG | FH | FI | FJ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2 |  |  | Managed Space Operator |  |  |  |  |  |  |  |  |
| 3 |  |  |  |  | Uploading  Managed Office Space Project (Managed Space Operator)	 - backend |  |  |  |  | 17-06-2026 |  |
| 4 |  | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields | Himanshu |  |
| 5 |  | Can be edit through Admin panel only |  |  | Primary Details |  |  |  |  |  |  |
| 6 |  |  | 1 | 15 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior |  | Media (Image + Video) | Multiple Images can be added <br>Image - JPEG, JPG, PNG, <br>Video - MP4, MOV<br>Size: Image - less than 2MB each, Video: Less than 5MB each |
| 7 |  |  | 2 | 5 | Managed Centres* | Text |  |  |  | Text box | Alpha numeric |
| 8 |  |  | 3 | 6 | About Centre* | Text |  |  |  | Text box | Alpha numeric |
| 9 |  |  | 4 | 2 | Transaction Type* | Lease | Pre-selected |  | New | Radio button | Single select |
| 10 |  |  | 5 | 3 | City* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 11 |  |  | 6 | 4 | Location* | Drop Down + Search |  |  |  | Search with auto fill | Single city selection |
| 12 |  |  | 7 | 1 | Asset Class* | Pre-selected with  Managed Office Space | Managed Office Space | Drop Down | New | Radio button | Single select |
| 13 |  |  | 8 | 7 | Property Available From* | Immediate | Immediate, 3 Months |  |  | Radio button | Single select |
| 14 |  |  | 9 | 8 | Workspace Solution | Ready to Move | Ready to Move, Curated Built to Suit | Drop Down | New | Drop Down | Multi Select |
| 15 |  |  |  |  | Managed Office Format |  |  |  |  |  |  |
| 16 |  |  | 10 | 9 | Total Number of seats* | Number |  |  | New | Number with prefix | 100 seats |
| 17 |  |  | 11 | 10 | Meeting Rooms | Radio Button | Yes/No |  | New | Radio button | 50 members |
| 18 |  |  | 12 | 11 | Minimum Lock-in period* | Number |  |  |  | Text box with prefix | Only Numbers Eg. 11  years |
| 19 |  |  | 13 | 12 | Price per seat* | <Number> per seat/month |  | Per seat/month | New | Number with prefix | ₹1,850 per seat/month |
| 20 | Primary |  |  |  | Additional Details |  |  |  |  |  |  |
| 21 |  |  | 14 | 13 | Business Days and Hours | Start time - End time and tick box for days | Start time - End time <br>Day tick box (5 days a week) (6 days a week) | Drop Down |  | Start time - End time | (9:00 am - 19:00 pm) |
| 22 |  |  | 15 | 14 | Existing Tenants | Text box |  | Drop Down |  | Drop Down | Eg.10 |
| 23 |  |  | 16 | 16 | Amenities | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Event spaces, Game lounge,  IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Wellness room, Whiteboard, WiFi | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Event spaces, Game lounge,  IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Wellness room, Whiteboard, WiFi | Drop Down |  | Tick box | Eg.10 |
| 24 |  |  | 17 | 17 | Google Location | Drop Down + Search |  |  |  | Drop Down + Search | Single select |
| 25 |  |  |  |  | Documents |  |  |  |  |  | Multi Select |
| 26 |  |  | 18 | 18 | Brochure | Media |  |  |  | Media (PDF) | Map with location search and leaflet |
| 27 |  |  |  |  | Add Video URL | URL (Could be from Youtube or Vimeo) |  |  |  | URL Link for Youtube or Vimeo |  |
| 28 |  |  | 19 | 19 | Assign Keydemand POC | Select from KD team user | Multiple users can be selected |  |  |  | Less than 2MB |
| 29 |  |  |  |  |  |  |  |  |  |  | On clicking will be routed to Youtube or Vimeo |
| 34 |  |  |  |  | These are entirely new - so no new /renaming is done |  |  |  |  |  |  |

#### Property & Project Input Fields — Columns FL–FM: (untitled block)

| Row | FL | FM |
|---|---|---|
| 4 | Can  be edited-Yes/No | View Page Order |
| 6 | Yes | 1 |
| 7 | Yes | 2 |
| 8 | Yes | 3 |
| 9 | No | 4 |
| 10 | No | 5 |
| 11 | No | 6 |
| 12 | No | 7 |
| 13 | Yes | 8 |
| 15 | Yes | 9 |
| 16 | Yes | 10 |
| 17 | Yes | 11 |
| 18 | Yes | 12 |
| 19 | Yes | 13 |
| 21 | Yes | 14 |
| 22 | Yes | 15 |
| 23 | Yes | 16 |
| 24 | Yes | 17 |
| 25 | Yes | 18 |
| 26 | Yes | 19 |
| 27 | Yes | 20 |
| 28 | Yes | 21 |
| 30 | Yes | 22 |
| 31 | Yes | 23 |

#### Property & Project Input Fields — Columns FO–FT: Managed Space Operator / Uploading  Flex  Space (Managed Space Operator)

| Row | FO | FP | FQ | FR | FS | FT |
|---|---|---|---|---|---|---|
| 2 |  | Managed Space Operator |  |  |  |  |
| 3 |  | Uploading  Flex  Space (Managed Space Operator) |  |  |  |  |
| 4 | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | V2 New Fields |
| 5 |  | Primary details |  |  |  |  |
| 6 | 13 | Images & Videos* | Media |  | Same as V1- Front Side, Interior, Exterior |  |
| 7 | 3 | Centre Name* | Text |  |  |  |
| 8 | 6 | About Centre* | Text |  |  |  |
| 9 | 2 | Asset Class* | Pre-selected with  Managed Office Space | Managed Office Space |  | New |
| 10 | 4 | City* | Drop Down + Search |  |  |  |
| 11 | 5 | Locality* | Drop Down + Search |  |  |  |
| 12 | 1 | Transaction Type* | Lease | Lease |  |  |
| 13 | 7 | Property Available From* | Immediate | Immediate, Within 3 months |  |  |
| 14 |  | Flex Space Formats |  |  |  |  |
| 15 | 8 | Rate per seat for Flexi Desk* | Text |  | At least one |  |
| 16 | 9 | Rate per seat for Dedicated Desk* | Text |  | At least one |  |
| 17 | 10 | Rate per seat for Meeting Room* | Text |  | At least one |  |
| 18 | 11 | Rate per seat for Cabins* | Text |  | At least one |  |
| 19 | 12 | Rate per seat for Managed Office* | Text |  | At least one |  |
| 20 |  | Additional Details |  |  |  |  |
| 21 | 14 | Buisness Hours | Fixed timings | Fixed Timings, 24 Hours |  |  |
| 22 | 15 | Bike Parking | Payable | Payable, Included, Unavailable |  |  |
| 23 | 16 | Car parking | Payable | Payable, Included, Unavailable |  |  |
| 24 | 17 | Floor Number | Text |  |  |  |
| 25 | 18 | Age of property | 5 - 10 Years | Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years |  |  |
| 26 | 19 | Nearest Connectivity | Railway Station | Metro Station, Railway Station, Bus Station |  |  |
| 27 | 20 | Amenities* | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi. |  |  |
| 28 | 21 | Google Location | Drop Down + Search |  |  |  |
| 29 |  | Documents |  |  |  |  |
| 30 | 22 | Brochure | Media |  |  |  |
| 31 | 23 | Add Video URL | Text |  |  |  |
| 34 |  | These are entirely new - so no new /renaming is done |  |  |  |  |

#### Property & Project Input Fields — Columns FW–FZ: Projects / Developer Project Lease / Uploading Project (Developer) : Lease

| Row | FW | FX | FY | FZ |
|---|---|---|---|---|
| 1 | Projects |  |  |  |
| 2 |  |  |  | Developer Project Lease |
| 3 |  |  |  | Uploading Project (Developer) : Lease |
| 4 | Can  be edited-Yes/No | View Page Order | Add/Upload Form Order | Overview |
| 5 | Yes | 1 | 3 | Developer Name* |
| 6 | Yes | 2 |  | Developer POC* |
| 7 | Yes | 3 | 2 | Project Name* |
| 8 | Yes | 4 | 5 | Project Type* |
| 9 | No | 5 | 15 | Transaction Type* |
| 10 | No | 6 |  | State* |
| 11 | No | 7 |  | City** |
| 12 | No | 8 |  | Pincode* |
| 13 | No | 9 | 4 | Location * |
| 14 | Yes | 10 | 11 | Project Status* |
| 15 | Yes | 11 | 12 | Posession Date* |
| 16 | Yes | 12 |  | Age of Project* |
| 17 | Yes | 13 | 9 | Property Type* |
| 18 | Yes | 14 | 8 | Total Built-up Area in sq.ft* |
| 19 | Yes | 15 | 10 | Total Carpet Area in sq.ft* |
| 20 | Yes | 16 | 22 | Units Available |
| 21 | Yes | 17 | 6 | Unit Size Min |
| 22 | Yes | 18 | 7 | Unit Size Max |
| 23 | Yes | 19 | 16 | Number of Buildings/Towers |
| 24 | Yes | 20 | 17 | Rera Id |
| 25 | Yes | 21 | 21 | CAM / Maintenance Charges (if applicable) |
| 26 |  |  |  | Tag Properties |
| 27 | Yes | 22 |  | Properties |
| 28 |  |  |  | Project Description |
| 29 | Yes | 23 | 13 | About Project |
| 30 | Yes | 24 | 25 | Google Location |
| 31 | Yes | 25 | 23 | Feature & Amenities |
| 32 | Yes | 26 | 18 | Min Price |
| 33 | Yes | 27 | 19 | Max Price |
| 34 | Yes | 28 | 20 | OC Status* |
| 35 | Yes | 29 |  | Floorplans available |
| 36 | Yes | 30 |  | Business Space For |
| 37 | Yes | 31 | 24 | Brochure available |
| 38 | Yes | 32 | 1 | Images & Videos* |
| 39 |  |  |  | Additional Settings |
| 40 | Yes | 33 |  | Current Tenants |
| 41 |  | 34 | 14 | No of Parkings Available |
| 42 |  |  |  | User Tagging |
| 43 |  | 35 |  | Assign Physical Team POC |
| 44 |  | 36 |  | User Type |

#### Property & Project Input Fields — Columns GB–GD: (untitled block)

| Row | GB | GC | GD |
|---|---|---|---|
| 4 | Input Fields | Drop Down | Additional Info |
| 5 | Text / Numbers |  |  |
| 6 | Text |  | Not visible at user end |
| 7 | Text / Numbers |  |  |
| 8 | Commercial Project | IT Parks(IT/ITES), Mixed Use, Commercial Project, Malls/Shopping Centre |  |
| 9 | Lease | Lease, Sale |  |
| 10 | Text |  |  |
| 11 | Drop down with search |  |  |
| 12 | 6 Digit Number |  |  |
| 13 | Drop down with search |  |  |
| 14 | Ready to Move | Ready to Move, Under Construction |  |
| 15 | Number |  |  |
| 16 | Less than 5 years | Less than 5 years, 5 - 10 years, Above 10 years |  |
| 17 | Retail | Retail, Office |  |
| 18 | Number |  |  |
| 19 | Number |  |  |
| 20 | Number |  |  |
| 21 | Number |  |  |
| 22 | Number |  |  |
| 23 | Number |  |  |
| 24 | Text / Numbers |  |  |
| 25 | Number |  |  |
| 27 | Text / Numbers |  |  |
| 29 | Description |  |  |
| 30 | Drop down with search |  |  |
| 31 | 24/7 security | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi. |  |
| 32 | Number |  |  |
| 33 | Number |  |  |
| 34 | Yes | Yes, No |  |
| 35 | Images |  |  |
| 36 | Insurance | Insurance, Agriculture, Automobile, Aviation, Banking, Chemical, Consumer Durables, Defence, E-Commerce, Electronics, Energy, Engineering, Financial Services, FMCG, Healthcare, Infrastructure, IT and BPM, Manufacturing, Media and Entertainment, Oil and Gas, Other, Pharmaceuticals, Real Estate, Science and Technology, Services, Startup, Telecommunications, Textile, Tourism and Hospitality |  |
| 37 | Images |  |  |
| 38 | Images & Videos* |  |  |
| 40 | Number |  |  |
| 41 | Number |  |  |
| 43 | Kavan Nanaiah | Kavan Nanaiah, Deepali, Shamli, Sohel, Nilesh, Ajay, Akhil, Raja, Yash, Prakash, Shanker, Ramesh, Dhanbal, Chetna Bhanushali, Sabeer Basha, Navaneeth, Jeevan, Rohith, Prasad Babu, Arun |  |
| 44 | Brand | Brand, Agent |  |

#### Property & Project Input Fields — Columns GF–GH: Developer Project Sale / Uploading Project (Developer) : Sales

| Row | GF | GG | GH |
|---|---|---|---|
| 2 |  | Developer Project Sale |  |
| 3 |  | Uploading Project (Developer) : Sales |  |
| 4 |  | Overview | Input Fields |
| 5 | 1 | Developer Name* | Text / Numbers |
| 6 | 2 | Developer POC* | Text |
| 7 | 3 | Project Name* | Text / Numbers |
| 8 | 4 | Project Type* | Commercial Project |
| 9 | 5 | Transaction Type* | Sales |
| 10 | 6 | State* | Text |
| 11 | 7 | City** | Drop down with search |
| 12 | 8 | Pincode* | 6 Digit Number |
| 13 | 9 | Location * | Drop down with search |
| 14 | 10 | Project Status* | Ready to Move |
| 15 | 11 | Posession Date* | Number |
| 16 | 12 | Age of Project* | Less than 5 years |
| 17 | 13 | Property Type* | Retail |
| 18 | 14 | Total Built-up Area in sq.ft* | Number |
| 19 | 15 | Total Carpet Area in sq.ft* | Number |
| 20 | 16 | Units Available | Number |
| 21 | 17 | Unit Size Min | Number |
| 22 | 18 | Unit Size Max | Number |
| 23 | 19 | Number of Buildings/Towers | Number |
| 24 | 20 | Rera Id | Number |
| 25 | 21 | CAM / Maintenance Charges (if applicable) | Number |
| 26 |  | Tag Properties |  |
| 27 | 22 | Properties | Text |
| 28 |  | Project Description |  |
| 29 | 23 | About Project* | Description |
| 30 | 24 | Google Location* | Drop down with search |
| 31 | 25 | Feature & Amenities* | 24/7 security |
| 32 | 26 | Min Price | Number |
| 33 | 27 | Max Price | Number |
| 34 | 28 | OC Status** | Yes |
| 35 | 29 | Floorplans available | Images |
| 36 | 30 | Business Space For | Insurance |
| 37 | 31 | Brochure available | Images |
| 38 | 32 | Images & Videos* | Image/video |
| 39 |  | Additional Settings |  |
| 40 | 33 | Current Tenants | Number |
| 41 | 34 | No of Parkings Available | Number |
| 42 |  | User Tagging |  |
| 43 | 35 | Assign Physical Team POC | Kavan Nanaiah |
| 44 | 36 | User Type* | Brand |

#### Property & Project Input Fields — Columns GM–GN: Uploading Retail Property Sale

| Row | GM | GN |
|---|---|---|
| 3 | Uploading Retail Property Sale |  |
| 4 | Retail All Fields | Input Fields |
| 5 | Overview |  |
| 6 | Images & Videos* |  |
| 7 | Project Name |  |
| 8 | About Property / Project* (Detailed Description) |  |
| 9 | Asset Class* (Retail / Office / Mixed-use) |  |
| 10 | City* |  |
| 11 | Micro-location |  |
| 12 | Transaction Type Sale |  |
| 13 | Carpet Area (sq. ft.)* |  |
| 14 | Built up Area |  |
| 15 | Rate per sq. ft. / (Carpet) |  |
| 16 | Property Available From* |  |
| 17 | Store Type* (High Street / Mall  / Standalone) |  |
| 18 | Floor |  |
| 19 | Property Specifications |  |
| 20 | Ceiling Height (ft.)* |  |
| 21 | Frontage (ft.) |  |
| 22 | Mezzanine Available (Yes/No + Area if applicable) |  |
| 23 | Toilets Available (Yes/No) |  |
| 24 | Fitouts Available |  |
| 25 | Number of Parking Spaces |  |
| 26 | OC Status* (Received / Applied / Not Applicable) |  |
| 27 | Amenities |  |
| 28 | Commercials & Financials |  |
| 29 | CAM / Maintenance (if applicable) |  |
| 30 | Location & Connectivity |  |
| 31 | Google Location (Embedded Map) |  |
| 32 | Nearby Landmarks |  |
| 33 | Nearby Residential Catchment |  |
| 34 | Nearby IT Parks / Offices |  |
| 35 | Metro / Road Connectivity |  |
| 36 | Other Documents |  |

#### Property & Project Input Fields — Columns GP–GQ: Uploading F&B Property Lease

| Row | GP | GQ |
|---|---|---|
| 3 | Uploading F&B Property Lease |  |
| 4 | F&B All Fields | Input Fields |
| 5 | Overview |  |
| 6 | Images & Videos* |  |
| 7 | Project Name |  |
| 8 | About Property / Project* (Detailed Description) |  |
| 9 | Asset Class* (Retail / Office / Mixed-use) |  |
| 10 | City* |  |
| 11 | Micro-location |  |
| 12 | Transaction Type Lease*/Revenue Share/MG Revenue Share |  |
| 13 | Carpet Area (sq. ft.)* |  |
| 14 | Rent |  |
| 15 | Property Available From* |  |
| 16 | Store Type* (High Street / Mall  / Standalone) |  |
| 17 | Floor |  |
| 18 | Property Specifications |  |
| 19 | Ceiling Height (ft.)* |  |
| 20 | Frontage (ft.) |  |
| 21 | Mezzanine Available (Yes/No + Area if applicable) |  |
| 22 | Toilets Available (Yes/No) |  |
| 23 | Fitouts Available |  |
| 24 | Number of Parking Spaces |  |
| 25 | OC Status* (Received / Applied / Not Applicable) |  |
| 26 | Amenities |  |
| 27 | Cooking type |  |
| 28 | Non-veg allowed |  |
| 29 | Format |  |
| 30 | Commercials & Financials |  |
| 31 | Deposit (in months) |  |
| 32 | CAM / Maintenance (if applicable) |  |
| 33 | Lease tenre in years |  |
| 34 | Lock-in Period |  |
| 35 | Location & Connectivity |  |
| 36 | Google Location (Embedded Map) |  |
| 37 | Nearby Landmarks |  |
| 38 | Nearby Residential Catchment |  |
| 39 | Nearby IT Parks / Offices |  |
| 40 | Metro / Road Connectivity |  |
| 41 | Other Documents |  |

#### Property & Project Input Fields — Columns GS–GT: Uploading F&B Property Sale

| Row | GS | GT |
|---|---|---|
| 3 | Uploading F&B Property Sale |  |
| 4 | F&B All Fields | Input Fields |
| 5 | Overview |  |
| 6 | Images & Videos* |  |
| 7 | Project Name |  |
| 8 | About Property / Project* (Detailed Description) |  |
| 9 | Asset Class* (Retail / Office / Mixed-use) |  |
| 10 | City* |  |
| 11 | Micro-location |  |
| 12 | Transaction Type (Sale) |  |
| 13 | Carpet Area (sq. ft.)* |  |
| 14 | Builtup Area |  |
| 15 | Rate per sq. ft. (Carpet)* |  |
| 16 | Property Available From* |  |
| 17 | Store Type* (High Street / Mall  / Standalone) |  |
| 18 | Floor |  |
| 19 | Property Specifications |  |
| 20 | Ceiling Height (ft.)* |  |
| 21 | Frontage (ft.) |  |
| 22 | Mezzanine Available (Yes/No + Area if applicable) |  |
| 23 | Toilets Available (Yes/No) |  |
| 24 | Fitouts Available |  |
| 25 | Number of Parking Spaces |  |
| 26 | OC Status* (Received / Applied / Not Applicable) |  |
| 27 | Amenities |  |
| 28 | Commercials & Financials |  |
| 29 | CAM / Maintenance (if applicable) |  |
| 30 | Location & Connectivity |  |
| 31 | Google Location (Embedded Map) |  |
| 32 | Nearby Landmarks |  |
| 33 | Nearby Residential Catchment |  |
| 34 | Nearby IT Parks / Offices |  |
| 35 | Metro / Road Connectivity |  |
| 36 | Other Documents |  |

#### Property & Project Input Fields — Columns GW–GX: Uploading Office Property  Rent

| Row | GW | GX |
|---|---|---|
| 3 | Uploading Office Property  Rent |  |
| 4 | Office All Fields | Input Fields |
| 5 | Overview |  |
| 6 | Images & Videos* | Add images and videos (upto 5mb images & 15mb videos with JPEG, PNG, |
| 7 | Project Name |  |
| 8 | About Property / Project* (Detailed Description) | AI Generated based on the input given for the listing |
| 9 | Asset Class* (Retail / Office / Mixed-use) |  |
| 10 | City* |  |
| 11 | Locality* |  |
| 12 | Transaction Type (Rent) |  |
| 13 | Carpet Area (sq. ft.)* |  |
| 14 | Rent Amount* (per month) |  |
| 15 | Rate per sq. ft. (Carpet)* | Autofilled when user provides Rent Amount* and carpet area |
| 16 | Property Available From* |  |
| 17 | Property Specifications |  |
| 18 | Property Type/Building Type |  |
| 19 | Fitout status (Furnished) |  |
| 20 | Washroom available (Numbers) |  |
| 21 | Bike parking allotted (numbers) |  |
| 22 | Car parking allotted (numbers) |  |
| 23 | Total floors |  |
| 24 | Floor Number |  |
| 25 | Meeting rooms (numbers) |  |
| 26 | Cabins (numbers) |  |
| 27 | Age of property |  |
| 28 | OC Status* | Yes/No |
| 29 | Amenities |  |
| 30 | Commercials & Financials |  |
| 31 | Deposit (in months) |  |
| 32 | Lease tenre in years |  |
| 33 | Lock-in Period |  |
| 34 | CAM / Maintenance (if applicable) |  |
| 35 | Rent escalation | % every 1, 3, 5 years |
| 36 | Location & Connectivity |  |
| 37 | Google Location (Embedded Map) |  |
| 38 | Nearby Landmarks |  |
| 39 | Nearby Residential Catchment |  |
| 40 | Nearby IT Parks / Offices |  |
| 41 | Metro / Road Connectivity |  |
| 42 | Other Documents | File Name (Upload file should be less than 5MB in PDF format) |

#### Property & Project Input Fields — Columns GZ–HA: Office Property  Sale

| Row | GZ | HA |
|---|---|---|
| 3 | Office Property  Sale |  |
| 4 | Office All Fields | Input Fields |
| 5 | Overview |  |
| 6 | Images & Videos* | Add images and videos (upto 5mb images & 15mb videos with JPEG, PNG, |
| 7 | Project Name |  |
| 8 | About Property / Project* (Detailed Description) | AI Generated based on the input given for the listing |
| 9 | Asset Class* (Retail / Office / Mixed-use) |  |
| 10 | City* |  |
| 11 | Locality* |  |
| 12 | Transaction Type (Sale) |  |
| 13 | Carpet Area (sq. ft.)* |  |
| 14 | Builtup Area (sq. ft.) |  |
| 15 | Rate per sq. ft. (Carpet)* | Autofilled when user provides Rent Amount* and carpet area |
| 16 | Property Available From* |  |
| 17 | Property Specifications |  |
| 18 | Property Type/Building Type |  |
| 19 | Fitout status (Furnished) |  |
| 20 | Washroom available (Numbers) |  |
| 21 | Bike parking allotted (numbers) |  |
| 22 | Car parking allotted (numbers) |  |
| 23 | Total floors |  |
| 24 | Floor Number |  |
| 25 | Meeting rooms (numbers) |  |
| 26 | Cabins (numbers) |  |
| 27 | Age of property |  |
| 28 | OC Status* | Yes/No |
| 29 | Amenities |  |
| 30 | Commercials & Financials |  |
| 31 | CAM / Maintenance (if applicable) |  |
| 32 | Location & Connectivity |  |
| 33 | Google Location (Embedded Map) |  |
| 34 | Nearby Landmarks |  |
| 35 | Nearby Residential Catchment |  |
| 36 | Nearby IT Parks / Offices |  |
| 37 | Metro / Road Connectivity |  |
| 38 | Other Documents | File Name (Upload file should be less than 5MB in PDF format) |

#### Property & Project Input Fields — Columns HC–HC: (untitled block)

| Row | HC |
|---|---|
| 7 | 3 |
| 8 | 4 |
| 9 | A |
| 10 | 1 |
| 11 | 2 |
| 12 | B |
| 13 | 5 |
| 14 | 6 |
| 15 | 7 |

#### Property & Project Input Fields — Columns HE–HG: For Retail Property

| Row | HE | HF | HG |
|---|---|---|---|
| 3 |  |  | For Retail Property |
| 4 | For Agent (OFFICE property) input fields |  | Asset Class* |
| 5 | Asset Class* |  | Transaction Type |
| 6 | Transaction Type |  |  |
| 7 | Overview |  |  |
| 8 | City* |  |  |
| 9 | Locality* |  |  |
| 10 | Google Location (Embedded Map) |  |  |
| 11 | Carpet Area |  |  |
| 12 | Rent Amount* (per month) |  |  |
| 13 | Rate per sq.ft (carpet) | Autofilled when user provides Rent Amount* and carpet area |  |
| 14 | Project Name |  |  |
| 15 | About Property/Property detail description |  |  |
| 16 | Property Specifications |  |  |
| 17 | Property Available From* |  |  |
| 18 | Property Type/Building Type |  |  |
| 19 | Fitout status (Furnished) |  |  |
| 20 | Washroom available (Numbers) |  |  |
| 21 | Bike parking allotted (numbers) |  |  |
| 22 | Car parking allotted (numbers) |  |  |
| 23 | Total floors |  |  |
| 24 | Floor Number |  |  |
| 25 | Meeting rooms (numbers) |  |  |
| 26 | Cabins (numbers) |  |  |
| 27 | Age of property |  |  |
| 28 | OC Status* |  |  |
| 29 | Amenities |  |  |
| 30 | Images & Videos* |  |  |
| 31 | Commercials & Financials |  |  |
| 32 | Deposit (in months) |  |  |
| 33 | Lease tenre in years |  |  |
| 34 | Lock-in Period |  |  |
| 35 | CAM / Maintenance (if applicable) |  |  |
| 36 | Rent escalation |  |  |
| 37 | Location & Connectivity |  |  |
| 38 | Nearby Landmarks |  |  |
| 39 | Nearby Residential Catchment |  |  |
| 40 | Nearby IT Parks / Offices |  |  |
| 41 | Metro / Road Connectivity |  |  |
| 42 | Other Documents |  |  |

#### Property & Project Input Fields — Columns HI–HI: For F&B property

| Row | HI |
|---|---|
| 3 | For F&B property |
| 4 | Asset Class* |
| 5 | Transaction Type |

#### Property & Project Input Fields — Columns HK–HK: For Physical Team

| Row | HK |
|---|---|
| 3 | For Physical Team |
| 4 | Asset Class* |
| 5 | Transaction Type |

#### Property & Project Input Fields — Columns HM–HT: Developer Projects Lease/Sale- backend / View Page Order / Add/Upload Form Order / Overview / Input Fields / Drop Down / Additional Info / Can  be edited-Yes/No

| Row | HM | HN | HO | HP | HQ | HR | HS | HT |
|---|---|---|---|---|---|---|---|---|
| 2 |  |  |  | Developer Projects Lease/Sale- backend |  |  |  |  |
| 3 |  | View Page Order | Add/Upload Form Order | Overview | Input Fields | Drop Down | Additional Info | Can  be edited-Yes/No |
| 4 |  |  |  | Primary Details |  |  |  |  |
| 5 |  | 1 | 21 | Images & Videos* | Media |  |  | Entire projects can be edit through Admin only |
| 6 |  | 2 | 6 | Project Name* | Text |  | Additional Info |  |
| 7 |  | 3 | 5 | Developer Name* | Text |  |  |  |
| 8 |  | 4 | 3 | City* | Drop Down + Search |  |  |  |
| 9 | Sales | 5 | 4 | Location* | Drop Down + Search |  |  |  |
| 10 |  | 6 | 7 | Project Type* | Drop Down | IT Parks(IT/ITES), Mixed Use, Office Building, Mall, Highstreet |  |  |
| 11 |  | 7 | 9 | Unit Size Min* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| 12 |  | 8 | 10 | Unit Size Max* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| 13 |  | 9 | 8 | Total Project Size in sq.ft* | Number in sft with drop down | Number in sft with drop down | Eg. 2,50,000 sft on carpet area, 2,50,000 sft on built-up area |  |
| 14 |  | 10 | 1 | Asset Class* | Drop Down | Retail + F&B / Mixed Use / Office | Changing it from F&B to Mixed Use (relevancy for this would be from retail, f&b & offices) For retail + fnb it will showcase relevancy for both |  |
| 15 |  | 11 | 12 | Efficiency* | Number with % | The area which is given you to use for example if your property size is 1000sft super built up and your carpet area is 500 sft then the efficiency is 50% |  |  |
| 16 |  | 12 | 13 | Project Status* | Drop Down | Ready to Move, Under Construction |  |  |
| 17 |  | 13 | 14 | Posession Date* | MM/YY |  |  |  |
| 18 |  | 14 | 11 | About Project* | Text |  |  |  |
| 19 |  | 15 | 16 | Total No of Parkings Available | Number |  |  |  |
| 20 |  | 16 | 2 | Transaction Type* | Lease | Lease, Sale |  |  |
| 21 |  | 17 | 17 | Number of Buildings/Towers | Number |  |  |  |
| 22 |  | 18 | 18 | Rera Id | Text |  |  |  |
| 23 |  | 19 | 19 | Quoted Price / Quoted Rent | Number | ₹1,00,000 /sft or ₹150 /sft | For lease (Quoted Rent) For Sale (Quoted Price) if not given Request for price |  |
| 24 |  | 20 | 15 | OC Status* | Received | Received, Applied, Not Available, Under Construction |  |  |
| 26 |  | 21 | 20 | Feature & Amenities* | Drop Down | 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Event spaces,  Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room,  WiFi |  |  |
| 27 |  | 22 | 22 | Brochure | Media |  | Upload PDF less than 5MB |  |
| 28 |  | 23 | 23 | Google Location* | Drop Down + Search |  |  |  |
| 29 |  | 24 | 24 | Age of Project | Less than 5 years | Less than 5 years, 5 - 10 years, Above 10 years |  |  |
| 30 |  | 25 | 25 | Floorplans available | Media | Media | PDF, JPEG,PNG less than 5mb (Multi-upload) |  |
| 31 |  |  |  | User Tagging |  |  |  |  |
| 32 |  | 26 | 26 | Assign Keydemand POC | Drop Down | Kavan Nanaiah, Deepali, Shamli, Sohel, Nilesh, Ajay, Akhil, Raja, Yash, Prakash, Shanker, Ramesh, Dhanbal, Chetna Bhanushali, Sabeer Basha, Navaneeth, Jeevan, Rohith, Prasad Babu, Arun | This field only should visible at the Admin end while uploading project, and not at the user end |  |
| 48 |  |  |  | Deleted Fields from V1 | Input Field |  |  |  |
| 49 |  |  |  | Pincode | Text |  |  |  |
| 51 |  |  |  | On Website- V1 | New Field Name-V2 |  |  |  |
| 52 |  |  |  | Assign Physical Team POC | Assign Keydemand POC |  |  |  |
| 53 |  |  |  | About Project | Project Description |  |  |  |
| 54 |  |  |  | CAM Charges | CAM / Maintenance Charges (if applicable) |  |  |  |
| 61 |  |  |  |  |  |  |  | Insurance, Agriculture, Automobile, Aviation, Banking, Chemical, Consumer Durables, Defence, E-Commerce, Electronics, Energy, Engineering, Financial Services, FMCG, Healthcare, Infrastructure, IT and BPM, Manufacturing, Media and Entertainment, Oil and Gas, Other, Pharmaceuticals, Real Estate, Science and Technology, Services, Startup, Telecommunications, Textile, Tourism and Hospitality |

#### Tab: New Platform Requirement-Filter


#### New Platform Requirement-Filter — Columns A–C: (untitled block)

| Row | A | B | C |
|---|---|---|---|
| 2 | Asset Class |  |  |
| 3 | Retail | F&B | Offices |
| 4 | Clothing store | Cafe | Insurance |
| 5 | Automotive Showroom | QSR | Agriculture |
| 6 | ATM | Resto -Bar | Automobile |
| 7 | Clinic and Diagnostic Center | Cloud Kitchen | Aviation |
| 8 | Cosmetic Store | Food Court | Banking |
| 9 | Electronic Store | Fine dine | Chemical |
| 10 | Footwear Store | Casual dine | Consumer Durables |
| 11 | Gym | Specialty Restaurants | Defence |
| 12 | Jewellery Store | Bistros and Brasseries | E-Commerce |
| 13 | Salon | Bakeries and Patisseries | Electronics |
| 14 | Pharmacy |  | Energy |
| 15 | Variety stores |  | Engineering |
| 16 | Home Decor |  | Financial Services |
| 17 | Game Zone |  | FMCG |
| 18 | Stationery |  | Healthcare |
| 19 | Multiplex |  | Infrastructure |
| 20 | Sports Wear |  | IT and BPM |
| 21 | Eye wear |  | Manufacturing |
| 22 | Accesorries |  | Media and Entertainment |
| 23 | Watch |  | Oil and Gas |
| 24 | Luggage |  | Pharmaceuticals |
| 25 | Super Market |  | Real Estate |
| 26 |  |  | Science and Technology |
| 27 |  |  | Services |
| 28 |  |  | Startup |
| 29 |  |  | Telecommunications |
| 30 |  |  | Textile |
| 31 |  |  | Tourism and Hospitality |
| 34 | CTA's |  |  |

#### New Platform Requirement-Filter — Columns E–K: (untitled block)

| Row | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|
| 2 | Customized Search \| Filters \| PROPERTIES & PROJECTS \| CITY, ASSET CLASS & LOCATION IS MANDATORY |  |  |  |  |  |  |
| 3 | Listing Type | Asset Class | Transaction Type | Store Type | Specification | Tenancy & Legal | Amenities |
| 4 | Properties | Retail | Lease | Highstreet | Carpet Area | Lease tenure In years | Amenities - AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |
| 5 |  |  | Sale | Mall | Rent per month | Lock in period |  |
| 6 |  |  |  |  | Ceiling Height | Property Available from - Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |
| 7 |  |  |  |  | Frontage | OC Status - Received, Applied, Not Applicable |  |
| 8 |  |  |  |  | Floor -Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  |
| 9 |  |  |  |  | Washroom Available-Yes/No |  |  |
| 10 |  |  |  |  | Parking Available-Yes/No |  |  |
| 16 | Listing Type | Asset Class | Transaction Type | Store Type | Specification | Tenancy & Legal | Amenities |
| 17 | Properties | F&B | Lease | Highstreet | Carpet Area | Lease tenure In years - Slider | Amenities - AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking |
| 18 |  |  | Sale | Mall | Rent per month | Lock in period - Slider |  |
| 19 |  |  |  |  | Ceiling Height | Property Available from - Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |
| 20 |  |  |  |  | Frontage | OC Status - Received, Applied, Not Applicable |  |
| 21 |  |  |  |  | Floor -Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor |  |  |
| 22 |  |  |  |  | Washroom Available-Yes/No |  |  |
| 23 |  |  |  |  | Parking Available-Yes/No |  |  |
| 27 | Listing Type | Asset Class | Transaction Type | Specification | Tenancy & Legal | More Filters |  |
| 28 | Properties | Office Space | Lease | Built-up | Lease tenure In years | Fitouts Status - Furnished, Unfurnished, Developer/Landlord to do fitout |  |
| 29 |  |  | Sale | Carpet Area | Lock in period |  |  |
| 30 |  |  |  | Rent per month | OC Status - Received, Applied, Not Applicable |  |  |
| 31 |  |  |  | Floor - 1 to 5, 5 to 10, 10 to 15, Above 15 | Property Available from - Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  |  |
| 32 |  |  |  | Washroom Available- Yes/No |  |  |  |
| 33 |  |  |  | Bike Parking - Slider |  |  |  |
| 34 |  |  |  | Car Parking - Slider |  |  |  |
| 35 | Listing Type | Asset Class | Transaction Type | Formats | Parking | Property Available from - Immediate/Within 3 months |  |
| 36 | Properties | Managed Offices | Lease | Number of seats - Slider | Bike Parking -Slider |  |  |
| 37 |  |  |  |  | Car Parking-Slider |  |  |
| 39 | Listing Type | Asset Class | Transaction Type | Total Project size in sq.ft | Project Status | Project Type | Seats |
| 40 | Project | Retail + F&B | Lease | Size min to max with Slider | Ready to Move, Under Construction | IT Parks(IT/ITES), Mixed Use, Office Building, Mall, Highstreet | Number of seats - Slider |
| 41 |  | Mixed-used | Sale |  |  |  |  |
| 42 |  | Office |  |  |  |  |  |
| 43 |  | Managed Offices |  |  |  |  |  |

#### New Platform Requirement-Filter — Columns M–Z: (untitled block)

| Row | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  | Demand Filters | Validations |  |  | Customized Search \| Filters \| Demand \| CITY, ASSET CLASS & LOCATION IS MANDATORY |  |  |  |  |  |  |  |
| 2 | Enquire/Support |  | Transaction type | Lease, Buy |  |  | Listing Type | Asset Class | Transaction Type | Store Type | Specification | Tenancy & Legal | More Filters |  |
| 3 | Full Name | Alphabetic Character | Assest Class | Retail, F&B, Office, Managed Space |  |  | Demand | Retail | Lease | Highstreet, Mall | Carpet area in sq.ft - Min - Max | Lease tenure in years | Amenities required - AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Signage, Vastu Compliance, Visitor's Parking | . |
| 4 | Company Name |  | City | All city list |  |  |  |  | Sale |  | Ceiling Height - Min - Max | Lockin period | Fitouts Required- Yes, No |  |
| 5 | Your Designation |  | Budget | Min-Max type and scroll |  |  |  |  |  |  | Floor Preference - Ground, Any | Possession needed - Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months | . |  |
| 6 | Select City |  | Carpet Area | Min-Max type and scroll |  |  |  |  |  |  | Toilet required - Yes, No | OC required -	Yes, No |  |  |
| 7 | Official Email id |  | Possession needed | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months | . |  |  |  |  |  | Parking Available-Yes, No |  |  |  |
| 8 | Phone Number | With OTP Verification | Floor Preference | Ground, Any, |  |  |  |  |  |  |  |  |  |  |
| 9 | Preferred mode of contact |  | OC required | Yes,No |  |  |  |  |  |  |  |  |  |  |
| 10 |  |  | End Use | Insurance, Agriculture, Automobile, Aviation, Banking, Chemical, Consumer Durables, Defence, E-Commerce, Electronics, Energy, Engineering, Financial Services, FMCG, Healthcare, Infrastructure, IT and BPM, Manufacturing, Media and Entertainment, Oil and Gas, Other, Pharmaceuticals, Real Estate, Science and Technology, Services, Startup, Telecommunications, Textile, Tourism and Hospitality | . |  |  |  |  |  |  |  |  |  |
| 11 |  |  | Number of seats | Less than 20, More than 20 |  |  |  |  |  |  |  |  |  |  |
| 12 |  |  | Advanced Filter |  |  |  | Listing Type | Asset Class | Transaction Type | Store Type | Specification | Tenancy & Legal | More Filters |  |
| 13 |  |  | Clear ceiling height | Min-Max type and scroll |  |  | Demand | F&B | Lease | Highstreet, Mall | Carpet area in sq.ft - Min - Max | Lease Tenure in years | Amenities required - AC, CCTV Surveillance, Central Air Conditionig, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking | . |
| 14 |  |  | Frontage in feet | Min-Max type and scroll |  |  |  |  | Sale |  | Ceiling Height - Min - Max | Lock-in Period | Cooking Type - Electric, Gas |  |
| 15 |  |  | Store type | Highstreet, Mall |  |  |  |  |  |  | Floor Preference - Ground, Any | Possession needed - Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months | Non-Veg Served - Yes, No |  |
| 16 |  |  | Toilet Required | Yes,No |  |  |  |  |  |  | Toilet required - Yes,No | OC required -	Yes, No | Fitouts Required- Yes, No |  |
| 17 |  |  | Car Parking Required | Yes,No |  |  |  |  |  |  | Parking Available-Yes, No |  |  |  |
| 18 |  |  | Bike Parking required | Yes,No |  |  |  |  |  |  |  |  |  |  |
| 20 |  |  |  |  |  |  |  |  |  |  |  | . |  |  |
| 21 |  |  |  |  |  |  | Listing Type | Asset Class | Transaction Type |  | Specification | Tenancy & Legal | More Filters |  |
| 22 |  |  |  |  |  |  | Demand | Office Space | Lease |  | Carpet area in sq.ft - Min - Max | Lease tenure in years | Amenities required - AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking | . |
| 23 |  |  |  |  |  |  |  |  | Sale |  | Floor Preference - Ground, Any | Lockin period | Fitout Status - Unfurnished, Furnished |  |
| 24 |  |  |  |  |  |  |  |  |  |  | Toilet required - Yes,No | OC required - Yes, No |  | . |
| 25 |  |  |  |  |  |  |  |  |  |  | Car Available- Yes,No |  |  | . |
| 26 |  |  |  |  |  |  |  |  |  |  | Bike Available- Yes,No |  |  |  |
| 30 |  |  |  |  |  |  | Listing Type | Asset Class | Transaction Type |  | Specification | Tenancy & Legal | More Filters |  |
| 31 |  |  |  |  |  |  | Demand | Manage Spaces | Lease |  | Number of seats - Less than 20, More than 20 | Possession needed - Immediate, Within 3 months |  |  |
| 35 |  |  |  |  |  | Phase 2 | Listing Type | Asset Class | Transaction Type |  | Specification | Tenancy & Legal | More Filters | . |
| 36 |  |  |  |  |  |  | Demand | Flex space | Lease |  | City | Possession needed - Immediate, Within 3 months | Amenities required - 24/7 security, Cafeteria/Food court, Cleaning services, Conference rooms, Enhanced Hvac Standards, Event spaces, F & B market, Game lounge, Hand sanitzers, IT Services, Lift, Mail and pacakage handling, Onsite staff, Outdoor space, Pantry, Parking, Pet-friendly, Phone booths, Power backup, Printing and Stationary, Professional and Social Events, Projector, Quiet space, Server rooms, Washroom, Wellness room, Whiteboard, WiFi. |  |
| 37 |  |  |  |  |  |  |  |  |  |  | Location |  |  |  |
| 38 |  |  |  |  |  |  |  |  |  |  | No. of Seats For Flexi Desk |  |  |  |
| 39 |  |  |  |  |  |  |  |  |  |  | No. of Seats For Dedicated Desk |  |  |  |
| 40 |  |  |  |  |  |  |  |  |  |  | No. of Seats For Meeting Room |  |  |  |
| 41 |  |  |  |  |  |  |  |  |  |  | No. of Seats For Cabins |  |  |  |
| 42 |  |  |  |  |  |  |  |  |  |  | No. of Seats For Managed Office |  |  |  |
| 43 |  |  |  |  |  |  |  |  |  |  | Bike Parking required - Yes, No |  |  |  |
| 44 |  |  |  |  |  |  |  |  |  |  | Car Parking Required - Yes, No |  |  |  |

#### Tab: User Profile


#### User Profile — Columns A–E: (untitled block)

| Row | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Individual User Agent | Input Type | Selection | Can Edit | Drop Down |
| 2 | Upload profile picture (5mb) jpg, png | Image |  | Yes |  |
| 3 | Name | Text box |  | Yes |  |
| 4 | Mobile number | Number |  | No |  |
| 5 | Email | Text box |  | Yes |  |
| 6 | Asset Class | Retail | Multiple | No | Retail, F&B, Office |
| 7 | Transaction Type | Lease | Multiple | Yes | Lease, Buy |
| 8 | City | Mumbai |  | Yes | Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi |
| 9 | Company Name | Text box |  | Yes |  |
| 10 | Designation | Text box |  | Yes |  |
| 11 | Experience | Text box |  | Yes |  |
| 12 | WhatsApp notification | On/Off |  | Yes |  |
| 13 | About | Text box |  | Yes |  |
| 14 | RERA Number | Text box |  | Yes |  |

#### User Profile — Columns G–K: (untitled block)

| Row | G | H | I | J | K |
|---|---|---|---|---|---|
| 1 | Office Tenant / Managed Space Occupier Individual | Input Type | Selection | Can Edit | Drop Down |
| 2 | Upload company picture (5mb) jpg, png | Image |  | Yes |  |
| 3 | Name | Text box |  | Yes |  |
| 4 | Mobile number | Number |  | No |  |
| 5 | Email | Text box |  | Yes |  |
| 6 | Asset Class | Office Tenant /Managed Space |  | No |  |
| 7 | Transaction type | Lease | Multiple | Yes | Default |
| 8 | City | Mumbai | Multiple | Yes | Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi |
| 9 | About yourself | Text box |  | Yes |  |
| 10 | Company name | Text box |  | Yes |  |
| 11 | WhatsApp notifications | On/Off |  | Yes |  |
| 12 | Designation | Text box |  | Yes |  |
| 13 | Experience (years) | Text box |  | Yes |  |
| 14 | WhatsApp notification | On/Off |  | Yes |  |

#### User Profile — Columns M–Q: (untitled block)

| Row | M | N | O | P | Q |
|---|---|---|---|---|---|
| 1 | Retail & F&B Individual | Input Type | Selection | Can Edit | Drop Down |
| 2 | Upload brand picture (5mb) jpg, png | Image |  | Yes |  |
| 3 | Name | Text box |  | Yes |  |
| 4 | Mobile number | Number |  | No |  |
| 5 | Email | Text box |  | Yes |  |
| 6 | Asset Class | F&B | Multiple | No | Retail and F&B |
| 7 | Transaction type | Lease | Multiple | Yes | Lease, Buy |
| 8 | City | Mumbai | Multiple | Yes | Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi |
| 9 | About yourself | Text box |  | Yes |  |
| 10 | Company name | Text box |  | Yes |  |
| 11 | WhatsApp notifications | On/Off |  | Yes |  |
| 12 | Designation | Text box |  | Yes |  |
| 13 | Experience (years) | Text box |  | Yes |  |
| 14 | WhatsApp notification | On/Off |  | Yes |  |

#### User Profile — Columns S–W: (untitled block)

| Row | S | T | U | V | W |
|---|---|---|---|---|---|
| 1 | Enterprise Brands F&B and Retail | Input Type | Selection | Can Edit | Drop Down |
| 2 | Upload brand picture (5mb) jpg, png | Image |  | No |  |
| 3 | Account Handler Details | Pre-filled |  | No |  |
| 4 | Brand Name |  |  | No |  |
| 5 | About brand |  |  | No |  |
| 6 | Name |  |  | No |  |
| 7 | Mobile number |  |  | No |  |
| 8 | Asset Class |  |  | No |  |
| 9 | Transaction type |  |  | No |  |
| 10 | City | Mumbai | Multiple | Yes | Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi |
| 11 | Carpet Area | Default size | 3000 sft | Yes |  |
| 12 | Store type | Highstreet, Mall | Muliti Select | Yes |  |
| 13 | Floor Preference | Ground, Any |  | Yes |  |
| 14 | Possession needed | Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months |  | Yes |  |
| 15 | OC required | Yes, No |  | Yes |  |
| 16 | WhatsApp notifications | On/Off |  | Yes |  |
| 17 | Email | Text box |  | Yes |  |
| 18 | Experience (years) | Text box |  | Yes |  |
| 19 | Designation | Text box |  | Yes |  |
| 20 | The Enterprise user retains their original login credentials and full autonomy to edit, delete, and manage their requirements and profiles. |  |  |  |  |
| 21 | Carpet Area - We would want a default carpet area for enterprise users, where the carpet area will be auto fetched from this while they post demand. Eg if mcd we already know that MCD requires a store for retail (3000-4000 sft). |  |  |  |  |

#### User Profile — Columns Y–AC: (untitled block)

| Row | Y | Z | AA | AB | AC |
|---|---|---|---|---|---|
| 1 | Enterprise Managed Office Occupier & Tenant | Input Type | Selection | Can Edit |  |
| 2 | Upload brand picture (5mb) jpg, png | Image |  | No |  |
| 3 | Account Handler Details | Pre-filled |  | No |  |
| 4 | Company name |  |  | No |  |
| 5 | About company |  |  | No |  |
| 6 | Name |  |  | No |  |
| 7 | Mobile number |  |  | No |  |
| 8 | Asset Class | Office Tenant /Managed Space |  | No | Lease, Buy |
| 9 | Transaction type | Lease |  | No |  |
| 10 | City | Mumbai | Multiple | Yes | Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi |
| 11 | Carpet Area | Default size |  | Yes |  |
| 12 | WhatsApp notifications | On/Off |  | Yes |  |
| 13 | Experience (years) | Text box |  | Yes |  |
| 14 | Email | Text box |  | Yes |  |
| 15 | Designation | Text box |  | Yes |  |

#### Tab: Card Details


#### Card Details — Columns A–E: (untitled block)

| Row | A | B | C | D | E |
|---|---|---|---|---|---|
| 1 | Property Cards |  |  |  |  |
| 3 | Retail property | F&B | Office | Managed Office Property | Flex Property |
| 4 | Transaction Type | Transaction Type | Transaction Type | Transaction Type | Transaction Type |
| 5 | Images | Images | Images | Images | Images |
| 6 | Property id | Property id | Property id | Property id | Property id |
| 7 | Carpet Area | Carpet Area | Carpet Area | City | City |
| 8 | City | City | City | Location | Location |
| 9 | Location | Location | Location | Number of seats | Flexi Desk |
| 10 | Total Rent | Total Rent | Fit-out | Team size | Dedicated Desk |
| 11 | Possession | Possession | Possession | Lock-in period | Meeting Room |
| 12 | Floor | Floor | Total Rent | Price per seat | Cabins |
| 13 | Store type | Store type | Posted by | Business Hours | Posted by |
| 14 | Posted by | Posted by | Posted on | Property Available | Posted on |
| 15 | Posted on | Posted on |  | Posted by |  |
| 16 |  |  |  | Posted on |  |
| 17 | CTA - View Phone Number | CTA - View Phone Number | CTA - View Phone Number | CTA - Show Interest | CTA - View Phone number |

#### Card Details — Columns G–K: (untitled block)

| Row | G | H | I | J | K |
|---|---|---|---|---|---|
| 1 | Demand Cards |  |  |  |  |
| 3 | Retail demand | F&B demand | Office demand | Managed Office Demand | Flex Demand |
| 4 | Transaction Type | Transaction Type | Transaction Type | Transaction Type | Transaction Type |
| 5 | Demand id | Demand id | Demand id | Demand id | Demand id |
| 6 | Carpet Area required | Carpet Area required | Carpet Area required | City | City |
| 7 | City | City | City | Location | Location |
| 8 | Location | Location | Location | Number of seats required | Flexi Desk |
| 9 | Possession | Possession | Possession | Team size | Dedicated Desk |
| 10 | Posted by | Posted by | Fit-out status | Lock-in period | Meeting Room |
| 11 | Posted on | Posted on | OC | Posted By | Cabins |
| 12 |  |  | Posted by | Posted On |  |
| 13 |  |  | Posted on |  |  |
| 14 | CTA - Request Contact | CTA - Request Contact | CTA - View Phone Number | CTA - View Phone Number | CTA - View Phone Number |
| 16 | Posted by will appear as name only if the user has allowed to show their brand name, and that too when the relevancy is a match.<br>If not shown brand name then to mention (retail brand, F&B brand) |  |  |  |  |

#### Card Details — Columns N–P: (untitled block)

| Row | N | O | P |
|---|---|---|---|
| 3 | Project Card Developer |  | Project Card Managed Operator |
| 4 | Asset Class |  | Asset Class |
| 5 | Images |  | Transaction Type |
| 6 | Transaction Type |  | Images |
| 7 | Project Name |  | Property id |
| 8 | Project id |  | City |
| 9 | Total Project size in sq.ft |  | Location |
| 10 | Quoted Price | Price on enquiry if price not given | Number of seats |
| 11 | Location |  | Team size |
| 12 | Possession Date |  | Lock-in period |
| 13 | Project Type |  | Price per seat |
| 14 | Posted By |  | Business Hours |
| 15 | CTA -  Show Interest |  | Property Available |
| 16 |  |  | Posted by |
| 17 |  |  | Posted on |
| 18 |  |  | CTA - Show Interest |

#### Card Details — Columns R–R: (untitled block)

| Row | R |
|---|---|
| 4 | Images & Videos* |
| 5 | Managed Centres* |
| 6 | About Centre* |
| 7 | Transaction Type* |
| 8 | City* |
| 9 | Location* |
| 10 | Asset Class* |
| 11 | Property Available From* |
| 12 | Total Number of seats* |
| 13 | Meeting Rooms |
| 14 | Minimum Lock-in period* |
| 15 | Quoted Price* |

#### Tab: User Dashboard


#### User Dashboard — Columns A–C: (untitled block)

| Row | A | B | C |
|---|---|---|---|
| 1 | Registered/Subscribed Agent Home Page |  |  |
| 2 |  | Agent | Comments |
| 3 | Header |  |  |
| 4 | 1 | Keydemand logo |  |
| 5 | 2 | Agent Subscription | To show only if not subscribed |
| 6 | 3 | Explore Properties | Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show office first and if there is no office then to show retail property first. All transcation type would be lease |
| 7 | 4 | Post property | No managed office |
| 8 | 5 | Post demand |  |
| 9 | 6 | Notification | All notifications with re-directions |
| 10 | 7 | Hamburger (Profile) |  |
| 11 | 7 | Dashboard |  |
| 12 | 7.1 | Edit profile | The derived outcomes in user profile |
| 13 | 7.1.1 | Delete Account |  |
| 14 | 7.1.2 | Deactivate Account |  |
| 15 | 7.2 | My listings |  |
| 16 | 7.2.1 | Demand Listings |  |
| 17 | 7.2.2 | Property Listings |  |
| 18 | 7.2.3 | Relevant Demands |  |
| 19 | 7.2.4 | Relevant Properties |  |
| 20 | 7.3 | Post Property |  |
| 21 | 7.4 | Post demand |  |
| 22 | 7.5 | Subscription |  |
| 23 | 7.5.1 | My plan |  |
| 24 | 7.5.2 | Next renewal date |  |
| 25 | 7.5.3 | Cancel membership |  |
| 26 | 7.5.4 | Renew membership |  |
| 27 | 7.5.5 | Customize your plan | Only if the user is registered and not subscibed |
| 28 | 7.6 | Leads/Enquiries |  |
| 29 | 7.6.1 | Phone number viewed |  |
| 30 | 7.6.2 | Image request | Image requested by others |
| 31 | 7.6.3 | Phone number requested | Brands relevnacy when matched they can request for phone number (its status) |
| 32 | 7.7 | Favourites |  |
| 33 | 7.7.1 | Properties |  |
| 34 | 7.7.2 | Projects |  |
| 35 | 7.8 | Alerts & Notifications |  |
| 36 | 7.8.1 | WhatsApp |  |
| 37 | 7.9 | Help |  |
| 38 | 7.9.1 | FAQ | With Chatbot |
| 39 | 7.1 | Logout |  |
| 40 | Body |  |  |
| 41 | 8 | Search functionality |  |
| 42 | 9 | Dashboard |  |
| 43 | 9.1 | Demand Listings |  |
| 44 | 9.2 | Property Listings |  |
| 45 | 9.3 | Phone number viewed |  |
| 46 | 9.4 | Image request | Image requested by you \| Image requested by others |
| 47 | 9.5 | Property Relevancy |  |
| 48 | 9.6 | Demand Relevancy |  |
| 49 | 9.7 | Phone number requested | Brands relevnacy when matched they can request for phone number (its status) |
| 50 | 9.8 | Project Interested |  |
| 51 | 10 | Exclusive projects | Agents can show interest |
| 52 | 11 | Explore properties |  |
| 53 | 12 | Developer projects |  |
| 54 | 13 | Top cluster in <city> |  |
| 55 | 14 | About Keydemand | Multiple videos only about Agent functionality |
| 56 | 14.1 | Book demo |  |
| 57 | 15 | Explore real estate in popular <cities> |  |
| 58 | 16 | Footer |  |
| 59 | Note: Users requested for images should show on the card (Image requested) If accepted then show images only to that user, if pending showcase as pending and if rejected then hide images with CTA button for that user |  |  |

#### User Dashboard — Columns E–G: (untitled block)

| Row | E | F | G |
|---|---|---|---|
| 1 | Brand/Tenant/Managed Space Occupier Home Page Individual |  |  |
| 2 |  | Individual Users | Comments |
| 3 | Header | Keydemand logo |  |
| 4 | 1 | Explore Properties | Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show office first and if there is no office then to show retail property first. All transcation type would be lease |
| 5 | 2 | Post demand |  |
| 6 | 3 | Notification | All notifications with re-directions |
| 7 | 4 | Enterprise Solution |  |
| 8 | 5 | Hamburger (Profile) |  |
| 9 | 5.1 | Dashboard |  |
| 10 | 5.2 | Edit profile | The derived outcomes in user profile |
| 11 | 5.2.1 | Delete Account |  |
| 12 | 5.2.2 | Deactivate Account |  |
| 13 | 5.3 | My listings |  |
| 14 | 5.3.1 | Demand Listings |  |
| 15 | 5.3.2 | Relevant Properties |  |
| 16 | 5.4 | Post demand |  |
| 17 | 5.5 | Leads/Enquiries |  |
| 18 | 5.5.1 | Phone number viewed |  |
| 19 | 5.5.2 | Phone number received | These are the phone numbers received where the property relevancy was received and the office tenant phone number was viewed so both get the phone numbers exchanged |
| 20 | 5.6 | Favourites |  |
| 21 | 5.6.1 | Properties |  |
| 22 | 5.6.2 | Projects |  |
| 23 | 5.7 | Alerts & Notification |  |
| 24 | 5.7.1 | WhatsApp |  |
| 25 | 5.8 | Help |  |
| 26 | 5.8.1 | FAQ | With Chatbot |
| 27 | 5.9 | Logout |  |
| 28 | Body |  |  |
| 29 | 6 | Search functionality |  |
| 30 | 7 | Dashboard |  |
| 31 | 7.1 | Demand Listings |  |
| 32 | 7.2 | Property Relevancy |  |
| 33 | 7.3 | Phone number viewed |  |
| 34 | 7.4 | Phone number request received |  |
| 35 | 7.5 | Image request sent |  |
| 36 | 8 | Exclusive project |  |
| 37 | 9 | New properties in <city> |  |
| 38 | 10 | Developer projects |  |
| 39 | 11 | Top cluster in <city> |  |
| 40 | 12 | Explore real estate in popular <cities> |  |
| 41 | 13 | Footer |  |

#### User Dashboard — Columns I–K: (untitled block)

| Row | I | J | K |
|---|---|---|---|
| 1 | Managed Space Occupier/Tenant & Brand Home Page Enterprise |  |  |
| 2 |  | Enterprise Users | Comments |
| 3 | Header | Keydemand logo |  |
| 4 | 1 | Explore properties | Direct re-direction to explore page where we show property from the asset class selected by the user, if retail, Fnb and Office to show office first and if there is no office then to show retail property first. All transcation type would be lease |
| 5 | 2 | Post demand |  |
| 6 | 3 | AI | Locality Insights, Competing & Complementing, Other |
| 7 | 4 | Notification | All notifications with re-directions |
| 8 | 5 | Hamburger (Profile) |  |
| 9 | 5.1 | Dashboard |  |
| 10 | 5.2 | Edit profile | The derived outcomes in user profile |
| 11 | 5.2.1 | Delete Account |  |
| 12 | 5.2.2 | Deactivate Account |  |
| 13 | 5.3 | My listings |  |
| 14 | 5.3.1 | Demand Listings |  |
| 15 | 5.3.2 | Relevant Properties |  |
| 16 | 5.4 | Post demand |  |
| 17 | 5.5 | Leads/Enquiries |  |
| 18 | 5.5.1 | Phone number viewed |  |
| 19 | 5.5.2 | Phone number received | These are the phone numbers received where the property relevancy was received and the office tenant phone number was viewed so both get the phone numbers exchanged |
| 20 | 5.6 | Favourites |  |
| 21 | 5.6.1 | Properties |  |
| 22 | 5.6.2 | Projects |  |
| 23 | 5.7 | Alerts & Notification |  |
| 24 | 5.7.1 | WhatsApp |  |
| 25 | 5.8 | Help |  |
| 26 | 5.8.1 | FAQ | With Chatbot |
| 27 | 5.9 | RM / TM | One card with their photo > contact number > email id > Call now |
| 28 | 5.1 | Logout |  |
| 29 | Body |  |  |
| 30 | 6 | Search functionality |  |
| 31 | 7 | Dashboard |  |
| 32 | 7.1 | Demand Listings |  |
| 33 | 7.2 | Property Relevancy |  |
| 34 | 7.3 | Phone number viewed |  |
| 35 | 7.4 | Phone number request received |  |
| 36 | 7.5 | Image request sent |  |
| 37 | 8 | Exclusive project | Asset & city specific |
| 38 | 9 | New properties in <city> | Asset & city specific |
| 39 | 10 | Developer projects | Asset & city specific |
| 40 | 11 | Top cluster in <city> | Asset & city specific |
| 41 | 12 | Explore real estate in popular <cities> |  |
| 42 | 13 | Footer |  |
| 46 | AI - Phase 2 |  |  |

#### User Dashboard — Columns M–P: (untitled block)

| Row | M | N | O | P |
|---|---|---|---|---|
| 1 | Keydemand Team |  |  |  |
| 3 | Header | Keydemand logo |  |  |
| 4 | 1 | Explore properties |  |  |
| 5 | 2 | Explore demand |  |  |
| 6 | 3 | Post Property |  |  |
| 7 | 4 | Post demand |  |  |
| 8 | 5 | AI | Locality Insights, Competing & Complementing, Other |  |
| 9 | 6 | Notification | All notifications with re-directions |  |
| 10 | 7 | Hamburger (Profile) |  |  |
| 11 | 7 | Dashboard |  |  |
| 12 | 7.1 | Edit profile | The derived outcomes in user profile |  |
| 13 | 7.1.1 | Delete Account |  |  |
| 14 | 7.1.2 | Deactivate Account |  |  |
| 15 | 7.2 | My listings & Keydemand Listing |  |  |
| 16 | 7.2.1 | Demand Listings |  |  |
| 17 | 7.2.2 | Property Listings |  |  |
| 18 | 7.2.3 | Demand Relevancy |  |  |
| 19 | 7.2.4 | Property Relevancy |  |  |
| 20 | 7.2.5 | Projects Assigned & Leads Received & All Projects on Keydemand |  |  |
| 21 | 7.3 | Post Property |  |  |
| 22 | 7.4 | Post demand |  |  |
| 23 | 7.5 | Leads/Enquiries |  |  |
| 24 | 7.5.1 | Phone number viewed |  |  |
| 25 | 7.5.2 | Image request |  |  |
| 26 | 7.5.3 | Phone number requested | Keydemand receiving request to view contact number by other users (their status) |  |
| 27 | 7.6 | Favourites |  |  |
| 28 | 7.6.1 | Properties |  |  |
| 29 | 7.6.2 | Projects |  |  |
| 30 | 7.7 | Alerts & Notifications |  |  |
| 31 | 7.7.1 | WhatsApp |  |  |
| 32 | 7.8 | Help |  |  |
| 33 | 7.8.1 | FAQ | With Chatbot |  |
| 34 | 7.9 | Logout |  |  |
| 35 | Body |  |  |  |
| 36 | 8 | Search functionality |  |  |
| 37 | 9 | Dashboard |  |  |
| 38 | 9.1 | My Tenants & All Tenants | Enterprise brands assigned to the Keydemand team user & all will have all the brands/tenants on Keydemand enterprise |  |
| 39 | 9.2 | Keydemand Demand Listings | All demands uploaded by Keydemand (Filters will have the names of each user with Keydemand for simple sorting) |  |
| 40 | 9.3 | Keydemand Property Listings | All properties uploaded by Keydemand (Filter with names) |  |
| 41 | 9.4 | Keydemand Phone number viewed | All phone numbers viewed by users and for properties |  |
| 42 | 9.5 | Keydemand Property Relevancy |  |  |
| 43 | 9.6 | Keydemand Demand Relevancy |  |  |
| 44 | 9.7 | Project Interested |  |  |
| 45 | 9.8 | Enterprise Solution Interest | This will be city based, if in mumbai, it will be sent to mumbai team if in Bengaluru then Bengaluru team |  |
| 46 | 9.9 | High Value Leads | These are the high value leads that will come to Keydemand team | Name change done on 29-06-2026 |
| 47 | 10 | Exclusive projects |  |  |
| 48 | 11 | New properties in <city> |  |  |
| 49 | 12 | Developer projects |  |  |
| 50 | 13 | Top cluster in <city> |  |  |
| 51 | 14 | About Keydemand | Multiple videos only about Agent functionality |  |
| 52 | 14.1 | Book demo |  |  |
| 53 | 15 | Explore real estate in popular <cities> |  |  |
| 54 | 16 | Footer |  |  |
| 55 | Note: Users requested for images should show on the card (Image requested) If accepted then show images only to that user, if pending showcase as pending and if rejected then hide images with CTA button for that user |  |  |  |
| 56 | While uploading Keydemand properties, default toggle button on to not show properties to Agents |  |  |  |
| 59 |  | Removed |  |  |
| 60 |  | Keydemand Image request sent |  |  |
| 61 |  | Keydemand Image request received |  |  |
| 62 |  | Phone number request received |  |  |
| 64 |  | Updated Keydemand Dashboard Likns | file:///C:/Users/Nitesh%20Vallamdas/Downloads/Final%20Keydemand%20menu..%202.pdf |  |
| 65 |  |  | https://propvantageproptech-my.sharepoint.com/:w:/g/personal/nitesh_keydemand_in/IQCxFzvguoWPQINmMipNPxD2Ad1UYcfUz-s_xSawjBRPD6M?e=m7V3O3 |  |

#### User Dashboard — Columns R–U: (untitled block)

| Row | R | S | T | U |
|---|---|---|---|---|
| 1 | Added on 22-09-2026 |  |  |  |
| 2 | Dashboard Primary and Secondary Outcomes |  |  |  |
| 3 | Primary | Dashboard | Email | Comments |
| 4 | High Value Lead | New + Total | Daily New |  |
| 5 | Enterprise User Enquiries | New + Total | Daily New | Developer, Managed Space Operator, Retail Brands, F&B Brands, Office Occupiers, Managed Space Occupier |
| 6 | Project Leads | New + Total | Daily New |  |
| 7 | Keydemand Team individual user wise data with their dashboard information | New + Total | Daily New | To showcase all that is there in the dashboard user wise. You can choose dropdown option for the UI |
| 9 | Secondary | Dashboard | Email | Comments |
| 10 | Subscription Active | New + Total | Daily New |  |
| 11 | Subscription Expired | New + Total | Daily New |  |
| 12 | Total Users on platform | New + Total | Daily New | This consist of Retail, F&B, Managed Space Occupier Office Occupier, Agent, Developer, Managed Space Operator. Bifurcate them in the one outcome with different users |
| 13 | Total Number of demands | New + Total | Daily New | Bifurcate it user wise too |
| 14 | Total Number of Properties | New + Total | Daily New | Bifurcate it user wise too |
| 15 | Total Number of Projects | New + Total | Daily New | Bifurcate it user wise too |
| 16 | Leads | New + Total | Daily New |  |
| 17 | Marketing Enquiries | New + Total | Daily New | Pending Sign-up |
| 18 | No of deleted properties | New + Total | Daily New |  |
| 19 | User account deletion | New + Total | Daily New |  |

#### Tab: Clientele
Reference list of brands (with end use), developers, malls, office tenants and managed space operators ("Not found" flags in col I).

#### Clientele — Columns A–I: (untitled block)

| Row | A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Brands | End Use | Developers | Store Type | Mall | Store Type | Office Tenants | Managed Space Operators |  |
| 2 | 99 Pancakes | Cafe | 24 High | Highstreet | 93 Avenue | Mall | Flipkart | Moss Space |  |
| 3 | Chaayos | Cafe | 365 Sharedspace | Highstreet | Bhumi Associates | Mall | Postman | Novel Office |  |
| 4 | Di Bella | Cafe | A Advani Properties LLP (Aadvani Realty) | Highstreet | Celest Hub Mall | Mall | AIDASH | Co works |  |
| 5 | Cothas Coffee | Cafe | Arao | Highstreet | City Centre Mall (Tapadiya City Centre) | Mall | BYJUS | Executive centre |  |
| 6 | mod | Cafe | Adhiraj Constructions | Highstreet | City Centre Mall- Bhilwara | Mall | PUMA | Smartworks |  |
| 7 | Polar Bear | Cafe | Adityaraj Builders (Adhiraj Groupe) | Highstreet | Dolphin Group | Mall | Baya Systems | Tablespace |  |
| 8 | The Tea Toast co. | Cafe | Advaitha Ventures Pvt Ltd | Highstreet | HSR Arc | Mall | Suki | Enzyme |  |
| 9 | Dr.Agarwal Eye Hospital | Clinic | Ajmera Group | Highstreet | Infiniti Mall | Mall | Pepperfry | CRE Spaze |  |
| 10 | Traya | Clinic | Alcove Realty | Highstreet | Inorbit Malls | Mall | Furlenco | Vista Spaces |  |
| 11 | Vetic | Clinic | BCM Group | Highstreet | Kumar Pacific | Mall | Sumeru | Hoda Spaces |  |
| 12 | Allen Solly | Clothing | DD Group(D D Dezines Group) | Highstreet | Little World Mall | Mall | Lancesoft | EBC Space |  |
| 13 | American Eagle | Clothing | Daga Infratech | Highstreet | MGB Felicity Mall | Mall | Prequin | 365 Spaces |  |
| 14 | Arvind | Clothing | Fazlani Realtors LLP | Highstreet | Mall of Kolar | Mall | Credt Saison | Urban Vault |  |
| 15 | Blackberrys | Clothing | Featherlite Developer | Highstreet | Panas Realtors | Mall | General Mills | Clayworks |  |
| 16 | Forever 21 | Clothing | Globe Group | Highstreet | Paradise Group | Mall | Kalkitech | Cocktail coworking | Not found |
| 17 | Jack & Jones | Clothing | Goel Ganga Developments | Highstreet | Raghunath City Mall | Mall | Milvik | Incuspaze |  |
| 18 | Jack & Jones Junior | Clothing | Goodwill Developers | Highstreet | Roodraksh Group | Mall | Medlife | Awifs |  |
| 19 | Kate & Oscar | Clothing | Haware Builders | Highstreet | Royal Miraj Arcade | Mall | Infogain | Regus |  |
| 20 | Knya | Clothing | Ilika Group | Highstreet | Secura Developers | Mall | Digital Harbour | Enthya Workspace | Not found |
| 21 | Louis Philippe | Clothing | Indraprastha Shelters Pvt Ltd | Highstreet | Shankar Mall | Mall | Flutura | Enzyme |  |
| 22 | Mufti | Clothing | JVM Spaces | Highstreet | Shoplaza Destination mall | Mall | Ezetap | Obaya |  |
| 23 | Odette | Clothing | Kabra Group | Highstreet | South Avenue Mall | Mall | Lycadigital | Capsule |  |
| 24 | Only | Clothing | Kohinoor Group | Highstreet | Triveni (New Kolkata) | Mall | In4velocity | 315 Work Avenue |  |
| 25 | Peter England | Clothing | Kohinoor Luxuria | Highstreet | Varam Central Mall | Mall | FCM Travel Solutions | Redbricks |  |
| 26 | Rare Rabbit | Clothing | Koncept Ambience Group | Highstreet | Vishaal De Mal | Mall | Edusports | Rainmakers Workspace |  |
| 27 | Rareism | Clothing | Krisala Developers | Highstreet |  |  | Kewaunee Scientific Corporation | Bizz Hub |  |
| 28 | Reebok | Clothing | Landmark Group | Highstreet |  |  | Piramal | One Co- Work |  |
| 29 | Simon Carter | Clothing | MM Buildtech | Highstreet |  |  | RGF Professional Recruitment | Hustle space Co work |  |
| 30 | Selected Homme | Clothing | MS Realty | Highstreet |  |  | iManage | Indiqube |  |
| 31 | Tasva | Clothing | Manakamna Builders | Highstreet |  |  | Nova | Wework |  |
| 32 | The House of Rare | Clothing | Manish Builder's & Developers (Roswalt Realty) | Highstreet |  |  | Evora IT Solutions | Buzzhub |  |
| 33 | Van Heusen | Clothing | Mansarovar Group | Highstreet |  |  | ShareChat | Bhive Workspace |  |
| 34 | Vero Moda | Clothing | Master Business Centre (MBC) | Highstreet |  |  |  | Goodworks Cowork |  |
| 35 | Himalaya | Cosmetics | Meeradhe Buildcom | Highstreet |  |  |  | Workshaala |  |
| 36 | The Body Shop | Cosmetics | Misty Land Developers Private Limited | Highstreet |  |  |  | Simpliwork |  |
| 37 | Unicorn | Electronics | Ms. Solidago Realty | Highstreet |  |  |  | 99 Sprinboard |  |
| 38 | Crocs | Footwear | Nivaas Realty | Highstreet |  |  |  | Innov8 |  |
| 39 | Fitflop | Footwear | Nyati Group | Highstreet |  |  |  | Workez |  |
| 40 | Metro Shoes | Footwear | Opera Homes | Highstreet |  |  |  | CorporateEdge |  |
| 41 | Mochi | Footwear | Oswal Realty | Highstreet |  |  |  | Workafella |  |
| 42 | Walkway | Footwear | Phoenix Group | Highstreet |  |  |  | Hustlehub |  |
| 43 | Glow | Jewellery | Platinum Corp | Highstreet |  |  |  | isprout |  |
| 44 | Kirtilals | Jewellery | Plutonium Business Park | Highstreet |  |  |  | Clayworks |  |
| 45 | K | Jewellery | Pranava Group | Highstreet |  |  |  | Nextcoworks |  |
| 46 | Limelight | Jewellery | Village Groupe | Highstreet |  |  |  | Gopalan Coworks |  |
| 47 | Apollo Pharmacy | Other | Ram India Corp | Highstreet |  |  |  | Evoma |  |
| 48 | Bounce Inc | Other | Raunak Group | Highstreet |  |  |  | Instaoffice |  |
| 49 | Connplex | Other | Raveshia Realty | Highstreet |  |  |  | Bootstart Cowork |  |
| 50 | Ethos | Other | Raviraj Realty | Highstreet |  |  |  | Beginest |  |
| 51 | GKB Opticals | Other | Reach Group | Highstreet |  |  |  | TrendWorks |  |
| 52 | Healthkart | Other | Rishabh Group | Highstreet |  |  |  | Quest Offices |  |
| 53 | Lazy Baby | Other | SMP Realty | Highstreet |  |  |  | Monarch Workspaces |  |
| 54 | Mr. DIY | Other | Saanvi Group | Highstreet |  |  |  | The Address |  |
| 55 | Mokobara | Other | Sambhav Group | Highstreet |  |  |  | Venn Spaces |  |
| 56 | Peps | Other | Samyakth Group | Highstreet |  |  |  | Workden |  |
| 57 | Sky Jumper | Other | Sandu Developers | Highstreet |  |  |  | Co-Start Hub |  |
| 58 | Wildcraft | Other | Satyam Developers | Highstreet |  |  |  | Doxa Business Centre |  |
| 59 | Zeno Health | Other | Sethia Infrastructure Pvt. Ltd | Highstreet |  |  |  | Servcorp |  |
| 60 | Biggies Burger | Restaurant | Shashwat | Highstreet |  |  |  | Bangalore Alpha Lab |  |
| 61 | Burger Singh | Restaurant | Shikara Constructions | Highstreet |  |  |  | Bangalore Coworking Hub | Not found |
| 62 | California Burrito | Restaurant | Shree Sai Developers | Highstreet |  |  |  | Bunchworks |  |
| 63 | Chinese Wok | Restaurant | Srishti Group | Highstreet |  |  |  | Social Offline (Shared Workplace Format) |  |
| 64 | Devras | Restaurant | Suraj Group | Highstreet |  |  |  | Kafnu |  |
| 65 | Eat Club | Restaurant | Suvidha Lifespaces | Highstreet |  |  |  | Specico |  |
| 66 | Hardcastle Restaurants | Restaurant | Swati Group | Highstreet |  |  |  |  |  |
| 67 | Sandowitch | Restaurant | The Mass Group | Highstreet |  |  |  |  |  |
| 68 | Subway | Restaurant | VK Gupta Group | Highstreet |  |  |  |  |  |
| 69 | Taco Bell | Restaurant | Vishwa Green | Highstreet |  |  |  |  |  |
| 70 | Wow Momo | Restaurant | Windsor Developers | Highstreet |  |  |  |  |  |
| 71 | Necessity | Supermarket | Zonasha Estates and Projects | Highstreet |  |  |  |  |  |

#### Tab: Notification — hidden tab (superseded by Notification Final, transcribed in full because it holds unique content)


#### Notification — Columns A–J: (untitled block)

| Row | A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Agent—  MASTER NOTIFICATION SPECIFICATION  \|  Agent Action |  |  |  |  |  |  |  |  |  |
| 2 | Complete reference: every action, every message, every channel, every CTA — in one sheet |  |  |  |  |  |  |  |  |  |
| 4 | ▸  PROPERTY ACTIONS |  |  |  |  |  |  |  |  |  |
| 5 | Action | Trigger / When This Fires | Website Notification Message | WhatsApp Message | Mobile Notification | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 6 | New User | User first time sign up on Keydemand | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Start uploading properties and requirements to connect with active occupiers, brands, and commercial real estate opportunities across cities.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | No PDF |  |  | WhatsApp |  |
| 7 | Property Posted | User successfully posts a new property listing | Your [property type] property [property id] in [Location], [City] has been posted successfully. Your listing is now live. | Hi [Name], your [property type] property [property id] at [Location], [City] is now live on Keydemand! Tap below to view your listing and share it with potential tenants or buyers. | [property type] Property [property id] posted successfully in [Location], [City]. Your listing is live. | PDF Attachment | Property detailed page | View Property | In-App · WhatsApp · Email |  |
| 8 | Edit Property | User edits an existing property listing | Your [property type] property listing [property id] in [Location], [City] has been updated successfully. The changes are updated | Hi [Name], your [property type] property [property id] at [Location], [City] has been updated on Keydemand. Tap below to review the updated listing. | [property type] Property [property id] in [Location], [City] updated successfully. | PDF Attachment | Property detailed page | View Property | In-App · WhatsApp |  |
| 9 | Delete Property | User permanently deletes a property listing | Your [property type] property listing [property id] in [Location], [City] has been permanently deleted from Keydemand. This action cannot be undone. |  | [property type] Property [property id] in [Location], [City] has been deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 10 | Deactivate Property | User deactivates a property listing (hidden but not deleted) | Your property [property type] listing [property id] in [Location], [City] has been deactivated. It is no longer visible to other users. You can reactivate it anytime from My Listings. |  | Property [property id] in [Location], [City] deactivated. Reactivate anytime. | No PDF | My Listings page | Reactive Property | In-App · WhatsApp |  |
| 12 | ▸  DEMAND ACTIONS |  |  |  |  |  |  |  |  |  |
| 13 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 14 | Post Demand | User successfully posts a new demand/requirement | Your requirement for [Property Type] {demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 15 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 16 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF |  | NA | In-App · WhatsApp · Email |  |
| 17 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 19 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 20 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 21 | Demand Relevancy<br>(for property owner) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevanc(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Property's matched demands list page | View Matching Demands | In-App · Push · WhatsApp |  |
| 22 | Property Relevancy<br>(for demand poster) | A new property listing matches the user's posted demand/requirement | [number] new demand relevancies. Explore them now! | Hi [Name], you have [number] new demand relevancy(ies). Explore them now! | [number] new demand relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp |  |
| 24 | ▸  SUBSCRIPTION |  |  |  |  |  |  |  |  |  |
| 25 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 26 | Subscription Purchase | User successfully purchases a subscription plan | Your [Plan Name] subscription on Keydemand is now active. Enjoy full access to all premium features until [Expiry Date]. | Hi [Name], your [Plan Name] subscription on Keydemand is now active until [Expiry Date]. You now have full access to all premium features. | [Plan Name] subscription activated. Valid until [Expiry Date]. | Invoice / receipt PDF auto-attached | Subscription & billing page | View Subscription | In-App · WhatsApp · Email |  |
| 27 | Auto-Renewal<br>Failed<br>(Payment) | Auto-renewal attempted but payment failed (card expired, insufficient funds, etc.) | We could not auto-renew your [Plan Name] subscription. Your payment of ₹[Amount] on [Renewal Date] was unsuccessful. Update your payment method within [X] days to avoid service interruption. | Hi [Name], your Keydemand subscription auto-renewal failed on [Renewal Date]. Please update your payment method to avoid losing access to your listings and features. | Auto-renewal failed — payment unsuccessful. Update payment method now. | No PDF | Payment update / billing page | Update Payment Method | In-App · Push · WhatsApp · Email |  |
| 28 | Auto-Renewal<br>Disabled<br>by User | User manually turns off auto-renewal for their subscription | Auto-renewal has been turned off for your [Plan Name] subscription. Your current plan remains active until [Expiry Date]. You will need to manually renew before this date to continue. | Hi [Name], auto-renewal for your Keydemand [Plan Name] subscription has been disabled. Your plan is active until [Expiry Date]. Renew manually before then to continue. | Auto-renewal off. Subscription active until [Expiry Date]. Renew manually to continue. | No PDF | Subscription & billing page | Re-enable Auto-Renewal | In-App · WhatsApp · Email |  |
| 29 | Auto-Renewal<br>Reminder<br>(3 days before) | Subscription set to auto-renew — 3 days before renewal date | Your [Plan Name] subscription will auto-renew in 3 days on [Renewal Date] for ₹[Amount]. No action needed if you wish to continue. To cancel auto-renewal, manage your subscription before [Renewal Date]. | Hi [Name], your Keydemand [Plan Name] subscription will auto-renew on [Renewal Date] for ₹[Amount]. If you wish to cancel, do so before [Renewal Date]. No action needed to continue. | Auto-renewal in 3 days on [Renewal Date] — ₹[Amount] will be charged. | No PDF | Subscription & billing page | Manage Subscription | In-App · Push · WhatsApp · Email |  |
| 30 | Subscription Expired | User's subscription has expired | Your [Plan Name] subscription on Keydemand has expired as of [Expiry Date]. Your listings have been paused. Renew your subscription to restore full access. | Hi [Name], your Keydemand subscription expired on [Expiry Date]. Your listings are currently paused. Renew now to restore visibility and full access. | Your subscription has expired. Listings paused. Renew to restore access. | No PDF | Subscription renewal page | Renew Now | In-App · Push · WhatsApp · Email |  |
| 31 | Auto-Renewal <br>Successful | Subscription successfully auto-renewed — payment charged | Your [Plan Name] subscription has been automatically renewed for ₹[Amount]. You are now covered until [New Expiry Date]. Your listings remain live and active. | Hi [Name], your Keydemand [Plan Name] subscription has been auto-renewed for ₹[Amount]. You are covered until [New Expiry Date]. No action needed — your listings are live. | Subscription auto-renewed for ₹[Amount]. Active until [New Expiry Date]. | Auto-renewal invoice PDF attached | Subscription & billing page | View Subscription | In-App · WhatsApp · Email |  |
| 32 | Cancel Subscription | User cancels their subscription (active until period end) | Your [Plan Name] subscription has been cancelled. You will continue to have access to all premium features until [Expiry Date], after which your account will revert to the free plan. | Hi [Name], your Keydemand subscription has been cancelled. You will retain full access until [Expiry Date]. We are sorry to see you go — tap below if you change your mind. | Subscription cancelled. Access continues until [Expiry Date]. | No PDF | Subscription page (with option to reactivate) | Reactivate \| View Plans | In-App · WhatsApp · Email |  |
| 34 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 35 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 36 | Image Request Received (from another user) | When another user clicks on view images when you have kept it hidden | [User type] is interested in your [property type] property [property id] at [Location], [City] and has requested to view images. Kindly action the request. | Hi [Name], [User type] is interested in your property at [Location], [City] and has requested to view images. Kindly action the request. | Image request received for your property in [Location], [City]. Kindly action the request | No PDF | Image request section | Action request | In-App · Push · WhatsApp |  |
| 37 | Image Request Fulfilled (requester notified) | Owner accepts the view images request that was made by you | Images are now available for the property at [Location], [City] that you requested. View them now. | Hi [Name], the images you requested for the property at [Location], [City] on Keydemand are now available. View them now. | Images now available for property in [Location], [City] — you requested these. | No PDF | Image request section | View Property | In-App · Push · WhatsApp |  |
| 38 | Image request rejected | Image request rejected | Image request done by you for [property type] [property id] is rejected |  | Image request done by you for [property type] [property id] is rejected |  | Redirects to the rejected one |  |  |  |
| 39 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 40 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 41 | Phone Number Viewed<br>(owner notified) | Another user views the owner's phone number on a listing | Your contact number for the property at [Location], [City] was viewed by a potential [buyer/tenant/agent]. Follow up to convert the interest. | Hi [Name], someone viewed your contact number for your property at [Location], [City] on Keydemand. This could be a potential lead — follow up soon. | Your contact number was viewed for property in [Location], [City]. | No PDF | Property listing page / leads section | View Property | In-App · WhatsApp | Note: In case of brands & office tenants they will be sent PDF only when they have a demand in the relevancy of the brand or occupier |
| 42 | Phone Number Requested<br>(owner notified) | Another user sends a contact request for a listing (owner must approve) | You have a new contact request for your demand at [Location], [City]. A potential [buyer/tenant/agent] wants to connect. Approve to share your number. | Hi [Name], you have a new contact request for your property at [Location], [City] on Keydemand. Approve the request to connect with the interested party. | New contact request for property in [Location], [City]. Approve to connect. | No PDF | Property listing contact request page / approve screen | Approve Request \| View Request | In-App · Push · WhatsApp |  |
| 43 | Phone Number Request Approved / Rejected<br>(requester notified) | Owner approves a contact request — requester can now see the phone number | Your contact request to connect with [user type] [user name] for their demand in [city] has been approved. The number is now available for you to call.<br>Rejection<br>Your contact request to connect with [User Type] [User Name] for their demand in [City] has not been approved. The contact details will not be available for this requirement. | Hi [Name],<br>Good news! Your request to connect with [User Name] from [Brand Name] for their [asset class] requirement in [City] has been approved.<br>You can reach them directly at [Mobile Number].<br>Rejection<br>Hi [Name],<br>Unfortunately, your request to connect with [User Name] from [Brand Name] for their requirement in [City] has not been approved.<br>Please continue exploring other opportunities on the platform. | Contact Request is approved, kindly click to view their number.<br>Contact Request is rejected, keep uploading new properties for frequent matches. | No PDF | Property listing page (contact details section) | View Contact | In-App · Push · WhatsApp |  |
| 44 | Phone Number Request Nullified | Brand doesnt approves/reject request for the contact request view post 72 hours | Your request to view number and connect with the brand has been unanswered by the brand and thus dropped |  | Your request to view number and connect with the brand has been unanswered by the brand and thus dropped |  |  |  |  |  |
| 45 | ▸  PROJECT ENGAGEMENT |  |  |  |  |  |  |  |  |  |
| 46 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 47 | Project Interest Shown | A user expresses interest in a developer's project | You have sucessfully shown interest in [Project Name] in [City]. | You have sucessfully shown interest in [Project Name] in [City]. Our team will connect with you shortly. | You have sucessfully shown interest in [Project Name] in [City]. | Share PDF of the project inerest shown | Project Page | View Project | In-App · Push · WhatsApp · Email |  |
| 48 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 49 | Action | Trigger / When This Fires | Notification Message | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 50 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 51 | 90 days from posting or editing property | When completed 90 days of posting/editing property | Single property <br>Is your [property type] [property id] property at [location], [city] still available? Kindly update<br>Multiple properties <br>Your [number] properties status needs to be updated which were posted on [date], kindly confirm if they are still available? | Single property<br>Is your [property type] [property id] property at [location] [city] still available? Kindly update<br>Multiple properties<br>Your [number] property status needs to be updated which were posted on [date], kindly confirm if they are still available? | Single property <br>Is your [property type] [property id] property at [location], [city] still available? Kindly update<br>Multiple properties <br>Your [number] properties status needs to be updated which were posted on [date], kindly confirm if they are still available? |  |  |  |  |  |
| 53 | Retail Brands —  MASTER NOTIFICATION SPECIFICATION  \| (Individual) |  |  |  |  |  |  |  |  |  |
| 54 | Complete reference: every action, every message, every channel, every CTA — in one sheet |  |  |  |  |  |  |  |  |  |
| 56 | ▸  DEMAND ACTIONS |  |  |  |  |  |  |  |  |  |
| 57 | Action | Trigger / When This Fires | Website Notification Message | WhatsApp Message | Mobile Notification | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 58 | New User | User first time sign up on Keydemand | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Explore properties & start uploading requirements to match with relevanct properties.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified |  |  |  |  |  |  |
| 59 | Demand Posted | User successfully posts a new demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 60 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 61 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 62 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 63 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 64 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 65 | Property Relevancy<br>(for demand posted) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevanc(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp | For Brands can we run a cron on EOD with the list of Relevancies? |
| 66 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 67 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 68 | Image Request Fulfilled (requester notified) | Owner accepts the view images request that was made by you | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | Hi [Name], the images you requested for the [property type] property, [property id] at [Location], [City] on Keydemand are now available. View them now. | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | No PDF | Image request section | View Property | In-App · Push · WhatsApp |  |
| 69 | Image request rejected | Image request rejected | Image request done by you for [property type] [property id] is rejected |  | Image request done by you for [property type] [property id] is rejected |  | Redirects to the rejected one |  | Push - WhatsApp |  |
| 70 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 71 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 72 | Phone Number Request Received<br>(owner notified) | Another user sends a contact request for a listing (owner must approve) | Contact request received for [property type] in [Location], [City]. View details | Hi [Name] 👋<br>You have a new contact request for your [Property Type] demand in [Location], [City].<br>Tap below to action | Contact request received for [property type] in [Location], [City]. Approve to connect | No PDF | Property listing contact request page / approve screen | View Request | In-App · Push · WhatsApp |  |
| 73 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 74 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 76 | F&B Brands —  MASTER NOTIFICATION SPECIFICATION  \| (Individual) |  |  |  |  |  |  |  |  |  |
| 77 | Complete reference: every action, every message, every channel, every CTA — in one sheet |  |  |  |  |  |  |  |  |  |
| 78 | ▸  DEMAND ACTIONS |  |  |  |  |  |  |  |  |  |
| 79 | Action | Trigger / When This Fires | Website Notification Message | WhatsApp Message | Mobile Notification | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 80 | New User | User first time sign up on Keydemand | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Explore properties & start uploading requirements to match with relevanc properties.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified |  |  |  |  |  |  |
| 81 | Demand Posted | User successfully posts a new demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 82 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 83 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 84 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 85 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 86 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 87 | Property Relevancy<br>(for demand posted) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevanc(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp |  |
| 88 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 89 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 90 | Image Request Fulfilled<br>(requester notified) | Owner accepts the view images request that was made by you | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | Hi [Name], the images you requested for the [property type] property, [property id] at [Location], [City] on Keydemand are now available. View them now. | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | No PDF | Image request section | View Property | In-App · Push · WhatsApp |  |
| 92 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 93 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 94 | Phone Number Request Received<br>(owner notified) | Another user sends a contact request for a listing (owner must approve) | Contact request received for [property type] in [Location], [City]. View details | Hi [Name] 👋<br>You have a new contact request for your [Property Type] demand in [Location], [City].<br>Tap below to action | Contact request received for [property type] in [Location], [City]. Approve to connect | No PDF | Property listing contact request page / approve screen | View Request | In-App · Push · WhatsApp |  |
| 95 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 96 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 98 | Keydemand —  MASTER NOTIFICATION SPECIFICATION  \| |  |  |  |  |  |  |  |  |  |
| 99 | Complete reference: every action, every message, every channel, every CTA — in one sheet |  |  |  |  |  |  |  |  |  |
| 100 | ▸  PROPERTY ACTIONS |  |  |  |  |  |  |  |  |  |
| 101 | Action | Trigger / When This Fires | Website Notification Message | WhatsApp Message | Mobile Notification | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 102 | New User | User first time sign up on Keydemand | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Start uploading properties and requirements to connect with active occupiers, brands, and commercial real estate opportunities across cities.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified | Hi [Agent Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | No PDF |  |  | WhatsApp |  |
| 103 | Property Posted | User successfully posts a new property listing | Your [property type] property [property id] in [Location], [City] has been posted successfully. Your listing is now live. | Hi [Name], your [property type] property [property id] at [Location], [City] is now live on Keydemand! Tap below to view your listing and share it with potential tenants or buyers. | [property type] Property [property id] posted successfully in [Location], [City]. Your listing is live. | PDF Attachment | Property detailed page | View Property | In-App · WhatsApp · Email |  |
| 104 | Edit Property | User edits an existing property listing | Your [property type] property listing [property id] in [Location], [City] has been updated successfully. The changes are updated | Hi [Name], your [property type] property [property id] at [Location], [City] has been updated on Keydemand. Tap below to review the updated listing. | [property type] Property [property id] in [Location], [City] updated successfully. | PDF Attachment | Property detailed page | View Property | In-App · WhatsApp |  |
| 105 | Delete Property | User permanently deletes a property listing | Your [property type] property listing [property id] in [Location], [City] has been permanently deleted from Keydemand. This action cannot be undone. |  | [property type] Property [property id] in [Location], [City] has been deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 106 | Deactivate Property | User deactivates a property listing (hidden but not deleted) | Your property [property type] listing [property id] in [Location], [City] has been deactivated. It is no longer visible to other users. You can reactivate it anytime from My Listings. |  | Property [property id] in [Location], [City] deactivated. Reactivate anytime. | No PDF | My Listings page | View Property | In-App · WhatsApp |  |
| 108 | ▸  DEMAND ACTIONS |  |  |  |  |  |  |  |  |  |
| 109 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 110 | Post Demand | User successfully posts a new demand/requirement | Your requirement for [Property Type] {demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 111 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 112 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 113 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 115 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 116 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 117 | Demand Relevancy<br>(for property owner) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevanc(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Property's matched demands list page | View Matching Demands | In-App · Push · WhatsApp |  |
| 118 | Property Relevancy<br>(for demand poster) | A new property listing matches the user's posted demand/requirement | [number] new demand relevancies. Explore them now! | Hi [Name], you have [number] new demand relevancy(ies). Explore them now! | [number] new demand relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp |  |
| 120 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 121 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 122 | Image Request Received<br>(from another user) | When another user clicks on view images when you have kept it hidden | [User type] is interested in your property at [Location], [City] and has requested to view images. Kindly action the request. | Hi [Name], [User type] is interested in your property at [Location], [City] and has requested to view images. Kindly action the request. | Image request received for your property in [Location], [City]. Kindly action the request | No PDF | Image request section | Action request | In-App · Push · WhatsApp |  |
| 124 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 125 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 126 | Phone Number Viewed (owner notified) | Another user views the owner's phone number on a listing | Your contact number for the property at [Location], [City] was viewed by a potential [buyer/tenant/agent]. Follow up to convert the interest. | Hi [Name], someone viewed your contact number for your property at [Location], [City] on Keydemand. This could be a potential lead — follow up soon. | Your contact number was viewed for property in [Location], [City]. | No PDF | Property listing page / leads section | View Property | In-App · WhatsApp |  |
| 128 | ▸  PROJECT ENGAGEMENT |  |  |  |  |  |  |  |  |  |
| 129 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 130 | Project Interest Shown | A user expresses interest in a developer's project | You have sucessfully shown interest in [Project Name] in [City]. | You have sucessfully shown interest in [Project Name] in [City]. Our team will connect with you shortly. | You have sucessfully shown interest in [Project Name] in [City]. | Share PDF of the project inerest shown | Project Page | View Project | In-App · Push · WhatsApp · Email |  |
| 131 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 132 | Action | Trigger / When This Fires | Notification Message | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 133 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 134 | 90 days from posting or editing property | When completed 90 days of posting/editing property | Single property <br>Is your [property type] [property id] property at [location], [city] still available? Kindly update<br>Multiple properties <br>Your [number] properties status needs to be updated which were posted on [date], kindly confirm if they are still available? | Single property<br>Is your [property type] [property id] property at [location] [city] still available? Kindly update<br>Multiple properties<br>Your [number] property status needs to be updated which were posted on [date], kindly confirm if they are still available? | Single property <br>Is your [property type] [property id] property at [location], [city] still available? Kindly update<br>Multiple properties <br>Your [number] properties status needs to be updated which were posted on [date], kindly confirm if they are still available? |  |  |  |  |  |
| 136 | Managed space occupier & Office Occupier —  MASTER NOTIFICATION SPECIFICATION  \| (Individual) |  |  |  |  |  |  |  |  |  |
| 137 | ▸  Demand ACTIONS |  |  |  |  |  |  |  |  |  |
| 138 | Action | Trigger / When This Fires | Website Notification Message | WhatsApp Message | Mobile Notification | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 139 | New User | User first time sign up on Keydemand | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Explore properties & start uploading requirements to match with relevant properties.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified |  | No PDF |  |  | WhatsApp |  |
| 140 | Demand Posted | User successfully posts a new demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 141 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 142 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 143 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 144 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 145 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 146 | Property Relevancy<br>(for demand posted) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevant(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp |  |
| 147 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 148 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 149 | Image Request Fulfilled<br>(requester notified) | Owner accepts the view images request that was made by you | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | Hi [Name], the images you requested for the [property type] property, [property id] at [Location], [City] on Keydemand are now available. View them now. | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | No PDF | Image request section | View Property | In-App · Push · WhatsApp |  |
| 151 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 152 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 153 | Phone Number Request Received<br>(owner notified) | Another user sends a contact request for a listing (owner must approve) | Contact request received for [property type] in [Location], [City]. View details | Hi [Name] 👋<br>You have a new contact request for your [Property Type] demand in [Location], [City].<br>Tap below to action | Contact request received for [property type] in [Location], [City]. Approve to connect | No PDF | Property listing contact request page / approve screen | View Request | In-App · Push · WhatsApp |  |
| 154 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 155 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 157 | Enterprise —  MASTER NOTIFICATION SPECIFICATION  \| (Managed Office, Office occupier, FnB & Retail) |  |  |  |  |  |  |  |  |  |
| 158 | ▸  Demand ACTIONS |  |  |  |  |  |  |  |  |  |
| 159 | New User | User first time sign up on Keydemand | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace! | Hi [User Name],<br>Welcome aboard to Keydemand, India's CRE Marketplace!<br>Your account is now active. Explore properties & start uploading requirements to match with relevant properties.<br>We're excited to have you as part of the network.<br>Team Keydemand<br>#CRESimplified |  | No PDF |  |  | WhatsApp |  |
| 160 | Demand Posted | User successfully posts a new demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been posted successfully. | Hi [Name], your requirement for [Property Type] [demand id] in [Location], [City] is now live on Keydemand. View Demand | Demand posted for [Property Type] [demand id] in [Location], [City]. View Demand | No PDF | Demand detail page | View Demand | In-App · WhatsApp · Email |  |
| 161 | Edit Demand | User edits an existing demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been updated. | Hi [Name], your [property type], [demand id] requirement in [Location], [City] has been updated on Keydemand. | Demand updated for [Property Type] [demand id[ in [Location], [City]. | No PDF | Demand detail page | View My Demand | In-App · WhatsApp |  |
| 162 | Delete Demand | User permanently deletes a demand/requirement | Your requirement for [Property Type] [demand id] in [Location], [City] has been permanently deleted. This action cannot be undone. |  | Demand for [Property Type], [demand id] in [Location], [City] deleted. | No PDF | NA | NA | In-App · WhatsApp · Email |  |
| 163 | Deactivate Demand | User deactivates a demand/requirement (paused but not deleted) | Your requirement for [Property Type] in [Location], [City] has been deactivated. You will not receive new matching alerts until you reactivate it. |  | Demand paused for [Property Type] in [Location], [City]. Reactivate anytime. | No PDF | My Demands page | Reactivate Demand | In-App · WhatsApp |  |
| 164 | ▸  MATCHING & RELEVANCY |  |  |  |  |  |  |  |  |  |
| 165 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 166 | Property Relevancy<br>(for demand posted) | A new property listing matches the user's posted demand/requirement | [number] new property relevancies. Explore them now! | Hi [Name], you have [number] new property relevant(ies). Explore them now! | [number] new property relevancies. Explore them now! | No PDF | Demand's matched properties list page | View Matching Properties | In-App · Push · WhatsApp |  |
| 167 | ▸  IMAGE REQUESTS |  |  |  |  |  |  |  |  |  |
| 168 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 169 | Image Request Fulfilled<br>(requester notified) | Owner accepts the view images request that was made by you | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | Hi [Name], the images you requested for the [property type] property, [property id] at [Location], [City] on Keydemand are now available. View them now. | Images are now available for the [property type] property, [property id] at [Location], [City] that you requested. View them now. | No PDF | Image request section | View Property | In-App · Push · WhatsApp |  |
| 171 | ▸  CONTACT ACTIONS |  |  |  |  |  |  |  |  |  |
| 172 | Action | Trigger / When This Fires | Notification Message<br>(Push / Email subject line style) | WhatsApp Message | In-App Message | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 173 | Phone Number Request Received<br>(owner notified) | Another user sends a contact request for a listing (owner must approve) | Contact request received for [property type] in [Location], [City]. View details | Hi [Name] 👋<br>You have a new contact request for your [Property Type] demand in [Location], [City].<br>Tap below to action | Contact request received for [property type] in [Location], [City]. Approve to connect | No PDF | Property listing contact request page / approve screen | View Request | In-App · Push · WhatsApp |  |
| 174 | ▸  Availibility |  |  |  |  |  |  |  |  |  |
| 175 | 90 days from posting or editing demand | When completed 90 days of posting/editing demand | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? | Single demand <br>We want to know status of your demand [demand id], are you still looking for [property type] space in [location, city]. <br>Multiple demand<br>We want to know status of [number of demands] demands posted by on [date], are you still searching for properties for these requirements? |  |  |  |  |  |
| 177 | ADMIN —  MASTER NOTIFICATION SPECIFICATION  \| |  |  |  |  |  |  |  |  |  |
| 178 | Complete reference: every action, every message, every channel, every CTA — in one sheet |  |  |  |  |  |  |  |  |  |
| 179 | Action | Trigger / When This Fires | Email Notifications |  |  | PDF Attachment | Redirects To | CTA — WhatsApp | Channels |  |
| 180 | New developer enquiry | When a new developer enquiry is triggered | New Enquiry Alert!<br>A new developer has enquired on platform on [timestamp] and details are mentioned below. Kindly connect with them<br>Full Name<br>Company Name<br>Designation<br>City<br>Official Email Id<br>Mobile Number<br>GST/CIN |  |  |  |  |  |  |  |
| 181 | New Managed space operator enquire | When a managed space operator makes an enquiry | New Enquiry Alert!<br>A new managed space operator has enquired on platform on [timestamp] and details are mentioned below. Kindly connect with them<br>Full Name<br>Company Name<br>Designation<br>City<br>Official Email Id<br>Mobile Number<br>GST/CIN |  |  |  |  |  |  |  |
| 182 | New Subscribed User | New user is subscribed | Hi Team,<br>{{User Name}} has subscribed to Keydemand.<br>Mobile Number: {{Number}} <br>Plan: {{Plan}}<br>City: {{City}}<br>Asset Class: {{Asset Class}}<br>Subscribed Date: dd-mm-yy<br>Amount: Rs xx<br>Please check the details in the Admin Panel. |  |  |  |  |  |  |  |
| 183 | Expired User | When the payment is not done by the user on the day of renewal, if it expires | Hi Team,<br>{{User Name}}’s Keydemand subscription has expired as the renewal payment was not completed.<br>Mobile Number: {{number}}<br>Expiry Date: {{Date}} |  |  |  |  |  |  |  |
| 184 | New Project Leads | When there is a new project lead for any projects on platform | Subject: New Project Lead – {{Project Name}} {{City}} <br>Hi Team,<br>A new lead has been generated for {{Project Name}} {{City}}.<br>Lead: {{User Name}}<br>User Type: {{type of user}} <br>Contact: {{Mobile Number}}<br>Please follow up accordingly. |  |  |  |  |  |  |  |
| 185 | Enterprise Users Leads | When a user clicks and submit enterprise details |  |  |  |  |  |  |  |  |
| 186 | High value demand uploaded | When a demand is posted with city wise limits and its a high value demand |  |  |  |  |  |  |  |  |
| 187 | Managed Office demand uploaded | When managed office users uploaded demands |  |  |  |  |  |  |  |  |
| 188 | Deleted property | When users delete any property |  |  |  |  |  |  |  |  |
| 189 | Deleted demand | When users delete any Demand |  |  |  |  |  |  |  |  |
| 190 | Deactivated property | When users deactivate any property |  |  |  |  |  |  |  |  |
| 191 | Deactivated demand | When users deactivate any demand |  |  |  |  |  |  |  |  |
| 192 | Account Deletion | When users delete their accounts |  |  |  |  |  |  |  |  |
| 193 | Incomplete Registration | When user leaves without completing the personal details |  |  |  |  |  |  |  |  |
| 198 | Admin has 2 users root user and admin |  |  |  |  |  |  |  |  |  |
| 199 | root user has permission to do website down |  |  |  |  |  |  |  |  |  |

#### Tab: Notification Final (current)


#### Notification Final — Columns A–U: (untitled block)

| Row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Keydemand — Notification plan |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | Toast = in-app pop-up, instant, no cost. Push, WhatsApp and Email leave the app. Anything the user did themselves is a receipt and does not count towards the daily cap. Rows marked 'In daily digest' send nothing on their own — they become lines inside the 6 pm summary. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | *Retail, F&B and Office spaces mentioned below are combined of Individual and Enterprise |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | ID | Category | Event | When it fires | Applies to | Type | Audience | Toast | Push | WhatsApp | Email | In daily digest | Counts to daily cap | Typical per day | Toast text | Push text | WhatsApp text | Email subject | Email body | Attachment | Button |
| 5 | 1 | Account | Welcome | First sign-up completed | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Developer, Keydemand Team | Triggered | Personal | Y | – | Y | Y | – | No | 0 | Welcome to Keydemand. Your account is active. | – | Hi [Name], welcome aboard to Keydemand, India's CRE marketplace. Your account is now active. Start uploading properties and requirements to connect with active occupiers, brands and opportunities across cities.<br>Team Keydemand<br>#CRESimplified | Welcome to Keydemand | Hi [Name],<br>Your Keydemand account is active. Start posting properties and requirements to connect with brands, occupiers and channel partners across India.<br>Complete your profile to get better matches. | – | Complete profile |
| 6 | 2 | Account | Profile incomplete | Signed up but profile left incomplete — 24 hrs later | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Developer, Keydemand Team | Scheduled | Personal | – | – | Y | – | – | Yes | 0.02 | Complete your profile for better recommendations. | – | Hi [Name], your Keydemand profile is not complete yet. Finish it and we can start matching you with the right properties and requirements. | – | – | – | Complete profile |
| 7 | 3 | Your actions — Property | Property posted | User posts a property | Agent, Keydemand Team | Triggered | Personal | Y | – | Y | Y | – | No | 0 | [Type] property [ID] in [Locality], [City] is live. Download attached PDF. | – | Hi [Name], your [property type] property [property ID] at [Locality], [City] is now live on Keydemand. Tap below to view your listing and share it with potential occupiers. | Your property [Property ID] is live on Keydemand | Hi [Name],<br>Your [property type] property [Property ID] at [Locality], [City] has been posted successfully and is now live.<br>The listing sheet is attached. | Property PDF | View property |
| 8 | 4 | Your actions — Property | Property edited | User edits a property | Agent, Keydemand Team | Triggered | Personal | Y | – | Y | Y | – | No | 0 | [Type] property [ID] in [Locality], [City] is updated. Download attached PDF. | – | Hi [Name], your [property type] property [property ID] at [Locality], [City] has been updated on Keydemand. Tap below to review the updated listing. | Your property [Property ID] has been updated | Hi [Name],<br>Your [property type] property [Property ID] at [Locality], [City] has been updated. The revised listing sheet is attached. | Property PDF | View property |
| 9 | 5 | Your actions — Property | Property deactivated or deleted | User deactivates or deletes a property | Agent, Keydemand Team | Triggered | Personal | Y | – | – | – | – | No | 0 | [ID] paused. You can reactivate it anytime. | – | – | – | – | – | Reactivate |
| 10 | 6 | Your actions — Demand | Demand posted | User posts a requirement | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Triggered | Personal | Y | – | – | – | – | No | 0 | Requirement [ID] for [Type] in [Locality], [City] is live. | – | – | – | – | – | View demand |
| 11 | 7 | Your actions — Demand | Demand edited | User edits a requirement | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Triggered | Personal | Y | – | – | – | – | No | 0 | Changes saved. | – | – | – | – | – | – |
| 12 | 8 | Your actions — Demand | Demand deactivated or deleted | User deactivates or deletes a requirement | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Triggered | Personal | Y | – | – | – | – | No | 0 | [ID] paused. You can reactivate it anytime. | – | – | – | – | – | Reactivate |
| 13 | 9 | Needs your action | Contact request received | Someone asks to see your number | Retail Brand, F&B Brand | Action needed | Personal | Y | Y | Y | – | – | Yes | 0.6 | [User type] wants your number for [ID] in [Locality]. | You have a new contact request for [ID] at [Locality], [City]. A potential [buyer / tenant / agent] wants to connect. Approve to share your number. | Hi [Name], you have a new contact request for your requirement at [Locality], [City] on Keydemand. Approve the request to connect with the interested party. | – | – | – | Approve or decline |
| 14 | 10 | Needs your action | Image request received | Someone asks to see hidden images | Agent, Keydemand Team | Action needed | Personal | Y | Y | Y | – | – | Yes | 0.4 | [User type] wants images for [ID] in [Locality]. | [User type] is interested in your [property type] [property ID] at [Locality], [City] and has requested to view images. Kindly action the request. | Hi [Name], [User type] is interested in your property at [Locality], [City] and has requested to view images. Kindly action the request. | – | – | – | Share images |
| 15 | 11 | Needs your action | Project interest received | A user shows interest in your project | Developer, Keydemand Team | Action needed | Personal | Y | Y | Y | Y | – | Yes | 0.5 | New lead on [Project name] from [User type], [City]. | New lead on [Project name] from [User type], [City]. Tap to view the details. | Hi [Name], you have a new lead on [Project name] in [City] from [User type]. The full details are on the project page. | New lead on [Project name] | Hi [Name],<br>A new lead has come in on [Project name], [City].<br>Name: [Name]<br>Type: [User type]<br>City: [City]<br>Received: [Date]<br>Full details are on the project page. | – | View lead |
| 16 | 12 | Result of your request | Contact request answered | Owner approves or declines your request | Agent | Action needed | Personal | Y | Y | Y | – | – | Yes | 0.3 | Approved: contact request approved, tap to view the number.<br>Declined: contact request not approved. | Approved: Your contact request to connect with [User type] [User name] for their demand in [City] has been approved. The number is now available for you to call.<br>Declined: Your contact request to connect with [User type] [User name] for their demand in [City] has not been approved. Contact details will not be available for this requirement. | Approved: Hi [Name], good news. Your request to connect with [User name] from [Brand name] for their [asset class] requirement in [City] has been approved. You can reach them directly at [Mobile number].<br>Declined: Hi [Name], unfortunately your request to connect with [User name] from [Brand name] for their requirement in [City] has not been approved. Please continue exploring other opportunities on the platform. | – | – | – | View phone number |
| 17 | 13 | Result of your request | Image request answered | Owner approves or declines your request | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Action needed | Personal | Y | Y | Y | – | – | Yes | 0.3 | Approved: images are now available for [ID].<br>Declined: your image request for [ID] was not approved. | Approved: Images are now available for the property at [Locality], [City] that you requested. View them now.<br>Declined: Image request done by you for [property type] [property ID] is rejected. | Approved: Hi [Name], the images you requested for the property at [Locality], [City] on Keydemand are now available. View them now.<br>Declined: Hi [Name], your image request for the property at [Locality], [City] was not approved. Keep exploring other matching properties. | – | – | – | View listing |
| 18 | 14 | Goes into digest | Your number was viewed | Someone views your number on a listing | Agent, Keydemand Team, Office Occupier, Managed Occupier | Digest | Personal | – | – | – | – | Y | No | 0 | – | – | Digest line: [n] people viewed your contact number today. These are potential leads — follow up soon. | – | – | – | See who |
| 19 | 15 | Goes into digest | New properties match your demand | A new listing matches a requirement you posted | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Digest | Personal | – | – | – | – | Y | No | 0 | – | – | Digest line: [n] new properties match your requirements. Explore them now. | – | – | – | View matches |
| 20 | 16 | Goes into digest | New demands match your property | A new requirement matches a listing you posted | Agent, Keydemand Team | Digest | Personal | – | – | – | – | Y | No | 0 | – | – | Digest line: [n] new requirements match your listings. Explore them now. | – | – | – | View matches |
| 21 | 17 | Goes into digest | New demands in your city | Requirements posted today in the user's cities | Agent, Keydemand Team | Digest | General | – | – | – | – | Y | No | 0 | – | – | Digest line: [n] new requirements added in [City] today. Upload a property to catch them. | – | – | – | Upload a property |
| 22 | 18 | Goes into digest | Listing is 90 days old | 90 days since a listing or requirement was posted or edited | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Keydemand Team | Digest | Personal | – | – | – | – | Y | No | 0 | – | – | Digest line, single: Is your [property type] [property ID] at [Locality], [City] still available? Kindly update.<br>Digest line, multiple: [n] of your listings posted on [date] need a status update. Kindly confirm if they are still available. | – | – | – | Confirm or update |
| 23 | 19 | The digest | Daily summary — 6 pm | One roll-up of everything above, sent once. Skipped if there is nothing to report. | Agent, Retail Brand, F&B Brand, Office Occupier, Managed Occupier, Developer, Keydemand Team | Digest | Mixed | – | Y | Y | – | – | Yes | 1 | – | Today on Keydemand: [n] matches, [n] number views, [n] new requirements in [City]. | Hi [Name], here is your day on Keydemand.<br>• [n] new requirements posted in [City]<br>• [n] properties match your requirements<br>• [n] people viewed your number<br>• [n] of your listings are 90 days old — still available?<br>Upload a property to catch today's demand. | – | – | – | Open summary |
| 24 | 20 | Subscription | Subscription activated | Payment successful, plan starts | Agent | Triggered | Personal | Y | – | Y | Y | – | No | 0 | [Plan] is active until [Expiry date]. | – | Hi [Name], your [Plan] subscription on Keydemand is now active until [Expiry date]. You now have full access to all premium features. | Your [Plan] subscription is active | Hi [Name],<br>Your [Plan] subscription is active until [Expiry date]. You have full access to all premium features.<br>The invoice is attached. | Invoice PDF | View subscription |
| 25 | 21 | Subscription | Renewal in 3 days | 3 days before auto-renewal date | Agent | Scheduled | Personal | – | – | Y | Y | – | Yes | 0.02 | – | – | Hi [Name], your Keydemand [Plan] subscription will auto-renew on [Renewal date] for ₹[Amount]. No action needed to continue. To cancel, do so before [Renewal date]. | Your subscription renews on [Renewal date] | Hi [Name],<br>Your [Plan] subscription will auto-renew on [Renewal date] and ₹[Amount] will be charged.<br>No action is needed if you wish to continue. To cancel auto-renewal, manage your subscription before [Renewal date]. | – | Manage plan |
| 26 | 22 | Subscription | Payment failed | Auto-renewal payment declined | Agent | Action needed | Personal | – | Y | Y | Y | – | Yes | 0.01 | – | Auto-renewal failed — payment unsuccessful. Update your payment method now. | Hi [Name], your Keydemand subscription auto-renewal failed on [Renewal date]. Please update your payment method to avoid losing access to your listings and features. | Action needed: your payment did not go through | Hi [Name],<br>We could not auto-renew your [Plan] subscription. The payment of ₹[Amount] on [Renewal date] was unsuccessful.<br>Update your payment method within [X] days to avoid interruption to your listings. | – | Update payment |
| 27 | 23 | Subscription | Subscription expired | Plan lapses without renewal | Agent | Scheduled | Personal | – | Y | Y | Y | – | Yes | 0.01 | – | Your subscription has expired. Listings are paused. Renew to restore access. | Hi [Name], your Keydemand subscription expired on [Expiry date]. Your listings are currently paused. Renew now to restore visibility and full access. | Your subscription has expired | Hi [Name],<br>Your [Plan] subscription expired on [Expiry date] and your listings have been paused.<br>Renew to restore full access and put your listings back in front of live demand. | – | Renew now |
| 28 | 24 | Subscription | Plan changed or cancelled | Auto-renew turned off, cancelled, or renewed successfully | Agent | Triggered | Personal | Y | – | Y | Y | – | No | 0 | Subscription updated. Access continues until [Expiry date]. | – | Hi [Name], your Keydemand [Plan] subscription has been [renewed / cancelled / set to manual renewal]. Your access continues until [Expiry date]. | Your Keydemand subscription has been updated | Hi [Name],<br>Your subscription has been [renewed for ₹[Amount] / cancelled / set to manual renewal]. Access continues until [Expiry date].<br>The invoice is attached where applicable. | Invoice PDF | View subscription |
| 29 | 25 | Upsell | Posted more than 3 demands | Retail and F&B brands exhaust their listing limit | Retail Brand, F&B Brand | Triggered | Personal | Y | – | – | – | – | No | 0 | You have used all 3 requirements on your plan. Enroll for Enterprise Solution to post more. | – | – | – | – | – | Enroll |
| 30 | 26 | Upsell | Posts more than 1 office demand | Individual office or managed space occupier exhausts their limit | Office Occupier, Managed Occupier | Triggered | Personal | Y | – | – | – | – | No | 0 | You have used your 1 requirement on this plan. Enroll for Enterprise Solution to post more. | – | – | – | – | – | Enroll |
| 31 | 27 | Upsell | Unsubscribed agent tries to act | Agent clicks any action button without an active subscription | Agent | Triggered | Personal | Y | – | – | – | – | No | 0 | Subscribe to unlock this. Post unlimited properties and reach live demand. | – | – | – | – | – | Subscribe now |
| 33 |  | ‘Typical per day’ is an estimate for an active user. The Dashboard uses it to test the daily cap — edit these to model different volumes. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

#### Notification Final — Columns W–W: (untitled block)

| Row | W |
|---|---|
| 4 | Updated WhatsApp |
| 5 | Hi [Name], welcome aboard to Keydemand, India's CRE marketplace. Your account is now active. Start posting and connect with active demand and supply across cities.<br>Team Keydemand<br>#CRESimplified |

#### Tab: Build 1 Bugs
Columns: S.no., Date, Interface, Category, Status, Build, Issue/Bug, Steps to Replicate, Business Comments, Dev/QA Comments, Media.

#### Build 1 Bugs — Columns A–K: (untitled block)

| Row | A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | S.no. | Date | Interface | Category | Status | Build | Issue/Bug | Steps to Replicate | Business Comments | Dev/QA Comments | Media |
| 2 | 1 | 18/08/2026 | Web | UI/UX | New | Build 1 | Tenant has not changed as office tenant | New user login journey |  | Tenant/Managed occupier - Are you looking for office or managed spaces | https://jam.dev/c/c07db505-89e5-479f-bc10-b1e4672e97a4 |
| 3 | 2 | 18/08/2026 | Web | Functionality/Business Rule | New | Build 3 | Able to add any random email address | New user login journey |  | Does random emails include business email? - Emails validations needed | https://jam.dev/c/d5f258ed-aea0-434f-bb29-7ef9fc46eb6c |
| 4 | 3 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Once we draft the property, it is not taken into with the same details that we have updated | Agent/Post Property/Draft/Dashboard/Resume draft |  |  | https://jam.dev/c/47634cee-0adb-4f34-80da-11cd10e945d8 |
| 5 | 4 | 18/08/2026 | Web | Functionality/Business Rule | New | Build 3 | The rate per sqft and Quoted Rent should work together, and not with carpet area directly | Agent/Retail/Post Property |  |  | https://jam.dev/c/4b1165af-55a1-470b-aec3-368ef6bd460d |
| 6 | 5 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Lock-in period cannot be greater than lease tenure years | Agent/Retail/Post Property |  |  | Lease&Lockin Error.mp4 |
| 7 | 6 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | The attributes are already filled in. | Agent/Retail/Post Property |  |  | Auto-fill Data.mp4 |
| 8 | 7 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | All input field (Scroll is working in some field) | Agent/Retail/Post Property |  |  | https://jam.dev/c/8c4f651e-36c3-4bcf-97bd-c1d0cba59bca |
| 9 | 8 | 18/08/2026 | Web | Text Changes | Resolved | Build 3 | Space Operator-It should be 'Managed Space Operator' under 'List your project' section. | Landing page > List your project > Operator |  |  | List a project-Space operator.mp4 |
| 10 | 9 | 18/08/2026 | Web | Functionality/Business Rule | New | Build 3 | Draft Auto-Save | The system must automatically save a draft of a property or demand listing every 30 seconds during the posting flow. | In this how do we check if its getting auto save in 30s? If we are clicking on the logo and leaving the journey will it be showed in the draft? |  |  |
| 11 | 10 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Floor Preferance should be mandatory (Given in PR sheet) | Agent > Retail/F&B > Lease/Buy > Post Demand |  |  |  |
| 12 | 11 | 18/08/2026 | Web | Text Changes | Resolved | Build 3 | Frontage Should be (Ft) (Given in PR sheet) | Agent > Retail/F&B > Lease/Buy > Post Demand |  |  |  |
| 13 | 12 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Store Type should be mandatory (Given in PR sheet) | Agent > Retail/F&B > Lease/Buy > Post Demand |  |  |  |
| 14 | 13 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Lock-in period cannot be greater than lease tenure years | Agent > Retail/F&B/Office > Lease/ Buy > Post Demand |  |  |  |
| 15 | 14 | 18/08/2026 | Web | Functionality/Business Rule | Unable To Replicate. | Build 3 | The Age of Property attribute is showing an unwanted 10–20 years range. | Agent > Office > Lease/ Buy > Post Demand |  | Field Deleted as per PR |  |
| 16 | 15 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Parking is not mandatory. | Agent > Retail > Lease > Post Property |  |  |  |
| 17 | 16 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Pdf size should be less then 2 mb. | Post Property |  |  |  |
| 18 | 17 | 18/08/2026 | Web | Functionality/Business Rule | InProgress | Build 3 | Upload video should be less than 5 mb. | Post Property |  | Need to improve |  |
| 19 | 18 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Frontage should be mandatory. | Agent > Retail > Sale > Post Property |  |  |  |
| 20 | 19 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Parking is not mandatory field | Agent > Retail > Sale > Post Property |  |  |  |
| 21 | 20 | 18/08/2026 | Web | Functionality/Business Rule | Unable To Replicate. | Build 1 | Newly signed-up agent is getting an error of uploading images for posting properties | Signup>Agent login>post property |  |  | https://jam.dev/c/9dc5530a-c5d2-477d-a6bb-78928c6c346f |
| 22 | 21 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Frontage should be mandatory. | Agent > F&B> Lease/Buy > Post Property |  |  |  |
| 23 | 22 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Parking is not mandatory field | Agent > F&B> Lease/Buy > Post Property |  |  |  |
| 24 | 23 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Washroom is not mandatory field | Agent > F&B> Lease/Buy > Post Property |  |  |  |
| 25 | 24 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Fitouts Status (Developer/Landlord to do fitout) is Missing | Agent > Office> Lease/Buy > Post Property |  |  |  |
| 26 | 25 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Floor Preference* Should be Mandatory. | Brand > Retail/F&B > Lease/Buy Demand |  |  |  |
| 27 | 26 | 18/08/2026 | Web | Functionality/Business Rule | Resolved | Build 3 | Store type* Should be Mandatory. | Brand > Retail > Lease/Buy Demand |  |  |  |
| 28 | 27 | 19/08/2026 | Web | Functionality/Business Rule | InProgress | Build 1 | explicitly labeled as 'Official Email ID'. |  | Kindly share screenshot of that particular page. | This is a bug as changes did not reflect, once fixed we will share the screen shots |  |
| 29 | 28 | 19/08/2026 | Web | UI/UX | Resolved | Build 1 | Try to fit the form in one fold without asking to scroll | Landing page > About Keydemand > Request call back |  | The size of the form page depends on the size of the screen, as it is built dynamically | https://jam.dev/c/9c238cf0-95c5-4b70-88bd-d908bd2cc28c |
| 30 | 29 | 19/08/2026 | Web | Functionality/Business Rule | Resolved | Build 1 | Send an Enquiry should ask user to fill details and not open calendly. Kindly removed calendly as discussed in our meeting. | Landing page > About Keydemand > Send an Enquiry |  | Remove calenderly link and put the request a callback form as the send an enquiry form as well | https://jam.dev/c/976dcb61-96a3-444e-8549-94b1235ebfbd |
| 31 | 30 | 19/08/2026 | Web | Functionality/Business Rule | Resolved | Build 1 | Assets Class is not mention on exlusive project Card on landing page. | Landing page > Exclusive Project Cards |  |  | https://jam.dev/c/aee18077-b710-4a5c-86b4-9d86169d5b19 |
| 32 | 31 | 19/08/2026 | Web | Functionality/Business Rule | Resolved | Build 1 | Some feilds are missing in retail property card on landing page. | Landing page > Expolre Property Cards |  |  | https://jam.dev/c/035f1af0-882e-4b2a-94fd-5dc4e2b2bd86 |
| 33 | 32 | 19/08/2026 | Web | Functionality/Business Rule | Resolved | Build 1 | Some feilds are missing in Office property card on landing page. | Landing page > Expolre Property Cards |  |  | https://jam.dev/c/035f1af0-882e-4b2a-94fd-5dc4e2b2bd86 |
| 34 | 33 | 19/08/2026 | Web | Functionality/Business Rule | Resolved | Build 1 | Managed Space is missing in explore property & projects. | Landing page > Expolre Properties |  | In projects it is already there. It will not come for Properties- Clarified with Himanshu -26th September | https://jam.dev/c/8a805fa4-a7c6-4fc2-8069-d6399eb83a6d |
| 35 | 34 | 19/08/2026 | Web | UI/UX | Resolved | Build 1 | The outer line of the add to Favourite " should be a little darker | Landing page>Premium project & Exclusive project |  |  | https://jam.dev/c/b3dac1db-ec67-4d1c-b287-f0fb560b099d |
| 36 | 35 | 20/08/2026 | Mobile | UI/UX | New | Build 1 | After removing the project name, the changes are not being populated. | Profile Page > Existing Property > Edit |  |  | https://propvantageproptech-my.sharepoint.com/:v:/g/personal/rohit_keydemand_in/IQBn9WD-8OzKSoeuNYxldUGhAW2nFHeDvkPILARGFLNjNiQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=oQaVME |
| 37 | 36 | 20/08/2026 | Mobile | Text Changes | New | Build 1 | When a non-registered user clicks the “View Phone Number” button, the CTA should display “Login/Register” instead of “Register.” | Non Register User > Exlopre Property > View Phone Number > Register Button |  |  |  |
| 38 | 37 | 20/08/2026 | Mobile | UI/UX | New | Build 1 | In the Assets class of the Project section, Managed Space needs to be added. | Explore Property > Project |  |  | https://propvantageproptech-my.sharepoint.com/:i:/g/personal/rohit_keydemand_in/IQCdjSCoXP4IQKQX4tZCznfCARNUsgrMznEB8IkAGMWApD0?e=2JTxDc |
| 39 | 38 | 20/08/2026 | Web | Text Changes | New | Build 1 | In the Premium project card-It should be 'Posted By' | Landing page>Premium project>Posted By |  | Need to mark as posted by instead of just by | https://propvantageproptech-my.sharepoint.com/:v:/g/personal/rohit_keydemand_in/IQAAkOZv2p5YTISkDmNfpamAAdRgiVZvuZmii6_IZJjcDQk?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=DDdscv |
| 40 | 39 | 9/9/2026 | Web | UI/UX | Resolved | Build 1 | Transaction type should be mentioned on the card, cannot understand if its Lease or Buy or Sale | Go on landing page > property card |  |  | https://jam.dev/c/7637caf4-fee6-44de-a7a4-af1d164eeb7b |
| 41 | 40 | 9/9/2026 | Web | Functionality/Business Rule | New | Build 1 | If a user who is a brand is already an enterprise user or registered on the platform and entered the brand name as Starbucks then if any other user enters the brand name as same, how will we handle this case? | Sign-up > Onboarding |  | Satish/Krishna |  |
| 42 | Build 2 |  |  |  |  |  |  |  |  |  |  |
| 43 | 41 | 1-Sep-26 | Web | UI/UX | New | Build 2 | We have told to input Active agents, properties uploaded, demands uploaded in the dashboard level information | Control Pannel > Dashboard > Agent Dashboard |  |  | https://jam.dev/c/7db36cef-2d76-4895-972b-cb67ae3fc423 |
| 44 | 42 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Under user management, 'City and Sort' option/filter is not working for 'Retail and FnB Brands' user | Control Pannel > User Management> Retail and FnB Brands |  |  | User Mgmt-FnB-City and sort.mp4 |
| 45 | 43 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | While creating the Agent Page, the *Assets Class* option is missing, even though it is mentioned in the provided documents. <br>My City, Assets Class, Transaction type Needs to be mandatory. | Control Pannel > User Management> Agent> Add Agent |  |  | https://jam.dev/c/32da9cbd-e313-4325-9608-dc85d64dbf0e |
| 46 | 44 | 1-Sep-26 | Web | Text Changes | New | Build 2 | The Source/Mode & Subscription Mode,  option is missing from the Agent Chart. | Control Pannel > User Management> Agent |  |  | https://jam.dev/c/1cd2e769-aee0-4f97-a5f0-019f6bc73e24 |
| 47 | 45 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | While creating the Brand Page, the *Transaction Type & WhatsApp Notification* field is missing, even though it is mentioned in the provided documents. | Control Pannel > User Management> Retail & F&B  Brands > Add Brand |  | According to GDPR, we cannot decide to activate whatsapp status for the agents or brand. the customer only has the right to select his transaction type when we give him his account. Can you give us more clarity | https://jam.dev/c/fd6cfe9c-06e7-47fc-b1bd-c5dad3391898 |
| 48 | 46 | 1-Sep-26 | Web | Text Changes | New | Build 2 | Need to discuss the Table Chart for Retail & F&B Brands, specifically regarding the required fields, data points, and chart configuration as mentioned in the provided documentation. | Control Pannel > User Management> Retail & F&B  Brands | The Control Pannel BRD Document mentions the table where we also have Leads and Source for the Retail and F&B section. It seems missing from the current control pannel. | The bug is not clear. There is no media to check. | IMG-20260928-WA0005 |
| 49 | 47 | 1-Sep-26 | Web | Text Changes | New | Build 2 | The 'Action' lable is missing from the 'Retail & F&B Brands' header. | Control Pannel > User Management> 'Retail & F&B Brands |  |  | Action label |
| 50 | 48 | 1-Sep-26 | Web | UI/UX | New | Build 2 | While creating the Brand Page, the *Asset Class and User Name also Switch Enterprise* field is missing, even though it is mentioned in the provided documents. | Control Pannel > User Management> 'Office & Managed Tenants |  |  | https://jam.dev/c/6bd5208c-ab3c-4ba4-9618-94dc22a06a45 |
| 51 | 49 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Before deactivating any user, the system should display a confirmation pop-up asking the user to confirm the action, instead of deactivating the user directly.<br>Example:<br>Clicking Deactivate → Show confirmation pop-up → User confirms → User is deactivated. | Control Pannel > User Management> Any User |  |  | https://jam.dev/c/fdb359d9-8c3c-4c2d-9ca5-4e0b043aaf1c |
| 52 | 50 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | A Red Dot should be displayed whenever any new Property, Demand, or Project is added to the system, so users can easily identify what’s new. | Dashboard |  |  | https://jam.dev/c/e3df2f28-5488-43df-a2c4-8d5eaed372f6 |
| 53 | 51 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | How will we identify who the High-Value Lead is assigned to? In the demo, we were able to see the “Assigned To” field, but it is missing in the current version | Control Pannel > High Value Leads > Chart |  |  | https://jam.dev/c/08a46e95-2455-45f9-8faa-dc39ad1c9df7 |
| 54 | 52 | 1-Sep-26 | Web | UI/UX | New | Build 2 | The text alignment in the chart should be proper and consistent. All labels, headings, and data values should be aligned correctly for better readability and a cleaner presentation. | Control Pannel > High Value Leads > Chart |  |  | https://jam.dev/c/08a46e95-2455-45f9-8faa-dc39ad1c9df7 |
| 55 | 53 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | When creating a new rule for High-Value Leads, the newly created rule should appear on the top of the Chart. Can we add a date when it is added also when it is modify. | Control Pannel > High Value Leads > Add Rule |  |  | https://jam.dev/c/d29b1e75-f3bf-42ba-be28-316597563ab1 |
| 56 | 54 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | (HVL threshold (sq.ft))<br>Why is this in the subscribtion management in the add city ? | Control Pannel > Subscription Mgmt > Add City |  |  | https://jam.dev/c/3784a563-39ab-4761-9f5a-0777f8352456 |
| 57 | 55 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Its Not Tier 2, Its Non Metro City. | Control Pannel > Subscription Mgmt > Price Mgmt |  |  | https://jam.dev/c/92132930-e230-4053-8275-be0f8d502b4e |
| 58 | 56 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | How does this logic works cancel at the cycle end and how does withdraw cancellation. | Control Pannel > User Mgmt > Agent > Manage Subscription |  |  | https://jam.dev/c/08b62063-4b62-436a-8475-e47016fc6dbb |
| 59 | 57 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Agent should not be able to post managed space. | Control Pannel > User Management> Agent> Upload Property |  |  | https://jam.dev/c/bfc1c90b-dabe-4092-8452-3fd4b564f090 |
| 60 | 58 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Need to check overall fields for listings (Demand and property) Example - Other interested location is missing | Control Pannel > Post Demand (For all Users) |  |  | https://jam.dev/c/2624ffac-bb76-4933-bf89-c7053e204f15 |
| 61 | 59 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Need to understand the proper functionality of Format while posting demands, the data of the format is not fetching while posting demand |  |  |  | https://jam.dev/c/2c23c856-ca93-476e-8513-bc0efd5e9ad8 |
| 62 | 60 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Developers & Managed Operators - Managed office operator count is missing | Dashboard |  |  | https://jam.dev/c/f10a3223-af30-458f-912e-c3a847cb47f0 |
| 63 | 61 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The default data should not work through scrolling; it looks like the prefetch data, autofill data need to remove | Control Pannel > Post Demand/Properties (For all Users) |  |  | https://jam.dev/c/95237386-b2f2-42f3-976c-545e3d6a3be4 |
| 64 | 62 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Search option is not working in Retail & F&B and Keydemand team |  |  |  | https://jam.dev/c/b94a04b3-c239-4b2c-88fc-8a655d632542 |
| 65 | 63 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The WhatsApp On/Off option is not there while creating Brand page | Retail & F&B Brand>Add Brand |  |  | https://jam.dev/c/211da436-926d-4f13-99f0-e52c059241bb |
| 66 | 64 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Source mode is missing from Every user | Agent to Managed Office |  |  |  |
| 67 | 65 | 1-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Relevancy flow is not proper. After clicking on the relevant property, it should show the property directly, but its showing demand again | Retail & F&B Brand>View Brand>Relevant prperties>View properties |  |  | https://jam.dev/c/45cc67e4-94db-4fc8-bb5c-7f911c68b91e |
| 68 | 66 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | On the view page, the property details are showing incomplete (Ex - Commercial details) | Agent>View>Properties>View detail |  |  | https://jam.dev/c/0dfc54b2-227a-463f-8b21-f6ae6544f89d |
| 69 | 67 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Able to post property even after the account was deactivated | From control panel Agent> Deactivate account>Login from front end >post property |  |  | https://jam.dev/c/a1baeab5-a36e-4187-8630-e2799fe12c0c<br>https://jam.dev/c/e36f9d92-1c6b-4ef1-8f51-17b12d6128fc |
| 70 | 68 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Property contacted should be the ID of the property and not as "property" | Enterprise Brand>Retail Brand solution>Properties contacted |  |  | https://jam.dev/c/3e831e2f-5150-40b9-87d4-09a4eff3cf1e |
| 71 | 69 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Once I have deactivated the agent's account and reactivated it again, the listings are not showing in his account from front end | Agent>Deactivate & Reactivate again |  |  | https://jam.dev/c/363bc27a-5973-4fdb-b577-d8b7b7f882e4 |
| 72 | 70 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The flow of the Office managed space user is taken to the demand section, wherein all the demands are shown, and the flow is getting confusing | Office and Managed tenants>Managed space>Pat-Managedspace>View demand>Relevant projects |  |  | https://jam.dev/c/29d30df0-bfcb-4393-ac98-7f2c1cdb8c4c |
| 73 | 71 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Enquiries are not showing on the dashboard for projects | Dashboard>Projects>Enquiries received |  |  | https://jam.dev/c/cd9a05cd-facc-424b-ad8a-70e28435c3e6 |
| 74 | 72 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Except for Agent, there is no pop-up showing while deactivating the user's account | All Users>Deactivate |  |  | https://jam.dev/c/6ff7e2bb-4638-445d-8994-942eee59663f |
| 75 | 73 | 3-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The assigned project is not showing under keydemand member | Project>View Project>Assign Project |  |  | https://jam.dev/c/242dc077-e8cd-4501-aa1c-c9044e3c53b8 |
| 76 | 74 | 4-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | An unassigned enquiry is showing under the Keydemand member | Marketing Enquiries>Handling>Assign to |  |  | https://jam.dev/c/0a85fde6-0356-4bba-9380-daf1950581ec |
| 77 | 75 | 4-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | So many features are not showing under the Keydemand team, even after giving permission | Keydemand>View account>Assign permission |  |  | https://jam.dev/c/aa9a7dee-4410-4f7d-94fd-f5c9424815b0 |
| 78 | 76 | 4-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The relevancy flow for every listing management is not proper, for Property/for demands/for projects, it is taking again and again in a loop where it's showing relevant propereties and demands | Listing management>Properties>View property>Relevant demands> View relevant demand |  |  | https://jam.dev/c/e3101443-a9d7-420d-9392-5c5fe0222647 |
| 79 | 77 | 4-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Drag image is not working through the control panel and even from the front end | Agent>View agent>post property |  |  | https://jam.dev/c/2386910b-51f5-4821-9c00-fc5c2ed1aeee |
| 80 | 78 | 5-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | How can we add roles and permissions for Keydemand team | User Management > Keydemand Team > Roles & permissions |  |  |  |
| 81 | 79 | 5-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | The properties contacted count isn't showing until we click on it | Enterprise>Brands>View brand>View properties contacted |  |  | https://jam.dev/c/7f9c8649-89e9-4dee-9a76-a705cc665310 |
| 82 | 80 | 5-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Managed space operator projects are not visible under project section | Projects > Managed spae operator |  |  | https://jam.dev/c/23d56bc8-1811-44a4-a672-9c0bb7d9aecf |
| 83 | 81 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | High-value lead viewed by section is not missing, as a control panel. How do we know about the lead taken by keydemand team member | High value leads > Leads |  |  | https://jam.dev/c/a2d1f6c7-9046-4cbc-9cc8-99c623a787a4 |
| 84 | 82 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Projects are showing under the relevant properties; the project should not show for properties | Properties > view properties > relevant projects |  |  | https://jam.dev/c/f7491fcd-ee84-451f-a99d-32cd1134453d |
| 85 | 83 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Remove the Image section from the demand side. | Listing Management > Demands > OD64 |  |  | https://jam.dev/c/099e3579-7e58-4edf-8b95-4841ce6635cf |
| 86 | 84 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | 1. The project fields are different and do not match the data provided.<br>Fields name- Project Type, Amenities, Quoted Rent<br>2. Mandatory fields as per PR sheet, which are missed out.<br>Fields Name-Unit Size Min & Unit Size Max, Developer Name, Total Project Size in sq.ft, Efficiency (%), Possession Date, About Project, OC Status, Features & Amenities, Google Location. | Listing Management > Developer > Pat-Developer > Add Projects |  |  |  |
| 87 | 85 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Once i add project in a booster how will i able to see how many projects i added under the booster (Featured, Premium, Exlusive) | Listing Management > Developer > Projects > John abraham |  |  | https://jam.dev/c/a0f00043-a4d7-49ea-9652-be041255aa31 |
| 88 | 86 | 7-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | While uploading a project, when trying to add a POC, multiple Key Demand Team should be assigend. | Listing Management > Developer > Projects > John abraham |  |  | https://jam.dev/c/8b4a8980-d0d4-4317-ae08-af1d775b4993 |
| 89 | 87 | 7-Sep-26 | Web | Text Changes | New | Build 2 | Project- 'Amenity' spelling is incorrect. It should be 'Amenities' | Listing Management > Developer > Projects > Add Projects |  |  | https://jam.dev/c/e46d6e1b-d147-4cc6-b259-dcecd4ce153a |
| 90 | 88 | 7-Sep-26 | Web | Text Changes | New | Build 2 | How do we calculate the relevant project for demands on the main relevancy count | Listing management>Demands>view demand>Relevant properties>Relevant projects |  |  | https://jam.dev/c/d5dd4783-891c-4c02-83ea-2a073cb099bf |
| 91 | 89 | 9-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Need to remove Rera ID from all users except Agent and Developer | Any user>User profile |  |  | https://jam.dev/c/ba0d95bf-a7de-4883-8fec-ad9a5323d9ad |
| 92 | 90 | 10-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Provide 'Delete Account' request over here (User who have requested to delete their account should be shown here) | Dashboard > Enquiries |  |  | https://jam.dev/c/81d3f5f9-b7d0-48f5-ad2e-ac098b3b5784 |
| 93 | 91 | 10-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | UI should be better in the status section under HVL | HVL>status |  |  | https://jam.dev/c/9f5707c8-52a8-41d9-bf7d-10fb9258afc0 |
| 94 | 92 | 10-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | How do we upload existing platform data into the V2 version? Or do we need to create Bulk upload file option | Enterprise brand>View brand>post demand |  |  | https://jam.dev/c/379b1ecb-72bc-47af-883d-44004d32d4d9 |
| 95 | 93 | 11-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | How to check the assigned Relationship manager in the Enterprise account | Enterprise> Brand>View Brand>Relationship manager |  |  | https://jam.dev/c/cd9c6859-04cf-4b52-b0e6-4d1396ae0022 |
| 96 | 94 | 15-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | When we click on Post a property, Explore tab is also getting selected | Agent>Landing Page>Post Property |  |  | https://jam.dev/c/cca39f40-eb85-4eca-acfa-a0a6c4c0b061 |
| 97 | 95 | 15-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Fitout status validation incomplete (It should be- Furnished, Unfurnished, Developer/Landlord to do fitout) | Agent > Post Property>Office> Lease/Sale |  |  | https://jam.dev/c/3ffbd418-3f14-41f4-9918-a63ed5cd3fa5 |
| 98 | 96 | 15-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Age of property- it needs to be removed as per PR sheet | Agent >Post Property>Office> Lease>Age of property |  |  | https://jam.dev/c/f6faf022-60ad-4763-ae36-7d76535a7ce6 |
| 99 | 97 | 15-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | F&B (Lease/Buy)- While posting, Cooking type 'Either' option is missing as per PR sheet | Agent >Post FnB> Lease/Buy>Cooking Type |  |  | https://jam.dev/c/0605c47c-9fc2-4f59-8793-3bb5c15d8203 |
| 100 | 98 | 16-Sep-26 | Mobile | UI/UX | New | Build 2 | UI/UX Problem (Device : - Google Pixel) | Agen > Explore Clients > Developers |  |  |  |
| 101 | 99 | 16-Sep-26 | Mobile | UI/UX | New | Build 2 | UI/UX Problem :- The “Post Property” and “Save as Draft” buttons appear immediately after uploading any data, even when the required property details are not yet completed. | Agent > Post Property |  |  |  |
| 102 | 100 | 16-Sep-26 | Web | Functionality/Business Rule | New | Build 2 | Clicked on notification and the re-direction happened to the property but I am able to view my own phone number for self inventory. Need to re-direct to the property but CTA should be view leads where I can see users who has viewed my phone number through this Listing. | Keydemand Team > Anita Login > Notification > someone viewed your Contact > Property detailed page |  |  | https://jam.dev/c/fef7687f-b799-4704-b632-4927cb7628d6 |
| 103 | 101 | 16-Sep-26 | Web | UI/UX | New | Build 2 | Logout page is not properly fit |  |  | Please give us more details |  |
| 104 | 102 | 17-Sep-26 | Mobile | UI/UX | New | Build 2 | UI/UX issue observed while accessing the Book Demo functionality. | Agent > Landing page > Book Demo |  |  | UI UX.mp4 |
| 105 | 103 | 18-Sep-26 | Mobile | Functionality/Business Rule | New | Build 2 | After posting properties vertical images also visible in Horizontally | Agent>post property>View property from dashboard |  | We need to discuss on this | https://jam.dev/c/6f5fc73f-7578-41c1-86e1-3ec28f1f0597 |
| 106 | 104 | 18-Sep-26 | Mobile | UI/UX | New | Build 2 | On the Property Card, the Possession attribute already exists, but a separate Possession Date ribbon is still being displayed, resulting in duplicate information. | Agent > Landing Page > Top Developers project |  |  | Possession Date.jpeg |
| 107 | 105 | 18-Sep-26 | Mobile | UI/UX | New | Build 2 | While exploring, the carpet area range should have the proper selecting range option to explore the exact area size (example between 500 to 1000) | Agent>Explore properties |  |  | https://jam.dev/c/94328ee9-23b2-412c-9305-441f61ad4409 |
| 108 | 106 | 19-Sep-26 | Mobile + Web | UI/UX | New | Build 3 | Property PDF, Project PDF & Demand PDF their layout and design should not be same as V1 we need a good design for our V2 design | Property detail > Download PDF |  |  |  |
| 109 | 107 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | Project and Property do not keep pre-selected outcomes for anything, let user input the outcomes. Remove the pre-filled while uploading project, property or demand | Post property > Fill Details <br>Post demand > Fill details <br>Post Project > Fill details |  |  | https://propvantageproptech-my.sharepoint.com/:i:/g/personal/rohit_keydemand_in/IQBPRR8jvsxQSKrc8u92VEn5AXZ0fI34dzAagBwxZvT6KOE?e=0lfrZH |
| 110 | 108 | 19-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | While uploading the project, If the project status is selected as ready to move then the posession date should be greyed out. Logic needs to be implemented | Control Panel > Developer > Add Project > Fill details |  |  | https://propvantageproptech-my.sharepoint.com/:i:/g/personal/rohit_keydemand_in/IQDwU0O8S_29Q7Eb5hfO9Qp9AaIW4q95snSWG7UKeLBzBGg?e=zTFl4t |
| 111 | 109 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | Keydemand team when views any property on the pannel, they can see relevant demand?? Why? Ideally only when they open their property the relevant demand should be shown. | Keydemand > View others Property > Property detailed page > Relevant Demands |  |  |  |
| 112 | 110 | 19-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Any project when added it does not have upload PDF for brochure, on our PR sheet we have the outcome as media and on the admin it shows link for brochure. Please check this | Control Panel >  Add Project > Fill details > Brochure Link |  |  | https://propvantageproptech-my.sharepoint.com/:i:/g/personal/rohit_keydemand_in/IQDQRtgCoGgFTKLtJ6Q-ifmRAYNPzygSE-k-Q3mjTnY573k?e=4uJ0Jb |
| 113 | 111 | 19-Sep-26 | Control Panel | UI/UX | New | Build 3 | We posted Managed Space Project and then in the Summary of the project that is for managed or office or any other it should only show their summary and not other fields in the project detailed section. Kindly review this | Control Panel >  Add Project > Project Detail Page |  |  | https://jam.dev/c/f4ee7384-272b-4172-acbc-c9165b504195 |
| 114 | 112 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | Project card information is incorrect on project detail page for managed space & all other projects too. Need to show managed card information | Landing page > Project Section > Managed Project |  |  | Project card information.png |
| 115 | 113 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | In the search when we are checking the location eg goregaon its showing a project which is a managed space and ideally the managed space should be placed under managed centre and not Project. | Landing Page > Search > Location/Area |  |  | Project card information.png |
| 116 | 114 | 19-Sep-26 | Mobile + Web | UI/UX | New | Build 3 | CTA for projects and properties and demand detailed page should be in the 1st fold when we are in detailed page. Chances of user not going scrolling down is very high | Detailed page of any property, demand or project > CTA (View phone Number or Show Interst) |  |  |  |
| 117 | 115 | 19-Sep-26 | Mobile + Web | UI/UX | New | Build 3 | The location should be with leaflet wrapper when a property and project is posted. | Property detailed Page > Map |  |  | https://jam.dev/c/5ece66df-a138-45b9-a522-a31b38310c04 |
| 118 | 116 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | A direct demand when onboarding when we fill up the demand it doesnt show relevant properties directly, need to showcase. We have earlier shown a card which shows number of releavant properties. It Needs to be there | Landing page > Sign-up > |  |  |  |
| 119 | 117 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | Selected Operating City is Mumbai, but while exploring properties, the system still defaults to Bengaluru instead of Mumbai for registered users. | This happened during a journey but when refreshed it selected the location |  |  |  |
| 120 | 118 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | If its managed space then it has to be leased as the transaction type, we cannot show other transaction type. We need to have this dynamic | Generic Rule |  |  | https://jam.dev/c/d90b2ad2-20a9-46ed-b22c-290e43ff4686 |
| 121 | 119 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | If I have slected intersted in managed space while registering on the platform as an Office Occupier, then it should also give me option to post Office and Managed Office Demands as well. | Landing page > Sign-up > Office Occupier > Demand > Post Demand > Asset Class |  |  | Managed Office space.png |
| 122 | 120 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | Rate per sft if a user is entering in the lease side for properties then it shouldnt be able to take more than 4 digits | Generic Rule for property and project | Example (2 Lakh per Monthly) |  | image.png |
| 123 | 121 | 19-Sep-26 | Mobile + Web | UI/UX | New | Build 3 | While uploading property the Age of property should not be pre-filled. It needs to be with something called as slect and when user clicks on the drop down its when they can select the age of property | Agent/Keydemand > Upload Property > Field > Age of Property |  |  | Property Prefeilds.png |
| 124 | 122 | 19-Sep-26 | Mobile + Web | Functionality/Business Rule | New | Build 3 | If the user is already a registered user of office, retail, f&b and managed space, when they choose to go for enterprise solution and if they are registerd the details in enterprise form should be pre-filled and whats not available only should be  asked. | Retail/Office/F&B/Managed Space > Enterprise > Form |  |  | Enterprise Solution.png |
| 125 | 123 | 19-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | When we receive the enquiry for an enterprise solution at the backend, we need some kind of customer re-direction from there as a short cut to go to User management with a click and allow us to upgrade it to Enterprise | Enquiries > Marketing Enquiries > Kartik |  |  | https://jam.dev/c/400e7ba9-1d62-4a38-8a0e-7b554b0053e1 |
| 126 | 124 | 19-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | When we are converting the user to enterprise user, we need to have the option to add relationship manager there only rather than adding it seperately. This could miss out from our end hence let that be in the journey of when we convert the  user to enterprise | Enterprise >Tenants>Kartik>Convert to Enterprise |  |  | https://jam.dev/c/ac6cc2f6-8d99-4e80-b9aa-bddfd87942a9 |
| 127 | 125 | 19-Sep-26 | Mobile | Functionality/Business Rule | New | Build 3 | After switching to an Enterprise account, there is no ribbon, badge, or visual indicator showing that the user has successfully switched to an Enterprise account.<br>(Agent: Display the ₹ (Rupee) symbol)<br>(Enterprise Office: Display a 💼 (Suitcase) symbol) | Login details |  |  | https://jam.dev/c/26534469-b2e7-4b1a-89dd-c46cba77e822 |
| 128 | 126 | 19-Sep-26 |  | Functionality/Business Rule | New | Build 3 | While posting property "Who can see your demand " shouldnt be there, its applicable for Keydemand user only | Office & Managed Tenants>Select Rohtit tenant>Post Demand |  |  |  |
| 129 | 127 | 19-Sep-26 |  | Functionality/Business Rule | New | Build 3 | While adding Centre under Managed space operator fields need to checked- 'Team Size' shouldnt be there, Space fields are overlapping and validation need to recheck as per PR sheet | User Msnagement>Managed Space Opertaor> Select Operator>Add Center |  |  | https://jam.dev/c/d8c616ee-ecd5-4642-9142-26ad7a24d004 |
| 130 | 128 | 19-Sep-26 |  | Functionality/Business Rule | New | Build 3 | Need to remove example given under 'Format name and End Use' Field | Enterprise >Brand>patrik-brand>Add format>Format Tab |  |  | https://jam.dev/c/14c36eee-928f-43f8-949e-19994031d6ef |
| 131 | 129 | 21-Sep-26 |  | Text Changes | New | Build 3 | Co-working we have not yet started | Developer>View developer>add project |  |  | https://jam.dev/c/2016cfe5-366e-49e7-bcba-e4277815f352 |
| 132 | 130 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | If the project is Ready to move then the Possession Date of  the project should be freeze | Developer>View developer>add project |  |  | https://jam.dev/c/a2d9ffce-97d2-4cbb-9bf8-adb36ba5d01e |
| 133 | 131 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | The sysetm should show the error or take to that place where the fields are missing | Developer>View developer>add project |  |  | https://jam.dev/c/10e3b0f9-85d7-42aa-aff3-e108fc1a303d |
| 134 | 132 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | After uploading projects the images should show as per the image dimensions | Developer>View developer>add project |  |  | https://jam.dev/c/2ecfa7e7-c891-4e0b-ad99-13536a706367 |
| 135 | 133 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | There is no option for download PDF from control panle also the share button is not clickable | Developer>View developer>add project |  |  | https://jam.dev/c/75223d04-b797-4331-8392-15a0a3ae68db |
| 136 | 134 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Unknown field is showing in project "kind" | Developer>View developer>add project |  |  | https://jam.dev/c/701600ab-2a53-416c-928b-5ea3b24366cc |
| 137 | 135 | 21-Sep-26 | Control Panel | UI/UX | New | Build 3 | While exploring properties, the page/screen is flickering intermittently, affecting the overall user experience. | Agent > Explore Property |  |  | https://jam.dev/c/be24a05d-6d75-466d-a025-c0d4464e0272 |
| 138 | 136 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | The same project is being displayed across all the cities selected, even when the project is not available in those respective cities. | Agent > Landing page > Top Devloper Project slot |  |  | https://jam.dev/c/7e25ac26-48fe-4b0b-a7f8-30f7e133e8c9 |
| 139 | 137 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | The Managed Space Assets class is not available in the search bar. | Landing page > Search Bar |  |  | https://jam.dev/c/9e0f135f-866d-4a9a-b7c7-43878fb14931 |
| 140 | 138 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | The Built-up Area Sequencings  should be updated and displayed as per the data provided in the PR sheet | Control Pannel > UM > Agents > Post  Property |  |  | https://jam.dev/c/bf5024a8-187d-4c8a-9083-e4b077a19d57 |
| 141 | 139 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Blank attributes are still showing with the unknow tag (Its should be not visible if its blank) | Agent > LM > Properties > OP60 |  |  | https://jam.dev/c/ae708ed3-ad76-4f30-b8bb-f21240615866 |
| 142 | 140 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Without subscription agent is able to post 2 properties | Agent>Deepak>Post property |  |  | https://jam.dev/c/8324b1d4-407e-43f8-a18d-fa43382ccbfa |
| 143 | 141 | 21-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | The flow after clicking on Retail Brand requires validation and rechecking. (The Demand page should load and display all elements properly without any visual glitches.) | Agent > Dashboard > Relevent Demand |  |  | https://jam.dev/c/c222a7a4-1379-44b0-b1bb-9cf6b724bc02 |
| 144 | 142 | 22-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Lead received for property is not clickable under Agent account (Image request) | Agent>Dashboard>View property>lead received |  |  | https://jam.dev/c/d1897f38-99e5-4d14-b9ba-e3d231e8d457 |
| 145 | 143 | 22-Sep-26 | Web | UI/UX | New | Build 3 | Need to add arrow for better understanding to scroll right and left in similar properties | Agent>Explore properties>View properties>Similar properties |  |  | https://jam.dev/c/100c8a17-f3f8-405b-9e5e-59d3cce6e82d |
| 146 | 144 | 23-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Even after edited the developer name is not showing updated on the front side | Developer>View developer>Edit |  |  | https://jam.dev/c/7fc4530b-8299-486b-8622-cab6d4656511 |
| 147 | 145 | 23-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | The fields that are not given are showing on the front-end "Units Available" and Quoted price option is not available in the backend but on front end its showing "Quoted Price<br>On Enquiry" | Developer>Add project |  |  | https://jam.dev/c/6d981b01-6d99-4af3-a533-7a5b657d5a7f |
| 148 | 146 | 23-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | PRE-Fields examples should be removed, as they feel distracting and make the interface look cluttered. | UM > Developers > Add Project |  |  | https://jam.dev/c/2aed13e2-f50a-401e-a6a9-fca9e2e8eb8e |
| 149 | 147 | 23-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Company Page Logo is not getting updated when attempting to change it. | UM  > Developers > Add Developer |  |  | https://jam.dev/c/14901479-2ee3-4ab3-b8f8-61b9af6c913c |
| 150 | 148 | 23-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | In projects Features & Amenities are not updated as per given in PR sheet. | UM  > Developers > Add Developer |  |  | https://jam.dev/c/21391117-b51e-4ad9-996b-77079577fa98 |
| 151 | 149 | 23-Sep-26 | Web | Text Changes | New | Build 3 | On the Developer, Office Tenant, and Managed Space Operator pages, the Company Name field sequence should be moved to the first position for a clearer and more logical form flow. | User Management |  |  | https://jam.dev/c/bc236b27-f3d3-4f20-9ec9-2435079fcc96 |
| 152 | 150 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Need to add user type on property card for better understanding. | Agen/Keydemand > Explore Properties > Property |  |  | https://jam.dev/c/739d3d88-0abf-4b8a-9835-477472eae254 |
| 153 | 151 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | On the Property page, the section heading should be “About Property” instead of “About Project.” | Explore Properties > Property Page |  |  | https://jam.dev/c/faf99ea3-c41f-4f56-aaac-608b40495426 |
| 154 | 152 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Direction for Notification on Image received is not working | Agent > Notification |  |  | https://jam.dev/c/29c6fd0d-472a-45a2-a409-5510063cdf2f |
| 155 | 153 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Retail Brand-My Listing, need to correct header for 2 fields. Please check the link for the same | Retail Brand > Dashboard > Your Listing > RD187 |  |  | https://jam.dev/c/1cad253c-8c4f-4364-8317-abeb2f373046 |
| 156 | 153 | 24-Sep-26 | Web | Text Changes | New | Build 3 | If a contact request has already been sent, the button should display “Already Request ” instead of “Request Contact.” | Dashboard > Your Listing > Property > Relevancy > Match demand |  |  | https://jam.dev/c/5eadef66-1ea5-42cf-8fbd-ed1a32e71e54 |
| 157 | 154 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Retail Brand- When we click on demand ID flicker is happening. | Dashboard > Leads > Contact Enquiries> Contact request> clicked on Demand ID RD188 |  |  | https://jam.dev/c/3b7041aa-19ef-4a61-9cc6-a0beb1970da4 |
| 158 | 155 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 4 | For all Key Demand users, there should be no restriction on the “View Number” CTA. The user should be able to view the contact number without any limitations. | Keydemand Team > Explore properties > Property Card |  |  | https://jam.dev/c/f3bd33c0-80bc-4248-8839-0b4697640588 |
| 159 | 156 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Project ID not visible on Top developer project section | Explore Properties > Top developer projects |  |  | https://jam.dev/c/a4414bed-dfc7-4857-9117-f861851b5644 |
| 160 | 157 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Due to a temporary glitch, the system is showing the same project twice |  |  |  | https://jam.dev/c/d9efe9f1-9f1c-41c7-9238-5e89fc8d9000 |
| 161 | 158 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Managed Space operator- Header should be as per PR sheet-'Centre', 'Capacity & Pricing' and 'Space' and 'Possession Date' is incorrect. It should be 'Managed Centres, 'Managed Office Format', 'Additional Details' and  'Property Available From' respectively | Managed Space operator > Click Operator> Add centre |  |  | Managed space operator-field names.mp4 |
| 162 | 159 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Managed Space operator- Field box missing for this fields (Description, Lock-in Period, Business Days & Hours, Workspace Solution) | Managed Space operator > Click Operator> Add centre |  |  | Field box-managed space operator |
| 163 | 160 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Existing tenants' field need to be deleted as per PR sheet | Managed Space operator > Click Operator> Add centre |  |  | Managed space operator-Existing tenants |
| 164 | 161 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Managed Space operator- Data Validation missing for 'Business Days & Hours', and 'Workspace Solution'. | Managed Space operator > Click Operator> Add centre |  |  | https://jam.dev/c/1da03011-6915-467e-bbe2-6da5942c53dc |
| 165 | 162 | 24-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Managed Space operator- when we click on Keydemand POC dropdown, its validations list is overlapping. | Managed Space operator > Click Operator> Add centre |  |  | https://jam.dev/c/4adc59a7-ed10-48e7-962b-e91f19398722 |
| 166 | 163 | 28-Sep-26 | Web | UI/UX | New | Build 3 | The speed of Extension and withdrawal of the subscription pop-up is too quick, its not even readable | Agent>Manage subscription |  |  | https://jam.dev/c/397fd19a-e668-4b0b-88ce-6053a39611ab |
| 167 | 163 | 28-Sep-26 | Control Panel | Text Changes | New | Build 3 | When we click on Demand ID it shows 'Retail Property for Lease' as heading on th top. It should be 'Retail Demands for Lease' | User Management > Retail & FnB brands > Lee (Retail) > RD185 |  |  | https://jam.dev/c/e95d3de3-a5c7-4102-b306-43cad4991496 |
| 168 | 164 | 28-Sep-26 | Control Panel | Text Changes | New | Build 3 | The “Tag Properties” option is not available in the Project section. Therefore, the related pop-up message should be removed. | Use Management > Projects > Kalyani DMM |  |  |  |
| 169 | 165 | 28-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Control panel notification is not getting close once it open |  |  |  |  |
| 170 | 166 | 28-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | While adding a new enterprise brand why should be have individual and enterprise, it should only be enterprise. | Enterprise > Brands > Add Brand |  |  | https://jam.dev/c/eb6f09dd-4881-462f-9e95-fccdd40b4baf |
| 171 | 167 | 28-Sep-26 | Control Panel | Text Changes | New | Build 3 | Instead of format name change it to brand name. | Enterprise > Brands > Add Brand |  |  | https://jam.dev/c/1edd58d2-695f-4d71-85bd-316d2120b922 |
| 172 | 168 | 28-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | End use needs to be a drop down from the provided list. (The list added under PR sheet enterprise solution) | Enterprise > Brands > Add Brand |  |  | https://jam.dev/c/f18a432f-4b02-49aa-84b8-de618246a3cc |
| 173 | 169 | 28-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | Remove 'Head Office' header from add brand page. | Enterprise > Brands > Add Brand |  |  | https://jam.dev/c/15105f97-d23e-48af-a35c-8009e1d2f8cb |
| 174 | 170 | 28-Sep-26 | Control Panel | Functionality/Business Rule | New | Build 3 | While adding enterprise format the fields that need to be mandatory are brand name, transaction type, carpet area, floor preference, possession needed. | Enterprise > Brands > Add Brand |  |  | https://jam.dev/c/d8070d39-6d15-4f5e-86da-38871012f12f |
| 175 | 171 |  |  |  |  |  | The navigation flow is redirecting the user to the Explore properties page. It should redirect the user back to the Dashboard instead. |  |  |  |  |
| 176 | 172 | 28-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | There seems to be data discrepency when we are looking at the control panel and the user end website data. Some of the users at the backend we see 100+ listings but on the user end its just 5-7 listings | Go on control pannel > User management > Get any user with higher number > Check their listing on web | The data on the admin should only show the live data which will be active properties, deleted and deactivated properties currently its showing all the data, we should also be able to see  if that demand/ property is active or deleted or deactivated |  | https://jam.dev/c/32615ea8-292b-4fac-a4f7-7ca50425c26b |
| 177 | 173 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | The notification of control panel is not working proper, its not getting colsed once it open | Control panel>Notification |  |  | https://app.betterbugs.io/session/6abb626d9a0216b8a623ee30?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 178 | 174 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | The othe users are still able to access properties of the Agent who has cancelled subscription or even deleted his account, only after deactivated the property is not accessible to other users | Agent>Profile>Deactivate/delete account/Cancel membership |  |  | https://jam.dev/c/bfbd86c4-fee8-4643-9cc7-ffc7cd64d25e |
| 179 | 175 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | After deleting account User(Agent ) is still able to login | Agent>Profile>Delete account |  |  | https://jam.dev/c/945a3bac-ec34-443b-b1ff-c997c2e49fe9 |
| 180 | 176 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | Relevancy not working for Retail Brand | Retail Brand > Dashboard > Demand Id (RD210) |  |  | https://jam.dev/c/87b6a6e3-e60a-443a-b7fc-b1901152ab89 |
| 181 | 177 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | Alignment of the message that comes  while deleting and reactivating demad is not coming properly. | Retail Brand > Dashboard > Demand Id (RD210) > Deactivate |  |  | https://jam.dev/c/9c828cf8-3336-4b3a-9d97-cd0798232b66 |
| 182 | 178 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | Once Brand is deactivated from control panel, all the demands get deactivated, but after reactivated, it needs to reactivate all the demands manually | Brand/Brandy>Dashboard>My demands |  |  | https://jam.dev/c/9a275d80-178b-423c-85ce-1dda0065acad |
| 183 | 179 | 29-Sep-26 | Control Panel & Web | Functionality/Business Rule | New | Build 3 | If the Agent sent an "Request contact" and the Brand deactivate the demand without approving or rejecting the request, it completely disapperas from the Agent account even from the relevancy, but its showing as request in brands account with 'Accept and Reject' option in the lead section. | Brand/Brandy>Dashboard > Leads>Contact request |  |  | https://jam.dev/c/2f1c4777-f5d0-4a66-b50b-7afd25874370 |
| 184 | 180 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Project filters in search are not as per the PR sheet, please check the section of New platform requirements - filters (E40 - K40) | Search > Explore projects > Filter |  |  | https://jam.dev/c/e94ab9a3-9093-4c84-9d3a-0f62b1696b96 |
| 185 | 181 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | From Properties section in the search section, remove managed space form the asset class | Search > Properties > Asset class > Managed spaces |  |  | https://jam.dev/c/6349d306-61f8-4c27-add7-c9269448f2aa |
| 186 | 182 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Filters on explore section for project asset class managed space is not working properly | Search > Properties > Asset class > Managed spaces |  |  | https://jam.dev/c/6afffa26-3fab-4739-a043-8082b826b296 |
| 187 | 183 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | When we click on search and the suggestions appear, we would want to clarify if the project shown is retail, office, mixed used, Managed Space etc | Search > dropdown suggestions |  |  | https://jam.dev/c/4b44888d-73d8-4e27-8af9-eed12f81d8cf |
| 188 | 184 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | While downloading Documents, its only dowloaded one document, when there are 3 documets uploaded. | User >Explore Properties> Retail Property > Documents |  |  | https://app.betterbugs.io/session/6abcac6c9a0216b8a624073c?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 189 | 185 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | While trying to view the phone number, the system displays “Upgrade your subscription plan”, even though the user already has an active subscription. After clicking “Upgrade Plan” and navigating back to the Explore Properties page, the system starts displaying phone numbers of other users | User >Explore Properties> Retail Property > View Phone Number |  |  | Unable to capture the screen while reproducing the issue. It may be due to a UI or system glitch, but the issue should still be investigated. |
| 190 | 186 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | While exploring, the top and left filter should work together, as its working only one sided | Agent>Explore properties>Filters |  |  | https://app.betterbugs.io/session/6abcaf439a0216b8a62407de?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 191 | 187 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Edit should allowed in Control Panel | Control Panel>Listing Management>Properties/Demand>Edit>Location |  |  | https://app.betterbugs.io/session/6abcb2c49a0216b8a6240845?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 192 | 188 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | When we apply Booster (eg-Sponsored) to a Project, it reflects under 'Premium and Top Developer slot' cards | Control Panel > Listing Management > Projects (Oberoi test) |  |  | https://app.betterbugs.io/session/6abcc9589a0216b8a6240a89?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 193 | 189 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | When we delete Developer from control panel, there project still shows in the system | Control Panel > Listing Management > Projects > Delete (Defeloper-Tester UV) |  |  | https://jam.dev/c/22873c1a-4d02-4178-81e9-ee64a73a23ac |
| 194 | 190 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Download/Share PDF for Projects | Project > Project detailed page > Download PDF | Need to have it, we will need to design the PDF page for the download PDF for project and properties & demand as well |  |  |
| 195 | 191 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Top Developer projects slot not working properly. When we select specific city its showing other cities as well. Plus its not showing every city in the City Header. | User(Agent) > Top developer projects |  |  | https://jam.dev/c/e5d8fdcf-b584-4eb5-8c3d-29c1f5759da5 |
| 196 | 192 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Recent search' section on landing page is not working properly | User(All user) > Recent search |  |  | https://app.betterbugs.io/session/6abcd94c9a0216b8a6240bdd?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 197 | 193 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Whenever a user logs in, the page loads the last selected city instead of the default, Bengaluru. | User(All user) > Login |  |  | https://jam.dev/c/a652ad21-1fb7-4ea4-b229-8602be2e3fda |
| 198 | 194 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | Agent and F&B Brand- While posting F&B demand lease/Buy, it showing 'Google Location (paste a Google Maps link)' below Location field--It needs to be removed | Agent and F&B Brand User > Post demand (F&B) > Location |  |  | https://jam.dev/c/5dd2f1ce-e5a2-40cf-a27a-a8183faa57e8 |
| 199 | 195 | 30-Sep-26 | Web | Functionality/Business Rule | New | Build 3 | The subscription flow should be for Agent only and not for the other users, this subscription flow is showing all the users | Agent subscription>Select plan>New contact>Sign up |  |  | https://app.betterbugs.io/session/6abcf60d9a0216b8a6240eb9?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 200 | 196 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | What does this notification showing on this Agent accont with welcome msg | Agent (Rampaul)>Notification |  |  | https://app.betterbugs.io/session/6abde7769a0216b8a6242442?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 201 | 197 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Google Location Map for properties |  |  |  |  |
| 202 | 198 | 1-Oct-26 | Web | Text Changes | New | Build 3 | Nomenclature for Booster are different in Admin and User Panel | Listing Mnagement > Projects > Booster |  |  | https://jam.dev/c/729f336b-369b-4171-8028-3e903724249e |
| 203 | 199 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Explore properties- Video is not clickable and it should direct you to the video section (Documents & Media) | All User > Explore properties > Click on ID > Video (option on Thumbnail photo) |  |  | https://jam.dev/c/2c0707e4-3081-4bb7-afc3-fb31ab9ca749 |
| 204 | 200 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Documents & Media- Video and Documents image are not visible. Atleast it should show preview of the documents and video. | All User > Explore properties > Click on ID > Documents & Media |  |  | https://jam.dev/c/307ceaa1-6bdf-4a7b-b247-53a370c210d6 |
| 205 | 201 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | When we hover on Saved button- on explore page (Property thumbnail) and once we click on property (property page) | All User > Explore Page > Click ID |  |  | https://jam.dev/c/5bddfb22-3c27-45f4-a15a-d7c0b35573fd |
| 206 | 202 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Filter section on Explore properties page is not updated. Need to check each and every filter section. For eg- Age of property (Deleted field still showing) | All User > Explore Page > Filter panel |  |  | https://jam.dev/c/fda56b67-5265-462b-bf0b-934dd5b5bfd9 |
| 207 | 203 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Keydemand User- Explore demand is not working. Plus check the filter section as well for 'Explore demand and Explore Property' respectively | Keydemand User > Explore Demand |  |  | https://jam.dev/c/b9349d1a-81e7-4607-b726-58a346a6cb42 |
| 208 | 204 | 1-Oct-26 | Web | Text Changes | New | Build 3 | Why there is unknown written on top developer projects. | Homepage > top developer Project > Card |  |  | https://jam.dev/c/fe5e12c1-9c3d-4b46-915a-a38db6df6eb9 |
| 209 | 204 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Keydemand User- For some relevant demands it showing 'Request Contact'. It should be 'View Number' | Keydemand User > Dashboard >Properties tab> Click on Property Relevancy |  |  | https://jam.dev/c/41084b57-f562-41ea-87df-0ce658e5948c |
| 210 | 204 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | The back navigation should take user to the dashboard and not to the explore page | Brand>Dashboard>View relevancy |  |  | https://app.betterbugs.io/session/6abe3be99a0216b8a6242b42?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 211 | 204 | 1-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Post demand limitaion error should come once the user clicks on the post demand button, and not after filled all the details | Brand>Post demand |  |  | https://app.betterbugs.io/session/6abe44689a0216b8a6242c3e?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 212 | 204 | 3-Oct-26 | Web | Functionality/Business Rule | New | Build 3 | Contact request page is not getting oprn | Agent>Dashboard>Lead>Contact request |  |  | https://app.betterbugs.io/session/6ac0e5ab9a0216b8a6244dbd?openedDevTab=info&openedConsoleSubTab=all&openedStepsSubTab=all |
| 213 | 204 |  |  |  |  |  |  |  |  |  |  |
| 214 | 204 |  |  |  |  |  |  |  |  |  |  |

### Business rules extracted

**Subscription & cities**
- **BR-REQ-001** — Agent subscription is priced per asset class per city: Metro ₹1000 (Retail & FnB), ₹1000 (Office), ₹2000 (Both); Non-Metro ₹750 / ₹750 / ₹1500. _(§ Subscription B2:C4)_
- **BR-REQ-002** — ROI (Rest of India) subscription is priced per asset class (not per city): ₹1000 Retail & FnB, ₹1000 Office; no "Both" price given. _(§ Subscription D2:D3)_
- **BR-REQ-003** — Pan India subscription: ₹5000 Retail & FnB, ₹5000 Office; no "Both" price given. _(§ Subscription E2:E3)_
- **BR-REQ-004** — Price period (monthly/yearly) and currency unit are not stated in the sheet. _(§ Subscription)_
- **BR-REQ-005** — Cities are classified Metro (19 cities incl. Mumbai, Delhi, Bengaluru, Chennai, Kolkata, Pune City, Hyderabad…), Non-metro (26 incl. Ahmedabad, Jaipur … Goa cities) or ROI (1,173 rows). _(§ City tab)_
- **BR-REQ-006** — Metro cities are clubbed into combinations: MMR (Mumbai, Thane, Kalyan-Dombivali, Vasai-Virar, Mira-Bhayandar, Bhiwandi, Panvel, Ulhasnagar), NCR (Delhi, Faridabad, Gurgaon, Noida, Ghaziabad), Pune (Pune City, Pimpri-Chinchwad); Non-metro combination "Goa" (Marmagao, Panaji, Margao, Mapusa). _(§ City D4:D22, H26:H29)_
- **BR-REQ-007** — "Consider combination for clubbing of cities when user buys the subscription. But while posting they will be able to see all the cities that are clubbed." _(§ City A31)_
- **BR-REQ-008** — The Admin label is "Non Metro City", not "Tier 2". _(§ Build 1 Bugs #55)_

**Property / project input fields (visible tab "Property & Project Input Fields", dated 17-06-2026)**
- **BR-REQ-009** — Agents can upload: Retail Lease, Retail Sale, F&B Lease, F&B Sale, Office Lease, Office Sale. Keydemand can upload the same six plus Flex Property (Phase 2) and Managed Office (now "as project" on frontend). Managed Space Operator projects and Developer projects are backend (admin) uploads. _(§ P&P row 2–3 headers)_
- **BR-REQ-010** — Agent must not be able to post Managed Space. _(§ Bugs #57; Access Permissions §3)_
- **BR-REQ-011** — Form field order is given by "Add/Upload Form Order"; detail-page order by "View Page Order"; editability after posting by "Can be edited-Yes/No". _(§ P&P row 4)_
- **BR-REQ-012** — Asset Class*, City*, Location*, Transaction Type* are NOT editable after posting (Can be edited = No); all other property fields are editable. _(§ P&P rows 9–12, all agent/KD blocks)_
- **BR-REQ-013** — Images & Videos* is mandatory; multiple images; Image JPEG/JPG/PNG < 2MB each; Video MP4/MOV < 5MB each; categories same as V1 (Front Side, Interior, Exterior). _(§ P&P J6)_
- **BR-REQ-014** — Retail/F&B (and KD office) properties have a "Hide Images" toggle (Yes/No); for Agent Office Lease the V2 note is "Let user ask for Images" (image request flow). _(§ P&P H6, AZ6, CH6)_
- **BR-REQ-015** — Project Name: optional text, alphanumeric. About Property / Project*: mandatory text, alphanumeric. _(§ P&P rows 7–8)_
- **BR-REQ-016** — City*: dropdown + search, single city; Location*: search with autofill, single location. _(§ P&P rows 10–11)_
- **BR-REQ-017** — Transaction Type options Lease, Sale (radio, single select); the block determines the pre-selected value. _(§ P&P row 12)_
- **BR-REQ-018** — Carpet Area (sq. ft.)* is a number with Indian comma grouping & suffix (e.g. 2,500 sft; 25,000 sft; 1,00,000 sft). _(§ P&P row 13)_
- **BR-REQ-019** — Lease: Rate per sq. ft. (Carpet)* is auto-calculated when Quoted Rent* is provided, and Quoted Rent* is auto-calculated when the rate is provided: Rate = Quoted Rent ÷ Carpet Area; Quoted Rent = Carpet Area × Rate (example: Rent 300000, Rate 200, Area 1500). _(§ P&P rows 14–15, 68–70; CA15:CA16)_
- **BR-REQ-020** — Sale: Quoted Price* auto-calculated if Rate per sq. ft. is provided and vice-versa. _(§ P&P AK14:AK15, BG15:BG16)_
- **BR-REQ-021** — Rate per sq. ft. and Quoted Rent should work together, not with carpet area directly (bug). _(§ Bugs #4)_ — note this conflicts in wording with BR-REQ-019's formula, which uses carpet area.
- **BR-REQ-022** — On the lease side, Rate per sft must not accept more than 4 digits (example given: "2 Lakh per Monthly"). _(§ Bugs #120)_
- **BR-REQ-023** — Property Available From* (Retail/F&B/Office): Immediate, Within 3 months, Within 6 months, Within 9 months, After 9 months (dropdown, single). Flex/Managed: Immediate, 3 Months (Within 3 months). _(§ P&P row 16, ED14, FO13)_
- **BR-REQ-024** — Store Type* (Retail/F&B): Highstreet, Mall (radio, single); mandatory. _(§ P&P row 17; Bugs #12, #26)_
- **BR-REQ-025** — Retail Floor*: Basement, Upper Ground, Ground, 1st Floor, 2nd Floor, 3rd Floor, Above 3rd Floor (dropdown, single). Office Floor: 1 to 5, 5 to 10, 10 to 15, Above 15. _(§ P&P rows 19, AS23)_
- **BR-REQ-026** — Clear Ceiling Height (ft.)* and Frontage (ft.)* are numbers only with "ft" suffix (e.g. 12 Ft, 22 Ft); Frontage is mandatory for Retail/F&B lease (optional "Frontage (ft.)" on F&B Sale). _(§ P&P rows 20–21; Bugs #11, #18, #21)_
- **BR-REQ-027** — Retail: Mezzanine Available, Washroom Available*, Fitouts Available, Parking Available are Yes/No radios; Washroom is mandatory, Parking is not mandatory. _(§ P&P rows 22–25; Bugs #15, #19, #22, #23)_
- **BR-REQ-028** — OC Status*: Received, Applied, Not Available, Under Construction (dropdown, single). _(§ P&P row 26)_
- **BR-REQ-029** — Retail/F&B Amenities (multi-select tick box): AC, CCTV Surveillance, Central Air Conditioning, Facilities For Disabled, Fire Exit, Fire Fighting System, Lift, Power backup, Reserved Parking, Security Services, Lift, Signage, Vastu Compliance, Visitor's Parking. _(§ P&P row 27)_
- **BR-REQ-030** — F&B property extra fields: Cooking Type (Electric, Gas) and Non-Veg Allowed (Yes, No) — new in V2. _(§ P&P L–U rows 27–28)_
- **BR-REQ-031** — Commercials (lease): Deposit in Months (number), CAM / Maintenance Charges (number, total amount, e.g. ₹850 per month), Rent Escalation (Every Year / Every 3 Year + percentage, e.g. "Every Year 5%"), Lease Tenure in Years (number), Lock-in Period (number). _(§ P&P rows 29–33)_
- **BR-REQ-032** — Lock-in period cannot be greater than lease tenure years (property); for demand: "Lock-in period cannot be more than lease period, It can be equal or less". _(§ P&P G33; Demand G27; Bugs #5, #13)_
- **BR-REQ-033** — Google Location: map with location search and leaflet; the location should use a leaflet wrapper when a property/project is posted. _(§ P&P row 35; Bugs #115)_
- **BR-REQ-034** — Other Documents: PDF < 2MB (Keydemand block note says "Upload file should be less than 5MB in PDF format" — conflict). Add Video URL: YouTube or Vimeo link, clicking routes to YouTube/Vimeo. _(§ P&P rows 36–37, BU37; Bugs #16)_
- **BR-REQ-035** — Fields deleted from V1 for agent retail property: Builtup Area, Ownership, Brokerage in days, Age of property, Floorplans/Autocad/Fire NOC/Other licenses available, Pin Code, Negotiable. _(§ P&P D41:D50)_
- **BR-REQ-036** — V1→V2 renames (e.g. "Toilet available"→"Washroom Available", "OC available"→"OC Status*", "Number of parking spaces"→"Parking Available", "Floorplans / Autocad / Fire NOC / Other Licenses"→"Other Documents"). _(§ P&P D54:E65)_
- **BR-REQ-037** — Office property (lease/sale) fields: Built up Area (sq. ft.)*, Quoted Rent*/Quoted Price*, Rate per sq. ft. (Carpet)*, Washroom Count*, Fitouts status* (Furnished, Unfurnished, Developer/Landlord to do fitout), Bike Parking* (number), Car Parking* (number), Floor, Amenities (office list), Meeting Room (number), Cabins (number), Deposit, Lease tenure, Rent escalation, CAM. _(§ P&P AS–BM)_
- **BR-REQ-038** — Office amenities list: AC, Cafeteria/Food court, Lift, Security, CCTV Surveillance, Centralized AC, Facilities for Disabled, Fire fighting system, Fire sensors, Pantry, Reception area, Security, Service lift, Vastu Compliance, Power Backup, Fire Exit, Reserved Parking. _(§ P&P AS25)_
- **BR-REQ-039** — Carpet area should not be more than Built up area (office/KD blocks). _(§ P&P cell comments BB13, BM14, DF14, DQ14, EB14)_
- **BR-REQ-040** — Keydemand-uploaded properties have "Who can see your property*" (Office Tenant, Retail Brand, F&B Brand, Enterprise Brand, Enterprise Tenant, Keydemand, Agent) — not visible at user end; "This option should be default no, they can change it if wish to". Single select on Retail Lease KD block, Multi Select on F&B/Office KD blocks. _(§ P&P BO10, CA11, CW10)_
- **BR-REQ-041** — "Who can see your demand" must not appear when an Agent posts a property; it applies to Keydemand users only. _(§ Bugs #126)_
- **BR-REQ-042** — While uploading Keydemand properties, the toggle "not show properties to Agents" defaults ON. _(§ User Dashboard N58)_
- **BR-REQ-043** — Flex Property (Keydemand) is Phase 2: per-format rates (Flexi Desk, Dedicated Desk, Meeting Room, Cabins, Managed Office) — "At least one" rate required; Business Hours (Fixed timings, 24 hours); Bike/Car parking (Payable, Included, Unavailable); Floor Number; Age of property (Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years); Nearest Connectivity (Railway Station, Bus Station, Metro Station); Amenities* (flex list); Brochure PDF < 2MB. _(§ P&P ED–EM)_
- **BR-REQ-044** — Managed Office (Keydemand, "As project now - frontend"): Managed Centres*, About Centre*, Transaction Type* = Lease, Asset Class* (Managed Offices, Managed Space), Number of seats*, Team size*, Lock-in period*, Price per seat*, Workspace Solution (Ready to Move, Curated Built to Suit; multi-select), Business Days and Hours (start–end time + 5/6 days a week tick, e.g. 9:00 am - 19:00 pm), Amenities. _(§ P&P EO–EX)_
- **BR-REQ-045** — Managed Office Space Project (Managed Space Operator) is uploaded from backend and "Can be edit through Admin panel only": Images & Videos*, Managed Centres*, About Centre*, Transaction Type* Lease (pre-selected), City*, Location*, Asset Class* pre-selected "Managed Office Space", Property Available From* (Immediate, 3 Months), Workspace Solution, Total Number of seats*, Meeting Rooms (Yes/No), Minimum Lock-in period*, Price per seat* (per seat/month, e.g. ₹1,850 per seat/month), Business Days and Hours, Existing Tenants, Amenities, Google Location, Brochure, Add Video URL, Assign Keydemand POC (KD team users; multiple users can be selected). _(§ P&P EZ–FJ)_
- **BR-REQ-046** — Managed Space Operator centre form: "Team Size" must not be there; "Existing tenants" field to be deleted; headers must read 'Managed Centres', 'Managed Office Format', 'Additional Details', 'Property Available From'; Description, Lock-in Period, Business Days & Hours, Workspace Solution need field boxes and validation. _(§ Bugs #127, #158–#161)_
- **BR-REQ-047** — If the asset class is managed space, transaction type must be Lease only (dynamic). _(§ Bugs #118)_
- **BR-REQ-048** — Developer Projects (backend upload; "Entire projects can be edit through Admin only"): Images & Videos*, Project Name*, Developer Name*, Location*, Project Type* (IT Parks(IT/ITES), Mixed Use, Office Building, Mall, Highstreet), Unit Size Min*/Max*, Total Project Size in sq.ft* (number in sft with dropdown carpet/built-up), Asset Class* (Retail + F&B / Mixed Use / Office), Efficiency* (%), Project Status* (Ready to Move, Under Construction), Possession Date* (MM/YY), About Project*, Total No of Parkings Available, Transaction Type* (Lease, Sale), Rera Id, Quoted Price / Quoted Rent, OC Status*, Feature & Amenities*, Brochure (PDF < 5MB), Google Location*, Age of Project (Less than 5 years, 5 - 10 years, Above 10 years), Floorplans available (PDF/JPEG/PNG < 5mb, multi-upload), Assign Keydemand POC. _(§ P&P HM–HT)_
- **BR-REQ-049** — Project Asset Class "Mixed Use" (renamed from F&B) gives relevancy from retail, F&B & offices; "Retail + F&B" shows relevancy for both. _(§ P&P HS14)_
- **BR-REQ-050** — Efficiency = usable share, e.g. 1000 sft super built-up with 500 sft carpet → 50%. _(§ P&P HS15)_
- **BR-REQ-051** — Project Quoted Rent (lease) / Quoted Price (sale), e.g. ₹1,00,000/sft or ₹150/sft; if not given show "Request for price" / "Price on enquiry". _(§ P&P HS23; Card Details O10)_
- **BR-REQ-052** — Assign Keydemand POC (dropdown: Kavan Nanaiah, Deepali, Shamli, Sohel, Nilesh, Ajay, Akhil, Raja, Yash, Prakash, Shanker, Ramesh, Dhanbal, Chetna Bhanushali, Sabeer Basha, Navaneeth, Jeevan, Rohith, Prasad Babu, Arun) is visible only at Admin end while uploading, never at user end; multiple KD team members can be assigned. _(§ P&P HS32; Bugs #86)_
- **BR-REQ-053** — If project status is Ready to Move, Possession Date must be greyed out / frozen. _(§ Bugs #108, #130)_
- **BR-REQ-054** — Do not pre-fill/pre-select any values when uploading project, property or demand; remove example placeholders. Age of property must show "Select" until chosen. _(§ Bugs #61, #107, #121, #128, #146)_
- **BR-REQ-055** — Rera ID is shown only for Agent and Developer users. _(§ Bugs #89; User Profile A14)_

**Demand input fields**
- **BR-REQ-056** — Demand forms exist for: Agent (Retail Lease/Buy, F&B Lease/Buy, Office Lease/Buy; Flex Lease marked "Agent (Remove)"); Brand (Retail Lease/Buy, F&B Lease/Buy); Brand Individual quick journey (F&B and Retail Lease/Buy during login); Office Tenant (Office Lease/Buy); Flex Tenant; Managed Space Occupier (quick + detailed journey); Keydemand (Retail Lease/Buy, F&B Lease/Buy, Office Lease/Buy, Flex (Phase 2), Managed Space). _(§ Demand rows 1–2)_
- **BR-REQ-057** — Demand Asset Class*, Transaction type*, City*, Location* are not editable after posting; other fields editable. _(§ Demand A5:A8 etc.)_
- **BR-REQ-058** — "Other interested Location": up to 3 additional locations (search with autofill). _(§ Demand G9)_
- **BR-REQ-059** — Retail demand: Carpet area in sq.ft*, Possession needed* (Immediate … After 9 months), OC required (Yes/No), Additional Demand Details (text), Floor Preference* (Ground, Any), Clear ceiling height (ft), Frontage in feet, Store type* (Highstreet, Mall, Any), Toilet/Fitouts/Parking/Mezzanine required (Yes/No), Amenities required (multi), Lease tenure in years, Lockin period. Buy variant replaces lease terms with Budget (number). _(§ Demand A–I, AG–AO)_
- **BR-REQ-060** — Floor Preference* and Store type* are mandatory on demands. _(§ Bugs #10, #25)_
- **BR-REQ-061** — F&B demand adds Cooking Type (Electric, Gas, Either) and Non-Veg Served (Yes, No); Buy adds Required Documents (Floor Plan, Autocad, Fire NOC, Other Licenses, multi). The 'Either' option is required. _(§ Demand K–AE; Bugs #97)_
- **BR-REQ-062** — Office demand: Age of property (Any, Less than 5 Years, 5 - 10 Years, Above 10 Years — Office Tenant variant: Less than 5 Years, 5 - 10 Years, 10 - 20 Years, Above 20 Years, Any), Toilet Required, Car Parking Required, Bike Parking required, Fitout Status (Unfurnished, Furnished), office Amenities. _(§ Demand AR–AZ, EE–EX)_ — Bugs #96 says Age of property should be removed per PR sheet (conflict).
- **BR-REQ-063** — Deleted demand fields from V1: Pincode, End use, Rent Budget per sq.ft, Add Brand Name, Willing to pay brokerage?, Ownership, Age of property, Required Documents. _(§ Demand D33:D41)_
- **BR-REQ-064** — Brand demand forms show "Select Brand (Formats)" only for Enterprise Brands with multiple brands; "When they are onboarded and then click post a demand, these may come". _(§ Demand BZ5, CC5, BW32)_
- **BR-REQ-065** — "Yes" fields (editable fields) cannot be edited after the demand got a response. _(§ Demand EE33, IQ29; Access Permissions §3)_
- **BR-REQ-066** — Managed Space Occupier demand: Asset Class* Managed Space, Possession needed* (Immediate, Within 3 months), Number of seats* — only accepts more than 20 seats. _(§ Demand FL–FS rows 4, 9, 10)_
- **BR-REQ-067** — Managed Space demands "would not be shown to any users except Keydemand team" and "will be sent to KD team and Admin team as a requirement". _(§ Demand FL12:FL13)_
- **BR-REQ-068** — Keydemand-posted Managed Space demands are viewed only by other Keydemand team (Explore, relevancy); no other suppliers can view them; they are also sent to other KD team and Admin team. _(§ Demand JC13:JC14)_
- **BR-REQ-069** — Keydemand-posted demands have "Who can see your demand*" (Developer, Keydemand, Agent), not visible at user end. _(§ Demand FV7, GH7)_
- **BR-REQ-070** — Flex demand formats: No. of Seats for Flexi Desk / Dedicated Desk / Meeting Room / Cabins / Managed Office, Budget per seat; Phase 2 for Keydemand; Agent Flex Lease marked Remove ("Formats (Adding one format mandatory)"). _(§ Demand IQ–IY, BN–BU)_
- **BR-REQ-071** — Flex Tenant demand has "Show Brand" checkbox (Yes/No). _(§ Demand FC3)_
- **BR-REQ-072** — Office occupier who selected "interested in managed space" at registration must be able to post both Office and Managed Office demands. _(§ Bugs #119)_
- **BR-REQ-073** — End-use reference lists: Office end use (Insurance … Tourism and Hospitality, 29 values); Retail end use (Automative showroom, Banks/ATM, Kiosk, Clinic/Diagnostic center, Clothing store, … Watch); FnB (Fine Dining, QSR & Fast Food, Cafés & Bistros, Pubs Bars & Lounges, Banquets & Event Catering, Cloud Kitchens, Cafe, Restaurant). Enterprise "End use" must be a dropdown from the provided list. _(§ Demand D61:F100; Bugs #168)_
- **BR-REQ-074** — Image section is removed from the demand side. _(§ Bugs #83)_
- **BR-REQ-075** — The legacy Agent F&B demand spec (cols PP–PT) lists extra fields (Revenue/MG Revenue transaction, Pincode 6-digit numbers only with error "only numbers allowed", rent budget range, Fit-out/Rent free period, Operational Requirements e.g. Power Load, Exhaust, Grease Trap & STP, Licensing, Adjacencies, Footfall "Only when selected as Mall", Expansion Model). _(§ Demand PP–PT)_ — not reflected in the current forms; treat as reference only.

**Search filters (New Platform Requirement-Filter)**
- **BR-REQ-076** — Customized search for Properties & Projects and for Demand: CITY, ASSET CLASS & LOCATION ARE MANDATORY. _(§ Filter E2, S1)_
- **BR-REQ-077** — Property filters by asset class: Retail/F&B — Listing Type, Asset Class, Transaction Type (Lease, Sale), Store Type (Highstreet, Mall), Specification (Carpet Area, Rent per month, Ceiling Height, Frontage, Floor, Washroom/Parking Available), Tenancy & Legal (Lease tenure, Lock in period, Property Available from, OC Status), Amenities; F&B uses sliders for lease tenure and lock-in. Office — Built-up, Carpet Area, Rent per month, Floor (1 to 5 … Above 15), Washroom, Bike/Car Parking sliders, Fitouts Status. Managed Offices — Number of seats slider, Bike/Car parking slider, Available from (Immediate / Within 3 months). Projects — Asset class (Retail + F&B, Mixed-used, Office, Managed Offices), Transaction (Lease, Sale), Total Project size slider, Project Status, Project Type, Seats slider. _(§ Filter E15–K44)_
- **BR-REQ-078** — Demand filters (for KD team): Retail/F&B/Office/Managed Spaces; Flex space demand is Phase 2. _(§ Filter S11–Y43, R34)_
- **BR-REQ-079** — Enquire/Support form: Full Name (alphabetic), Company Name, Your Designation, Select City, Official Email id, Phone Number (with OTP verification), Preferred mode of contact. _(§ Filter M3:N9)_
- **BR-REQ-080** — Managed space must be removed from the asset-class options of property search; managed space appears under projects/managed centres. _(§ Bugs #33, #113, #181)_
- **BR-REQ-081** — Top and left filters on Explore must work together; carpet-area range must allow exact ranges (e.g. 500 to 1000). _(§ Bugs #105, #186)_

**User profile**
- **BR-REQ-082** — Profile picture/company/brand picture upload: jpg, png, max 5MB. _(§ User Profile row 2)_
- **BR-REQ-083** — Mobile number is never editable; Asset Class is not editable for any individual role. _(§ User Profile rows 4, 6)_
- **BR-REQ-084** — Individual Agent profile: Name, Mobile, Email, Asset Class (Retail, F&B, Office; multiple; not editable), Transaction Type (Lease, Buy; multiple; editable), City (Mumbai, Pune, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Chandigarh, Ahmedabad, Kochi), Company Name, Designation, Experience, WhatsApp notification On/Off, About, RERA Number. _(§ User Profile A–E)_
- **BR-REQ-085** — Enterprise user profiles: picture and Account Handler Details (pre-filled), Brand/Company name, About, Name, Mobile, Asset Class, Transaction type are not editable by the user; City, Carpet Area (default), Store type, Floor Preference, Possession needed, OC required, WhatsApp, Email, Experience, Designation are editable. _(§ User Profile S–AC)_
- **BR-REQ-086** — "The Enterprise user retains their original login credentials and full autonomy to edit, delete, and manage their requirements and profiles." _(§ User Profile S20)_
- **BR-REQ-087** — Enterprise users have a default carpet area (e.g. 3000 sft) auto-fetched when they post a demand (e.g. MCD needs 3000-4000 sft retail). _(§ User Profile S21)_
- **BR-REQ-088** — WhatsApp status cannot be auto-activated for a user (GDPR, per dev comment) — open with business. _(§ Bugs #45)_

**Cards**
- **BR-REQ-089** — Property cards show (Retail/F&B): Transaction Type, Images, Property id, Carpet Area, City, Location, Total Rent, Possession, Floor, Store type, Posted by, Posted on, CTA "View Phone Number"; Office adds Fit-out; Managed Office: Number of seats, Team size, Lock-in period, Price per seat, Business Hours, Property Available, CTA "Show Interest"; Flex: Flexi Desk/Dedicated Desk/Meeting Room/Cabins. _(§ Card Details A–E)_
- **BR-REQ-090** — Demand cards: Transaction Type, Demand id, Carpet Area required, City, Location, Possession, Posted by, Posted on; Retail/F&B CTA "Request Contact"; Office/Managed/Flex CTA "View Phone Number". _(§ Card Details G–K)_
- **BR-REQ-091** — Demand "Posted by" shows the brand name only if the user allowed showing it AND relevancy matches; otherwise "retail brand" / "F&B brand". _(§ Card Details G16)_
- **BR-REQ-092** — Project card (Developer): Asset Class, Images, Transaction Type, Project Name, Project id, Total Project size, Quoted Price ("Price on enquiry if price not given"), Location, Possession Date, Project Type, Posted By, CTA "Show Interest". Managed-operator project card adds Managed Centres*, About Centre*, Property Available From*, Total Number of seats*, Meeting Rooms, Minimum Lock-in period*, Quoted Price*. _(§ Card Details N–R)_
- **BR-REQ-093** — Card label must be "Posted By"; transaction type and user type must be shown on cards; no duplicate Possession ribbon. _(§ Bugs #38, #39, #104, #150)_
- **BR-REQ-094** — A Contact request already sent shows "Already Request" instead of "Request Contact". _(§ Bugs #153)_

**Dashboards**
- **BR-REQ-095** — Agent home: header (logo, Agent Subscription shown only if not subscribed, Explore Properties, Post property (no managed office), Post demand, Notification, Hamburger → Dashboard, Edit profile, Delete/Deactivate Account, My listings (Demand, Property, Relevant Demands, Relevant Properties), Post Property/Demand, Subscription (My plan, Next renewal date, Cancel/Renew membership, Customize your plan — only if registered and not subscribed), Leads/Enquiries (Phone number viewed, Image request, Phone number requested), Favourites, Alerts & Notifications (WhatsApp), Help (FAQ with Chatbot), Logout). Body: Search, Dashboard (9.1–9.8), Exclusive projects (agents can show interest), Explore properties, Developer projects, Top cluster in <city>, About Keydemand (videos on agent functionality), Book demo, Explore real estate in popular <cities>, Footer. _(§ User Dashboard A–C)_
- **BR-REQ-096** — Explore Properties redirect shows properties of the user's asset class; if user has Retail, F&B and Office, show office first, else retail first; transaction type defaults to lease. _(§ User Dashboard C6)_
- **BR-REQ-097** — Image request on cards: show "Image requested"; if accepted show images only to that user; if pending show pending; if rejected hide images with CTA button for that user. _(§ User Dashboard A61)_
- **BR-REQ-098** — Individual brand/tenant dashboard: Explore Properties, Post demand, Notification, Enterprise Solution, profile menu incl. Leads/Enquiries (Phone number viewed; Phone number received = numbers exchanged when property relevancy received and office tenant's number viewed), Favourites (Properties, Projects), WhatsApp alerts, FAQ with Chatbot. _(§ User Dashboard E–G)_
- **BR-REQ-099** — Enterprise dashboard adds AI (Locality Insights, Competing & Complementing, Other — Phase 2), RM/TM card (photo > contact number > email id > Call now); body sections are asset & city specific. _(§ User Dashboard I–K)_
- **BR-REQ-100** — Keydemand Team dashboard: Explore properties, Explore demand, Post Property/Demand, AI, My listings & Keydemand Listing, Demand/Property Relevancy, Projects Assigned & Leads Received & All Projects, Leads (Phone number viewed, Image request, Phone number requested), My Tenants & All Tenants, Keydemand Demand/Property Listings (filter by KD user name), Keydemand Phone number viewed, Property/Demand Relevancy, Project Interested, Enterprise Solution Interest (city based: routed to that city's team), High Value Leads (renamed 29-06-2026). _(§ User Dashboard M–P)_
- **BR-REQ-101** — Keydemand team view-number CTA has no restriction/limit; KD users see "View Number" (not "Request Contact") on relevant demands. _(§ Bugs #155, #204)_
- **BR-REQ-102** — Admin dashboard outcomes (added 22-09-2026), each with Dashboard "New + Total" and Email "Daily New": Primary — High Value Lead; Enterprise User Enquiries (Developer, Managed Space Operator, Retail Brands, F&B Brands, Office Occupiers, Managed Space Occupier); Project Leads; KD team individual user-wise data. Secondary — Subscription Active/Expired; Total Users (bifurcated by user type); Total demands/properties/projects (user-wise); Leads; Marketing Enquiries (Pending Sign-up); No of deleted properties; User account deletion. _(§ User Dashboard R1:U18)_
- **BR-REQ-103** — Back navigation and post-action navigation go to the Dashboard, not Explore. _(§ Bugs #171, #204)_
- **BR-REQ-104** — Default city: registered users should land on their selected operating city (bug #117), while bug #193 says login should load the default Bengaluru instead of last selected city — conflict. _(§ Bugs #117, #193)_

**Notifications (Notification Final — current)**
- **BR-REQ-105** — Channels: Toast (in-app, instant, no cost), Push, WhatsApp, Email. Actions the user did themselves are receipts and do not count toward the daily cap. "In daily digest" rows send nothing on their own; they become lines in the 6 pm summary. _(§ Notification Final A2)_
- **BR-REQ-106** — Retail, F&B and Office audiences include both Individual and Enterprise users. _(§ Notification Final A3)_
- **BR-REQ-107** — 27 events defined (IDs 1–27) with exact channel matrix, text, button: Welcome; Profile incomplete (24 hrs later, WhatsApp, counts to cap); Property posted/edited (Toast+WhatsApp+Email, Property PDF); Property deactivated/deleted (Toast "Reactivate"); Demand posted/edited/deactivated (Toast only); Contact request received (Retail/F&B Brand; Toast+Push+WhatsApp; "Approve or decline"); Image request received (Agent, KD; "Share images"); Project interest received (Developer, KD; all four channels); Contact/Image request answered; digest lines (#14–18); Daily summary 6 pm (#19; Push+WhatsApp; skipped if nothing to report); Subscription activated (Invoice PDF), Renewal in 3 days, Payment failed, Subscription expired (listings paused), Plan changed/cancelled; Upsell #25–27. _(§ Notification Final rows 5–31)_
- **BR-REQ-108** — Listing/requirement 90 days old (since posted or edited) → digest line asking to confirm availability. _(§ Notification Final #18)_
- **BR-REQ-109** — Retail & F&B brands: after 3 requirements, toast "You have used all 3 requirements on your plan. Enroll for Enterprise Solution to post more." Office/Managed occupier: limit 1 requirement. Unsubscribed agent clicking any action button → "Subscribe to unlock this. Post unlimited properties and reach live demand." _(§ Notification Final #25–27)_
- **BR-REQ-110** — The post-demand limit error must appear when the user clicks Post Demand, not after filling all details. _(§ Bugs #204)_
- **BR-REQ-111** — "Typical per day" estimates are used by the Dashboard to test the daily cap; the daily cap value itself is not stated. _(§ Notification Final row 33)_
- **BR-REQ-112** — (Hidden Notification tab) Contact request not approved/rejected by the brand within 72 hours is nullified: "Your request to view number and connect with the brand has been unanswered by the brand and thus dropped". _(§ Notification row 44)_
- **BR-REQ-113** — (Hidden Notification tab) Phone-number-viewed PDF to brands/office tenants only when they have a demand in relevancy. Admin e-mails: new developer enquiry, new managed space operator enquiry (Full Name, Company, Designation, City, Official Email, Mobile, GST/CIN), new subscribed user, expired user, new project leads, enterprise leads, high value demand, managed office demand, deleted/deactivated property/demand, account deletion, incomplete registration. "Admin has 2 users root user and admin"; "root user has permission to do website down". _(§ Notification rows 41, 179–199)_

**Account, subscription & data (from Build bugs, business decisions)**
- **BR-REQ-114** — Subscription flow is for Agents only, not other users. _(§ Bugs #195)_
- **BR-REQ-115** — Without a subscription, an agent can post only 1 property (bug: able to post 2). _(§ Bugs #140)_
- **BR-REQ-116** — A deactivated account must not be able to post; a deleted account must not be able to log in; properties of an agent who cancelled subscription or deleted account must not be accessible to others. _(§ Bugs #67, #174, #175)_
- **BR-REQ-117** — Deactivating any user requires a confirmation pop-up. _(§ Bugs #49, #72)_
- **BR-REQ-118** — Reactivating a brand should reactivate their demands (currently manual). _(§ Bugs #178)_
- **BR-REQ-119** — Admin data should show live data and indicate active/deleted/deactivated status of each property/demand. _(§ Bugs #172)_
- **BR-REQ-120** — Enterprise conversion: from an enterprise enquiry the admin can jump to User Management and upgrade; RM is assigned during conversion; enterprise brand add-page has Enterprise only (no Individual), "Brand name" instead of "Format name", no "Head Office" header; mandatory: brand name, transaction type, carpet area, floor preference, possession needed. Registered users' enterprise form is pre-filled. _(§ Bugs #122–124, #166–170)_
- **BR-REQ-121** — After switching to Enterprise show a badge (Agent: ₹ symbol; Enterprise Office: 💼). _(§ Bugs #125)_
- **BR-REQ-122** — "Send an Enquiry" opens a request-a-callback form, not Calendly. _(§ Bugs #29)_
- **BR-REQ-123** — Property/Project/Demand PDFs need a new V2 design; download/share PDF from control panel and front end. _(§ Bugs #106, #133, #190)_
- **BR-REQ-124** — A red dot marks newly added Property, Demand or Project in the control panel; new HVL rules appear at top with created/modified dates; HVL "Assigned To"/viewed-by must be shown. _(§ Bugs #50, #51, #53, #81)_
- **BR-REQ-125** — Projects must not appear in relevant properties; relevancy click must open the property directly. _(§ Bugs #65, #82)_
- **BR-REQ-126** — Search suggestions must say whether a project is retail, office, mixed use, managed space. _(§ Bugs #183)_

### Open questions / ambiguities in this doc
- Subscription prices: period (monthly/annual?) and GST not stated; no "Both" price for ROI or Pan India. _(Subscription)_
- "New Delhi" is listed under ROI while "Delhi" is Metro (NCR) — likely an error. _(City K109)_ Duplicate ROI names (e.g. Aurangabad, Udaipur, Pratapgarh) exist for different states.
- Who can see your property* is "Single select" on the Retail Lease KD block but "Multi Select" on the others.
- PDF size: "Less than 2MB" vs "Upload file should be less than 5MB in PDF format" (KD Retail Lease block); project brochure < 5MB.
- Image/video limits: forms say image < 2MB / video < 5MB; the "All Fields" reference block says "upto 5mb images & 15mb videos".
- Rate vs rent calculation: formula uses carpet area (rows 68–70) but bug #4 says rate and quoted rent should work "not with carpet area directly".
- Age of property: present in Office demand forms and Flex forms, but bugs #14/#96/#202 say it was deleted per PR sheet.
- OC Status options differ: "Received, Applied, Not Available, Under Construction" (forms) vs "Received, Applied, Not Applicable" (filters, older lists).
- Default city on login: operating city (bug #117) vs default Bengaluru (bug #193).
- Brand name collision: two users entering the same brand name (e.g. Starbucks) — unresolved (bug #40, owner "Satish/Krishna").
- WhatsApp on/off at brand creation vs GDPR consent (bug #45) — "Can you give us more clarity".
- How cancellation at cycle end and withdrawal of cancellation work (bug #56); how relevant projects count toward demand relevancy (bug #88); how to migrate V1 data / bulk upload (bug #92); roles & permissions for KD team (bug #78).
- Daily notification cap value is not given (Notification Final).
- "Co-working we have not yet started" (bug #129) — scope unclear.
- Bug status counts: 178 New, 27 Resolved, 2 InProgress, 2 Unable To Replicate (as of the last entry, 3-Oct-26).

---
## Keydemand_PRD_v1 08-04-2026 (1).docx  [AUTHORITATIVE — base PRD; Oct 2 sheet overrides]
**Source:** Word .docx · ID `1Zby45ttZtQAzPYelmLgR1f_pb3LTtRAu` · owner pradeepa.pv@futuristglobal.com · created 2026-04-15, modified 2026-06-23 · sections read: cover, 1–10, header ("Keydemand.in — Product Requirements Document", "v1.0 — DRAFT | 8 Apr 2025") and footer ("Confidential — Keydemand Internal | Page X of Y") · no comments, no images · read coverage: 100% (converted from the .docx XML).

Note: the file name says 08-04-2026 but the body says "8 April 2025" / "8 Apr 2025" throughout — almost certainly a year typo; the file was created 2026-04-15.

### Content
KEYDEMAND.IN
Product Requirements Document
Platform Relaunch — All User Types & Journeys

| Version | v1.0 —  |
|---|---|
| Date | 8 April 2025 |
| Prepared by | Keydemand Product Team |
| Status | In Review — Sections marked ⚠ require input |
| Source | User Journeys whiteboard notes — 8 Apr 2025 |
| Scope | Brand (Retail/F&B), Office Tenant, Agent, Enterprise, Keydemand Team |

How to use this document: Sections marked ⚠ TBD require decisions before development begins. Sections marked 💡 contain product suggestions from the author. All TBDs should be resolved and signed off before this document moves to v1.1.

#### 1. Product Overview

Keydemand.in is a commercial real estate listing and demand-matching platform serving three asset classes: F&B, Retail, and Offices. The platform connects tenants (brands and office occupiers) with supply-side participants (agents and developers) with Keydemand operating as both a marketplace enabler and a directly managed transaction layer for enterprise and high-value requirements.
##### 1.1 Platform Model
- Tenants discover properties, submit demands, and connect with suppliers via the platform.
- Agents list properties, respond to inbound demand leads, and manage their inventory.
- Keydemand operates a privileged internal team role with full access plus the ability to manage enterprise accounts, assign leads, and curate managed office supply.
- Enterprise accounts (both tenant and brand sides) are handled with a higher-touch, offline onboarding flow that flows into the platform.
##### 1.2 User Types

| User Type | Sub-type | Asset Class | Source |
|---|---|---|---|
| Brand | Individual | F&B, Retail | Social media CTA / Direct reg. |
| Brand | Enterprise | F&B, Retail | Individual escalation / Website enquiry / KD team |
| Office Tenant | Individual / Managed | Offices | Social media CTA / Direct reg. |
| Office Tenant | Enterprise | Offices | Individual escalation / Website enquiry / KD team |
| Agent | Non-reg / Reg / Subscribed / Expired | All | Social media / WhatsApp / Website / KD team |
| Keydemand Team | Internal | All | Internal — admin dashboard |


#### 2. User Journey — Brand (Individual) · Retail & F&B (3 Requirements Free)

##### 2.1 Discovery & Entry Points
- Social media CTA (LinkedIn / Meta ad) → Registration & demand capture flow
- Direct registration → Keydemand.in registration link
##### 2.2 Registration Flow
Both entry points converge on the same registration link. Steps:
- User details — Name, mobile number (OTP)
- Single demand details — Asset class, transaction type, city, location, Carpet area, Floor
- T&C acceptance (Tick box with T&C to be on a clickable basis)
- Option: 'Enquire for Enterprise Solution' — if selected, lead is transferred to Keydemand team
##### 2.3 Post-Registration: Social Media CTA Path
When sourced via social media CTA:
- Registration & demand data captured (similar like above)
- User lands on: Microsite — Retail & F&B city-specific page showing relevancy & supply summary with option to explore property options
- If Enterprise Solution selected → lead transferred to Keydemand team
- Upon registration: 1 demand added; up to 2 more demands can be added subsequently.
💡 SUGGESTION: Consider adding a 'save my search' prompt immediately after registration so the user gets WhatsApp/email alerts when new matching properties are added — this dramatically increases return visits.
##### 2.4 User Journey (Linear)

| # | Stage | Action / Screen | Notes / TBDs |
|---|---|---|---|
| 1 | Discovery | Social media / direct URL |  |
| 2 | Registration | User details + demand + T&C | 1 demand added on reg. |
| 3 | Relevancy / Explore | Microsite: city supply summary, explore property options | Retail & FnB properties can be explored |
| 4 | CTA to view contact | Contact number to be shared over WhatsApp with user + supplier notified | Number gated behind CTA |
| 5 | Dashboard | Relevancies & contact requests accessed via dashboard | See Section 2.5 |

##### 2.5 Dashboard Screens — Brand Individual
- Dashboard built on / linked from Homepage
- Profile — editable user and brand details
- Explore — property/project pages (Retail & F&B asset class)
- Request for Enterprise Solution
- Submit Demand — add up to 2 more demands post-registration
- My Demands — edit, delete, view listing performance
💡 SUGGESTION: The dashboard should surface a 'demand status tracker' — showing how many relevancies have been found, how many suppliers have viewed the demand, and how many contact requests have been made against each demand. This reduces support queries and keeps users engaged.

#### 3. User Journey — Office Tenant (Individual)-occupier

##### 3.1 Discovery & Entry Points
- Social media CTA (LinkedIn / Meta) → Registration & demand capture
- Direct registration → Keydemand.in registration link
##### 3.2 Registration Flow
- User Type selection — Office Space or Managed Space
- User details — Name, mobile number
- Single demand details (Tenant Space path) or Managed Space details If Tenant requirementTransaction type, Company name, City, Location, Carpet Area, Tick box (Also interested in managed spaces)If Managed SpaceMobile number & OTP, Name, Company name, City, Location & Number of seats
- T&C acceptance
- Option: 'Enquire for Enterprise Solution'
- If Tenant path: prompt — 'Also interested in Managed Office?'
##### 3.3 Post-Registration: Social Media CTA Path
- Registration & demand data captured
- User lands on: Microsite — Office/Managed Space city-specific page with relevancy & supply summary, option to explore properties
- If Enterprise Solution or Managed Space selected → lead transferred to Keydemand team and Keydemand admin
- If size requested is above [XYZ sq ft] in [city] → lead transferred to Keydemand team (customised handling)
- Upon registration: 1 demand added; additional demands can be added via dashboard
- WhatsApp alert to KD regional rep + entry in admin dashboard central log?
💡 SUGGESTION: Consider a size-based routing logic: <2,000 sq ft = self-serve platform only; 2,000–10,000 sq ft = platform + optional KD team touch; >10,000 sq ft = KD team managed (not visible to external agents). This protects high-value relationships.
##### 3.4 User Journey (Linear)

| # | Stage | Action / Screen | Notes / TBDs |
|---|---|---|---|
| 1 | Discovery | Social media / direct URL |  |
| 2 | Registration | User type → user details → demand → T&C | 1 demand added on reg. |
| 3 | Relevancy / Explore | Microsite: office/managed supply summary for city | Blurred property cards with request for photos (Agent) |
| 4 | CTA to view contact | Contact number shared via WhatsApp with tenant + supplier notified | Supplier = agent or KD depending on size |
| 5 | Dashboard | Relevancies & contact requests via dashboard | See Section 3.5 |

##### 3.5 Dashboard Screens — Office Tenant Individual
- Dashboard built on / linked from Homepage
- Profile — editable user details
- Explore — office & managed space property/project pages
- Request for Enterprise Solution
- Submit Demand — add additional demands
- Under Dashboard: My Listings — edit, delete; Listing performance
💡 SUGGESTION: For office tenants, a 'Compare Shortlist' feature (select 2–3 properties and compare side by side on key metrics: sq ft, ₹/sq ft, locality, amenities, availability) would significantly reduce the drop-off between viewing and enquiring.

#### 4. Enterprise Journeys

##### 4.1 Brand Enterprise (Retail / F&B)
Sources
- Individual user who requested Enterprise Solution from within their individual flow
- Website direct enquiry
- Keydemand team (offline-sourced lead)
Onboarding Flow (Offline → Platform)
- Enterprise enquiry received → Admin notified
- Brand onboarding — offline (Keydemand team-led)
- Requirement collection — offline
- Account creation on platform by KD team
- Brand page creation — formats, sizes, list of preferred locations uploaded
- Multi-user account creation (if applicable)
Enterprise Features — Retail / F&B
- Handholding — dedicated KD relationship manager (RM) or transaction manager (TM)
- AI layer — Locality insights, competing/complementing brand analysis, others
- Multi-user access (if applicable)
- All features available to individual user
💡 SUGGESTION: The AI layer for enterprise brands is a strong differentiator. Locality insights could include: footfall proxies (nearby transit, anchor tenants), competing brand density, complementary brand density (for co-location value), average lease rates in the micro-market. This data set, even if initially manual, becomes the product's moat.
##### 4.2 Office Enterprise
Sources
- Individual office tenant who requested Enterprise Solution
- Website enquiry
- Keydemand team
Trigger Conditions
- Tenant self-selects 'Enterprise Solution' during registration or from dashboard
- Tenant's requirement size exceeds defined threshold (XYZ sq ft / city)
Handling
When triggered:
- Keydemand regional representative is notified
- Central log maintained in KD admin dashboard
- Large-size requirements are NOT visible in external supplier/agent relevancies
- Requirement only accessible by KD team (not agents)
Enterprise Features — Office
- RM / TM assigned
- AI layer — Locality report
- Multi-user access (if applicable)
- Handholding — end-to-end support
- All features of individual Office Tenant role
##### 4.3 Managed Office — Special Rules
- If tenant opts for Managed Space: requirement is visible only to Keydemand team — not to external agents or operators directly
- Managed Office supply is added ONLY by KD team — not by agents or operators directly
- Features for managed office accounts are similar to those of an Enterprise user
💡 SUGGESTION: Managed Office as a category could be a significant revenue stream if KD charges a placement fee or commission. Define the commercial model for this category before building the supply-side UI.

#### 5. User Journey — Agent

##### 5.1 Discovery & Entry Points
- Social media / WhatsApp
- Website registration
- Keydemand team (direct onboarding)
##### 5.2 Agent States
Agents exist in one of four states, each with different access levels:

| State | Label | Access Condition | Capabilities |
|---|---|---|---|
| ① | Non-registered | Never registered | Access landing page, open project pages, explore properties (limited) |
| ② | Registered — not subscribed | Registered, no active subscription | 1 free listing + 5 contact requests; access property page; subscribe prompt |
| ③ | Subscribed | Active subscription (city + asset class) | Unlimited listings & contact requests; full dashboard; WhatsApp alerts |
| ④ | Expired subscription | Subscription lapsed | No active actions; account deactivated after 3 months of non-renewal with listings |

💡 SUGGESTION: A grace period notification system (Whats  App + in-app) at 7 days, 3 days, and 1 day before subscription expiry would significantly reduce churn. Also consider an auto-renewal opt-in at sign-up.
##### 5.3 Agent Registration Journey
- Register / Sign up / Subscribe now — via landing page button
- User details — Name, mobile number
- Redirect to homepage (State ②)
- If 'Subscribe now': asset class + select city → payment → redirect to homepage (State ③)
Alternative path — via CTA on any screen:
- Click CTA → Register prompt → User details → Continue journey
##### 5.4 Access & Permissions Matrix

| Feature / Screen | ① Non-reg | ② Reg, not sub | ③ Subscribed | ④ Expired | Notes |
|---|---|---|---|---|---|
| Access landing page | ✓ | ✓ | ✓ | ✓ |  |
| Explore properties | ✓ | ✓ | ✓ | ✓ |  |
| Open property page |  | ✓ | ✓ |  |  |
| Open project page | ✓ | ✓ | ✓ | ✓ |  |
| CTA to contact (view number) |  | ✓ | ✓ |  | 5 requests max for ② |
| Subscribe now | ✓ | ✓ |  | ✓ |  |
| Dashboard |  | ✓ | ✓ | ✓ | Read-only for ④? |
| Profile |  | ✓ | ✓ | ✓ |  |
| Post property / demand |  | ✓ | ✓ |  | 1 listing max for ② |
| WhatsApp alerts |  | ✓ | ✓ | ✓ | Inbound leads + summary |


#### 6. Keydemand Team — Internal User

##### 6.1 Features & Actions
- All actions that a subscribed agent can do
- Can access inventory of other KD team members under 'My Listings'
- Dashboard includes: My Listings, Large office space enquiries, Managed office space enquiries, Projects assigned & their leads, Listing leads (property & demand), Access to all properties & demands (Explore Demand), AI layers
##### 6.2 Keydemand Team Features and Actions
- My Listings — edit, delete, view listing performance per property
- Large office space enquiries — leads above the threshold that KD has shared with agent
- Managed office space enquiries
- Projects assigned & their leads
- Listing leads — property & demand leads
- Access to all properties & demands added by any user (Explore Demand)
- AI layers — Locality insights, Brand suggestions for a property, competing/complementing.
💡 SUGGESTION: The KD team admin dashboard should include a pipeline view (CRM-lite): all enterprise leads → stage (new / in discussion / site visit / negotiation / closed / lost) → assigned rep → last activity date. This does not need to be complex at v1 — even a simple kanban or table view would significantly improve team coordination.

#### 7. Notification & Communication System

##### 7.1 WhatsApp Notifications
WhatsApp is the primary communication channel. The following trigger events have been identified:

| Trigger Event | Recipient | Content | Notes |
|---|---|---|---|
| Tenant views contact number | Supplier / Agent | 'New enquiry on [property name]' | Agent notified about enquiry |
| Supplier shares number with tenant | Tenant | Supplier contact number shared | Number shared over WhatsApp — not shown in UI |
| New matching property added | Tenant | New relevancy alert | TBD: is this automated or manual? |
| Inbound lead on listing | Agent | Lead alert + summary | WhatsApp alert to agent |
| Enterprise enquiry received | KD Admin | New enterprise lead notification | Admin notified immediately |
| Subscription expiry approaching | Agent | Renewal reminder | TBD: 7d / 3d / 1d before? |

💡 SUGGESTION: Set up a WhatsApp Business API template for each trigger event listed above. WABA template approval takes 2–5 days — initiate this in parallel with development to avoid go-live delays.

#### 8. Screens & Pages Inventory

The following screens have been identified from the user journey notes. This list is preliminary and will need detailed wireframes for each screen.

| # | Screen Name | User Type(s) | Priority | Notes / TBDs |
|---|---|---|---|---|
| 1 | Homepage (with inbuilt dashboard) | All | P0 | Dashboard state changes based on login status |
| 2 | Registration flow | Brand, Tenant, Agent | P0 | Multi-step; differs per user type |
| 3 | Profile | All logged in | P0 | Editable user + brand/company details |
| 4 | Microsite — Retail/F&B city page | Brand (post-reg) | P0 | City-specific supply summary + explore properties |
| 5 | Microsite — Office/Managed city page | Office Tenant (post-reg) | P0 | Same structure as #4 but for offices |
| 6 | Property / Project page | All | P0 | TBD: what fields on a property card? |
| 7 | Explore (property listings browse) | All | P0 | Filter by city, asset class, size, price |
| 8 | Submit Demand | Brand, Tenant | P0 | Up to 3 demands per account |
| 9 | Dashboard — Tenant/Brand | Brand, Tenant | P0 | Relevancies, contact requests, demand status |
| 10 | Dashboard — Agent | Agent | P0 | My listings, leads, enquiries, AI layers |
| 11 | Dashboard — KD Team (Admin) | KD Internal | P0 | Enterprise lead log, all listings, team pipeline |
| 12 | Subscription / Payment | Agent | P0 | Select city + asset class + plan → pay |
| 13 | Enterprise enquiry form | Brand, Tenant | P1 | Triggered from individual flow or homepage |
| 14 | Brand page (Enterprise) | Brand Enterprise | P1 | TBD: public or KD-visible only? |
| 15 | AI Locality Insights | Agent, KD Team, Enterprise | P2 | TBD: data sources, format, update frequency |

#### 9. Open Questions — Consolidated TBD List
All items marked ⚠ TBD across this document are consolidated here. Each must be assigned an owner and resolved before the relevant section moves to development.

| # | Open Question | Section | Owner | Decision / Notes |
|---|---|---|---|---|
| 1 | Registration fields — exact field set for user details and demand | §2.2, §3.2 |  |  |
| 2 | OTP / verification required at registration? | §2.2 |  |  |
| 3 | T&C content — specifically re: WhatsApp consent and data sharing with agents | §2.2 |  |  |
| 4 | Microsite content — what does relevancy & supply summary show before full explore? | §2.3 |  |  |
| 5 | Enterprise Solution trigger — self-select or size-based auto-escalation? | §2.3, §3.3 |  |  |
| 6 | Office demand field set (carpet area, team size, lease term, parking, timeline) | §3.2 |  |  |
| 7 | Managed Space field set (seats, per-seat budget, setup type) | §3.2 |  |  |
| 8 | 'Also interested in Managed Office?' — shown to all or based on team size threshold? | §3.2 |  |  |
| 9 | XYZ sq ft threshold per city for auto-escalation to KD enterprise | §3.3, §4.2 |  |  |
| 10 | Brand Page — public to agents or KD-visible only? | §4.1 |  |  |
| 11 | Brand Page fields — formats, sizes, taxonomy definition | §4.1 |  |  |
| 12 | Enterprise lead notification mechanism — WhatsApp / push / email? SLA for first contact? | §4.2 |  |  |
| 13 | Managed Office commercial model — KD placement fee or commission? | §4.3 |  |  |
| 14 | Managed Office property card format — per seat pricing vs ₹/sq ft? | §4.3 |  |  |
| 15 | Agent subscription SKU — per city / per asset class / bundled? Pricing? | §5.2 |  |  |
| 16 | Free tier — permanent freemium or time-limited trial? | §5.2 |  |  |
| 17 | Expired agent account — read-only dashboard until deactivation, or full lock-out? | §5.2 |  |  |
| 18 | Explore Demand — all cities/classes or subscribed city/class only for agents? | §5.5 |  |  |
| 19 | KD Team — single admin account or individual accounts with role flag? | §6.1 |  |  |
| 20 | WhatsApp API provider selection (Twilio / Interakt / Wati / Gupshup) | §7.1 |  |  |
| 21 | Are WhatsApp messages transactional templates only, or also conversational? | §7.1 |  |  |
| 22 | Property card fields — what fields are on each listing card? | §8 |  |  |
| 23 | AI Locality Insights — data sources, update frequency, display format | §8 |  |  |

#### 10. Product Suggestions — Summary
The following suggestions are recommendations from the document author based on the user journey design. Each is marked with its priority and effort estimate.

| # | Suggestion | Section | Priority | Rationale |
|---|---|---|---|---|
| S1 | 'Save my search' / alert subscription after registration | §2.3 | High | Increases return visit rate significantly; reduces drop-off |
| S2 | Demand status tracker on tenant dashboard (relevancies found, supplier views, contact requests) | §2.5 | High | Reduces support queries; increases trust in platform |
| S3 | Size-based routing: <2K sqft = self-serve; 2K–10K = platform + KD touch; >10K = KD managed | §3.3 | High | Protects high-value relationships from agent competition |
| S4 | 'Compare Shortlist' feature for office tenants (2–3 properties side by side) | §3.5 | Medium | Reduces drop-off between browse and enquiry |
| S5 | AI locality insights data set — build manually first, automate later (footfall, competing brands, avg lease rates) | §4.1 | High | Core product moat; differentiates from generic listing platforms |
| S6 | Subscription renewal reminders at 7d / 3d / 1d + auto-renewal opt-in at sign-up | §5.2 | High | Agent churn prevention; revenue retention |
| S7 | KD admin pipeline view — CRM-lite with stages, assigned rep, last activity | §6.1 | Medium | Team coordination for enterprise leads; prevents leads falling through |
| S8 | Initiate WhatsApp Business API template approvals in parallel with dev (2–5 days WABA approval) | §7.1 | Critical / Immediate | Blocking dependency for go-live if not started early |
| S9 | Managed Office commercial model — define before building supply-side UI | §4.3 | Critical / Immediate | Commercial model defines what fields/flows are needed in the product |

Keydemand.in — PRD v1.0 Draft  |  Confidential  |  8 April 2025

### Business rules extracted
- **BR-REQ-127** — Asset classes are F&B, Retail and Offices; Keydemand acts as marketplace enabler plus a managed transaction layer for enterprise and high-value requirements. _(§1)_ ⚠OVERRIDDEN in part: Oct 2 sheet adds Managed Office/Managed Space and Flex (Phase 2) and Projects.
- **BR-REQ-128** — User types: Brand (Individual, Enterprise; F&B, Retail), Office Tenant (Individual/Managed, Enterprise; Offices), Agent (Non-reg / Reg / Subscribed / Expired; All), Keydemand Team (Internal; admin dashboard). _(§1.2)_
- **BR-REQ-129** — Individual Brand registration: Name, mobile number (OTP); single demand (asset class, transaction type, city, location, carpet area, floor); T&C tick box with clickable T&C; option 'Enquire for Enterprise Solution' transfers the lead to the Keydemand team. _(§2.2)_
- **BR-REQ-130** — Individual Brand gets 3 requirements free: 1 demand added at registration plus up to 2 more. _(§2 title, §2.3)_
- **BR-REQ-131** — Social-media-CTA users land on a city-specific Retail & F&B microsite showing relevancy & supply summary. _(§2.3)_
- **BR-REQ-132** — Contact number is gated behind a CTA and shared over WhatsApp with the user; the supplier is notified. _(§2.4 #4)_ ⚠OVERRIDDEN: Oct 2 uses "View Phone Number"/"Request Contact" with owner approval for brand demands.
- **BR-REQ-133** — Brand dashboard: Profile (editable user + brand details), Explore (Retail & F&B), Request Enterprise Solution, Submit Demand (up to 2 more), My Demands (edit, delete, listing performance). _(§2.5)_
- **BR-REQ-134** — Office tenant registration: user type Office Space or Managed Space; tenant path: transaction type, company name, city, location, carpet area, tick box "Also interested in managed spaces"; managed path: mobile & OTP, name, company name, city, location & number of seats; T&C; Enterprise option. _(§3.2)_
- **BR-REQ-135** — If Enterprise Solution or Managed Space is selected, the lead goes to the Keydemand team and Keydemand admin. _(§3.3)_
- **BR-REQ-136** — If requested size is above [XYZ sq ft] in [city], the lead is transferred to the Keydemand team. _(§3.3)_ Threshold per city is TBD (Oct 2 control panel has "HVL threshold (sq.ft)" per city — Bugs #54).
- **BR-REQ-137** — Office tenant: 1 demand at registration; "additional demands can be added via dashboard". _(§3.3)_ ⚠OVERRIDDEN: Oct 2 / Access Permissions cap office & managed occupiers at 1 requirement total (Notification Final #26).
- **BR-REQ-138** — Office tenant microsite shows blurred property cards with request for photos (Agent); supplier is agent or KD depending on size. _(§3.4)_
- **BR-REQ-139** — Enterprise onboarding is offline: enquiry → admin notified → KD-led onboarding → requirement collection → account creation by KD team → brand page (formats, sizes, preferred locations) → multi-user account (if applicable). _(§4.1)_
- **BR-REQ-140** — Enterprise features: dedicated RM or TM, AI layer (locality insights, competing/complementing brands), multi-user access, all individual features. _(§4.1, §4.2)_
- **BR-REQ-141** — Large-size (above threshold) office requirements are NOT visible to external suppliers/agents; only KD team; regional rep notified; central log in KD admin dashboard. _(§4.2)_
- **BR-REQ-142** — Managed Space requirement is visible only to the Keydemand team; Managed Office supply is added ONLY by KD team (not agents or operators directly). _(§4.3)_ ⚠Partly OVERRIDDEN: Oct 2 adds Managed Space Operator projects uploaded from backend by admin.
- **BR-REQ-143** — Agent states: ① Non-registered (landing page, open project pages, limited explore); ② Registered not subscribed (1 free listing + 5 contact requests, property page, subscribe prompt); ③ Subscribed per city + asset class (unlimited listings & contact requests, full dashboard, WhatsApp alerts); ④ Expired (no active actions; account deactivated after 3 months of non-renewal with listings). _(§5.2)_
- **BR-REQ-144** — Agent registration: Register/Sign up/Subscribe now → Name, mobile → homepage (②); if Subscribe now: asset class + city → payment → homepage (③); any CTA can trigger a register prompt and continue the journey. _(§5.3)_
- **BR-REQ-145** — Access matrix: landing page, explore properties, open project page — all states; open property page ①②; contact CTA ①② with "5 requests max for ②"; post property/demand "1 listing max for ②"; dashboard read-only for ④? (TBD). _(§5.4)_ (Matrix columns appear shifted in the source — see open questions.)
- **BR-REQ-146** — Keydemand Team: all subscribed-agent actions; can access inventory of other KD members under My Listings; dashboard: My Listings, large office enquiries, managed office enquiries, projects assigned & leads, listing leads, Explore Demand (all properties & demands), AI layers (locality insights, brand suggestions for a property, competing/complementing). _(§6)_
- **BR-REQ-147** — WhatsApp is the primary channel; triggers: tenant views contact → agent "New enquiry on [property name]"; supplier shares number → tenant (not shown in UI); new matching property → tenant; inbound lead → agent; enterprise enquiry → KD admin immediately; subscription expiry → agent. _(§7.1)_ ⚠OVERRIDDEN by Oct 2 "Notification Final" matrix (toast/push/WhatsApp/email, daily cap, 6 pm digest).
- **BR-REQ-148** — Screens P0: Homepage with inbuilt dashboard, Registration, Profile, Microsites (Retail/F&B, Office/Managed), Property/Project page, Explore, Submit Demand (up to 3 demands per account), Tenant/Brand dashboard, Agent dashboard, KD Team dashboard, Subscription/Payment (city + asset class + plan → pay); P1: Enterprise enquiry form, Brand page (Enterprise); P2: AI Locality Insights. _(§8)_

### Open questions / ambiguities in this doc
All 23 items of §9 "Open Questions — Consolidated TBD List" (owners and decisions blank in source):
1 registration fields; 2 OTP at registration; 3 T&C content re WhatsApp consent and data sharing; 4 microsite content; 5 Enterprise trigger self-select vs size-based; 6 office demand field set; 7 managed space field set; 8 'Also interested in Managed Office?' shown to all or by team size; 9 XYZ sq ft threshold per city; 10 Brand Page public or KD-only; 11 Brand Page fields; 12 enterprise lead notification mechanism & SLA; 13 Managed Office commercial model; 14 managed office card pricing (per seat vs ₹/sq ft); 15 agent subscription SKU & pricing; 16 free tier permanent or trial; 17 expired agent read-only vs lock-out; 18 Explore Demand scope for agents; 19 KD team single admin vs individual accounts; 20 WhatsApp API provider (Twilio / Interakt / Wati / Gupshup); 21 transactional vs conversational WhatsApp; 22 property card fields; 23 AI locality data sources.
Resolved later by Oct 2 / Access Permissions: #2 (OTP yes), #7 (seats, >20), #9 (per-city HVL threshold exists, values not in this group), #13–#15 (pricing table), #18 (Explore Demand only for KD team), #22 (Card Details tab).
Other ambiguities:
- §5.4 matrix appears column-shifted (e.g. "Open property page ✓ ✓" blank for ③/④; "5 requests max for ②" sits under ③; "Read-only for ④?" sits under ④ column of a Dashboard row) — intent unclear.
- §3.3 "WhatsApp alert to KD regional rep + entry in admin dashboard central log?" is phrased as a question.
- §8 "#8 Submit Demand — Up to 3 demands per account" applies to brands; conflicts with office tenants' "additional demands" (§3.3).
- Suggestions S1–S9 are recommendations only (not requirements); S3's size bands (<2K / 2K–10K / >10K sq ft) are not adopted elsewhere.

---
## Access Permissions: V1 PRD and Phase 1 Master Document  [AUTHORITATIVE]
**Source:** Google Doc · ID `1fxNIgdpporQQzqyFONONkBnWdsrcJsWeqleq5NycX-A` · owner pradeepa.pv@futuristglobal.com · created 2026-05-19, modified 2026-05-20 · sections read: intro, §1–§8, "Conflict & Clarification Alerts for Client" · comments: none · read coverage: 100%.

### Content
This is the complete list of who can do what (Access Permissions) based on the V1 Product Requirements Document (PRD) and the Phase 1 Master Document. It organizes the permissions by feature so that everyone knows their specific admin and functional limits.

#### 1. Authentication and Login
| User Role | Permitted Actions/Flow (What can they do?) | Specific Limits & Rules (Quantifiable constraints) |
|---|---|---|
| **Agents** | Log in via Mobile Number + OTP (4 or 6 digits). | Proceeds directly to fill out personal information and select operating states/cities/asset classes after OTP verification. 1 free property/demand listing and 5 contact requests |
| **Retail, Brand, FNB Users** | Log in via Mobile Number + OTP. | Must post exactly 1 mandatory demand (requirement) during the registration flow before accessing the dashboard. |
| **Tenant / Managed Space Occupier** | Log in via Mobile Number + OTP. Select sub-role (Tenant vs. Managed Space Occupier). | Registration automatically completes and posts their first mandatory requirement. |
| **Developers** | Submit a soft registration form (Name, Company, City, Email, GST/CIN). Cannot directly log into the front-end marketplace upon sign-up. | Must wait for manual onboarding by the Keydemand Admin team within 24 hours. Post-onboarding, login is via Mobile + OTP. |
| **Managed Space Operators** | Submit a soft registration/enquiry form (Name, Company, Email, Phone, GST/CIN). | Must wait for manual onboarding by the Keydemand Admin team within 24 hours. |

#### 2. Profile Management
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Agents, Retail, Brand, FNB, Tenant, Occupier Users** | Can view "My Profile" details and edit personal details, company information, and contact preferences. | Access to "My Profile" and editing capabilities is strictly restricted to active, logged-in end-user roles. Unregistered users cannot view or edit profiles. |
| **Developers, Managed Space Operators** | Profiles are managed entirely through the backend Admin panel. | Cannot create a live front-end profile independently; relies on Admin team creation. |

#### 3. Property Management
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Agents** | Can create/add properties, view self-listings, edit, deactivate, and delete properties. Can toggle status between Active/Closed. | **Limits:** Unsubscribed agents receive exactly **1 free property/demand listing** plus **free 5 Contact requests** post that subscription will pop up. **Asset Rule:** Can only upload Office, Retail, and F&B properties. Strictly prohibited from uploading Managed Space properties. **Edit Rule:** "Yes" fields (e.g., amenities) cannot be edited after receiving a response. |
| **Developers** | Cannot post or manage individual properties. | **Rule:** Developers no longer post properties. They are restricted exclusively to viewing Admin-uploaded "Projects". |
| **Managed Space Operators** | Cannot add properties via the front-end. | **Rule:** Managed Space properties are uploaded strictly from the backend by the Keydemand admin team. |
| **Retail, Brand, FNB, Tenant Users** | Can only browse properties. Cannot upload properties. | None (feature locked). |

#### 4. Demand Management
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Retail, Brand, FNB Users** | Can create demands, view self-demands, edit, deactivate, and delete them. | **Limits:** Capped at posting exactly **3 requirements total** for free. On the 4th, they hit a paywall and are pitched an enterprise solution. |
| **Tenant / Managed Space Occupier** | Can create demands, view self-demands, edit, deactivate, and delete them. | **Limits:** Capped at posting exactly **1 requirement total**. Must opt for a customized enterprise package to post more. **Routing Rule:** Office spaces exceeding custom city sq-ft thresholds are flagged as "High-Value" and hidden from external agents, routing exclusively to Keydemand team. |
| **Agents** | Can post demands on behalf of clients. Can edit, delete, and deactivate them. | **Limits:** Posting is subject to their registered/subscribed asset classes and cities. |
| **All Users (Demand Expiry)** | Deactivate fulfilled demands manually. | **Rule:** All demands automatically move to "Inactive" after **60 days** if not renewed to purge stale leads. |

#### 5. Project Management
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Developers** | Access the "Self View" of their projects to view project units and track hidden leads. | **Rule:** Project creation is **exclusively handled through the Admin Portal** by the Super Admin team. Developers have zero creation rights on the front-end. |
| **Agents, Retail, Brand, FNB, Tenant Users** | Can explore project listings and initiate a "Show Interest" inquiry. | **Rule:** Users can only view public details; they cannot see internal backend view counts or leads. |

#### 6. General Access (System-Wide)
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Agents** | Can view property images, explore properties, and request contact info ("View Number"). | **Limits:** Unsubscribed agents are limited to exactly **5 contact requests** before hitting the subscription paywall. **SLA Rule:** Contact requests expire automatically after **72 hours** if the receiver takes no action. |
| **All Front-End Roles** | Can explore properties and receive relevancy matches based on algorithms. | **Demand Blackout Rule:** Front-end users can **no longer explore or search through demands**. Demand exploration is entirely disabled for front-end users and restricted to the internal Keydemand team. **Media Rule:** Property images are completely hidden from unregistered users. |

#### 7. Subscription Management
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **Agents** | Can activate, manage, renew, or cancel subscriptions based on City Tier (Metro/Non-Metro/Rest of India/PAN India) and Asset Class. | **Rule:** Subscription unlocks unlimited listings and unlimited contact requests. **Expiry:** If an agent's subscription lapses and is not renewed within **3 months (90 days)**, their account and all posted listings are permanently deactivated. |
| **Retail, Brand, FNB, Tenant, Developers, Operators** | No active self-serve subscription flows. Upgrades are handled via the offline "Enterprise Solution" path. | Triggered by exceeding free demand limits or requesting high-value square footage. |

#### 8. Search and Filters
| User Role | Permitted Actions/Flow | Specific Limits & Rules |
|---|---|---|
| **All Front-End Roles** | Can search and filter **Properties** and **Projects** using Keyword, City, Asset Class, Budget, and Area. | Only properties and projects can be queried. |
| **All Front-End Roles** | Restricted from searching Demands. Only the KeyDemand team can Explore Demands | **Rule:** "Explore Demands" functionality is disabled for others and is open only for the KeyDemand team. Matches are pushed via backend relevancy only. |

#### Conflict & Clarification Alerts for Client
While synthesizing this document, I identified a few contradictory business rules that require immediate clarification before Epic coding begins:
1. **Property Images Rule Conflict:** The document states that *"Non-registered users cannot view property images"*. However, it also states that developers must have their properties posted as *"Projects"*, and unregistered users can browse these projects. *Clarification needed: Are project images also hidden from unregistered users, or does this media blackout apply exclusively to Agent-listed single properties?*

### Business rules extracted
- **BR-REQ-149** — All front-end logins are Mobile Number + OTP (4 or 6 digits). _(§1)_
- **BR-REQ-150** — After OTP, agents fill personal info and select operating states/cities/asset classes. _(§1)_
- **BR-REQ-151** — Retail/Brand/F&B users must post exactly 1 mandatory demand during registration before accessing the dashboard; Tenant/Managed Space Occupier registration auto-posts their first mandatory requirement. _(§1)_
- **BR-REQ-152** — Developers and Managed Space Operators submit a soft registration/enquiry form (Name, Company, City/Phone, Email, GST/CIN) and cannot log in until manually onboarded by Keydemand Admin within 24 hours; afterwards login is Mobile + OTP. _(§1)_
- **BR-REQ-153** — Developer and Managed Space Operator profiles are created/managed only in the Admin panel. _(§2)_
- **BR-REQ-154** — Only active logged-in end users can view/edit My Profile. _(§2)_
- **BR-REQ-155** — Agents can add, view, edit, deactivate, delete properties and toggle Active/Closed. _(§3)_
- **BR-REQ-156** — Unsubscribed agents: exactly 1 free property/demand listing and 5 free contact requests; then the subscription pop-up appears. _(§3, §6)_
- **BR-REQ-157** — Agents may upload only Office, Retail and F&B properties, never Managed Space. _(§3)_
- **BR-REQ-158** — "Yes" (editable) fields such as amenities cannot be edited after a listing has received a response. _(§3)_
- **BR-REQ-159** — Developers cannot post properties; they only view their Admin-uploaded Projects ("Self View": units and hidden leads). Project creation is exclusively by Super Admin in the Admin Portal. _(§3, §5)_
- **BR-REQ-160** — Brand/Tenant users cannot upload properties. _(§3)_
- **BR-REQ-161** — Retail/Brand/F&B: max 3 requirements total free; the 4th triggers a paywall pitching Enterprise Solution. _(§4)_
- **BR-REQ-162** — Tenant / Managed Space Occupier: max 1 requirement total; more requires an enterprise package. _(§4)_
- **BR-REQ-163** — Office demands above the city sq-ft threshold are flagged "High-Value", hidden from external agents and routed only to the Keydemand team. _(§4)_
- **BR-REQ-164** — Agent demand posting is limited to their registered/subscribed asset classes and cities. _(§4)_
- **BR-REQ-165** — All demands auto-move to "Inactive" after 60 days if not renewed. _(§4)_ — conflicts with Oct 2's 90-day availability prompt (BR-REQ-108).
- **BR-REQ-166** — Non-developer users can view project public details and "Show Interest"; they cannot see backend view counts or leads. _(§5)_
- **BR-REQ-167** — Contact requests expire automatically after 72 hours if the receiver takes no action. _(§6)_
- **BR-REQ-168** — Front-end users cannot explore or search demands; only the Keydemand team can Explore Demands; matches reach users only via backend relevancy. _(§6, §8)_
- **BR-REQ-169** — Property images are completely hidden from unregistered users. _(§6)_
- **BR-REQ-170** — Agent subscription is by City Tier (Metro / Non-Metro / Rest of India / PAN India) and Asset Class, and unlocks unlimited listings and contact requests. _(§7)_
- **BR-REQ-171** — If an agent's subscription is not renewed within 3 months (90 days), the account and all listings are permanently deactivated. _(§7)_
- **BR-REQ-172** — Non-agent roles have no self-serve subscription; upgrades go through the offline Enterprise Solution path. _(§7)_
- **BR-REQ-173** — Front-end search/filter covers Properties and Projects by Keyword, City, Asset Class, Budget, Area. _(§8)_

### Open questions / ambiguities in this doc
- The doc's own alert: are project images hidden from unregistered users, or only agent single-property images?
- OTP length "4 or 6 digits" is not fixed (STORIES US-003 says 4 digits).
- "Permanently deactivated" after 90 days vs PRD v1 "account deactivated after 3 months" vs Notification Final "listings are paused" on expiry — what happens between expiry and 90 days?
- 60-day demand inactivation vs 90-day "still available?" digest (Oct 2).
- Agents can "toggle Active/Closed" — Oct 2 uses deactivate/reactivate wording.

---
## STORIES  [AUTHORITATIVE — only story backlog; overridden where it conflicts with Oct 2 / PRD v1 / Access Permissions]
**Source:** Google Doc · ID `1mu6LvvT48_YYalvQ1eEEyUOkou4vxiJx9ZYm6vgWIoo` · owner pradeepa.pv@futuristglobal.com · created 2026-03-10, modified 2026-04-08 · sections read: links header, EP-001…EP-018 with all stories (US-001…US-059, US-010A, US-015S, US-020S), CROSS CUTTING XC-001…XC-005 · comments: 2 (both open, by Pradeepa PV, 2026-03-18: "Phase 2" on EP-013 heading and on EP-014 heading) · read coverage: 100%.

Note: the doc has no US-044 under EP-014 (it sits under EP-018), and US-052 appears twice (identical text; duplicated in source).

### Content

#### [EPICS LINK](https://docs.google.com/document/d/1AvBwlAm-7olxkqe4AwqYKI5hv__adTE-qtsMG64U3is/edit?tab=t.0)
[Product requirements.md](https://docs.google.com/document/d/1cItzZ2AKsqzt3UnOi9RYMs3eaDO2-UxluhGCVwyLUMc/edit?tab=t.0)

#### EP-001 — Authentication & Access Control
Users can sign up, log in, log out, and verify via OTP. Role-based access gates admin-ui vs end-user-ui. Auth uses existing v1 auth system via service-bridge.

##### US-001 — User Login
- **Type:** User Story
- **Epic:** EP-001
- **Area:** Both (admin-ui + end-user-ui)
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to log in with my Mobile number and OTP so that I can access the platform.

**Acceptance Criteria**
- [ ] Login form with mobile number and OTP fields
- [ ] Successful login stores token securely (httpOnly cookie preferred)
- [ ] Failed login shows clear error message
- [ ] Redirects to role-appropriate dashboard after login (admin → admin-ui; all others → end-user-ui)
- [ ] Mobile experience matches web

**Tasks — SAT (Backend)**
- [ ] TASK-001 — Define OpenAPI spec for `POST /api/v2/auth/login` in `packages/api-specs/auth.yaml`
- [ ] TASK-002 — Create TypeScript types for auth request/response in `packages/types/api/`
- [ ] TASK-004 — Implement login endpoint in `services/core-services/src/routes/auth/`
- [ ] TASK-005 — Create auth adapter in `services/service-bridge/adapters/auth.adapter.js` to proxy login to v1
- [ ] TASK-006 — Implement error mapping for v1 auth failures in service-bridge
- [ ] TASK-011 — Write unit tests for auth endpoint and adapter

**Tasks — KRI (Frontend)**
- [ ] TASK-003 — Review and approve auth contract
- [ ] TASK-007 — Build login page UI in `apps/end-user-ui/`
- [ ] TASK-008 — Build login page UI in `apps/admin-ui/`
- [ ] TASK-009 — Implement auth store (Svelte store) for token + user state
- [ ] TASK-010 — Implement role-based redirect logic after login
- [ ] TASK-012 — Write unit tests for login component and auth store

**Tasks — JOH (QA)**
- [ ] TASK-013 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-002 — User Sign-Up
- **Type:** User Story
- **Epic:** EP-001
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a new user, I want to sign up with my details and select my role so that I can access the platform.

**Acceptance Criteria**
- [ ] Sign-up form with name, email, phone, password, and role selection
- [ ] Role options: Agent, Managed Offices
- [ ] Validation on all fields (email format, phone format)
- [ ] Successful sign-up triggers OTP verification (US-003)
- [ ] Duplicate email/phone handled gracefully
- [ ] Terms and conditions acceptance required

**Tasks — SAT (Backend)**
- [ ] TASK-014 — Define OpenAPI spec for `POST /api/v2/auth/signup`
- [ ] TASK-015 — Create shared validators in `packages/validators/` for signup fields
- [ ] TASK-016 — Implement signup endpoint, delegating to v1 via service-bridge
- [ ] TASK-017 — Create signup adapter in service-bridge
- [ ] TASK-020 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-018 — Build signup page UI with form validation using design system components
- [ ] TASK-019 — Wire signup form to API, handle success/error states
- [ ] TASK-021 — Write unit tests

**Tasks — JOH (QA)**
- [ ] TASK-022 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-003 — OTP Verification
- **Type:** User Story
- **Epic:** EP-001
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user signing up or performing sensitive actions, I want to verify my identity via OTP so that my account is secure.

**Acceptance Criteria**
- [ ] OTP sent to registered phone/email after signup
- [ ] OTP input screen with 4 digit field
- [ ] Resend OTP option with cooldown timer
- [ ] Expiry handling (OTP valid for limited time)
- [ ] Max attempts enforced
- [ ] Clear error messages for wrong/expired OTP

**Tasks — SAT (Backend)**
- [ ] TASK-023 — Define OpenAPI spec for `POST /api/v2/auth/otp/send` and `POST /api/v2/auth/otp/verify`
- [ ] TASK-024 — Implement OTP endpoints, proxied via service-bridge to v1
- [ ] TASK-026 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-025 — Build OTP input UI with timer, resend, and error states

**Tasks — JOH (QA)**
- [ ] TASK-027 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-004 — User Logout
- **Type:** User Story
- **Epic:** EP-001
- **Area:** Both
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a logged-in user, I want to log out so that my session is ended securely.

**Acceptance Criteria**
- [ ] Logout option visible in navigation/profile menu
- [ ] Clears token and session state on frontend
- [ ] Invalidates session on backend via service-bridge to v1
- [ ] Redirects to login page after logout

**Tasks — SAT (Backend)**
- [ ] TASK-028 — Define and implement `POST /api/v2/auth/logout` endpoint
- [ ] TASK-030 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-029 — Implement logout in both admin-ui and end-user-ui (navigation menu, clear auth store)

**Tasks — JOH (QA)**
- [ ] TASK-031 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-005 — Role-Based Access Enforcement
- **Type:** User Story
- **Epic:** EP-001
- **Area:** Both
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the platform, I need to enforce role-based access so that users only see and do what their role permits.

**Acceptance Criteria**
- [ ] Auth middleware validates token and extracts role on every request
- [ ] Admin-only endpoints return 403 for non-admin users
- [ ] Frontend route guards prevent non-admin users from accessing admin-ui routes
- [ ] Token validation caching (5-min TTL) to avoid v1 calls on every request
- [ ] Token refresh flow handles expired tokens gracefully

**Tasks — SAT (Backend)**
- [ ] TASK-032 — Implement `authenticate` middleware in core-services (token extraction, validation via service-bridge, caching)
- [ ] TASK-033 — Implement `authorize` middleware (role checking per route)
- [ ] TASK-034 — Implement token refresh endpoint `POST /api/v2/auth/refresh`
- [ ] TASK-037 — Write integration tests for auth middleware chain

**Tasks — KRI (Frontend)**
- [ ] TASK-035 — Implement frontend route guards in end-user-ui and admin-ui
- [ ] TASK-036 — Implement 401 → refresh → retry flow in API client utility

**Tasks — JOH (QA)**
- [ ] TASK-038 — Write manual test cases for role-based access scenarios

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-002 — User Profile Management
Users can view and edit their profile, company details, contact info, and see subscription status.

##### US-006 — View My Profile
- **Type:** User Story
- **Epic:** EP-002
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a logged-in user, I want to view my profile details so I can see my current information.

**Acceptance Criteria**
- [ ] Profile page shows name, email, phone, role, company details
- [ ] Shows subscription status (active, expired, none)
- [ ] Shows avatar if uploaded
- [ ] Accessible from navigation menu

**Tasks — SAT (Backend)**
- [ ] TASK-041 — Define OpenAPI spec for `GET /api/v2/users/me`
- [ ] TASK-042 — Implement user profile endpoint (reads from v2 user profile collection, enriches with v1 user data via service-bridge if needed)
- [ ] TASK-044 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-043 — Build profile view page using design system components

**Tasks — JOH (QA)**
- [ ] TASK-045 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-007 — Edit My Profile
- **Type:** User Story
- **Epic:** EP-002
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a logged-in user, I want to edit my personal details, company information, and contact preferences.

**Acceptance Criteria**
- [ ] Edit form pre-populated with current data
- [ ] Editable fields: name, phone, company name, company details, contact preferences
- [ ] Email change triggers re-verification (via OTP)
- [ ] Avatar upload supported (S3)
- [ ] Validation on all fields
- [ ] Success/error feedback

**Tasks — SAT (Backend)**
- [ ] TASK-046 — Define OpenAPI spec for `PATCH /api/v2/users/me`
- [ ] TASK-047 — Implement profile update endpoint (writes to v2 user profile collection)
- [ ] TASK-048 — Implement avatar upload via S3 presigned URL
- [ ] TASK-051 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-049 — Build profile edit form with validation
- [ ] TASK-050 — Implement avatar upload UI

**Tasks — JOH (QA)**
- [ ] TASK-052 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions

#### EP-003 — Asset Class Framework
Define and manage the asset classification system (Retail, Office, F&B, Managed Offices) that underpins all listing and search features. Admin configures; end-user consumes.

##### US-008 — Asset Class Data Model & Configuration
- **Type:** User Story
- **Epic:** EP-003
- **Area:** Admin / Backend
- **Frontend Owner:** —
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- **Branch(es):** 

**Description**
As the platform, I need a structured asset class system so that properties and demands can be categorised correctly. Admin can manage asset classes in future; for MVP, these are seeded via database.

**Acceptance Criteria**
- [ ] Asset classes defined: Retail, Office, F&B, Managed Offices
- [ ] Each asset class has a set of relevant fields/specifications (area, frontage, furnishing, etc.)
- [ ] Asset class configuration stored in v2 collection and seeded
- [ ] Extensible — new asset classes can be added without code changes
- [ ] Shared enums available in `packages/types/enums/`

**Tasks — SAT (Backend)**
- [ ] TASK-053 — Define asset class enums and type-specific field schemas in `packages/types/`
- [ ] TASK-054 — Create asset class constants in `packages/constants/`
- [ ] TASK-055 — Create v2 collection for asset class configuration with seed data in `database/`
- [ ] TASK-056 — Define OpenAPI spec for `GET /api/v2/config/asset-classes`
- [ ] TASK-057 — Implement asset class config endpoint in core-services
- [ ] TASK-058 — Write unit tests

**Notes / Decisions**
[Empty — updated during sessions]

##### US-009 — Asset Class Selection in UI
- **Type:** User Story
- **Epic:** EP-003
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** —
- **Priority:** P0

**Status**
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to select an asset class when listing or searching so that results are relevant to my needs.

**Acceptance Criteria**
- [ ] Asset class selector component in design system (reusable across property/demand/search)
- [ ] Shows all active asset classes with icons/labels
- [ ] Selecting an asset class dynamically adjusts available specification fields
- [ ] Works on both web and mobile

**Tasks — KRI (Frontend)**
- [ ] TASK-059 — Build `AssetClassSelector` component in design system
- [ ] TASK-060 — Build dynamic specification fields component that adapts per asset class
- [ ] TASK-061 — Write unit tests for components

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-004 — Subscription & Plan Management (Admin)
Admin creates and manages subscription plans. End-users view and activate plans (see EP-004U). Admin must set up plans before end-users can subscribe.

##### US-010A — Define Subscription Plans (Admin)
- **Type:** User Story
- **Epic:** EP-004
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a Keydemand admin, I want to define subscription plans with features and pricing so that users can subscribe.

**Acceptance Criteria**
- [ ] Admin can create/edit subscription plans (name, price, duration, feature set)
- [ ] Feature-to-plan mapping defines what each plan unlocks (contact unlocking count, listing limit, featured placement, exclusive access)
- [ ] Plans stored in v2 collection
- [ ] Plans exposed via API for end-user consumption
- [ ] At least one plan seeded for MVP

**Tasks — SAT (Backend)**
- [ ] TASK-062 — Define subscription plan and feature-mapping data models in `packages/types/`
- [ ] TASK-063 — Create v2 subscription plans collection with schema, migration, and seed data in `database/`
- [ ] TASK-064 — Define and implement CRUD endpoints for plans in `services/admin-services/`: `GET/POST/PATCH /api/v2/admin/subscription-plans`
- [ ] TASK-065 — Define feature-to-plan mapping in `packages/constants/`
- [ ] TASK-067 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-066 — Build subscription plan management page in admin-ui

**Tasks — JOH (QA)**
- [ ] TASK-068 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-058 — Subscription Management (Admin)
- **Type:** User Story
- **Epic:** EP-004 / EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a Keydemand admin, I want to manage user subscriptions — view status, manually activate/extend/cancel.

**Acceptance Criteria**
- [ ] View all user subscriptions with status, plan, expiry date
- [ ] Filter by status (active, expired, cancelled)
- [ ] Manually activate a subscription for a user
- [ ] Extend subscription expiry
- [ ] Cancel subscription

**Tasks — SAT (Backend)**
- [ ] TASK-319 — Implement admin subscription management endpoints in admin-services
- [ ] TASK-321 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-320 — Build subscription management page in admin-ui (list, filter, actions)

**Tasks — JOH (QA)**
- [ ] TASK-322 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-004U — Subscription (End-User)
End-users can view plans, activate subscriptions, and manage renewal. Requires admin to have set up plans first (EP-004).

##### US-010 — View Subscription Plans
- **Type:** User Story
- **Epic:** EP-004U
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to view available subscription plans so I can choose one that fits my needs.

**Acceptance Criteria**
- [ ] Plans page shows all available plans with features, pricing, and limitations
- [ ] Current plan highlighted if user is subscribed
- [ ] Comparison view between plans
- [ ] CTA to activate or upgrade

**Tasks — SAT (Backend)**
- [ ] TASK-069 — Define and implement `GET /api/v2/subscriptions/plans` (reads admin-created plans)
- [ ] TASK-071 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-070 — Build plans listing page with comparison layout

**Tasks — JOH (QA)**
- [ ] TASK-072 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-011 — Activate Subscription
- **Type:** User Story
- **Epic:** EP-004U
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to activate a subscription so that I can access premium features.

**Acceptance Criteria**
- [ ] Activate button on plan card
- [ ] Payment flow (integration TBD — may be external gateway or manual approval for MVP)
- [ ] Subscription record created with start date, expiry, plan reference
- [ ] Confirmation screen after activation
- [ ] Role-based feature access updated immediately

**Tasks — SAT (Backend)**
- [ ] TASK-073 — Define subscription activation data model and OpenAPI spec
- [ ] TASK-074 — Implement `POST /api/v2/subscriptions/activate`
- [ ] TASK-076 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-075 — Build activation flow UI (plan selection → payment/request → confirmation)

**Tasks — JOH (QA)**
- [ ] TASK-077 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-012 — Subscription Renewal & Expiry
- **Type:** User Story
- **Epic:** EP-004U
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a subscribed user, I want to renew my subscription before it expires and be notified of upcoming expiry.

**Acceptance Criteria**
- [ ] Expiry warning shown in dashboard when subscription nears expiry (7 days)
- [ ] Renew button on profile/subscription page
- [ ] Expired users lose access to gated features but retain basic access
- [ ] Grace period handling (if applicable)

**Tasks — SAT (Backend)**
- [ ] TASK-078 — Implement subscription expiry check logic
- [ ] TASK-079 — Implement `POST /api/v2/subscriptions/renew`
- [ ] TASK-080 — Create `subscription-expiry-checker` Lambda in `functions/`
- [ ] TASK-082 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-081 — Build renewal UI and expiry warning banner

**Tasks — JOH (QA)**
- [ ] TASK-083 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-013 — Feature Access Based on Plan
- **Type:** User Story
- **Epic:** EP-004U
- **Area:** End-User + Backend
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the platform, I need to restrict certain features based on the user's subscription plan.

**Acceptance Criteria**
- [ ] Gated features: contact unlocking, number of listings, featured placement, exclusive access
- [ ] Unsubscribed users see feature previews with upgrade prompts
- [ ] Backend enforces limits (not just frontend hiding)
- [ ] Clear messaging when a feature is restricted

**Tasks — SAT (Backend)**
- [ ] TASK-084 — Implement subscription-aware middleware for gated endpoints (reads feature-to-plan mapping)
- [ ] TASK-087 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-085 — Implement frontend feature gating (show/hide/lock UI elements based on plan)
- [ ] TASK-086 — Build `UpgradePrompt` component in design system

**Tasks — JOH (QA)**
- [ ] TASK-088 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-005 — Property Listing Management
Users can add, edit, view, and delete property listings with full lifecycle management.

##### US-014 — Add a Property
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a seller, developer, or agent, I want to add a property listing so that it is visible to potential buyers/tenants after admin approval.

**Acceptance Criteria**
- [ ] Multi-step form: asset class → location → specifications → pricing → media → review
- [ ] Fields adapt based on selected asset class (retail: frontage; office: furnishing; F&B: specific configs; managed office: seat count, etc.)
- [ ] Image upload (multiple, to S3) with preview and reorder
- [ ] Document upload (floor plans, brochures)
- [ ] Draft save supported (user can return and complete later)
- [ ] Validation on required fields per asset class
- [ ] Property created with moderation status "Pending" — goes live only after admin approval (US-055)
- [ ] Owner sees property in "My Properties" immediately with pending badge

**Tasks — SAT (Backend)**
- [ ] TASK-089 — Define OpenAPI spec for `POST /api/v2/properties`
- [ ] TASK-090 — Create/update property TypeScript types with asset-class-specific specifications
- [ ] TASK-092 — Create v2 property collection schema and migration in `database/`
- [ ] TASK-093 — Implement create property endpoint in core-services (sets moderation status to "pending")
- [ ] TASK-094 — Implement S3 presigned URL generation for image/document uploads
- [ ] TASK-095 — Publish `property.created` event via pubsub
- [ ] TASK-096 — Wire `property-indexer` Lambda to update Atlas Search index (only indexes approved properties)
- [ ] TASK-101 — Write unit tests for endpoint and event publishing

**Tasks — KRI (Frontend)**
- [ ] TASK-091 — Review and approve property contract
- [ ] TASK-097 — Build multi-step property add form using design system components
- [ ] TASK-098 — Build image upload component with preview, reorder, and delete
- [ ] TASK-099 — Build document upload component
- [ ] TASK-100 — Implement draft save and resume flow
- [ ] TASK-102 — Write unit tests for form components

**Tasks — JOH (QA)**
- [ ] TASK-103 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-015 — View Property Listing (Detail Page)
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As any user, I want to view a property's full details so I can evaluate it.

**Acceptance Criteria**
- [ ] Detail page shows all property information: images (gallery/carousel), location, specifications, pricing, owner/agent info (name only; contact gated)
- [ ] Shows property status
- [ ] Enquiry CTA visible (links to EP-011)
- [ ] Contact info visibility controlled by subscription (links to EP-012)
- [ ] Share property link
- [ ] Works for both v1-sourced and v2-sourced properties (unified shape)
- [ ] Mobile-responsive layout
- [ ] Only shows approved properties to non-owners; owners see their own regardless of status

**Tasks — SAT (Backend)**
- [ ] TASK-104 — Define OpenAPI spec for `GET /api/v2/properties/:id`
- [ ] TASK-105 — Implement property detail endpoint (reads from v2 collection; includes v1 data via view if applicable)
- [ ] TASK-108 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-106 — Build property detail page with image gallery, specifications display, pricing, location, and CTA buttons
- [ ] TASK-107 — Build share functionality

**Tasks — JOH (QA)**
- [ ] TASK-109 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-015S — View My Properties (Self View)
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a property owner/agent, I want to see all my listed properties with their status.

**Acceptance Criteria**
- [ ] "My Properties" page showing all properties I've listed
- [ ] Shows moderation status (pending, approved, rejected) and listing status (active, closed)
- [ ] Quick actions: edit, change status, delete
- [ ] Rejected properties show rejection reason

**Tasks — SAT (Backend)**
- [ ] TASK-110 — Implement `GET /api/v2/properties/me` (returns all properties for current user regardless of moderation status)
- [ ] TASK-112 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-111 — Build "My Properties" page with status badges and action buttons

**Tasks — JOH (QA)**
- [ ] TASK-113 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-016 — Edit a Property
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the property owner/agent, I want to edit my property listing to keep it accurate.

**Acceptance Criteria**
- [ ] Edit form pre-populated with current data
- [ ] Only the listing owner can edit (admin edit is separate, US-056)
- [ ] Images can be added, removed, reordered
- [ ] Changes saved; if significant changes, may re-trigger moderation (configurable)
- [ ] Property re-indexed after edit

**Tasks — SAT (Backend)**
- [ ] TASK-114 — Define OpenAPI spec for `PATCH /api/v2/properties/:id`
- [ ] TASK-115 — Implement update endpoint with ownership check
- [ ] TASK-116 — Publish `property.updated` event via pubsub
- [ ] TASK-118 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-117 — Build edit form (reuse add form components, pre-populate)

**Tasks — JOH (QA)**
- [ ] TASK-119 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-017 — Delete a Property
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the property owner/agent, I want to delete my listing when it's no longer needed.

**Acceptance Criteria**
- [ ] Confirmation dialog before deletion
- [ ] Soft delete (status change, not hard delete) for audit purposes
- [ ] Property removed from search results and marketplace
- [ ] Only owner can delete (admin delete via US-056)

**Tasks — SAT (Backend)**
- [ ] TASK-120 — Implement `DELETE /api/v2/properties/:id` (soft delete)
- [ ] TASK-121 — Publish `property.deleted` event, update search index
- [ ] TASK-123 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-122 — Build delete confirmation dialog

**Tasks — JOH (QA)**
- [ ] TASK-124 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-018 — Property Status Management
- **Type:** User Story
- **Epic:** EP-005
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a property owner, I want to manage my property's status (Active/Closed) to reflect its current availability.

**Acceptance Criteria**
- [ ] Toggle status between Active and Closed from "My Properties"
- [ ] Closed properties hidden from marketplace but visible in owner's dashboard
- [ ] Status change publishes event for search index update

**Tasks — SAT (Backend)**
- [ ] TASK-125 — Implement `PATCH /api/v2/properties/:id/status`
- [ ] TASK-127 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-126 — Build status toggle UI in "My Properties" view

**Tasks — JOH (QA)**
- [ ] TASK-128 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-006 — Demand Listing Management
Users can add, edit, view, and delete demand listings with lifecycle management.

##### US-019 — Add a Demand
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a brand/occupier or agent, I want to post a demand so that developers and agents can see what I'm looking for.

**Acceptance Criteria**
- [ ] Form: asset class → location preferences → budget range → area requirements → additional notes
- [ ] Fields adapt per asset class
- [ ] Multiple location preferences supported (cities, localities)
- [ ] Demand created with moderation status "Pending" — goes live after admin approval
- [ ] Draft save supported

**Tasks — SAT (Backend)**
- [ ] TASK-129 — Define OpenAPI spec for `POST /api/v2/demands`
- [ ] TASK-130 — Create/update demand TypeScript types in `packages/types/`
- [ ] TASK-132 — Create v2 demand collection schema and migration
- [ ] TASK-133 — Implement create demand endpoint (sets moderation status to "pending")
- [ ] TASK-134 — Publish `demand.created` event via pubsub
- [ ] TASK-135 — Wire `demand-matcher` Lambda for initial matching (after approval)
- [ ] TASK-137 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-131 — Review and approve demand contract
- [ ] TASK-136 — Build demand add form using design system components
- [ ] TASK-138 — Write unit tests

**Tasks — JOH (QA)**
- [ ] TASK-139 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-020 — View Demand Listing (Detail Page)
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As any user, I want to view a demand's full details to understand requirements.

**Acceptance Criteria**
- [ ] Detail page shows all demand information: asset class, locations, budget, area, requirements
- [ ] Shows demand status (Open, Fulfilled)
- [ ] Enquiry CTA for developers/agents
- [ ] Contact visibility controlled by subscription
- [ ] Only approved demands visible to non-owners

**Tasks — SAT (Backend)**
- [ ] TASK-140 — Define and implement `GET /api/v2/demands/:id`
- [ ] TASK-142 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-141 — Build demand detail page

**Tasks — JOH (QA)**
- [ ] TASK-143 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-020S — View My Demands (Self View)
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a demand owner, I want to see all my demands with their status.

**Acceptance Criteria**
- [ ] "My Demands" page showing all demands I've posted
- [ ] Shows moderation status (pending, approved, rejected) and demand status (open, fulfilled)
- [ ] Quick actions: edit, change status, delete
- [ ] Rejected demands show rejection reason

**Tasks — SAT (Backend)**
- [ ] TASK-144 — Implement `GET /api/v2/demands/me`
- [ ] TASK-146 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-145 — Build "My Demands" page with status badges and actions

**Tasks — JOH (QA)**
- [ ] TASK-147 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-021 — Edit a Demand
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the demand owner, I want to edit my demand to keep it accurate.

**Acceptance Criteria**
- [ ] Edit form pre-populated with current data
- [ ] Only the demand owner can edit
- [ ] Changes saved; may re-trigger moderation if significant

**Tasks — SAT (Backend)**
- [ ] TASK-148 — Implement `PATCH /api/v2/demands/:id` with ownership check
- [ ] TASK-149 — Publish `demand.updated` event
- [ ] TASK-151 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-150 — Build edit form (reuse add form, pre-populate)

**Tasks — JOH (QA)**
- [ ] TASK-152 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-022 — Delete a Demand
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As the demand owner, I want to delete my demand when it's no longer relevant.

**Acceptance Criteria**
- [ ] Confirmation dialog before deletion
- [ ] Soft delete for audit purposes
- [ ] Demand removed from search results and marketplace

**Tasks — SAT (Backend)**
- [ ] TASK-153 — Implement `DELETE /api/v2/demands/:id` (soft delete)
- [ ] TASK-155 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-154 — Build delete confirmation dialog

**Tasks — JOH (QA)**
- [ ] TASK-156 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-023 — Demand Status Management (Open / Fulfilled)
- **Type:** User Story
- **Epic:** EP-006
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a demand owner, I want to mark my demand as fulfilled when I've found what I need.

**Acceptance Criteria**
- [ ] Toggle status between Open and Fulfilled from "My Demands"
- [ ] Fulfilled demands hidden from marketplace but visible in owner's dashboard

**Tasks — SAT (Backend)**
- [ ] TASK-157 — Implement `PATCH /api/v2/demands/:id/status`
- [ ] TASK-159 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-158 — **Build status toggle UI in "My Demands"**

**Tasks — JOH (QA)**
- [ ] TASK-160 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-007 — Project Module
Developers can create project listings that group multiple property units under one project with an overview page.

##### US-024 — Create a Project
- **Type:** User Story
- **Epic:** EP-007
- **Area:** End-User (Developer role)
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a developer, I want to create a project that contains multiple property units so buyers can see the full offering.

**Acceptance Criteria**
- [ ] Project form: name, location, description, highlights, images
- [ ] Link existing properties as units within the project
- [ ] Project overview page with unit listing
- [ ] Project subject to moderation (same flow as properties)

**Tasks — SAT (Backend)**
- [ ] TASK-161 — Define project entity in `packages/types/`
- [ ] TASK-162 — Create v2 project collection schema and migration
- [ ] TASK-163 — Define and implement `POST /api/v2/projects`, `GET /api/v2/projects/:id`, `PATCH /api/v2/projects/:id`
- [ ] TASK-164 — Implement project-to-property linking
- [ ] TASK-166 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-165 — Build project creation form

**Tasks — JOH (QA)**
- [ ] TASK-167 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-025 — View Project Page (Self and User View)
- **Type:** User Story
- **Epic:** EP-007
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As any user, I want to view a project page with location, highlights, and all units.

**Acceptance Criteria**
- [ ] Project detail page with description, highlights, location, images
- [ ] List of property units within the project (cards linking to property detail)
- [ ] Only approved projects visible to non-owners

**Tasks — SAT (Backend)**
- [ ] TASK-168 — Implement project detail endpoint with nested property units (GraphQL candidate for flexible field selection)
- [ ] TASK-170 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-169 — Build project detail page with unit cards, location, highlights section

**Tasks — JOH (QA)**
- [ ] TASK-171 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-008 — Property Discovery & Marketplace
Users can explore, filter, and discover properties post-login.

##### US-026 — Explore Properties Listing Page
- **Type:** User Story
- **Epic:** EP-008
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a logged-in user, I want to browse a paginated listing of approved properties so I can discover available options.

**Acceptance Criteria**
- [ ] Paginated property listing with cards showing summary info (image, location, price, asset class)
- [ ] Only approved, active properties shown
- [ ] Default sort: most recent
- [ ] Infinite scroll or pagination controls
- [ ] Featured properties highlighted at top (if EP-015 is complete)
- [ ] Empty state handled gracefully
- [ ] Loading skeleton during fetch

**Tasks — SAT (Backend)**
- [ ] TASK-172 — Define and implement `GET /api/v2/properties` with pagination, sorting (filters only approved + active)
- [ ] TASK-175 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-173 — Build `PropertyCard` component in design system (image, title, price, location, asset class badge, featured badge)
- [ ] TASK-174 — Build property listing page with pagination/infinite scroll

**Tasks — JOH (QA)**
- [ ] TASK-176 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-027 — Filter Properties
- **Type:** User Story
- **Epic:** EP-008
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to filter properties by location, asset class, budget, area, and other criteria.

**Acceptance Criteria**
- [ ] Filter panel with: city, locality, asset class, budget range, area range, property type, availability, furnishing (office), frontage (retail)
- [ ] Filters applied via query params (bookmarkable URLs)
- [ ] Filter counts shown (number of results)
- [ ] Clear all filters option
- [ ] Filters persist across navigation within the session

**Tasks — SAT (Backend)**
- [ ] TASK-177 — Implement filter query params on `GET /api/v2/properties`
- [ ] TASK-180 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-178 — Build `FilterPanel` component in design system (reusable for properties and demands)
- [ ] TASK-179 — Wire filters to API and URL query params

**Tasks — JOH (QA)**
- [ ] TASK-181 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-028 — Compare Properties
- **Type:** User Story
- **Epic:** EP-008
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to compare 2–5 properties side by side.

**Acceptance Criteria**
- [ ] "Add to compare" button on property cards
- [ ] Compare tray showing selected properties (max 5)
- [ ] Comparison page with side-by-side specifications, pricing, location
- [ ] Differences highlighted

**Tasks — SAT (Backend)**
- [ ] TASK-182 — Implement GraphQL query for multi-property comparison
- [ ] TASK-185 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-183 — Build "Add to Compare" interaction and compare tray component
- [ ] TASK-184 — Build comparison page with side-by-side layout

**Tasks — JOH (QA)**
- [ ] TASK-186 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-009 — Demand Discovery & Marketplace
Users can explore and filter demands.

##### US-029 — Explore Demands Listing Page
- **Type:** User Story
- **Epic:** EP-009
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a developer or agent, I want to browse approved demands to find potential clients.

**Acceptance Criteria**
- [ ] Paginated demand listing with cards (location, budget, asset class, area)
- [ ] Only approved, open demands shown
- [ ] Featured demands highlighted
- [ ] Default sort: most recent

**Tasks — SAT (Backend)**
- [ ] TASK-187 — Define and implement `GET /api/v2/demands` with pagination, sorting (approved + open only)
- [ ] TASK-190 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-188 — Build `DemandCard` component in design system
- [ ] TASK-189 — Build demand listing page

**Tasks — JOH (QA)**
- [ ] TASK-191 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-030 — Filter Demands
- **Type:** User Story
- **Epic:** EP-009
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to filter demands by location, asset class, budget, and area.

**Acceptance Criteria**
- [ ] Filter panel reused from EP-008 (FilterPanel component)
- [ ] Filters applied via query params
- [ ] Filter counts shown

**Tasks — SAT (Backend)**
- [ ] TASK-192 — Implement filter query params on `GET /api/v2/demands`
- [ ] TASK-194 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-193 — Wire FilterPanel to demand listing (reuse component from EP-008)

**Tasks — JOH (QA)**
- [ ] TASK-195 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-010 — Search & Filters
Powerful keyword and structured search across properties, demands, and projects using Atlas Search.

##### US-031 — Keyword Search
- **Type:** User Story
- **Epic:** EP-010
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to search by keywords to find properties, demands, or projects quickly.

**Acceptance Criteria**
- [ ] Search bar prominent in navigation
- [ ] Searches across property names, descriptions, locations, project names
- [ ] Results grouped by type (properties, demands, projects)
- [ ] Relevance-ranked via Atlas Search (Phase 1 = Atlas default; Phase 2 = ML re-ranking)
- [ ] Empty results handled with suggestions
- [ ] Only approved listings in results

**Tasks — SAT (Backend)**
- [ ] TASK-196 — Define OpenAPI spec for `GET /api/v2/search`
- [ ] TASK-197 — Configure Atlas Search indexes on v2 property and demand collections
- [ ] TASK-198 — Implement search endpoint with Atlas Search query
- [ ] TASK-199 — Implement fallback ranking (Atlas default for Phase 1)
- [ ] TASK-202 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-200 — Build search bar component in design system
- [ ] TASK-201 — Build search results page with grouped results

**Tasks — JOH (QA)**
- [ ] TASK-203 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-032 — City-Based Search
- **Type:** User Story
- **Epic:** EP-010
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to filter search results by city.

**Acceptance Criteria**
- [ ] City selector dropdown with type-ahead search
- [ ] City filter applied to search endpoint
- [ ] Works in combination with keyword search

**Tasks — SAT (Backend)**
- [ ] TASK-204 — Add city filter to search endpoint
- [ ] TASK-206 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-205 — Build city selector component (dropdown with type-ahead search)

**Notes / Decisions**
[Empty — updated during sessions]

##### US-033 — Asset-Class-Based Search
- **Type:** User Story
- **Epic:** EP-010
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to filter search results by asset class.

**Acceptance Criteria**
- [ ] Asset class selector integrated into search flow
- [ ] Works in combination with keyword and city search

**Tasks — SAT (Backend)**
- [ ] TASK-207 — Add asset class filter to search endpoint
- [ ] TASK-209 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-208 — Integrate asset class selector into search flow

**Notes / Decisions**
[Empty — updated during sessions]

##### US-034 — Project-Based Search
- **Type:** User Story
- **Epic:** EP-010
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to search for projects by name.

**Acceptance Criteria**
- [ ] Project names included in search index
- [ ] Project results appear in search results page
- [ ] Depends on EP-007 (Project Module)

**Tasks — SAT (Backend)**
- [ ] TASK-210 — Add project name to Atlas Search index and search endpoint
- [ ] TASK-212 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-211 — Display project results in search results page

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-011 — Enquiry System
Users can raise enquiries on properties or demands, with notifications to the Keydemand team.

##### US-035 — Enquire on a Property (Brand/Buyer)
- **Type:** User Story
- **Epic:** EP-011
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a brand or buyer, I want to enquire about a property so that Keydemand can facilitate follow-up.

**Acceptance Criteria**
- [ ] Enquiry button on property detail page
- [ ] Enquiry form: message (optional), contact preference (phone/email/WhatsApp)
- [ ] Enquiry saved with reference to property and user
- [ ] Notification sent to assigned RM and admin team
- [ ] Confirmation shown to user
- [ ] Enquiry visible in user's "My Enquiries"

**Tasks — SAT (Backend)**
- [ ] TASK-213 — Define OpenAPI spec for `POST /api/v2/enquiries`
- [ ] TASK-214 — Create v2 enquiry collection schema and migration
- [ ] TASK-215 — Implement create enquiry endpoint
- [ ] TASK-216 — Publish `enquiry.raised` event via pubsub
- [ ] TASK-217 — Wire `enquiry-notifier` Lambda for RM and admin notifications
- [ ] TASK-220 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-218 — Build enquiry form modal on property detail page
- [ ] TASK-219 — Build enquiry confirmation UI

**Tasks — JOH (QA)**
- [ ] TASK-221 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-036 — Enquire on a Demand (Developer/Agent)
- **Type:** User Story
- **Epic:** EP-011
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a developer or agent, I want to enquire about a demand so I can connect with the buyer/occupier.

**Acceptance Criteria**
- [ ] Enquiry button on demand detail page
- [ ] Reuses enquiry form modal from US-035
- [ ] Enquiry saved with reference to demand and user

**Tasks — SAT (Backend)**
- [ ] TASK-222 — Extend enquiry endpoint to support demand-type enquiries
- [ ] TASK-224 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-223 — Build enquiry form on demand detail page (reuse enquiry modal)

**Tasks — JOH (QA)**
- [ ] TASK-225 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-037 — View My Enquiries
- **Type:** User Story
- **Epic:** EP-011
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to view all enquiries I've sent and received.

**Acceptance Criteria**
- [ ] "My Enquiries" page with two tabs: Sent and Received
- [ ] Shows enquiry details, status, property/demand reference
- [ ] Pagination on both tabs

**Tasks — SAT (Backend)**
- [ ] TASK-226 — Implement `GET /api/v2/enquiries/me` (raised enquiries) and `GET /api/v2/enquiries/received` (enquiries on my listings)
- [ ] TASK-228 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-227 — Build "My Enquiries" list pages (sent and received tabs)

**Tasks — JOH (QA)**
- [ ] TASK-229 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-012 — Contact Unlocking
Mobile number visibility is controlled by subscription and permissions.

##### US-038 — View Mobile Number (Property)
- **Type:** User Story
- **Epic:** EP-012
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a subscribed user, I want to see the property owner's contact number so I can reach them directly.

**Acceptance Criteria**
- [ ] Contact number hidden by default on property detail page
- [ ] "View Contact" button triggers subscription/permission check
- [ ] If authorized: number revealed
- [ ] If unauthorized: upgrade prompt shown
- [ ] Unlock action logged for analytics (Connects tracking)
- [ ] Unlock count limited by subscription plan

**Tasks — SAT (Backend)**
- [ ] TASK-230 — Implement `POST /api/v2/properties/:id/unlock-contact` with subscription check and limit enforcement
- [ ] TASK-231 — Log unlock event for analytics (Connects tracking)
- [ ] TASK-233 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-232 — Build contact unlock UI with reveal and upgrade prompt fallback

**Tasks — JOH (QA)**
- [ ] TASK-234 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-039 — View Mobile Number (Demand)
- **Type:** User Story
- **Epic:** EP-012
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a subscribed user, I want to see the demand poster's contact number.

**Acceptance Criteria**
- [ ] Same flow as US-038 but on demand detail page
- [ ] Subscription check and limit enforcement

**Tasks — SAT (Backend)**
- [ ] TASK-235 — Implement `POST /api/v2/demands/:id/unlock-contact` with subscription check
- [ ] TASK-237 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-236 — Build contact unlock UI on demand detail page

**Tasks — JOH (QA)**
- [ ] TASK-238 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-013 — Relevancy Matching Engine _[Doc comment by Pradeepa PV, 2026-03-18, OPEN: "Phase 2"]_
Properties shown relevant to demands and vice versa. Phase 1 = rule-based; Phase 2 = AI/ML scoring.

##### US-040 — Rule-Based Property-to-Demand Matching
- **Type:** User Story
- **Epic:** EP-013
- **Area:** End-User + Backend
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- SIT: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-247 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-014 — Role-Specific Dashboards (End-User) _[Doc comment by Pradeepa PV, 2026-03-18, OPEN: "Phase 2"]_
Each end-user role has a personalised dashboard showing their key metrics and activity.

##### US-041 — Brand/Occupier Dashboard
- **Type:** User Story
- **Epic:** EP-014
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-251 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-042 — Developer Dashboard
- **Type:** User Story
- **Epic:** EP-014
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a developer, I want a dashboard showing my properties, projects, enquiries, connects, and performance.

**Acceptance Criteria**
- [ ] Sections: My Properties, My Projects, Enquiries Received, Connects Received, Connects Viewed, Property Performance (views/clicks)

**Tasks — SAT (Backend)**
- [ ] TASK-252 — Implement developer dashboard aggregation endpoint
- [ ] TASK-254 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-253 — Build developer dashboard layout

**Tasks — JOH (QA)**
- [ ] TASK-330 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-043 — Agent Dashboard
- **Type:** User Story
- **Epic:** EP-014
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As an agent, I want a dashboard showing my listings, demands, leads, and enquiries.

**Acceptance Criteria**
- [ ] Sections: My Listings (properties), My Demands, Leads Generated, Enquiries Sent/Received

**Tasks — SAT (Backend)**
- [ ] TASK-331 — Implement agent dashboard aggregation endpoint
- [ ] TASK-333 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-332 — Build agent dashboard layout

**Tasks — JOH (QA)**
- [ ] TASK-259 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-015 — Discovery Boosters (Featured & Exclusives)
Featured and exclusive listings get boosted visibility. Admin marks them (EP-018/US-057); end-user sees the result.

##### US-045 — Featured Properties & Demands
- **Type:** User Story
- **Epic:** EP-015
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-265 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-046 — Exclusive Properties & Demands
- **Type:** User Story
- **Epic:** EP-015
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-270 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-016 — Notifications & Engagement
Users receive timely notifications about enquiries, matches, and platform activity.

##### US-047 — In-App Notifications
- **Type:** User Story
- **Epic:** EP-016
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-279 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-048 — WhatsApp Notifications
- **Type:** User Story
- **Epic:** EP-016
- **Area:** Backend
- **Frontend Owner:** —
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- **Branch(es):** 

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

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-017 — Usability & Utilities
Core usability features that improve day-to-day user experience.

##### US-049 — Save / Bookmark Property
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-288 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-050 — Save / Bookmark Demand
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want to save demands for later viewing.

**Acceptance Criteria**
- [ ] Same as US-049 but for demands

**Tasks — SAT (Backend)**
- [ ] TASK-289 — Extend bookmarks for demands
- [ ] TASK-291 — Write unit tests

**Tasks — KRI (Frontend)**
- [ ] TASK-290 — Build bookmark toggle on demand cards and "Saved Demands" page

**Notes / Decisions**
[Empty — updated during sessions]

##### US-051 — Recently Viewed
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Notes / Decisions**
[Empty — updated during sessions]

##### US-052 — Report Incorrect Listing
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-298 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-052 — Report Incorrect Listing
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-298 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-053 — Help / Support Page
- **Type:** User Story
- **Epic:** EP-017
- **Area:** End-User
- **Frontend Owner:** KRI
- **Backend Owner:** —
- **Priority:** P2

**Status**
- KRI: Not Started
- **Branch(es):** 

**Description**
As a user, I want a help page with FAQs and contact information.

**Acceptance Criteria**
- [ ] Static page with FAQ sections and contact details
- [ ] Accessible from navigation

**Tasks — KRI (Frontend)**
- [ ] TASK-299 — Build static help/support page with FAQ and contact information

**Tasks — JOH (QA)**
- [ ] TASK-334 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### EP-018 — Keydemand Admin Console
Keydemand team can manage users, moderate listings, manage featured/exclusive flags, and oversee platform operations.

##### US-044 — Keydemand Team Dashboard
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-258 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-054 — User Management (Admin)
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-303 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-055 — Listing Moderation (Approve / Reject)
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-310 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-056 — Edit Any Listing (Admin)
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-314 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-057 — Feature / Unfeature Listings (Admin)
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-318 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

##### US-059 — Analytics Overview (Admin)
- **Type:** User Story
- **Epic:** EP-018
- **Area:** Admin
- **Frontend Owner:** KRI
- **Backend Owner:** SAT
- **Priority:** P1

**Status**
- SAT: Not Started
- KRI: Not Started
- **Branch(es):** 

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

**Tasks — JOH (QA)**
- [ ] TASK-326 — Write manual test cases

**Notes / Decisions**
[Empty — updated during sessions]

#### CROSS CUTTING   

##### XC-001 — Auth Middleware Shared Plugin
- **Type:** Cross-Cutting
- **Epic:** EP-001
- **Area:** Backend
- **Frontend Owner:** —
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- **Branch(es):** 

**Description**
Extract the auth middleware (authenticate + authorize) into a shared Fastify plugin so both core-services and admin-services use the same auth logic.

**Acceptance Criteria**
- [ ] Shared auth plugin created and importable by both core-services and admin-services
- [ ] Authenticate and authorize middleware consolidated into the shared plugin
- [ ] Unit tests cover shared plugin behaviour

**Tasks — SAT (Backend)**
- [ ] TASK-039 — Create shared auth plugin, importable by both services
- [ ] TASK-040 — Write unit tests for the shared plugin

**Notes / Decisions**
[Empty — updated during sessions]

##### XC-002 — Standard Error Handling Across Frontend
- **Type:** Cross-Cutting
- **Epic:** —
- **Area:** End-User + Admin
- **Frontend Owner:** KRI
- **Backend Owner:** —
- **Priority:** P0

**Status**
- KRI: Not Started
- **Branch(es):** 

**Description**
Standardise error handling, loading states, and empty states across all frontend apps using shared design system components.

**Acceptance Criteria**
- [ ] `ErrorBanner`, `LoadingSkeleton`, and `EmptyState` components built in design system
- [ ] Global error handler implemented in API client utility
- [ ] Unit tests written for all components

**Tasks — KRI (Frontend)**
- [ ] TASK-335 — Build `ErrorBanner`, `LoadingSkeleton`, and `EmptyState` components in design system
- [ ] TASK-336 — Implement global error handler in API client utility
- [ ] TASK-337 — Write unit tests

**Notes / Decisions**
[Empty — updated during sessions]

##### XC-003 — Standardise Global Theme and Colour Tokens
- **Type:** Cross-Cutting
- **Epic:** —
- **Area:** Both
- **Frontend Owner:** KRI
- **Backend Owner:** —
- **Priority:** P0

**Status**
- KRI: Not Started
- **Branch(es):** 

**Description**
Finalise and standardise colour tokens, spacing, and typography across all frontend apps via the design system.

**Acceptance Criteria**
- [ ] Final token set defined in `apps/design-system/src/tokens/`
- [ ] All apps render correctly with final tokens
- [ ] Unit tests verify token application

**Tasks — KRI (Frontend)**
- [ ] TASK-338 — Finalise token set in `apps/design-system/src/tokens/`
- [ ] TASK-339 — Verify all apps render correctly with final tokens
- [ ] TASK-340 — Write unit tests

**Notes / Decisions**
[Empty — updated during sessions]

##### XC-004 — Structured Logging Across All Services
- **Type:** Cross-Cutting
- **Epic:** —
- **Area:** Backend
- **Frontend Owner:** —
- **Backend Owner:** SAT
- **Priority:** P0

**Status**
- SAT: Not Started
- **Branch(es):** 

**Description**
Create a shared structured logger and integrate it across all backend services and Lambda functions.

**Acceptance Criteria**
- [ ] Shared logger utility created in `packages/utils/`
- [ ] Logger integrated into all services (core-services, admin-services, service-bridge) and Lambda functions
- [ ] Unit tests written for the shared logger

**Tasks — SAT (Backend)**
- [ ] TASK-341 — Create shared logger utility in `packages/utils/`
- [ ] TASK-342 — Integrate shared logger into all services and functions
- [ ] TASK-343 — Write unit tests

**Notes / Decisions**
[Empty — updated during sessions]

##### XC-005 — Responsive Layout Framework
- **Type:** Cross-Cutting
- **Epic:** —
- **Area:** Both
- **Frontend Owner:** KRI
- **Backend Owner:** —
- **Priority:** P0

**Status**
- KRI: Not Started
- **Branch(es):** 

**Description**
Define responsive breakpoints and build layout components that ensure all pages work across screen sizes.

**Acceptance Criteria**
- [ ] Responsive breakpoints defined in design system tokens
- [ ] Layout components (Grid, Stack, Container) built in design system
- [ ] All pages verified across breakpoints

**Tasks — KRI (Frontend)**
- [ ] TASK-327 — Define responsive breakpoints in design system tokens
- [ ] TASK-328 — Build responsive layout components (Grid, Stack, Container) in design system
- [ ] TASK-329 — Verify all pages across breakpoints

**Notes / Decisions**
[Empty — updated during sessions]
### Business rules extracted
- **BR-REQ-174** — Login is mobile number + OTP; token stored securely (httpOnly cookie preferred); failed login shows clear error; redirect admin → admin-ui, all others → end-user-ui; mobile matches web. _(§ US-001)_
- **BR-REQ-175** — Sign-up: name, email, phone, password, role (options listed: Agent, Managed Offices); validated email & phone; duplicate email/phone handled gracefully; T&C required; triggers OTP. _(§ US-002)_ ⚠OVERRIDDEN: Oct 2/Access Permissions — no password; role set includes Brand/Tenant/Occupier; Managed Space Operators use an enquiry form.
- **BR-REQ-176** — OTP: 4-digit field, resend with cooldown timer, limited validity, max attempts, clear wrong/expired errors. _(§ US-003)_
- **BR-REQ-177** — Logout clears frontend token/state, invalidates backend session via service-bridge to v1, redirects to login. _(§ US-004)_
- **BR-REQ-178** — Every request authenticated; admin-only endpoints return 403 to non-admins; frontend route guards; token validation cached 5 minutes; 401 → refresh → retry. _(§ US-005)_
- **BR-REQ-179** — Profile shows name, email, phone, role, company details, subscription status (active, expired, none), avatar; editable: name, phone, company name, company details, contact preferences; email change requires OTP re-verification; avatar on S3. _(§ US-006, US-007)_ ⚠OVERRIDDEN: Oct 2 User Profile — mobile number not editable.
- **BR-REQ-180** — Asset classes seeded: Retail, Office, F&B, Managed Offices; extensible without code changes; asset-class selector adapts specification fields. _(§ US-008, US-009)_
- **BR-REQ-181** — Admin defines plans (name, price, duration, feature set: contact unlock count, listing limit, featured placement, exclusive access); at least one plan seeded; end-user sees plans with comparison and current plan highlighted. _(§ US-010A, US-010)_
- **BR-REQ-182** — Subscription activation creates a record with start date, expiry, plan reference; payment integration TBD (external gateway or manual approval for MVP); access updates immediately. _(§ US-011)_
- **BR-REQ-183** — Expiry warning in dashboard 7 days before expiry; renew button; expired users keep basic access but lose gated features; grace period if applicable. _(§ US-012)_
- **BR-REQ-184** — Gated features: contact unlocking, number of listings, featured placement, exclusive access; enforced on backend; restricted features show upgrade prompt. _(§ US-013)_
- **BR-REQ-185** — Admin subscription management: list with status/plan/expiry, filter active/expired/cancelled, manually activate, extend, cancel. _(§ US-058)_
- **BR-REQ-186** — Add property: multi-step (asset class → location → specifications → pricing → media → review); draft save; required-field validation per asset class; created with moderation status "Pending", live only after admin approval; owner sees it with pending badge. _(§ US-014)_ ⚠OVERRIDDEN in part: Oct 2 notifications say "Your listing is now live" on posting (no moderation step stated); Oct 2 bugs mention draft auto-save every 30s (Bugs #9).
- **BR-REQ-187** — Property detail: gallery, location, specs, pricing, owner/agent name only (contact gated), status, enquiry CTA, share link, only approved properties to non-owners. _(§ US-015)_
- **BR-REQ-188** — My Properties shows moderation status (pending, approved, rejected) and listing status (active, closed), rejection reason, quick actions edit/change status/delete. _(§ US-015S)_
- **BR-REQ-189** — Only the owner edits/deletes own listing (admin separately); significant edits may re-trigger moderation (configurable); delete is soft with confirmation; Closed properties hidden from marketplace. _(§ US-016–US-018)_
- **BR-REQ-190** — Demand: asset class → location preferences (multiple) → budget range → area → notes; Pending moderation; detail shows status Open/Fulfilled; owner can mark Fulfilled (hidden from marketplace); soft delete. _(§ US-019–US-023)_
- **BR-REQ-191** — Projects: developer creates project (name, location, description, highlights, images) and links existing properties as units; moderated. _(§ US-024, US-025)_ ⚠OVERRIDDEN: Access Permissions/Oct 2 — projects created only by admin.
- **BR-REQ-192** — Explore properties: paginated cards (image, location, price, asset class), approved + active only, default sort most recent, featured at top, empty and loading states. _(§ US-026)_
- **BR-REQ-193** — Property filters: city, locality, asset class, budget range, area range, property type, availability, furnishing (office), frontage (retail); query-param URLs; result counts; clear all; persist in session. _(§ US-027)_ ⚠Superseded by Oct 2 "New Platform Requirement-Filter" (city, asset class, location mandatory).
- **BR-REQ-194** — Compare 2–5 properties (compare tray max 5, differences highlighted). _(§ US-028)_
- **BR-REQ-195** — Explore/filter demands for developers and agents (approved + open). _(§ US-029, US-030)_ ⚠OVERRIDDEN: Access Permissions — demand exploration is KD team only.
- **BR-REQ-196** — Keyword search across property names, descriptions, locations, project names; grouped results; Atlas Search default ranking in Phase 1 (ML re-ranking Phase 2); only approved listings; city type-ahead and asset-class filters combinable. _(§ US-031–US-034)_
- **BR-REQ-197** — Enquiry: optional message + contact preference (phone/email/WhatsApp); notifies assigned RM and admin team; My Enquiries with Sent/Received tabs, paginated. _(§ US-035–US-037)_
- **BR-REQ-198** — Contact unlock: number hidden by default; "View Contact" checks subscription and plan unlock limit; else upgrade prompt; each unlock logged (Connects). _(§ US-038, US-039)_
- **BR-REQ-199** — Rule-based matching on approval: location overlap, budget in range, area in range, same asset class, same city; simple weighted score; async; "Relevant Properties"/"Relevant Demands" sections (EP-013 commented "Phase 2"). _(§ US-040)_
- **BR-REQ-200** — Role dashboards (EP-014 commented "Phase 2"): Brand (My Demands, Relevant Properties, Connects Received/Viewed, Viewed Properties, Demand Performance, Featured Suggestions); Developer; Agent. _(§ US-041–US-043)_
- **BR-REQ-201** — Featured: dedicated section, badge, ranked higher; Exclusive: badge, section, may require subscription for details; admin toggles both, effective immediately. _(§ US-045, US-046, US-057)_
- **BR-REQ-202** — In-app notifications: bell with unread count; types new enquiry, enquiry status update, demand match, listing approved/rejected, subscription expiry warning; mark-as-read, clear; real-time via SSE. WhatsApp: new enquiry, demand match; opt in/out in profile; rate-limited. _(§ US-047, US-048)_ ⚠Superseded by Oct 2 Notification Final.
- **BR-REQ-203** — Bookmarks for properties and demands stored server-side; Recently Viewed; Report listing (reason + optional details, visible to admin); static Help/FAQ page. _(§ US-049–US-053)_
- **BR-REQ-204** — Admin dashboard: summary cards (total users, active listings, pending approvals, open enquiries, active subscriptions), quick links, recent activity feed. _(§ US-044)_
- **BR-REQ-205** — Admin user management: search, filter by role/status, detail view, edit role, activate/deactivate (paginated). _(§ US-054)_
- **BR-REQ-206** — Moderation: pending → approved/rejected with optional reason; rejected owner notified; approved becomes searchable; queue filter by asset class, type, date. Admin can edit any listing; edits audited. _(§ US-055, US-056)_
- **BR-REQ-207** — Admin analytics: users by role, listings by status, enquiries, subscriptions; daily/weekly/monthly trends; lead quality indicators. _(§ US-059)_
- **BR-REQ-208** — Cross-cutting: shared auth Fastify plugin; ErrorBanner/LoadingSkeleton/EmptyState + global error handler; final colour/spacing/typography tokens; shared structured logger in all services and Lambdas; responsive breakpoints and Grid/Stack/Container. _(§ XC-001–XC-005)_

### Open questions / ambiguities in this doc
- US-002 role options list only "Agent, Managed Offices" — Brand/Occupier/Developer missing.
- US-011 payment integration TBD; US-012 grace period "if applicable".
- US-014/US-019 moderation-before-live is not confirmed by Oct 2 docs.
- Two open comments mark EP-013 (Relevancy) and EP-014 (Dashboards) as "Phase 2", yet the Oct 2 sheet and bugs treat relevancy and dashboards as in Build 2/3.
- US-052 duplicated; all story statuses "Not Started"; branches empty.

---
## Epics  [AUTHORITATIVE — only epic index; same caveat as STORIES]
**Source:** Google Doc · ID `1AvBwlAm-7olxkqe4AwqYKI5hv__adTE-qtsMG64U3is` · owner pradeepa.pv@futuristglobal.com · created 2026-03-10, modified 2026-03-13 · sections read: `_features/COUNTER.json`, links, EP-001…EP-018 (EP-009 appears twice) · comments: none · read coverage: 100%.

### Content
**`_features/COUNTER.json`**: `{ "epic": 18, "story": 59, "xc": 5, "task": 343, "defect": 0 }`

Links: [STORIES](https://docs.google.com/document/d/1mu6LvvT48_YYalvQ1eEEyUOkou4vxiJx9ZYm6vgWIoo/edit?tab=t.0) · [Product Requirements.md](https://docs.google.com/document/d/1cItzZ2AKsqzt3UnOi9RYMs3eaDO2-UxluhGCVwyLUMc/edit?tab=t.0)

Every epic has Owners "SAT (backend), KRI (frontend)" (EP-010 adds "SIT (ML ranking prep for Phase 2)"; EP-013 is "SAT (backend), SIT (Phase 2 prep)") and Status "Not Started"; every listed story is "Not Started".

| Epic | Goal (verbatim) | Priority | Wave(s) | Dependencies | Stories |
|---|---|---|---|---|---|
| EP-001 — Authentication & Access Control | Users can sign up, log in, log out, and verify via OTP. Role-based access gates admin-ui vs end-user-ui. Auth uses the existing v1 auth system via service-bridge. | P0 | 1 | — | US-001 User Login; US-002 User Sign-Up; US-003 OTP Verification; US-004 User Logout; US-005 Role-Based Access Enforcement; XC-001 Auth Middleware Shared Plugin |
| EP-002 — User Profile Management | Users can view and edit their profile, company details, contact info, and see subscription status. | P0 | 1 | — | US-006 View My Profile; US-007 Edit My Profile |
| EP-003 — Asset Class Framework | Define and manage the asset classification system (Retail, Office, F&B, Managed Offices) that underpins all listing and search features. Admin configures; end-user consumes. | P0 | 1 | — | US-008 Asset Class Data Model & Configuration; US-009 Asset Class Selection in UI |
| EP-004 — Subscription & Plan Management (Admin) | Admin creates and manages subscription plans. End-users view and activate plans (see EP-004U). Admin must set up plans before end-users can subscribe. | P0 | 3 | — | US-010A Define Subscription Plans (Admin); US-058 Subscription Management (Admin) |
| EP-004U — Subscription (End-User) | End-users can view plans, activate subscriptions, and manage renewal. Requires admin to have set up plans first (EP-004). | P0 / P1 | 3, 8 | EP-004 (admin must define plans first) | US-010 View Subscription Plans; US-011 Activate Subscription; US-012 Subscription Renewal & Expiry; US-013 Feature Access Based on Plan |
| EP-005 — Property Listing Management | Users can add, edit, view, and delete property listings with full lifecycle management. | P0 | 2 | — | US-014 Add a Property; US-015 View Property Listing (Detail Page); US-015S View My Properties (Self View); US-016 Edit a Property; US-017 Delete a Property; US-018 Property Status Management |
| EP-006 — Demand Listing Management | Users can add, edit, view, and delete demand listings with lifecycle management. | P0 | 2 | — | US-019 Add a Demand; US-020 View Demand Listing (Detail Page); US-020S View My Demands (Self View); US-021 Edit a Demand; US-022 Delete a Demand; US-023 Demand Status Management (Open / Fulfilled) |
| EP-007 — Project Module | Developers can create project listings that group multiple property units under one project with an overview page. | P1 | 7 | — | US-024 Create a Project; US-025 View Project Page (Self and User View) |
| EP-008 — Property Discovery & Marketplace | Users can explore, filter, and discover properties post-login. | P0 / P1 | 3, 8 | EP-018/US-055 (moderation must be active so only approved listings show) | US-026 Explore Properties Listing Page; US-027 Filter Properties; US-028 Compare Properties |
| EP-009 — Demand Discovery & Marketplace *(listed twice, identical)* | Users can explore and filter demands. | P0 | 3 | — | US-029 Explore Demands Listing Page; US-030 Filter Demands |
| EP-010 — Search & Filters | Powerful keyword and structured search across properties, demands, and projects using Atlas Search. | P0 / P1 | 3, 7 | — | US-031 Keyword Search; US-032 City-Based Search; US-033 Asset-Class-Based Search; US-034 Project-Based Search |
| EP-011 — Enquiry System | Users can raise enquiries on properties or demands, with notifications to the Keydemand team. | P0 | 3 | — | US-035 Enquire on a Property (Brand/Buyer); US-036 Enquire on a Demand (Developer/Agent); US-037 View My Enquiries |
| EP-012 — Contact Unlocking | Mobile number visibility is controlled by subscription and permissions. | P0 | 3 | EP-004U (user must have active subscription) | US-038 View Mobile Number (Property); US-039 View Mobile Number (Demand) |
| EP-013 — Relevancy Matching Engine | Properties shown relevant to demands and vice versa. Phase 1 = rule-based; Phase 2 = AI/ML scoring. | P1 | 5 | — | US-040 Rule-Based Property-to-Demand Matching |
| EP-014 — Role-Specific Dashboards (End-User) | Each end-user role has a personalised dashboard showing their key metrics and activity. | P1 | 5 | — | US-041 Brand/Occupier Dashboard; US-042 Developer Dashboard; US-043 Agent Dashboard |
| EP-015 — Discovery Boosters (Featured & Exclusives) | Featured and exclusive listings get boosted visibility. Admin marks them (EP-018/US-057); end-user sees the result. | P1 | 6 | EP-018/US-057 (admin feature/exclusive toggle) | US-045 Featured Properties & Demands; US-046 Exclusive Properties & Demands |
| EP-016 — Notifications & Engagement | Users receive timely notifications about enquiries, matches, and platform activity. | P1 | 6 | — | US-047 In-App Notifications; US-048 WhatsApp Notifications |
| EP-017 — Usability & Utilities | Core usability features that improve day-to-day user experience. | P1 / P2 | 7 | — | US-049 Save / Bookmark Property; US-050 Save / Bookmark Demand; US-051 Recently Viewed; US-052 Report Incorrect Listing; US-053 Help / Support Page |
| EP-018 — Keydemand Admin Console | Keydemand team can manage users, moderate listings, manage featured/exclusive flags, and oversee platform operations. | P0 / P1 | 2, 3, 8 | — | US-044 Keydemand Team Dashboard; US-054 User Management (Admin); US-055 Listing Moderation (Approve / Reject); US-056 Edit Any Listing (Admin); US-057 Feature / Unfeature Listings (Admin); US-058 Subscription Management (Admin); US-059 Analytics Overview (Admin) |

### Business rules extracted
- **BR-REQ-209** — Auth uses the existing v1 auth system via service-bridge. _(§ EP-001)_
- **BR-REQ-210** — Admin must define plans before end-users can subscribe (EP-004 → EP-004U dependency). _(§ EP-004, EP-004U)_
- **BR-REQ-211** — Only approved listings appear in discovery; moderation (US-055) must be active first. _(§ EP-008)_
- **BR-REQ-212** — Contact unlocking requires an active subscription. _(§ EP-012)_
- **BR-REQ-213** — Relevancy is rule-based in Phase 1, AI/ML scoring in Phase 2. _(§ EP-013)_
- **BR-REQ-214** — Delivery waves: 1 (auth, profile, asset class), 2 (property, demand, admin), 3 (subscription, discovery, search, enquiry, contact, admin), 5 (relevancy, dashboards), 6 (boosters, notifications), 7 (projects, search P1, utilities), 8 (renewal, compare, admin P1). _(§ all epics)_

### Open questions / ambiguities in this doc
- EP-009 duplicated; US-044 (KD team dashboard) sits in EP-018 not EP-014; COUNTER says 59 stories / 343 tasks; STORIES task IDs run to TASK-343 (consistent), though a few numbers are skipped.
- EP-007 (developers create projects) and EP-009 (end-users explore demands) contradict later Access Permissions and Oct 2.

---
## Product Requirements  [HISTORY — superseded by Product Requirments (1)-FINAL OCT 2 and Keydemand_PRD_v1 08-04-2026]
**Source:** Google Doc · ID `1cItzZ2AKsqzt3UnOi9RYMs3eaDO2-UxluhGCVwyLUMc` · owner pradeepa.pv@futuristglobal.com · created 2026-03-10, modified 2026-03-19 · inner title "Keydemand Portal v2 — Product Requirements", Version 1.0, Date 2026-03-05, Scope "Phase 1 MVP (8 weeks) + Phase 1.5 Platform Maturity (Weeks 9–12)" · sections read: preamble (workshop notes + links), TOC, §1–§22 · comments: none · read coverage: 100%.

Decision: it is not the same tabular list as the Oct 2 sheet, but it is the older requirements statement for the same V2 platform (the STORIES/Epics backlog was generated from it). Every area it covers is re-specified, and frequently changed, by the later PRD v1 (Apr 2026), Access Permissions (May 2026) and the Oct 2 sheet. Hence HISTORY.

### Differences vs authoritative version
**Exists only in this doc (quoted in full / near-verbatim):**
- Preamble: "Property Taxonomy + Persona Journeys (Architect + Deepa)" — "👤 Workshop: define property taxonomy (categories, types, fields per type) — needed for EP-003 and EP-005"; "👤 Workshop: define minimum viable persona journeys (brand/occupier, developer, agent, managed offices, admin)". "Deepa uses the Claude Team plan chat interface (not Claude Code CLI). Key actions: creating stories and epics, weekly FEATURES.md sync, generating stakeholder updates for Sudhanshu and Himanshu, triaging defects. John uses the same interface to generate manual test cases from story files. All prompts are in claude-automations.md."
- §1 core loop: "a user signs up, lists a property or posts a demand, an admin moderates and approves it, the listing becomes searchable, another user finds it, subscribes if they have not already, enquires about it, and unlocks the contact details to initiate a deal directly." "This is version 2 of the portal, built alongside an existing live version 1. Version 1 remains unchanged throughout… reading certain legacy data from version 1 through a controlled integration layer."
- §3 timeline: Weeks 1–8 MVP (wk1–2 setup, no user features in week one; wk2–3 sign-up/login/profile/asset classes; wk4–5 property & demand CRUD, moderation, user management; wk6–7 marketplace, search, subscribe, enquiries, contact unlock, admin subscriptions & featuring; wk8 stabilisation only). Launch only if all MVP features pass on staging, full journey works, no critical/high defects, search < 2 s, pages < 3 s on 3G. Phase 1.5: wk9 relevancy + dashboards; wk10 featured/exclusive + notifications; wk11 projects, bookmarking, recently viewed, reporting, help; wk12 analytics, renewal, comparison.
- §4: role choices "Brand/Occupier, Developer, Agent, or Managed Offices"; login with **email and password**; token in httpOnly cookie; token validation cached five minutes; automatic renewal.
- §13: admin-defined plans (name, price, duration, feature set: contact unlocks, active listing limit, featured placement, exclusive visibility); renewal banner within 7 days; admin can activate/extend/cancel.
- §14: admin console is a separate app; "All data fetched for the admin console passes through the main API service, not through a direct connection to the admin backend"; summary cards; moderation queue; admin edits logged.
- §17: weighted rule-based matching (location overlap, budget, area, asset class, city), async, ML interface handed to data science for Phase 2.
- §18: Featured section at top + badge + higher ranking; Exclusive "available only through Keydemand", may need subscription.
- §19: notification bell, real-time; WhatsApp for opted-in users on new enquiry and demand match, rate-limited.
- §20: bookmarks, recently viewed, report listing, static help page.
- §21 NFRs: search API < 2 s; pages < 3 s on 3G; httpOnly cookies, never browser storage; backend-enforced access; uploads in cloud object storage; responsive desktop/tablet/mobile; V1 data never modified, V2 writes to separate collections, soft delete; structured logs; contact unlock events logged individually (Connects).
- §22 out of scope: payment gateway (manual/lightweight flow for MVP), ML re-ranking, any V1 change.

**Changed in later docs (old → new):**
- Login: email + password → Mobile number + OTP (STORIES US-001, Access Permissions §1).
- Roles: Brand/Occupier, Developer, Agent, Managed Offices → Agent, Retail Brand, F&B Brand, Office Tenant, Managed Space Occupier, Developer, Managed Space Operator, Enterprise, Keydemand Team (Oct 2, PRD v1).
- Developers list properties and create projects → developers cannot post properties; projects created only by admin (Access Permissions §3, §5; Oct 2 "Developer Projects … backend").
- Managed Offices operators list inventory → Managed Space supply uploaded only from backend by KD admin (Access Permissions §3; Oct 2).
- Demand explore page for developers/agents → front-end demand exploration disabled; KD team only (Access Permissions §6, §8).
- Generic subscription plans with unlock counts → agent-only subscription priced by city tier & asset class (Metro/Non-Metro/ROI/Pan India) with unlimited listings & contact requests; brands/tenants free with 3 / 1 requirement caps (Oct 2 Subscription; Access Permissions §4, §7).
- Contact unlock for any subscriber → agents: 5 free contact requests then paywall; brand demands need owner approval ("Request Contact"), 72-hour expiry (Access Permissions §6; Oct 2 Notification).
- Notification events (5 in-app + 2 WhatsApp) → 27-event matrix with toast/push/WhatsApp/email, daily cap and 6 pm digest (Oct 2 Notification Final).
- Asset classes 4 (Retail, Office, F&B, Managed Offices) → plus Flex (Phase 2) and project asset classes Retail + F&B / Mixed Use / Office / Managed Offices (Oct 2).
- Search over properties, demands, projects → properties and projects only for front-end users (Access Permissions §8).
- Profile phone editable → mobile number not editable (Oct 2 User Profile).

---
## Group-level notes
### Version history
- **Product Requirements (gdoc, v1.0 dated 2026-03-05, modified 2026-03-19)** → generated **Epics** (2026-03-13) and **STORIES** (2026-04-08), the engineering backlog for the V2 portal.
- **Keydemand_PRD_v1 08-04-2026 (.docx, created 2026-04-15, modified 2026-06-23)** — user-journey PRD; body dated "8 April 2025" (year typo). Supersedes the March gdoc on journeys, roles and limits.
- **Access Permissions (2026-05-19/20)** — synthesis of "V1 PRD and Phase 1 Master Document"; adds hard limits (60-day demand expiry, 72-hour contact SLA, 24-hour onboarding, 90-day deactivation).
- **Product Requirments (1)-FINAL OCT 2 (created 2026-10-04, modified 2026-10-10)** — latest; AUTHORITATIVE per user instruction. Inside it, hidden tabs "Property Input Fields (2)/(3)" and "Notification" are older drafts of "Property & Project Input Fields" (dated 17-06-2026) and "Notification Final".
Decision basis: user instruction (Oct 2 authoritative; PRD v1 base) plus modified dates; no "Version N.N" numbering distinguishes these docs.

### Conflicts across docs in this group
- **Login method:** gdoc PRD: email + password; STORIES US-002: password at sign-up; Access Permissions/STORIES US-001: Mobile + OTP. → Mobile + OTP (Access Permissions, aligned with Oct 2).
- **OTP length:** STORIES US-003: 4 digits; Access Permissions: "4 or 6 digits". → Unresolved.
- **Demand exploration:** STORIES/Epics/gdoc PRD: developers & agents explore demands; Access Permissions + Oct 2 (Filter tab "Demand" filters; bugs #203): KD team only. → KD team only.
- **Developers posting:** gdoc PRD/STORIES US-014, US-024: developers add properties and projects; Access Permissions + Oct 2: admin-only projects. → Admin-only (Oct 2).
- **Office tenant demand limit:** PRD v1 §3.3: additional demands via dashboard; Access Permissions + Oct 2 Notification Final #26: 1 requirement total. → 1 (Oct 2).
- **Demand staleness:** Access Permissions: auto-Inactive after 60 days; Oct 2 Notification Final #18 / hidden Notification: 90-day "still available?" prompt. → Oct 2 (90-day prompt); 60-day auto-inactive is unconfirmed.
- **Agent expiry:** PRD v1: deactivated after 3 months of non-renewal; Access Permissions: account and listings permanently deactivated after 90 days; Oct 2 Notification Final #23: listings paused on expiry. → Pause at expiry, deactivate at 90 days (consistent reading, but "permanently" vs PRD "deactivated" needs confirmation).
- **Subscription model:** gdoc/STORIES: admin plans with unlock counts, renewal reminder 7 days before; PRD v1 S6 suggests 7d/3d/1d; Oct 2: city-tier pricing, auto-renew reminder 3 days before. → Oct 2.
- **Moderation before going live:** gdoc/STORIES: Pending → admin approval; Oct 2 notifications: "posted successfully… now live". → Oct 2 wording suggests no pre-moderation; confirm.
- **Contact flow:** PRD v1: number shared via WhatsApp after CTA; STORIES: subscriber unlocks within plan limit; Oct 2: "View Phone Number" (properties, office demands) vs "Request Contact" needing owner approval (retail/F&B brand demands), 72-hour nullification; KD team unlimited. → Oct 2.
- **Managed Office supply:** PRD v1 §4.3: only KD team adds; Oct 2: also Managed Space Operator projects (uploaded by admin from backend). → Oct 2 (still admin-entered).
- **Compare:** PRD v1 suggestion 2–3 properties; STORIES US-028: 2–5 (max 5). → Unresolved (not in Oct 2).
- **Profile mobile number editable:** STORIES US-007 editable phone; Oct 2 User Profile: mobile not editable. → Oct 2.
