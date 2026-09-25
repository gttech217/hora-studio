export const SIGNS=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"] as const;
export const SIGNS_SHORT=["Ar","Ta","Ge","Cn","Le","Vi","Li","Sc","Sg","Cp","Aq","Pi"];
export const NAKSHATRAS=["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha","Shravana","Dhanishta","Shatabhisha","Purva Bhadrapada","Uttara Bhadrapada","Revati"] as const;
export const NAKSHATRA_LORDS=["Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury","Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury","Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury"] as const;
export const VIMSHOTTARI_YEARS:Record<string,number>={Ketu:7,Venus:20,Sun:6,Moon:10,Mars:7,Rahu:18,Jupiter:16,Saturn:19,Mercury:17};
export const VIMSHOTTARI_ORDER=["Ketu","Venus","Sun","Moon","Mars","Rahu","Jupiter","Saturn","Mercury"];
export const YOGINI_LORDS=["Mangala","Pingala","Dhanya","Bhramari","Bhadrika","Ulka","Siddha","Sankata"]; export const YOGINI_YEARS=[1,2,3,4,5,6,7,8];
export const PLANET_IDS=["Su","Mo","Ma","Me","Ju","Ve","Sa","Ra","Ke"] as const;
export const PLANET_NAMES:Record<string,string>={Su:"Sun",Mo:"Moon",Ma:"Mars",Me:"Mercury",Ju:"Jupiter",Ve:"Venus",Sa:"Saturn",Ra:"Rahu",Ke:"Ketu"};