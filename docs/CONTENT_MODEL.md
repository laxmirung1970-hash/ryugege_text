# Content Model and Current Product Data

This document records the content that is currently implemented. It is not a substitute for owner approval when changing prices, claims, names or itineraries.

## Home page data

Source: `src/app/ryugege/home-data.ts`

### Hero slides

1. Canton Fair / Factory — work fairs and factories
2. Sourcing Market — wholesale-market exploration
3. Interpretation — business interpreter support
4. Private Tour / Leisure — non-business private travel

All four use responsive image variants from `media.ts`.

### Recommended trips

| City key | Thai display | Type | Price | Link behavior |
| --- | --- | --- | --- | --- |
| Guangzhou | กวางโจว / Canton Fair + โรงงาน | Business | Custom | Under Construction route |
| Xi'an | ซีอาน / วัฒนธรรมและประวัติศาสตร์ | Premium Leisure | ฿20,900 | Xi'an detail page |
| Yunnan | ยูนนาน / Business + Leisure | Hybrid | Custom | Under Construction route |
| Chaozhou | แต้จิ๋ว / Chaozhou | Culture | Custom | Under Construction route |
| Private Tour | ออกแบบทัวร์ท่องเที่ยวส่วนตัว | Leisure | Custom | LINE |
| Business Tour | ออกแบบทัวร์ธุรกิจ | Business | Custom | LINE |

When a destination changes, check all of the following:

- `tripCards`
- `featuredTripOrder`
- header navigation
- marquee words
- inquiry `targetCities` / `tripTypes`
- footer service areas
- JSON-LD `areaServed`
- route metadata and detail page

### Services

The five service cards are Plan, Go, Talk, Move and Follow:

- trip planning
- fair/factory/supplier visit
- business interpretation
- transport/accommodation coordination
- post-trip supplier follow-up

### Clips

Four TikTok records are present with owner-supplied links and local thumbnails:

- business interpretation and import cost
- Guangzhou clothing import
- direct supplier visit
- Kunming South Asia Expo

### Testimonials

Three named testimonials are rendered:

- Weerayuth Mitsaman (คุณลิฟต์) — Kunming South Asia Expo 2026
- Watcharakorn Srikerdkruen (คุณกร) — Kunming South Asia Expo 2026
- Minchisa Yingcharoenchanarat (คุณนิ) — Guangzhou clothing market

Do not edit spellings or claims without owner confirmation.

### Founder facts currently shown

- Two master's degrees: aviation engineering at Northwestern Polytechnical University, Xi'an; social media technology at Rangsit University
- Lived/studied in China for more than 5 years
- More than 10 years of China coordination experience
- Native-level Chinese communication and understanding of Guanxi
- Chinese–Thai–English interpretation experience
- Founder-led quality control

## Inquiry form

Sources: `InquiryForm.tsx`, `constants.ts`

The form captures contact details and trip brief, validates required data, then opens LINE with an encoded summary. It does not persist or send data to a server.

Current option groups:

- trip type
- target city
- budget range

Keep the visible options synchronized with actual products.

## Xi'an detail page

Sources: `xian/page.tsx`, `xian/xian-page-data.ts`, `xian/highlight-data.ts`

### Product promise

- 5 days / 4 nights
- private vehicle
- Thai–Chinese language and coordination support
- accepts groups from 2 customers upward
- private group, not joined with strangers

### Vehicle mapping

The badge is the number of **customers**. A guide travels with every group.

| Customers | Vehicle shown |
| --- | --- |
| 2 | 5-seat car |
| 4 | 9-seat van |
| 6 | 14-seat minibus |
| 8–10 | 19-seat coach |

Example: 2 customers + 1 guide means the vehicle must carry at least 3 people plus luggage.

### Itinerary

| Day | Main route | Hotel | Meals B/L/D |
| --- | --- | --- | --- |
| 1 | Arrive Xi'an, hotel rest | Tang West Market | no/no/no |
| 2 | Terracotta Army, Huaqing Palace, Datang Xishi night market | Tang West Market | yes/yes/yes |
| 3 | Wing Chun, Chang'an 12 Hours, Bell and Drum Towers | Tang West Market | yes/yes/yes |
| 4 | Xi'an ski, Da Ci'en Temple and Joy City, Grand Tang Mall | Tang West Market | yes/yes/yes |
| 5 | City God Temple, Muslim Quarter, onsen/spa, departure | — | yes/yes/no |

### Highlights

1. The Royal Entourage
2. The Emperor's Legacy
3. Reign of the Tang Dynasty
4. The Martial Arts Master
5. The Imperial Winter
6. The Golden Era
7. The Royal Banquet
8. The Emperor's Retreat
9. Uncompromised Prestige

The explorer uses hash-addressable cards such as `#xian-highlight-04` and opens a modal/drawer. Preserve these anchors when refactoring.

The Wing Chun copy names อาจารย์จางกั๋วเวย (张国威) and states direct lineage from Ip Man. Treat this as owner-approved copy; do not expand the claim without evidence.

### Rate table

Prices are per person and exclude airfare.

| Group | Vehicle | Adult | Child 2–12 | Single supplement |
| --- | --- | --- | --- | --- |
| 3–4 | 7-seat | ฿28,900 | ฿28,900 | +฿5,000 |
| 5–7 | 14-seat | ฿25,900 | ฿25,900 | +฿5,000 |
| 8–10 | 19-seat | ฿22,900 | ฿22,900 | +฿5,000 |
| 10+ | 19-seat or larger | ฿20,900 | ฿20,900 | +฿5,000 |

The site accepts inquiries from 2 customers, but no fixed 2-person rate is defined. Never infer one from the table.

### Included

- private vehicle and driver
- Ryu Gege language/coordination support
- 4 hotel nights at Xi'an Datang West Market Hotel
- admission according to the program
- route and entry-queue planning

### Excluded

- round-trip airfare
- China visa if required
- personal spending and shopping
- optional spa, ski, Hanfu rental and private photographer
- some meals outside the program

### Customer gallery

Nine local WebP photographs are rendered after the rate section. Alt text identifies the moment/place. The page states that they are real participant photos published with permission.

## Under Construction destinations

Chaozhou, Guangzhou and Yunnan route pages provide:

- route-specific metadata
- local destination background image
- shared muted looping video and poster
- a back link to the main landing page

Do not replace an Under Construction page with a product detail page until itinerary, price, inclusions, exclusions and owner-approved media are available.
