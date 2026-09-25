# Hora Studio

**Professional Vedic Astrology Web Application**

- **Name**: Hora Studio (mandatory everywhere)
- **Theme**: Gradient Burgundy `#2D0808 → #6B1A1A` + Gold `#B8860B → #F5D76E`
- **Target**: Jagannatha Hora depth & accuracy

## Stack

| Layer        | Choice                                      |
|--------------|---------------------------------------------|
| Framework    | Next.js 15 App Router + TypeScript          |
| Styling      | Tailwind (custom burgundy-gold design system)|
| State        | Zustand (persisted recent charts + guest)   |
| Data fetching| TanStack Query ready                        |
| Charts       | Custom SVG North-Indian diamond             |
| Location     | OpenStreetMap Nominatim (villages worldwide)|
| Engine       | `@node-jhora/*` hook + high-quality mock    |
| PWA          | manifest.json ready                         |

## Run

```bash
cd hora-studio
npm install
npm run dev
```

Open http://localhost:3000 → **Generate Kundli**

## What works today

- Full burgundy-gold themed shell (Header, Footer, Hero, Features)
- Birth form: name, gender, DOB, TOB, place autocomplete, lat/lon/tz override, ayanamsa & house system
- Geocoding API (Nominatim) — supports small places worldwide
- Calculation API returning complete ChartResult contract
- North Indian diamond chart with planet glyphs
- Planets table + Panchanga cards
- All 16 Vargas tab (D1–D60) with switcher
- Vimshottari Dasha table (Mahadasha + current highlight)
- Shadbala breakdown + Sarvashtakavarga
- Yogas list
- Special points (Arudha + Chara Karakas)
- Guest mode + local persistence of recent charts
- PWA manifest

## Production engine switch

In `src/lib/ephemeris.ts` the real path is already prepared:

```ts
const { NodeJHora } = await import("@node-jhora/core");
const chart = await NodeJHora.calculate(dt, { latitude, longitude }, "Lahiri");
```

Install when network allows:

```bash
npm install @node-jhora/core @node-jhora/analytics @node-jhora/prediction @node-jhora/match
```

## Next recommended steps

1. Wire real Swiss Ephemeris via node-jhora
2. Auth.js (Google + email + guest sessions)
3. PostgreSQL (Prisma) for saved charts & profiles
4. PDF report generation
5. Marriage matching full UI
6. Transits / Muhurta modules
7. AI assistant (chart-context)

© Hora Studio
