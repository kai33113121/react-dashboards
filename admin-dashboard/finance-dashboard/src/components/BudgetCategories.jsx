const CATS = [
  { label: 'Hogar',      gasto: 850,  limite: 900,  color: 'bg-blue-500'    },
  { label: 'Comida',     gasto: 320,  limite: 400,  color: 'bg-amber-500'   },
  { label: 'Transporte', gasto: 180,  limite: 200,  color: 'bg-cyan-500'    },
  { label: 'Compras',    gasto: 430,  limite: 300,  color: 'bg-orange-500'  },
  { label: 'Ocio',       gasto: 120,  limite: 200,  color: 'bg-purple-500'  },
];

export default function BudgetCategories() {
  return (
    <div className="pop-in bg-[#1a1726] rounded-2xl p-6 border border-white/5" style={{ animationDelay: '100ms' }}>
      <h3 className="font-bold text-white mb-5">Presupuesto por Categoría</h3>
      <div className="space-y-4">
        {CATS.map(c => {
          const pct = Math.min((c.gasto / c.limite) * 100, 100);
          const over = c.gasto > c.limite;
          return (
            <div key={c.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-300">{c.label}</span>
                <span className={`text-xs font-mono font-bold ${over ? 'text-red-400' : 'text-slate-400'}`}>
                  ${c.gasto} / ${c.limite}
                </span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${over ? 'bg-red-500' : c.color}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
