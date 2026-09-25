import { NextRequest, NextResponse } from "next/server";

/**
 * Hybrid geocoding proxy.
 * Primary: OpenStreetMap Nominatim (free, excellent village coverage worldwide)
 * Always returns hierarchy + lat/lon. Timezone is approximated or looked up.
 *
 * Production recommendations:
 * - Add GeoNames / Google Places as fallback
 * - Cache results in Redis
 * - Respect Nominatim usage policy (User-Agent, rate limits)
 */

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.length < 2) return NextResponse.json({ results: [] });
  try {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", q); url.searchParams.set("format", "json");
    url.searchParams.set("addressdetails", "1"); url.searchParams.set("limit", "8");
    const res = await fetch(url.toString(), {headers:{"User-Agent":"HoraStudio/1.0 (professional-vedic-astrology)","Accept":"application/json"},next:{revalidate:86400}});
    if (!res.ok) return NextResponse.json({results:[]});
    const data=await res.json();
    const results=(data||[]).map((item:any)=>{
      const addr=item.address||{}; const parts=[addr.village||addr.hamlet||addr.suburb||addr.town||addr.city,addr.county||addr.state_district||addr.district,addr.state,addr.country].filter(Boolean);
      const lon=parseFloat(item.lon); const offsetHours=Math.round(lon/15);
      const tzGuess=offsetHours===5||offsetHours===6?"Asia/Kolkata":`Etc/GMT${offsetHours>=0?"-":"+"}${Math.abs(offsetHours)}`;
      return {name:parts[0]||item.display_name.split(",")[0],display:parts.join(" → ")||item.display_name,lat:parseFloat(item.lat),lon,timezone:tzGuess};
    });
    return NextResponse.json({results});
  } catch(e){console.error("Geocode error",e);return NextResponse.json({results:[]});}
}
