import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { mes: 'Oct', ingresos: 31000, gastos: 18000 },
  { mes: 'Nov', ingresos: 28000, gastos: 15000 },
  { mes: 'Dic', ingresos: 42000, gastos: 22000 },
  { mes: 'Ene', ingresos: 38000, gastos: 19000 },
  { mes: 'Feb', ingresos: 45000, gastos: 21000 },
  { mes: 'Mar', ingresos: 52000, gastos: 24000 },
  { mes: 'Abr', ingresos: 61000, gastos: 27000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#1a1a24] border border-white/10 rounded-xl p-3 text-xs font-mono">
        <p className="text-slate-400 mb-2">{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.color }}>
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div className="fade-up bg-[#111118] border border-white/5 rounded-2xl p-6" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-white">Ingresos vs Gastos</h3>
          <p className="text-xs text-slate-500 mt-0.5">Últimos 7 meses</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Ingresos
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-slate-600 inline-block" /> Gastos
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#22c55e" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#475569" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#475569" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
          <XAxis dataKey="mes" tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'Syne' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="ingresos" name="Ingresos" stroke="#22c55e" strokeWidth={2} fill="url(#colorIngresos)" dot={false} />
          <Area type="monotone" dataKey="gastos"   name="Gastos"   stroke="#475569" strokeWidth={2} fill="url(#colorGastos)"   dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
