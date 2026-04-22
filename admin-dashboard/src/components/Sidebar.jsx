import { LayoutDashboard, Users, ShoppingCart, BarChart2, Settings, Bell, LogOut, Zap } from 'lucide-react';

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users,           label: 'Usuarios' },
  { icon: ShoppingCart,    label: 'Pedidos' },
  { icon: BarChart2,       label: 'Analítica' },
  { icon: Bell,            label: 'Alertas',  badge: 3 },
  { icon: Settings,        label: 'Ajustes' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#111118] border-r border-white/5 flex flex-col z-20">
      {/* Logo */}
      <div className="px-6 py-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center live-dot">
          <Zap size={16} className="text-black" />
        </div>
        <span className="font-bold text-lg tracking-tight text-white">AdminPanel</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV.map(({ icon: Icon, label, active, badge }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
              ${active
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
          >
            <Icon size={17} className={active ? 'text-green-400' : 'text-slate-500 group-hover:text-white transition-colors'} />
            <span className="flex-1 text-left">{label}</span>
            {badge && (
              <span className="w-5 h-5 rounded-full bg-green-500 text-black text-xs font-bold flex items-center justify-center">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="px-3 pb-6 border-t border-white/5 pt-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-sm">
            AV
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Angel Vanegas</p>
            <p className="text-xs text-slate-500 truncate">Dev Backend Jr.</p>
          </div>
          <LogOut size={15} className="text-slate-600 group-hover:text-red-400 transition-colors" />
        </div>
      </div>
    </aside>
  );
}
