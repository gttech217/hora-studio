import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChartWorkspace } from "@/components/chart/ChartWorkspace";
export const metadata={title:"Generate Kundli"};
export default function ChartPage(){return <div className="min-h-screen flex flex-col"><Header/><main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8"><h1 className="font-display text-2xl md:text-3xl text-gold-300 mb-6">Birth Chart / Kundli</h1><ChartWorkspace/></main><Footer/></div>}
