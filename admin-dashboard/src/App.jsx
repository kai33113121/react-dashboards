import { DollarSign, Users, ShoppingCart, Activity } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import RevenueChart from './components/RevenueChart';
import OrdersTable from './components/OrdersTable';
import ActivityFeed from './components/ActivityFeed';
import './index.css';

const STATS = [
  { icon: DollarSign,   label: 'Ingresos Totales',  value: '$61,240', change: '+12.5%', positive: true,  delay: 0   },
  { icon: Users,        label: 'Usuarios Activos',   value: '3,842',   change: '+8.1%',  positive: true,  delay: 50  },
  { icon: ShoppingCart, label: 'Pedidos del Mes',    value: '284',     change: '-2.4%',  positive: false, delay: 100 },
  { icon: Activity,     label: 'Tasa de Conversión', value: '7.3%',    change: '+1.2%',  positive: true,  delay: 150 },
];

export default function App() {
  const now = new Date().toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 overflow-auto">
        <div className="fade-up flex items-start justify-between mb-8">
          <div>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-1">{now}</p>
            <h1 className="text-2xl font-bold text-white">Panel de Control</h1>
          </div>
          <div className="flex items-center gap-2 bg-[#111118] border border-white/5 px-4 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
            <span className="text-xs text-slate-400 font-mono">Sistema operativo</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {STATS.map(s => <StatCard key={s.label} {...s} />)}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2"><RevenueChart /></div>
          <ActivityFeed />
        </div>
        <OrdersTable />
      </main>
    </div>
  );
}
