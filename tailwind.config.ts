import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { burgundy:{950:"#2D0808",900:"#4A0E0E",800:"#6B1A1A",700:"#8B2424",600:"#A52F2F"}, gold:{700:"#B8860B",500:"#D4AF37",300:"#F5D76E",200:"#F8E7A0",100:"#FDF6E3"}, cream:"#FDF6E3" },
    backgroundImage: {"burgundy-gradient":"linear-gradient(135deg,#2D0808 0%,#4A0E0E 50%,#6B1A1A 100%)","gold-gradient":"linear-gradient(135deg,#B8860B 0%,#D4AF37 50%,#F5D76E 100%)","card-burgundy":"linear-gradient(145deg,#3A0C0C 0%,#4A0E0E 100%)"},
    fontFamily:{sans:["var(--font-inter)","system-ui","sans-serif"],display:["var(--font-cinzel)","serif"]},
    borderColor:{gold:"#D4AF37"}, boxShadow:{gold:"0 0 0 1px #D4AF37,0 4px 20px rgba(212,175,55,.15)","gold-sm":"0 0 0 1px #B8860B"}
  }}, plugins:[]
};
export default config;