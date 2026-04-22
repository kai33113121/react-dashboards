import { UserPlus, ShoppingCart, AlertCircle, CheckCircle } from 'lucide-react';

const EVENTS = [
  { icon: UserPlus,     color: 'text-green-400 bg-green-500/10', msg: 'Nuevo usuario registrado',      time: 'hace 2 min' },
  { icon: ShoppingCart, color: 'text-blue-400  bg-blue-500/10',  msg: 'Pedido #ORD-006 creado',        time: 'hace 8 min' },
  { icon: CheckCircle,  color: 'text-green-400 bg-green-500/10', msg: 'Pago confirmado — $2,399',      time: 'hace 15 min' },
  { icon: AlertCircle,  color: 'text-yellow-400 bg-yellow-500/10', msg: 'Stock bajo: AirPods Pro',     time: 'hace 32 min' },
  { icon: CheckCircle,  color: 'text-green-400 bg-green-500/10', msg: 'Servidor API — uptime 99.9%',  time: 'hace 1 h' },
];

export default function ActivityFeed() {
  return (
    <div className="fade-up bg-[#111118] border border-white/5 rounded-2xl p-6" style={{ animationDelay: '250ms' }}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">Actividad en Tiempo Real</h3>
        <span className="flex items-center gap-1.5 text-xs text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot inline-block" />
          Live
        </span>
      </div>
      <div className="space-y-4">
        {EVENTS.map((e, i) => (
          <div key={i} className="flex items-start gap-3 group">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${e.color}`}>
              <e.icon size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{e.msg}</p>
              <p className="text-xs text-slate-600 mt-0.5 font-mono">{e.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
