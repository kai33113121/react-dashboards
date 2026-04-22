const PAGES = [
  { path: '/inicio',          visitas: 12840, rebote: '32%', tiempo: '3m 12s', trend: true  },
  { path: '/productos',       visitas: 9410,  rebote: '41%', tiempo: '2m 48s', trend: true  },
  { path: '/blog/api-rest',   visitas: 7230,  rebote: '28%', tiempo: '4m 01s', trend: true  },
  { path: '/contacto',        visitas: 4180,  rebote: '55%', tiempo: '1m 22s', trend: false },
  { path: '/precios',         visitas: 3960,  rebote: '38%', tiempo: '2m 55s', trend: true  },
];

export default function TopPages() {
  return (
    <div className="count-up bg-white rounded-2xl border border-slate-100 overflow-hidden" style={{ animationDelay: '300ms' }}>
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-900">Páginas más visitadas</h3>
        <span className="text-xs text-slate-400 font-mono">Esta semana</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-50">
            {['Ruta', 'Visitas', 'Rebote', 'Tiempo medio'].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {PAGES.map((p, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-3.5 font-mono text-xs text-violet-600 font-medium">{p.path}</td>
              <td className="px-6 py-3.5 text-sm font-bold text-slate-800">{p.visitas.toLocaleString()}</td>
              <td className="px-6 py-3.5 text-sm text-slate-500">{p.rebote}</td>
              <td className="px-6 py-3.5 text-sm font-mono text-slate-500">{p.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
