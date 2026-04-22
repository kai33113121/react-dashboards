const ORDERS = [
  { id: '#ORD-001', cliente: 'Laura Martínez', producto: 'MacBook Pro 14"',  monto: '$2,399', estado: 'Completado',  fecha: '21 Abr' },
  { id: '#ORD-002', cliente: 'Carlos Ruiz',    producto: 'iPad Air',          monto: '$749',   estado: 'En tránsito', fecha: '21 Abr' },
  { id: '#ORD-003', cliente: 'Ana Torres',     producto: 'AirPods Pro',       monto: '$249',   estado: 'Pendiente',   fecha: '20 Abr' },
  { id: '#ORD-004', cliente: 'Diego López',    producto: 'iPhone 15 Pro',     monto: '$1,199', estado: 'Completado',  fecha: '20 Abr' },
  { id: '#ORD-005', cliente: 'María Gómez',    producto: 'Apple Watch S9',    monto: '$399',   estado: 'Cancelado',   fecha: '19 Abr' },
];

const STATUS = {
  'Completado':  'bg-green-500/10 text-green-400 border-green-500/20',
  'En tránsito': 'bg-blue-500/10  text-blue-400  border-blue-500/20',
  'Pendiente':   'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Cancelado':   'bg-red-500/10   text-red-400   border-red-500/20',
};

export default function OrdersTable() {
  return (
    <div className="fade-up bg-[#111118] border border-white/5 rounded-2xl overflow-hidden" style={{ animationDelay: '300ms' }}>
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Pedidos Recientes</h3>
        <button className="text-xs text-green-400 hover:text-green-300 font-medium transition-colors">Ver todos →</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {['ID', 'Cliente', 'Producto', 'Monto', 'Estado', 'Fecha'].map(h => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {ORDERS.map(o => (
              <tr key={o.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-3.5 text-xs font-mono text-slate-400">{o.id}</td>
                <td className="px-6 py-3.5 text-sm text-white font-medium">{o.cliente}</td>
                <td className="px-6 py-3.5 text-sm text-slate-400">{o.producto}</td>
                <td className="px-6 py-3.5 text-sm font-mono text-white">{o.monto}</td>
                <td className="px-6 py-3.5">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS[o.estado]}`}>
                    {o.estado}
                  </span>
                </td>
                <td className="px-6 py-3.5 text-xs text-slate-500">{o.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
