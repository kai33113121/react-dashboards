import { TrendingUp, TrendingDown } from 'lucide-react';

export default function KpiCard({ icon: Icon, label, value, change, positive, color, delay = 0 }) {
  return (
    <div
      className="count-up bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 hover:-translate-y-0.5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <Icon size={18} />
        </div>
        <span className={`flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
          {positive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400 font-medium mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}
