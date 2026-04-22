import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { dia: 'Lun', organico: 4200, directo: 2100, referido: 900 },
  { dia: 'Mar', organico: 5800, directo: 2400, referido: 1200 },
  { dia: 'Mie', organico: 5100, directo: 3100, referido: 800 },
  { dia: 'Jue', organico: 7200, directo: 2800, referido: 1500 },
  { dia: 'Vie', organico: 6800, directo: 3600, referido: 1100 },
  { dia: 'Sab', organico: 3900, directo: 1900, referido: 700 },
  { dia: 'Dom', organico: 3200, directo: 1600, referido: 600 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-slate-100 shadow-xl rounded-2xl p-4 text-xs font-mono">
        <p className="font-semibold text-slate-700 mb-2">{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.color }} className="mb-1">
            {p.name}: <span className="font-bold">{p.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TrafficChart() {
  return (
    <div className="count-up bg-white rounded-2xl p-6 border border-slate-100" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-slate-900">Tráfico por Fuente</h3>
          <p className="text-xs text-slate-400 mt-0.5">Últimos 7 días</p>
        </div>
        <select className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none">
          <option>Esta semana</option>
          <option>Mes anterior</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <LineChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="dia" tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Plus Jakarta Sans' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Fira Code' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', paddingTop: '16px' }} />
          <Line type="monotone" dataKey="organico"  name="Orgánico"  stroke="#7c3aed" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="directo"   name="Directo"   stroke="#06b6d4" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="referido"  name="Referido"  stroke="#f59e0b" strokeWidth={2.5} dot={false} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
