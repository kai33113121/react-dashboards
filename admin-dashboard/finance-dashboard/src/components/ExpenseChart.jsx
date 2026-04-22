import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { mes: 'Oct', ingresos: 4200, gastos: 2800 },
  { mes: 'Nov', ingresos: 3800, gastos: 3100 },
  { mes: 'Dic', ingresos: 5100, gastos: 4200 },
  { mes: 'Ene', ingresos: 4600, gastos: 2900 },
  { mes: 'Feb', ingresos: 5300, gastos: 3400 },
  { mes: 'Mar', ingresos: 4900, gastos: 2700 },
  { mes: 'Abr', ingresos: 6200, gastos: 3100 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-[#1e1b2e] border border-white/10 rounded-xl p-3 text-xs font-mono">
        <p className="text-purple-300 mb-2 font-bold">{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.fill }} className="mb-1">
            {p.name}: ${p.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ExpenseChart() {
  return (
    <div className="pop-in bg-[#1a1726] rounded-2xl p-6 border border-white/5" style={{ animationDelay: '150ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-white">Ingresos vs Gastos</h3>
          <p className="text-xs text-slate-400 mt-0.5">Últimos 7 meses</p>
        </div>
        <div className="flex gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-sm bg-violet-500 inline-block" /> Ingresos
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2 h-2 rounded-sm bg-pink-500 inline-block" /> Gastos
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={4} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff06" vertical={false} />
          <XAxis dataKey="mes" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'Space Mono' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff05' }} />
          <Bar dataKey="ingresos" name="Ingresos" fill="#7c3aed" radius={[6, 6, 0, 0]} />
          <Bar dataKey="gastos"   name="Gastos"   fill="#ec4899" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
