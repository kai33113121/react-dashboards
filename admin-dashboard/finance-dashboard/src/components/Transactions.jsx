import { ShoppingBag, Zap, Home, Coffee, Gamepad2, Car } from 'lucide-react';

const TX = [
  { icon: Home,        label: 'Arriendo',        cat: 'Hogar',      monto: '-$850.00',  positivo: false, fecha: 'Hoy' },
  { icon: Zap,         label: 'Freelance API',   cat: 'Ingreso',    monto: '+$1,200.00', positivo: true,  fecha: 'Hoy' },
  { icon: ShoppingBag, label: 'Mercado Libre',   cat: 'Compras',    monto: '-$124.50',  positivo: false, fecha: 'Ayer' },
  { icon: Coffee,      label: 'Juan Valdez',     cat: 'Comida',     monto: '-$18.00',   positivo: false, fecha: 'Ayer' },
  { icon: Car,         label: 'Uber',            cat: 'Transporte', monto: '-$32.00',   positivo: false, fecha: '20 Abr' },
  { icon: Gamepad2,    label: 'Steam',           cat: 'Ocio',       monto: '-$59.99',   positivo: false, fecha: '19 Abr' },
];

const ICON_COLOR = {
  Hogar: 'bg-blue-500/15 text-blue-400',
  Ingreso: 'bg-emerald-500/15 text-emerald-400',
  Compras: 'bg-orange-500/15 text-orange-400',
  Comida: 'bg-amber-500/15 text-amber-400',
  Transporte: 'bg-cyan-500/15 text-cyan-400',
  Ocio: 'bg-purple-500/15 text-purple-400',
};

export default function Transactions() {
  return (
    <div className="pop-in bg-[#1a1726] rounded-2xl border border-white/5" style={{ animationDelay: '200ms' }}>
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="font-bold text-white">Movimientos Recientes</h3>
        <button className="text-xs text-violet-400 hover:text-violet-300 font-medium transition-colors">Ver todos →</button>
      </div>
      <div className="divide-y divide-white/5">
        {TX.map((t, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.02] transition-colors">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${ICON_COLOR[t.cat]}`}>
              <t.icon size={15} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">{t.label}</p>
              <p className="text-xs text-slate-500">{t.cat} · {t.fecha}</p>
            </div>
            <span className={`text-sm font-mono font-bold ${t.positivo ? 'text-emerald-400' : 'text-slate-300'}`}>
              {t.monto}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
