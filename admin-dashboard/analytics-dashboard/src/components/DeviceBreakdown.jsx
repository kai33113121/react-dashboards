import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

const data = [
  { name: 'Desktop',  value: 54, color: '#7c3aed', icon: Monitor    },
  { name: 'Mobile',   value: 38, color: '#06b6d4', icon: Smartphone  },
  { name: 'Tablet',   value: 8,  color: '#f59e0b', icon: Tablet      },
];

export default function DeviceBreakdown() {
  return (
    <div className="count-up bg-white rounded-2xl p-6 border border-slate-100" style={{ animationDelay: '250ms' }}>
      <h3 className="font-bold text-slate-900 mb-1">Dispositivos</h3>
      <p className="text-xs text-slate-400 mb-4">Distribución de sesiones</p>
      <ResponsiveContainer width="100%" height={140}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={45} outerRadius={65} paddingAngle={3} dataKey="value">
            {data.map((d, i) => <Cell key={i} fill={d.color} />)}
          </Pie>
          <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '12px', border: '1px solid #f1f5f9', fontSize: '12px' }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-2">
        {data.map(d => (
          <div key={d.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
              <span className="text-xs text-slate-600 font-medium">{d.name}</span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-800">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
