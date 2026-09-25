import type { Metadata, Viewport } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { RegisterSW } from "@/components/RegisterSW";
const inter=Inter({subsets:["latin"],variable:"--font-inter",display:"swap"});
const cinzel=Cinzel({subsets:["latin"],variable:"--font-cinzel",display:"swap"});
export const metadata:Metadata={title:{default:"Hora Studio — Professional Vedic Astrology",template:"%s | Hora Studio"},description:"Production-grade Vedic astrology software for practicing astrologers. Precise calculations, all 16 Vargas, multi-level Dashas, Shadbala, Ashtakavarga, Yogas, Matching & more.",keywords:["Vedic Astrology","Kundli","Horoscope","Jagannatha Hora","Vimshottari Dasha","Navamsa","Shadbala","Ashtakavarga","Marriage Matching"],authors:[{name:"Hora Studio"}],manifest:"/manifest.json",appleWebApp:{capable:true,statusBarStyle:"black-translucent",title:"Hora Studio"},openGraph:{title:"Hora Studio — Professional Vedic Astrology",description:"Precision calculations for serious astrologers.",type:"website",siteName:"Hora Studio"}};
export const viewport:Viewport={themeColor:"#2D0808",width:"device-width",initialScale:1,maximumScale:1};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${inter.variable} ${cinzel.variable}`}><head><link rel="icon" href="/favicon.ico" sizes="any"/><link rel="apple-touch-icon" href="/icons/icon-192.png"/><meta name="mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-capable" content="yes"/></head><body className="font-sans antialiased"><Providers>{children}<RegisterSW/></Providers></body></html>}