import { Globe, Eye, Clock, MousePointer } from 'lucide-react';
import Topbar from './components/Topbar';
import KpiCard from './components/KpiCard';
import TrafficChart from './components/TrafficChart';
import TopPages from './components/TopPages';
import DeviceBreakdown from './components/DeviceBreakdown';
import './index.css';

const KPIS = [
  { icon: Eye,          label: 'Visitas Totales',    value: '124,832', change: '+18.3%', positive: true,  color: 'bg-violet-100 text-violet-600', delay: 0   },
  { icon: Globe,        label: 'Usuarios Únicos',    value: '38,471',  change: '+11.7%', positive: true,  color: 'bg-cyan-100 text-cyan-600',     delay: 60  },
  { icon: Clock,        label: 'Tiempo Promedio',    value: '3m 24s',  change: '+5.2%',  positive: true,  color: 'bg-amber-100 text-amber-600',   delay: 120 },
  { icon: MousePointer, label: 'Tasa de Rebote',     value: '38.4%',   change: '-2.1%',  positive: true,  color: 'bg-emerald-100 text-emerald-600', delay: 180 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Topbar />
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Analítica Web</h1>
          <p className="text-sm text-slate-400 mt-1">Métricas en tiempo real — abril 2026</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {KPIS.map(k => <KpiCard key={k.label} {...k} />)}
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2"><TrafficChart /></div>
          <DeviceBreakdown />
        </div>
        <TopPages />
      </main>
    </div>
  );
}
