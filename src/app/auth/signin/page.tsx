"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useHoraStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [loading,setLoading]=useState(false);
  const setGuestMode=useHoraStore(s=>s.setGuestMode); const router=useRouter();
  async function handleEmail(e:React.FormEvent){e.preventDefault();setLoading(true);await new Promise(r=>setTimeout(r,600));setGuestMode(false);setLoading(false);router.push("/chart");}
  function handleGoogle(){setGuestMode(false);router.push("/chart");}
  function handleGuest(){setGuestMode(true);router.push("/chart");}
  return <div className="min-h-screen flex flex-col"><Header/><main className="flex-1 flex items-center justify-center px-4 py-16"><div className="card-hora w-full max-w-md p-8 space-y-6">
    <div className="text-center"><h1 className="font-display text-2xl text-gold-300 mb-1">Sign in to Hora Studio</h1><p className="text-sm text-cream/60">Save charts, create profiles, access full history</p></div>
    <button onClick={handleGoogle} className="w-full btn-outline-gold flex items-center justify-center gap-2 py-3">Continue with Google</button>
    <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gold-700/40"/></div><div className="relative flex justify-center text-xs"><span className="bg-burgundy-900 px-3 text-gold-700">or</span></div></div>
    <form onSubmit={handleEmail} className="space-y-4"><div><label className="block text-sm text-gold-500 mb-1">Email</label><input type="email" className="input-hora w-full" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com"/></div><div><label className="block text-sm text-gold-500 mb-1">Password</label><input type="password" className="input-hora w-full" value={password} onChange={e=>setPassword(e.target.value)} required placeholder="••••••••"/></div><button type="submit" className="btn-gold w-full py-3" disabled={loading}>{loading?"Signing in…":"Sign in with Email"}</button></form>
    <button onClick={handleGuest} className="w-full text-sm text-gold-500 hover:text-gold-300 transition">Continue as Guest →</button>
    <p className="text-xs text-center text-cream/40">Auth.js / NextAuth ready. Replace stubs with real providers.</p>
  </div></main><Footer/></div>;
}
