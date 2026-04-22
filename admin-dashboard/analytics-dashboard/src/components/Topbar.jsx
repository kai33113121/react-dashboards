import { Search, Bell, Globe } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
          <Globe size={15} className="text-white" />
        </div>
        <span className="font-bold text-slate-900 text-lg tracking-tight">Analytica</span>
        <span className="ml-2 text-xs bg-violet-100 text-violet-600 font-semibold px-2 py-0.5 rounded-full">Beta</span>
      </div>
      <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-4 py-2 w-72">
        <Search size={14} className="text-slate-400" />
        <input className="bg-transparent text-sm text-slate-600 placeholder:text-slate-400 outline-none w-full" placeholder="Buscar métricas..." />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
          <Bell size={16} className="text-slate-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xs">AV</div>
          <span className="text-sm font-semibold text-slate-700">Angel V.</span>
        </div>
      </div>
    </header>
  );
}
