import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ icon: Icon, label, value, change, positive, delay = 0 }) {
  return (
    <div
      className="fade-up bg-[#111118] border border-white/5 rounded-2xl p-5 flex flex-col gap-4 hover:border-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          <Icon size={18} className="text-green-400" />
        </div>
        <span className={`flex items-center gap-1 text-xs font-mono font-medium px-2 py-1 rounded-full
          ${positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {change}
        </span>
      </div>
      <div>
        <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
        <p className="text-xs text-slate-500 mt-0.5 font-medium uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}
